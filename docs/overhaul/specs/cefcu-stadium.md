# CEFCU Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: San Jose, CA.

## Identifying features

1. football stadium, roof: open, capacity 18203 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #385156, roof #b6b8b5, field #6f8273 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 29% | `#b6b8b5` |
| 27% | `#6f8273` |
| 24% | `#8f9088` |
| 12% | `#5e726a` |
| 9% | `#385156` |

## Generator description

CEFCU Stadium: football stadium bowl with teal seats, concrete concourse, green football field with white yard lines
