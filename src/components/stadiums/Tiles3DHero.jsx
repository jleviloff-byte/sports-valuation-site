// PROTOTYPE (preview only): live photorealistic 3D view of the real stadium in
// the venue card, streamed from Google's Map Tiles API (Photorealistic 3D
// Tiles) with CesiumJS, the renderer Google documents.
//
// Terms (developers.google.com/maps/documentation/tile/policies):
//  - live streaming only: no screenshots, no caching, prefetching or export;
//  - Google logo and the per-tile data attributions shown on screen
//    (showCreditsOnScreen), never covered by another logo.
// Cost guard: one root tileset request per card open (one 3-hour session),
// with a per-browser daily cap below, on top of the Cloud Console daily quota
// (docs/overhaul/tiles3d.md). Any failure (no key, quota refused, WebGL
// missing, slow load) falls back to the venue's art or footprint.
//
// Enabled only when VITE_GOOGLE_MAPS_API_KEY is set at build time and
// VITE_TILES3D_PREVIEW=1 (Vercel Preview environment only), for the venues in
// TILES3D_VENUES. Loaded lazily from the CDN when a card opens.
import { useEffect, useRef, useState } from 'react'
import HeroArt from './HeroArt.jsx'

const KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const ENABLED = !!KEY && import.meta.env.VITE_TILES3D_PREVIEW === '1'
// Framing: orbit radius (m) around the venue center, and center offset where the
// map point is not the bowl center. 3/4 aerial = pitch -38 degrees.
export const TILES3D_VENUES = {
  'fenway-park': { range: 420 },
  'michigan-stadium': { range: 620 },
  'sofi-stadium': { range: 650 },
  'kyle-field': { range: 600 },
  'daytona-international-speedway': { range: 2300 },
}
const CESIUM = 'https://cdn.jsdelivr.net/npm/cesium@1.123.0/Build/Cesium/'
const DAILY_CAP = 20 // root requests per browser per day (session guard)

export const tiles3dAvailable = (slug) => ENABLED && !!TILES3D_VENUES[slug]

function loadCesium() {
  if (window.Cesium) return Promise.resolve(window.Cesium)
  if (window.__cesiumLoading) return window.__cesiumLoading
  window.CESIUM_BASE_URL = CESIUM
  const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = CESIUM + 'Widgets/widgets.css'; document.head.appendChild(css)
  window.__cesiumLoading = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = CESIUM + 'Cesium.js'; s.async = true
    s.onload = () => res(window.Cesium); s.onerror = rej; document.head.appendChild(s)
  })
  return window.__cesiumLoading
}

function underDailyCap() {
  try {
    const k = 'tiles3d:' + new Date().toISOString().slice(0, 10)
    const n = Number(localStorage.getItem(k) || 0)
    if (n >= DAILY_CAP) return false
    localStorage.setItem(k, String(n + 1))
  } catch { /* storage blocked: rely on the Cloud Console quota */ }
  return true
}

export default function Tiles3DHero({ slug, name, lat, lng, hasArt }) {
  const host = useRef(null)
  const [state, setState] = useState('loading') // loading | live | fallback

  useEffect(() => {
    const cfg = TILES3D_VENUES[slug]
    if (!ENABLED || !cfg || !underDailyCap()) { setState('fallback'); return undefined }
    let viewer, disposed = false, raf = 0
    const fail = () => {
      if (disposed) return
      cancelAnimationFrame(raf)
      try { viewer?.destroy() } catch { /* not created */ }
      viewer = null
      setState('fallback')
    }
    const timer = setTimeout(fail, 15000) // still nothing after 15 s: show our art instead
    const t0 = performance.now()
    ;(async () => {
      const Cesium = await loadCesium()
      if (disposed || !host.current) return
      Cesium.Ion.defaultAccessToken = undefined
      Cesium.RequestScheduler.requestsByServer['tile.googleapis.com:443'] = 18
      viewer = new Cesium.Viewer(host.current, {
        baseLayer: false, baseLayerPicker: false, geocoder: false, homeButton: false, sceneModePicker: false,
        navigationHelpButton: false, animation: false, timeline: false, fullscreenButton: false, infoBox: false,
        selectionIndicator: false, requestRenderMode: false, msaaSamples: 2,
      })
      viewer.scene.globe.show = false
      viewer.scene.skyAtmosphere.show = true
      const tileset = await Cesium.Cesium3DTileset.fromUrl(`https://tile.googleapis.com/v1/3dtiles/root.json?key=${KEY}`, { showCreditsOnScreen: true })
      if (disposed) return
      viewer.scene.primitives.add(tileset)
      tileset.tileFailed.addEventListener(() => {}) // single tile errors are retried by Cesium; root failure rejects above
      // Ground height at the venue from the streamed tiles, then a slow orbit.
      const ground = Cesium.Cartesian3.fromDegrees(lng, lat)
      let center = ground
      try { const [c] = await viewer.scene.clampToHeightMostDetailed([ground]); if (c) center = c } catch { /* keep ellipsoid point */ }
      if (disposed) return
      let heading = 0
      const pitch = Cesium.Math.toRadians(-38)
      const tick = () => {
        heading += 0.0009
        viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, cfg.range))
        raf = requestAnimationFrame(tick)
      }
      tick()
      tileset.initialTilesLoaded.addEventListener(() => {
        clearTimeout(timer)
        window.__tiles3dReadyMs = Math.round(performance.now() - t0) // measured by scripts/stadiums/perf/card-open.mjs
        if (!disposed) setState('live')
      })
    })().catch(fail)
    return () => {
      disposed = true; clearTimeout(timer); cancelAnimationFrame(raf)
      try { viewer?.destroy() } catch { /* already gone */ }
    }
  }, [slug, lat, lng])

  if (state === 'fallback') return <HeroArt slug={slug} name={name} hasArt={hasArt} />
  return (
    <div className="loadout-model tiles3d" aria-label={`Live 3D view of ${name}`}>
      <div ref={host} className="tiles3d-canvas" />
      {state === 'loading' && <p className="in-progress-note tiles3d-note">Loading 3D view</p>}
    </div>
  )
}
