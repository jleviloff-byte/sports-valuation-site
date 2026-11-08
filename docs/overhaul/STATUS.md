# Overhaul status

- **Phase:** 2 — pilot generation (prep for the 12 pilot venues is done)
- **Last completed step:** Pilot round 1 (`stadium-gen-pilot`, 96 images, 4963 s GPU) reviewed. Failures: Daytona was a flat facade; readable or gibberish text in most venues; no seed drew a model base. Fixes committed (see decisions log); round 2 running as kernel `stadium-gen-pilot2` (12 venues x 4 seeds, no-base only, OCR text cleanup).
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:** When `stadium-gen-pilot2` finishes: pick seeds, blind-ID / spec / artifact / side-by-side QA, regenerate failures, build `docs/overhaul/pilot.png`, request pilot approval.
- **Kaggle GPU hours used:** ~1.9 (probe, tests 1-2, pilot round 1 = 1.38 h); round 2 running
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), scripts back off; render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions.
