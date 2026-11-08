# Non-generative text removal for hand-marked boxes: OpenCV inpainting (Telea)
# fills each box from its surroundings, so lettering becomes plain surface
# (brief: signage renders as plain shapes and colors). Used where SDXL
# inpainting invented scenery inside the box (trees on Allegiant's roof, a
# pool at Nissan, a garden on Bank of America's field).
# Usage: python3 plain_fill.py <in_dir> <out_dir> <jobs.json>   (jobs: [{slug, boxes}])
import json, os, sys
import cv2, numpy as np
src, dst, jobs = sys.argv[1], sys.argv[2], json.load(open(sys.argv[3]))
os.makedirs(dst, exist_ok=True)
for j in jobs:
    im = cv2.imread(os.path.join(src, j['slug'] + '.png'), cv2.IMREAD_UNCHANGED)
    H, W = im.shape[:2]
    rgb, a = im[..., :3].copy(), im[..., 3]
    m = np.zeros((H, W), np.uint8)
    for x0, y0, x1, y1 in j['boxes']:
        m[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)] = 255
    m &= (a > 0).astype(np.uint8) * 255  # inside the cutout only
    # Keep only bright/dark glyph strokes plus a margin: a top-hat finds lettering,
    # then the stroke mask is dilated so the fill covers anti-aliasing.
    g = cv2.cvtColor(rgb, cv2.COLOR_BGR2GRAY)
    k = cv2.getStructuringElement(cv2.MORPH_RECT, (15, 15))
    strokes = (cv2.morphologyEx(g, cv2.MORPH_TOPHAT, k) > 22) | (cv2.morphologyEx(g, cv2.MORPH_BLACKHAT, k) > 22)
    hole = cv2.dilate((strokes & (m > 0)).astype(np.uint8) * 255, np.ones((5, 5), np.uint8))
    out = cv2.inpaint(rgb, hole, 6, cv2.INPAINT_TELEA)
    sm = cv2.GaussianBlur(out, (0, 0), 1.2)
    out = np.where((cv2.dilate(hole, np.ones((3, 3), np.uint8)) > 0)[..., None], sm, out)
    cv2.imwrite(os.path.join(dst, j['slug'] + '.png'), np.dstack([out, a]))
    print(j['slug'], int(hole.mean() / 2.55 * 100) / 100, '% of image filled')
