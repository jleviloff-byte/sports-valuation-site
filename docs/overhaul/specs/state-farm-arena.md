# State Farm Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Atlanta, GA.

## Identifying features

1. arena, roof: dome, capacity 16888 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #8fabb3, roof #d7dcdb (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 69% | `#d7dcdb` |
| 13% | `#eff2f1` |
| 8% | `#8fabb3` |
| 6% | `#ccc7c2` |
| 3% | `#6c8187` |

## Generator description

State Farm Arena: enclosed indoor arena with a white roof and a glass and panel facade
