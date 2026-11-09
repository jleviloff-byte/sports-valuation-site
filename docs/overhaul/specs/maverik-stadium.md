# Maverik Stadium

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Logan, UT.

## Identifying features

1. football stadium, roof: open, capacity 25513 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #868c87, roof #d1d4d0, field #5c6a5e (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 32% | `#d1d4d0` |
| 21% | `#3f4649` |
| 21% | `#5c6a5e` |
| 14% | `#afb5af` |
| 11% | `#868c87` |

## Generator description

Maverik Stadium: football stadium bowl with gray seats, concrete concourse, green football field with white yard lines
