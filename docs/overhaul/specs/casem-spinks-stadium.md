# Casem-Spinks Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Lorman, MS.

## Identifying features

1. football stadium, roof: open, capacity 22500 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #b6b292, roof #b6b292, field #526b64 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 37% | `#919b73` |
| 23% | `#b6b292` |
| 23% | `#cbcabc` |
| 11% | `#68837d` |
| 6% | `#526b64` |

## Generator description

Casem-Spinks Stadium: football stadium bowl with yellow seats, concrete concourse, green football field with white yard lines
