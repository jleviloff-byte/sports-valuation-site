// Identifying features for the pilot venues. Each feature cites the reference
// that shows it: a candidate number from scripts/stadiums/refs/verified.json
// (category-verified Commons photo) or 'naip' (USGS aerial, public domain).
// The same list is the QA checklist (scripts/stadiums/art2/qa.mjs).
// Colors come from scripts/stadiums/refs/colors.json (sampled from the photos).
// Signs and boards render as plain shapes: no readable text, brands or logos.
export const SPECS = {
  'michigan-stadium': {
    type: 'football',
    summary: 'Closed single-tier bowl dug into the ground, field running north-south, brick-and-glass towers on both sidelines, video boards on columns at both ends.',
    features: [
      { id: 'bowl', text: 'Closed single-tier bowl, near-rectangular with rounded corners, no upper deck', refs: ['naip', 1] },
      { id: 'sunk', text: 'Field sunk below grade: the rim sits only a few meters above the surrounding ground', refs: [1] },
      { id: 'field', text: 'Regulation field (120 x 53.3 yd) running north-south, end zones and yard lines, stands parallel to the sidelines', refs: ['naip', 5] },
      { id: 'westTower', text: 'West sideline: long brick-and-glass press box and suite tower rising well above the rim', refs: ['naip', 1] },
      { id: 'eastTower', text: 'East sideline: second brick-and-glass suite tower, slightly lower', refs: ['naip', 1] },
      { id: 'boards', text: 'Video boards above both end-zone rims, raised on white columns; back faces plain navy (the Block M is a logo and is left off)', refs: [1, 5, 6] },
      { id: 'seats', text: 'Blue-gray bench seating over the whole bowl', refs: [1], color: 'seats' },
      { id: 'fascia', text: 'Blue band along the top of the bowl wall', refs: [1], color: 'fascia navy' },
      { id: 'endzones', text: 'Dark navy end zones with a maize lettering band, drawn as a plain stripe', refs: ['naip', 5] },
      { id: 'brick', text: 'Brick on the tower ends and the entry buildings at grade', refs: [1], color: 'facade brick' },
    ],
  },
  'yulman-stadium': {
    type: 'football',
    summary: 'Compact bowl, field turned about 30 degrees east of north, main stand and press structure on the southeast sideline, stands wrapping both end zones.',
    features: [
      { id: 'axis', text: 'Field axis about 30 degrees east of north (NNE to SSW)', refs: ['naip'] },
      { id: 'field', text: 'Regulation field with sky-blue end zones and sky-blue bands along both sidelines', refs: ['naip', 10], color: 'end zone and sideline bands' },
      { id: 'mainStand', text: 'Main grandstand on the southeast sideline topped by a long gray metal-clad press and club structure', refs: ['naip', 5, 7] },
      { id: 'westStand', text: 'Lower single-deck stand on the northwest sideline, parallel to the field', refs: ['naip', 10] },
      { id: 'ends', text: 'Seating wraps around both end zones (bowl is closed except at the corners)', refs: ['naip'] },
      { id: 'seats', text: 'Gray aluminum seating (no colored chairs)', refs: ['naip', 10], color: 'seats (aerial)' },
      { id: 'facade', text: 'Exterior: horizontal gray metal panels over a glass club level and a dark brick base', refs: [5, 7], color: 'facade metal' },
      { id: 'towers', text: 'Green lattice light towers with crossbars along the main-side exterior (color by eye: too thin to sample)', refs: [5, 7] },
    ],
  },
  'fenway-park': {
    type: 'baseball',
    summary: 'Small, irregular ballpark squeezed into a city block: the Green Monster in left, the triangle in deep center, the short right-field corner at the Pesky Pole.',
    features: [
      { id: 'monster', text: 'Green Monster: tall green wall (37 ft, about 11 m) along the whole left field, the tallest wall in the park', refs: [9, 11, 16], color: 'green monster' },
      { id: 'monsterSeats', text: 'Monster seats on top of the wall and the manual scoreboard set into its base (shapes only)', refs: [9] },
      { id: 'triangle', text: 'The triangle: the outfield wall kinks out to its deepest point in right-center', refs: ['naip', 9] },
      { id: 'pesky', text: 'Pesky Pole: very short right-field foul line with the low wall curving out from the corner', refs: ['naip', 16] },
      { id: 'wrap', text: 'Stands wrap from the left-field foul pole around home plate to the right-field corner, plus bleachers in right and center; not a symmetric bowl', refs: ['naip', 11] },
      { id: 'seats', text: 'Red seats in the grandstand and boxes, green seats in the bleachers', refs: [16, 9], color: 'seats grandstand' },
      { id: 'steel', text: 'Dark green steel structure and roof boxes over the grandstand', refs: [11, 9], color: 'structure green' },
      { id: 'lights', text: 'Lattice light towers standing on the grandstand roof', refs: [9, 16] },
      { id: 'field', text: 'Dirt infield and base paths, striped grass, foul lines', refs: [9], color: 'infield dirt' },
      { id: 'brick', text: 'Red-brick exterior at street level', refs: [6], color: 'facade brick' },
    ],
  },
  'wrigley-field': {
    type: 'baseball',
    summary: 'Two-deck roofed grandstand from foul pole to foul pole, open outfield bleachers with the ivy wall below, hand-turned scoreboard in center field.',
    features: [
      { id: 'ivy', text: 'Ivy-covered brick outfield wall, low, foul pole to foul pole', refs: [8, 10] },
      { id: 'scoreboard', text: 'Manual center-field scoreboard, dark green, wide, with a clock on top, standing on the back of the bleachers', refs: [11], color: 'scoreboard' },
      { id: 'bleachers', text: 'Open, uncovered bleachers across the whole outfield', refs: [8, 11] },
      { id: 'grandstand', text: 'Two-deck grandstand with a roof from left field around home plate to right field, light banks on the roof', refs: [8, 10], color: 'roof' },
      { id: 'boards', text: 'Video boards above the left-field and right-field bleachers (plain panels)', refs: [8] },
      { id: 'seats', text: 'Dark green seats', refs: [10], color: 'seats' },
      { id: 'field', text: 'Dirt infield, grass, foul lines; the outfield wall is not a symmetric arc', refs: [8], color: 'field' },
      { id: 'marquee', text: 'Red marquee over the home-plate entrance at the street corner (shape only, no text)', refs: ['m1'], color: 'marquee' },
      { id: 'exterior', text: 'Pale gray-beige exterior walls with green trim', refs: ['m1'], color: 'exterior' },
    ],
  },
  'sofi-stadium': {
    type: 'football',
    summary: 'Low teardrop-shaped translucent canopy on slender white columns over a bowl sunk below grade, with the lake on the west side.',
    features: [
      { id: 'canopy', text: 'Teardrop canopy: rounded on the northwest, sharp points on the east, following the aerial outline', refs: ['naip', 1, 24] },
      { id: 'panels', text: 'Canopy is light gray, translucent, with a visible panel grid', refs: [1, 24], color: 'roof' },
      { id: 'columns', text: 'Canopy rests on slender white columns; the sides are open (no walls)', refs: [7, 24], color: 'columns' },
      { id: 'low', text: 'Low profile: the bowl is sunk below grade, so the stadium reads low from outside', refs: [7, 24] },
      { id: 'pavilion', text: 'Curved white facade buildings tucked under the canopy edge', refs: [7, 24], color: 'facade' },
      { id: 'lake', text: 'Lake along the west side', refs: [7, 24, 'naip'], color: 'lake' },
      { id: 'field', text: 'Field: regulation football field under the canopy (field color not sampled: not visible in any reference)', refs: [] },
    ],
  },
  'madison-square-garden': {
    type: 'arena',
    summary: 'Round drum clad in vertical bronze fins and dark glass, a flat gray cable roof, a low beige podium building in front.',
    features: [
      { id: 'drum', text: 'Circular drum footprint', refs: ['naip', 17] },
      { id: 'fins', text: 'Facade of tall vertical bronze-tan fins between dark glass bands', refs: [17, 19], color: 'facade cladding' },
      { id: 'roof', text: 'Flat, slightly domed gray cable roof with radial lines and a small center ring', refs: ['naip'], color: 'roof' },
      { id: 'podium', text: 'Lower rectangular beige podium building on the Eighth Avenue side', refs: [17], color: 'podium' },
      { id: 'glass', text: 'Glazed entrance block projecting from the drum above the podium', refs: [17, 22], color: 'glass' },
      { id: 'screens', text: 'Large screens on the drum and podium, drawn as plain dark panels', refs: [17, 19, 22] },
    ],
  },
  'daytona-international-speedway': {
    type: 'racetrack',
    summary: 'Front-stretch grandstand with checkered seats, the tri-oval, banked turns and pit road, framed on the main grandstand.',
    features: [
      { id: 'grandstand', text: 'Long multi-level grandstand along the front stretch', refs: [17, 5, 'naip'] },
      { id: 'checker', text: 'Black and white checkered seat pattern', refs: [17], color: 'seats (checker)' },
      { id: 'suites', text: 'Glass suite level near the top of the grandstand with a light fascia band above (no text)', refs: [17], color: 'facade glass' },
      { id: 'banking', text: 'Banked track: steep banking in the turns, the tri-oval visibly banked', refs: [23] },
      { id: 'pit', text: 'Pit road between the front stretch and the infield, with pit stalls and garages behind', refs: [5] },
      { id: 'wall', text: 'White outside wall with catch fence along the track', refs: [23] },
      { id: 'trioval', text: 'Tri-oval bulge in the front stretch in front of the grandstand', refs: ['naip'] },
      { id: 'grass', text: 'Grass infield edge along pit road', refs: [5], color: 'infield grass' },
    ],
  },
  'arthur-ashe-stadium': {
    type: 'tennis',
    summary: 'Rounded-octagon bowl under a white two-panel retractable roof carried on an exposed dark steel frame, brick base.',
    features: [
      { id: 'octagon', text: 'Rounded-octagon plan for the bowl and roof', refs: ['naip'] },
      { id: 'roof', text: 'White fabric retractable roof in two panels over the bowl', refs: [5, 9, 'naip'], color: 'roof fabric' },
      { id: 'steel', text: 'Exposed dark steel columns and trusses outside the bowl, carrying the roof', refs: [5, 9], color: 'steel' },
      { id: 'brick', text: 'Brick base and lower facade', refs: [5, 9], color: 'base brick' },
      { id: 'bowl', text: 'Steep, deep bowl in tiers with a suite ring between them', refs: [21] },
      { id: 'seats', text: 'Blue seats', refs: [12, 21], color: 'seats' },
      { id: 'court', text: 'Blue court inside a green surround, lines', refs: [21], color: 'court' },
    ],
  },
}

export const TYPE_RULES = {
  football: 'Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; the real bowl shape; press box and scoreboards in their real positions; suite rings and upper decks where they exist.',
  baseball: 'Dirt infield, grass outfield, foul lines; outfield wall at the real asymmetric shape and height; stands wrap foul pole to foul pole behind home plate; never a symmetric bowl.',
  arena: 'Real roof form and exterior facade.',
  racetrack: 'Banking, main grandstand, pit road.',
  tennis: 'Court, bowl, roof structure.',
}
