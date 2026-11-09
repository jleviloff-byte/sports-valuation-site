# Finish step (brief step 5): Real-ESRGAN x2 upscale (BSD-3-Clause, release
# weights RealESRGAN_x2plus) of every final cutout, so the 1600 px hero is
# real detail rather than a Lanczos stretch. Color is upscaled by the network;
# alpha by Lanczos (the network has no alpha path), then hardened slightly so
# the edge stays crisp. Input: dataset with finals/<slug>.png (RGBA).
# Output: /kaggle/working/out/<slug>.png (RGBA, 2x), run.json.
import glob, json, os, subprocess, sys, time
subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'spandrel==0.4.1'], check=True)
import numpy as np, torch
from PIL import Image
from spandrel import ModelLoader

T0 = time.time()
IN = os.path.dirname(glob.glob('/kaggle/input/**/finals/*.png', recursive=True)[0])
OUT = '/kaggle/working/out'; os.makedirs(OUT, exist_ok=True)
W = '/kaggle/working/RealESRGAN_x2plus.pth'
subprocess.run(['wget', '-q', '-O', W, 'https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.1/RealESRGAN_x2plus.pth'], check=True)
model = ModelLoader().load_from_file(W).model.cuda().eval().half()
log = []
for f in sorted(glob.glob(os.path.join(IN, '*.png'))):
    im = Image.open(f).convert('RGBA')
    rgb = torch.from_numpy(np.array(im.convert('RGB'))).permute(2, 0, 1)[None].float().div(255).cuda().half()
    with torch.no_grad():
        up = model(rgb).clamp(0, 1)[0].permute(1, 2, 0).float().cpu().numpy()
    up = Image.fromarray((up * 255).round().astype(np.uint8))
    a = im.split()[-1].resize(up.size, Image.LANCZOS).point(lambda v: 0 if v < 8 else 255 if v > 247 else v)
    up.putalpha(a); up.save(os.path.join(OUT, os.path.basename(f)))
    log.append({'slug': os.path.basename(f)[:-4], 'in': im.size, 'out': up.size})
    print(log[-1], flush=True)
json.dump({'jobs': log, 'total_seconds': round(time.time() - T0)}, open(os.path.join(OUT, 'run.json'), 'w'), indent=1)
