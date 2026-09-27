import { useEffect, useMemo, useRef, useState } from 'react'
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
  NFL: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  NBA: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  MLB: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  NHL: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
  MLS: 'text-slate border-rule-strong/30 bg-ink/[0.06]',
}
const LEAGUE_BAR_COLOR = {
  NFL: 'var(--text2)',
  NBA: 'var(--text2)',
  MLB: 'var(--text2)',
  NHL: 'var(--text2)',
  MLS: 'var(--text2)',
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
  if (g >= 0) return 'text-positive'
  return 'text-negative'
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
        className="relative w-full max-w-3xl max-h-[90vh] bg-card border border-rule rounded-sm shadow-modal overflow-hidden flex flex-col animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 border-b border-rule px-6 py-5 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-1">
              Sports Metro
            </div>
            <h2 className="section-title text-3xl sm:text-3xl">{city.name}</h2>
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
                  tick={{ fill: 'var(--text3)', fontSize: 10, fontFamily: '"IBM Plex Mono", monospace' }}
                  axisLine={{ stroke: 'var(--border)' }}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}B`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: 'var(--ink)', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={150}
                />
                <Tooltip
                  contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 2, fontSize: 12 }}
                  labelStyle={{ color: 'var(--ink)', fontWeight: 700 }}
                  itemStyle={{ color: 'var(--text2)' }}
                  formatter={(v) => [`$${v}B`, 'Valuation']}
                  cursor={{ fill: 'var(--card)' }}
                />
                <Bar dataKey="valuation" radius={[0, 2, 2, 0]} maxBarSize={26}>
                  {barData.map((d, i) => (
                    <Cell key={i} fill={LEAGUE_BAR_COLOR[d.league] || 'var(--text3)'} />
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
                  className="bg-card p-4 flex items-center gap-4"
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

// Hook: pinch-to-zoom + pan + zoom buttons. Scale clamped to [1, 5].
// Returns transform CSS + handlers to spread onto the wrapper.
function useMapZoom() {
  const [scale, setScale] = useState(1)
  const [tx, setTx] = useState(0)
  const [ty, setTy] = useState(0)
  const gestureRef = useRef(null)

  const clampScale = (s) => Math.max(1, Math.min(5, s))

  function reset() {
    setScale(1); setTx(0); setTy(0)
  }
  function zoomBy(factor) {
    setScale((s) => clampScale(s * factor))
  }

  function onTouchStart(e) {
    if (e.touches.length === 2) {
      const [a, b] = e.touches
      const dx = b.clientX - a.clientX
      const dy = b.clientY - a.clientY
      gestureRef.current = {
        kind: 'pinch',
        startDist: Math.hypot(dx, dy),
        startScale: scale,
      }
    } else if (e.touches.length === 1 && scale > 1) {
      const t = e.touches[0]
      gestureRef.current = {
        kind: 'pan',
        startX: t.clientX,
        startY: t.clientY,
        startTx: tx,
        startTy: ty,
      }
    }
  }
  function onTouchMove(e) {
    const g = gestureRef.current
    if (!g) return
    if (g.kind === 'pinch' && e.touches.length === 2) {
      const [a, b] = e.touches
      const dx = b.clientX - a.clientX
      const dy = b.clientY - a.clientY
      const dist = Math.hypot(dx, dy)
      setScale(clampScale(g.startScale * (dist / g.startDist)))
    } else if (g.kind === 'pan' && e.touches.length === 1) {
      const t = e.touches[0]
      setTx(g.startTx + (t.clientX - g.startX))
      setTy(g.startTy + (t.clientY - g.startY))
    }
    e.preventDefault()
  }
  function onTouchEnd() {
    gestureRef.current = null
  }

  return {
    scale, tx, ty,
    transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
    onTouchStart, onTouchMove, onTouchEnd,
    zoomIn: () => zoomBy(1.4),
    zoomOut: () => zoomBy(1 / 1.4),
    reset,
  }
}

export default function CitiesMap({ teams }) {
  const [selected, setSelected] = useState(null)
  const zoom = useMapZoom()

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
    <section className="border-t border-rule py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="section-title text-2xl sm:text-3xl">Cities</h2>
            <p className="text-sm text-graphite mt-1">Combined franchise value by US metro across NFL, NBA, MLB, NHL and MLS. Click a bubble for the breakdown.</p>
          </div>
          <div className="font-mono text-[10px] text-slate tracking-widest uppercase">
            <span className="text-ink font-bold">${totalLeagues.toFixed(0)}B</span> total ·{' '}
            <span className="text-ink font-bold">{cities.length}</span> metros
          </div>
        </div>

        {/* Map — wrapped in a zoom/pan container with touch handlers */}
        <div
          className="relative overflow-hidden border border-rule rounded-sm bg-card"
          onTouchStart={zoom.onTouchStart}
          onTouchMove={zoom.onTouchMove}
          onTouchEnd={zoom.onTouchEnd}
          style={{ touchAction: zoom.scale > 1 ? 'none' : 'pan-y' }}
        >
          {/* Zoom controls — top-right of the map container */}
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-1 bg-card border border-rule rounded-sm shadow-card">
            <button
              type="button"
              onClick={zoom.zoomIn}
              className="w-9 h-9 flex items-center justify-center text-ink hover:bg-paper transition-colors text-lg font-bold"
              aria-label="Zoom in"
            >+</button>
            <button
              type="button"
              onClick={zoom.zoomOut}
              className="w-9 h-9 flex items-center justify-center text-ink hover:bg-paper transition-colors text-lg font-bold border-t border-rule"
              aria-label="Zoom out"
            >−</button>
            <button
              type="button"
              onClick={zoom.reset}
              className="w-9 h-9 flex items-center justify-center text-slate hover:bg-paper hover:text-ink transition-colors text-[9px] font-mono font-bold tracking-widest uppercase border-t border-rule"
              aria-label="Reset zoom"
            >reset</button>
          </div>
          <svg
            viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
            className="w-full h-auto block select-none"
            role="img"
            aria-label="Map of US sports cities by combined franchise valuation"
            style={{
              transform: zoom.transform,
              transformOrigin: '0 0',
              transition: zoom.scale === 1 ? 'transform 0.18s ease-out' : 'none',
            }}
          >
          {/* States */}
          <g>
            {states.map((s) => (
              <path
                key={s.id}
                d={pathGen(s)}
                fill="var(--card)"
                stroke="var(--border)"
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
                    stroke="var(--ink)"
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
                        fill="var(--ink)"
                      >
                        {c.name}
                      </text>
                      <text
                        x={x}
                        y={y + 11}
                        textAnchor="middle"
                        fontSize={10}
                        fontWeight={700}
                        fill="var(--ink)"
                        fontFamily='"IBM Plex Mono", monospace'
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
                      fill="var(--text2)"
                      className="pointer-events-none"
                    >
                      {c.name} <tspan fill="var(--text3)" fontFamily='"IBM Plex Mono", monospace'>${c.total.toFixed(1)}B</tspan>
                    </text>
                  )}
                </g>
              )
            })}
          </g>
        </svg>
        {zoom.scale > 1 && (
          <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-widest uppercase text-ink bg-card/90 border border-rule rounded-sm px-2 py-1">
            {Math.round(zoom.scale * 100)}% · drag to pan
          </div>
        )}
        </div>

        {/* Mobile zoom hint — visible only when zoomed out */}
        <p className="md:hidden font-mono text-[10px] tracking-wider uppercase text-ash mt-2">
          Pinch to zoom · drag to pan
        </p>

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
