# Generation jobs and spec sheets for long-tail venues on the photo path:
# reference + hull-filled SAM mask, description from the venue type and the
# colors sampled inside the mask on the photo (colors-full.json), never from
# team palettes. Usage: SEEDS=11,44 python3 photo_jobs.py <out.json> slug ...
import colorsys, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from fallback_jobs import cname, KIND  # noqa: E402  (shares the color naming)
V = {v['slug']: v for v in json.load(open('data/stadiums.json'))['venues']}
C = json.load(open('scripts/stadiums/overhaul/colors-full.json'))
VER = json.load(open('scripts/stadiums/refs/verified.json'))
SEEDS = [int(x) for x in os.environ.get('SEEDS', '11,44').split(',')]

def accent(slug):
    # most saturated cluster with at least 6% share: the seat or trim color
    best, bs = None, 0
    for c in C.get(slug, []):
        r, g, b = (int(c['hex'][i:i + 2], 16) / 255 for i in (1, 3, 5))
        h, l, s = colorsys.rgb_to_hls(r, g, b)
        hue = h * 360
        if c['share'] >= 0.06 and s * (1 - abs(l - 0.5) * 2) > bs and not (70 < hue < 170):  # skip turf green
            best, bs = c['hex'], s * (1 - abs(l - 0.5) * 2)
    return cname(best) if best and bs > 0.08 else 'gray'

out = []
for s in sys.argv[2:]:
    v, e = V[s], VER[s][0]
    t = v['venue_type']; col = accent(s)
    field = {'ballpark': 'dirt infield and green grass outfield', 'arena': '', 'soccer_specific': 'green soccer pitch'}.get(t, 'green football field with white yard lines')
    shape = 'enclosed arena with its real roof and facade' if t == 'arena' else f'{KIND[t]} with {col} seats'
    desc = f"{v['name']}: {shape}" + (f', {field}' if field else '')
    out.append({'slug': s, 'kind': KIND[t], 'ref': f"refs/{s}/{e['n']}.jpg", 'mask': f'masks/{s}-hull.png', 'desc_short': desc, 'seeds': SEEDS})
    f = f'docs/overhaul/specs/{s}.md'
    if not os.path.exists(f):
        rows = '\n'.join(f"| {round(c['share'] * 100)}% | `{c['hex']}` |" for c in C.get(s, []))
        open(f, 'w').write(f"""# {v['name']}

Type: {KIND[t]}. Pipeline path: photo (long tail). City: {v.get('city')}, {v.get('state')}.
Reference: [{e['file']}]({e['page']}), {e['author']}, {e['license']}.

## Identifying features

1. Venue shape and stands as in the reference photo (ref #{e['n']})
2. {KIND[t]}, roof: {v['roof']}, capacity {v.get('capacity') or 'unknown'} (data/stadiums.json)
3. Dominant seat/trim color: {col} (sampled inside the venue mask, ref #{e['n']})
4. {field or 'Roof form and facade as in the reference'} (ref #{e['n']})

## Colors

Sampled inside the venue mask on the reference photo (k-means, largest clusters first):

| Share | Hex |
|---|---|
{rows}

## Generator description

{desc}
""")
json.dump(out, open(sys.argv[1], 'w'), indent=1)
for j in out: print(j['desc_short'])
