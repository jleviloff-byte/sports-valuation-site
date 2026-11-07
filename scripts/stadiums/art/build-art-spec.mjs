// Phase 2, step 1: data/stadium-art.json, the brick model recipe per venue.
// Archetype and parameters are derived from data/stadiums.json and the cached
// infobox (surface); a small hand-curated table adds signature features and
// fixes archetypes the rules get wrong. Seat colors come from Wikipedia's team
// color modules, with a neutral fallback that is flagged.
//
// Usage: node scripts/stadiums/art/build-art-spec.mjs
import fs from 'node:fs'
import path from 'node:path'
import { teamColors } from '../lib/colors.mjs'

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const { venues: wiki } = JSON.parse(fs.readFileSync('research/raw/stadiums/infobox.json', 'utf8'))
const wikiByUrl = Object.fromEntries(Object.values(wiki).map((w) => [w.url, w]))
const osmFile = (t) => path.join('research/raw/stadiums/osm', t.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')

const NEUTRAL = { primary: '#8C939C', secondary: '#5B6470' }
// Ballpark orientation from OSM field outlines; otherwise the ENE default the
// Official Baseball Rules recommend for home plate to second base.
const ORIENT = fs.existsSync('research/raw/stadiums/ballpark-orientation.json') ? JSON.parse(fs.readFileSync('research/raw/stadiums/ballpark-orientation.json', 'utf8')) : {}
const ENE = 67.5

// Hand-curated: signature features (max 2) and archetype fixes. Feature names
// are generic descriptions; no logos or marks.
const HAND = {
  'fenway-park': { features: ['green_monster'] },
  'wrigley-field': { features: ['ivy_wall', 'marquee'] },
  'madison-square-garden': { archetype: 'arena', features: ['cable_ring_roof'] },
  'indianapolis-motor-speedway': { layout: 'oval', front: 'W', features: ['pagoda_tower', 'yard_of_bricks'] },
  'arthur-ashe-stadium': { features: ['retractable_roof_frame'] },
  'caesars-superdome': { features: ['superdome_roof'] },
  'michigan-stadium': { tiers: 1, note: 'single continuous bowl dug into the ground' },
  'yulman-stadium': { archetype: 'horseshoe', open_ends: 1, note: 'open south end zone' },
  'lambeau-field': { tiers: 1 },
  'rose-bowl-stadium': { tiers: 1 },
  'los-angeles-memorial-coliseum': { archetype: 'horseshoe', open_ends: 1, features: ['peristyle_arch'] },
  'circuit-of-the-americas': { layout: 'road' },
  'barber-motorsports-park': { layout: 'road' },
  'mid-ohio-sports-car-course': { layout: 'road' },
  'watkins-glen-international': { layout: 'road' },
  'sonoma-raceway': { layout: 'road' },
  'portland-international-raceway': { layout: 'road' },
  'bowman-gray-stadium': { archetype: 'full_bowl', features: ['inner_oval'] },
}

function surfaceFor(v, w) {
  const s = (w?.surface || '').toLowerCase()
  if (v.venue_type === 'racetrack') return { surface: 'asphalt', infield: 'grass' }
  if (v.venue_type === 'tennis') return { surface: 'court' }
  if (v.venue_type === 'arena') return { surface: v.sports[0] === 'ice hockey' ? 'ice' : 'court' }
  if (v.venue_type === 'ballpark') return { surface: /turf|artificial|synthetic/.test(s) ? 'turf' : 'grass', infield: 'dirt' }
  if (/turf|artificial|synthetic|fieldturf|astroturf|matrix|hellas|shaw|a-turf|sprinturf|momentum|xtreme/.test(s)) return { surface: 'turf' }
  if (/grass|bermuda|bluegrass|kentucky|natural|paspalum|zoysia|hybrid/.test(s)) return { surface: 'grass' }
  return { surface: 'grass', surface_inferred: true }
}

function archetypeFor(v) {
  if (v.venue_type === 'racetrack') return 'oval_track'
  if (v.venue_type === 'tennis') return 'tennis_bowl'
  if (v.venue_type === 'ballpark') return 'ballpark'
  if (v.venue_type === 'soccer_specific') return 'soccer_specific'
  if (v.venue_type === 'arena') return 'arena'
  if (v.roof === 'dome' || v.roof === 'retractable') return 'dome'
  return 'full_bowl'
}

const out = {}
const qa = { neutral_colors: [], surface_inferred: [], no_footprint: [] }
for (const v of data.venues) {
  const w = wikiByUrl[v.sources.wikipedia]
  const hand = HAND[v.slug] || {}
  const archetype = hand.archetype ?? archetypeFor(v)
  const tiers = hand.tiers ?? (archetype === 'arena' || archetype === 'dome' ? 2 : v.capacity >= 70000 ? 3 : v.capacity >= 30000 ? 2 : 1)
  let colors = null
  for (const t of v.tenants) { colors = await teamColors(t.team, t.league); if (colors) { colors.team = t.team; break } }
  if (!colors) qa.neutral_colors.push(v.name)
  const surf = surfaceFor(v, w)
  if (surf.surface_inferred) qa.surface_inferred.push(v.name)
  const osm = w && fs.existsSync(osmFile(w.title)) ? JSON.parse(fs.readFileSync(osmFile(w.title), 'utf8')) : null
  if (!osm?.best) qa.no_footprint.push(v.name)
  out[v.slug] = {
    archetype,
    layout: archetype === 'oval_track' ? (hand.layout ?? 'oval') : undefined,
    tiers,
    open_ends: hand.open_ends ?? (archetype === 'horseshoe' ? 1 : 0),
    roof: v.roof,
    ...surf,
    seat_colors: colors ? [colors.primary, colors.secondary].filter(Boolean) : [NEUTRAL.primary, NEUTRAL.secondary],
    seat_colors_source: colors ? { team: colors.team, source: colors.source, method: colors.method || 'Wikipedia color module', brand_guide: colors.cite } : null,
    features: (hand.features || []).slice(0, 2),
    cf_bearing: archetype === 'ballpark' ? (hand.cf_bearing ?? ORIENT[v.slug]?.bearing ?? ENE) : undefined,
    cf_bearing_source: archetype === 'ballpark' ? (ORIENT[v.slug]?.bearing != null ? ORIENT[v.slug].osm : 'default: ENE per Official Baseball Rules') : undefined,
    front: hand.front,
    footprint_osm: osm?.best?.url ?? null,
    rules: hand.archetype || hand.tiers || hand.open_ends != null ? 'hand-adjusted' : 'auto',
    note: hand.note,
  }
}
fs.writeFileSync('data/stadium-art.json', JSON.stringify({ generated: new Date().toISOString(), venues: out }, null, 1))
fs.writeFileSync('research/raw/stadiums/art-qa.json', JSON.stringify(qa, null, 1))
const count = (k) => Object.values(out).reduce((m, x) => ((m[x[k]] = (m[x[k]] || 0) + 1), m), {})
console.log('archetypes', count('archetype'), 'neutral colors', qa.neutral_colors.length, 'surface inferred', qa.surface_inferred.length, 'no footprint', qa.no_footprint.length)
