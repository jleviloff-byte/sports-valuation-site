# Alamodome

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: San Antonio, TX.

## Identifying features

1. football stadium, roof: dome, capacity 64000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #cdccc8, roof #cdccc8 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 40% | `#cdccc8` |
| 31% | `#dad8d4` |
| 27% | `#c2c1bf` |
| 2% | `#a8a3a4` |
| 0% | `#6d6c79` |

## Generator description

Alamodome: enclosed football stadium with a white roof and a glass and panel facade
