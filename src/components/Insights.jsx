const CARDS = [
  {
    stat: '$113B',
    label: 'NFL Media Rights Package',
    sub: '2023–2033 · Amazon, ESPN, Fox, NBC, CBS',
    detail:
      "Distributed across 32 clubs at ~$340M per team per year. The rights floor that makes NFL franchises behave like infrastructure bonds — guaranteed cash flows before a ticket is sold.",
    color: 'blue',
    icon: '📡',
  },
  {
    stat: '$10.1B',
    label: 'First $10B Sports Franchise',
    sub: 'Dallas Cowboys · Forbes 2023',
    detail:
      "The Cowboys became the first franchise in any major professional sports league to cross ten billion dollars. They haven't won a Super Bowl since 1996.",
    color: 'amber',
    icon: '🏈',
  },
  {
    stat: '+35%',
    label: 'COVID Proved Demand Is Inelastic',
    sub: 'Forbes aggregate NFL values · 2020–2023',
    detail:
      "Empty stadiums for 12–18 months. NFL ratings rose 10%. Broadcast contracts held. Franchise values increased ~35% through the pandemic — the definitive stress test.",
    color: 'emerald',
    icon: '📊',
  },
  {
    stat: 'PE',
    label: 'Institutional Capital Opens Up',
    sub: 'NBA approved 2021 · NFL approved 2023',
    detail:
      "Ares, Arctos, Blue Owl (Dyal), and Sixth Street now hold approved stakes. The COVID stress test was the proof of concept that finally opened the door.",
    color: 'violet',
    icon: '🏦',
  },
]

const C = {
  blue:    { border: 'border-blue-500/25',    stat: 'text-blue-400',    sub: 'text-blue-400/60' },
  amber:   { border: 'border-amber-500/25',   stat: 'text-amber-400',   sub: 'text-amber-400/60' },
  emerald: { border: 'border-emerald-500/25', stat: 'text-emerald-400', sub: 'text-emerald-400/60' },
  violet:  { border: 'border-violet-500/25',  stat: 'text-violet-400',  sub: 'text-violet-400/60' },
}

export default function Insights() {
  return (
    <section id="insights" className="py-20 border-t border-[#1e2d42]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-blue-500" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-blue-400">
            MARKET INTELLIGENCE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map(({ stat, label, sub, detail, color, icon }) => {
            const c = C[color]
            return (
              <div
                key={label}
                className={`bg-[#0d1420] border ${c.border} rounded-xl p-6 hover:bg-[#111c2d] transition-colors`}
              >
                <div className="text-xl mb-4">{icon}</div>
                <div className={`font-mono text-3xl font-black ${c.stat} mb-1 tracking-tight`}>
                  {stat}
                </div>
                <div className="text-xs font-bold text-white tracking-wide mb-1">{label}</div>
                <div className={`font-mono text-[10px] ${c.sub} mb-4`}>{sub}</div>
                <p className="text-[11px] text-[#64748b] leading-relaxed">{detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
