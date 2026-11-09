# Climate Pledge Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Seattle, WA.

## Identifying features

1. arena, roof: dome, capacity 17100 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #e1ded9, roof #d3d0cb, field #2b3e3f (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 38% | `#d3d0cb` |
| 35% | `#e1ded9` |
| 16% | `#b5b8b4` |
| 7% | `#6c7c76` |
| 4% | `#2b3e3f` |

## Generator description

Climate Pledge Arena: enclosed indoor arena with a white roof and a glass and panel facade
