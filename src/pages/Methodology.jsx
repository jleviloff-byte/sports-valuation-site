import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackMethodologyViewed } from '../utils/analytics.js'
import { precedentComps } from '../../data/allTeams.js'
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
    <h2 id={id} className="font-serif text-ink text-3xl sm:text-4xl font-bold leading-tight pt-10 scroll-mt-28">
      {children}
    </h2>
  )
}

function ForbesBreakdownSection() {
  return (
    <>
      <SectionHead id="forbes-breakdown">Reading the Forbes Breakdown</SectionHead>
      <p>
        Forbes doesn't just print a total. For the NFL, NBA, MLB, and NHL it splits every team into
        four pieces. Sport is the value of the league's shared revenue, the national TV and licensing
        money every club collects in equal measure. Market is what the city is worth: population,
        TV households, and corporate wallets. Stadium is the value the building adds, from suites to
        naming rights to the concerts on off nights. Brand is whatever is left that a fan base pays
        extra for.
      </p>
      <p>
        On every team page, each piece sits on a bar that runs from the league's smallest value to
        its largest, with a tick at the median and the team's logo where Forbes put it. Then comes
        the test. For Market, Stadium, and Brand I regress the Forbes figure on the things that
        should drive it: metro population, TV households, household income, and local competition
        for Market; venue age, capacity, premium seating, and whether the team controls the building
        for Stadium; championships since 2001, national TV exposure, social following, and
        merchandise rank for Brand. A team whose Forbes value sits more than one standard deviation
        above what those inputs predict gets "Forbes looks generous." More than one below gets
        "Forbes looks conservative." Everything in between is on the mark. Sport gets a simpler
        test: it should be flat inside a league, so anything more than 5% from the median gets
        flagged and explained.
      </p>
      <p>
        The limits are real, so here they are plainly. Proxies are proxies. Forbes sees private
        data I don't: actual suite revenue, lease terms buried in bond documents, local media
        contracts that never get disclosed. Thirty teams is a small sample for a regression, so
        one outlier can move the line. When the test says Forbes looks generous, read it as a
        question worth asking, backed by numbers, not as proof Forbes got it wrong.{' '}
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

export default function Methodology() {
  useEffect(() => { trackMethodologyViewed() }, [])

  return (
    <main className="bg-paper">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="eyebrow text-accent">Methodology</span>
        </div>

        {/* Centered title; the only structural element on the page */}
        <h1 className="font-serif text-ink text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-center">
          A note on how this was built
        </h1>
        <div className="h-px w-20 bg-ink mx-auto mt-8 mb-12" />

        {/* Drop-cap on the opening graf */}
        <div className="font-serif text-ink text-lg sm:text-xl leading-[1.7] space-y-6">
          <p className="first-letter:font-bold first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.9] first-letter:text-ink">
            Every year Forbes prints a number, precise to the hundred million,
            for what each NFL franchise is worth. The Cowboys are $12.8B. Great.
            What you don't get is the model behind it. Strip out the NFL's
            national media deal tomorrow and what happens to that number?
            Forbes won't say. Sportico won't say. The Sports Business Journal
            will tell you the size of the deal but not how it laddered into a
            single team's valuation. That gap is the entire reason this site
            exists.
          </p>

          <p>
            The argument that nudged me to build it kept happening with the
            same friends. Why are the Jets worth six billion dollars? They
            haven't been to the playoffs since Eli Manning was a starter. Why
            are the Knicks, last champions in 1973, the third-most-valuable
            team in basketball? The reflex answer is "media rights and
            stadiums." That answer is correct and useless in equal measure.
            It doesn't explain anything; it just names two of the line items.
          </p>

          <p>
            So I went looking for the underlying model. There isn't one — not
            published. Every breakdown I could find was sectional: a media
            article here, a stadium-financing piece there, a brand consultancy
            white paper somewhere else. None of them stitched together. After
            enough months of reading I gave up looking and wrote one.
          </p>

          <p>
            The model treats every franchise as a function of five inputs.
            The headline valuation is a public output — Forbes and Sportico
            each publish theirs, and they usually agree within five percent.
            What I've done is reverse-engineer that output. Each of the 174
            franchises in the six major leagues gets a 1-to-10 score on five
            factors: media rights, stadium economics, brand, market, and
            on-field performance. The scores normalize to one hundred percent
            of the team's published valuation. That's the donut on every team
            page — a partition of a known total into its causes.
          </p>

          <p>
            Media rights is the heaviest of the five by a margin that surprised
            me when I first ran the numbers. The NFL's 2023 deal with CBS,
            NBC, Fox, ESPN, and Amazon is $113 billion over eleven years.
            Split thirty-two ways, that's roughly $340 million per club per
            year, every year, before tickets, parking, beer, or jerseys. The
            NBA's $76 billion package with NBC and Amazon, signed in 2024,
            does the same thing for basketball. These contracts put a floor
            under franchise value that nothing else in sports comes close to.
            It's why the worst NFL franchise is worth more than the best NHL
            one. The media-rights score reflects each team's share of national
            rights, layered with local broadcast and streaming arrangements
            where disclosed, indexed against league average.
          </p>

          <p>
            Stadium economics took the most original work. For every team I
            had to answer the same five questions. Do they own the building?
            Who paid for it — public bonds, private capital, or some split?
            What's the naming-rights deal worth, when does it expire, and who
            collects? Where do the non-game events land — the concerts, the
            college bowls, the conventions? And the question that separates
            a good stadium investment from a great one: does the ownership
            group control the surrounding real estate? SoFi Stadium cost Stan
            Kroenke five billion dollars. SoFi by itself is impressive. SoFi
            as the anchor of a 300-acre entertainment district that Kroenke
            also owns is a different asset class entirely. A team leasing a
            publicly-financed stadium and walking away when the concert tour
            leaves town scores categorically lower. The data came from
            municipal bond filings, local government records, team press
            releases, and real-estate databases, venue by venue.
          </p>

          <p>
            Brand is the fuzziest input and matters more than people expect.
            I quantified it with social-media following across platforms,
            global merchandise revenue from industry reports, international
            fanbase size where reported, and sponsorship density. Each team
            indexes against its league average. Manchester United, the
            Yankees, the Cowboys, the Lakers — these aren't just teams.
            They're global IP, and the gap between them and a regional team
            in the same league runs into the billions. Brand is also the
            input that decays slowest. The Cowboys haven't reached an NFC
            championship game since 1996. The brand was built before then
            and has compounded for thirty years anyway.
          </p>

          <p>
            Market size sounds like population. It isn't. New York and Los
            Angeles max out this driver not because they have the most people
            but because their corporate sponsor universe is orders of magnitude
            denser than anywhere else. Premium seats, signage, jersey patches,
            naming rights — those all get sold to the corporate base of the
            city the team plays in. The score uses DMA rankings, corporate-HQ
            density, tourism volume, and median household income as a proxy for
            pricing power. A small market with a Fortune 500 anchor outscores
            a large market without one.
          </p>

          <p>
            On-field performance is where the model coughs up its most
            uncomfortable finding: winning, on a five-year horizon, barely
            moves the needle. It's the weakest of the five drivers. The Jets
            score a 2 and are worth $6B. The Knicks score a 4 and are worth
            $7.5B. The Cowboys score a 5 and are worth twelve. Media rights
            and market size set a floor that performance can perturb but
            rarely break through. The score uses championships in the last
            ten years, playoff appearance rate over the last five, and
            active star power via Spotrac contract data.
          </p>

          <p>
            That's the model. Five inputs, scored 1 to 10, normalized to sum
            to 100 percent of the team's published valuation. Every donut,
            bar, and dollar contribution on this site is downstream of those
            numbers applied to the Forbes total.
          </p>

          <p>
            Worth being honest about what this is and what it isn't. It's a
            model of a public output, built from publicly available inputs.
            For well-documented franchises — the major-market NFL, NBA, and
            MLB teams with substantial financial disclosure — I'd put the
            per-category error band at five to eight percentage points. For
            smaller-market or less-documented teams, where I had to fall back
            on league averages and informed estimation, that band widens to
            ten to fifteen. Real franchise transactions also bake in things
            this model can't see: the price one motivated buyer is willing to
            pay, control premiums, tax structuring, and where the private
            credit markets happen to be in their cycle the week a team comes
            up for sale. No public model of private-asset value gets near
            those.
          </p>

          <p>
            What I can say is this: as far as I've been able to find, it's
            the most granular publicly available breakdown of sports
            franchise valuation drivers that exists. The underlying data
            came from hundreds of points across Forbes, Sportico, Sports
            Business Journal, municipal records, Spotrac, and original
            research. It's opinionated where the data ran out. It's also
            free, and it'll keep updating as the deals do.
          </p>

          <p className="text-graphite italic">
            If you've ever wondered why a bad team in a great market is worth
            more than a great team in a small one, the rest of this site is
            the long answer.
          </p>
        </div>

        <div className="font-serif text-ink text-lg sm:text-xl leading-[1.7] space-y-6">
          <ForbesBreakdownSection />
          <SalePricesSection />
        </div>

        {/* Sign-off */}
        <div className="border-t border-rule pt-8 mt-16 flex items-center justify-between">
          <div className="font-serif text-base italic text-ink">
            Josh Leviloff
          </div>
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
