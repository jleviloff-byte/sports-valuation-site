# Batch 1 QA log (iconic venues)

Blind ID: three fresh subagents, 11 images each, given only the image under a
neutral name (`imgNN.jpg`, key kept outside the repo). Images are the
cleaned picks (text pass 1). The 9 venues still showing lettering after pass 1
(Allegiant, Bank of America, Beaver, Husky, Nissan, Raymond James, NRG, Spartan,
State Farm) are in a second text pass and get blind-ID after it.

Verdict: **pass** = named correctly and no blocking artifact; **retry** = wrong
or no name, or an artifact or spec failure (brief: QA check 2-3); attempt 2 of 5
follows with new seeds, tighter controls and more weight on the reference.

| venue | seed | blind-ID guess (confidence) | artifacts / spec noted | verdict |
|---|---|---|---|---|
| ford-field | 44 | nothing identifiable: plain slab (low) | no venue content: the reference shows only the roof | retry |
| hard-rock-stadium | 44 | Hard Rock Stadium (medium-high) | washed out, side elevation, ragged lower edge | pass |
| united-center | 11 | generic arena, maybe Rupp (low) | heavy blur: hazy distant reference | retry |
| memorial-stadium-ne | 11 | Memorial Stadium, Lincoln (medium-high) | some warped seating at the wings | pass |
| lincoln-financial-field | 44 | Lumen Field (medium-high) | wrong venue | retry |
| ohio-stadium | 55 | Ohio Stadium (high) | **field rendered red** (spec fail) | retry: switch to seed 11 (green field), re-test |
| oriole-park-at-camden-yards | 11 | Camden Yards (high) | outfield split and duplicated, geometry incoherent | retry |
| lucas-oil-stadium | 44 | Lucas Oil Stadium (high) | mild blur | pass |
| mandt-bank-stadium | 11 | M&T Bank Stadium (medium) | purple oversaturated | pass |
| citi-field | 44 | Citi Field (high) | tester read the diamond as reversed; checked against the reference, the view is from behind home plate as in the photo | pass |
| chase-center | 11 | Intuit Dome (low) | wrong venue | retry |
| camp-randall-stadium | 44 | Camp Randall (low-medium) | stepped right stands | pass |
| arrowhead-stadium | 44 | Arrowhead (medium) | ramp cut at the bottom | pass |
| tropicana-field | 55 | Tropicana Field (medium) | muddy entrance plaza | pass |
| los-angeles-memorial-coliseum | 11 | LA Coliseum (high) | left stands distorted | pass |
| soldier-field | 11 | Soldier Field (low) | blur, washed-out color | pass (weak; recheck after export) |
| target-field | 44 | Wrigley Field (high) | wrong venue | retry |
| huntington-bank-field | 55 | Huntington Bank Field (high) | wide flat view | pass |
| providence-park | 55 | unknown soccer stadium (low) | only an L-shaped fragment | retry |
| caesars-superdome | 55 | Caesars Superdome (high) | blotchy gold base | pass |
| notre-dame-stadium | 44 | Notre Dame Stadium (high) | minor warping. Reference predates Campus Crossroads (needs-attention) | pass (provisional) |
| ben-hill-griffin-stadium | 44 | Ben Hill Griffin (medium) | noisy seating | pass |
| levi-s-stadium | 11 | Levi's Stadium (medium) | flat, squashed | pass |
| neyland-stadium | 11 | Clemson Memorial Stadium (low-medium) | torn open end | retry |
| rose-bowl | 11 | Rose Bowl (high) | **field folded and sunken**, trees smeared | retry |
| acrisure-stadium | 44 | Acrisure Stadium (medium-high) | field hidden | pass |
| lumen-field | 55 | Lumen Field (high) | tower in front of the field, as in the reference photo | pass |
| jordan-hare-stadium | 44 | Jordan-Hare (medium-high) | clean | pass |
| gillette-stadium | 44 | Gillette Stadium (medium) | jagged left side | pass |
| u-s-bank-stadium | 55 | U.S. Bank Stadium (high) | fragmented lower edge | pass |
| coors-field | 44 | Coors Field (high) | right edge collapsed | pass |
| talladega-superspeedway | 44 | Daytona (low) | reads as a flat photo; grandstand barely visible | retry |
| metlife-stadium | 55 | MetLife Stadium (high) | chunk missing at the bottom | pass |

Result: 22 pass, 11 retry. No tester could read any text in these 33 images.

## Signage venues after text pass 2 (blind ID batch D, fresh subagent)

Pass 2 = OpenCV plain fill, then a light SDXL pass. Bank of America, Nissan,
State Farm and NRG (`reliant-stadium`) came out blotchy or still lettered;
they are regenerated as `batch1e` with the signs blanked on the reference
photo instead.

| venue | blind-ID guess (confidence) | artifacts noted | verdict |
|---|---|---|---|
| beaver-stadium | Beaver Stadium (medium) | ragged right edge, floating white slabs | pass |
| raymond-james-stadium | L&N Stadium (low-medium; Raymond James second) | warped red seating | retry |
| allegiant-stadium | Allegiant Stadium (medium) | no field visible (closed roof, as built); facade emblem cluster | pass |
| spartan-stadium | Rice Stadium (low) | blurry, doubled field lines | retry |
| husky-stadium | Husky Stadium (medium-high) | purple haze; reference predates the 2013 rebuild | pass (provisional, see needs-attention) |

## Retries after attempt 2 (blind ID batches E and F, fresh subagents, cleaned)

| venue | attempt | blind-ID guess (confidence) | artifacts / spec noted | verdict |
|---|---|---|---|---|
| providence-park | 2 | Providence Park (medium) | green tint over roofs | pass |
| petco-park | 2 | Petco Park (high) | lower-left edge sheared | pass |
| rose-bowl | 2 | Rose Bowl (high) | near end zone folds again; blue halo | retry |
| oriole-park-at-camden-yards | 2 | Camden Yards (medium) | bowl stretched toward the viewer, warehouse duplicated | retry |
| chase-center | 2 | Santiago Bernabeu (medium) | wrong venue | retry |
| comerica-park | 2 | Coors Field (low-medium) | wrong venue, heavy crop | retry |
| target-field | 2 | Wrigley Field (medium) | wrong venue; infield dirt fills the diamond (spec fail) | retry |
| nationals-park | 2 | Nationals Park (medium) | flattened | pass |
| neyland-stadium | 2 | Paycor Stadium (low) | wrong venue; debris over one end | retry |
| chase-field | 2 | Chase Field (high) | stretched outfield wall | pass |
| williams-brice-stadium | 2 | Williams-Brice (medium) | warped canopy truss; garbled, unreadable end-zone marks | pass |
| everbank-stadium | 2 | EverBank Stadium (medium) | washed-out right side | pass |
| yankee-stadium | 2 | Yankee Stadium (high) | tester read the diamond as misplaced; checked: it matches the reference viewpoint (behind third base) | pass |
| lincoln-financial-field | 2 | Lincoln Financial Field (medium-high) | no field visible, structure in separate chunks (spec fail) | retry |
| ohio-stadium | 2 (seed swap) | Ohio Stadium (high) | pink glow in suite windows | pass |
| angel-stadium | 2 | Angel Stadium (low) | garbled outfield | pass (weak) |
| dodger-stadium | 2 | Dodger Stadium (low-medium) | blurry, soft | pass (weak) |
| rate-field | 2 | Yankee Stadium (low) | wrong venue; baselines duplicated | retry |

Running total for the 56 batch-1 photo venues: 35 pass (incl. Husky and Notre Dame provisional), 8 retry (attempt 3), 4 regenerating with signs blanked (`batch1e`), 2 on attempt 3 (`batch1f`), 7 moved to the fallback path.
