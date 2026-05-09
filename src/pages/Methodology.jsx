import { Link } from 'react-router-dom'

export default function Methodology() {
  return (
    <main className="bg-paper">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="eyebrow text-accent">Methodology</span>
        </div>

        {/* Centered title — only structural element on the page */}
        <h1 className="font-serif text-ink text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-center">
          A note on how this was built
        </h1>
        <div className="h-px w-20 bg-ink mx-auto mt-8 mb-12" />

        {/* Drop-cap on the opening graf */}
        <div className="font-serif text-ink text-lg sm:text-xl leading-[1.7] space-y-6">
          <p className="first-letter:font-bold first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.9] first-letter:text-ink">
            When Forbes publishes its annual list of franchise valuations, it
            produces a number. The number is precise to the hundred million. It
            is also a black box. Forbes tells you the Cowboys are worth $12.8
            billion. It does not tell you why. It does not tell you what would
            happen to that number if the NFL's media contract evaporated. It
            does not tell you whether the Cowboys' value is fragile or
            load-bearing. That gap is the problem this site exists to fill.
          </p>

          <p>
            I started building this because I kept getting into the same
            argument with friends. Why are the Jets, who haven't been to the
            playoffs in over a decade, worth six billion dollars? Why are the
            Knicks, who haven't won a title since 1973, the third-most-valuable
            franchise in basketball? The standard answer — "media rights and
            stadiums" — is technically correct and almost completely useless.
            It explains nothing.
          </p>

          <p>
            So I went looking for the model. There is no model. Forbes does not
            publish theirs. Sportico does not publish theirs. The Sports
            Business Journal will tell you the size of the NFL's media deal
            but not how it flows through to a single team's valuation. I read
            every breakdown I could find, and they were all sectional — media
            here, stadium there, brand somewhere else — and none of them tied
            together. Eventually I gave up looking and built it myself.
          </p>

          <p>
            The model behind this site treats every franchise as a function of
            five inputs. The headline valuation is a public output: Forbes and
            Sportico each publish their own, and they typically agree within
            five percent. What I have done is reverse engineer that output.
            For each of the 174 franchises in the major leagues, I scored the
            team on five factors — media rights, stadium economics, brand
            strength, market size, and on-field performance — and normalized
            those scores so they sum to one hundred percent of the team's
            announced value. That is the donut you see on every team page. It
            is a partition of a known total into its causes.
          </p>

          <p>
            The most important input, by a margin that is genuinely surprising,
            is media rights. The NFL signed a $113 billion package in 2023
            with CBS, NBC, Fox, ESPN, and Amazon. Spread across thirty-two
            clubs, that is roughly $340 million per team per year, every year,
            before a single ticket is sold. The NBA's new $76 billion deal
            with NBC and Amazon, signed in 2024, has the same effect — it
            puts a floor under every franchise that nothing else in sports
            comes close to. This is why the bottom of the NFL is worth more
            than the top of the NHL: not because of fans, not because of
            stadiums, but because of the contract sitting underneath every
            team. I built the media-rights score by pulling each team's
            share of national rights, layering on local broadcast and
            streaming arrangements where they were disclosed, and indexing
            the result against league average.
          </p>

          <p>
            Stadium economics required the most original work. For each of
            the 174 teams I had to determine the same set of questions. Does
            the team own the building, or do they pay rent? Who financed
            construction, and at what split between public bonds and private
            capital? What is the naming rights deal worth, when does it
            expire, and who collects? Are there non-game events — concerts,
            college bowls, conventions — and where does that revenue land?
            And, the question that distinguishes a good stadium investment
            from a great one, does the ownership group control the
            surrounding real estate? The Rams' SoFi Stadium cost Stan
            Kroenke $5 billion. SoFi by itself is impressive. SoFi as the
            anchor of a 300-acre entertainment district that Kroenke owns —
            that is a different asset class entirely. The team that leases
            a publicly-financed stadium and walks away when the concert tour
            leaves town scores categorically differently. I cross-referenced
            municipal bond filings, local government records, team press
            releases, and real estate databases for every venue.
          </p>

          <p>
            Brand is the fuzziest of the five but matters more than people
            think. I quantified it using social media following across
            platforms, global merchandise revenue estimates from industry
            reports, international fanbase size where reported, and
            sponsorship deal density and value. Then each team was indexed
            against their league average. Manchester United, the Yankees,
            the Cowboys, the Lakers — these are not just teams, they are
            global IP, and the gap between them and a regional team in the
            same league is worth billions. Brand is also the input that
            decays slowest. The Cowboys haven't been to an NFC championship
            game since 1996; the brand was built before then and has
            compounded ever since.
          </p>

          <p>
            Market size sounds like population but is not. New York and Los
            Angeles score maximum on this driver not because they have the
            most people but because their corporate sponsor universe is
            orders of magnitude denser than anywhere else. Premium seating,
            signage, jersey sponsorships, naming rights — these are sold to
            the corporate base of the city the team plays in. I used DMA
            rankings, corporate headquarters density, tourism volume, and
            median household income as a proxy for ticket and premium
            pricing power. A small market with a Fortune 500 anchor scores
            differently from a large market without one.
          </p>

          <p>
            On-field performance is where the model produces its most
            counterintuitive finding. It is the weakest of the five drivers.
            I scored it using championships in the last ten years, playoff
            appearance rate over the previous five, and active star power
            via Spotrac contract data. Then I watched the model and realized
            something that was uncomfortable to write down: winning, on a
            five-year horizon, barely moves the needle. The Jets score a 2
            on this driver and are worth $6 billion. The Knicks score a 4
            and are worth $7.5 billion. The Cowboys score a 5 and are worth
            twelve. Media rights and market size set a floor that on-field
            performance can perturb but rarely break through.
          </p>

          <p>
            That is the model. Five inputs, scored 1 to 10, normalized to
            sum to 100 percent of the team's published valuation. The
            breakdown shown in each team's profile — the donut, the bars,
            the dollar contributions in the comparison tool — is what those
            scores produce when applied to the Forbes number.
          </p>

          <p>
            I want to be honest about what this is and what it isn't. This
            is a model of a public output, built from publicly available
            inputs. For well-documented franchises — the major-market teams
            in the NFL, NBA, and MLB with substantial public financial
            disclosure — I estimate the per-category accuracy at five to
            eight percentage points. For smaller-market or less-documented
            teams, where I had to fall back on league averages and informed
            estimation, the error band widens to ten to fifteen points. Real
            franchise transactions are also driven by considerations this
            model cannot see: the price a single motivated buyer is willing
            to pay, control premium, tax structuring, the cyclical state of
            private credit markets when a team comes up for sale. No public
            model of private asset value can capture those.
          </p>

          <p>
            But this is, as far as I have been able to find, the most
            granular publicly available breakdown of sports franchise
            valuation drivers that exists. It was assembled from hundreds of
            data points across Forbes, Sportico, Sports Business Journal,
            municipal records, Spotrac, and original research. It is
            opinionated where the data ran out. It is also free, and it
            will keep updating as the deals do.
          </p>

          <p className="text-graphite italic">
            If you have ever wondered why a bad team in a great market is
            worth more than a great team in a small one, the rest of this
            site is the long answer.
          </p>
        </div>

        {/* Sign-off */}
        <div className="border-t border-rule pt-8 mt-16 flex items-center justify-between">
          <div className="font-serif text-base italic text-ink">
            — Josh Leviloff
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
