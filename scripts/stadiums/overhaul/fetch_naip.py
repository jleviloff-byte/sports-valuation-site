# Download the USGS NAIP aerial (public domain) for every venue in
# research/raw/stadiums/naip-manifest.json that is not on disk yet. These are
# the top-down source for fallback models: footprint, field and seat colors.
# Usage: python3 scripts/stadiums/overhaul/fetch_naip.py
import json, os, time, urllib.request
M = json.load(open('research/raw/stadiums/naip-manifest.json'))
for slug, e in M.items():
    f = e['file']
    if os.path.exists(f) and os.path.getsize(f) > 10000: continue
    for i in range(5):
        try:
            req = urllib.request.Request(e['url'], headers={'User-Agent': 'stadium-art-overhaul/1.0'})
            b = urllib.request.urlopen(req, timeout=90).read()
            if len(b) > 10000 and b[:2] == b'\xff\xd8':
                open(f, 'wb').write(b); print('ok', slug, len(b), flush=True); break
            print('bad', slug, len(b), flush=True)
        except Exception as ex:
            print('err', slug, ex, flush=True)
        time.sleep(5 * (i + 1))
