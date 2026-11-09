# Yulman Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: New Orleans, LA.

## Identifying features

1. football stadium, roof: open, capacity 30000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #4f666c, roof #c2c8c6, field #677d82 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 34% | `#c2c8c6` |
| 33% | `#a6b5b5` |
| 18% | `#4f666c` |
| 8% | `#677d82` |
| 7% | `#8b9a93` |

## Generator description

Yulman Stadium: football stadium bowl with teal seats, concrete concourse, green football field with white yard lines
