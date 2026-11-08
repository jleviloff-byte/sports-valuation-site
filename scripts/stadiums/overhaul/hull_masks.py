# Fill a venue mask out to its convex hull. SAM, prompted with the venue box,
# often returns only the seating ring of an open bowl: the playing field is not
# enclosed, so clean_masks.py cannot fill it, and the generator then cuts the
# field out. Every venue's field lies inside the hull of its stands.
# Usage: python3 hull_masks.py <masks_in_dir> <masks_out_dir> <slug> ...
import os, sys
import cv2, numpy as np
src, dst, slugs = sys.argv[1], sys.argv[2], sys.argv[3:]
os.makedirs(dst, exist_ok=True)
for s in slugs:
    m = cv2.imread(os.path.join(src, f'{s}.png'), cv2.IMREAD_GRAYSCALE)
    pts = cv2.findNonZero((m > 127).astype(np.uint8))
    out = np.zeros_like(m); cv2.fillPoly(out, [cv2.convexHull(pts)], 255)
    out = np.maximum(out, m)
    cv2.imwrite(os.path.join(dst, f'{s}-hull.png'), out)
    print(s, f'{(m > 127).mean():.3f} -> {(out > 127).mean():.3f}')
