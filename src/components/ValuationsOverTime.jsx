import { useMemo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from 'recharts'
import { getEnrichment } from '../../data/enrichments.js'

const LEAGUES = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']

const LEAGUE_COLORS = {
  NFL: '#3b82f6',
  NBA: '#ef4444',
  MLB: '#0ea5e9',
  NHL: '#06b6d4',
  MLS: '#10b981',
  EPL: '#a855f7',
}

const MILESTONES = [
  { year: 2020, label: 'COVID-19',                color: '#f59e0b' },
  { year: 2022, label: 'NFL → Apple / YouTube',   color: '#3b82f6' },
  { year: 2023, label: 'First $10B franchise',    color: '#10b981' },
  { year: 2024, label: 'NBA new media rights',    color: '#ef4444' },
]

const YEAR_START = 2000
const YEAR_END = 2024

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const sorted = [...payload].sort((a, b) => (b.value ?? 0) - (a.value ?? 0))
  return (
    <div className="bg-white border border-rule rounded-sm px-3 py-2.5 text-xs shadow-card">
      <div className="font-mono text-[10px] text-slate tracking-wider mb-2">{label}</div>
      <div className="space-y-1">
        {sorted.map((p) => (
          <div key={p.dataKey} className="flex items-center gap-3 min-w-[140px]">
            <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: p.color }} />
            <span className="text-slate text-[11px] mr-auto">{p.dataKey}</span>
            <span className="font-mono font-bold text-ink">
              {p.value != null ? `$${p.value.toFixed(2)}B` : '—'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Linear-interpolate gaps between a team's known data points so a team with
// e.g. {2000, 2002, 2004} gets filled-in 2001 and 2003 values. Without this,
// MLB's even-years-only supplements caused odd-year averages to sample only
// the 2 of 30 teams with full history → erratic zigzag.
function interpolateHistory(history) {
  if (!history || history.length === 0) return []
  // Dedupe by year (keep latest entry if duplicates) then sort ascending
  const byYear = new Map()
  for (const p of history) {
    if (typeof p?.year !== 'number' || typeof p?.value !== 'number') continue
    byYear.set(p.year, p)
  }
  const sorted = [...byYear.values()].sort((a, b) => a.year - b.year)
  if (sorted.length === 0) return []
  const filled = []
  for (let i = 0; i < sorted.length - 1; i++) {
    const cur = sorted[i]
    const next = sorted[i + 1]
    filled.push(cur)
    const gap = next.year - cur.year
    if (gap > 1) {
      for (let j = 1; j < gap; j++) {
        const t = j / gap
        filled.push({
          year: cur.year + j,
          value: cur.value + (next.value - cur.value) * t,
          interpolated: true,
        })
      }
    }
  }
  filled.push(sorted[sorted.length - 1])
  return filled
}

export default function ValuationsOverTime({ teams }) {
  const data = useMemo(() => {
    const accum = {}
    for (let y = YEAR_START; y <= YEAR_END; y++) {
      accum[y] = {}
      for (const lg of LEAGUES) accum[y][lg] = { sum: 0, count: 0 }
    }
    for (const team of teams) {
      const enr = getEnrichment(team.name)
      const history = interpolateHistory(enr?.valuationHistory ?? [])
      for (const point of history) {
        if (point.year < YEAR_START || point.year > YEAR_END) continue
        const bucket = accum[point.year]?.[team.league]
        if (!bucket) continue
        bucket.sum += point.value
        bucket.count += 1
      }
    }
    const out = []
    for (let y = YEAR_START; y <= YEAR_END; y++) {
      const row = { year: y }
      for (const lg of LEAGUES) {
        const b = accum[y][lg]
        // True mean across teams that have data this year (missing != zero).
        // Suppress the year if fewer than half a typical league roster reported.
        row[lg] = b.count >= 4 ? +(b.sum / b.count).toFixed(2) : null
      }
      out.push(row)
    }
    return out
  }, [teams])

  return (
    <section className="border-t border-rule py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow text-accent">The Macro Picture</span>
          <div className="h-px flex-1 bg-rule" />
        </div>

        <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Franchise values over time.
        </h2>
        <div className="title-rule mb-6" />
        <p className="text-base sm:text-lg text-graphite max-w-3xl mb-12 leading-relaxed">
          Average franchise valuation by league, 2000–2024. The four major US leagues moved
          together for two decades — then the NFL's media deals pulled it away.
        </p>

        <div>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 6 }}>
              <CartesianGrid stroke="#e8e8e8" strokeDasharray="2 4" vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fill: '#9b9b9b', fontSize: 11, fontFamily: '"JetBrains Mono", monospace' }}
                axisLine={{ stroke: '#d4d4d4' }}
                tickLine={false}
                interval="preserveStartEnd"
                minTickGap={24}
              />
              <YAxis
                tick={{ fill: '#9b9b9b', fontSize: 11, fontFamily: '"JetBrains Mono", monospace' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v}B`}
                width={50}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#9b9b9b', strokeDasharray: '2 4' }} />
              <Legend
                verticalAlign="bottom"
                iconType="line"
                wrapperStyle={{
                  fontSize: 11,
                  paddingTop: 14,
                  fontFamily: '"JetBrains Mono", monospace',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              />
              {MILESTONES.map((m) => (
                <ReferenceLine
                  key={`${m.year}-${m.label}`}
                  x={m.year}
                  stroke="#9b9b9b"
                  strokeDasharray="3 4"
                  strokeOpacity={0.6}
                />
              ))}
              {LEAGUES.map((lg) => (
                <Line
                  key={lg}
                  type="monotone"
                  dataKey={lg}
                  stroke={LEAGUE_COLORS[lg]}
                  strokeWidth={lg === 'NFL' ? 2.5 : 1.5}
                  dot={false}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                  connectNulls
                />
              ))}
            </LineChart>
          </ResponsiveContainer>

          {/* Milestones */}
          <div className="mt-8 pt-6 border-t border-rule">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-slate mb-4">
              Milestones
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
              {MILESTONES.map((m) => (
                <div key={`${m.year}-${m.label}`} className="border-l-2 border-ink pl-4">
                  <div className="font-mono text-base font-bold text-ink">{m.year}</div>
                  <div className="text-sm text-graphite mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] italic text-slate mt-6 leading-relaxed">
            Note: Average across teams with reported Forbes valuations each year. Earlier years
            have smaller samples and may skew toward the most-valuable franchises.
          </p>
        </div>
      </div>
    </section>
  )
}
