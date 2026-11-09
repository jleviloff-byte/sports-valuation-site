# Rocket Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Cleveland, OH.

## Identifying features

1. arena, roof: dome, capacity 19432 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #46444d, roof #b8b7b5 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 40% | `#b8b7b5` |
| 25% | `#d6d4d1` |
| 14% | `#46444d` |
| 12% | `#8e8f8b` |
| 8% | `#686668` |

## Generator description

Rocket Arena: enclosed indoor arena with a light gray roof and a glass and panel facade
