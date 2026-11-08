# Overhaul status

- **Phase:** 3 — full run. Pilot approved by Josh ("Approve as is").
- **Last completed step:** Batch 1 generated, reviewed, cleaned and blind-tested.
  - 56 venues x 3 seeds generated. Review: 42 usable picks (`scripts/stadiums/overhaul/picks-batch1.json`); 10 rerun as `batch1c` (hull-filled masks; Yankee Stadium now uses a current photo); 4 more to needs-attention.
  - Text cleanup pass 1 on all 42; pass 2 for 9 venues with signage left (OpenCV plain fill, then light SDXL kernel `stadium-cleanup-b1c`).
  - Blind ID on 33: 25 named; 22 pass all checks (`docs/overhaul/qa-batch1.md`). Retry `batch1d` (7 venues) is queued.
  - Generic fallback models (`scripts/stadiums/art2/generic.js`) render for football, soccer, ballpark, arena, dome and racetrack. NAIP aerials are downloading for all venues; colors sampled for 238 (`naip-colors.json`).
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:**
  1. Review `batch1c` and `batch1d`; pick seeds, clean, blind-ID; review cleanup pass 2 and blind-ID those 9.
  2. Render generic-model controls for the needs-attention iconic venues; generate; QA.
  3. Long tail: pick references from contact sheets where an aerial exists, otherwise the generic model.
- **Kaggle GPU hours used:** ~6.6 (pilot 3.3, segmentation 0.3, batch 1 2.8, cleanup 0.2); batch1c/1d running (~1 h)
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), so scripts back off. render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions. Candidate photos are uploading to Kaggle dataset `stadium-overhaul-cands`.
