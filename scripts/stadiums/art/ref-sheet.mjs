// Review sheet: per venue, the NAIP aerial plus its Commons references.
// Usage: node scripts/stadiums/art/ref-sheet.mjs <out.png> <slug> [slug ...]
import fs from 'node:fs'
import sharp from 'sharp'
const [out, ...slugs] = process.argv.slice(2)
const refs = JSON.parse(fs.readFileSync('research/raw/stadiums/art-references.json', 'utf8'))
const T = 300, cols = 5
const tiles = []
for (const [r, s] of slugs.entries()) {
  const imgs = [`research/raw/stadiums/naip/${s}.jpg`, ...(refs[s]?.images || []).map((i) => i.local).filter(Boolean)].slice(0, cols)
  for (const [c, f] of imgs.entries()) {
    if (!fs.existsSync(f)) continue
    tiles.push({ input: await sharp(f).resize(T, T, { fit: 'cover' }).toBuffer(), left: c * T, top: r * T })
    const lab = c === 0 ? `${s} NAIP` : `${c}: ${(refs[s].images[c - 1].license || '').replace(/&/g, '&amp;')}`
    tiles.push({ input: Buffer.from(`<svg width="${T}" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="${T}" height="22" fill="rgba(255,255,255,0.85)"/><text x="6" y="16" font-family="Arial" font-size="13" font-weight="700">${lab}</text></svg>`), left: c * T, top: r * T })
  }
}
await sharp({ create: { width: cols * T, height: slugs.length * T, channels: 3, background: '#333' } }).composite(tiles).png().toFile(out)
console.log(out)
