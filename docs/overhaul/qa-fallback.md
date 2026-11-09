# Fallback path QA log

Blind ID by fresh subagents, image only. Iconic venues must be named; long-tail
venues must get the right type and team colors (brief: QA check 1).

## fbA1: 18 iconic venues on the generic model (attempt 1 on this path)

| venue | guess (confidence) | type right | verdict | notes |
|---|---|---|---|---|
| highmark-stadium | Lincoln Financial Field (low) | yes | fail | featureless seating |
| globe-life-field | Citi Field (low) | yes | fail | stands splay apart |
| american-family-field | Dodger Stadium (low) | yes | fail | parked roof read as a slab over the field |
| great-american-ball-park | Camden Yards (low) | yes | fail | diamond read as misoriented |
| memorial-stadium-sc | Tiger Stadium LSU (low) | yes | fail | purple end zones (wrong colors) |
| td-garden | unidentifiable (low) | no ("warehouse") | fail | plain box |
| allen-fieldhouse | unidentifiable (low) | no | fail | plain box |
| empower-field-at-mile-high | LaVell Edwards (medium-low) | yes | fail | |
| mercedes-benz-stadium | Rose Bowl (low) | yes | fail | no pinwheel roof |
| razorback-stadium | Davis Wade (low) | yes | fail | colors close (maroon) |
| loandepot-park | T-Mobile Park (low) | yes | fail | diamond geometry wrong |
| paycor-stadium | Lincoln Financial Field (low) | yes | fail | |
| darrell-k-royal-texas-memorial-stadium | **DKR Texas Memorial (medium-low)** | yes | pass | |
| daikin-park | Nationals Park (low) | yes | fail | seen from center field |
| bryant-denny-stadium | Neyland / Kyle Field (low) | yes | fail | white seats (NAIP), not crimson |
| atandt-stadium | Soldier Field (low) | yes | fail | no arches |
| kyle-field | Bill Snyder Family Stadium (low) | yes | fail | purple, not maroon |
| truist-park | Dodger Stadium (low) | yes | fail | seen from center field |

Result: 1 of 18 named. Type right on 16 of 18 (both arenas failed).

Findings, acted on before the rest of the fallback run (paused for it):
1. Arenas read as warehouses: the generic arena now has a plaza, glass base,
   glass entrance atria, facade bands, a team-color fascia band and a domed
   roof with a structural ring and rooftop plant.
2. Ballparks were seen from center field for some orientations: the camera now
   always looks from behind home plate (center-field bearing + 180).
3. Team colors: NAIP-sampled seat colors are washed out (Bryant-Denny white,
   Kyle Field purple). The team's primary color (data/stadium-art.json, only
   where `seat_colors_source` is set) now paints a 5-7 m fascia band below the
   rim and the end zones; seats and materials stay sampled (brief: team colors
   are fine; seat colors are sampled, never guessed).
4. A generic model cannot carry an iconic venue's signature (AT&T's arches,
   Mercedes-Benz's pinwheel roof). Iconic venues that fail on this path go to
   `needs-attention.md`; they need a hand-built model (as the pilot fallback
   venues had) or a new photo.
