# Ball Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Denver, CO.

## Identifying features

1. arena, roof: dome, capacity 19520 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #8e928f, roof #d9dbd8 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 69% | `#d9dbd8` |
| 18% | `#8e928f` |
| 8% | `#babbb7` |
| 3% | `#646a6a` |
| 2% | `#32383d` |

## Generator description

Ball Arena: enclosed indoor arena with a white roof and a glass and panel facade
