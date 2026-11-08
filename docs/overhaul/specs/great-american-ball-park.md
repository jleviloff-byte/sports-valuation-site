# Great American Ball Park

Type: ballpark. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Cincinnati, OH.

## Identifying features

1. ballpark, roof: open, capacity 43500 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Dirt infield, grass outfield, foul lines; stands from foul pole to foul pole behind home plate, low bleachers beyond the outfield; never a symmetric bowl.
4. Home plate to center field bearing 120 degrees (ballpark-orientation.json)
5. Seats #51636a, roof #868a89, field #617373 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 40% | `#617373` |
| 22% | `#868a89` |
| 16% | `#a4aba9` |
| 12% | `#51636a` |
| 10% | `#d7deda` |

## Generator description

Great American Ball Park: riverfront ballpark with a gap in the stands behind third base, two smokestacks on the center field batter's eye, white steel and brick, grass field
