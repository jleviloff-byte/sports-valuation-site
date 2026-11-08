// Hand-modeled venues for the illustrated art pipeline (pilot set).
// Each builder gets ({ fp, kit, mat, THREE, info }) where fp is the projected
// OSM footprint (local meters, north = -z) and returns a THREE.Group.
// Dimensions come from the NAIP aerials (research/raw/stadiums/naip) and the
// Commons references (research/raw/stadiums/art-references.json).
import * as THREE from 'three'
import * as K from './kit.js'

const C = {
  concrete: '#c9c6bd', concrete2: '#b3b0a7', asphalt: '#4a4d52', grass: '#4f8f3c', grass2: '#5a9b46', turf: '#3f8a3f', turf2: '#4a964a',
  dirt: '#b4774a', glass: '#7f97a8', glassDark: '#3d4c58', brick: '#8e4b35', steel: '#e6e7e3', white: '#f1f0ea', roofGrey: '#a9adb0',
}

// Football stadium helper: field rectangle centered in the footprint, aligned to its long axis.
function footballBowl({ fp, mat, axisDeg, fieldShift = [0, 0], apron = 7, profile, facade, rows = true, aisleCount = 0, rowCount = 50, groundColor }) {
  const pts = fp.pts
  const c0 = K.centroid(pts)
  const ang = axisDeg != null ? ((90 - axisDeg) * Math.PI) / 180 * -1 : K.principalAngle(pts)
  const field = { cx: c0[0] + fieldShift[0], cz: c0[1] + fieldShift[1], hx: 109.73 / 2, hz: 48.77 / 2, rr: 2, ang }
  const center = [field.cx, field.cz]
  const g = K.bowl({ center, outline: pts, inner: (th, d) => K.rectHit(center, d, field, apron), profile, facade, rows, aisleCount, rowCount, groundColor, nTheta: 540, nU: 48 }, mat)
  return { g, field, center }
}
// Bearing of the field's long axis (degrees, 0..180).
const axisBearing = (field) => (K.vecBearing([Math.cos(field.ang), Math.sin(field.ang)]) + 360) % 180

function fieldMesh(ring, y, draw, mat, ppm = 6) {
  const box = K.bboxOf(ring, 2)
  const tex = K.canvasTexture(box, ppm, draw)
  const m = K.flatPoly(ring, y, mat('#ffffff', { map: tex, roughness: 0.95 }))
  K.worldUV(m, box)
  return m
}

// ── Michigan Stadium ─────────────────────────────────────────────────────────
// Spec: docs/art-review/specs/michigan-stadium.md. Closed single-tier bowl dug
// into the ground (field ~16 m below grade, rim ~5 m above), field north-south
// (NAIP), brick-and-glass towers on both sidelines, video boards on columns at
// both ends. Colors: sampled (scripts/stadiums/refs/colors.json).
function michigan({ fp, mat, info }) {
  const cl = info.colors || {}
  const SEAT = K.tone(cl.seats || '#737e91', 0.92, 2.6) // sampled at a distance through haze (#1 reads clearly blue); saturation restored
  const NAVY = K.tone(cl['fascia navy'] || '#7082a2', 0.62, 1.1) // sampled in sun on a glossy band; darkened to the navy seen in shade
  const BRICK = K.tone(cl['facade brick'] || '#876865', 0.95, 1.4) // aerial sample is hazy; saturation restored
  const LIGHT = cl['concourse roof'] || '#cac2ba'
  const TURF = K.tone(cl.field || '#3d5245', 1.55, 1.25) // sampled in shade
  const SURR = cl['field surround'] || '#947071'
  const FIELD_Y = -16, RIM = 5
  const { g, field, center } = footballBowl({
    fp, mat, axisDeg: 0, apron: 9, rowCount: 48, aisleCount: 72,
    profile: (u) => {
      if (u < 0.02) return { h: FIELD_Y + 2, color: NAVY }
      if (u > 0.985) return { h: RIM, color: LIGHT }
      return { h: K.lerp(FIELD_Y + 2, RIM - 0.3, (u - 0.02) / 0.965), color: SEAT, seat: true }
    },
    facade: LIGHT,
  })
  g.add(K.rimBand(g, { top: 0, bottom: 2.2, color: NAVY, mat }))
  g.add(fieldMesh(g.userData.innerRing, FIELD_Y, (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { ...field, grass: TURF, grass2: K.tone(TURF, 1.08), surround: SURR, apron: SURR, endzone: '#1d2a48', endzoneText: '#d9b94a' }), mat))
  // Sideline towers: west press box (taller, longer) and east suite tower.
  const along = 0
  const east = K.bearingVec(90)
  for (const [sgn, len, h] of [[-1, 176, 24], [1, 164, 20]]) {
    const off = K.rayHit(center, [east[0] * sgn, east[1] * sgn], fp.pts) - 9
    const t = new THREE.Group()
    const D = 24
    // Field side: glass suite levels separated by light floor slabs.
    const glass = K.box(len, h, D, '#2b3a55', mat, { kind: 'glass' }); t.add(glass)
    for (let k = 1; k < 4; k++) { const slab = K.box(len + 0.4, 0.7, D + 0.6, LIGHT, mat, { kind: 'concrete' }); slab.position.y = (k * h) / 4; t.add(slab) }
    const roof = K.box(len + 2, 1.2, D + 2, '#d9dbd8', mat, { kind: 'concrete' }); roof.position.y = h; t.add(roof)
    // Brick stair towers at both ends, a little taller than the glass block.
    for (const e of [-1, 1]) { const tw = K.box(12, h + 4, D + 3, BRICK, mat, { kind: 'brick' }); tw.position.x = e * (len / 2 + 5); t.add(tw) }
    // Outer face: brick wall behind the glass.
    const back = K.box(len, h, 1.2, BRICK, mat, { kind: 'brick' }); back.position.z = sgn * (D / 2 + 0.6); t.add(back)
    K.place(t, [center[0] + east[0] * sgn * off, center[1] + east[1] * sgn * off], RIM - 3, along)
    g.add(t)
  }
  // End-zone video boards raised on white columns, screen toward the field.
  const ax = K.bearingVec(along)
  for (const sgn of [1, -1]) {
    const off = K.rayHit(center, [ax[0] * sgn, ax[1] * sgn], fp.pts) - 2
    const b = new THREE.Group()
    const W = 34, H = 16, LEG = RIM + 7
    const panel = K.box(W, H, 3, NAVY, mat, { kind: 'paint' }); panel.position.y = LEG; b.add(panel)
    const screen = K.box(W - 2, H - 2, 0.4, '#12161f', mat, { kind: 'glass' }); screen.position.set(0, LEG + 1, sgn * 1.7); b.add(screen)
    for (let k = 0; k < 6; k++) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, LEG, 16), mat(LIGHT, { kind: 'concrete' })); c.position.set(-W / 2 + 3 + (k * (W - 6)) / 5, LEG / 2, 0); c.castShadow = c.receiveShadow = true; b.add(c) }
    K.place(b, [center[0] + ax[0] * sgn * off, center[1] + ax[1] * sgn * off], 0, along + 90)
    g.add(b)
  }
  // Brick entry buildings at grade south-east of the south board (#1).
  const so = K.rayHit(center, K.bearingVec(160), fp.pts)
  for (const [db, dd] of [[152, 3], [166, 8]]) {
    const v = K.bearingVec(db), d = K.rayHit(center, v, fp.pts) + dd
    const eb = new THREE.Group()
    eb.add(K.box(24, 6, 14, BRICK, mat, { kind: 'brick' }))
    const r = K.box(25, 0.8, 15, '#e7e6e1', mat, { kind: 'concrete' }); r.position.y = 6; eb.add(r)
    g.add(K.place(eb, [center[0] + v[0] * d, center[1] + v[1] * d], 0, 90))
  }
  return g
}

// ── Yulman Stadium ───────────────────────────────────────────────────────────
// Spec: docs/art-review/specs/yulman-stadium.md. Field axis 26 degrees (NAIP),
// main stand and press/club structure on the southeast sideline, a lower
// stand on the northwest sideline, seating around both end zones, gray
// aluminum seats, sky-blue end zones and sideline bands.
function yulman({ fp: fp0, mat, info }) {
  // OSM maps Yulman as a ring (field as a hole); use the convex hull outline.
  const fp = { ...fp0, pts: K.hull(fp0.pts) }
  const cl = info.colors || {}
  const SEAT = K.tone(cl['seats (aerial)'] || '#a2b5b8', 0.78, 0.5) // aerial sample is washed out; darkened toward the shaded sample (#4f4f4f) to a mid aluminum gray
  const BLUE = K.tone(cl['sideline band (photo)'] || '#6e828e', 1.12, 2.6) // overcast photo sample (#10); saturation restored (the aerial sample #819b98 is washed out further)
  const TURF = K.tone(cl.field || '#36481a', 1.5, 1.0)
  const METAL = K.tone(cl['facade metal'] || '#565b68', 1.35, 1.0) // sampled in shade
  const BRICK = K.tone(cl['base brick'] || '#433230', 1.4, 1.2)
  const GREEN = '#2e5a43' // light towers: too thin to sample, dark green by eye (#5, #7)
  const AX = 26
  const main = (AX + 90) % 360 // southeast sideline
  const rel = (th) => ((th - AX + 540) % 360) - 180 // 0 = NNE end, +90 = SE side, -90 = NW side, 180 = SSW end
  const { g, field, center } = footballBowl({
    fp, mat, axisDeg: AX, apron: 7, rowCount: 22, aisleCount: 64,
    profile: (u, th) => {
      const r = rel(th), a = Math.abs(r)
      const side = a > 50 && a < 130
      const top = side ? (r > 0 ? 17 : 10) : 8.5 // main stand tallest, NW stand lower, end stands lowest
      if (u < 0.04) return { h: 1.3, color: '#3b3f44' }
      if (u > 0.95) return { h: top + 0.6, color: '#c9c8c2' }
      return { h: K.lerp(1.3, top, (u - 0.04) / 0.91), color: SEAT, seat: true }
    },
    facade: (th) => (Math.abs(rel(th) - 90) < 45 ? METAL : '#bdbcb5'),
  })
  g.add(fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { ...field, grass: TURF, grass2: K.tone(TURF, 1.08), surround: TURF, apron: '#3b3f44', endzone: BLUE, sideBand: BLUE }), mat))
  // Press box and club: a long gray metal-clad block over the main stand,
  // glass toward the field, horizontal panel joints.
  const sv = K.bearingVec(main)
  const off = K.rayHit(center, sv, fp.pts) - 8
  const pb = new THREE.Group()
  const L = 112
  const glass = K.box(L, 5, 12, '#30404f', mat, { kind: 'glass' }); pb.add(glass)
  const clad = K.box(L, 9, 13, K.tone(METAL, 0.62, 1.2), mat, { kind: 'metal' }); clad.position.y = 5; pb.add(clad) // press box reads dark gray-green from the field (#10)
  for (let k = 1; k < 4; k++) { const j = K.box(L + 0.3, 0.25, 13.3, K.tone(METAL, 0.8), mat, { kind: 'metal', bevel: 0 }); j.position.y = 5 + k * 2.2; pb.add(j) }
  const cap = K.box(L + 2, 0.8, 15, K.tone(METAL, 0.75), mat, { kind: 'metal' }); cap.position.y = 14; pb.add(cap)
  K.place(pb, [center[0] + sv[0] * off, center[1] + sv[1] * off], 15, AX)
  g.add(pb)
  // Exterior of the main stand (faces the camera): brick base, glass club
  // level, metal panels above, on the stand's own outer wall.
  const th0 = (main - 55 + 360) % 360, th1 = (main + 55) % 360
  g.add(K.facadeStrip(g, { th0, th1, y0: 0, y1: 4, color: BRICK, mat, kind: 'brick' }))
  g.add(K.facadeStrip(g, { th0, th1, y0: 4, y1: 8, color: '#34475a', mat, kind: 'glass' }))
  g.add(K.facadeStrip(g, { th0, th1, y0: 8, y1: 30, color: METAL, mat, kind: 'metal' }))
  for (let y = 10.5; y < 17; y += 2.2) g.add(K.facadeStrip(g, { th0, th1, y0: y, y1: y + 0.3, color: K.tone(METAL, 0.72), mat, kind: 'metal', out: 0.25 }))
  // Light towers: four along each sideline exterior; the southeast ones are
  // tied together by a lattice truss (#5, #7).
  const av = K.bearingVec(AX)
  for (const s of [1, -1]) {
    const nv = K.bearingVec(main + (s < 0 ? 180 : 0))
    const d = K.rayHit(center, nv, fp.pts) + 3
    const xs = [-54, -18, 18, 54]
    for (const x of xs) g.add(K.place(K.latticeTower(44, mat, GREEN, [8, 3.5]), [center[0] + av[0] * x + nv[0] * d, center[1] + av[1] * x + nv[1] * d], 0, AX))
    if (s > 0) {
      for (const y of [33, 38]) { const tr = K.box(110, 0.9, 0.9, GREEN, mat, { kind: 'steel' }); g.add(K.place(tr, [center[0] + nv[0] * (d + 1), center[1] + nv[1] * (d + 1)], y, AX)) }
      for (const x of [-36, 0, 36]) { const dg = K.box(0.7, 7, 0.7, GREEN, mat, { kind: 'steel', bevel: 0 }); dg.rotation.z = 0.6; g.add(K.place(dg, [center[0] + av[0] * x + nv[0] * (d + 1), center[1] + av[1] * x + nv[1] * (d + 1)], 32.5, AX)) }
    }
  }
  return g
}

// ── Ballparks from traced outlines ───────────────────────────────────────────
// The field polygon (outfield wall line, then the front of the stands) is
// traced on the USGS NAIP aerial in pixel coordinates and mapped to local
// meters. Stands loft from that polygon out to the footprint, by region
// (compass ranges seen from a point inside the field), so the outfield wall,
// foul territory and stand depths follow the real park, not a symmetric bowl.
const inArc = (th, a, b) => ((th - a + 360) % 360) < ((b - a + 360) % 360)
function tracedBallpark({ fp, mat, info, field, outline, center, home, cf, regions, rowCount = 30, aisleCount = 90, turf }) {
  const L = (p) => K.naipToLocal(fp, info.naipBbox, p)
  const fieldPts = field.map(L), c = L(center), H = L(home)
  const outer = outline ? outline.map(L) : fp.pts // traced back of the stands (OSM footprints often take the whole block)
  const region = (th) => regions.find((r) => inArc(th, r.from, r.to)) || regions[regions.length - 1]
  const g = K.bowl({
    center: c, outline: outer, nTheta: 720, nU: 44, rows: true, rowCount, aisleCount,
    inner: (th, d) => K.rayHit(c, d, fieldPts),
    profile: (u, th) => region(th).profile(u),
    facade: (th) => region(th).facade,
    innerWall: (th) => region(th).wall, fieldY: 0.05,
  }, mat)
  g.add(fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.baseballField(ctx, toPx, ppm, { home: H, cf, ...turf }, g.userData.innerRing), mat, 8))
  return { g, c, H, L, region }
}

// ── Fenway Park ──────────────────────────────────────────────────────────────
// Spec: docs/art-review/specs/fenway-park.md. Traced on research/raw/stadiums/
// naip/fenway-park.jpg: home plate (399, 659), center field bearing 43, the
// Green Monster along Lansdowne Street (400..550, 452; 67 m traced, 70 m
// actual), the triangle kink at (627, 507), the deep right-field corner and
// the Pesky Pole (604, 661).
function fenway({ fp, mat, info }) {
  const cl = info.colors || {}
  const RED = K.tone(cl['seats grandstand (overcast)'] || '#572d24', 1.55, 1.35) // overcast daylight sample (#9), lifted for sun; the night (#16) and aerial samples shift the hue
  const BGREEN = K.tone(cl['seats bleachers'] || '#44514e', 1.25, 1.4)
  const MONSTER = K.tone(cl['green monster'] || '#5e7b6a', 0.85, 1.25) // overcast sample; slightly deeper in sun-and-shade balance
  const STEEL = K.tone(cl['structure green'] || '#556c6d', 0.8, 1.2)
  const BRICK = K.tone(cl['facade brick'] || '#6b554d', 1.15, 1.5)
  const turf = { grass: K.tone(cl.field || '#657326', 1.05, 1.1), grass2: K.tone(cl.field || '#657326', 1.18, 1.05), dirt: cl['infield dirt'] || '#a65931' }
  const CONC = '#c9c6bd'
  const field = [[400, 452], [550, 452], [627, 507], [652, 625], [625, 652], [604, 661], [525, 672], [450, 676], [388, 675], [378, 662], [381, 605], [386, 540], [394, 480]]
  const grand = (u) => {
    if (u < 0.03) return { h: 1.4, color: STEEL }
    if (u < 0.45) return { h: K.lerp(1.4, 8, (u - 0.03) / 0.42), color: RED, seat: true }
    if (u < 0.5) return { h: 8.3, color: CONC }
    if (u < 0.8) return { h: K.lerp(8.6, 15.5, (u - 0.5) / 0.3), color: RED, seat: true }
    return { h: 20.5, color: STEEL } // grandstand roof
  }
  const regions = [
    { from: 313, to: 18, wall: MONSTER, facade: MONSTER, profile: (u) => (u < 0.4 ? { h: 11.3, color: MONSTER } : { h: K.lerp(11.6, 13.6, (u - 0.4) / 0.6), color: STEEL, seat: true }) },
    { from: 18, to: 115, wall: MONSTER, facade: BRICK, profile: (u) => (u < 0.03 ? { h: 5.2, color: MONSTER } : u > 0.93 ? { h: 16.5, color: STEEL } : { h: K.lerp(5.4, 15.5, (u - 0.03) / 0.9), color: BGREEN, seat: true }) },
    { from: 115, to: 138, wall: STEEL, facade: BRICK, profile: (u) => (u < 0.03 ? { h: 1.5, color: STEEL } : u > 0.85 ? { h: 15.5, color: STEEL } : { h: K.lerp(1.5, 12, (u - 0.03) / 0.82), color: RED, seat: true }) },
    { from: 138, to: 313, wall: STEEL, facade: BRICK, profile: grand },
  ]
  const outline = [[397, 441], [560, 439], [685, 445], [730, 490], [742, 600], [725, 630], [700, 675], [650, 710], [580, 727], [490, 732], [405, 730], [360, 715], [330, 680], [320, 630], [325, 560], [340, 505], [365, 470], [390, 447]]
  const { g, c, H, L } = tracedBallpark({ fp, mat, info, field, outline, center: [515, 560], home: [399, 659], cf: 43, regions, rowCount: 28, turf })
  // Manual scoreboard set into the base of the Monster (shape only).
  const lf0 = L([440, 452]), lf1 = L([500, 452])
  const sbc = [(lf0[0] + lf1[0]) / 2, (lf0[1] + lf1[1]) / 2]
  const sb = K.box(26, 4.6, 0.6, '#284a39', mat, { kind: 'paint' })
  K.place(sb, [sbc[0], sbc[1] + 0.6], 1.2, 90); g.add(sb)
  for (let k = 0; k < 9; k++) { const p = K.box(1.6, 1.1, 0.3, '#e8e6dc', mat, { bevel: 0 }); K.place(p, [sbc[0] - 11 + k * 2.75, sbc[1] + 0.95], 3.6, 90); g.add(p) }
  // Video board above the center-field bleachers.
  const vb = L([640, 470])
  g.add(K.place(K.scoreboard(30, 11, 17, mat, '#151a22'), vb, 0, 43 + 90))
  // Press and club level behind home: glass box on the grandstand roof.
  const pb = L([395, 712])
  const club = new THREE.Group()
  club.add(K.box(70, 5, 10, '#2f4252', mat, { kind: 'glass' }))
  const top = K.box(72, 0.8, 12, STEEL, mat, { kind: 'metal' }); top.position.y = 5; club.add(top)
  g.add(K.place(club, pb, 20.5, 43 + 90))
  // Light towers on the grandstand roof and two behind the Monster.
  for (const p of [[330, 600], [345, 690], [430, 735], [540, 720], [690, 560]]) g.add(K.place(K.latticeTower(24, mat, STEEL, [9, 4]), L(p), 20.5, 43))
  for (const p of [[440, 444], [520, 444]]) g.add(K.place(K.latticeTower(26, mat, STEEL, [9, 4]), L(p), 13.6, 43))
  return g
}

// ── Wrigley Field ────────────────────────────────────────────────────────────
// Spec: docs/art-review/specs/wrigley-field.md. Traced on research/raw/
// stadiums/naip/wrigley-field.jpg: home plate (482, 584), left-field line
// north, right-field line east (center field bearing 45), ivy wall and open
// bleachers across the outfield, the two-deck roofed grandstand wrapping from
// the left-field corner around home to the right-field corner.
function wrigley({ fp, mat, info }) {
  const cl = info.colors || {}
  const SEAT = K.tone(cl['seats (lit)'] || '#202e2d', 1.7, 1.3) // sampled under evening light (#18); lifted for daylight
  const ROOF = cl.roof || '#646969'
  const SCORE = K.tone(cl.scoreboard || '#4a5e63', 1.05, 1.5)
  const EXT = cl.exterior || '#9e9d8f'
  const RED = cl.marquee || '#b61420'
  const IVY = '#5a8a35' // ivy: too mixed with the brick and shadow to sample cleanly; by eye from #8 and #10
  const BRICK = '#7c3b2b' // field-level brick wall behind home: by eye (#10)
  const turf = { grass: K.tone(cl.field || '#6c822f', 0.95, 1.05), grass2: K.tone(cl.field || '#6c822f', 1.08), dirt: cl['infield dirt'] || '#a67353' }
  const CONC = '#c9c6bd'
  const field = [[480, 352], [620, 355], [665, 370], [680, 390], [692, 425], [695, 460], [697, 500], [702, 545], [700, 555], [640, 587], [560, 603], [485, 615], [470, 600], [470, 550], [470, 475], [472, 400], [477, 357]]
  const outline = [[385, 320], [620, 320], [700, 314], [735, 350], [737, 415], [737, 550], [710, 600], [620, 645], [520, 680], [420, 685], [365, 650], [350, 570], [352, 450], [355, 330]]
  const regions = [
    // Outfield: low ivy wall, open bleachers rising behind it.
    { from: 320, to: 122, wall: IVY, facade: EXT, profile: (u) => (u < 0.03 ? { h: 3.5, color: IVY } : u > 0.94 ? { h: 13, color: EXT } : { h: K.lerp(3.7, 12.5, (u - 0.03) / 0.91), color: SEAT, seat: true }) },
    // Grandstand: lower deck, suite level, upper deck, roof.
    { from: 122, to: 320, wall: BRICK, facade: EXT, profile: (u) => {
      if (u < 0.03) return { h: 1.2, color: BRICK }
      if (u < 0.48) return { h: K.lerp(1.2, 9, (u - 0.03) / 0.45), color: SEAT, seat: true }
      if (u < 0.55) return { h: 10.5, color: '#33424d' }
      if (u < 0.8) return { h: K.lerp(13, 21, (u - 0.55) / 0.25), color: SEAT, seat: true }
      return { h: 24.5, color: ROOF }
    } },
  ]
  const { g, c, H, L } = tracedBallpark({ fp, mat, info, field, outline, center: [580, 470], home: [482, 584], cf: 45, regions, rowCount: 26, turf })
  g.add(K.rimBand(g, { top: 0, bottom: 1.4, color: '#2f5a3c', mat })) // green trim along the top of the exterior wall (m1)
  // Manual center-field scoreboard on the back of the bleachers, clock on top.
  const cfv = K.bearingVec(45)
  const sbp = (() => { const t = K.rayHit(H, cfv, outline.map(L)); return [H[0] + cfv[0] * (t - 4), H[1] + cfv[1] * (t - 4)] })()
  const sb = new THREE.Group()
  sb.add(K.box(5, 13, 3, SCORE, mat, { kind: 'paint' }))
  const face = K.box(26, 9, 2.4, SCORE, mat, { kind: 'paint' }); face.position.y = 13; sb.add(face)
  for (let r = 0; r < 3; r++) for (let k = 0; k < 10; k++) { const p = K.box(1.4, 1.1, 0.3, '#e6e2d6', mat, { bevel: 0 }); p.position.set(-10.5 + k * 2.3 + (k > 4 ? 1.2 : 0), 14.5 + r * 2.4, 1.3); sb.add(p) }
  const clock = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.9, 0.6, 32), mat('#efece2')); clock.rotation.x = Math.PI / 2; clock.position.set(0, 23.8, 0.6); sb.add(clock)
  g.add(K.place(sb, sbp, 12.5, 45 + 90))
  // Video boards over the left-field and right-field bleachers (plain panels).
  for (const p of [[440, 326], [735, 470]]) g.add(K.place(K.scoreboard(22, 9, 6, mat, '#151a22'), L(p), 13, p[0] < 600 ? 90 : 0))
  // Roof light banks: white lattice frames on the grandstand roof (#10).
  for (const p of [[362, 470], [362, 560], [400, 660], [500, 676], [610, 640]]) {
    const t = new THREE.Group()
    for (let k = 0; k < 2; k++) { const leg = K.box(0.5, 9, 0.5, '#e6e5df', mat, { kind: 'steel', bevel: 0 }); leg.position.x = -5 + k * 10; t.add(leg) }
    const bank = K.box(14, 6, 1, '#efeee8', mat, { emissive: '#fff4d6' }); bank.position.y = 9; t.add(bank)
    const ang = K.vecBearing([L(p)[0] - c[0], L(p)[1] - c[1]]) + 90
    g.add(K.place(t, L(p), 24.5, ang))
  }
  // Red marquee at the home-plate corner (shape only, no text).
  const hv = K.bearingVec(225)
  const th = K.rayHit(H, hv, outline.map(L))
  const mq = new THREE.Group()
  const sign = K.box(18, 9, 1.5, RED, mat, { kind: 'paint' }); sign.position.y = 6; mq.add(sign)
  const board = K.box(14, 3, 1.7, '#16181c', mat, { kind: 'glass' }); board.position.y = 8; mq.add(board)
  for (const e of [-1, 1]) { const p = K.box(0.8, 6, 0.8, '#2b3a2e', mat); p.position.x = e * 7; mq.add(p) }
  g.add(K.place(mq, [H[0] + hv[0] * (th + 3), H[1] + hv[1] * (th + 3)], 0, 225 + 90))
  return g
}

// ── SoFi Stadium ─────────────────────────────────────────────────────────────
// Spec: docs/art-review/specs/sofi-stadium.md. Canopy traced on research/raw/
// stadiums/naip/sofi-stadium.jpg (pixel coordinates, mapped exactly): rounded
// on the west, sharp points at the north-east and south-east. In the aerial the
// canopy is a light silver panel grid over the bowl inside a wide opaque
// white band. It is low (the bowl is sunk below grade): the edge is highest on
// the west and the south-east tail sweeps down to the ground. Slender white
// columns carry it; the sides are open.
function sofi({ fp, mat, info }) {
  const cl = info.colors || {}
  const PANEL = K.tone(cl['roof (aerial)'] || '#96a9ac', 1.22, 0.55) // aerial sample; the oblique photo (#1, #c4bfb4) reads warmer from reflected sky and ground
  const PANEL2 = K.tone(cl['roof (aerial)'] || '#96a9ac', 1.05, 0.7)
  const WHITE = '#f2f2ef'
  const L = (p) => K.naipToLocal(fp, info.naipBbox, p)
  const TRACE = [[665, 140], [560, 165], [420, 200], [300, 240], [232, 275], [222, 330], [225, 450], [240, 560], [270, 660], [320, 750], [400, 840], [500, 900], [620, 935], [760, 950], [900, 965], [1015, 985], [930, 880], [850, 800], [790, 700], [745, 600], [715, 480], [695, 360], [680, 250]]
  const INNER = [[255, 330], [250, 450], [265, 580], [300, 690], [370, 790], [470, 860], [600, 890], [760, 900], [830, 880], [830, 820], [780, 720], [720, 600], [705, 480], [690, 360], [650, 250], [600, 195], [500, 180], [380, 200], [290, 250]]
  const outline = TRACE.map(L), inner = INNER.map(L)
  const g = new THREE.Group()
  // Bowl under the canopy, sunk ~30 m (mostly hidden by the roof).
  const pts = fp.pts, c0 = K.centroid(pts), ang = K.principalAngle(pts)
  const field = { cx: c0[0], cz: c0[1], hx: 54.9, hz: 24.4, rr: 2, ang }
  const FY = -30
  const bowl = K.bowl({ center: c0, outline: pts, nTheta: 360, nU: 24, rows: true, rowCount: 40, inner: (th, d) => K.rectHit(c0, d, field, 8),
    profile: (u) => (u < 0.02 ? { h: FY + 1.5, color: '#1a1d22' } : u > 0.97 ? { h: 2, color: '#c9c6bd' } : { h: K.lerp(FY + 1.5, 2, u), color: '#3b4350', seat: true }), facade: '#d8d8d2' }, mat)
  g.add(bowl)
  // Canopy surface: a grid clipped to the traced outline; edge height falls
  // from ~26 m on the west to the ground at the south-east tip, with a low dome.
  const box = K.bboxOf(outline, 2)
  const west = L([222, 450]), tip = L([1015, 985])
  const axv = [tip[0] - west[0], tip[1] - west[1]], axl = Math.hypot(...axv)
  const along = ([x, z]) => Math.max(0, Math.min(1, ((x - west[0]) * axv[0] + (z - west[1]) * axv[1]) / (axl * axl)))
  const segDist = (p, a, b) => { const vx = b[0] - a[0], vz = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * vx + (p[1] - a[1]) * vz) / (vx * vx + vz * vz))); const qx = a[0] + vx * t, qz = a[1] + vz * t; return [Math.hypot(p[0] - qx, p[1] - qz), [qx, qz]] }
  const nearest = (p) => { let best = [Infinity, p]; for (let i = 0; i < outline.length; i++) { const r = segDist(p, outline[i], outline[(i + 1) % outline.length]); if (r[0] < best[0]) best = r } return best }
  const edgeH = (p) => { const a = along(p); return a < 0.68 ? 30 - 4 * a : K.lerp(27.3, 1.5, K.smooth((a - 0.68) / 0.32)) }
  const height = (p, d) => edgeH(p) + 7 * K.smooth(Math.min(1, d / 90))
  const NX = 140, NZ = 140
  const P = [], UV = [], IDX = [], inside = []
  for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) {
    let p = [K.lerp(box.x0, box.x1, i / NX), K.lerp(box.z0, box.z1, j / NZ)]
    const ins = K.pointInPoly(p, outline)
    const [d, q] = nearest(p)
    if (!ins) p = q
    inside.push(ins)
    P.push(p[0], height(p, ins ? d : 0), p[1])
    UV.push((p[0] - box.x0) / (box.x1 - box.x0), 1 - (p[1] - box.z0) / (box.z1 - box.z0))
  }
  const id = (i, j) => j * (NX + 1) + i
  for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
    const q = [id(i, j), id(i + 1, j), id(i + 1, j + 1), id(i, j + 1)]
    if (!q.some((k) => inside[k])) continue
    IDX.push(q[0], q[3], q[1], q[1], q[3], q[2])
  }
  const cg = new THREE.BufferGeometry()
  cg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); cg.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2)); cg.setIndex(IDX); cg.computeVertexNormals()
  const tex = K.canvasTexture(box, 3, (ctx, toPx, ppm) => {
    ctx.fillStyle = WHITE; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = PANEL; ctx.beginPath(); for (const p of inner) ctx.lineTo(...toPx(p)); ctx.closePath(); ctx.fill()
    ctx.save(); ctx.clip()
    // Panel grid: roughly 12 m bays, a few panels a shade darker or lighter.
    const n = [-Math.sin(ang), Math.cos(ang)], a = [Math.cos(ang), Math.sin(ang)]
    let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    for (let u = -260; u < 260; u += 12) for (let v = -200; v < 200; v += 12) {
      const r = rnd(); if (r > 0.985) { ctx.fillStyle = r > 0.91 ? PANEL2 : K.tone(PANEL, 1.08); const c = [c0[0] + a[0] * u + n[0] * v, c0[1] + a[1] * u + n[1] * v]; ctx.beginPath(); for (const [du, dv] of [[0, 0], [12, 0], [12, 12], [0, 12]]) ctx.lineTo(...toPx([c[0] + a[0] * du + n[0] * dv, c[1] + a[1] * du + n[1] * dv])); ctx.fill() }
    }
    ctx.strokeStyle = K.tone(PANEL, 0.82); ctx.lineWidth = Math.max(1, 0.35 * ppm)
    for (let k = -30; k <= 30; k++) {
      const o = k * 12
      ctx.beginPath(); ctx.moveTo(...toPx([c0[0] - a[0] * 300 + n[0] * o, c0[1] - a[1] * 300 + n[1] * o])); ctx.lineTo(...toPx([c0[0] + a[0] * 300 + n[0] * o, c0[1] + a[1] * 300 + n[1] * o])); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(...toPx([c0[0] + a[0] * o - n[0] * 300, c0[1] + a[1] * o - n[1] * 300])); ctx.lineTo(...toPx([c0[0] + a[0] * o + n[0] * 300, c0[1] + a[1] * o + n[1] * 300])); ctx.stroke()
    }
    ctx.restore()
    ctx.strokeStyle = '#d9dcdc'; ctx.lineWidth = 1.2 * ppm; ctx.beginPath(); for (const p of inner) ctx.lineTo(...toPx(p)); ctx.closePath(); ctx.stroke()
  })
  const canopy = new THREE.Mesh(cg, mat('#ffffff', { map: tex, kind: 'metal', roughness: 0.42, metalness: 0.2, side: THREE.DoubleSide, opacity: 0.86 }))
  canopy.castShadow = canopy.receiveShadow = true
  g.add(canopy)
  // Edge fascia: a white band under the canopy edge.
  const fpz = [], fi = []
  outline.forEach((p) => { const h = edgeH(p); fpz.push(p[0], Math.max(0, h - 3.2), p[1], p[0], h + 0.05, p[1]) })
  // Densify along each segment for a smooth band.
  const dense = []
  for (let i = 0; i < outline.length; i++) { const a = outline[i], b = outline[(i + 1) % outline.length]; for (let k = 0; k < 12; k++) dense.push([K.lerp(a[0], b[0], k / 12), K.lerp(a[1], b[1], k / 12)]) }
  const bp = []
  dense.forEach((p) => { const h = edgeH(p); bp.push(p[0], Math.max(0, h - 6), p[1], p[0], h + 0.05, p[1]) })
  for (let i = 0; i < dense.length; i++) { const a = i * 2, b = ((i + 1) % dense.length) * 2; fi.push(a, b, a + 1, b, b + 1, a + 1) }
  const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.Float32BufferAttribute(bp, 3)); bg.setIndex(fi); bg.computeVertexNormals()
  const band = new THREE.Mesh(bg, mat(WHITE, { kind: 'paint', side: THREE.DoubleSide })); band.castShadow = band.receiveShadow = true
  g.add(band)
  // Slender white columns under the edge (open sides).
  dense.forEach((p, i) => { if (i % 9) return; const h = edgeH(p) - 6; if (h < 3) return; const col = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, h, 12), mat('#f0f0ec', { kind: 'paint' })); col.position.set(p[0] + (c0[0] - p[0]) * 0.02, h / 2, p[1] + (c0[1] - p[1]) * 0.02); col.castShadow = true; g.add(col) })
  // Curved white pavilion buildings tucked under the west edge (#7).
  for (const [px, py, len, brg] of [[300, 300, 70, 160], [262, 520, 60, 175]]) {
    const b = new THREE.Group()
    b.add(K.box(len, 12, 16, '#e9e9e5', mat, { kind: 'paint' }))
    const gl = K.box(len + 0.2, 3, 16.2, '#3a4652', mat, { kind: 'glass' }); gl.position.y = 4.5; b.add(gl)
    g.add(K.place(b, L([px - 52, py]), 0, brg))
  }
  return g
}

// ── Madison Square Garden ────────────────────────────────────────────────────
// Spec: docs/art-review/specs/madison-square-garden.md. Round drum (NAIP:
// ~61 m radius, light rim band ~13 m wide, small center ring), vertical
// bronze fins over dark glass, light cornice, flat gray cable roof; a beige
// podium and a glazed entrance block on the Eighth Avenue (west) side, where
// the reference photos (#17, #19) look from. Camera from the northwest so that
// facade is the one seen (sun moves with the camera).
function msg({ fp, mat, info }) {
  const cl = info.colors || {}
  const FIN = K.tone(cl['facade cladding'] || '#8d7052', 1.15, 1.1)
  const GLASS = cl.glass || '#423930'
  const PODIUM = K.tone(cl.podium || '#edd8be', 0.93, 0.9) // sampled in full sun
  const ROOF = cl.roof || '#9b9993'
  const RIM = '#dcdbd5' // roof rim band: white in the aerial, by eye (saturates the sampler)
  const pts = fp.pts
  const c = K.centroid(pts)
  // Drum radius: median of rays to the footprint (ignores bumps from attached structures).
  const rs = []; for (let i = 0; i < 72; i++) rs.push(K.rayHit(c, K.bearingVec(i * 5), pts))
  const R = Math.min(62, rs.sort((a, b) => a - b)[36])
  const H = 46
  const g = new THREE.Group()
  const cyl = (r, h, color, opts = {}, seg = 128) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg, 1, !!opts.open), mat(color, opts)); m.castShadow = m.receiveShadow = true; m.position.set(c[0], h / 2 + (opts.y || 0), c[1]); return m }
  // Base, glass drum, cornice.
  g.add(cyl(R + 0.5, 12, '#5a5048', { kind: 'concrete' }))
  g.add(cyl(R - 0.6, H - 15, GLASS, { kind: 'glass', y: 12 }))
  const cornice = cyl(R + 1.4, 3.2, '#e1ded6', { kind: 'concrete', y: H - 3.2 }); g.add(cornice)
  // Vertical bronze fins around the drum, standing proud of the glass.
  const N = 84
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2
    const fin = K.box(3.4, H - 15, 1.6, FIN, mat, { kind: 'metal', bevel: 0.15 })
    fin.position.set(c[0] + Math.cos(a) * (R + 0.4), 12, c[1] + Math.sin(a) * (R + 0.4))
    fin.rotation.y = -a + Math.PI / 2
    g.add(fin)
  }
  // Roof: almost flat cable roof, light rim band, center ring, faint radial lines.
  const roofTex = (() => {
    const box = { x0: c[0] - R - 2, x1: c[0] + R + 2, z0: c[1] - R - 2, z1: c[1] + R + 2 }
    return K.canvasTexture(box, 6, (ctx, toPx, ppm) => {
      ctx.fillStyle = ROOF; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      const [cx, cz] = toPx(c)
      ctx.strokeStyle = K.tone(ROOF, 0.9); ctx.lineWidth = 0.35 * ppm
      for (let k = 0; k < 48; k++) { const a = (k / 48) * Math.PI * 2; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * 9 * ppm, cz + Math.sin(a) * 9 * ppm); ctx.lineTo(cx + Math.cos(a) * (R - 13) * ppm, cz + Math.sin(a) * (R - 13) * ppm); ctx.stroke() }
      ctx.fillStyle = RIM; ctx.beginPath(); ctx.arc(cx, cz, R * ppm, 0, Math.PI * 2); ctx.arc(cx, cz, (R - 13) * ppm, 0, Math.PI * 2, true); ctx.fill()
      ctx.fillStyle = '#c8c6bf'; ctx.beginPath(); ctx.arc(cx, cz, 9 * ppm, 0, Math.PI * 2); ctx.fill()
    })
  })()
  const roofG = new THREE.CircleGeometry(R + 0.8, 128); roofG.rotateX(-Math.PI / 2)
  const rp = roofG.attributes.position
  for (let i = 0; i < rp.count; i++) { const d = Math.hypot(rp.getX(i), rp.getZ(i)); rp.setY(i, 1.6 * (1 - (d / R) ** 2)) }
  roofG.translate(c[0], H, c[1]); roofG.computeVertexNormals()
  const roof = new THREE.Mesh(roofG, mat('#ffffff', { map: roofTex, kind: 'concrete' }))
  K.worldUV(roof, { x0: c[0] - R - 2, x1: c[0] + R + 2, z0: c[1] - R - 2, z1: c[1] + R + 2 })
  roof.castShadow = roof.receiveShadow = true
  g.add(roof)
  const hub = cyl(9, 2.4, '#d3d1ca', { kind: 'concrete', y: H + 1 }); g.add(hub)
  // Podium on the Eighth Avenue (west) side, aligned to the Manhattan grid (29 deg).
  const AVE = 29
  const west = K.bearingVec(AVE - 90)
  const pod = new THREE.Group()
  const body = K.box(118, 18, 26, PODIUM, mat, { kind: 'concrete' }); pod.add(body)
  for (let k = 1; k < 4; k++) { const band = K.box(118.4, 0.6, 26.4, K.tone(PODIUM, 0.82), mat, { bevel: 0 }); band.position.y = k * 4.5; pod.add(band) }
  const shop = K.box(118.4, 4, 26.4, '#3b3f44', mat, { kind: 'glass' }); pod.add(shop)
  const scr = K.box(16, 9, 0.6, '#181c22', mat, { kind: 'glass' }); scr.position.set(30, 7, -13.4); pod.add(scr)
  g.add(K.place(pod, [c[0] + west[0] * (R + 14), c[1] + west[1] * (R + 14)], 0, AVE))
  // Glazed entrance block between the podium and the drum (north-west).
  const nw = K.bearingVec(AVE - 60)
  const ent = new THREE.Group()
  ent.add(K.box(34, 32, 18, '#2e3a46', mat, { kind: 'glass' }))
  for (let k = 1; k < 6; k++) { const m = K.box(34.4, 0.4, 18.4, '#8a95a0', mat, { kind: 'steel', bevel: 0 }); m.position.y = k * 5.3; ent.add(m) }
  const sign = K.box(22, 4, 0.5, '#1e5aa8', mat, { kind: 'paint' }); sign.position.set(0, 3, -9.3); ent.add(sign)
  g.add(K.place(ent, [c[0] + nw[0] * (R + 4), c[1] + nw[1] * (R + 4)], 0, AVE - 60 + 90))
  // Screens on the drum (plain dark panels).
  for (const b of [AVE - 120, AVE - 20]) {
    const v = K.bearingVec(b)
    const s = K.box(18, 12, 0.8, '#191d24', mat, { kind: 'glass' })
    g.add(K.place(s, [c[0] + v[0] * (R + 2.4), c[1] + v[1] * (R + 2.4)], 16, b + 90))
  }
  g.userData.cameraBearing = 315
  return g
}

// ── Daytona International Speedway ──────────────────────────────────────────
// Spec: docs/art-review/specs/daytona-international-speedway.md. 2.5-mile
// tri-oval measured on the NAIP aerial (center 312 m east / 208 m north of the
// property centroid, long axis 38 degrees, front stretch on the north-west
// side). Banking 31 degrees in the turns, 18 in the tri-oval, 3 on the back
// stretch. The sprite frames the front-stretch grandstand (checkered seats in
// two tiers, a glass suite level, a light fascia, entrance towers behind), the
// front stretch with pit road and garages, and the banked turn entries.
function daytona({ fp, mat, info }) {
  const cl = info.colors || {}
  const ASPH = K.tone(cl.track || '#8c9899', 0.62, 0.8) // sampled in hard sun; asphalt reads darker in shade
  const GRASS = K.tone(cl['infield grass'] || '#56732c', 1.15, 1.0)
  const GLASS = cl['facade glass'] || '#20334a'
  const CLAD = K.tone(cl['facade cladding'] || '#8091af', 1.3, 0.35) // sampled against the sky; near-white panels
  const c = [312, -208]
  const ax = K.bearingVec(38), nx = K.bearingVec(308) // +v points to the front stretch
  const S = 500, R = 340, W = 32, DOG = 80
  const n = 900
  const L1 = 2 * S, L2 = Math.PI * R, total = 2 * L1 + 2 * L2
  const P = []
  for (let i = 0; i < n; i++) {
    let s2 = (i / n) * total, u, v
    if (s2 < L1) { u = -S + s2; v = -R }
    else if ((s2 -= L1) < L2) { const a = -Math.PI / 2 + s2 / R; u = S + R * Math.cos(a); v = R * Math.sin(a) }
    else if ((s2 -= L2) < L1) { u = S - s2; v = R + DOG * Math.cos((u / S) * (Math.PI / 2)) ** 2 }
    else { s2 -= L1; const a = Math.PI / 2 + s2 / R; u = -S + R * Math.cos(a); v = R * Math.sin(a) }
    P.push([u, v])
  }
  const toW = ([u, v]) => [c[0] + ax[0] * u + nx[0] * v, c[1] + ax[1] * u + nx[1] * v]
  const frontV = (u) => R + DOG * Math.cos((Math.max(-S, Math.min(S, u)) / S) * (Math.PI / 2)) ** 2
  const g = new THREE.Group()
  // Track: apron, banked racing surface, white outside wall; catch fence on top.
  const tp = [], tc = [], ti = [], fenceP = [], fenceI = [], innerEdge = []
  const A = new THREE.Color(ASPH), A2 = new THREE.Color(K.tone(ASPH, 1.07)), WALL = new THREE.Color('#f4f3ee'), APRON = new THREE.Color(K.tone(ASPH, 1.25, 0.6))
  for (let i = 0; i < n; i++) {
    const [u, v] = P[i], [u2, v2] = P[(i + 1) % n]
    const tl = Math.hypot(u2 - u, v2 - v) || 1
    const ox = (v2 - v) / tl, oz = -(u2 - u) / tl
    const sgn = ox * u + oz * v > 0 ? 1 : -1
    const inTurn = Math.abs(u) > S - 5
    const bank = inTurn ? Math.tan((31 * Math.PI) / 180) : v > R ? Math.tan((18 * Math.PI) / 180) : Math.tan((3 * Math.PI) / 180)
    const out = [u + sgn * ox * W / 2, v + sgn * oz * W / 2], inn = [u - sgn * ox * W / 2, v - sgn * oz * W / 2], apron = [u - sgn * ox * (W / 2 + 10), v - sgn * oz * (W / 2 + 10)]
    const [x0, z0] = toW(apron), [x1, z1] = toW(inn), [x2, z2] = toW(out)
    const top = 0.3 + W * bank
    innerEdge.push([x0, z0])
    tp.push(x0, 0.2, z0, x1, 0.3, z1, x2, top, z2, x2, top + 1.3, z2)
    const col = i % 24 < 12 ? A : A2
    tc.push(APRON.r, APRON.g, APRON.b, col.r, col.g, col.b, col.r, col.g, col.b, WALL.r, WALL.g, WALL.b)
    fenceP.push(x2, top + 1.3, z2, x2, top + 7.5, z2)
  }
  for (let i = 0; i < n; i++) { const a = i * 4, b = ((i + 1) % n) * 4; for (const k of [0, 1, 2]) ti.push(a + k, b + k, a + k + 1, b + k, b + k + 1, a + k + 1); const fa = i * 2, fb = ((i + 1) % n) * 2; fenceI.push(fa, fb, fa + 1, fb, fb + 1, fa + 1) }
  const tg = new THREE.BufferGeometry()
  tg.setAttribute('position', new THREE.Float32BufferAttribute(tp, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(tc, 3)); tg.setIndex(ti); tg.computeVertexNormals()
  const track = new THREE.Mesh(tg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide, kind: 'concrete' }))
  track.castShadow = track.receiveShadow = true
  g.add(track)
  const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.Float32BufferAttribute(fenceP, 3)); fg.setIndex(fenceI); fg.computeVertexNormals()
  g.add(new THREE.Mesh(fg, mat('#9aa0a6', { opacity: 0.35, side: THREE.DoubleSide, kind: 'steel' })))
  // Infield: grass inside the apron's inner edge.
  g.add(K.flatPoly(innerEdge.filter((_, i) => i % 2 === 0), 0.12, mat(GRASS, { kind: 'grass' })))
  // Lake along the back stretch.
  const lake = []
  for (let i = 0; i < 48; i++) { const t = (i / 48) * Math.PI * 2; lake.push(toW([380 * Math.cos(t), -R + 150 + 70 * Math.sin(t)])) }
  g.add(K.water(lake, mat, '#5f7f86'))
  // Pit road: asphalt lane inside the front stretch, a low pit wall, pit boxes.
  const strip = (v0, v1, y, color, kind, u0 = -400, u1 = 400, step = 8) => {
    const pp = [], ii = []
    let k = 0
    for (let u = u0; u <= u1; u += step) { const fv = frontV(u); const [xa, za] = toW([u, fv - v0]); const [xb, zb] = toW([u, fv - v1]); pp.push(xa, y, za, xb, y, zb); if (k) { const a = (k - 1) * 2, b = k * 2; ii.push(a, b, a + 1, b, b + 1, a + 1) } k++ }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3)); sg.setIndex(ii); sg.computeVertexNormals()
    const m = new THREE.Mesh(sg, mat(color, { kind, side: THREE.DoubleSide })); m.receiveShadow = true
    return m
  }
  g.add(strip(W / 2 + 14, W / 2 + 32, 0.25, K.tone(ASPH, 1.05), 'concrete'))
  g.add(strip(W / 2 + 32, W / 2 + 36, 0.22, '#d8d6cf', 'concrete'))
  for (let u = -390; u <= 390; u += 6) { const fv = frontV(u); const w = K.box(6.2, 1.2, 0.8, '#e9e8e2', mat, { bevel: 0.1 }); g.add(K.place(w, toW([u, fv - W / 2 - 13.6]), 0.2, 38)) }
  const BOX = ['#2f6db5', '#d8dadc', '#c9372c', '#e0b23a', '#2b8a57', '#e8e8e4']
  for (let u = -380, k = 0; u <= 380; u += 14, k++) { const fv = frontV(u); const b = K.box(9, 3.2, 6, BOX[k % BOX.length], mat, { kind: 'fabric' }); g.add(K.place(b, toW([u, fv - W / 2 - 40]), 0.2, 38)) }
  // Garages: long white-roofed sheds behind pit road.
  for (let r = 0; r < 3; r++) for (let k = -3; k <= 3; k++) { const gb = K.box(70, 6, 18, '#ecebe6', mat, { kind: 'concrete' }); const u = k * 90; g.add(K.place(gb, toW([u, frontV(u) - W / 2 - 64 - r * 28]), 0, 38)) }
  // Grandstand along the outside of the front stretch: lower checkered tier,
  // glass suite level, upper checkered tier, light fascia, back wall.
  const WHITE = new THREE.Color('#f2f1ec'), BLACK = new THREE.Color('#1e2023'), GRAY = new THREE.Color('#8d9198')
  const GL = new THREE.Color(GLASS), CL = new THREE.Color(CLAD), CON = new THREE.Color('#c9c6bd')
  // Profile: [offset from the outside wall (m), height (m), kind]; 'seat' rows get the checker.
  const prof = [[0, 4, 'con']]
  for (let r = 1; r <= 8; r++) prof.push([r * 4, 4 + r * 2.1, 'seat'])
  prof.push([33, 21, 'con'], [33, 27, 'glass'], [36, 27, 'con'])
  for (let r = 1; r <= 7; r++) prof.push([36 + r * 3.8, 27 + r * 2.4, 'seat'])
  prof.push([63, 47, 'con'], [63, 53, 'clad'], [72, 53, 'clad'], [72, 0, 'back'])
  const gp = [], gc = []
  const U0 = -470, U1 = 470, STEP = 5
  const at = (u, o, h) => { const fv = frontV(u); const p = toW([u, fv + W / 2 + 3 + o]); return [p[0], h, p[1]] }
  for (let u = U0; u < U1; u += STEP) {
    for (let j = 0; j < prof.length - 1; j++) {
      const [o0, h0, k0] = prof[j], [o1, h1, k1] = prof[j + 1]
      const a = at(u, o0, h0), b = at(u + STEP, o0, h0), cc = at(u + STEP, o1, h1), d = at(u, o1, h1)
      let col
      if (k1 === 'seat') {
        const row = j, block = Math.floor((u - U0) / 15)
        const pick = (block + Math.floor(row / 3)) % 2
        col = pick ? WHITE : BLACK
        if ((block * 7 + row) % 11 === 0) col = GRAY
      } else col = k1 === 'glass' ? GL : k1 === 'clad' ? CL : k1 === 'back' ? CL : CON
      gp.push(...a, ...b, ...cc, ...a, ...cc, ...d)
      for (let t = 0; t < 6; t++) gc.push(col.r, col.g, col.b)
    }
  }
  const gg = new THREE.BufferGeometry()
  gg.setAttribute('position', new THREE.Float32BufferAttribute(gp, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(gc, 3)); gg.computeVertexNormals()
  const gs = new THREE.Mesh(gg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide, kind: 'seat' }))
  gs.castShadow = gs.receiveShadow = true
  g.add(gs)
  // Fascia band and suite glass along the top (no text).
  for (let u = U0; u < U1; u += 20) {
    const p = at(u + 10, 63.2, 0)
    const band = K.box(20.2, 2.2, 0.6, '#f6f5f1', mat, { bevel: 0 }); g.add(K.place(band, [p[0], p[2]], 50.5, 38))
    const sg = K.box(20.2, 3, 0.5, GLASS, mat, { kind: 'glass', bevel: 0 }); g.add(K.place(sg, [p[0], p[2]], 47, 38))
  }
  // Entrance towers (five) on the back of the grandstand.
  for (let k = -2; k <= 2; k++) {
    const u = k * 190
    const p = at(u, 82, 0)
    const tw = new THREE.Group()
    tw.add(K.box(26, 58, 20, '#d6d8dc', mat, { kind: 'concrete' }))
    const gl = K.box(8, 50, 20.4, GLASS, mat, { kind: 'glass' }); gl.position.y = 4; tw.add(gl)
    g.add(K.place(tw, [p[0], p[2]], 0, 38))
  }
  // Light poles along the outside of the turn entries.
  for (const u of [-520, -480, 480, 520]) { const p = toW([u, frontV(u) + W / 2 + 14]); const pole = K.box(0.8, 32, 0.8, '#c8cbcf', mat, { kind: 'steel', bevel: 0 }); pole.position.set(p[0], 0, p[1]); g.add(pole) }
  // Frame (overhaul): the front half of the tri-oval. The
  // camera sits beyond the back stretch looking across the infield at the
  // frontstretch grandstand, which faces it (brief: frame on the grandstand side).
  g.userData.frame = [[-S - R * 0.35, R * 0.55], [S + R * 0.35, R * 0.55], [-S - R * 0.35, R + DOG + W / 2 + 90], [S + R * 0.35, R + DOG + W / 2 + 90]].map(([u, v]) => toW([u, v])) // grandstand, front stretch, pit road and both turn entries
  g.userData.cameraBearing = 128 // opposite the grandstand side (bearing 308)
  g.userData.cameraElev = 36
  return g
}

// ── Arthur Ashe Stadium ──────────────────────────────────────────────────────
// Spec: docs/art-review/specs/arthur-ashe-stadium.md. Rounded-octagon bowl
// (NAIP) with a brick base, steep tiers with a suite ring, blue seats; a
// separate dark steel superstructure (eight columns and a perimeter truss)
// carrying a white fabric roof whose two panels are drawn part-way open over
// the court.
function ashe({ fp, mat, info }) {
  const cl = info.colors || {}
  const SEAT = K.tone(cl.seats || '#374e70', 1.15, 1.1)
  const COURT = K.tone(cl.court || '#9ebce4', 0.72, 1.3) // sampled under arena lights (#21); deeper blue in daylight
  const SURR = K.tone(cl['court surround'] || '#cbfa95', 0.62, 0.75) // lit sample; daylight green is darker
  const STEEL = K.tone(cl.steel || '#3b4653', 1.0, 1.0)
  const BRICK = K.tone(cl['base brick'] || '#78452f', 1.0, 1.1)
  const FABRIC = '#fbfbf8' // roof fabric: white; samples carry sky tint (#c6d2f0) and haze (#d9dad9)
  const pts = fp.pts
  const c = K.centroid(pts)
  const ang = K.principalAngle(pts)
  const court = { cx: c[0], cz: c[1], hx: 18, hz: 10, rr: 1, ang }
  const g = K.bowl({
    center: c, outline: pts, nTheta: 480, nU: 46, rows: true, rowCount: 34, aisleCount: 64,
    inner: (th, d) => K.rectHit(c, d, court, 6),
    profile: (u) => {
      if (u < 0.02) return { h: 1.2, color: '#22324d' }
      if (u < 0.36) return { h: K.lerp(1.2, 14, (u - 0.02) / 0.34), color: SEAT, seat: true }
      if (u < 0.44) return { h: 16.5, color: '#2a3a4c' } // suite ring
      if (u < 0.95) return { h: K.lerp(19, 41, (u - 0.44) / 0.51), color: SEAT, seat: true }
      return { h: 42, color: '#c9c6bd' }
    },
    facade: BRICK, facadeKind: 'brick',
  }, mat)
  g.add(K.rimBand(g, { top: 0, bottom: 28, color: '#9aa1a8', mat, kind: 'metal', out: 0.2 })) // upper facade above the brick base
  g.add(fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.tennisCourt(ctx, toPx, ppm, { ...court, court: COURT, surround: SURR }), mat, 10))
  // Steel superstructure: eight columns just outside the bowl, perimeter truss.
  const H = 58
  const ring = []
  for (let i = 0; i < 8; i++) {
    const b = (K.vecBearing([Math.cos(ang), Math.sin(ang)]) + 22.5 + i * 45) % 360
    const d = K.bearingVec(b)
    const t = K.rayHit(c, d, pts) + 7
    const p = [c[0] + d[0] * t, c[1] + d[1] * t]
    ring.push(p)
    const col = K.box(4.5, H, 4.5, STEEL, mat, { kind: 'steel' }); col.position.set(p[0], 0, p[1]); g.add(col)
  }
  // Perimeter truss: two chords with diagonal webbing between columns.
  for (let i = 0; i < 8; i++) {
    const a = ring[i], b = ring[(i + 1) % 8]
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], len = Math.hypot(b[0] - a[0], b[1] - a[1])
    const brg = K.vecBearing([b[0] - a[0], b[1] - a[1]])
    for (const y of [H - 12, H]) g.add(K.place(K.box(len, 2, 2, STEEL, mat, { kind: 'steel', bevel: 0.1 }), mid, y, brg))
    for (let k = 0; k < 5; k++) {
      const w = K.box(1.2, 15.6, 1.2, STEEL, mat, { kind: 'steel', bevel: 0 })
      const t = (k + 0.5) / 5
      w.position.set(K.lerp(a[0], b[0], t), H - 12, K.lerp(a[1], b[1], t))
      w.rotation.set(0, -((brg - 90) * Math.PI) / 180, k % 2 ? 0.75 : -0.75)
      g.add(w)
    }
  }
  // Fabric roof: fixed ring over the outer bowl plus two moving panels, built
  // from cushion strips (puffed), with a long opening over the court.
  const ax = [Math.cos(ang), Math.sin(ang)], nx = [-ax[1], ax[0]]
  const halfL = K.rayHit(c, ax, pts) + 4, halfW = K.rayHit(c, nx, pts) + 4
  const OPEN = 36
  const HU = halfL * 0.74, HV = halfW * 0.6 // half-width of the opening across the court
  const cushion = (u0, u1, v0, v1, y) => {
    // A puffed rectangle in the (ax, nx) frame between u0..u1, v0..v1.
    const geo = new THREE.PlaneGeometry(1, 1, 12, 6)
    const p = geo.attributes.position
    for (let i = 0; i < p.count; i++) {
      const s = p.getX(i) + 0.5, t = p.getY(i) + 0.5
      const u = K.lerp(u0, u1, s), v = K.lerp(v0, v1, t)
      const puff = 2.2 * Math.sin(Math.PI * s) * Math.sin(Math.PI * t) ** 0.6
      p.setXYZ(i, c[0] + ax[0] * u + nx[0] * v, y + puff, c[1] + ax[1] * u + nx[1] * v)
    }
    geo.computeVertexNormals()
    const m = new THREE.Mesh(geo, mat(FABRIC, { kind: 'fabric', side: THREE.DoubleSide }))
    m.castShadow = m.receiveShadow = true
    return m
  }
  const STRIPS = 9
  for (const sgn of [-1, 1]) {
    // Moving panel: from the opening edge out to the side ring.
    const v0 = sgn * OPEN, v1 = sgn * HV
    for (let k = 0; k < STRIPS; k++) {
      const u0 = -(HU - 14) + (k * 2 * (HU - 14)) / STRIPS, u1 = u0 + (2 * (HU - 14)) / STRIPS
      g.add(cushion(u0, u1, Math.min(v0, v1), Math.max(v0, v1), H + 4))
    }
  }
  // Fixed outer ring of fabric: the octagon of the truss with a rectangular
  // hole where the moving panels sit.
  const toV2 = ([x, z]) => new THREE.Vector2(x, -z)
  const shape = new THREE.Shape(ring.map(toV2))
  const hu = HU, hv = HV, ch = 14 // chamfered so the hole stays inside the octagon
  shape.holes.push(new THREE.Path([[-hu + ch, -hv], [hu - ch, -hv], [hu, -hv + ch], [hu, hv - ch], [hu - ch, hv], [-hu + ch, hv], [-hu, hv - ch], [-hu, -hv + ch]].map(([u, v]) => toV2([c[0] + ax[0] * u + nx[0] * v, c[1] + ax[1] * u + nx[1] * v]))))
  const rg = new THREE.ShapeGeometry(shape, 8)
  rg.rotateX(-Math.PI / 2)
  const rmax = Math.max(...ring.map((p) => Math.hypot(p[0] - c[0], p[1] - c[1])))
  const rgp = rg.attributes.position
  for (let i = 0; i < rgp.count; i++) rgp.setY(i, H + 0.8 + 4.5 * (1 - Math.hypot(rgp.getX(i) - c[0], rgp.getZ(i) - c[1]) / rmax))
  rg.computeVertexNormals()
  const fixed = new THREE.Mesh(rg, mat(FABRIC, { kind: 'fabric', side: THREE.DoubleSide }))
  fixed.castShadow = fixed.receiveShadow = true
  g.add(fixed)
  // Radial seams on the fixed ring.
  for (const p of ring) { const mid = [(p[0] + c[0]) / 2, (p[1] + c[1]) / 2]; const len = Math.hypot(p[0] - c[0], p[1] - c[1]) * 0.45; g.add(K.place(K.box(len, 0.6, 0.6, '#d9d8d2', mat, { bevel: 0 }), [K.lerp(mid[0], p[0], 0.5), K.lerp(mid[1], p[1], 0.5)], H + 1, K.vecBearing([p[0] - c[0], p[1] - c[1]]))) }
  g.userData.cameraElev = 46 // a little above the default 38 so the court shows through the roof opening
  return g
}

// ── Overhaul fallback builders (2026-11-08) ──────────────────────────────────
// Geometry for the depth/edge conditioning of venues with no whole-venue
// oblique photo (docs/overhaul/brief.md, step 6). Plan dimensions come from the
// OSM footprint or a NAIP trace; heights from the reference photos listed in
// docs/overhaul/specs/<slug>.md. Colors matter little here: generation takes
// its colors from the prompt and IP-Adapter, so these models carry shape only.
function extrude(pts, h, color, mat, opts = {}, holes = []) {
  const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)))
  for (const hp of holes) shape.holes.push(new THREE.Path(hp.map(([x, z]) => new THREE.Vector2(x, -z))))
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false })
  g.rotateX(-Math.PI / 2)
  const m = new THREE.Mesh(g, mat(color, opts)); m.castShadow = m.receiveShadow = true
  m.position.y = opts.y || 0
  return m
}
const offsetRect = (c, ax, hl, hw) => { const n = [-ax[1], ax[0]]; return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => [c[0] + ax[0] * a * hl + n[0] * b * hw, c[1] + ax[1] * a * hl + n[1] * b * hw]) }

// L&N Federal Credit Union Stadium: closed bowl (north end closed in 2018),
// field north-south (OSM axis 179), tall west press box tower, east upper deck
// under a white canopy, video board over the north end (#3, #7, NAIP).
function landn({ fp: fp0, mat, info }) {
  // The OSM polygon includes plazas around the bowl (330 x 283 m). Cap the
  // outline at the stand depths read from NAIP: ~62 m behind the sidelines,
  // ~48 m behind the end lines, measured from the field edge.
  const c0 = K.centroid(fp0.pts), cap = { cx: c0[0], cz: c0[1], hx: 109.73 / 2 + 48, hz: 48.77 / 2 + 62, rr: 30, ang: -Math.PI / 2 }
  const capped = []; for (let i = 0; i < 360; i += 2) { const d = K.bearingVec(i); capped.push([c0[0] + d[0] * Math.min(K.rayHit(c0, d, fp0.pts), K.rectHit(c0, d, cap, 0)), c0[1] + d[1] * Math.min(K.rayHit(c0, d, fp0.pts), K.rectHit(c0, d, cap, 0))]) }
  const fp = { ...fp0, pts: capped }
  const cl = info.colors || {}
  const SEAT = cl['seats (aerial)'] || '#a25e5e', BRICK = cl['facade brick'] || '#4a372f', GLASS = cl['facade glass'] || '#627b78'
  const rimAt = (th) => { // rim height by bearing from the field center
    const r = (th * Math.PI) / 180
    return 22 + 7 * Math.sin(r) /* east higher */ + 4 * Math.cos(r) /* north end higher than south */ - 3 * Math.abs(Math.cos(r)) * (Math.cos(r) < 0 ? 1 : 0)
  }
  const { g, field, center } = footballBowl({
    fp, mat, axisDeg: 0, apron: 8, rowCount: 50,
    profile: (u, th) => {
      const H = rimAt(th)
      if (u > 0.97) return { h: H, color: '#d9d8d2' }
      // East side: lower bowl, concourse step, then the upper deck.
      if (th > 45 && th < 135 && u > 0.55) return { h: K.lerp(14, H - 0.5, (u - 0.55) / 0.42), color: SEAT, seat: true }
      return { h: K.lerp(1.5, th > 45 && th < 135 ? 13 : H - 0.5, Math.min(1, u / (th > 45 && th < 135 ? 0.55 : 0.97))), color: SEAT, seat: true }
    },
    facade: BRICK,
  })
  g.add(fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { ...field, grass: '#4f8f3c', grass2: '#58994a', surround: '#4f8f3c', endzone: '#3a3a3a', endzoneText: '#b51f2a' }), mat))
  const east = K.bearingVec(90)
  // West press box and suite tower: brick ends, glass field face, seven levels (#7).
  const offW = K.rayHit(center, [-east[0], -east[1]], fp.pts) - 14
  const t = new THREE.Group()
  t.add(K.box(150, 18, 22, GLASS, mat, { kind: 'glass' }))
  for (let k = 1; k < 5; k++) { const s = K.box(150.4, 0.6, 22.4, '#d9d8d2', mat, { kind: 'concrete' }); s.position.y = k * 3.6; t.add(s) }
  const roof = K.box(154, 1.2, 25, '#e8e7e2', mat, { kind: 'concrete' }); roof.position.y = 18; t.add(roof)
  for (const e of [-1, 1]) { const tw = K.box(12, 24, 24, BRICK, mat, { kind: 'brick' }); tw.position.x = e * 81; t.add(tw) }
  K.place(t, [center[0] - east[0] * offW, center[1] - east[1] * offW], 24, 0)
  g.add(t)
  // East upper-deck canopy: a white roof plane over the top rows.
  const offE = K.rayHit(center, east, fp.pts) - 8
  const canopy = K.box(160, 1.4, 18, '#efefea', mat, { kind: 'metal' })
  g.add(K.place(canopy, [center[0] + east[0] * offE, center[1] + east[1] * offE], rimAt(90) + 7, 0))
  for (let k = -3; k <= 3; k++) { const col = K.box(1.2, 7, 1.2, '#efefea', mat, { kind: 'metal' }); g.add(K.place(col, [center[0] + east[0] * (offE + 7) + k * 0, center[1] + east[1] * (offE + 7) + k * 24], rimAt(90), 0)) }
  // North end video board on the closed end (#3).
  const north = K.bearingVec(0)
  const offN = K.rayHit(center, north, fp.pts) - 10
  g.add(K.place(K.scoreboard(34, 12, rimAt(0) + 2, mat), [center[0] + north[0] * offN, center[1] + north[1] * offN], 0, 90))
  // Light towers on the east and west rims (#3).
  for (const sgn of [-1, 1]) for (const along of [-50, 50]) g.add(K.place(K.lightTower(rimAt(sgn > 0 ? 90 : 270) + 14, mat), [center[0] + east[0] * sgn * (K.rayHit(center, [east[0] * sgn, east[1] * sgn], fp.pts) - 4), center[1] + along], 0, 0))
  return g
}

// Rupp Arena: flat-roofed rectangular box (OSM, 162 x 144 m, axis 129),
// beige ribbed metal walls above a dark glass base, diagonal-braced corner
// stair towers (#13, #15), light flat roof with rooftop units (NAIP).
function rupp({ fp, mat, info }) {
  const cl = info.colors || {}
  const WALL = cl['facade metal'] || '#c8beaf', GLASS = cl['facade glass'] || '#223243', ROOF = cl['roof (aerial)'] || '#d7d8d5'
  const pts = fp.pts, c = K.centroid(pts)
  const g = new THREE.Group()
  const inset = pts.map(([x, z]) => { const dx = x - c[0], dz = z - c[1], L = Math.hypot(dx, dz); return [x - (dx / L) * 1.5, z - (dz / L) * 1.5] })
  g.add(extrude(inset, 7, GLASS, mat, { kind: 'glass' }))
  g.add(extrude(pts, 25, WALL, mat, { kind: 'metal', y: 7 }))
  g.add(extrude(pts, 1.4, K.tone(WALL, 1.1), mat, { kind: 'metal', y: 32 }))
  g.add(extrude(inset, 0.6, ROOF, mat, { kind: 'concrete', y: 32 }))
  // Vertical ribs on the long walls read as fine lines in the edge map.
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L < 20) continue
    const brg = K.vecBearing([b[0] - a[0], b[1] - a[1]])
    for (let k = 4; k < L - 4; k += 4) { const t = k / L; g.add(K.place(K.box(0.5, 25, 0.5, K.tone(WALL, 0.88), mat, { kind: 'metal', bevel: 0 }), [K.lerp(a[0], b[0], t), K.lerp(a[1], b[1], t)], 7, brg)) }
  }
  // Corner stair towers with X bracing at the four main corners.
  const corners = pts.map((p, i) => ({ p, d: Math.hypot(p[0] - c[0], p[1] - c[1]) })).sort((x, y) => y.d - x.d).slice(0, 4)
  for (const { p } of corners) {
    const dir = [p[0] - c[0], p[1] - c[1]], L = Math.hypot(...dir), at = [p[0] + (dir[0] / L) * 3, p[1] + (dir[1] / L) * 3]
    const tw = new THREE.Group()
    tw.add(K.box(9, 30, 9, K.tone(WALL, 0.95), mat, { kind: 'metal' }))
    for (let y = 2; y < 28; y += 6.5) for (const sgn of [-1, 1]) { const br = K.box(12, 0.5, 0.5, '#5b5f63', mat, { kind: 'metal', bevel: 0 }); br.position.set(0, y + 3, 4.8); br.rotation.z = sgn * 0.55; tw.add(br) }
    g.add(K.place(tw, at, 0, K.vecBearing(dir) + 90))
  }
  // Rooftop mechanical units (NAIP shows small boxes along the roof's center).
  for (let k = -2; k <= 2; k++) g.add(K.place(K.box(10, 3, 6, '#b9bab6', mat, { kind: 'metal' }), [c[0] + k * 18, c[1] + 6], 32.6, 39))
  return g
}

// Q2 Stadium: footprint and pitch traced from NAIP (no OSM polygon). Steep
// stands on all four sides close to the touchlines, a continuous white roof
// ring on exposed steel trusses over every stand, the tallest on the west
// (#1, #9, NAIP).
function q2({ fp, mat, info, osm }) {
  const cl = info.colors || {}
  const SEAT = cl['seats (sun)'] || '#264129', ROOF = cl['roof (aerial)'] || '#eceae6', STEEL = '#f2f2ee', SLAT = cl['facade green slats'] || '#196249'
  const pts = fp.pts
  const fieldPts = info.field || offsetRect(K.centroid(pts), K.bearingVec(159), 52.5, 34)
  const fc = [fieldPts.reduce((s, p) => s + p[0], 0) / 4, fieldPts.reduce((s, p) => s + p[1], 0) / 4]
  const along = [fieldPts[3][0] - fieldPts[0][0], fieldPts[3][1] - fieldPts[0][1]], alongLen = Math.hypot(...along)
  const ang = Math.atan2(along[1], along[0])
  const field = { cx: fc[0], cz: fc[1], hx: alongLen / 2, hz: Math.hypot(fieldPts[1][0] - fieldPts[0][0], fieldPts[1][1] - fieldPts[0][1]) / 2, rr: 0.5, ang }
  const westBrg = (K.vecBearing(along) + 90) % 360 // the west side is 90 deg clockwise of the pitch axis
  const rim = (th) => { const d = ((th - westBrg + 540) % 360) - 180; return 15 + 9 * Math.max(0, Math.cos((d * Math.PI) / 180)) }
  const g = K.bowl({ center: fc, outline: pts, inner: (th, d) => K.rectHit(fc, d, field, 7), nTheta: 480, nU: 30, rows: true, rowCount: 34,
    profile: (u, th) => (u > 0.96 ? { h: rim(th), color: '#cfcfca' } : { h: K.lerp(1.2, rim(th) - 0.4, u / 0.96), color: SEAT, seat: true }), facade: SLAT }, mat)
  const pitch = fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => {
    ctx.fillStyle = '#5c8d3a'; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const cs = Math.cos(ang), sn = Math.sin(ang), at = (u, v) => toPx([fc[0] + u * cs - v * sn, fc[1] + u * sn + v * cs])
    for (let k = 0; k < 14; k++) { ctx.fillStyle = k % 2 ? '#5c8d3a' : '#679a43'; ctx.beginPath(); for (const [u, v] of [[-field.hx + k * field.hx / 7, -field.hz], [-field.hx + (k + 1) * field.hx / 7, -field.hz], [-field.hx + (k + 1) * field.hx / 7, field.hz], [-field.hx + k * field.hx / 7, field.hz]]) ctx.lineTo(...at(u, v)); ctx.fill() }
    ctx.strokeStyle = '#f4f4ef'; ctx.lineWidth = 0.2 * ppm
    ctx.beginPath(); for (const [u, v] of [[-field.hx, -field.hz], [field.hx, -field.hz], [field.hx, field.hz], [-field.hx, field.hz], [-field.hx, -field.hz]]) ctx.lineTo(...at(u, v)); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(...at(0, -field.hz)); ctx.lineTo(...at(0, field.hz)); ctx.stroke()
    ctx.beginPath(); const [px, py] = at(0, 0); ctx.arc(px, py, 9.15 * ppm, 0, Math.PI * 2); ctx.stroke()
    for (const e of [-1, 1]) { ctx.beginPath(); for (const [u, v] of [[e * field.hx, -20.16], [e * (field.hx - 16.5), -20.16], [e * (field.hx - 16.5), 20.16], [e * field.hx, 20.16]]) ctx.lineTo(...at(u, v)); ctx.stroke() }
  }, mat)
  g.add(pitch)
  // Roof ring: outer footprint with a hole 9 m outside the pitch, on trusses.
  const hole = offsetRect(fc, [Math.cos(ang), Math.sin(ang)], field.hx + 9, field.hz + 9)
  const roofY = 30
  g.add(extrude(pts, 1.2, ROOF, mat, { kind: 'metal', y: roofY }, [hole]))
  // Exposed trusses: radial beams from the hole edge to the outline, every ~9 m.
  for (let th = 0; th < 360; th += 2.2) {
    const d = K.bearingVec(th), r0 = K.rectHit(fc, d, { ...field, hx: field.hx + 9, hz: field.hz + 9 }, 0), r1 = K.rayHit(fc, d, pts)
    if (!(r1 > r0)) continue
    const mid = [fc[0] + d[0] * (r0 + r1) / 2, fc[1] + d[1] * (r0 + r1) / 2]
    const beam = K.box(r1 - r0, 2.2, 0.5, STEEL, mat, { kind: 'metal', bevel: 0 }); g.add(K.place(beam, mid, roofY - 2.2, th))
  }
  // Roof columns along the outline.
  for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); for (let k = 10; k < L; k += 22) { const t = k / L; g.add(K.place(K.box(1.4, roofY, 1.4, STEEL, mat, { kind: 'metal' }), [K.lerp(a[0], b[0], t), K.lerp(a[1], b[1], t)], 0, 0)) } }
  return g
}

// Bristol Motor Speedway: 0.533-mile concrete oval (two ~198 m straights,
// ~73.5 m turn radius) with 24-28 degree banking in the turns, enclosed by
// tall steep grandstands all the way round (OSM footprint 456 x 350 m, axis
// 142; #26, #30). Infield with pit road and garages.
function bristol({ fp, mat, info }) {
  const cl = info.colors || {}
  const GRAY = cl['seats gray'] || '#84888c', RED = cl['seats red'] || '#75424d', TRACK = cl.track || '#585c5f', STEEL = cl['facade steel'] || '#192332'
  const pts = fp.pts, c = K.centroid(pts)
  const axB = 142, ax = K.bearingVec(axB), nx = K.bearingVec(axB + 90)
  const S = 99, R = 73.5, TW = 14
  const toW = (u, v) => [c[0] + ax[0] * u + nx[0] * v, c[1] + ax[1] * u + nx[1] * v]
  // Oval centerline point and outward normal at parameter s (0..1).
  const L1 = 2 * S, L2 = Math.PI * R, tot = 2 * L1 + 2 * L2
  const at = (s, off) => { let d = s * tot, u, v, nu, nv
    if (d < L1) { u = -S + d; v = -R; nu = 0; nv = -1 } else if ((d -= L1) < L2) { const a = -Math.PI / 2 + d / R; u = S + R * Math.cos(a); v = R * Math.sin(a); nu = Math.cos(a); nv = Math.sin(a) }
    else if ((d -= L2) < L1) { u = S - d; v = R; nu = 0; nv = 1 } else { d -= L1; const a = Math.PI / 2 + d / R; u = -S + R * Math.cos(a); v = R * Math.sin(a); nu = Math.cos(a); nv = Math.sin(a) }
    return { p: toW(u + nu * off, v + nv * off), turn: Math.abs(u) > S - 1 } }
  const g = new THREE.Group()
  // Banked track surface: inner edge at grade, outer edge raised by the banking.
  const n = 720, tp = [], ti = [], tc = [], col = new THREE.Color(K.tone(TRACK, 1.5))
  const bankH = (s) => { const q = at(s, 0); return TW * Math.tan(((q.turn ? 26 : 6) * Math.PI) / 180) }
  const hs = []; for (let i = 0; i < n; i++) hs.push(bankH(i / n))
  const sm = hs.map((_, i) => { let a = 0; for (let k = -12; k <= 12; k++) a += hs[(i + k + n) % n]; return a / 25 })
  for (let i = 0; i < n; i++) { const a = at(i / n, -TW / 2), b = at(i / n, TW / 2); tp.push(a.p[0], 0.2, a.p[1], b.p[0], 0.2 + sm[i], b.p[1]); tc.push(col.r, col.g, col.b, col.r, col.g, col.b) }
  for (let i = 0; i < n; i++) { const a = i * 2, b = ((i + 1) % n) * 2; ti.push(a, b, a + 1, b, b + 1, a + 1) }
  const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(tp, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(tc, 3)); tg.setIndex(ti); tg.computeVertexNormals()
  const tm = new THREE.Mesh(tg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide, kind: 'concrete' })); tm.castShadow = tm.receiveShadow = true; g.add(tm)
  // Outer retaining wall on top of the banking.
  const wallPts = []; for (let i = 0; i < n; i++) wallPts.push(at(i / n, TW / 2 + 0.6).p)
  const outerRing = []; for (let i = 0; i < n; i += 4) outerRing.push(at(i / n, TW / 2 + 1.2).p)
  // Grandstands: steep bowl from the wall to the footprint, rising to ~40 m.
  const stands = K.bowl({ center: c, outline: pts, inner: (th, d) => K.rayHit(c, d, outerRing) + 1, nTheta: 540, nU: 36, rows: true, rowCount: 60,
    profile: (u, th) => { const rel = ((th - axB + 360) % 360); const red = rel > 200 && rel < 340 && u > 0.45; return u > 0.97 ? { h: 52, color: '#d6d6d2' } : { h: K.lerp(6, 51, Math.pow(u / 0.97, 0.9)), color: red ? RED : GRAY, seat: true } },
    facade: STEEL }, mat)
  g.add(stands)
  // Infield: concrete pad, pit road along one straight, garage rows.
  const infield = []; for (let i = 0; i < n; i += 6) infield.push(at(i / n, -TW / 2 - 0.5).p)
  g.add(K.flatPoly(infield, 0.15, mat('#9da3a6', { kind: 'concrete' })))
  for (let k = -3; k <= 3; k++) g.add(K.place(K.box(24, 4, 8, '#e3e3df', mat, { kind: 'metal' }), toW(k * 26, -12), 0.2, axB))
  g.add(K.place(K.box(150, 6, 18, '#e9e8e4', mat, { kind: 'metal' }), toW(0, 22), 0.2, axB))
  // Suites and press box along the top of the front stretch; hanging video cube over the infield.
  g.add(K.place(K.box(220, 10, 12, '#e9e9e5', mat, { kind: 'glass' }), toW(0, R + 72), 50, axB))
  const cube = K.box(14, 10, 14, '#2a2e33', mat, { kind: 'glass' }); g.add(K.place(cube, toW(0, 0), 34, axB))
  return g
}

export const BUILDERS = {
  'michigan-stadium': michigan,
  'yulman-stadium': yulman,
  'fenway-park': fenway,
  'wrigley-field': wrigley,
  'sofi-stadium': sofi,
  'madison-square-garden': msg,
  'daytona-international-speedway': daytona,
  'arthur-ashe-stadium': ashe,
  'landn-federal-credit-union-stadium': landn,
  'rupp-arena': rupp,
  'q2-stadium': q2,
  'bristol-motor-speedway': bristol,
}
