// Parses Forbes list JSON files saved by hand into research/forbes-raw/
// (see the README there; nothing here touches forbes.com).
// Writes:
//   data/forbes-breakdown.js          { teamId: { total, sport, market, stadium, brand, year, month, source, sumCheck } }
//   research/raw/forbes-values.json   { teamId: [{ year, value }] }  ($B, list years)
// Run: node scripts/import-forbes.mjs

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..')
const RAW_DIR = path.join(ROOT, 'research', 'forbes-raw')
const TOLERANCE = 0.02

const slug = (n) => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Forbes name (slugged) -> site team id, where they differ.
const ALIASES = {
  'utah-mammoth': 'utah-hockey-club',
  'utah-hockey-club': 'utah-hockey-club',
  'athletics': 'oakland-athletics',
  'las-vegas-athletics': 'oakland-athletics',
  'sacramento-athletics': 'oakland-athletics',
  'columbus-crew': 'columbus-crew-sc',
  'dc-united': 'd-c-united',
  'houston-dynamo': 'houston-dynamo-fc',
  'minnesota-united': 'minnesota-united-fc',
  'seattle-sounders': 'seattle-sounders-fc',
  'vancouver-whitecaps': 'vancouver-whitecaps-fc',
  'chicago-fire': 'chicago-fire-fc',
  'new-york-city-fc': 'new-york-city-fc',
  'st-louis-city': 'st-louis-city-sc',
  'st-louis-city-sc': 'st-louis-city-sc',
  'orlando-city': 'orlando-city-sc',
  'la-galaxy': 'la-galaxy',
  'los-angeles-galaxy': 'la-galaxy',
  'lafc': 'los-angeles-fc',
  'tottenham': 'tottenham-hotspur',
  'wolverhampton': 'wolverhampton-wanderers',
  'wolves': 'wolverhampton-wanderers',
  'bournemouth': 'afc-bournemouth',
  'brighton': 'brighton-and-hove-albion',
  'west-ham': 'west-ham-united',
  'newcastle': 'newcastle-united',
  'leicester': 'leicester-city',
  'ipswich': 'ipswich-town',
}

const LEAGUE_FROM_LIST = [
  [/nfl/i, 'NFL'], [/nba/i, 'NBA'], [/mlb/i, 'MLB'], [/nhl/i, 'NHL'], [/mls/i, 'MLS'], [/soccer|football/i, 'EPL'],
]

// Site team ids by league
const siteIds = {}
for (const [L, l] of Object.entries({ NFL: 'nfl', NBA: 'nba', MLB: 'mlb', NHL: 'nhl', MLS: 'mls', EPL: 'epl' })) {
  const mod = await import(pathToFileURL(path.join(ROOT, 'data', `enrichments-${l}.js`)).href)
  for (const name of Object.keys(Object.values(mod)[0])) siteIds[slug(name)] = L
}

const toB = (v) => (v == null ? null : v > 200 ? v / 1000 : v) // Forbes lists report $M

const breakdown = {}
const values = {}
const unmatched = []
const report = { files: [], sumFlags: [], noComponents: {} }

const files = fs.existsSync(RAW_DIR) ? fs.readdirSync(RAW_DIR).filter((f) => f.endsWith('.json')) : []
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(RAW_DIR, f), 'utf8'))
  const rows = j.organizationList?.organizationsLists ?? []
  if (!rows.length) { report.files.push(`${f}: no rows`); continue }
  const listUri = rows[0].listUri || f
  const league = LEAGUE_FROM_LIST.find(([re]) => re.test(listUri))?.[1]
  report.files.push(`${f}: ${listUri} ${rows[0].year} (${rows.length} rows) -> ${league}`)
  for (const o of rows) {
    const name = o.organizationName || o.organization?.name || o.name
    const s = slug(name)
    const id = ALIASES[s] || ALIASES[slug(o.uri || '')] || (siteIds[s] ? s : null)
    if (!id || (league !== 'EPL' && siteIds[id] !== league) || (league === 'EPL' && siteIds[id] !== 'EPL')) {
      if (league !== 'EPL') unmatched.push(`${league}: ${name}`)
      continue
    }
    const total = toB(o.totalValue ?? o.value ?? o.valueList?.[0])
    const comps = {
      sport: toB(o.sportValue), market: toB(o.marketValue),
      stadium: toB(o.stadiumValue), brand: toB(o.brandManagementValue),
    }
    const hasAll = Object.values(comps).every((v) => v != null)
    const sum = hasAll ? comps.sport + comps.market + comps.stadium + comps.brand : null
    const diff = hasAll && total ? sum / total - 1 : null
    if (!hasAll) (report.noComponents[league] ||= []).push(name)
    if (diff != null && Math.abs(diff) > TOLERANCE) report.sumFlags.push(`${id}: components $${sum.toFixed(2)}B vs headline $${total.toFixed(2)}B (${(diff * 100).toFixed(1)}%)`)

    const prev = breakdown[id]
    if (!prev || prev.year < o.year) {
      breakdown[id] = {
        total: +total.toFixed(3),
        ...(hasAll ? Object.fromEntries(Object.entries(comps).map(([k, v]) => [k, +v.toFixed(3)])) : { sport: null, market: null, stadium: null, brand: null }),
        year: o.year,
        month: o.month ?? null,
        revenue: toB(o.revenue),
        operatingIncome: toB(o.operatingIncome),
        source: `Forbes ${listUri} ${o.year}`,
        sumCheck: diff == null ? null : +diff.toFixed(4),
        sumOk: diff == null ? null : Math.abs(diff) <= TOLERANCE,
      }
    }
    if (Array.isArray(o.valueList)) {
      const hist = o.valueList.map((v, i) => ({ year: o.year - i, value: +toB(v).toFixed(3) })).filter((h) => h.value > 0)
      const merged = new Map((values[id] || []).map((h) => [h.year, h]))
      for (const h of hist) if (!merged.has(h.year)) merged.set(h.year, h)
      values[id] = [...merged.values()].sort((a, b) => a.year - b.year)
    }
  }
}

// Only teams whose league list carries all four components get a breakdown.
const out = {}
for (const [id, b] of Object.entries(breakdown)) out[id] = b.sport == null ? { ...b, componentsPublished: false } : { ...b, componentsPublished: true }

// Per league: 'loaded' (components present), 'no-components' (list saved, Forbes
// publishes no split), or 'not-loaded' (no export saved yet).
const leagueStatus = {}
for (const L of ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']) {
  const ids = Object.entries(out).filter(([id]) => siteIds[id] === L).map(([, b]) => b)
  leagueStatus[L] = !ids.length ? 'not-loaded' : ids.some((b) => b.componentsPublished) ? 'loaded' : 'no-components'
}

fs.writeFileSync(
  path.join(ROOT, 'data', 'forbes-breakdown.js'),
  `// GENERATED by scripts/import-forbes.mjs from research/forbes-raw/*.json (saved manually).\n` +
    `// Forbes splits team value into Sport, Market, Stadium, Brand ($B). Never estimated here.\n` +
    `export const leagueStatus = ${JSON.stringify(leagueStatus, null, 2)}\n\n` +
    `export const forbesBreakdown = ${JSON.stringify(out, null, 2)}\n`
)
fs.mkdirSync(path.join(ROOT, 'research', 'raw'), { recursive: true })
fs.writeFileSync(path.join(ROOT, 'research', 'raw', 'forbes-values.json'), JSON.stringify(values, null, 2))
fs.writeFileSync(path.join(ROOT, 'research', 'raw', '_forbes-import-report.json'), JSON.stringify({ ...report, unmatched }, null, 2))

console.log(report.files.join('\n') || 'No files in research/forbes-raw/')
console.log(`teams with breakdown: ${Object.values(out).filter((b) => b.componentsPublished).length}`)
console.log(`sum flags (>±${TOLERANCE * 100}%): ${report.sumFlags.length}`)
for (const s of report.sumFlags) console.log('  ' + s)
if (unmatched.length) console.log('unmatched:', unmatched.join('; '))
for (const [L, names] of Object.entries(report.noComponents)) console.log(`${L}: ${names.length} rows without components`)
