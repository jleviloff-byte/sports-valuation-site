# Kidd Brewer Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Boone, NC.

## Identifying features

1. football stadium, roof: open, capacity 40168 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #384f65, roof #ced3cb, field #95ae80 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 34% | `#95ae80` |
| 28% | `#ced3cb` |
| 13% | `#1c263e` |
| 13% | `#384f65` |
| 12% | `#70817d` |

## Generator description

Kidd Brewer Stadium: football stadium bowl with blue seats, concrete concourse, green football field with white yard lines
