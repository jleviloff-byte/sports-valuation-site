// Minimal, auditable infobox parsing. We pull raw field wikitext ourselves
// (template-aware brace matching) and clean it with small, explicit rules, so a
// reviewer can see exactly how a number was read. Anything ambiguous is
// returned with confidence "low" and a note, never guessed.

// Return the first {{Infobox ...}} (or {{Motorsport venue}}) template's raw text.
export function findInfobox(wikitext) {
  const start = wikitext.search(/\{\{\s*(Infobox|Motorsport venue)/i)
  if (start < 0) return null
  let depth = 0
  for (let i = start; i < wikitext.length - 1; i++) {
    if (wikitext[i] === '{' && wikitext[i + 1] === '{') { depth++; i++ }
    else if (wikitext[i] === '}' && wikitext[i + 1] === '}') { depth--; i++; if (depth === 0) return wikitext.slice(start, i + 1) }
  }
  return null
}

// Split top-level "| key = value" params (ignores pipes inside {{ }} and [[ ]]).
export function infoboxFields(box) {
  const fields = {}
  if (!box) return fields
  const body = box.slice(2, -2)
  let depthT = 0, depthL = 0, cur = '', parts = []
  for (let i = 0; i < body.length; i++) {
    const two = body.slice(i, i + 2)
    if (two === '{{') { depthT++; cur += two; i++; continue }
    if (two === '}}') { depthT--; cur += two; i++; continue }
    if (two === '[[') { depthL++; cur += two; i++; continue }
    if (two === ']]') { depthL--; cur += two; i++; continue }
    if (body[i] === '|' && depthT === 0 && depthL === 0) { parts.push(cur); cur = ''; continue }
    cur += body[i]
  }
  parts.push(cur)
  for (const p of parts.slice(1)) {
    const eq = p.indexOf('=')
    if (eq < 0) continue
    const k = p.slice(0, eq).trim().toLowerCase().replace(/\s+/g, '_')
    const v = p.slice(eq + 1).trim()
    if (v && !(k in fields)) fields[k] = v
  }
  return fields
}

// Map <ref name="x">...</ref> definitions so named reuse (<ref name="x" />) resolves.
export function refDefinitions(wikitext) {
  const defs = {}
  const re = /<ref\s+name\s*=\s*"?([^">\/]+?)"?\s*>([\s\S]*?)<\/ref>/gi
  let m
  while ((m = re.exec(wikitext))) defs[m[1].trim()] = m[2]
  return defs
}

// URLs cited in a field (inline refs and named refs).
export function citedUrls(raw, defs) {
  const urls = []
  const take = (s) => { for (const u of s.matchAll(/\|\s*url\s*=\s*([^|}\s]+)/gi)) urls.push(u[1]); for (const u of s.matchAll(/\[(https?:\/\/[^\s\]]+)/g)) urls.push(u[1]) }
  for (const m of raw.matchAll(/<ref[^>\/]*>([\s\S]*?)<\/ref>/gi)) take(m[1])
  for (const m of raw.matchAll(/<ref\s+name\s*=\s*"?([^">\/]+?)"?\s*\/>/gi)) if (defs[m[1].trim()]) take(defs[m[1].trim()])
  return [...new Set(urls)]
}

const stripTemplates = (s) => {
  let prev
  do { prev = s; s = s.replace(/\{\{[^{}]*\}\}/g, (t) => {
    // Keep the payload of list/formatting templates, drop everything else.
    const m = t.match(/^\{\{\s*(ubl|unbulleted list|plainlist|flatlist|hlist|small|sma|nowrap|nobr|collapsible list)\s*\|([\s\S]*)\}\}$/i)
    if (m) return m[2].split('|').filter((x) => !/^\s*(title|titlestyle|liststyle|framestyle|class|style)\s*=/i.test(x)).join('\n')
    const d = t.match(/^\{\{\s*(start[ -](?:date|year)(?: and age| text)?|sda|opening date)\s*\|([^}]*)\}\}$/i)
    if (d) {
      const y = d[2].split('|').filter((x) => !x.includes('=')).join(' ').match(/\b(1[89]\d{2}|20[0-3]\d)\b/)
      return y ? `@@START${y[1]}@@` : ''
    }
    if (/^\{\{\s*(convert|cvt)\s*\|/i.test(t)) return t.split('|')[1]
    return ''
  }) } while (s !== prev)
  return s
}

// Clean field wikitext into plain lines.
export function cleanLines(raw) {
  let s = raw
  s = s.replace(/<ref[^>]*\/>/gi, '').replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, '')
  s = s.replace(/<!--[\s\S]*?-->/g, '')
  s = stripTemplates(s)
  s = s.replace(/<br\s*\/?>/gi, '\n').replace(/<\/?(small|big|span|div|sup|sub|b|i)[^>]*>/gi, '')
  s = s.replace(/\[\[(?:[^|\]]*\|)?([^\]]*)\]\]/g, '$1').replace(/'''?/g, '').replace(/&nbsp;/g, ' ')
  s = s.replace(/\(\s*\$?\s*(?:in\s+)?(?:dollars)?\s*\)/gi, '')
  return s.split('\n').map((l) => l.replace(/^\s*\*\s*/, '').replace(/\s+/g, ' ').trim()).filter(Boolean)
}

const NUM = /(\d{1,3}(?:,\d{3})+|\d{4,6})(?!\s*(?:–|-)?\s*(?:present|\d{2}\b))/g

// Capacity: list of {value, label} from each line. Lines that are clearly
// records/attendance are dropped.
export function parseCapacity(raw) {
  const out = []
  // A label on its own line ("Baseball:" <br> "46,537") belongs to the next line.
  const lines = []
  for (const l of cleanLines(raw)) {
    if (lines.length && /:\s*$/.test(lines[lines.length - 1]) && !/\d{3}/.test(lines[lines.length - 1])) lines[lines.length - 1] += ' ' + l
    else lines.push(l)
  }
  for (const line of lines) {
    if (/record|attendance/i.test(line)) continue
    // Years and small numbers are not capacities and must not split labels.
    const matches = [...line.matchAll(NUM)].filter((m) => {
      const v = Number(m[1].replace(/,/g, ''))
      return v >= 1000 && !(v >= 1850 && v <= 2030 && !m[1].includes(','))
    })
    let prevEnd = 0
    matches.forEach((m, i) => {
      const v = Number(m[1].replace(/,/g, ''))
      const pre = line.slice(prevEnd, m.index)
      const end = m.index + m[0].length
      const post = line.slice(end, matches[i + 1]?.index ?? line.length)
      prevEnd = end
      const label = (pre + ' ' + post).replace(/[():;,–+-]+/g, ' ').replace(/\s+/g, ' ').trim()
      out.push({
        value: v, label, line,
        standing: /^[\s(]*(standing|sro\b|lawn|berm|general admission|infield)/i.test(post) || /standing\s*(room)?\s*:?\s*$/i.test(pre),
        expandable: /(expand\w*|up to|max(imum)?|over)\s*(to)?\s*(over)?\s*$/i.test(pre),
        current: /present|current/i.test((post.match(/^\s*\([^)]*\)/) || [post.slice(0, 30)])[0]),
        seated: /\bseat/i.test(post.slice(0, 25)),
        total_of_parts: /^\s*\(\s*$/.test(post.slice(0, 3)) && /\+/.test(line.slice(end)),
      })
    })
  }
  return out
}

const SPORT_WORDS = {
  football: /football|nfl|gridiron/i,
  basketball: /basketball|nba|wnba/i,
  'ice hockey': /hockey|nhl/i,
  baseball: /baseball|mlb/i,
  soccer: /soccer|mls|nwsl|football \(soccer\)/i,
  tennis: /tennis/i,
  motorsport: /permanent|grandstand|seat/i,
}

// Choose headline and per-sport capacities. Returns null value if nothing usable.
export function chooseCapacity(allEntries, sports) {
  // Seated capacity only: drop standing-room, expandable maxima and totals that
  // include standing room, when a seated figure is also present.
  let entries = allEntries.filter((e) => !e.standing && !e.expandable)
  // Historical capacity lists: keep only the entries marked "(YYYY–present)".
  if (entries.some((e) => e.current)) entries = entries.filter((e) => e.current || !/\b(1[89]|20)\d{2}\b/.test(e.label))
  if (entries.some((e) => e.seated)) entries = entries.filter((e) => e.seated || !e.total_of_parts)
  if (entries.filter((e) => e.seated).length === 1 && entries.length > 1 && sports.includes('motorsport')) entries = entries.filter((e) => e.seated)
  if (!entries.length) return { value: null, by_sport: {}, confidence: 'none', note: allEntries.length ? 'only standing/expandable figures in infobox' : 'no capacity in infobox' }
  const by_sport = {}
  for (const s of sports) {
    const hit = entries.find((e) => SPORT_WORDS[s]?.test(e.label))
    if (hit) by_sport[s] = hit.value
  }
  const distinct = [...new Set(entries.map((e) => e.value))]
  if (distinct.length === 1) {
    for (const s of sports) by_sport[s] ??= distinct[0]
    return { value: distinct[0], by_sport, confidence: 'high', note: null }
  }
  // Prefer the configuration of the primary sport (first in list), then the first line.
  const primary = sports.find((s) => by_sport[s] != null)
  const value = primary ? by_sport[primary] : entries[0].value
  return {
    value, by_sport, confidence: primary ? 'medium' : 'low',
    note: `multiple figures in infobox: ${entries.map((e) => `${e.value.toLocaleString('en-US')}${e.label ? ` (${e.label.slice(0, 40)})` : ''}`).join('; ')}`,
  }
}

// Opened year: prefer a {{Start date|YYYY}} template, else the first 4-digit year.
export function parseYear(raw) {
  if (!raw) return { value: null, note: null }
  const lines = cleanLines(raw).join(' ')
  const start = [...lines.matchAll(/@@START(\d{4})@@/g)].map((m) => Number(m[1]))
  const years = [...lines.replace(/@@START\d{4}@@/g, ' ').matchAll(/\b(1[89]\d{2}|20[0-3]\d)\b/g)].map((m) => Number(m[1]))
  if (start.length) return { value: start[start.length - 1], note: start.length > 1 || years.length ? `other years in field: ${[...start, ...years].join(', ')}` : null }
  if (!years.length) return { value: null, note: `unparsed: ${lines.slice(0, 80)}` }
  return { value: years[0], note: years.length > 1 ? `multiple years in field: ${years.join(', ')}` : null }
}

export function parseYearList(raw) {
  if (!raw) return []
  const lines = cleanLines(raw).join(' ').replace(/@@START(\d{4})@@/g, '$1')
  const ys = []
  for (const m of lines.matchAll(/\b(1[89]\d{2}|20[0-3]\d)(?:\s*[–-]\s*(\d{2,4}))?/g)) {
    const end = m[2] ? Number(m[2].length === 2 ? m[1].slice(0, 2) + m[2] : m[2]) : Number(m[1])
    ys.push({ start: Number(m[1]), end })
  }
  return ys
}

const MONEY = /(?:US)?\$\s?(\d+(?:[.,]\d+)*)\s*(million|billion|M\b|B\b)?(?:\s*(?:–|-|to)\s*\$?\s?(\d+(?:[.,]\d+)*)\s*(million|billion)?)?/gi
const scale = (u) => (!u ? 1 : /^b/i.test(u) ? 1e9 : 1e6)
const toNum = (s) => Number(s.replace(/,/g, ''))

// Cost lines: [{ amount, range, year, label, line }].
export function parseCosts(raw) {
  if (!raw) return []
  const out = []
  for (const line of cleanLines(raw)) {
    for (const m of line.matchAll(MONEY)) {
      const lo = toNum(m[1]) * scale(m[2] || m[4])
      if (!Number.isFinite(lo) || lo < 1000) continue
      const hi = m[3] ? toNum(m[3]) * scale(m[4] || m[2]) : null
      const ctx = line.slice(Math.max(0, m.index - 60), m.index + m[0].length + 60)
      if (/equivalent|in \d{4} dollars|dollars\)|adjusted/i.test(line.slice(m.index - 15, m.index)) ) continue
      const yr = ctx.match(/\b(1[89]\d{2}|20[0-3]\d)\b/)
      out.push({ amount: lo, range_high: hi, year_in_text: yr ? Number(yr[1]) : null, renovation: /renovat|expan|addition|upgrade/i.test(ctx), line })
    }
  }
  // Drop inflation-adjusted restatements like "($86 million 2021 dollars)".
  return out.filter((c) => !/\d{4}\s+dollars/i.test(c.line.slice(c.line.indexOf('$', 0))) || c === out[0])
}

// {{coord|...}} in raw wikitext -> {lat, lng}.
export function parseCoord(raw) {
  if (!raw) return null
  raw = raw.replace(/<!--[\s\S]*?-->/g, '')
  const m = raw.match(/\{\{\s*coord\s*\|([^}]*)\}\}/i)
  if (!m) return null
  const parts = m[1].split('|').map((s) => s.trim()).filter((s) => s && !s.includes(':') && !s.includes('='))
  const nums = []
  let i = 0, lat = null, lng = null
  // decimal form: lat|lng
  if (parts.length >= 2 && !/[NSEW]/i.test(parts[1]) && !/[NSEW]/i.test(parts[0]) && parts[1].includes('.') || (parts.length === 2)) {
    lat = Number(parts[0]); lng = Number(parts[1])
    if (Number.isFinite(lat) && Number.isFinite(lng)) return { lat, lng }
  }
  for (; i < parts.length; i++) {
    if (/^[NS]$/i.test(parts[i])) { lat = dms(nums.splice(0)) * (/s/i.test(parts[i]) ? -1 : 1) }
    else if (/^[EW]$/i.test(parts[i])) { lng = dms(nums.splice(0)) * (/w/i.test(parts[i]) ? -1 : 1) }
    else nums.push(Number(parts[i]))
  }
  return lat != null && lng != null && Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null
}
const dms = ([d = 0, m = 0, s = 0]) => d + m / 60 + s / 3600
