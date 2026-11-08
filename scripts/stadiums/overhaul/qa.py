# Pilot QA and export helpers (docs/overhaul/brief.md: QA, pilot, finish).
#   python3 qa.py sheets <run_out> <sheet_dir>          per-venue review sheets (all seeds, both variants)
#   python3 qa.py blind <run_out> <picks.json> <dir>     copies of the picks under neutral names, plus key.json
#   python3 qa.py export <run_out> <picks.json> <dir>    hero 1600px WebP + 512/256 sprites per pick
#   python3 qa.py pilot <run_out> <picks.json> <out.png> reference | hero (base, no base) | 220px (base, no base)
# picks.json: { slug: seed }  (the generator makes the no-base image; the base
# variant is the same image on one programmatic plinth, identical for the set)
import json, os, random, shutil, sys
import numpy as np, cv2
from PIL import Image, ImageDraw, ImageFont, ImageFilter

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
VER = json.load(open(os.path.join(REPO, 'scripts/stadiums/refs/verified.json')))
SPECS = json.load(open(os.path.join(REPO, 'scripts/stadiums/overhaul/specs.json')))
CHECK = (236, 236, 236)


def font(sz):
    for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', '/usr/share/fonts/dejavu/DejaVuSans.ttf']:
        if os.path.exists(f): return ImageFont.truetype(f, sz)
    return ImageFont.load_default()


def on_bg(img, bg=CHECK):
    b = Image.new('RGBA', img.size, bg + (255,)); b.alpha_composite(img.convert('RGBA')); return b.convert('RGB')


def trim(img, pad=0.04):
    """Crop to the alpha bounding box, then pad to a square with a small margin."""
    box = img.split()[-1].point(lambda a: 255 if a > 6 else 0).getbbox()
    c = img.crop(box) if box else img
    side = int(max(c.size) * (1 + 2 * pad))
    out = Image.new('RGBA', (side, side), (0, 0, 0, 0)); out.paste(c, ((side - c.width) // 2, (side - c.height) // 2)); return out


def plinth(img):
    """Put a trimmed no-base model on a thin base board: the model's bounding box,
    enlarged 10% and always axis-aligned so the set reads as one series, as a
    light top face over a darker front edge."""
    img = trim(img, pad=0.12)
    a = np.array(img.split()[-1])
    pts = cv2.findNonZero((a > 128).astype(np.uint8))
    x, y, w, h = cv2.boundingRect(pts); cx, cy = x + w / 2, y + h / 2
    box = cv2.boxPoints(((cx, cy + 0.04 * max(w, h)), (w * 1.1, h * 1.1), 0))
    t = 0.035 * img.width
    base = Image.new('RGBA', img.size, (0, 0, 0, 0)); d = ImageDraw.Draw(base)
    top = [tuple(p) for p in box]
    sh = Image.new('L', img.size, 0); ImageDraw.Draw(sh).polygon([(x + 10, y + t + 14) for x, y in top], fill=90)
    base.putalpha(sh.filter(ImageFilter.GaussianBlur(18)))  # contact shadow of the slab, light from the upper left
    d = ImageDraw.Draw(base)
    for i in range(4):  # visible side faces: edges whose outward normal points down
        p1, p2 = top[i], top[(i + 1) % 4]
        nx, ny = p2[1] - p1[1], -(p2[0] - p1[0])
        if (nx * (p1[0] - cx) + ny * (p1[1] - cy)) < 0: nx, ny = -nx, -ny
        if ny > 0: d.polygon([p1, p2, (p2[0], p2[1] + t), (p1[0], p1[1] + t)], fill=(168, 164, 156, 255))
    d.polygon(top, fill=(226, 223, 216, 255), outline=(196, 192, 184, 255))
    base.alpha_composite(img)
    return trim(base)


def variant(run, slug, seed, v):
    """The picked image for a variant; the cleaned (text-removed) file is the output."""
    im = Image.open(os.path.join(run, slug, f'nobase_{seed}.png'))
    return plinth(im) if v == 'base' else trim(im)


def ref_image(slug):
    x = next((r for r in VER[slug] if not r['role'].startswith('detail')), VER[slug][0])
    return Image.open(os.path.join(REPO, x['local'])).convert('RGB')


def sheets(run, out):
    os.makedirs(out, exist_ok=True)
    for slug in sorted(os.listdir(run)):
        d = os.path.join(run, slug)
        if not os.path.isdir(d): continue
        files = sorted(f for f in os.listdir(d) if f[0] in 'bn' and not f.endswith('_raw.png'))
        W, H = 608, 416
        sh = Image.new('RGB', (W * 4, H * ((len(files) + 3) // 4 + 1)), 'white'); dr = ImageDraw.Draw(sh)
        ref = ref_image(slug); ref.thumbnail((W, H)); sh.paste(ref, (0, 0))
        for k, name in enumerate(['ctl_depth.png', 'ctl_edges.png']):
            im = Image.open(os.path.join(d, name)).convert('RGB').resize((W, H)); sh.paste(im, ((k + 1) * W, 0))
        for i, f in enumerate(files):
            im = on_bg(Image.open(os.path.join(d, f))).resize((W, H)); x, y = (i % 4) * W, (i // 4 + 1) * H
            sh.paste(im, (x, y)); dr.rectangle([x, y, x + 170, y + 26], fill='black'); dr.text((x + 5, y + 4), f[:-4], fill='white', font=font(18))
        sh.save(os.path.join(out, f'{slug}.jpg'), quality=88)
        print(slug, len(files))


def blind(run, picks, out):
    os.makedirs(out, exist_ok=True)
    items = [(s, v, seed) for s, seed in picks.items() for v in ('base', 'nobase')]
    random.Random(7).shuffle(items)
    key = {}
    for i, (s, v, seed) in enumerate(items, 1):
        name = f'img{i:02d}.png'
        im = on_bg(variant(run, s, seed, v), (255, 255, 255))
        im.thumbnail((1024, 1024)); im.save(os.path.join(out, name))  # pixels only: no metadata, neutral name
        key[name] = {'slug': s, 'variant': v, 'seed': seed}
    json.dump(key, open(os.path.join(out, '..', 'blind-key.json'), 'w'), indent=1)


def export(run, picks, out):
    os.makedirs(out, exist_ok=True)
    for s, seed in picks.items():
        for v in ('base', 'nobase'):
            im = variant(run, s, seed, v)
            hero = im.resize((1600, 1600), Image.LANCZOS)  # Real-ESRGAN replaces this upscale in the full run
            hero.save(os.path.join(out, f'{s}-{v}-1600.webp'), quality=88, method=6)
            for n in (512, 256): im.resize((n, n), Image.LANCZOS).save(os.path.join(out, f'{s}-{v}-{n}.webp'), quality=90, method=6)


def pilot(run, picks, outpng):
    order = ['fenway-park', 'wrigley-field', 'michigan-stadium', 'landn-federal-credit-union-stadium', 'lambeau-field', 'sofi-stadium',
             'madison-square-garden', 'rupp-arena', 'q2-stadium', 'daytona-international-speedway', 'bristol-motor-speedway', 'arthur-ashe-stadium']
    order = [s for s in order if s in picks]
    RH, HW, SW = 520, 520, 220
    W = 760 + 2 * HW + 2 * (SW + 40) + 60
    sh = Image.new('RGB', (W, 90 + RH * len(order)), 'white'); dr = ImageDraw.Draw(sh)
    for x, t in [(20, 'Reference photo'), (800, 'Hero, with base'), (800 + HW, 'Hero, no base'), (820 + 2 * HW, '220 px, base'), (1080 + 2 * HW, '220 px, no base')]:
        dr.text((x, 30), t, fill='black', font=font(30))
    for r, s in enumerate(order):
        y = 90 + r * RH
        ref = ref_image(s); ref.thumbnail((740, RH - 70)); sh.paste(ref, (20, y + 40))
        dr.text((20, y + 4), SPECS[s]['name'] + ('  (fallback model)' if SPECS[s]['path'] == 'fallback' else ''), fill='black', font=font(26))
        for k, v in enumerate(['base', 'nobase']):
            im = variant(run, s, picks[s], v)
            sh.paste(on_bg(im.resize((HW - 20, HW - 20), Image.LANCZOS)), (800 + k * HW, y + 30))
            small = on_bg(im.resize((SW, SW), Image.LANCZOS))
            sh.paste(small, (820 + 2 * HW + k * (SW + 40), y + 30 + (HW - SW) // 2))
        dr.line([(0, y + RH - 2), (W, y + RH - 2)], fill=(210, 210, 210), width=2)
    sh.save(outpng, optimize=True)


if __name__ == '__main__':
    cmd, run = sys.argv[1], sys.argv[2]
    if cmd == 'sheets': sheets(run, sys.argv[3])
    else:
        picks = json.load(open(sys.argv[3]))
        {'blind': blind, 'export': export, 'pilot': pilot}[cmd](run, picks, sys.argv[4])
