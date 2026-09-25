import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from 'recharts'
import allTeams from '../../data/allTeams.js'
import { transactions, lastUpdated } from '../../data/transactions.js'
import { getTeamImages } from '../../data/images.js'
import {
  fmtUSD, fmtDate, fmtStake, fmtPremium, dealAnchor,
  STATUS_LABEL, STATUS_PILL, LEAGUE_ACCENT, DRIVER_LABEL,
} from '../utils/dealFormat.js'
import { buildComps, dealDate, SUMMARY_WINDOW_MONTHS } from '../utils/comps.js'
import {
  trackRecentSalesToggle,
  trackRecentSalesExpand,
  trackRecentSalesOpenProfile,
} from '../utils/analytics.js'

const PER_TYPE = 15
const teamsById = Object.fromEntries(allTeams.map((t) => [t.id, t]))

function newestFirst(a, b) {
  return dealDate(b).localeCompare(dealDate(a))
}

const LEAGUE_ORDER = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']

function PremiumSummary() {
  const comps = useMemo(() => buildComps(teamsById, { months: SUMMARY_WINDOW_MONTHS }), [])
  const leagues = LEAGUE_ORDER.filter((l) => comps[l])
  return (
    <div className="border-y-2 border-ink mb-10">
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate pt-3 pb-2">
        Median premium to Forbes · last {SUMMARY_WINDOW_MONTHS} months
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-rule">
        {leagues.map((l) => (
          <div key={l} className="py-3 pr-3 border-b lg:border-b-0 border-rule">
            <div className="font-mono text-[10px] font-bold tracking-widest" style={{ color: LEAGUE_ACCENT[l] }}>{l}</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-lg font-bold text-accent-dark">{fmtPremium(comps[l].control.medianPremium)}</span>
              <span className="font-mono text-[9px] text-slate uppercase">control n={comps[l].control.n}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm font-bold text-graphite">{fmtPremium(comps[l].minority.medianPremium)}</span>
              <span className="font-mono text-[9px] text-slate uppercase">LP n={comps[l].minority.n}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate py-2 border-t border-rule">
        Premium = price (or implied LP mark) ÷ the latest Forbes value published before the deal, minus one.
        Holding-company deals and deferred tranches are excluded from the medians.
      </p>
    </div>
  )
}

function useDeals() {
  return useMemo(() => {
    const known = transactions.filter((t) => teamsById[t.teamId])
    const control = known.filter((t) => t.type === 'control').sort(newestFirst).slice(0, PER_TYPE)
    const minority = known.filter((t) => t.type === 'minority').sort(newestFirst).slice(0, PER_TYPE)
    return { control, minority, all: [...control, ...minority].sort(newestFirst) }
  }, [])
}

function Tag({ children, style, className = '' }) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[9px] font-bold tracking-[0.16em] uppercase px-1.5 py-0.5 rounded-sm border ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}

function StatusPill({ status }) {
  return (
    <span className={`inline-flex items-center font-mono text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${STATUS_PILL[status] || ''}`}>
      {STATUS_LABEL[status] || status}
    </span>
  )
}

function Logo({ team }) {
  const img = getTeamImages(team.name)
  const [failed, setFailed] = useState(false)
  if (!img?.logoUrl || failed) {
    return (
      <div className="w-10 h-10 rounded-full bg-paper border border-rule flex items-center justify-center font-mono text-[10px] text-slate">
        {team.league}
      </div>
    )
  }
  return (
    <img
      src={img.logoUrl}
      alt={`${team.name} logo`}
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      className="w-10 h-10 object-contain"
      onError={(e) => {
        if (img.logoUrlAlt && e.currentTarget.src !== img.logoUrlAlt) e.currentTarget.src = img.logoUrlAlt
        else setFailed(true)
      }}
    />
  )
}

function DetailRow({ label, children }) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-3 py-2 border-b border-rule last:border-0">
      <dt className="font-mono text-[10px] tracking-widest uppercase text-slate pt-0.5">{label}</dt>
      <dd className="text-sm text-ink">{children}</dd>
    </div>
  )
}

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, '') } catch { return url }
}

function SparkTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const p = payload[0].payload
  return (
    <div className="bg-white border border-rule rounded-sm px-2 py-1 text-[11px] shadow-card font-mono">
      {p.year} · {fmtUSD(p.price)}
    </div>
  )
}

function SaleTimeline({ team }) {
  const entries = [
    ...(team.formation
      ? [{
          year: team.formation.year,
          price: team.formation.price,
          buyer: team.formation.founder,
          label: 'Founded',
          isEstimated: team.formation.isEstimated,
        }]
      : []),
    ...team.saleHistory.map((s) => ({ ...s, label: s.price == null && /inherit/i.test(s.notes || '') ? 'Inherited' : 'Sale' })),
  ]
  const spark = entries.filter((e) => e.price != null)

  if (!entries.length) {
    return <p className="text-sm text-slate italic">Sale history not yet researched.</p>
  }

  return (
    <div>
      {spark.length >= 2 && (
        <div className="h-16 mb-4 -mx-1" aria-label="Sale price over time">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={spark} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
              <YAxis hide scale="log" domain={['auto', 'auto']} />
              <Tooltip content={<SparkTooltip />} cursor={false} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#1a1a1a"
                strokeWidth={1.5}
                dot={{ r: 2, fill: '#1a1a1a', stroke: '#1a1a1a' }}
                activeDot={{ r: 4, fill: '#e8600a', stroke: '#e8600a' }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="font-mono text-[9px] text-ash tracking-wider uppercase text-right">Log scale · nominal USD</div>
        </div>
      )}
      <ol className="flex md:flex-col gap-4 md:gap-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x">
        {entries.map((e, i) => (
          <li
            key={i}
            className="relative flex-shrink-0 w-44 md:w-auto snap-start md:pl-5 md:pb-4 md:border-l md:border-rule-strong md:last:border-transparent"
          >
            <span className="hidden md:block absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-ink" aria-hidden="true" />
            <div className="border-t-2 border-ink pt-2 md:border-0 md:pt-0">
              <div className="font-mono text-xs font-bold text-ink">
                {e.year} · {e.price != null ? fmtUSD(e.price) : 'Price n/a'}
                {e.isEstimated && <span className="ml-1 text-accent" title="Estimated">*</span>}
              </div>
              <div className="text-xs text-graphite leading-snug mt-0.5">
                <span className="text-slate">{e.label}:</span> {e.buyer || '—'}
              </div>
            </div>
          </li>
        ))}
      </ol>
      {entries.some((e) => e.isEstimated) && (
        <p className="font-mono text-[9px] text-ash tracking-wider uppercase mt-2">* Estimated / approximate figure</p>
      )}
    </div>
  )
}

function DealDetail({ deal, team, onOpenProfile }) {
  const multiple = deal.impliedRevenueMultiple
  const minority = deal.type === 'minority'
  return (
    <div className="px-4 sm:px-6 py-6 bg-paper border-t border-rule">
      <div className="grid grid-cols-3 border border-rule bg-white mb-6">
        <div className="p-3 sm:p-4 border-r border-rule">
          <div className="font-mono text-[9px] text-slate tracking-widest uppercase mb-1">{minority ? 'Implied team mark' : 'Price paid'}</div>
          <div className="font-mono text-lg sm:text-2xl font-bold text-ink">{fmtUSD(deal.valuation)}</div>
          {deal.isEstimated && <div className="font-mono text-[9px] text-accent-dark uppercase tracking-wider">Some terms estimated</div>}
        </div>
        <div className="p-3 sm:p-4 border-r border-rule">
          <div className="font-mono text-[9px] text-slate tracking-widest uppercase mb-1">Forbes at time of sale</div>
          <div className="font-mono text-lg sm:text-2xl font-bold text-ink">{fmtUSD(deal.forbesValueAtSale)}</div>
          {deal.forbesListYear && <div className="font-mono text-[9px] text-slate">{deal.forbesListYear} list</div>}
        </div>
        <div className="p-3 sm:p-4 bg-accent-soft">
          <div className="font-mono text-[9px] text-accent-dark tracking-widest uppercase mb-1">Premium to Forbes</div>
          <div className="font-mono text-lg sm:text-2xl font-bold text-accent-dark">{fmtPremium(deal.premiumToForbes)}</div>
          {deal.valuationScope !== 'team' && (
            <div className="font-mono text-[9px] text-accent-dark uppercase tracking-wider">Price covers {deal.valuationScope}</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="min-w-0">
          {deal.note && (
            <p className="text-sm text-ink border-l-4 border-ink pl-3 mb-5">{deal.note}</p>
          )}
          {deal.drivers.length > 0 && (
            <div className="mb-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-2">Why the price landed here</div>
              <ul className="space-y-3">
                {deal.drivers.map((d) => (
                  <li key={d.id}>
                    <span className="inline-flex font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-accent text-accent-dark bg-white">
                      {DRIVER_LABEL[d.id]}
                    </span>
                    <p className="text-sm text-graphite leading-relaxed mt-1">
                      {d.text}{' '}
                      <a href={d.source} target="_blank" rel="noopener noreferrer" className="text-[11px] text-accent-dark underline underline-offset-2">{hostOf(d.source)}</a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {deal.investmentCase && (
            <div className="mb-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-2">Investment case</div>
              <p className="font-serif text-base text-ink leading-relaxed">{deal.investmentCase.text}</p>
            </div>
          )}
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-2">Deal terms</div>
          <dl>
            <DetailRow label="Buyer">{deal.buyer}</DetailRow>
            <DetailRow label="Seller">{deal.seller || 'Not disclosed'}</DetailRow>
            <DetailRow label="Stake">{deal.stakePct != null ? fmtStake(deal.stakePct) : 'Not disclosed'}{deal.tranche ? ` · tranche ${deal.tranche} of 2` : ''}</DetailRow>
            <DetailRow label="Announced">{fmtDate(deal.dateAnnounced)}</DetailRow>
            <DetailRow label="Approved">{deal.dateApproved ? fmtDate(deal.dateApproved) : deal.status === 'contested' ? 'Contested' : 'Pending'}</DetailRow>
            <DetailRow label="Amount financed">{deal.amountFinanced != null ? fmtUSD(deal.amountFinanced) : 'Not disclosed'}</DetailRow>
            {multiple != null && (
              <DetailRow label="Revenue multiple">
                <span className="font-mono">{multiple}x</span>
                {deal.revenueYear && <span className="text-xs text-slate ml-2">{deal.revenueYear} revenue</span>}
              </DetailRow>
            )}
            <DetailRow label="Sources">
              <ul className="space-y-1">
                {deal.sources.map((url) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent-dark hover:text-accent underline underline-offset-2 break-all">
                      {hostOf(url)}
                    </a>
                  </li>
                ))}
              </ul>
            </DetailRow>
          </dl>
          {deal.details && <p className="text-xs text-slate leading-relaxed mt-3">{deal.details}</p>}
          <button
            type="button"
            onClick={onOpenProfile}
            className="mt-5 inline-flex items-center gap-2 border border-ink px-4 py-2 font-mono text-[10px] tracking-widest uppercase font-bold text-ink hover:bg-ink hover:text-white transition-colors"
          >
            View team profile →
          </button>
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate mb-2">
            {team.name} · Sale history
          </div>
          <SaleTimeline team={team} />
        </div>
      </div>
    </div>
  )
}

function DealRow({ deal, open, onToggle, onOpenProfile }) {
  const team = teamsById[deal.teamId]
  const accent = LEAGUE_ACCENT[team.league] || '#1a1a1a'
  const panelId = dealAnchor(deal)
  return (
    <li id={panelId} className="border-b border-rule scroll-mt-28">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full text-left px-2 sm:px-4 py-4 hover:bg-paper transition-colors grid grid-cols-[40px_1fr_auto] md:grid-cols-[40px_minmax(0,2.2fr)_1fr_1fr_0.7fr_auto_16px] items-center gap-x-4 gap-y-2"
      >
        <Logo team={team} />
        <div className="min-w-0">
          <div className="font-serif text-lg sm:text-xl font-bold text-ink leading-tight truncate">{team.name}</div>
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            <Tag style={{ color: accent, borderColor: accent }}>{team.league}</Tag>
            <Tag className={deal.type === 'control' ? 'bg-ink text-white border-ink' : 'text-graphite border-rule-strong'}>
              {deal.type === 'control' ? 'Control' : 'Minority'}
            </Tag>
            <span className="md:hidden font-mono text-[10px] text-slate">{fmtDate(dealDate(deal))}</span>
          </div>
        </div>
        <div className="hidden md:block font-mono text-xs text-slate">{fmtDate(dealDate(deal))}</div>
        <div className="text-right md:text-left">
          <div className="font-mono text-base sm:text-lg font-bold text-ink">{fmtUSD(deal.valuation)}</div>
          <div className="md:hidden font-mono text-[10px] text-slate">{fmtStake(deal.stakePct)} stake</div>
        </div>
        <div className="hidden md:block font-mono text-sm text-graphite">{fmtStake(deal.stakePct)}</div>
        <div className="col-start-2 md:col-start-auto justify-self-start md:justify-self-auto">
          <StatusPill status={deal.status} />
        </div>
        <span className={`hidden md:block text-[11px] transition-transform ${open ? 'rotate-90 text-ink' : 'text-ash'}`} aria-hidden="true">▶</span>
      </button>
      {open && (
        <div className="animate-fade-in">
          <DealDetail deal={deal} team={team} onOpenProfile={onOpenProfile} />
        </div>
      )}
    </li>
  )
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'control', label: 'Controlling' },
  { key: 'minority', label: 'Minority' },
]

export default function RecentSales() {
  const deals = useDeals()
  const [filter, setFilter] = useState('all')
  const [openKey, setOpenKey] = useState(null)
  const navigate = useNavigate()
  const { hash } = useLocation()
  const rows = deals[filter]

  function keyOf(d) {
    return d.key
  }

  // Deep link from a profile's Market check: /recent-sales#deal-... opens that row.
  useEffect(() => {
    if (!hash) return
    const target = deals.all.find((d) => `#${dealAnchor(d)}` === hash)
    if (!target) return
    setFilter('all')
    setOpenKey(target.key)
    setTimeout(() => document.getElementById(dealAnchor(target))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }, [hash, deals])

  return (
    <main className="bg-paper">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Deal Tracker</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-4xl sm:text-5xl">Recent Sales</h1>
        <p className="font-mono text-[10px] tracking-widest uppercase text-slate mt-3">
          Last updated: {fmtDate(lastUpdated)}
        </p>
        <div className="title-rule mb-8" />
        <p className="font-serif italic text-lg leading-relaxed text-graphite max-w-3xl mb-8">
          Forbes publishes a number. Buyers write a check. This is the gap between them: the{' '}
          {PER_TYPE} most recent control sales and {PER_TYPE} most recent minority (LP) stakes
          across the six leagues, each measured against the Forbes value on the day it was announced.{' '}
          <Link to="/methodology#sale-prices" className="not-italic font-sans text-sm font-semibold text-accent hover:text-accent-dark">
            Why prices differ →
          </Link>
        </p>
        <PremiumSummary />

        <div role="tablist" aria-label="Deal type" className="inline-flex border border-ink rounded-sm overflow-hidden mb-8">
          {FILTERS.map((f) => {
            const active = filter === f.key
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => {
                  if (f.key === filter) return
                  setFilter(f.key)
                  setOpenKey(null)
                  trackRecentSalesToggle(f.key)
                }}
                className={`px-4 sm:px-5 py-2.5 font-mono text-[11px] font-bold tracking-widest uppercase transition-colors border-r border-ink last:border-r-0 ${
                  active ? 'bg-accent text-white' : 'bg-white text-graphite hover:bg-paper'
                }`}
              >
                {f.label} <span className={active ? 'opacity-90' : 'text-ash'}>({deals[f.key].length})</span>
              </button>
            )
          })}
        </div>

        <div className="hidden md:grid grid-cols-[40px_minmax(0,2.2fr)_1fr_1fr_0.7fr_auto_16px] gap-x-4 px-4 pb-2 border-b-2 border-ink font-mono text-[9px] tracking-[0.2em] uppercase text-slate">
          <span />
          <span>Team</span>
          <span>Announced</span>
          <span>Valuation</span>
          <span>Stake</span>
          <span>Status</span>
          <span />
        </div>
        <ul className="border-t-2 border-ink md:border-t-0">
          {rows.map((d) => {
            const k = keyOf(d)
            const open = openKey === k
            return (
              <DealRow
                key={k}
                deal={d}
                open={open}
                onToggle={() => {
                  setOpenKey(open ? null : k)
                  if (!open) trackRecentSalesExpand(d.teamId, d.type)
                }}
                onOpenProfile={() => {
                  trackRecentSalesOpenProfile(d.teamId)
                  navigate(`/?team=${d.teamId}`)
                }}
              />
            )
          })}
        </ul>
        {!rows.length && <p className="text-slate italic py-10">No deals recorded.</p>}

        <p className="text-xs text-slate leading-relaxed mt-8 max-w-3xl">
          Valuations are enterprise value on a 100% basis as reported at announcement. Minority
          valuations are the implied value of the whole team from the stake price. Every deal is
          verified against at least two independent sources, listed in each row.
        </p>
      </section>
    </main>
  )
}
