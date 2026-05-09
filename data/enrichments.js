// Unified enrichments lookup keyed by team name
// Combines all 6 league enrichment files + auto-merges any supplements-{league}.js files
// + appends 2025 valuations from valuations-2025.js
import { nflEnrichments } from './enrichments-nfl.js'
import { nbaEnrichments } from './enrichments-nba.js'
import { mlbEnrichments } from './enrichments-mlb.js'
import { nhlEnrichments } from './enrichments-nhl.js'
import { mlsEnrichments } from './enrichments-mls.js'
import { eplEnrichments } from './enrichments-epl.js'
import { valuations2025 } from './valuations-2025.js'

// Vite glob import: picks up any supplements-{league}.js file that exists.
// Files added later are picked up on next dev rebuild without code changes.
const supplementModules = import.meta.glob('./supplements-*.js', { eager: true })

const supplements = {}
for (const mod of Object.values(supplementModules)) {
  for (const exported of Object.values(mod)) {
    if (exported && typeof exported === 'object') {
      Object.assign(supplements, exported)
    }
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

// Merge supplements: prepend extendedValuationHistory; attach factorNarratives.
const enrichments = {}
for (const [teamName, base] of Object.entries(baseEnrichments)) {
  const supp = supplements[teamName]
  if (!supp) {
    enrichments[teamName] = { ...base, valuationHistory: [...(base.valuationHistory ?? [])] }
    continue
  }
  enrichments[teamName] = {
    ...base,
    valuationHistory: [
      ...(supp.extendedValuationHistory ?? []),
      ...(base.valuationHistory ?? []),
    ],
    ...(supp.factorNarratives ? { factorNarratives: supp.factorNarratives } : {}),
  }
}

// Append 2025 valuations as the latest data point per team.
// `null` values are skipped (team has no 2025 figure available).
for (const [teamName, entry] of Object.entries(valuations2025)) {
  if (entry?.value == null) continue
  const e = enrichments[teamName]
  if (!e) continue
  // Don't double-append if a 2025 entry already exists in base/supplement data
  const has2025 = (e.valuationHistory ?? []).some((h) => h.year === 2025)
  if (has2025) continue
  e.valuationHistory = [
    ...(e.valuationHistory ?? []),
    { year: 2025, value: entry.value, source: entry.source },
  ]
}

export default enrichments

export function getEnrichment(teamName) {
  return enrichments[teamName] || null
}
