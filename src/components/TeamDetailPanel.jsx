import { useEffect, useState } from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { getTeamImages } from '../../data/images.js'
import allTeams from '../../data/allTeams.js'
import { trackFactorExpanded } from '../utils/analytics.js'

const OWNERSHIP_COLORS = ['#1a1a1a', '#e8600a', '#5b21b6', '#065f46', '#991b1b', '#075985', '#b45309', '#1e3a8a']

const LEAGUE_ACCENT = {
  NFL: '#1e3a8a',
  NBA: '#991b1b',
  MLB: '#075985',
  NHL: '#155e75',
  MLS: '#065f46',
  EPL: '#581c87',
}

const DRIVER_DEFS = [
  { label: 'Media Rights', key: 'mediaRights', color: '#1e3a8a' },
  { label: 'Stadium',      key: 'stadium',     color: '#5b21b6' },
  { label: 'Brand',        key: 'brand',       color: '#b45309' },
  { label: 'Market Size',  key: 'marketSize',  color: '#065f46' },
  { label: 'On-Field',     key: 'onField',     color: '#991b1b' },
]

function growthColor(g) {
  if (g == null) return 'text-ash'
  if (g >= 0) return 'text-[#0a7d2a]'
  return 'text-[#b91c1c]'
}

function fmtGrowth(g) {
  if (g == null) return '—'
  return `${g >= 0 ? '+' : ''}${g}%`
}

function fmtMoney(v) {
  if (v == null) return '—'
  if (v >= 1) return `$${v.toFixed(2)}B`
  return `$${Math.round(v * 1000)}M`
}

function ValuationTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { year, value, isEstimated } = payload[0].payload
  return (
    <div className="bg-white border border-rule rounded-sm px-3 py-2 text-xs shadow-card">
      <div className="font-mono text-[10px] text-slate mb-0.5">{year}</div>
      <div className="font-mono text-base font-bold text-ink">${value.toFixed(2)}B</div>
      {isEstimated && (
        <div className="font-mono text-[9px] text-accent mt-0.5 tracking-wider uppercase">Estimated</div>
      )}
    </div>
  )
}

function OwnershipTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { name, pct, role } = payload[0].payload
  return (
    <div className="bg-white border border-rule rounded-sm px-3 py-2 text-xs shadow-card">
      <div className="text-ink font-semibold mb-0.5">{name}</div>
      <div className="font-mono text-ink font-bold">{pct}%</div>
      {role && <div className="text-[10px] text-slate mt-0.5">{role}</div>}
    </div>
  )
}

function OwnershipDonut({ group }) {
  const data = group.filter((m) => typeof m.pct === 'number' && m.pct > 0)
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          dataKey="pct"
          nameKey="name"
          innerRadius={64}
          outerRadius={100}
          paddingAngle={1}
          stroke="#ffffff"
          strokeWidth={2}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={OWNERSHIP_COLORS[i % OWNERSHIP_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<OwnershipTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}

function ValuationHistoryChart({ history }) {
  const CustomDot = (props) => {
    const { cx, cy, payload } = props
    if (cx == null || cy == null) return null
    const fill = payload.isEstimated ? '#e8600a' : '#1a1a1a'
    return <circle cx={cx} cy={cy} r={3.5} fill={fill} stroke={fill} />
  }
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={history} margin={{ top: 10, right: 18, bottom: 10, left: 6 }}>
        <CartesianGrid stroke="#e8e8e8" strokeDasharray="2 4" vertical={false} />
        <XAxis
          dataKey="year"
          tick={{ fill: '#9b9b9b', fontSize: 11, fontFamily: '"JetBrains Mono", monospace' }}
          axisLine={{ stroke: '#d4d4d4' }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#9b9b9b', fontSize: 11, fontFamily: '"JetBrains Mono", monospace' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `$${v}B`}
          width={50}
        />
        <Tooltip content={<ValuationTooltip />} cursor={{ stroke: '#9b9b9b', strokeDasharray: '2 4' }} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1a1a1a"
          strokeWidth={1.75}
          dot={<CustomDot />}
          activeDot={{ r: 5, fill: '#e8600a', stroke: '#e8600a' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

function rankBadgeClass(rank) {
  if (rank == null) return 'bg-paper text-ash border-rule'
  if (rank <= 3)  return 'bg-callout text-[#8a6d00] border-[#e6d27a]'
  if (rank <= 10) return 'bg-paper text-graphite border-rule-strong'
  return 'bg-paper text-slate border-rule'
}

function RankBadge({ rank, total, scopeLabel }) {
  if (rank == null) return null
  const cls = rankBadgeClass(rank)
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-sm border ${cls}`}
    >
      <span className="font-bold">#{rank}</span>
      <span className="opacity-60">of {total}</span>
      <span className="text-ash">·</span>
      <span className="truncate max-w-[110px]">{scopeLabel}</span>
    </span>
  )
}

function DriverRow({ label, value, color, narrative, isOpen, onToggle, leagueRank, cityRank, league, city }) {
  const pct = Math.max(0, Math.min(100, (value / 10) * 100))
  return (
    <div className="border-b border-rule last:border-0 py-1">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-3 px-2 -mx-2 flex items-center gap-4 hover:bg-paper rounded-sm transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[11px] flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-90 text-ink' : 'text-ash'
          }`}
          aria-hidden="true"
        >
          ▶
        </span>
        <span className="text-base font-semibold text-ink w-32 flex-shrink-0">{label}</span>
        <div className="flex-1 h-2 bg-rule rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-700"
            style={{ width: `${pct}%`, background: color }}
          />
        </div>
        <span className="font-mono text-2xl font-bold w-16 text-right flex-shrink-0 text-ink">
          {value}
          <span className="text-sm text-ash font-normal">/10</span>
        </span>
      </button>

      {(leagueRank || cityRank) && (
        <div className="pl-9 pr-2 pb-2 flex flex-wrap gap-2">
          {leagueRank && <RankBadge rank={leagueRank.rank} total={leagueRank.total} scopeLabel={league} />}
          {cityRank && <RankBadge rank={cityRank.rank} total={cityRank.total} scopeLabel={city} />}
        </div>
      )}

      {isOpen && (
        <div className="pb-3 pl-9 pr-2 animate-fade-in">
          <p
            className={`text-sm leading-relaxed border-l-2 pl-4 ${
              narrative ? 'text-graphite' : 'text-slate italic'
            }`}
            style={{ borderColor: color }}
          >
            {narrative || 'Narrative not yet researched for this driver.'}
          </p>
        </div>
      )}
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <div className="mb-3">
      <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate">
        {children}
      </div>
      <div className="h-px bg-rule mt-1.5" />
    </div>
  )
}

function StatRow({ label, value }) {
  if (value == null || value === '') return null
  return (
    <div className="flex items-baseline justify-between gap-3 py-2 border-b border-rule last:border-0">
      <span className="text-xs text-slate flex-shrink-0">{label}</span>
      <span className="text-sm text-ink text-right">{value}</span>
    </div>
  )
}

function KpiBlock({ label, value, sub, valueClass = 'text-ink' }) {
  return (
    <div className="px-4 py-4 border-r border-rule last:border-r-0 flex-1 min-w-0">
      <div className="font-mono text-[10px] text-slate tracking-widest uppercase mb-2">{label}</div>
      <div className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${valueClass}`}>
        {value}
      </div>
      {sub && <div className="font-mono text-[10px] text-ash mt-1">{sub}</div>}
    </div>
  )
}

function CompositionTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const p = payload[0].payload
  return (
    <div className="bg-white border border-rule rounded-sm px-3 py-2 text-xs shadow-card">
      <div className="font-semibold text-ink mb-0.5">{p.name}</div>
      <div className="font-mono text-base font-bold" style={{ color: p.color }}>{p.pct}%</div>
      <div className="font-mono text-[10px] text-slate mt-0.5">Driver score: {p.score}/10</div>
    </div>
  )
}

// % of valuation explained by a team's top-2 drivers, normalized across the 5 scores
function topTwoShare(t) {
  const ds = t?.valuationDrivers || {}
  const scores = DRIVER_DEFS.map((d) => ds[d.key] ?? 0)
  const total = scores.reduce((s, v) => s + v, 0)
  if (total <= 0) return 0
  const sorted = [...scores].sort((a, b) => b - a)
  return (sorted[0] + sorted[1]) / total
}

function ordinalSuffix(rank) {
  if (rank === 1) return 'highest'
  if (rank === 2) return 'second-highest'
  if (rank === 3) return 'third-highest'
  if (rank === 4) return 'fourth-highest'
  if (rank === 5) return 'fifth-highest'
  return null
}

function ValuationComposition({ team }) {
  const drivers = team.valuationDrivers || {}
  const totalScore = DRIVER_DEFS.reduce((s, d) => s + (drivers[d.key] ?? 0), 0)

  // Round-robin so the 5 percentages sum to exactly 100
  const raw = DRIVER_DEFS.map((d) => ({
    name: d.label,
    key: d.key,
    score: drivers[d.key] ?? 0,
    color: d.color,
    exact: totalScore > 0 ? ((drivers[d.key] ?? 0) / totalScore) * 100 : 0,
  }))
  const floored = raw.map((r) => ({ ...r, pct: Math.floor(r.exact) }))
  let leftover = 100 - floored.reduce((s, d) => s + d.pct, 0)
  // distribute leftover to entries with the largest fractional remainder
  const byRemainder = [...floored]
    .map((d, i) => ({ idx: i, frac: d.exact - d.pct }))
    .sort((a, b) => b.frac - a.frac)
  for (let i = 0; i < leftover; i++) {
    floored[byRemainder[i % byRemainder.length].idx].pct += 1
  }
  const data = floored

  // Top-2 by score for the interpretive sentence
  const sorted = [...data].sort((a, b) => b.score - a.score)
  const top1 = sorted[0]
  const top2 = sorted[1]
  const top2Pct = top1.pct + top2.pct

  // League ranking — how concentrated this team's top-2 is vs. peers
  const peers = allTeams.filter((t) => t.league === team.league && t.name !== team.name)
  const myShare = topTwoShare(team)
  const higherCount = peers.filter((t) => topTwoShare(t) > myShare + 0.0005).length
  const rank = higherCount + 1
  const ordinal = ordinalSuffix(rank)

  const concentrationClause = ordinal
    ? ` — the ${ordinal} combined share in the ${team.league}.`
    : '.'
  const sentence = `For the ${team.name}, ${top1.name} and ${top2.name} account for ~${top2Pct}% of their estimated valuation${concentrationClause}`

  return (
    <section>
      <SectionHeader>What Makes Up This Valuation?</SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:items-center">
        {/* Donut */}
        <div className="md:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data}
                dataKey="pct"
                nameKey="name"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={1.5}
                stroke="#ffffff"
                strokeWidth={2}
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
              <Tooltip content={<CompositionTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Side legend — sorted by share, descending */}
        <div className="md:col-span-3">
          <div className="space-y-3">
            {sorted.map((d) => (
              <div key={d.key} className="flex items-center gap-3 pb-2 border-b border-rule last:border-0 last:pb-0">
                <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.color }} />
                <span className="text-sm text-ink flex-1">{d.name}</span>
                <span className="font-mono text-base font-bold text-ink">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-base text-graphite leading-relaxed font-serif italic border-l-4 border-ink pl-5">
        {sentence}
      </p>
    </section>
  )
}

function fmtPayroll(p) {
  if (p == null) return '—'
  if (p >= 1000) return `$${(p / 1000).toFixed(2)}B`
  return `$${p.toFixed(1)}M`
}

function PayrollInvestment({ team, enrichment }) {
  const payroll = team.payroll
  const ratio = team.payrollToValuation
  const year = team.payrollYear
  const source = team.payrollSource

  // League peers with payroll data
  const leaguePeers = allTeams.filter(t => t.league === team.league && t.payroll != null)
  const sortedByPayroll = [...leaguePeers].sort((a, b) => b.payroll - a.payroll)
  const rank = payroll != null
    ? sortedByPayroll.findIndex(t => t.name === team.name) + 1
    : null
  const leagueAvg = leaguePeers.length > 0
    ? leaguePeers.reduce((s, t) => s + t.payroll, 0) / leaguePeers.length
    : null
  const ratioPeers = leaguePeers.filter(t => t.payrollToValuation != null)
  const avgRatio = ratioPeers.length > 0
    ? ratioPeers.reduce((s, t) => s + t.payrollToValuation, 0) / ratioPeers.length
    : null

  // % above/below league average payroll
  const pctVsAvg = (payroll != null && leagueAvg != null && leagueAvg > 0)
    ? Math.round(((payroll / leagueAvg) - 1) * 100)
    : null

  // Top 3 highest-paid players
  const allContracts = enrichment?.onField?.starContracts ?? []
  const topPaid = [...allContracts]
    .filter(c => typeof c.aav === 'number' && c.aav > 0)
    .sort((a, b) => b.aav - a.aav)
    .slice(0, 3)

  // One-line interpretation comparing this team's ratio to league average
  const interpretation = (() => {
    if (ratio == null || avgRatio == null) return null
    const direction = ratio >= avgRatio ? 'above' : 'below'
    return `Player costs represent ${ratio.toFixed(1)}% of franchise value, ${direction} the ${team.league} average of ${avgRatio.toFixed(1)}%.`
  })()

  if (payroll == null) {
    return (
      <section>
        <SectionHeader>Payroll &amp; Player Investment</SectionHeader>
        <p className="text-sm text-slate italic">
          Payroll data not available for this team.
        </p>
      </section>
    )
  }

  // Comparison bar: width = team payroll / league max
  const leagueMax = sortedByPayroll[0]?.payroll || payroll
  const teamWidth = (payroll / leagueMax) * 100
  const avgWidth = leagueAvg != null ? (leagueAvg / leagueMax) * 100 : null

  return (
    <section>
      <SectionHeader>Payroll &amp; Player Investment</SectionHeader>

      {/* Three-up KPI strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-rule mb-6">
        <div className="bg-white p-4">
          <div className="font-mono text-[10px] tracking-widest uppercase text-slate mb-2">
            Total Payroll {year && <span className="text-ash">· {year}</span>}
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            {fmtPayroll(payroll)}
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="font-mono text-[10px] tracking-widest uppercase text-slate mb-2">
            Rank in {team.league}
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            #{rank}<span className="text-base text-slate font-normal"> of {leaguePeers.length}</span>
          </div>
        </div>
        <div className="bg-white p-4 col-span-2 sm:col-span-1">
          <div className="font-mono text-[10px] tracking-widest uppercase text-slate mb-2">
            vs League Average
          </div>
          {pctVsAvg != null ? (
            <>
              <div className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${pctVsAvg > 0 ? 'text-[#0a7d2a]' : pctVsAvg < 0 ? 'text-[#b91c1c]' : 'text-ink'}`}>
                {pctVsAvg > 0 ? '+' : ''}{pctVsAvg}%
              </div>
              <div className="font-mono text-[10px] text-ash mt-1">
                avg {fmtPayroll(leagueAvg)}
              </div>
            </>
          ) : (
            <div className="font-mono text-2xl text-ash">—</div>
          )}
        </div>
      </div>

      {/* Spending bar — visual position vs. league */}
      {avgWidth != null && (
        <div className="mb-6">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-slate mb-2">
            <span>League Spending Range</span>
            <span className="text-ash normal-case tracking-normal">
              max {fmtPayroll(leagueMax)}
            </span>
          </div>
          <div className="relative h-7 bg-paper border border-rule rounded-sm overflow-hidden">
            {/* league avg marker */}
            <div
              className="absolute top-0 bottom-0 border-l-2 border-dashed border-slate"
              style={{ left: `${avgWidth}%` }}
              aria-label="league average"
            />
            {/* team's payroll bar */}
            <div
              className="absolute top-0 bottom-0 bg-ink/85 transition-all"
              style={{ width: `${teamWidth}%` }}
            />
            {/* labels overlaid */}
            <div className="absolute inset-0 flex items-center justify-between px-2 font-mono text-[10px] font-bold uppercase">
              <span className="text-white relative z-10">{team.name}</span>
              <span className="text-slate">league avg</span>
            </div>
          </div>
        </div>
      )}

      {/* Interpretation sentence */}
      {interpretation && (
        <p className="text-sm text-graphite leading-relaxed font-serif italic border-l-2 border-ink pl-4 mb-6">
          {interpretation}
        </p>
      )}

      {/* Top 3 highest-paid players */}
      {topPaid.length > 0 && (
        <div>
          <div className="font-mono text-[10px] tracking-widest uppercase text-slate mb-3">
            Highest-Paid Players
          </div>
          <div className="border border-rule">
            {topPaid.map((c, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-4 ${i < topPaid.length - 1 ? 'border-b border-rule' : ''}`}
              >
                <div className="font-mono text-xs font-bold text-slate w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-ink truncate">{c.player}</div>
                  {c.position && (
                    <div className="font-mono text-[10px] text-slate tracking-widest uppercase mt-0.5">
                      {c.position}
                    </div>
                  )}
                </div>
                <div className="font-mono text-base font-bold text-ink whitespace-nowrap">
                  ${c.aav}M<span className="text-slate font-normal text-xs">/yr</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {source && (
        <p className="mt-4 font-mono text-[10px] tracking-wider uppercase text-ash">
          Source: {source}
        </p>
      )}
    </section>
  )
}

function StadiumHero({ team }) {
  const images = getTeamImages(team.name)
  const stadium = images?.stadiumUrl
  const logo = images?.logoUrl
  const accent = LEAGUE_ACCENT[team.league] || '#1a1a1a'

  return (
    <div>
      <div className="relative h-[260px] sm:h-[300px] overflow-hidden bg-rule">
        {stadium ? (
          <img
            src={stadium}
            alt={`${team.stadiumName || 'Stadium'}, home of the ${team.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate font-mono text-[10px] tracking-widest uppercase">
            Photo unavailable
          </div>
        )}
        {/* Logo overlay — circular, anchored bottom-right */}
        {logo && (
          <div
            className="absolute -bottom-6 right-6 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full p-2.5 shadow-card border border-rule"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
          >
            <img
              src={logo}
              alt={`${team.name} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => {
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.style.display = 'none'
                }
              }}
            />
          </div>
        )}
      </div>

      {/* Photo caption — newspaper style */}
      <div className="px-6 sm:px-8 pt-3 pb-2 border-b border-rule">
        <p className="text-[11px] text-slate italic leading-relaxed">
          <span className="font-semibold not-italic uppercase tracking-wider text-ash mr-1.5" style={{ color: accent }}>
            {team.league}
          </span>
          {team.stadiumName || 'Home stadium'} · {team.city || '—'}
        </p>
      </div>
    </div>
  )
}

export default function TeamDetailPanel({ team, enrichment, onClose }) {
  const [openDriver, setOpenDriver] = useState(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  useEffect(() => {
    setOpenDriver(null)
  }, [team.name])

  const venue = enrichment?.stadium || enrichment?.arena
  const venueYearOpened = venue?.yearBuilt ?? venue?.yearOpened
  const isVenueArena = !!enrichment?.arena
  const nonGameRevenue = venue?.nonGameRevenue ?? venue?.nonArenaRevenue
  const newVenuePlans = venue?.newStadiumPlans ?? venue?.newArenaPlans
  const analystNotes = enrichment?.analystNotes || team.oneLiner
  const transactions = enrichment?.transactions ?? []
  const valuationHistory = (enrichment?.valuationHistory ?? []).slice().sort((a, b) => a.year - b.year)
  const ownership = enrichment?.ownership
  const media = enrichment?.media
  const accent = LEAGUE_ACCENT[team.league] || '#1a1a1a'

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/40 animate-backdrop-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Right-sliding panel */}
      <aside
        role="dialog"
        aria-label={`${team.name} valuation profile`}
        aria-modal="true"
        className="relative w-full sm:max-w-[680px] lg:max-w-[820px] h-full bg-white border-l border-rule shadow-modal overflow-hidden flex flex-col animate-drawer-in"
      >
        {/* Floating close button (top-right) — sits over the photo */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-ink bg-white/90 hover:bg-white rounded-full transition-colors text-lg border border-rule shadow-card"
          aria-label="Close panel"
        >
          ✕
        </button>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {/* Stadium photo banner with caption */}
          <StadiumHero team={team} />

          {/* Headline section */}
          <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-rule">
            <div
              className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold mb-2"
              style={{ color: accent }}
            >
              {team.league} Franchise
            </div>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
              {team.name}
            </h2>
            <p className="text-sm text-graphite mt-3 leading-relaxed">
              {analystNotes || `Among the most valuable franchises in the ${team.league}.`}
            </p>
          </div>

          {/* KPI strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-rule">
            <KpiBlock
              label="Valuation"
              value={`$${team.currentValuation}B`}
              sub={team.valuationYear?.toString()}
              valueClass="text-ink"
            />
            <KpiBlock label="1Y Change" value={fmtGrowth(team.oneYearGrowth)}   valueClass={`${growthColor(team.oneYearGrowth)} text-2xl sm:text-3xl`} />
            <KpiBlock label="5Y Change" value={fmtGrowth(team.fiveYearGrowth)}  valueClass={`${growthColor(team.fiveYearGrowth)} text-2xl sm:text-3xl`} />
            <KpiBlock label="10Y Change" value={fmtGrowth(team.tenYearGrowth)}  valueClass={`${growthColor(team.tenYearGrowth)} text-2xl sm:text-3xl`} />
            <KpiBlock
              label={isVenueArena ? 'Arena' : 'Stadium'}
              value={team.ownsStadium ? 'Owned' : 'Tenant'}
              sub={team.ownsStadium ? '↑ Real estate upside' : 'Lease structure'}
              valueClass={team.ownsStadium ? 'text-[#0a7d2a] text-xl sm:text-2xl' : 'text-graphite text-xl sm:text-2xl'}
            />
          </div>

          {/* Body sections */}
          <div className="px-6 sm:px-8 py-8 space-y-10">
            {/* Composition donut — what % of the valuation each driver explains */}
            <ValuationComposition team={team} />

            {/* Valuation history */}
            {valuationHistory.length > 0 && (
              <section>
                <SectionHeader>Valuation History · Forbes ($B)</SectionHeader>
                <div className="bg-white">
                  <ValuationHistoryChart history={valuationHistory} />
                  <div className="mt-3 flex items-center gap-5 text-[10px] font-mono text-slate tracking-wider uppercase">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-ink" /> Cited
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent" /> Estimated
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* Driver breakdown */}
            <section>
              <SectionHeader>Valuation Drivers · Click for detail</SectionHeader>
              <div>
                {DRIVER_DEFS.map(({ label, key, color }) => (
                  <DriverRow
                    key={key}
                    label={label}
                    value={team.valuationDrivers[key]}
                    color={color}
                    narrative={enrichment?.factorNarratives?.[key]}
                    isOpen={openDriver === key}
                    onToggle={() => {
                      const wasOpen = openDriver === key
                      setOpenDriver(wasOpen ? null : key)
                      if (!wasOpen) trackFactorExpanded(label, team.name)
                    }}
                    leagueRank={team.rankings?.league?.[key]}
                    cityRank={team.rankings?.city?.[key]}
                    league={team.league}
                    city={team.city}
                  />
                ))}
              </div>
            </section>

            {/* Analyst thesis */}
            {analystNotes && (
              <section>
                <SectionHeader>Analyst Thesis</SectionHeader>
                <blockquote className="border-l-4 pl-5 py-1 text-base text-graphite leading-relaxed font-serif italic" style={{ borderColor: accent }}>
                  "{analystNotes}"
                </blockquote>
              </section>
            )}

            {/* Ownership */}
            {ownership && (
              <section>
                <SectionHeader>Ownership</SectionHeader>
                <div className="text-base font-semibold text-ink mb-1">{ownership.primaryOwner}</div>
                {ownership.ownerNetWorth && (
                  <div className="text-xs text-slate mb-3">Net worth: {ownership.ownerNetWorth}</div>
                )}
                {ownership.ownerBackground && (
                  <p className="text-sm text-graphite leading-relaxed mb-4">{ownership.ownerBackground}</p>
                )}
                <div className="bg-paper border border-rule rounded-sm p-4">
                  <StatRow label="Acquired" value={ownership.acquisitionYear} />
                  <StatRow label="Purchase price" value={fmtMoney(ownership.acquisitionPrice)} />
                  <StatRow label="Current value" value={fmtMoney(ownership.currentValuation)} />
                  <StatRow label="Implied return" value={ownership.impliedReturn} />
                </div>

                {ownership.ownershipGroup?.length > 0 && (() => {
                  const group = ownership.ownershipGroup
                  const withPct = group.filter((m) => typeof m.pct === 'number' && m.pct > 0)
                  const showDonut = withPct.length >= 2
                  return (
                    <div className="mt-5">
                      <div className="font-mono text-[10px] text-slate tracking-widest uppercase mb-3">Ownership Group</div>
                      {showDonut && (
                        <div className="bg-paper border border-rule rounded-sm p-4 mb-4">
                          <OwnershipDonut group={group} />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-rule">
                            {withPct.map((m, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs">
                                <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: OWNERSHIP_COLORS[i % OWNERSHIP_COLORS.length] }} />
                                <span className="text-graphite truncate">{m.name}</span>
                                <span className="text-slate font-mono ml-auto flex-shrink-0">{m.pct}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="space-y-2">
                        {group.map((m, i) => (
                          <div key={i} className="flex items-baseline justify-between gap-3 text-sm py-2 border-b border-rule last:border-0">
                            <span className="text-ink font-medium">{m.name}</span>
                            <span className="text-slate text-xs">
                              {m.role}{m.pct != null && ` · ${m.pct}%`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </section>
            )}

            {/* Stadium / Arena */}
            <section>
              <SectionHeader>{isVenueArena ? 'Arena' : 'Stadium'}</SectionHeader>
              <div className="text-base font-semibold text-ink">{venue?.name || team.stadiumName}</div>
              <div className="text-xs text-slate mt-1 mb-4">
                {team.ownsStadium
                  ? 'Team owns or controls the venue — real estate upside accrues to the franchise'
                  : 'Team is a tenant — venue revenue captured by separate landlord entity'}
              </div>
              {venue && (
                <div className="bg-paper border border-rule rounded-sm p-4">
                  <StatRow label="Opened" value={venueYearOpened} />
                  <StatRow label="Capacity" value={venue.capacity?.toLocaleString()} />
                  {venue.publicSubsidy != null && <StatRow label="Public subsidy" value={`$${venue.publicSubsidy}M`} />}
                  {venue.privateFinancing != null && <StatRow label="Private financing" value={`$${venue.privateFinancing}M`} />}
                  {venue.namingRightsDeal && (
                    <StatRow
                      label="Naming rights"
                      value={typeof venue.namingRightsDeal === 'string' ? venue.namingRightsDeal : `${venue.namingRightsDeal.sponsor}${venue.namingRightsDeal.annualValue_M ? ` · $${venue.namingRightsDeal.annualValue_M}M/yr` : ''}`}
                    />
                  )}
                </div>
              )}
              {nonGameRevenue && (
                <p className="text-sm text-graphite leading-relaxed mt-4">{nonGameRevenue}</p>
              )}
              {newVenuePlans && (
                <div className="mt-4 bg-callout border-l-4 border-accent p-4 rounded-sm">
                  <div className="font-mono text-[10px] text-accent-dark tracking-widest uppercase mb-1 font-bold">
                    New {isVenueArena ? 'arena' : 'stadium'} plans
                  </div>
                  <p className="text-sm text-graphite leading-relaxed">{newVenuePlans}</p>
                </div>
              )}
            </section>

            {/* Transactions */}
            {transactions.length > 0 && (
              <section>
                <SectionHeader>Transaction History</SectionHeader>
                <div className="space-y-3">
                  {transactions.map((tx, i) => (
                    <div key={i} className="border-l-2 border-ink pl-4 py-1">
                      <div className="font-mono text-sm font-bold text-ink">
                        {tx.year} · {fmtMoney(tx.price)}
                      </div>
                      <div className="text-sm text-graphite mt-1">
                        <span className="text-slate">Buyer:</span> {tx.buyer}
                      </div>
                      {tx.seller && (
                        <div className="text-sm text-graphite">
                          <span className="text-slate">Seller:</span> {tx.seller}
                        </div>
                      )}
                      {tx.notes && <p className="text-xs text-slate leading-relaxed mt-1.5">{tx.notes}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Media */}
            {media && (
              <section>
                <SectionHeader>Media</SectionHeader>
                <div className="bg-paper border border-rule rounded-sm p-4">
                  {media.localTVDeal && <StatRow label="Local TV" value={media.localTVDeal} />}
                  {media.streamingNotes && <StatRow label="Streaming" value={media.streamingNotes} />}
                  {media.nationalShareNote && <StatRow label="National share" value={media.nationalShareNote} />}
                </div>
              </section>
            )}

            {/* Payroll & Player Investment — total payroll, league rank,
                comparison to average, top-3 paid players, ratio interpretation */}
            <PayrollInvestment team={team} enrichment={enrichment} />

            {/* Classification */}
            <section>
              <SectionHeader>Classification</SectionHeader>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Market', value: team.marketSize },
                  { label: 'Media',  value: team.mediaRightsTier },
                  { label: 'Brand',  value: team.brandStrength },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-paper border border-rule rounded-sm p-3">
                    <div className="font-mono text-[9px] text-slate tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-sm font-semibold text-ink capitalize">{value}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </aside>
    </div>
  )
}
