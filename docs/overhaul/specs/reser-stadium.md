# Reser Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Corvallis, OR.

## Identifying features

1. football stadium, roof: open, capacity 35548 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #b0b1a7, roof #d0d5d1, field #5d7262 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 25% | `#5d7262` |
| 22% | `#d0d5d1` |
| 22% | `#b0b1a7` |
| 20% | `#8f918b` |
| 12% | `#2e333e` |

## Generator description

Reser Stadium: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
