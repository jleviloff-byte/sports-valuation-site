// Step 5: write scripts/stadiums/data-qa.md and scripts/stadiums/upcoming.md
// from data/stadiums.json and research/raw/stadiums/build-report.json.
// Usage: node scripts/stadiums/build-qa.mjs
import fs from 'node:fs'

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const rep = JSON.parse(fs.readFileSync('research/raw/stadiums/build-report.json', 'utf8'))
const upcomingRaw = JSON.parse(fs.readFileSync('research/raw/stadiums/upcoming-raw.json', 'utf8'))
const V = data.venues
const q = rep.qa
const n = (x) => (x == null ? 'N/A' : Number(x).toLocaleString('en-US'))
const money = (x) => (x == null ? 'N/A' : x >= 1e9 ? `$${(x / 1e9).toFixed(2)}B` : x >= 1e6 ? `$${(x / 1e6).toFixed(1)}M` : `$${n(x)}`)
const link = (t, u) => (u ? `[${t}](${u.split(' ')[0]})` : t)
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
const table = (head, rows) => rows.length ? [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.map(esc).join(' | ')} |`)].join('\n') : '_None._'
const byTitle = Object.fromEntries(V.map((v) => [v.sources.wikipedia, v]))
const count = (arr, f) => arr.reduce((m, x) => { for (const k of [].concat(f(x))) m[k] = (m[k] || 0) + 1; return m }, {})

const out = []
const P = (...s) => out.push(...s)

P('# Stadium data QA report', '',
  `Generated ${data.generated.slice(0, 10)} by \`scripts/stadiums/build-qa.mjs\`. Data: \`data/stadiums.json\`.`, '')

// ── Summary
const official = q.official || []
const leagues = count(V, (v) => [...new Set(v.tenants.map((t) => t.league))])
const types = count(V, (v) => v.venue_type)
P('## Summary', '',
  `- **${V.length} venues included** (US, active, capacity >= 15,000). ${rep.excluded.length} candidates excluded (listed at the end).`,
  `- By type: ${Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, c]) => `${k} ${c}`).join(', ')}.`,
  `- By tenant league (a venue counts once per league): ${Object.entries(leagues).sort((a, b) => b[1] - a[1]).map(([k, c]) => `${k} ${c}`).join(', ')}.`,
  `- States represented: ${Object.keys(count(V, (v) => v.state)).length}. Alaska and Hawaii: ${V.filter((v) => ['AK', 'HI'].includes(v.state)).map((v) => `${v.name} (${v.state})`).join(', ') || 'none'}.`,
  `- Tenants linked to an existing team page on the site: ${V.flatMap((v) => v.tenants).filter((t) => t.team_page_slug).length}.`,
  `- Official-site cross-check: ${official.length} venues have at least one field confirmed or corrected from an official team, venue or school page (details below). Every other value is single-source Wikipedia.`,
  `- Largest: ${V.slice(0, 3).map((v) => `${v.name} ${n(v.capacity)}`).join('; ')}. Pilot check: Michigan Stadium ${n(V.find((v) => v.slug === 'michigan-stadium')?.capacity)}, Yulman Stadium ${n(V.find((v) => v.slug === 'yulman-stadium')?.capacity)}.`, '')

// ── Method
P('## Method (short)', '',
  '1. Candidates come from current Wikipedia list pages and 2026 schedules (NFL, MLB, NBA, NHL, MLS, NWSL, WNBA, FBS, FCS, D1 basketball, NASCAR Cup, IndyCar, F1, tennis) plus 7 hand-picked neutral sites. Every page is cached with its revision id in `research/raw/stadiums/wiki/`.',
  '2. Capacity is read from the venue article infobox: standing room, "expandable to" maxima, record crowds and historical capacities are dropped; with several configurations, the primary tenant\'s sport is the headline and the rest go in `capacity_by_sport`.',
  '3. Official team, venue or school pages override Wikipedia where they state a figure (`scripts/stadiums/overrides.json`, with URL and quote).',
  '4. Coordinates are the OpenStreetMap footprint centroid when the OSM match is credible (name match or contains the Wikipedia point), else Wikipedia GeoData.',
  '5. State comes from the list page\'s State/Location column, else point-in-polygon on coordinates. Only venues inside the US are kept.',
  '6. `cost_real` = nominal x CPI-U(2025) / CPI-U(cost year). The cost year is the opening year unless an official source says otherwise. CPI-U 2025 is the mean of 11 months (BLS did not collect October 2025).',
  '7. Rankings are computed at build time (ties share a rank). Sport ranks use that sport\'s configuration capacity.', '')

// ── Missing fields
const miss = {
  opened: V.filter((v) => v.opened == null),
  cost_nominal: V.filter((v) => v.cost_nominal == null),
  'latest renovation scope': V.filter((v) => v.renovations.length && !v.renovations.at(-1).description),
  'latest renovation cost': V.filter((v) => v.renovations.length && v.renovations.at(-1).cost_nominal == null),
  'roof (inferred, not sourced)': (q.inferred || []).filter((i) => i.field === 'roof'),
  'OSM footprint': V.filter((v) => !v.osm_id),
}
P('## Missing fields', '', 'Counts are over included venues. Missing values are stored as `null` and display as "N/A".', '',
  table(['Field', 'Missing', 'Share'], Object.entries(miss).map(([k, a]) => [k, a.length, `${Math.round((a.length / V.length) * 100)}%`])), '')
P('### Missing opened year', '', miss.opened.map((v) => `- ${link(v.name, v.sources.wikipedia)}`).join('\n') || '_None._', '')
P('### Missing construction cost', '', `${miss.cost_nominal.length} venues. Most are college venues whose infobox has no cost field.`, '',
  miss.cost_nominal.filter((v) => v.tenants.some((t) => ['NFL', 'MLB', 'NBA', 'NHL', 'MLS'].includes(t.league))).map((v) => `- Pro venue: ${link(v.name, v.sources.wikipedia)}`).join('\n'), '')
P('### Renovation scope', '',
  `Scopes are written from the venue's Wikipedia text for that renovation year (evidence sentences kept in research/raw/stadiums/renovation-sentences.json, scopes in scripts/stadiums/renovation-scopes.json) or taken from an official page. ${V.filter((v) => v.renovations.length && v.renovations.at(-1).description).length} of ${V.filter((v) => v.renovations.length).length} venues with a renovation now have a scope for the most recent one. The rest show "N/A": the article either has no sentence about that year's work or the sentence does not say what was done. Costs are filled only where that text states a figure for the project (not proposals, estimates or one funder's share).`, '')
P('### No OSM footprint', '', `${miss['OSM footprint'].length} venues have no matched OSM polygon (needed for Phase 2 art). Coordinates for these fall back to Wikipedia.`, '',
  miss['OSM footprint'].slice(0, 60).map((v) => v.name).join(', ') + (miss['OSM footprint'].length > 60 ? ', ...' : ''), '')

// ── Conflicts
const conf = q.conflicts || []
P('## Conflicts between sources', '',
  `### Official site vs Wikipedia (resolved to official)`, '',
  table(['Venue', 'Wikipedia', 'Official', 'Source'], conf.filter((c) => c.resolved === 'official').map((c) => [c.title, c.a, c.b, link('official', c.url)])), '',
  '### Wikipedia infobox vs Wikipedia list page (unresolved; infobox used)', '',
  table(['Venue', 'Infobox', 'List page', 'Link'], conf.filter((c) => !c.resolved && /List|Women's|Series/.test(c.b)).map((c) => [c.title, c.a, c.b, link('list', c.url)])), '',
  '### OSM capacity tag disagrees by more than 1,000 (informational)', '',
  table(['Venue', 'Ours', 'OSM tag', 'Link'], conf.filter((c) => /OSM/.test(c.b)).map((c) => [c.title, c.a, c.b, link('osm', c.url)])), '',
  '### Racetrack capacity: infobox vs List of NASCAR tracks', '',
  table(['Venue', 'Infobox', 'NASCAR list', 'Link'], conf.filter((c) => /NASCAR/.test(c.b)).map((c) => [c.title, c.a, c.b, link('wiki', c.url)])), '',
  '### Official pages that state a different or looser figure (kept Wikipedia; noted)', '',
  (q.official_notes || []).map((o) => `- **${o.title}**: ${o.note} ${link('source', o.url)}`).join('\n') || '_None._', '',
  '### State: list page vs coordinates', '',
  (q.state_mismatch || []).map((s) => `- ${s.title}: list says ${s.listed}, coordinates fall in ${s.by_coordinates} (list used; coarse state outlines on a river border)`).join('\n') || '_None._', '',
  '### Coordinates: OSM centroid more than 1 km from Wikipedia', '',
  table(['Venue', 'km', 'OSM', 'Wikipedia'], (q.coordinate || []).map((c) => [c.title, c.km, link('osm', c.osm), link('wiki', c.wiki)])), '')

// ── Near cutoff
const ver = new Set(official.filter((o) => o.fields.includes('capacity')).map((o) => o.title))
P('## Venues within 1,000 of the 15,000 cutoff', '',
  'These flip in or out on small changes. "Official" means the school or venue site confirmed the figure.', '',
  table(['Venue', 'Capacity', 'Status', 'Official check', 'Confidence'], (q.near || []).sort((a, b) => b.capacity - a.capacity).map((x) => [x.title, n(x.capacity), x.side, ver.has(x.title) ? 'confirmed' : 'not confirmed', x.confidence])), '',
  '### Excluded on seated capacity, but another configuration is 15,000+', '',
  'Kept out because the brief defines capacity as current seated capacity. Worth a decision for the ones marked expandable or redevelopment.', '',
  table(['Venue', 'Seated', 'Other figures in infobox'], (q.other_config || []).map((x) => [x.title, n(x.capacity), x.other])), '')

// ── Low confidence
const sanity = []
for (const v of V) {
  if (v.cost_nominal != null && v.cost_nominal < 1e6 && v.opened >= 1975) sanity.push([v.name, `cost ${money(v.cost_nominal)} for a ${v.opened} opening looks too low`])
  if (v.cost_nominal != null && v.cost_nominal > 1e8 && v.opened < 1950) sanity.push([v.name, `cost ${money(v.cost_nominal)} for a ${v.opened} opening is probably a later renovation`])
  if (v.opened != null && (v.opened > 2026 || v.opened < 1850)) sanity.push([v.name, `opened ${v.opened}`])
  if (v.venue_type === 'racetrack' && v.opened >= 2015 && v.opened <= 2026) sanity.push([v.name, `racetrack opened ${v.opened}: may be a reopening year`])
  for (const [s, c] of Object.entries(v.capacity_by_sport)) if (c != null && Math.abs(c - v.capacity) / v.capacity > 0.4) sanity.push([v.name, `${s} configuration ${n(c)} vs headline ${n(v.capacity)}`])
  if (v.cost_pre_1913) sanity.push([v.name, `cost year ${v.cost_year} is before 1913; real cost uses 1913 CPI`])
}
for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) {
  const a = V[i], b = V[j]
  const d = Math.hypot((a.lng - b.lng) * 111.32 * Math.cos((a.lat * Math.PI) / 180), (a.lat - b.lat) * 110.54)
  if (d < 0.25) sanity.push([`${a.name} / ${b.name}`, `coordinates ${Math.round(d * 1000)} m apart: check both point at their own building`])
}
P('## Low confidence', '',
  '### Capacity chosen from several infobox figures', '',
  table(['Venue', 'Used', 'Why', 'Link'], (q.low || []).filter((l) => l.field === 'capacity').map((l) => [l.title, n(l.value), (l.why || '').slice(0, 160), link('wiki', l.url)])), '',
  '### Opened year ambiguous', '',
  table(['Venue', 'Used', 'Why'], (q.low || []).filter((l) => l.field === 'opened').map((l) => [l.title, l.value, (l.why || '').slice(0, 120)])), '',
  '### Cost given as a range (stored as null)', '',
  table(['Venue', 'Source text'], (q.low || []).filter((l) => l.field === 'cost_nominal').map((l) => [l.title, (l.why || '').slice(0, 140)])), '',
  '### Sanity checks (values that look wrong)', '',
  table(['Venue', 'Issue'], sanity), '',
  '### Racetrack capacities are estimates', '',
  `All ${V.filter((v) => v.capacity_type === 'estimated').length} racetracks carry \`capacity_type: "estimated"\`. No track site read in the cross-check published a seat count; figures are Wikipedia's. COTA's 120,000 and Barber's 90,000 likely include general admission.`, '',
  table(['Track', 'Capacity', 'Source'], V.filter((v) => v.capacity_type === 'estimated').map((v) => [v.name, n(v.capacity), link('source', v.sources.capacity)])), '',
  '### Neutral-site venues (hand-picked inclusion)', '',
  table(['Venue', 'Capacity', 'Events'], (q.neutral || []).map((x) => [x.title, n(x.capacity), x.events.join(', ')])), '',
  '### Infobox lists a "closed" date (kept: each appears on a current list or schedule)', '',
  (q.closed || []).map((c) => `- ${link(c.title, c.url)}: "${c.closed}"`).join('\n') || '_None._', '',
  '### Roof inferred (no roof field in source)', '',
  `${(q.inferred || []).length} venues. Arenas are stored as \`dome\` (fixed roof); outdoor stadiums with no roof field as \`open\`. Rule-based, not sourced.`, '')

// ── Official cross-check coverage
P('## Official-site cross-check coverage', '',
  'Done for every NFL, MLB, NBA, NHL and MLS venue, the six pilot venues, all racetracks and tennis venues, and the near-cutoff college venues. Many official sites do not publish a seat count (most MLB ballpark pages on mlb.com, most racetracks, many arenas), or blocked automated reads. Those stay single-source.', '',
  table(['Venue', 'Fields confirmed or corrected'], official.map((o) => [o.title, o.fields.join(', ')])), '')

// ── Excluded
const ex = rep.excluded
P('## Excluded candidates', '',
  table(['Candidate', 'Reason', 'Source'], ex.sort((a, b) => a.reason.localeCompare(b.reason)).map((e) => [e.title, e.reason, link('source', e.source)])), '')

fs.writeFileSync('scripts/stadiums/data-qa.md', out.join('\n') + '\n')

// ── upcoming.md
const up = upcomingRaw.filter((u) => u.venue && !/^\s*$/.test(u.venue))
const seenU = new Set()
fs.writeFileSync('scripts/stadiums/upcoming.md', [
  '# Venues under construction or planned (excluded)', '',
  `From the "future" tables of the Wikipedia list pages (fetched ${data.generated.slice(0, 10)}). Not verified against official sources. Capacity and opening are as listed.`, '',
  table(['Venue', 'Team', 'Capacity', 'Planned opening', 'Source'], up.filter((u) => !seenU.has(u.venue) && seenU.add(u.venue)).map((u) => [u.venue, u.team, n(u.capacity), u.opening || 'N/A', link('list', u.source)])), '',
].join('\n'))
console.log(`data-qa.md: ${out.length} lines; sanity issues ${sanity.length}; upcoming ${seenU.size}`)
