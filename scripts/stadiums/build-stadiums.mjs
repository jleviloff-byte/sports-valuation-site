// Step 4: merge Wikipedia + OSM + official-site overrides into data/stadiums.json,
// compute real costs and rankings, and write scripts/stadiums/data-qa.md.
//
// Rules (see data-qa.md "Method" for the reader-facing version):
// - Never fabricate. A value that cannot be read from a source is null.
// - Capacity is current seated capacity. Standing room, expandable maxima and
//   record crowds are dropped. Official-site overrides win over Wikipedia.
// - Rankings are computed here from capacity, never entered by hand.
//
// Usage: node scripts/stadiums/build-stadiums.mjs
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { geoContains } from 'd3-geo'
import { feature } from 'topojson-client'
import { chooseCapacity } from './lib/infobox.mjs'
import { pageUrl } from './lib/wiki.mjs'

const ROOT = path.resolve('.')
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'))
const CUTOFF = 15000
const NEAR = 1000

const { candidates } = read('research/raw/stadiums/candidates.json')
const { venues: wiki } = read('research/raw/stadiums/infobox.json')
const geodata = read('research/raw/stadiums/wiki/_coordinates.json')
const cpi = read('scripts/stadiums/cpi-u.json')
const overrides = fs.existsSync('scripts/stadiums/overrides.json') ? read('scripts/stadiums/overrides.json') : {}
const statesTopo = read('node_modules/us-atlas/states-10m.json')
const states = feature(statesTopo, statesTopo.objects.states).features

const USPS = { Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR', California: 'CA', Colorado: 'CO', Connecticut: 'CT', Delaware: 'DE', 'District of Columbia': 'DC', Florida: 'FL', Georgia: 'GA', Hawaii: 'HI', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA', Kansas: 'KS', Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD', Massachusetts: 'MA', Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS', Missouri: 'MO', Montana: 'MT', Nebraska: 'NE', Nevada: 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH', Oklahoma: 'OK', Oregon: 'OR', Pennsylvania: 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX', Utah: 'UT', Vermont: 'VT', Virginia: 'VA', Washington: 'WA', 'West Virginia': 'WV', Wisconsin: 'WI', Wyoming: 'WY', 'Puerto Rico': 'PR' }
const USPS_SET = Object.fromEntries(Object.values(USPS).map((c) => [c, true]))
// State from a list row: State column (code or name), else a state name in Location.
function listedState(a) {
  const s = (a.state_col || '').trim()
  if (USPS_SET[s.toUpperCase()]) return s.toUpperCase()
  if (USPS[s]) return USPS[s]
  const loc = a.location || ''
  if (/\bD\.\s?C\.|District of Columbia/.test(loc)) return 'DC'
  // Check comma-separated parts from the right ("Kansas City, Missouri" -> MO).
  for (const part of loc.split(',').map((p) => p.replace(/\s*U\.?S\.?A?\.?$|\s*United States$/, '').trim()).reverse()) {
    if (USPS[part]) return USPS[part]
    if (USPS_SET[part]) return part
  }
  return null
}
// us-atlas outlines are simplified, so lakefront and coastal venues can land in
// the water. Fall back to a ring of points ~3 km out before calling it non-US.
const stateAt = (lat, lng) => {
  const hit = (la, ln) => states.find((f) => geoContains(f, [ln, la]))
  let s = hit(lat, lng)
  for (let k = 0; !s && k < 16; k++) { const a = (k / 16) * 2 * Math.PI; s = hit(lat + 0.027 * Math.sin(a), lng + 0.036 * Math.cos(a)) }
  return s ? USPS[s.properties.name] ?? null : null
}

// Site teams (same id rule as data/allTeams.js teamIdFor).
const teamIdFor = (name) => name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const siteTeams = {}
for (const [L, l] of Object.entries({ NFL: 'nfl', NBA: 'nba', MLB: 'mlb', NHL: 'nhl', MLS: 'mls' })) {
  const mod = await import(pathToFileURL(path.join(ROOT, 'data', `enrichments-${l}.js`)).href)
  for (const name of Object.keys(Object.values(mod)[0])) siteTeams[teamIdFor(name)] = { name, league: L }
}

const LEAGUE_ORDER = ['NFL', 'MLB', 'NBA', 'NHL', 'MLS', 'NCAA FBS', 'NCAA FCS', 'NCAA D1 basketball', 'NWSL', 'WNBA', 'NASCAR Cup', 'IndyCar', 'Formula 1', 'Tennis', 'Neutral site']
const TEMP_CIRCUIT = /street (circuit|course)|strip circuit|autodrome/i

const osmFor = (t) => {
  const f = path.join(ROOT, 'research/raw/stadiums/osm', t.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null
}
const distKm = (a, b) => Math.hypot((a.lng - b.lng) * 111.32 * Math.cos((a.lat * Math.PI) / 180), (a.lat - b.lat) * 110.54)
const slugify = (s) => teamIdFor(s.replace(/\s*\(.*?\)\s*/g, ' '))
// Current team names that differ from the site's team keys.
const TEAM_ALIASES = { 'utah-mammoth': 'utah-hockey-club', 'columbus-crew': 'columbus-crew-sc' }
const cleanTeam = (s) => s.replace(/\s*\((baseball|football|basketball|soccer|ice hockey|hockey|NFL|MLB|NBA|NHL|MLS)\)\s*$/i, '').replace(/\s+(men|women)['’]s\s+basketball$/i, '').replace(/\s+(men|women)(['’]s)?$/i, '').replace(/\s+(football|basketball|baseball|soccer|program)$/i, '').trim()

// Collapse candidates onto final article titles.
const byArticle = {}
for (const [req, c] of Object.entries(candidates)) {
  const w = Object.values(wiki).find((v) => v.requested_as.includes(req))
  const key = w ? w.title : req
  ;(byArticle[key] ||= { title: key, wiki: w || null, appearances: [], nascar: null }).appearances.push(...c.appearances)
  if (c.nascar_list_seating) byArticle[key].nascar = c.nascar_list_seating
}

// OSM ids matched by more than one venue: give each to the venue whose title
// matches the OSM name best (exact normalized match wins).
const normName = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
const osmClaims = {}
{
  const byId = {}
  for (const t of Object.keys(byArticle)) { const o = osmFor(t); if (o?.best) (byId[o.best.id] ||= []).push({ t, o }) }
  for (const [id, list] of Object.entries(byId)) {
    if (list.length < 2) continue
    const score = ({ t, o }) => Math.max(0, ...[o.best.tags.name, o.best.tags.official_name, o.best.tags.alt_name].filter(Boolean).map((nm) => (normName(nm) === normName(t) ? 2 : 0))) + o.best.name_score
    list.sort((a, b) => score(b) - score(a))
    osmClaims[id] = list[0].t
  }
}

const included = []
const excluded = []
const qa = { conflicts: [], low: [], missing: [], near: [], coordinate: [], neutral: [], inferred: [] }
const today = new Date().toISOString().slice(0, 10)

for (const v of Object.values(byArticle)) {
  const t = v.title
  const ov = overrides[t] || {}
  const w = v.wiki
  if (ov.exclude) { excluded.push({ title: t, reason: ov.exclude, source: ov.exclude_source }); continue }
  if (!w) { excluded.push({ title: t, reason: 'no Wikipedia article found' }); continue }
  // Every candidate comes from a current-season list or schedule, so an infobox
  // "closed" value (often a temporary closure) is reviewed, not auto-excluded.
  if (w.closed && /\d{4}/.test(w.closed) && !ov.closed_reviewed) qa.closed = [...(qa.closed || []), { title: t, closed: w.closed, url: w.url }]
  if (TEMP_CIRCUIT.test(t)) { excluded.push({ title: t, reason: 'temporary street circuit (scope rule)', source: w.url }); continue }

  const apps = [...v.appearances].sort((a, b) => LEAGUE_ORDER.indexOf(a.league) - LEAGUE_ORDER.indexOf(b.league))
  const sports = [...new Set(apps.map((a) => a.sport))]
  const leagues = [...new Set(apps.map((a) => a.league))]
  const sources = {}
  const flags = []

  // Coordinates: OSM footprint centroid when the match is credible, else Wikipedia.
  const osm = osmFor(t)
  const wcoord = geodata[t] || w.coord
  let lat = null, lng = null
  // A footprint claimed by a venue whose name matches it exactly is not reused for a neighbor.
  const claimedByOther = osm?.best && osmClaims[osm.best.id] && osmClaims[osm.best.id] !== t
  const osmOk = osm?.best && !claimedByOther && (osm.best.name_score >= 0.5 || osm.best.contains_point)
  if (claimedByOther) flags.push('osm-footprint-belongs-to-neighbor')
  if (osmOk) { ({ lat, lng } = osm.best.centroid); sources.lat = sources.lng = osm.best.url }
  else if (wcoord) { ({ lat, lng } = wcoord); sources.lat = sources.lng = w.url; if (osm?.best) flags.push('osm-match-weak') }
  if (ov.lat) { lat = ov.lat.value; lng = ov.lng.value; sources.lat = sources.lng = ov.lat.source }
  if (osmOk && wcoord && distKm(osm.best.centroid, wcoord) > 1) qa.coordinate.push({ title: t, km: distKm(osm.best.centroid, wcoord).toFixed(1), osm: osm.best.url, wiki: w.url })
  if (lat == null) { excluded.push({ title: t, reason: 'no coordinates', source: w.url }); continue }

  // State: the list page's State/Location column wins; coordinates are a fallback
  // (us-atlas outlines are too coarse for river borders like Cincinnati/KY).
  const geoState = stateAt(lat, lng)
  const listed = apps.map((a) => listedState(a)).find(Boolean) || listedState({ location: w.location })
  if (!geoState && !listed) { excluded.push({ title: t, reason: 'outside the US (by coordinates)', source: sources.lat }); continue }
  if (!geoState && listed && !(listed in USPS_SET)) { excluded.push({ title: t, reason: 'outside the US', source: sources.lat }); continue }
  const state = ov.state?.value ?? listed ?? geoState
  sources.state = ov.state?.source ?? (listed ? (apps.find((a) => listedState(a))?.list_url ?? w.url) : 'https://github.com/topojson/us-atlas (point-in-polygon on venue coordinates)')
  if (listed && geoState && listed !== geoState) (qa.state_mismatch ||= []).push({ title: t, listed, by_coordinates: geoState })

  // City: list column, else first part of list "Location", else infobox location.
  const loc = apps.find((a) => a.location)?.location || w.location || ''
  let city = ov.city?.value ?? ((loc.split(',')[0] || '').trim() || null)
  sources.city = ov.city?.source ?? apps.find((a) => a.location)?.list_url ?? w.url

  // Capacity.
  let cap = chooseCapacity(w.capacity_entries, sports)
  let capacity = cap.value, capSource = w.url, capacity_type = 'seated'
  const capacity_by_sport = { ...cap.by_sport }
  if (sports.includes('motorsport') && !ov.capacity) {
    capacity_type = 'estimated'
    if (capacity == null && v.nascar?.value) { capacity = v.nascar.value; capSource = v.nascar.url; cap = { confidence: 'low', note: 'from List of NASCAR tracks seating column' } }
    if (v.nascar?.value && capacity != null && Math.abs(v.nascar.value - capacity) > 1000) qa.conflicts.push({ title: t, field: 'capacity', a: `${capacity} (infobox)`, b: `${v.nascar.value} (List of NASCAR tracks)`, url: w.url })
  }
  if (ov.capacity) {
    if (capacity != null && Math.abs(ov.capacity.value - capacity) > 0) qa.conflicts.push({ title: t, field: 'capacity', a: `${capacity} (Wikipedia infobox)`, b: `${ov.capacity.value} (official)`, url: ov.capacity.source, resolved: 'official' })
    capacity = ov.capacity.value; capSource = ov.capacity.source; capacity_type = ov.capacity.type || 'seated'
    cap = { confidence: 'high', note: ov.capacity.note || null }
  }
  for (const [s, o] of Object.entries(ov.capacity_by_sport || {})) { capacity_by_sport[s] = o.value; sources[`capacity_by_sport.${s}`] = o.source }
  for (const s of sports) capacity_by_sport[s] ??= capacity
  sources.capacity = capSource
  if (w.capacity_cites?.length && !ov.capacity) sources.capacity_cited = w.capacity_cites[0]

  // List-page capacity vs infobox (both Wikipedia, different pages).
  for (const a of apps) if (a.list_capacity && capacity && !ov.capacity && Math.abs(a.list_capacity - capacity) > 500 && !sports.includes('motorsport'))
    qa.conflicts.push({ title: t, field: 'capacity', a: `${capacity} (infobox)`, b: `${a.list_capacity} (${a.list})`, url: a.list_url })
  if (osm?.best?.tags?.capacity && capacity && Math.abs(Number(osm.best.tags.capacity) - capacity) > 1000)
    qa.conflicts.push({ title: t, field: 'capacity', a: `${capacity} (${ov.capacity ? 'official' : 'infobox'})`, b: `${osm.best.tags.capacity} (OSM capacity tag)`, url: osm.best.url })

  if (capacity == null) { excluded.push({ title: t, reason: 'no sourced capacity', source: w.url, leagues }); continue }
  if (capacity < CUTOFF) {
    excluded.push({ title: t, reason: `capacity ${capacity.toLocaleString('en-US')} < 15,000`, source: capSource, leagues, capacity })
    if (capacity >= CUTOFF - NEAR) qa.near.push({ title: t, capacity, side: 'below (excluded)', source: capSource, confidence: cap.confidence })
    // Excluded on seated capacity, but some other configuration clears 15,000.
    const bigger = w.capacity_entries.filter((e) => e.value >= CUTOFF).map((e) => `${e.value.toLocaleString('en-US')}${e.label ? ` (${e.label.slice(0, 40)})` : ''}${e.standing ? ' [standing]' : ''}${e.expandable ? ' [expandable]' : ''}`)
    if (bigger.length && !ov.capacity) (qa.other_config ||= []).push({ title: t, capacity, other: bigger.join('; '), url: w.url })
    continue
  }
  if (capacity < CUTOFF + NEAR) qa.near.push({ title: t, capacity, side: 'above (included)', source: capSource, confidence: cap.confidence })
  if (cap.confidence !== 'high') qa.low.push({ title: t, field: 'capacity', value: capacity, why: cap.note, url: capSource })

  // Tenants.
  const tenants = []
  const seen = new Set()
  for (const a of apps) {
    const names = a.tenant_wiki?.length && !a.is_event ? a.tenant_wiki.map(cleanTeam) : [a.is_event ? a.tenant : cleanTeam(a.tenant || '')]
    for (const n of names.filter(Boolean)) {
      const key = `${n}|${a.league}`
      if (seen.has(key)) continue
      seen.add(key)
      const id = TEAM_ALIASES[teamIdFor(n)] ?? teamIdFor(n)
      const site = siteTeams[id] && siteTeams[id].league === a.league ? id : null
      tenants.push({ team: n, league: a.league, team_page_slug: site })
    }
  }
  for (const tn of ov.tenants_add || []) tenants.push(tn)
  sources.tenants = [...new Set(apps.map((a) => a.list_url).filter(Boolean))].join(' ') || w.url
  if (apps.some((a) => a.neutral)) qa.neutral.push({ title: t, events: apps.filter((a) => a.neutral).map((a) => a.tenant), capacity })

  // Venue type and roof.
  const has = (re) => leagues.some((l) => re.test(l))
  let venue_type = ov.venue_type?.value
    ?? (has(/^MLB$/) || (sports.length === 1 && sports[0] === 'baseball') ? 'ballpark'
      : has(/^(NFL|NCAA FBS|NCAA FCS)$/) || (sports.includes('football')) ? 'stadium'
      : sports.includes('motorsport') ? 'racetrack'
      : sports.includes('tennis') ? 'tennis'
      : sports.some((s) => s === 'basketball' || s === 'ice hockey') ? 'arena'
      : sports.includes('soccer') ? 'soccer_specific' : 'stadium')
  sources.venue_type = 'derived from tenant leagues'
  // Roof: infobox field, else the list page's Roof column (NFL, MLB, MLS lists).
  const listRoofApp = apps.find((a) => a.list_roof)
  const parseRoof = (s) => { s = (s || '').toLowerCase(); return /retract/.test(s) ? 'retractable' : /dome|fixed|closed|indoor|yes/.test(s) ? 'dome' : /open|none|no\b/.test(s) ? 'open' : null }
  let roof = ov.roof?.value ?? parseRoof(`${w.roof || ''} ${w.roof_type || ''}`)
  sources.roof = ov.roof?.source ?? w.url
  if (roof == null && listRoofApp) { roof = parseRoof(listRoofApp.list_roof); if (roof) sources.roof = listRoofApp.list_url }
  if (roof == null && venue_type === 'arena') { roof = 'dome'; qa.inferred.push({ title: t, field: 'roof', value: 'dome', why: 'indoor arena; schema uses dome for any fixed roof' }) }
  if (roof == null && /dome/i.test(t)) { roof = 'dome'; qa.inferred.push({ title: t, field: 'roof', value: 'dome', why: 'name contains "Dome"' }) }
  if (roof == null && ['stadium', 'ballpark', 'soccer_specific', 'racetrack', 'tennis'].includes(venue_type)) { roof = 'open'; qa.inferred.push({ title: t, field: 'roof', value: 'open', why: 'infobox has no roof field; outdoor venue type' }) }

  // Opened.
  const opened = ov.opened?.value ?? w.opened?.value ?? null
  sources.opened = ov.opened?.source ?? w.url
  if (!ov.opened && w.opened?.note && /multiple|other/.test(w.opened.note) && new Set((w.opened.note.match(/\d{4}/g) || [])).size > 1) qa.low.push({ title: t, field: 'opened', value: opened, why: w.opened.note, url: w.url })
  if (opened == null) qa.missing.push({ title: t, field: 'opened' })

  // Construction cost (first non-renovation figure); cost year = opening year.
  let cost_nominal = null, cost_year = null
  const base = w.costs.find((c) => !c.renovation)
  if (ov.cost_nominal) { cost_nominal = ov.cost_nominal.value; cost_year = ov.cost_year?.value ?? opened; sources.cost_nominal = ov.cost_nominal.source }
  else if (base) {
    if (base.range_high) qa.low.push({ title: t, field: 'cost_nominal', value: null, why: `range in source: ${base.line.slice(0, 100)}`, url: w.url })
    else { cost_nominal = base.amount; cost_year = opened; sources.cost_nominal = w.url; flags.push('cost_year_is_opening_year') }
  }
  if (cost_nominal == null) qa.missing.push({ title: t, field: 'cost_nominal' })
  let cost_real = null, pre_1913 = false
  if (cost_nominal != null && cost_year != null) {
    const y = Math.max(1913, cost_year)
    pre_1913 = cost_year < 1913
    cost_real = Math.round((cost_nominal * cpi.annual['2025']) / cpi.annual[String(y)])
    sources.cost_real = cpi.source
  }

  // Renovations: infobox years, paired with renovation cost lines by year.
  // Official renovations (ov.renovations_add) replace a Wikipedia entry for the same year.
  const wikiRenos = [...w.renovated, ...w.expanded]
    .filter((r, i, arr) => arr.findIndex((x) => x.start === r.start && x.end === r.end) === i)
    .map((r) => {
      const c = w.costs.find((c) => c.renovation && c.year_in_text && c.year_in_text >= r.start - 1 && c.year_in_text <= r.end + 1 && !c.range_high)
      return { year: r.end, description: null, cost_nominal: c ? c.amount : null, source: w.url }
    })
  const offRenos = (ov.renovations_add || []).map(({ year, description, cost_nominal, source }) => ({ year, description, cost_nominal, source }))
  const renos = [...wikiRenos.filter((r) => !offRenos.some((o) => Math.abs(o.year - r.year) <= 1)), ...offRenos]
    .filter((r) => opened == null || r.year > opened)
    .sort((a, b) => a.year - b.year)
  if (renos.length) sources.renovations = [...new Set(renos.map((r) => r.source))].join(' ')

  // Official-site confirmations and notes.
  for (const [field, url] of Object.entries(ov.verified || {})) sources[`${field}_verified`] = url
  if (ov.official_note) (qa.official_notes ||= []).push({ title: t, note: ov.official_note, url: ov.official_note_source })
  const officialFields = [...Object.keys(ov.verified || {}), ...['capacity', 'opened', 'cost_nominal'].filter((f) => ov[f])]
  if (officialFields.length) (qa.official ||= []).push({ title: t, fields: [...new Set(officialFields)] })

  const rec = {
    slug: ov.slug ?? slugify(ov.name ?? t),
    name: ov.name ?? t.replace(/\s*\((stadium|arena|.*?)\)\s*$/i, ''),
    city, state, lat: Math.round(lat * 1e6) / 1e6, lng: Math.round(lng * 1e6) / 1e6,
    venue_type, roof, capacity, capacity_type, capacity_by_sport,
    sports, tenants, opened, renovations: renos,
    cost_nominal, cost_year, cost_real, cost_pre_1913: pre_1913,
    osm_id: osm?.best?.id ?? null,
    sources: { wikipedia: w.url, ...sources },
    last_verified: ov.last_verified ?? w.fetched.slice(0, 10),
    flags,
  }
  included.push(rec)
}

// Slug collisions: append the state (then city) so every deep link is unique.
let slugCount = {}
for (const v of included) slugCount[v.slug] = (slugCount[v.slug] || 0) + 1
for (const v of included) if (slugCount[v.slug] > 1) v._dup = true
for (const v of included) if (v._dup) v.slug = `${v.slug}-${v.state.toLowerCase()}`
slugCount = {}
for (const v of included) slugCount[v.slug] = (slugCount[v.slug] || 0) + 1
for (const v of included) { if (v._dup && slugCount[v.slug] > 1) v.slug = `${v.slug}-${slugify(v.city || 'x')}`; delete v._dup }
slugCount = {}
for (const v of included) slugCount[v.slug] = (slugCount[v.slug] || 0) + 1
const dupSlugs = Object.keys(slugCount).filter((s) => slugCount[s] > 1)

// Renovation scopes written from the cited Wikipedia text (scripts/stadiums/renovation-scopes.json).
const scopes = fs.existsSync('scripts/stadiums/renovation-scopes.json') ? read('scripts/stadiums/renovation-scopes.json') : {}
for (const v of included) {
  const sc = scopes[v.slug]
  if (!sc) continue
  const r = v.renovations.find((x) => x.year === sc.year) || v.renovations.at(-1)
  if (!r) continue
  if (!r.description) r.description = sc.scope
  if (r.cost_nominal == null && sc.cost_nominal != null) r.cost_nominal = sc.cost_nominal
  r.source = r.source || sc.source
}

// Rankings (competition ranking: ties share a rank).
const rankBy = (list, val) => {
  const sorted = [...list].sort((a, b) => val(b) - val(a))
  const out = new Map()
  sorted.forEach((v, i) => out.set(v.slug, i > 0 && val(sorted[i - 1]) === val(v) ? out.get(sorted[i - 1].slug) : i + 1))
  return out
}
const us = rankBy(included, (v) => v.capacity)
const byState = {}
for (const v of included) (byState[v.state] ||= []).push(v)
const stateRanks = Object.fromEntries(Object.values(byState).flatMap((vs) => [...rankBy(vs, (v) => v.capacity)]))
const sportsAll = [...new Set(included.flatMap((v) => v.sports))]
const sportRanks = Object.fromEntries(sportsAll.map((s) => [s, rankBy(included.filter((v) => v.sports.includes(s)), (v) => v.capacity_by_sport[s])]))
const counts = { us: included.length, state: Object.fromEntries(Object.entries(byState).map(([k, v]) => [k, v.length])), sport: Object.fromEntries(sportsAll.map((s) => [s, included.filter((v) => v.sports.includes(s)).length])) }
for (const v of included) {
  v.rankings = {
    us: us.get(v.slug), us_of: counts.us,
    state: stateRanks[v.slug], state_of: counts.state[v.state],
    sport: Object.fromEntries(v.sports.map((s) => [s, { rank: sportRanks[s].get(v.slug), of: counts.sport[s] }])),
  }
}

included.sort((a, b) => a.rankings.us - b.rankings.us || a.name.localeCompare(b.name))
fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/stadiums.json', JSON.stringify({
  generated: new Date().toISOString(),
  license: 'Coordinates and footprints derived from OpenStreetMap (© OpenStreetMap contributors, ODbL 1.0). Facts from Wikipedia (CC BY-SA 4.0) and official team/venue sites, cited per field. CPI-U from BLS (public domain).',
  cpi_base_year: 2025, cutoff: CUTOFF, count: included.length, venues: included,
}, null, 1))
const unusedOverrides = Object.keys(overrides).filter((k) => !k.startsWith('_') && !byArticle[k])
fs.writeFileSync('research/raw/stadiums/build-report.json', JSON.stringify({ excluded, qa, dupSlugs, unusedOverrides }, null, 1))
if (unusedOverrides.length) console.log('override keys with no matching article:', unusedOverrides.join('; '))
console.log(`included ${included.length}, excluded ${excluded.length}, dup slugs: ${dupSlugs.join(', ') || 'none'}`)
