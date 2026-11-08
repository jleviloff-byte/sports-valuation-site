// Reference candidates for the pilot venues, taken only from each venue's own
// Wikimedia Commons category (and its view/aerial/exterior/interior
// subcategories), so every candidate is filed under the venue on Commons.
// Free licenses only. Thumbnails go to research/raw/stadiums/refs-cand/<slug>/
// (gitignored) with candidates.json listing title, categories, caption, license.
// Each candidate is then checked by eye; picks and rejects are recorded in
// scripts/stadiums/refs/picks.json and scripts/stadiums/refs/rejected.md.
// Usage: node scripts/stadiums/refs/candidates.mjs [slug ...]
import fs from 'node:fs'
import path from 'node:path'
import { UA } from '../lib/wiki.mjs'

export const CATS = {
  'michigan-stadium': 'Michigan Stadium',
  'yulman-stadium': 'Yulman Stadium',
  'fenway-park': 'Fenway Park',
  'wrigley-field': 'Wrigley Field',
  'sofi-stadium': 'SoFi Stadium',
  'madison-square-garden': 'Madison Square Garden',
  'daytona-international-speedway': 'Daytona International Speedway',
  'arthur-ashe-stadium': 'Arthur Ashe Stadium',
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
async function api(params) {
  const qs = new URLSearchParams({ format: 'json', formatversion: '2', ...params })
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?${qs}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) })
      if (r.ok) return r.json()
    } catch {}
    await sleep(1500 * (i + 1))
  }
  return null
}
const strip = (h) => (h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const FREE = /^(public domain|pd|cc0|cc[- ]by(-sa)?[- ]?\d|cc[- ]by(-sa)?$|attribution|copyrighted free use)/i
const SUB = /aerial|exterior|interior|view|from (the )?air|seating|stands|grandstand|bowl|structure|architecture|roof|field|playing|panoram|scoreboard|green monster|marquee|ivy|bleacher|night/i
const SKIPSUB = /people|players|games? (in|at)|concerts?|events? (in|at)|logos?|tickets|press|construction of|demolition|in art|history|by year/i

async function members(cat, type) {
  const out = []
  let cont = {}
  do {
    const r = await api({ action: 'query', list: 'categorymembers', cmtitle: `Category:${cat}`, cmtype: type, cmlimit: '500', ...cont })
    out.push(...(r?.query?.categorymembers || []).map((m) => m.title))
    cont = r?.continue ? { cmcontinue: r.continue.cmcontinue } : {}
  } while (cont.cmcontinue)
  return out
}

const want = process.argv.slice(2)
for (const [slug, cat] of Object.entries(CATS)) {
  if (want.length && !want.includes(slug)) continue
  const cats = [cat]
  for (const s of await members(cat, 'subcat')) {
    const n = s.replace(/^Category:/, '')
    if (SUB.test(n) && !SKIPSUB.test(n)) cats.push(n)
  }
  const files = new Map()
  for (const c of cats) for (const f of await members(c, 'file')) if (/\.(jpe?g|png|webp)$/i.test(f)) files.set(f, c)
  const titles = [...files.keys()]
  const cands = []
  for (let i = 0; i < titles.length; i += 40) {
    const info = await api({ action: 'query', titles: titles.slice(i, i + 40).join('|'), prop: 'imageinfo|categories', cllimit: '50', iiprop: 'url|size|extmetadata', iiurlwidth: '1024' })
    for (const p of info?.query?.pages || []) {
      const ii = p.imageinfo?.[0]
      if (!ii) continue
      const m = ii.extmetadata || {}
      const lic = strip(m.LicenseShortName?.value)
      if (!FREE.test(lic) || /non-free|fair use/i.test(lic) || (ii.width || 0) < 1200) continue
      cands.push({
        file: p.title, category: files.get(p.title), categories: (p.categories || []).map((c) => c.title.replace(/^Category:/, '')),
        caption: strip(m.ImageDescription?.value).slice(0, 240), date: strip(m.DateTimeOriginal?.value).slice(0, 20),
        page: ii.descriptionurl, url: ii.url, thumb: ii.thumburl, width: ii.width, height: ii.height,
        author: strip(m.Artist?.value).slice(0, 120) || null, license: lic, license_url: m.LicenseUrl?.value || null,
      })
    }
    await sleep(250)
  }
  // Prefer recent, large, overview-like files; keep a manageable review set.
  const score = (c) => (/aerial|from above|overhead|drone|air|overview|panoram/i.test(c.file + c.caption + c.category) ? 4 : 0) + (/exterior|outside|facade|façade/i.test(c.file + c.caption) ? 2 : 0) + Math.min(3, (parseInt(c.date) || 2000) - 2016) * 0.5
  cands.sort((a, b) => score(b) - score(a))
  const keep = cands.slice(0, 24)
  const dir = path.join('research/raw/stadiums/refs-cand', slug)
  fs.mkdirSync(dir, { recursive: true })
  for (const [i, c] of keep.entries()) {
    const f = path.join(dir, `${i + 1}.jpg`)
    if (!fs.existsSync(f)) {
      try {
        const r = await fetch(c.thumb, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) })
        if (r.ok) fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()))
      } catch {}
      await sleep(300)
    }
    c.local = f.replace(/\\/g, '/'); c.n = i + 1
  }
  fs.writeFileSync(path.join(dir, 'candidates.json'), JSON.stringify(keep, null, 1))
  console.log(`${slug}: ${cats.length} categories, ${cands.length} free files, kept ${keep.length}`)
}
