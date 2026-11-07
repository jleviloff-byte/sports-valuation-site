// USGS NAIP orthoimagery (public domain, U.S. Government work) around each
// venue, north-up, for footprint, orientation and art reference. Images go to
// research/raw/stadiums/naip/ (gitignored: large, reproducible); a manifest
// with the exact request URL per image goes to research/raw/stadiums/naip-manifest.json.
//
// Usage: node scripts/stadiums/art/fetch-naip.mjs [--all] [slug ...]
import fs from 'node:fs'
import path from 'node:path'
import { UA } from '../lib/wiki.mjs'

const SERVICE = 'https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer/exportImage'
const DIR = 'research/raw/stadiums/naip'
const MANIFEST = 'research/raw/stadiums/naip-manifest.json'
fs.mkdirSync(DIR, { recursive: true })
const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const args = process.argv.slice(2)
const slugs = args.includes('--all') ? data.venues.map((v) => v.slug) : args.filter((a) => !a.startsWith('--'))
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Half-width of the square view in meters, by venue type.
const HALF = { racetrack: 1300, arena: 220, ballpark: 230, tennis: 200, soccer_specific: 230, stadium: 280 }

for (const slug of slugs) {
  const v = data.venues.find((x) => x.slug === slug)
  if (!v) { console.log(`skip ${slug}: unknown`); continue }
  const out = path.join(DIR, `${slug}.jpg`)
  if (fs.existsSync(out) && manifest[slug]) continue
  const half = HALF[v.venue_type] ?? 280
  const dLat = half / 110540, dLng = half / (111320 * Math.cos((v.lat * Math.PI) / 180))
  const bbox = [v.lng - dLng, v.lat - dLat, v.lng + dLng, v.lat + dLat].map((x) => x.toFixed(6)).join(',')
  const url = `${SERVICE}?bbox=${bbox}&bboxSR=4326&imageSR=3857&size=1024,1024&format=jpg&f=image`
  let ok = false
  for (let attempt = 0; attempt < 3 && !ok; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) })
      if (res.ok && /image/.test(res.headers.get('content-type') || '')) {
        fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()))
        ok = true
      } else await sleep(3000)
    } catch { await sleep(3000) }
  }
  manifest[slug] = ok
    ? { file: out.replace(/\\/g, '/'), url, half_width_m: half, north_up: true, license: 'Public domain (USGS NAIP, U.S. Government work)', source: 'https://www.usgs.gov/centers/eros/science/usgs-eros-archive-aerial-photography-national-agriculture-imagery-program-naip', fetched: new Date().toISOString() }
    : { error: 'NAIP request failed', url }
  console.log(`${slug}: ${ok ? 'ok' : 'FAILED'}`)
  await sleep(400)
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1))
