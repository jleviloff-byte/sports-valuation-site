# MVP Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Albany, NY.

## Identifying features

1. arena, roof: dome, capacity 15229 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #9f9fa3, roof #dee0e0 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 75% | `#dee0e0` |
| 11% | `#9f9fa3` |
| 8% | `#c3c3c3` |
| 4% | `#484864` |
| 3% | `#737485` |

## Generator description

MVP Arena: enclosed indoor arena with a white roof and a glass and panel facade
