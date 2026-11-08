// Writes docs/art-review/specs/<slug>.md from specs.mjs, the verified
// references and the sampled colors. If a QA result exists
// (docs/art-review/qa/<slug>.json) its pass/fail marks are included.
import fs from 'node:fs'
import { SPECS, TYPE_RULES } from './specs.mjs'

const verified = JSON.parse(fs.readFileSync('scripts/stadiums/refs/verified.json', 'utf8'))
const colors = JSON.parse(fs.readFileSync('scripts/stadiums/refs/colors.json', 'utf8'))
const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
fs.mkdirSync('docs/art-review/specs', { recursive: true })
const refName = (slug, r) => (r === 'naip' ? 'NAIP aerial' : `#${r}`)

for (const [slug, s] of Object.entries(SPECS)) {
  const v = data.venues.find((x) => x.slug === slug)
  const qaFile = `docs/art-review/qa/${slug}.json`
  const qa = fs.existsSync(qaFile) ? JSON.parse(fs.readFileSync(qaFile, 'utf8')) : null
  const L = [`# ${v.name}: model spec`, '', s.summary, '', `Type rule (${s.type}): ${TYPE_RULES[s.type]}`, '', '## Identifying features', '']
  L.push(qa ? '| # | Feature | Reference | QA |' : '| # | Feature | Reference |', qa ? '|---|---|---|---|' : '|---|---|---|')
  s.features.forEach((f, i) => {
    const refs = f.refs.length ? f.refs.map((r) => refName(slug, r)).join(', ') : 'none'
    const mark = qa ? ` ${qa.features?.[f.id]?.pass === true ? 'PASS' : qa.features?.[f.id]?.pass === false ? 'FAIL: ' + (qa.features[f.id].note || '') : 'not checked'} |` : ''
    L.push(`| ${i + 1} | ${f.text} | ${refs} |${mark}`)
  })
  L.push('', '## Colors (sampled from the references)', '', '| Material | Color | Sampled from |', '|---|---|---|')
  for (const [k, c] of Object.entries(colors[slug] || {})) L.push(`| ${k} | \`${c.hex}\` | ${refName(slug, c.ref)} |`)
  L.push('', 'Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.', '')
  L.push('## References', '', '| # | File | License | Author |', '|---|---|---|---|')
  L.push(`| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/${slug}.jpg) | Public domain | USGS |`)
  for (const r of verified[slug]) L.push(`| ${r.n} | [${r.file.replace(/^File:/, '')}](${r.page}) | ${r.license} | ${(r.author || '').replace(/\|/g, '/')} |`)
  L.push('')
  fs.writeFileSync(`docs/art-review/specs/${slug}.md`, L.join('\n'))
}
console.log('wrote', Object.keys(SPECS).length, 'specs')
