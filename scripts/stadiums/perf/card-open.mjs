// Card-open time for the 3D tiles prototype on the emulated mid-range phone
// (same profile as perf-routes.mjs: 4x CPU, ~9 Mbps / 150 ms RTT, 390x844 @2x,
// cache off). Opens /stadiums/<slug> directly and reports: card shown (hero
// container), 3D ready (first tiles loaded: window.__tiles3dReadyMs measured
// from Cesium start), or fallback. Live streaming only: no screenshots taken.
// Usage: PROTECTION_BYPASS=... node scripts/stadiums/perf/card-open.mjs <previewUrl> [runs]
import { chromium } from 'playwright'
const [base, runsArg] = process.argv.slice(2)
const runs = Number(runsArg || 3)
const SLUGS = ['fenway-park', 'michigan-stadium', 'sofi-stadium', 'kyle-field', 'daytona-international-speedway']
const browser = await chromium.launch({ ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}), args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const med = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)]
for (const slug of SLUGS) {
  const shown = [], ready = [], outcome = []
  for (let i = 0; i < runs; i++) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
    const host = new URL(base).host
    if (process.env.PROTECTION_BYPASS) await ctx.request.get(base + '/robots.txt', { headers: { 'x-vercel-protection-bypass': process.env.PROTECTION_BYPASS, 'x-vercel-set-bypass-cookie': 'samesitenone' } })
    const p = await ctx.newPage(); const cdp = await ctx.newCDPSession(p)
    await cdp.send('Network.enable'); await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 9 * 131072, uploadThroughput: 1.5 * 131072 })
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    const t0 = Date.now()
    await p.goto(`${base}/stadiums/${slug}`, { waitUntil: 'commit' })
    await p.waitForSelector('.loadout-model', { timeout: 60000 }); shown.push(Date.now() - t0)
    const r = await p.waitForFunction(() => (window.__tiles3dReadyMs ? 'live' : document.querySelector('.loadout-model:not(.tiles3d)') ? 'fallback' : null), null, { timeout: 60000 }).then((h) => h.jsonValue()).catch(() => 'timeout')
    outcome.push(r); if (r === 'live') ready.push(Date.now() - t0)
    await ctx.close()
  }
  console.log(`${slug.padEnd(32)} card shown ${med(shown)} ms | 3D ready ${ready.length ? med(ready) + ' ms' : '-'} | ${outcome.join(', ')}`)
}
await browser.close()
