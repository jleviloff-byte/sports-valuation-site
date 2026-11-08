# Daytona International Speedway: model spec

Front-stretch grandstand with checkered seats, the tri-oval, banked turns and pit road, framed on the main grandstand.

Type rule (racetrack): Banking, main grandstand, pit road.

## Identifying features

| # | Feature | Reference |
|---|---|---|
| 1 | Long multi-level grandstand along the front stretch | #17, #5, NAIP aerial |
| 2 | Black and white checkered seat pattern | #17 |
| 3 | Glass suite level near the top of the grandstand with a light fascia band above (no text) | #17 |
| 4 | Banked track: steep banking in the turns, the tri-oval visibly banked | #23 |
| 5 | Pit road between the front stretch and the infield, with pit stalls and garages behind | #5 |
| 6 | White outside wall with catch fence along the track | #23 |
| 7 | Tri-oval bulge in the front stretch in front of the grandstand | NAIP aerial |
| 8 | Grass infield edge along pit road | #5 |

## Colors (sampled from the references)

| Material | Color | Sampled from |
|---|---|---|
| seats (checker) | `#808794` | #17 |
| facade glass | `#20334a` | #17 |
| facade cladding | `#8091af` | #17 |
| track | `#8c9899` | #23 |
| infield grass | `#56732c` | #5 |

Sampled as the median of a marked region (`scripts/stadiums/refs/sample-colors.mjs`). Photos carry their own light: shaded samples are darker than the material, and the aerial is slightly washed out.

## References

| # | File | License | Author |
|---|---|---|---|
| NAIP | USGS NAIP aerial (research/raw/stadiums/naip/daytona-international-speedway.jpg) | Public domain | USGS |
| 5 | [2022 24 Hours of Daytona Pit Lane.jpg](https://commons.wikimedia.org/wiki/File:2022_24_Hours_of_Daytona_Pit_Lane.jpg) | CC BY-SA 2.0 | United Autosports |
| 17 | [Daytona-International-Speedway-WorldCenterofRacing-Lettering.jpg](https://commons.wikimedia.org/wiki/File:Daytona-International-Speedway-WorldCenterofRacing-Lettering.jpg) | CC BY 4.0 | GT3Simon |
| 23 | [The race during the 2022 24 Hours of Daytona.jpg](https://commons.wikimedia.org/wiki/File:The_race_during_the_2022_24_Hours_of_Daytona.jpg) | CC BY-SA 2.0 | United Autosports |
