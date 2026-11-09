# Canvas Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Fort Collins, CO.

## Identifying features

1. football stadium, roof: open, capacity 41000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #7f8986, roof #d3d2d0, field #526558 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 38% | `#d3d2d0` |
| 20% | `#526558` |
| 20% | `#eaeae8` |
| 13% | `#adb0ab` |
| 11% | `#7f8986` |

## Generator description

Canvas Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
