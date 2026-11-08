# Venue colors sampled inside the SAM mask on the reference (brief: colors
# sampled from photos, never guessed from team palettes). k-means (k=6) in Lab
# over masked pixels; writes colors-full.json { slug: [{hex, share}] }.
# Usage: python3 scripts/stadiums/overhaul/sample_colors.py <refs_dir> <masks_dir>
import json, os, sys
import numpy as np, cv2
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '../../..'))
refs, masks = sys.argv[1], sys.argv[2]
ver = json.load(open(os.path.join(REPO, 'scripts/stadiums/refs/verified.json')))
out_p = os.path.join(HERE, 'colors-full.json')
out = json.load(open(out_p)) if os.path.exists(out_p) else {}
for f in sorted(os.listdir(masks)):
    if not f.endswith('.png'): continue
    slug = f[:-4]
    n = ver[slug][0]['n']
    img = cv2.imread(os.path.join(refs, slug, f'{n}.jpg')); m = cv2.imread(os.path.join(masks, f), 0)
    m = cv2.resize(m, (img.shape[1], img.shape[0])) > 127
    px = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)[m].astype(np.float32)
    if len(px) > 60000: px = px[np.random.default_rng(0).choice(len(px), 60000, replace=False)]
    _, lab, cen = cv2.kmeans(px, 6, None, (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.5), 3, cv2.KMEANS_PP_CENTERS)
    share = np.bincount(lab.ravel(), minlength=6) / len(lab)
    rgb = cv2.cvtColor(cen.reshape(1, -1, 3).astype(np.uint8), cv2.COLOR_LAB2RGB)[0]
    out[slug] = [{'hex': '#%02x%02x%02x' % tuple(int(c) for c in rgb[i]), 'share': round(float(share[i]), 3)} for i in np.argsort(-share)]
json.dump(out, open(out_p, 'w'), indent=1)
print('colors for', len(out))
