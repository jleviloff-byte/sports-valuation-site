import { useEffect, useMemo, useState } from 'react'
import { geoAlbersUsa, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import statesTopo from 'us-atlas/states-10m.json'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { US_METROS, findMetro, NON_US_CITIES } from '../../data/us-metros.js'
import { trackCityBubbleClicked } from '../utils/analytics.js'

const US_LEAGUES = new Set(['NFL', 'NBA', 'MLB', 'NHL', 'MLS'])

const LEAGUE_BADGE = {
  NFL: 'text-[#1e3a8a] border-[#1e3a8a]/30 bg-[#1e3a8a]/[0.06]',
  NBA: 'text-[#991b1b] border-[#991b1b]/30 bg-[#991b1b]/[0.06]',
  MLB: 'text-[#075985] border-[#075985]/30 bg-[#075985]/[0.06]',
  NHL: 'text-[#155e75] border-[#155e75]/30 bg-[#155e75]/[0.06]',
  MLS: 'text-[#065f46] border-[#065f46]/30 bg-[#065f46]/[0.06]',
}
const LEAGUE_BAR_COLOR = {
  NFL: '#1e3a8a',
  NBA: '#991b1b',
  MLB: '#075985',
  NHL: '#155e75',
  MLS: '#065f46',
}

const VIEW = { width: 975, height: 610 }
const projection = geoAlbersUsa().scale(1300).translate([VIEW.width / 2, VIEW.height / 2])
const pathGen = geoPath(projection)
const states = feature(statesTopo, statesTopo.objects.states).features

// Editorial heat scale: light grey → WSJ orange
const COLOR_LOW = [232, 232, 232]   // light rule grey
const COLOR_HIGH = [232, 96, 10]    // accent (WSJ orange)
function lerpColor(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ]
}
function scaleColor(value, max) {
  const t = max > 0 ? Math.min(1, value / max) : 0
  const [r, g, b] = lerpColor(COLOR_LOW, COLOR_HIGH, t)
  return `rgb(${r},${g},${b})`
}
function scaleRadius(value, max) {
  const minR = 7
  const maxR = 50
  const t = max > 0 ? Math.sqrt(value / max) : 0
  return minR + (maxR - minR) * t
}

function growthClass(g) {
  if (g == null) return 'text-ash'
  if (g >= 0) return 'text-[#0a7d2a]'
  return 'text-[#b91c1c]'
}

function CityModal({ city, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const sortedTeams = [...city.teams].sort((a, b) => b.currentValuation - a.currentValuation)
  const barData = sortedTeams.map((t) => ({
    name: t.name,
    valuation: t.currentValuation,
    league: t.league,
  }))

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 animate-backdrop-in" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/40" />
      <div
        role="dialog"
        aria-label={`${city.name} sports valuation summary`}
        aria-modal="true"
        className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-rule rounded-sm shadow-modal overflow-hidden flex flex-col animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 border-b border-rule px-6 py-5 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-1">
              Sports Metro
            </div>
            <h2 className="section-title text-3xl sm:text-4xl">{city.name}</h2>
            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-mono text-3xl font-bold text-ink">
                ${city.total.toFixed(2)}B
              </span>
              <span className="text-xs text-slate">
                across {city.teams.length} franchise{city.teams.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-graphite hover:text-ink bg-paper hover:bg-rule rounded-sm transition-colors text-base border border-rule"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Bar chart */}
          <div>
            <div className="font-mono text-[10px] text-slate tracking-widest uppercase font-semibold mb-3">
              Valuation Comparison ($B)
            </div>
            <div className="h-px bg-rule mb-4" />
            <ResponsiveContainer width="100%" height={Math.max(220, sortedTeams.length * 36)}>
              <BarChart data={barData} layout="vertical" margin={{ top: 4, right: 18, bottom: 4, left: 0 }}>
                <XAxis
                  type="number"
                  tick={{ fill: '#9b9b9b', fontSize: 10, fontFamily: '"JetBrains Mono", monospace' }}
                  axisLine={{ stroke: '#d4d4d4' }}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}B`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: '#1a1a1a', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={150}
                />
                <Tooltip
                  contentStyle={{ background: '#ffffff', border: '1px solid #e8e8e8', borderRadius: 2, fontSize: 12 }}
                  labelStyle={{ color: '#1a1a1a', fontWeight: 700 }}
                  itemStyle={{ color: '#3d3d3d' }}
                  formatter={(v) => [`$${v}B`, 'Valuation']}
                  cursor={{ fill: '#fff9e6' }}
                />
                <Bar dataKey="valuation" radius={[0, 2, 2, 0]} maxBarSize={26}>
                  {barData.map((d, i) => (
                    <Cell key={i} fill={LEAGUE_BAR_COLOR[d.league] || '#9b9b9b'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Team list */}
          <div>
            <div className="font-mono text-[10px] text-slate tracking-widest uppercase font-semibold mb-3">
              Franchises · Ranked by Valuation
            </div>
            <div className="h-px bg-rule mb-4" />
            <div className="space-y-px bg-rule">
              {sortedTeams.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-white p-4 flex items-center gap-4"
                >
                  <div className="font-mono text-xs font-bold text-slate w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span
                    className={`font-mono text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm border flex-shrink-0 ${LEAGUE_BADGE[t.league]}`}
                  >
                    {t.league}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-ink truncate">{t.name}</div>
                    <div className="text-[10px] text-slate font-mono truncate">{t.city}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono text-base font-bold text-ink">
                      ${t.currentValuation}<span className="text-slate">B</span>
                    </div>
                    {t.oneYearGrowth != null && (
                      <div className={`font-mono text-[10px] font-semibold ${growthClass(t.oneYearGrowth)}`}>
                        {t.oneYearGrowth >= 0 ? '+' : ''}{t.oneYearGrowth}% 1Y
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CitiesMap({ teams }) {
  const [selected, setSelected] = useState(null)

  const cities = useMemo(() => {
    const usTeams = teams.filter(
      (t) => US_LEAGUES.has(t.league) && t.city && !NON_US_CITIES.has(t.city)
    )
    const byMetro = new Map()
    for (const t of usTeams) {
      const metro = findMetro(t.city)
      if (!metro) continue
      if (!byMetro.has(metro.name)) {
        byMetro.set(metro.name, {
          name: metro.name,
          lat: metro.lat,
          lng: metro.lng,
          teams: [],
          total: 0,
        })
      }
      const bucket = byMetro.get(metro.name)
      bucket.teams.push(t)
      bucket.total += t.currentValuation || 0
    }
    return [...byMetro.values()]
      .map((c) => ({ ...c, total: +c.total.toFixed(2) }))
      .sort((a, b) => a.total - b.total)
  }, [teams])

  const maxTotal = cities.length ? Math.max(...cities.map((c) => c.total)) : 0
  const totalLeagues = teams
    .filter((t) => US_LEAGUES.has(t.league) && t.city && !NON_US_CITIES.has(t.city))
    .reduce((s, t) => s + (t.currentValuation || 0), 0)

  const orphans = useMemo(() => {
    const seen = new Set()
    for (const t of teams) {
      if (!US_LEAGUES.has(t.league)) continue
      if (!t.city || NON_US_CITIES.has(t.city)) continue
      if (!findMetro(t.city)) seen.add(t.city)
    }
    return [...seen]
  }, [teams])

  return (
    <section id="cities" className="border-t border-rule py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow text-accent">Franchise Wealth by Metro</span>
          <div className="h-px flex-1 bg-rule" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-2">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Cities.</h2>
          <div className="font-mono text-[10px] text-slate tracking-widest uppercase">
            <span className="text-ink font-bold">${totalLeagues.toFixed(0)}B</span> total ·{' '}
            <span className="text-ink font-bold">{cities.length}</span> metros
          </div>
        </div>
        <div className="title-rule mb-6" />
        <p className="text-base sm:text-lg text-graphite max-w-3xl mb-12 leading-relaxed">
          Every US sports city plotted by combined franchise valuation across NFL, NBA, MLB, NHL,
          and MLS. Click any bubble for the full breakdown.
        </p>

        {/* Map */}
        <svg
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          className="w-full h-auto"
          role="img"
          aria-label="Map of US sports cities by combined franchise valuation"
        >
          {/* States */}
          <g>
            {states.map((s) => (
              <path
                key={s.id}
                d={pathGen(s)}
                fill="#ffffff"
                stroke="#d4d4d4"
                strokeWidth={0.6}
              />
            ))}
          </g>

          {/* Bubbles */}
          <g>
            {cities.map((c) => {
              const proj = projection([c.lng, c.lat])
              if (!proj) return null
              const [x, y] = proj
              const r = scaleRadius(c.total, maxTotal)
              const color = scaleColor(c.total, maxTotal)
              const isLarge = r >= 26
              return (
                <g
                  key={c.name}
                  onClick={() => { setSelected(c); trackCityBubbleClicked(c.name, c.total) }}
                  style={{ cursor: 'pointer' }}
                  className="group"
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill={color}
                    fillOpacity={0.78}
                    stroke="#1a1a1a"
                    strokeOpacity={0.5}
                    strokeWidth={0.8}
                    className="transition-[fill-opacity] group-hover:[fill-opacity:1]"
                  />
                  {isLarge ? (
                    <>
                      <text
                        x={x}
                        y={y - 3}
                        textAnchor="middle"
                        fontSize={11}
                        fontWeight={700}
                        fill="#1a1a1a"
                      >
                        {c.name}
                      </text>
                      <text
                        x={x}
                        y={y + 11}
                        textAnchor="middle"
                        fontSize={10}
                        fontWeight={700}
                        fill="#1a1a1a"
                        fontFamily='"JetBrains Mono", monospace'
                      >
                        ${c.total.toFixed(0)}B
                      </text>
                    </>
                  ) : (
                    <text
                      x={x + r + 4}
                      y={y + 3}
                      fontSize={10}
                      fontWeight={500}
                      fill="#3d3d3d"
                      className="pointer-events-none"
                    >
                      {c.name} <tspan fill="#9b9b9b" fontFamily='"JetBrains Mono", monospace'>${c.total.toFixed(1)}B</tspan>
                    </text>
                  )}
                </g>
              )
            })}
          </g>
        </svg>

        {/* Legend */}
        <div className="mt-6 pt-5 border-t border-rule flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-slate">
            <span>Smaller metro</span>
            <div
              className="h-2 w-32 rounded-sm border border-rule"
              style={{ background: 'linear-gradient(to right, rgb(232,232,232), rgb(232,96,10))' }}
            />
            <span>Larger metro</span>
          </div>
          <div className="font-mono text-[10px] tracking-wider uppercase text-slate sm:ml-auto">
            Bubble area ∝ total franchise valuation
          </div>
        </div>

        {orphans.length > 0 && (
          <div className="mt-3 font-mono text-[9px] text-ash tracking-wider uppercase">
            Unmapped cities ({orphans.length}): {orphans.join(' · ')}
          </div>
        )}
      </div>

      {selected && <CityModal city={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
