# Path A bake-off kernel (Kaggle, free GPU).
# SDXL base 1.0 (CreativeML Open RAIL++-M) + ControlNet depth SDXL (Open RAIL++-M)
# + IP-Adapter SDXL (Apache-2.0) + SDXL VAE fp16 fix (MIT). All allow use on a public site.
# Inputs (private dataset "stadium-bakeoff-inputs"):
#   <slug>-depth.png  depth from the Path B model at the fixed camera (near = white)
#   <slug>-mask.png   silhouette from the same camera
#   <slug>-ref.jpg    one reference photo, used only as an appearance guide
# Output: /kaggle/working/<slug>-s<seed>.png (RGBA, background cut with the mask)
import glob, os, subprocess, sys

subprocess.run([sys.executable, "-m", "pip", "install", "-q", "diffusers==0.31.0", "transformers==4.46.3", "accelerate==1.1.1"], check=True)

import numpy as np
import torch
from PIL import Image, ImageFilter
from diffusers import AutoencoderKL, ControlNetModel, StableDiffusionXLControlNetPipeline
from transformers import CLIPVisionModelWithProjection

IN = glob.glob("/kaggle/input/*")[0]
OUT = "/kaggle/working"
SIZE = 1024
SEEDS = [11, 23]

# One locked style prompt for every venue.
PROMPT = (
    "isometric 3/4 aerial illustration of a single sports venue, clean stylized game-art, "
    "soft late-afternoon sunlight from the left, crisp architectural detail, saturated but natural colors, "
    "smooth painted textures, isolated on a plain black background"
)
NEGATIVE = (
    "photo, photorealistic, text, letters, logo, watermark, signage, people, cars, surrounding city, "
    "streets, trees, blurry, noisy, distorted perspective, toy bricks, plastic"
)

image_encoder = CLIPVisionModelWithProjection.from_pretrained(
    "h94/IP-Adapter", subfolder="sdxl_models/image_encoder", torch_dtype=torch.float16
)
pipe = StableDiffusionXLControlNetPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    controlnet=ControlNetModel.from_pretrained("diffusers/controlnet-depth-sdxl-1.0", torch_dtype=torch.float16),
    vae=AutoencoderKL.from_pretrained("madebyollin/sdxl-vae-fp16-fix", torch_dtype=torch.float16),
    image_encoder=image_encoder,
    torch_dtype=torch.float16,
    variant="fp16",
)
pipe.load_ip_adapter("h94/IP-Adapter", subfolder="sdxl_models", weight_name="ip-adapter_sdxl.bin")
pipe.set_ip_adapter_scale(0.45)
pipe.enable_model_cpu_offload()


def depth_for(slug):
    d = np.asarray(Image.open(f"{IN}/{slug}-depth.png").convert("L"), dtype=np.float32)
    m = np.asarray(Image.open(f"{IN}/{slug}-mask.png").convert("L")) > 127
    if m.any():
        lo, hi = d[m].min(), d[m].max()
        d = np.where(m, 0.25 + 0.75 * (d - lo) / max(1.0, hi - lo), 0.0) * 255
    return Image.fromarray(d.astype(np.uint8)).convert("RGB").resize((SIZE, SIZE)), m


for f in sorted(glob.glob(f"{IN}/*-depth.png")):
    slug = os.path.basename(f)[: -len("-depth.png")]
    depth, m = depth_for(slug)
    ref_path = f"{IN}/{slug}-ref.jpg"
    ref = Image.open(ref_path).convert("RGB") if os.path.exists(ref_path) else None
    for seed in SEEDS:
        img = pipe(
            prompt=PROMPT,
            negative_prompt=NEGATIVE,
            image=depth,
            ip_adapter_image=ref if ref is not None else depth,
            controlnet_conditioning_scale=0.7,
            control_guidance_end=0.8,
            num_inference_steps=30,
            guidance_scale=6.5,
            generator=torch.Generator("cpu").manual_seed(seed),
            width=SIZE,
            height=SIZE,
        ).images[0]
        # Cut the background with the model's silhouette (slightly feathered).
        alpha = Image.fromarray((m * 255).astype(np.uint8)).resize((SIZE, SIZE)).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(1.2))
        img.putalpha(alpha)
        img.save(f"{OUT}/{slug}-s{seed}.png")
        print(slug, seed, "ok", flush=True)
