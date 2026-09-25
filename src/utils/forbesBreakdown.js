// "Inside the Forbes Number": league statistics, sanity models, verdicts, and
// editorial copy for Forbes' four value components (Sport, Market, Stadium,
// Brand). Everything here is derived from data/forbes-breakdown.js (Forbes'
// own split, never estimated) and data/forbes-proxies.js (observable proxies).
//
// Sanity models are within-league OLS regressions of each component on its
// proxies. A team-component whose residual is beyond ±1 standard deviation of
// the league's residuals is "generous" (Forbes above the proxies) or
// "conservative" (below). Sport should be flat within a league, so it is
// tested against the league median instead (±5%).

import allTeams from '../../data/allTeams.js'
import { leagueStatus } from '../../data/forbes-breakdown.js'
import { forbesProxies } from '../../data/forbes-proxies.js'

export { leagueStatus }

export const COMPONENTS = [
  { key: 'sport',   label: 'Sport' },
  { key: 'market',  label: 'Market' },
  { key: 'stadium', label: 'Stadium' },
  { key: 'brand',   label: 'Brand' },
]

export const VERDICT = {
  generous:     'Forbes looks generous',
  onMark:       'On the mark',
  conservative: 'Forbes looks conservative',
}

const SPORT_TOLERANCE = 0.05
const MIN_FIT_SHARE = 0.5 // drop a predictor if more than half the league lacks it

// ── Predictors per component ──
const log = (v) => (v != null && v > 0 ? Math.log(v) : null)
const PREDICTORS = {
  market: [
    { key: 'logPop',      label: 'metro population',       get: (p) => log(p.pop) },
    { key: 'logTvh',      label: 'TV households',          get: (p) => log(p.tvh) },
    { key: 'income',      label: 'household income',       get: (p) => p.income },
    { key: 'competitors', label: 'local competition',      get: (p) => p.competitors },
  ],
  stadium: [
    { key: 'age',         label: 'venue age',              get: (p) => (p.yearOpened ? Math.min(2026 - (p.yearRenovated || p.yearOpened), 2026 - p.yearOpened) : null) },
    { key: 'capacity',    label: 'capacity',               get: (p) => p.capacity },
    { key: 'premium',     label: 'premium seating',        get: (p) => p.premiumSeats },
    { key: 'owned',       label: 'venue control',          get: (p) => (p.teamOwned == null ? null : p.teamOwned ? 1 : 0) },
    { key: 'events',      label: 'non-league event revenue', get: (p) => p.eventRevenueM },
  ],
  brand: [
    { key: 'titles',      label: 'championships',          get: (p) => p.titles25 },
    { key: 'nationalTv',  label: 'national TV exposure',   get: (p) => p.nationalTv },
    { key: 'logSocial',   label: 'social following',       get: (p) => log(p.socialM) },
    { key: 'merch',       label: 'merchandise rank',       get: (p) => (p.merchRank == null ? null : 1 / p.merchRank) },
  ],
}

// ── Small linear algebra: OLS via normal equations with ridge epsilon ──
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
  const XtX = Array.from({ length: k }, (_, i) => Array.from({ length: k }, (_, j) =>
    X.reduce((s, row) => s + row[i] * row[j], 0) + (i === j && i > 0 ? 1e-6 : 0)))
  const Xty = Array.from({ length: k }, (_, i) => X.reduce((s, row, r) => s + row[i] * y[r], 0))
  return solve(XtX, Xty)
}

const median = (xs) => {
  if (!xs.length) return null
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null)
const sd = (xs) => {
  const m = mean(xs)
  return Math.sqrt(xs.reduce((s, x) => s + (x - m) ** 2, 0) / Math.max(1, xs.length - 1))
}

// ── Build everything once ──
const teamsById = Object.fromEntries(allTeams.map((t) => [t.id, t]))

function buildLeague(league) {
  const teams = allTeams.filter((t) => t.league === league && t.forbesBreakdown?.componentsPublished)
  if (!teams.length) return null
  const stats = {}
  const models = {}
  const results = {} // teamId -> component -> {...}

  for (const { key } of COMPONENTS) {
    const rows = teams.map((t) => ({ id: t.id, name: t.name, value: t.forbesBreakdown[key] }))
      .filter((r) => r.value != null).sort((a, b) => a.value - b.value)
    const vals = rows.map((r) => r.value)
    stats[key] = { n: vals.length, mean: mean(vals), median: median(vals), min: vals[0], max: vals[vals.length - 1], rows }
  }

  // Sport: distance from league median
  for (const t of teams) {
    results[t.id] = {}
    const v = t.forbesBreakdown.sport
    const med = stats.sport.median
    const dev = med ? v / med - 1 : 0
    results[t.id].sport = {
      residual: +(v - med).toFixed(3),
      residualPct: +dev.toFixed(4),
      verdict: Math.abs(dev) <= SPORT_TOLERANCE ? 'onMark' : dev > 0 ? 'generous' : 'conservative',
      flagged: Math.abs(dev) > SPORT_TOLERANCE,
    }
  }

  // Market / Stadium / Brand regressions
  for (const comp of ['market', 'stadium', 'brand']) {
    const preds = PREDICTORS[comp].filter((p) => {
      const have = teams.filter((t) => p.get(forbesProxies[t.id] || {}) != null).length
      return have / teams.length >= MIN_FIT_SHARE
    })
    // Median-impute missing values, then standardize.
    const cols = preds.map((p) => {
      const raw = teams.map((t) => p.get(forbesProxies[t.id] || {}))
      const med = median(raw.filter((v) => v != null))
      const filled = raw.map((v) => (v == null ? med : v))
      const m = mean(filled)
      const s = sd(filled) || 1
      return { ...p, z: filled.map((v) => (v - m) / s), imputed: raw.map((v) => v == null) }
    }).filter((c) => c.z.some((v) => Math.abs(v) > 1e-9))
    const y = teams.map((t) => t.forbesBreakdown[comp])
    if (!cols.length || teams.length < cols.length + 3) {
      models[comp] = { predictors: [], note: 'Not enough proxy data to fit a model.' }
      for (const t of teams) results[t.id][comp] = { residual: null, residualPct: null, verdict: null, flagged: false }
      continue
    }
    const X = teams.map((_, i) => [1, ...cols.map((c) => c.z[i])])
    const beta = ols(X, y)
    const fitted = X.map((row) => row.reduce((s, x, i) => s + x * beta[i], 0))
    const resid = y.map((v, i) => v - fitted[i])
    const s = sd(resid)
    const ssTot = y.reduce((acc, v) => acc + (v - mean(y)) ** 2, 0)
    const r2 = ssTot ? 1 - resid.reduce((acc, r) => acc + r * r, 0) / ssTot : null
    models[comp] = {
      predictors: cols.map((c, i) => ({ key: c.key, label: c.label, coef: beta[i + 1] })),
      r2: r2 != null ? +r2.toFixed(3) : null,
      residualSd: +s.toFixed(3),
      n: teams.length,
    }
    teams.forEach((t, i) => {
      const imputed = cols.filter((c) => c.imputed[i]).map((c) => c.label)
      // Biggest contributor to the prediction relative to average, for the reason text.
      const contrib = cols.map((c, j) => ({ label: c.label, v: beta[j + 1] * c.z[i] }))
        .sort((a, b) => Math.abs(b.v) - Math.abs(a.v))
      results[t.id][comp] = {
        predicted: +fitted[i].toFixed(3),
        residual: +resid[i].toFixed(3),
        residualPct: fitted[i] > 0 ? +(resid[i] / fitted[i]).toFixed(4) : null,
        z: s ? +(resid[i] / s).toFixed(2) : 0,
        verdict: resid[i] > s ? 'generous' : resid[i] < -s ? 'conservative' : 'onMark',
        flagged: Math.abs(resid[i]) > s,
        imputed,
        topDriver: contrib[0]?.label ?? null,
      }
    })
  }

  // Ranks and percentiles
  for (const t of teams) {
    for (const { key } of COMPONENTS) {
      const st = stats[key]
      const v = t.forbesBreakdown[key]
      const rank = st.rows.filter((r) => r.value > v).length + 1
      const below = st.rows.filter((r) => r.value < v).length
      Object.assign(results[t.id][key], {
        value: v,
        share: t.forbesBreakdown.total ? v / t.forbesBreakdown.total : null,
        rank,
        of: st.n,
        percentile: st.n > 1 ? Math.round((below / (st.n - 1)) * 100) : 100,
        vsMedian: +(v - st.median).toFixed(3),
      })
    }
  }
  return { stats, models, results, teams: teams.map((t) => t.id) }
}

export const breakdownByLeague = Object.fromEntries(
  ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL'].map((L) => [L, buildLeague(L)]).filter(([, v]) => v)
)

export function teamBreakdown(team) {
  const lg = breakdownByLeague[team.league]
  if (!lg || !lg.results[team.id]) return null
  return { league: lg, result: lg.results[team.id], fb: team.forbesBreakdown }
}

// All team-component residuals, largest first (for "Where Forbes is off").
export function residualTable(league) {
  const lg = breakdownByLeague[league]
  if (!lg) return []
  const rows = []
  for (const id of lg.teams) {
    for (const { key, label } of COMPONENTS) {
      const r = lg.results[id][key]
      if (r.residual == null) continue
      rows.push({ id, name: teamsById[id].name, component: key, label, ...r, reason: verdictReason(teamsById[id], key, r, lg) })
    }
  }
  const scale = (r) => (r.component === 'sport' ? Math.abs(r.residualPct) / SPORT_TOLERANCE : Math.abs(r.z ?? 0))
  return rows.sort((a, b) => scale(b) - scale(a))
}

// ── Copy (Josh's voice: specific, no hedging, no em dashes) ──
const $b = (v) => (v == null ? 'n/a' : Math.abs(v) >= 1 ? `$${Math.abs(v).toFixed(2)}B` : `$${Math.round(Math.abs(v) * 1000)}M`)
const pct = (v) => `${Math.round(Math.abs(v) * 100)}%`
const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}
const fmtNum = (v, unit = '') => (v >= 1e6 ? `${(v / 1e6).toFixed(1)}M${unit}` : v >= 1e3 ? `${Math.round(v / 1e3)}K${unit}` : `${v}${unit}`)

function leagueRankOf(league, id, get) {
  const vals = allTeams.filter((t) => t.league === league)
    .map((t) => ({ id: t.id, v: get(forbesProxies[t.id] || {}) })).filter((x) => x.v != null)
    .sort((a, b) => b.v - a.v)
  const i = vals.findIndex((x) => x.id === id)
  return i < 0 ? null : { rank: i + 1, of: vals.length }
}

export function componentExplanation(team, key) {
  const p = forbesProxies[team.id] || {}
  const L = team.league
  const tb = teamBreakdown(team)
  const r = tb?.result[key]
  const pos = r ? `${ordinal(r.rank)} of ${r.of} in the ${L}` : null
  const parts = []

  if (key === 'market') {
    if (p.pop) {
      const pr = leagueRankOf(L, team.id, (x) => x.pop)
      parts.push(`${p.metro || team.city} has ${fmtNum(p.pop)} people${pr ? `, the ${ordinal(pr.rank)} largest metro in the ${L}` : ''}${p.tvh ? `, and ${fmtNum(p.tvh)} TV households` : ''}.`)
    }
    if (p.competitors != null) {
      parts.push(p.competitors === 0
        ? `No other major-league team competes for that audience, so the ${team.name.split(' ').pop()} own it outright.`
        : `${p.competitors} other major-league team${p.competitors === 1 ? '' : 's'} split${p.competitors === 1 ? 's' : ''} that audience, which caps how much of it any one club can monetize.`)
    }
    if (p.income) parts.push(`Median household income of $${Math.round(p.income / 1000)}K sets the ceiling on ticket and sponsorship pricing.`)
  }
  if (key === 'stadium') {
    if (p.venue && p.yearOpened) {
      parts.push(`${p.venue} opened in ${p.yearOpened}${p.yearRenovated ? ` and was renovated in ${p.yearRenovated}` : ''}${p.capacity ? `, with ${p.capacity.toLocaleString()} seats` : ''}.`)
    }
    if (p.teamOwned != null) {
      parts.push(p.teamOwned
        ? 'The team controls the building, so suites, naming rights, and every non-game event flow to ownership.'
        : 'The team is a tenant, so the landlord keeps a share of the building economics that would otherwise land in this number.')
    }
    if (p.premiumSeats) parts.push(`${p.premiumSeats.toLocaleString()} premium seats${p.suites ? `, including ${p.suites} suites,` : ''} drive the high-margin revenue Forbes capitalizes here.`)
    else if (p.eventRevenueM) parts.push(`Non-league events add about $${p.eventRevenueM}M a year.`)
  }
  if (key === 'brand') {
    const bits = []
    if (p.titles25 != null) bits.push(`${p.titles25} championship${p.titles25 === 1 ? '' : 's'} since 2001`)
    if (p.nationalTv != null) bits.push(`${p.nationalTv} ${p.nationalTvScope === 'Canada' ? 'Canadian national broadcasts' : 'national TV games'} last season`)
    if (bits.length) parts.push(`${team.name} bring ${bits.join(' and ')}.`)
    if (p.socialM) {
      const sr = leagueRankOf(L, team.id, (x) => x.socialM)
      parts.push(`A social following of ${p.socialM.toFixed(1)}M${sr ? ` ranks ${ordinal(sr.rank)} in the ${L}` : ''}${p.merchRank ? `, and merchandise sales rank ${ordinal(p.merchRank)}` : ''}.`)
    } else if (p.merchRank) {
      parts.push(`Merchandise sales rank ${ordinal(p.merchRank)} in the ${L}.`)
    }
  }
  if (key === 'sport') {
    parts.push(`Sport is the value of the ${L}'s shared revenue, the same national TV and licensing money every club collects.`)
    if (r) {
      parts.push(Math.abs(r.residualPct) <= SPORT_TOLERANCE
        ? `${team.name} sit within ${pct(r.residualPct)} of the league median, exactly where shared revenue says they should.`
        : `${team.name} sit ${pct(r.residualPct)} ${r.residualPct > 0 ? 'above' : 'below'} the league median, which shared revenue alone can't explain.`)
    }
    if (p.sportNote) parts.push(p.sportNote.replace(/\s*[–—]\s*/g, ', '))
  }
  if (!parts.length) return pos ? `Ranks ${pos}.` : null
  return parts.slice(0, 3).join(' ')
}

export function verdictReason(team, key, r, lg = breakdownByLeague[team.league]) {
  if (!r || r.verdict == null) return null
  if (key === 'sport') {
    return r.verdict === 'onMark'
      ? `Within ${pct(r.residualPct)} of the ${team.league} median, as a shared-revenue number should be.`
      : `${pct(r.residualPct)} ${r.residualPct > 0 ? 'above' : 'below'} the league median on money that is supposed to be split evenly.`
  }
  const labels = lg?.models[key]?.predictors.map((p) => p.label) ?? []
  const basis = labels.length > 2 ? `${labels.slice(0, -1).join(', ')}, and ${labels[labels.length - 1]}` : labels.join(' and ')
  if (r.verdict === 'onMark') return `Within ${$b(r.residual)} of what ${basis} predict.`
  return `Forbes has it ${$b(r.residual)} ${r.residual > 0 ? 'above' : 'below'} what ${basis} predict${r.topDriver ? `; ${r.topDriver} is the biggest input` : ''}.`
}

// ── Same market, different number ──
function metroKey(id) {
  return forbesProxies[id]?.metro || null
}

export function sameMarketCallouts(team) {
  const tb = teamBreakdown(team)
  const metro = metroKey(team.id)
  if (!tb || !metro) return []
  const rivals = allTeams.filter((o) => o.id !== team.id && o.league === team.league
    && metroKey(o.id) === metro && o.forbesBreakdown?.componentsPublished)
  return rivals.map((o) => {
    const a = team.forbesBreakdown
    const b = o.forbesBreakdown
    const gap = a.total - b.total
    const diffs = COMPONENTS.map(({ key, label }) => ({ key, label, d: a[key] - b[key] }))
      .sort((x, y) => Math.abs(y.d) - Math.abs(x.d))
    const top = diffs[0]
    const ra = tb.result[top.key]
    const rb = tb.league.results[o.id]?.[top.key]
    // Justified if the gap tracks the proxies: residuals of the two teams differ by < 1 SD.
    const sdv = tb.league.models[top.key]?.residualSd
    const justified = top.key === 'sport' || ra?.residual == null || rb?.residual == null || !sdv
      ? null
      : Math.abs(ra.residual - rb.residual) < sdv
    const marketGap = a.market - b.market
    const lines = [
      `Forbes has the ${team.name} ${$b(gap)} ${gap >= 0 ? 'ahead of' : 'behind'} the ${o.name} in the same metro.`,
      Math.abs(marketGap) < 0.05 * Math.max(a.market, b.market)
        ? `The Market slices match, so the gap comes from ${top.label}, where the difference is ${$b(top.d)}.`
        : `Market alone differs by ${$b(marketGap)} even though both teams draw from ${metro}, and the biggest gap is ${top.label} at ${$b(top.d)}.`,
      justified == null ? null
        : justified ? `The proxies back it: ${top.label.toLowerCase()} fundamentals explain the difference.`
        : `The proxies don't fully back it: the ${top.label.toLowerCase()} gap is larger than the fundamentals support.`,
    ].filter(Boolean)
    return { rivalId: o.id, rivalName: o.name, gap, text: lines.join(' ') }
  })
}
