// Compares venue rankings between two builds of data/stadiums.json and writes
// docs/rank-changes.md. Usage: node scripts/stadiums/rank-changes.mjs <old.json> [new.json]
import fs from 'node:fs'
const [oldF, newF = 'data/stadiums.json'] = process.argv.slice(2)
const A = Object.fromEntries(JSON.parse(fs.readFileSync(oldF, 'utf8')).venues.map((v) => [v.slug, v]))
const B = JSON.parse(fs.readFileSync(newF, 'utf8')).venues
const rows = []
for (const v of B) {
  const o = A[v.slug]
  if (!o) continue
  const us = [o.rankings.us, v.rankings.us], st = [o.rankings.state, v.rankings.state]
  if (us[0] !== us[1] || st[0] !== st[1]) rows.push({ name: v.name, state: v.state, est: v.capacity_type === 'estimated', us, st, stOf: [o.rankings.state_of, v.rankings.state_of] })
}
const fmt = (x) => (x == null ? 'not ranked' : `#${x}`)
const removed = rows.filter((r) => r.est), moved = rows.filter((r) => !r.est)
const usMoved = moved.filter((r) => r.us[0] !== r.us[1])
const out = ['# Rank changes: estimated racetrack capacities', '',
  `Racetracks (capacity_type "estimated") are now excluded from US and state rankings and ranked only among motorsport venues. ${removed.length} venues left the US/state rankings; ${usMoved.length} venues moved up in the US ranking; ${moved.filter((r) => r.st[0] !== r.st[1]).length} moved in their state ranking.`, '',
  '## Removed from US and state rankings (now motorsport-only)', '',
  '| Venue | State | Old US rank | Old state rank |', '|---|---|---|---|',
  ...removed.map((r) => `| ${r.name} | ${r.state} | ${fmt(r.us[0])} | ${fmt(r.st[0])} of ${r.stOf[0]} |`), '',
  '## Moved in the US ranking', '',
  '| Venue | State | US rank | State rank |', '|---|---|---|---|',
  ...moved.map((r) => `| ${r.name} | ${r.state} | ${fmt(r.us[0])} → ${fmt(r.us[1])} | ${fmt(r.st[0])} → ${fmt(r.st[1])} |`), '']
fs.mkdirSync('docs', { recursive: true })
fs.writeFileSync('docs/rank-changes.md', out.join('\n'))
console.log(`removed ${removed.length}, US moved ${usMoved.length}`)
console.log(usMoved.slice(0, 8).map((r) => `${r.name}: ${fmt(r.us[0])} -> ${fmt(r.us[1])}`).join('\n'))
