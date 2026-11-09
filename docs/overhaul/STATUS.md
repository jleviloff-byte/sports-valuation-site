# Overhaul status

- **Phase:** 3 — full run. Pilot approved by Josh ("Approve as is").
- **Last completed step:** All 354 venues have a reference or a generic model, controls and a spec sheet; generation is queued for everything.
  - Batch 1 (56 iconic photo venues): 35 pass blind ID; attempt 3 for 8 (`batch1g`, running); 6 signage/retry picks in text cleanup (`stadium-cleanup-b1e`); 7 moved to the generic path.
  - Generic fallback path (251 venues: 36 iconic, 215 long tail): config chosen by a 4-venue test (txt2img, flat render as weak style ref). Kernels `stadium-gen-fba1..fbb6` pushed one by one by `scratchpad/fbqueue.sh` (Kaggle allows 2 at a time).
  - Long-tail photo path: 33 venues segmented and jobbed (`jobs/tail1.json`); 5 resegmenting with hand boxes (`jobs/seg4.json`); 4 moved to generic (`jobs/fbB7.json`). Queued by `scratchpad/tailq.sh` after the fallback kernels.
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:** As kernels finish: pick seeds, text cleanup, blind ID in batches (iconic: must be named; long tail: right type and colors), log in `docs/overhaul/qa-*.md`. Then export (Real-ESRGAN, 1600 px hero WebP, 512/256 sprites), site integration, preview deploy, load-time gate, final report.
  - If this session dies: the queue scripts live in the scratchpad and are lost. Re-push any `jobs/*.json` whose kernel (`stadium-gen-<name>`) has not run with `python3 scripts/stadiums/overhaul/kaggle/push.py scripts/stadiums/overhaul/jobs/<name>.json stadium-gen-<name>`.
- **Kaggle GPU hours used:** ~10 this week (pilot 3.3, segmentation 0.5, batch 1 and retries 4.1, rejected fallback batch 1.25, tests 0.6). Queued: fallback ~8 h, long-tail photo ~1 h. Free quota is 30 h/week.
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), so scripts back off. render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions. Candidate photos are uploading to Kaggle dataset `stadium-overhaul-cands`.
