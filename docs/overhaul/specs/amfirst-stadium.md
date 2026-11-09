# AmFirst Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Jacksonville, AL.

## Identifying features

1. football stadium, roof: open, capacity 22500 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #6081a1, roof #eaebe9, field #9fb5a8 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 41% | `#eaebe9` |
| 29% | `#9fb5a8` |
| 13% | `#c7cbc6` |
| 12% | `#6081a1` |
| 5% | `#445c79` |

## Generator description

AmFirst Stadium: football stadium bowl with blue seats, concrete concourse, green football field with white yard lines
