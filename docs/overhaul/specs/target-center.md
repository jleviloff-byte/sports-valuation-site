# Target Center

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Minneapolis, MN.

## Identifying features

1. arena, roof: dome, capacity 18798 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #494451, roof #aca99c, field #89946e (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 60% | `#89946e` |
| 14% | `#aca99c` |
| 12% | `#494451` |
| 10% | `#818082` |
| 4% | `#cacbc9` |

## Generator description

Target Center: enclosed indoor arena with a light gray roof and a glass and panel facade
