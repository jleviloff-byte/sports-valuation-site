// MediaWiki API helper with an on-disk cache under research/raw/stadiums/wiki/.
// Every fetched page is saved with its revision id and fetch time, so any value
// in data/stadiums.json can be traced back to the exact wikitext it came from.
import fs from 'node:fs'
import path from 'node:path'

// Wikimedia API etiquette: descriptive User-Agent with a contact address,
// maxlag on every API call, batch up to 50 titles, back off on 429 (Retry-After).
export const UA = 'whatsmyteamworth-stadium-map/1.0 (https://github.com/jleviloff-byte/sports-valuation-site; contact: joshua.leviloff@kellogg.northwestern.edu)'
const API = 'https://en.wikipedia.org/w/api.php'
export const CACHE_DIR = path.resolve('research/raw/stadiums/wiki')
fs.mkdirSync(CACHE_DIR, { recursive: true })

const fileFor = (title) => path.join(CACHE_DIR, title.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150) + '.json')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export const pageUrl = (title, revid) =>
  `https://en.wikipedia.org/w/index.php?title=${encodeURIComponent(title.replace(/ /g, '_'))}${revid ? `&oldid=${revid}` : ''}`

async function api(params) {
  const qs = new URLSearchParams({ format: 'json', formatversion: '2', maxlag: '5', ...params })
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(`${API}?${qs}`, { headers: { 'User-Agent': UA } })
    if (res.ok) {
      const j = await res.json()
      if (j.error?.code === 'maxlag') { await sleep(5000); continue }
      if (j.error) throw new Error(`${j.error.code}: ${j.error.info}`)
      return j
    }
    await sleep(2000 * (attempt + 1))
  }
  throw new Error(`MediaWiki API failed: ${qs}`)
}

// Fetch wikitext for up to 50 titles per request; follows redirects.
// Returns { [requestedTitle]: { title, revid, wikitext, fetched } | null }.
export async function getPages(titles, { refresh = false } = {}) {
  const out = {}
  const todo = []
  for (const t of titles) {
    const f = fileFor(t)
    if (!refresh && fs.existsSync(f)) out[t] = JSON.parse(fs.readFileSync(f, 'utf8'))
    else todo.push(t)
  }
  for (let i = 0; i < todo.length; i += 50) {
    const batch = todo.slice(i, i + 50)
    const j = await api({
      action: 'query', prop: 'revisions', rvprop: 'ids|content', rvslots: 'main',
      redirects: '1', titles: batch.join('|'),
    })
    const norm = Object.fromEntries((j.query.normalized || []).map((n) => [n.from, n.to]))
    const redir = Object.fromEntries((j.query.redirects || []).map((r) => [r.from, r.to]))
    const byTitle = Object.fromEntries(j.query.pages.map((p) => [p.title, p]))
    for (const t of batch) {
      let final = norm[t] || t
      final = redir[final] || final
      let p = byTitle[final]
      // Large batches can omit content for some pages; refetch those alone.
      if (p && !p.missing && !p.revisions && batch.length > 1) {
        const one = await api({ action: 'query', prop: 'revisions', rvprop: 'ids|content', rvslots: 'main', titles: final })
        p = one.query.pages[0]
      }
      const rec = p && !p.missing && p.revisions
        ? { requested: t, title: p.title, revid: p.revisions[0].revid, wikitext: p.revisions[0].slots.main.content, fetched: new Date().toISOString() }
        : null
      out[t] = rec
      fs.writeFileSync(fileFor(t), JSON.stringify(rec, null, 1))
    }
    await sleep(300)
  }
  return out
}

// Primary coordinates from the GeoData extension (prop=coordinates), cached.
// Covers articles whose infobox pulls coordinates from Wikidata.
export async function getCoordinates(titles, { refresh = false } = {}) {
  const f = path.join(CACHE_DIR, '_coordinates.json')
  const cache = !refresh && fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}
  const todo = titles.filter((t) => !(t in cache))
  for (let i = 0; i < todo.length; i += 50) {
    const batch = todo.slice(i, i + 50)
    const j = await api({ action: 'query', prop: 'coordinates', coprimary: 'primary', colimit: 'max', titles: batch.join('|') })
    const byTitle = Object.fromEntries(j.query.pages.map((p) => [p.title, p.coordinates?.[0] ?? null]))
    for (const t of batch) cache[t] = byTitle[t] ? { lat: byTitle[t].lat, lng: byTitle[t].lon } : null
    await sleep(300)
  }
  fs.writeFileSync(f, JSON.stringify(cache, null, 1))
  return cache
}

export async function getPage(title, opts) {
  return (await getPages([title], opts))[title]
}
