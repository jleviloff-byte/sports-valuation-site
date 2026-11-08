# Overhaul status

- **Phase:** 1 — pilot prep (references done; next: model licenses, spec sheets, generation notebook)
- **Last completed step:** Pilot references for all 12 venues verified against NAIP and recorded in `scripts/stadiums/refs/verified.json` (rejects in `refs/rejected.md`). Images and NAIP tiles uploaded to private Kaggle dataset `joshleviloff/stadium-overhaul-refs`.
- **Pipeline path per pilot venue:** photo-driven: Michigan, Fenway, Wrigley, SoFi, Lambeau. Fallback (NAIP-measured model + photo style): L&N, Rupp, Q2, Daytona, MSG, Arthur Ashe, Bristol. See decisions-log 2026-11-08.
- **Next step:** Verify model licenses (Depth Anything V2 Small, lineart annotator, SDXL + ControlNets, IP-Adapter, BiRefNet, Real-ESRGAN), then write the 12 pilot spec sheets.
- **Kaggle GPU hours used:** ~0.05 (preflight probe only)
- **Blockers:** none. Note: Commons throttles this egress IP (HTTP 429); scripts back off for minutes.
