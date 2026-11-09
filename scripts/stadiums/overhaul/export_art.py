# Export the approved art for the site (brief step 5 and site integration).
#   hero:    public/stadiums/hero/<slug>.webp     1600 px, on the thin scale-model base
#   sprites: public/stadiums/sprites/<slug>-{512,256}.webp, no base (reads better at 220 px)
#   credits: data/stadium-art-credits.json  { slug: { path, credits[], license, note } }
# Input: a directory of final RGBA cutouts named <slug>.png (Real-ESRGAN output
# from kaggle/upscale.py), plus finals-paths.json { slug: 'photo'|'fallback'|'generic' }.
# Usage: python3 export_art.py <finals_dir> <paths.json> [slug ...]
import json, os, sys
from PIL import Image
sys.path.insert(0, os.path.dirname(__file__))
from qa import plinth, trim  # noqa: E402  same base board and trim as the approved pilot

src, paths = sys.argv[1], json.load(open(sys.argv[2]))
only = set(sys.argv[3:])
VER = json.load(open('scripts/stadiums/refs/verified.json'))
CRED = 'data/stadium-art-credits.json'
credits = json.load(open(CRED)) if os.path.exists(CRED) else {}
os.makedirs('public/stadiums/hero', exist_ok=True); os.makedirs('public/stadiums/sprites', exist_ok=True)
GEN_NOTE = ('Illustration generated from a 3D model built from the OpenStreetMap footprint (© OpenStreetMap contributors, ODbL) '
            'and USGS NAIP aerial imagery (public domain).')

for f in sorted(os.listdir(src)):
    if not f.endswith('.png'): continue
    s = f[:-4]
    if only and s not in only: continue
    im = Image.open(os.path.join(src, f)).convert('RGBA')
    hero = plinth(im).resize((1600, 1600), Image.LANCZOS)
    hero.save(f'public/stadiums/hero/{s}.webp', quality=84, method=6)
    sp = trim(im)
    for n in (512, 256):
        sp.resize((n, n), Image.LANCZOS).save(f'public/stadiums/sprites/{s}-{n}.webp', quality=86, method=6)
    p = paths.get(s, 'generic')
    if p == 'photo':
        refs = [r for r in VER.get(s, []) if not str(r.get('role', '')).startswith(('detail', 'rejected'))][:1]
        cr = [{'title': r['file'].replace('File:', ''), 'author': r.get('author'), 'license': r.get('license'), 'license_url': r.get('license_url'), 'page': r.get('page')} for r in refs]
        sa = any('SA' in (r.get('license') or '') for r in refs)
        credits[s] = {'path': 'photo', 'credits': cr, 'license': 'CC BY-SA 4.0' if sa else None,
                      'note': 'Illustration derived from the photo below' + (' and shared under the same license.' if sa else '.')}
    else:
        credits[s] = {'path': p, 'credits': [], 'license': None, 'note': GEN_NOTE}
    print(s, p)
json.dump(credits, open(CRED, 'w'), indent=1, sort_keys=True)
