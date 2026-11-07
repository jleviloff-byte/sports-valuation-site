// Packs the 128px map sprites into two sprite sheets:
//   atlas-0: the 50 largest venues (loaded with the page)
//   atlas-1: everything else (loaded after the first map render)
// Writes public/stadiums/atlas/atlas-{0,1}.webp and research/raw/stadiums/atlas.json
// ({ slug: [sheet, col, row] }, plus sheet grid sizes). build-public.mjs copies
// the coordinates into public/stadiums/index.json so no extra request is needed.
//
// Works on whatever sprites exist in public/stadiums/sprites, so it is rerun
// whenever the art changes. Usage: node scripts/stadiums/art/build-atlas.mjs
import fs from 'node:fs'
import sharp from 'sharp'

const TILE = 96 // 2x-sharp up to 48 px on screen; larger venues switch to the 256px sprite
const FIRST = 50
const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const have = (s) => fs.existsSync(`public/stadiums/sprites/${s}-128.webp`)
const order = [...data.venues].sort((a, b) => b.capacity - a.capacity).map((v) => v.slug).filter(have)
const sheets = [order.slice(0, FIRST), order.slice(FIRST)]
fs.mkdirSync('public/stadiums/atlas', { recursive: true })
const map = {}
const meta = []
for (const [n, slugs] of sheets.entries()) {
  if (!slugs.length) continue
  const cols = Math.ceil(Math.sqrt(slugs.length))
  const rows = Math.ceil(slugs.length / cols)
  const comps = await Promise.all(slugs.map(async (s, i) => ({ input: await sharp(`public/stadiums/sprites/${s}-128.webp`).resize(TILE, TILE).png().toBuffer(), left: (i % cols) * TILE, top: Math.floor(i / cols) * TILE })))
  slugs.forEach((s, i) => { map[s] = [n, i % cols, Math.floor(i / cols)] })
  const file = `public/stadiums/atlas/atlas-${n}.webp`
  await sharp({ create: { width: cols * TILE, height: rows * TILE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite(comps).webp({ quality: 82, alphaQuality: 90, effort: 6 }).toFile(file)
  meta.push({ sheet: n, cols, rows, count: slugs.length, kb: Math.round(fs.statSync(file).size / 1024) })
}
fs.writeFileSync('research/raw/stadiums/atlas.json', JSON.stringify({ tile: TILE, sheets: meta, venues: map }, null, 1))
console.log(meta.map((m) => `atlas-${m.sheet}: ${m.count} sprites, ${m.cols}x${m.rows}, ${m.kb} KB`).join('\n'))
