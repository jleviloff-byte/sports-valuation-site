# Yager Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Oxford, OH.

## Identifying features

1. football stadium, roof: open, capacity 24286 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #4f686d, roof #a6b0ae, field #64797c (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 24% | `#a6b0ae` |
| 22% | `#4f686d` |
| 19% | `#bac4c2` |
| 19% | `#64797c` |
| 15% | `#899493` |

## Generator description

Yager Stadium: football stadium bowl with teal seats, concrete concourse, green football field with white yard lines
