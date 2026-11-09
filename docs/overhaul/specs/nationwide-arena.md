# Nationwide Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Columbus, OH.

## Identifying features

1. arena, roof: dome, capacity 18500 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #4f6572, roof #d6d7d5 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 64% | `#d6d7d5` |
| 14% | `#c3c6c1` |
| 10% | `#4f6572` |
| 9% | `#677a83` |
| 3% | `#929d9c` |

## Generator description

Nationwide Arena: enclosed indoor arena with a white roof and a glass and panel facade
