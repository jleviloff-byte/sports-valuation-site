// Load time per route on an emulated mid-range phone (4x CPU slowdown,
// ~9 Mbps / 150 ms RTT, 390x844 @2x, cache disabled). "Loaded" = the route's
// own content is rendered: its <main> <h1> (React-rendered; /stadiums also
// waits for the first venue sprite).
//
// Usage: node scripts/stadiums/perf/perf-routes.mjs <baseUrl> [runs] [label]
// Env PROTECTION_BYPASS adds the x-vercel-protection-bypass header (preview).
import fs from 'node:fs'
import { chromium } from 'playwright'

const base = process.argv[2] || 'http://localhost:4173'
// Optional A/B mode: PERF_BASE_B=<url> interleaves runs of base (A) and B per route so both see the same machine load.
const baseB = process.env.PERF_BASE_B || null
const runs = Number(process.argv[3] || 3)
const label = process.argv[4] || base
const ROUTES = [
  ['/', 'main h1'],
  ['/recent-sales', 'main h1'],
  ['/forbes-breakdown', 'main h1'],
  ['/methodology', 'main h1'],
  ['/data-sources', 'main h1'],
  ['/privacy', 'main h1'],
  ['/terms', 'main h1'],
  ['/stadiums', '.venue:not([hidden])'],
]
const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })

async function once(route, sel, root = base) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
  // Bypass header on the protected preview host only: sent cross-origin it breaks
  // CORS preflights (fonts, map tiles) and skews the timing.
  if (process.env.PROTECTION_BYPASS) {
    const host = new URL(root).host
    // Vercel sets a bypass cookie for the host; the timed navigation then needs no
    // header and no request interception (interception adds overhead per request).
    if (host === new URL(base).host) await ctx.request.get(root + '/robots.txt', { headers: { 'x-vercel-protection-bypass': process.env.PROTECTION_BYPASS, 'x-vercel-set-bypass-cookie': 'samesitenone' } })
  }
  const page = await ctx.newPage()
  const cdp = await ctx.newCDPSession(page)
  await cdp.send('Network.enable')
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: (9 * 1024 * 1024) / 8, uploadThroughput: (1.5 * 1024 * 1024) / 8 })
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
  const t0 = Date.now()
  await page.goto(root + route, { waitUntil: 'commit', timeout: 60000 })
  // React must have rendered (the prerendered /stadiums shell has its own static h1).
  await page.waitForFunction((s) => { const el = document.querySelector(s); return !!el && !!document.querySelector('nav') }, sel, { timeout: 60000 })
  const ms = Date.now() - t0
  const kb = await page.evaluate(() => Math.round((performance.getEntriesByType('resource').reduce((s, e) => s + (e.transferSize || 0), 0) + (performance.getEntriesByType('navigation')[0]?.transferSize || 0)) / 1024))
  await ctx.close()
  return { ms, kb }
}

const out = []
const median = (rs) => [...rs].sort((a, b) => a.ms - b.ms)[Math.floor(rs.length / 2)]
for (const [route, sel] of ROUTES) {
  const rs = [], rb = []
  for (let i = 0; i < runs; i++) { rs.push(await once(route, sel)); if (baseB && !(process.env.PERF_B_SKIP || '').split(',').includes(route)) rb.push(await once(route, sel, baseB)) }
  const med = median(rs)
  const row = { route, median_ms: med.ms, kb: med.kb, runs: rs.map((r) => r.ms) }
  if (baseB && rb.length) { const mb = median(rb); Object.assign(row, { b_median_ms: mb.ms, b_kb: mb.kb, b_runs: rb.map((r) => r.ms) }) }
  out.push(row)
  console.log(`${route.padEnd(18)} A ${String(med.ms).padStart(6)} ms ${String(med.kb).padStart(5)} KB` + (baseB && rb.length ? `  |  B ${String(row.b_median_ms).padStart(6)} ms ${String(row.b_kb).padStart(5)} KB` : '') + `   (A runs ${row.runs.join(', ')})`)
}
await browser.close()
fs.mkdirSync('research/perf', { recursive: true })
const f = 'research/perf/results.json'
const all = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}
all[label] = { measured: new Date().toISOString(), base, results: out }
fs.writeFileSync(f, JSON.stringify(all, null, 1))
