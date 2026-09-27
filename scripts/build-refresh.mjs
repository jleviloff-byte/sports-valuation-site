// Builds data/refresh-2026.js, research/copy-refresh-log.md and
// research/unverified-sweep.md from research/raw/refresh-<league>.json plus
// the hand-written research/raw/refresh-fixes.json (applied last).
//
// Unverified items: each league file lists what could not be verified as
// "<dot.path>: reason". Numeric or date fields keep their value and render
// with "as of May 2026" (the vintage of the typed research); on-field,
// ownership and media sentences are removed; everything else is listed for a
// follow-up research pass.
//
// Run: node scripts/build-refresh.mjs

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..')
const RAW = path.join(ROOT, 'research', 'raw')
const LEAGUES = ['nfl', 'nba', 'mlb', 'nhl', 'mls', 'epl']
const TYPED_VINTAGE = 'May 2026'
const HEDGES = /\b(perhaps|might|arguably|possibly|could be|may be)\b/i

const noDash = (v) => {
  if (typeof v === 'string') return v.replace(/\s*[–—]\s*/g, ', ')
  if (Array.isArray(v)) return v.map(noDash)
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, noDash(x)]))
  return v
}

// Base enrichments, by team id, for typing the unverified fields.
const slug = (n) => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const base = {}
for (const l of LEAGUES) {
  const mod = await import(pathToFileURL(path.join(ROOT, 'data', `enrichments-${l}.js`)).href)
  for (const [name, e] of Object.entries(Object.values(mod)[0])) base[slug(name)] = { name, league: l.toUpperCase(), e }
}
const getPath = (obj, p) => p.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)

// Rendered on the profile as sentences (removed when unverified)
const SENTENCE_FIELDS = new Set([
  'ownership.ownerBackground', 'ownership.institutionalInvestors',
  'media.localTVDeal', 'media.streamingNotes', 'media.nationalShareNote', 'media.radioPartner',
  'onField.currentFranchiseQB', 'onField.currentFranchisePlayer', 'onField.currentFranchiseStar',
])
// Rendered as numbers or dates (kept, suffixed "as of")
const NUMERIC_FIELDS = new Set([
  'stadium.yearBuilt', 'stadium.capacity', 'stadium.publicSubsidy', 'stadium.privateFinancing', 'stadium.namingRightsDeal',
  'arena.yearOpened', 'arena.yearBuilt', 'arena.capacity', 'arena.publicSubsidy', 'arena.privateFinancing', 'arena.namingRightsDeal',
  'ownership.acquisitionYear', 'ownership.acquisitionPrice', 'ownership.ownerNetWorth', 'revenue.estimate', 'revenue.operatingIncome',
])
const looksNumeric = (v) => typeof v === 'number' || (typeof v === 'string' && /^[~≈]?\s*\$?\d/.test(v.trim()))

const overlay = {}
const log = []
const sweep = []
const stats = { teams: 0, changes: 0, notes: 0, unverified: 0, asOf: 0, removed: 0, listed: 0, resolved: 0, hedged: [] }

function parseUnverified(s) {
  const m = s.match(/^([a-zA-Z]+(?:\.[a-zA-Z0-9_]+)+)(?:\[\d+\])?(?:\s*\([^)]*\))?\s*[:(/]\s*(.*)$/)
  if (!m) return { field: null, reason: s }
  return { field: m[1], reason: m[2] || s }
}

function applyUnverified(teamId, item, entry, resolved) {
  const b = base[teamId]
  const { field, reason } = parseUnverified(item)
  const row = { teamId, team: b?.name ?? teamId, league: b?.league ?? '', field, reason: noDash(reason), lastKnown: null, action: 'listed for follow-up' }
  if (!field || !b) { stats.listed++; return row }
  if (resolved.has(field)) { row.action = 'resolved in refresh-fixes.json'; stats.resolved++; return row }
  const value = getPath(b.e, field)
  row.lastKnown = value === undefined ? null : value
  const head2 = field.split('.').slice(0, 2).join('.')
  const head = field.split('.')[0]
  if (NUMERIC_FIELDS.has(head2) || (looksNumeric(value) && !Array.isArray(value))) {
    entry.unverifiedAsOf[head2] = TYPED_VINTAGE
    row.action = `kept; rendered "as of ${TYPED_VINTAGE}"`
    stats.asOf++
    return row
  }
  if (SENTENCE_FIELDS.has(head2) && typeof value === 'string') {
    entry.changes.push({ field: head2, old: value, new: null, fact: `Removed: not verifiable as of September 2026 (${noDash(reason)})`, source: null })
    row.action = 'sentence removed from the profile'
    stats.removed++
    return row
  }
  if (head2 === 'onField.starContracts' && Array.isArray(value)) {
    const hit = value.filter((c) => c?.player && reason.includes(c.player))
    if (hit.length) {
      const kept = value.filter((c) => !hit.includes(c))
      entry.changes.push({ field: head2, old: value, new: kept, fact: `Removed unverified contract line(s): ${hit.map((c) => c.player).join(', ')}`, source: null })
      row.action = `removed contract line(s): ${hit.map((c) => c.player).join(', ')}`
      row.lastKnown = hit
      stats.removed++
      return row
    }
  }
  if (['onField', 'ownership', 'media'].includes(head) && typeof value === 'string') {
    entry.changes.push({ field, old: value, new: null, fact: `Removed: not verifiable as of September 2026 (${noDash(reason)})`, source: null })
    row.action = 'sentence removed from the profile'
    stats.removed++
    return row
  }
  stats.listed++
  return row
}

const fixes = fs.existsSync(path.join(RAW, 'refresh-fixes.json')) ? JSON.parse(fs.readFileSync(path.join(RAW, 'refresh-fixes.json'), 'utf8')) : []
const fixesById = Object.fromEntries(fixes.map((f) => [f.teamId, f]))

for (const l of LEAGUES) {
  const f = path.join(RAW, `refresh-${l}.json`)
  if (!fs.existsSync(f)) { log.push(`## ${l.toUpperCase()}\n\n_No refresh file yet._\n`); continue }
  const rows = JSON.parse(fs.readFileSync(f, 'utf8'))
  log.push(`## ${l.toUpperCase()} (${rows.length} teams)\n`)
  for (const r of rows) {
    if (!r.teamId) continue
    stats.teams++
    const fix = fixesById[r.teamId]
    const resolved = new Set(fix?.resolveUnverified ?? [])
    const changes = [...(r.changes ?? []), ...(fix?.changes ?? [])]
      .filter((c) => c.field && c.new !== undefined && JSON.stringify(c.new) !== JSON.stringify(c.old))
      .map((c) => ({ ...c, new: noDash(c.new) }))
    const notes = noDash(r.analystNotes) || null
    if (notes && HEDGES.test(notes)) stats.hedged.push(r.teamId)
    const entry = { asOf: r.asOf ?? '2026-09', changes, analystNotes: notes, unverifiedAsOf: {} }
    const unv = (r.unverified ?? []).map((u) => applyUnverified(r.teamId, u, entry, resolved))
    sweep.push(...unv)
    overlay[r.teamId] = entry
    stats.changes += changes.length
    if (notes) stats.notes++
    stats.unverified += unv.length

    log.push(`### ${r.team ?? r.teamId}`)
    if (notes) log.push(`- **Overview rewritten.** Basis: ${noDash(r.analystNotesBasis) || 'current Forbes figures'}`)
    for (const c of changes) log.push(`- \`${c.field}\`: ${fmt(c.old)} → ${fmt(c.new)}. ${noDash(c.fact) || ''}${c.source ? ` [source](${c.source})` : ''}`)
    if (!changes.length) log.push(`- No factual changes; ${notes ? 'overview regenerated against current numbers' : 'overview unchanged'}.`)
    for (const u of unv) log.push(`- Unverified (${u.action}): ${u.field ? `\`${u.field}\` ` : ''}${u.reason}`)
    log.push('')
  }
}

function fmt(v) {
  if (v == null) return 'null'
  const s = typeof v === 'string' ? v : JSON.stringify(v)
  return s.length > 90 ? `"${s.slice(0, 87)}..."` : typeof v === 'string' ? `"${s}"` : s
}

fs.writeFileSync(
  path.join(ROOT, 'data', 'refresh-2026.js'),
  `// GENERATED by scripts/build-refresh.mjs from research/raw/refresh-*.json.\n` +
    `// Fact refresh overlay applied in enrichments.js: dot-path field changes, rewritten\n` +
    `// analystNotes verified as of September 2026, and unverifiedAsOf markers for numeric\n` +
    `// fields that keep a typed value from the ${TYPED_VINTAGE} research.\n` +
    `export const refresh2026 = ${JSON.stringify(overlay, null, 2)}\n`
)

const head = [
  '# Copy refresh log', '',
  `Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/build-refresh.mjs\`. Every team overview (analystNotes) rewritten and every fact changed in the September 2026 refresh, with the fact that changed it. Applied as an overlay in \`data/enrichments.js\`; the original enrichment files are untouched. Hand corrections live in \`research/raw/refresh-fixes.json\`.`, '',
  `Totals: ${stats.teams} teams, ${stats.notes} overviews rewritten, ${stats.changes} field changes, ${stats.unverified} unverified items (${stats.asOf} kept with an "as of" label, ${stats.removed} sentences removed, ${stats.resolved} resolved by hand, ${stats.listed} listed for follow-up).`, '',
]
fs.writeFileSync(path.join(ROOT, 'research', 'copy-refresh-log.md'), [...head, ...log].join('\n') + '\n')

// Unverified sweep: a self-contained brief for a follow-up research session.
const sw = [
  '# Unverified sweep', '',
  `Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/build-refresh.mjs\`. Every item the September 2026 fact refresh could not verify, by team, with the exact field and the last known value, so it can be run as its own research session. Rules applied on the site: numeric or date fields keep their value and render with "as of ${TYPED_VINTAGE}"; on-field, ownership and media sentences are removed from the profile; everything else is unchanged and listed here.`, '',
  `Totals: ${stats.unverified} items. ${stats.asOf} kept with "as of", ${stats.removed} removed, ${stats.resolved} resolved by hand, ${stats.listed} listed only.`, '',
  '## How to run the follow-up', '',
  '1. For each row, find a 2026 source for the field. 2. Add a `changes` entry with `field`, `old`, `new`, `fact`, `source` to the team in `research/raw/refresh-<league>.json` (or to `research/raw/refresh-fixes.json`) and remove the matching `unverified` string. 3. Run `node scripts/build-refresh.mjs` and rebuild.', '',
]
for (const L of ['NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'EPL']) {
  const rows = sweep.filter((r) => r.league === L)
  if (!rows.length) continue
  sw.push(`## ${L} (${rows.length})`, '')
  let cur = null
  for (const r of rows) {
    if (r.team !== cur) { cur = r.team; sw.push(`### ${cur}`) }
    const last = r.lastKnown == null ? 'n/a' : typeof r.lastKnown === 'string' ? `"${r.lastKnown.slice(0, 160)}${r.lastKnown.length > 160 ? '...' : ''}"` : JSON.stringify(r.lastKnown).slice(0, 160)
    sw.push(`- ${r.field ? `\`${r.field}\`` : '(no field)'} · last known: ${last} · action: ${r.action}`)
    sw.push(`  - ${r.reason}`)
  }
  sw.push('')
}
fs.writeFileSync(path.join(ROOT, 'research', 'unverified-sweep.md'), sw.join('\n') + '\n')

console.log(`refresh overlay: ${stats.teams} teams, ${stats.notes} notes, ${stats.changes} changes, ${stats.unverified} unverified (asOf ${stats.asOf}, removed ${stats.removed}, resolved ${stats.resolved}, listed ${stats.listed})`)
if (stats.hedged.length) console.log('hedged wording in:', stats.hedged.join(', '))
