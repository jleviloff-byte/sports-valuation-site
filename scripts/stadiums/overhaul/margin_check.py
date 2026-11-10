# QA check 5 (added 2026-11-10): the whole venue must be in frame. The venue's
# alpha mask must sit inside the generated canvas with at least 5% margin on
# every side; a mask that touches or nears the edge means the venue was cut
# off (by the reference photo, the crop, or the generator).
# Usage: python3 margin_check.py <dir of RGBA PNGs> [min_margin=0.05]
import os, sys
import numpy as np
from PIL import Image
d = sys.argv[1]; mm = float(sys.argv[2]) if len(sys.argv) > 2 else 0.05
fails = 0
for f in sorted(os.listdir(d)):
    if not f.endswith('.png'): continue
    a = np.array(Image.open(os.path.join(d, f)).convert('RGBA'))[..., 3] > 16
    H, W = a.shape
    ys, xs = np.where(a)
    m = {'left': xs.min() / W, 'right': (W - 1 - xs.max()) / W, 'top': ys.min() / H, 'bottom': (H - 1 - ys.max()) / H}
    worst = min(m, key=m.get)
    ok = m[worst] >= mm
    fails += not ok
    print(f"{'PASS' if ok else 'FAIL'} {f[:-4]:40s} " + ' '.join(f'{k} {v*100:4.1f}%' for k, v in m.items()))
print(f'{fails} fail(s)')
