// =============================================================================
// PROBLEM STATS — "The numbers are public. The reasons are not."
// =============================================================================
const PROBLEM_STATS = [
  {
    stat: '$10.1B',
    label: 'Worth of the Dallas Cowboys',
    sub: 'No Super Bowl since 1996',
  },
  {
    stat: '+650%',
    label: 'Average NFL franchise growth since 2012',
    sub: 'Forbes aggregate · 12-year compounding',
  },
  {
    stat: '0',
    label: 'Reasons most fans can name',
    sub: 'For why their team is worth what it is',
  },
]

export function ProblemStats() {
  return (
    <section className="border-t border-rule py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow text-accent">The Opportunity</span>
          <div className="h-px flex-1 bg-rule" />
        </div>

        <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          The numbers are public.
          <br />
          <span className="text-slate font-normal italic">The reasons are not.</span>
        </h2>
        <div className="title-rule mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule mb-12">
          {PROBLEM_STATS.map((s) => (
            <div key={s.label} className="bg-white p-8">
              <div className="font-mono text-5xl sm:text-6xl font-bold text-ink tracking-tight mb-4">
                {s.stat}
              </div>
              <div className="text-sm font-semibold text-graphite mb-1.5">{s.label}</div>
              <div className="font-mono text-[11px] text-slate tracking-wide uppercase">{s.sub}</div>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-graphite max-w-3xl leading-relaxed">
          Valuation isn't magic. It's driven by{' '}
          <span className="text-ink font-semibold">5 measurable factors</span>. We make them visible.
        </p>
      </div>
    </section>
  )
}

// =============================================================================
// DRIVERS EXPLAINER — "Five drivers explain the price."
// =============================================================================
const DRIVERS = [
  {
    name: 'Media Rights',
    color: '#1e3a8a',
    explanation: 'TV and streaming deals turn franchises into cash-flow machines before tickets even sell.',
    example: "The NFL's $113B 2023–2033 package guarantees every team ~$340M/year — a value floor independent of wins.",
  },
  {
    name: 'Stadium',
    color: '#5b21b6',
    explanation: 'Owning the venue captures real estate upside and non-game revenue. Tenants leave that money on the table.',
    example: "SoFi Stadium cost the Rams' owner $5B — but the surrounding entertainment district roughly doubled the franchise's value.",
  },
  {
    name: 'Brand / IP',
    color: '#b45309',
    explanation: 'Some teams are global brands. Most are regional. The difference is worth billions.',
    example: 'Manchester United generates more revenue from Asia than from Manchester. The Yankees pinstripe is recognized worldwide.',
  },
  {
    name: 'Market Size',
    color: '#065f46',
    explanation: 'More TV households, more corporate suites, more sponsorship dollars. Geography is destiny.',
    example: "The Knicks haven't won a title since 1973 — they're still among the NBA's most valuable. They sell out NYC every night.",
  },
  {
    name: 'On-Field Performance',
    color: '#991b1b',
    explanation: "Winning matters — but it's the smallest of the five drivers. Bad teams in good markets beat good teams in bad ones.",
    example: "The Cowboys haven't reached an NFC title game since 1995. They're the world's most valuable team.",
  },
]

export function DriversExplainer() {
  return (
    <section className="border-t border-rule py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow text-accent">The Framework</span>
          <div className="h-px flex-1 bg-rule" />
        </div>

        <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Five drivers explain the price.
        </h2>
        <div className="title-rule mb-6" />
        <p className="text-base sm:text-lg text-graphite max-w-3xl mb-12 leading-relaxed">
          Every franchise's valuation reduces to these five factors. Score them, and you understand
          why one team is worth $500M and another is worth $10B.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DRIVERS.map((d, i) => {
            const isLast = i === DRIVERS.length - 1
            return (
              <div
                key={d.name}
                className={`pb-8 border-b border-rule ${isLast ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase"
                    style={{ color: d.color }}
                  >
                    Driver {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1" style={{ background: d.color, opacity: 0.3 }} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-3 leading-tight">
                  {d.name}
                </h3>
                <p className="text-base text-graphite leading-relaxed mb-5">{d.explanation}</p>
                <div
                  className="border-l-4 pl-5 py-1"
                  style={{ borderColor: d.color }}
                >
                  <div className="font-mono text-[10px] tracking-widest uppercase text-slate mb-1.5 font-semibold">
                    Example
                  </div>
                  <p className="text-sm text-graphite leading-relaxed font-serif italic">{d.example}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
