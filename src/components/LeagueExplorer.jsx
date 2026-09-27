import { useState, useMemo, useEffect, useRef } from 'react'
import { trackLeagueFiltered, trackSortChanged } from '../utils/analytics.js'
import { getTeamImages } from '../../data/images.js'

const LEAGUE_HEX = {
  NFL: 'var(--text2)',
  NBA: 'var(--text2)',
  MLB: 'var(--text2)',
  NHL: 'var(--text2)',
  MLS: 'var(--text2)',
  EPL: 'var(--text2)',
}

// Hand-picked primary brand colors for the most storied franchises. Used in
// the grid view's subtle gradient. Anything not in this map falls back to its
// league color, so every card still gets a tinted background.

function primaryColorFor() {
  return 'var(--border)'
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
        className="rounded-full bg-card border border-rule object-contain p-0.5 flex-shrink-0"
        style={{ width: px, height: px }}
      />
    )
  }
  // Fallback — colored circle with team initials
  const bg = LEAGUE_HEX[team.league] || 'var(--ink)'
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
  NFL: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  NBA: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  MLB: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  NHL: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  MLS: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  EPL: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
}

const LEAGUE_ACTIVE = {
  ALL: 'bg-ink text-paper',
  NFL: 'bg-ink text-paper',
  NBA: 'bg-ink text-paper',
  MLB: 'bg-ink text-paper',
  NHL: 'bg-ink text-paper',
  MLS: 'bg-ink text-paper',
  EPL: 'bg-ink text-paper',
}

const DRIVER_COLOR = {
  mediaRights: 'var(--ramp-1)',
  stadium:     'var(--ramp-2)',
  brand:       'var(--ramp-3)',
  marketSize:  'var(--ramp-4)',
  onField:     'var(--ramp-5)',
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
          style={{ background: `color-mix(in srgb, ${color} ${Math.round((a) * 100)}%, transparent)` }}
        >
          {value}
        </span>
      </div>
    </td>
  )
}

function growthClass(g) {
  if (g == null) return 'text-ash'
  if (g >= 0) return 'text-positive'
  return 'text-negative'
}

function GrowthCell({ value }) {
  if (value == null) {
    return <td className="h-10 py-0 px-2 align-middle text-right font-mono text-[12px] text-ash">—</td>
  }
  const positive = value >= 0
  return (
    <td className={`h-10 py-0 px-2 align-middle text-right font-mono text-[12px] font-semibold whitespace-nowrap ${growthClass(value)}`}>
      {positive ? '+' : ''}{value}%
    </td>
  )
}

// Factor ring — wraps the team logo with a five-segment donut showing the
// team's driver scores. Each segment is proportional to its score and
// reveals a tooltip (factor name + score/100 + narrative sentence) on
// hover. On touch devices the segment is tap-to-show / tap-elsewhere-to-
// dismiss, handled by a document click listener inside the component.
const RING_FACTORS = [
  { key: 'mediaRights', label: 'Media Rights', color: 'var(--ramp-1)' }, // blue
  { key: 'stadium',     label: 'Stadium',      color: 'var(--ramp-2)' }, // violet
  { key: 'brand',       label: 'Brand',        color: 'var(--ramp-3)' }, // amber
  { key: 'marketSize',  label: 'Market Size',  color: 'var(--ramp-4)' }, // teal
  { key: 'onField',     label: 'On-Field',     color: 'var(--ramp-5)' }, // red
]

// First-sentence extractor so the tooltip stays short. Falls back to the
// first ~140 chars if no period is found in a reasonable window.
function firstSentence(text) {
  if (!text) return ''
  const m = text.match(/^(.{20,180}?[.!?])(?:\s|$)/)
  if (m) return m[1].trim()
  return text.length > 160 ? text.slice(0, 157).trim() + '…' : text
}

function arcPath(cx, cy, oR, iR, startA, endA) {
  const sweep = endA - startA
  if (sweep <= 0) return ''
  const xo1 = cx + oR * Math.cos(startA)
  const yo1 = cy + oR * Math.sin(startA)
  const xo2 = cx + oR * Math.cos(endA)
  const yo2 = cy + oR * Math.sin(endA)
  const xi1 = cx + iR * Math.cos(endA)
  const yi1 = cy + iR * Math.sin(endA)
  const xi2 = cx + iR * Math.cos(startA)
  const yi2 = cy + iR * Math.sin(startA)
  const largeArc = sweep > Math.PI ? 1 : 0
  return `M ${xo1.toFixed(2)} ${yo1.toFixed(2)} A ${oR} ${oR} 0 ${largeArc} 1 ${xo2.toFixed(2)} ${yo2.toFixed(2)} L ${xi1.toFixed(2)} ${yi1.toFixed(2)} A ${iR} ${iR} 0 ${largeArc} 0 ${xi2.toFixed(2)} ${yi2.toFixed(2)} Z`
}

function FactorRing({ team, size = 156, logoSize = 112, thickness = 16, gap = 6 }) {
  // Single active-segment state per card. `pinned` is true once a tap has
  // latched the tooltip open on touch devices; document-click clears it.
  const [activeIdx, setActiveIdx] = useState(null)
  const [pinned, setPinned] = useState(false)
  const rootRef = useRef(null)

  // Mouse users get the tooltip on hover and clicks bubble to open the
  // team panel. Touch users get a tap-to-pin shortcut so they can read
  // the tooltip without an interaction that also opens the panel.
  const isTouchDevice = useMemo(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      !window.matchMedia('(hover: hover)').matches,
    [],
  )

  useEffect(() => {
    if (!pinned) return
    function onDocClick(e) {
      if (!rootRef.current?.contains(e.target)) {
        setPinned(false)
        setActiveIdx(null)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('touchstart', onDocClick)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('touchstart', onDocClick)
    }
  }, [pinned])

  const drivers = team.valuationDrivers || {}
  const narratives = team.factorNarratives || {}
  const scores = RING_FACTORS.map((f) => Math.max(0, drivers[f.key] ?? 0))
  const total = scores.reduce((a, b) => a + b, 0)
  const hasData = total > 0

  const cx = size / 2
  const cy = size / 2
  const outerR = size / 2
  const innerR = outerR - thickness
  const hoverBump = 4 // how much an active segment extends outward
  // Inner box that holds the centered logo: inset by ring thickness + gap.
  const inset = thickness + gap

  // No driver data — neutral gray ring, no segments, no tooltips.
  if (!hasData) {
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="Five-factor data unavailable" className="block">
          <circle cx={cx} cy={cy} r={(outerR + innerR) / 2} fill="none" stroke="rgba(15,23,42,0.12)" strokeWidth={thickness} />
        </svg>
        <div className="absolute flex items-center justify-center" style={{ inset }}>
          <TeamLogo team={team} size={logoSize} />
        </div>
      </div>
    )
  }

  let cumulative = 0
  const segments = RING_FACTORS.map((f, i) => {
    const fraction = scores[i] / total
    const startA = cumulative * Math.PI * 2 - Math.PI / 2
    cumulative += fraction
    const endA = cumulative * Math.PI * 2 - Math.PI / 2
    return { ...f, fraction, startA, endA, score: scores[i], narrative: narratives[f.key] }
  })

  const active = activeIdx != null ? segments[activeIdx] : null

  function handlePointerEnter(i) {
    if (!pinned) setActiveIdx(i)
  }
  function handlePointerLeave() {
    if (!pinned) setActiveIdx(null)
  }
  function handleSegmentClick(e, i) {
    if (!isTouchDevice) return // mouse: let the click bubble — opens the team panel
    e.stopPropagation()
    if (pinned && activeIdx === i) {
      setPinned(false)
      setActiveIdx(null)
    } else {
      setPinned(true)
      setActiveIdx(i)
    }
  }

  return (
    <div ref={rootRef} className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`-${hoverBump} -${hoverBump} ${size + hoverBump * 2} ${size + hoverBump * 2}`}
        className="block overflow-visible"
        aria-label="Five-factor breakdown — hover segments for detail"
      >
        {/* Soft white wash so colored segments don't muddy on dark gradients */}
        <circle cx={cx} cy={cy} r={outerR} fill="rgba(255,255,255,0.45)" />
        {segments.map((seg, i) => {
          if (seg.fraction === 0) return null
          const isActive = activeIdx === i
          // Full-circle edge case: one factor non-zero; emit a closed ring path.
          if (seg.fraction >= 0.999) {
            const r = outerR + (isActive ? hoverBump : 0)
            return (
              <path
                key={seg.key}
                d={`M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} M ${cx - innerR} ${cy} A ${innerR} ${innerR} 0 1 0 ${cx + innerR} ${cy} A ${innerR} ${innerR} 0 1 0 ${cx - innerR} ${cy} Z`}
                fill={seg.color}
                fillOpacity={isActive ? 0.95 : 0.85}
                fillRule="evenodd"
                className="cursor-pointer transition-all duration-150"
                onMouseEnter={() => handlePointerEnter(i)}
                onMouseLeave={handlePointerLeave}
                onClick={(e) => handleSegmentClick(e, i)}
              />
            )
          }
          const oR = outerR + (isActive ? hoverBump : 0)
          return (
            <path
              key={seg.key}
              d={arcPath(cx, cy, oR, innerR, seg.startA, seg.endA)}
              fill={seg.color}
              fillOpacity={isActive ? 0.95 : 0.82}
              className="cursor-pointer transition-all duration-150"
              onMouseEnter={() => handlePointerEnter(i)}
              onMouseLeave={handlePointerLeave}
              onClick={(e) => handleSegmentClick(e, i)}
            />
          )
        })}
        {/* Thin hairline along the inner edge for crisper separation against the logo */}
        <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="0.75" />
      </svg>

      {/* Logo overlay — sits inside the ring, centered. pointer-events-none
          so the SVG segments still receive hover/tap underneath the logo
          padding zone. */}
      <div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ inset }}
        aria-hidden="true"
      >
        <TeamLogo team={team} size={logoSize} />
      </div>

      {/* Tooltip — single per card, positioned above the ring assembly.
          Pointer-events disabled so it never steals hover from the
          segments beneath it. */}
      {active && (
        <div
          role="tooltip"
          className="absolute left-1/2 z-20 pointer-events-none animate-fade-in"
          style={{ bottom: `calc(100% + 8px)`, transform: 'translateX(-50%)', width: 'max-content', maxWidth: '240px' }}
        >
          <div className="bg-ink text-paper rounded-sm shadow-modal px-3 py-2">
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase" style={{ color: active.color }}>
                {active.label}
              </span>
              <span className="font-mono text-[11px] font-bold text-white">
                {active.score * 10}<span className="opacity-60">/100</span>
              </span>
            </div>
            <p className="text-[11px] leading-snug text-white/85 font-sans">
              {firstSentence(active.narrative) || `${active.label}: ${active.score * 10}/100`}
            </p>
          </div>
          {/* Caret pointing down at the ring */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '100%',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid var(--ink)',
            }}
          />
        </div>
      )}
    </div>
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
                  : 'bg-card text-slate hover:text-ink border border-rule hover:border-rule-strong'
              }`}
            >
              {l}
              <span className="ml-1.5 opacity-70">{counts[l]}</span>
            </button>
          ))}
          {/* List/Grid view toggle — desktop only; mobile is always card-list */}
          <div className="ml-auto hidden md:inline-flex items-center bg-card border border-rule rounded-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-pressed={viewMode === 'list'}
              aria-label="List view"
              className={`flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 transition-colors ${
                viewMode === 'list' ? 'bg-ink text-paper' : 'text-slate hover:text-ink'
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
                viewMode === 'grid' ? 'bg-ink text-paper' : 'text-slate hover:text-ink'
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
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-8 space-y-3">
        {filtered.map((team) => {
          const isSelected = selectedTeam?.name === team.name
          return (
            <button
              key={team.name}
              type="button"
              onClick={() => onSelectTeam(isSelected ? null : team)}
              className={`w-full text-left bg-card border rounded-sm p-4 transition-colors ${
                isSelected ? 'border-accent bg-accent-soft' : 'border-rule active:bg-paper'
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
              <div className="text-2xl font-bold text-ink leading-tight">{team.name}</div>
              {team.city && (
                <div className="text-xs text-slate font-mono mt-0.5 mb-3">{team.city}</div>
              )}

              {/* Valuation */}
              <div className="font-mono text-3xl font-bold text-ink tracking-tight mb-4">
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
                      style={{ background: `color-mix(in srgb, ${DRIVER_COLOR[key]} ${Math.round((a) * 100)}%, transparent)` }}
                    >
                      <div className="font-mono text-[9px] tracking-widest uppercase text-slate">{label}</div>
                      <div className="font-mono text-sm font-bold text-ink">{score}</div>
                    </div>
                  )
                })}
              </div>

              {/* Stadium owned + tap-affordance */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-rule">
                <span className={`font-mono text-[10px] tracking-widest uppercase font-bold ${team.ownsStadium ? 'text-positive' : 'text-ash'}`}>
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
          <div className="text-center py-6 text-slate text-sm">No franchises match this filter.</div>
        )}
      </div>

      {/* Grid view — md+, opt-in via header toggle. Sorted by valuation
          descending so the magazine-rank order matches the headline narrative. */}
      {viewMode === 'grid' && (
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 animate-fade-in">
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
                    className={`group relative w-full text-left bg-card rounded-sm pt-7 pb-5 px-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${
                      isSelected ? 'ring-1 ring-accent-soft' : ''
                    }`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${`color-mix(in srgb, ${color} ${Math.round((0.28) * 100)}%, transparent)`} 0%, ${`color-mix(in srgb, ${color} ${Math.round((0.10) * 100)}%, transparent)`} 55%, ${`color-mix(in srgb, ${color} ${Math.round((0.03) * 100)}%, transparent)`} 100%)`,
                      border: `1px solid ${isSelected ? 'var(--tw-ring-color, var(--pos))' : `color-mix(in srgb, ${color} ${Math.round((0.35) * 100)}%, transparent)`}`,
                    }}
                  >
                    {/* Magazine-style rank number, top-left, large + assertive.
                        Sits behind the centered logo at low opacity so it reads
                        as a watermark rank rather than a footnote. */}
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-2 font-bold leading-none text-ink select-none"
                      style={{ fontSize: '4rem', opacity: 0.13, letterSpacing: '-0.04em' }}
                    >
                      {rank}
                    </span>

                    {/* Logo + factor ring — centerpiece of the card. The ring
                        owns the upper portion; team meta sits below. */}
                    <div className="relative flex flex-col items-center text-center pt-2">
                      <FactorRing team={team} size={156} logoSize={112} thickness={16} gap={6} />
                      <div className="mt-4 text-base font-bold text-ink leading-tight line-clamp-2 min-h-[2.5rem]">
                        {team.name}
                      </div>
                      <div className="mt-2 font-mono text-3xl font-extrabold text-ink tracking-tight">
                        ${team.currentValuation}
                        <span className="text-lg text-slate font-semibold">B</span>
                      </div>
                      {team.fiveYearGrowth != null && (
                        <div className={`mt-1 font-mono text-[11px] font-semibold ${growthClass(team.fiveYearGrowth)}`}>
                          {team.fiveYearGrowth >= 0 ? '+' : ''}{team.fiveYearGrowth}% 5Y
                        </div>
                      )}
                    </div>

                    {/* Footer row: league badge bottom-left, stadium ownership bottom-right */}
                    <div className="mt-3 pt-3 border-t border-rule/70 flex items-center justify-between">
                      <span className={`font-mono text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm border ${LEAGUE_BADGE[team.league]}`}>
                        {team.league}
                      </span>
                      <span className={`font-mono text-[9px] tracking-widest uppercase font-bold ${team.ownsStadium ? 'text-positive' : 'text-ash'}`}>
                        {team.ownsStadium ? '● Stadium' : '○ Tenant'}
                      </span>
                    </div>
                  </button>
                )
              })}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-slate text-sm">
              No franchises match this filter.
            </div>
          )}
        </div>
      )}

      {/* Table — md+, default view */}
      {viewMode === 'list' && (
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 animate-fade-in">
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
                        : 'hover:bg-paper/60'
                    }`}
                  >
                    <td className="h-10 py-0 px-2 align-middle">
                      <span
                        className={`font-mono text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm border ${LEAGUE_BADGE[team.league]}`}
                      >
                        {team.league}
                      </span>
                    </td>
                    <td className="h-10 py-0 px-2 align-middle max-w-[320px]">
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
                    <td className="h-10 py-0 px-2 align-middle text-right font-mono text-[15px] font-bold text-ink whitespace-nowrap">
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
                    <td className="h-10 py-0 px-2 align-middle text-center text-sm">
                      {team.ownsStadium ? (
                        <span className="text-positive font-bold">●</span>
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
          <div className="text-center py-8 text-slate text-sm">
            No franchises match this filter.
          </div>
        )}
      </div>
      )}
    </section>
  )
}
