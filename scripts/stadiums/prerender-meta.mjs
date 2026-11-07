// Post-build: static HTML shells for /stadiums and /stadiums/<slug> with
// per-venue <title>, description, canonical and Open Graph tags, so search
// engines and link previews see real metadata without running JavaScript.
// The React app takes over on load exactly as on any other route.
//
// Vercel serves dist/stadiums/<slug>.html for /stadiums/<slug> (cleanUrls),
// ahead of the SPA rewrite in vercel.json.
//
// Runs as part of `npm run build`.
import fs from 'node:fs'
import path from 'node:path'

const SITE = 'https://franchisemath.site'
const dist = 'dist'
const tpl = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
// Hints so the map code, its CSS and the basemap style download alongside the main bundle.
const assets = fs.readdirSync(path.join(dist, 'assets'))
const pick = (re) => assets.filter((a) => re.test(a)).map((a) => '/assets/' + a)
const HINTS = [
  '<link rel="preload" href="/stadiums/index.json" as="fetch" crossorigin="anonymous" />',
  '<link rel="preload" href="/stadiums/atlas/atlas-0.webp" as="image" />',
  ...pick(/^(Stadiums|StadiumMap)-[\w-]+\.js$/).map((h) => `<link rel="modulepreload" href="${h}" />`),
  ...pick(/^StadiumMap-[\w-]+\.css$/).map((h) => `<link rel="preload" href="${h}" as="style" />`),
  '<link rel="preload" href="/map-styles/muted-light.json" as="fetch" crossorigin="anonymous" media="(prefers-color-scheme: light)" />',
  '<link rel="preload" href="/map-styles/muted-dark.json" as="fetch" crossorigin="anonymous" media="(prefers-color-scheme: dark)" />',
  '<link rel="preconnect" href="https://tiles.openfreemap.org" crossorigin />',
].join('\n    ')
// The home route's code and team data live in their own chunk now; on "/" only,
// preload it and its static imports in parallel with the entry bundle so home
// isn't delayed by an extra round trip. Other routes are unaffected.
{
  const indexPath = path.join(dist, 'index.html')
  let idx = fs.readFileSync(indexPath, 'utf8')
  const home = assets.find((a) => /^Home-[\w-]+\.js$/.test(a))
  if (home && !idx.includes('data-home-preload')) {
    const code = fs.readFileSync(path.join(dist, 'assets', home), 'utf8')
    const deps = [...new Set([...code.matchAll(/from"\.\/([\w-]+\.js)"/g)].map((m) => m[1]))].filter((d) => !/^(index|react)-/.test(d))
    const urls = [home, ...deps].map((f) => `/assets/${f}`)
    const script = `<script data-home-preload>if(location.pathname==='/'){${JSON.stringify(urls)}.forEach(function(h){var l=document.createElement('link');l.rel='modulepreload';l.href=h;document.head.appendChild(l)})}</script>`
    idx = idx.replace('</head>', `    ${script}\n  </head>`)
    fs.writeFileSync(indexPath, idx)
    console.log(`home preload: ${urls.join(', ')}`)
  }
}
const { venues } = JSON.parse(fs.readFileSync('public/stadiums/index.json', 'utf8'))
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const fmt = (n) => n.toLocaleString('en-US')
const capLabel = (v) => `${fmt(v.cap)}${v.ct === 'estimated' ? ' est.' : ''}`

function page({ title, description, url, image, body, preload = true }) {
  let h = tpl
  // Start the venue list download before the app bundles run.
  if (preload) h = h.replace('</head>', `    ${HINTS}\n  </head>`)
  const swap = (re, val) => { h = h.replace(re, val) }
  swap(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  swap(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`)
  swap(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  swap(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  swap(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
  swap(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  swap(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  swap(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
  if (image) {
    swap(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`)
    swap(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`)
    swap(/<meta property="og:image:width"[^>]*>\s*<meta property="og:image:height"[^>]*>/, '<meta property="og:image:width" content="1024" />\n    <meta property="og:image:height" content="1024" />')
    swap(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${esc(title)}$2`)
  }
  // Crawlable fallback content inside #root; React replaces it on mount.
  swap('<div id="root"></div>', `<div id="root"><main style="max-width:720px;margin:40px auto;padding:0 16px;font-family:system-ui,sans-serif">${body}</main></div>`)
  return h
}

fs.mkdirSync(path.join(dist, 'stadiums'), { recursive: true })
const n = venues.length
fs.writeFileSync(path.join(dist, 'stadiums.html'), page({
  title: 'Stadium Map: every US venue with 15,000+ seats | Franchise Math',
  description: `${n} US stadiums, arenas, ballparks, racetracks and tennis venues with 15,000+ seats, drawn to scale by capacity.`,
  url: `${SITE}/stadiums`,
  body: `<h1>Every US venue with 15,000+ seats</h1><p>${n} venues, largest first.</p><ol>${[...venues].sort((a, b) => b.cap - a.cap).map((v) => `<li><a href="/stadiums/${v.s}">${esc(v.n)}</a>, ${esc(v.c)}, ${v.st}: ${capLabel(v)}</li>`).join('')}</ol>`,
}))
for (const v of venues) {
  const title = `${v.n}: ${capLabel(v)} seats | Stadium Map | Franchise Math`
  const description = `${v.n} in ${v.c}, ${v.st}: capacity ${capLabel(v)}${v.r ? `, #${v.r} among US venues with 15,000+ official seats` : ', ranked among motorsport venues only'}. Tenants: ${v.tm.slice(0, 3).join(', ')}.`
  fs.writeFileSync(path.join(dist, 'stadiums', `${v.s}.html`), page({
    title, description, url: `${SITE}/stadiums/${v.s}`,
    image: v.img ? `${SITE}/stadiums/hero/${v.s}.webp` : null,
    body: `<h1>${esc(v.n)}</h1><p>${esc(v.c)}, ${v.st}. Capacity ${capLabel(v)}.${v.r ? ` Rank #${v.r} in the US.` : ' Racetrack capacities are estimates, so it is ranked among motorsport venues only.'}</p><p>Tenants: ${esc(v.tm.join(', '))}.</p><img src="/stadiums/hero/${v.s}.webp" alt="Brick-built illustration of ${esc(v.n)}" width="512" height="512">`,
  }))
}
console.log(`prerendered /stadiums and ${n} venue pages`)
