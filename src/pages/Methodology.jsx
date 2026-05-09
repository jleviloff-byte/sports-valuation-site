import { Link } from 'react-router-dom'

function H2({ children }) {
  return (
    <div className="mt-12 mb-5">
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-slate mb-2">
        Section
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
        {children}
      </h2>
      <div className="h-px bg-ink mt-3" />
    </div>
  )
}

export default function Methodology() {
  return (
    <main className="bg-paper">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Methodology</span>
          <div className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-ash hidden sm:inline">
            Edition · 2025
          </span>
        </div>

        {/* Headline */}
        <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">
          How We Built the Valuation Model
        </h1>
        <div className="title-rule mb-8" />

        {/* Standfirst — serif italic, accent left rule */}
        <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-graphite border-l-4 border-accent pl-5 mb-8">
          The headline number comes from Forbes and Sportico — that part is public.
          Everything else is a reverse engineering of that public figure.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-graphite mb-4">
          Franchise valuations are announced every year with no breakdown, no
          methodology, no explanation of what's inside the number. We took those
          valuations and worked backwards — using publicly available but
          unconsolidated data across media contracts, stadium financing records,
          real estate holdings, market demographics, and brand metrics — to estimate
          what percentage of each franchise's value comes from each of the five key
          drivers. <span className="text-ink font-semibold">This breakdown does not
          exist anywhere in consolidated form. We built it.</span>
        </p>

        {/* === Driver sections === */}

        <H2>Media Rights</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite">
          We pulled every available national and local broadcast contract — the
          NFL's $113B deal with CBS/NBC/Fox/ESPN/Amazon, the NBA's $76B deal with
          NBC and Amazon, MLB's agreements with Fox and ESPN, and league-by-league
          regional arrangements. For each team we estimated their share of national
          revenue plus local radio and streaming arrangements where disclosed.{' '}
          <span className="text-ink font-semibold">Sources:</span> Sports Business
          Journal, league filings, and publicly reported contract terms.
        </p>

        <H2>Stadium and Real Estate</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite">
          This required the most original research. For each of the 174 teams we
          determined: does the team own the building or lease it, who financed
          construction and at what public/private split, what is the naming rights
          deal worth and when does it expire, what non-game events generate revenue,
          and does the ownership group control surrounding real estate. We
          cross-referenced municipal bond filings, local government records, team
          press releases, and real estate databases. A team like the LA Rams —
          privately financed, owning the surrounding Hollywood Park development —
          scores categorically differently from a team that leases a publicly
          financed stadium with no surrounding assets.
        </p>

        <H2>Brand Strength</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite">
          Quantified using social media following across platforms, global
          merchandise revenue estimates from industry reports, international
          fanbase size where reported, and sponsorship deal density and value. Each
          team was indexed against their league average to produce a normalized
          score.
        </p>

        <H2>Market Size</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite">
          Not just population — we used DMA rankings, corporate headquarters
          density, tourism volume, and median household income as a proxy for
          ticket and premium seating pricing power. New York and LA score maximum
          not just because they're large markets but because their corporate
          sponsor universe is orders of magnitude larger than a market like Green
          Bay or Salt Lake City.
        </p>

        <H2>On-Field Performance</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite">
          The most counterintuitive finding in the model: this is the weakest
          driver of long-term valuation. We scored it using championships in the
          last 10 years, playoff appearance rate over 5 years, and current star
          power via Spotrac contract data.
        </p>
        <blockquote className="font-serif italic text-lg sm:text-xl leading-relaxed text-graphite border-l-4 border-accent pl-5 mt-6">
          The Jets score a 2 out of 10 here and are still worth $6B. The Knicks
          have won nothing in decades and are worth $7.5B. Media rights and market
          size create a floor that winning or losing barely moves.
        </blockquote>

        <H2>The Scoring Model</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite">
          Each factor is scored 1–10 based on the above inputs. The five scores are
          normalized to sum to 100% to produce the valuation composition breakdown
          shown in each team profile.
        </p>

        <H2>Estimated Accuracy</H2>
        <p className="text-base sm:text-lg leading-relaxed text-graphite mb-4">
          We estimate the accuracy of this breakdown at{' '}
          <span className="text-ink font-semibold">±5–8 percentage points per category</span>{' '}
          for well-documented franchises — major market NFL, NBA, and MLB teams
          with substantial public financial disclosure. For smaller market or
          less-documented franchises where inputs required estimation from league
          averages, accuracy is{' '}
          <span className="text-ink font-semibold">±10–15 percentage points per category</span>.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-graphite mb-12">
          This is not a perfect model. No public model of private asset valuation
          is. But it is the most granular publicly available breakdown of sports
          franchise valuation drivers that exists, built from hundreds of data
          points across Forbes, Sportico, Sports Business Journal, municipal
          records, Spotrac, and original research.
        </p>

        {/* Sign-off */}
        <div className="border-t border-rule pt-6 mt-12 flex items-center justify-between">
          <div className="font-mono text-[10px] tracking-widest uppercase text-slate">
            Built by <span className="text-ink font-bold">Josh Leviloff</span>
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
