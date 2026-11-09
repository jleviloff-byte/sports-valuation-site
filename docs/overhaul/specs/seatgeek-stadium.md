# SeatGeek Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Bridgeview, IL.

## Identifying features

1. football stadium, roof: open, capacity 20000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #5d656a, roof #dadcd9, field #6c8167 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 43% | `#dadcd9` |
| 18% | `#6c8167` |
| 18% | `#44494d` |
| 12% | `#5d656a` |
| 9% | `#acafb1` |

## Generator description

SeatGeek Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
