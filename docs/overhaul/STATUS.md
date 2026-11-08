# Overhaul status

- **Phase:** 3 — full run. Pilot approved by Josh ("Approve as is").
- **Last completed step:** Batch 1 (iconic) prep done.
  - Of 85 non-pilot iconic venues, 56 have a verified reference and a cleaned SAM mask; colors are sampled and spec sheets written (`docs/overhaul/specs/`).
  - 30 venues have no usable aerial or failed segmentation and are listed in `docs/overhaul/needs-attention.md`; they go to the fallback model path.
  - Generation is running as kernels `stadium-gen-batch1a` and `stadium-gen-batch1b` (28 venues x 3 seeds each).
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:** When batch 1 finishes:
  1. Pick seeds; mark text boxes and run the cleanup kernel.
  2. Blind-ID in batches, plus spec and artifact checks; regenerate failures.
  3. Then the fallback models for the 30 needs-attention iconic venues, then long-tail venues.
- **Kaggle GPU hours used:** ~3.6 before batch 1 (pilot 3.3, segmentation 0.3); batch 1 estimated ~3
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), so scripts back off. render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions. Candidate photos are uploading to Kaggle dataset `stadium-overhaul-cands`.
