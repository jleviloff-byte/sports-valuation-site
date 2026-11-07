// National-zoom map marks: each venue's real top-down shape (north up), filled
// with its primary team color, drawn so the venue types read as different
// silhouettes at 20-50 px:
//   bowl           team-color ring around a green field
//   horseshoe      the ring with its open end cut away
//   ballpark       stands wrapping home plate, outfield fan, dirt diamond
//   arena / dome   solid roof with a team-color rim
//   oval track     dark track ring around the infield, main grandstand in team color
// Shapes come from the OSM footprint (convex hull when OSM maps a ring);
// tracks use an oval inscribed along the property's long axis (Daytona uses
// the geometry measured on the NAIP aerial). Output: two sprite sheets,
// public/stadiums/footprints/atlas-{0,1}.webp, and research/raw/stadiums/footprint-atlas.json.
//
// Usage: node scripts/stadiums/art/build-footprints.mjs
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const TILE = 96
const FIRST = 50
const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const art = JSON.parse(fs.readFileSync('data/stadium-art.json', 'utf8')).venues
const { venues: wiki } = JSON.parse(fs.readFileSync('research/raw/stadiums/infobox.json', 'utf8'))
const orient = JSON.parse(fs.readFileSync('research/raw/stadiums/ballpark-orientation.json', 'utf8'))
const wikiByUrl = Object.fromEntries(Object.values(wiki).map((w) => [w.url, w]))
const osmFile = (t) => path.join('research/raw/stadiums/osm', t.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')

const project = (ring) => {
  const lat0 = ring.reduce((s, p) => s + p[1], 0) / ring.length, lng0 = ring.reduce((s, p) => s + p[0], 0) / ring.length
  const kx = 111320 * Math.cos((lat0 * Math.PI) / 180), ky = 110540
  const pts = ring.map(([lng, lat]) => [(lng - lng0) * kx, -(lat - lat0) * ky])
  if (pts.length > 1 && pts[0][0] === pts.at(-1)[0] && pts[0][1] === pts.at(-1)[1]) pts.pop()
  return pts
}
const hull = (points) => {
  const p = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lo = [], up = []
  for (const q of p) { while (lo.length >= 2 && cross(lo.at(-2), lo.at(-1), q) <= 0) lo.pop(); lo.push(q) }
  for (const q of p.reverse()) { while (up.length >= 2 && cross(up.at(-2), up.at(-1), q) <= 0) up.pop(); up.push(q) }
  return lo.slice(0, -1).concat(up.slice(0, -1))
}
const area = (p) => { let a = 0; for (let i = 0, j = p.length - 1; i < p.length; j = i++) a += p[j][0] * p[i][1] - p[i][0] * p[j][1]; return Math.abs(a / 2) }
const centroid = (p) => [p.reduce((s, q) => s + q[0], 0) / p.length, p.reduce((s, q) => s + q[1], 0) / p.length]
const principal = (p) => { const [cx, cz] = centroid(p); let a = 0, b = 0, c = 0; for (const [x, z] of p) { a += (x - cx) ** 2; b += (z - cz) ** 2; c += (x - cx) * (z - cz) } return 0.5 * Math.atan2(2 * c, a - b) }
const bvec = (deg) => [Math.sin((deg * Math.PI) / 180), -Math.cos((deg * Math.PI) / 180)]
const scaleAbout = (p, c, k) => p.map(([x, z]) => [c[0] + (x - c[0]) * k, c[1] + (z - c[1]) * k])
const lum = (hex) => { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255 }
const darker = (hex, k = 0.72) => { const n = parseInt(hex.slice(1), 16); return `rgb(${Math.round((n >> 16) * k)},${Math.round(((n >> 8) & 255) * k)},${Math.round((n & 255) * k)})` }
const GREEN = '#4f9a45', DIRT = '#c08453', ROOF = '#d9dcdf', TRACK = '#3f4348', NEUTRAL = '#8C939C'

function stadiumOval(c, ang, L, W) {
  // Rounded "stadium" shape with long half-length L and half-width W along angle ang.
  const pts = [], R = W, S = Math.max(0, L - R)
  for (let i = 0; i <= 40; i++) { const a = -Math.PI / 2 + (i / 40) * Math.PI; pts.push([S + R * Math.cos(a), R * Math.sin(a)]) }
  for (let i = 0; i <= 40; i++) { const a = Math.PI / 2 + (i / 40) * Math.PI; pts.push([-S + R * Math.cos(a), R * Math.sin(a)]) }
  return pts.map(([u, v]) => [c[0] + u * Math.cos(ang) - v * Math.sin(ang), c[1] + u * Math.sin(ang) + v * Math.cos(ang)])
}

// Returns { layers: [{ pts, fill, stroke }], bounds } in meters.
function shapeFor(v) {
  const a = art[v.slug] || {}
  const team = (a.seat_colors_source ? a.seat_colors?.[0] : null) || NEUTRAL
  const w = wikiByUrl[v.sources.wikipedia]
  const osm = w && fs.existsSync(osmFile(w.title)) ? JSON.parse(fs.readFileSync(osmFile(w.title), 'utf8')) : null
  let fp = osm?.best?.footprint ? project(osm.best.footprint) : null
  if (fp) { const h = hull(fp); if (area(fp) / area(h) < 0.65) fp = h }
  const arch = a.archetype
  const stroke = darker(team, lum(team) > 0.6 ? 0.6 : 0.7)
  if (arch === 'oval_track') {
    const base = fp || stadiumOval([0, 0], 0, 700, 330)
    let c = centroid(base), ang = principal(base)
    let L, W
    if (v.slug === 'daytona-international-speedway') { c = [312, -208]; const d = bvec(38); ang = Math.atan2(d[1], d[0]); L = 840; W = 420 }
    else { const ext = base.map(([x, z]) => [(x - c[0]) * Math.cos(-ang) - (z - c[1]) * Math.sin(-ang), (x - c[0]) * Math.sin(-ang) + (z - c[1]) * Math.cos(-ang)]); L = Math.max(...ext.map((p) => Math.abs(p[0]))) * 0.8; W = Math.min(L * 0.5, Math.max(...ext.map((p) => Math.abs(p[1]))) * 0.8) }
    const outer = stadiumOval(c, ang, L, W)
    const inner = stadiumOval(c, ang, L - W * 0.22, W * 0.78)
    // Main grandstand: a band along one long side, outside the track.
    const n = [-Math.sin(ang), Math.cos(ang)], u = [Math.cos(ang), Math.sin(ang)]
    const side = v.slug === 'daytona-international-speedway' ? (n[0] * bvec(308)[0] + n[1] * bvec(308)[1] > 0 ? 1 : -1) : 1
    const g0 = W * 1.0, g1 = W * 1.32, gl = (L - W) * 0.95
    const stand = [[-gl, g0], [gl, g0], [gl, g1], [-gl, g1]].map(([a2, b2]) => [c[0] + u[0] * a2 + n[0] * b2 * side, c[1] + u[1] * a2 + n[1] * b2 * side])
    return { layers: [{ pts: stand, fill: team, stroke }, { pts: outer, fill: TRACK, stroke: '#2a2d31' }, { pts: inner, fill: GREEN, stroke: null }], bounds: [...outer, ...stand] }
  }
  if (!fp) fp = stadiumOval([0, 0], 0, 120, 90)
  const c = centroid(fp)
  if (arch === 'arena' || arch === 'dome') {
    return { layers: [{ pts: fp, fill: team, stroke }, { pts: scaleAbout(fp, c, 0.8), fill: ROOF, stroke: null }], bounds: fp }
  }
  if (arch === 'ballpark') {
    const cf = orient[v.slug]?.bearing ?? a.cf_bearing ?? 67.5
    const d = bvec(cf)
    // Home plate toward the back of the footprint opposite center field.
    let far = 0
    for (const [x, z] of fp) far = Math.max(far, -((x - c[0]) * d[0] + (z - c[1]) * d[1]))
    const home = [c[0] - d[0] * far * 0.62, c[1] - d[1] * far * 0.62]
    const R = far * 1.55
    const fan = [home]
    for (let k = 0; k <= 24; k++) { const b = bvec(cf - 45 + (k / 24) * 90); fan.push([home[0] + b[0] * R, home[1] + b[1] * R]) }
    const dia = [home, ...[cf + 45, cf, cf - 45].map((b, i) => { const v2 = bvec(b); const r2 = i === 1 ? far * 0.55 : far * 0.39; return [home[0] + v2[0] * r2, home[1] + v2[1] * r2] })]
    return { layers: [{ pts: fp, fill: team, stroke }, { pts: fan, fill: GREEN, stroke: null, clip: fp }, { pts: dia, fill: DIRT, stroke: null }], bounds: fp }
  }
  // Bowls and horseshoes: ring of team color around the field.
  const inner = scaleAbout(fp, c, 0.58)
  const layers = [{ pts: fp, fill: team, stroke }, { pts: inner, fill: GREEN, stroke: null }]
  if (arch === 'horseshoe') {
    // Cut the open end: wedge toward the south end of the long axis, filled as ground.
    const ang = principal(fp), ax = [Math.cos(ang), Math.sin(ang)]
    const sgn = ax[1] > 0 ? 1 : -1 // +z is south
    const far = Math.max(...fp.map(([x, z]) => ((x - c[0]) * ax[0] + (z - c[1]) * ax[1]) * sgn))
    const nn = [-ax[1], ax[0]], wHalf = far * 0.62
    const cut = [[0.55, -wHalf * 0.75], [1.2, -wHalf * 0.75], [1.2, wHalf * 0.75], [0.55, wHalf * 0.75]].map(([t, s]) => [c[0] + ax[0] * sgn * far * t + nn[0] * s, c[1] + ax[1] * sgn * far * t + nn[1] * s])
    layers.push({ pts: cut, fill: '#c9c6bd', stroke: null, clip: fp })
  }
  return { layers, bounds: fp }
}

function svgFor(v, size) {
  const { layers, bounds } = shapeFor(v)
  const xs = bounds.map((p) => p[0]), zs = bounds.map((p) => p[1])
  const x0 = Math.min(...xs), x1 = Math.max(...xs), z0 = Math.min(...zs), z1 = Math.max(...zs)
  const span = Math.max(x1 - x0, z1 - z0) || 1
  const pad = size * 0.07, k = (size - 2 * pad) / span
  const ox = pad + ((size - 2 * pad) - (x1 - x0) * k) / 2, oz = pad + ((size - 2 * pad) - (z1 - z0) * k) / 2
  const P = (pts) => pts.map(([x, z]) => `${(ox + (x - x0) * k).toFixed(1)},${(oz + (z - z0) * k).toFixed(1)}`).join(' ')
  const sw = Math.max(1.2, size / 48)
  let defs = '', body = ''
  layers.forEach((l, i) => {
    let clip = ''
    if (l.clip) { defs += `<clipPath id="c${i}"><polygon points="${P(l.clip)}"/></clipPath>`; clip = ` clip-path="url(#c${i})"` }
    body += `<polygon points="${P(l.pts)}" fill="${l.fill}"${l.stroke ? ` stroke="${l.stroke}" stroke-width="${sw}" stroke-linejoin="round"` : ''}${clip}/>`
  })
  // Soft shadow under the whole shape so it lifts off the basemap.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><defs>${defs}<filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="${size / 64}" stdDeviation="${size / 80}" flood-color="#14181D" flood-opacity="0.28"/></filter></defs><g filter="url(#s)">${body}</g></svg>`
}

const order = [...data.venues].sort((a, b) => b.capacity - a.capacity)
const sheets = [order.slice(0, FIRST), order.slice(FIRST)]
fs.mkdirSync('public/stadiums/footprints', { recursive: true })
const map = {}, meta = []
for (const [n, vs] of sheets.entries()) {
  const cols = Math.ceil(Math.sqrt(vs.length)), rows = Math.ceil(vs.length / cols)
  const comps = await Promise.all(vs.map(async (v, i) => ({ input: await sharp(Buffer.from(svgFor(v, TILE))).png().toBuffer(), left: (i % cols) * TILE, top: Math.floor(i / cols) * TILE })))
  vs.forEach((v, i) => { map[v.slug] = [n, i % cols, Math.floor(i / cols)] })
  const file = `public/stadiums/footprints/atlas-${n}.webp`
  await sharp({ create: { width: cols * TILE, height: rows * TILE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite(comps).webp({ quality: 90, alphaQuality: 100 }).toFile(file)
  meta.push({ sheet: n, cols, rows, count: vs.length, kb: Math.round(fs.statSync(file).size / 1024) })
}
// Review sheet of the first 48 at 64 px.
const prev = order.slice(0, 48)
const pc = await Promise.all(prev.map(async (v, i) => ({ input: await sharp(Buffer.from(svgFor(v, 64))).png().toBuffer(), left: (i % 12) * 70 + 3, top: Math.floor(i / 12) * 70 + 3 })))
fs.mkdirSync('docs/art-review', { recursive: true })
await sharp({ create: { width: 840, height: 280, channels: 3, background: '#EEF0F1' } }).composite(pc).png().toFile('docs/art-review/footprints-preview.png')
fs.writeFileSync('research/raw/stadiums/footprint-atlas.json', JSON.stringify({ tile: TILE, sheets: meta, venues: map }, null, 1))
console.log(meta.map((m) => `footprints atlas-${m.sheet}: ${m.count}, ${m.kb} KB`).join('\n'))
