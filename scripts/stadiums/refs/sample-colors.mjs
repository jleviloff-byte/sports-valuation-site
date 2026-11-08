// Samples material colors from the picked reference photos (median of a
// hand-placed rectangle, in fractions of the 640x430 cover crop used on the
// review sheets). Output: scripts/stadiums/refs/colors.json, plus a swatch
// sheet (crop + swatch per sample) for checking each sample by eye.
// Usage: node scripts/stadiums/refs/sample-colors.mjs [swatches.png]
import fs from 'node:fs'
import sharp from 'sharp'

// [label, candidate number, x0, y0, x1, y1]
export const SAMPLES = {
  'michigan-stadium': [['seats', 1, 0.30, 0.40, 0.38, 0.50], ['field', 5, 0.30, 0.65, 0.45, 0.75], ['facade brick', 1, 0.04, 0.56, 0.08, 0.66], ['fascia navy', 1, 0.17, 0.68, 0.30, 0.72], ['concourse roof', 1, 0.66, 0.79, 0.74, 0.83]],
  'yulman-stadium': [['seats', 10, 0.10, 0.45, 0.25, 0.53], ['field', 10, 0.40, 0.85, 0.50, 0.92], ['facade metal', 5, 0.42, 0.35, 0.55, 0.43], ['base brick', 5, 0.49, 0.64, 0.55, 0.70]],
  'fenway-park': [['seats grandstand', 16, 0.20, 0.47, 0.45, 0.52], ['seats bleachers', 9, 0.75, 0.36, 0.95, 0.45], ['field', 9, 0.40, 0.55, 0.59, 0.65], ['infield dirt', 9, 0.48, 0.74, 0.55, 0.80], ['green monster', 9, 0.19, 0.42, 0.31, 0.48], ['structure green', 11, 0.20, 0.30, 0.25, 0.40], ['facade brick', 6, 0.30, 0.45, 0.70, 0.60]],
  'wrigley-field': [['seats', 10, 0.10, 0.60, 0.25, 0.66], ['field', 8, 0.35, 0.62, 0.45, 0.70], ['infield dirt', 8, 0.50, 0.545, 0.53, 0.56], ['scoreboard', 11, 0.25, 0.20, 0.45, 0.40], ['roof', 8, 0.40, 0.33, 0.55, 0.36]],
  'sofi-stadium': [['roof', 1, 0.40, 0.40, 0.55, 0.55], ['facade', 7, 0.75, 0.47, 0.88, 0.57], ['lake', 7, 0.30, 0.80, 0.60, 0.90], ['columns', 7, 0.585, 0.40, 0.595, 0.55]],
  'madison-square-garden': [['facade cladding', 17, 0.47, 0.16, 0.58, 0.30], ['glass', 17, 0.17, 0.30, 0.22, 0.45], ['podium', 17, 0.56, 0.45, 0.70, 0.58]],
  'daytona-international-speedway': [['seats (checker)', 17, 0.05, 0.75, 0.95, 0.88], ['facade glass', 17, 0.10, 0.60, 0.90, 0.68], ['facade cladding', 17, 0.10, 0.52, 0.90, 0.55], ['track', 23, 0.40, 0.79, 0.59, 0.88], ['infield grass', 5, 0.70, 0.70, 0.90, 0.85]],
  'arthur-ashe-stadium': [['roof fabric', 5, 0.40, 0.14, 0.60, 0.21], ['seats', 12, 0.82, 0.45, 0.95, 0.65], ['court', 21, 0.45, 0.53, 0.50, 0.57], ['court surround', 21, 0.36, 0.55, 0.40, 0.58], ['steel', 5, 0.30, 0.30, 0.40, 0.40], ['base brick', 5, 0.30, 0.51, 0.40, 0.60]],
}

const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
const out = {}, tiles = []
for (const [slug, list] of Object.entries(SAMPLES)) {
  out[slug] = {}
  for (const [label, n, x0, y0, x1, y1] of list) {
    const file = `research/raw/stadiums/refs-cand/${slug}/${n}.jpg`
    const base = sharp(await sharp(file).resize(640, 430, { fit: 'cover' }).png().toBuffer())
    const box = { left: Math.round(x0 * 640), top: Math.round(y0 * 430), width: Math.max(2, Math.round((x1 - x0) * 640)), height: Math.max(2, Math.round((y1 - y0) * 430)) }
    const { data, info } = await base.clone().extract(box).removeAlpha().raw().toBuffer({ resolveWithObject: true })
    const ch = [[], [], []]
    for (let i = 0; i < info.width * info.height; i++) for (let k = 0; k < 3; k++) ch[k].push(data[i * 3 + k])
    const med = ch.map((a) => a.sort((p, q) => p - q)[a.length >> 1])
    out[slug][label] = { hex: hex(med), ref: n, rect: [x0, y0, x1, y1] }
    // Review tile: context crop with the rectangle outlined, and the swatch.
    const ctx0 = await base.clone().composite([{ input: Buffer.from(`<svg width="640" height="430" xmlns="http://www.w3.org/2000/svg"><rect x="${box.left}" y="${box.top}" width="${box.width}" height="${box.height}" fill="none" stroke="#ff00ff" stroke-width="4"/></svg>`) }]).png().toBuffer()
    const ctx = await sharp(ctx0).resize(240, 161).png().toBuffer()
    const sw = Buffer.from(`<svg width="240" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="40" fill="${hex(med)}"/><rect width="150" height="20" fill="#fff"/><text x="4" y="15" font-family="Arial" font-size="13">${slug.slice(0, 8)} ${label}</text></svg>`)
    if (!process.argv[3] || process.argv[3].split(',').some((k) => (slug + ' ' + label).includes(k))) tiles.push(await sharp({ create: { width: 240, height: 201, channels: 3, background: '#fff' } }).composite([{ input: ctx, top: 0, left: 0 }, { input: sw, top: 161, left: 0 }]).png().toBuffer())
  }
}
fs.writeFileSync('scripts/stadiums/refs/colors.json', JSON.stringify(out, null, 1))
const sheet = process.argv[2]
if (sheet) {
  const COLS = 8
  await sharp({ create: { width: 240 * COLS, height: 201 * Math.ceil(tiles.length / COLS), channels: 3, background: '#fff' } })
    .composite(tiles.map((t, i) => ({ input: t, left: (i % COLS) * 240, top: Math.floor(i / COLS) * 201 }))).png().toFile(sheet)
}
console.log(Object.entries(out).map(([s, o]) => s + ': ' + Object.entries(o).map(([k, v]) => k + ' ' + v.hex).join(', ')).join('\n'))
