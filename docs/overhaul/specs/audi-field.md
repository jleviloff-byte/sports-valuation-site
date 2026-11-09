# Audi Field

Type: soccer stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Washington, DC.

## Identifying features

1. soccer stadium, roof: open, capacity 20000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Rectangular pitch with steep stands close to the touchlines.
4. Seats #afbbba, roof #afbbba, field #4e605a (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 41% | `#4e605a` |
| 20% | `#afbbba` |
| 16% | `#dfe7e5` |
| 13% | `#808888` |
| 10% | `#222d3c` |

## Generator description

Audi Field: soccer stadium bowl with light gray seats, concrete concourse, green soccer pitch
