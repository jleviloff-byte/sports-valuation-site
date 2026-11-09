# Widened reference search (STATUS.md plan, 2026-11-09): gather every
# free-licensed candidate photo for a venue from
#   1. Wikimedia Commons: the venue category and its subcategories (depth 3),
#      plus file search on the venue's current and former names
#   2. Openverse (CC search across Flickr and other sources)
#   3. NASA Image and Video Library (public domain)
# US military / NOAA / NPS / Army Corps photos are reached through Commons,
# which mirrors DVIDS and agency uploads under the same categories.
# Thumbnails (480 px) go to research/raw/stadiums/refs-wide/<slug>/ (gitignored,
# backed up to the private Kaggle candidates dataset) with candidates.json.
# Every candidate is then reviewed by eye on contact sheets (wide_sheets.py);
# titles are never trusted. Licenses: CC0, PDM, PD, CC BY, CC BY-SA only.
# Usage: python3 scripts/stadiums/refs/wide_search.py <jobs.json>
import json, os, re, sys, time, urllib.parse, urllib.request

# Wikimedia API etiquette: descriptive User-Agent with a contact address, maxlag=5
# on every API call, up to 50 titles per query, back off on 429 honoring Retry-After,
# serial requests only. Thumbnails at 480 px (contact-sheet size), never originals.
UA = 'whatsmyteamworth-stadium-map/1.0 (https://github.com/jleviloff-byte/sports-valuation-site; contact: joshua.leviloff@kellogg.northwestern.edu)'
# Venue list: a jobs file [{slug, name, category, title, alt[]}] (alt = former
# names, searched too). Runs from this session only, at the rate Commons allows.
# Usage: python3 wide_search.py <jobs.json>
_J = json.load(open(sys.argv[1]))
ROOT = 'research/raw/stadiums/refs-wide'
V = {j['slug']: {'slug': j['slug'], 'name': j['name'], 'alt': j.get('alt', [])} for j in _J}
CATS = {j['slug']: {'category': j.get('category'), 'title': j.get('title') or j['name']} for j in _J}
sys.argv = [sys.argv[0]] + [j['slug'] for j in _J]
FREE = re.compile(r'^(public domain|pd|cc0|cc[- ]by(-sa)?[- ]?\d|cc[- ]by(-sa)?$|attribution|copyrighted free use|no restrictions|pdm)', re.I)
SKIP_CAT = re.compile(r'logos?|maps?|diagrams|seating charts|tickets|people|players|events in|games|concerts|matches|\bteams?\b|video|audio|sounds', re.I)


def get(url, tries=8, timeout=40):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(int(e.headers.get('Retry-After') or 0) or 30 * (i + 1)); continue
            if e.code in (500, 502, 503, 504): time.sleep(10 * (i + 1)); continue
            return None
        except Exception:
            time.sleep(5 * (i + 1))
    return None


def commons(params):
    qs = urllib.parse.urlencode({'format': 'json', 'formatversion': '2', 'maxlag': '5', **params})
    for i in range(6):
        b = get(f'https://commons.wikimedia.org/w/api.php?{qs}')
        time.sleep(1.0)
        if not b: return {}
        j = json.loads(b)
        if j.get('error', {}).get('code') == 'maxlag': time.sleep(5 * (i + 1)); continue
        return j
    return {}


def strip(h): return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h or '')).strip()


def commons_files(slug):
    v = V[slug]
    titles, seen_cats = set(), set()
    cat = CATS.get(slug, {}).get('category')
    frontier = [(cat, 0)] if cat else []
    while frontier:
        c, d = frontier.pop(0)
        if c in seen_cats or len(seen_cats) > 40: continue
        seen_cats.add(c)
        cont = {}
        while True:
            r = commons({'action': 'query', 'list': 'categorymembers', 'cmtitle': f'Category:{c}', 'cmtype': 'file|subcat', 'cmlimit': '500', **cont})
            for m in r.get('query', {}).get('categorymembers', []):
                t = m['title']
                if t.startswith('File:') and re.search(r'\.(jpe?g|png|tiff?)$', t, re.I): titles.add(t)
                elif t.startswith('Category:') and d < 3 and not SKIP_CAT.search(t): frontier.append((t[9:], d + 1))
            if 'continue' not in r: break
            cont = r['continue']
    names = {v['name'], CATS.get(slug, {}).get('title', v['name']), *v.get('alt', [])}
    for n in list(names):
        for q in [f'"{n}"', f'"{n}" aerial', f'"{n}" stadium from above']:
            r = commons({'action': 'query', 'list': 'search', 'srnamespace': '6', 'srlimit': '100', 'srsearch': q})
            for s in r.get('query', {}).get('search', []):
                if re.search(r'\.(jpe?g|png)$', s['title'], re.I): titles.add(s['title'])
    out = []
    tl = sorted(titles)
    for i in range(0, len(tl), 50):
        r = commons({'action': 'query', 'titles': '|'.join(tl[i:i + 50]), 'prop': 'imageinfo|categories', 'cllimit': '30',
                     'iiprop': 'url|size|extmetadata', 'iiurlwidth': '480'})
        for p in r.get('query', {}).get('pages', []):
            ii = (p.get('imageinfo') or [None])[0]
            if not ii: continue
            m = ii.get('extmetadata') or {}
            lic = strip(m.get('LicenseShortName', {}).get('value'))
            if not FREE.search(lic) or re.search(r'non-free|fair use', lic, re.I): continue
            if ii.get('width', 0) < 800: continue
            out.append({'source': 'commons', 'title': p['title'], 'page': ii.get('descriptionurl'), 'url': ii.get('url'), 'thumb': ii.get('thumburl'),
                        'width': ii.get('width'), 'height': ii.get('height'), 'author': strip(m.get('Artist', {}).get('value'))[:120],
                        'license': lic, 'license_url': m.get('LicenseUrl', {}).get('value'),
                        'date': strip(m.get('DateTimeOriginal', {}).get('value'))[:20], 'caption': strip(m.get('ImageDescription', {}).get('value'))[:240],
                        'categories': [c['title'][9:] for c in p.get('categories', [])]})
    return out


def openverse(slug):
    v = V[slug]; out = []
    for q in [q for n in [v['name'], *v.get('alt', [])] for q in (n, f'{n} aerial')]:
        url = 'https://api.openverse.org/v1/images/?' + urllib.parse.urlencode({'q': q, 'license': 'cc0,pdm,by,by-sa', 'page_size': '50', 'mature': 'false'})
        b = get(url); time.sleep(1.5)
        if not b: continue
        for r in json.loads(b).get('results', []):
            if (r.get('width') or 0) and r['width'] < 800: continue
            out.append({'source': f"openverse:{r.get('source')}", 'title': r.get('title'), 'page': r.get('foreign_landing_url'), 'url': r.get('url'),
                        'thumb': r.get('thumbnail') or r.get('url'), 'width': r.get('width'), 'height': r.get('height'), 'author': r.get('creator'),
                        'license': f"{r.get('license', '').upper()} {r.get('license_version') or ''}".strip(), 'license_url': r.get('license_url'),
                        'date': '', 'caption': (r.get('title') or '')[:240], 'categories': [t.get('name') for t in (r.get('tags') or [])][:12]})
    return out


def nasa(slug):
    v = V[slug]; out = []
    b = get('https://images-api.nasa.gov/search?' + urllib.parse.urlencode({'q': v['name'], 'media_type': 'image'}))
    if not b: return out
    for it in json.loads(b).get('collection', {}).get('items', [])[:40]:
        d = (it.get('data') or [{}])[0]
        thumb = next((l['href'] for l in it.get('links', []) if l.get('rel') == 'preview'), None)
        out.append({'source': 'nasa', 'title': d.get('title'), 'page': f"https://images.nasa.gov/details/{d.get('nasa_id')}", 'url': thumb, 'thumb': thumb,
                    'width': None, 'height': None, 'author': d.get('photographer') or d.get('center'), 'license': 'Public domain (NASA)',
                    'license_url': 'https://www.nasa.gov/nasa-brand-center/images-and-media/', 'date': (d.get('date_created') or '')[:10],
                    'caption': (d.get('description') or '')[:240], 'categories': d.get('keywords', [])[:12]})
    return out


for slug in sys.argv[1:]:
    d = os.path.join(ROOT, slug); os.makedirs(d, exist_ok=True)
    cf = os.path.join(d, 'candidates.json')
    if os.path.exists(cf) and json.load(open(cf)): print(slug, 'done already'); continue
    cands = []
    for fn in (commons_files, openverse, nasa):
        try: cands += fn(slug)
        except Exception as e: print(slug, fn.__name__, 'error', e, flush=True)
    seen, keep = set(), []
    for c in cands:
        k = (c.get('url') or c.get('page'))
        if not k or k in seen or not c.get('thumb'): continue
        seen.add(k); keep.append(c)
    keep = keep[:400]
    for i, c in enumerate(keep):
        c['n'] = i + 1
        f = os.path.join(d, f'{i + 1}.jpg')
        if not os.path.exists(f):
            b = get(c['thumb'], tries=3)
            if b: open(f, 'wb').write(b)
            time.sleep(0.3)
        c['local'] = f
    json.dump(keep, open(cf, 'w'), indent=1)
    by = {}
    for c in keep: by[c['source'].split(':')[0]] = by.get(c['source'].split(':')[0], 0) + 1
    print(slug, len(keep), by, flush=True)
