// Writes scripts/stadiums/art/art-qa.md: where the brick models rely on
// fallbacks rather than sourced data or a real footprint.
// Usage: node scripts/stadiums/art/build-art-qa.mjs
import fs from 'node:fs'

const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const art = JSON.parse(fs.readFileSync('data/stadium-art.json', 'utf8')).venues
const qa = JSON.parse(fs.readFileSync('research/raw/stadiums/art-qa.json', 'utf8'))
const rr = JSON.parse(fs.readFileSync('research/raw/stadiums/render-report.json', 'utf8'))
const name = Object.fromEntries(data.venues.map((v) => [v.slug, v.name]))
const list = (xs) => (xs.length ? xs.join(', ') : '_None._')
const kb = (n) => Math.round(n / 1024)
const sum = (k) => rr.reduce((t, r) => t + r.sizes[k], 0)

const ballparks = Object.entries(art).filter(([, a]) => a.archetype === 'ballpark')
const out = [
  '# Brick art QA', '',
  `Generated ${new Date().toISOString().slice(0, 10)}. ${rr.length} venues rendered. Spec: \`data/stadium-art.json\`. Renderer: \`scripts/stadiums/art/render.mjs\`.`, '',
  '## Output sizes', '',
  `- 128px sprites: ${kb(sum('s128'))} KB total, ${kb(sum('s128') / rr.length)} KB average`,
  `- 256px sprites: ${kb(sum('s256'))} KB total`,
  `- 1024px heroes: ${kb(sum('hero'))} KB total, ${kb(sum('hero') / rr.length)} KB average`,
  `- Card models (GLB, meshopt): see public/stadiums/models (compressed after render)`, '',
  '## Footprint fallbacks', '',
  `**No OSM footprint, generic rounded outline used** (${rr.filter((r) => r.generic_footprint).length}): ${list(rr.filter((r) => r.generic_footprint).map((r) => r.name))}`, '',
  `**Ring-shaped OSM footprint (field mapped as a hole), convex hull used** (${rr.filter((r) => r.usedHull).length}): ${list(rr.filter((r) => r.usedHull).map((r) => r.name))}`, '',
  '## Colors', '',
  `**No sourced team colors, neutral gray seats** (${qa.neutral_colors.length}). Racetracks, tennis, neutral sites and a few colleges not in the color module. MLS and NWSL colors come from the club article's table styling (no soccer color module exists): ${list(qa.neutral_colors)}`, '',
  '## Rule-based parameters to review', '',
  `- **Ballpark orientation**: ${ballparks.filter(([, a]) => /openstreetmap/.test(a.cf_bearing_source || '')).length} of ${ballparks.length} ballparks are oriented from the OSM playing-field outline (fan shape, wide end = outfield). The other ${ballparks.filter(([, a]) => !/openstreetmap/.test(a.cf_bearing_source || '')).length} use 67.5 degrees (ENE, the Official Baseball Rules recommendation) because OSM has no clear field outline: ${list(ballparks.filter(([, a]) => !/openstreetmap/.test(a.cf_bearing_source || '')).map(([s]) => name[s]))}.`,
  `- **Road courses** drawn with the oval generator: ${list(Object.entries(art).filter(([, a]) => a.layout === 'road').map(([s]) => name[s]))}.`,
  `- **Field surface inferred** (no surface in source, grass assumed): ${list(qa.surface_inferred)}.`,
  `- **Archetype**: horseshoes are set by hand (${list(Object.entries(art).filter(([, a]) => a.archetype === 'horseshoe').map(([s]) => name[s]))}); every other open stadium is drawn as a full bowl.`,
  `- **Signature features** implemented: green_monster, ivy_wall, cable_ring_roof, pagoda_tower, yard_of_bricks, retractable_roof_frame, superdome_roof. Listed but not yet drawn: marquee, peristyle_arch, inner_oval.`, '',
]
fs.writeFileSync('scripts/stadiums/art/art-qa.md', out.join('\n') + '\n')
console.log('wrote scripts/stadiums/art/art-qa.md')
