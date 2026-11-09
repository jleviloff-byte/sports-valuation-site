# Michie Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: West Point, NY.

## Identifying features

1. football stadium, roof: open, capacity 35647 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #8c9690, roof #c7cbce, field #6c8470 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 35% | `#c7cbce` |
| 27% | `#b2b7ba` |
| 25% | `#6c8470` |
| 10% | `#8c9690` |
| 4% | `#545662` |

## Generator description

Michie Stadium: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
