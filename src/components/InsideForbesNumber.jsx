import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getTeamImages } from '../../data/images.js'
import {
  COMPONENTS, leagueStatus, teamBreakdown, leagueAsOf, fmtB, sharePct,
  componentCommentary, sportReadout, sameMarketCallouts, NET_SHARING_LEAGUES,
} from '../utils/forbesBreakdown.js'

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
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card border-2 border-accent shadow-card flex items-center justify-center overflow-hidden"
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
            className="absolute -top-8 -translate-x-1/2 bg-ink text-paper font-mono text-[10px] px-2 py-1 rounded-sm whitespace-nowrap z-10 pointer-events-none"
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

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, '') } catch { return url }
}

export function SourceLinks({ sources }) {
  if (!sources?.length) return null
  return (
    <p className="font-mono text-[10px] text-slate mt-1">
      Sources:{' '}
      {sources.map((u, i) => (
        <span key={u}>
          {i > 0 && ' · '}
          <a href={u} target="_blank" rel="noopener noreferrer" className="text-accent-dark hover:text-accent underline underline-offset-2">{hostOf(u)}</a>
        </span>
      ))}
    </p>
  )
}

function Commentary({ text }) {
  if (!text) return null
  return (
    <div className="mt-3 space-y-2">
      {[['Why', text.why], ['Peers', text.peers], ['Read', text.takeaway]].map(([label, body]) => body && (
        <p key={label} className="text-sm text-graphite leading-relaxed">
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-ink mr-2 align-middle">{label}</span>
          {body}
        </p>
      ))}
      <SourceLinks sources={text.sources} />
    </div>
  )
}

function NetSharingReadout({ readout }) {
  const tone = readout.position === 'Net payer' ? 'text-ink border-ink' : readout.position === 'Net receiver' ? 'text-accent-dark border-accent' : 'text-graphite border-rule-strong'
  return (
    <div className="mt-3 bg-paper border border-rule rounded-sm p-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-mono text-[9px] tracking-widest uppercase text-slate">Net revenue-sharing position</span>
        <span className={`font-mono text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border bg-card ${tone}`}>{readout.position}</span>
        <span className="font-mono text-xs text-graphite">
          {fmtB(readout.value)} vs league median {fmtB(readout.median)} ({readout.gap >= 0 ? '+' : '−'}{fmtB(readout.gap)})
        </span>
      </div>
      <p className="text-xs text-slate leading-relaxed mt-2">{readout.explainer}</p>
    </div>
  )
}

export default function InsideForbesNumber({ team }) {
  const status = leagueStatus[team.league]
  if (status === 'no-components') {
    return (
      <section>
        <SectionHeader>Inside the Forbes Number</SectionHeader>
        <p className="text-sm text-slate italic">Forbes does not publish a component breakdown for this league.</p>
      </section>
    )
  }
  const tb = teamBreakdown(team)
  if (!tb) return null
  const { league, result, fb } = tb
  const logo = getTeamImages(team.name)?.logoUrl
  const callouts = sameMarketCallouts(team)
  const asOf = leagueAsOf(team.league)
  const olderThanHeadline = fb.year < (team.valuationYear ?? fb.year)
  const readout = sportReadout(team)

  return (
    <section>
      <SectionHeader>Inside the Forbes Number · as of {asOf}</SectionHeader>
      <p className="text-sm text-graphite leading-relaxed mb-1">
        Forbes splits the {fmtB(fb.total)} {asOf} valuation into four pieces. The numbers are
        Forbes'. The commentary is ours, and every comparison is against {team.league} peers.{' '}
        <Link to="/forbes-breakdown" className="font-semibold text-accent hover:text-accent-dark">League view →</Link>
      </p>
      {olderThanHeadline && (
        <p className="font-mono text-[10px] text-accent-dark tracking-wider uppercase mb-4">
          Latest Forbes component split for the {team.league} is {asOf}; the headline uses a later figure.
        </p>
      )}
      <div className="space-y-6 mt-5">
        {COMPONENTS.map(({ key, label }) => {
          const r = result[key]
          const st = league.stats[key]
          const text = componentCommentary(team, key)
          return (
            <div key={key} className="border-b border-rule pb-5 last:border-0">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-lg font-bold text-ink">{label}</span>
                <span className="font-mono text-base font-bold text-ink">{fmtB(r.value)}</span>
                <span className="font-mono text-xs text-slate">{sharePct(r.share)}% of total</span>
              </div>
              <RangeBar stats={st} teamId={team.id} logoUrl={logo} teamName={team.name} />
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-graphite">
                <span>Rank {r.rank} of {r.of} in {team.league}</span>
                <span>{fmtB(r.vsMedian)} {r.vsMedian >= 0 ? 'above' : 'below'} league median</span>
              </div>
              {key === 'sport' && readout && <NetSharingReadout readout={readout} />}
              <Commentary text={text} />
            </div>
          )
        })}
      </div>
      {callouts.map((c) => (
        <div key={c.rivalId} className="mt-5 bg-paper border-l-4 border-accent p-4 rounded-sm">
          <div className="font-mono text-[10px] text-accent-dark tracking-widest uppercase mb-1 font-bold">
            Same market, different number · vs {c.rivalName}
          </div>
          <p className="text-sm text-graphite leading-relaxed">{c.text}</p>
        </div>
      ))}
      {NET_SHARING_LEAGUES.has(team.league) && (
        <p className="font-mono text-[10px] text-ash tracking-wider uppercase mt-4">
          Sport in {team.league === 'MLB' ? 'MLB' : `the ${team.league}`} is read as a net revenue-sharing position, not a flat share.
        </p>
      )}
    </section>
  )
}
