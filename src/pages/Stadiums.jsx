import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { spritePx, LEGEND_CAPACITIES } from '../utils/stadiumSizing.js'

const StadiumMap = lazy(() => import('../components/stadiums/StadiumMap.jsx'))
const LoadoutCard = lazy(() => import('../components/stadiums/LoadoutCard.jsx'))

const LEAGUES = ['NFL', 'MLB', 'NBA', 'NHL', 'MLS', 'NWSL', 'WNBA', 'NCAA FBS', 'NCAA FCS', 'NCAA D1 basketball', 'NASCAR Cup', 'IndyCar', 'Formula 1', 'Tennis', 'Neutral site']
const LEAGUE_LABEL = { 'NCAA D1 basketball': 'College hoops', 'NCAA FBS': 'FBS', 'NCAA FCS': 'FCS', 'NASCAR Cup': 'NASCAR', 'Formula 1': 'F1', 'Neutral site': 'Neutral site' }
const fmt = (n) => n.toLocaleString('en-US')
const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

function useStadiumIndex() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    let live = true
    fetch('/stadiums/index.json').then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((j) => live && setData(j)).catch((e) => live && setError(e))
    return () => { live = false }
  }, [])
  return { data, error }
}

function setMeta(title, description, path) {
  document.title = title
  const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val) }
  set('meta[name="description"]', 'content', description)
  set('meta[property="og:title"]', 'content', title)
  set('meta[property="og:description"]', 'content', description)
  set('link[rel="canonical"]', 'href', `https://franchisemath.site${path}`)
}

function Legend() {
  return (
    <div className="editorial-card px-3 py-2 flex items-end gap-4" aria-label="Size legend">
      {LEGEND_CAPACITIES.map((c) => {
        const s = spritePx(c, 4.6)
        return (
          <div key={c} className="flex flex-col items-center gap-1">
            <span className="block rounded-sm border border-ink/40 bg-ink/10" style={{ width: s * 0.8, height: s * 0.5 }} aria-hidden="true" />
            <span className="font-mono text-[10px] text-graphite">{c / 1000}k</span>
          </div>
        )
      })}
      <span className="eyebrow self-center">Seats</span>
    </div>
  )
}

function Search({ venues, onPick }) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const results = useMemo(() => {
    const n = norm(q.trim())
    if (n.length < 2) return []
    const out = []
    for (const v of venues) {
      const hay = [v.n, `${v.c}, ${v.st}`, ...v.tm]
      const hit = hay.find((h) => norm(h).includes(n))
      if (hit) out.push({ v, why: hit === v.n ? `${v.c}, ${v.st}` : hit })
      if (out.length >= 8) break
    }
    return out
  }, [q, venues])
  function pick(r) { setQ(''); setOpen(false); onPick(r.v) }
  return (
    <div className="relative w-full sm:w-72">
      <label htmlFor="venue-search" className="sr-only">Search venues, teams or cities</label>
      <input
        id="venue-search" type="search" value={q} autoComplete="off"
        placeholder="Search venue, team or city"
        onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(0) }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)) }
          if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)) }
          if (e.key === 'Enter' && results[active]) pick(results[active])
          if (e.key === 'Escape') setOpen(false)
        }}
        role="combobox" aria-expanded={open && results.length > 0} aria-controls="venue-search-list"
        className="w-full h-9 px-3 bg-card border border-rule rounded-sm text-sm text-ink placeholder:text-ash focus:outline-none focus:border-accent"
      />
      {open && results.length > 0 && (
        <ul id="venue-search-list" role="listbox" className="absolute z-30 left-0 right-0 mt-1 editorial-card max-h-80 overflow-auto">
          {results.map((r, i) => (
            <li key={r.v.s} role="option" aria-selected={i === active}>
              <button type="button" onMouseDown={() => pick(r)} className={`w-full text-left px-3 py-2 ${i === active ? 'bg-accent-soft' : ''}`}>
                <div className="text-sm text-ink">{r.v.n}</div>
                <div className="font-mono text-[10px] text-slate">{r.why} · {fmt(r.v.cap)}</div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Stadiums() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const { data, error } = useStadiumIndex()
  const [leagues, setLeagues] = useState(() => new Set((params.get('leagues') || '').split(',').filter(Boolean)))
  const [minCap, setMinCap] = useState(() => Number(params.get('min')) || 15000)
  const [focus, setFocus] = useState(null)
  const basemap = params.get('basemap') === 'baseplate' ? 'baseplate' : 'muted'
  const lastFocused = useRef(null)

  const all = data?.venues || []
  const filtered = useMemo(() => all.filter((v) => v.cap >= minCap && (!leagues.size || v.lg.some((l) => leagues.has(l)))), [all, minCap, leagues])
  const ranked = useMemo(() => [...all].sort((a, b) => a.r - b.r || a.n.localeCompare(b.n)), [all])
  const hawaii = all.filter((v) => v.st === 'HI' || v.st === 'AK')

  // Keep filters in the URL so views can be shared.
  useEffect(() => {
    const next = new URLSearchParams(params)
    leagues.size ? next.set('leagues', [...leagues].join(',')) : next.delete('leagues')
    minCap > 15000 ? next.set('min', String(minCap)) : next.delete('min')
    if (next.toString() !== params.toString()) setParams(next, { replace: true })
  }, [leagues, minCap]) // eslint-disable-line react-hooks/exhaustive-deps

  const current = slug ? all.find((v) => v.s === slug) : null
  useEffect(() => {
    if (current) setMeta(`${current.n}: ${fmt(current.cap)} seats | Stadium Map | Franchise Math`, `${current.n} in ${current.c}, ${current.st}: capacity ${fmt(current.cap)}, rank #${current.r} of ${all.length} US venues with 15,000+ seats. Tenants, cost in 2025 dollars, renovations and rankings.`, `/stadiums/${current.s}`)
    else setMeta('Stadium Map: every US venue with 15,000+ seats | Franchise Math', `${all.length || 'Every'} US stadiums, arenas, ballparks, racetracks and tennis venues with 15,000+ seats, drawn to scale by capacity.`, '/stadiums')
  }, [current, all.length])

  function open(s) {
    lastFocused.current = document.activeElement
    navigate({ pathname: `/stadiums/${s}`, search: params.toString() ? `?${params}` : '' })
  }
  function close() {
    navigate({ pathname: '/stadiums', search: params.toString() ? `?${params}` : '' })
    setTimeout(() => lastFocused.current?.focus?.(), 0)
  }
  function toggle(l) { setLeagues((prev) => { const n = new Set(prev); n.has(l) ? n.delete(l) : n.add(l); return n }) }

  return (
    <main className="bg-paper">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow">Stadium Map</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-3xl sm:text-[32px]">Every US venue with 15,000+ seats, to scale</h1>
        <p className="text-sm text-graphite mt-2 max-w-3xl">
          {all.length ? `${fmt(all.length)} stadiums, arenas, ballparks, racetracks and tennis venues.` : 'Stadiums, arenas, ballparks, racetracks and tennis venues.'} Each brick-built model is sized by seated capacity, so a 100,000-seat bowl looks bigger than a 20,000-seat arena. Click one for its numbers.
        </p>
        <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-3">
          <Search venues={all} onPick={(v) => { setFocus({ ...v }); open(v.s) }} />
          <div className="flex items-center gap-2">
            <label htmlFor="min-cap" className="eyebrow whitespace-nowrap">Min seats</label>
            <input id="min-cap" type="range" min={15000} max={110000} step={5000} value={minCap} onChange={(e) => setMinCap(Number(e.target.value))} className="w-36 accent-[var(--accent)]" />
            <span className="num text-sm text-ink w-16">{fmt(minCap)}</span>
          </div>
          <div className="lg:ml-auto"><Legend /></div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label="Filter by league">
          {LEAGUES.map((l) => {
            const on = leagues.has(l)
            return (
              <button key={l} type="button" aria-pressed={on} onClick={() => toggle(l)}
                className={`font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 h-7 rounded-full border transition-colors ${on ? 'bg-ink text-paper border-ink' : 'bg-card text-graphite border-rule hover:border-ink'}`}>
                {LEAGUE_LABEL[l] || l}
              </button>
            )
          })}
          {(leagues.size > 0 || minCap > 15000) && (
            <button type="button" onClick={() => { setLeagues(new Set()); setMinCap(15000) }} className="font-mono text-[10px] uppercase tracking-wider text-accent px-2 h-7">Clear</button>
          )}
          <span className="font-mono text-[10px] text-slate self-center ml-1">{filtered.length} shown</span>
        </div>
      </section>

      <section className="relative border-y border-rule" style={{ height: 'min(78vh, 820px)', minHeight: 460 }}>
        {error && <div className="absolute inset-0 flex items-center justify-center text-sm text-slate">Could not load venue data.</div>}
        {data && (
          <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center eyebrow">Loading map</div>}>
            <StadiumMap venues={filtered} onSelect={open} focus={focus} basemap={basemap} />
          </Suspense>
        )}
        {hawaii.length > 0 && (
          <div className="absolute left-3 bottom-8 z-10 flex gap-1.5">
            {hawaii.map((v) => (
              <button key={v.s} type="button" onClick={() => setFocus({ ...v })} className="editorial-card px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-graphite hover:text-ink">
                {v.st === 'HI' ? 'Hawaii' : 'Alaska'}: {v.n}
              </button>
            ))}
          </div>
        )}
        <div className="absolute right-3 bottom-8 z-10">
          <button type="button" onClick={() => { const n = new URLSearchParams(params); basemap === 'baseplate' ? n.delete('basemap') : n.set('basemap', 'baseplate'); setParams(n, { replace: true }) }}
            className="editorial-card px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-graphite hover:text-ink">
            Basemap: {basemap === 'baseplate' ? 'Baseplate' : 'Muted'}
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-xs text-slate leading-relaxed max-w-4xl">
          Capacity is current official seated capacity (racetracks are estimates). Venue data from Wikipedia and official team, venue and school sites, cross-checked and cited per field. Footprints © OpenStreetMap contributors (ODbL). Map tiles by OpenFreeMap, © OpenMapTiles. Construction costs in 2025 dollars use BLS CPI-U. Brick models are stylized illustrations, not architectural drawings.
        </p>
      </section>

      {slug && data && (
        <Suspense fallback={null}>
          <LoadoutCard
            slug={slug}
            exists={!!current}
            ranked={ranked}
            onClose={close}
            onNavigate={(s) => navigate({ pathname: `/stadiums/${s}`, search: params.toString() ? `?${params}` : '' }, { replace: true })}
          />
        </Suspense>
      )}
    </main>
  )
}
