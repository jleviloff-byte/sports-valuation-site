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
function footballBowl({ fp, mat, axisDeg, fieldShift = [0, 0], apron = 7, profile, facade, rows = true, aisles = 0, rowCount = 50, groundColor }) {
  const pts = fp.pts
  const c0 = K.centroid(pts)
  const ang = axisDeg != null ? ((90 - axisDeg) * Math.PI) / 180 * -1 : K.principalAngle(pts)
  const field = { cx: c0[0] + fieldShift[0], cz: c0[1] + fieldShift[1], hx: 109.73 / 2, hz: 48.77 / 2, rr: 2, ang }
  const center = [field.cx, field.cz]
  const g = K.bowl({ center, outline: pts, inner: (th, d) => K.rectHit(center, d, field, apron), profile, facade, rows, aisles, rowCount, groundColor, nTheta: 540, nU: 36 }, mat)
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
// A shallow single bowl dug into the ground (field ~14 m below grade, rim
// ~6 m above), blue seats, maize field wall, suite/press towers on both
// sidelines (2010), video boards in both end zones.
function michigan({ fp, mat }) {
  const seat = '#2f5fa5', maize = '#f2c230'
  const FIELD_Y = -14, RIM = 6
  const { g, field, center } = footballBowl({
    fp, mat, apron: 9, rowCount: 90, aisles: 6,
    profile: (u) => {
      if (u < 0.025) return { h: FIELD_Y + 1.6, color: maize }
      if (u > 0.975) return { h: RIM, color: C.concrete }
      return { h: K.lerp(FIELD_Y + 1.6, RIM - 0.6, (u - 0.025) / 0.95), color: seat, seat: true }
    },
    facade: '#b9a99a',
  })
  const ring = g.userData.innerRing
  g.add(fieldMesh(ring, FIELD_Y, (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { ...field, grass: C.turf, grass2: C.turf2, surround: C.turf, endzone: '#1f3a6d' }), mat))
  // Press box (west) and suite tower (east): long glass bars on the rim.
  const along = axisBearing(field)
  const side = K.bearingVec(along + 90)
  for (const [sgn, len, h] of [[1, 150, 16], [-1, 140, 13]]) {
    const off = K.rayHit(center, [side[0] * sgn, side[1] * sgn], fp.pts) - 20
    const t = new THREE.Group()
    const body = K.box(len, h, 12, C.glass, mat, { roughness: 0.4 })
    t.add(body)
    for (const e of [-1, 1]) { const tw = K.box(10, h + 3, 14, C.brick, mat); tw.position.x = e * (len / 2 + 2); t.add(tw) }
    const roof = K.box(len + 18, 1, 14, C.concrete2, mat); roof.position.y = h + 3; t.add(roof)
    K.place(t, [center[0] + side[0] * sgn * off, center[1] + side[1] * sgn * off], RIM - 1, along)
    g.add(t)
  }
  // End-zone video boards facing the field.
  const ax = K.bearingVec(along)
  for (const sgn of [1, -1]) {
    const off = K.rayHit(center, [ax[0] * sgn, ax[1] * sgn], fp.pts) - 6
    const sb = K.scoreboard(48, 15, 6, mat)
    K.place(sb, [center[0] + ax[0] * sgn * off, center[1] + ax[1] * sgn * off], RIM, along + 90)
    g.add(sb)
  }
  return g
}

// ── Yulman Stadium ───────────────────────────────────────────────────────────
// Horseshoe open to the south end, sky-blue seats, press box on the west side.
function yulman({ fp: fp0, mat }) {
  // OSM maps Yulman as a ring (field as a hole); use the convex hull outline.
  const fp = { ...fp0, pts: K.hull(fp0.pts) }
  const seat = '#4d8fd1', green = '#1f6b4c'
  let southEnd = 0
  const { g, field, center } = footballBowl({
    fp, mat, apron: 6, rowCount: 34, aisles: 9,
    profile: (u, th) => {
      const open = Math.abs(((th - southEnd + 540) % 360) - 180) < 38
      if (open) return u > 0.9 ? { h: 0.6, color: C.concrete2 } : { h: 0.4, color: C.concrete }
      if (u < 0.04) return { h: 1.4, color: green }
      if (u > 0.96) return { h: 15, color: C.concrete }
      return { h: K.lerp(1.4, 14, (u - 0.04) / 0.92), color: seat, seat: true }
    },
    facade: (th) => (Math.abs(((th - southEnd + 540) % 360) - 180) < 38 ? C.concrete2 : '#d5d2c8'),
  })
  // Which end of the long axis faces south: recompute the bowl with that end open.
  const along = axisBearing(field)
  southEnd = Math.abs(((along - 180 + 540) % 360) - 180) < 90 ? along : (along + 180) % 360
  g.clear()
  const r = footballBowl({
    fp, mat, apron: 6, rowCount: 34, aisles: 9,
    profile: (u, th) => {
      const open = Math.abs(((th - southEnd + 540) % 360) - 180) < 38
      if (open) return u > 0.9 ? { h: 0.6, color: C.concrete2 } : { h: 0.4, color: C.concrete }
      if (u < 0.04) return { h: 1.4, color: green }
      if (u > 0.96) return { h: 15, color: C.concrete }
      return { h: K.lerp(1.4, 14, (u - 0.04) / 0.92), color: seat, seat: true }
    },
    facade: (th) => (Math.abs(((th - southEnd + 540) % 360) - 180) < 38 ? C.concrete2 : '#d5d2c8'),
  })
  const G = r.g
  G.add(fieldMesh(G.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { ...r.field, grass: C.turf, grass2: C.turf2, surround: C.turf, endzone: green }), mat))
  // West press box.
  const west = K.bearingVec(270)
  const sideAxis = K.bearingVec(along + 90)
  const sgn = sideAxis[0] * west[0] + sideAxis[1] * west[1] > 0 ? 1 : -1
  const off = K.rayHit(r.center, [sideAxis[0] * sgn, sideAxis[1] * sgn], fp.pts) - 7
  const pb = new THREE.Group()
  pb.add(K.box(95, 12, 12, C.glass, mat))
  const roof = K.box(100, 1, 13, C.white, mat); roof.position.y = 12; pb.add(roof)
  K.place(pb, [r.center[0] + sideAxis[0] * sgn * off, r.center[1] + sideAxis[1] * sgn * off], 13, along)
  G.add(pb)
  // Light towers at the four corners of the field.
  for (const [a, b] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const ax = K.bearingVec(along)
    const p = [r.center[0] + ax[0] * a * 52 + sideAxis[0] * b * 52, r.center[1] + ax[1] * a * 52 + sideAxis[1] * b * 52]
    G.add(K.place(K.lightTower(42, mat), p, 0, along + 90))
  }
  return G
}

// ── Ballpark helper ──────────────────────────────────────────────────────────
// Stands depth from the outer edge varies by angle relative to center field.
function ballpark({ fp, mat, cf, homeFrac = 0.42, depth, profile, facade }) {
  const pts = fp.pts
  const c0 = K.centroid(pts)
  const cfv = K.bearingVec(cf)
  // Field center sits a little toward center field from the footprint centroid.
  const center = [c0[0] + cfv[0] * 8, c0[1] + cfv[1] * 8]
  const homeDist = K.rayHit(center, [-cfv[0], -cfv[1]], pts)
  const home = [center[0] - cfv[0] * homeDist * homeFrac * 2, center[1] - cfv[1] * homeDist * homeFrac * 2]
  const rel = (th) => ((th - cf + 540) % 360) - 180 // 0 = center field, +-180 = home plate
  const g = K.bowl({
    center, outline: pts, nTheta: 540, nU: 30, rows: true, rowCount: 40, aisles: 7,
    inner: (th, d) => K.rayHit(center, d, pts) - depth(rel(th)),
    profile: (u, th) => profile(u, rel(th)),
    facade: (th) => facade(rel(th)),
  }, mat)
  return { g, center, home, rel }
}

// ── Fenway Park ──────────────────────────────────────────────────────────────
function fenway({ fp, mat, info }) {
  const cf = info.cf_bearing ?? 40
  const red = '#a5312c', green = '#24503a', dark = '#1d3d2c'
  const depth = (r) => {
    const a = Math.abs(r)
    if (r < -18 && r > -62) return 4 // left field: the Monster sits on the street edge
    if (a <= 70) return 26 // center/right-center bleachers
    if (a <= 120) return 34 // along the foul lines
    return 44 // grandstand behind home
  }
  const { g, home } = ballpark({
    fp, mat, cf, depth,
    profile: (u, r) => {
      if (r < -18 && r > -62) return u > 0.7 ? { h: 13.2, color: '#2c3f33' } : { h: 11.3, color: '#2f7a4f' } // Green Monster with seats on top
      const a = Math.abs(r)
      if (a <= 70) return u > 0.95 ? { h: 9, color: dark } : { h: K.lerp(2.5, 9, u), color: green, seat: true }
      if (u < 0.6) return { h: K.lerp(1.2, 8, u / 0.6), color: red, seat: true }
      if (u < 0.66) return { h: 8.4, color: C.concrete }
      if (a > 120) return { h: 21, color: dark } // grandstand roof deck behind home
      return { h: K.lerp(9, 16, (u - 0.66) / 0.34), color: green, seat: true }
    },
    facade: (r) => (r < -18 && r > -62 ? '#2f7a4f' : '#9a4b34'), // red-brick exterior
  })
  const field = g.userData.innerRing
  g.add(fieldMesh(field, 0.05, (ctx, toPx, ppm) => K.baseballField(ctx, toPx, ppm, { home, cf, grass: C.grass, grass2: C.grass2, dirt: C.dirt }, field), mat))
  // Monster seats on top of the wall and light towers on the roof line.
  const grid = g.userData.grid
  for (const gi of grid) {
    const r = ((gi.th - cf + 540) % 360) - 180
    if (r < -22 && r > -58 && Math.round(gi.th) % 3 === 0) {
      const x = gi.row ? 0 : 0
    }
  }
  for (const [rr, hh] of [[-150, 48], [150, 48], [-95, 46], [95, 46], [-40, 44], [30, 44]]) {
    const b = K.bearingVec(cf + rr)
    const c = K.centroid(fp.pts)
    const t = K.rayHit(c, b, fp.pts) - 4
    g.add(K.place(K.lightTower(hh, mat, '#2b4a3a'), [c[0] + b[0] * t, c[1] + b[1] * t], 0, cf + rr + 90))
  }
  return g
}

// ── Wrigley Field ────────────────────────────────────────────────────────────
function wrigley({ fp, mat, info }) {
  const cf = info.cf_bearing ?? 45
  const seat = '#2f6b45', roof = '#2a4a3b', ivy = '#3f7a2e', brick = '#9a4a32'
  const depth = (r) => { const a = Math.abs(r); return a <= 75 ? 20 : a <= 120 ? 36 : 48 }
  const { g, home } = ballpark({
    fp, mat, cf, depth,
    profile: (u, r) => {
      const a = Math.abs(r)
      if (a <= 75) {
        if (u < 0.08) return { h: 3.6, color: ivy } // ivy-covered brick outfield wall
        return { h: K.lerp(4, 11, (u - 0.08) / 0.92), color: seat, seat: true }
      }
      if (u < 0.03) return { h: 1.2, color: brick }
      if (u < 0.5) return { h: K.lerp(1.2, 9, u / 0.5), color: seat, seat: true }
      if (u < 0.56) return { h: 9.5, color: C.concrete }
      if (u < 0.86) return { h: K.lerp(13, 22, (u - 0.56) / 0.3), color: seat, seat: true }
      return { h: 25, color: roof }
    },
    facade: (r) => (Math.abs(r) <= 75 ? '#d9d6cc' : '#3d5c4a'),
  })
  const field = g.userData.innerRing
  g.add(fieldMesh(field, 0.05, (ctx, toPx, ppm) => K.baseballField(ctx, toPx, ppm, { home, cf, grass: C.grass, grass2: C.grass2, dirt: C.dirt }, field), mat))
  const c = K.centroid(fp.pts)
  // Center-field scoreboard above the bleachers.
  const cfv = K.bearingVec(cf)
  const tcf = K.rayHit(c, cfv, fp.pts) - 6
  g.add(K.place(K.scoreboard(26, 12, 14, mat, '#2c5a3c'), [c[0] + cfv[0] * tcf, c[1] + cfv[1] * tcf], 0, cf + 90))
  // Red marquee outside the home-plate corner.
  const hv = K.bearingVec(cf + 180)
  const th = K.rayHit(c, hv, fp.pts) + 6
  const mq = new THREE.Group()
  const sign = K.box(26, 10, 2, '#c2272d', mat); sign.position.y = 8; mq.add(sign)
  const band = K.box(22, 2.2, 2.4, C.white, mat); band.position.y = 14; mq.add(band)
  for (const e of [-1, 1]) { const p = K.box(1.4, 8, 1.4, '#2a2a2a', mat); p.position.x = e * 9; mq.add(p) }
  g.add(K.place(mq, [c[0] + hv[0] * th, c[1] + hv[1] * th], 0, cf + 90))
  // Video boards in left and right field bleachers.
  for (const s of [-40, 40]) {
    const v = K.bearingVec(cf + s)
    const t = K.rayHit(c, v, fp.pts) - 4
    g.add(K.place(K.scoreboard(18, 8, 11, mat), [c[0] + v[0] * t, c[1] + v[1] * t], 0, cf + s + 90))
  }
  return g
}

// ── SoFi Stadium ─────────────────────────────────────────────────────────────
// Bowl sunk ~30 m below grade under a translucent teardrop canopy (the OSM
// footprint) that rises toward its broad end; oval video board inside.
function sofi({ fp, mat }) {
  // The OSM outline is the stadium/canopy footprint. The bowl sits inside it,
  // sunk ~30 m below grade; the translucent canopy follows the outline a little
  // beyond the bowl and stays low, rising from ~10 m at the tip to ~26 m.
  const pts = fp.pts
  const c0 = K.centroid(pts)
  const ang = K.principalAngle(pts)
  const ax = [Math.cos(ang), Math.sin(ang)]
  const widthAt = (s2) => { const p = [c0[0] + ax[0] * s2, c0[1] + ax[1] * s2]; const n = [-ax[1], ax[0]]; return K.rayHit(p, n, pts) + K.rayHit(p, [-n[0], -n[1]], pts) }
  const broad = widthAt(60) > widthAt(-60) ? 1 : -1
  const fc = [c0[0] + ax[0] * broad * 18, c0[1] + ax[1] * broad * 18]
  const scaleAbout = (p, k) => [fc[0] + (p[0] - fc[0]) * k, fc[1] + (p[1] - fc[1]) * k]
  const bowlOutline = pts // the OSM outline is the inner stadium oval
  const field = { cx: fc[0], cz: fc[1], hx: 54.9, hz: 24.4, rr: 2, ang }
  const FY = -30
  const seat = '#3b4350'
  const g = K.bowl({
    center: fc, outline: bowlOutline, nTheta: 480, nU: 34, rows: true, rowCount: 70, aisles: 8,
    inner: (th, d) => K.rectHit(fc, d, field, 8),
    profile: (u) => {
      if (u < 0.02) return { h: FY + 1.5, color: '#1a1d22' }
      if (u > 0.98) return { h: 4, color: C.concrete }
      if (u > 0.5 && u < 0.55) return { h: K.lerp(FY, 4, 0.52) + 2, color: C.glassDark }
      return { h: K.lerp(FY + 1.5, 4, u), color: seat, seat: true }
    },
    facade: '#d8d8d2',
  }, mat)
  g.add(fieldMesh(g.userData.innerRing, FY, (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { ...field, grass: C.turf, grass2: C.turf2, surround: '#2f3338', endzone: '#1d3f87', endzone2: '#1d3f87' }), mat))
  // Canopy outline traced from the USGS NAIP aerial: rounded on the northwest,
  // two sharp points on the east (research/raw/stadiums/naip/sofi-stadium.jpg).
  const TRACE = [[665, 140], [560, 165], [420, 200], [300, 240], [232, 275], [222, 330], [225, 450], [240, 560], [270, 660], [320, 750], [400, 840], [500, 900], [620, 935], [760, 950], [900, 965], [1015, 985], [930, 880], [850, 800], [790, 700], [745, 600], [715, 480], [695, 360], [680, 250]]
  const canopyPts = TRACE.map(([px, py]) => [(px - 512) * 0.547, (py - 512) * 0.547])
  const span = Math.max(...canopyPts.map(([x, z]) => Math.abs((x - c0[0]) * ax[0] + (z - c0[1]) * ax[1])))
  const hAt = (x, z) => K.lerp(12, 24, ((((x - c0[0]) * ax[0] + (z - c0[1]) * ax[1]) * broad) / span + 1) / 2)
  const shape = new THREE.Shape(canopyPts.map(([x, z]) => new THREE.Vector2(x, -z)))
  const cg = new THREE.ShapeGeometry(shape, 4)
  cg.rotateX(-Math.PI / 2)
  const p = cg.attributes.position
  for (let i = 0; i < p.count; i++) p.setY(i, hAt(p.getX(i), p.getZ(i)))
  cg.computeVertexNormals()
  const box = K.bboxOf(canopyPts, 2)
  const grid = K.canvasTexture(box, 3, (ctx, toPx, ppm) => {
    ctx.fillStyle = '#f2f4f5'; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.strokeStyle = '#aeb7bd'; ctx.lineWidth = Math.max(1, 0.45 * ppm)
    const n = [-ax[1], ax[0]]
    for (let k = -30; k <= 30; k++) {
      const o = k * 10
      ctx.beginPath(); ctx.moveTo(...toPx([c0[0] - ax[0] * 300 + n[0] * o, c0[1] - ax[1] * 300 + n[1] * o])); ctx.lineTo(...toPx([c0[0] + ax[0] * 300 + n[0] * o, c0[1] + ax[1] * 300 + n[1] * o])); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(...toPx([c0[0] + ax[0] * o - n[0] * 300, c0[1] + ax[1] * o - n[1] * 300])); ctx.lineTo(...toPx([c0[0] + ax[0] * o + n[0] * 300, c0[1] + ax[1] * o + n[1] * 300])); ctx.stroke()
    }
  })
  const canopy = new THREE.Mesh(cg, mat('#ffffff', { map: grid, opacity: 0.8, side: THREE.DoubleSide, roughness: 0.5 }))
  K.worldUV(canopy, box)
  canopy.castShadow = true
  g.add(canopy)
  const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(canopyPts.map(([x, z]) => new THREE.Vector3(x, hAt(x, z), z)), true, 'catmullrom', 0.2), 400, 2.2, 6, true)
  const tm = new THREE.Mesh(tube, mat('#f6f6f2'))
  tm.castShadow = true
  g.add(tm)
  for (const [x, z] of canopyPts.filter((_, i) => i % 3 === 0)) { const col = K.box(1.6, hAt(x, z), 1.6, '#e9e9e4', mat); col.position.set(x, 0, z); g.add(col) }
  const ov = new THREE.Mesh(new THREE.TorusGeometry(46, 3.2, 6, 64), mat('#20252b'))
  ov.scale.set(1, 1, 0.42)
  ov.rotation.x = -Math.PI / 2
  ov.rotation.z = -ang
  ov.position.set(fc[0], FY + 26, fc[1])
  g.add(ov)
  return g
}

// ── Madison Square Garden ────────────────────────────────────────────────────
function msg({ fp, mat }) {
  const pts = fp.pts
  const c = K.centroid(pts)
  const H = 46
  const g = new THREE.Group()
  // Drum walls: vertical bands of bronze and dark glass.
  const N = pts.length
  const resampled = []
  for (let i = 0; i < 180; i++) { const d = K.bearingVec((i / 180) * 360); const t = K.rayHit(c, d, pts); resampled.push([c[0] + d[0] * t, c[1] + d[1] * t]) }
  const wp = [], wc = [], wi = []
  const col = new THREE.Color()
  resampled.forEach(([x, z], i) => {
    col.set(i % 4 < 2 ? '#7a6550' : '#3a4651')
    for (const y of [0, H * 0.62, H * 0.64, H]) wp.push(x, y, z)
    const band = new THREE.Color('#c8c3b8')
    wc.push(col.r * 0.85, col.g * 0.85, col.b * 0.85, col.r, col.g, col.b, band.r, band.g, band.b, band.r, band.g, band.b)
  })
  for (let i = 0; i < 180; i++) { const a = i * 4, b = ((i + 1) % 180) * 4; for (const k of [0, 2]) wi.push(a + k, b + k, a + k + 1, b + k, b + k + 1, a + k + 1); wi.push(a + 1, b + 1, a + 2, b + 1, b + 2, a + 2) }
  const wg = new THREE.BufferGeometry()
  wg.setAttribute('position', new THREE.Float32BufferAttribute(wp, 3))
  wg.setAttribute('color', new THREE.Float32BufferAttribute(wc, 3))
  wg.setIndex(wi); wg.computeVertexNormals()
  const wall = new THREE.Mesh(wg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide }))
  wall.castShadow = wall.receiveShadow = true
  g.add(wall)
  // Roof: shallow dome with radial cable ribs and a central ring.
  const rp = [], rc = [], ri = []
  const R1 = '#9ea4a8', R2 = '#8b9196'
  const center = rp.length / 3
  rp.push(c[0], H + 6, c[1]); const cc = new THREE.Color(R1); rc.push(cc.r, cc.g, cc.b)
  const rings = 8
  for (let k = 1; k <= rings; k++) resampled.forEach(([x, z], i) => {
    const t = k / rings
    rp.push(K.lerp(c[0], x, t), H + 6 * (1 - t * t), K.lerp(c[1], z, t))
    col.set(Math.floor(i / 5) % 2 ? R1 : R2)
    if (k === 2) col.set('#6f767b')
    rc.push(col.r, col.g, col.b)
  })
  for (let i = 0; i < 180; i++) ri.push(center, 1 + ((i + 1) % 180), 1 + i)
  for (let k = 1; k < rings; k++) for (let i = 0; i < 180; i++) { const a = 1 + (k - 1) * 180 + i, b = 1 + (k - 1) * 180 + ((i + 1) % 180), a2 = a + 180, b2 = b + 180; ri.push(a, b, a2, b, b2, a2) }
  const rg = new THREE.BufferGeometry()
  rg.setAttribute('position', new THREE.Float32BufferAttribute(rp, 3))
  rg.setAttribute('color', new THREE.Float32BufferAttribute(rc, 3))
  rg.setIndex(ri); rg.computeVertexNormals()
  const roof = new THREE.Mesh(rg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide }))
  roof.castShadow = roof.receiveShadow = true
  g.add(roof)
  // Perimeter truss ring.
  const ringT = new THREE.Mesh(new THREE.TorusGeometry(K.rayHit(c, [1, 0], pts) - 1, 1.6, 6, 96), mat('#c6c9c8'))
  ringT.rotation.x = -Math.PI / 2; ringT.position.set(c[0], H + 0.5, c[1])
  g.add(ringT)
  // Entrance pavilion facing Seventh Avenue (east side of the block).
  const e = K.bearingVec(118)
  const te = K.rayHit(c, e, pts)
  const pav = new THREE.Group()
  pav.add(K.box(52, 14, 10, '#4b5a66', mat, { roughness: 0.35 }))
  const scr = K.box(30, 7, 0.8, '#2b6fb3', mat, { emissive: '#2b6fb3' }); scr.position.set(0, 4, 5.4); pav.add(scr)
  g.add(K.place(pav, [c[0] + e[0] * (te + 4), c[1] + e[1] * (te + 4)], 0, 118 - 90))
  return g
}

// ── Daytona International Speedway ──────────────────────────────────────────
// 2.5-mile tri-oval: 31-degree turns, 18-degree tri-oval, front-stretch
// grandstand with entrance towers, Lake Lloyd in the infield.
function daytona({ fp, mat, info }) {
  // Track position, axis and front side measured on the NAIP aerial: center
  // 312 m east / 208 m north of the property centroid, long axis 38 degrees,
  // front stretch (grandstands, tri-oval) on the northwest side, Lake Lloyd
  // along the southeast back stretch. Track width is exaggerated ~1.5x so the
  // oval reads at map size.
  const c = [312, -208]
  const ax = K.bearingVec(38), nx = K.bearingVec(308) // +n points to the front stretch
  const S = 500, R = 340, W = 32, DOG = 80
  const P = []
  const n = 720
  const L1 = 2 * S, L2 = Math.PI * R, total = 2 * L1 + 2 * L2
  for (let i = 0; i < n; i++) {
    let s2 = (i / n) * total, u, v
    if (s2 < L1) { u = -S + s2; v = -R }
    else if ((s2 -= L1) < L2) { const a = -Math.PI / 2 + s2 / R; u = S + R * Math.cos(a); v = R * Math.sin(a) }
    else if ((s2 -= L2) < L1) { u = S - s2; v = R + DOG * Math.cos((u / S) * (Math.PI / 2)) ** 2 }
    else { s2 -= L1; const a = Math.PI / 2 + s2 / R; u = -S + R * Math.cos(a); v = R * Math.sin(a) }
    P.push([u, v])
  }
  const toW = ([u, v]) => [c[0] + ax[0] * u + nx[0] * v, c[1] + ax[1] * u + nx[1] * v]
  const tp = [], tc = [], ti = []
  const A = new THREE.Color('#44484e'), A2 = new THREE.Color('#4f545a'), WALL = new THREE.Color('#f1f0eb'), APRON = new THREE.Color('#7e8a72')
  for (let i = 0; i < n; i++) {
    const [u, v] = P[i], [u2, v2] = P[(i + 1) % n]
    const tl = Math.hypot(u2 - u, v2 - v) || 1
    const ox = (v2 - v) / tl, oz = -(u2 - u) / tl
    const sgn = ox * u + oz * v > 0 ? 1 : -1 // make the normal point outward
    const inTurn = Math.abs(u) > S - 5
    const bank = inTurn ? Math.tan((31 * Math.PI) / 180) : v > R ? Math.tan((18 * Math.PI) / 180) : Math.tan((3 * Math.PI) / 180)
    const out = [u + sgn * ox * W / 2, v + sgn * oz * W / 2], inn = [u - sgn * ox * W / 2, v - sgn * oz * W / 2], apron = [u - sgn * ox * (W / 2 + 10), v - sgn * oz * (W / 2 + 10)]
    const [x0, z0] = toW(apron), [x1, z1] = toW(inn), [x2, z2] = toW(out)
    const top = 0.3 + W * 0.6 * bank
    tp.push(x0, 0.2, z0, x1, 0.3, z1, x2, top, z2, x2, top + 2.2, z2)
    const col = i % 24 < 12 ? A : A2
    tc.push(APRON.r, APRON.g, APRON.b, col.r, col.g, col.b, col.r, col.g, col.b, WALL.r, WALL.g, WALL.b)
  }
  for (let i = 0; i < n; i++) { const a = i * 4, b = ((i + 1) % n) * 4; for (const k of [0, 1, 2]) ti.push(a + k, b + k, a + k + 1, b + k, b + k + 1, a + k + 1) }
  const tg = new THREE.BufferGeometry()
  tg.setAttribute('position', new THREE.Float32BufferAttribute(tp, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(tc, 3)); tg.setIndex(ti); tg.computeVertexNormals()
  const track = new THREE.Mesh(tg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide }))
  track.castShadow = track.receiveShadow = true
  const g = new THREE.Group()
  g.add(track)
  const inner = []
  for (let i = 0; i < n; i += 2) { const [u, v] = P[i]; const k = 1 - (W / 2 + 10) / Math.max(1, Math.hypot(u * 0.6, v)); inner.push(toW([u * (1 - (W / 2 + 10) / (Math.abs(u) + R)), v * k])) }
  g.add(K.flatPoly(inner, 0.1, mat('#86a86a', { roughness: 1 })))
  // Lake Lloyd: long lake on the back-stretch half of the infield.
  const lake = []
  for (let i = 0; i < 48; i++) { const t = (i / 48) * Math.PI * 2; lake.push(toW([380 * Math.cos(t), -R + 150 + 70 * Math.sin(t)])) }
  g.add(K.water(lake, mat, '#6f8a6a'))
  // Garages and fan zone near the start/finish line (white roofs).
  for (let k = -2; k <= 2; k++) { const gb = K.box(60, 7, 26, '#ecebe6', mat); K.place(gb, toW([k * 75, R - 120]), 0, 38 + 90); g.add(gb) }
  // Front-stretch grandstand swept along the outer edge of the front stretch and
  // tri-oval: raked seats rising away from the track, roof, entrance towers.
  const gp = [], gc = [], gi = []
  const SEAT = new THREE.Color('#4f6687'), ROOF = new THREE.Color('#f0efea'), BACK = new THREE.Color('#c8ccd2')
  const PROF = [[0, 3], [22, 16], [44, 30], [66, 44], [80, 52], [80, 56], [96, 56], [96, 0]]
  const front = []
  for (let i = 0; i < n; i++) { const [u, v] = P[i]; if (v > R - 1 && Math.abs(u) < 450) front.push(i) }
  front.sort((a, b) => P[a][0] - P[b][0])
  for (const [k, i] of front.entries()) {
    const [u, v] = P[i]
    const sgnOut = 1 // front stretch: outward is +v
    PROF.forEach(([o, h], j) => {
      const [x, z] = toW([u, v + sgnOut * (W / 2 + 8 + o)])
      gp.push(x, h, z)
      const col = j <= 4 ? SEAT : j === 5 || j === 6 ? ROOF : BACK
      gc.push(col.r, col.g, col.b)
    })
    if (k > 0) { const a = (k - 1) * PROF.length, b = k * PROF.length; for (let j = 0; j < PROF.length - 1; j++) gi.push(a + j, b + j, a + j + 1, b + j, b + j + 1, a + j + 1) }
  }
  const gg = new THREE.BufferGeometry()
  gg.setAttribute('position', new THREE.Float32BufferAttribute(gp, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(gc, 3)); gg.setIndex(gi); gg.computeVertexNormals()
  const gs = new THREE.Mesh(gg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide }))
  gs.castShadow = gs.receiveShadow = true
  for (let k = -2; k <= 2; k++) { const tw = K.box(24, 64, 24, '#c8ccd2', mat); const [x, z] = toW([k * 170, R + DOG * Math.cos(((k * 170) / S) * (Math.PI / 2)) ** 2 + W / 2 + 120]); tw.position.set(x, 0, z); g.add(tw) }
  // Paved garage and fan zone between the front stretch and the lake.
  const paved = []
  for (let i = 0; i < 40; i++) { const t = (i / 40) * Math.PI * 2; paved.push(toW([300 * Math.cos(t), R - 150 + 70 * Math.sin(t)])) }
  g.add(K.flatPoly(paved, 0.15, mat('#b9bab4', { roughness: 1 })))
  g.add(gs)
  return g
}

// ── Arthur Ashe Stadium ──────────────────────────────────────────────────────
function ashe({ fp, mat }) {
  const pts = fp.pts
  const c = K.centroid(pts)
  const ang = K.principalAngle(pts)
  const court = { cx: c[0], cz: c[1], hx: 18, hz: 10, rr: 1, ang }
  const seat = '#2c5ea6'
  const g = K.bowl({
    center: c, outline: pts, nTheta: 480, nU: 34, rows: true, rowCount: 60, aisles: 10,
    inner: (th, d) => K.rectHit(c, d, court, 6),
    profile: (u) => {
      if (u < 0.02) return { h: 1.2, color: '#1f3f73' }
      if (u < 0.42) return { h: K.lerp(1.2, 15, (u - 0.02) / 0.4), color: seat, seat: true }
      if (u < 0.5) return { h: 17.5, color: C.glassDark }
      if (u < 0.97) return { h: K.lerp(19, 40, (u - 0.5) / 0.47), color: seat, seat: true }
      return { h: 41, color: C.concrete }
    },
    facade: '#9aa3ab',
  }, mat)
  g.add(fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.tennisCourt(ctx, toPx, ppm, { ...court, court: '#3c638e', surround: '#6c935c' }), mat, 10))
  // Retractable roof: white truss ring on eight external columns; two panels half closed.
  const H = 50
  const ring = []
  for (let i = 0; i < pts.length; i++) ring.push(new THREE.Vector3(pts[i][0], H, pts[i][1]))
  const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(ring, true, 'catmullrom', 0.05), 200, 3, 6, true), mat(C.steel))
  tube.castShadow = true
  g.add(tube)
  for (const p of pts) { const col = K.box(3.5, H + 2, 3.5, C.steel, mat); col.position.set(p[0] + (p[0] - c[0]) * 0.04, 0, p[1] + (p[1] - c[1]) * 0.04); g.add(col) }
  const ax = [Math.cos(ang), Math.sin(ang)], nx = [-ax[1], ax[0]]
  const span = K.rayHit(c, nx, pts)
  for (const sgn of [1, -1]) {
    const panel = new THREE.Group()
    const pg = K.box(K.rayHit(c, ax, pts) * 1.6, 2, span * 0.55, C.white, mat)
    panel.add(pg)
    for (let k = -3; k <= 3; k++) { const rib = K.box(2, 2.6, span * 0.55, '#c9ccd0', mat); rib.position.x = k * 18; panel.add(rib) }
    panel.position.set(c[0] + nx[0] * sgn * span * 0.62, H + 1, c[1] + nx[1] * sgn * span * 0.62)
    panel.rotation.y = -ang
    g.add(panel)
  }
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
}
