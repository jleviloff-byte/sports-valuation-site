# Model licenses (checked 2026-11-08)

Each license was read from the model's Hugging Face API tags or the project's LICENSE file on the date above. All selected models allow use of their outputs on a public website.

| Step | Model | License | Use |
|---|---|---|---|
| Depth | `depth-anything/Depth-Anything-V2-Small-hf` | Apache-2.0 | Selected |
| Depth | `depth-anything/Depth-Anything-V2-Base-hf` (and Large) | CC BY-NC 4.0 | **Not used** (non-commercial) |
| Edges | OpenCV Canny + edges of the depth map | Apache-2.0 (OpenCV) | Selected; no model weights |
| Edges | `lllyasviel/Annotators` (lineart weights) | "other", no terms stated | **Not used** (license unclear) |
| Base model | `stabilityai/stable-diffusion-xl-base-1.0` | CreativeML OpenRAIL++-M | Selected. Outputs may be used commercially; the use restrictions apply to the model and are honored (no prohibited uses) |
| VAE | `madebyollin/sdxl-vae-fp16-fix` | MIT | Selected (fp16 on T4 without NaNs) |
| ControlNet | `xinsir/controlnet-union-sdxl-1.0` | Apache-2.0 | Selected: depth + canny in one model, fits T4 memory |
| ControlNet | `xinsir/controlnet-depth-sdxl-1.0`, `xinsir/controlnet-canny-sdxl-1.0` | Apache-2.0 | Allowed alternates |
| ControlNet | `diffusers/controlnet-depth-sdxl-1.0` | OpenRAIL++ | Allowed alternate |
| IP-Adapter | `h94/IP-Adapter` (SDXL weights) | Apache-2.0 | Selected |
| Segmentation | `facebook/sam-vit-huge` (Segment Anything) | Apache-2.0 | Selected (full run): venue mask on the reference from a box prompt; replaces hand-traced polygons |
| Box proposal | `IDEA-Research/grounding-dino-base` | Apache-2.0 | Selected (full run): proposes the venue box from a text prompt; every mask is reviewed and wrong ones get a box marked by eye |
| Text detection | EasyOCR (`JaidedAI/EasyOCR`), CRAFT detector weights (`clovaai/CRAFT-pytorch`) | Apache-2.0 (EasyOCR), MIT (CRAFT) | Selected: finds lettering, including gibberish, so it can be inpainted out (detector only; recognition unused) |
| Text removal | SDXL base inpainting (same weights as above, `StableDiffusionXLInpaintPipeline` sharing the loaded modules) | CreativeML OpenRAIL++-M | Selected; no extra model |
| IP-Adapter image encoder | `laion/CLIP-ViT-H-14-laion2B-s32B-b79K` (shipped in h94/IP-Adapter) | MIT | Selected |
| Cutout | `ZhengPeng7/BiRefNet` | MIT | Selected |
| Cutout | `briaai/RMBG-2.0` | Non-commercial ("other", gated) | **Not used** |
| Upscale | Real-ESRGAN (`xinntao/Real-ESRGAN`, release weights) | BSD-3-Clause | Selected |

Reference photos: licenses are per image in `scripts/stadiums/refs/verified.json`. Art derived from a CC BY-SA photo is released under CC BY-SA; the card footer credits every source photo.
| Upscale loader | spandrel 0.4.1 (`chaiNNer-org/spandrel`), loads the Real-ESRGAN weights | MIT | Selected |
