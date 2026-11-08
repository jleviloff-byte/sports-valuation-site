# Yulman Stadium: model spec

Compact bowl, field turned about 30 degrees east of north, main stand and press structure on the southeast sideline, stands wrapping both end zones.

Type rule (football): Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; the real bowl shape; press box and scoreboards in their real positions; suite rings and upper decks where they exist.

## Identifying features

| # | Feature | Reference | QA |
|---|---|---|---|
| 1 | Field axis about 30 degrees east of north (NNE to SSW) | NAIP aerial | PASS |
| 2 | Regulation field with sky-blue end zones and sky-blue bands along both sidelines | NAIP aerial, #10 | PASS |
| 3 | Main grandstand on the southeast sideline topped by a long gray metal-clad press and club structure | NAIP aerial, #5, #7 | PASS |
| 4 | Lower single-deck stand on the northwest sideline, parallel to the field | NAIP aerial, #10 | PASS |
| 5 | Seating wraps around both end zones (bowl is closed except at the corners) | NAIP aerial | PASS |
| 6 | Gray aluminum seating (no colored chairs) | NAIP aerial, #10 | PASS |
| 7 | Exterior: horizontal gray metal panels over a glass club level and a dark brick base | #5, #7 | PASS |
| 8 | Green lattice light towers with crossbars along the main-side exterior (color by eye: too thin to sample) | #5, #7 | PASS |

## Colors (sampled from the references)

| Material | Color | Sampled from |
|---|---|---|
| seats | `#4f4f4f` | #10 |
| field | `#36481a` | #10 |
| facade metal | `#565b68` | #5 |
| base brick | `#433230` | #5 |
| end zone and sideline bands | `#819b98` | NAIP aerial |
| sideline band (photo) | `#6e828e` | #10 |
| seats (aerial) | `#a2b5b8` | NAIP aerial |

Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.

## References

| # | File | License | Author |
|---|---|---|---|
| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/yulman-stadium.jpg) | Public domain | USGS |
| 10 | [Yulman Stadium Westfeldt.jpg](https://commons.wikimedia.org/wiki/File:Yulman_Stadium_Westfeldt.jpg) | CC BY-SA 4.0 | Bobster687 |
| 5 | [Yulman Stadium - Tulane Green Wave (55143965690).jpg](https://commons.wikimedia.org/wiki/File:Yulman_Stadium_-_Tulane_Green_Wave_(55143965690).jpg) | CC BY 4.0 | ajay_suresh |
| 7 | [Benson Field at Yulman Stadium (New Orleans).jpg](https://commons.wikimedia.org/wiki/File:Benson_Field_at_Yulman_Stadium_(New_Orleans).jpg) | CC BY-SA 4.0 | Spatms |
