# Overhaul status

- **Phase:** 3 — full run. Pilot approved by Josh ("Approve as is").
- **PAUSED by Josh (2026-11-09).** No GPU work until he replies. Kaggle queue and the generic-path re-render are stopped; no kernel is running.
- **Why:** the generic 3D-model path scored 1 of 18 in blind ID. Like the brick art, a model built from guesses reads as "a stadium", not this stadium.
- **Where things stand:** see `docs/overhaul/coverage.md` (per venue). Photo path 81 (iconic 43, long tail 38), pilot hand-built models 8, generic path 265 (iconic 47, long tail 218). Batch 1 photo path: 39 of 56 pass blind ID.
- **Plan (awaiting Josh's go):**
  1. Coverage first. No iconic venue stays on the generic path. Widen the photo search for every generic venue, iconic first: deeper Wikimedia Commons subcategories, Openverse (CC search across Flickr and others), Flickr Creative Commons, and public-domain US government photos (military DVIDS, NASA, Army Corps, NOAA, NPS). Same license and verification rules as the brief (free license, category/title/caption check, by-eye check against the NAIP footprint, manifest entry).
  2. Loosen the angle band to 20-60 degrees oblique. A real oblique beats a guessed model.
  3. Eye-level-only venues: test on 5 venues whether depth from the 3D model plus IP-Adapter fed several eye-level photos passes blind ID. Only scale it if it passes.
  4. Whatever still has no photo: no fake detail. Propose a clean, simpler style that sits well next to photo-path venues at map size, mark those venues for a later upgrade, and show Josh 3 examples beside photo-path venues before rendering any more.
  5. Then QA, export, site integration (card and credits already wired), preview, load-time gate, final report.
- **Kaggle GPU hours used:** ~12.5 this week of the free 30 (pilot 3.3, segmentation 0.5, batch 1 and retries 4.4, generic-path batches 3.7, tests 0.6). Nothing queued.
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), so scripts back off. render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions. Candidate photos are uploading to Kaggle dataset `stadium-overhaul-cands`.
