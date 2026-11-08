// Fetch picked references at 2560 px (Special:FilePath) so distant aerials keep
// enough pixels for segmentation and generation. Reads verified.json entries
// with `hires: true` and no hires file yet; writes refs-cand/<slug>/<n>-hires.jpg
// and sets `local_hires`. Usage: node scripts/stadiums/refs/fetch-hires.mjs
import fs from 'node:fs'
import { UA } from '../lib/wiki.mjs'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const F = 'scripts/stadiums/refs/verified.json'
const ver = JSON.parse(fs.readFileSync(F, 'utf8'))
for (const [slug, list] of Object.entries(ver)) {
  if (slug.startsWith('_')) continue
  for (const x of list) {
    if (!x.hires || (x.local_hires && fs.existsSync(x.local_hires))) continue
    const name = x.file.replace(/^File:/, '')
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=2560`
    const out = x.local.replace(/\.jpg$/, '-hires.jpg')
    for (let i = 0; i < 8; i++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(120000) })
        if (r.ok) { fs.writeFileSync(out, Buffer.from(await r.arrayBuffer())); x.local_hires = out; console.log(slug, 'ok'); break }
        console.log(slug, 'HTTP', r.status)
      } catch (e) { console.log(slug, 'err', e.message) }
      await sleep(15000 * (i + 1))
    }
    fs.writeFileSync(F, JSON.stringify(ver, null, 1))
    await sleep(3000)
  }
}
