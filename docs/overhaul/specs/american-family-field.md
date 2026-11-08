# American Family Field

Type: ballpark. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Milwaukee, WI.

## Identifying features

1. ballpark, roof: retractable, capacity 41900 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Dirt infield, grass outfield, foul lines; stands from foul pole to foul pole behind home plate, low bleachers beyond the outfield; never a symmetric bowl.
4. Home plate to center field bearing 130 degrees (ballpark-orientation.json)
5. Retractable roof shown open, panels parked over one end
6. Seats #434652, roof #c1c3bc, field #6e7c6e (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 42% | `#c1c3bc` |
| 17% | `#acaba3` |
| 15% | `#434652` |
| 13% | `#6e7c6e` |
| 12% | `#948d89` |

## Generator description

American Family Field: ballpark with a fan-shaped retractable roof of curved steel panels pivoting over the field, brick base, grass field
