# Release notes: Stadiums & Arenas

## Status (2026-11-07): not released

Nothing from `feature/stadium-map` has been merged to `main` or deployed to production. The release is blocked on:

1. **Art.** The brick-built art was rejected; the replacement art is at the pilot stage (`docs/art-review/pilot.png`) waiting for a style pick. Shipping the section without approved art would promote rejected work.
2. **Load targets on the real preview (gate d).** Preview deployments are behind Vercel Deployment Protection, and the bypass secret is not in this repo's `.env.local` (the file does not exist), so preview timings could not be measured.

## Current production (recorded before any release)

| Field | Value |
|---|---|
| Production commit | `c2c8615` (Merge branch 'refresh-and-redesign') |
| GitHub deployment ID | 6697534399 (created 2026-09-27T20:33:31Z, state success) |
| Vercel deployment URL | https://sports-valuation-site-ggmgbpzvn-jleviloff-6404s-projects.vercel.app |
| Domain | https://franchisemath.site (whatsmyteamworth.com no longer resolves) |

## Rollback steps (for when this does ship)

1. In the Vercel dashboard, open the project's Deployments, find the deployment above (or the one immediately before the release), and choose **Promote to Production** (instant rollback; no rebuild).
2. Or from the CLI: `npx vercel rollback <deployment-url>` with the URL above.
3. Then revert the merge on `main` so the next push does not redeploy it: `git revert -m 1 <merge-commit>` and push.
4. The release adds files only under `/stadiums`, `/map-styles`, `public/stadiums/` and the shell split (`src/App.jsx`, `src/pages/Home.jsx`); reverting the merge removes all of it.

## Gate results so far

| Gate | Result |
|---|---|
| a. Build passes, no console errors | Pass locally: build succeeds; no console errors on /stadiums, a venue card, or existing routes checked in the browser. |
| b. No visual change on existing pages | Pass: 16 Playwright full-page screenshots (8 routes x desktop/phone) identical before vs after the shell split. |
| c. Card links to team pages resolve | Pass: all 139 tenant links resolve to existing team ids (`scripts/stadiums/check-team-links.mjs`). |
| d. Load targets on the real preview | Blocked: no preview bypass secret. Local emulated-phone runs are in `research/perf/results.json` (directional only). |
