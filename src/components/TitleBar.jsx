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
            Every year, Forbes and Sportico release franchise valuations.{' '}
            <span className="font-sans">Helpful? Sure. Complete? Not even close.</span>{' '}
            They hand you a number and move on — no breakdown, no explanation, no
            context for why the Cowboys are worth $10B and the Commanders were worth
            half that just two years ago.
          </p>
          <p>
            I've spent years thinking about what actually drives these numbers, and I
            built this to share that with any fan who's ever wondered the same thing.
          </p>
          <p className="font-sans">
            Franchise valuations come down to five factors:{' '}
            <span className="text-ink font-semibold">Media rights</span>{' '}
            <span className="text-slate">(the most powerful driver by far)</span>,{' '}
            <span className="text-ink font-semibold">Stadium ownership and real estate</span>,{' '}
            <span className="text-ink font-semibold">Brand strength and global IP</span>,{' '}
            <span className="text-ink font-semibold">Market size and geography</span>, and{' '}
            <span className="text-ink font-semibold">On-field performance</span> —{' '}
            which is less important than most fans think.
          </p>
          <p className="font-sans border-l-2 border-accent pl-4">
            Media rights and stadiums move the needle most. The Jets have been bad
            for decades and are still worth $6B. <span className="text-ink font-semibold">This site explains why.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
