# SoFi Stadium: model spec

Low teardrop-shaped canopy on slender white columns over a bowl sunk below grade. The lake south-west of the stadium is landscape and is not modeled (no venue sprite includes surroundings).

Type rule (football): Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; the real bowl shape; press box and scoreboards in their real positions; suite rings and upper decks where they exist.

## Identifying features

| # | Feature | Reference | QA |
|---|---|---|---|
| 1 | Teardrop canopy: rounded on the west, sharp points at the north-east and south-east, following the aerial outline; the south-east tail sweeps down to the ground | NAIP aerial, #1, #24 | PASS |
| 2 | Silver panel grid over the bowl inside a wide opaque white band | NAIP aerial, #1 | PASS |
| 3 | Canopy is light gray, translucent, with a visible panel grid | #1, #24 | PASS |
| 4 | Canopy rests on slender white columns; the sides are open (no walls) | #7, #24 | PASS |
| 5 | Low profile: the bowl is sunk below grade, so the stadium reads low from outside | #7, #24 | PASS |
| 6 | Curved white facade buildings tucked under the canopy edge | #7, #24 | PASS |
| 7 | Field: regulation football field under the canopy (field color not sampled: not visible in any reference) | none | PASS |

## Colors (sampled from the references)

| Material | Color | Sampled from |
|---|---|---|
| roof | `#c4bfb4` | #1 |
| roof (aerial) | `#96a9ac` | NAIP aerial |
| facade | `#9aa2a8` | #7 |
| lake | `#6c726d` | #7 |
| columns | `#8b8984` | #7 |

Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.

## References

| # | File | License | Author |
|---|---|---|---|
| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/sofi-stadium.jpg) | Public domain | USGS |
| 1 | [Aerial view of SoFi Stadium (July 2022).jpg](https://commons.wikimedia.org/wiki/File:Aerial_view_of_SoFi_Stadium_(July_2022).jpg) | CC0 | Benoît Prieur |
| 24 | [2022 04 19 ind-den-lax 149z (52342564248).jpg](https://commons.wikimedia.org/wiki/File:2022_04_19_ind-den-lax_149z_(52342564248).jpg) | CC BY 2.0 | Doc Searls |
| 7 | [SoFi Stadium 2023.jpg](https://commons.wikimedia.org/wiki/File:SoFi_Stadium_2023.jpg) | CC BY-SA 4.0 | Troutfarm27 |
