# Saluki Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Carbondale, IL.

## Identifying features

1. football stadium, roof: open, capacity 15000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #aeb1aa, roof #7d9780, field #68876f (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 39% | `#68876f` |
| 29% | `#7d9780` |
| 18% | `#cccfca` |
| 10% | `#aeb1aa` |
| 5% | `#9b7c7d` |

## Generator description

Saluki Stadium: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
