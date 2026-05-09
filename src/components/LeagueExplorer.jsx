import { useState, useMemo } from 'react'

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

export default function LeagueExplorer({ teams, onSelectTeam, selectedTeam }) {
  const [leagueFilter, setLeagueFilter] = useState('ALL')
  const [sortField, setSortField] = useState('currentValuation')
  const [sortDir, setSortDir] = useState('desc')

  function handleSort(field) {
    if (sortField === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDir(field === 'name' || field === 'league' ? 'asc' : 'desc')
    }
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
              onClick={() => setLeagueFilter(l)}
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
          <span className="ml-auto font-mono text-[10px] text-slate tracking-wider hidden sm:inline">
            <span className="text-ink font-semibold">{filtered.length}</span> shown · click a row for the full profile
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
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
                      <div className="text-sm font-semibold text-ink truncate">{team.name}</div>
                      {team.city && (
                        <div className="text-[10px] text-slate font-mono truncate">
                          {team.city}
                        </div>
                      )}
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
    </section>
  )
}
