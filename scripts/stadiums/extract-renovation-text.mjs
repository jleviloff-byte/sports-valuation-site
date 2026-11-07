// For each venue's most recent renovation year, pull the sentences in its
// Wikipedia article that mention that year together with renovation words.
// Output: research/raw/stadiums/renovation-sentences.json, the evidence behind
// the hand-written scopes in scripts/stadiums/renovation-scopes.json.
//
// Usage: node scripts/stadiums/extract-renovation-text.mjs
import fs from 'node:fs'
import wtf from 'wtf_wikipedia'
import { getPages } from './lib/wiki.mjs'

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const { venues: wiki } = JSON.parse(fs.readFileSync('research/raw/stadiums/infobox.json', 'utf8'))
const byUrl = Object.fromEntries(Object.values(wiki).map((w) => [w.url, w]))
const KW = /renovat|expan|addition|added|upgrade|improv|rebuil|reconstruct|refurbish|install|replac|new (?:video|score|seat|club|suite|press|concourse|deck|roof|turf|field|lights?)|project|overhaul|modern/i

const targets = data.venues.filter((v) => v.renovations.length).map((v) => ({ v, w: byUrl[v.sources.wikipedia], reno: v.renovations.at(-1) }))
const pages = await getPages(targets.map((t) => t.w.requested_as[0]))
const out = {}
for (const { v, w, reno } of targets) {
  const p = pages[w.requested_as[0]]
  if (!p) continue
  const sentences = wtf(p.wikitext).sentences().map((s) => s.text()).filter(Boolean)
  const years = [reno.year, reno.year - 1, reno.year - 2]
  const hits = sentences.filter((s) => years.some((y) => s.includes(String(y))) && KW.test(s))
  out[v.slug] = { name: v.name, year: reno.year, has_description: !!reno.description, url: w.url, sentences: hits.slice(0, 4).map((s) => s.slice(0, 420)) }
}
fs.writeFileSync('research/raw/stadiums/renovation-sentences.json', JSON.stringify(out, null, 1))
const need = Object.values(out).filter((x) => !x.has_description)
console.log(`venues with a renovation: ${targets.length}; need scope: ${need.length}; with evidence: ${need.filter((x) => x.sentences.length).length}`)
