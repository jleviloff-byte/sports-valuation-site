# Highmark Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Orchard Park, NY.

## Identifying features

1. football stadium, roof: open, capacity 60108 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #999d8e, roof #adb1a2, field #447146 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 54% | `#adb1a2` |
| 24% | `#999d8e` |
| 11% | `#447146` |
| 10% | `#717b6a` |
| 2% | `#294439` |

## Generator description

Highmark Stadium: new compact football stadium with a deep steep bowl, a large canopy roof over most seats, limestone and glass exterior, green field
