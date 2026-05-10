// Thin GA4 wrapper. The gtag snippet is loaded statically in index.html
// (Measurement ID G-Q1X8Z4VC4G), so window.gtag exists once GA boots.
// All wrappers no-op gracefully if gtag isn't available (ad blockers, dev,
// SSR, etc.) so callers never need to defensive-check.

const GA_ID = 'G-Q1X8Z4VC4G'

function _gtag(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

function _event(name, params) {
  _gtag('event', name, params || {})
}

// SPA page_view — react-router navigations don't auto-fire page_view, so
// the App calls this on every location change (initial load + every route
// change after that).
export function trackPageView(path, title) {
  _gtag('event', 'page_view', {
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : path,
    page_title: title || (typeof document !== 'undefined' ? document.title : undefined),
    send_to: GA_ID,
  })
}

// ────────── Team interactions ──────────
export function trackTeamViewed(teamName, league, valuation) {
  _event('team_viewed', {
    team_name: teamName,
    league,
    valuation,
  })
}

export function trackFactorExpanded(factorName, teamName) {
  _event('factor_expanded', {
    factor_name: factorName,
    team_name: teamName,
  })
}

export function trackTeamCompared(teamName, league) {
  _event('team_compared', {
    team_name: teamName,
    league,
  })
}

// ────────── Navigation ──────────
export function trackLeagueFiltered(leagueName) {
  _event('league_filtered', { league_name: leagueName })
}

export function trackSortChanged(sortType) {
  _event('sort_changed', { sort_type: sortType })
}

export function trackCityBubbleClicked(cityName, totalValuation) {
  _event('city_bubble_clicked', {
    city_name: cityName,
    total_valuation: totalValuation,
  })
}

// ────────── Engagement ──────────
export function trackMethodologyViewed() {
  _event('methodology_viewed')
}

export function trackDataSourcesViewed() {
  _event('data_sources_viewed')
}

export function trackScrollDepth(depth) {
  _event('scroll_depth', { depth })
}

export function trackOutboundLink(url, label) {
  _event('outbound_link', {
    url,
    label,
  })
}

// One-shot: if the referrer is a Substack post, fire an outbound_link event
// tagged with source=substack so we can attribute traffic from the post.
// Call once on app mount.
export function trackSubstackReferralOnce() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return
  const ref = document.referrer || ''
  if (/substack\.com/i.test(ref)) {
    _event('outbound_link', {
      source: 'substack',
      url: window.location.href,
      referrer: ref,
    })
  }
}
