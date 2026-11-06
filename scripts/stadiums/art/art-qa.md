# Brick art QA

Generated 2026-11-06. 354 venues rendered. Spec: `data/stadium-art.json`. Renderer: `scripts/stadiums/art/render.mjs`.

## Output sizes

- 128px sprites: 2150 KB total, 6 KB average
- 256px sprites: 6171 KB total
- 1024px heroes: 35062 KB total, 99 KB average
- Card models (GLB, meshopt): see public/stadiums/models (compressed after render)

## Footprint fallbacks

**No OSM footprint, generic rounded outline used** (26): Atlanta Motor Speedway, U.S. Bank Stadium, Gateway Motorsports Park, Casino Del Sol Stadium, Bill Snyder Family Football Stadium, First Community Stadium, Pratt & Whitney Stadium at Rentschler Field, TDECU Stadium, Renasant Stadium, Flagler Credit Union Stadium, InfoCision Stadium–Summa Field, Skelly Field at H. A. Chapman Stadium, FMOL Health/St. Francis Stadium, Memorial Stadium, Fitton Field, Casem-Spinks Stadium, Houchens Industries–L. T. Smith Stadium, First Horizon Coliseum, S.B. Ballard Stadium, Q2 Stadium, Richard Gouse Field at Brown Stadium, Eddie G. Robinson Memorial Stadium, Navarre Stadium, Robert K. Kraft Field at Lawrence A. Wien Stadium, Simmons Bank Field, Panther Stadium at Blackshear Field

**Ring-shaped OSM footprint (field mapped as a hole), convex hull used** (5): Razorback Stadium, Angel Stadium, Albertsons Stadium, William "Dick" Price Stadium, Yulman Stadium

## Colors

**No sourced team colors, neutral gray seats** (67). Mostly MLS and NWSL clubs (Wikipedia has no soccer color module), racetracks, tennis and neutral sites: Indianapolis Motor Speedway, Bristol Motor Speedway, Daytona International Speedway, Circuit of the Americas, Charlotte Motor Speedway, Cotton Bowl, Barber Motorsports Park, Las Vegas Motor Speedway, Talladega Superspeedway, Pocono Raceway, Mid-Ohio Sports Car Course, Texas Motor Speedway, Legion Field, Atlanta Motor Speedway, Camping World Stadium, Gateway Motorsports Park, Michigan International Speedway, Dover Motor Speedway, Independence Stadium, Richmond Raceway, Kansas Speedway, Chicagoland Speedway, Darlington Raceway, Martinsville Speedway, New Hampshire Motor Speedway, Sonoma Raceway, Homestead–Miami Speedway, Phoenix Raceway, Pratt & Whitney Stadium at Rentschler Field, Watkins Glen International, Milwaukee Mile, Cajun Field, Geodis Park, Iowa Speedway, Portland International Raceway, Johnny "Red" Floyd Stadium, Nu Stadium, Dignity Health Sports Park, TQL Stadium, Inter.co Stadium, Nashville Superspeedway, Sports Illustrated Stadium, Providence Park, Charles Schwab Field, Memorial Stadium, Arthur Ashe Stadium, Energizer Park, First Horizon Coliseum, Q2 Stadium, ScottsMiracle-Gro Field, America First Field, Audi Field, North Wilkesboro Speedway, Allianz Field, Delaware Stadium, Subaru Park, Sporting Park, Dick's Sporting Goods Park, PayPal Park, Thomas & Mack Center, BOK Center, Bowman Gray Stadium, Indian Wells Tennis Garden, Simmons Bank Field, Clarence T. C. Ching Athletics Complex, United Supermarkets Arena, Panther Stadium at Blackshear Field

## Rule-based parameters to review

- **Ballpark orientation**: 28 of 29 ballparks use a default home-to-center-field bearing of 45 degrees (only Fenway is set by hand). Stands may sit on the wrong side of the field for parks that face another way.
- **Road courses** drawn with the oval generator: Circuit of the Americas, Barber Motorsports Park, Mid-Ohio Sports Car Course, Sonoma Raceway, Watkins Glen International, Portland International Raceway.
- **Field surface inferred** (no surface in source, grass assumed): MetLife Stadium, Soldier Field, Franklin Field, Protective Stadium, Centennial Bank Stadium, A. W. Mumford Stadium, Memorial Stadium, SeatGeek Stadium, Simmons Bank Field, Clarence T. C. Ching Athletics Complex.
- **Archetype**: horseshoes are set by hand (Los Angeles Memorial Coliseum, Yulman Stadium); every other open stadium is drawn as a full bowl.
- **Signature features** implemented: green_monster, ivy_wall, cable_ring_roof, pagoda_tower, yard_of_bricks, retractable_roof_frame, superdome_roof. Listed but not yet drawn: marquee, peristyle_arch, inner_oval.

