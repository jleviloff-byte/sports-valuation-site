import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPONENTS, VERDICT, leagueStatus, breakdownByLeague, residualTable,
} from '../utils/forbesBreakdown.js'
import { VerdictLabel } from '../components/InsideForbesNumber.jsx'

const LEAGUES = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']
const fmtB = (v) => (v == null ? '—' : Math.abs(v) >= 1 ? `$${Math.abs(v).toFixed(2)}B` : `$${Math.round(Math.abs(v) * 1000)}M`)
const SORTS = [
  { key: 'value', label: 'Value' },
  { key: 'residual', label: 'Residual' },
  { key: 'name', label: 'Team' },
]
const VERDICT_BAR = { generous: '#e8600a', onMark: '#9b9b9b', conservative: '#1a1a1a' }

function ComponentChart({ league, comp, sort }) {
  const lg = breakdownByLeague[league]
  const st = lg.stats[comp.key]
  const rows = st.rows.map((r) => ({ ...r, ...lg.results[r.id][comp.key] }))
  rows.sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name)
    if (sort === 'residual') return (b.residual ?? 0) - (a.residual ?? 0)
    return b.value - a.value
  })
  const model = lg.models[comp.key]
  return (
    <section className="mb-12">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h2 className="font-serif text-2xl font-bold text-ink">{comp.label}</h2>
        <span className="font-mono text-[10px] text-slate tracking-wider uppercase">
          Median {fmtB(st.median)} · Range {fmtB(st.min)} to {fmtB(st.max)}
        </span>
      </div>
      <p className="font-mono text-[10px] text-slate mb-3">
        {comp.key === 'sport'
          ? 'Test: distance from league median (flag beyond ±5%)'
          : model?.predictors?.length
            ? `Sanity model: ${model.predictors.map((p) => p.label).join(', ')} · R² ${model.r2} · n=${model.n}`
            : model?.note}
      </p>
      <ul className="border-t-2 border-ink">
        {rows.map((r) => (
          <li key={r.id} className="grid grid-cols-[minmax(0,9rem)_1fr_4.5rem] sm:grid-cols-[12rem_1fr_5rem_5.5rem] items-center gap-3 py-1.5 border-b border-rule">
            <Link to={`/?team=${r.id}`} className="text-sm text-ink truncate hover:text-accent">{r.name}</Link>
            <div className="relative h-3 bg-paper">
              <div
                className="absolute inset-y-0 left-0"
                style={{ width: `${(r.value / st.max) * 100}%`, background: VERDICT_BAR[r.verdict] || '#9b9b9b' }}
                title={r.verdict ? VERDICT[r.verdict] : ''}
              />
              <div className="absolute -top-0.5 -bottom-0.5 w-px bg-ink" style={{ left: `${(st.median / st.max) * 100}%` }} aria-hidden="true" />
            </div>
            <span className="font-mono text-xs font-bold text-ink text-right">{fmtB(r.value)}</span>
            <span className={`hidden sm:block font-mono text-[11px] text-right ${r.residual > 0 ? 'text-accent-dark' : 'text-graphite'}`}>
              {r.residual == null ? '—' : `${r.residual >= 0 ? '+' : '−'}${fmtB(r.residual)}`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function ForbesBreakdown() {
  const [league, setLeague] = useState('NFL')
  const [sort, setSort] = useState('value')
  const status = leagueStatus[league]
  const lg = breakdownByLeague[league]
  const off = useMemo(() => residualTable(league).filter((r) => r.flagged).slice(0, 25), [league])

  return (
    <main className="bg-paper">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Forbes, Unpacked</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-4xl sm:text-5xl">Inside the Forbes Number</h1>
        <div className="title-rule mb-8" />
        <p className="font-serif italic text-lg leading-relaxed text-graphite max-w-3xl mb-8">
          Forbes splits every franchise into Sport, Market, Stadium, and Brand. We line each piece
          up against the rest of the league and test it against the fundamentals that should drive it.
          Orange bars are where Forbes runs hot. Black bars are where it runs cold.{' '}
          <Link to="/methodology#forbes-breakdown" className="not-italic font-sans text-sm font-semibold text-accent hover:text-accent-dark">
            How the test works →
          </Link>
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
            <div className="flex flex-wrap gap-4 mb-8 font-mono text-[10px] tracking-wider uppercase text-slate">
              {Object.entries(VERDICT_BAR).map(([k, c]) => (
                <span key={k} className="flex items-center gap-1.5">
                  <span className="w-3 h-3" style={{ background: c }} /> {VERDICT[k]}
                </span>
              ))}
              <span className="flex items-center gap-1.5"><span className="w-px h-3 bg-ink" /> League median</span>
            </div>
            {COMPONENTS.map((c) => (
              <ComponentChart key={c.key} league={league} comp={c} sort={sort} />
            ))}

            <section className="mt-16">
              <h2 className="font-serif text-3xl font-bold text-ink mb-2">Where Forbes is off</h2>
              <p className="text-sm text-graphite mb-4">
                Every {league} team-component outside one standard deviation of what the proxies
                predict (Sport: beyond ±5% of the league median), largest first.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-sm border-y-2 border-ink">
                  <thead>
                    <tr className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate border-b border-ink">
                      <th className="text-left py-2 pr-3">Team</th>
                      <th className="text-left py-2 pr-3">Component</th>
                      <th className="text-right py-2 pr-3">Forbes</th>
                      <th className="text-right py-2 pr-3">Residual</th>
                      <th className="text-left py-2 pr-3">Verdict</th>
                      <th className="text-left py-2">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {off.map((r) => (
                      <tr key={`${r.id}-${r.component}`} className="border-b border-rule align-top">
                        <td className="py-2 pr-3">
                          <Link to={`/?team=${r.id}`} className="text-ink hover:text-accent font-semibold">{r.name}</Link>
                        </td>
                        <td className="py-2 pr-3 font-mono text-xs">{r.label}</td>
                        <td className="py-2 pr-3 font-mono text-xs text-right">{fmtB(r.value)}</td>
                        <td className="py-2 pr-3 font-mono text-xs text-right">
                          {r.residual >= 0 ? '+' : '−'}{fmtB(r.residual)}
                        </td>
                        <td className="py-2 pr-3"><VerdictLabel verdict={r.verdict} /></td>
                        <td className="py-2 text-xs text-graphite">{r.reason}</td>
                      </tr>
                    ))}
                    {!off.length && (
                      <tr><td colSpan={6} className="py-4 text-slate italic">Every component sits within one standard deviation of its proxies.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </section>
    </main>
  )
}
