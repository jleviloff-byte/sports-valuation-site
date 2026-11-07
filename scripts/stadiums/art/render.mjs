// Phase 2, step 2: render brick models offline with Playwright (headless Chromium).
//
// For each venue: 1024px hero WebP, 256px and 128px map sprites (transparent),
// and a GLB model for the rotating card view. Optionally a contact sheet.
//
// Usage:
//   node scripts/stadiums/art/render.mjs --pilot          # the six pilot venues + contact sheet
//   node scripts/stadiums/art/render.mjs slug [slug ...]   # specific venues
//   node scripts/stadiums/art/render.mjs --all             # every venue with a footprint
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { chromium } from 'playwright'
import sharp from 'sharp'
import { NodeIO, Logger } from '@gltf-transform/core'
import { compressGlb } from './compress-models.mjs'
import { EXTMeshGPUInstancing, KHRMeshQuantization } from '@gltf-transform/extensions'
import { dedup, quantize, weld } from '@gltf-transform/functions'

const ROOT = path.resolve('.')
const PILOT = ['michigan-stadium', 'yulman-stadium', 'fenway-park', 'madison-square-garden', 'indianapolis-motor-speedway', 'arthur-ashe-stadium']
const args = process.argv.slice(2)
const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const art = JSON.parse(fs.readFileSync('data/stadium-art.json', 'utf8')).venues
const { venues: wiki } = JSON.parse(fs.readFileSync('research/raw/stadiums/infobox.json', 'utf8'))
const wikiByUrl = Object.fromEntries(Object.values(wiki).map((w) => [w.url, w]))
const osmFile = (t) => path.join('research/raw/stadiums/osm', t.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')

const slugs = args.includes('--pilot') ? PILOT : args.includes('--all') ? data.venues.map((v) => v.slug) : args.filter((a) => !a.startsWith('--'))
const OUT = { hero: 'public/stadiums/hero', sprites: 'public/stadiums/sprites', models: 'public/stadiums/models' }
for (const d of Object.values(OUT)) fs.mkdirSync(d, { recursive: true })

// Minimal static server for the render page and node_modules.
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json' }
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname))
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end() }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' })
  fs.createReadStream(p).pipe(res)
}).listen(0)
const port = server.address().port

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage()
page.on('console', (m) => { if (m.type() === 'error') console.log('page error:', m.text()) })
page.on('pageerror', (e) => console.log('page exception:', e.message))
await page.goto(`http://localhost:${port}/scripts/stadiums/art/render.html`)
await page.waitForFunction(() => window.ready === true, null, { timeout: 30000 })

const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.WARN)).registerExtensions([EXTMeshGPUInstancing, KHRMeshQuantization])
const results = []
for (const slug of slugs) {
  const v = data.venues.find((x) => x.slug === slug)
  const spec = art[slug]
  const w = v && wikiByUrl[v.sources.wikipedia]
  const osm = w && fs.existsSync(osmFile(w.title)) ? JSON.parse(fs.readFileSync(osmFile(w.title), 'utf8')) : null
  if (!v || !spec) { console.log(`skip ${slug}: ${!v ? 'no venue' : 'no art spec'}`); continue }
  // No OSM footprint: a generic rounded outline sized by archetype (flagged in the art QA).
  let ring = osm?.best?.footprint
  let generic = false
  if (!ring) {
    generic = true
    const [a, b] = { arena: [90, 75], ballpark: [140, 140], oval_track: [900, 450], tennis_bowl: [80, 80] }[spec.archetype] ?? [170, 120]
    const kx = 111320 * Math.cos((v.lat * Math.PI) / 180), ky = 110540
    ring = Array.from({ length: 49 }, (_, i) => { const t = (i / 48) * 2 * Math.PI; const e = 4; const cx = Math.sign(Math.cos(t)) * Math.abs(Math.cos(t)) ** (2 / e), cz = Math.sign(Math.sin(t)) * Math.abs(Math.sin(t)) ** (2 / e); return [v.lng + (cx * a) / kx, v.lat + (cz * b) / ky] })
  }
  const t0 = Date.now()
  const r = await page.evaluate(([s, rg]) => window.renderVenue(s, rg, 1024), [{ ...spec, slug }, ring])
  const png = Buffer.from(r.png.split(',')[1], 'base64')
  const trimmed = await sharp(png).trim({ threshold: 0 }).toBuffer()
  // Square, centered, small transparent margin: every sprite fills its canvas the same way.
  const meta = await sharp(trimmed).metadata()
  const side = Math.round(Math.max(meta.width, meta.height) * 1.04)
  const square = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: trimmed, gravity: 'center' }]).png().toBuffer()
  await sharp(square).resize(1024, 1024).webp({ quality: 88, alphaQuality: 100 }).toFile(`${OUT.hero}/${slug}.webp`)
  await sharp(square).resize(256, 256).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT.sprites}/${slug}-256.webp`)
  await sharp(square).resize(128, 128).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT.sprites}/${slug}-128.webp`)

  const doc = await io.readBinary(Buffer.from(r.glb, 'base64'))
  await doc.transform(dedup(), weld(), quantize())
  const glb = await compressGlb(await io.writeBinary(doc))
  fs.writeFileSync(`${OUT.models}/${slug}.glb`, glb)
  const sizes = {
    hero: fs.statSync(`${OUT.hero}/${slug}.webp`).size, s256: fs.statSync(`${OUT.sprites}/${slug}-256.webp`).size,
    s128: fs.statSync(`${OUT.sprites}/${slug}-128.webp`).size, glb: glb.byteLength,
  }
  results.push({ slug, name: v.name, capacity: v.capacity, ...r.stats, generic_footprint: generic, sizes, ms: Date.now() - t0 })
  console.log(`${slug}: ${r.stats.cells} columns, ${(sizes.glb / 1024).toFixed(0)} KB glb, ${(sizes.hero / 1024).toFixed(0)} KB hero, ${Date.now() - t0} ms`)
}
await browser.close()
server.close()

if (args.includes('--pilot') || args.includes('--sheet')) {
  // Contact sheet: 3 x 2 heroes at 480px with labels on a light background.
  const cellW = 480, cellH = 540, cols = 3
  const rows = Math.ceil(results.length / cols)
  const tiles = []
  for (const [i, r] of results.entries()) {
    const img = await sharp(`${OUT.hero}/${r.slug}.webp`).resize(460, 460).png().toBuffer()
    const label = Buffer.from(`<svg width="${cellW}" height="60" xmlns="http://www.w3.org/2000/svg"><text x="${cellW / 2}" y="26" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#14181D" text-anchor="middle">${r.name.replace(/&/g, '&amp;')}</text><text x="${cellW / 2}" y="50" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#5B6470" text-anchor="middle">${r.capacity.toLocaleString('en-US')} capacity · ${art[r.slug].archetype.replace(/_/g, ' ')}</text></svg>`)
    const x = (i % cols) * cellW, y = Math.floor(i / cols) * cellH
    tiles.push({ input: img, left: x + 10, top: y + 10 }, { input: label, left: x, top: y + 472 })
  }
  fs.mkdirSync('scripts/stadiums/art/out', { recursive: true })
  await sharp({ create: { width: cellW * cols, height: cellH * rows, channels: 4, background: '#F5F6F7' } })
    .composite(tiles).png().toFile('scripts/stadiums/art/out/pilot-contact-sheet.png')
  console.log('contact sheet: scripts/stadiums/art/out/pilot-contact-sheet.png')
}
// Merge by slug so partial renders don't drop earlier entries.
const REPORT = 'research/raw/stadiums/render-report.json'
const prior = fs.existsSync(REPORT) ? JSON.parse(fs.readFileSync(REPORT, 'utf8')) : []
const merged = new Map(prior.map((r) => [r.slug, r]))
for (const r of results) merged.set(r.slug, r)
const live = new Set(data.venues.map((v) => v.slug))
fs.writeFileSync(REPORT, JSON.stringify([...merged.values()].filter((r) => live.has(r.slug)), null, 1))
