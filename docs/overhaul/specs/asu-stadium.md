# ASU Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Montgomery, AL.

## Identifying features

1. football stadium, roof: open, capacity 26500 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #b4bbab, roof #eceee5, field #8ca496 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 44% | `#eceee5` |
| 20% | `#8ca496` |
| 16% | `#b4bbab` |
| 14% | `#d9dbcf` |
| 6% | `#697f8a` |

## Generator description

ASU Stadium: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
