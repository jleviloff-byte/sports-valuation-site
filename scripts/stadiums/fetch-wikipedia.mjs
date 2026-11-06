// Step 2: fetch every candidate venue article and parse its infobox.
// Output: research/raw/stadiums/infobox.json keyed by final (post-redirect) title.
// Usage: node scripts/stadiums/fetch-wikipedia.mjs [--refresh]
import fs from 'node:fs'
import { getPages, pageUrl } from './lib/wiki.mjs'
import { findInfobox, infoboxFields, refDefinitions, citedUrls, parseCapacity, parseYear, parseYearList, parseCosts, parseCoord, cleanLines } from './lib/infobox.mjs'

const REFRESH = process.argv.includes('--refresh')
const { candidates } = JSON.parse(fs.readFileSync('research/raw/stadiums/candidates.json', 'utf8'))
const titles = Object.keys(candidates)
const pages = await getPages(titles, { refresh: REFRESH })

const pick = (f, ...keys) => { for (const k of keys) if (f[k]) return { key: k, raw: f[k] }; return null }
const out = {}
const missing = []

for (const t of titles) {
  const p = pages[t]
  if (!p) { missing.push(t); continue }
  const final = p.title
  const box = findInfobox(p.wikitext)
  const f = infoboxFields(box)
  const defs = refDefinitions(p.wikitext)
  const cap = pick(f, 'capacity', 'seating_capacity', 'seating')
  const opened = pick(f, 'opened', 'opening', 'opened_date', 'opening_date', 'inauguration_date', 'built')
  const cost = pick(f, 'construction_cost', 'cost', 'built_cost')
  const coordRaw = f.coordinates || f.coord || (p.wikitext.match(/\{\{\s*coord\s*\|[^}]*display\s*=\s*[^}]*title[^}]*\}\}/i) || [])[0]
  const rec = out[final] ||= {
    title: final, revid: p.revid, url: pageUrl(final, p.revid), fetched: p.fetched,
    requested_as: [], has_infobox: !!box,
    infobox_type: box ? box.match(/\{\{\s*(?:Infobox\s*)?([^\n|]*)/i)[1].trim() : null,
    capacity_raw: cap?.raw ?? null, capacity_entries: cap ? parseCapacity(cap.raw) : [], capacity_cites: cap ? citedUrls(cap.raw, defs) : [],
    opened: opened ? { field: opened.key, ...parseYear(opened.raw) } : null,
    opened_cites: opened ? citedUrls(opened.raw, defs) : [],
    renovated: parseYearList(f.renovated), expanded: parseYearList(f.expanded),
    costs: cost ? parseCosts(cost.raw) : [], cost_raw: cost?.raw ?? null, cost_cites: cost ? citedUrls(cost.raw, defs) : [],
    roof: f.roof ? cleanLines(f.roof).join(' ') : null, roof_type: f.roof_type ? cleanLines(f.roof_type).join(' ') : null,
    surface: f.surface ? cleanLines(f.surface)[0] : null,
    coord: parseCoord(coordRaw || ''),
    location: f.location ? cleanLines(f.location).join(', ') : (f.address ? cleanLines(f.address).join(', ') : null),
    closed: f.closed ? cleanLines(f.closed).join(' ').replace(/@@START(\d{4})@@/g, '$1') : null,
    status: f.status ? cleanLines(f.status).join(' ').replace(/@@START(\d{4})@@/g, '$1') : null,
  }
  rec.requested_as.push(t)
}

fs.writeFileSync('research/raw/stadiums/infobox.json', JSON.stringify({ generated: new Date().toISOString(), venues: out, missing }, null, 1))
const vs = Object.values(out)
console.log(`articles: ${vs.length} (from ${titles.length} candidate titles), missing: ${missing.length}`, missing)
console.log(`no infobox: ${vs.filter((v) => !v.has_infobox).length}; no capacity: ${vs.filter((v) => !v.capacity_entries.length).length}; no coord: ${vs.filter((v) => !v.coord).length}; no opened: ${vs.filter((v) => !v.opened?.value).length}; no cost: ${vs.filter((v) => !v.costs.length).length}`)
