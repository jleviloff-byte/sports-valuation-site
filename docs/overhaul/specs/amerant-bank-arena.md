# Amerant Bank Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Sunrise, FL.

## Identifying features

1. arena, roof: dome, capacity 19250 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #d9dbd4, roof #e5e8e3, field #7c9599 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 70% | `#e5e8e3` |
| 20% | `#d9dbd4` |
| 4% | `#7c9599` |
| 3% | `#57747e` |
| 3% | `#b2bab4` |

## Generator description

Amerant Bank Arena: enclosed indoor arena with a white roof and a glass and panel facade
