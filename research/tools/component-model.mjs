// INTERNAL TOOL. Nothing here renders on the site.
//
// Within-league OLS sanity models of Forbes' Market, Stadium and Brand
// components on observable proxies, plus a Sport-vs-median check. Writes
// research/component-residuals.md so Josh can decide where commentary is
// warranted. Run from the repo root:
//   node research/tools/component-model.mjs

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..', '..')
const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href)
const { forbesBreakdown } = await imp('data/forbes-breakdown.js')
const { forbesProxies } = await imp('data/forbes-proxies.js')

const slug = (n) => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const teams = {}
for (const [L, l] of Object.entries({ NFL: 'nfl', NBA: 'nba', MLB: 'mlb', NHL: 'nhl' })) {
  const mod = await imp(`data/enrichments-${l}.js`)
  for (const name of Object.keys(Object.values(mod)[0])) {
    const id = slug(name)
    if (forbesBreakdown[id]?.componentsPublished) teams[id] = { id, name, league: L, fb: forbesBreakdown[id], p: forbesProxies[id] || {} }
  }
}

const log = (v) => (v != null && v > 0 ? Math.log(v) : null)
const bool = (v) => (v == null ? null : v ? 1 : 0)
const PREDICTORS = {
  market: [
    ['metro population', (p) => log(p.pop)],
    ['TV households', (p) => log(p.tvh)],
    ['household income', (p) => p.income],
    ['local competition', (p) => p.competitors],
  ],
  stadium: [
    ['opening year of current building', (p) => p.yearOpened],
    ['capacity', (p) => p.capacity],
    ['premium seating', (p) => p.premiumSeats],
    ['team ownership of the building', (p) => bool(p.teamOwned)],
    ['team owns the land', (p) => bool(p.teamOwnsLand)],
    ['adjacent team-controlled real estate', (p) => bool(p.realEstateDistrict)],
    ['naming-rights value ($M/yr)', (p) => p.namingRightsAnnualM],
  ],
  brand: [
    ['championships since 2001', (p) => p.titles25],
    ['national TV exposure', (p) => p.nationalTv],
    ['social following', (p) => log(p.socialM)],
    ['merchandise rank', (p) => (p.merchRank == null ? null : 1 / p.merchRank)],
  ],
}
const MIN_SHARE = 0.5
const SPORT_TOL = 0.05

const median = (xs) => { const s = [...xs].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2 }
const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length
const sd = (xs) => { const m = mean(xs); return Math.sqrt(xs.reduce((s, x) => s + (x - m) ** 2, 0) / Math.max(1, xs.length - 1)) }

function solve(A, b) {
  const n = A.length
  const M = A.map((row, i) => [...row, b[i]])
  for (let c = 0; c < n; c++) {
    let p = c
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r
    ;[M[c], M[p]] = [M[p], M[c]]
    const d = M[c][c] || 1e-12
    for (let r = 0; r < n; r++) {
      if (r === c) continue
      const f = M[r][c] / d
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]
    }
  }
  return M.map((row, i) => row[n] / (row[i] || 1e-12))
}
function ols(X, y) {
  const k = X[0].length
  const XtX = Array.from({ length: k }, (_, i) => Array.from({ length: k }, (_, j) => X.reduce((s, r) => s + r[i] * r[j], 0) + (i === j && i > 0 ? 1e-6 : 0)))
  const Xty = Array.from({ length: k }, (_, i) => X.reduce((s, r, ri) => s + r[i] * y[ri], 0))
  return solve(XtX, Xty)
}

const fmtB = (v) => (Math.abs(v) >= 1 ? `$${Math.abs(v).toFixed(2)}B` : `$${Math.round(Math.abs(v) * 1000)}M`)
const signed = (v) => `${v >= 0 ? '+' : '-'}${fmtB(v)}`

const out = []
const all = []
out.push('# Forbes component residuals (internal)', '')
out.push(`Generated ${new Date().toISOString().slice(0, 10)} by \`research/tools/component-model.mjs\`. Nothing in this file renders on the site; it exists so Josh can decide where commentary is warranted.`, '')
out.push('Method: within each league, OLS of the Forbes component on standardized proxies (missing proxies median-imputed; a predictor is dropped when more than half the league lacks it). Residual = Forbes minus fitted. z = residual / residual SD. Sport is compared with the league median instead (flag beyond ±5%). Sample sizes are 30 to 32, so one outlier moves the line; R² is reported so the weak models are obvious.', '')

for (const L of ['NFL', 'NBA', 'MLB', 'NHL']) {
  const ts = Object.values(teams).filter((t) => t.league === L)
  if (!ts.length) continue
  out.push(`## ${L} (Forbes list ${ts[0].fb.year})`, '')
  for (const comp of ['market', 'stadium', 'brand']) {
    const preds = PREDICTORS[comp].filter(([, get]) => ts.filter((t) => get(t.p) != null).length / ts.length >= MIN_SHARE)
    const cols = preds.map(([label, get]) => {
      const raw = ts.map((t) => get(t.p))
      const med = median(raw.filter((v) => v != null))
      const filled = raw.map((v) => (v == null ? med : v))
      const m = mean(filled); const s = sd(filled) || 1
      return { label, z: filled.map((v) => (v - m) / s), missing: raw.filter((v) => v == null).length }
    }).filter((c) => c.z.some((v) => Math.abs(v) > 1e-9))
    const dropped = PREDICTORS[comp].map(([l]) => l).filter((l) => !cols.some((c) => c.label === l))
    const y = ts.map((t) => t.fb[comp])
    const X = ts.map((_, i) => [1, ...cols.map((c) => c.z[i])])
    const beta = ols(X, y)
    const fitted = X.map((row) => row.reduce((s, x, i) => s + x * beta[i], 0))
    const resid = y.map((v, i) => v - fitted[i])
    const s = sd(resid)
    const ssTot = y.reduce((a, v) => a + (v - mean(y)) ** 2, 0)
    const r2 = 1 - resid.reduce((a, r) => a + r * r, 0) / ssTot
    out.push(`### ${comp[0].toUpperCase() + comp.slice(1)} · R² ${r2.toFixed(2)} · n=${ts.length}`, '')
    out.push(`Predictors: ${cols.map((c) => `${c.label}${c.missing ? ` (${c.missing} imputed)` : ''}`).join('; ')}.${dropped.length ? ` Dropped for missing data: ${dropped.join('; ')}.` : ''}`, '')
    out.push('| Team | Forbes | Fitted | Residual | z |', '|---|---|---|---|---|')
    const rows = ts.map((t, i) => ({ ...t, comp, y: y[i], fit: fitted[i], res: resid[i], z: s ? resid[i] / s : 0 }))
    for (const r of [...rows].sort((a, b) => Math.abs(b.res) - Math.abs(a.res)).slice(0, 8)) {
      out.push(`| ${r.name} | ${fmtB(r.y)} | ${fmtB(r.fit)} | ${signed(r.res)} | ${r.z.toFixed(2)} |`)
    }
    out.push('')
    all.push(...rows.map((r) => ({ L, comp, name: r.name, y: r.y, res: r.res, z: r.z })))
  }
  // Sport
  const sportMed = median(ts.map((t) => t.fb.sport))
  const off = ts.map((t) => ({ name: t.name, v: t.fb.sport, dev: t.fb.sport / sportMed - 1 })).filter((r) => Math.abs(r.dev) > SPORT_TOL).sort((a, b) => Math.abs(b.dev) - Math.abs(a.dev))
  out.push(`### Sport · median ${fmtB(sportMed)} · ${off.length} of ${ts.length} beyond ±5%`, '')
  out.push(['MLB', 'NHL'].includes(L)
    ? 'Sport in this league reads as a net revenue-sharing position (big-market clubs low, small-market clubs high), so flatness is not the right test; the list below is a ranking of net positions, not of errors.'
    : 'Sport should be near flat. Teams beyond ±5% of the median:', '')
  if (off.length) {
    out.push('| Team | Forbes | vs median |', '|---|---|---|')
    for (const r of off.slice(0, 12)) out.push(`| ${r.name} | ${fmtB(r.v)} | ${r.dev >= 0 ? '+' : ''}${Math.round(r.dev * 100)}% |`)
    out.push('')
  }
}

out.push('## Largest residuals across all leagues and components', '')
out.push('By absolute dollars (Market, Stadium, Brand models):', '')
out.push('| League | Team | Component | Residual | z |', '|---|---|---|---|---|')
for (const r of [...all].sort((a, b) => Math.abs(b.res) - Math.abs(a.res)).slice(0, 15)) out.push(`| ${r.L} | ${r.name} | ${r.comp} | ${signed(r.res)} | ${r.z.toFixed(2)} |`)
out.push('', 'By standardized residual (|z|):', '')
out.push('| League | Team | Component | Residual | z |', '|---|---|---|---|---|')
for (const r of [...all].sort((a, b) => Math.abs(b.z) - Math.abs(a.z)).slice(0, 15)) out.push(`| ${r.L} | ${r.name} | ${r.comp} | ${signed(r.res)} | ${r.z.toFixed(2)} |`)
out.push('')
out.push('## Reading these', '')
out.push('- A large positive residual means Forbes values the component above what the proxies predict. It is a prompt to look, not a verdict: the proxies miss things like a team-owned district (Chase Center, SoFi), operating control of a public building (Allegiant), or a local media asset (YES, SportsNet LA).')
out.push('- Stadium R² is low in every league even with ownership, land, real estate and naming rights included, because premium-seat counts and event revenue are missing for most teams.')
out.push('- Use the tables to pick which teams get a "Forbes is right / off" sentence in data/forbes-commentary.js. Write the sentence from the facts, not from the residual.')

fs.writeFileSync(path.join(ROOT, 'research', 'component-residuals.md'), out.join('\n') + '\n')
console.log(`wrote research/component-residuals.md (${all.length} team-components)`)
