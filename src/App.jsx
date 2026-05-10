import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import teams from '../data/allTeams.js'
import { getEnrichment } from '../data/enrichments.js'
import {
  trackTeamViewed,
  trackScrollDepth,
  trackSubstackReferralOnce,
  trackPageView,
} from './utils/analytics.js'
import TitleBar from './components/TitleBar.jsx'
import LeagueExplorer from './components/LeagueExplorer.jsx'
import { DriversExplainer, ProblemStats } from './components/Hero.jsx'
import ValuationsOverTime from './components/ValuationsOverTime.jsx'
import CitiesMap from './components/CitiesMap.jsx'
import CompareTool from './components/CompareTool.jsx'
import TeamDetailPanel from './components/TeamDetailPanel.jsx'
import Ticker from './components/Ticker.jsx'
import Methodology from './pages/Methodology.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import DataSources from './pages/DataSources.jsx'

// Scrolls to the in-page anchor when the URL hash changes (since react-router
// doesn't do this automatically). Also scrolls to top on plain route changes.
function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    // Fire a page_view on every route change. (The GA snippet uses
    // send_page_view: false so we own this manually for the SPA.)
    trackPageView(location.pathname + location.search + location.hash)

    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // Small delay so the destination is mounted before we scroll
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash, location.search])
  return null
}

const MOBILE_NAV_LINKS = [
  { to: '/#explorer',     label: 'Explore Teams' },
  { to: '/#compare',      label: 'Compare' },
  { to: '/#cities',       label: 'Cities' },
  { to: '/methodology',   label: 'How We Built This' },
  { to: '/data-sources',  label: 'Data Sources' },
  { to: '/privacy',       label: 'Legal' },
]

function MobileMenu({ open, onClose }) {
  // Lock body scroll while menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] md:hidden">
      <div
        className="absolute inset-0 bg-ink/55 animate-backdrop-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 bg-white border-b-2 border-ink shadow-modal animate-fade-in">
        <div className="px-5 py-4 flex items-center justify-between border-b border-rule">
          <span className="font-serif italic text-lg font-bold text-ink">
            What's a Team Worth?
          </span>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-ink hover:bg-paper rounded-sm transition-colors text-xl border border-rule"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className="py-2">
          {MOBILE_NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="block min-h-[56px] flex items-center px-5 py-4 border-b border-rule font-serif text-xl text-ink hover:bg-callout transition-colors"
            >
              {link.label}
              <span className="ml-auto text-accent text-base font-sans">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-9 z-40 bg-paper/95 backdrop-blur border-b border-rule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif italic text-lg sm:text-xl font-bold text-ink hover:text-accent transition-colors"
          >
            What's a Team Worth?
          </Link>

          {/* Desktop nav (md+) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-slate">
            <Link to="/#explorer"  className="hover:text-ink transition-colors">Explorer</Link>
            <Link to="/#framework" className="hover:text-ink transition-colors">Framework</Link>
            <Link to="/#macro"     className="hover:text-ink transition-colors">Macro</Link>
            <Link to="/#cities"    className="hover:text-ink transition-colors">Cities</Link>
            <Link to="/#compare"   className="hover:text-ink transition-colors">Compare</Link>
            <span className="w-px h-4 bg-rule" aria-hidden="true" />
            <Link to="/methodology"  className="hover:text-accent transition-colors">How We Built This</Link>
            <Link to="/data-sources" className="hover:text-accent transition-colors">Sources</Link>
          </div>

          {/* Mobile hamburger (below md) */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-ink hover:bg-paper rounded-sm transition-colors"
          >
            <span className="block w-6 h-0.5 bg-ink" />
            <span className="block w-6 h-0.5 bg-ink" />
            <span className="block w-6 h-0.5 bg-ink" />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink mt-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top row — masthead + nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif italic text-xl font-bold text-ink hover:text-accent transition-colors"
            >
              What's a Team Worth?
            </Link>
            <p className="text-sm text-graphite mt-3 leading-relaxed max-w-md">
              An interactive guide to the value of every major professional sports
              franchise. 174 teams across six leagues. Independent analysis by
              <span className="font-semibold text-ink"> Josh Leviloff</span>.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate mb-3">
              Explore
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#explorer"  className="text-graphite hover:text-ink transition-colors">Explorer</Link></li>
              <li><Link to="/#framework" className="text-graphite hover:text-ink transition-colors">Framework</Link></li>
              <li><Link to="/#macro"     className="text-graphite hover:text-ink transition-colors">Macro</Link></li>
              <li><Link to="/#cities"    className="text-graphite hover:text-ink transition-colors">Cities</Link></li>
              <li><Link to="/#compare"   className="text-graphite hover:text-ink transition-colors">Compare</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate mb-3">
              About
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/methodology"  className="text-graphite hover:text-ink transition-colors">Methodology</Link></li>
              <li><Link to="/data-sources" className="text-graphite hover:text-ink transition-colors">Data Sources</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate mb-3">
              Legal
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-graphite hover:text-ink transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms"   className="text-graphite hover:text-ink transition-colors">Terms of Service</Link></li>
              <li><Link to="/data-sources" className="text-graphite hover:text-ink transition-colors">Disclaimers</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer row */}
        <div className="border-t border-rule pt-6">
          <p className="text-xs text-slate leading-relaxed max-w-4xl font-serif italic">
            All valuation breakdowns are independent estimates and opinions of{' '}
            <span className="not-italic font-sans font-semibold text-ink">Josh Leviloff</span>.
            Not financial advice. Sources include Forbes, Sportico, and the Sports
            Business Journal. All opinions are my own and do not represent any
            employer or institution.
          </p>
        </div>

        {/* Bottom row — colophon */}
        <div className="border-t border-rule mt-6 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-[10px] text-slate tracking-widest uppercase">
            What's a Team Worth? &nbsp;·&nbsp; Data: Forbes 2024–2025 estimates &nbsp;·&nbsp; 174 franchises &nbsp;·&nbsp; 6 leagues
          </span>
          <span className="font-mono text-[10px] text-ash tracking-widest uppercase">
            © 2026 Josh Leviloff
          </span>
        </div>
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

function useScrollDepthTracking() {
  // Fires scroll_depth events at 25/50/75/90% page depth, once per mount.
  useEffect(() => {
    const fired = new Set()
    function onScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const depth = Math.min(100, Math.round((window.scrollY / docHeight) * 100))
      for (const t of [25, 50, 75, 90]) {
        if (depth >= t && !fired.has(t)) {
          fired.add(t)
          trackScrollDepth(t)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

function HomePage() {
  const [selectedTeam, setSelectedTeam] = useState(null)
  useScrollDepthTracking()

  function handleSelectTeam(team) {
    setSelectedTeam(team)
    if (team) trackTeamViewed(team.name, team.league, team.currentValuation)
  }

  return (
    <>
      <main>
        <TitleBar />
        <MethodologyCallout />
        <LeagueExplorer
          teams={teams}
          onSelectTeam={handleSelectTeam}
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
  useEffect(() => {
    trackSubstackReferralOnce()
  }, [])

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
          <Route path="/methodology"  element={<Methodology />} />
          <Route path="/data-sources" element={<DataSources />} />
          <Route path="/privacy"      element={<PrivacyPolicy />} />
          <Route path="/terms"        element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
