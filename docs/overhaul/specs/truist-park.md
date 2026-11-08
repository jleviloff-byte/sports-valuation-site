# Truist Park

Type: ballpark. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Cumberland, GA.

## Identifying features

1. ballpark, roof: open, capacity 41108 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Dirt infield, grass outfield, foul lines; stands from foul pole to foul pole behind home plate, low bleachers beyond the outfield; never a symmetric bowl.
4. Home plate to center field bearing 160 degrees (ballpark-orientation.json)
5. Seats #485c69, roof #dbe1e1, field #84a081 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 32% | `#dbe1e1` |
| 22% | `#84a081` |
| 22% | `#b9b6ab` |
| 15% | `#485c69` |
| 9% | `#6f8285` |

## Generator description

Truist Park: suburban ballpark with a white steel canopy roof over the upper deck, brick and stone base, asymmetric outfield, grass field
