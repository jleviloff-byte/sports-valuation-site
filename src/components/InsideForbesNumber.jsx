import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getTeamImages } from '../../data/images.js'
import {
  COMPONENTS, VERDICT, leagueStatus, teamBreakdown,
  componentExplanation, verdictReason, sameMarketCallouts,
} from '../utils/forbesBreakdown.js'

const fmtB = (v) => (v == null ? '—' : Math.abs(v) >= 1 ? `$${Math.abs(v).toFixed(2)}B` : `$${Math.round(Math.abs(v) * 1000)}M`)

const VERDICT_CLASS = {
  generous:     'border-accent text-accent-dark bg-accent-soft',
  onMark:       'border-rule-strong text-graphite bg-white',
  conservative: 'border-ink text-ink bg-white',
}

export function VerdictLabel({ verdict }) {
  if (!verdict) return null
  return (
    <span className={`inline-flex items-center font-mono text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-sm border ${VERDICT_CLASS[verdict]}`}>
      {VERDICT[verdict]}
    </span>
  )
}

// Horizontal league range: min to max, median tick, every team as a dot (hover
// for name and value), this team's logo at its value.
export function RangeBar({ stats, teamId, logoUrl, teamName }) {
  const [hover, setHover] = useState(null)
  const span = stats.max - stats.min || 1
  const pos = (v) => `${((v - stats.min) / span) * 100}%`
  const me = stats.rows.find((r) => r.id === teamId)
  return (
    <div className="relative pt-7 pb-5 select-none" onMouseLeave={() => setHover(null)}>
      <div className="relative h-2 bg-rule rounded-full mx-3">
        {/* median tick */}
        <div className="absolute -top-2 h-6 w-px bg-ink" style={{ left: pos(stats.median) }} aria-hidden="true" />
        <div className="absolute top-5 -translate-x-1/2 font-mono text-[9px] text-slate tracking-wider uppercase whitespace-nowrap" style={{ left: pos(stats.median) }}>
          Median {fmtB(stats.median)}
        </div>
        {stats.rows.map((r) => (
          <button
            key={r.id}
            type="button"
            aria-label={`${r.name}: ${fmtB(r.value)}`}
            onMouseEnter={() => setHover(r)}
            onFocus={() => setHover(r)}
            onClick={() => setHover(r)}
            className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-150 ${
              r.id === teamId ? 'w-0 h-0' : 'w-2 h-2 bg-ash hover:bg-accent'
            }`}
            style={{ left: pos(r.value) }}
          />
        ))}
        {me && (
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-accent shadow-card flex items-center justify-center overflow-hidden"
            style={{ left: pos(me.value) }}
            onMouseEnter={() => setHover(me)}
          >
            {logoUrl ? (
              <img src={logoUrl} alt={`${teamName} logo`} className="w-5 h-5 object-contain" loading="lazy" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-accent" />
            )}
          </div>
        )}
        {hover && (
          <div
            className="absolute -top-8 -translate-x-1/2 bg-ink text-white font-mono text-[10px] px-2 py-1 rounded-sm whitespace-nowrap z-10 pointer-events-none"
            style={{ left: pos(hover.value) }}
          >
            {hover.name} · {fmtB(hover.value)}
          </div>
        )}
      </div>
      <div className="flex justify-between mt-3 mx-3 font-mono text-[9px] text-ash">
        <span>{fmtB(stats.min)}</span>
        <span>{fmtB(stats.max)}</span>
      </div>
    </div>
  )
}

function SectionHeader({ children }) {
  return (
    <div className="mb-3">
      <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate">{children}</div>
      <div className="h-px bg-rule mt-1.5" />
    </div>
  )
}

export default function InsideForbesNumber({ team }) {
  const status = leagueStatus[team.league]
  if (status === 'no-components') {
    return (
      <section>
        <SectionHeader>Inside the Forbes Number</SectionHeader>
        <p className="text-sm text-slate italic">
          Forbes does not publish a component breakdown for this league.
        </p>
      </section>
    )
  }
  const tb = teamBreakdown(team)
  if (!tb) return null
  const { league, result, fb } = tb
  const logo = getTeamImages(team.name)?.logoUrl
  const callouts = sameMarketCallouts(team)

  return (
    <section>
      <SectionHeader>Inside the Forbes Number · {fb.year}</SectionHeader>
      <p className="text-sm text-graphite leading-relaxed mb-5">
        Forbes splits the {fmtB(fb.total)} into four pieces. Here is where each one sits in
        the {team.league}, and whether the fundamentals back it up.{' '}
        <Link to="/forbes-breakdown" className="font-semibold text-accent hover:text-accent-dark">League view →</Link>
      </p>
      <div className="space-y-6">
        {COMPONENTS.map(({ key, label }) => {
          const r = result[key]
          const st = league.stats[key]
          const reason = verdictReason(team, key, r, league)
          const expl = componentExplanation(team, key)
          return (
            <div key={key} className="border-b border-rule pb-5 last:border-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg font-bold text-ink">{label}</span>
                  <span className="font-mono text-base font-bold text-ink">{fmtB(r.value)}</span>
                  <span className="font-mono text-xs text-slate">{r.share != null ? `${Math.round(r.share * 100)}% of total` : ''}</span>
                </div>
                <VerdictLabel verdict={r.verdict} />
              </div>
              <RangeBar stats={st} teamId={team.id} logoUrl={logo} teamName={team.name} />
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-graphite">
                <span>Rank {r.rank} of {r.of} in {team.league}</span>
                <span>
                  {fmtB(r.vsMedian)} {r.vsMedian >= 0 ? 'above' : 'below'} league median
                </span>
              </div>
              {reason && <p className="text-xs text-slate mt-2">{reason}</p>}
              {expl && <p className="text-sm text-graphite leading-relaxed mt-2">{expl}</p>}
            </div>
          )
        })}
      </div>
      {callouts.map((c) => (
        <div key={c.rivalId} className="mt-5 bg-callout border-l-4 border-accent p-4 rounded-sm">
          <div className="font-mono text-[10px] text-accent-dark tracking-widest uppercase mb-1 font-bold">
            Same market, different number · vs {c.rivalName}
          </div>
          <p className="text-sm text-graphite leading-relaxed">{c.text}</p>
        </div>
      ))}
      {!fb.sumOk && fb.sumCheck != null && (
        <p className="font-mono text-[10px] text-accent-dark mt-3">
          Note: Forbes' four components sum to {Math.round((1 + fb.sumCheck) * 100)}% of its headline for this team.
        </p>
      )}
    </section>
  )
}
