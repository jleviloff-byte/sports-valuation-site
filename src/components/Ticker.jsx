import { useMemo } from 'react'

const LEAGUE_COLORS = {
  NFL: '#1e3a8a',  // navy
  NBA: '#991b1b',  // brick
  MLB: '#075985',  // sky
  NHL: '#155e75',  // teal
  MLS: '#065f46',  // forest
  EPL: '#581c87',  // plum
}

function growthSign(g) {
  if (g > 0) return { color: '#0a7d2a', symbol: '▲' }
  if (g < 0) return { color: '#b91c1c', symbol: '▼' }
  return { color: '#9b9b9b', symbol: '·' }
}

function TickerItem({ team }) {
  const { color, symbol } = growthSign(team.fiveYearGrowth)
  return (
    <span className="inline-flex items-center gap-2 mx-5 whitespace-nowrap">
      <span
        className="font-mono text-[9px] font-bold tracking-widest px-1.5 py-0.5"
        style={{ color: LEAGUE_COLORS[team.league] }}
      >
        {team.league}
      </span>
      <span className="text-xs font-semibold text-ink">{team.name}</span>
      <span className="font-mono text-xs font-bold text-ink">${team.currentValuation}B</span>
      <span className="font-mono text-[10px] font-bold" style={{ color }}>
        {symbol} {Math.abs(team.fiveYearGrowth)}%
      </span>
      <span className="text-rule">·</span>
    </span>
  )
}

export default function Ticker({ teams }) {
  const sorted = useMemo(
    () => [...teams].sort((a, b) => b.currentValuation - a.currentValuation),
    [teams]
  )

  return (
    <div className="relative bg-paper border-b border-rule overflow-hidden h-9 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
      <div className="absolute left-3 top-0 bottom-0 z-20 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-accent">Live</span>
      </div>

      <div className="flex animate-ticker pl-32">
        {[...sorted, ...sorted].map((team, i) => (
          <TickerItem key={`${team.name}-${i}`} team={team} />
        ))}
      </div>
    </div>
  )
}
