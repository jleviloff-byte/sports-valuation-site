// Generic venue models for the fallback path (brief step 6) at scale: venues
// with no usable oblique photo and no hand-built model in venues.js.
// Inputs, all measured rather than guessed:
//   fp            OSM venue footprint (local meters, north = -z)
//   info.field    OSM pitch corners, when mapped (local meters)
//   info.venue    { venue_type, roof, capacity } from data/stadiums.json
//   info.cf_bearing  ballpark orientation (research/raw/stadiums/ballpark-orientation.json)
//   info.colors   seat / roof / field / facade colors sampled from the NAIP aerial
//                 inside the footprint (scripts/stadiums/overhaul/naip_colors.py)
// The model only has to carry the venue's real footprint, orientation, type
// and colors into the depth/edge controls; SDXL supplies the surface detail.
import * as THREE from 'three'
import * as K from './kit.js'

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const FIELD = { football: { L: 109.73, W: 48.77 }, soccer: { L: 105, W: 68 }, tennis: { L: 36, W: 18 } }
const ROAD_COURSES = new Set(['circuit-of-the-americas', 'barber-motorsports-park', 'mid-ohio-sports-car-course', 'sonoma-raceway', 'watkins-glen-international', 'portland-international-raceway'])

function palette(info) {
  const c = info.colors || {}
  return {
    seat: c.seats || '#7d848c', roof: c.roof || '#d9d9d4', facade: c.facade || '#c9c6bd',
    grass: c.field || '#4f8f3c', concrete: '#d6d3cb', glass: '#3d4c58',
  }
}

// Ring of points around c: the footprint, capped by cap(d) and never inside min(d).
function ring(c, pts, cap, min, step = 2) {
  const out = []
  // Offset from whole degrees so the bowl's rays never pass exactly through a vertex.
  for (let th = 0.37; th < 360; th += step) {
    const d = K.bearingVec(th)
    const hit = pts ? K.rayHit(c, d, pts) : Infinity
    const r = Math.max(min(d), Math.min(Number.isFinite(hit) ? hit : cap(d), cap(d)))
    out.push([c[0] + d[0] * r, c[1] + d[1] * r])
  }
  return out
}

// Shallow dome over a closed ring: a polar grid lifted toward the center.
function domeRoof(outer, c, y0, rise, color, mat, kind = 'metal') {
  const N = outer.length, M = 10, pos = [], idx = []
  for (let i = 0; i < N; i++) for (let j = 0; j <= M; j++) {
    const t = j / M, p = outer[i]
    pos.push(c[0] + (p[0] - c[0]) * (1 - t), y0 + rise * (1 - (1 - t) ** 2), c[1] + (p[1] - c[1]) * (1 - t))
  }
  for (let i = 0; i < N; i++) { const a = i * (M + 1), b = ((i + 1) % N) * (M + 1); for (let j = 0; j < M; j++) idx.push(a + j, b + j, a + j + 1, b + j, b + j + 1, a + j + 1) }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat(color, { kind, side: THREE.DoubleSide })); m.castShadow = m.receiveShadow = true
  return m
}

// Vertical wall band along a closed ring, from y0 to y1.
function wall(outer, y0, y1, color, mat, kind = 'concrete') {
  const pos = [], idx = [], N = outer.length
  for (const [x, z] of outer) pos.push(x, y0, z, x, y1, z)
  for (let i = 0; i < N; i++) { const a = i * 2, b = ((i + 1) % N) * 2; idx.push(a, b, a + 1, b, b + 1, a + 1) }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat(color, { kind, side: THREE.DoubleSide })); m.castShadow = m.receiveShadow = true
  return m
}

// Flat band between two rings with matching point counts (roads, aprons).
function band(a, b, y, color, mat) {
  const pos = [], idx = [], N = a.length
  for (let i = 0; i < N; i++) pos.push(a[i][0], y, a[i][1], b[i][0], y, b[i][1])
  for (let i = 0; i < N; i++) { const p = i * 2, q = ((i + 1) % N) * 2; idx.push(p, q, p + 1, q, q + 1, p + 1) }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat(color, { kind: 'asphalt', side: THREE.DoubleSide })); m.receiveShadow = true
  return m
}

// Retractable roof shown open: stacked arched panels parked off one end of the
// venue on two runway trusses, so the field stays visible.
function parkedRoof(c, dir, off, width, depth, y, color, mat) {
  const g = new THREE.Group()
  for (let k = 0; k < 3; k++) {
    const panel = K.box(width - k * 6, 2.2, depth * (1 - k * 0.12), K.tone(color, 1 - k * 0.04), mat, { kind: 'metal' })
    panel.position.set(0, k * 3.2, 0); g.add(panel)
  }
  for (const e of [-1, 1]) { const tr = K.box(6, y, depth + 30, '#c9cbcc', mat, { kind: 'steel' }); tr.position.set(e * (width / 2 - 3), -y, 0); g.add(tr) }
  return K.place(g, [c[0] + dir[0] * (off + depth / 2), c[1] + dir[1] * (off + depth / 2)], y, (K.vecBearing(dir) + 90) % 360)
}

function fieldMesh(ringPts, y, draw, mat, ppm = 6) {
  const box = K.bboxOf(ringPts, 2)
  const m = K.flatPoly(ringPts, y, mat('#ffffff', { map: K.canvasTexture(box, ppm, draw), roughness: 0.95 }))
  K.worldUV(m, box)
  return m
}

function soccerPitch(ctx, toPx, ppm, f) {
  const { L, W } = FIELD.soccer, cos = Math.cos(f.ang), sin = Math.sin(f.ang)
  const at = (u, v) => toPx([f.cx + u * cos - v * sin, f.cz + u * sin + v * cos])
  ctx.fillStyle = f.grass; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  for (let k = 0; k < 14; k++) { if (k % 2) continue; ctx.fillStyle = f.grass2; ctx.beginPath(); for (const [u, v] of [[-L / 2 + k * L / 14, -W / 2], [-L / 2 + (k + 1) * L / 14, -W / 2], [-L / 2 + (k + 1) * L / 14, W / 2], [-L / 2 + k * L / 14, W / 2]]) ctx.lineTo(...at(u, v)); ctx.fill() }
  ctx.strokeStyle = '#f4f4ef'; ctx.lineWidth = Math.max(1, 0.25 * ppm)
  const poly = (ps) => { ctx.beginPath(); for (const [u, v] of ps) ctx.lineTo(...at(u, v)); ctx.closePath(); ctx.stroke() }
  poly([[-L / 2, -W / 2], [L / 2, -W / 2], [L / 2, W / 2], [-L / 2, W / 2]])
  ctx.beginPath(); ctx.moveTo(...at(0, -W / 2)); ctx.lineTo(...at(0, W / 2)); ctx.stroke()
  const [cx, cy] = at(0, 0); ctx.beginPath(); ctx.arc(cx, cy, 9.15 * ppm, 0, Math.PI * 2); ctx.stroke()
  for (const e of [-1, 1]) { poly([[e * L / 2, -20.16], [e * (L / 2 - 16.5), -20.16], [e * (L / 2 - 16.5), 20.16], [e * L / 2, 20.16]]); poly([[e * L / 2, -9.16], [e * (L / 2 - 5.5), -9.16], [e * (L / 2 - 5.5), 9.16], [e * L / 2, 9.16]]) }
}

// Rectangular-field stadium (football or soccer), open or roofed.
function rectStadium({ fp, mat, info }, sport) {
  const P = palette(info), v = info.venue || {}, F = FIELD[sport]
  let c = K.centroid(fp.pts), ang = K.principalAngle(fp.pts)
  if (info.field && info.field.length >= 4) { c = K.centroid(info.field); ang = K.principalAngle(info.field) }
  const cap = v.capacity || 15000
  const H = sport === 'tennis' ? clamp(6 + cap / 900, 8, 30) : clamp(4 + cap / 2100, 6, 52) // rim height above the field
  const depth = clamp(H * 1.5, 12, 80) // stand depth behind the field edge
  const apron = sport === 'soccer' ? 5 : 7
  const fieldRect = { cx: c[0], cz: c[1], hx: F.L / 2, hz: F.W / 2, rr: 1, ang }
  const capRect = { cx: c[0], cz: c[1], hx: F.L / 2 + apron + depth * 0.9, hz: F.W / 2 + apron + depth, rr: Math.min(30, depth), ang }
  // OSM footprints often take the whole block (plazas, lots), or only the pitch:
  // cap at the stand depth implied by capacity, and keep at least a 12 m stand.
  const outline = ring(c, fp.pts, (d) => K.rectHit(c, d, capRect), (d) => K.rectHit(c, d, fieldRect, apron + 12))
  const inner = (th, d) => K.rectHit(c, d, fieldRect, apron)
  const depthAt = (th) => { const d = K.bearingVec(th); return K.rayHit(c, d, outline) - inner(th, d) }
  const g = K.bowl({
    center: c, outline, inner, nTheta: 540, nU: 40, rows: true, rowCount: Math.round(clamp(H * 1.4, 12, 60)),
    profile: (u, th) => {
      const top = Math.min(H, 1.2 + depthAt(th) * 0.6) // ~31 degree rake
      if (u > 0.96) return { h: top, color: P.concrete }
      return { h: K.lerp(1.2, top - 0.4, u / 0.96), color: P.seat, seat: true }
    },
    facade: P.facade, groundColor: P.concrete,
  }, mat)
  const draw = sport === 'tennis'
    ? (ctx, toPx, ppm) => K.tennisCourt(ctx, toPx, ppm, { cx: c[0], cz: c[1], ang, court: '#3f6fa8', surround: '#4f8a5a' })
    : sport === 'soccer'
    ? (ctx, toPx, ppm) => soccerPitch(ctx, toPx, ppm, { cx: c[0], cz: c[1], ang, grass: P.grass, grass2: K.tone(P.grass, 1.08) })
    : (ctx, toPx, ppm) => K.footballField(ctx, toPx, ppm, { cx: c[0], cz: c[1], hx: F.L / 2, hz: F.W / 2, ang, grass: P.grass, grass2: K.tone(P.grass, 1.08), surround: P.grass, endzone: K.tone(P.grass, 0.85) })
  g.add(fieldMesh(g.userData.innerRing, 0.05, draw, mat))
  // Press box on the deeper sideline, for stands tall enough to carry one.
  const side = K.bearingVec(K.vecBearing([Math.cos(ang + Math.PI / 2), Math.sin(ang + Math.PI / 2)]))
  const sideB = K.vecBearing(side), dA = depthAt(sideB), dB = depthAt((sideB + 180) % 360)
  const sgn = dA >= dB ? 1 : -1, sd = [side[0] * sgn, side[1] * sgn], sth = (sideB + (sgn > 0 ? 0 : 180)) % 360
  const along = K.vecBearing([Math.cos(ang), Math.sin(ang)])
  if (H >= 14 && v.roof === 'open' && sport !== 'tennis') {
    const off = K.rayHit(c, sd, outline) - 7, pbH = clamp(H * 0.3, 5, 14)
    const pb = new THREE.Group()
    pb.add(K.box(F.L * 0.6, pbH, 10, P.glass, mat, { kind: 'glass' }))
    const capB = K.box(F.L * 0.6 + 2, 1, 12, P.concrete, mat, { kind: 'concrete' }); capB.position.y = pbH; pb.add(capB)
    g.add(K.place(pb, [c[0] + sd[0] * off, c[1] + sd[1] * off], Math.min(H, 1.2 + depthAt(sth) * 0.6), along))
  }
  // Video board over one end.
  if (v.roof === 'open' && sport !== 'tennis') {
    const ed = [Math.cos(ang), Math.sin(ang)], endB = K.vecBearing(ed)
    const off = K.rayHit(c, ed, outline) - 4
    g.add(K.place(K.scoreboard(clamp(H * 0.9, 10, 40), clamp(H * 0.3, 4, 14), Math.min(H, 1.2 + depthAt(endB) * 0.6) + 1, mat), [c[0] + ed[0] * off, c[1] + ed[1] * off], 0, (along + 90) % 360))
  }
  if (v.roof === 'retractable') {
    const ed = [Math.cos(ang), Math.sin(ang)]
    g.add(parkedRoof(c, ed, K.rayHit(c, ed, outline) - 45, F.W + 80, 70, H + 6, P.roof, mat))
  } else if (v.roof === 'dome') {
    const outer = g.userData.outerRing.map(([x, , z]) => [x, z])
    g.add(wall(outer, 0, H + 6, P.facade, mat))
    g.add(domeRoof(outer, c, H + 6, clamp(H * 0.35, 6, 22), P.roof, mat))
  }
  return g
}

// Ballpark: fan-shaped field from home plate toward center field, deep stands
// around the infield, low bleachers in the outfield. Never a symmetric bowl.
function ballpark({ fp, mat, info }) {
  const P = palette(info), v = info.venue || {}
  const c0 = K.centroid(fp.pts)
  const cf = info.cf_bearing ?? 45
  const cfv = K.bearingVec(cf)
  const home = [c0[0] - cfv[0] * 55, c0[1] - cfv[1] * 55]
  // Fair territory: foul lines to 101 m poles, 122 m to center, rounded; foul ground behind home.
  const field = []
  for (let a = -45; a <= 45; a += 3) { const d = K.bearingVec(cf + a); const r = 101 + 21 * Math.cos((a * Math.PI) / 90); field.push([home[0] + d[0] * r, home[1] + d[1] * r]) }
  for (let a = 60; a <= 300; a += 15) { const d = K.bearingVec(cf + a); const r = a > 120 && a < 240 ? 20 : 25; field.push([home[0] + d[0] * r, home[1] + d[1] * r]) }
  const c = [home[0] + cfv[0] * 45, home[1] + cfv[1] * 45]
  const H = clamp(8 + (v.capacity || 30000) / 1800, 14, 40)
  const infield = (th) => { const diff = Math.abs(((th - (cf + 180)) % 360 + 540) % 360 - 180); return diff < 115 }
  const outline = ring(c, fp.pts, (d) => K.rayHit(c, d, field) + (infield(K.vecBearing(d)) ? H * 1.6 : 14), (d) => K.rayHit(c, d, field) + (infield(K.vecBearing(d)) ? 18 : 8))
  const g = K.bowl({
    center: c, outline, nTheta: 720, nU: 40, rows: true, rowCount: 30, aisleCount: 90,
    inner: (th, d) => K.rayHit(c, d, field),
    profile: (u, th) => {
      const top = infield(th) ? H : 7
      if (u > 0.96) return { h: top, color: P.concrete }
      return { h: K.lerp(1.5, top - 0.4, u / 0.96), color: P.seat, seat: true }
    },
    facade: P.facade, innerWall: () => '#2f4a3a', fieldY: 0.05,
  }, mat)
  g.add(fieldMesh(g.userData.innerRing, 0.05, (ctx, toPx, ppm) => K.baseballField(ctx, toPx, ppm, { home, cf, grass: P.grass, grass2: K.tone(P.grass, 1.08), dirt: '#b4774a' }, g.userData.innerRing), mat, 8))
  // Video board beyond center field and light towers on the grandstand rim.
  const off = K.rayHit(c, cfv, outline) - 3
  g.add(K.place(K.scoreboard(30, 11, 9, mat), [c[0] + cfv[0] * off, c[1] + cfv[1] * off], 0, (cf + 90) % 360))
  if (v.roof === 'dome') {
    const outer = g.userData.outerRing.map(([x, , z]) => [x, z])
    g.add(wall(outer, 0, H + 8, P.facade, mat))
    g.add(domeRoof(outer, c, H + 8, 18, P.roof, mat))
  } else if (v.roof === 'retractable') {
    // Shown open: the roof panels parked behind the outfield on two runway trusses.
    g.add(parkedRoof(c, cfv, K.rayHit(c, cfv, outline) - 40, 170, 60, 20, P.roof, mat))
  }
  return g
}

// Arena: an enclosed drum on the footprint, glass base, clad walls, low dome.
function arena({ fp, mat, info }) {
  const P = palette(info), v = info.venue || {}
  const c = K.centroid(fp.pts)
  const R = clamp(Math.sqrt((v.capacity || 15000) * 1.1), 70, 105) // footprint radius cap
  const outline = ring(c, fp.pts, () => R, () => 45, 3)
  const H = clamp(18 + (v.capacity || 15000) / 1500, 22, 38)
  const g = new THREE.Group()
  g.add(wall(outline, 0, 6, P.glass, mat, 'glass'))
  g.add(wall(outline, 6, H, P.facade, mat))
  const capRing = K.flatPoly(outline, 0.02, mat(P.concrete, { kind: 'concrete' })); g.add(capRing)
  g.add(domeRoof(outline, c, H, H * 0.22, P.roof, mat))
  return g
}

// Oval racetrack: track band with banked turns around a grass infield, the main
// grandstand along the front stretch, pit road inside it.
function racetrack({ fp, mat, info }) {
  const P = palette(info)
  const c = K.centroid(fp.pts), ang = K.principalAngle(fp.pts)
  const ax = [Math.cos(ang), Math.sin(ang)], ay = [-ax[1], ax[0]]
  let hx = 0, hy = 0
  for (const p of fp.pts) { const dx = p[0] - c[0], dz = p[1] - c[1]; hx = Math.max(hx, Math.abs(dx * ax[0] + dz * ax[1])); hy = Math.max(hy, Math.abs(dx * ay[0] + dz * ay[1])) }
  hx = clamp(hx * 0.85, 150, 1100); hy = clamp(hy * 0.8, 90, Math.min(hx * 0.6, 450))
  const W = clamp(hx * 0.035, 15, 28), rad = hy
  const at = (u, v) => [c[0] + ax[0] * u + ay[0] * v, c[1] + ax[1] * u + ay[1] * v]
  const oval = (r) => { const pts = [], s = hx - rad; for (let k = 0; k <= 40; k++) { const t = -Math.PI / 2 + (k / 40) * Math.PI; pts.push(at(s + r * Math.cos(t), r * Math.sin(t))) } for (let k = 0; k <= 40; k++) { const t = Math.PI / 2 + (k / 40) * Math.PI; pts.push(at(-s + r * Math.cos(t), r * Math.sin(t))) } return pts }
  const g = new THREE.Group()
  const outer = oval(rad), innerR = oval(rad - W), infield = oval(rad - W - 4)
  // Banked track: a strip whose outer edge rises in the turns.
  const pos = [], idx = []
  for (let i = 0; i < outer.length; i++) {
    const p = outer[i], q = innerR[i]
    const u = (p[0] - c[0]) * ax[0] + (p[1] - c[1]) * ax[1]
    const bank = Math.abs(u) > hx - rad ? W * 0.4 : 1.5
    pos.push(q[0], 0.1, q[1], p[0], bank, p[1])
  }
  for (let i = 0; i < outer.length; i++) { const a = i * 2, b = ((i + 1) % outer.length) * 2; idx.push(a, b, a + 1, b, b + 1, a + 1) }
  const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setIndex(idx); tg.computeVertexNormals()
  const track = new THREE.Mesh(tg, mat('#55585c', { kind: 'asphalt', side: THREE.DoubleSide })); track.receiveShadow = true; g.add(track)
  g.add(K.flatPoly(infield, 0.3, mat(P.grass, { kind: 'grass' })))
  // Infield service road and the outer retaining wall with catch fence posts.
  const road = oval(rad - W - 40), road2 = oval(rad - W - 48)
  g.add(band(road, road2, 0.5, '#6a6d70', mat))
  g.add(wall(outer.map((p, i) => p), 0, 3, '#e9e9e4', mat, 'paint'))
  const s = hx - rad, along = K.vecBearing(ax)
  // Pit road and garages inside the front stretch.
  g.add(K.place(K.box(2 * s * 0.85, 0.25, 16, '#6a6d70', mat, { kind: 'asphalt' }), at(0, rad - W - 12), 0.3, along))
  for (let k = -3; k <= 3; k++) g.add(K.place(K.box(s * 0.2, 5, 14, '#d8d6cf', mat, { kind: 'concrete' }), at(k * s * 0.24, rad - W - 32), 0, along))
  // Main grandstand outside the front stretch: two tiers rising away from the
  // track, suite level and roof on top, wrapping into both turns.
  const GL = 2 * s * 0.95, GD = clamp(hx * 0.11, 30, 110), GH = GD * 0.6
  const gs = new THREE.Group()
  const N = 10
  for (let k = 0; k < N; k++) { const b = K.box(GL - k * GD * 0.08, GH * (k + 1) / N, GD / N + 0.2, P.seat, mat, { kind: 'seat' }); b.position.set(0, 0, (k + 0.5) * GD / N - GD / 2); gs.add(b) }
  const suites = K.box(GL * 0.7, GH * 0.18, GD * 0.16, P.glass, mat, { kind: 'glass' }); suites.position.set(0, GH, GD * 0.42); gs.add(suites)
  const roof = K.box(GL * 0.72, 1.4, GD * 0.3, P.roof, mat, { kind: 'metal' }); roof.position.set(0, GH * 1.18 + 1, GD * 0.38); gs.add(roof)
  g.add(K.place(gs, at(0, rad + 4 + GD / 2), 0, along))
  // Turn grandstands: lower blocks angled around the ends of the front stretch.
  for (const e of [-1, 1]) {
    const tb = new THREE.Group()
    for (let k = 0; k < 6; k++) { const b = K.box(rad * 0.7, GH * 0.6 * (k + 1) / 6, GD * 0.6 / 6 + 0.2, P.seat, mat, { kind: 'seat' }); b.position.set(0, 0, (k + 0.5) * GD * 0.1 - GD * 0.3); tb.add(b) }
    const ang2 = (e > 0 ? -1 : 1) * 30
    const p = at(e * (s + rad * 0.5), rad * 0.87 + GD * 0.3 + 4)
    g.add(K.place(tb, p, 0, (along + ang2 * e + 360) % 360))
  }
  // Whole oval, seen from the infield side facing the grandstand: a framing
  // crop would cut the model at the canvas edge (an artifact in QA).
  g.userData.cameraBearing = (K.vecBearing(ay) + 180) % 360 // from the infield side, facing the grandstand
  g.userData.cameraElev = 34
  return g
}

// Road course: the start-finish straight with pit lane, garages and the main
// grandstand, the track sweeping away into curves at both ends over grass.
// (An oval would misstate the venue; the full circuit is kilometers across.)
function roadCourse({ fp, mat, info }) {
  const P = palette(info)
  const c = K.centroid(fp.pts), ang = K.principalAngle(fp.pts)
  const ax = [Math.cos(ang), Math.sin(ang)], ay = [-ax[1], ax[0]]
  const at = (u, v) => [c[0] + ax[0] * u + ay[0] * v, c[1] + ax[1] * u + ay[1] * v]
  const along = K.vecBearing(ax), L = 420, W = 24, g = new THREE.Group()
  // Centerline: straight, then a right-hander and a left-hander at the ends.
  const cl = []
  for (let k = 0; k <= 30; k++) { const t = k / 30; const a = Math.PI * 0.9 * t; cl.push([-L / 2 - 90 * Math.sin(a), -90 * (1 - Math.cos(a))]) }
  cl.reverse()
  for (let k = 1; k < 20; k++) cl.push([-L / 2 + (k / 20) * L, 0])
  for (let k = 0; k <= 30; k++) { const t = k / 30; const a = Math.PI * 0.6 * t; cl.push([L / 2 + 120 * Math.sin(a), -120 * (1 - Math.cos(a))]) }
  const off = (pts, d) => pts.map((p, i) => { const q = pts[Math.min(i + 1, pts.length - 1)], r = pts[Math.max(i - 1, 0)]; const tx = q[0] - r[0], tz = q[1] - r[1], n = Math.hypot(tx, tz) || 1; return at(p[0] - (tz / n) * d, p[1] + (tx / n) * d) })
  const a = off(cl, W / 2), b = off(cl, -W / 2)
  const pos = [], idx = []
  for (let i = 0; i < a.length; i++) pos.push(a[i][0], 1.2, a[i][1], b[i][0], 1.2, b[i][1])
  for (let i = 0; i < a.length - 1; i++) { const p = i * 2, q = p + 2; idx.push(p, q, p + 1, q, q + 1, p + 1) }
  const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setIndex(idx); tg.computeVertexNormals()
  g.add(new THREE.Mesh(tg, mat('#55585c', { kind: 'asphalt', side: THREE.DoubleSide })))
  const ground = []; for (const [u, v] of [[-L / 2 - 110, -200], [L / 2 + 150, -200], [L / 2 + 150, 70], [-L / 2 - 110, 70]]) ground.push(at(u, v))
  g.add(K.flatPoly(ground, 0, mat(P.grass, { kind: 'grass' })))
  // Pit lane and garages on one side of the straight, grandstand on the other.
  g.add(K.place(K.box(L * 0.8, 0.3, 14, '#6a6d70', mat, { kind: 'asphalt' }), at(0, -20), 0.2, along))
  g.add(K.place(K.box(L * 0.75, 7, 18, '#dcdad3', mat, { kind: 'concrete' }), at(0, -44), 0, along))
  g.add(K.place(K.box(L * 0.4, 6, 14, P.glass, mat, { kind: 'glass' }), at(0, -44), 7, along))
  const GD = 44, GH = 26, gs = new THREE.Group()
  for (let k = 0; k < 8; k++) { const s = K.box(L * 0.6, GH * (k + 1) / 8, GD / 8 + 0.2, P.seat, mat, { kind: 'seat' }); s.position.set(0, 0, (k + 0.5) * GD / 8 - GD / 2); gs.add(s) }
  const roof = K.box(L * 0.6, 1.2, GD * 0.5, P.roof, mat, { kind: 'metal' }); roof.position.set(0, GH + 5, GD * 0.25); gs.add(roof)
  g.add(K.place(gs, at(0, 16 + GD / 2), 0, along))
  g.userData.cameraBearing = (K.vecBearing(ay) + 180) % 360
  g.userData.cameraElev = 36
  return g
}

export function generic(args) {
  const t = args.info.venue?.venue_type
  if (t === 'ballpark') return ballpark(args)
  if (t === 'arena') return arena(args)
  if (t === 'tennis') return rectStadium(args, 'tennis')
  if (t === 'racetrack') return ROAD_COURSES.has(args.info.slug) ? roadCourse(args) : racetrack(args)
  if (t === 'soccer_specific') return rectStadium(args, 'soccer')
  return rectStadium(args, 'football')
}
