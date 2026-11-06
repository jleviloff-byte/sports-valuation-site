// Screenshots of the stadium map for review: muted vs baseplate basemap, light and dark.
// Needs the dev server running (npm run dev, port 5173).
// Usage: node scripts/stadiums/map/snapshot.mjs [baseUrl]
import fs from 'node:fs'
import { chromium } from 'playwright'

const base = process.argv[2] || 'http://localhost:5173'
fs.mkdirSync('scripts/stadiums/map/out', { recursive: true })
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
for (const scheme of ['light', 'dark']) {
  for (const basemap of ['muted', 'baseplate']) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, colorScheme: scheme })
    await page.goto(`${base}/stadiums${basemap === 'baseplate' ? '?basemap=baseplate' : ''}`, { waitUntil: 'networkidle' })
    await page.waitForSelector('.venue img', { timeout: 30000 })
    await page.waitForTimeout(5000)
    const el = await page.$('.stadium-map')
    const file = `scripts/stadiums/map/out/basemap-${basemap}-${scheme}.png`
    await el.screenshot({ path: file })
    console.log(file)
    await page.close()
  }
}
await browser.close()
