# Needs attention

Venues that did not pass QA within the brief's 5 attempts. Each keeps its best
attempt in the set, so the site never falls back to bricks.

## Daytona International Speedway (pilot)

- **Attempts:** 5 (pilot round 1, round 2, round 3, round 4 at img2img strength 0.55/0.7, round 5 at 0.8/0.9). Kernels: `stadium-gen-pilot`, `-pilot2`, `-pilot3`, `-pilot4`, `-pilot5`.
- **What failed:**
  1. A grandstand-only frame gave a flat facade with fake signage.
  2. The whole tri-oval with the race photo as style reference gave an infield of crowd and logos (one with a readable "17").
  3. The color-render reference swapped the colors: gray infield, green track.
  4. Image-to-image from the color render gave the correct layout but flat, low-detail output.
  5. Higher strengths gave the same result.
- **Kept:** round 5, seed 13. Correct tri-oval, green infield, gray banked track, Lake Lloyd and the frontstretch grandstand. It reads as a simplified model rather than a museum-quality one.
- **Cause:** a 2.5-mile track at 1216 px leaves the track about 25 px wide and the grandstand about 40 px tall, too little room for the generator to add detail. At this scale it fills the large flat infield with whatever the style reference suggests.
- **Options:**
  1. Generate the grandstand and the tri-oval as two crops and composite them.
  2. Use a 2048 px canvas with tiled refinement.
  3. Accept the simplified model, since the brief's racetrack size cap shows it small on the map anyway.

## L&N Federal Credit Union Stadium, Q2 Stadium, Rupp Arena (pilot)

- **Attempts:** 3 each (pilot round 1, round 2, round 6 with color-render reference).
- **Blind ID:** failed in both rounds. Venue type was always correct ("red-seat college football stadium", "soccer stadium", "box arena"). Spec features match.
- **Cause:** none of these has a distinctive exterior that survives at model scale. Rupp is a plain box inside a convention center, Q2 a rectangular soccer stadium, L&N an enclosed college bowl.
- **Kept:** L&N round 2 seed 77 (the round 6 version grew tree-like blobs in the seats), Q2 round 6 seed 43, Rupp round 6 seed 21.
- **Options:**
  1. Accept type-correct art for venues without a recognizable exterior.
  2. Spend the remaining 2 attempts on each with a closer crop or a signature detail (Q2's west-side canopy, L&N's north end-zone building).


## Full run, batch 1 (iconic venues): no usable reference yet

Two Commons searches were run: the category crawl, then targeted aerial searches including former venue names. These venues still have no oblique aerial that shows the whole building.
Next step for each: the fallback path (NAIP-measured 3D model, as for the pilot's fallback venues), or a fresh search.

| Venue | Reason |
|---|---|
| atandt-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| empower-field-at-mile-high | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| mercedes-benz-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| paycor-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| highmark-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| great-american-ball-park | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| american-family-field | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| daikin-park | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| truist-park | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| globe-life-field | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| loandepot-park | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| kyle-field | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| darrell-k-royal-texas-memorial-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| bryant-denny-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| memorial-stadium-sc | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| razorback-stadium | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| td-garden | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| allen-fieldhouse | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| charlotte-motor-speedway | no aerial or elevated exterior photo on Commons (ground-level or interior photos only) |
| busch-stadium | reference is a ground/elevated view from a tower: no outline of the whole venue |
| kauffman-stadium | reference is an interior upper-deck view |
| oracle-park | reference is an interior upper-deck view |
| sanford-stadium | reference is an interior upper-deck view |
| tiger-stadium | stadium is cut off at the frame edge in the only aerial |
| intuit-dome | only aerial is through an airliner window with the engine in front |
| t-mobile-park | only aerial is distant; ballpark is a few pixels |
| citizens-bank-park | only aerial is distant; ballpark is a few pixels |
| circuit-of-the-americas | whole circuit fills the aerial; needs a grandstand-side crop or the fallback model |
| indianapolis-motor-speedway | segmentation of the grandstand aerial failed twice (fragments); needs the fallback model |
| northwest-stadium | only aerial is distant and hazy; segmentation failed twice |
