# Forbes list exports (saved manually)

Forbes' robots.txt disallows AI agents, so these files are saved by hand in a
normal browser and parsed locally by `scripts/import-forbes.mjs`. Nothing in
this repo fetches forbes.com.

## What to save

Open each URL in your browser, then **File → Save As** into this folder with
the filename shown. Each is the JSON behind the Forbes list page.

| File | URL |
|---|---|
| `nfl-2026.json` | https://www.forbes.com/forbesapi/org/nfl-valuations/2026/position/true.json?limit=2000 |
| `nba-2025.json` | https://www.forbes.com/forbesapi/org/nba-valuations/2025/position/true.json?limit=2000 |
| `mlb-2026.json` | https://www.forbes.com/forbesapi/org/mlb-valuations/2026/position/true.json?limit=2000 |
| `nhl-2025.json` | https://www.forbes.com/forbesapi/org/nhl-valuations/2025/position/true.json?limit=2000 |
| `mls-2026.json` | https://www.forbes.com/forbesapi/org/mls-valuations/2026/position/true.json?limit=2000 |
| `soccer-2026.json` | https://www.forbes.com/forbesapi/org/soccer-valuations/2026/position/true.json?limit=2000 |

- If a year returns an empty list, try the prior year (for example NBA 2025 is the October 2025 list; NBA 2026 publishes around October 2026).
- If the MLS or soccer URL 404s, open the Forbes list page for that league, find the network request ending in `position/true.json` in DevTools → Network, and save that response instead. Any filename ending in `.json` works; the importer reads the league and year from the file itself.

## Then run

```bash
node scripts/import-forbes.mjs
node scripts/build-transactions.mjs
```

The importer writes `data/forbes-breakdown.js` (components per team, sum check)
and `research/raw/forbes-values.json` (each team's Forbes value history, used
for Forbes-at-time-of-sale), and prints any team whose four components don't
sum to its headline within ±2%.
