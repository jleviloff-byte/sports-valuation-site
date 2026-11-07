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
