# Waldo Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Kalamazoo, MI.

## Identifying features

1. football stadium, roof: open, capacity 30200 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #6e7d83, roof #d4d5d1, field #869890 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 44% | `#d4d5d1` |
| 28% | `#869890` |
| 14% | `#a4b1b4` |
| 10% | `#6e7d83` |
| 3% | `#4f5e6c` |

## Generator description

Waldo Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
