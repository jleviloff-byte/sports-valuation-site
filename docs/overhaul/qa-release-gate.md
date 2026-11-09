# Release gate: all four QA checks (interim production release, 2026-11-09)

Josh approved an interim production release in which only venues whose new art
passed all four checks (blind ID, spec check, artifact check, side-by-side at
hero size and 220 px) show it. The pilot ran all four checks
(`pilot-qa.md`). For the full run, blind ID and the artifact check were done
(`qa-batch1.md`); the spec check and side-by-side were done here, strictly:
every structural spec feature must be visible (features about the
surroundings, removed by the cutout, are not required), and the venue must
read at 220 px.

## Pilot (all four checks in `pilot-qa.md`): 8 pass

fenway-park, wrigley-field, michigan-stadium, sofi-stadium, lambeau-field,
madison-square-garden, arthur-ashe-stadium, bristol-motor-speedway.

## Batch 1 blind-ID passes: 26 pass, 13 fail

| venue | spec | artifacts | 220 px | result |
|---|---|---|---|---|
| allegiant-stadium | drum, silver lines, roof: yes | facade emblem cluster | reads | pass |
| arrowhead-stadium | red bowl, spiral ramps, boards: yes | none blocking | reads | pass |
| bank-of-america-stadium | blue tiers, towers, boards: yes | sign panel as a plain shape | reads | pass |
| beaver-stadium | steel frame, white/blue, two decks: yes | ragged right edge | reads | pass |
| ben-hill-griffin-stadium | orange/blue, press box, closed bowl: yes | none blocking | reads | pass |
| caesars-superdome | white dome, gold drum: yes | none | reads | pass |
| camp-randall-stadium | brick arches, red/white, upper deck: yes | none blocking | reads | pass |
| chase-field | boxy roof, tan/green, glass: yes | none blocking | reads | pass |
| citi-field | brick rotunda, scoreboard, towers: yes | none blocking | reads | pass |
| coors-field | brick, green seats, outfield: yes | none blocking | reads | pass |
| everbank-stadium | teal seats, two tiers, boards: yes | washed right edge | reads | pass |
| gillette-stadium | navy/red, tower, glass end: yes | jagged left side | reads | pass |
| jordan-hare-stadium | tall decks, navy/orange, board: yes | none | reads | pass |
| lucas-oil-stadium | brick box, glass wall, pitched roof: yes | mild blur | reads | pass |
| lumen-field | arched canopies, open north end, tower: yes | none blocking | reads | pass |
| mandt-bank-stadium | purple tiers, canopies: yes | oversaturated purple | reads | pass |
| los-angeles-memorial-coliseum | peristyle arches, red bowl: yes | none blocking | reads | pass |
| memorial-stadium-ne | red closed bowl, west tower: yes | none blocking | reads | pass |
| metlife-stadium | silver louvers, gray-blue tiers: yes | small chunk at the bottom | reads | pass |
| ohio-stadium | rotunda, horseshoe, scarlet: yes | pink glow in suites | reads | pass |
| petco-park | sandstone, navy seats, lawn: yes | sheared lower-left edge | reads | pass |
| reliant-stadium (NRG) | truss roof, glass, brick base: yes | blank panels (signs) | reads | pass |
| tropicana-field | tilted white dome, blue band, rotunda: yes | muddy plaza | reads | pass |
| u-s-bank-stadium | dark prow, sloped roof: yes | fragmented lower edge | reads | pass |
| williams-brice-stadium | garnet seats, upper decks, board: yes | warped canopy truss | reads | pass |
| yankee-stadium | limestone arches, frieze, navy decks: yes | none blocking | reads | pass |
| acrisure-stadium | field not visible | yellow glow | weak | **fail** |
| angel-stadium | rock pile unclear | garbled outfield | reads | **fail** |
| dodger-stadium | wavy roofs, hex boards missing | blurry | weak | **fail** |
| hard-rock-stadium | no field, no aqua accents | washed out | weak | **fail** |
| huntington-bank-field | field not visible | none | weak (a strip) | **fail** |
| husky-stadium | reference predates 2013 rebuild | purple haze | reads | **fail** (provisional) |
| levi-s-stadium | field not visible; side elevation | flat | a strip | **fail** |
| nationals-park | scoreboard, open outfield not visible | flattened | a strip | **fail** |
| notre-dame-stadium | Campus Crossroads buildings missing (old reference) | none | reads | **fail** (provisional) |
| oriole-park-at-camden-yards | yes | gray smear at the right edge | reads | **fail** |
| providence-park | brick facade yes | green tint over gray concrete | reads | **fail** |
| rose-bowl | yes | magenta fringing on trees | reads | **fail** |
| soldier-field | colonnades not visible | blur | weak | **fail** |

Ships with new art after batch 1: 34 (8 pilot + 26 batch 1). Failures stay on the photo
path for later attempts and show the footprint until then.

## Attempt 4 (blind ID by a fresh subagent)

| venue | blind ID | spec / artifacts / 220 px | result |
|---|---|---|---|
| chase-center | Chase Center (medium) | white banded drum, entrance wedge; ragged lower edge; reads | pass |
| target-field | Target Field (medium) | cropped slab, duplicated grass patch | **fail** |

**Ships with new art: 35** (8 pilot + 27 full run). The other 319 venues ship footprint-only.
