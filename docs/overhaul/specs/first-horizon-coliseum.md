# First Horizon Coliseum

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: None, NC.

## Identifying features

1. arena, roof: dome, capacity 22000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #2e4156, roof #ddded9, field #5b6e6f (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 42% | `#ddded9` |
| 26% | `#aeb5b1` |
| 14% | `#2e4156` |
| 11% | `#8e9895` |
| 8% | `#5b6e6f` |

## Generator description

First Horizon Coliseum: enclosed indoor arena with a white roof and a glass and panel facade
