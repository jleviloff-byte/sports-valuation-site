# Fenway Park: model spec

Small, irregular ballpark squeezed into a city block: the Green Monster in left, the triangle in deep center, the short right-field corner at the Pesky Pole.

Type rule (baseball): Dirt infield, grass outfield, foul lines; outfield wall at the real asymmetric shape and height; stands wrap foul pole to foul pole behind home plate; never a symmetric bowl.

## Identifying features

| # | Feature | Reference | QA |
|---|---|---|---|
| 1 | Green Monster: tall green wall (37 ft, about 11 m) along the whole left field, the tallest wall in the park | #9, #11, #16 | PASS |
| 2 | Monster seats on top of the wall and the manual scoreboard set into its base (shapes only) | #9 | PASS |
| 3 | The triangle: the outfield wall kinks out to its deepest point in right-center | NAIP aerial, #9 | PASS |
| 4 | Pesky Pole: very short right-field foul line with the low wall curving out from the corner | NAIP aerial, #16 | PASS |
| 5 | Stands wrap from the left-field foul pole around home plate to the right-field corner, plus bleachers in right and center; not a symmetric bowl | NAIP aerial, #11 | PASS |
| 6 | Red seats in the grandstand and boxes, green seats in the bleachers | #16, #9 | PASS |
| 7 | Dark green steel structure and roof boxes over the grandstand | #11, #9 | PASS |
| 8 | Lattice light towers standing on the grandstand roof | #9, #16 | PASS |
| 9 | Dirt infield and base paths, striped grass, foul lines | #9 | PASS |
| 10 | Red-brick exterior at street level | #6 | PASS |

## Colors (sampled from the references)

| Material | Color | Sampled from |
|---|---|---|
| seats grandstand | `#714755` | #16 |
| seats bleachers | `#44514e` | #9 |
| seats grandstand (aerial, sun) | `#a08d7c` | NAIP aerial |
| seats grandstand (overcast) | `#572d24` | #9 |
| field | `#657326` | #9 |
| infield dirt | `#a65931` | #9 |
| green monster | `#5e7b6a` | #9 |
| structure green | `#556c6d` | #11 |
| facade brick | `#6b554d` | #6 |

Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.

## References

| # | File | License | Author |
|---|---|---|---|
| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/fenway-park.jpg) | Public domain | USGS |
| 11 | [Fenway Park seen from Prudential Skywalk.jpg](https://commons.wikimedia.org/wiki/File:Fenway_Park_seen_from_Prudential_Skywalk.jpg) | CC BY-SA 3.0 | Melikamp |
| 16 | [Fenway Park 20-April-2021.jpg](https://commons.wikimedia.org/wiki/File:Fenway_Park_20-April-2021.jpg) | CC BY-SA 4.0 | Dmoore5556 |
| 9 | [Fenway Park (7186365478).jpg](https://commons.wikimedia.org/wiki/File:Fenway_Park_(7186365478).jpg) | CC BY-SA 2.0 | InSapphoWeTrust from Los Angeles, California, USA |
| 6 | [Fenway Park exterior, April 12, 2018 (39613672440).jpg](https://commons.wikimedia.org/wiki/File:Fenway_Park_exterior,_April_12,_2018_(39613672440).jpg) | CC BY 2.0 | Daniel Hartwig from San Jose, CA, USA |
