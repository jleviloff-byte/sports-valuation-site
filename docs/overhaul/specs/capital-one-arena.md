# Capital One Arena

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Washington, DC.

## Identifying features

1. arena, roof: dome, capacity 20356 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #f1f4f6, roof #f1f4f6 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 80% | `#f1f4f6` |
| 6% | `#9da098` |
| 6% | `#717876` |
| 5% | `#3f444a` |
| 4% | `#cbcfcc` |

## Generator description

Capital One Arena: enclosed indoor arena with a white roof and a glass and panel facade
