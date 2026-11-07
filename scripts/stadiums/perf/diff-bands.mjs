// Row-band diff between two screenshots (cropped to the shorter height).
// Usage: node scripts/stadiums/perf/diff-bands.mjs a.png b.png [band]
import sharp from 'sharp'
const [a, b, bandArg] = process.argv.slice(2)
const band = Number(bandArg || 200)
const [ia, ib] = await Promise.all([a, b].map((f) => sharp(f).raw().ensureAlpha().toBuffer({ resolveWithObject: true })))
const w = ia.info.width, h = Math.min(ia.info.height, ib.info.height)
const out = []
for (let y0 = 0; y0 < h; y0 += band) {
  let n = 0
  for (let y = y0; y < Math.min(h, y0 + band); y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4
    if (Math.abs(ia.data[i] - ib.data[i]) + Math.abs(ia.data[i + 1] - ib.data[i + 1]) + Math.abs(ia.data[i + 2] - ib.data[i + 2]) > 24) n++
  }
  if (n) out.push(`${y0}:${n}`)
}
console.log(`${a} vs ${b} (${ia.info.height} vs ${ib.info.height} tall)`)
console.log(out.join('  ') || 'identical over shared height')
