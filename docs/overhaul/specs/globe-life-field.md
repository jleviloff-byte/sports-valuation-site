# Globe Life Field

Type: ballpark. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Arlington, TX.

## Identifying features

1. ballpark, roof: retractable, capacity 40300 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Dirt infield, grass outfield, foul lines; stands from foul pole to foul pole behind home plate, low bleachers beyond the outfield; never a symmetric bowl.
4. Home plate to center field bearing None degrees (ballpark-orientation.json)
5. Retractable roof shown open, panels parked over one end
6. Seats #61657a, roof #d8d8d4 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 46% | `#d8d8d4` |
| 18% | `#f5f6f4` |
| 17% | `#61657a` |
| 14% | `#788296` |
| 4% | `#b4b3b1` |

## Generator description

Globe Life Field: very large climate-controlled ballpark under a vast arched retractable roof, brick and stone exterior, artificial grass field
