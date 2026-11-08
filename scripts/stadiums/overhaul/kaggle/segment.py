# Venue masks for photo-path references (full run): SAM (facebook/sam-vit-huge,
# Apache-2.0) prompted with a box marked by eye on the reference, plus optional
# positive/negative points. Replaces the pilot's hand-traced polygons.
# Jobs: JOBS_INLINE = [{slug, ref, box: [x0,y0,x1,y1] normalized, pos: [[x,y]...], neg: [[x,y]...]}]
# Output: /kaggle/working/out/masks/<slug>.png (L, ref size) and a preview <slug>_preview.jpg.
import json, os, subprocess, sys, glob, time
subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'transformers==4.56.2'], check=True)
import numpy as np, torch
from PIL import Image
from transformers import SamModel, SamProcessor

T0 = time.time()
IN = os.path.dirname(glob.glob('/kaggle/input/**/verified.json', recursive=True)[0])
OUT = '/kaggle/working/out/masks'; os.makedirs(OUT, exist_ok=True)
model = SamModel.from_pretrained('facebook/sam-vit-huge').to('cuda').eval()
proc = SamProcessor.from_pretrained('facebook/sam-vit-huge')
log = []
for job in JOBS_INLINE:
    img = Image.open(os.path.join(IN, job['ref'])).convert('RGB'); W, H = img.size
    x0, y0, x1, y1 = job['box']
    kw = {'input_boxes': [[[x0 * W, y0 * H, x1 * W, y1 * H]]]}
    pts = [[p[0] * W, p[1] * H] for p in job.get('pos', [])] + [[p[0] * W, p[1] * H] for p in job.get('neg', [])]
    if pts:
        kw['input_points'] = [[pts]]; kw['input_labels'] = [[[1] * len(job.get('pos', [])) + [0] * len(job.get('neg', []))]]
    inp = proc(img, return_tensors='pt', **kw).to('cuda')
    with torch.no_grad():
        out = model(**inp, multimask_output=True)
    masks = proc.image_processor.post_process_masks(out.pred_masks.cpu(), inp['original_sizes'].cpu(), inp['reshaped_input_sizes'].cpu())[0][0]
    scores = out.iou_scores[0, 0].cpu().numpy()
    # Prefer the highest-scoring mask that fills a reasonable share of the box.
    bw = (x1 - x0) * W * (y1 - y0) * H
    best = max(range(len(scores)), key=lambda i: scores[i] + (0.3 if masks[i].sum() > 0.35 * bw else 0))
    m = (masks[best].numpy() * 255).astype(np.uint8)
    Image.fromarray(m).save(f"{OUT}/{job['slug']}.png")
    prev = img.copy(); prev.thumbnail((900, 900)); mk = Image.fromarray(m).resize(prev.size)
    tint = Image.new('RGB', prev.size, (255, 0, 160))
    Image.composite(Image.blend(prev, tint, 0.45), prev, mk).save(f"{OUT}/{job['slug']}_preview.jpg", quality=85)
    log.append({'slug': job['slug'], 'score': float(scores[best]), 'area': float(m.mean() / 255)})
    print(log[-1], flush=True)
json.dump({'jobs': log, 'total_seconds': round(time.time() - T0)}, open('/kaggle/working/out/run.json', 'w'), indent=1)
