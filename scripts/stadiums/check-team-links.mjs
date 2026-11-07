// Gate c: every venue-card link to a team valuation page (/?team=<id>) must
// resolve to a team the home page can open. Loads data/allTeams.js through
// Vite (it uses import.meta.glob) and checks every tenant team_page_slug.
// Usage: node scripts/stadiums/check-team-links.mjs
import fs from 'node:fs'
import { createServer } from 'vite'
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { default: teams } = await server.ssrLoadModule('/data/allTeams.js')
  const ids = new Set(teams.map((t) => t.id))
  const venues = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8')).venues
  const links = venues.flatMap((v) => v.tenants.filter((t) => t.team_page_slug).map((t) => ({ venue: v.slug, team: t.team, id: t.team_page_slug })))
  const bad = links.filter((l) => !ids.has(l.id))
  console.log(`${links.length} team links checked, ${bad.length} broken`)
  for (const b of bad) console.log(`  BROKEN ${b.venue}: ${b.team} -> /?team=${b.id}`)
  process.exitCode = bad.length ? 1 : 0
} finally { await server.close() }
