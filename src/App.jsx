import { useState } from 'react'
import teams from '../data/allTeams.js'
import { getEnrichment } from '../data/enrichments.js'
import TitleBar from './components/TitleBar.jsx'
import LeagueExplorer from './components/LeagueExplorer.jsx'
import { DriversExplainer, ProblemStats } from './components/Hero.jsx'
import ValuationsOverTime from './components/ValuationsOverTime.jsx'
import CitiesMap from './components/CitiesMap.jsx'
import CompareTool from './components/CompareTool.jsx'
import TeamDetailPanel from './components/TeamDetailPanel.jsx'
import Ticker from './components/Ticker.jsx'

function Nav() {
  return (
    <nav className="sticky top-9 z-40 bg-paper/95 backdrop-blur border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="#explorer"
          className="font-serif italic text-lg sm:text-xl font-bold text-ink hover:text-accent transition-colors"
        >
          What's a Team Worth?
        </a>
        <div className="hidden sm:flex gap-7 text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-slate">
          <a href="#explorer"  className="hover:text-ink transition-colors">Explorer</a>
          <a href="#framework" className="hover:text-ink transition-colors">Framework</a>
          <a href="#macro"     className="hover:text-ink transition-colors">Macro</a>
          <a href="#cities"    className="hover:text-ink transition-colors">Cities</a>
          <a href="#compare"   className="hover:text-ink transition-colors">Compare</a>
        </div>
        <div className="sm:hidden font-mono text-[9px] tracking-widest uppercase text-slate">
          174 franchises
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-rule py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="font-mono text-[10px] text-slate tracking-widest uppercase">
          What's a Team Worth? &nbsp;·&nbsp; Data: Forbes 2024–2025 estimates &nbsp;·&nbsp; 174 franchises &nbsp;·&nbsp; 6 leagues
        </span>
        <span className="text-[10px] text-ash">
          For educational purposes. Valuations are approximations.
        </span>
      </div>
    </footer>
  )
}

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState(null)

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      {/* Sticky animated ticker — always visible */}
      <div className="sticky top-0 z-50">
        <Ticker teams={teams} />
      </div>
      <Nav />
      <main>
        {/* Lead with the data: compact title bar, then dense table */}
        <TitleBar />
        <LeagueExplorer
          teams={teams}
          onSelectTeam={setSelectedTeam}
          selectedTeam={selectedTeam}
        />

        {/* Explanation & insights below the data */}
        <div id="framework">
          <DriversExplainer />
        </div>
        <ProblemStats />
        <div id="macro">
          <ValuationsOverTime teams={teams} />
        </div>

        <CitiesMap teams={teams} />

        <CompareTool teams={teams} />
      </main>
      <Footer />

      {selectedTeam && (
        <TeamDetailPanel
          team={selectedTeam}
          enrichment={getEnrichment(selectedTeam.name)}
          onClose={() => setSelectedTeam(null)}
          onSelectTeam={setSelectedTeam}
        />
      )}
    </div>
  )
}
