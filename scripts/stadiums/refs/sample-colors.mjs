// Samples material colors from the picked reference photos (median of a
// hand-placed rectangle, in fractions of the 640x430 cover crop used on the
// review sheets). Output: scripts/stadiums/refs/colors.json, plus a swatch
// sheet (crop + swatch per sample) for checking each sample by eye.
// Usage: node scripts/stadiums/refs/sample-colors.mjs [swatches.png]
import fs from 'node:fs'
import sharp from 'sharp'

// [label, candidate number, x0, y0, x1, y1]
export const SAMPLES = {
  'michigan-stadium': [['seats', 1, 0.30, 0.40, 0.38, 0.50], ['field', 5, 0.30, 0.65, 0.45, 0.75], ['facade brick', 1, 0.04, 0.56, 0.08, 0.66], ['fascia navy', 1, 0.17, 0.68, 0.30, 0.72], ['concourse roof', 1, 0.66, 0.79, 0.74, 0.83], ['field surround', 1, 0.407, 0.50, 0.414, 0.62]],
  'yulman-stadium': [['seats', 10, 0.10, 0.45, 0.25, 0.53], ['field', 10, 0.40, 0.85, 0.50, 0.92], ['facade metal', 5, 0.42, 0.35, 0.55, 0.43], ['base brick', 5, 0.49, 0.64, 0.55, 0.70], ['end zone and sideline bands', 'naip', 0.425, 0.455, 0.44, 0.47], ['sideline band (photo)', 10, 0.20, 0.585, 0.45, 0.598], ['seats (aerial)', 'naip', 0.36, 0.53, 0.38, 0.55]],
  'fenway-park': [['seats grandstand', 16, 0.20, 0.47, 0.45, 0.52], ['seats bleachers', 9, 0.75, 0.36, 0.95, 0.45], ['seats grandstand (aerial, sun)', 'naip', 0.43, 0.675, 0.46, 0.69], ['seats grandstand (overcast)', 9, 0.88, 0.80, 0.99, 0.86], ['field', 9, 0.40, 0.55, 0.59, 0.65], ['infield dirt', 9, 0.48, 0.74, 0.55, 0.80], ['green monster', 9, 0.19, 0.42, 0.31, 0.48], ['structure green', 11, 0.20, 0.30, 0.25, 0.40], ['facade brick', 6, 0.30, 0.45, 0.70, 0.60]],
  'wrigley-field': [['seats', 10, 0.10, 0.60, 0.25, 0.66], ['seats (lit)', 18, 0.70, 0.48, 0.85, 0.52], ['field', 8, 0.35, 0.62, 0.45, 0.70], ['infield dirt', 8, 0.50, 0.545, 0.53, 0.56], ['scoreboard', 11, 0.25, 0.20, 0.45, 0.40], ['roof', 8, 0.40, 0.33, 0.55, 0.36], ['marquee', 'm1', 0.20, 0.42, 0.38, 0.50], ['exterior', 'm1', 0.02, 0.40, 0.12, 0.55]],
  'sofi-stadium': [['roof', 1, 0.40, 0.40, 0.55, 0.55], ['roof (aerial)', 'naip', 0.35, 0.55, 0.45, 0.65], ['facade', 7, 0.75, 0.47, 0.88, 0.57], ['lake', 7, 0.30, 0.80, 0.60, 0.90], ['columns', 7, 0.585, 0.40, 0.595, 0.55]],
  'madison-square-garden': [['facade cladding', 17, 0.47, 0.16, 0.58, 0.30], ['glass', 17, 0.17, 0.30, 0.22, 0.45], ['podium', 17, 0.56, 0.45, 0.70, 0.58], ['roof', 'naip', 0.36, 0.40, 0.42, 0.46]],
  'daytona-international-speedway': [['seats (checker)', 17, 0.05, 0.75, 0.95, 0.88], ['facade glass', 17, 0.10, 0.60, 0.90, 0.68], ['facade cladding', 17, 0.10, 0.52, 0.90, 0.55], ['track', 23, 0.40, 0.79, 0.59, 0.88], ['infield grass', 5, 0.70, 0.70, 0.90, 0.85]],
  'arthur-ashe-stadium': [['roof fabric', 5, 0.40, 0.14, 0.60, 0.21], ['seats', 12, 0.82, 0.45, 0.95, 0.65], ['court', 21, 0.45, 0.53, 0.50, 0.57], ['court surround', 21, 0.36, 0.55, 0.40, 0.58], ['steel', 5, 0.30, 0.30, 0.40, 0.40], ['roof (aerial)', 'naip', 0.42, 0.40, 0.50, 0.46], ['base brick', 5, 0.30, 0.51, 0.40, 0.60]],
  'landn-federal-credit-union-stadium': [['seats (aerial)', 'naip', 0.58, 0.60, 0.62, 0.66], ['field (aerial)', 'naip', 0.42, 0.60, 0.46, 0.66], ['field', 3, 0.30, 0.62, 0.40, 0.70], ['facade brick', 7, 0.71, 0.50, 0.77, 0.65], ['facade glass', 7, 0.05, 0.15, 0.30, 0.25]],
  'lambeau-field': [['seats', 17, 0.30, 0.80, 0.40, 0.86], ['field', 1, 0.40, 0.62, 0.55, 0.68], ['facade green band', 18, 0.30, 0.40, 0.70, 0.43], ['facade brick', 3, 0.12, 0.40, 0.18, 0.60], ['facade base', 18, 0.30, 0.80, 0.45, 0.84]],
  'rupp-arena': [['seats/crowd', 3, 0.00, 0.60, 0.10, 0.75], ['court', 3, 0.45, 0.72, 0.55, 0.78], ['court surround', 3, 0.31, 0.70, 0.33, 0.80], ['facade metal', 13, 0.45, 0.30, 0.55, 0.40], ['facade glass', 13, 0.30, 0.58, 0.40, 0.68], ['roof (aerial)', 'naip', 0.20, 0.30, 0.30, 0.40]],
  'q2-stadium': [['seats (shade)', 9, 0.03, 0.55, 0.12, 0.65], ['seats (sun)', 4, 0.05, 0.80, 0.30, 0.95], ['field', 1, 0.50, 0.75, 0.70, 0.85], ['canopy steel', 9, 0.03, 0.38, 0.15, 0.42], ['roof (aerial)', 'naip', 0.30, 0.40, 0.35, 0.55], ['facade green slats', 9, 0.30, 0.53, 0.35, 0.65], ['facade glass', 9, 0.62, 0.52, 0.75, 0.60]],
  'bristol-motor-speedway': [['seats gray', 26, 0.60, 0.35, 0.70, 0.42], ['seats red', 26, 0.75, 0.27, 0.85, 0.30], ['track', 26, 0.30, 0.82, 0.45, 0.86], ['infield', 26, 0.55, 0.55, 0.60, 0.60], ['facade steel', 30, 0.40, 0.55, 0.48, 0.65]],
}

const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
// Venues whose source images are not on disk keep their previous samples.
const prev = fs.existsSync('scripts/stadiums/refs/colors.json') ? JSON.parse(fs.readFileSync('scripts/stadiums/refs/colors.json', 'utf8')) : {}
const out = {}, tiles = []
for (const [slug, list] of Object.entries(SAMPLES)) {
  out[slug] = {}
  for (const [label, n, x0, y0, x1, y1] of list) {
    const src = n === 'naip' ? `research/raw/stadiums/naip/${slug}.jpg` : `research/raw/stadiums/refs-cand/${slug}/${n}.jpg`
    if (!fs.existsSync(src)) { if (prev[slug]?.[label]) out[slug][label] = prev[slug][label]; continue }
    // 'naip' samples the USGS aerial (1024 square, fractions of the full image).
    const file = n === 'naip' ? `research/raw/stadiums/naip/${slug}.jpg` : `research/raw/stadiums/refs-cand/${slug}/${n}.jpg`
    const [W, H] = n === 'naip' ? [1024, 1024] : [640, 430]
    const base = sharp(await sharp(file).resize(W, H, { fit: 'cover' }).png().toBuffer())
    const box = { left: Math.round(x0 * W), top: Math.round(y0 * H), width: Math.max(2, Math.round((x1 - x0) * W)), height: Math.max(2, Math.round((y1 - y0) * H)) }
    const { data, info } = await base.clone().extract(box).removeAlpha().raw().toBuffer({ resolveWithObject: true })
    const ch = [[], [], []]
    for (let i = 0; i < info.width * info.height; i++) for (let k = 0; k < 3; k++) ch[k].push(data[i * 3 + k])
    const med = ch.map((a) => a.sort((p, q) => p - q)[a.length >> 1])
    out[slug][label] = { hex: hex(med), ref: n, rect: [x0, y0, x1, y1] }
    // Review tile: context crop with the rectangle outlined, and the swatch.
    const ctx0 = await base.clone().composite([{ input: Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect x="${box.left}" y="${box.top}" width="${box.width}" height="${box.height}" fill="none" stroke="#ff00ff" stroke-width="4"/></svg>`) }]).png().toBuffer()
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
