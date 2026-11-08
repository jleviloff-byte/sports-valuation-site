# Overhaul status

- **Phase:** 2 — pilot complete, **waiting for Josh's pilot approval** (no full run until approved)
- **Last completed step:** Pilot finished and QA'd. Sheet: `docs/overhaul/pilot.png`. QA log: `docs/overhaul/pilot-qa.md`.
  - Blind ID: 9 of 12 venues named by a fresh subagent.
  - Text: no legible text in any of the 24 images.
  - Needs attention: Daytona after 5 attempts (layout right, detail low). L&N, Q2 and Rupp are type-correct, but blind ID can't name them (details in `docs/overhaul/needs-attention.md`).
- **Pipeline path per pilot venue:** photo (traced polygon on the reference): Fenway, Michigan, Wrigley, SoFi. Fallback (NAIP-measured model, `scripts/stadiums/art2/venues.js`; controls via `scripts/stadiums/overhaul/prep_fallback.py`): L&N, Lambeau, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol.
- **Next step:** After approval, start the full run in iconic order.
  - Same pipeline: 4 seeds, no-base only, cleanup pass, composited base.
  - Upscale with Real-ESRGAN.
  - Then site integration.
  - While waiting: non-generation prep for all venues (references, verification, control maps, spec sheets).
- **Kaggle GPU hours used:** ~3.3 total. Probe and tests 0.5; pilot round 1 1.38; round 2 0.86 including a failed start; rounds 3–6 0.48; cleanups 0.09.
- **Blockers:** waiting on pilot approval. Notes: Commons throttles this egress IP (HTTP 429), scripts back off; render.mjs needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` in cloud sessions.
