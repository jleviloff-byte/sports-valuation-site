# Spec sheets for venues on the generic fallback path (no usable oblique photo).
# Features come from measured data only: venue type, roof and capacity
# (data/stadiums.json), the OSM footprint, ballpark orientation, and colors
# sampled from the USGS NAIP aerial inside the footprint (naip-colors.json).
# Does not overwrite a sheet that already exists (photo-path sheets).
# Usage: python3 specs_generic.py slug [slug ...]
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
V = {v['slug']: v for v in json.load(open('data/stadiums.json'))['venues']}
C = json.load(open('scripts/stadiums/overhaul/naip-colors.json'))
O = json.load(open('research/raw/stadiums/ballpark-orientation.json'))
jobs = {}
for f in ['fb1', 'fb2']:
    p = f'scripts/stadiums/overhaul/jobs/{f}.json'
    if os.path.exists(p): jobs.update({j['slug']: j for j in json.load(open(p))})
TYPE = {'stadium': 'football stadium', 'ballpark': 'ballpark', 'arena': 'arena', 'racetrack': 'racetrack', 'soccer_specific': 'soccer stadium', 'tennis': 'tennis stadium'}
RULE = {'stadium': 'Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.',
        'ballpark': 'Dirt infield, grass outfield, foul lines; stands from foul pole to foul pole behind home plate, low bleachers beyond the outfield; never a symmetric bowl.',
        'arena': 'Enclosed drum on the OSM footprint: glass base, clad walls, low roof.',
        'racetrack': 'Banked track around a grass infield, main grandstand along the front stretch, pit road; seen from the infield facing the grandstand.',
        'soccer_specific': 'Rectangular pitch with steep stands close to the touchlines.',
        'tennis': 'Court in an open bowl.'}
for s in sys.argv[1:]:
    f = f'docs/overhaul/specs/{s}.md'
    if os.path.exists(f): continue
    v, c = V[s], C.get(s, {})
    feats = [f"{TYPE[v['venue_type']]}, roof: {v['roof']}, capacity {v.get('capacity') or 'unknown'} (data/stadiums.json)",
             'Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)',
             RULE[v['venue_type']]]
    if v['venue_type'] == 'ballpark' and s in O: feats.append(f"Home plate to center field bearing {O[s]['bearing']} degrees (ballpark-orientation.json)")
    if v['roof'] == 'retractable': feats.append('Retractable roof shown open, panels parked over one end')
    feats.append(f"Seats {c.get('seats', 'n/a')}, roof {c.get('roof', 'n/a')}" + (f", field {c['field']}" if c.get('field') else '') + ' (NAIP aerial)')
    rows = '\n'.join(f'| {round(sh * 100)}% | `{hx}` |' for hx, sh in (c.get('shares') or {}).items())
    desc = jobs.get(s, {}).get('desc_short', '')
    open(f, 'w').write(f"""# {v['name']}

Type: {TYPE[v['venue_type']]}. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: {v.get('city')}, {v.get('state')}.

## Identifying features

""" + '\n'.join(f'{i + 1}. {x}' for i, x in enumerate(feats)) + f"""

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
{rows}

## Generator description

{desc}
""")
    print('wrote', f)
