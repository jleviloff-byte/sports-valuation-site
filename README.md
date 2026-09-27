# Franchise Math

Every Forbes franchise valuation, broken down and explained. Live at https://franchisemath.site.

This repository is still named `sports-valuation-site` on GitHub; the site it builds is Franchise Math (formerly What's My Team Worth).

## Stack

Vite + React 18, Tailwind, recharts, deployed on Vercel. Team data lives in `data/` as plain JS modules; research inputs and logs live in `research/`.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build to dist/
```

Data pipelines (run from the repo root):

```bash
node scripts/import-forbes.mjs        # parse Forbes list exports saved in research/forbes-raw/ (gitignored)
node scripts/build-transactions.mjs   # data/transactions.js + data/sale-history.js from research/raw
node scripts/build-audit.mjs          # research/transactions-audit.md
node scripts/build-proxies.mjs        # data/forbes-proxies.js
node scripts/build-refresh.mjs        # data/refresh-2026.js + research/copy-refresh-log.md
node research/tools/figure-audit.mjs  # research/stale-data.md
```

See `research/FORBES_IMPORT.md` for how the Forbes exports are saved by hand (nothing in this repo fetches forbes.com).

## Author

Josh Leviloff. All valuation commentary is the author's own opinion and does not represent any employer or institution.
