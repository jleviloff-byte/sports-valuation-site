# Stadium data pipeline

Builds `data/stadiums.json` (every active US venue with capacity >= 15,000) and the QA report. Run from the repo root, in order:

```bash
node scripts/stadiums/build-cpi.mjs          # scripts/stadiums/cpi-u.json from the BLS API
node scripts/stadiums/seed-candidates.mjs    # candidates from Wikipedia list pages and 2026 schedules
node scripts/stadiums/fetch-wikipedia.mjs    # venue articles + infobox parsing
node scripts/stadiums/fetch-osm.mjs          # OpenStreetMap footprints via Nominatim (1 request/second, ~10 min)
node scripts/stadiums/build-stadiums.mjs     # merge, overrides, CPI, rankings -> data/stadiums.json
node scripts/stadiums/build-qa.mjs           # data-qa.md and upcoming.md
```

All network responses are cached under `research/raw/stadiums/` with revision ids and fetch times. Pass `--refresh` to the fetch scripts to refetch.

Hand-checked corrections from official sites go in `overrides.json` (keyed by Wikipedia article title, each value with a source URL). Never enter a value there without a source.

Files:

- `lib/wiki.mjs`: MediaWiki API client with cache.
- `lib/infobox.mjs`: infobox field extraction and the capacity, year, cost and coordinate parsers.
- `cpi-u.json`: BLS CPI-U annual averages with source.
- `data-qa.md`: generated QA report. `upcoming.md`: venues under construction (excluded).
- `LICENSES.md`: dependency and data licenses.
