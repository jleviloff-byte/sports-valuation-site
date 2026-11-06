// Team colors from Wikipedia's color data modules (each entry is the team's
// primary, text-on-primary, secondary...). College entries carry a citation
// to the school's own brand guide. Returns null when a team is not listed;
// callers fall back to a neutral palette and flag it, never guess.
import { getPages, pageUrl } from './wiki.mjs'

const MODULES = {
  college: 'Module:College color/data',
  gridiron: 'Module:Gridiron color/data',
  baseball: 'Module:Sports color/baseball',
  basketball: 'Module:Sports color/basketball',
  hockey: 'Module:Sports color/ice hockey',
}
const LEAGUE_MODULES = {
  'NCAA FBS': ['college'], 'NCAA FCS': ['college'], 'NCAA D1 basketball': ['college'],
  NFL: ['gridiron'], MLB: ['baseball'], NBA: ['basketball'], WNBA: ['basketball'], NHL: ['hockey'],
}

let tables = null
export async function loadColorTables() {
  if (tables) return tables
  const pages = await getPages(Object.values(MODULES))
  tables = {}
  for (const [k, title] of Object.entries(MODULES)) {
    const p = pages[title]
    const map = {}
    for (const m of p.wikitext.matchAll(/\[\s*["']([^"']+)["']\s*\]\s*=\s*\{([^{}\n]*)/g)) {
      const hex = [...m[2].matchAll(/["']#?([0-9A-Fa-f]{6})["']/g)].map((h) => `#${h[1].toUpperCase()}`)
      const cite = (m[2].match(/url=([^|}\s]+)/) || [])[1] || null
      if (hex.length && !(m[1] in map)) map[m[1]] = { hex, cite }
    }
    tables[k] = { map, url: pageUrl(title, p.revid) }
  }
  return tables
}

// { primary, secondary, source } or null.
export async function teamColors(team, league) {
  const t = await loadColorTables()
  for (const mod of LEAGUE_MODULES[league] || []) {
    const e = t[mod].map[team]
    if (!e) continue
    const nonWhite = e.hex.filter((h) => h !== '#FFFFFF')
    return { primary: nonWhite[0] ?? e.hex[0], secondary: nonWhite[1] ?? e.hex[1] ?? null, source: t[mod].url, cite: e.cite }
  }
  return null
}
