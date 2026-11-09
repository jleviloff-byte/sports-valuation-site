# Contact sheets for reviewing widened-search candidates by eye (titles are not
# trusted). 24 numbered thumbnails per sheet (6 x 4), each tagged with source,
# license and pixel width; the venue's USGS NAIP aerial is the first tile for
# the footprint check. Usage: python3 wide_sheets.py <cand_root> <out_dir> slug [slug ...]
import json, os, sys
from PIL import Image, ImageDraw

root, out, slugs = sys.argv[1], sys.argv[2], sys.argv[3:]
os.makedirs(out, exist_ok=True)
TW, TH, COLS, PER = 300, 210, 6, 23
for s in slugs:
    cf = os.path.join(root, s, 'candidates.json')
    if not os.path.exists(cf): print(s, 'no candidates'); continue
    cands = [c for c in json.load(open(cf)) if os.path.exists(os.path.join(root, s, f"{c['n']}.jpg"))]
    for p in range(0, max(1, len(cands)), PER):
        part = cands[p:p + PER]
        sh = Image.new('RGB', (TW * COLS, (TH + 16) * 4), 'white'); d = ImageDraw.Draw(sh)
        tiles = [('NAIP', f'research/raw/stadiums/naip/{s}.jpg', 'USGS NAIP footprint')] + [
            (str(c['n']), os.path.join(root, s, f"{c['n']}.jpg"), f"{c['source'].split(':')[-1][:8]} {str(c.get('license'))[:11]} {c.get('width') or ''}") for c in part]
        for i, (n, f, tag) in enumerate(tiles):
            x, y = (i % COLS) * TW, (i // COLS) * (TH + 16)
            try:
                im = Image.open(f).convert('RGB'); im.thumbnail((TW - 4, TH)); sh.paste(im, (x + 2, y + 16))
            except Exception:
                pass
            d.rectangle([x, y, x + TW, y + 15], fill='black'); d.text((x + 3, y + 2), f'{n}  {tag}', fill='white')
        sh.save(os.path.join(out, f'{s}-{p // PER}.jpg'), quality=80)
    print(s, len(cands))
