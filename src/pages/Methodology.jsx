import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackMethodologyViewed } from '../utils/analytics.js'

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
