# Paladin Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Greenville, SC.

## Identifying features

1. football stadium, roof: open, capacity 16000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #b8b39f, roof #e1e1db, field #507060 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 32% | `#e1e1db` |
| 27% | `#507060` |
| 21% | `#85907d` |
| 17% | `#b8b39f` |
| 4% | `#443a60` |

## Generator description

Paladin Stadium: football stadium bowl with yellow seats, concrete concourse, green football field with white yard lines
