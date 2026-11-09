// Release check: load every page in headless Chromium, record console errors,
// failed requests and a full-page screenshot.
// Usage: node scripts/stadiums/release/check-pages.mjs <baseUrl> <outDir> [--bypass] [--width 1440]
// --bypass sends x-vercel-protection-bypass from $VERCEL_AUTOMATION_BYPASS_SECRET
// (never printed). Pages: every existing route, /stadiums, one venue card with
// new art and one venue card with footprint only.
import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright'

const [base, out] = process.argv.slice(2)
const width = Number(process.argv[process.argv.indexOf('--width') + 1]) || 1440
const bypass = process.argv.includes('--bypass')
export const PAGES = ['/', '/methodology', '/data-sources', '/recent-sales', '/forbes-breakdown', '/privacy', '/terms',
  '/stadiums', '/stadiums/fenway-park', '/stadiums/kyle-field']
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1].split(',') : PAGES
fs.mkdirSync(out, { recursive: true })
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
const ctx = await browser.newContext({
  viewport: { width, height: 900 }, deviceScaleFactor: 1,
  extraHTTPHeaders: bypass ? { 'x-vercel-protection-bypass': process.env.VERCEL_AUTOMATION_BYPASS_SECRET, 'x-vercel-set-bypass-cookie': 'true' } : {},
})
const report = []
for (const p of only) {
  const page = await ctx.newPage()
  const errors = [], failed = []
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 300)) })
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message.slice(0, 300)))
  page.on('requestfailed', (r) => failed.push(`${r.failure()?.errorText} ${r.url().slice(0, 160)}`))
  page.on('response', (r) => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url().slice(0, 160)}`) })
  await page.goto(base + p, { waitUntil: 'networkidle', timeout: 60000 }).catch((e) => errors.push('goto: ' + e.message.slice(0, 200)))
  await page.waitForTimeout(p.startsWith('/stadiums') ? 3500 : 1500)
  const name = p === '/' ? 'home' : p.slice(1).replace(/\//g, '_')
  await page.screenshot({ path: path.join(out, `${name}.png`), fullPage: !p.startsWith('/stadiums') })
  const title = await page.title()
  report.push({ page: p, title, errors, failed })
  console.log(`${p} | ${title} | errors ${errors.length} | failed requests ${failed.length}`)
  for (const e of errors) console.log('   error:', e)
  for (const f of failed) console.log('   failed:', f)
  await page.close()
}
fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 1))
await browser.close()
