# Seat, roof and field colors for the generic fallback models, sampled from each
# venue's USGS NAIP aerial (public domain) inside its OSM footprint, so colors
# are measured, never taken from team palettes (brief: venue spec sheets).
# The footprint is capped at 260 m from its centroid (OSM polygons sometimes
# take whole sports complexes). k-means (k=5, Lab) inside the mask:
#   field  = the greenest cluster, if it is green
#   seats  = the most saturated non-green, non-asphalt cluster with >= 8% share,
#            else the largest non-green cluster
#   roof   = the largest cluster (arenas and domes show their roof from above)
# Output: scripts/stadiums/overhaul/naip-colors.json {slug: {seats, roof, field, facade}}
# Usage: python3 scripts/stadiums/overhaul/naip_colors.py
import json, math, os, re
import numpy as np, cv2

M = json.load(open('research/raw/stadiums/naip-manifest.json'))
V = {v['slug']: v for v in json.load(open('data/stadiums.json'))['venues']}
W = {w['url']: w for w in json.load(open('research/raw/stadiums/infobox.json'))['venues'].values()}
osm_file = lambda t: 'research/raw/stadiums/osm/' + re.sub(r'[^A-Za-z0-9._-]+', '_', t)[:150] + '.json'
merc = lambda lat: math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
hexc = lambda c: '#%02x%02x%02x' % tuple(int(x) for x in c)

out = {}
for slug, e in M.items():
    f = e.get('file') or f'research/raw/stadiums/naip/{slug}.jpg'
    if not os.path.exists(f) or slug not in V: continue
    try:
        o = json.load(open(osm_file(W[V[slug]['sources']['wikipedia']]['title'])))
        fp = o['best']['footprint']; fp = json.loads(fp) if isinstance(fp, str) else fp
    except Exception:
        fp = None
    img = cv2.imread(f); H, Wd = img.shape[:2]
    x0, y0, x1, y1 = map(float, re.search(r'bbox=([-0-9.]+),([-0-9.]+),([-0-9.]+),([-0-9.]+)', e['url']).groups())
    px = lambda lng, lat: ((lng - x0) / (x1 - x0) * Wd, (merc(y1) - merc(lat)) / (merc(y1) - merc(y0)) * H)
    mask = np.zeros((H, Wd), np.uint8)
    mpp = e.get('half_width_m', 230) * 2 / Wd
    if fp and len(fp) >= 3:
        pts = np.array([px(*p) for p in fp], np.float32)
        cv2.fillPoly(mask, [pts.astype(np.int32)], 255)
        c = pts.mean(0)
    else:
        c = np.array([Wd / 2, H / 2])
    if mask.sum() < 255 * 2000:  # no footprint, or only the pitch: a disk scaled by capacity
        r = min(180, 40 + math.sqrt(V[slug].get('capacity') or 15000) * 0.6) / mpp
        cv2.circle(mask, tuple(int(v) for v in c), int(r), 255, -1)
    cap = np.zeros_like(mask); cv2.circle(cap, tuple(int(v) for v in c), int(260 / mpp), 255, -1)
    mask &= cap
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)[mask > 0].astype(np.float32)
    if len(lab) < 500: continue
    crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.5)
    _, lbl, cen = cv2.kmeans(lab, 5, None, crit, 3, cv2.KMEANS_PP_CENTERS)
    share = np.bincount(lbl.ravel(), minlength=5) / len(lbl)
    rgb = cv2.cvtColor(cen.reshape(1, -1, 3).astype(np.uint8), cv2.COLOR_LAB2RGB)[0]
    a, b = cen[:, 1] - 128, cen[:, 2] - 128
    chroma = np.hypot(a, b)
    green = (a < -6) & (b > -5)
    order = np.argsort(-share)
    field = int(np.argmin(np.where(green, a, 99))) if green.any() else None
    cand = [k for k in range(5) if not green[k] and share[k] >= 0.08 and cen[k, 0] > 60]
    seats = max(cand, key=lambda k: chroma[k]) if cand else next((k for k in order if not green[k]), order[0])
    roof = int(order[0]) if not green[order[0]] else int(order[1])
    out[slug] = {'seats': hexc(rgb[seats]), 'roof': hexc(rgb[roof]), **({'field': hexc(rgb[field])} if field is not None else {}),
                 'shares': {hexc(rgb[k]): round(float(share[k]), 3) for k in order}}
json.dump(out, open('scripts/stadiums/overhaul/naip-colors.json', 'w'), indent=1)
print(len(out), 'venues sampled')
