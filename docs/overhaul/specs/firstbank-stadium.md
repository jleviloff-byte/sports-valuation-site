# FirstBank Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Nashville, TN.

## Identifying features

1. football stadium, roof: open, capacity 35000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #374a55, roof #babebb, field #57796c (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 30% | `#babebb` |
| 28% | `#57796c` |
| 21% | `#a4acac` |
| 11% | `#374a55` |
| 10% | `#7f9491` |

## Generator description


