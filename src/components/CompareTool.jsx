import { useState, useMemo } from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const LEAGUES = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']

const DRIVER_ENTRIES = [
  ['mediaRights', 'Media Rights'],
  ['stadium',     'Stadium'],
  ['brand',       'Brand'],
  ['marketSize',  'Market Size'],
  ['onField',     'On-Field'],
]

// One distinct ink-friendly color per slot
const TEAM_COLORS = ['#1a1a1a', '#e8600a', '#1e3a8a', '#5b21b6', '#065f46']

const MIN_TEAMS = 2
const MAX_TEAMS = 5

const SLOT_GRID_CLASS = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
}

const WINNER_CELL = 'bg-callout text-[#8a6d00] font-bold border border-[#e6d27a]'

function CompareTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const sorted = [...payload].sort((a, b) => (b.value ?? 0) - (a.value ?? 0))
  return (
    <div className="bg-white border border-rule rounded-sm px-4 py-3 text-xs shadow-card">
      <div className="font-semibold text-ink mb-2">{label}</div>
      {sorted.map((p, i) => (
        <div key={i} className="flex items-center gap-2 mb-1 min-w-[160px]">
          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: p.color }} />
          <span className="text-slate truncate max-w-[140px] mr-auto">{p.name}</span>
          <span className="font-mono font-bold text-ink pl-2">{p.value}/10</span>
        </div>
      ))}
    </div>
  )
}

function TeamSlot({ idx, value, onChange, onRemove, canRemove, team, teams, otherSelected }) {
  const color = TEAM_COLORS[idx]
  return (
    <div className={`flex-1 min-w-0 rounded-sm p-4 border bg-white ${team ? 'border-rule' : 'border-rule border-dashed'}`} style={team ? { borderTopColor: color, borderTopWidth: 3 } : undefined}>
      <div className="flex items-center justify-between mb-3">
        <div className="font-mono text-[10px] font-bold tracking-widest uppercase" style={{ color }}>
          Team {String(idx + 1).padStart(2, '0')}
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="w-6 h-6 flex items-center justify-center text-slate hover:text-ink hover:bg-rule rounded-sm transition-colors text-xs"
            aria-label={`Remove team slot ${idx + 1}`}
          >
            ×
          </button>
        )}
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-paper border border-rule text-ink rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-ink cursor-pointer mb-3"
      >
        <option value="">Select a team...</option>
        {LEAGUES.map((league) => (
          <optgroup key={league} label={league}>
            {teams
              .filter((t) => t.league === league && !otherSelected.has(t.name))
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((t) => (
                <option key={t.name} value={t.name}>{t.name}</option>
              ))}
          </optgroup>
        ))}
      </select>

      {team ? (
        <div>
          <div className="font-serif text-xl font-bold text-ink truncate leading-tight">{team.name}</div>
          <div className="text-[10px] text-slate font-mono mb-2 mt-1 uppercase tracking-wider">{team.league} · {team.city}</div>
          <div className="font-mono text-2xl font-bold text-ink">${team.currentValuation}B</div>
        </div>
      ) : (
        <div className="text-ash text-xs italic">No team selected</div>
      )}
    </div>
  )
}

export default function CompareTool({ teams }) {
  const [teamNames, setTeamNames] = useState(['', ''])

  function setName(idx, name) {
    setTeamNames((prev) => prev.map((n, i) => (i === idx ? name : n)))
  }
  function addSlot() {
    if (teamNames.length < MAX_TEAMS) setTeamNames((prev) => [...prev, ''])
  }
  function removeSlot(idx) {
    if (teamNames.length > MIN_TEAMS) setTeamNames((prev) => prev.filter((_, i) => i !== idx))
  }

  const slotTeams = teamNames.map((n) => teams.find((t) => t.name === n) || null)
  const selectedTeams = slotTeams.filter(Boolean)
  const ready = selectedTeams.length >= 2

  const radarData = useMemo(() => {
    if (!ready) return []
    return DRIVER_ENTRIES.map(([key, label]) => {
      const row = { driver: label }
      for (const team of selectedTeams) {
        row[team.name] = team.valuationDrivers[key]
      }
      return row
    })
  }, [selectedTeams, ready])

  const totals = useMemo(
    () => selectedTeams.map((t) => DRIVER_ENTRIES.reduce((s, [k]) => s + t.valuationDrivers[k], 0)),
    [selectedTeams]
  )
  const maxTotal = totals.length ? Math.max(...totals) : 0
  const allTotalsEqual = totals.every((v) => v === maxTotal)

  return (
    <section id="compare" className="border-t border-rule py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow text-accent">Franchise Comparison</span>
          <div className="h-px flex-1 bg-rule" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-2">
          <div>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Compare teams.</h2>
          </div>
          {teamNames.length < MAX_TEAMS && (
            <button
              type="button"
              onClick={addSlot}
              className="self-start lg:self-end flex items-center gap-2 bg-ink hover:bg-graphite text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-colors"
            >
              + Add Team
              <span className="font-mono text-[10px] opacity-70">
                ({teamNames.length}/{MAX_TEAMS})
              </span>
            </button>
          )}
        </div>
        <div className="title-rule mb-6" />
        <p className="text-base text-graphite max-w-3xl mb-8 leading-relaxed">
          Pit up to {MAX_TEAMS} franchises against each other. Each driver row highlights the
          winner — gold if anyone leads, no highlight if all tied.
        </p>

        {/* Slots */}
        <div className={`grid gap-3 mb-10 ${SLOT_GRID_CLASS[teamNames.length] || SLOT_GRID_CLASS[5]}`}>
          {teamNames.map((name, idx) => (
            <TeamSlot
              key={idx}
              idx={idx}
              value={name}
              onChange={(v) => setName(idx, v)}
              onRemove={() => removeSlot(idx)}
              canRemove={teamNames.length > MIN_TEAMS}
              team={slotTeams[idx]}
              teams={teams}
              otherSelected={new Set(teamNames.filter((n, i) => i !== idx && n))}
            />
          ))}
        </div>

        {ready ? (
          <>
            {/* Radar */}
            <div className="mb-10">
              <div className="font-mono text-[10px] text-slate tracking-widest uppercase font-semibold mb-3">
                Driver Profile · Radar (1–10)
              </div>
              <div className="h-px bg-rule mb-4" />
              <p className="text-sm text-graphite mb-6 leading-relaxed">
                The larger the shape, the higher the franchise scores across drivers.
              </p>
              <ResponsiveContainer width="100%" height={460}>
                <RadarChart data={radarData} outerRadius="72%">
                  <PolarGrid stroke="#e8e8e8" />
                  <PolarAngleAxis dataKey="driver" tick={{ fill: '#3d3d3d', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 10]}
                    tick={{ fill: '#9b9b9b', fontSize: 9, fontFamily: '"JetBrains Mono", monospace' }}
                    axisLine={false}
                    tickCount={6}
                  />
                  {selectedTeams.map((team, i) => {
                    const slotIdx = slotTeams.findIndex((t) => t && t.name === team.name)
                    const color = TEAM_COLORS[slotIdx] || TEAM_COLORS[i]
                    return (
                      <Radar
                        key={team.name}
                        name={team.name}
                        dataKey={team.name}
                        stroke={color}
                        strokeWidth={1.75}
                        fill={color}
                        fillOpacity={0.14}
                      />
                    )
                  })}
                  <Tooltip content={<CompareTooltip />} />
                  <Legend
                    wrapperStyle={{ paddingTop: 14 }}
                    formatter={(value) => (
                      <span style={{ color: '#3d3d3d', fontSize: 12, fontWeight: 600 }}>{value}</span>
                    )}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Head-to-head table */}
            <div className="border border-rule">
              <table className="w-full">
                <thead className="bg-paper border-b border-rule">
                  <tr>
                    <th className="py-3 px-4 text-left text-[10px] font-mono tracking-widest uppercase text-slate">
                      Driver
                    </th>
                    {selectedTeams.map((team) => {
                      const slotIdx = slotTeams.findIndex((t) => t && t.name === team.name)
                      const color = TEAM_COLORS[slotIdx]
                      return (
                        <th
                          key={team.name}
                          className="py-3 px-3 text-center text-[10px] font-mono tracking-widest uppercase font-bold"
                          style={{ color }}
                        >
                          <div className="truncate max-w-[140px] mx-auto">{team.name}</div>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {DRIVER_ENTRIES.map(([key, label]) => {
                    const scores = selectedTeams.map((t) => t.valuationDrivers[key])
                    const max = Math.max(...scores)
                    const tiedCount = scores.filter((s) => s === max).length
                    const showWinner = tiedCount < scores.length
                    return (
                      <tr key={key} className="border-b border-rule">
                        <td className="py-3 px-4 text-sm text-ink font-medium">{label}</td>
                        {selectedTeams.map((team) => {
                          const score = team.valuationDrivers[key]
                          const isWinner = showWinner && score === max
                          const slotIdx = slotTeams.findIndex((t) => t && t.name === team.name)
                          const color = TEAM_COLORS[slotIdx]
                          return (
                            <td key={team.name} className="py-3 px-3 text-center">
                              <span
                                className={`inline-flex items-center justify-center w-10 h-7 rounded-sm font-mono text-sm ${isWinner ? WINNER_CELL : 'font-semibold'}`}
                                style={isWinner ? undefined : { color }}
                              >
                                {score}
                              </span>
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                  <tr className="bg-paper border-t-2 border-ink">
                    <td className="py-3 px-4 text-[10px] font-mono font-bold tracking-widest uppercase text-slate">
                      Total Score
                    </td>
                    {selectedTeams.map((team, i) => {
                      const total = totals[i]
                      const isWinner = !allTotalsEqual && total === maxTotal
                      const slotIdx = slotTeams.findIndex((t) => t && t.name === team.name)
                      const color = TEAM_COLORS[slotIdx]
                      return (
                        <td key={team.name} className="py-3 px-3 text-center">
                          <span
                            className={`inline-flex items-center justify-center min-w-[44px] h-9 px-2 rounded-sm font-mono text-lg font-bold ${isWinner ? WINNER_CELL : ''}`}
                            style={isWinner ? undefined : { color }}
                          >
                            {total}
                          </span>
                        </td>
                      )
                    })}
                  </tr>
                </tbody>
              </table>
              <div className="px-4 py-3 border-t border-rule bg-paper font-mono text-[10px] text-slate tracking-wider uppercase">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-sm bg-callout border border-[#e6d27a]" />
                  Gold = winner (or tied for the lead, when others are behind)
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-paper border border-dashed border-rule rounded-sm py-20 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-4 text-graphite">⚖</div>
            <div className="text-graphite text-sm mb-1">Select at least two teams to compare</div>
            <div className="text-slate text-xs">
              Up to {MAX_TEAMS} franchises · radar profile + driver-by-driver scores
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
