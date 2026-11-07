// Labeled contact sheet of NAIP aerials (north up) for review.
// Usage: node scripts/stadiums/art/naip-sheet.mjs <out.png> <slug> [slug ...]
import fs from 'node:fs'
import sharp from 'sharp'
const [out, ...slugs] = process.argv.slice(2)
const T = 420, cols = Math.min(4, slugs.length), rows = Math.ceil(slugs.length / cols)
const tiles = []
for (const [i, s] of slugs.entries()) {
  const img = await sharp(`research/raw/stadiums/naip/${s}.jpg`).resize(T, T).toBuffer()
  // North arrow and compass ticks so bearings can be read off the image.
  const label = Buffer.from(`<svg width="${T}" height="${T}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${T}" height="26" fill="rgba(255,255,255,0.85)"/>
    <text x="8" y="18" font-family="Arial" font-size="15" font-weight="700">${s}</text>
    <text x="${T - 22}" y="46" font-family="Arial" font-size="16" font-weight="700" fill="#ff0">N</text>
    <line x1="${T - 16}" y1="76" x2="${T - 16}" y2="52" stroke="#ff0" stroke-width="3"/>
    <circle cx="${T / 2}" cy="${T / 2}" r="3" fill="#ff0"/></svg>`)
  tiles.push({ input: img, left: (i % cols) * T, top: Math.floor(i / cols) * T }, { input: label, left: (i % cols) * T, top: Math.floor(i / cols) * T })
}
await sharp({ create: { width: cols * T, height: rows * T, channels: 3, background: '#222' } }).composite(tiles).png().toFile(out)
console.log(out)
