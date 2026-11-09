# Mackay Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Reno, NV.

## Identifying features

1. football stadium, roof: open, capacity 30000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #6a7477, roof #c1c4c3 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 32% | `#c1c4c3` |
| 24% | `#9ba0a2` |
| 22% | `#dce2e2` |
| 14% | `#6a7477` |
| 8% | `#454f5c` |

## Generator description

Mackay Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
