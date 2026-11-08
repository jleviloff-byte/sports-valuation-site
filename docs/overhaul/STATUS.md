# Overhaul status

- **Phase:** 1 — pilot references (preflight passed 2026-11-08)
- **Last completed step:** Preflight. Kaggle CLI authenticates; GPU (T4) + internet confirmed by probe kernel `stadium-preflight-probe`; Commons, Hugging Face and USGS NAIP reachable; preview loads with bypass header (302 without, 200 with).
- **Next step:** Fill pilot reference gaps (L&N Federal Credit Union Stadium, Lambeau Field, Rupp Arena, Q2 Stadium, Bristol Motor Speedway); `scripts/stadiums/refs/verified.json` has Yulman Stadium, which is not in the pilot list.
- **Kaggle GPU hours used:** ~0.05 (probe only)
- **Blockers:** none
