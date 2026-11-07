import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BrickModelViewer from './BrickModelViewer.jsx'

const NA = 'N/A'
const fmt = (n) => (n == null ? NA : n.toLocaleString('en-US'))
const money = (x) => (x == null ? NA : x >= 1e9 ? `$${(x / 1e9).toFixed(2)}B` : x >= 1e6 ? `$${(x / 1e6).toFixed(x >= 1e8 ? 0 : 1)}M` : `$${fmt(x)}`)
const TYPE_LABEL = { stadium: 'Stadium', arena: 'Arena', ballpark: 'Ballpark', soccer_specific: 'Soccer-specific stadium', racetrack: 'Racetrack', tennis: 'Tennis stadium' }
const ROOF_LABEL = { open: 'Open air', retractable: 'Retractable roof', dome: 'Fixed roof' }
const SOURCE_LABEL = {
  wikipedia: 'Wikipedia article', capacity: 'Capacity', capacity_cited: 'Capacity (cited)', capacity_verified: 'Capacity (official)', lat: 'Location', state: 'State',
  city: 'City', tenants: 'Tenants', roof: 'Roof', opened: 'Opened', opened_verified: 'Opened (official)', cost_nominal: 'Construction cost', cost_nominal_verified: 'Cost (official)',
  cost_real: 'CPI-U (BLS)', renovations: 'Renovations',
}

// Panel slots around the model, as angles (deg) on an ellipse: left column, right column, bottom.
const SLOTS = [-155, 180, 155, -25, 0, 25, 90]

function Panel({ title, children, style, delay, accent }) {
  return (
    <section className="loadout-panel" style={{ ...style, '--delay': `${delay}s`, '--panel-accent': accent }}>
      <h3 className="eyebrow mb-1">{title}</h3>
      {children}
    </section>
  )
}

export default function LoadoutCard({ slug, exists, ranked, onClose, onNavigate }) {
  const [v, setV] = useState(null)
  const [err, setErr] = useState(false)
  const stage = useRef(null)
  const dialog = useRef(null)
  const closeBtn = useRef(null)
  const [geo, setGeo] = useState(null)
  // Radial layout needs room for two 230px panel columns beside the model.
  const fits = () => window.innerWidth >= 1180 && window.innerHeight >= 680
  const [wide, setWide] = useState(fits)

  useEffect(() => {
    setV(null); setErr(false)
    if (!exists) return
    let live = true
    fetch(`/stadiums/venues/${slug}.json`).then((r) => (r.ok ? r.json() : Promise.reject())).then((j) => live && setV(j)).catch(() => live && setErr(true))
    return () => { live = false }
  }, [slug, exists])

  const idx = ranked.findIndex((r) => r.s === slug)
  const prev = idx > 0 ? ranked[idx - 1] : null
  const next = idx >= 0 && idx < ranked.length - 1 ? ranked[idx + 1] : null

  // Keyboard: Esc closes, arrows step by capacity rank, Tab stays inside the dialog.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && prev) onNavigate(prev.s)
      else if (e.key === 'ArrowRight' && next) onNavigate(next.s)
      else if (e.key === 'Tab' && dialog.current) {
        const f = [...dialog.current.querySelectorAll('a[href],button:not([disabled])')]
        if (!f.length) return
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus() }
        else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow }
  }, [prev, next, onClose, onNavigate])

  // Panel geometry (desktop only).
  useLayoutEffect(() => {
    const measure = () => {
      setWide(fits())
      const el = stage.current
      if (!el) return
      setGeo({ W: el.clientWidth, H: el.clientHeight })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [v])

  const accent = v?.art?.seat_colors?.[0] || '#7A9CCC'
  const panels = v ? buildPanels(v) : []
  let placed = []
  let paths = []
  if (wide && geo && v) {
    const { W, H } = geo
    const cx = W / 2, cy = H / 2
    const model = Math.min(W * 0.42, 520)
    const rx = Math.min(W / 2 - 246, model * 0.5 + 250), ry = Math.min(H / 2 - 90, model * 0.5 + 40)
    placed = panels.map((p, i) => {
      const a = (SLOTS[i] * Math.PI) / 180
      const px = cx + Math.cos(a) * rx, py = cy + Math.sin(a) * ry
      const left = Math.cos(a) < -0.2, right = Math.cos(a) > 0.2
      const x = left ? px - 230 : right ? px : px - 115
      const y = SLOTS[i] === 90 ? Math.min(py, H - 150) : py - 44
      const sx = cx + Math.cos(a) * model * 0.36, sy = cy + Math.sin(a) * model * 0.3
      const ex = left ? x + 230 : right ? x : x + 115, ey = SLOTS[i] === 90 ? y : y + 22
      const mx = left || right ? ex + (left ? 24 : -24) : sx
      const d = left || right ? `M${sx},${sy} L${mx},${ey} L${ex},${ey}` : `M${sx},${sy} L${ex},${ey}`
      paths.push({ d, len: Math.hypot(mx - sx, ey - sy) + Math.abs(ex - mx) + 4, delay: i * 0.08 })
      return { ...p, style: { left: x, top: y } }
    })
  } else placed = panels.map((p) => ({ ...p, style: {} }))

  return (
    <>
      <div className="loadout-backdrop animate-backdrop-in" onClick={onClose} aria-hidden="true" />
      <div ref={dialog} className={`loadout${wide ? '' : ' stacked'}`} role="dialog" aria-modal="true" aria-labelledby="loadout-title">
        <header className="flex items-start gap-3 px-4 sm:px-8 pt-5">
          <div className="min-w-0">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A0A8B3]">
              {v ? `${v.rankings.us ? `#${v.rankings.us} of ${v.rankings.us_of} in the US` : `#${v.rankings.sport.motorsport?.rank} of ${v.rankings.sport.motorsport?.of} motorsport venues`} · ${TYPE_LABEL[v.venue_type] || v.venue_type} · ${ROOF_LABEL[v.roof] || NA}` : 'Loading'}
            </div>
            <h2 id="loadout-title" className="text-2xl sm:text-3xl font-semibold text-white mt-1 leading-tight break-words">{v?.name || ranked[idx]?.n || 'Venue not found'}</h2>
          </div>
          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button type="button" disabled={!prev} onClick={() => prev && onNavigate(prev.s)} aria-label={prev ? `Previous by capacity: ${prev.n}` : 'No larger venue'}
              className="w-10 h-10 border border-[#2A313A] rounded-sm text-white disabled:opacity-30 hover:bg-white/10">←</button>
            <button type="button" disabled={!next} onClick={() => next && onNavigate(next.s)} aria-label={next ? `Next by capacity: ${next.n}` : 'No smaller venue'}
              className="w-10 h-10 border border-[#2A313A] rounded-sm text-white disabled:opacity-30 hover:bg-white/10">→</button>
            <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close (Esc)" className="w-10 h-10 border border-[#2A313A] rounded-sm text-white hover:bg-white/10">✕</button>
          </div>
        </header>

        {!exists && <p className="px-8 py-10 text-[#A0A8B3]">No venue with that address. It may have been renamed.</p>}
        {err && <p className="px-8 py-10 text-[#A0A8B3]">Could not load this venue.</p>}

        {v && (
          <div ref={stage} className="loadout-stage">
            <BrickModelViewer key={v.slug} slug={v.slug} name={v.name} hasModel={v.art?.model} />
            {wide && (
              <svg className="loadout-lines" width={geo?.W || 0} height={geo?.H || 0} aria-hidden="true">
                {paths.map((p, i) => <path key={`${v.slug}-${i}`} d={p.d} style={{ '--len': p.len, '--delay': `${p.delay}s` }} />)}
              </svg>
            )}
            {placed.map((p, i) => (
              <Panel key={`${v.slug}-${p.title}`} title={p.title} style={p.style} delay={i * 0.08} accent={accent}>{p.body}</Panel>
            ))}
          </div>
        )}

        {v && (
          <footer className="px-4 sm:px-8 pb-6 pt-2 text-[11px] text-[#A0A8B3] leading-relaxed">
            <span className="mr-2">Sources:</span>
            {Object.entries(v.sources).filter(([k]) => SOURCE_LABEL[k]).map(([k, url]) => (
              <a key={k} href={url.split(' ')[0]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 mr-3 hover:text-white">{SOURCE_LABEL[k]}</a>
            ))}
            <span className="whitespace-nowrap">Last verified {v.last_verified}.</span>
            {v.capacity_type === 'estimated' && <span className="block mt-1">Racetrack capacities are published estimates, so racetracks are ranked only against other motorsport venues.</span>}
            <span className="ml-2">Footprint © OpenStreetMap contributors.</span>
          </footer>
        )}
      </div>
    </>
  )
}

function buildPanels(v) {
  const sports = Object.entries(v.capacity_by_sport || {}).filter(([, c]) => c != null)
  const reno = v.renovations?.length ? v.renovations[v.renovations.length - 1] : null
  const thisYear = new Date().getFullYear()
  return [
    {
      title: v.capacity_type === 'estimated' ? 'Capacity (estimated)' : 'Seated capacity',
      body: (
        <>
          <div className="big">{fmt(v.capacity)}{v.capacity_type === 'estimated' && <span className="text-base text-[#A0A8B3] ml-1.5">est.</span>}</div>
          {sports.length > 1 && (
            <ul className="mt-1 text-[12px] text-[#C9CED6]">
              {sports.map(([s, c]) => <li key={s}>{v.sport_labels?.[s] || s}: <span className="num">{fmt(c)}{v.capacity_type === 'estimated' ? ' est.' : ''}</span></li>)}
            </ul>
          )}
        </>
      ),
    },
    { title: 'Location', body: <><div className="text-lg text-white">{v.city || NA}, {v.state}</div><div className="num text-[11px] text-[#A0A8B3]">{v.lat.toFixed(3)}, {v.lng.toFixed(3)}</div></> },
    {
      title: 'Current tenants',
      body: (
        <ul className="text-[13px] space-y-1">
          {v.tenants.map((t) => (
            <li key={`${t.team}-${t.league}`}>
              {t.team_page_slug ? <Link to={`/?team=${t.team_page_slug}`}>{t.team}</Link> : <span className="text-white">{t.team}</span>}
              <span className="font-mono text-[10px] text-[#A0A8B3] ml-1.5">{t.league}</span>
              {t.forbes_stadium && (
                <div className="font-mono text-[11px] text-[#C9CED6]">Forbes stadium value {money(t.forbes_stadium.value_b * 1e9)} ({t.forbes_stadium.year})</div>
              )}
            </li>
          ))}
        </ul>
      ),
    },
    { title: 'Opened', body: <><div className="big">{v.opened ?? NA}</div>{v.opened && <div className="text-[12px] text-[#C9CED6]">{thisYear - v.opened} years in use</div>}</> },
    {
      title: 'Most recent renovation',
      body: reno ? (
        <>
          <div className="big">{reno.year}</div>
          <div className="text-[12px] text-[#C9CED6]">{reno.description || 'Scope: N/A'}</div>
          <div className="font-mono text-[12px] text-white mt-0.5">Cost: {money(reno.cost_nominal)}</div>
        </>
      ) : <div className="big">{NA}</div>,
    },
    {
      title: 'Construction cost',
      body: (
        <>
          <div className="big">{money(v.cost_nominal)}</div>
          <div className="text-[12px] text-[#C9CED6]">{v.cost_nominal != null ? `${v.cost_year ?? NA} dollars` : 'Not published'}</div>
          <div className="font-mono text-[12px] text-white mt-0.5">{money(v.cost_real)} in 2025 dollars{v.cost_pre_1913 ? '*' : ''}</div>
          {v.cost_pre_1913 && <div className="text-[10px] text-[#A0A8B3]">*Built before 1913; adjusted from the 1913 CPI.</div>}
        </>
      ),
    },
    {
      title: 'Rankings by capacity',
      body: (
        <ul className="text-[13px] space-y-0.5">
          {v.rankings.state != null && <li><span className="num text-white">#{v.rankings.state}</span> of {v.rankings.state_of} in {v.state}</li>}
          {v.rankings.us != null && <li><span className="num text-white">#{v.rankings.us}</span> of {v.rankings.us_of} in the US</li>}
          {Object.entries(v.rankings.sport).map(([s, r]) => (
            <li key={s}><span className="num text-white">#{r.rank}</span> of {r.of} {(v.sport_labels?.[s] || s).toLowerCase()} venues</li>
          ))}
        </ul>
      ),
    },
  ]
}
