# Wrigley Field: model spec

Two-deck roofed grandstand from foul pole to foul pole, open outfield bleachers with the ivy wall below, hand-turned scoreboard in center field.

Type rule (baseball): Dirt infield, grass outfield, foul lines; outfield wall at the real asymmetric shape and height; stands wrap foul pole to foul pole behind home plate; never a symmetric bowl.

## Identifying features

| # | Feature | Reference | QA |
|---|---|---|---|
| 1 | Ivy-covered brick outfield wall, low, foul pole to foul pole | #8, #10 | PASS |
| 2 | Manual center-field scoreboard, dark green, wide, with a clock on top, standing on the back of the bleachers | #11 | PASS |
| 3 | Open, uncovered bleachers across the whole outfield | #8, #11 | PASS |
| 4 | Two-deck grandstand with a roof from left field around home plate to right field, light banks on the roof | #8, #10 | PASS |
| 5 | Video boards above the left-field and right-field bleachers (plain panels) | #8 | PASS |
| 6 | Dark green seats | #10 | PASS |
| 7 | Dirt infield, grass, foul lines; the outfield wall is not a symmetric arc | #8 | PASS |
| 8 | Red marquee over the home-plate entrance at the street corner (shape only, no text) | #m1 | PASS |
| 9 | Pale gray-beige exterior walls with green trim | #m1 | PASS |

## Colors (sampled from the references)

| Material | Color | Sampled from |
|---|---|---|
| seats | `#242e3a` | #10 |
| seats (lit) | `#202e2d` | #18 |
| field | `#6c822f` | #8 |
| infield dirt | `#a67353` | #8 |
| scoreboard | `#4a5e63` | #11 |
| roof | `#646969` | #8 |
| marquee | `#b61420` | #m1 |
| exterior | `#9e9d8f` | #m1 |

Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.

## References

| # | File | License | Author |
|---|---|---|---|
| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/wrigley-field.jpg) | Public domain | USGS |
| 8 | [Wrigley Field S.jpg](https://commons.wikimedia.org/wiki/File:Wrigley_Field_S.jpg) | CC BY-SA 4.0 | Sea Cow |
| 11 | [Philadelphia Phillies at Chicago Cubs (July 4, 2024) IMG 8553.jpg](https://commons.wikimedia.org/wiki/File:Philadelphia_Phillies_at_Chicago_Cubs_(July_4,_2024)_IMG_8553.jpg) | CC BY 4.0 | SecretName101 |
| 10 | [Wrigley Field after a game.jpg](https://commons.wikimedia.org/wiki/File:Wrigley_Field_after_a_game.jpg) | CC BY 4.0 | Keiteay |
| m1 | [Wrigley Field Marquee as of mid-2015.JPG](https://commons.wikimedia.org/wiki/File:Wrigley_Field_Marquee_as_of_mid-2015.JPG) | CC BY-SA 4.0 | see Commons page |
| 18 | [Nuveen sign at Wrigley Field, Chicago Cubs, 2017.jpg](https://commons.wikimedia.org/wiki/File:Nuveen_sign_at_Wrigley_Field,_Chicago_Cubs,_2017.jpg) | CC BY-SA 4.0 | Jholtgrewe |
