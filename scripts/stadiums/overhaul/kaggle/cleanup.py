# Text cleanup pass for picked images (brief: no readable text or logos).
# Inputs: dataset stadium-overhaul-picks with <slug>.png (RGBA, the generator's
# output) and JOBS_INLINE = [{slug, boxes: [[x0,y0,x1,y1] normalized]}] (boxes
# marked by eye in QA). EasyOCR's detector, at lower thresholds than the
# generator's, adds any lettering the eye missed. Marked and detected boxes are
# inpainted as plain surface with SDXL; the original alpha and shadow are kept.
# A job may carry its own 'prompt' (e.g. grass for a field patch) and 'strength'.
# Low strength (0.45) on an image already plain-filled by plain_fill.py smooths
# the fill without room to invent objects (strength 0.85 on raw lettering put
# trees, a pool and gardens into the boxes).
# Output: /kaggle/working/out/<slug>.png plus run.json (boxes per image).
import json, os, subprocess, sys, time, glob
subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'diffusers==0.35.1', 'transformers==4.56.2', 'accelerate', 'easyocr'], check=True)
import numpy as np, torch, cv2, easyocr
from PIL import Image
from diffusers import StableDiffusionXLInpaintPipeline, AutoencoderKL

T0 = time.time()
IN = os.path.dirname(glob.glob('/kaggle/input/**/picks.json', recursive=True)[0])
OUT = '/kaggle/working/out'; os.makedirs(OUT, exist_ok=True)
JOBS = globals().get('JOBS_INLINE') or json.load(open(os.path.join(IN, 'picks.json')))
vae = AutoencoderKL.from_pretrained('madebyollin/sdxl-vae-fp16-fix', torch_dtype=torch.float16)
pipe = StableDiffusionXLInpaintPipeline.from_pretrained('stabilityai/stable-diffusion-xl-base-1.0', vae=vae, torch_dtype=torch.float16, variant='fp16').to('cuda')
ocr = easyocr.Reader(['en'], gpu=True, verbose=False)
P = ('museum-quality architectural scale model, miniature diorama, crisp clean high detail, real materials, soft daylight, '
     'plain blank surfaces, plain grass, plain panels, no lettering')
NEG = 'text, letters, words, numbers, logo, emblem, signage, watermark, gibberish text, brand names'

def detect(rgb, alpha):
    hz, _ = ocr.detect(rgb, min_size=6, text_threshold=0.4, low_text=0.25)
    out = []
    for x0, x1, y0, y1 in (hz[0] if hz else []):
        x0, y0, x1, y1 = max(0, int(x0)), max(0, int(y0)), int(x1), int(y1)
        if x1 - x0 >= 5 and y1 - y0 >= 3 and alpha[y0:y1, x0:x1].mean() > 200: out.append([x0, y0, x1, y1])
    return out

log = []
for job in JOBS:
    im = Image.open(os.path.join(IN, job['slug'] + '.png')).convert('RGBA')
    rgb, alpha = np.array(im.convert('RGB')), np.array(im.split()[-1])
    W, H = im.size
    boxes = [[int(a * W), int(b * H), int(c * W), int(d * H)] for a, b, c, d in job.get('boxes', [])]
    auto = detect(rgb, alpha)
    m = np.zeros((H, W), np.uint8)
    for x0, y0, x1, y1 in boxes + auto:
        p = max(4, (y1 - y0) // 4); m[max(0, y0 - p):y1 + p, max(0, x0 - p):x1 + p] = 255
    m = cv2.GaussianBlur(m, (0, 0), 3)
    res = rgb
    if m.any():
        out = pipe(prompt=job.get('prompt', P), negative_prompt=NEG, image=Image.fromarray(rgb), mask_image=Image.fromarray(m), strength=job.get('strength', 0.85), num_inference_steps=30,
                   guidance_scale=6.5, width=W, height=H, generator=torch.Generator('cuda').manual_seed(7)).images[0]
        k = m.astype(np.float32)[..., None] / 255
        res = (np.array(out).astype(np.float32) * k + rgb.astype(np.float32) * (1 - k)).astype(np.uint8)
    left = detect(res, alpha)
    o = Image.fromarray(res).convert('RGBA'); o.putalpha(Image.fromarray(alpha))
    o.save(os.path.join(OUT, job['slug'] + '.png'))
    log.append({'slug': job['slug'], 'marked': len(boxes), 'detected': len(auto), 'left_after': len(left)})
    print(log[-1], flush=True)
json.dump({'jobs': log, 'total_seconds': round(time.time() - T0)}, open(os.path.join(OUT, 'run.json'), 'w'), indent=1)
print('TOTAL', round(time.time() - T0), 's')
