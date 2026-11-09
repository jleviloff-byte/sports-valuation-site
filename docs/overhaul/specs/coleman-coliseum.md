# Coleman Coliseum

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Tuscaloosa, AL.

## Identifying features

1. arena, roof: dome, capacity 15383 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #d3d9cd, roof #edefec, field #7e9390 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 78% | `#edefec` |
| 14% | `#d3d9cd` |
| 3% | `#7e9390` |
| 3% | `#66767c` |
| 2% | `#aeb8af` |

## Generator description

Coleman Coliseum: enclosed indoor arena with a white roof and a glass and panel facade
