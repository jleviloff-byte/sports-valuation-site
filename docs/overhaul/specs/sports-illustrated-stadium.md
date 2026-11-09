# Sports Illustrated Stadium

Type: soccer stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Harrison, NJ.

## Identifying features

1. soccer stadium, roof: open, capacity 25000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Rectangular pitch with steep stands close to the touchlines.
4. Seats #bec4ba, roof #bec4ba, field #485650 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 43% | `#bec4ba` |
| 23% | `#485650` |
| 17% | `#d2d7d0` |
| 12% | `#384545` |
| 4% | `#90978d` |

## Generator description

Sports Illustrated Stadium: soccer stadium bowl with light gray seats, concrete concourse, green soccer pitch
