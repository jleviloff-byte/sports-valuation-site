import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { spritePx } from '../../utils/stadiumSizing.js'
import './stadiums.css'

// Lower 48 default view.
const LOWER_48 = [[-125.0, 24.2], [-66.6, 49.6]]
const FAN_MIN = 6.2 // zoom range where overlapping venues fan out instead of hiding
const FAN_MAX = 11
const MAX_FAN = 8

const fmt = (n) => n.toLocaleString('en-US')

// Stud tile for the baseplate basemap, drawn once per color mode.
function studImage(mode) {
  const s = 20
  const c = document.createElement('canvas')
  c.width = c.height = s * 2
  const ctx = c.getContext('2d')
  ctx.scale(2, 2)
  const dark = mode === 'dark'
  ctx.fillStyle = dark ? 'rgba(0,0,0,0.45)' : 'rgba(20,24,29,0.16)'
  ctx.beginPath(); ctx.arc(s / 2 + 0.9, s / 2 + 1.1, 5.6, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.9)'
  ctx.beginPath(); ctx.arc(s / 2, s / 2, 5.2, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = dark ? 'rgba(255,255,255,0.09)' : 'rgba(20,24,29,0.14)'
  ctx.lineWidth = 0.6
  ctx.stroke()
  return { width: s * 2, height: s * 2, data: ctx.getImageData(0, 0, s * 2, s * 2).data }
}

function useColorMode() {
  const get = () => (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const [mode, setMode] = useState(get)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const on = () => setMode(get())
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return mode
}

/**
 * venues: slim index rows ({ s, n, c, st, la, lo, cap, img, ... }) already filtered.
 * onSelect(slug): open a venue card.
 * focus: { slug, la, lo } to fly to.
 */
// National zoom shows each venue's real top-down footprint shape in team color
// (sprite sheets from scripts/stadiums/art/build-footprints.mjs: sheet 0 = the
// 50 largest venues, loaded with the page; sheet 1 = the rest, after the first
// render). Between REVEAL_START and REVEAL_END the shape fades out while the
// illustration fades and scales in; illustrations load per venue, only for
// venues in view. Venues whose illustration is still in progress keep their
// footprint at every zoom.
const REVEAL_START = 5.9
const REVEAL_END = 6.6
const ease = (t) => t * t * (3 - 2 * t)

export default function StadiumMap({ venues, onSelect, focus, basemap = 'muted', atlas = null }) {
  const wrap = useRef(null)
  const mapEl = useRef(null)
  const layerEl = useRef(null)
  const linesEl = useRef(null)
  const tipEl = useRef(null)
  const mapRef = useRef(null)
  const state = useRef({ venues, els: new Map(), shown: new Set(), raf: 0, sheets: {} })
  const mode = useColorMode()
  state.current.venues = venues
  state.current.onSelect = onSelect
  state.current.atlas = atlas

  // Load sheet 0 now; sheet 1 once the first venues are on screen.
  function loadSheet(n) {
    const st = state.current
    if (!atlas || st.sheets[n]) return
    st.sheets[n] = 'loading'
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => { st.sheets[n] = 'ready'; st.schedule?.() }
    img.onerror = () => { st.sheets[n] = 'failed'; st.schedule?.() }
    img.src = `/stadiums/footprints/atlas-${n}.webp`
  }
  useEffect(() => { loadSheet(0) }, [atlas]) // eslint-disable-line react-hooks/exhaustive-deps

  // Map init / style swap.
  useEffect(() => {
    const styleUrl = `/map-styles/${basemap === 'baseplate' ? 'baseplate' : 'muted'}-${mode}.json`
    if (mapRef.current) { mapRef.current.setStyle(styleUrl); return }
    const map = new maplibregl.Map({
      container: mapEl.current,
      style: styleUrl,
      bounds: LOWER_48,
      fitBoundsOptions: { padding: 12 },
      minZoom: 2.5,
      maxZoom: 15,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: { compact: true },
    })
    map.touchZoomRotate.disableRotation()
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')
    // Background patterns don't trigger styleimagemissing, so register the stud tiles on every style load.
    map.on('style.load', () => {
      for (const m of ['light', 'dark']) if (!map.hasImage(`stud-${m}`)) map.addImage(`stud-${m}`, studImage(m), { pixelRatio: 2 })
    })
    map.on('styleimagemissing', (e) => {
      if (/^stud-(light|dark)$/.test(e.id) && !map.hasImage(e.id)) map.addImage(e.id, studImage(e.id.slice(5)), { pixelRatio: 2 })
    })
    const schedule = () => { if (!state.current.raf) state.current.raf = requestAnimationFrame(() => { state.current.raf = 0; layout() }) }
    map.on('move', schedule)
    map.on('resize', schedule)
    map.on('load', schedule)
    // Venues are DOM sprites positioned with map.project, which works before any
    // tile arrives, so draw them right away instead of waiting for the basemap.
    schedule()
    mapRef.current = map
    // Test hook for scripts/stadiums/map/*.mjs: dev builds, or ?debugmap in the URL.
    if (import.meta.env.DEV || /[?&]debugmap\b/.test(location.search)) window.__stadiumMap = map
    state.current.schedule = schedule
    return undefined
  }, [mode, basemap]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => { mapRef.current?.remove(); mapRef.current = null }, [])

  // Re-layout when the filtered set changes.
  useEffect(() => { state.current.schedule?.() }, [venues])

  // Fly to a venue (search result or deep link).
  useEffect(() => {
    if (!focus || !mapRef.current) return
    mapRef.current.flyTo({ center: [focus.lo, focus.la], zoom: Math.max(mapRef.current.getZoom(), 11), speed: 1.4 })
  }, [focus])

  function elFor(v) {
    const { els } = state.current
    let el = els.get(v.s)
    if (el) return el
    el = document.createElement('button')
    el.type = 'button'
    el.className = 'venue'
    el.setAttribute('aria-label', `${v.n}, ${v.c}, ${v.st}. Capacity ${fmt(v.cap)}${v.ct === 'estimated' ? ' (estimated)' : ''}. Open details.`)
    // Every venue gets the footprint tile (atlas) and an <img> (the illustration,
    // or for venues whose illustration is in progress, the vector footprint).
    const tile = document.createElement('span')
    tile.className = 'venue-sprite'
    tile.setAttribute('aria-hidden', 'true')
    el.appendChild(tile)
    const img = document.createElement('img')
    img.alt = ''
    img.decoding = 'async'
    img.draggable = false
    img.hidden = true
    el.appendChild(img)
    el.addEventListener('click', () => state.current.onSelect?.(v.s))
    const showTip = () => {
      const t = tipEl.current
      if (!t) return
      t.innerHTML = ''
      t.append(document.createTextNode(v.n))
      const n = document.createElement('span')
      n.className = 'num'
      n.textContent = `${fmt(v.cap)}${v.ct === 'estimated' ? ' est.' : ''}`
      t.append(n)
      const r = el.getBoundingClientRect(), w = wrap.current.getBoundingClientRect()
      t.style.left = `${r.left - w.left + r.width / 2}px`
      t.style.top = `${r.top - w.top + r.height * 0.15}px`
      t.hidden = false
    }
    const hideTip = () => { if (tipEl.current) tipEl.current.hidden = true }
    el.addEventListener('mouseenter', showTip)
    el.addEventListener('focus', showTip)
    el.addEventListener('mouseleave', hideTip)
    el.addEventListener('blur', hideTip)
    layerEl.current.appendChild(el)
    els.set(v.s, el)
    return el
  }

  function layout() {
    const map = mapRef.current
    if (!map || !layerEl.current) return
    const { venues: list, els, shown } = state.current
    const zoom = map.getZoom()
    const W = layerEl.current.clientWidth, H = layerEl.current.clientHeight
    const sorted = [...list].sort((a, b) => b.cap - a.cap)
    const placed = []
    const clusters = new Map()
    const next = new Map() // slug -> { x, y, size, anchor? }
    const st = state.current
    const reveal = ease(Math.min(1, Math.max(0, (zoom - REVEAL_START) / (REVEAL_END - REVEAL_START))))
    // Venues with an illustration crossfade from footprint to art; the rest keep
    // their footprint at every zoom (sharp vector above the atlas tile size).
    const useAtlas = (v) => st.atlas && v.a && (v.img ? reveal < 1 : true)
    for (const v of sorted) {
      const p = map.project([v.lo, v.la])
      const size = spritePx(v.cap, zoom, v.t)
      if (reveal === 0 && useAtlas(v) && st.sheets[v.a[0]] !== 'ready' && st.sheets[v.a[0]] !== 'failed') continue
      if (p.x < -size || p.y < -size || p.x > W + size || p.y > H + size) continue
      const r = size * 0.34
      const hit = placed.find((q) => Math.hypot(q.x - p.x, q.y - p.y) < (q.r + r) * 0.92)
      if (!hit) { const rec = { v, x: p.x, y: p.y, r, size }; placed.push(rec); next.set(v.s, rec); continue }
      if (zoom >= FAN_MIN && zoom < FAN_MAX) {
        const root = hit.root || hit
        const members = clusters.get(root) || [root]
        if (members.length < MAX_FAN) { members.push({ v, x: p.x, y: p.y, r, size, root }); clusters.set(root, members) }
      }
    }
    // Fan clusters out radially around their centroid; leader lines go to true positions.
    const lines = []
    for (const members of clusters.values()) {
      const cx = members.reduce((s, m) => s + m.x, 0) / members.length
      const cy = members.reduce((s, m) => s + m.y, 0) / members.length
      const maxSize = Math.max(...members.map((m) => m.size))
      // Ring circumference fits every member side by side.
      const R = Math.max(maxSize * 0.62, members.reduce((t, m) => t + m.size * 0.92, 0) / (2 * Math.PI))
      members.forEach((m, i) => {
        const a = -Math.PI / 2 + (i / members.length) * Math.PI * 2
        const fx = cx + Math.cos(a) * R, fy = cy + Math.sin(a) * R
        lines.push([fx, fy, m.x, m.y])
        next.set(m.v.s, { ...m, x: fx, y: fy })
      })
    }
    // Apply.
    for (const [slug, el] of els) if (!next.has(slug)) { el.hidden = true; shown.delete(slug) }
    for (const [slug, rec] of next) {
      const el = elFor(rec.v)
      const s = rec.size
      el.style.width = `${s}px`
      el.style.height = `${s}px`
      el.style.transform = `translate(${Math.round(rec.x - s / 2)}px, ${Math.round(rec.y - s * 0.6)}px)`
      el.style.zIndex = String(Math.round(rec.y))
      const tile = el.querySelector('.venue-sprite')
      const img = el.querySelector('img')
      if (tile && img) {
        const v = rec.v
        const atlasReady = useAtlas(v) && st.sheets[v.a[0]] === 'ready'
        const tileMax = st.atlas?.tile || 96
        let showShape, artOpacity, shapeOpacity, want
        if (v.img) {
          showShape = atlasReady
          // The illustration (drawn on top) arrives first, then the shape fades out
          // beneath it, so one layer is always fully visible and nothing dips or ghosts.
          artOpacity = showShape ? ease(Math.min(1, reveal / 0.6)) : 1
          shapeOpacity = showShape ? 1 - ease(Math.max(0, (reveal - 0.45) / 0.55)) : 0
          // Lazy: only venues in view get an illustration request, sized for 2x screens.
          want = `/stadiums/sprites/${slug}-${s > 110 ? 512 : 256}.webp`
        } else {
          // Illustration in progress: footprint only. Atlas while it is sharp enough
          // (and loaded), the per-venue vector otherwise.
          showShape = atlasReady && s <= tileMax
          shapeOpacity = showShape ? 1 : 0
          artOpacity = showShape ? 0 : 1
          want = `/stadiums/footprints/venues/${slug}.svg`
        }
        tile.hidden = shapeOpacity <= 0
        if (!tile.hidden) {
          const sh = st.atlas.sheets[v.a[0]]
          tile.style.backgroundImage = `url(/stadiums/footprints/atlas-${v.a[0]}.webp)`
          tile.style.backgroundSize = `${sh.cols * s}px ${sh.rows * s}px`
          tile.style.backgroundPosition = `-${v.a[1] * s}px -${v.a[2] * s}px`
          tile.style.opacity = String(shapeOpacity)
          tile.style.transform = v.img ? `scale(${1 + 0.08 * reveal})` : ''
        }
        img.hidden = artOpacity <= 0
        if (!img.hidden) {
          if (img.getAttribute('src') !== want) img.setAttribute('src', want)
          img.style.opacity = String(artOpacity)
          img.style.transform = v.img ? `scale(${0.88 + 0.12 * artOpacity})` : ''
        }
      }
      if (el.hidden || !shown.has(slug)) {
        el.hidden = false
        el.classList.remove('pop')
        void el.offsetWidth
        el.classList.add('pop')
        shown.add(slug)
      }
    }
    // First venues are up: fetch the second sheet.
    if (next.size && st.sheets[0] === 'ready' && !st.sheets[1]) {
      const go = () => loadSheet(1)
      if ('requestIdleCallback' in window) window.requestIdleCallback(go, { timeout: 800 }); else setTimeout(go, 200)
    }
    const svg = linesEl.current
    if (svg) {
      svg.innerHTML = lines.map(([x1, y1, x2, y2]) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><circle cx="${x2}" cy="${y2}" r="2.2"/>`).join('')
    }
  }

  return (
    <div ref={wrap} className="stadium-map">
      <div ref={mapEl} className="absolute inset-0" />
      <svg ref={linesEl} className="venue-lines" aria-hidden="true" />
      <div ref={layerEl} className="venue-layer" role="list" aria-label="Venues on the map" />
      <div ref={tipEl} className="venue-tip" hidden role="tooltip" />
    </div>
  )
}
