// Numbered contact sheet of a venue's reference candidates, for review by eye.
// Usage: node scripts/stadiums/refs/cand-sheet.mjs <slug> <out.png>
import fs from 'node:fs'
import sharp from 'sharp'

const [slug, out] = process.argv.slice(2)
const dir = `research/raw/stadiums/refs-cand/${slug}`
const cands = JSON.parse(fs.readFileSync(`${dir}/candidates.json`, 'utf8'))
const W = 240, H = 160, COLS = 6
const parts = []
for (const [i, c] of cands.entries()) {
  if (!fs.existsSync(c.local)) continue
  const img = await sharp(c.local).resize(W, H, { fit: 'cover' }).toBuffer()
  const tag = Buffer.from(`<svg width="34" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="34" height="22" fill="#000"/><text x="5" y="16" fill="#fff" font-family="Arial" font-size="15" font-weight="700">${c.n}</text></svg>`)
  const left = (i % COLS) * W, top = Math.floor(i / COLS) * H
  parts.push({ input: img, left, top }, { input: tag, left, top })
}
const rows = Math.ceil(cands.length / COLS)
await sharp({ create: { width: W * COLS, height: H * rows, channels: 3, background: '#fff' } }).composite(parts).png().toFile(out)
console.log(out)
