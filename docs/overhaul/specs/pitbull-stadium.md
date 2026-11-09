# Pitbull Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Miami, FL.

## Identifying features

1. football stadium, roof: open, capacity 20000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #4f6d7e, roof #b1b9b7, field #7b918c (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 30% | `#7b918c` |
| 21% | `#b1b9b7` |
| 18% | `#c7cbc6` |
| 17% | `#97a49d` |
| 14% | `#4f6d7e` |

## Generator description

Pitbull Stadium: football stadium bowl with blue seats, concrete concourse, green football field with white yard lines
