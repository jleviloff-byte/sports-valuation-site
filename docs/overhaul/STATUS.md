# Overhaul status

- **Phase:** 2 — pilot generation (prep for the 12 pilot venues is done)
- **Last completed step:** Generation test 1 (Fenway, Michigan) found three problems: prompt truncated at 77 tokens, BiRefNet failing on aerials, weak controls. Fixed in `scripts/stadiums/overhaul/kaggle/generate.py`; test 2 (Fenway, Michigan, MSG, Bristol) running as kernel `stadium-gen-test2`.
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:** Review test 2; then run `jobs/pilot.json` (12 venues x 2 variants x 3 seeds) with `python3 scripts/stadiums/overhaul/kaggle/push.py scripts/stadiums/overhaul/jobs/pilot.json stadium-gen-pilot`, then QA and `docs/overhaul/pilot.png`.
- **Kaggle GPU hours used:** ~0.4 (probe, test 1 x2)
- **Blockers:** none. Notes: Commons throttles this egress IP (HTTP 429), scripts back off; render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions.
