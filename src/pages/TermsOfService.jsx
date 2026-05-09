import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <main className="bg-paper">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Terms</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-4xl sm:text-5xl">Terms of Service</h1>
        <div className="title-rule mb-10" />

        <div className="text-base sm:text-lg leading-relaxed text-graphite space-y-5 font-serif">
          <p>
            All content on this site is for{' '}
            <span className="font-sans not-italic font-semibold text-ink">
              informational and educational purposes only
            </span>
            .
          </p>

          <p>
            All valuation breakdowns, factor scores, and percentage estimates
            are the independent analysis and opinion of{' '}
            <span className="font-sans not-italic font-semibold text-ink">Josh Leviloff</span>{' '}
            and do not represent the views of any employer, school, or
            affiliated institution.
          </p>

          <p className="font-sans not-italic border-l-4 border-accent pl-4">
            Nothing on this site constitutes financial advice, investment
            advice, or a recommendation to buy or sell any asset.
          </p>

          <p>
            Franchise valuation figures are sourced from publicly available
            third-party sources including{' '}
            <span className="font-sans not-italic font-semibold text-ink">Forbes</span>,{' '}
            <span className="font-sans not-italic font-semibold text-ink">Sportico</span>,
            and the{' '}
            <span className="font-sans not-italic font-semibold text-ink">Sports Business Journal</span>.
            All factor-level breakdowns are original estimates and should not be
            treated as definitive or authoritative.
          </p>

          <p>
            This site makes no warranty as to the accuracy, completeness, or
            timeliness of any information presented.
          </p>

          <p className="font-sans not-italic text-ink font-semibold">
            All opinions are those of Josh Leviloff alone.
          </p>
        </div>

        <div className="border-t border-rule pt-8 mt-12 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-[10px] tracking-widest uppercase text-accent hover:text-accent-dark transition-colors"
          >
            ← Back to the data
          </Link>
          <div className="font-mono text-[10px] tracking-widest uppercase text-ash">
            Last updated · 2026
          </div>
        </div>
      </article>
    </main>
  )
}
