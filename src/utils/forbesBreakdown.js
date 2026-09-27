// "Inside the Forbes Number".
//
// The numbers are Forbes'. The commentary is ours. Every comparison here is
// against league peers (same market, same division, similar metro size), never
// against a model. The regression tool that ranks residuals lives under
// research/tools/ and nothing from it renders on the site.

import allTeams from '../../data/allTeams.js'
import { leagueStatus } from '../../data/forbes-breakdown.js'
import { forbesProxies } from '../../data/forbes-proxies.js'
import { divisionOf } from '../../data/divisions.js'
import { commentary as OVERRIDES, calloutOverrides, leagueNoteOverrides } from '../../data/forbes-commentary.js'

export { leagueStatus }

export const COMPONENTS = [
  { key: 'sport',   label: 'Sport' },
  { key: 'market',  label: 'Market' },
  { key: 'stadium', label: 'Stadium' },
  { key: 'brand',   label: 'Brand' },
]

// Leagues where Sport is read as a net revenue-sharing position rather than a flat share.
export const NET_SHARING_LEAGUES = new Set(['MLB', 'NHL'])
const FLAT_TOLERANCE = 0.05

// ── helpers ──
const teamsById = Object.fromEntries(allTeams.map((t) => [t.id, t]))
const median = (xs) => {
  if (!xs.length) return null
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null)
const quantile = (sorted, q) => sorted[Math.min(sorted.length - 1, Math.max(0, Math.round((sorted.length - 1) * q)))]

export const fmtB = (v) => (v == null ? '—' : Math.abs(v) >= 1 ? `$${Math.abs(v).toFixed(2)}B` : `$${Math.round(Math.abs(v) * 1000)}M`)
const pctOf = (v) => `${Math.round(Math.abs(v) * 100)}%`
const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}
const fmtNum = (v) => (v >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : v >= 1e3 ? `${Math.round(v / 1e3)}K` : `${v}`)
const TWO_WORD = /\b(Red Sox|White Sox|Blue Jackets|Red Wings|Maple Leafs|Blue Jays|Golden Knights|Trail Blazers|Hockey Club)$/
const short = (name) => {
  const m = name.match(TWO_WORD)
  if (m) return m[1]
  return /\b(FC|SC)\b/.test(name) ? name : name.split(' ').slice(-1)[0]
}
const theL = (league) => (league === 'MLB' ? 'MLB' : `the ${league}`)
const metroName = (m) => (m ? m.replace(/\s*\([^)]*\)\s*$/, '') : m)
export const sharePct = (s) => (s * 100 < 10 ? (s * 100).toFixed(1) : String(Math.round(s * 100)))
const noDash = (s) => (typeof s === 'string' ? s.replace(/\s*[–—]\s*/g, ', ') : s)
const clean = (s) => noDash(s)

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function leagueAsOf(league) {
  const t = allTeams.find((x) => x.league === league && x.forbesBreakdown?.componentsPublished)
  const fb = t?.forbesBreakdown
  if (!fb) return null
  return fb.month ? `${MONTHS[fb.month - 1]} ${fb.year}` : String(fb.year)
}

// ── league statistics ──
function buildLeague(league) {
  const teams = allTeams.filter((t) => t.league === league && t.forbesBreakdown?.componentsPublished)
  if (!teams.length) return null
  const stats = {}
  const results = {}
  for (const { key } of COMPONENTS) {
    const rows = teams.map((t) => ({ id: t.id, name: t.name, value: t.forbesBreakdown[key], share: t.forbesBreakdown[key] / t.forbesBreakdown.total }))
      .filter((r) => r.value != null).sort((a, b) => a.value - b.value)
    const vals = rows.map((r) => r.value)
    stats[key] = {
      n: vals.length, mean: mean(vals), median: median(vals), min: vals[0], max: vals[vals.length - 1],
      p25: quantile(vals, 0.25), p75: quantile(vals, 0.75),
      medianShare: median(rows.map((r) => r.share)),
      rows,
    }
  }
  const revenues = teams.map((t) => ({ id: t.id, name: t.name, revenue: t.forbesBreakdown.revenue })).filter((r) => r.revenue != null).sort((a, b) => b.revenue - a.revenue)
  for (const t of teams) {
    results[t.id] = {}
    for (const { key } of COMPONENTS) {
      const st = stats[key]
      const v = t.forbesBreakdown[key]
      const rank = st.rows.filter((r) => r.value > v).length + 1
      const below = st.rows.filter((r) => r.value < v).length
      results[t.id][key] = {
        value: v,
        share: v / t.forbesBreakdown.total,
        rank, of: st.n,
        percentile: st.n > 1 ? Math.round((below / (st.n - 1)) * 100) : 100,
        vsMedian: +(v - st.median).toFixed(3),
        vsMedianPct: st.median ? v / st.median - 1 : null,
      }
    }
    const ri = revenues.findIndex((r) => r.id === t.id)
    results[t.id].revenueRank = ri < 0 ? null : ri + 1
    results[t.id].nextRevenue = ri === 0 ? revenues[1] : ri > 0 ? revenues[ri - 1] : null
  }
  return { league, stats, results, teams: teams.map((t) => t.id), revenues }
}

export const breakdownByLeague = Object.fromEntries(
  ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL'].map((L) => [L, buildLeague(L)]).filter(([, v]) => v)
)

export function teamBreakdown(team) {
  const lg = breakdownByLeague[team.league]
  if (!lg || !lg.results[team.id]) return null
  return { league: lg, result: lg.results[team.id], fb: team.forbesBreakdown }
}

// ── peers: same market, same division, similar metro size ──
function peersFor(team, key) {
  const lg = breakdownByLeague[team.league]
  const p = forbesProxies[team.id] || {}
  const chosen = []
  const add = (id, why) => {
    if (!id || id === team.id || chosen.some((c) => c.id === id) || !lg.results[id]) return
    chosen.push({ id, name: teamsById[id].name, value: lg.results[id][key].value, why })
  }
  for (const id of lg.teams) if (p.metro && forbesProxies[id]?.metro === p.metro) add(id, 'shares the market')
  const div = divisionOf[team.id]
  if (div) {
    const best = div.peers.filter((id) => lg.results[id]).sort((a, b) => lg.results[b][key].value - lg.results[a][key].value)[0]
    add(best, `${div.label} peer`)
  }
  if (p.pop) {
    const near = lg.teams.filter((id) => id !== team.id && forbesProxies[id]?.pop && forbesProxies[id].metro !== p.metro && !chosen.some((c) => c.id === id))
      .sort((a, b) => Math.abs(Math.log(forbesProxies[a].pop / p.pop)) - Math.abs(Math.log(forbesProxies[b].pop / p.pop)))[0]
    if (near) add(near, `similar-sized metro, ${metroName(forbesProxies[near].metro)}`)
  }
  return chosen.slice(0, 3)
}

// ── Sport readout for net-sharing leagues ──
export function sportReadout(team) {
  if (!NET_SHARING_LEAGUES.has(team.league)) return null
  const tb = teamBreakdown(team)
  if (!tb) return null
  const r = tb.result.sport
  const med = tb.league.stats.sport.median
  const dev = r.vsMedianPct ?? 0
  const position = dev < -FLAT_TOLERANCE ? 'Net payer' : dev > FLAT_TOLERANCE ? 'Net receiver' : 'Near the median'
  return {
    position,
    value: r.value,
    median: med,
    gap: r.vsMedian,
    explainer:
      `Forbes appears to report Sport net of revenue sharing, so the shared pool is credited after each club's contribution to it or draw from it. ` +
      `Big-market clubs fund the pool and show low Sport values; small-market clubs draw from it and show high ones.`,
  }
}

// ── commentary: why, peers, takeaway ──
function ctxFor(team, key) {
  const tb = teamBreakdown(team)
  return {
    team, fb: tb.fb, p: forbesProxies[team.id] || {}, r: tb.result[key], st: tb.league.stats[key], league: team.league,
    revenueRank: tb.result.revenueRank, nextRevenue: tb.result.nextRevenue,
    peers: peersFor(team, key), fmtB, pct: pctOf, ordinal, fmtNum, short,
  }
}

function whyText(c, key) {
  const { team, p, r, league } = c
  const nick = short(team.name)
  const parts = []
  if (key === 'market') {
    if (p.pop) parts.push(`${metroName(p.metro) || team.city} has ${fmtNum(p.pop)} people${p.tvh ? ` and ${fmtNum(p.tvh)} TV households` : ''}${p.income ? `, with a median household income of $${Math.round(p.income / 1000)}K` : ''}.`)
    if (p.competitors != null) {
      parts.push(p.competitors === 0
        ? `No other major-league team competes for that audience, so the ${nick} own it outright.`
        : `${p.competitors} other major-league team${p.competitors === 1 ? '' : 's'} split${p.competitors === 1 ? 's' : ''} that audience, and Forbes' Market figure is the ${nick}' share of it, not the whole metro.`)
    }
    if (c.fb.revenue) parts.push(`Revenue of ${fmtB(c.fb.revenue)} ranks ${ordinal(c.revenueRank)} in ${theL(league)}, which is the cleaner read on how much of the market the ${nick} actually capture.`)
  }
  if (key === 'stadium') {
    if (p.venue && p.yearOpened) parts.push(`${p.venue} opened in ${p.yearOpened}${p.yearRenovated ? ` and was renovated in ${p.yearRenovated}` : ''}${p.capacity ? `, seating ${p.capacity.toLocaleString()}` : ''}.`)
    if (p.teamOwned != null) {
      parts.push(p.teamOwned
        ? `The team controls the building${p.teamOwnsLand ? ' and the land under it' : ''}, so suites, naming rights and every non-game event flow to ownership.`
        : `The team is a tenant, so the landlord keeps a share of the building economics that would otherwise land in this number.`)
    }
    if (p.namingRightsAnnualM) parts.push(`${p.namingRightsSponsor || 'The naming-rights partner'} pays about $${Math.round(p.namingRightsAnnualM)}M a year for the name.`)
    if (p.realEstateDistrict) parts.push(`Ownership also controls the real estate around the building, which is the part of a stadium deal that compounds.`)
    if (p.premiumSeats) parts.push(`${p.premiumSeats.toLocaleString()} premium seats${p.suites ? `, including ${p.suites} suites,` : ''} are the high-margin inventory Forbes capitalizes here.`)
  }
  if (key === 'brand') {
    const bits = []
    if (p.titles25 != null) bits.push(`${p.titles25} championship${p.titles25 === 1 ? '' : 's'} since 2001`)
    if (p.nationalTv != null) bits.push(`${p.nationalTv} ${p.nationalTvScope === 'Canada' ? 'Canadian national broadcasts' : 'national TV games'} last season`)
    if (bits.length) parts.push(`The ${nick} bring ${bits.join(' and ')}.`)
    if (p.socialM) parts.push(`A social following of ${p.socialM.toFixed(1)}M${p.merchRank ? ` and a merchandise rank of ${ordinal(p.merchRank)}` : ''} ${p.merchRank ? 'put' : 'puts'} a number on how far the brand travels beyond the metro.`)
    else if (p.merchRank) parts.push(`Merchandise sales rank ${ordinal(p.merchRank)} in ${theL(league)}.`)
  }
  if (key === 'sport') {
    if (NET_SHARING_LEAGUES.has(league)) {
      parts.push(`Sport is the value of ${theL(league)}'s shared revenue, and Forbes appears to report it net of revenue sharing: what a club keeps from the pool after what it pays into it.`)
      parts.push(`That is why big-market clubs show small Sport values and small-market clubs show large ones; the number is a position in the sharing system, not a measure of the league's TV money.`)
    } else {
      parts.push(`Sport is the value of ${theL(league)}'s shared pool: national media, licensing and league-wide sponsorship money that every club receives in equal measure, so this number should be nearly flat across the league.`)
    }
    if (p.sportNote) parts.push(clean(p.sportNote))
  }
  return parts.join(' ')
}

function peersText(c, key) {
  const { team, r, st, peers, league } = c
  const nick = short(team.name)
  const label = COMPONENTS.find((x) => x.key === key).label
  if (key === 'sport') {
    const dev = r.vsMedianPct ?? 0
    const base = `The ${league} median is ${fmtB(st.median)}; the ${nick} sit ${pctOf(dev)} ${dev >= 0 ? 'above' : 'below'} it at ${fmtB(r.value)}.`
    if (NET_SHARING_LEAGUES.has(league)) {
      const rd = sportReadout(team)
      return `${base} Read as a net position, that makes the ${nick} a ${rd.position.toLowerCase()}${rd.position === 'Near the median' ? '' : ` of roughly ${fmtB(r.vsMedian)} relative to the median club`}.`
    }
    return Math.abs(dev) <= FLAT_TOLERANCE
      ? `${base} That is within the 5% band an equal split should produce.`
      : `${base} That is more than an equal split explains. Forbes does not publish how it allocates the pool, so read the gap as a feature of its method rather than a difference in what the club collects.`
  }
  if (!peers.length) return null
  const list = peers.map((q) => `the ${short(q.name)} (${q.why}) at ${fmtB(q.value)}`).join(', ')
  const ahead = peers.filter((q) => q.value < r.value).length
  const n = peers.length
  const words = ['none', 'one', 'two', 'three']
  const group = n === 1 ? `the ${short(peers[0].name)}` : n === 2 ? 'both' : `all ${words[n]}`
  const verdict = ahead === n ? `The ${nick} are ahead of ${group}`
    : ahead === 0 ? `The ${nick} trail ${group}`
    : `The ${nick} are ahead of ${words[ahead]} of the ${words[n]}`
  const nearest = [...peers].sort((a, b) => Math.abs(a.value - r.value) - Math.abs(b.value - r.value))[0]
  const tail = n === 1 ? `by ${fmtB(Math.abs(r.value - nearest.value))}` : `${fmtB(Math.abs(r.value - nearest.value))} ${r.value >= nearest.value ? 'clear of' : 'behind'} the closest, the ${short(nearest.name)}`
  return `The relevant ${label} comparisons are ${list}. ${verdict}, ${tail}.`
}

function takeawayText(c, key) {
  const { team, r, st, league } = c
  const nick = short(team.name)
  const label = COMPONENTS.find((x) => x.key === key).label
  const share = sharePct(r.share)
  const norm = sharePct(st.medianShare)
  const tier = r.rank <= 5 ? `Rank ${r.rank} of ${r.of} puts the ${nick} in ${theL(league)}'s top tier on ${label}.`
    : r.rank > r.of - 5 ? `Rank ${r.rank} of ${r.of} puts the ${nick} at the bottom of ${theL(league)} on ${label}.`
    : `Rank ${r.rank} of ${r.of} is mid-pack.`
  if (key === 'sport' && NET_SHARING_LEAGUES.has(league)) {
    const d = (r.share - st.medianShare) * 100
    return `Forbes credits ${share}% of the franchise to Sport, against a league norm of ${norm}%. ${d < -5 ? `The rest of the valuation is earned locally, which is the profile of a club that funds the pool.` : d > 5 ? `That is a franchise whose value leans on the sharing system more than on its own market.` : 'That is a typical position in the sharing system.'}`
  }
  const d = (r.share - st.medianShare) * 100
  let read
  if (d >= 5) read = `${label} is where this valuation is earned.`
  else if (d <= -5) read = `Whatever premium the ${nick} carry, it is not coming from ${label}.`
  else read = `That is in line with how ${theL(league)} is built.`
  return `Forbes credits ${share}% of the franchise to ${label}, against a league norm of ${norm}%. ${read} ${tier}`
}

export function componentCommentary(team, key) {
  const tb = teamBreakdown(team)
  if (!tb) return null
  const c = ctxFor(team, key)
  const o = OVERRIDES[team.id]?.[key] || {}
  const resolve = (v, fallback) => (typeof v === 'function' ? noDash(v(c)) : v ? noDash(v) : fallback)
  return {
    why: resolve(o.why, whyText(c, key)),
    peers: resolve(o.peers, peersText(c, key)),
    takeaway: resolve(o.takeaway, takeawayText(c, key)),
    sources: o.sources || [],
  }
}

// ── Same market, different number ──
export function sameMarketCallouts(team) {
  const tb = teamBreakdown(team)
  const metro = forbesProxies[team.id]?.metro
  if (!tb || !metro) return []
  const rivals = allTeams.filter((o) => o.id !== team.id && o.league === team.league
    && forbesProxies[o.id]?.metro === metro && o.forbesBreakdown?.componentsPublished)
  return rivals.map((o) => {
    const a = team.forbesBreakdown
    const b = o.forbesBreakdown
    const key = [team.id, o.id].sort().join('|')
    const ctx = {
      a: { team, fb: a, p: forbesProxies[team.id] || {}, r: tb.result },
      b: { team: o, fb: b, p: forbesProxies[o.id] || {}, r: tb.league.results[o.id] },
      fmtB, pct: pctOf, fmtNum, short,
    }
    const ov = calloutOverrides[key]
    if (ov) return { rivalId: o.id, rivalName: o.name, gap: a.total - b.total, text: noDash(ov(ctx)) }
    const gap = a.total - b.total
    const mg = a.market - b.market
    const diffs = COMPONENTS.map(({ key: k, label }) => ({ k, label, d: a[k] - b[k] })).sort((x, y) => Math.abs(y.d) - Math.abs(x.d))
    const top = diffs[0]
    const revLine = a.revenue && b.revenue
      ? ` Revenue says ${fmtB(a.revenue)} against ${fmtB(b.revenue)}, so the ${short(team.name)} earn ${Math.round((a.revenue / b.revenue) * 100)} cents for every ${short(o.name)} dollar and get ${Math.round((a.market / b.market) * 100)} cents of Market.`
      : ''
    const text = [
      `Forbes has the ${team.name} ${fmtB(gap)} ${gap >= 0 ? 'ahead of' : 'behind'} the ${o.name} in the same metro.`,
      `Market alone differs by ${fmtB(mg)} even though both draw from ${metro}; the biggest single gap is ${top.label} at ${fmtB(top.d)}.${revLine}`,
      Math.abs(mg) > 0.05 * Math.max(a.market, b.market)
        ? `Forbes is splitting the city by who captures it, not by who lives in it.`
        : `On Market, Forbes treats them as equals; the gap lives elsewhere.`,
    ].join(' ')
    return { rivalId: o.id, rivalName: o.name, gap, text }
  })
}

// ── League notes for /forbes-breakdown ──
export function leagueNotes(league, key) {
  const lg = breakdownByLeague[league]
  if (!lg) return null
  const ov = leagueNoteOverrides[`${league}:${key}`]
  const st = lg.stats[key]
  const rows = st.rows
  const top = rows[rows.length - 1]
  const bottom = rows[0]
  const label = COMPONENTS.find((x) => x.key === key).label
  const ctx = { st, top, bottom, fmtB, short, league, rows }
  if (ov) return noDash(ov(ctx))
  const s = []
  if (key === 'sport' && NET_SHARING_LEAGUES.has(league)) {
    const low = rows.slice(0, 3).map((r) => short(r.name)).join(', ')
    const high = rows.slice(-3).reverse().map((r) => short(r.name)).join(', ')
    s.push(`Sport is not flat in ${theL(league)}, and it is not meant to be read that way: Forbes appears to report it net of revenue sharing.`)
    s.push(`The lowest values belong to the clubs that fund the pool (${low}); the highest belong to the clubs that draw from it (${high}).`)
    s.push(`The median is ${fmtB(st.median)}, and the spread from ${fmtB(bottom.value)} to ${fmtB(top.value)} is a map of who pays whom, not of who has the biggest TV deal.`)
    return s.join(' ')
  }
  if (key === 'sport') {
    const off = rows.filter((r) => Math.abs(r.value / st.median - 1) > FLAT_TOLERANCE)
    s.push(`Sport should be nearly flat in ${theL(league)} because the national pool is split evenly, and it mostly is: ${rows.length - off.length} of ${rows.length} teams sit within 5% of the ${fmtB(st.median)} median.`)
    if (off.length) s.push(`The exceptions are ${off.map((r) => `${short(r.name)} (${r.value > st.median ? '+' : ''}${Math.round((r.value / st.median - 1) * 100)}%)`).join(', ')}. Forbes does not publish its allocation, so those gaps are features of its method.`)
    s.push(`The full range runs from ${fmtB(bottom.value)} (${short(bottom.name)}) to ${fmtB(top.value)} (${short(top.name)}).`)
    return s.join(' ')
  }
  const pTop = forbesProxies[top.id] || {}
  const pBot = forbesProxies[bottom.id] || {}
  s.push(`The ${short(top.name)} lead ${theL(league)} in ${label} at ${fmtB(top.value)}; the ${short(bottom.name)} sit at the bottom at ${fmtB(bottom.value)}, a ${(top.value / bottom.value).toFixed(1)}x spread.`)
  s.push(`The middle of the league runs from ${fmtB(st.p25)} to ${fmtB(st.p75)}, around a median of ${fmtB(st.median)}.`)
  let gap = { d: 0 }
  for (let i = 1; i < rows.length; i++) {
    const d = rows[i].value - rows[i - 1].value
    if (d > gap.d) gap = { d, lo: rows[i - 1], hi: rows[i], above: rows.length - i }
  }
  if (gap.above && gap.d > 0.15 * st.median) s.push(`The biggest single break is the ${fmtB(gap.d)} step between the ${short(gap.lo.name)} and the ${short(gap.hi.name)}, which separates the top ${gap.above} from the pack.`)
  if (key === 'market' && pTop.pop) s.push(`Why the top: ${metroName(pTop.metro)} has ${fmtNum(pTop.pop)} people${pTop.income ? ` and a median household income of $${Math.round(pTop.income / 1000)}K` : ''}${pBot.pop ? `; ${metroName(pBot.metro) || short(bottom.name)}, at ${fmtNum(pBot.pop)}, shows what the small end of the league looks like` : ''}.`)
  if (key === 'stadium' && pTop.venue) s.push(`Why the top: ${pTop.venue} (${pTop.yearOpened})${pTop.teamOwned ? ' is team-controlled' : ''}${pTop.realEstateDistrict ? ' with ownership of the surrounding real estate' : ''}${pBot.venue ? `; at the other end, ${pBot.venue} opened in ${pBot.yearOpened}${pBot.teamOwned === false ? ' and the team is a tenant' : ''}` : ''}.`)
  if (key === 'brand' && (pTop.titles25 != null || pTop.socialM)) s.push(`Why the top: the ${short(top.name)} have ${pTop.titles25 ?? 0} championship${pTop.titles25 === 1 ? '' : 's'} since 2001${pTop.socialM ? ` and a ${pTop.socialM.toFixed(1)}M social following` : ''}${pTop.nationalTv != null ? `, with ${pTop.nationalTv} national broadcasts last season` : ''}.`)
  return s.join(' ')
}
