# Fargodome

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Fargo, ND.

## Identifying features

1. football stadium, roof: dome, capacity 18700 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #485167, roof #c6cccc (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 49% | `#c6cccc` |
| 21% | `#485167` |
| 21% | `#636778` |
| 6% | `#96979f` |
| 4% | `#0f0925` |

## Generator description

Fargodome: enclosed football stadium with a white roof and a glass and panel facade
