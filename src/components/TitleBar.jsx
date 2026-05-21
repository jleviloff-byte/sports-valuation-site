export default function TitleBar() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-10 border-b border-rule">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Sports Valuation Intelligence</span>
          <div className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-ash hidden sm:inline">
            Edition · 2025
          </span>
        </div>

        <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">
          What's a team worth?
        </h1>

        <div className="text-base sm:text-lg text-graphite mt-6 leading-relaxed max-w-3xl space-y-4 font-serif">
          <p>
            Forbes drops a number. Sportico drops a number. That's it. The Cowboys
            are worth $10.1B; the Commanders were worth half that two years ago.
            Nobody tells you why. The math behind every franchise's price tag
            sits inside a handful of private models that don't get published.
          </p>
          <p>
            I built this site to open the box. All 174 franchises across the
            NFL, NBA, MLB, NHL, MLS, and Premier League, each scored on the
            five things that actually drive value:{' '}
            <span className="text-ink font-semibold">media rights</span>,{' '}
            <span className="text-ink font-semibold">stadium economics</span>,{' '}
            <span className="text-ink font-semibold">brand</span>,{' '}
            <span className="text-ink font-semibold">market</span>, and{' '}
            <span className="text-ink font-semibold">on-field performance</span>.
            What comes out is the breakdown that would sit in the appendix of a
            sell-side note if anyone bothered to publish one.
          </p>
          <p className="border-l-2 border-accent pl-4">
            The first thing you learn is that winning barely moves the curve.
            Media rights and stadium real estate carry it. The Jets have missed
            the playoffs for a decade and a half and are worth $6B because every
            NFL team cashes a $340M check from the league before the season
            starts. That kind of structural fact disappears the moment a magazine
            publishes a ranked list and walks away.{' '}
            <span className="text-ink font-semibold">This site doesn't walk away.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
