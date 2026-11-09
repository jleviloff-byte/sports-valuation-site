# Mortgage Matchup Center

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Phoenix, AZ.

## Identifying features

1. arena, roof: dome, capacity 17071 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #e2e3e1, roof #ccd3d3, field #424b3b (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 44% | `#ccd3d3` |
| 32% | `#e2e3e1` |
| 10% | `#aeb2af` |
| 8% | `#424b3b` |
| 6% | `#7b7d71` |

## Generator description

Mortgage Matchup Center: enclosed indoor arena with a white roof and a glass and panel facade
