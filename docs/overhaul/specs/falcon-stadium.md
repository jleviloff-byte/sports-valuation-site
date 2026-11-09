# Falcon Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: USAF Academy, CO.

## Identifying features

1. football stadium, roof: open, capacity 39441 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #cecdcb, roof #cecdcb, field #456a46 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 62% | `#cecdcb` |
| 15% | `#29412e` |
| 13% | `#456a46` |
| 7% | `#989c99` |
| 2% | `#354393` |

## Generator description

Falcon Stadium: football stadium bowl with white seats, concrete concourse, green football field with white yard lines
