// Unified enrichments lookup keyed by team name.
//
// Layering, lowest to highest priority:
//   1. enrichments-<league>.js        researched facts, typed valuation history
//   2. supplements-<league>.js        extended history and factor narratives
//   3. valuations-2025.js             May 2026 typed-in Forbes 2025 figures
//   4. forbes-values.js / forbes-breakdown.js   the loaded Forbes list exports:
//      every list year an export covers replaces the typed figure for that
//      year, and revenue / operating income come from the export
//   5. refresh-2026.js                fact refresh overlay (ownership, venue,
//      media, on-field, analystNotes) verified as of September 2026
//
// A team with no export (MLS, nine EPL clubs) keeps its last typed Forbes
// figure; research/stale-data.md lists them.
import { nflEnrichments } from './enrichments-nfl.js'
import { nbaEnrichments } from './enrichments-nba.js'
import { mlbEnrichments } from './enrichments-mlb.js'
import { nhlEnrichments } from './enrichments-nhl.js'
import { mlsEnrichments } from './enrichments-mls.js'
import { eplEnrichments } from './enrichments-epl.js'
import { valuations2025 } from './valuations-2025.js'
import { forbesValues } from './forbes-values.js'
import { forbesBreakdown } from './forbes-breakdown.js'
import { refresh2026 } from './refresh-2026.js'

// Vite glob import: picks up any supplements-{league}.js file that exists.
const supplementModules = import.meta.glob('./supplements-*.js', { eager: true })

const supplements = {}
for (const mod of Object.values(supplementModules)) {
  for (const exported of Object.values(mod)) {
    if (exported && typeof exported === 'object') Object.assign(supplements, exported)
  }
}

const baseEnrichments = {
  ...nflEnrichments,
  ...nbaEnrichments,
  ...mlbEnrichments,
  ...nhlEnrichments,
  ...mlsEnrichments,
  ...eplEnrichments,
}

export function teamIdFor(name) {
  return name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function setPath(obj, dotPath, value) {
  const keys = dotPath.split('.')
  let cur = obj
  for (let i = 0; i < keys.length - 1; i++) {
    if (cur[keys[i]] == null || typeof cur[keys[i]] !== 'object') cur[keys[i]] = {}
    else cur[keys[i]] = Array.isArray(cur[keys[i]]) ? [...cur[keys[i]]] : { ...cur[keys[i]] }
    cur = cur[keys[i]]
  }
  cur[keys[keys.length - 1]] = value
}

const enrichments = {}
for (const [teamName, base] of Object.entries(baseEnrichments)) {
  const id = teamIdFor(teamName)
  const supp = supplements[teamName]
  const e = {
    ...base,
    valuationHistory: [
      ...(supp?.extendedValuationHistory ?? []),
      ...(base.valuationHistory ?? []),
    ],
    ...(supp?.factorNarratives ? { factorNarratives: supp.factorNarratives } : {}),
  }

  // 3. Typed-in 2025 figure, only when no history entry for 2025 exists yet.
  const v25 = valuations2025[teamName]
  if (v25?.value != null && !e.valuationHistory.some((h) => h.year === 2025)) {
    e.valuationHistory = [...e.valuationHistory, { year: 2025, value: v25.value, source: v25.source }]
  }

  // 4. Loaded Forbes export: replaces every covered year; sets revenue and operating income.
  const fv = forbesValues[id]
  const fb = forbesBreakdown[id]
  if (fv?.length) {
    const byYear = new Map(e.valuationHistory.map((h) => [h.year, h]))
    for (const row of fv) byYear.set(row.year, { year: row.year, value: row.value, source: 'Forbes list export' })
    e.valuationHistory = [...byYear.values()].sort((a, b) => a.year - b.year)
    e.valuationSource = { kind: 'export', list: fb?.source ?? 'Forbes list export', year: fb?.year ?? fv[fv.length - 1].year }
  } else {
    const last = [...e.valuationHistory].sort((a, b) => a.year - b.year).slice(-1)[0]
    e.valuationSource = { kind: 'typed', list: last?.source ?? null, year: last?.year ?? null }
  }
  if (fb?.revenue != null) {
    e.revenueTyped = e.revenue ?? null
    e.revenue = { estimate: Math.round(fb.revenue * 1000), year: fb.year, source: fb.source, operatingIncome: fb.operatingIncome != null ? Math.round(fb.operatingIncome * 1000) : null }
  }

  // 5. Fact refresh overlay.
  const r = refresh2026[id]
  if (r) {
    for (const c of r.changes ?? []) setPath(e, c.field, c.new)
    if (r.analystNotes) {
      e.analystNotesPrevious = e.analystNotes
      e.analystNotes = r.analystNotes
    }
    e.refreshedAsOf = r.asOf ?? null
  }

  enrichments[teamName] = e
}

export default enrichments

export function getEnrichment(teamName) {
  return enrichments[teamName] || null
}
