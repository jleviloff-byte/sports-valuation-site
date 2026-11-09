// Wikimedia Commons category for every venue in data/stadiums.json, from the
// venue's Wikipedia article -> Wikidata item -> P373 (Commons category).
// Batched (50 titles per request) because Commons/Wikipedia throttle this
// egress IP. Output: scripts/stadiums/refs/categories.json
//   { slug: { title, qid, category | null } }
// Usage: node scripts/stadiums/refs/categories.mjs
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

const venues = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8')).venues
const titleOf = (v) => decodeURIComponent(new URL(v.sources.wikipedia).searchParams.get('title') || '').replace(/_/g, ' ')
const out = fs.existsSync('scripts/stadiums/refs/categories.json') ? JSON.parse(fs.readFileSync('scripts/stadiums/refs/categories.json', 'utf8')) : {}
const todo = venues.filter((v) => !out[v.slug])
for (let i = 0; i < todo.length; i += 50) {
  const batch = todo.slice(i, i + 50)
  const titles = batch.map(titleOf)
  const qs = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', maxlag: '5', prop: 'pageprops', ppprop: 'wikibase_item', redirects: '1', titles: titles.join('|') })
  const r = await get(`https://en.wikipedia.org/w/api.php?${qs}`)
  const norm = new Map()
  for (const n of [...(r.query.normalized || []), ...(r.query.redirects || [])]) norm.set(n.from, n.to)
  const qidByTitle = new Map(r.query.pages.map((p) => [p.title, p.pageprops?.wikibase_item]))
  const resolve = (t) => { let x = t; for (let k = 0; k < 3 && norm.has(x); k++) x = norm.get(x); return qidByTitle.get(x) }
  const qids = batch.map((v, k) => resolve(titles[k]))
  const ids = [...new Set(qids.filter(Boolean))]
  const w = ids.length ? await get(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&maxlag=5&props=claims&ids=${ids.join('|')}`) : { entities: {} }
  batch.forEach((v, k) => {
    const e = w.entities[qids[k]]
    const cat = e?.claims?.P373?.[0]?.mainsnak?.datavalue?.value || null
    out[v.slug] = { title: titles[k], qid: qids[k] || null, category: cat }
  })
  fs.writeFileSync('scripts/stadiums/refs/categories.json', JSON.stringify(out, null, 1))
  console.log(`${Math.min(i + 50, todo.length)}/${todo.length}`)
  await sleep(3000)
}
const missing = Object.entries(out).filter(([, x]) => !x.category).map(([s]) => s)
console.log(`categories: ${Object.keys(out).length - missing.length}/${Object.keys(out).length}; missing: ${missing.join(', ')}`)
