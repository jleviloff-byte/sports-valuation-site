# UBS Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Elmont, NY.

## Identifying features

1. arena, roof: dome, capacity 17255 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #3a413c, roof #afb2ab, field #62784f (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 65% | `#afb2ab` |
| 10% | `#4c5c46` |
| 9% | `#62784f` |
| 9% | `#3a413c` |
| 7% | `#9da096` |

## Generator description

UBS Arena: enclosed indoor arena with a light gray roof and a glass and panel facade
