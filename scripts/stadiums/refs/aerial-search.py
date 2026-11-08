# Targeted Commons search for oblique aerials of a list of venues (the category
# crawl keeps 24 files per venue, often all ground-level). For each venue, search
# File: titles for "<name> aerial" and "aerial <name>", keep titles that share a
# distinctive word with the venue name or mention aerial/air/drone, and append
# up to 8 new free-license files via extra.mjs (license filter + thumbnail cache).
# Usage: python3 scripts/stadiums/refs/aerial-search.py scripts/stadiums/overhaul/iconic.json
import json, re, subprocess, sys
items = json.load(open(sys.argv[1]))
ver = json.load(open('scripts/stadiums/refs/verified.json'))
STOP = {'stadium', 'field', 'park', 'arena', 'center', 'the', 'at', 'of', 'and', 'memorial', 'speedway', 'motor', 'international'}
words = lambda t: {w for w in re.sub(r'[^a-z0-9 ]', ' ', t.lower()).split() if w not in STOP and len(w) > 2}
for it in items:
    slug, name = it['slug'], it['name']
    if slug in ver: continue
    want = words(name)
    titles = []
    for q in [f'{name} aerial', f'aerial {name}', f'{name} drone']:
        r = subprocess.run(['node', 'scripts/stadiums/refs/extra.mjs', 'search', q], capture_output=True, text=True, timeout=900)
        for t in r.stdout.splitlines():
            tl = words(t)
            if t.lower().endswith(('.jpg', '.jpeg', '.png')) and (want & tl) and re.search(r'aerial|air|drone|from above|helicopter|blimp|overhead', t, re.I) and t not in titles:
                titles.append(t)
    titles = titles[:8]
    print(f'{slug}: {len(titles)} aerial titles', flush=True)
    if titles:
        r = subprocess.run(['node', 'scripts/stadiums/refs/extra.mjs', 'add', slug, *titles], capture_output=True, text=True, timeout=1800)
        print(r.stdout.strip(), flush=True)
