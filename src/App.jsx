import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
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
import Methodology from './pages/Methodology.jsx'

// Scrolls to the in-page anchor when the URL hash changes (since react-router
// doesn't do this automatically). Also scrolls to top on plain route changes.
function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // Small delay so the destination is mounted before we scroll
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])
  return null
}

function Nav() {
  return (
    <nav className="sticky top-9 z-40 bg-paper/95 backdrop-blur border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif italic text-lg sm:text-xl font-bold text-ink hover:text-accent transition-colors"
        >
          What's a Team Worth?
        </Link>
        <div className="hidden md:flex gap-6 text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-slate">
          <Link to="/#explorer"  className="hover:text-ink transition-colors">Explorer</Link>
          <Link to="/#framework" className="hover:text-ink transition-colors">Framework</Link>
          <Link to="/#macro"     className="hover:text-ink transition-colors">Macro</Link>
          <Link to="/#cities"    className="hover:text-ink transition-colors">Cities</Link>
          <Link to="/#compare"   className="hover:text-ink transition-colors">Compare</Link>
          <Link to="/methodology" className="hover:text-accent transition-colors">How We Built This</Link>
        </div>
        <div className="md:hidden font-mono text-[9px] tracking-widest uppercase text-slate">
          <Link to="/methodology" className="hover:text-ink">Methodology →</Link>
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
          For educational purposes. Valuations are approximations.{' '}
          <Link to="/methodology" className="text-accent hover:text-accent-dark">Methodology</Link>.
        </span>
      </div>
    </footer>
  )
}

// Subtle banner under the hero linking to /methodology
function MethodologyCallout() {
  return (
    <div className="border-b border-rule px-4 sm:px-6 lg:px-8 py-4 bg-paper">
      <div className="max-w-7xl mx-auto">
        <p className="font-serif italic text-sm text-graphite">
          Wondering how we calculated these numbers?{' '}
          <Link
            to="/methodology"
            className="font-sans not-italic font-semibold text-accent hover:text-accent-dark transition-colors tracking-wide"
          >
            Here's our methodology →
          </Link>
        </p>
      </div>
    </div>
  )
}

function HomePage() {
  const [selectedTeam, setSelectedTeam] = useState(null)

  return (
    <>
      <main>
        <TitleBar />
        <MethodologyCallout />
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

      {selectedTeam && (
        <TeamDetailPanel
          team={selectedTeam}
          enrichment={getEnrichment(selectedTeam.name)}
          onClose={() => setSelectedTeam(null)}
        />
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-paper text-ink font-sans">
        {/* Sticky animated ticker — always visible */}
        <div className="sticky top-0 z-50">
          <Ticker teams={teams} />
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/methodology" element={<Methodology />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
