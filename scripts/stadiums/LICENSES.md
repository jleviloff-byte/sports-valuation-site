# Stadium map: dependencies and data licenses

Checked against each installed package's `package.json` and each data provider's published terms. Updated per phase.

## Code dependencies

| Package | Version | License | Used for | Phase |
|---|---|---|---|---|
| wtf_wikipedia | 10.4.2 | MIT | Parsing tables on Wikipedia list pages (dev only) | 1 |
| d3-geo | 3.1.1 | ISC | Point-in-polygon state lookup (already a site dependency) | 1 |
| topojson-client | 3.1.0 | ISC | Decoding us-atlas (already a site dependency) | 1 |
| us-atlas | 3.0.1 | ISC (data from the U.S. Census Bureau, public domain) | State outlines (already a site dependency) | 1 |

| three | 0.170.0 | MIT | Brick model generation (offline) and the rotating model in the card (runtime, lazy-loaded) | 2, 4 |
| playwright | 1.49.1 | Apache-2.0 | Headless Chromium for offline rendering (dev only; Chromium itself is BSD-3-Clause plus bundled licenses) | 2 |
| sharp | 0.33.5 | Apache-2.0 (bundles libvips, LGPL-3.0, dynamically linked, build-time only, never shipped) | PNG to WebP, sprite resizing, contact sheet (dev only) | 2 |
| @gltf-transform/core, /extensions, /functions | 4.1.1 | MIT | GLB cleanup and quantization (dev only) | 2 |

Planned for Phase 3 (license confirmed from the package when installed): maplibre-gl (BSD-3-Clause).

## Data sources

| Source | License / terms | What we take | Attribution required |
|---|---|---|---|
| Wikipedia via the MediaWiki API | Text CC BY-SA 4.0. We extract facts (not copyrightable) and link each to the revision it came from; no prose is copied. | Venue lists, infobox capacity, opened, cost, renovation years, roof, coordinates (GeoData) | Source links per field; credit Wikipedia on the page footer |
| OpenStreetMap via Nominatim (OSM geocoder) | ODbL 1.0. `data/stadiums.json` coordinates and footprints form a derived database and are offered under ODbL. | Footprint polygons, centroid coordinates | "© OpenStreetMap contributors" with a link to openstreetmap.org/copyright |
| U.S. Bureau of Labor Statistics, CPI-U (CUUR0000SA0) via the BLS Public Data API v1 | Public domain (U.S. government work) | Annual average CPI-U 1913–2025 (`cpi-u.json`) | None required; source linked |
| Wikipedia team color modules (Module:College color/data, Module:Gridiron color/data, Module:Sports color/baseball, /basketball, /ice hockey) | Hex values are facts; modules are CC BY-SA 4.0. College entries cite each school's brand guide. | Seat colors in `data/stadium-art.json` (no logos) | Revision-pinned module URL per venue |
| Official team, venue and school websites | Facts only, cited by URL with quotes under 15 words | Capacity, opened, cost and renovation corrections (`overrides.json`) | Source links per field |

Requests to Wikipedia and Nominatim identify themselves as `FranchiseMathStadiumBot/0.1 (https://github.com/jleviloff-byte/sports-valuation-site)`. Nominatim requests follow its usage policy (at most 1 per second, one-time bulk run of about 480 lookups), and every response is cached in `research/raw/stadiums/`, so the pipeline does not refetch unless run with `--refresh`.

Planned for Phase 3: OpenFreeMap tiles (free, no key, commercial use allowed, no SLA; attribution "© OpenMapTiles, Data from OpenStreetMap", added automatically by MapLibre; modified styles must be self-hosted), OpenMapTiles schema and styles (CC-BY 4.0 design, BSD-3 code), Noto Sans glyphs via OpenFreeMap (OFL).

## Art references (illustrated pipeline, 2026-11-07)

| Source | License | Use |
|---|---|---|
| USGS NAIP orthoimagery via imagery.nationalmap.gov | Public domain (U.S. Government work) | Footprint, orientation and proportions; manifest `research/raw/stadiums/naip-manifest.json`. The SoFi canopy outline and Daytona track geometry were measured from NAIP. |
| Wikimedia Commons photos | Public domain, CC0, CC BY or CC BY-SA only (fair-use files excluded) | Visual reference for colors and signature features; manifest with URL, author and license per image in `research/raw/stadiums/art-references.json`. Image files are gitignored. |

**What CC BY-SA asks of us.** The venue art is modeled in three.js from measurements and observed colors; no pixels, textures or traced outlines are taken from any CC BY-SA photo. Using a photo only as a visual reference does not make the model a derivative of that photo, so the art carries no share-alike obligation. Two places do reproduce reference photos and therefore must credit the author and license, and if published, be offered under the same CC BY-SA terms: the review contact sheets in `docs/art-review/` (credits are printed under each image), and any future page that shows the reference photos themselves. If we ever copy pixels from a CC BY-SA photo into the art (a texture, a trace), that art would have to be released under CC BY-SA with attribution, so the pipeline avoids it.

## Path A bake-off models (Kaggle, not shipped unless picked)

| Model | License | Public-site use |
|---|---|---|
| stabilityai/stable-diffusion-xl-base-1.0 | CreativeML Open RAIL++-M | Yes (use-based restrictions only) |
| diffusers/controlnet-depth-sdxl-1.0 | CreativeML Open RAIL++-M | Yes |
| h94/IP-Adapter (sdxl_models) | Apache-2.0 | Yes |
| madebyollin/sdxl-vae-fp16-fix | MIT | Yes |
| black-forest-labs/FLUX.1-schnell | Apache-2.0 | Yes (not used) |
| black-forest-labs/FLUX.1-dev | FLUX.1 [dev] Non-Commercial | No, excluded |

Licenses read from each model's Hugging Face card metadata on 2026-11-07.
