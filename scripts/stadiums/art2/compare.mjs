// Quick review strip: for each venue, the primary reference next to the model.
// Usage: node scripts/stadiums/art2/compare.mjs out.png style slug [slug ...]
import fs from 'node:fs'
import sharp from 'sharp'
const [out, style, ...slugs] = process.argv.slice(2)
const verified = JSON.parse(fs.readFileSync('scripts/stadiums/refs/verified.json', 'utf8'))
const parts = []
for (const [i, slug] of slugs.entries()) {
  parts.push({ input: await sharp(verified[slug][0].local).resize(520, 420, { fit: 'cover' }).toBuffer(), left: 0, top: i * 430 })
  parts.push({ input: await sharp(`scripts/stadiums/art2/out/${style}/${slug}.png`).resize(420, 420).flatten({ background: '#e8ebe6' }).toBuffer(), left: 530, top: i * 430 })
}
await sharp({ create: { width: 950, height: slugs.length * 430, channels: 3, background: '#ffffff' } }).composite(parts).png().toFile(out)
console.log(out)
