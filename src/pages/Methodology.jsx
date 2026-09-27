import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackMethodologyViewed } from '../utils/analytics.js'
import allTeams, { precedentComps } from '../../data/allTeams.js'
import { transactions, lastUpdated } from '../../data/transactions.js'
import { COMP_WINDOW_MONTHS } from '../utils/comps.js'
import { fmtDate, fmtPremium, fmtUSD, DRIVER_LABEL } from '../utils/dealFormat.js'

const LEAGUE_ORDER = ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']

const deal = (teamId, type) =>
  transactions.filter((t) => t.teamId === teamId && t.type === type)
    .sort((a, b) => (b.dateAnnounced || '').localeCompare(a.dateAnnounced || ''))[0] || null

function PremiumTable() {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full min-w-[520px] font-sans text-sm border-y-2 border-ink">
        <thead>
          <tr className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate border-b border-rule">
            <th className="text-left py-2 pr-3" rowSpan={2}>League</th>
            <th className="text-center py-2 px-2 border-l border-rule" colSpan={3}>Control deals vs Forbes</th>
            <th className="text-center py-2 px-2 border-l border-rule" colSpan={3}>LP marks vs Forbes</th>
          </tr>
          <tr className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate border-b border-ink">
            {['Median', 'Mean', 'n', 'Median', 'Mean', 'n'].map((h, i) => (
              <th key={i} className={`text-right py-1.5 px-2 ${i === 0 || i === 3 ? 'border-l border-rule' : ''}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {LEAGUE_ORDER.map((lg) => {
            const c = precedentComps[lg]?.control
            const m = precedentComps[lg]?.minority
            return (
              <tr key={lg} className="border-b border-rule last:border-0">
                <td className="py-2 pr-3 font-mono font-bold text-ink">{lg}</td>
                <td className="py-2 px-2 text-right font-mono font-bold text-ink border-l border-rule">{fmtPremium(c?.medianPremium)}</td>
                <td className="py-2 px-2 text-right font-mono text-graphite">{fmtPremium(c?.meanPremium)}</td>
                <td className="py-2 px-2 text-right font-mono text-slate">{c?.n ?? 0}</td>
                <td className="py-2 px-2 text-right font-mono font-bold text-graphite border-l border-rule">{fmtPremium(m?.medianPremium)}</td>
                <td className="py-2 px-2 text-right font-mono text-graphite">{fmtPremium(m?.meanPremium)}</td>
                <td className="py-2 px-2 text-right font-mono text-slate">{m?.n ?? 0}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="font-mono text-[10px] text-slate tracking-wider uppercase mt-2">
        Deals announced in the {COMP_WINDOW_MONTHS} months to {fmtDate(lastUpdated)} · premium = price ÷ Forbes value at announcement, minus one
      </p>
    </div>
  )
}

function SectionHead({ id, children }) {
  return (
    <h2 id={id} className="text-ink text-3xl sm:text-3xl font-bold leading-tight pt-6 scroll-mt-28">
      {children}
    </h2>
  )
}

function ForbesBreakdownSection() {
  return (
    <>
      <SectionHead id="forbes-breakdown">Reading the Forbes Breakdown</SectionHead>
      <p>
        Two rules govern everything under "Inside the Forbes Number." The numbers are Forbes'.
        The commentary is ours. For the NFL, NBA, MLB, and NHL, Forbes splits every team into
        four pieces. Sport is the value of the league's shared revenue, the national TV and
        licensing money the clubs divide. Market is what the city is worth to the team:
        population, TV households, and corporate wallets. Stadium is what the building adds,
        from suites to naming rights to the concerts on off nights. Brand is whatever is left
        that a fan base pays extra for. The NHL split here is as of Dec 2024, the latest one
        Forbes has published. Forbes publishes no split for MLS or the Premier League, and I
        don't estimate one.
      </p>
      <p>
        On every team page, each piece sits on a bar that runs from the league's smallest value
        to its largest, with a tick at the median and the team's logo where Forbes put it. Under
        the bar is the rank, the gap to the median, and three short paragraphs: why the number is
        what it is, how it compares to the two or three most relevant peers, and what it tells
        us. Peers means the team that shares the market, the strongest team in the division on
        that component, and a team in a metro of similar size. Every comparison is against league
        peers, not against a model. Where the facts say Forbes has it right, or has it off, the
        prose says so with the supporting numbers. There are no scores, labels, or verdicts on
        this site that a formula produced.
      </p>
      <p>
        Sport needs its own rule. In the NFL and NBA, the national pool is split evenly, so Sport
        should be nearly flat across the league; where a team sits more than 5% from the median,
        the commentary says so and says why. In MLB and the NHL it is not flat, and it isn't meant
        to be read that way. Forbes appears to report Sport net of revenue sharing: the pool is
        credited after each club's contribution to it or draw from it. Big-market clubs fund the
        pool, so they show low Sport values; small-market clubs draw from it and show high ones.
        The Dodgers at $35M and the Yankees at $393M are not being shortchanged on TV money. They
        are the league's biggest payers. So for those two leagues the profile shows a net
        revenue-sharing position instead, labeled net payer or net receiver against the league
        median.
      </p>
      <p>
        The limits, plainly. Forbes sees private data I don't: actual suite revenue, lease terms
        buried in bond documents, local media contracts that never get disclosed. The facts I
        bring to each component are public ones, from Census population to venue ownership to
        championship counts, and they are proxies for what Forbes is measuring, not the thing
        itself. When the commentary argues with a number, it is an argument from those facts,
        and you can check every one of them.{' '}
        <Link to="/forbes-breakdown" className="font-sans text-base font-semibold text-accent hover:text-accent-dark">
          See every league →
        </Link>
      </p>
    </>
  )
}

function SalePricesSection() {
  const sea = deal('seattle-seahawks', 'control')
  const was = deal('washington-commanders', 'control')
  const mia = deal('miami-dolphins', 'minority')
  return (
    <>
      <SectionHead id="sale-prices">Why sale prices differ from Forbes</SectionHead>
      <p>
        Forbes values a team as a going concern. Buyers pay for something else: control, scarcity,
        a tax shield, and the option on everything the franchise could become. Every deal on the{' '}
        <Link to="/recent-sales" className="font-sans text-base font-semibold text-accent hover:text-accent-dark">Recent Sales</Link>{' '}
        page is tagged with the drivers that explain its gap to Forbes, drawn from one fixed list:{' '}
        {Object.values(DRIVER_LABEL).join(', ').toLowerCase()}.
      </p>
      {sea && was && (
        <p>
          Start with the summer of 2026. The Seahawks sold for {fmtUSD(sea.valuation)}, about{' '}
          {sea.impliedRevenueMultiple}x 2025 revenue. When the Commanders sold in 2023 for{' '}
          {fmtUSD(was.valuation)}, the reported multiple was {was.impliedRevenueMultiple}x. Same
          league, same shared media money, and buyers paid{' '}
          {(sea.impliedRevenueMultiple - was.impliedRevenueMultiple).toFixed(1)} more turns of revenue
          three years later. That is multiple expansion in its purest form, and it is why the Seahawks
          price landed {fmtPremium(sea.premiumToForbes)} against the Forbes number on the books when
          the deal was announced. Scarcity did the rest: it was the first NFL control sale in three
          years.
        </p>
      )}
      {mia && sea && (
        <p>
          Now the minority side. In March 2026 a 1% stake in the Dolphins changed hands at an implied{' '}
          {fmtUSD(mia.valuation)} for the whole, {fmtPremium(mia.premiumToForbes)} to Forbes. Four months
          later a buyer took full control of the Seahawks at {fmtUSD(sea.valuation)}. On paper the LP
          mark is the richer number. It isn't. That {fmtUSD(mia.valuation)} covers a holding company with
          the stadium, the Formula 1 race, and the Miami Open inside it, and a 1% slice buys no vote,
          no exit, and a seat in a cap table that almost never opens. LP marks price that scarcity.
          Control prices the enterprise. This site keeps them in separate columns and never lets
          either one replace the Forbes headline.
        </p>
      )}
      <PremiumTable />
    </>
  )
}

function DataVintage() {
  const rows = LEAGUE_ORDER.map((lg) => {
    const ts = allTeams.filter((t) => t.league === lg)
    const ys = ts.map((t) => t.valuationYear).filter(Boolean)
    const onExport = ts.filter((t) => t.forbesBreakdown?.total).length
    return { lg, n: ts.length, lo: Math.min(...ys), hi: Math.max(...ys), onExport }
  })
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full min-w-[420px] text-sm border-y-2 border-ink">
        <thead>
          <tr className="font-mono text-[9px] tracking-[0.18em] uppercase text-slate border-b border-ink">
            <th className="text-left py-2 pr-3">League</th>
            <th className="text-right py-2 px-2">Teams</th>
            <th className="text-right py-2 px-2">Forbes list year</th>
            <th className="text-right py-2 px-2">On loaded list</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.lg} className="border-b border-rule last:border-0">
              <td className="py-2 pr-3 font-mono font-bold text-ink">{r.lg}</td>
              <td className="py-2 px-2 text-right font-mono">{r.n}</td>
              <td className="py-2 px-2 text-right font-mono">{r.lo === r.hi ? r.hi : `${r.lo} to ${r.hi}`}</td>
              <td className="py-2 px-2 text-right font-mono">{r.onExport} of {r.n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FiveDriverSection() {
  return (
    <>
      <SectionHead id="five-drivers">The five-driver scores</SectionHead>
      <p>
        The home page rings, the compare tool, and the MLS and Premier League profiles carry a
        second breakdown: each team scored 1 to 10 on media rights, stadium economics, brand,
        market, and on-field performance, normalized to the Forbes headline. It predates the Forbes
        component data on this site. Where Forbes publishes its own split (NFL, NBA, MLB, NHL) the
        profile shows the Forbes components instead, because three of the five scores cover the
        same ground. The scores stay where they add something: a like-for-like ring across all six
        leagues, and on-field performance, which Forbes does not break out.
      </p>
    </>
  )
}

function DataSection() {
  return (
    <>
      <SectionHead id="data">Data vintage</SectionHead>
      <p>
        Every headline valuation, revenue figure, operating income figure and year-over-year change
        traces to the newest Forbes list loaded for that league. Teams on a loaded list show that
        list's year on the profile; teams without one (all of MLS, and the Premier League clubs
        outside Forbes' top-11 soccer list) keep their last Forbes figure with its year shown.
      </p>
      <DataVintage />
      <p>
        Team facts (ownership, venue, media deals, recent performance) were verified as of
        September 2026 and each overview was rewritten against them; the change log is in the
        repository under research/copy-refresh-log.md.
      </p>
    </>
  )
}

export default function Methodology() {
  useEffect(() => { trackMethodologyViewed() }, [])

  return (
    <main className="bg-paper">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="section-title text-2xl sm:text-3xl">Methodology</h1>
        <p className="text-sm text-graphite mt-1 mb-2">
          How the Forbes breakdown is read, why sale prices differ from Forbes, and where every number comes from.
        </p>

        <div className="text-ink text-base leading-relaxed space-y-5">
          <ForbesBreakdownSection />
          <SalePricesSection />
          <FiveDriverSection />
          <DataSection />
        </div>

        <div className="border-t border-rule pt-6 mt-12 flex items-center justify-between">
          <div className="text-sm text-graphite">Josh Leviloff</div>
          <Link
            to="/"
            className="font-mono text-[10px] tracking-widest uppercase text-accent hover:text-accent-dark transition-colors"
          >
            ← Back to the data
          </Link>
        </div>
      </article>
    </main>
  )
}
