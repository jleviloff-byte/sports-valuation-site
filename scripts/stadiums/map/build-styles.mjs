// Phase 3: basemap styles derived from OpenFreeMap's Positron (BSD-3 code,
// CC-BY 4.0 design; tiles © OpenMapTiles, data © OpenStreetMap contributors).
// OpenFreeMap requires modified styles to be self-hosted, so these are written
// to public/map-styles/ and only the tiles, glyphs and sprites stay remote.
//
// Output:
//   muted-light.json      desaturated, state borders, minimal labels
//   muted-dark.json       same for dark mode
//   baseplate-light.json  light + subtle stud texture on land at low zoom (mock)
//   baseplate-dark.json
//
// Usage: node scripts/stadiums/map/build-styles.mjs
import fs from 'node:fs'

const UA = 'FranchiseMathStadiumBot/0.1 (https://github.com/jleviloff-byte/sports-valuation-site)'
const base = await (await fetch('https://tiles.openfreemap.org/styles/positron', { headers: { 'User-Agent': UA } })).json()
fs.mkdirSync('research/raw/stadiums/map', { recursive: true })
fs.writeFileSync('research/raw/stadiums/map/positron-source.json', JSON.stringify(base, null, 1))

// Layers kept (everything else dropped: POIs, road names, shields, rail, airports, villages).
const KEEP = new Set(['background', 'water', 'park', 'landuse_residential', 'building', 'highway_minor', 'highway_major_inner', 'highway_motorway_inner', 'boundary_3', 'boundary_2', 'label_state', 'label_city', 'label_city_capital', 'label_town', 'water_name_point_label'])

const PALETTES = {
  light: {
    bg: '#EEF0F1', water: '#D6DEE4', park: '#E6EAE6', residential: '#E9EBEC', building: '#E1E3E5',
    roadMinor: '#E4E6E8', roadMajor: '#DDE0E3', motorway: '#D4D8DC', state: '#B3BAC2', country: '#8E97A1',
    label: '#7A838D', labelHalo: '#EEF0F1', waterLabel: '#9AA8B3', stud: 'rgba(20,24,29,0.06)', studHi: 'rgba(255,255,255,0.55)',
  },
  dark: {
    bg: '#14181D', water: '#0C1014', park: '#171C20', residential: '#161A1F', building: '#1B2026',
    roadMinor: '#1A1F25', roadMajor: '#20262D', motorway: '#272E36', state: '#39424C', country: '#566170',
    label: '#6F7884', labelHalo: '#14181D', waterLabel: '#3E4A56', stud: 'rgba(0,0,0,0.35)', studHi: 'rgba(255,255,255,0.05)',
  },
}

function build(mode, baseplate) {
  const P = PALETTES[mode]
  const style = structuredClone(base)
  delete style.sources.ne2_shaded
  style.name = `Franchise Math stadiums ${mode}${baseplate ? ' baseplate' : ''}`
  style.layers = style.layers.filter((l) => KEEP.has(l.id)).map((l) => {
    const p = l.paint || {}
    switch (l.id) {
      case 'background': l.paint = { 'background-color': P.bg }; break
      case 'water': l.paint = { 'fill-color': P.water, 'fill-antialias': true }; break
      case 'park': l.paint = { 'fill-color': P.park, 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 6, 0, 9, 1] }; break
      case 'landuse_residential': l.paint = { 'fill-color': P.residential, 'fill-opacity': ['interpolate', ['linear'], ['zoom'], 8, 0, 11, 1] }; break
      case 'building': l.minzoom = 14; l.paint = { 'fill-color': P.building }; break
      case 'highway_minor': l.minzoom = 12; l.paint = { ...p, 'line-color': P.roadMinor }; break
      case 'highway_major_inner': l.minzoom = 8; l.paint = { ...p, 'line-color': P.roadMajor }; break
      case 'highway_motorway_inner': l.minzoom = 6; l.paint = { ...p, 'line-color': P.motorway, 'line-opacity': ['interpolate', ['linear'], ['zoom'], 6, 0.5, 9, 1] }; break
      case 'boundary_3':
        // State borders: visible at every zoom.
        l.minzoom = 0
        l.paint = { 'line-color': P.state, 'line-width': ['interpolate', ['linear'], ['zoom'], 3, 0.6, 8, 1.2, 12, 1.6] }
        delete l.paint['line-dasharray']
        break
      case 'boundary_2': l.paint = { 'line-color': P.country, 'line-width': ['interpolate', ['linear'], ['zoom'], 3, 1, 10, 2] }; break
      case 'label_state':
        l.paint = { 'text-color': P.label, 'text-halo-color': P.labelHalo, 'text-halo-width': 1.2, 'text-opacity': ['interpolate', ['linear'], ['zoom'], 3, 0.75, 7, 0.55] }
        l.layout = { ...l.layout, 'text-transform': 'uppercase', 'text-letter-spacing': 0.18, 'text-size': ['interpolate', ['linear'], ['zoom'], 3, 9, 7, 12] }
        break
      case 'label_city': case 'label_city_capital':
        l.minzoom = 6
        l.paint = { 'text-color': P.label, 'text-halo-color': P.labelHalo, 'text-halo-width': 1.2 }
        break
      case 'label_town': l.minzoom = 9; l.paint = { 'text-color': P.label, 'text-halo-color': P.labelHalo, 'text-halo-width': 1 }; break
      case 'water_name_point_label': l.paint = { 'text-color': P.waterLabel, 'text-halo-color': P.water, 'text-halo-width': 1 }; break
    }
    // Drop icons from any remaining symbol layers.
    if (l.layout) delete l.layout['icon-image']
    return l
  })
  if (baseplate) {
    // Stud texture over land at low zoom; water layers draw on top of it.
    // The 'stud' image is generated at runtime (StadiumMap adds it on styleimagemissing).
    style.layers.splice(1, 0, {
      id: 'baseplate-studs', type: 'background',
      paint: { 'background-pattern': `stud-${mode}`, 'background-opacity': ['interpolate', ['linear'], ['zoom'], 3, 1, 6, 0.4, 7.5, 0] },
      maxzoom: 7.5,
    })
  }
  style.metadata = { source: 'Derived from OpenFreeMap Positron (https://tiles.openfreemap.org/styles/positron)', generated: new Date().toISOString(), stud: { color: P.stud, highlight: P.studHi } }
  return style
}

fs.mkdirSync('public/map-styles', { recursive: true })
for (const mode of ['light', 'dark']) {
  fs.writeFileSync(`public/map-styles/muted-${mode}.json`, JSON.stringify(build(mode, false)))
  fs.writeFileSync(`public/map-styles/baseplate-${mode}.json`, JSON.stringify(build(mode, true)))
}
console.log('wrote public/map-styles/{muted,baseplate}-{light,dark}.json; layers:', build('light', false).layers.map((l) => l.id).join(', '))
