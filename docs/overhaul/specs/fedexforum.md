# FedExForum

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Memphis, TN.

## Identifying features

1. arena, roof: dome, capacity 16667 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #babdc2, roof #e8e8e8 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 62% | `#e8e8e8` |
| 16% | `#babdc2` |
| 11% | `#d5d6d7` |
| 7% | `#a6a7af` |
| 4% | `#757a88` |

## Generator description

FedExForum: enclosed indoor arena with a white roof and a glass and panel facade
