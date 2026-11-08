# LoanDepot Park

Type: ballpark. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Miami, FL.

## Identifying features

1. ballpark, roof: retractable, capacity 36742 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Dirt infield, grass outfield, foul lines; stands from foul pole to foul pole behind home plate, low bleachers beyond the outfield; never a symmetric bowl.
4. Home plate to center field bearing None degrees (ballpark-orientation.json)
5. Retractable roof shown open, panels parked over one end
6. Seats #ccd5d5, roof #e4e7e6 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 69% | `#e4e7e6` |
| 16% | `#ccd5d5` |
| 7% | `#64a0ad` |
| 5% | `#a9b9bb` |
| 4% | `#527f8c` |

## Generator description

loanDepot park: modern white ballpark with a retractable roof of three large panels sliding on tracks, glass wall in left field facing downtown, grass field
