// First-render timing for /stadiums on an emulated mid-range phone:
// 4x CPU slowdown, ~9 Mbps down / 1.5 Mbps up, 150 ms RTT, 390x844 viewport.
// Run against a production build: npm run build && npx vite preview --port 4173
// Usage: node scripts/stadiums/map/perf.mjs [url] [runs]
import { chromium } from 'playwright'

const url = process.argv[2] || 'http://localhost:4173/stadiums'
const runs = Number(process.argv[3] || 3)
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const results = []
for (let i = 0; i < runs; i++) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
  const page = await ctx.newPage()
  const cdp = await ctx.newCDPSession(page)
  await cdp.send('Network.enable')
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: (9 * 1024 * 1024) / 8, uploadThroughput: (1.5 * 1024 * 1024) / 8 })
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
  const t0 = Date.now()
  await page.goto(url, { waitUntil: 'commit' })
  await page.waitForSelector('h1', { timeout: 60000 })
  const tTitle = Date.now() - t0
  await page.waitForSelector('.venue:not([hidden]) img', { timeout: 60000 })
  const tVenue = Date.now() - t0
  const bytes = await page.evaluate(() => performance.getEntriesByType('resource').reduce((s, e) => s + (e.transferSize || 0), 0) + (performance.getEntriesByType('navigation')[0]?.transferSize || 0))
  results.push({ tTitle, tVenue, kb: Math.round(bytes / 1024) })
  console.log(`run ${i + 1}: heading ${tTitle} ms, first venue sprite ${tVenue} ms, ${Math.round(bytes / 1024)} KB transferred`)
  await ctx.close()
}
await browser.close()
const med = (k) => results.map((r) => r[k]).sort((a, b) => a - b)[Math.floor(results.length / 2)]
console.log(`median: heading ${med('tTitle')} ms, first venue ${med('tVenue')} ms, ${med('kb')} KB`)
