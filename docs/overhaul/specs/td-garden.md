# TD Garden

Type: arena. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Boston, MA.

## Identifying features

1. arena, roof: dome, capacity 19156 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Enclosed drum on the OSM footprint: glass base, clad walls, low roof.
4. Seats #d1d8da, roof #d1d8da (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 75% | `#d1d8da` |
| 7% | `#344240` |
| 7% | `#929a9a` |
| 6% | `#b8bebe` |
| 5% | `#596562` |

## Generator description

TD Garden: box-shaped arena built above a rail station, glass and metal facade, flat roof, a tall office tower beside it
