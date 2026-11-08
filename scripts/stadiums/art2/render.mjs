// Illustrated venue renderer (Path B). Renders in headless Chromium, then
// composites in Node: outlines from normal/silhouette edges, clean alpha by
// un-premultiplying against black with the silhouette mask (no halos), and a
// soft drop shadow so sprites sit on the map.
//
// Usage:
//   node scripts/stadiums/art2/render.mjs --styles vector,painted,stylized slug [slug ...]
//   node scripts/stadiums/art2/render.mjs --pilot          # the 8 pilot venues, all styles, + contact sheet
// Output: scripts/stadiums/art2/out/<style>/<slug>.png (1024 RGBA) and -sprite.png (128)
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { chromium } from 'playwright'
import sharp from 'sharp'

const ROOT = path.resolve('.')
export const PILOT = ['michigan-stadium', 'yulman-stadium', 'fenway-park', 'wrigley-field', 'sofi-stadium', 'madison-square-garden', 'daytona-international-speedway', 'arthur-ashe-stadium']
const args = process.argv.slice(2)
const styleArg = args.find((a) => a.startsWith('--styles'))
const STYLES = styleArg ? args[args.indexOf(styleArg) + 1].split(',') : ['vector', 'painted', 'stylized']
const slugs = args.includes('--pilot') ? PILOT : args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--styles')

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const { venues: wiki } = JSON.parse(fs.readFileSync('research/raw/stadiums/infobox.json', 'utf8'))
const wikiByUrl = Object.fromEntries(Object.values(wiki).map((w) => [w.url, w]))
const osmFile = (t) => path.join('research/raw/stadiums/osm', t.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')
const orient = JSON.parse(fs.readFileSync('research/raw/stadiums/ballpark-orientation.json', 'utf8'))
const INFO = { 'daytona-international-speedway': { front_bearing: 235 } }
// Material colors sampled from the verified reference photos (scripts/stadiums/refs/colors.json).
const NAIP = JSON.parse(fs.readFileSync('research/raw/stadiums/naip-manifest.json', 'utf8'))
const naipBbox = (slug) => { const u = NAIP[slug]?.url; const m = u && u.match(/bbox=([-0-9.]+),([-0-9.]+),([-0-9.]+),([-0-9.]+)/); return m ? m.slice(1, 5).map(Number) : null }
// Seat, roof and field colors sampled from each venue's NAIP aerial (generic fallback models).
const NAIP_COLORS = fs.existsSync('scripts/stadiums/overhaul/naip-colors.json') ? JSON.parse(fs.readFileSync('scripts/stadiums/overhaul/naip-colors.json', 'utf8')) : {}
const SAMPLED = fs.existsSync('scripts/stadiums/refs/colors.json') ? JSON.parse(fs.readFileSync('scripts/stadiums/refs/colors.json', 'utf8')) : {}

const STYLE = {
  vector: { line: 3.2, lineAlpha: 0.92, lineColor: [36, 33, 30], threshold: 0.32, grade: { sat: 1.05, warm: 0 }, blur: 0 },
  painted: { line: 2.0, lineAlpha: 0.38, lineColor: [60, 48, 40], threshold: 0.38, grade: { sat: 0.92, warm: 0.035 }, blur: 0.9 },
  stylized: { line: 1.6, lineAlpha: 0.55, lineColor: [40, 36, 34], threshold: 0.3, grade: { sat: 1.0, warm: 0.02 }, blur: 0 },
}

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript' }
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname))
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end() }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' })
  fs.createReadStream(p).pipe(res)
}).listen(0)

const raw = async (dataUrl) => {
  const { data: d, info } = await sharp(Buffer.from(dataUrl.split(',')[1], 'base64')).raw().ensureAlpha().toBuffer({ resolveWithObject: true })
  return { d, w: info.width, h: info.height }
}

const K_SMOOTH = (t) => t * t * (3 - 2 * t)
async function composite(r, style) {
  const S = STYLE[style]
  const [C, M, N] = await Promise.all([raw(r.color), raw(r.mask), raw(r.normal)])
  const { w, h } = C
  const a = new Float32Array(w * h)
  for (let i = 0; i < w * h; i++) a[i] = M.d[i * 4] / 255
  // Cut-away sprites (racetracks) fade to transparent over the outer 9% of the
  // frame. Applied to the output alpha only (color un-premultiplies by the mask).
  const fade = new Float32Array(w * h).fill(1)
  if (r.fadeEdges) {
    const F = 0.09
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const e = Math.min(x / w, 1 - x / w, y / h, 1 - y / h) / F; if (e < 1) fade[y * w + x] = K_SMOOTH(Math.max(0, e)) }
  }
  // Edge strength from normal discontinuities and the silhouette.
  const e = new Float32Array(w * h)
  const nv = (i, k) => N.d[i * 4 + k] / 255
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x
    if (a[i] < 0.02 && a[i - 1] < 0.02 && a[i + 1] < 0.02 && a[i - w] < 0.02 && a[i + w] < 0.02) continue
    let g = 0
    for (let k = 0; k < 3; k++) g += Math.abs(nv(i + 1, k) - nv(i - 1, k)) + Math.abs(nv(i + w, k) - nv(i - w, k))
    const ga = Math.abs(a[i + 1] - a[i - 1]) + Math.abs(a[i + w] - a[i - w])
    e[i] = Math.max(Math.min(1, Math.max(0, g - S.threshold) * 2.2), Math.min(1, ga * 1.2))
  }
  // Thicken lines to the style's weight (box dilation by max).
  const rad = Math.round(S.line / 2)
  const e2 = new Float32Array(w * h)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let m = 0
    for (let dy = -rad; dy <= rad; dy++) for (let dx = -rad; dx <= rad; dx++) { const xx = x + dx, yy = y + dy; if (xx >= 0 && yy >= 0 && xx < w && yy < h) m = Math.max(m, e[yy * w + xx]) }
    e2[y * w + x] = m
  }
  const out = Buffer.alloc(w * h * 4)
  for (let i = 0; i < w * h; i++) {
    const al = a[i]
    if (al <= 0) continue
    let r0 = C.d[i * 4] / al, g0 = C.d[i * 4 + 1] / al, b0 = C.d[i * 4 + 2] / al
    // Color grade: saturation and warmth.
    const l = 0.299 * r0 + 0.587 * g0 + 0.114 * b0
    r0 = l + (r0 - l) * S.grade.sat; g0 = l + (g0 - l) * S.grade.sat; b0 = l + (b0 - l) * S.grade.sat
    r0 *= 1 + S.grade.warm; b0 *= 1 - S.grade.warm
    const t = e2[i] * S.lineAlpha
    out[i * 4] = Math.max(0, Math.min(255, r0 * (1 - t) + S.lineColor[0] * t))
    out[i * 4 + 1] = Math.max(0, Math.min(255, g0 * (1 - t) + S.lineColor[1] * t))
    out[i * 4 + 2] = Math.max(0, Math.min(255, b0 * (1 - t) + S.lineColor[2] * t))
    out[i * 4 + 3] = Math.round(al * fade[i] * 255)
  }
  let img = sharp(out, { raw: { width: w, height: h, channels: 4 } })
  if (S.blur) img = img.blur(S.blur)
  const body = await img.png().toBuffer()
  // Soft drop shadow from the silhouette, offset down-right (sun from the west).
  const sh = Buffer.alloc(w * h * 4)
  for (let i = 0; i < w * h; i++) { sh[i * 4] = 30; sh[i * 4 + 1] = 26; sh[i * 4 + 2] = 22; sh[i * 4 + 3] = Math.round(a[i] * fade[i] * 255 * 0.17) }
  const shadow = await sharp(sh, { raw: { width: w, height: h, channels: 4 } }).blur(14).png().toBuffer()
  const canvas = await sharp({ create: { width: w, height: h, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: shadow, left: 0, top: 0 }, { input: body, left: 0, top: 0 }]).png().toBuffer()
  // Re-center with a small margin, then output hero and sprite sizes.
  const trimmed = await sharp(canvas).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true })
  const side = Math.round(Math.max(trimmed.info.width, trimmed.info.height) * 1.04)
  const sq = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite([{ input: trimmed.data, gravity: 'center' }]).png().toBuffer()
  return sq
}

const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage()
page.on('pageerror', (e) => console.log('page exception:', e.message))
page.on('console', (m) => { if (m.type() === 'error') console.log('page error:', m.text()) })
await page.goto(`http://localhost:${server.address().port}/scripts/stadiums/art2/render.html`)
await page.waitForFunction(() => window.ready === true, null, { timeout: 30000 })

const report = []
for (const slug of slugs) {
  const v = data.venues.find((x) => x.slug === slug)
  const w = wikiByUrl[v.sources.wikipedia]
  const osm = JSON.parse(fs.readFileSync(osmFile(w.title), 'utf8'))
  const info = { ...(INFO[slug] || {}), cf_bearing: orient[slug]?.bearing ?? undefined, naipBbox: naipBbox(slug), fieldLL: osm.best.field, colors: { ...(NAIP_COLORS[slug] || {}), ...Object.fromEntries(Object.entries(SAMPLED[slug] || {}).map(([k, v]) => [k, v.hex])) }, venue: { venue_type: v.venue_type, roof: v.roof, capacity: v.capacity } }
  for (const style of STYLES) {
    const t0 = Date.now()
    const r = await page.evaluate(([s, st, ring, inf]) => window.renderVenue(s, st, ring, inf, 2048), [slug, style, osm.best.footprint, info])
    const sq = await composite(r, style)
    const dir = path.join('scripts/stadiums/art2/out', style)
    fs.mkdirSync(dir, { recursive: true })
    await sharp(sq).resize(1024, 1024).png().toFile(path.join(dir, `${slug}.png`))
    await sharp(sq).resize(256, 256).png().toFile(path.join(dir, `${slug}-256.png`))
    await sharp(sq).resize(128, 128).png().toFile(path.join(dir, `${slug}-128.png`))
    if (style === STYLES[0]) {
      // Conditioning images for Path A (ControlNet depth + mask), padded to a square on black.
      const cdir = 'scripts/stadiums/art2/out/control'
      fs.mkdirSync(cdir, { recursive: true })
      for (const k of ['depth', 'mask', 'normal', 'color']) {
        const img = sharp(Buffer.from(r[k].split(',')[1], 'base64'))
        const m = await img.metadata(), side = Math.max(m.width, m.height)
        await img.extend({ top: Math.floor((side - m.height) / 2), bottom: Math.ceil((side - m.height) / 2), left: Math.floor((side - m.width) / 2), right: Math.ceil((side - m.width) / 2), background: '#000' })
          .png().toBuffer().then((b) => sharp(b).resize(1024, 1024).removeAlpha().png().toFile(path.join(cdir, `${slug}-${k}.png`)))
      }
    }
    report.push({ slug, style, ms: Date.now() - t0 })
    console.log(`${slug} ${style}: ${Date.now() - t0} ms`)
  }
}
await browser.close()
server.close()
fs.writeFileSync('scripts/stadiums/art2/out/report.json', JSON.stringify(report, null, 1))
