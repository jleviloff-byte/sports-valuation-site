# Huskie Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: DeKalb, IL.

## Identifying features

1. football stadium, roof: open, capacity 28211 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #818176, roof #d0d4d5, field #87a384 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 37% | `#d0d4d5` |
| 22% | `#87a384` |
| 15% | `#4d4e58` |
| 13% | `#b1b3ab` |
| 13% | `#818176` |

## Generator description

Huskie Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
