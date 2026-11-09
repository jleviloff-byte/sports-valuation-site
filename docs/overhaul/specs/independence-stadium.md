# Independence Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Shreveport, LA.

## Identifying features

1. football stadium, roof: open, capacity 50000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #7e8f8f, roof #d9d9d9, field #4f716a (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 31% | `#d9d9d9` |
| 25% | `#4f716a` |
| 17% | `#c8c7c6` |
| 14% | `#afafaf` |
| 13% | `#7e8f8f` |

## Generator description

Independence Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
