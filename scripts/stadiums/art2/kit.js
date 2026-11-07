// Illustrated venue modeling kit (three.js, browser ESM). Real-world meters:
// x = east, z = south (north is -z), y = up. Footprints are OSM outer rings in
// [lng, lat]; everything keeps its true orientation.
//
// The seating bowl is built along rays cast from a center point: for each
// angle, the ray meets the real footprint at R(theta) and the field edge at
// r0(theta); a height profile is lofted between them. This follows concave
// outlines, keeps an exact outer edge, and lets each venue vary tiers,
// overhangs and open ends by angle.
import * as THREE from 'three'

// ── geometry helpers ──────────────────────────────────────────────────────────
export function project(ring, origin) {
  const lat0 = origin?.lat ?? ring.reduce((s, p) => s + p[1], 0) / ring.length
  const lng0 = origin?.lng ?? ring.reduce((s, p) => s + p[0], 0) / ring.length
  const kx = 111320 * Math.cos((lat0 * Math.PI) / 180), ky = 110540
  const pts = ring.map(([lng, lat]) => [(lng - lng0) * kx, -(lat - lat0) * ky])
  if (pts.length > 1 && pts[0][0] === pts.at(-1)[0] && pts[0][1] === pts.at(-1)[1]) pts.pop()
  return { pts, toLocal: ([lng, lat]) => [(lng - lng0) * kx, -(lat - lat0) * ky], lat0, lng0 }
}
export const centroid = (pts) => { let a = 0, cx = 0, cz = 0; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const f = pts[j][0] * pts[i][1] - pts[i][0] * pts[j][1]; a += f; cx += (pts[j][0] + pts[i][0]) * f; cz += (pts[j][1] + pts[i][1]) * f } return [cx / (3 * a), cz / (3 * a)] }
export function principalAngle(pts) {
  const [cx, cz] = [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length]
  let sxx = 0, szz = 0, sxz = 0
  for (const [x, z] of pts) { sxx += (x - cx) ** 2; szz += (z - cz) ** 2; sxz += (x - cx) * (z - cz) }
  return 0.5 * Math.atan2(2 * sxz, sxx - szz)
}
// Compass bearing (deg clockwise from north) <-> unit vector in x/z.
export const bearingVec = (deg) => [Math.sin((deg * Math.PI) / 180), -Math.cos((deg * Math.PI) / 180)]
export const vecBearing = ([x, z]) => ((Math.atan2(x, -z) * 180) / Math.PI + 360) % 360
// First intersection of the ray c + t*d (t > 0) with the polygon; returns t.
export function rayHit(c, d, pts) {
  let best = Infinity
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [ax, az] = pts[j], [bx, bz] = pts[i]
    const ex = bx - ax, ez = bz - az
    const den = d[0] * ez - d[1] * ex
    if (Math.abs(den) < 1e-9) continue
    const t = ((ax - c[0]) * ez - (az - c[1]) * ex) / den
    const u = ((ax - c[0]) * d[1] - (az - c[1]) * d[0]) / den
    if (t > 1e-6 && u >= 0 && u <= 1 && t < best) best = t
  }
  return best
}
// Distance along direction d from c to the edge of an axis-aligned rounded
// rectangle (half-sizes hx, hz, corner radius rr, rotation ang) grown by pad.
export function rectHit(c, d, rect, pad = 0) {
  const cos = Math.cos(-rect.ang), sin = Math.sin(-rect.ang)
  const dx = d[0] * cos - d[1] * sin, dz = d[0] * sin + d[1] * cos
  const ox = (c[0] - rect.cx) * cos - (c[1] - rect.cz) * sin, oz = (c[0] - rect.cx) * sin + (c[1] - rect.cz) * cos
  const hx = rect.hx + pad, hz = rect.hz + pad, rr = Math.min(rect.rr + pad, hx, hz)
  // Signed distance of a rounded box, marched along the ray.
  const sd = (x, z) => { const qx = Math.abs(x) - (hx - rr), qz = Math.abs(z) - (hz - rr); return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - rr }
  let t = 0
  for (let k = 0; k < 64; k++) { const s = sd(ox + dx * t, oz + dz * t); if (s > -0.01) return t; t += Math.max(0.05, -s) }
  return t
}
export function pointInPoly([x, z], pts) {
  let inside = false
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, zi] = pts[i], [xj, zj] = pts[j]
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside
  }
  return inside
}
export function hull(points) {
  const p = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lo = [], up = []
  for (const q of p) { while (lo.length >= 2 && cross(lo.at(-2), lo.at(-1), q) <= 0) lo.pop(); lo.push(q) }
  for (const q of p.reverse()) { while (up.length >= 2 && cross(up.at(-2), up.at(-1), q) <= 0) up.pop(); up.push(q) }
  return lo.slice(0, -1).concat(up.slice(0, -1))
}
export const lerp = (a, b, t) => a + (b - a) * t
export const smooth = (t) => t * t * (3 - 2 * t)
const angDiff = (a, b) => { let d = ((a - b + 540) % 360) - 180; return Math.abs(d) }

// ── materials ────────────────────────────────────────────────────────────────
// Style variants share geometry; only shading changes.
export function makeMaterials(style) {
  const cache = new Map()
  return (color, opts = {}) => {
    const key = `${color}|${opts.flat ? 1 : 0}|${opts.opacity ?? 1}|${opts.vertex ? 1 : 0}|${opts.emissive || ''}|${opts.map ? opts.map.uuid : ''}|${opts.side || 0}`
    if (cache.has(key)) return cache.get(key)
    let m
    const common = { color: opts.vertex ? 0xffffff : color, vertexColors: !!opts.vertex, transparent: (opts.opacity ?? 1) < 1, opacity: opts.opacity ?? 1, side: opts.side ?? THREE.FrontSide, map: opts.map || null }
    if (style === 'vector') {
      m = new THREE.MeshToonMaterial({ ...common, gradientMap: toonRamp() })
    } else {
      m = new THREE.MeshStandardMaterial({ ...common, roughness: opts.roughness ?? (style === 'painted' ? 0.92 : 0.78), metalness: opts.metalness ?? 0, flatShading: !!opts.flat, emissive: opts.emissive ? new THREE.Color(opts.emissive) : new THREE.Color(0x000000), emissiveIntensity: opts.emissive ? 0.6 : 0 })
    }
    if (opts.opacity != null && opts.opacity < 1) m.depthWrite = false
    cache.set(key, m)
    return m
  }
}
let ramp = null
function toonRamp() {
  if (ramp) return ramp
  const d = new Uint8Array([90, 160, 225, 255])
  ramp = new THREE.DataTexture(d, d.length, 1, THREE.RedFormat)
  ramp.minFilter = ramp.magFilter = THREE.NearestFilter
  ramp.needsUpdate = true
  return ramp
}

// ── bowl ─────────────────────────────────────────────────────────────────────
// spec: { center:[x,z], outline: pts, inner(theta)->r0, profile(u, theta)->{h, color} | null (no seats),
//         rimHeight(theta), facade: color, nTheta, nU, rows: bool }
export function bowl(spec, mat) {
  const N = spec.nTheta ?? 360, M = spec.nU ?? 28
  const pos = [], col = [], idx = []
  const C = new THREE.Color()
  const grid = []
  for (let i = 0; i < N; i++) {
    const th = (i / N) * 360
    const d = bearingVec(th)
    const R = rayHit(spec.center, d, spec.outline)
    const r0 = Math.min(spec.inner(th, d), R - 0.5)
    const row = []
    for (let j = 0; j <= M; j++) {
      const u = j / M
      const r = lerp(r0, R, u)
      const p = spec.profile(u, th, r, R) // { h, color } or null for no stand at this point
      const x = spec.center[0] + d[0] * r, z = spec.center[1] + d[1] * r
      const h = p ? p.h : 0
      C.set(p ? p.color : spec.groundColor ?? '#8f948f')
      if (spec.rows && p && p.seat) { const band = Math.floor(u * (spec.rowCount ?? 40)) % 2; if (band) C.offsetHSL(0, 0, -0.035) }
      if (spec.aisles && p && p.seat && Math.round(th) % spec.aisles === 0) C.offsetHSL(0, -0.05, -0.08)
      row.push(pos.length / 3)
      pos.push(x, h, z); col.push(C.r, C.g, C.b)
    }
    grid.push({ row, R, d, th })
  }
  for (let i = 0; i < N; i++) {
    const a = grid[i].row, b = grid[(i + 1) % N].row
    for (let j = 0; j < M; j++) idx.push(a[j], b[j], a[j + 1], b[j], b[j + 1], a[j + 1])
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
  g.setIndex(idx)
  g.computeVertexNormals()
  const mesh = new THREE.Mesh(g, mat('#ffffff', { vertex: true, side: THREE.DoubleSide }))
  mesh.castShadow = mesh.receiveShadow = true
  const group = new THREE.Group()
  group.add(mesh)
  // Exterior facade: vertical skirt along the outer edge, from ground to rim.
  const fp = [], fi = [], fc = []
  const F = new THREE.Color()
  for (let i = 0; i < N; i++) {
    const last = grid[i].row[M]
    const x = pos[last * 3], h = pos[last * 3 + 1], z = pos[last * 3 + 2]
    const fcol = typeof spec.facade === 'function' ? spec.facade(grid[i].th) : spec.facade
    F.set(fcol)
    fp.push(x, 0, z, x, Math.max(h, 0.2), z)
    fc.push(F.r * 0.82, F.g * 0.82, F.b * 0.82, F.r, F.g, F.b)
  }
  for (let i = 0; i < N; i++) { const a = i * 2, b = ((i + 1) % N) * 2; fi.push(a, b, a + 1, b, b + 1, a + 1) }
  const fg = new THREE.BufferGeometry()
  fg.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3))
  fg.setAttribute('color', new THREE.Float32BufferAttribute(fc, 3))
  fg.setIndex(fi)
  fg.computeVertexNormals()
  const fm = new THREE.Mesh(fg, mat('#ffffff', { vertex: true, side: THREE.DoubleSide }))
  fm.castShadow = fm.receiveShadow = true
  group.add(fm)
  group.userData.grid = grid
  group.userData.innerRing = grid.map((gi) => { const k = gi.row[0]; return [pos[k * 3], pos[k * 3 + 2]] })
  return group
}

// Flat polygon at height y (triangulated with ShapeGeometry).
export function flatPoly(pts, y, material) {
  const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)))
  const g = new THREE.ShapeGeometry(shape, 1)
  g.rotateX(-Math.PI / 2)
  g.translate(0, y, 0)
  const m = new THREE.Mesh(g, material)
  m.receiveShadow = true
  return m
}
// Planar world-space UVs so a canvas drawn in meters lines up with the model.
export function worldUV(mesh, box) {
  const p = mesh.geometry.attributes.position
  const uv = new Float32Array(p.count * 2)
  for (let i = 0; i < p.count; i++) { uv[i * 2] = (p.getX(i) - box.x0) / (box.x1 - box.x0); uv[i * 2 + 1] = 1 - (p.getZ(i) - box.z0) / (box.z1 - box.z0) }
  mesh.geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
}
// Canvas in world meters: draw(ctx, toPx) with toPx([x,z]) -> [px,py].
export function canvasTexture(box, ppm, draw) {
  const w = Math.min(4096, Math.ceil((box.x1 - box.x0) * ppm)), h = Math.min(4096, Math.ceil((box.z1 - box.z0) * ppm))
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const ctx = c.getContext('2d')
  const toPx = ([x, z]) => [((x - box.x0) / (box.x1 - box.x0)) * w, ((z - box.z0) / (box.z1 - box.z0)) * h]
  draw(ctx, toPx, w / (box.x1 - box.x0))
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}
export const bboxOf = (pts, pad = 0) => ({ x0: Math.min(...pts.map((p) => p[0])) - pad, x1: Math.max(...pts.map((p) => p[0])) + pad, z0: Math.min(...pts.map((p) => p[1])) - pad, z1: Math.max(...pts.map((p) => p[1])) + pad })

// ── fields ───────────────────────────────────────────────────────────────────
// American football: 120 x 53.33 yd including end zones.
export function footballField(ctx, toPx, ppm, f) {
  const L = 109.73, W = 48.77
  const cos = Math.cos(f.ang), sin = Math.sin(f.ang)
  const at = (u, v) => toPx([f.cx + u * cos - v * sin, f.cz + u * sin + v * cos])
  const quad = (u0, v0, u1, v1, color) => { ctx.fillStyle = color; ctx.beginPath(); for (const [u, v] of [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]) ctx.lineTo(...at(u, v)); ctx.closePath(); ctx.fill() }
  quad(-L / 2 - 6, -W / 2 - 6, L / 2 + 6, W / 2 + 6, f.surround || f.grass)
  for (let k = 0; k < 20; k++) quad(-L / 2 + 9.14 + k * 4.572, -W / 2, -L / 2 + 9.14 + (k + 1) * 4.572, W / 2, k % 2 ? f.grass : f.grass2 || f.grass)
  quad(-L / 2, -W / 2, -L / 2 + 9.14, W / 2, f.endzone || f.grass)
  quad(L / 2 - 9.14, -W / 2, L / 2, W / 2, f.endzone2 || f.endzone || f.grass)
  ctx.strokeStyle = '#f4f4ef'
  ctx.lineWidth = Math.max(1, 0.25 * ppm)
  const line = (u0, v0, u1, v1) => { ctx.beginPath(); ctx.moveTo(...at(u0, v0)); ctx.lineTo(...at(u1, v1)); ctx.stroke() }
  for (let k = 0; k <= 20; k++) { const u = -L / 2 + 9.14 + k * 4.572; line(u, -W / 2, u, W / 2) }
  line(-L / 2, -W / 2, L / 2, -W / 2); line(-L / 2, W / 2, L / 2, W / 2); line(-L / 2, -W / 2, -L / 2, W / 2); line(L / 2, -W / 2, L / 2, W / 2)
  if (f.centerColor) { ctx.fillStyle = f.centerColor; ctx.beginPath(); const [px, py] = at(0, 0); ctx.arc(px, py, 4 * ppm, 0, Math.PI * 2); ctx.fill() }
}
// Baseball: home plate position, bearing to center field.
export function baseballField(ctx, toPx, ppm, b, fieldPoly) {
  ctx.fillStyle = b.grass
  ctx.beginPath(); for (const p of fieldPoly) ctx.lineTo(...toPx(p)); ctx.closePath(); ctx.fill()
  // Mowing stripes across the outfield.
  ctx.save(); ctx.beginPath(); for (const p of fieldPoly) ctx.lineTo(...toPx(p)); ctx.closePath(); ctx.clip()
  const cf = bearingVec(b.cf), lf = bearingVec(b.cf - 45), rf = bearingVec(b.cf + 45)
  const H = b.home
  ctx.strokeStyle = b.grass2; ctx.lineWidth = 5 * ppm
  for (let k = -30; k <= 30; k++) { const o = k * 10; const a = [H[0] + cf[0] * 200 + cf[1] * o, H[1] + cf[1] * 200 - cf[0] * o]; const c2 = [H[0] - cf[0] * 50 + cf[1] * o, H[1] - cf[1] * 50 - cf[0] * o]; ctx.beginPath(); ctx.moveTo(...toPx(a)); ctx.lineTo(...toPx(c2)); ctx.stroke() }
  // Warning track: a band just inside the field edge.
  ctx.strokeStyle = b.dirt; ctx.lineWidth = 9 * ppm
  ctx.beginPath(); for (const p of fieldPoly) ctx.lineTo(...toPx(p)); ctx.closePath(); ctx.stroke()
  ctx.restore()
  // Infield dirt arc (radius ~29 m around the mound) clipped to fair-ish territory, then infield grass.
  const mound = [H[0] + cf[0] * 18.4, H[1] + cf[1] * 18.4]
  const [mx, my] = toPx(mound)
  const ang0 = Math.atan2(lf[1], lf[0]), ang1 = Math.atan2(rf[1], rf[0])
  ctx.fillStyle = b.dirt
  ctx.beginPath(); ctx.moveTo(...toPx(H)); ctx.arc(mx, my, 29 * ppm, ang0 - 0.25, ang1 + 0.25); ctx.closePath(); ctx.fill()
  const base = (k) => { const v = k === 1 ? rf : k === 3 ? lf : cf; const dist = k === 2 ? 38.8 : 27.4; return [H[0] + v[0] * dist, H[1] + v[1] * dist] }
  ctx.fillStyle = b.grass
  const inset = (p, t) => [lerp(p[0], mound[0], t), lerp(p[1], mound[1], t)]
  ctx.beginPath(); for (const p of [H, base(1), base(2), base(3)].map((p) => inset(p, 0.17))) ctx.lineTo(...toPx(p)); ctx.closePath(); ctx.fill()
  ctx.fillStyle = b.dirt
  ctx.beginPath(); ctx.arc(mx, my, 2.7 * ppm, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.arc(...toPx(H), 4 * ppm, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = '#f4f4ef'
  for (const k of [1, 2, 3]) { const [px, py] = toPx(base(k)); ctx.fillRect(px - 0.5 * ppm, py - 0.5 * ppm, ppm, ppm) }
  ctx.strokeStyle = '#f4f4ef'; ctx.lineWidth = Math.max(1, 0.2 * ppm)
  for (const v of [lf, rf]) { ctx.beginPath(); ctx.moveTo(...toPx(H)); ctx.lineTo(...toPx([H[0] + v[0] * 130, H[1] + v[1] * 130])); ctx.stroke() }
}
export function tennisCourt(ctx, toPx, ppm, t) {
  const cos = Math.cos(t.ang), sin = Math.sin(t.ang)
  const at = (u, v) => toPx([t.cx + u * cos - v * sin, t.cz + u * sin + v * cos])
  const quad = (u0, v0, u1, v1, color) => { ctx.fillStyle = color; ctx.beginPath(); for (const [u, v] of [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]) ctx.lineTo(...at(u, v)); ctx.closePath(); ctx.fill() }
  quad(-60, -60, 60, 60, t.surround)
  quad(-11.885, -5.485, 11.885, 5.485, t.court)
  ctx.strokeStyle = '#f4f4ef'; ctx.lineWidth = Math.max(1, 0.12 * ppm)
  const line = (u0, v0, u1, v1) => { ctx.beginPath(); ctx.moveTo(...at(u0, v0)); ctx.lineTo(...at(u1, v1)); ctx.stroke() }
  for (const v of [-5.485, -4.115, 4.115, 5.485]) line(-11.885, v, 11.885, v)
  for (const u of [-11.885, 11.885]) line(u, -5.485, u, 5.485)
  for (const u of [-6.4, 6.4]) line(u, -4.115, u, 4.115)
  line(-6.4, 0, 6.4, 0); line(0, -5.6, 0, 5.6)
}

// ── features ─────────────────────────────────────────────────────────────────
export function box(w, h, d, color, mat, opts = {}) {
  const g = new THREE.BoxGeometry(w, h, d)
  g.translate(0, h / 2, 0)
  const m = new THREE.Mesh(g, mat(color, opts))
  m.castShadow = m.receiveShadow = true
  return m
}
// Place an object at local [x, z], rotated so its +x axis points along bearing deg.
export function place(obj, [x, z], y = 0, alongBearing = 90) {
  obj.position.set(x, y, z)
  obj.rotation.y = -((alongBearing - 90) * Math.PI) / 180
  return obj
}
export function lightTower(h, mat, color = '#d9dbd6') {
  const g = new THREE.Group()
  g.add(box(1.2, h, 1.2, color, mat))
  const head = box(9, 3.2, 1.6, '#e8e6dc', mat, { emissive: '#fff4d6' })
  head.position.y = h
  g.add(head)
  return g
}
export function scoreboard(w, h, standH, mat, face = '#20252b') {
  const g = new THREE.Group()
  const legs = box(w * 0.5, standH, 1.5, '#3a3f45', mat)
  g.add(legs)
  const b = box(w, h, 2.2, face, mat)
  b.position.y = standH
  g.add(b)
  return g
}
// Water body (flat polygon slightly above ground).
export function water(pts, mat, color = '#5f8fa8') { return flatPoly(pts, 0.25, mat(color, { roughness: 0.35 })) }
