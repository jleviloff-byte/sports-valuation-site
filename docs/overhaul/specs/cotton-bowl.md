# Cotton Bowl

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Dallas, TX.

## Identifying features

1. football stadium, roof: open, capacity 92100 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #acaaa0, roof #bbbcb4 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 40% | `#bbbcb4` |
| 40% | `#c4c9c5` |
| 12% | `#acaaa0` |
| 4% | `#485164` |
| 3% | `#83878a` |

## Generator description

Cotton Bowl: football stadium bowl with light gray seats, concrete concourse, green football field with white yard lines
