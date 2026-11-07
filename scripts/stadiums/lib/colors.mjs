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

// Soccer clubs: Wikipedia has no color module, but club articles style their
// tables in club colors ("background:#primary; ... border:2px solid #secondary").
async function soccerColors(team) {
  const { getPage } = await import('./wiki.mjs')
  const p = await getPage(team)
  if (!p) return null
  const m = p.wikitext.match(/background:\s*#([0-9A-Fa-f]{6})[^"|]*?border:\s*\d+px\s+solid\s+#([0-9A-Fa-f]{6})/)
  if (!m) return null
  const [a, b] = [`#${m[1].toUpperCase()}`, `#${m[2].toUpperCase()}`]
  const prim = a === '#FFFFFF' ? b : a
  return { primary: prim, secondary: b !== prim && b !== '#FFFFFF' ? b : null, source: pageUrl(p.title, p.revid), cite: null, method: 'club article table styling' }
}

// { primary, secondary, source } or null.
export async function teamColors(team, league) {
  if (league === 'MLS' || league === 'NWSL') return soccerColors(team)
  const t = await loadColorTables()
  for (const mod of LEAGUE_MODULES[league] || []) {
    let e = t[mod].map[team]
    if (!e && mod === 'college') {
      // Near-miss names: drop "and Lady X", then match a unique key sharing school and nickname tail.
      const base = team.replace(/\s+and\s+Lady\s+.*$/i, '').trim()
      e = t[mod].map[base]
      if (!e) {
        const words = base.split(' ')
        const school = words[0], tail = words.at(-1)
        const keys = Object.keys(t[mod].map).filter((k) => k.startsWith(school + ' ') && k.endsWith(' ' + tail))
        if (keys.length === 1) e = t[mod].map[keys[0]]
      }
    }
    if (!e) continue
    const nonWhite = e.hex.filter((h) => h !== '#FFFFFF')
    return { primary: nonWhite[0] ?? e.hex[0], secondary: nonWhite[1] ?? e.hex[1] ?? null, source: t[mod].url, cite: e.cite }
  }
  return null
}
