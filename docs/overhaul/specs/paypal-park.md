# PayPal Park

Type: soccer stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: San Jose, CA.

## Identifying features

1. soccer stadium, roof: open, capacity 18000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Rectangular pitch with steep stands close to the touchlines.
4. Seats #2d4751, roof #90a1a8, field #486158 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 39% | `#486158` |
| 29% | `#90a1a8` |
| 12% | `#aeb4b5` |
| 11% | `#2d4751` |
| 9% | `#727f81` |

## Generator description

PayPal Park: soccer stadium bowl with teal seats, concrete concourse, green soccer pitch
