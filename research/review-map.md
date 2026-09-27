# Review map: transactions-update (Franchise Math)

Every page and section that changed in this branch, with a URL to open it and what to look at. URLs are production; swap the host for `http://localhost:5173` on a dev server.

Host note (2026-09-27): the site is now Franchise Math at https://franchisemath.site (renamed on the refresh-and-redesign branch). The old whatsmyteamworth.com domain had no DNS records at the time of this review; the vercel.app host redirects to the new domain.

## New pages

| URL | What to look at |
|---|---|
| https://franchisemath.site/recent-sales | All / Controlling / Minority toggle with live counts; premium-to-Forbes summary strip by league (24 months); "Last updated" line. Expand the Seahawks row: price paid, Forbes at sale, premium, driver chips with sources, investment case, deal terms, sale-history timeline with sparkline, "View team profile" button. |
| https://franchisemath.site/recent-sales#deal-los-angeles-lakers-control-2026-08-12-na | Deep link from a profile opens and scrolls to a row. This one carries the Contested status pill and the court-hearing note. |
| https://franchisemath.site/forbes-breakdown | League selector. NFL/NBA/MLB/NHL show four sortable range charts (value, share, team) with a median tick and a League notes block under each. NHL header reads "as of Dec 2024". MLS and EPL show the "Forbes does not publish a component breakdown" notice. No verdict labels, no residual table. |

## Changed profile sections (open a team with `/?team=<id>`)

| URL | Section | What to look at |
|---|---|---|
| https://franchisemath.site/?team=seattle-seahawks | Last sale badge; Market check card | Badge under the headline (price, date, buyer). Market check: Forbes at sale, price paid, premium highlighted, top two drivers, link to the Recent Sales entry. |
| https://franchisemath.site/?team=los-angeles-lakers | Last sale badge (Contested) | Badge reads "Contested"; Market check links to the contested deal. |
| https://franchisemath.site/?team=golden-state-warriors | Inside the Forbes Number | Hand-written Stadium and Market commentary (Chase Center, Bay Area income, revenue). Range bars with logo, rank, gap to median, Why / Peers / Read blocks. |
| https://franchisemath.site/?team=dallas-cowboys | Inside the Forbes Number | Hand-written Market and Brand commentary (largest revenue franchise; Brand without titles). |
| https://franchisemath.site/?team=los-angeles-rams | Inside the Forbes Number | Hand-written Stadium commentary (SoFi, Hollywood Park). Compare with the Chargers below. |
| https://franchisemath.site/?team=los-angeles-chargers | Inside the Forbes Number; same-market callout | Tenant commentary; "Same market, different number" vs the Rams. |
| https://franchisemath.site/?team=las-vegas-raiders | Inside the Forbes Number | Hand-written Stadium commentary (Allegiant, operating control of a public building). |
| https://franchisemath.site/?team=brooklyn-nets | Inside the Forbes Number; same-market callout | Hand-written Market commentary and the Knicks/Nets callout: dollar gap, revenue ratio vs Market ratio, the argument. Also on /?team=new-york-knicks. |
| https://franchisemath.site/?team=los-angeles-dodgers | Inside the Forbes Number (Sport) | Net revenue-sharing position readout ("Net payer", value vs median) with the two-sentence explainer; no flatness comparison. Market commentary vs the Angels; callout vs Angels. |
| https://franchisemath.site/?team=new-york-yankees | Inside the Forbes Number | Hand-written Market (vs Mets) and Stadium commentary; Mets callout. Also /?team=new-york-mets for the Mets side with the SNY ownership sentence and sources. |
| https://franchisemath.site/?team=atlanta-falcons | Inside the Forbes Number | Hand-written Stadium commentary (event calendar). |
| https://franchisemath.site/?team=kansas-city-chiefs | Inside the Forbes Number (Sport) | NFL near-flat framing: "within the 5% band". Generated (not hand-written) commentary, typical of most teams. |
| https://franchisemath.site/?team=toronto-maple-leafs | Inside the Forbes Number | NHL "as of Dec 2024" header plus the note that the headline uses a later figure. Precedent Transactions card shows the two MLSE holding-company deals excluded from medians. |
| https://franchisemath.site/?team=inter-miami-cf | Inside the Forbes Number | MLS: "Forbes does not publish a component breakdown for this league." |
| https://franchisemath.site/?team=manchester-united | Inside the Forbes Number; Control Sale History | EPL: same no-breakdown note. Sale history from Newton Heath with GBP conversions in notes. |
| https://franchisemath.site/?team=buffalo-bills | Control Sale History | Replaces the old Transaction History for every team: formation-to-today control changes, "Est." tag on approximate prices, "Price n/a" where unknown. |
| any team | Precedent Transactions card | Control and LP median premiums to Forbes for the league (36 months), recent league deals with premium column. It computes no value. |
| any team | Valuation KPI | Sub-label now reads "Forbes <year>". NFL, MLB and 11 EPL clubs show the newer Forbes list loaded on this branch. |
| all pages | Nav and footer | "Recent Sales" and "Forbes Breakdown" links; desktop nav now collapses to the hamburger below the lg breakpoint. |

## Methodology and data sources

| URL | What to look at |
|---|---|
| https://franchisemath.site/methodology#forbes-breakdown | "Reading the Forbes Breakdown": numbers are Forbes', commentary is ours, peers not models, NHL Dec 2024 note, MLS/EPL note, Sport net-of-sharing paragraph, limits. |
| https://franchisemath.site/methodology#sale-prices | "Why sale prices differ from Forbes": driver taxonomy, Seahawks vs Commanders, Dolphins LP vs Seahawks control, premium-to-Forbes table by league. |
| https://franchisemath.site/data-sources | New rows: team sale reporting (outlet list computed from the deals), league/team releases, SABR/Wikipedia for sale histories, Census, Nielsen, Statistics Canada. Forbes row now covers team pages and the component split. |

## Data files

| File | What it is |
|---|---|
| `data/transactions.js` | Generated. 46 verified deals with forbesValueAtSale, premiumToForbes, drivers, investmentCase, status (incl. contested), sources. `lastUpdated` feeds the Recent Sales header. |
| `data/sale-history.js` | Generated. Control-sale history from formation for all 174 teams. |
| `data/forbes-breakdown.js` | Generated from the Forbes exports (local only). Sport/Market/Stadium/Brand per team with sum check; `leagueStatus` per league. |
| `data/forbes-proxies.js` | Generated. Census, Nielsen, venue, brand and sport-note proxies for 124 teams (used for commentary facts and the internal model). |
| `data/forbes-commentary.js` | Hand-written commentary overrides, same-market callout overrides, league-note overrides. Sources arrays where a claim needs one. |
| `data/divisions.js` | Division membership for peer selection. |
| `data/allTeams.js` | Adds `id`, `saleHistory`, `formation`, `lastSale`, `forbesBreakdown`; a newer Forbes list replaces an older headline. |
| `research/transactions-audit.md` | Kept / Rejected / Unverified / Not checked, with counts since May 11, 2026. |
| `research/component-residuals.md` | Internal only: regression residuals and R² by league and component. Nothing from it renders. |
| `research/review-map.md` | This file. |
| `research/FORBES_IMPORT.md` | How to save the Forbes list JSON by hand into the gitignored `research/forbes-raw/` folder and run the importer. |
| `research/raw/` | Research inputs: deal sweeps, sale histories, drivers, proxies, Forbes value history, empty-league record, audit inputs. |
| `scripts/` | `import-forbes.mjs`, `build-transactions.mjs`, `build-proxies.mjs`, `build-audit.mjs`. `research/tools/component-model.mjs` is the internal regression. |
