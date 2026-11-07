// Ballpark orientation from OpenStreetMap baseball pitch polygons.
//
// For each ballpark, read a small bounding box from the OSM API (one request
// per park, cached), take the largest way tagged leisure=pitch + sport=baseball
// inside the venue footprint, and find home plate as the polygon vertex where
// the foul lines meet (sharpest interior angle). Center field is the farthest
// point of the pitch from home plate. Output: research/raw/stadiums/ballpark-orientation.json
// with bearing (degrees from north) and the OSM way URL.
// OSM data © OpenStreetMap contributors, ODbL 1.0.
//
// Usage: node scripts/stadiums/art/fetch-ballpark-orientation.mjs
import fs from 'node:fs'
import path from 'node:path'
import { UA } from '../lib/wiki.mjs'

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const art = JSON.parse(fs.readFileSync('data/stadium-art.json', 'utf8')).venues
const OUT = 'research/raw/stadiums/ballpark-orientation.json'
const CACHE = 'research/raw/stadiums/osm-ballparks'
fs.mkdirSync(CACHE, { recursive: true })
const prev = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function parseOsm(xml) {
  const nodes = new Map()
  for (const m of xml.matchAll(/<node id="(\d+)"[^>]*lat="([-\d.]+)" lon="([-\d.]+)"/g)) nodes.set(m[1], [Number(m[3]), Number(m[2])])
  const ways = []
  for (const m of xml.matchAll(/<way id="(\d+)"[^>]*>([\s\S]*?)<\/way>/g)) {
    const tags = Object.fromEntries([...m[2].matchAll(/<tag k="([^"]+)" v="([^"]*)"/g)].map((t) => [t[1], t[2]]))
    const pts = [...m[2].matchAll(/<nd ref="(\d+)"/g)].map((n) => nodes.get(n[1])).filter(Boolean)
    ways.push({ id: m[1], tags, pts })
  }
  return ways
}
const local = (pts, lat0) => pts.map(([lng, lat]) => [lng * 111320 * Math.cos((lat0 * Math.PI) / 180), lat * 110540])
function area(p) { let a = 0; for (let i = 0, j = p.length - 1; i < p.length; j = i++) a += p[j][0] * p[i][1] - p[i][0] * p[j][1]; return Math.abs(a / 2) }

// Douglas-Peucker simplification (meters) so collinear nodes along a foul line merge.
function simplify(p, tol) {
  if (p.length < 3) return p
  const [a, b] = [p[0], p.at(-1)]
  let max = 0, idx = 0
  for (let i = 1; i < p.length - 1; i++) {
    const d = Math.abs((b[1] - a[1]) * p[i][0] - (b[0] - a[0]) * p[i][1] + b[0] * a[1] - b[1] * a[0]) / (Math.hypot(b[0] - a[0], b[1] - a[1]) || 1)
    if (d > max) { max = d; idx = i }
  }
  if (max <= tol) return [a, b]
  return [...simplify(p.slice(0, idx + 1), tol).slice(0, -1), ...simplify(p.slice(idx), tol)]
}
// A full playing field (fair and foul territory) is fan-shaped: narrow at the
// backstop behind home plate, wide at the outfield wall. Try axis directions
// every 5 degrees; for each, compare the field's width near one end with the
// other end. Center field points toward the wide end of the axis with the
// largest width ratio. Shapes that are not clearly fan-shaped return null.
function homeAndCf(ptsLL, center) {
  const lat0 = center.lat
  let p = local(ptsLL, lat0)
  if (p.length > 1 && p[0][0] === p.at(-1)[0] && p[0][1] === p.at(-1)[1]) p = p.slice(0, -1)
  // Resample the boundary every 2 m so long straight edges count fairly.
  const pts = []
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]), k = Math.max(1, Math.round(L / 2))
    for (let j = 0; j < k; j++) pts.push([a[0] + ((b[0] - a[0]) * j) / k, a[1] + ((b[1] - a[1]) * j) / k])
  }
  let best = null
  for (let deg = 0; deg < 360; deg += 5) {
    const u = [Math.sin((deg * Math.PI) / 180), Math.cos((deg * Math.PI) / 180)], v = [u[1], -u[0]]
    const pu = pts.map((q) => q[0] * u[0] + q[1] * u[1]), pv = pts.map((q) => q[0] * v[0] + q[1] * v[1])
    const lo = Math.min(...pu), hi = Math.max(...pu), len = hi - lo
    const band = (from, to) => { const vs = pv.filter((_, i) => pu[i] >= lo + from * len && pu[i] <= lo + to * len); return vs.length ? Math.max(...vs) - Math.min(...vs) : 0 }
    const near = band(0, 0.2), far = band(0.6, 0.85)
    const ratio = far / (near || 1)
    if (!best || ratio > best.ratio) best = { deg, ratio, len }
  }
  if (!best || best.ratio < 1.5 || best.len < 90) return null
  return { bearing: best.deg % 360, width_ratio: Math.round(best.ratio * 100) / 100, field_length_m: Math.round(best.len) }
}

const parks = data.venues.filter((v) => art[v.slug]?.archetype === 'ballpark')
const out = { ...prev }
for (const v of parks) {
  const f = path.join(CACHE, `${v.slug}.osm`)
  let xml
  if (fs.existsSync(f)) xml = fs.readFileSync(f, 'utf8')
  else {
    const d = 0.0035
    const bbox = [v.lng - d, v.lat - d * 0.75, v.lng + d, v.lat + d * 0.75].map((x) => x.toFixed(5)).join(',')
    const res = await fetch(`https://api.openstreetmap.org/api/0.6/map?bbox=${bbox}`, { headers: { 'User-Agent': UA } })
    if (!res.ok) { out[v.slug] = { bearing: null, error: `OSM API ${res.status}` }; await sleep(1500); continue }
    xml = await res.text()
    fs.writeFileSync(f, xml)
    await sleep(1500)
  }
  const ways = parseOsm(xml).filter((w) => w.tags.leisure === 'pitch' && /baseball|softball/.test(w.tags.sport || '') && w.pts.length >= 4)
  if (!ways.length) { out[v.slug] = { bearing: null, error: 'no baseball pitch mapped' }; continue }
  const lat0 = v.lat
  const big = ways.sort((a, b) => area(local(b.pts, lat0)) - area(local(a.pts, lat0)))[0]
  const r = homeAndCf(big.pts, { lat: v.lat, lng: v.lng })
  if (!r) { out[v.slug] = { bearing: null, error: 'pitch outline not clearly fan-shaped (infield-only or irregular)', osm: `https://www.openstreetmap.org/way/${big.id}` }; continue }
  out[v.slug] = { ...r, osm: `https://www.openstreetmap.org/way/${big.id}`, plausible: true }
  console.log(`${v.slug}: bearing ${r.bearing}, width ratio ${r.width_ratio}, length ${r.field_length_m} m`)
}
fs.writeFileSync(OUT, JSON.stringify(out, null, 1))
console.log(`done: ${Object.values(out).filter((x) => x.bearing != null && x.plausible).length}/${parks.length} plausible`)
