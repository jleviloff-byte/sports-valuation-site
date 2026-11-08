# Michigan Stadium: model spec

Closed single-tier bowl dug into the ground, field running north-south, brick-and-glass towers on both sidelines, video boards on columns at both ends.

Type rule (football): Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; the real bowl shape; press box and scoreboards in their real positions; suite rings and upper decks where they exist.

## Identifying features

| # | Feature | Reference | QA |
|---|---|---|---|
| 1 | Closed single-tier bowl, near-rectangular with rounded corners, no upper deck | NAIP aerial, #1 | PASS |
| 2 | Field sunk below grade: the rim sits only a few meters above the surrounding ground | #1 | PASS |
| 3 | Regulation field (120 x 53.3 yd) running north-south, end zones and yard lines, stands parallel to the sidelines | NAIP aerial, #5 | PASS |
| 4 | West sideline: long brick-and-glass press box and suite tower rising well above the rim | NAIP aerial, #1 | PASS |
| 5 | East sideline: second brick-and-glass suite tower, slightly lower | NAIP aerial, #1 | PASS |
| 6 | Video boards above both end-zone rims, raised on white columns; back faces plain navy (the Block M is a logo and is left off) | #1, #5, #6 | PASS |
| 7 | Blue-gray bench seating over the whole bowl | #1 | PASS |
| 8 | Blue band along the top of the bowl wall | #1 | PASS |
| 9 | Dark navy end zones with a maize lettering band, drawn as a plain stripe | NAIP aerial, #5 | PASS |
| 10 | Brick on the tower ends and the entry buildings at grade | #1 | PASS |

## Colors (sampled from the references)

| Material | Color | Sampled from |
|---|---|---|
| seats | `#737e91` | #1 |
| field | `#3d5245` | #5 |
| facade brick | `#876865` | #1 |
| fascia navy | `#7082a2` | #1 |
| concourse roof | `#cac2ba` | #1 |
| field surround | `#947071` | #1 |

Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.

## References

| # | File | License | Author |
|---|---|---|---|
| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/michigan-stadium.jpg) | Public domain | USGS |
| 1 | [Michigan Stadium Aerial.jpg](https://commons.wikimedia.org/wiki/File:Michigan_Stadium_Aerial.jpg) | CC BY-SA 4.0 | Lectrician2 |
| 5 | [Michigan Stadium with Video Scoreboard.jpg](https://commons.wikimedia.org/wiki/File:Michigan_Stadium_with_Video_Scoreboard.jpg) | CC BY-SA 4.0 | GoBlue9 |
| 6 | [OSU vs. UM 2529 (49152548858).jpg](https://commons.wikimedia.org/wiki/File:OSU_vs._UM_2529_(49152548858).jpg) | CC BY 2.0 | Maize &amp; Blue Nation |
