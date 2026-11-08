// Extra reference candidates found outside a venue's own Commons category
// (e.g. a file named for the venue but filed under a city or aerial category).
// Same free-license filter and thumbnail cache as candidates.mjs; results are
// appended to research/raw/stadiums/refs-cand/<slug>/candidates.json with
// `extra: true` so the review records that the category check did not apply.
// Every extra file still needs a by-eye check against the NAIP footprint.
// Usage:
//   node scripts/stadiums/refs/extra.mjs search "<query>"            # list file titles
//   node scripts/stadiums/refs/extra.mjs add <slug> "File:A.jpg" ...  # fetch + append
import fs from 'node:fs'
import path from 'node:path'
import { UA } from '../lib/wiki.mjs'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
async function api(params) {
  const qs = new URLSearchParams({ format: 'json', formatversion: '2', ...params })
  for (let i = 0; i < 8; i++) {
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?${qs}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) })
      if (r.ok) return r.json()
    } catch {}
    await sleep(15000 * (i + 1))
  }
  throw new Error('Commons API unavailable after retries')
}
const strip = (h) => (h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const FREE = /^(public domain|pd|cc0|cc[- ]by(-sa)?[- ]?\d|cc[- ]by(-sa)?$|attribution|copyrighted free use)/i

const [cmd, ...args] = process.argv.slice(2)
if (cmd === 'search') {
  const r = await api({ action: 'query', list: 'search', srnamespace: '6', srlimit: '30', srsearch: args.join(' ') })
  for (const s of r.query.search) console.log(s.title)
} else if (cmd === 'add') {
  const [slug, ...titles] = args
  const dir = path.join('research/raw/stadiums/refs-cand', slug)
  const cf = path.join(dir, 'candidates.json')
  const cands = fs.existsSync(cf) ? JSON.parse(fs.readFileSync(cf, 'utf8')) : []
  fs.mkdirSync(dir, { recursive: true })
  let n = cands.reduce((m, c) => Math.max(m, c.n || 0), 0)
  const info = await api({ action: 'query', titles: titles.join('|'), prop: 'imageinfo|categories', cllimit: '50', iiprop: 'url|size|extmetadata', iiurlwidth: '1024' })
  for (const p of info.query.pages) {
    if (cands.some((c) => c.file === p.title)) { console.log(`skip (already listed): ${p.title}`); continue }
    const ii = p.imageinfo?.[0]
    if (!ii) { console.log(`missing: ${p.title}`); continue }
    const m = ii.extmetadata || {}
    const lic = strip(m.LicenseShortName?.value)
    if (!FREE.test(lic) || /non-free|fair use/i.test(lic)) { console.log(`not free (${lic}): ${p.title}`); continue }
    const c = {
      file: p.title, category: null, categories: (p.categories || []).map((x) => x.title.replace(/^Category:/, '')),
      caption: strip(m.ImageDescription?.value).slice(0, 240), date: strip(m.DateTimeOriginal?.value).slice(0, 20),
      page: ii.descriptionurl, url: ii.url, thumb: ii.thumburl, width: ii.width, height: ii.height,
      author: strip(m.Artist?.value).slice(0, 120) || null, license: lic, license_url: m.LicenseUrl?.value || null, extra: true,
    }
    c.n = ++n
    const f = path.join(dir, `${c.n}.jpg`)
    const r = await fetch(c.thumb, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) })
    if (r.ok) fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()))
    c.local = f.replace(/\\/g, '/')
    cands.push(c)
    console.log(`#${c.n} ${c.width}x${c.height} ${lic} | ${c.categories.slice(0, 4).join('; ')} | ${p.title}`)
    await sleep(500)
  }
  fs.writeFileSync(cf, JSON.stringify(cands, null, 1))
} else {
  console.error('usage: extra.mjs search <query> | add <slug> <File:...> ...')
  process.exit(1)
}
