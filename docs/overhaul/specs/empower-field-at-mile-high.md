# Empower Field at Mile High

Type: football stadium. Pipeline path: generic fallback model (no usable oblique photo on Commons). City: Denver, CO.

## Identifying features

1. football stadium, roof: open, capacity 76125 (data/stadiums.json)
2. Footprint and orientation from the OSM venue polygon (capped by capacity where OSM takes the whole block)
3. Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; bowl shape from the OSM footprint.
4. Seats #3a3d49, roof #605c65, field #436747 (NAIP aerial)

## Colors

Sampled from the USGS NAIP aerial (public domain) inside the OSM footprint (k-means, largest clusters first):

| Share | Hex |
|---|---|
| 26% | `#605c65` |
| 24% | `#bbb8b3` |
| 20% | `#938b89` |
| 17% | `#3a3d49` |
| 14% | `#436747` |

## Generator description

Empower Field at Mile High: large bowl with a wavy curved upper rim, tall upper decks on both sidelines, a big scoreboard and white horse statue at the south end, green field
