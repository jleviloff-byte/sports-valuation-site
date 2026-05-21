import { useState, useMemo } from 'react'
import { trackLeagueFiltered, trackSortChanged } from '../utils/analytics.js'
import { getTeamImages } from '../../data/images.js'

const LEAGUE_HEX = {
  NFL: '#1e3a8a',
  NBA: '#991b1b',
  MLB: '#075985',
  NHL: '#155e75',
  MLS: '#065f46',
  EPL: '#581c87',
}

// Hand-picked primary brand colors for the most storied franchises. Used in
// the grid view's subtle gradient. Anything not in this map falls back to its
// league color, so every card still gets a tinted background.
const TEAM_PRIMARY_COLOR = {
  // NFL
  "Dallas Cowboys":         '#003594',
  "New England Patriots":   '#002244',
  "New York Giants":        '#0B2265',
  "Green Bay Packers":      '#203731',
  "San Francisco 49ers":    '#AA0000',
  "Pittsburgh Steelers":    '#FFB612',
  "Kansas City Chiefs":     '#E31837',
  "Los Angeles Rams":       '#003594',
  "Chicago Bears":          '#0B162A',
  "Philadelphia Eagles":    '#004C54',
  "Las Vegas Raiders":      '#000000',
  "Miami Dolphins":         '#008E97',
  "Denver Broncos":         '#FB4F14',
  "Seattle Seahawks":       '#002244',
  // NBA
  "Los Angeles Lakers":     '#552583',
  "Boston Celtics":         '#007A33',
  "New York Knicks":        '#006BB6',
  "Golden State Warriors":  '#1D428A',
  "Chicago Bulls":          '#CE1141',
  "Brooklyn Nets":          '#000000',
  "Philadelphia 76ers":     '#006BB6',
  "Miami Heat":             '#98002E',
  // MLB
  "New York Yankees":       '#003087',
  "Boston Red Sox":         '#BD3039',
  "Los Angeles Dodgers":    '#005A9C',
  "Chicago Cubs":           '#0E3386',
  "San Francisco Giants":   '#FD5A1E',
  "St. Louis Cardinals":    '#C41E3A',
  // NHL
  "Montreal Canadiens":     '#AF1E2D',
  "Toronto Maple Leafs":    '#00205B',
  "New York Rangers":       '#0038A8',
  "Detroit Red Wings":      '#CE1126',
  "Boston Bruins":          '#FFB81C',
  // MLS
  "LAFC":                   '#000000',
  "LA Galaxy":              '#00245D',
  "Inter Miami CF":         '#F7B5CD',
  "Atlanta United FC":      '#80000B',
  "Seattle Sounders FC":    '#5D9741',
  // EPL
  "Manchester United":      '#DA291C',
  "Liverpool":              '#C8102E',
  "Arsenal":                '#EF0107',
  "Chelsea":                '#034694',
  "Manchester City":        '#6CABDD',
  "Tottenham Hotspur":      '#132257',
  "Newcastle United":       '#241F20',
}

function primaryColorFor(team) {
  return TEAM_PRIMARY_COLOR[team.name] || LEAGUE_HEX[team.league] || '#1a1a1a'
}

// Returns last 1-2 word initials. "Dallas Cowboys" → "DC", "LAFC" → "LA".
function initialsFor(name) {
  if (!name) return '?'
  const tight = name.replace(/[^A-Za-z0-9 ]/g, '').trim()
  const words = tight.split(/\s+/).filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[words.length - 2][0] + words[words.length - 1][0]).toUpperCase()
}

function TeamLogo({ team, size = 40 }) {
  // Two-stage swap: ESPN CDN (primary) → Wikimedia SVG (alt) → text initials.
  // `stage` tracks which source we're currently trying.
  const [stage, setStage] = useState(0)
  const images = getTeamImages(team.name)
  const candidates = [images?.logoUrl, images?.logoUrlAlt].filter(Boolean)
  const logo = candidates[stage]
  const px = `${size}px`

  if (logo) {
    return (
      <img
        src={logo}
        alt={`${team.name} logo`}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        onError={() => setStage((s) => s + 1)}
        className="rounded-full bg-white border border-rule object-contain p-0.5 flex-shrink-0"
        style={{ width: px, height: px }}
      />
    )
  }
  // Fallback — colored circle with team initials
  const bg = LEAGUE_HEX[team.league] || '#1a1a1a'
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
      style={{
        width: px,
        height: px,
        background: bg,
        fontSize: `${Math.round(size / 2.6)}px`,
        letterSpacing: '0.02em',
      }}
      aria-label={`${team.name} logo placeholder`}
    >
      {initialsFor(team.name)}
    </div>
  )
}

const LEAGUES = ['ALL', 'NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']

const LEAGUE_BADGE = {
  NFL: 'text-[#1e3a8a] border-[#1e3a8a]/30 bg-[#1e3a8a]/[0.06]',
  NBA: 'text-[#991b1b] border-[#991b1b]/30 bg-[#991b1b]/[0.06]',
  MLB: 'text-[#075985] border-[#075985]/30 bg-[#075985]/[0.06]',
  NHL: 'text-[#155e75] border-[#155e75]/30 bg-[#155e75]/[0.06]',
  MLS: 'text-[#065f46] border-[#065f46]/30 bg-[#065f46]/[0.06]',
  EPL: 'text-[#581c87] border-[#581c87]/30 bg-[#581c87]/[0.06]',
}

const LEAGUE_ACTIVE = {
  ALL: 'bg-ink text-white',
  NFL: 'bg-[#1e3a8a] text-white',
  NBA: 'bg-[#991b1b] text-white',
  MLB: 'bg-[#075985] text-white',
  NHL: 'bg-[#155e75] text-white',
  MLS: 'bg-[#065f46] text-white',
  EPL: 'bg-[#581c87] text-white',
}

const DRIVER_COLOR = {
  mediaRights: '#1e3a8a',
  stadium:     '#5b21b6',
  brand:       '#b45309',
  marketSize:  '#065f46',
  onField:     '#991b1b',
}

const DRIVER_KEYS = new Set(Object.keys(DRIVER_COLOR))

const COLUMNS = [
  { key: 'league',           label: 'LG',   align: 'left'   },
  { key: 'name',             label: 'Team', align: 'left'   },
  { key: 'currentValuation', label: 'Val',  align: 'right'  },
  { key: 'oneYearGrowth',    label: '1Y',   align: 'right'  },
  { key: 'fiveYearGrowth',   label: '5Y',   align: 'right'  },
  { key: 'tenYearGrowth',    label: '10Y',  align: 'right'  },
  { key: 'mediaRights',      label: 'Med',  align: 'center', driver: true },
  { key: 'stadium',          label: 'Std',  align: 'center', driver: true },
  { key: 'brand',            label: 'Brd',  align: 'center', driver: true },
  { key: 'marketSize',       label: 'Mkt',  align: 'center', driver: true },
  { key: 'onField',          label: 'Onf',  align: 'center', driver: true },
  { key: 'ownsStadium',      label: 'Stad', align: 'center' },
]

function hexToRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

function DriverCell({ value, color }) {
  // Heatmap chip — light tint scaled to score on a white card
  const a = 0.05 + (value / 10) * 0.32
  return (
    <td className="px-1.5 py-2">
      <div className="flex justify-center">
        <span
          className="inline-flex items-center justify-center font-mono font-semibold text-[12px] w-8 h-7 rounded-sm text-ink"
          style={{ background: hexToRgba(color, a) }}
        >
          {value}
        </span>
      </div>
    </td>
  )
}

function growthClass(g) {
  if (g == null) return 'text-ash'
  if (g >= 0) return 'text-[#0a7d2a]'
  return 'text-[#b91c1c]'
}

function GrowthCell({ value }) {
  if (value == null) {
    return <td className="py-2.5 px-2 text-right font-mono text-[12px] text-ash">—</td>
  }
  const positive = value >= 0
  return (
    <td className={`py-2.5 px-2 text-right font-mono text-[12px] font-semibold whitespace-nowrap ${growthClass(value)}`}>
      {positive ? '+' : ''}{value}%
    </td>
  )
}

// Inline icons — keeps us off lucide-react for two tiny glyphs. Sized to the
// caller via currentColor + h/w props.
function ListIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <line x1="3"  y1="4"  x2="13" y2="4"  />
      <line x1="3"  y1="8"  x2="13" y2="8"  />
      <line x1="3"  y1="12" x2="13" y2="12" />
    </svg>
  )
}
function GridIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="2.5" width="4" height="4" rx="0.5" />
      <rect x="9.5" y="2.5" width="4" height="4" rx="0.5" />
      <rect x="2.5" y="9.5" width="4" height="4" rx="0.5" />
      <rect x="9.5" y="9.5" width="4" height="4" rx="0.5" />
    </svg>
  )
}

export default function LeagueExplorer({ teams, onSelectTeam, selectedTeam }) {
  const [leagueFilter, setLeagueFilter] = useState('ALL')
  const [sortField, setSortField] = useState('currentValuation')
  const [sortDir, setSortDir] = useState('desc')
  const [viewMode, setViewMode] = useState('list')

  function handleSort(field) {
    if (sortField === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDir(field === 'name' || field === 'league' ? 'asc' : 'desc')
    }
    trackSortChanged(field)
  }

  const filtered = useMemo(() => {
    const list =
      leagueFilter === 'ALL' ? [...teams] : teams.filter((t) => t.league === leagueFilter)
    return list.sort((a, b) => {
      if (sortField === 'name') {
        return sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
      if (sortField === 'league') {
        return sortDir === 'asc'
          ? a.league.localeCompare(b.league)
          : b.league.localeCompare(a.league)
      }
      let av, bv
      if (sortField === 'ownsStadium') {
        av = a.ownsStadium ? 1 : 0
        bv = b.ownsStadium ? 1 : 0
      } else if (DRIVER_KEYS.has(sortField)) {
        av = a.valuationDrivers?.[sortField] ?? 0
        bv = b.valuationDrivers?.[sortField] ?? 0
      } else {
        av = a[sortField] ?? 0
        bv = b[sortField] ?? 0
      }
      return sortDir === 'asc' ? av - bv : bv - av
    })
  }, [teams, leagueFilter, sortField, sortDir])

  const counts = useMemo(() => {
    const c = { ALL: teams.length }
    LEAGUES.slice(1).forEach((l) => {
      c[l] = teams.filter((t) => t.league === l).length
    })
    return c
  }, [teams])

  return (
    <section id="explorer">
      {/* Sticky filter bar */}
      <div className="sticky top-[5.75rem] z-30 bg-paper/95 backdrop-blur border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-2 items-center">
          {LEAGUES.map((l) => (
            <button
              key={l}
              onClick={() => { setLeagueFilter(l); trackLeagueFiltered(l) }}
              className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm transition-all ${
                leagueFilter === l
                  ? LEAGUE_ACTIVE[l]
                  : 'bg-white text-slate hover:text-ink border border-rule hover:border-rule-strong'
              }`}
            >
              {l}
              <span className="ml-1.5 opacity-70">{counts[l]}</span>
            </button>
          ))}
          {/* List/Grid view toggle — desktop only; mobile is always card-list */}
          <div className="ml-auto hidden md:inline-flex items-center bg-white border border-rule rounded-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-pressed={viewMode === 'list'}
              aria-label="List view"
              className={`flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 transition-colors ${
                viewMode === 'list' ? 'bg-ink text-white' : 'text-slate hover:text-ink'
              }`}
            >
              <ListIcon size={12} />
              List
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              aria-label="Grid view"
              className={`flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 border-l border-rule transition-colors ${
                viewMode === 'grid' ? 'bg-ink text-white' : 'text-slate hover:text-ink'
              }`}
            >
              <GridIcon size={12} />
              Grid
            </button>
          </div>
          <span className="font-mono text-[10px] text-slate tracking-wider hidden lg:inline">
            <span className="text-ink font-semibold">{filtered.length}</span> shown · {viewMode === 'list' ? 'click a row' : 'click a card'} for the full profile
          </span>
        </div>
      </div>

      {/* Mobile card list — below md, single-column readable cards */}
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-16 space-y-3">
        {filtered.map((team) => {
          const isSelected = selectedTeam?.name === team.name
          return (
            <button
              key={team.name}
              type="button"
              onClick={() => onSelectTeam(isSelected ? null : team)}
              className={`w-full text-left bg-white border rounded-sm p-4 transition-colors ${
                isSelected ? 'border-accent bg-accent-soft' : 'border-rule active:bg-callout'
              }`}
            >
              {/* Top row: logo + badge + 5Y growth */}
              <div className="flex items-center gap-3 mb-3">
                <TeamLogo team={team} size={44} />
                <span className={`font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm border ${LEAGUE_BADGE[team.league]}`}>
                  {team.league}
                </span>
                <span className={`ml-auto font-mono text-sm font-bold ${growthClass(team.fiveYearGrowth)}`}>
                  {team.fiveYearGrowth != null
                    ? `${team.fiveYearGrowth >= 0 ? '+' : ''}${team.fiveYearGrowth}% 5Y`
                    : '—'}
                </span>
              </div>

              {/* Name + city */}
              <div className="font-serif text-2xl font-bold text-ink leading-tight">{team.name}</div>
              {team.city && (
                <div className="text-xs text-slate font-mono mt-0.5 mb-3">{team.city}</div>
              )}

              {/* Valuation */}
              <div className="font-mono text-4xl font-bold text-ink tracking-tight mb-4">
                ${team.currentValuation}
                <span className="text-xl text-slate">B</span>
              </div>

              {/* 1Y / 5Y / 10Y row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['oneYearGrowth', 'fiveYearGrowth', 'tenYearGrowth'].map((field, i) => {
                  const v = team[field]
                  const label = ['1Y', '5Y', '10Y'][i]
                  return (
                    <div key={field} className="bg-paper border border-rule rounded-sm px-2 py-1.5">
                      <div className="font-mono text-[9px] tracking-widest uppercase text-slate">{label}</div>
                      <div className={`font-mono text-sm font-bold ${growthClass(v)}`}>
                        {v == null ? '—' : `${v >= 0 ? '+' : ''}${v}%`}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Driver scores — 5 small chips */}
              <div className="flex gap-1.5">
                {[
                  { key: 'mediaRights', label: 'MED' },
                  { key: 'stadium',     label: 'STD' },
                  { key: 'brand',       label: 'BRD' },
                  { key: 'marketSize',  label: 'MKT' },
                  { key: 'onField',     label: 'ONF' },
                ].map(({ key, label }) => {
                  const score = team.valuationDrivers?.[key] ?? 0
                  const a = 0.05 + (score / 10) * 0.32
                  return (
                    <div
                      key={key}
                      className="flex-1 rounded-sm border border-rule px-1.5 py-1 text-center"
                      style={{ background: hexToRgba(DRIVER_COLOR[key], a) }}
                    >
                      <div className="font-mono text-[9px] tracking-widest uppercase text-slate">{label}</div>
                      <div className="font-mono text-sm font-bold text-ink">{score}</div>
                    </div>
                  )
                })}
              </div>

              {/* Stadium owned + tap-affordance */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-rule">
                <span className={`font-mono text-[10px] tracking-widest uppercase font-bold ${team.ownsStadium ? 'text-[#0a7d2a]' : 'text-ash'}`}>
                  {team.ownsStadium ? '● Stadium owned' : '○ Tenant'}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                  Tap for profile →
                </span>
              </div>
            </button>
          )
        })}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate text-sm">No franchises match this filter.</div>
        )}
      </div>

      {/* Grid view — md+, opt-in via header toggle. Sorted by valuation
          descending so the magazine-rank order matches the headline narrative. */}
      {viewMode === 'grid' && (
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...filtered]
              .sort((a, b) => (b.currentValuation ?? 0) - (a.currentValuation ?? 0))
              .map((team, idx) => {
                const isSelected = selectedTeam?.name === team.name
                const color = primaryColorFor(team)
                const rank = idx + 1
                return (
                  <button
                    key={team.name}
                    type="button"
                    onClick={() => onSelectTeam(isSelected ? null : team)}
                    className={`group relative w-full text-left bg-white border rounded-sm pt-6 pb-5 px-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${
                      isSelected ? 'border-accent ring-1 ring-accent-soft' : 'border-rule'
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${hexToRgba(color, 0.14)} 0%, ${hexToRgba(color, 0.02)} 65%, rgba(255,255,255,0) 100%)`,
                    }}
                  >
                    {/* Magazine-style rank number, top-left, large + faint */}
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-3 font-serif font-bold leading-none text-ink select-none"
                      style={{ fontSize: '3.25rem', opacity: 0.09 }}
                    >
                      {rank}
                    </span>

                    {/* Logo + meta column */}
                    <div className="flex flex-col items-center text-center pt-2">
                      <TeamLogo team={team} size={80} />
                      <div className="mt-3 font-serif text-base font-bold text-ink leading-tight line-clamp-2 min-h-[2.5rem]">
                        {team.name}
                      </div>
                      <div className="mt-2 font-mono text-3xl font-bold text-ink tracking-tight">
                        ${team.currentValuation}
                        <span className="text-base text-slate font-semibold">B</span>
                      </div>
                      {team.fiveYearGrowth != null && (
                        <div className={`mt-1 font-mono text-[11px] font-semibold ${growthClass(team.fiveYearGrowth)}`}>
                          {team.fiveYearGrowth >= 0 ? '+' : ''}{team.fiveYearGrowth}% 5Y
                        </div>
                      )}
                    </div>

                    {/* Footer row: league badge bottom-left, stadium ownership bottom-right */}
                    <div className="mt-4 pt-3 border-t border-rule flex items-center justify-between">
                      <span className={`font-mono text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm border ${LEAGUE_BADGE[team.league]}`}>
                        {team.league}
                      </span>
                      <span className={`font-mono text-[9px] tracking-widest uppercase font-bold ${team.ownsStadium ? 'text-[#0a7d2a]' : 'text-ash'}`}>
                        {team.ownsStadium ? '● Stadium' : '○ Tenant'}
                      </span>
                    </div>
                  </button>
                )
              })}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate text-sm">
              No franchises match this filter.
            </div>
          )}
        </div>
      )}

      {/* Table — md+, default view */}
      {viewMode === 'list' && (
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 animate-fade-in">
        <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <table className="w-full border-collapse min-w-[980px]">
            <thead>
              <tr className="border-b-2 border-ink">
                {COLUMNS.map((col) => {
                  const active = sortField === col.key
                  const align =
                    col.align === 'right'
                      ? 'text-right'
                      : col.align === 'center'
                      ? 'text-center'
                      : 'text-left'
                  return (
                    <th
                      key={col.key}
                      onClick={() => handleSort(col.key)}
                      className={`font-mono text-[10px] font-bold tracking-widest uppercase py-3 px-2 cursor-pointer select-none whitespace-nowrap ${align} ${
                        active ? 'text-ink' : 'text-slate hover:text-ink'
                      }`}
                    >
                      {col.label}
                      {active && (
                        <span className="ml-1">{sortDir === 'desc' ? '↓' : '↑'}</span>
                      )}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {filtered.map((team) => {
                const isSelected = selectedTeam?.name === team.name
                return (
                  <tr
                    key={team.name}
                    onClick={() => onSelectTeam(isSelected ? null : team)}
                    className={`border-b border-rule cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-accent-soft'
                        : 'hover:bg-callout/60'
                    }`}
                  >
                    <td className="py-2.5 px-2">
                      <span
                        className={`font-mono text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm border ${LEAGUE_BADGE[team.league]}`}
                      >
                        {team.league}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 max-w-[320px]">
                      <div className="flex items-center gap-3">
                        <TeamLogo team={team} size={32} />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-ink truncate">{team.name}</div>
                          {team.city && (
                            <div className="text-[10px] text-slate font-mono truncate">
                              {team.city}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-right font-mono text-[15px] font-bold text-ink whitespace-nowrap">
                      ${team.currentValuation}
                      <span className="text-slate font-semibold">B</span>
                    </td>
                    <GrowthCell value={team.oneYearGrowth} />
                    <GrowthCell value={team.fiveYearGrowth} />
                    <GrowthCell value={team.tenYearGrowth} />
                    <DriverCell value={team.valuationDrivers?.mediaRights ?? 0} color={DRIVER_COLOR.mediaRights} />
                    <DriverCell value={team.valuationDrivers?.stadium ?? 0}     color={DRIVER_COLOR.stadium} />
                    <DriverCell value={team.valuationDrivers?.brand ?? 0}       color={DRIVER_COLOR.brand} />
                    <DriverCell value={team.valuationDrivers?.marketSize ?? 0}  color={DRIVER_COLOR.marketSize} />
                    <DriverCell value={team.valuationDrivers?.onField ?? 0}     color={DRIVER_COLOR.onField} />
                    <td className="py-2.5 px-2 text-center text-sm">
                      {team.ownsStadium ? (
                        <span className="text-[#0a7d2a] font-bold">●</span>
                      ) : (
                        <span className="text-rule-strong">○</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate text-sm">
            No franchises match this filter.
          </div>
        )}
      </div>
      )}
    </section>
  )
}
