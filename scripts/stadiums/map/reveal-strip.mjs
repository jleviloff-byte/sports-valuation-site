// Screenshots of the same map area across the shape-to-illustration reveal,
// combined into one strip for review. Needs the dev server (npm run dev).
// Usage: node scripts/stadiums/map/reveal-strip.mjs [baseUrl] [out.png]
import { chromium } from 'playwright'
import sharp from 'sharp'

const base = process.argv[2] || 'http://localhost:4173'
const out = process.argv[3] || 'docs/art-review/reveal-strip.png'
const ZOOMS = [4.0, 5.9, 6.15, 6.35, 6.6, 7.2]
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } })
await page.goto(`${base}/stadiums?debugmap`, { waitUntil: 'domcontentloaded' })
await page.waitForFunction(() => !!(window.__stadiumMap && document.querySelector('.venue:not([hidden])')), null, { timeout: 60000 })
// Hide the sticky ticker and nav so they don't cover the map in the capture.
await page.addStyleTag({ content: 'body > div > .sticky, nav.sticky { display: none !important; }' })
const shots = []
for (const z of ZOOMS) {
  // Braces: jumpTo returns the map object, which must not be serialized back to Node.
  await page.evaluate((zz) => { window.__stadiumMap.jumpTo({ center: zz < 5 ? [-96, 38.5] : [-84.6, 39.6], zoom: zz }) }, z)
  await page.waitForTimeout(2500)
  await page.evaluate(() => { document.querySelector('.stadium-map').scrollIntoView({ block: 'start' }) })
  await page.waitForTimeout(400)
  const box = await page.evaluate(() => { const r = document.querySelector('.stadium-map').getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: Math.min(r.height, window.innerHeight - r.y) } })
  // CDP capture skips Playwright's stability waits, which stall while sprites stream in.
  const cdp = await page.context().newCDPSession(page)
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', clip: { ...box, scale: 1 } })
  await cdp.detach()
  const img = Buffer.from(data, 'base64')
  const label = Buffer.from(`<svg width="440" height="26" xmlns="http://www.w3.org/2000/svg"><rect width="440" height="26" fill="rgba(255,255,255,0.9)"/><text x="8" y="18" font-family="Arial" font-size="15" font-weight="700">zoom ${z}</text></svg>`)
  shots.push(await sharp(img).resize(440).composite([{ input: label, left: 0, top: 0 }]).png().toBuffer())
}
await browser.close()
const metas = await Promise.all(shots.map((s) => sharp(s).metadata()))
const h = Math.max(...metas.map((m) => m.height))
await sharp({ create: { width: 440 * 3, height: h * 2, channels: 3, background: '#fff' } })
  .composite(shots.map((s, i) => ({ input: s, left: (i % 3) * 440, top: Math.floor(i / 3) * h }))).png().toFile(out)
console.log(out)
