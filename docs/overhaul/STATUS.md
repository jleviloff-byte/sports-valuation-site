# Overhaul status

- **Phase:** 2 — pilot generation (prep for the 12 pilot venues is done)
- **Last completed step:** Test 2 passed after the alpha fix (seed 11 gave clean miniature models on grey). Full pilot running as kernel `stadium-gen-pilot` (12 venues x 2 variants x 4 seeds). Meanwhile: reference candidates crawled for all 335 venues with a Commons category (`research/raw/stadiums/refs-cand/`, gitignored); spec sheets regenerated (Lambeau now fallback).
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:** When `stadium-gen-pilot` finishes: review sheets, pick seeds, blind-ID / spec / artifact / side-by-side QA, regenerate failures, build `docs/overhaul/pilot.png`, then request pilot approval.
- **Kaggle GPU hours used:** ~0.5 before the pilot run (probe, test 1 x2, test 2); pilot run estimated ~1.3
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), scripts back off; render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions.
