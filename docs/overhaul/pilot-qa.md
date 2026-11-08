# Pilot QA log

Sheet: `docs/overhaul/pilot.png` (reference | hero with base | hero no base | 220 px base | 220 px no base).
Final images are in the private Kaggle dataset `joshleviloff/stadium-overhaul-picks`, not in git.

## Final picks

| Venue | Path | Source (kernel, seed) | Attempts | Blind ID (round 2) | Spec check | Artifact / text check | Result |
|---|---|---|---|---|---|---|---|
| Fenway Park | photo | pilot2 s77, cleanup 1 | 2 | Fenway, 80 | Green wall, red grandstand seats, light towers, tight outfield: match | Signs inpainted; ragged photo-cut edge | Pass |
| Wrigley Field | photo | pilot2 s55, cleanup 1 | 2 | Wrigley, 75 | Brick/ivy outfield, green seats, rooftops: match | No text; ragged base edge | Pass |
| Michigan Stadium | photo | pilot2 s55, cleanup 1 | 2 | Michigan, 70 | Navy bench bowl, maize aisles, brick towers: match. Block M removed | M and seat lettering inpainted | Pass |
| SoFi Stadium | photo | pilot2 s11, cleanup 1 | 2 | SoFi, 80 | Canopy, curved edge, open sides: match | Roof lettering removed at source | Pass |
| Lambeau Field | fallback | pilot2 s55, cleanup 1+2 | 2 | Lambeau, 35 | Single bowl, light benches, green wall, gold rim: match | End-zone text inpainted; small notch in the wall | Pass (weak ID) |
| Madison Square Garden | fallback | pilot6 s21, cleanup 2 | 3 | MSG, 45 | Drum with fins, Two Penn Plaza, podium: match. Tower should be dark glass, not wood-tone | No text | Pass (weak ID) |
| Arthur Ashe Stadium | fallback | pilot3 s55, cleanup 1 | 3 | Ashe, 75 | Octagon, navy bowl, roof trusses: match. Court green, real is blue | No text | Pass |
| Bristol Motor Speedway | fallback | pilot2 s77, cleanup 1 | 2 | Bristol, 70 | Steep enclosing bowl, short oval: match | Wall text inpainted; small car blob in infield | Pass |
| Daytona International Speedway | fallback | pilot5 s13, cleanup 2 | 5 | Daytona, 25 | Tri-oval, frontstretch grandstand, lake: layout matches; detail low | No text | **Needs attention** |
| L&N Federal Credit Union Stadium | fallback | pilot2 s77, cleanup 1 | 3 | Not identified (red-seat college stadium) | Red seats, enclosed bowl, press boxes: match | End-zone text inpainted | **Needs attention** |
| Q2 Stadium | fallback | pilot6 s43, cleanup 2 | 3 | Not identified (soccer stadium) | White roof canopy, green seats, rectangular pitch: partial | No text | **Needs attention** |
| Rupp Arena | fallback | pilot6 s21, cleanup 2 | 3 | Not identified (box arena) | Beige ribbed box, flat roof: match, but the building has no distinctive exterior | No text; rippled roof | **Needs attention** |

Blind round 1 (before the MSG tower and color references): 7 of 11 identified. Round 2: 9 of 12 identified, zero legible text in all 24 images.
Each blind test was run by a fresh subagent given only the images, under neutral names (img01..), with the key held outside its folder.

## Findings for the full run

- **Two styles.** Photo-path venues (Fenway, Wrigley, Michigan, SoFi) read as cut-out photographs; the blind tester called them "photo cutouts, not true models". Fallback venues read as models. Recognition is strongest on the photo path.
- **Text.** The generator's own detector misses most lettering. Hand-marked boxes plus a lower-threshold detector, then inpainting, cleaned every venue.
- **Base.** Composited after generation, so every venue sits on the identical board.
- **Venues with plain exteriors** (Rupp, Q2, L&N) are not identifiable from a model alone. The art is type-correct and spec-correct.
