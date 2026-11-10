# Overhaul status

- **Phase:** 3 — full run. Pilot approved by Josh ("Approve as is").
- **Live (2026-11-10, after the art audit):** 7 venues with new art (Allegiant, Citi Field, Jordan-Hare, Lucas Oil, MetLife, Tropicana, Yankee), 347 footprint-only. Bar: Chase Center and Petco Park. 28 pulled (`audit-2026-11-10.md`), including Chase Center and Petco themselves because their photos cut the venue. Old brick sprite sheets removed; no brick asset is served.
- **QA now has five checks:** blind ID, spec, artifacts, side-by-side, and frame margin (`margin_check.py`: whole venue in frame, at least 5% margin, on the reference photo and the shipped image). Model-path images are never shipped.
- **Never** capture, scrape or screenshot imagery from Apple Maps, Google Earth or any map provider.
- **3D tiles prototype (preview only):** code ready (`tiles3d.md`), blocked on the key: `VITE_GOOGLE_MAPS_API_KEY` and `VITE_TILES3D_PREVIEW=1` must be in the Vercel Preview environment. Then: preview URL via `preview-url.sh`, card-open times via `scripts/stadiums/perf/card-open.mjs`, send Josh the link.
- **Release procedure for every later batch:** build; `scripts/stadiums/release/check-pages.mjs` (console errors, screenshots); screenshot diff of existing pages vs production; `scripts/stadiums/check-team-links.mjs`; push the branch; get the preview URL with `scripts/stadiums/release/preview-url.sh` (GitHub REST deployments API; never ask Josh); `scripts/stadiums/perf/perf-routes.mjs` with PROTECTION_BYPASS and PERF_BASE_B=production; fast-forward `main` if all pass.
- **Plan (photo coverage, approved 2026-11-09):**
  1. Iconic first: widened search (Commons subcategories, former names, Openverse, NASA; Wikimedia API etiquette) for the 47 generic-path iconic venues plus L&N, Q2, Rupp; review by eye on contact sheets; 20-60 degree obliques, crops of distant aerials if the venue stays ~800 px across, racetrack grandstand-side photos count.
  2. The 10 three-attempt failures: diagnosed (`diagnosis-10.md`); Target Field fixed but failed blind ID again, Chase Center fixed and shipped; the rest need new references.
  3. Held back from the release (13): fix and ship in a later batch. Husky Stadium and Notre Dame Stadium get post-rebuild photos (after 2013 and 2017).
  4. Long tail: 38 photo-path venues generated (tail1/tail2), awaiting review; then the widened search for the 182 "none found" venues.
  5. At a natural pause: the 5-venue eye-level test and 3 simpler-style examples, shown to Josh together.
- **Kaggle GPU hours used:** ~12.5 this week of the free 30 (pilot 3.3, segmentation 0.5, batch 1 and retries 4.4, generic-path batches 3.7, tests 0.6). Nothing queued.
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), so scripts back off. render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions. Candidate photos are uploading to Kaggle dataset `stadium-overhaul-cands`.
