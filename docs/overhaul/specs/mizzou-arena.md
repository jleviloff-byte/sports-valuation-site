# Mizzou Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Columbia, MO.

## Identifying features

1. arena, roof: dome, capacity 15061 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #dcdfd4, roof #ccd3cf (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 55% | `#ccd3cf` |
| 27% | `#dcdfd4` |
| 16% | `#c3c7c4` |
| 2% | `#979f9d` |
| 1% | `#5e6874` |

## Generator description

Mizzou Arena: enclosed indoor arena with a white roof and a glass and panel facade
