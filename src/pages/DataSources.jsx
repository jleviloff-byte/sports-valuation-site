import { Link } from 'react-router-dom'

const SOURCES = [
  { name: 'Forbes',                 desc: 'Primary franchise valuation figures' },
  { name: 'Sportico',               desc: 'Secondary valuation cross-reference and revenue estimates' },
  { name: 'Sports Business Journal',desc: 'Media rights contract values and broadcast deal terms' },
  { name: 'Spotrac',                desc: 'Player contract data and team payroll figures' },
  { name: 'OverTheCap',             desc: 'NFL salary cap and payroll data' },
  { name: 'HoopsHype',              desc: 'NBA payroll data' },
  { name: 'Baseball Reference',     desc: 'MLB historical data' },
  { name: 'Wikipedia / Wikimedia Commons', desc: 'Stadium information, ownership history, and stadium photography' },
  { name: 'ESPN',                   desc: 'Historical performance data and team context' },
  { name: 'Municipal & government records', desc: 'Stadium financing and public subsidy data' },
  { name: 'US Census / Nielsen DMA data',   desc: 'Market size and demographic estimates' },
]

export default function DataSources() {
  return (
    <main className="bg-paper">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Sourcing</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-4xl sm:text-5xl">Data Sources &amp; Disclaimers</h1>
        <div className="title-rule mb-10" />

        <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-graphite border-l-4 border-accent pl-5 mb-10">
          The model is built on hundreds of inputs assembled from publicly available
          sources. The list below is what was used, and what each one was used for.
        </p>

        {/* Sources table — bordered rows, mono name + serif description */}
        <div className="border-y border-rule">
          {SOURCES.map((s, i) => (
            <div
              key={s.name}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-4 ${
                i < SOURCES.length - 1 ? 'border-b border-rule' : ''
              }`}
            >
              <div className="font-mono text-sm font-bold tracking-wide text-ink sm:col-span-1">
                {s.name}
              </div>
              <div className="font-serif text-base text-graphite leading-relaxed sm:col-span-2">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-slate mb-3">
            Disclaimer
          </div>
          <div className="h-px bg-ink mb-6" />
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-graphite">
            <p>
              All factor-level valuation breakdowns are{' '}
              <span className="font-semibold text-ink">original estimates</span>{' '}
              derived by reverse-engineering public valuation figures using the
              sources above. These estimates carry a margin of error of{' '}
              <span className="font-semibold text-ink">±5–15%</span> depending on
              data availability.
            </p>
            <p className="font-serif italic">
              They are opinions, not facts.
            </p>
            <p className="border-l-4 border-accent pl-4">
              This site is{' '}
              <span className="font-semibold text-ink">not affiliated</span>{' '}
              with Forbes, Sportico, or any sports league.
            </p>
          </div>
        </div>

        <div className="border-t border-rule pt-8 mt-12 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-[10px] tracking-widest uppercase text-accent hover:text-accent-dark transition-colors"
          >
            ← Back to the data
          </Link>
          <Link
            to="/methodology"
            className="font-mono text-[10px] tracking-widest uppercase text-slate hover:text-ink transition-colors"
          >
            Read the methodology →
          </Link>
        </div>
      </article>
    </main>
  )
}
