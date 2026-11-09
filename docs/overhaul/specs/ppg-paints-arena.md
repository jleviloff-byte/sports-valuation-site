# PPG Paints Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Pittsburgh, PA.

## Identifying features

1. arena, roof: dome, capacity 18187 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #e0e4e1, roof #e0e4e1 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 82% | `#e0e4e1` |
| 6% | `#b7b8b0` |
| 5% | `#2e3d40` |
| 4% | `#949790` |
| 3% | `#636a6a` |

## Generator description

PPG Paints Arena: enclosed indoor arena with a white roof and a glass and panel facade
