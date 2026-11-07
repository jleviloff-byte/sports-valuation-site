// Full-page screenshots of every existing route (desktop and phone) for
// before/after comparison, plus a pixel diff against a saved baseline.
//
//   node scripts/stadiums/perf/snapshot-routes.mjs <baseUrl> <outDir>
//   node scripts/stadiums/perf/snapshot-routes.mjs diff <beforeDir> <afterDir>
//
// Animations are frozen and lazy sections are scrolled into view so screenshots
// are deterministic. Optional header via env PROTECTION_BYPASS (Vercel preview).
import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright'
import sharp from 'sharp'

const BLANK_PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64')

export const ROUTES = [
  ['home', '/'],
  ['team-panel', '/?team=dallas-cowboys'],
  ['recent-sales', '/recent-sales'],
  ['forbes-breakdown', '/forbes-breakdown'],
  ['methodology', '/methodology'],
  ['data-sources', '/data-sources'],
  ['privacy', '/privacy'],
  ['terms', '/terms'],
]
const VIEWPORTS = [['desktop', { width: 1280, height: 900 }], ['phone', { width: 390, height: 844 }]]

async function shoot(base, out) {
  fs.mkdirSync(out, { recursive: true })
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
  const headers = process.env.PROTECTION_BYPASS ? { 'x-vercel-protection-bypass': process.env.PROTECTION_BYPASS } : {}
  for (const [vp, size] of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: size, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce', extraHTTPHeaders: headers })
    for (const [name, route] of ROUTES) {
      const page = await ctx.newPage()
      // Third-party images (team logos on external hosts) load at random times and
      // are unrelated to code changes; answer them instantly with a blank PNG so
      // before/after captures are deterministic.
      const host = new URL(base).host
      await page.route('**/*', (r) => (r.request().resourceType() === 'image' && new URL(r.request().url()).host !== host ? r.fulfill({ status: 200, contentType: 'image/png', body: BLANK_PNG }) : r.continue()))
      await page.goto(base + route, { waitUntil: 'networkidle', timeout: 90000 })
      await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}' })
      // Scroll through so LazyOnVisible sections mount, then back to top.
      const h = await page.evaluate(() => document.body.scrollHeight)
      for (let y = 0; y < h; y += 600) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(120) }
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.waitForLoadState('networkidle')
      // Lazy images (team logos) must finish before capture, or timing shows up as diffs.
      await page.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 30000 }).catch(() => {})
      await page.waitForTimeout(800)
      await page.screenshot({ path: path.join(out, `${name}-${vp}.png`), fullPage: true })
      await page.close()
    }
    await ctx.close()
  }
  await browser.close()
  console.log(`saved ${ROUTES.length * VIEWPORTS.length} screenshots to ${out}`)
}

async function diff(a, b) {
  const rows = []
  for (const f of fs.readdirSync(a).filter((x) => x.endsWith('.png'))) {
    const pb = path.join(b, f)
    if (!fs.existsSync(pb)) { rows.push([f, 'missing after']); continue }
    // Slight blur absorbs font anti-aliasing jitter; layout shifts and missing elements still show.
    const load = (p) => sharp(p).blur(1).raw().ensureAlpha().toBuffer({ resolveWithObject: true })
    const [ia, ib] = await Promise.all([load(path.join(a, f)), load(pb)])
    if (ia.info.width !== ib.info.width || ia.info.height !== ib.info.height) { rows.push([f, `size ${ia.info.width}x${ia.info.height} -> ${ib.info.width}x${ib.info.height}`]); continue }
    let n = 0
    for (let i = 0; i < ia.data.length; i += 4) if (Math.abs(ia.data[i] - ib.data[i]) + Math.abs(ia.data[i + 1] - ib.data[i + 1]) + Math.abs(ia.data[i + 2] - ib.data[i + 2]) > 60) n++
    rows.push([f, n === 0 ? 'identical' : `${n} pixels differ (${((n / (ia.info.width * ia.info.height)) * 100).toFixed(3)}%)`])
  }
  for (const r of rows) console.log(r.join(': '))
}

if (process.argv[2] === 'diff') await diff(process.argv[3], process.argv[4])
else await shoot(process.argv[2] || 'http://localhost:4173', process.argv[3] || 'research/perf/before')
