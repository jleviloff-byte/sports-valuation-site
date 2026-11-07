// Where the time goes on /stadiums (emulated mid-range phone, same profile as
// perf-routes.mjs). Groups network by category and reports main-thread script
// time from the Chrome Performance domain, up to the first visible venue.
// Usage: node scripts/stadiums/perf/breakdown.mjs <baseUrl> [runs]
import { chromium } from 'playwright'

const base = process.argv[2] || 'http://localhost:4173'
const runs = Number(process.argv[3] || 3)
const headers = process.env.PROTECTION_BYPASS ? { 'x-vercel-protection-bypass': process.env.PROTECTION_BYPASS } : {}
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const cat = (u) => /\/assets\/.*\.js/.test(u) ? 'js' : /\.css/.test(u) ? 'css' : /index\.json|venues\//.test(u) ? 'venue data' : /map-styles|fonts\/|sprites\/ofm/.test(u) ? 'basemap style' : /tiles\.openfreemap|\.pbf|planet/.test(u) ? 'tiles' : /\/stadiums\/(sprites|atlas)/.test(u) ? 'venue sprites' : /googleapis|gstatic|gtag|google/.test(u) ? 'fonts/analytics' : 'other'
for (let i = 0; i < runs; i++) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, extraHTTPHeaders: headers })
  const page = await ctx.newPage()
  const cdp = await ctx.newCDPSession(page)
  await cdp.send('Network.enable'); await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 9 * 131072, uploadThroughput: 1.5 * 131072 })
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
  await cdp.send('Performance.enable')
  const t0 = Date.now()
  await page.goto(base + '/stadiums', { waitUntil: 'commit' })
  await page.waitForSelector('.venue:not([hidden])', { timeout: 60000 })
  const total = Date.now() - t0
  const m = Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map((x) => [x.name, x.value]))
  const res = await page.evaluate(() => performance.getEntriesByType('resource').map((e) => ({ u: e.name, s: e.startTime, e: e.responseEnd, kb: (e.transferSize || 0) / 1024 })))
  const by = {}
  for (const r of res) { const k = cat(r.u); const b = (by[k] ||= { n: 0, kb: 0, first: Infinity, last: 0 }); b.n++; b.kb += r.kb; b.first = Math.min(b.first, r.s); b.last = Math.max(b.last, r.e) }
  console.log(`\nrun ${i + 1}: first venue at ${total} ms | main thread: script ${Math.round(m.ScriptDuration * 1000)} ms, layout ${Math.round(m.LayoutDuration * 1000)} ms, style ${Math.round(m.RecalcStyleDuration * 1000)} ms, all tasks ${Math.round(m.TaskDuration * 1000)} ms`)
  for (const [k, b] of Object.entries(by).sort((a, b) => a[1].first - b[1].first)) console.log(`  ${k.padEnd(15)} ${String(b.n).padStart(3)} req ${String(Math.round(b.kb)).padStart(5)} KB   ${Math.round(b.first)}-${Math.round(b.last)} ms`)
  await ctx.close()
}
await browser.close()
