# Generation jobs for the generic fallback path: controls rendered from the
# generic model (generic.js -> render.mjs -> prep_fallback.py), the flat-color
# render as the style reference and img2img init (as the pilot's fallback
# venues), and a description from the spec sheet when one exists, otherwise
# from the venue type with color names from the NAIP-sampled colors.
# Usage: python3 fallback_jobs.py <out.json> slug [slug ...]
import colorsys, glob, json, sys
V = {v['slug']: v for v in json.load(open('data/stadiums.json'))['venues']}
C = json.load(open('scripts/stadiums/overhaul/naip-colors.json'))
SPEC = {}
for f in glob.glob('scripts/stadiums/overhaul/specs-full/*.json'): SPEC.update(json.load(open(f)))

def cname(hx):
    r, g, b = (int(hx[i:i + 2], 16) / 255 for i in (1, 3, 5))
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    if s < 0.12 or l < 0.12 or l > 0.9:
        return 'white' if l > 0.75 else 'light gray' if l > 0.55 else 'gray' if l > 0.3 else 'dark gray'
    hue = h * 360
    for lim, n in [(15, 'red'), (40, 'orange'), (65, 'yellow'), (165, 'green'), (200, 'teal'), (255, 'blue'), (290, 'purple'), (335, 'maroon'), (361, 'red')]:
        if hue < lim: return n
KIND = {'stadium': 'football stadium', 'ballpark': 'baseball park', 'arena': 'indoor arena', 'racetrack': 'motor racing oval',
        'soccer_specific': 'soccer stadium', 'tennis': 'tennis stadium'}

def desc(s):
    v, c = V[s], C.get(s, {})
    if s in SPEC and SPEC[s].get('desc_short'): return SPEC[s]['desc_short']
    seat, roof = cname(c.get('seats', '#888888')), cname(c.get('roof', '#cccccc'))
    t = v['venue_type']
    if t == 'arena' or v['roof'] == 'dome':
        return f"{v['name']}: enclosed {KIND[t]} with a {roof} roof and a glass and panel facade"
    if t == 'ballpark':
        return f"{v['name']}: asymmetric ballpark, {seat} seats wrapping from foul pole to foul pole, brown dirt infield, green grass outfield, outfield wall and bleachers"
    if t == 'racetrack':
        return f"{v['name']}: banked gray asphalt oval around a green infield, one long multi-level grandstand with {seat} seats along the front stretch, pit road, no cars, no crowd"
    field = 'green soccer pitch' if t == 'soccer_specific' else 'green football field with white yard lines'
    return f"{v['name']}: {KIND[t]} bowl with {seat} seats, concrete concourse, {field}"

out = []
for s in sys.argv[2:]:
    v = V[s]
    kind = KIND[v['venue_type']]
    out.append({'slug': s, 'kind': kind, 'ref': f'controls/{s}/color.png', 'desc_short': desc(s), 'seeds': [11, 44, 55],
                'control': {'depth': f'controls/{s}/depth.png', 'edges': f'controls/{s}/edges.png'},
                'ip_scale': 0.35, 'cn_scale': [0.8, 0.8], 'init': f'controls/{s}/color.png', 'strength': 0.75})
json.dump(out, open(sys.argv[1], 'w'), indent=1)
for j in out: print(j['slug'], '|', j['desc_short'][:150])
