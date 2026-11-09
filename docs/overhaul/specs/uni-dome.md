# UNI-Dome

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Cedar Falls, IA.

## Identifying features

1. football stadium, roof: dome, capacity 17190 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #7a9bb4, roof #edf2f5, field #435757 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 49% | `#edf2f5` |
| 22% | `#d9dee3` |
| 16% | `#b8c6d3` |
| 11% | `#7a9bb4` |
| 3% | `#435757` |

## Generator description

UNI-Dome: enclosed football stadium with a white roof and a glass and panel facade
