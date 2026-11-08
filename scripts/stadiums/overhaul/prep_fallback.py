# Conditioning images for fallback venues (brief step 6): depth and edges
# rendered from the NAIP-measured model at the standard camera
# (scripts/stadiums/art2/render.mjs, 38 degrees elevation).
# Input:  scripts/stadiums/art2/out/control/<slug>-{depth,mask,normal,color}.png
# Output: <out>/controls/<slug>/{depth,edges}.png, cropped to the model with a
#         margin and letterboxed to 3:2 on black (the generator's frame).
# Usage: python3 scripts/stadiums/overhaul/prep_fallback.py <out_dir> slug [slug ...]
import os, sys
import numpy as np, cv2
from PIL import Image

out, slugs = sys.argv[1], sys.argv[2:]
SRC = 'scripts/stadiums/art2/out/control'
for slug in slugs:
    load = lambda k, mode: np.array(Image.open(f'{SRC}/{slug}-{k}.png').convert(mode))
    depth, mask, normal = load('depth', 'L').astype(np.float32), load('mask', 'L') > 127, load('normal', 'RGB')
    # Stretch depth over the model only, so the venue spans the full range.
    v = depth[mask]
    lo, hi = np.percentile(v, 1), np.percentile(v, 99.5)
    d = np.clip((depth - lo) / max(1e-6, hi - lo), 0, 1) * 0.85 + 0.15
    d[~mask] = 0
    # Edges: creases from the normal pass, steps from depth, and the silhouette.
    e1 = np.zeros(mask.shape, np.uint8)
    for ch in range(3): e1 |= cv2.Canny(normal[..., ch], 40, 110)
    e2 = cv2.Canny((d * 255).astype(np.uint8), 20, 60)
    e3 = cv2.Canny(mask.astype(np.uint8) * 255, 100, 200)
    # Material boundaries from the flat-shaded color pass (track vs infield,
    # water, seating blocks): planar changes the normal pass cannot see.
    e4 = np.zeros(mask.shape, np.uint8)
    if os.path.exists(f'{SRC}/{slug}-color.png'):
        hsv = cv2.cvtColor(load('color', 'RGB'), cv2.COLOR_RGB2HSV)
        for ch in range(3): e4 |= cv2.Canny(cv2.medianBlur(hsv[..., ch], 7), 50, 130)
        # Drop speckle (seat textures): keep edge chains of 40 px or more.
        n, lab, st, _ = cv2.connectedComponentsWithStats((e4 > 0).astype(np.uint8), connectivity=8)
        e4 = np.isin(lab, np.where(st[:, cv2.CC_STAT_AREA] >= 40)[0][1:]).astype(np.uint8) * 255
    edges = (e1 | e2 | e3 | e4) * mask.astype(np.uint8) | e3
    # Crop to the model with a 6% margin, then letterbox to 3:2.
    ys, xs = np.where(mask)
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    m = int(0.06 * max(y1 - y0, x1 - x0))
    y0, x0 = max(0, y0 - m), max(0, x0 - m); y1, x1 = min(mask.shape[0], y1 + m), min(mask.shape[1], x1 + m)
    os.makedirs(f'{out}/controls/{slug}', exist_ok=True)
    arrs = [('depth', (d * 255).astype(np.uint8)), ('edges', edges)]
    if os.path.exists(f'{SRC}/{slug}-color.png'):  # flat-color render: a style reference with no cars, crowds or signage
        col = load('color', 'RGB'); col[~mask] = 200
        arrs.append(('color', col))
    for name, arr in arrs:
        crop = Image.fromarray(arr[y0:y1, x0:x1])
        W, H = 1216, 832
        crop.thumbnail((W, H), Image.LANCZOS)
        canvas = Image.new(crop.mode, (W, H), 0 if crop.mode == 'L' else (200, 200, 200)); canvas.paste(crop, ((W - crop.width) // 2, (H - crop.height) // 2))
        canvas.save(f'{out}/controls/{slug}/{name}.png')
    print(slug, 'ok', (x1 - x0, y1 - y0))
