import { useMemo } from 'react'

const LEAGUE_GRADIENT = {
  NFL: 'from-blue-600/20 to-blue-900/10',
  NBA: 'from-red-600/20 to-red-900/10',
  MLB: 'from-sky-600/20 to-sky-900/10',
  NHL: 'from-cyan-600/20 to-cyan-900/10',
  MLS: 'from-emerald-600/20 to-emerald-900/10',
  EPL: 'from-purple-600/20 to-purple-900/10',
}
const LEAGUE_ACCENT = {
  NFL: 'text-blue-400',
  NBA: 'text-red-400',
  MLB: 'text-sky-400',
  NHL: 'text-cyan-400',
  MLS: 'text-emerald-400',
  EPL: 'text-purple-400',
}

function dayIndex(len) {
  const today = new Date()
  const start = new Date(today.getFullYear(), 0, 0)
  const day = Math.floor((today - start) / 86400000)
  return day % len
}

export default function FeaturedTeam({ teams, onSelectTeam }) {
  // Pick from the top 60 most-valuable teams to keep "featured" interesting; rotate daily.
  const featured = useMemo(() => {
    const pool = [...teams]
      .sort((a, b) => b.currentValuation - a.currentValuation)
      .slice(0, 60)
    return pool[dayIndex(pool.length)]
  }, [teams])

  if (!featured) return null

  return (
    <section className="py-12 border-t border-[#1e2d42]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-amber-400">
            TODAY'S FEATURED FRANCHISE
          </span>
        </div>

        <button
          onClick={() => onSelectTeam(featured)}
          className={`w-full text-left rounded-2xl bg-gradient-to-br ${LEAGUE_GRADIENT[featured.league]} border border-[#1e2d42] hover:border-amber-500/40 transition-all p-8 group relative overflow-hidden`}
        >
          {/* Decorative gold sweep */}
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className={`font-mono text-[10px] font-bold tracking-widest ${LEAGUE_ACCENT[featured.league]}`}>
                {featured.league} · {featured.city}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white mt-1 mb-3 group-hover:shimmer-text transition-colors">
                {featured.name}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-2xl line-clamp-3">
                {featured.oneLiner || `Among the most valuable franchises in ${featured.league}.`}
              </p>
            </div>

            <div className="lg:border-l lg:border-[#1e2d42] lg:pl-8">
              <div className="font-mono text-[10px] text-[#475569] tracking-widest mb-1">VALUATION</div>
              <div className="font-mono text-5xl font-black text-white tracking-tight">
                ${featured.currentValuation}B
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className={`font-mono text-sm font-bold ${featured.fiveYearGrowth >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {featured.fiveYearGrowth >= 0 ? '▲' : '▼'} {Math.abs(featured.fiveYearGrowth)}%
                </span>
                <span className="text-xs text-[#475569]">5-year growth</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                VIEW FULL PROFILE →
              </div>
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}
