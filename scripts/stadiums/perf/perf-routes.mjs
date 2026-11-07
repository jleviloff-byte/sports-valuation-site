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
  ['/stadiums', '.venue:not([hidden]) img'],
]
const headers = process.env.PROTECTION_BYPASS ? { 'x-vercel-protection-bypass': process.env.PROTECTION_BYPASS, 'x-vercel-set-bypass-cookie': 'true' } : {}
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })

async function once(route, sel, root = base) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, extraHTTPHeaders: headers })
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
  for (let i = 0; i < runs; i++) { rs.push(await once(route, sel)); if (baseB) rb.push(await once(route, sel, baseB)) }
  const med = median(rs)
  const row = { route, median_ms: med.ms, kb: med.kb, runs: rs.map((r) => r.ms) }
  if (baseB) { const mb = median(rb); Object.assign(row, { b_median_ms: mb.ms, b_kb: mb.kb, b_runs: rb.map((r) => r.ms) }) }
  out.push(row)
  console.log(`${route.padEnd(18)} A ${String(med.ms).padStart(6)} ms ${String(med.kb).padStart(5)} KB` + (baseB ? `  |  B ${String(row.b_median_ms).padStart(6)} ms ${String(row.b_kb).padStart(5)} KB` : '') + `   (A runs ${row.runs.join(', ')})`)
}
await browser.close()
fs.mkdirSync('research/perf', { recursive: true })
const f = 'research/perf/results.json'
const all = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}
all[label] = { measured: new Date().toISOString(), base, results: out }
fs.writeFileSync(f, JSON.stringify(all, null, 1))
