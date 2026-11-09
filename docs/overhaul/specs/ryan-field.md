# Ryan Field

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Evanston, IL.

## Identifying features

1. football stadium, roof: open, capacity 35000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #a1a69f, roof #d7dcdf, field #4b5c47 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 42% | `#d7dcdf` |
| 24% | `#4b5c47` |
| 16% | `#c3c3c3` |
| 10% | `#a1a69f` |
| 8% | `#717e63` |

## Generator description

Ryan Field: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
