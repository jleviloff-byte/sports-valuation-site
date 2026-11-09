# Nippert Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Cincinnati, OH.

## Identifying features

1. football stadium, roof: open, capacity 38088 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #445c67, roof #818183, field #587074 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 33% | `#587074` |
| 22% | `#818183` |
| 20% | `#8b9a9a` |
| 16% | `#445c67` |
| 9% | `#a6b1b0` |

## Generator description

Nippert Stadium: football stadium bowl with teal seats, concrete concourse, green football field with white yard lines
