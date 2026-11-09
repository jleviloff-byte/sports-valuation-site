# Benchmark International Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Tampa, FL.

## Identifying features

1. arena, roof: dome, capacity 19092 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #b3a09b, roof #dfe3e0 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 63% | `#dfe3e0` |
| 17% | `#d1d4d0` |
| 10% | `#b3a09b` |
| 7% | `#577180` |
| 3% | `#3c4f5e` |

## Generator description

Benchmark International Arena: enclosed indoor arena with a white roof and a glass and panel facade
