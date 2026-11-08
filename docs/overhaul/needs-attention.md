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
