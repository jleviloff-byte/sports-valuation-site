// Shared formatting for transaction records (dollar values are raw USD).

export function fmtUSD(v) {
  if (v == null) return '—'
  if (v >= 1e9) return `$${(v / 1e9).toFixed(v >= 1e10 ? 1 : 2).replace(/\.?0+$/, '')}B`
  if (v >= 1e6) return `$${Math.round(v / 1e6).toLocaleString()}M`
  if (v >= 1e3) return `$${Math.round(v / 1e3).toLocaleString()}K`
  return `$${v.toLocaleString()}`
}

export function fmtDate(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d || 1)).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

export function fmtStake(pct) {
  if (pct == null) return '—'
  return `${Number.isInteger(pct) ? pct : pct.toFixed(1)}%`
}

export function fmtPremium(p) {
  if (p == null) return '—'
  const v = Math.round(p * 100)
  return `${v > 0 ? '+' : ''}${v}%`
}

// Stable DOM anchor for a deal row on /recent-sales.
export function dealAnchor(tx) {
  return `deal-${tx.key.replace(/[^a-z0-9]+/gi, '-')}`
}

export const STATUS_LABEL = { agreed: 'Agreed', approved: 'Approved', closed: 'Closed', contested: 'Contested' }

// Orange family only (site palette): outline → soft fill → solid; contested = dashed ink.
export const STATUS_PILL = {
  agreed:    'border border-accent text-accent-dark bg-white',
  approved:  'border border-accent bg-accent-soft text-accent-dark',
  closed:    'border border-accent bg-accent text-white',
  contested: 'border border-dashed border-ink text-ink bg-white',
}

export const DRIVER_LABEL = {
  buyerProfile:          'Buyer profile',
  scarcityAndTiming:     'Scarcity & timing',
  multipleExpansion:     'Multiple expansion',
  taxAmortization:       'Tax amortization',
  realEstateOptionality: 'Real estate optionality',
  mediaRightsCycle:      'Media rights cycle',
  portfolioSynergy:      'Portfolio synergy',
  controlVsLP:           'Control vs LP',
  forcedSeller:          'Forced seller',
  auctionDynamics:       'Auction dynamics',
}

export const LEAGUE_ACCENT = {
  NFL: '#1e3a8a',
  NBA: '#991b1b',
  MLB: '#075985',
  NHL: '#155e75',
  MLS: '#065f46',
  EPL: '#581c87',
}
