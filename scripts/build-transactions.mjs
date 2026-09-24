// Builds data/transactions.js and data/sale-history.js from the verified
// research files in research/raw/. Run: node scripts/build-transactions.mjs
//
// Inputs
//   research/raw/tx-*.json        deals (two-source rule applied at research time)
//   research/raw/history-*.json   control-sale history per team
//   research/raw/deal-drivers.json  drivers[] per deal key (optional)
//   research/raw/forbes-values.json  Forbes value history per team (optional,
//                                    parsed from the owner's Forbes export)
//
// Derived here (never hand-entered)
//   forbesValueAtSale  latest Forbes list published before the announcement
//   premiumToForbes    valuation / forbesValueAtSale - 1
//   investmentCase     appreciation needed to clear 7%/yr over 10 years vs.
//                      the league's trailing-decade Forbes appreciation

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..')
const RAW = path.join(ROOT, 'research', 'raw')
const LAST_UPDATED = process.env.LAST_UPDATED || new Date().toISOString().slice(0, 10)
const HURDLE = 0.07
const HORIZON = 10

const LEAGUES = { NFL: 'nfl', NBA: 'nba', MLB: 'mlb', NHL: 'nhl', MLS: 'mls', EPL: 'epl' }
// Month each Forbes league list is normally published (1-12).
const FORBES_MONTH = { NFL: 8, NBA: 10, MLB: 3, NHL: 12, MLS: 2, EPL: 5 }

const slug = (n) => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const readJson = (f) => JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'))
const imp = (f) => import(pathToFileURL(path.join(ROOT, 'data', f)).href)

// ── Team Forbes history (mirrors data/enrichments.js merge) ──
const teams = {}
const { valuations2025 } = await imp('valuations-2025.js')
for (const [L, l] of Object.entries(LEAGUES)) {
  const base = Object.values(await imp(`enrichments-${l}.js`))[0]
  let supp = {}
  try { supp = Object.values(await imp(`supplements-${l}.js`))[0] } catch {}
  for (const [name, e] of Object.entries(base)) {
    const hist = [...(supp[name]?.extendedValuationHistory ?? []), ...(e.valuationHistory ?? [])]
    const v25 = valuations2025[name]
    if (v25?.value != null && !hist.some((h) => h.year === 2025)) hist.push({ year: 2025, value: v25.value, source: v25.source })
    teams[slug(name)] = {
      name, league: L,
      forbes: hist.filter((h) => /forbes/i.test(h.source || '')).sort((a, b) => a.year - b.year),
    }
  }
}

// Optional: Forbes export parsed by scripts/import-forbes.mjs overrides site history.
let forbesExport = {}
try { forbesExport = readJson('forbes-values.json') } catch {}
for (const [id, rows] of Object.entries(forbesExport)) {
  if (teams[id]) teams[id].forbes = rows.map((r) => ({ ...r, source: 'Forbes list export' }))
}

function forbesAt(teamId, isoDate) {
  const t = teams[teamId]
  if (!t || !isoDate || !t.forbes.length) return null
  const [y, m] = isoDate.split('-').map(Number)
  const listYear = m > FORBES_MONTH[t.league] ? y : y - 1
  const row = [...t.forbes].reverse().find((h) => h.year <= listYear)
  if (!row) return null
  return { value: Math.round(row.value * 1e9), year: row.year, source: row.source, stale: row.year < listYear }
}

// League trailing-decade Forbes CAGR (median across teams with both endpoints).
const leagueCagr = {}
for (const L of Object.keys(LEAGUES)) {
  const rates = []
  for (const t of Object.values(teams)) {
    if (t.league !== L || t.forbes.length < 2) continue
    const last = t.forbes[t.forbes.length - 1]
    const first = t.forbes.find((h) => h.year === last.year - HORIZON)
    if (first && first.value > 0) rates.push((last.value / first.value) ** (1 / HORIZON) - 1)
  }
  rates.sort((a, b) => a - b)
  leagueCagr[L] = rates.length ? { rate: rates[Math.floor(rates.length / 2)], n: rates.length } : null
}

// ── Deals ──
const DROP = new Set([
  // Brief: drop Warriors $11B (never agreed) and Eagles 2025 (Dec 2024 deal). Both
  // were already rejected at research time; listed here so a re-run can't revive them.
])
const SCOPE = {
  // valuation covers more than the single team (excluded from premium medians)
  'toronto-maple-leafs': 'holding company',
  'new-york-yankees': 'holding company',
  'miami-dolphins': 'team + assets',
  'oakland-athletics': 'team + assets',
  'real-salt-lake': 'team + assets',
  'minnesota-timberwolves': 'team + assets',
}

const dealKey = (t) => `${t.teamId}:${t.type}:${t.dateAnnounced || t.dateApproved}:${t.stakePct ?? 'na'}`

const DRIVER_IDS = new Set(['buyerProfile', 'scarcityAndTiming', 'multipleExpansion', 'taxAmortization',
  'realEstateOptionality', 'mediaRightsCycle', 'portfolioSynergy', 'controlVsLP', 'forcedSeller', 'auctionDynamics'])
const drivers = {}
for (const f of fs.readdirSync(RAW).filter((f) => /^deal-drivers.*\.json$/.test(f))) {
  for (const [k, list] of Object.entries(readJson(f))) {
    drivers[k] = list.filter((d) => {
      const ok = DRIVER_IDS.has(d.id) && d.source && !/forbes\.com/i.test(d.source)
      if (!ok) console.warn(`dropped driver ${d.id} on ${k}`)
      return ok
    }).map((d) => ({ ...d, text: d.text.replace(/\s*[–—]\s*/g, ', ') }))
  }
}

const deals = []
const rejected = []
const unverified = []
for (const f of fs.readdirSync(RAW).filter((f) => /^tx-.*\.json$/.test(f))) {
  const j = readJson(f)
  const league = f.replace(/^tx-|\.json$/g, '')
  for (const t of j.transactions) deals.push({ ...t })
  for (const r of j.rejected) rejected.push({ ...r, file: league })
  for (const u of j.unverified) unverified.push({ ...u, file: league })
}

// Brief corrections (accepted from research)
for (const d of deals) {
  if (d.teamId === 'los-angeles-lakers' && d.dateAnnounced === '2026-08-12') {
    d.status = 'contested'
    d.note = 'Jeanie Buss challenging in court; hearing Dec 9, 2026.'
  }
}
const blazers = deals.find((d) => d.teamId === 'portland-trail-blazers' && d.type === 'control')
if (blazers && !deals.some((d) => d.teamId === 'portland-trail-blazers' && d.stakePct === 19.9)) {
  blazers.tranche = 1
  blazers.note = blazers.note || 'Tranche 1 of 2. Remaining 19.9% transfers by Sept 1, 2028 at a $4.5B valuation.'
  deals.push({
    ...blazers,
    tranche: 2,
    stakePct: 19.9,
    valuation: 4500000000,
    status: 'agreed',
    dateApproved: null,
    amountFinanced: null,
    note: 'Tranche 2 of 2: remaining 19.9% scheduled to transfer by Sept 1, 2028 at a $4.5B valuation.',
  })
}

const out = []
for (const d of deals) {
  if (DROP.has(dealKey(d))) continue
  const team = teams[d.teamId]
  if (!team) throw new Error(`Unknown teamId ${d.teamId}`)
  const key = dealKey(d)
  const scope = SCOPE[d.teamId] && d.dateAnnounced >= '2024-01-01' ? SCOPE[d.teamId] : 'team'
  const fAt = forbesAt(d.teamId, d.dateAnnounced || d.dateApproved)
  const premium = d.valuation && fAt ? +(d.valuation / fAt.value - 1).toFixed(4) : null

  let investmentCase = null
  const cagr = leagueCagr[team.league]
  if (d.valuation && fAt && cagr) {
    const need = (1 + premium) ** (1 / HORIZON) * (1 + HURDLE) - 1
    const exit = d.valuation * (1 + HURDLE) ** HORIZON
    const verdict = cagr.rate >= need
      ? `The league's run clears that bar by ${((cagr.rate - need) * 100).toFixed(1)} points a year.`
      : `The league's run falls ${((need - cagr.rate) * 100).toFixed(1)} points a year short, so the buyer is betting the next decade beats the last one.`
    investmentCase = {
      requiredAnnualAppreciation: +need.toFixed(4),
      leagueTrailingDecade: +cagr.rate.toFixed(4),
      text:
        `Paying ${fmt(d.valuation)} means the franchise has to be worth ${fmt(exit)} in ${HORIZON} years to return 7% a year. ` +
        `Measured from the ${fmt(fAt.value)} Forbes mark, that requires ${(need * 100).toFixed(1)}% annual appreciation. ` +
        `${team.league} franchises compounded at ${(cagr.rate * 100).toFixed(1)}% a year over the last decade of Forbes lists. ${verdict}`,
    }
  }

  out.push({
    teamId: d.teamId,
    type: d.type,
    dateAnnounced: d.dateAnnounced || null,
    dateApproved: d.dateApproved || null,
    status: d.status,
    note: d.note || null,
    valuation: d.valuation ?? null,
    valuationBasis: d.type === 'minority' ? 'implied whole-team mark' : 'enterprise value',
    valuationScope: scope,
    stakePct: d.stakePct ?? null,
    tranche: d.tranche ?? null,
    buyer: d.buyer,
    seller: d.seller ?? null,
    amountFinanced: d.amountFinanced ?? null,
    impliedRevenueMultiple: d.impliedRevenueMultiple ?? null,
    revenueAtDeal: d.revenueAtDeal ?? null,
    revenueYear: d.revenueYear ?? null,
    forbesValueAtSale: fAt?.value ?? null,
    forbesListYear: fAt?.year ?? null,
    forbesSource: fAt ? `${fAt.source}${fAt.stale ? ' (latest list in site data; newer list not yet loaded)' : ''}` : null,
    premiumToForbes: premium,
    drivers: drivers[key] ?? [],
    investmentCase,
    sources: d.sources,
    isEstimated: !!d.isEstimated,
    details: d.notes || null,
    key,
  })
}
out.sort((a, b) => (b.dateAnnounced || b.dateApproved).localeCompare(a.dateAnnounced || a.dateApproved))

function fmt(v) {
  return v >= 1e9 ? `$${(v / 1e9).toFixed(2)}B` : `$${Math.round(v / 1e6)}M`
}

const header = `// GENERATED by scripts/build-transactions.mjs from research/raw/*.json. Do not edit by hand.
// Single source of truth for team sales (control and minority) across the six leagues.
// valuation: USD, 100% basis. For minority deals it is the implied whole-team mark.
`
fs.writeFileSync(
  path.join(ROOT, 'data', 'transactions.js'),
  header +
    `export const lastUpdated = ${JSON.stringify(LAST_UPDATED)}\n\n` +
    `export const leagueTrailingDecade = ${JSON.stringify(leagueCagr, null, 2)}\n\n` +
    `export const transactions = ${JSON.stringify(out, null, 2)}\n`
)

// ── Sale history ──
const hist = {}
for (const f of fs.readdirSync(RAW).filter((f) => /^history-.*\.json$/.test(f))) {
  for (const h of readJson(f)) {
    if (!teams[h.teamId]) throw new Error(`Unknown teamId ${h.teamId} in ${f}`)
    hist[h.teamId] = { formation: h.formation ?? null, saleHistory: h.saleHistory ?? [] }
  }
}
fs.writeFileSync(
  path.join(ROOT, 'data', 'sale-history.js'),
  `// GENERATED by scripts/build-transactions.mjs from research/raw/history-*.json.\n` +
    `// Control-sale history per team from formation. price: nominal USD, null when unknown.\n` +
    `export const saleHistory = ${JSON.stringify(hist, null, 2)}\n`
)

// Audit inputs for research/transactions-audit.md
fs.writeFileSync(path.join(RAW, '_audit-input.json'), JSON.stringify({ out, rejected, unverified, leagueCagr }, null, 2))

const missingHist = Object.keys(teams).filter((id) => !hist[id])
console.log(`deals: ${out.length}  rejected: ${rejected.length}  unverified: ${unverified.length}`)
console.log(`sale histories: ${Object.keys(hist).length}/174  missing: ${missingHist.length}`)
console.log('leagueCagr', Object.fromEntries(Object.entries(leagueCagr).map(([k, v]) => [k, v && `${(v.rate * 100).toFixed(1)}% n=${v.n}`])))
for (const d of out) console.log([d.key, d.forbesListYear, d.premiumToForbes, d.valuationScope].join(' | '))
