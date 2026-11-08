# Spec sheets for full-run venues (brief: venue spec sheets), from
# specs-full/*.json (features and generator description, written per venue from
# the reference photo) plus colors sampled inside the SAM mask (colors-full.json,
# written by sample_colors.py). Writes docs/overhaul/specs/<slug>.md.
# Pilot venues keep the sheets written by specs.py.
# Usage: python3 scripts/stadiums/overhaul/specs_full.py
import glob, json, os
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '../../..'))
ver = json.load(open(os.path.join(REPO, 'scripts/stadiums/refs/verified.json')))
venues = {v['slug']: v for v in json.load(open(os.path.join(REPO, 'data/stadiums.json')))['venues']}
cpath = os.path.join(HERE, 'colors-full.json')
colors = json.load(open(cpath)) if os.path.exists(cpath) else {}
spec = {}
for f in sorted(glob.glob(os.path.join(HERE, 'specs-full/*.json'))): spec.update(json.load(open(f)))
n = 0
for slug, s in spec.items():
    v = venues[slug]; refs = ver.get(slug)
    path = ver['_paths'].get(slug, 'fallback')
    out = [f"# {v['name']}", '', f"Type: {s['kind']}. Pipeline path: {path}. City: {v.get('city')}, {v.get('state')}.", '']
    out += ['## Identifying features', '']
    for i, f in enumerate(s['features'], 1):
        out.append(f"{i}. {f}" + (f" (ref #{refs[0]['n']})" if refs else ''))
    out += ['', '## Colors', '']
    if slug in colors:
        out += ['Sampled inside the venue mask on the reference photo (k-means, largest clusters first):', '', '| Share | Hex |', '|---|---|']
        out += [f"| {c['share']:.0%} | `{c['hex']}` |" for c in colors[slug]]
    else:
        out.append('Not sampled yet (no usable reference photo; see needs-attention.md).')
    out += ['', '## Generator description', '', s['desc_short'], '', '## References', '']
    if refs:
        for r in refs:
            out.append(f"- #{r['n']}: [{r['file']}]({r['page']}), {r.get('author') or 'unknown author'}, {r['license']}. {r.get('note', '')}")
    else:
        out.append('- None usable yet.')
    open(os.path.join(REPO, f'docs/overhaul/specs/{slug}.md'), 'w').write('\n'.join(out) + '\n')
    n += 1
print('wrote', n, 'spec sheets')
