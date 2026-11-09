# Kinnick Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Iowa City, IA.

## Identifying features

1. football stadium, roof: open, capacity 69250 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #a3aa9c, roof #dbe1e1, field #657c5a (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 37% | `#dbe1e1` |
| 27% | `#c7cbc6` |
| 15% | `#657c5a` |
| 14% | `#a3aa9c` |
| 6% | `#43534a` |

## Generator description

Kinnick Stadium: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
