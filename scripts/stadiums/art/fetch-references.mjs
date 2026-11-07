// Freely licensed reference photos per venue from Wikimedia Commons.
//
// Candidates: images used on the venue's Wikipedia article plus a Commons
// search for "<venue> aerial" and "<venue>". Kept only if hosted on Commons
// with a free license (public domain, CC0, CC BY, CC BY-SA); fair-use and
// unlicensed files are dropped, as are logos, maps, diagrams and small files.
// Ranked to favor aerial/exterior views and the article's lead image, and
// permissive licenses over share-alike.
//
// Output: research/raw/stadiums/refs/<slug>/*.jpg (gitignored) and
// research/raw/stadiums/art-references.json (manifest: URL, author, license).
// Usage: node scripts/stadiums/art/fetch-references.mjs [--all] [slug ...]
import fs from 'node:fs'
import path from 'node:path'
import { UA } from '../lib/wiki.mjs'

const MANIFEST = 'research/raw/stadiums/art-references.json'
const data = JSON.parse(fs.readFileSync('data/stadiums.json', 'utf8'))
const args = process.argv.slice(2)
const slugs = args.includes('--all') ? data.venues.map((v) => v.slug) : args.filter((a) => !a.startsWith('--'))
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function api(host, params) {
  const qs = new URLSearchParams({ format: 'json', formatversion: '2', ...params })
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(`https://${host}/w/api.php?${qs}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) })
      if (r.ok) return r.json()
    } catch {}
    await sleep(1500 * (i + 1))
  }
  return null
}
const strip = (h) => (h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const FREE = /^(public domain|pd|cc0|cc[- ]by(-sa)?[- ]?\d|cc[- ]by(-sa)?$|attribution|copyrighted free use)/i
const BAD_NAME = /logo|wordmark|map|locator|seal|flag|icon|diagram|chart|plan|layout|seating|signature|crest|emblem|\.svg$|\.gif$|\.tif/i
const GOOD_NAME = /aerial|from above|overhead|drone|birds?.?eye|exterior|outside|panoram|overview|skyline|view/i
const licenseRank = (l) => (/public domain|^pd|cc0/i.test(l) ? 0 : /by-sa/i.test(l) ? 2 : 1)

for (const slug of slugs) {
  if (manifest[slug]?.images?.length >= 2 && !args.includes('--refresh')) continue
  const v = data.venues.find((x) => x.slug === slug)
  if (!v) continue
  const title = decodeURIComponent(v.sources.wikipedia.match(/title=([^&]+)/)[1]).replace(/_/g, ' ')
  const files = new Map()
  // Images on the article (lead image first).
  const pi = await api('en.wikipedia.org', { action: 'query', titles: title, prop: 'pageimages|images', piprop: 'name', imlimit: '60' })
  const page = pi?.query?.pages?.[0]
  if (page?.pageimage) files.set(`File:${page.pageimage.replace(/_/g, ' ')}`, { lead: true })
  for (const im of page?.images || []) if (!files.has(im.title)) files.set(im.title, {})
  // Commons search for aerial and general views.
  for (const q of [`${v.name} aerial`, v.name]) {
    const s = await api('commons.wikimedia.org', { action: 'query', list: 'search', srsearch: `${q} filetype:bitmap`, srnamespace: '6', srlimit: '12' })
    for (const r of s?.query?.search || []) if (!files.has(r.title)) files.set(r.title, { search: q })
    await sleep(300)
  }
  const titles = [...files.keys()].filter((t) => !BAD_NAME.test(t))
  const cands = []
  for (let i = 0; i < titles.length; i += 40) {
    const info = await api('commons.wikimedia.org', { action: 'query', titles: titles.slice(i, i + 40).join('|'), prop: 'imageinfo', iiprop: 'url|size|extmetadata', iiurlwidth: '1280' })
    for (const p of info?.query?.pages || []) {
      const ii = p.imageinfo?.[0]
      if (!ii || p.missing) continue
      const m = ii.extmetadata || {}
      const lic = strip(m.LicenseShortName?.value)
      if (!FREE.test(lic) || /non-free|fair use/i.test(lic)) continue
      if ((ii.width || 0) < 900) continue
      const meta = files.get(p.title) || {}
      const desc = strip(m.ImageDescription?.value).slice(0, 200)
      const score = (meta.lead ? 3 : 0) + (GOOD_NAME.test(p.title + ' ' + desc) ? 4 : 0) + (/aerial|from above|overhead|drone/i.test(p.title + ' ' + desc) ? 3 : 0) - licenseRank(lic) - (meta.search && !new RegExp(v.name.split(' ')[0], 'i').test(p.title + desc) ? 4 : 0)
      cands.push({ file: p.title, page: ii.descriptionurl, url: ii.url, thumb: ii.thumburl, width: ii.width, height: ii.height, author: strip(m.Artist?.value).slice(0, 120) || null, credit: strip(m.Credit?.value).slice(0, 160) || null, license: lic, license_url: m.LicenseUrl?.value || null, share_alike: /by-sa/i.test(lic), description: desc, score })
    }
    await sleep(300)
  }
  cands.sort((a, b) => b.score - a.score)
  const pick = cands.slice(0, 4)
  const dir = path.join('research/raw/stadiums/refs', slug)
  fs.mkdirSync(dir, { recursive: true })
  for (const [i, c] of pick.entries()) {
    const f = path.join(dir, `${i + 1}.jpg`)
    try {
      const r = await fetch(c.thumb, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) })
      if (r.ok) { fs.writeFileSync(f, Buffer.from(await r.arrayBuffer())); c.local = f.replace(/\\/g, '/') }
    } catch {}
    await sleep(250)
  }
  manifest[slug] = { venue: v.name, article: v.sources.wikipedia, images: pick, usable: pick.filter((p) => p.local).length, fetched: new Date().toISOString() }
  console.log(`${slug}: ${pick.length} refs (${pick.map((p) => p.license).join(', ')})`)
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1))
}
