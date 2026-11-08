# Stadium art overhaul: generation kernel for Kaggle (GPU T4, internet on).
# Inputs: private dataset joshleviloff/stadium-overhaul-refs (refs/<slug>/<n>.jpg,
# naip/<slug>.jpg, verified.json) and jobs.json next to this script, or one
# uploaded as dataset stadium-overhaul-jobs. Outputs to /kaggle/working/out/<slug>/.
# Models and licenses: docs/overhaul/model-licenses.md.
import json, os, subprocess, sys, time
subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'diffusers==0.35.1', 'transformers==4.56.2', 'accelerate', 'timm', 'kornia', 'einops', 'easyocr'], check=True)

import numpy as np, torch, cv2
from PIL import Image, ImageFilter, ImageDraw
from diffusers import ControlNetUnionModel, StableDiffusionXLControlNetUnionPipeline, StableDiffusionXLControlNetUnionImg2ImgPipeline, StableDiffusionXLInpaintPipeline, AutoencoderKL
from transformers import pipeline as hf_pipeline, AutoModelForImageSegmentation
from torchvision import transforms

T0 = time.time()
import glob
_hits = glob.glob('/kaggle/input/**/verified.json', recursive=True)
print('dataset files:', _hits, sorted(glob.glob('/kaggle/input/**/refs*', recursive=True))[:5], flush=True)
IN = os.path.dirname(_hits[0])
OUT = '/kaggle/working/out'
HERE = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else '/kaggle/src'
jobs_path = next((p for p in ['/kaggle/input/stadium-overhaul-jobs/jobs.json', os.path.join(HERE, 'jobs.json'), 'jobs.json'] if os.path.exists(p)), None)
JOBS = globals().get('JOBS_INLINE') or json.load(open(jobs_path))  # push.py inlines JOBS_INLINE
dev = 'cuda'

# Locked style prompt for the whole set (brief: one style). SDXL has two text
# encoders, each truncating at 77 tokens: encoder 1 carries the locked style and
# isolation, encoder 2 the venue's own description and sampled colors.
STYLE = ('museum-quality architectural scale model of a {kind}, miniature diorama, 3/4 aerial view, '
         'crisp clean high detail, real materials, soft late-afternoon daylight from the upper left, '
         'gentle contact shadow, {base}, isolated on a plain light gray studio background')
BASES = {'base': 'on a thin square model base', 'nobase': 'no base'}
NEG = ('photo of a real city, aerial photograph, streets, cars, parking lots, neighboring buildings, trees, skyline, '
       'cartoon, voxel, low poly, lego bricks, toy, text, letters, words, logo, emblem, watermark, people')
NEG2 = 'blurry, warped seating, melted, bent field, distorted, duplicated structures, cropped, frame, border, gibberish text, lettering, signage text, numbers, brand names, sponsor banners'

W, H = 1216, 832  # SDXL bucket close to 3:2


def fit(img, w=W, h=H, bg=(200, 200, 200)):
    """Letterbox to w x h without cropping the venue."""
    k = min(w / img.width, h / img.height)  # scale up or down so the venue fills the frame
    img = img.resize((max(1, round(img.width * k)), max(1, round(img.height * k))), Image.LANCZOS)
    c = Image.new(img.mode, (w, h), bg if img.mode == 'RGB' else 0)
    c.paste(img, ((w - img.width) // 2, (h - img.height) // 2)); return c


print('loading BiRefNet', flush=True)
birefnet = AutoModelForImageSegmentation.from_pretrained('ZhengPeng7/BiRefNet', trust_remote_code=True).to(dev).eval().half()
tf = transforms.Compose([transforms.Resize((1024, 1024)), transforms.ToTensor(), transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])])

def alpha_of(img):
    x = tf(img.convert('RGB')).unsqueeze(0).to(dev).half()
    with torch.no_grad():
        p = birefnet(x)[-1].sigmoid()[0, 0].float().cpu().numpy()
    return Image.fromarray((p * 255).astype(np.uint8)).resize(img.size, Image.BILINEAR)

print('loading depth', flush=True)
depth_pipe = hf_pipeline('depth-estimation', model='depth-anything/Depth-Anything-V2-Small-hf', device=0)

def depth_of(img):
    d = np.array(depth_pipe(img)['depth'], dtype=np.float32)  # near = bright
    d = cv2.resize(d, img.size); d = (d - d.min()) / max(1e-6, d.max() - d.min())
    return d

def canny_of(img, depth):
    g = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2GRAY)
    e1 = cv2.Canny(cv2.GaussianBlur(g, (3, 3), 0), 60, 160)
    e2 = cv2.Canny((depth * 255).astype(np.uint8), 8, 24)  # structural edges from depth
    return np.maximum(e1, e2)

print('loading SDXL', flush=True)
cn = ControlNetUnionModel.from_pretrained('xinsir/controlnet-union-sdxl-1.0', torch_dtype=torch.float16)
vae = AutoencoderKL.from_pretrained('madebyollin/sdxl-vae-fp16-fix', torch_dtype=torch.float16)
pipe = StableDiffusionXLControlNetUnionPipeline.from_pretrained('stabilityai/stable-diffusion-xl-base-1.0', controlnet=cn, vae=vae, torch_dtype=torch.float16, variant='fp16').to(dev)
pipe.load_ip_adapter('h94/IP-Adapter', subfolder='sdxl_models', weight_name='ip-adapter_sdxl_vit-h.safetensors', image_encoder_folder='models/image_encoder')
pipe.enable_vae_tiling()
# Text cleanup (brief: no readable text or logos): EasyOCR's CRAFT detector finds
# lettering, including gibberish, and SDXL inpaints those boxes as blank surface.
# Image-to-image from the flat-color render (job 'init'), for venues whose layout
# colors txt2img keeps swapping (Daytona: gray infield, green track). Shares modules.
img2img = StableDiffusionXLControlNetUnionImg2ImgPipeline(
    vae=pipe.vae, text_encoder=pipe.text_encoder, text_encoder_2=pipe.text_encoder_2, tokenizer=pipe.tokenizer, tokenizer_2=pipe.tokenizer_2,
    unet=pipe.unet, controlnet=pipe.controlnet, scheduler=pipe.scheduler, image_encoder=pipe.image_encoder, feature_extractor=pipe.feature_extractor)
inpaint = StableDiffusionXLInpaintPipeline(  # shares the loaded modules (from_pipe copied them and ran out of T4 memory)
    vae=pipe.vae, text_encoder=pipe.text_encoder, text_encoder_2=pipe.text_encoder_2, tokenizer=pipe.tokenizer, tokenizer_2=pipe.tokenizer_2,
    unet=pipe.unet, scheduler=pipe.scheduler, image_encoder=pipe.image_encoder, feature_extractor=pipe.feature_extractor)
import easyocr
ocr = easyocr.Reader(['en'], gpu=True, verbose=False)

def text_boxes(img, mask):
    """Text-line boxes inside the venue (detector only, so gibberish counts too)."""
    hz, _ = ocr.detect(np.array(img), min_size=8, text_threshold=0.6, low_text=0.35)
    out = []
    for x0, x1, y0, y1 in (hz[0] if hz else []):
        x0, y0, x1, y1 = max(0, int(x0)), max(0, int(y0)), int(x1), int(y1)
        if x1 - x0 < 6 or y1 - y0 < 4 or mask[y0:y1, x0:x1].mean() < 60: continue
        out.append([x0, y0, x1, y1])
    return out

def remove_text(img, boxes, prompt, prompt_2, ip_img, seed):
    m = np.zeros((img.height, img.width), np.uint8)
    for x0, y0, x1, y1 in boxes:
        p = max(4, (y1 - y0) // 3); m[max(0, y0 - p):y1 + p, max(0, x0 - p):x1 + p] = 255
    m = Image.fromarray(cv2.GaussianBlur(m, (0, 0), 3))
    pipe.set_ip_adapter_scale(0.0)
    out = inpaint(prompt=prompt + ', plain blank surfaces, no lettering', prompt_2=prompt_2, negative_prompt=NEG, negative_prompt_2=NEG2,
                  image=img, mask_image=m, ip_adapter_image=ip_img, strength=0.8, num_inference_steps=30, guidance_scale=6.0,
                  width=img.width, height=img.height, generator=torch.Generator(dev).manual_seed(seed)).images[0]
    return Image.composite(out, img, m)
print(f'models ready in {time.time()-T0:.0f}s', flush=True)


def shadow(rgba):
    """One consistent soft contact shadow, light from the upper left."""
    a = np.array(rgba.split()[-1]).astype(np.float32) / 255
    h, w = a.shape
    sh = cv2.GaussianBlur(cv2.warpAffine(a, np.float32([[1, 0, 10], [0, 1, 14]]), (w, h)), (0, 0), 18) * 0.35
    out = np.zeros((h, w, 4), np.float32)
    rgb = np.array(rgba.convert('RGB')).astype(np.float32)
    out[..., :3] = rgb * a[..., None]
    out[..., 3] = a + sh * (1 - a)
    nz = out[..., 3] > 1e-4
    out[..., :3][nz] = out[..., :3][nz] / out[..., 3][nz][:, None]
    out[..., 3] *= 255  # alpha back to 0..255
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGBA')


def clean_alpha(a):
    a = np.array(a).astype(np.float32) / 255
    a = np.clip((a - 0.15) / 0.7, 0, 1)  # tighten the soft edge to avoid halos
    n, lab, st, _ = cv2.connectedComponentsWithStats((a > 0.5).astype(np.uint8))
    if n > 1:  # keep the main body plus anything large attached
        keep = np.zeros_like(a, bool)
        big = st[1:, cv2.CC_STAT_AREA].max()
        for i in range(1, n):
            if st[i, cv2.CC_STAT_AREA] > 0.02 * big: keep |= lab == i
        a = a * cv2.dilate(keep.astype(np.uint8), np.ones((9, 9), np.uint8)).astype(np.float32)
    return Image.fromarray((a * 255).astype(np.uint8))


def blank(img, rects):
    a = np.array(img)
    for x0, y0, x1, y1 in rects:
        X0, Y0, X1, Y1 = int(x0 * img.width), int(y0 * img.height), int(x1 * img.width), int(y1 * img.height)
        p = max(3, (Y1 - Y0) // 4)
        ring = np.concatenate([a[max(0, Y0 - p):Y0, X0:X1].reshape(-1, 3), a[Y1:Y1 + p, X0:X1].reshape(-1, 3)])
        a[Y0:Y1, X0:X1] = np.median(ring, 0) if len(ring) else 128
    return Image.fromarray(a)


log = []
for job in JOBS:
    slug = job['slug']; od = os.path.join(OUT, slug); os.makedirs(od, exist_ok=True)
    t = time.time()
    if job.get('control'):  # fallback path: depth/edges rendered from the NAIP-measured model
        ref = blank(Image.open(os.path.join(IN, job['ref'])).convert('RGB'), job.get('blank', []))
        depth_img = fit(Image.open(os.path.join(IN, job['control']['depth'])).convert('RGB'), bg=(0, 0, 0))
        edge_img = fit(Image.open(os.path.join(IN, job['control']['edges'])).convert('RGB'), bg=(0, 0, 0))
        cmask = (np.array(depth_img.convert('L')) > 8).astype(np.uint8) * 255
        ip_img = ref
    else:  # photo path: structure from the reference photo inside a hand-traced venue polygon
        ref = blank(Image.open(os.path.join(IN, job['ref'])).convert('RGB'), job.get('blank', []))
        if job.get('mask'):  # full run: SAM mask from segment.py (box prompt marked by eye)
            pm = Image.open(os.path.join(IN, job['mask'])).convert('L').resize(ref.size).point(lambda v: 255 if v > 127 else 0)
            bx = pm.getbbox(); poly = [(bx[0], bx[1]), (bx[2], bx[3])]
        else:  # pilot: hand-traced polygon
            poly = [(x * ref.width, y * ref.height) for x, y in job['poly']]
            pm = Image.new('L', ref.size, 0); ImageDraw.Draw(pm).polygon(poly, fill=255)
        xs, ys = [p[0] for p in poly], [p[1] for p in poly]
        mg = 0.06 * max(max(xs) - min(xs), max(ys) - min(ys))
        box = (int(max(0, min(xs) - mg)), int(max(0, min(ys) - mg)), int(min(ref.width, max(xs) + mg)), int(min(ref.height, max(ys) + mg)))
        crop, pmc = ref.crop(box), pm.crop(box)
        refl, ml = fit(crop), fit(pmc.convert('RGB'), bg=(0, 0, 0)).convert('L')
        mk = np.array(ml).astype(np.float32) / 255
        d0 = depth_of(refl)
        v = d0[mk > 0.5]; lo, hi = np.percentile(v, 1), np.percentile(v, 99.5)
        depth = (np.clip((d0 - lo) / max(1e-6, hi - lo), 0, 1) * 0.85 + 0.15) * (mk > 0.5)
        edges = canny_of(refl, d0) * (mk > 0.5)
        depth_img = Image.fromarray((depth * 255).astype(np.uint8)).convert('RGB')
        edge_img = Image.fromarray(edges.astype(np.uint8)).convert('RGB')
        cmask = (mk > 0.5).astype(np.uint8) * 255
        gray = Image.new('RGB', crop.size, (200, 200, 200))
        ip_img = Image.composite(crop, gray, pmc.filter(ImageFilter.GaussianBlur(4)))
    Image.fromarray(cmask).save(f'{od}/ctl_mask.png')
    gate = cv2.GaussianBlur(cv2.dilate(cmask, np.ones((61, 61), np.uint8)), (0, 0), 12).astype(np.float32) / 255
    depth_img.save(f'{od}/ctl_depth.png'); edge_img.save(f'{od}/ctl_edges.png')
    ip_img = ip_img.copy(); ip_img.thumbnail((1024, 1024))
    texts = {}
    for variant in job.get('variants', ['nobase']):  # the base is composited in post (qa.py), identical for every venue
        prompt = STYLE.format(kind=job['kind'], base=BASES[variant])
        prompt_2 = job['desc_short']
        for seed in job['seeds']:
            g = torch.Generator(dev).manual_seed(seed)
            pipe.set_ip_adapter_scale(job.get('ip_scale', 0.3))
            kw = {}
            if job.get('init'):
                kw = dict(image=fit(Image.open(os.path.join(IN, job['init'])).convert('RGB')), strength=job.get('strength', 0.65))
            run = img2img if kw else pipe
            img = run(prompt=prompt, prompt_2=prompt_2, negative_prompt=NEG, negative_prompt_2=NEG2, control_image=[depth_img, edge_img], control_mode=[1, 3], **kw,
                       controlnet_conditioning_scale=job.get('cn_scale', [0.85, 0.6]), ip_adapter_image=ip_img,
                       num_inference_steps=job.get('steps', 32), guidance_scale=job.get('cfg', 6.0), width=W, height=H,
                       generator=g, control_guidance_end=job.get('cn_end', 0.85)).images[0]
            img.save(f'{od}/{variant}_{seed}_raw.png')
            boxes = text_boxes(img, gate * 255)
            if boxes:
                img = remove_text(img, boxes, prompt, prompt_2, ip_img, seed)
                img.save(f'{od}/{variant}_{seed}_clean.png')
            texts[f'{variant}_{seed}'] = [len(boxes), len(text_boxes(img, gate * 255))]  # text boxes before, after cleanup
            raw = np.array(alpha_of(img)).astype(np.float32) * gate
            if raw.mean() < 0.25 * gate.mean() * 255:  # BiRefNet found too little: fall back to the control silhouette
                raw = np.maximum(raw, cv2.GaussianBlur(cmask, (0, 0), 2).astype(np.float32))
            a = clean_alpha(Image.fromarray(raw.clip(0, 255).astype(np.uint8)))
            rgba = img.convert('RGBA'); rgba.putalpha(a)
            shadow(rgba).save(f'{od}/{variant}_{seed}.png')
            print(f'{slug} {variant} seed {seed} done {time.time()-t:.0f}s', flush=True)
    log.append({'slug': slug, 'seconds': round(time.time() - t), 'text_boxes': texts})

json.dump({'jobs': log, 'total_seconds': round(time.time() - T0)}, open(f'{OUT}/run.json', 'w'), indent=1)
print('TOTAL', round(time.time() - T0), 's')
