# Prototype: live photorealistic 3D in the venue card (preview only)

Josh, 2026-11-10. Card hero for 5 venues (Fenway, Michigan Stadium, SoFi, Kyle
Field, Daytona) streams Google's Photorealistic 3D Tiles (Map Tiles API) with
CesiumJS 1.123 (Google-documented renderer), at a 3/4 aerial angle (pitch -38
degrees) with a slow orbit framed on the whole venue. Map icons unchanged.
Code: `src/components/stadiums/Tiles3DHero.jsx`; measurement:
`scripts/stadiums/perf/card-open.mjs`.

## Terms followed (developers.google.com/maps/documentation/tile/policies)
- Live streaming only. No screenshots, no caching, prefetching, storing or exporting tiles; nothing derived (no traced models). Our QA never screenshots the 3D view.
- Attribution: Cesium's on-screen credits show the Google Maps logo and the aggregated per-tile data attributions (`showCreditsOnScreen: true`); no other logo overlaps them (Cesium ion logo off: no ion token).
- The view is map visualization only (no image analysis or extraction).

## Cost guard
- Billing: SKU "Map Tiles API: Photorealistic 3D Tiles" (Enterprise). Billable unit: the root tileset request; one root request starts a session of up to 3 hours of tile streaming. Free usage cap **1,000 per month**; then $6.00 per 1,000.
- The card makes **one root request per card open**. A per-browser guard allows at most 20 per day.
- **Set in Cloud Console:** Google Maps Platform > Quotas > Map Tiles API > the per-day quota for 3D Tiles root tileset requests (default 10,000 per day; Google calls it "root tileset queries per day") > Edit > **30 per day**. 30 x 31 = 930, below the 1,000 free monthly cap. Optionally lower the per-minute root quota too.
- Also: restrict the key to the Map Tiles API and to HTTP referrers `*.vercel.app/*` (preview); add a budget alert at $1.
- Fallback: no key, quota refused (403/429), WebGL missing, script load failure, or nothing loaded after 15 s: the card shows our art, or the footprint with "Illustration in progress".

## Enabling it (preview only)
Vite inlines env vars at build time, so the key must be in the Vercel project's
**Preview** environment (not Production): `VITE_GOOGLE_MAPS_API_KEY` and
`VITE_TILES3D_PREVIEW=1`. Without both, the 3D code is removed from the build.
