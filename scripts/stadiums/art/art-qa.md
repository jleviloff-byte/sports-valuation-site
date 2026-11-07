# Brick art QA

Generated 2026-11-07. 354 venues rendered. Spec: `data/stadium-art.json`. Renderer: `scripts/stadiums/art/render.mjs`.

## Output sizes

- 128px sprites: 2167 KB total, 6 KB average
- 256px sprites: 6207 KB total
- 1024px heroes: 35335 KB total, 100 KB average
- Card models (GLB, meshopt): see public/stadiums/models (compressed after render)

## Footprint fallbacks

**No OSM footprint, generic rounded outline used** (26): Atlanta Motor Speedway, U.S. Bank Stadium, Gateway Motorsports Park, Casino Del Sol Stadium, Bill Snyder Family Football Stadium, First Community Stadium, Pratt & Whitney Stadium at Rentschler Field, TDECU Stadium, Renasant Stadium, Flagler Credit Union Stadium, InfoCision Stadium–Summa Field, Skelly Field at H. A. Chapman Stadium, FMOL Health/St. Francis Stadium, Memorial Stadium, Fitton Field, Casem-Spinks Stadium, Houchens Industries–L. T. Smith Stadium, First Horizon Coliseum, S.B. Ballard Stadium, Q2 Stadium, Richard Gouse Field at Brown Stadium, Eddie G. Robinson Memorial Stadium, Navarre Stadium, Robert K. Kraft Field at Lawrence A. Wien Stadium, Simmons Bank Field, Panther Stadium at Blackshear Field

**Ring-shaped OSM footprint (field mapped as a hole), convex hull used** (5): Yulman Stadium, Razorback Stadium, Angel Stadium, Albertsons Stadium, William "Dick" Price Stadium

## Colors

**No sourced team colors, neutral gray seats** (47). Racetracks, tennis, neutral sites and a few colleges not in the color module. MLS and NWSL colors come from the club article's table styling (no soccer color module exists): Indianapolis Motor Speedway, Bristol Motor Speedway, Daytona International Speedway, Circuit of the Americas, Charlotte Motor Speedway, Cotton Bowl, Barber Motorsports Park, Las Vegas Motor Speedway, Talladega Superspeedway, Pocono Raceway, Mid-Ohio Sports Car Course, Texas Motor Speedway, Legion Field, Atlanta Motor Speedway, Camping World Stadium, Gateway Motorsports Park, Michigan International Speedway, Dover Motor Speedway, Independence Stadium, Richmond Raceway, Kansas Speedway, Chicagoland Speedway, Darlington Raceway, Martinsville Speedway, New Hampshire Motor Speedway, Sonoma Raceway, Homestead–Miami Speedway, Phoenix Raceway, Pratt & Whitney Stadium at Rentschler Field, Watkins Glen International, Milwaukee Mile, Cajun Field, Iowa Speedway, Portland International Raceway, Nashville Superspeedway, Charles Schwab Field, Arthur Ashe Stadium, First Horizon Coliseum, Q2 Stadium, ScottsMiracle-Gro Field, Audi Field, North Wilkesboro Speedway, Delaware Stadium, BOK Center, Bowman Gray Stadium, Indian Wells Tennis Garden, Simmons Bank Field

## Rule-based parameters to review

- **Ballpark orientation**: 15 of 29 ballparks are oriented from the OSM playing-field outline (fan shape, wide end = outfield). The other 14 use 67.5 degrees (ENE, the Official Baseball Rules recommendation) because OSM has no clear field outline: Dodger Stadium, Chase Field, T-Mobile Park, Angel Stadium, Busch Stadium, Oriole Park at Camden Yards, Citi Field, Wrigley Field, Rate Field, Globe Life Field, Comerica Park, Target Field, LoanDepot Park, Charles Schwab Field.
- **Road courses** drawn with the oval generator: Circuit of the Americas, Barber Motorsports Park, Mid-Ohio Sports Car Course, Sonoma Raceway, Watkins Glen International, Portland International Raceway.
- **Field surface inferred** (no surface in source, grass assumed): MetLife Stadium, Soldier Field, Franklin Field, Protective Stadium, Centennial Bank Stadium, A. W. Mumford Stadium, Memorial Stadium, SeatGeek Stadium, Simmons Bank Field, Clarence T. C. Ching Athletics Complex.
- **Archetype**: horseshoes are set by hand (Los Angeles Memorial Coliseum, Yulman Stadium); every other open stadium is drawn as a full bowl.
- **Signature features** implemented: green_monster, ivy_wall, cable_ring_roof, pagoda_tower, yard_of_bricks, retractable_roof_frame, superdome_roof. Listed but not yet drawn: marquee, peristyle_arch, inner_oval.

