# Nu Stadium

Type: soccer stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Miami, FL.

## Identifying features

1. soccer stadium, roof: open, capacity 26700 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Rectangular pitch with steep stands close to the touchlines.
4. Seats #313f3e, roof #a6af8d, field #8da26e (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 56% | `#8da26e` |
| 20% | `#a6af8d` |
| 15% | `#313f3e` |
| 5% | `#63795a` |
| 4% | `#14293b` |

## Generator description

Nu Stadium: soccer stadium bowl with teal seats, concrete concourse, green soccer pitch
