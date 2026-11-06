// Step 1: build the candidate venue list from Wikipedia list pages.
//
// Each list page row gives a venue page link, tenant(s), and a list capacity.
// The list capacity is only used to decide what to look at (>= 14,000 so that
// near-cutoff venues are examined); final capacity comes from the venue's own
// infobox or an official-site override in build-stadiums.mjs.
//
// Output: research/raw/stadiums/candidates.json, research/raw/stadiums/upcoming-raw.json
// Usage: node scripts/stadiums/seed-candidates.mjs [--refresh]
import fs from 'node:fs'
import wtf from 'wtf_wikipedia'
import { getPages, pageUrl } from './lib/wiki.mjs'

const REFRESH = process.argv.includes('--refresh')
const PRE_FILTER = 14000

// table: index into wtf(...).tables(); venue/team: column names.
const LISTS = [
  { title: 'List of current NFL stadiums', table: 0, venue: 'Name', team: 'Team(s)', league: 'NFL', sport: 'football' },
  { title: 'List of current Major League Baseball stadiums', table: 0, venue: 'Name', team: 'Team', league: 'MLB', sport: 'baseball' },
  { title: 'List of NBA arenas', table: 0, venue: 'Arena', team: 'Team', league: 'NBA', sport: 'basketball' },
  { title: 'List of National Hockey League arenas', table: 0, venue: 'Arena', team: 'Team', league: 'NHL', sport: 'ice hockey' },
  { title: 'List of Major League Soccer stadiums', table: 1, venue: 'Stadium', team: 'Team', league: 'MLS', sport: 'soccer' },
  { title: "List of National Women's Soccer League stadiums", table: 0, venue: 'Stadium', team: 'Team', league: 'NWSL', sport: 'soccer' },
  { title: "Women's National Basketball Association", table: 1, venue: 'Arena', team: 'Team', league: 'WNBA', sport: 'basketball' },
  { title: 'List of NCAA Division I FBS football stadiums', table: 0, venue: 'Stadium', team: 'Team', league: 'NCAA FBS', sport: 'football' },
  { title: 'List of NCAA Division I FCS football stadiums', table: 0, venue: 'Stadium', team: 'Team', league: 'NCAA FCS', sport: 'football' },
  { title: 'List of NCAA Division I basketball arenas', table: 1, venue: 'Arena', team: 'Team', league: 'NCAA D1 basketball', sport: 'basketball' },
  { title: '2026 NASCAR Cup Series', table: 2, venue: 'Track', team: 'Race name', league: 'NASCAR Cup', sport: 'motorsport', event: true },
  { title: '2026 IndyCar Series', table: 4, venue: 'Track', team: 'Race name', league: 'IndyCar', sport: 'motorsport', event: true },
  { title: '2026 Formula One World Championship', table: 2, venue: 'Circuit', team: 'Grand Prix', league: 'Formula 1', sport: 'motorsport', event: true, usOnly: /Miami|United States|Las Vegas/ },
  { title: 'List of tennis stadiums by capacity', table: 0, venue: 'Stadium', team: 'Tournament hosted', league: 'Tennis', sport: 'tennis', event: true, country: 'United States' },
]

// Planned/under construction tables (for upcoming.md only).
const UPCOMING = [
  { title: 'List of current NFL stadiums', tables: [1, 2], venue: 'Stadium', team: 'Team' },
  { title: 'List of current Major League Baseball stadiums', tables: [1, 2], venue: 'Stadium', team: 'Team' },
  { title: 'List of NBA arenas', tables: [1, 2], venue: 'Arena', team: 'Team' },
  { title: 'List of National Hockey League arenas', tables: [1, 2], venue: 'Arena', team: 'Team' },
  { title: 'List of Major League Soccer stadiums', tables: [3], venue: 'Stadium', team: 'Team' },
  { title: "Women's National Basketball Association", tables: [2], venue: 'Arena', team: 'Team' },
  { title: 'List of NCAA Division I FBS football stadiums', tables: [1], venue: 'Stadium', team: 'Team' },
  { title: 'List of NCAA Division I FCS football stadiums', tables: [1], venue: 'Stadium', team: 'Team' },
  { title: 'List of NCAA Division I basketball arenas', tables: [5], venue: 'Arena', team: 'Team' },
]

// Neutral-site venues: no qualifying tenant in the lists above, but they host a
// recurring major event. Hand-picked, so every one is flagged in the QA report.
const NEUTRAL = [
  { venue: 'Camping World Stadium', events: ['Citrus Bowl', 'Pop-Tarts Bowl'], sport: 'football' },
  { venue: 'Cotton Bowl (stadium)', events: ['Red River Rivalry', 'State Fair Classic'], sport: 'football' },
  { venue: 'Legion Field', events: ['Magic City Classic'], sport: 'football' },
  { venue: 'Independence Stadium (Shreveport)', events: ['Independence Bowl'], sport: 'football' },
  { venue: 'Charles Schwab Field Omaha', events: ['College World Series'], sport: 'baseball' },
  { venue: 'BOK Center', events: ['NCAA Division I men\'s basketball tournament'], sport: 'basketball' },
  { venue: 'Greensboro Coliseum', events: ['ACC men\'s basketball tournament'], sport: 'basketball' },
]

const cellText = (c) => (c?.text ?? '').trim()
const NOT_VENUE = /^(united states|usa|u\.s\.|canada|mexico)$|\(disambiguation\)$/i
const cellLinks = (c) => (c?.links || []).filter((l) => l.type === 'internal' && l.page && !NOT_VENUE.test(l.page.trim())).map((l) => l.page)
const cellNumber = (c) => {
  if (!c) return null
  if (typeof c.number === 'number') return c.number
  const m = cellText(c).replace(/\[.*?\]/g, '').match(/\d{1,3}(?:,\d{3})+|\d{4,6}/)
  return m ? Number(m[0].replace(/,/g, '')) : null
}

const pages = await getPages([...new Set([...LISTS, ...UPCOMING].map((l) => l.title))], { refresh: REFRESH })
const candidates = {}
const skipped = []

function add(venueTitle, entry) {
  const key = venueTitle
  const c = (candidates[key] ||= { wiki_title: venueTitle, appearances: [] })
  c.appearances.push(entry)
}

for (const L of LISTS) {
  const p = pages[L.title]
  const rows = wtf(p.wikitext).tables()[L.table].json()
  for (const r of rows) {
    const vCell = r[L.venue]
    const venueTitle = cellLinks(vCell)[0]
    if (!venueTitle) { skipped.push({ list: L.title, reason: 'no venue link', text: cellText(vCell) }); continue }
    if (L.country && cellText(r.Country) !== L.country) continue
    if (L.usOnly && !L.usOnly.test(cellText(r[L.team]))) continue
    const listCap = cellNumber(r.Capacity ?? r.Seating)
    if (!L.event && listCap != null && listCap < PRE_FILTER) continue
    if (L.title === 'List of tennis stadiums by capacity' && listCap != null && listCap < PRE_FILTER) continue
    const teamText = cellText(r[L.team])
    const teamLinks = cellLinks(r[L.team])
    add(venueTitle, {
      list: L.title, list_url: pageUrl(L.title, p.revid), league: L.league, sport: L.sport,
      tenant: teamText || null, tenant_wiki: teamLinks, is_event: !!L.event, list_capacity: listCap,
      list_roof: cellText(r.Roof ?? r['Roof type'] ?? r['Roof Type']) || null,
      location: cellText(r.Location ?? r.City) || null, state_col: cellText(r.State) || null,
    })
  }
}

// NASCAR track seating column (often the only published figure for a track).
{
  const t = 'List of NASCAR tracks'
  const p = (await getPages([t], { refresh: REFRESH }))[t]
  for (const r of wtf(p.wikitext).tables()[0].json()) {
    const v = cellLinks(r.Track)[0]
    if (v && candidates[v]) candidates[v].nascar_list_seating = { value: cellNumber(r.Seating), text: cellText(r.Seating), url: pageUrl(t, p.revid) }
  }
}

for (const n of NEUTRAL) {
  for (const ev of n.events) add(n.venue, { list: 'neutral-site (hand-picked)', league: 'Neutral site', sport: n.sport, tenant: ev, tenant_wiki: [], is_event: true, list_capacity: null, neutral: true })
}

const upcoming = []
for (const U of UPCOMING) {
  const p = pages[U.title]
  const tabs = wtf(p.wikitext).tables()
  for (const ti of U.tables) {
    for (const r of tabs[ti]?.json() || []) {
      upcoming.push({
        venue: cellText(r[U.venue] ?? r.Name), venue_wiki: cellLinks(r[U.venue] ?? r.Name)[0] || null,
        team: cellText(r[U.team] ?? r['Team(s)']), capacity: cellNumber(r.Capacity),
        opening: cellText(r.Opening ?? r['Planned opening'] ?? r['Opened/opening'] ?? r.Opened),
        source: pageUrl(U.title, p.revid),
      })
    }
  }
}

fs.writeFileSync('research/raw/stadiums/candidates.json', JSON.stringify({ generated: new Date().toISOString(), pre_filter: PRE_FILTER, candidates, skipped }, null, 1))
fs.writeFileSync('research/raw/stadiums/upcoming-raw.json', JSON.stringify(upcoming, null, 1))
console.log(`candidates: ${Object.keys(candidates).length}, skipped rows: ${skipped.length}, upcoming rows: ${upcoming.length}`)
