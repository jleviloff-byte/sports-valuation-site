// Splits data/stadiums.json into what the browser loads:
//   public/stadiums/index.json          slim list for the map (loaded with the page)
//   public/stadiums/venues/<slug>.json  full record for the card (loaded on open)
// The card's Forbes Stadium component comes from data/forbes-breakdown.js
// (Forbes figures already on the site), keyed by team_page_slug.
//
// Usage: node scripts/stadiums/build-public.mjs
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const art = JSON.parse(fs.readFileSync('data/stadium-art.json', 'utf8')).venues
const { forbesBreakdown } = await import(pathToFileURL(path.resolve('data/forbes-breakdown.js')).href)
const renders = fs.existsSync('research/raw/stadiums/render-report.json') ? JSON.parse(fs.readFileSync('research/raw/stadiums/render-report.json', 'utf8')) : []
const rendered = new Set(fs.existsSync('public/stadiums/sprites') ? fs.readdirSync('public/stadiums/sprites').filter((f) => f.endsWith('-128.webp')).map((f) => f.replace(/-128\.webp$/, '')) : [])

const atlas = fs.existsSync('research/raw/stadiums/atlas.json') ? JSON.parse(fs.readFileSync('research/raw/stadiums/atlas.json', 'utf8')) : null

const SPORT_LABEL = { football: 'Football', baseball: 'Baseball', basketball: 'Basketball', 'ice hockey': 'Hockey', soccer: 'Soccer', motorsport: 'Motorsport', tennis: 'Tennis' }

const index = data.venues.map((v) => ({
  s: v.slug, n: v.name, c: v.city, st: v.state, la: v.lat, lo: v.lng, cap: v.capacity, ct: v.capacity_type,
  t: v.venue_type, sp: v.sports, lg: [...new Set(v.tenants.map((t) => t.league))], tm: v.tenants.map((t) => t.team), r: v.rankings.us,
  img: rendered.has(v.slug) ? 1 : 0,
  a: atlas?.venues[v.slug] ?? null, // [sheet, col, row] in public/stadiums/atlas
}))

fs.mkdirSync('public/stadiums/venues', { recursive: true })
for (const v of data.venues) {
  const tenants = v.tenants.map((t) => {
    const fb = t.team_page_slug ? forbesBreakdown[t.team_page_slug] : null
    return { ...t, forbes_stadium: fb && fb.componentsPublished !== false && fb.stadium != null ? { value_b: fb.stadium, year: fb.year, source: fb.source } : null }
  })
  const a = art[v.slug] || {}
  fs.writeFileSync(`public/stadiums/venues/${v.slug}.json`, JSON.stringify({
    ...v, tenants,
    sport_labels: Object.fromEntries(v.sports.map((s) => [s, SPORT_LABEL[s] || s])),
    art: { archetype: a.archetype, model: rendered.has(v.slug), seat_colors: a.seat_colors },
  }))
}
fs.writeFileSync('public/stadiums/index.json', JSON.stringify({ generated: data.generated, count: index.length, cpi_base_year: data.cpi_base_year, atlas: atlas && { tile: atlas.tile, sheets: atlas.sheets.map(({ sheet, cols, rows }) => ({ sheet, cols, rows })) }, venues: index }))
const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0)
console.log(`index.json ${kb('public/stadiums/index.json')} KB, ${index.length} venues, ${rendered.size} with sprites`)
