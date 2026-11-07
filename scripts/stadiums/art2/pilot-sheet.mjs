// Pilot contact sheet: per venue, a reference image (credited), then each
// style variant at hero size and at the sizes it will actually appear on the
// map (48 px and 28 px, on the basemap background color).
// Usage: node scripts/stadiums/art2/pilot-sheet.mjs
import fs from 'node:fs'
import sharp from 'sharp'

const PILOT = ['michigan-stadium', 'yulman-stadium', 'fenway-park', 'wrigley-field', 'sofi-stadium', 'madison-square-garden', 'daytona-international-speedway', 'arthur-ashe-stadium']
const NAMES = { 'michigan-stadium': 'Michigan Stadium', 'yulman-stadium': 'Yulman Stadium', 'fenway-park': 'Fenway Park', 'wrigley-field': 'Wrigley Field', 'sofi-stadium': 'SoFi Stadium', 'madison-square-garden': 'Madison Square Garden', 'daytona-international-speedway': 'Daytona International Speedway', 'arthur-ashe-stadium': 'Arthur Ashe Stadium' }
// Reference shown per venue: index into art-references.json images, or 'naip'.
const REF = { 'michigan-stadium': 0, 'yulman-stadium': 'naip', 'fenway-park': 0, 'wrigley-field': 3, 'sofi-stadium': 0, 'madison-square-garden': 2, 'daytona-international-speedway': 'naip', 'arthur-ashe-stadium': 2 }
const STYLES = [['vector', 'A. Clean vector'], ['painted', 'B. Soft painted'], ['stylized', 'C. Stylized 3D']]
const refs = JSON.parse(fs.readFileSync('research/raw/stadiums/art-references.json', 'utf8'))
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
const text = (w, h, lines, opts = {}) => Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">${lines.map(([t, y, size, weight, fill]) => `<text x="${opts.x ?? 8}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight || 400}" fill="${fill || '#14181D'}"${opts.anchor ? ` text-anchor="${opts.anchor}"` : ''}>${esc(t)}</text>`).join('')}</svg>`)

const H = 300, SPR = 130, ROW = 360, HEAD = 70
const colW = H + SPR
const W = H + 20 + STYLES.length * colW
const comps = [{ input: text(W, HEAD, [['Stadium art pilot: reference vs. three style variants', 30, 24, 700], ['Hero size (300 px here) and actual map size (48 px and 28 px on the basemap color). Same camera and late-afternoon light for every venue.', 56, 14, 400, '#5B6470']]), left: 0, top: 0 }]
for (const [c, [, label]] of STYLES.entries()) comps.push({ input: text(colW, 24, [[label, 18, 16, 700]]), left: H + 20 + c * colW, top: HEAD - 4 })
for (const [r, slug] of PILOT.entries()) {
  const top = HEAD + 24 + r * ROW
  // Reference image + credit.
  const ref = REF[slug]
  let file, credit
  if (ref === 'naip') { file = `research/raw/stadiums/naip/${slug}.jpg`; credit = 'USGS NAIP aerial, public domain' }
  else { const im = refs[slug].images[ref]; file = im.local; credit = `${(im.author || 'Unknown').slice(0, 38)}, ${im.license}` }
  comps.push({ input: await sharp(file).resize(H, H - 40, { fit: 'cover' }).toBuffer(), left: 0, top })
  comps.push({ input: text(H, 40, [[NAMES[slug], 16, 14, 700], [`Ref: ${credit}`, 33, 11, 400, '#5B6470']]), left: 0, top: top + H - 40 })
  for (const [c, [style]] of STYLES.entries()) {
    const left = H + 20 + c * colW
    const f = `scripts/stadiums/art2/out/${style}/${slug}.png`
    comps.push({ input: await sharp({ create: { width: H, height: H, channels: 3, background: '#F7F8F9' } }).composite([{ input: await sharp(f).resize(H - 10, H - 10).toBuffer(), gravity: 'center' }]).png().toBuffer(), left, top })
    // Map-size previews on the basemap background.
    const bg = await sharp({ create: { width: SPR - 10, height: H, channels: 3, background: '#EEF0F1' } })
      .composite([
        { input: await sharp(f).resize(48, 48).toBuffer(), left: 36, top: 60 },
        { input: await sharp(f).resize(28, 28).toBuffer(), left: 46, top: 170 },
        { input: text(SPR - 10, 300, [['48 px', 128, 11, 400, '#5B6470'], ['28 px', 220, 11, 400, '#5B6470']], { x: 60, anchor: 'middle' }), left: 0, top: 0 },
      ]).png().toBuffer()
    comps.push({ input: bg, left: left + H + 4, top })
  }
}
fs.mkdirSync('docs/art-review', { recursive: true })
await sharp({ create: { width: W, height: HEAD + 24 + PILOT.length * ROW, channels: 3, background: '#FFFFFF' } }).composite(comps).png().toFile('docs/art-review/pilot.png')
console.log('docs/art-review/pilot.png')
