# Stadium Art Overhaul Brief

## Why this exists
The brick-built art is rejected, and so is the three.js illustrated pilot. On the current preview, map icons are flat blobs and the venue card still shows a blocky brick bowl (L&N Federal Credit Union Stadium looks like a red-and-black tub with a green rectangle in it). Root cause: every model was built from scratch from a handful of guessed parameters, so the real buildings never entered the process. More polish on that pipeline will not fix it.

## The goal
Every venue looks like the real building shrunk to a miniature: a museum-quality architectural scale model, seen from above. Real shape, real colors, real details. Anyone who has been there recognizes it instantly with no label. The standard: an illustrator would be proud to sign it. Take as long as it takes.

## Style spec
- Look: premium architectural scale model / miniature diorama. Real materials (grass, dirt, painted lines, concrete, steel, glass, brick facades) in the venue's true colors. Crisp, clean, high detail. Not cartoon, not voxel, not low-poly, no bricks anywhere.
- Camera: 3/4 aerial, 30 to 50 degrees above the horizon, whole venue in frame. Compass orientation may follow the reference photo; the elevation band must be consistent.
- Light: bright, soft late-afternoon daylight, consistent direction across the whole set, gentle contact shadow.
- Background: transparent cutout. No parking lots, streets, neighboring buildings or skyline.
- Pilot two variants: with a thin scale-model base, and without.
- No readable brand text or logos. Signage renders as plain shapes and colors. Team colors are fine.
- Must read clearly at ~220px on the map and look superb at full hero size.

## Pipeline: always start from the real venue
1. References. For each venue, find freely licensed oblique aerial photos on Wikimedia Commons, plus close-ups of signature features. Verify every image is the right venue: Commons category, title, caption, and a visual check against the NAIP aerial footprint. (Earlier, MetLife photos were mislabeled as MSG and Arthur Ashe; that must never happen again.) Record URL, author and license in a manifest. Prefer public domain, CC0 or CC BY. CC BY-SA is allowed; art derived from it inherits CC BY-SA. Never use non-free images. Best reference: whole venue visible, 30 to 50 degrees elevation, daylight, no construction.
2. Structure. From the chosen reference, estimate depth (Depth Anything V2 Small or MiDaS) and extract a lineart/edge map. Verify every model license allows use on a public website. Depth Anything V2 Base and Large are non-commercial; do not use them.
3. Generation, on Kaggle's free GPU. SDXL with ControlNet depth plus ControlNet lineart/canny from the real photo, and IP-Adapter from the same photo. One locked style prompt and negative prompt for the whole set; several seeds per venue. Keep the controls tight enough that the real structure survives: the Green Monster stays exactly where it is.
4. Cutout. Background removal (BiRefNet or similar; verify license), clean alpha with no halos, then one consistent soft contact shadow added in post.
5. Finish. Upscale with a free upscaler if needed (Real-ESRGAN). Export a 1600px WebP hero plus 256px and 512px map sprites.
6. Fallback, only for venues with no usable oblique photo: build an accurate 3D model following the type rules below, render depth and lineart from it at the standard camera, and run the same generation step. Log these in docs/overhaul/needs-attention.md. Never fall back to bricks.

## Type rules: every output must pass
- Football: field at regulation proportions with end zones and yard lines, stands parallel to the sidelines, the real bowl shape (closed, horseshoe, open end), press box and scoreboards in their real positions, upper decks and suite rings where they exist.
- Baseball: dirt infield, grass outfield, foul lines, outfield wall at the park's real asymmetric shape and height, stands wrapping from foul pole to foul pole behind home plate. Never a symmetric bowl.
- Soccer-specific: rectangular pitch, steep stands close to the touchlines, canopy roofs where they exist.
- Arenas: real roof form and exterior facade.
- Racetracks: banking, main grandstand, pit road. Frame on the grandstand side so the track doesn't read as an empty green pill.
- Tennis: court, bowl, roof structure.

## Venue spec sheets
Before generating each venue, write docs/overhaul/specs/<slug>.md: 6 to 10 identifying features, each tied to a reference photo, plus colors for seats, facade, roof and field sampled from the photos (never guessed from team palettes).
Example, Fenway Park: Green Monster at its real height with the manual scoreboard, green seating, red-brick exterior, the triangle in deep center, roof-mounted light towers, Pesky Pole.

## QA: no grading on vibes
Every output must pass all four checks:
1. Blind ID test: give a fresh subagent ONLY the image (no filename, no metadata) and ask which venue it is. Iconic venues must be named correctly. Long-tail venues must at least get the right type and team colors. Log every result.
2. Spec check: every spec-sheet feature present, pass/fail.
3. Artifact check: no melted or warped seating, bent fields, duplicated structures, gibberish text, halos or cropped edges.
4. Side-by-side: reference photo next to the output, at hero size and at 220px.
On failure: regenerate with new seeds and adjusted controls (up to 5 attempts), then try the fallback, then log it in needs-attention.md. Never ship a failing image.

## Pilot: 12 venues
Fenway Park, Wrigley Field, Michigan Stadium, L&N Federal Credit Union Stadium, Lambeau Field, SoFi Stadium, Madison Square Garden, Rupp Arena, Q2 Stadium, Daytona International Speedway, Bristol Motor Speedway, Arthur Ashe Stadium.
- Output docs/overhaul/pilot.png: reference, output at hero size and output at 220px for each venue, with and without the model base.
- Post the result summary and QA log in STATUS.md, commit and push.
- Josh approves from his phone. While waiting, keep doing non-generation prep for ALL venues: references, verification, depth and lineart maps, spec sheets. Do not start the full generation run until he approves.

## Full run (after approval)
- Order: the ~100 most iconic venues first (every NFL and MLB venue, the largest college stadiums, the famous arenas, Daytona, Indy), then everything else.
- Batch on Kaggle within the free quota. Track GPU hours in STATUS.md. If the weekly quota runs out, pause generation, keep doing prep, and resume when it resets.
- Commit final sprites and hero images to git. Report the total size of the art assets; keep the site fast.

## Site integration
- Replace the brick art everywhere (map and card). Remove the brick pipeline code once replaced; git history keeps it.
- Venue card on desktop: hero image in the center with stat callouts radiating around it (the GTA weapon-select layout from the original spec). On mobile, stack them.
- Map: footprint shapes at national zoom, crossfading to the new art from regional zoom in.
- Racetracks currently dominate the map as giant gray pills. Lower their size cap and give their shapes grandstand color.
- Image credits in the card footer for every image derived from a licensed photo.

## Running unattended (Josh is traveling)
- This runs as a cloud session. Don't ask Josh questions except for pilot approval. Make reasonable calls and log them in docs/decisions-log.md.
- Keep docs/overhaul/STATUS.md current: phase, last completed step, next step, Kaggle GPU hours used, blockers. Update it after every step, then commit and push, so a brand-new session can resume from this brief plus STATUS.md alone.
- Cloud sessions don't keep gitignored files. Store reference images and intermediate files in a private Kaggle dataset, not git.
- Constraints: $0 (Kaggle free tier only), verify every license, never commit or print secrets, preview deploys are fine, NO production deploy until Josh explicitly approves the full art set.

## Done means
All 354 venues pass QA (or are listed in needs-attention.md with the reason), the art is live on the preview, the preview load-time gate is measured, and docs/overhaul/final-report.md summarizes everything for Josh.
