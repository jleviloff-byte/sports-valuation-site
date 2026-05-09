export default function TitleBar() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-8 border-b border-rule">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Sports Valuation Intelligence</span>
          <div className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-ash hidden sm:inline">
            Edition · 2025
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-4xl">
            <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">
              What's a team worth?
            </h1>
            <p className="text-base sm:text-lg text-graphite mt-4 leading-relaxed max-w-3xl">
              An interactive guide to the value of every major professional sports
              franchise. <span className="text-ink font-semibold">174 teams</span> across six
              leagues, sortable by valuation, growth, and the five drivers that explain
              the price. Click any row for the full profile.
            </p>
          </div>
          <div className="font-mono text-[10px] text-slate tracking-widest uppercase whitespace-nowrap">
            NFL &nbsp;·&nbsp; NBA &nbsp;·&nbsp; MLB &nbsp;·&nbsp; NHL &nbsp;·&nbsp; MLS &nbsp;·&nbsp; EPL
          </div>
        </div>
      </div>
    </section>
  )
}
