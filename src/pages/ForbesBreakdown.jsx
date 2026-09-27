import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPONENTS, leagueStatus, breakdownByLeague, leagueAsOf, leagueNotes, fmtB, sharePct,
} from '../utils/forbesBreakdown.js'

const LEAGUES = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']
const SORTS = [
  { key: 'value', label: 'Value' },
  { key: 'share', label: 'Share of total' },
  { key: 'name', label: 'Team' },
]

function ComponentChart({ league, comp, sort }) {
  const lg = breakdownByLeague[league]
  const st = lg.stats[comp.key]
  const rows = st.rows.map((r) => ({ ...r, ...lg.results[r.id][comp.key] }))
  rows.sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name)
    if (sort === 'share') return b.share - a.share
    return b.value - a.value
  })
  const notes = leagueNotes(league, comp.key)
  return (
    <section className="mb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h2 className="font-serif text-2xl font-bold text-ink">{comp.label}</h2>
        <span className="font-mono text-[10px] text-slate tracking-wider uppercase">
          Median {fmtB(st.median)} · Range {fmtB(st.min)} to {fmtB(st.max)}
        </span>
      </div>
      <ul className="border-t-2 border-ink">
        {rows.map((r) => (
          <li key={r.id} className="grid grid-cols-[minmax(0,9rem)_1fr_4.5rem] sm:grid-cols-[12rem_1fr_5rem_4rem] items-center gap-3 py-1.5 border-b border-rule">
            <Link to={`/?team=${r.id}`} className="text-sm text-ink truncate hover:text-accent">{r.name}</Link>
            <div className="relative h-3 bg-paper">
              <div className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${(r.value / st.max) * 100}%` }} />
              <div className="absolute -top-0.5 -bottom-0.5 w-px bg-accent" style={{ left: `${(st.median / st.max) * 100}%` }} aria-hidden="true" title={`League median ${fmtB(st.median)}`} />
            </div>
            <span className="font-mono text-xs font-bold text-ink text-right">{fmtB(r.value)}</span>
            <span className="hidden sm:block font-mono text-[11px] text-slate text-right">{sharePct(r.share)}%</span>
          </li>
        ))}
      </ul>
      {notes && (
        <div className="mt-4 border-l-4 border-accent pl-4">
          <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-accent-dark mb-1">League notes</div>
          <p className="font-serif text-base text-graphite leading-relaxed">{notes}</p>
        </div>
      )}
    </section>
  )
}

export default function ForbesBreakdown() {
  const [league, setLeague] = useState('NFL')
  const [sort, setSort] = useState('value')
  const status = leagueStatus[league]
  const lg = breakdownByLeague[league]

  return (
    <main className="bg-paper">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Forbes, Unpacked</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-4xl sm:text-5xl">Inside the Forbes Number</h1>
        <div className="title-rule mb-8" />
        <p className="text-sm text-graphite max-w-3xl mb-6">
          Forbes' Sport, Market, Stadium and Brand values for every team in a league, with league notes under each chart.{' '}
          <Link to="/methodology#forbes-breakdown" className="font-semibold text-accent hover:text-accent-dark">How to read it →</Link>
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div role="tablist" aria-label="League" className="inline-flex border border-ink rounded-sm overflow-hidden">
            {LEAGUES.map((l) => (
              <button
                key={l}
                role="tab"
                aria-selected={league === l}
                type="button"
                onClick={() => setLeague(l)}
                className={`px-3 sm:px-4 py-2 font-mono text-[11px] font-bold tracking-widest border-r border-ink last:border-r-0 transition-colors ${
                  league === l ? 'bg-accent text-white' : 'bg-white text-graphite hover:bg-paper'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          {lg && (
            <label className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-slate">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-rule-strong bg-white px-2 py-1.5 text-[11px] text-ink font-mono"
              >
                {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
            </label>
          )}
        </div>

        {!lg && (
          <p className="text-graphite font-serif text-lg border-l-4 border-accent pl-4">
            {status === 'no-components'
              ? 'Forbes does not publish a component breakdown for this league.'
              : 'The Forbes component data for this league has not been loaded yet.'}
          </p>
        )}

        {lg && (
          <>
            <div className="flex flex-wrap items-center gap-4 mb-8 font-mono text-[10px] tracking-wider uppercase text-slate">
              <span className="text-ink">{league} breakdown as of {leagueAsOf(league)}</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-ink" /> Forbes value</span>
              <span className="flex items-center gap-1.5"><span className="w-px h-3 bg-accent" /> League median</span>
            </div>
            {COMPONENTS.map((c) => (
              <ComponentChart key={c.key} league={league} comp={c} sort={sort} />
            ))}
          </>
        )}
      </section>
    </main>
  )
}
