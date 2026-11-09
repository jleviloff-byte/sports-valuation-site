// Fill the Commons categories categories.mjs could not resolve (no Wikidata
// P373) by searching Commons category names for the venue's article title.
// Picks the top hit only if it shares the venue's distinctive words; logs the
// match so it can be checked. Usage: node scripts/stadiums/refs/categories-search.mjs
import fs from 'node:fs'
import { UA } from '../lib/wiki.mjs'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
async function get(url) {
  for (let i = 0; i < 8; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) })
      if (r.ok) { const j = await r.json(); if (j.error?.code === 'maxlag') { await sleep(5000); continue } return j }
      if (r.status === 429) { await sleep(1000 * (Number(r.headers.get('retry-after')) || 30)); continue }
    } catch {}
    await sleep(15000 * (i + 1))
  }
  throw new Error(`unavailable: ${url}`)
}
const F = 'scripts/stadiums/refs/categories.json'
const cats = JSON.parse(fs.readFileSync(F, 'utf8'))
const STOP = new Set(['stadium', 'field', 'arena', 'center', 'centre', 'the', 'at', 'of', 'and', 'memorial', 'coliseum'])
const words = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w && !STOP.has(w))
for (const [slug, x] of Object.entries(cats)) {
  if (x.category) continue
  const q = x.title.replace(/\s*\(.*\)$/, '')
  const r = await get(`https://commons.wikimedia.org/w/api.php?action=query&format=json&maxlag=5&list=search&srnamespace=14&srlimit=5&srsearch=${encodeURIComponent(q)}`)
  const want = words(q)
  const hit = (r.query?.search || []).map((h) => h.title.replace(/^Category:/, '')).find((t) => want.length && want.every((w) => words(t).includes(w)))
  console.log(`${slug}: "${q}" -> ${hit || 'none'}`)
  if (hit) { x.category = hit; x.matched = 'search' }
  fs.writeFileSync(F, JSON.stringify(cats, null, 1))
  await sleep(4000)
}
