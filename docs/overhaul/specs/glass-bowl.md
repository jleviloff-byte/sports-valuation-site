# Glass Bowl

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Toledo, OH.

## Identifying features

1. football stadium, roof: open, capacity 26038 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #b5ab9c, roof #545b56 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 32% | `#545b56` |
| 21% | `#b5ab9c` |
| 18% | `#918c82` |
| 18% | `#72726c` |
| 12% | `#383f43` |

## Generator description

Glass Bowl: football stadium bowl with orange seats, concrete concourse, green football field with white yard lines
