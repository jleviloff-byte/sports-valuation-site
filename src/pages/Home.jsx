import { useState, useEffect, lazy, Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'
import teams from '../../data/allTeams.js'
import { getEnrichment } from '../../data/enrichments.js'
import { trackTeamViewed, trackScrollDepth } from '../utils/analytics.js'
import TitleBar from '../components/TitleBar.jsx'
import LeagueExplorer from '../components/LeagueExplorer.jsx'
import LazyOnVisible from '../components/LazyOnVisible.jsx'
import SectionSkeleton from '../components/SectionSkeleton.jsx'

// The home route owns the full team dataset; other routes no longer load it.
// Heavy / below-the-fold components — lazy-loaded so the recharts + d3
// chunks don't ship with the initial bundle. Each chunk only downloads
// when the wrapping <LazyOnVisible> scrolls near the viewport.
const ValuationsOverTime = lazy(() => import('../components/ValuationsOverTime.jsx'))
const CitiesMap          = lazy(() => import('../components/CitiesMap.jsx'))
const CompareTool        = lazy(() => import('../components/CompareTool.jsx'))
const TeamDetailPanel    = lazy(() => import('../components/TeamDetailPanel.jsx'))

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

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTeam, setSelectedTeam] = useState(null)
  useScrollDepthTracking()

  // Deep link: /?team=<teamId> opens that team's profile (used by Recent Sales).
  const deepLinkId = searchParams.get('team')
  useEffect(() => {
    if (!deepLinkId) return
    const team = teams.find((t) => t.id === deepLinkId)
    if (team) handleSelectTeam(team)
  }, [deepLinkId])

  function handleSelectTeam(team) {
    setSelectedTeam(team)
    if (team) trackTeamViewed(team.name, team.league, team.currentValuation)
  }

  function handleClosePanel() {
    setSelectedTeam(null)
    if (searchParams.has('team')) {
      const next = new URLSearchParams(searchParams)
      next.delete('team')
      setSearchParams(next, { replace: true })
    }
  }

  return (
    <>
      <main>
        <TitleBar teamCount={teams.length} />
        <LeagueExplorer
          teams={teams}
          onSelectTeam={handleSelectTeam}
          selectedTeam={selectedTeam}
        />

        <div id="macro">
          <LazyOnVisible minHeight={620}>
            <Suspense fallback={<SectionSkeleton label="Loading macro chart…" height={620} />}>
              <ValuationsOverTime teams={teams} />
            </Suspense>
          </LazyOnVisible>
        </div>

        {/* id wrappers sit OUTSIDE LazyOnVisible so the hash anchors
            (/#cities, /#compare) resolve immediately on route change,
            even before the IntersectionObserver has triggered the
            heavyweight chart mount. Without this, clicking Cities or
            Compare in the nav from another page silently scrolled to the
            top because document.querySelector('#cities') returned null
            at the moment ScrollManager ran. */}
        <div id="cities">
          <LazyOnVisible minHeight={760}>
            <Suspense fallback={<SectionSkeleton label="Loading map…" height={760} />}>
              <CitiesMap teams={teams} />
            </Suspense>
          </LazyOnVisible>
        </div>

        <div id="compare">
          <LazyOnVisible minHeight={600}>
            <Suspense fallback={<SectionSkeleton label="Loading compare tool…" height={600} />}>
              <CompareTool teams={teams} />
            </Suspense>
          </LazyOnVisible>
        </div>
      </main>

      {selectedTeam && (
        <Suspense fallback={null}>
          <TeamDetailPanel
            team={selectedTeam}
            enrichment={getEnrichment(selectedTeam.name)}
            onClose={handleClosePanel}
          />
        </Suspense>
      )}
    </>
  )
}
