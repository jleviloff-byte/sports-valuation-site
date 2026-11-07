# Stadium map spec

Consolidated from Josh's original brief (2026-11-06) and follow-up instructions (2026-11-06/07). This is the reference for decisions logged in `docs/decisions-log.md`.

## Product
- Section: **Stadiums & Arenas** at `/stadiums` (deep links `/stadiums/:slug`). Interactive map of every active US stadium, arena, racetrack and tennis venue with capacity >= 15,000.
- Each venue is a brick-built isometric illustration at its real location, sized by capacity (size = k * sqrt(capacity), floor for 15k, log growth above 110k; Michigan Stadium about 1.9x Yulman; IMS largest).
- Clicking a venue opens a loadout card: rotating model center, stat panels radiating out (capacity, location, tenants with Forbes stadium value, opened, latest renovation, construction cost nominal and 2025 dollars, rankings). Prev/next by capacity rank, Esc closes, mobile stacks panels.
- Goal: make size differences obvious at a glance.

## Scope
- US only, currently active, capacity >= 15,000. Tenants: NFL, MLB, NBA, NHL, MLS, NWSL, WNBA, NCAA FBS/FCS, D1 basketball, NASCAR Cup, IndyCar, F1, US tennis >= 15k, neutral sites hosting major events. Under construction goes to `scripts/stadiums/upcoming.md`.
- Capacity = current official seated capacity. Racetracks with only estimates: `capacity_type: "estimated"`, labeled "est." everywhere, excluded from US and state rankings, ranked only within motorsports, with a card footer note.

## Data rules
- $0 budget. Free and open sources only; licenses listed in `scripts/stadiums/LICENSES.md`.
- Never fabricate. Unsourced values are null and display "N/A". Every field carries a source URL.
- Renovation scope: Wikipedia text, official team/university/venue press releases, or established news outlets only, each cited.
- Costs in 2025 dollars via BLS CPI-U; pre-1913 uses 1913 CPI and is flagged.
- Rankings computed at build time, never hand-entered.

## Brand and copy
- Never use the word "LEGO", LEGO logos or minifigures. Style is "brick-built".
- No team logos. Team names and colors are fine.
- No em dashes in UI copy.

## Engineering
- Vite + React, Vercel. Match existing conventions; do not change existing pages' look or behavior.
- Performance (emulated mid-range phone, measured on the real preview): existing pages under 2.5 s; first venue visible on `/stadiums` under 4 s. Team data loads per route; `/stadiums` loads it only when a card needs a tenant valuation.
- Sprites in one atlas, ~50 largest venues first, slim map index; full record loads when a card opens.

## Release gates (go live only if all pass)
1. Build passes; no console errors on `/stadiums`, a venue card, and every existing route.
2. Playwright screenshot diffs show no visual change on existing pages. If the shared-code performance change causes a diff, revert it and ship without it.
3. Every venue-card link to a team valuation page resolves.
4. Load targets met on the real preview.
5. Before deploying: record the current production deployment ID and rollback steps in `docs/release-notes.md`.

## Limits
- No secrets or `.env` files in git. Commit after each meaningful step.
