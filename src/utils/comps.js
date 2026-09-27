// Precedent-transaction comps, expressed relative to Forbes.
//
// The site never produces its own headline number: every team's headline is
// its Forbes valuation. This module only describes where the market has paid
// versus Forbes, in two sets that are never mixed:
//   control  — sales of a controlling (GP) interest
//   minority — LP stake sales (implied whole-team marks)
//
// Deals whose valuation covers a multi-team holding company, and the second
// tranche of a staged sale, are shown but excluded from the medians.

import { transactions, lastUpdated, leagueTrailingDecade } from '../../data/transactions.js'

export const COMP_WINDOW_MONTHS = 36
export const SUMMARY_WINDOW_MONTHS = 24
export const MARKET_CHECK_SINCE = '2025-01-01'

const DAY = 24 * 60 * 60 * 1000

export function dealDate(tx) {
  return tx.dateAnnounced || tx.dateApproved
}

function monthsBetween(a, b) {
  return (new Date(b) - new Date(a)) / (DAY * 30.4375)
}

export function countsInMedian(tx) {
  return tx.premiumToForbes != null && tx.valuationScope !== 'holding company' && tx.tranche !== 2
}

function median(xs) {
  if (!xs.length) return null
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

function mean(xs) {
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null
}

function summarize(deals) {
  const prem = deals.filter(countsInMedian).map((d) => d.premiumToForbes)
  const mult = deals.map((d) => d.impliedRevenueMultiple).filter((m) => m != null)
  return {
    deals,
    n: prem.length,
    medianPremium: prem.length ? +median(prem).toFixed(4) : null,
    meanPremium: prem.length ? +mean(prem).toFixed(4) : null,
    reportedMultiples: mult,
  }
}

// { [league]: { control: CompSet, minority: CompSet } }
export function buildComps(teamsById, { months = COMP_WINDOW_MONTHS, asOf = lastUpdated } = {}) {
  const buckets = {}
  for (const tx of transactions) {
    const team = teamsById[tx.teamId]
    if (!team || !dealDate(tx)) continue
    if (monthsBetween(dealDate(tx), asOf) > months) continue
    buckets[team.league] ||= { control: [], minority: [] }
    buckets[team.league][tx.type].push({ ...tx, teamName: team.name })
  }
  const out = {}
  for (const [league, b] of Object.entries(buckets)) {
    out[league] = { control: summarize(b.control), minority: summarize(b.minority) }
  }
  return out
}

// Most recent sale of any type announced on/after MARKET_CHECK_SINCE.
export function latestSale(teamId) {
  return transactions
    .filter((t) => t.teamId === teamId && dealDate(t) >= MARKET_CHECK_SINCE)
    .sort((a, b) => dealDate(b).localeCompare(dealDate(a)))[0] || null
}

export { transactions, lastUpdated, leagueTrailingDecade }
