// Audits every team's headline valuation, history, revenue and operating
// income against the loaded Forbes exports and writes research/stale-data.md.
// Run from the repo root: node research/tools/figure-audit.mjs

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..', '..')
const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href)
const { forbesBreakdown, leagueStatus } = await imp('data/forbes-breakdown.js')
const { forbesValues } = await imp('data/forbes-values.js')
const { valuations2025 } = await imp('data/valuations-2025.js')

const slug = (n) => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const rows = []
for (const [L, l] of Object.entries({ NFL: 'nfl', NBA: 'nba', MLB: 'mlb', NHL: 'nhl', MLS: 'mls', EPL: 'epl' })) {
  const mod = await imp(`data/enrichments-${l}.js`)
  for (const [name, e] of Object.entries(Object.values(mod)[0])) {
    const id = slug(name)
    const fb = forbesBreakdown[id]
    const fv = forbesValues[id]
    const typed = [...(e.valuationHistory ?? [])].sort((a, b) => a.year - b.year)
    const lastTyped = typed[typed.length - 1]
    const v25 = valuations2025[name]
    const headline = fb ? { value: fb.total, year: fb.year, source: fb.source }
      : v25?.value != null ? { value: v25.value, year: 2025, source: `${v25.source} (typed May 2026)` }
      : lastTyped ? { value: lastTyped.value, year: lastTyped.year, source: `${lastTyped.source} (typed)` } : null
    const typedYearsSuperseded = fv ? typed.filter((h) => fv.some((r) => r.year === h.year) && Math.abs(fv.find((r) => r.year === h.year).value - h.value) > 0.005).map((h) => `${h.year}: ${h.value}→${fv.find((r) => r.year === h.year).value}`) : []
    rows.push({
      league: L, name, id,
      status: fb ? 'export' : 'stale',
      headline,
      revenue: fb?.revenue != null ? { estimate: Math.round(fb.revenue * 1000), year: fb.year, source: 'export' } : e.revenue ? { ...e.revenue, source: `${e.revenue.source} (typed)` } : null,
      operatingIncome: fb?.operatingIncome != null ? Math.round(fb.operatingIncome * 1000) : e.revenue?.operatingIncome ?? null,
      ownershipCurrentValuationTyped: e.ownership?.currentValuation ?? null,
      typedYearsSuperseded,
    })
  }
}

const out = []
out.push('# Stale data audit', '')
out.push(`Generated ${new Date().toISOString().slice(0, 10)} by \`research/tools/figure-audit.mjs\`. Every figure the site shows traces to the newest loaded Forbes list per league where one exists (NFL 2026, MLB 2026, NBA 2025, NHL 2024, EPL top 11 from the 2026 soccer list). Teams below keep an older, typed-in figure and show its year.`, '')
out.push('## League status', '')
out.push('| League | Forbes export | Teams on export | Teams on typed figures |', '|---|---|---|---|')
for (const L of ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']) {
  const r = rows.filter((x) => x.league === L)
  out.push(`| ${L} | ${leagueStatus[L]} | ${r.filter((x) => x.status === 'export').length} | ${r.filter((x) => x.status === 'stale').length} |`)
}
out.push('', '## Teams without a loaded Forbes figure', '')
out.push('These keep their last Forbes figure with the year shown on the profile KPI. No MLS export exists (`research/forbes-raw/mls.json` was not present; every MLS list year returned empty when saved by hand).', '')
out.push('| League | Team | Headline shown | Year | Source | Revenue shown |', '|---|---|---|---|---|---|')
for (const r of rows.filter((x) => x.status === 'stale')) {
  out.push(`| ${r.league} | ${r.name} | ${r.headline ? `$${r.headline.value}B` : 'none'} | ${r.headline?.year ?? ''} | ${r.headline?.source ?? ''} | ${r.revenue ? `$${r.revenue.estimate}M (${r.revenue.year}, ${r.revenue.source})` : 'none'} |`)
}
out.push('', '## Typed figures superseded by the export', '')
const sup = rows.filter((r) => r.typedYearsSuperseded.length)
out.push(`${sup.length} teams had typed valuation-history years that differ from the Forbes export for the same year; the export now wins for those years (\`enrichments.js\` layer 4).`, '')
for (const r of sup) out.push(`- ${r.league} ${r.name}: ${r.typedYearsSuperseded.join('; ')}`)
out.push('', '## Figures no longer rendered from typed text', '')
out.push('- `ownership.currentValuation` and `ownership.impliedReturn` (typed strings from May 2026) are no longer displayed; the profile computes current value from the headline and the return from `acquisitionPrice` / `acquisitionYear`.')
out.push('- `revenue` and `operatingIncome` for export teams come from the export; the typed `revenue` object is kept as `revenueTyped` for reference only.')
out.push('- `ownerNetWorth` remains a typed string; the refresh overlay updates it only where an agent sourced a 2026 figure. It is labeled as an estimate on the profile.')
fs.writeFileSync(path.join(ROOT, 'research', 'stale-data.md'), out.join('\n') + '\n')
console.log(`audit: ${rows.length} teams, ${rows.filter((r) => r.status === 'export').length} on export, ${rows.filter((r) => r.status === 'stale').length} stale, ${sup.length} with superseded typed years`)
