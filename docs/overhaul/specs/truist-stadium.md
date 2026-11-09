# Truist Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Greensboro, NC.

## Identifying features

1. football stadium, roof: open, capacity 21500 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #6c97ac, roof #cccfca, field #7a8964 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 31% | `#cccfca` |
| 26% | `#7a8964` |
| 24% | `#a7b5b4` |
| 11% | `#6c97ac` |
| 8% | `#344253` |

## Generator description

Truist Stadium: football stadium bowl with teal seats, concrete concourse, green football field with white yard lines
