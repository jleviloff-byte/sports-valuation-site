// docs/art-review/bakeoff.png: per pilot venue, the reference photo, the
// best Path B style (stylized, QA-checked) and the Path A result, each at
// hero size and at ~200px on a map-colored tile.
// Path A images come from the Kaggle kernel output, downloaded with
//   kaggle kernels output <user>/stadium-bakeoff -p research/raw/stadiums/kaggle/output
// Usage: node scripts/stadiums/art2/kaggle/bakeoff-sheet.mjs [slug=seed ...]
//   (default seed 11; e.g. fenway-park=23 picks the second seed for Fenway)
import fs from 'node:fs'
import sharp from 'sharp'

const PILOT = ['michigan-stadium', 'yulman-stadium', 'fenway-park', 'wrigley-field', 'sofi-stadium', 'madison-square-garden', 'daytona-international-speedway', 'arthur-ashe-stadium']
const seeds = Object.fromEntries(process.argv.slice(2).map((a) => a.split('=')))
const verified = JSON.parse(fs.readFileSync('scripts/stadiums/refs/verified.json', 'utf8'))
const OUT = 'research/raw/stadiums/kaggle/output'
const HERO = 380, SMALL = 200, TILE = 220, ROW = HERO + 30
const COLS = [['Reference photo', 0], ['Path B (stylized)', HERO + 20], ['Path B at 200px', 2 * HERO + 40], ['Path A (SDXL)', 2 * HERO + TILE + 60], ['Path A at 200px', 3 * HERO + TILE + 80]]
const W = 3 * HERO + 2 * TILE + 100
const parts = []
const tile = async (file) => sharp({ create: { width: TILE, height: TILE, channels: 3, background: '#e8ebe6' } }).composite([{ input: await sharp(file).resize(SMALL, SMALL, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(), left: 10, top: 10 }]).png().toBuffer()
const hero = async (file) => sharp(file).resize(HERO, HERO, { fit: 'contain', background: { r: 232, g: 235, b: 230, alpha: 1 } }).flatten({ background: '#e8ebe6' }).toBuffer()
let labels = ''
for (const [i, slug] of PILOT.entries()) {
  const top = 40 + i * ROW
  const ref = verified[slug][0]
  const b = `scripts/stadiums/art2/out/stylized/${slug}.png`
  const a = `${OUT}/${slug}-s${seeds[slug] || 11}.png`
  if (!fs.existsSync(a)) throw new Error(`missing Path A output: ${a}`)
  parts.push({ input: await sharp(ref.local).resize(HERO, HERO, { fit: 'cover' }).toBuffer(), left: 10, top })
  parts.push({ input: await hero(b), left: 10 + HERO + 20, top })
  parts.push({ input: await tile(b), left: 10 + 2 * HERO + 40, top })
  parts.push({ input: await hero(a), left: 10 + 2 * HERO + TILE + 60, top })
  parts.push({ input: await tile(a), left: 10 + 3 * HERO + TILE + 80, top })
  labels += `<text x="14" y="${top + HERO + 18}" font-family="Arial" font-size="14" font-weight="700">${slug} (reference #${ref.n})</text>`
}
const H = 40 + PILOT.length * ROW
const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${COLS.map(([t, x]) => `<text x="${14 + x}" y="26" font-family="Arial" font-size="16" font-weight="700">${t}</text>`).join('')}${labels}</svg>`
await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } }).composite([...parts, { input: Buffer.from(svg), left: 0, top: 0 }]).png().toFile('docs/art-review/bakeoff.png')
console.log('docs/art-review/bakeoff.png')
