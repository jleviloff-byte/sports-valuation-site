# TQL Stadium

Type: soccer stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Cincinnati, OH.

## Identifying features

1. soccer stadium, roof: open, capacity 26000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Rectangular pitch with steep stands close to the touchlines.
4. Seats #415c66, roof #daddd8, field #566c70 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 31% | `#daddd8` |
| 24% | `#566c70` |
| 20% | `#828f8e` |
| 16% | `#415c66` |
| 9% | `#aeb7b3` |

## Generator description

TQL Stadium: soccer stadium bowl with teal seats, concrete concourse, green soccer pitch
