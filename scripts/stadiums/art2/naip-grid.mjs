// NAIP crop with a labeled pixel grid, for tracing features by eye.
// Usage: node scripts/stadiums/art2/naip-grid.mjs <slug> x0 y0 size scale out.png [step]
import sharp from 'sharp'
const [slug, x0, y0, size, scale, out, stepArg] = process.argv.slice(2)
const X0 = +x0, Y0 = +y0, S = +size, K = +scale, step = +(stepArg || 32)
const img = await sharp(`research/raw/stadiums/naip/${slug}.jpg`).extract({ left: X0, top: Y0, width: S, height: S }).resize(S * K, S * K, { kernel: 'lanczos3' }).toBuffer()
let svg = `<svg width="${S * K}" height="${S * K}" xmlns="http://www.w3.org/2000/svg">`
for (let v = Math.ceil(X0 / step) * step; v < X0 + S; v += step) { const p = (v - X0) * K; svg += `<line x1="${p}" y1="0" x2="${p}" y2="${S * K}" stroke="#ff0" stroke-opacity="0.55" stroke-width="1"/><text x="${p + 2}" y="12" font-size="11" font-family="Arial" fill="#ff0" stroke="#000" stroke-width="0.4">${v}</text>` }
for (let v = Math.ceil(Y0 / step) * step; v < Y0 + S; v += step) { const p = (v - Y0) * K; svg += `<line x1="0" y1="${p}" x2="${S * K}" y2="${p}" stroke="#ff0" stroke-opacity="0.55" stroke-width="1"/><text x="2" y="${p - 2}" font-size="11" font-family="Arial" fill="#ff0" stroke="#000" stroke-width="0.4">${v}</text>` }
svg += '</svg>'
await sharp(img).composite([{ input: Buffer.from(svg) }]).png().toFile(out)
console.log(out)
