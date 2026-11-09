# Protective Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Birmingham, AL.

## Identifying features

1. football stadium, roof: open, capacity 47100 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #b2b5c4, roof #dfe3e0, field #87a3a6 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 38% | `#dfe3e0` |
| 25% | `#cad1d4` |
| 18% | `#87a3a6` |
| 13% | `#b2b5c4` |
| 5% | `#7792b4` |

## Generator description

Protective Stadium: football stadium bowl with blue seats, concrete concourse, green football field with white yard lines
