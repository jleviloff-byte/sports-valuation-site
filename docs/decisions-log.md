# Decisions log

One line per decision made without Josh, with the reason. Newest last.

| Date | Decision | Reason |
|---|---|---|
| 2026-11-07 | Wrote `docs/stadium-map-spec.md` from the original brief and follow-ups | The referenced spec file did not exist; decisions need a written reference. |
| 2026-11-07 | Treat production as franchisemath.site, not whatsmyteamworth.com | whatsmyteamworth.com no longer resolves; the README and Vercel production point at franchisemath.site. |
| 2026-11-07 | Did not read `C:\Users\joshl\Desktop\CreatorOS\.env.local` | It belongs to a different project; the bypass secret was expected in this repo's `.env.local`, which does not exist. |
| 2026-11-07 | Put go-live on hold; brick art not shipped | Josh rejected the brick-built art; it was never merged to main, so production has nothing to remove. |
| 2026-11-07 | Read the truncated pilot instruction ("wait for me to pick a") as "pick a style variant" | The message was cut off; the pilot's purpose is choosing among 2 to 3 style variants. |
| 2026-11-07 | Art Path B (illustrated three.js), not Path A (local diffusion) | No NVIDIA GPU: nvidia-smi absent; only Intel integrated graphics (Core Ultra 7 155U, ~4 GB shared). |
| 2026-11-07 | Shell keeps a generated 15 KB ticker file; full team data moved to the home route chunk | Ticker and footer appear on every page and need only 4 fields per team; this removes team data from /stadiums and info pages without changing what they show. |
| 2026-11-07 | Screenshot gate stubs third-party images with one blank PNG and blurs 1 px before diffing | External team logos load at random times and font anti-aliasing jitters; both caused false diffs unrelated to code. Layout and content changes still register. |
| 2026-11-07 | Local timings are interleaved A/B medians, and treated as directional only | The laptop is shared with Chrome, Slack and other apps; absolute numbers swing 2x run to run. Final numbers must come from the real preview. |
| 2026-11-07 | Card prev/next and SEO list order by capacity, not US rank | Racetracks have no US rank once estimates are excluded; capacity order keeps every venue reachable. |
| 2026-11-07 | Renovation pass 2: 32 of 38 venues sourced, 6 stay N/A | Only official releases or established outlets were allowed; Alumni, Falcon, Huskie, Johnny "Red" Floyd, CEFCU and PayPal Park had no confirmable source. (3 of the original 41 were a same-year duplicate bug, now fixed.) |
| 2026-11-07 | Costs left null when the source gives an estimate, authorization, tax commitment or guaranteed maximum price | Spec: never fabricate; those figures are not the project's cost. |
| 2026-11-07 | Accepted three pre-completion sources (Texas DKR, Bank of America, War Memorial) for scope, noted in renovation-scopes.json | They describe the project's scope; completion in the listed year comes from Wikipedia's infobox. |
| 2026-11-07 | Read 11 of 14 defaulted ballpark bearings from NAIP and used them for the art, pending review | The pivot names NAIP as the orientation source; readings are measurements from public-domain imagery, flagged ±15° in scripts/stadiums/orientation-review.md. Domes with closed roofs keep the default. |
| 2026-11-08 | Pilot venue is L&N Federal Credit Union Stadium (Louisville), not Yulman Stadium | The brief's pilot list names L&N; the earlier verified.json had Yulman. Yulman's refs are kept for the full run. |
| 2026-11-08 | Venues without a whole-venue oblique photo at 30-50° take the fallback path in the pilot: L&N, Rupp, Q2, Daytona, plus MSG and Arthur Ashe (street-level only) and Bristol (whole oval only from inside the grandstand) | ControlNet depth/lineart follow the photo's camera, so a street-level or interior view cannot yield the standard 3/4 aerial. Structure comes from a NAIP-measured model; the best photo still drives IP-Adapter style and the spec-sheet colors. Recorded per venue in verified.json `_paths`. |
| 2026-11-08 | Commons API calls back off 15 s to 2 min on HTTP 429 | The cloud egress IP is throttled hard; short retries failed. |
| 2026-11-08 | Reference images and NAIP tiles live in the private Kaggle dataset joshleviloff/stadium-overhaul-refs | Brief: cloud sessions drop gitignored files; keep binaries out of git. |
