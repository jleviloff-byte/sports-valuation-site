# Renasant Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Hattiesburg, MS.

## Identifying features

1. football stadium, roof: open, capacity 36000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #5b7a86, roof #dddfd9, field #7a9a95 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 30% | `#dddfd9` |
| 27% | `#cac9bd` |
| 19% | `#7a9a95` |
| 13% | `#5b7a86` |
| 12% | `#a3b2a3` |

## Generator description

Renasant Stadium: football stadium bowl with teal seats, concrete concourse, green football field with white yard lines
