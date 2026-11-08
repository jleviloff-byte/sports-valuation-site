// QA side-by-side for one venue: the primary reference photo, the model at
// hero size, the model at ~220px on a map-colored tile, two more references,
// and the spec checklist with pass/fail from docs/art-review/qa/<slug>.json.
// Usage: node scripts/stadiums/art2/qa-sheet.mjs <slug> [style] [out.png]
import fs from 'node:fs'
import sharp from 'sharp'
import { SPECS } from './specs.mjs'

const [slug, style = 'stylized', outArg] = process.argv.slice(2)
const out = outArg || `docs/art-review/qa/${slug}.png`
const verified = JSON.parse(fs.readFileSync('scripts/stadiums/refs/verified.json', 'utf8'))[slug]
const qaFile = `docs/art-review/qa/${slug}.json`
const qa = fs.existsSync(qaFile) ? JSON.parse(fs.readFileSync(qaFile, 'utf8')) : null
const model = `scripts/stadiums/art2/out/${style}/${slug}.png`
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')
const W = 1500, TOP = 560

const parts = []
const ref = (n) => (n === 'naip' ? `research/raw/stadiums/naip/${slug}.jpg` : verified.find((r) => String(r.n) === String(n)).local)
// Primary reference (left), model hero (middle), model at 220px (right).
parts.push({ input: await sharp(ref(verified[0].n)).resize(560, 520, { fit: 'cover' }).toBuffer(), left: 10, top: 30 })
parts.push({ input: await sharp(model).resize(520, 520).toBuffer(), left: 590, top: 30 })
const tile = await sharp({ create: { width: 340, height: 340, channels: 3, background: '#e8ebe6' } })
  .composite([{ input: await sharp(model).resize(220, 220).toBuffer(), left: 60, top: 60 }]).png().toBuffer()
parts.push({ input: tile, left: 1140, top: 30 })
// Two more references, small.
const extra = [...verified.slice(1, 3).map((r) => r.n), 'naip'].slice(0, 2)
for (const [i, n] of extra.entries()) parts.push({ input: await sharp(ref(n)).resize(170, 120, { fit: 'cover' }).toBuffer(), left: 1140 + i * 175, top: 400 })
// Labels and checklist.
const feats = SPECS[slug].features
const lines = feats.map((f, i) => {
  const r = qa?.features?.[f.id]
  const mark = r?.pass === true ? 'PASS' : r?.pass === false ? 'FAIL' : '  ?  '
  const color = r?.pass === true ? '#1b7f3b' : r?.pass === false ? '#b3261e' : '#666'
  return `<text x="10" y="${TOP + 34 + i * 22}" font-family="Arial" font-size="15"><tspan font-weight="700" fill="${color}">${mark}</tspan><tspan dx="10">${esc(f.text.slice(0, 150))}${r?.note ? esc(' (' + r.note + ')') : ''}</tspan></text>`
}).join('')
const H = TOP + 50 + feats.length * 22
const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
<text x="10" y="20" font-family="Arial" font-size="16" font-weight="700">${esc(slug)}: reference #${verified[0].n}</text>
<text x="590" y="20" font-family="Arial" font-size="16" font-weight="700">Model (${style}), hero size</text>
<text x="1140" y="20" font-family="Arial" font-size="16" font-weight="700">At 220px on the map</text>
<text x="1140" y="392" font-family="Arial" font-size="13">More references: #${extra.join(', #')}</text>
<text x="10" y="${TOP + 10}" font-family="Arial" font-size="16" font-weight="700">Spec checklist${qa ? '' : ' (not yet checked)'}</text>${lines}</svg>`
fs.mkdirSync('docs/art-review/qa', { recursive: true })
await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } }).composite([{ input: Buffer.from(svg), left: 0, top: 0 }, ...parts]).png().toFile(out)
console.log(out)
