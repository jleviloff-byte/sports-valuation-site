// Writes research/transactions-audit.md from research/raw/_audit-input.json
// (produced by build-transactions.mjs) and research/raw/not-checked.json.
// Run after build-transactions: node scripts/build-audit.mjs

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..')
const RAW = path.join(ROOT, 'research', 'raw')
const { out, rejected, unverified } = JSON.parse(fs.readFileSync(path.join(RAW, '_audit-input.json'), 'utf8'))
const notChecked = JSON.parse(fs.readFileSync(path.join(RAW, 'not-checked.json'), 'utf8'))
const CUTOFF = '2026-05-11'
const LEAGUES = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']
const FILE_LEAGUES = { nfl: ['NFL'], nba: ['NBA'], 'mlb-nhl': ['MLB', 'NHL'], 'mls-epl': ['MLS', 'EPL'] }

const slug = (n) => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const leagueOf = {}
const nameOf = {}
for (const L of LEAGUES) {
  const mod = await import(pathToFileURL(path.join(ROOT, 'data', `enrichments-${L.toLowerCase()}.js`)).href)
  for (const n of Object.keys(Object.values(mod)[0])) { leagueOf[slug(n)] = L; nameOf[slug(n)] = n }
}

const money = (v) => (v == null ? 'n/d' : v >= 1e9 ? `$${(v / 1e9).toFixed(2)}B` : `$${Math.round(v / 1e6)}M`)
const pct = (p) => (p == null ? 'n/a' : `${p > 0 ? '+' : ''}${Math.round(p * 100)}%`)
const date = (d) => d.dateAnnounced || d.dateApproved || 'n/d'
const cell = (s) => String(s ?? '').replace(/\|/g, '/').replace(/\s+/g, ' ').trim()

const since = out.filter((d) => (d.dateAnnounced || d.dateApproved) >= CUTOFF)
const grid = {}
for (const d of since) {
  const L = leagueOf[d.teamId]
  grid[L] ||= { control: 0, minority: 0 }
  grid[L][d.type]++
}

const lines = []
lines.push('# Transactions audit', '')
lines.push(`Generated from \`research/raw/\` by \`scripts/build-audit.mjs\`. Data as of ${process.env.LAST_UPDATED || new Date().toISOString().slice(0, 10)}.`, '')
lines.push('Rule: a deal is **Kept** only if at least two independent sources confirm it. Rumors, marketing processes, and unsigned bids are **Rejected**. Deals confirmed to exist but missing a key figure or a second source are **Unverified**. **Not checked** lists teams the sweep could not cover individually.', '')

lines.push('## Summary', '')
lines.push('| League | Kept (control) | Kept (minority) | Rejected | Unverified | Not checked |', '|---|---|---|---|---|---|')
for (const L of LEAGUES) {
  const kept = out.filter((d) => leagueOf[d.teamId] === L)
  const rej = rejected.filter((r) => (r.teamId ? leagueOf[r.teamId] === L : FILE_LEAGUES[r.file]?.[0] === L))
  const unv = unverified.filter((u) => FILE_LEAGUES[u.file]?.includes(L) && (FILE_LEAGUES[u.file].length === 1 || u.description.toLowerCase().includes(L.toLowerCase()) || guessLeague(u.description) === L))
  lines.push(`| ${L} | ${kept.filter((d) => d.type === 'control').length} | ${kept.filter((d) => d.type === 'minority').length} | ${rej.length} | ${unv.length} | ${notChecked[L]?.teams.length ?? 0} |`)
}
lines.push('', `Totals: ${out.length} kept, ${rejected.length} rejected, ${unverified.length} unverified.`, '')

lines.push(`### Deals announced since ${CUTOFF}: ${since.length}`, '')
lines.push('| League | Control | Minority |', '|---|---|---|')
for (const L of LEAGUES) if (grid[L]) lines.push(`| ${L} | ${grid[L].control} | ${grid[L].minority} |`)
lines.push('')

lines.push('## Kept', '')
lines.push('| Date | Team | League | Type | Stake | Valuation | Forbes at sale | Premium | Status | Sources |', '|---|---|---|---|---|---|---|---|---|---|')
for (const d of out) {
  lines.push(`| ${date(d)} | ${nameOf[d.teamId]} | ${leagueOf[d.teamId]} | ${d.type}${d.tranche ? ` (tranche ${d.tranche})` : ''} | ${d.stakePct ?? 'n/d'}${d.stakePct != null ? '%' : ''} | ${money(d.valuation)}${d.isEstimated ? ' (est.)' : ''} | ${money(d.forbesValueAtSale)}${d.forbesListYear ? ` (${d.forbesListYear})` : ''} | ${pct(d.premiumToForbes)} | ${d.status} | ${d.sources.length} |`)
}
lines.push('')
const notes = out.filter((d) => d.note || d.valuationScope !== 'team' || !d.valuation)
if (notes.length) {
  lines.push('Notes on kept deals:', '')
  for (const d of notes) {
    const bits = []
    if (d.note) bits.push(d.note)
    if (d.valuationScope !== 'team') bits.push(`Valuation covers ${d.valuationScope}${d.valuationScope === 'holding company' ? '; excluded from premium medians' : ''}.`)
    if (!d.valuation) bits.push('No confirmed valuation; shown as not disclosed.')
    lines.push(`- **${nameOf[d.teamId]} (${date(d)})**: ${bits.join(' ')}`)
  }
  lines.push('')
}

lines.push('## Rejected', '')
lines.push('| Team | What was reported | Why rejected |', '|---|---|---|')
for (const r of rejected) lines.push(`| ${cell(r.team)} | ${cell(r.description).slice(0, 220)} | ${cell(r.reason).slice(0, 220)} |`)
lines.push('')

lines.push('## Unverified', '')
for (const u of unverified) lines.push(`- ${cell(u.description)} **Missing:** ${cell(u.whatWasMissing)}`)
lines.push('')

lines.push('## Not checked', '')
for (const L of LEAGUES) {
  const n = notChecked[L]
  if (!n) continue
  lines.push(`- **${L}**: ${n.teams.length ? n.teams.join(', ') + '. ' : ''}${n.why}`)
}
lines.push('')
lines.push('## Method notes', '')
lines.push('- Forbes at time of sale = the latest Forbes list for that league published before the announcement date, taken from the Forbes values in the site data (or the owner\'s Forbes export once loaded). Where a newer Forbes list exists but is not yet loaded, the deal is marked stale in `forbesSource`.')
lines.push('- Premium to Forbes = valuation / Forbes at sale - 1. For minority deals the valuation is the implied whole-team mark.')
lines.push('- Currency conversions use the rate cited by the source or the spot rate on the announcement date (noted per deal in research/raw).')

fs.writeFileSync(path.join(ROOT, 'research', 'transactions-audit.md'), lines.join('\n') + '\n')
console.log(`audit written: ${out.length} kept, ${rejected.length} rejected, ${unverified.length} unverified, ${since.length} since ${CUTOFF}`)

function guessLeague(desc) {
  const d = desc.toLowerCase()
  for (const [id, L] of Object.entries(leagueOf)) {
    const nick = nameOf[id].toLowerCase().split(' ').slice(-1)[0]
    if (nick.length > 4 && d.includes(nick)) return L
  }
  return null
}
