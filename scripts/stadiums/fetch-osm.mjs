// Step 3: OpenStreetMap footprints and coordinates via Nominatim (OSM's geocoder).
//
// Searches "<venue>, <city>, <state>" (then the venue name alone), keeps
// results within a few km of the Wikipedia coordinate, and prefers sports
// features (leisure=stadium/sports_centre/track, building=stadium, raceway).
// Nominatim returns the polygon directly, including multipolygon relations.
// Usage policy: 1 request/second, identifying User-Agent, results cached.
// OSM data © OpenStreetMap contributors, ODbL 1.0.
//
// Usage: node scripts/stadiums/fetch-osm.mjs [--refresh] [title ...]
import fs from 'node:fs'
import path from 'node:path'
import { UA, getCoordinates } from './lib/wiki.mjs'

const REFRESH = process.argv.includes('--refresh')
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const NOMINATIM = 'https://nominatim.openstreetmap.org/search'
const DIR = path.resolve('research/raw/stadiums/osm')
fs.mkdirSync(DIR, { recursive: true })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const { venues } = JSON.parse(fs.readFileSync('research/raw/stadiums/infobox.json', 'utf8'))
const { candidates } = JSON.parse(fs.readFileSync('research/raw/stadiums/candidates.json', 'utf8'))
const geo = await getCoordinates(Object.keys(venues))
const fileFor = (t) => path.join(DIR, t.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')
const appsFor = (t) => venues[t].requested_as.flatMap((r) => candidates[r]?.appearances || [])
const isTrack = (t) => appsFor(t).some((a) => a.sport === 'motorsport')

const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').replace(/\(.*?\)/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
const STOP = new Set(['the', 'at', 'of', 'and', 'stadium', 'field', 'arena', 'center', 'centre', 'park', 'speedway', 'raceway', 'international', 'motor', 'memorial', 'complex', 'coliseum'])
const tokens = (s) => new Set(norm(s).split(' ').filter((w) => w && !STOP.has(w)))
function nameScore(a, b) {
  if (!a || !b) return 0
  if (norm(a) === norm(b)) return 1
  const A = tokens(a), B = tokens(b)
  if (!A.size || !B.size) return 0
  let hit = 0
  for (const w of A) if (B.has(w)) hit++
  return hit / Math.max(A.size, B.size)
}
const distM = (a, b) => Math.hypot((a.lng - b.lng) * 111320 * Math.cos((a.lat * Math.PI) / 180), (a.lat - b.lat) * 110540)
function ringArea(ring, lat0) {
  const kx = 111320 * Math.cos((lat0 * Math.PI) / 180), ky = 110540
  let a = 0
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) a += ring[j][0] * kx * (ring[i][1] * ky) - ring[i][0] * kx * (ring[j][1] * ky)
  return Math.abs(a / 2)
}
// Largest outer ring of a Polygon or MultiPolygon.
function outerRing(g, lat0) {
  if (!g) return null
  if (g.type === 'Polygon') return g.coordinates[0]
  if (g.type === 'MultiPolygon') return g.coordinates.map((p) => p[0]).sort((a, b) => ringArea(b, lat0) - ringArea(a, lat0))[0]
  return null
}
const SPORTY = /^(leisure=(stadium|sports_centre|track|sports_hall|pitch)|building=(stadium|arena|sports_hall|sports_centre|grandstand)|highway=raceway|amenity=(arena|events_venue))$/

let lastCall = 0
async function search(q) {
  const wait = 1100 - (Date.now() - lastCall)
  if (wait > 0) await sleep(wait)
  lastCall = Date.now()
  const qs = new URLSearchParams({ q, format: 'jsonv2', polygon_geojson: '1', polygon_threshold: '0.00001', extratags: '1', limit: '6', countrycodes: 'us' })
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(`${NOMINATIM}?${qs}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) })
      if (res.ok) return await res.json()
      await sleep(5000 * (attempt + 1))
    } catch { await sleep(5000 * (attempt + 1)) }
  }
  return []
}

const titles = (only.length ? only : Object.keys(venues)).filter((t) => REFRESH || only.length || !fs.existsSync(fileFor(t)) || JSON.parse(fs.readFileSync(fileFor(t), 'utf8')).method !== 'nominatim')
let done = 0
for (const t of titles) {
  const seed = geo[t] || venues[t].coord
  const apps = appsFor(t)
  const loc = apps.find((a) => a.location)?.location || ''
  const state = apps.find((a) => a.state_col)?.state_col || ''
  const name = t.replace(/\s*\(.*?\)\s*$/, '')
  const queries = [...new Set([[name, loc, state].filter(Boolean).join(', '), name])]
  const maxDist = isTrack(t) ? 6000 : 3000
  let results = [], used = null
  for (const q of queries) {
    const r = await search(q)
    const scored = r.map((x) => {
      const pt = { lat: Number(x.lat), lng: Number(x.lon) }
      const kind = `${x.category}=${x.type}`
      return { x, kind, sporty: SPORTY.test(kind), d: seed ? distM(seed, pt) : null, ns: Math.max(nameScore(x.name, name), nameScore(x.extratags?.official_name, name), nameScore(x.extratags?.alt_name, name), nameScore(x.extratags?.old_name, name)), poly: /Polygon/.test(x.geojson?.type) }
    }).filter((s) => s.poly && (s.d == null || s.d <= maxDist))
    results = results.concat(scored)
    if (scored.some((s) => s.sporty && s.ns >= 0.5)) { used = q; break }
  }
  results.sort((a, b) => (b.sporty && b.ns >= 0.5) - (a.sporty && a.ns >= 0.5) || b.ns - a.ns || b.sporty - a.sporty || (a.d ?? 0) - (b.d ?? 0))
  const best = results[0] && (results[0].ns >= 0.5 || results[0].sporty) ? results[0] : null
  let rec = { title: t, method: 'nominatim', seed, queries, query_used: used, fetched: new Date().toISOString(), best: null, others: [] }
  if (best) {
    const ring = outerRing(best.x.geojson, Number(best.x.lat))
    const centroid = ring.slice(0, -1).reduce((acc, p, _, arr) => [acc[0] + p[0] / arr.length, acc[1] + p[1] / arr.length], [0, 0])
    const id = `${best.x.osm_type}/${best.x.osm_id}`
    rec.best = {
      id, url: `https://www.openstreetmap.org/${id}`, name: best.x.name, kind: best.kind, tags: { name: best.x.name, ...(best.x.extratags || {}) },
      name_score: best.ns, sporty: best.sporty, contains_point: false, distance_m: best.d == null ? null : Math.round(best.d),
      area_m2: Math.round(ringArea(ring, Number(best.x.lat))), centroid: { lat: centroid[1], lng: centroid[0] }, footprint: ring,
    }
    // Credible when the name matches or the Wikipedia point is close.
    rec.best.contains_point = best.d != null && best.d < 400
  }
  rec.others = results.filter((r) => r !== best).slice(0, 5).map((r) => ({ id: `${r.x.osm_type}/${r.x.osm_id}`, name: r.x.name, kind: r.kind, name_score: r.ns, distance_m: r.d == null ? null : Math.round(r.d) }))
  fs.writeFileSync(fileFor(t), JSON.stringify(rec))
  done++
  if (done % 25 === 0) console.log(`${done}/${titles.length}`)
}
console.log(`done ${done}/${titles.length}`)
