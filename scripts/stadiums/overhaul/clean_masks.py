# Post-process SAM venue masks: keep the largest connected piece (drops stray
# buildings and trees), then fill enclosed holes (SAM often leaves the field out
# of a bowl). Usage: python3 clean_masks.py <masks_in> <masks_out>
import os, sys
import numpy as np, cv2
src, dst = sys.argv[1], sys.argv[2]; os.makedirs(dst, exist_ok=True)
for f in sorted(os.listdir(src)):
    if not f.endswith('.png') or f.endswith('_preview.png'): continue
    m = (cv2.imread(os.path.join(src, f), 0) > 127).astype(np.uint8)
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(m, 8)
    if n > 1: m = (lab == 1 + np.argmax(st[1:, cv2.CC_STAT_AREA])).astype(np.uint8)
    # Fill holes: flood the background from the border; anything unreached is a hole.
    h, w = m.shape; ff = m.copy(); pad = np.zeros((h + 2, w + 2), np.uint8)
    cv2.floodFill(ff, pad, (0, 0), 1)
    m = m | (1 - ff)
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((15, 15), np.uint8))
    cv2.imwrite(os.path.join(dst, f), m * 255)
