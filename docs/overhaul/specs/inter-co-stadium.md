# Inter.co Stadium

Type: soccer stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Orlando, FL.

## Identifying features

1. soccer stadium, roof: open, capacity 25000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Rectangular pitch with steep stands close to the touchlines.
4. Seats #41566c, roof #bbc4c4, field #7a937b (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 32% | `#bbc4c4` |
| 26% | `#7a937b` |
| 20% | `#e1e3e3` |
| 14% | `#41566c` |
| 8% | `#98a6a7` |

## Generator description

Inter.co Stadium: soccer stadium bowl with blue seats, concrete concourse, green soccer pitch
