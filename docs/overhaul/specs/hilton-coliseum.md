# Hilton Coliseum

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Ames, IA.

## Identifying features

1. arena, roof: dome, capacity 15000 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #e1e5e2, roof #e1e5e2, field #5c7a67 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 87% | `#e1e5e2` |
| 6% | `#c7cbc6` |
| 3% | `#5c7a67` |
| 2% | `#385147` |
| 2% | `#a6a896` |

## Generator description

Hilton Coliseum: enclosed indoor arena with a white roof and a glass and panel facade
