// Brick-built venue model generator (browser ESM, three.js).
//
// buildVenue(spec, footprint) -> THREE.Group
//   spec: one entry of data/stadium-art.json (+ slug)
//   footprint: [[lng, lat], ...] OSM outer ring
//
// The footprint is projected to local meters (north = -z, real orientation
// kept), normalized so the long side spans GRID studs, and rasterized onto a
// stud grid. Each cell becomes a column of plates (1 stud wide, 0.4 tall);
// archetype rules decide column height and color. Studs are an InstancedMesh.
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

export const PLATE = 0.4
const GRID = 56

// ── geometry helpers ──────────────────────────────────────────────────────────
function project(ring) {
  const lat0 = ring.reduce((s, p) => s + p[1], 0) / ring.length
  const lng0 = ring.reduce((s, p) => s + p[0], 0) / ring.length
  const kx = 111320 * Math.cos((lat0 * Math.PI) / 180), ky = 110540
  return ring.map(([lng, lat]) => [(lng - lng0) * kx, -(lat - lat0) * ky])
}
function pointInPoly([x, z], poly) {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i], [xj, zj] = poly[j]
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside
  }
  return inside
}
function distToPoly([x, z], poly) {
  let best = Infinity
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [ax, az] = poly[j], [bx, bz] = poly[i]
    const dx = bx - ax, dz = bz - az
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz || 1)))
    best = Math.min(best, Math.hypot(x - (ax + t * dx), z - (az + t * dz)))
  }
  return best
}
// Principal axis angle (radians, in the x/z plane).
function principalAngle(pts) {
  const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length, cz = pts.reduce((s, p) => s + p[1], 0) / pts.length
  let sxx = 0, szz = 0, sxz = 0
  for (const [x, z] of pts) { sxx += (x - cx) ** 2; szz += (z - cz) ** 2; sxz += (x - cx) * (z - cz) }
  return 0.5 * Math.atan2(2 * sxz, sxx - szz)
}
// Compass bearing (deg, 0 = north, 90 = east) -> unit vector in x/z.
const bearingVec = (deg) => [Math.sin((deg * Math.PI) / 180), -Math.cos((deg * Math.PI) / 180)]

// Convex hull (monotone chain) of [lng, lat] points.
function hull(points) {
  const p = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lo = [], up = []
  for (const q of p) { while (lo.length >= 2 && cross(lo.at(-2), lo.at(-1), q) <= 0) lo.pop(); lo.push(q) }
  for (const q of p.reverse()) { while (up.length >= 2 && cross(up.at(-2), up.at(-1), q) <= 0) up.pop(); up.push(q) }
  const h = lo.slice(0, -1).concat(up.slice(0, -1))
  return [...h, h[0]]
}

// ── color helpers ─────────────────────────────────────────────────────────────
const C = {
  grass: '#4E9A3F', grass2: '#5BAA4A', turf: '#3F8F45', turf2: '#4A9C50', dirt: '#B9774A', line: '#F2F2EE',
  concrete: '#B7B9B6', concrete2: '#A3A6A3', asphalt: '#45484C', asphalt2: '#55595E', roof: '#E3E4E1', roof2: '#C9CBC8',
  court: '#2F5D8C', court2: '#4F7FB0', ice: '#E9F1F6', hardwood: '#C99A5B', brick: '#A4553A', monster: '#2E5E3A', ivy: '#3D7A35',
  steel: '#D9DBDD', pagoda: '#2E3236', glass: '#6E8796', red: '#B8312F',
}
const shade = (hex, k) => { const c = new THREE.Color(hex); c.offsetHSL(0, 0, k); return '#' + c.getHexString() }

// ── grid model ────────────────────────────────────────────────────────────────
class Grid {
  constructor(ring) {
    const poly = project(ring)
    const xs = poly.map((p) => p[0]), zs = poly.map((p) => p[1])
    const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs)
    this.cell = Math.max(maxX - minX, maxZ - minZ) / GRID
    this.poly = poly.map(([x, z]) => [(x - (minX + maxX) / 2) / this.cell, (z - (minZ + maxZ) / 2) / this.cell])
    this.nx = Math.ceil((maxX - minX) / this.cell) + 4
    this.nz = Math.ceil((maxZ - minZ) / this.cell) + 4
    this.angle = principalAngle(this.poly)
    this.cells = []
    for (let i = 0; i < this.nx; i++) for (let k = 0; k < this.nz; k++) {
      const x = i - this.nx / 2 + 0.5, z = k - this.nz / 2 + 0.5
      const inside = pointInPoly([x, z], this.poly)
      const d = distToPoly([x, z], this.poly) * (inside ? 1 : -1)
      const cos = Math.cos(this.angle), sin = Math.sin(this.angle)
      this.cells.push({ i, k, x, z, inside, d, u: x * cos + z * sin, v: -x * sin + z * cos, h: 0, color: null, top: null })
    }
    const us = this.cells.filter((c) => c.inside).map((c) => c.u), vs = this.cells.filter((c) => c.inside).map((c) => c.v)
    this.uMax = Math.max(...us.map(Math.abs)); this.vMax = Math.max(...vs.map(Math.abs))
    this.maxD = Math.max(...this.cells.map((c) => c.d))
    // Enclosed "outside" cells mean the footprint is a ring (field mapped as a hole).
    const at = (i, k) => this.cells[i * this.nz + k]
    const seen = new Set(), stack = []
    for (let i = 0; i < this.nx; i++) for (const k of [0, this.nz - 1]) stack.push([i, k])
    for (let k = 0; k < this.nz; k++) for (const i of [0, this.nx - 1]) stack.push([i, k])
    while (stack.length) {
      const [i, k] = stack.pop(); const key = i * this.nz + k
      if (i < 0 || k < 0 || i >= this.nx || k >= this.nz || seen.has(key) || at(i, k).inside) continue
      seen.add(key); stack.push([i + 1, k], [i - 1, k], [i, k + 1], [i, k - 1])
    }
    const holes = this.cells.filter((c, n) => !c.inside && !seen.has(n)).length
    this.holeFrac = holes / Math.max(1, this.cells.filter((c) => c.inside).length)
  }
  set(c, h, color) { c.h = Math.max(1, Math.round(h)); c.color = color }
}

// Stands profile: distance-from-edge to height, stepped into tiers.
function standHeight(depthFrac, tiers, hMax) {
  // depthFrac 0 at outer rim, 1 at field edge.
  const r = 1 - depthFrac
  const tier = Math.min(tiers - 1, Math.floor(r * tiers))
  const base = 2 + Math.round(r * hMax)
  return { h: base + tier * 2, tier, rim: depthFrac < 0.06 }
}
function seatColor(spec, tier, row, tiers = 2) {
  const [p, s] = spec.seat_colors
  // Single-tier bowls alternate the two team colors in bands of rows.
  const c = tiers === 1 ? (Math.floor(row / 3) % 2 ? (s || p) : p) : tier % 2 === 0 ? p : (s || p)
  return row % 2 ? shade(c, -0.04) : c
}

// ── archetypes ────────────────────────────────────────────────────────────────
function fieldSurface(g, c, spec, f) {
  const s = spec.surface
  if (s === 'turf' || s === 'grass') {
    const stripe = Math.floor((c.u + g.uMax) / 3) % 2
    g.set(c, 1, s === 'turf' ? (stripe ? C.turf : C.turf2) : stripe ? C.grass : C.grass2)
    // Yard lines across the long axis on football fields.
    if (f.lines && Math.abs(c.v) < g.vMax * f.lines && Math.abs(((c.u % f.spacing) + f.spacing) % f.spacing) < 0.5) c.color = C.line
  } else if (s === 'court') g.set(c, 1, C.court)
  else if (s === 'ice') g.set(c, 1, C.ice)
}

function bowl(g, spec, opts = {}) {
  const W = Math.max(4, Math.round(g.maxD * (opts.depth ?? 0.42)))
  // Keep the rake believable on narrow footprints: height scales with stand depth.
  const hMax = Math.min(opts.hMax ?? { 1: 9, 2: 14, 3: 19 }[spec.tiers] ?? 12, Math.round(W * 1.6))
  let openDir = null
  if (spec.open_ends) {
    // Open the end of the long axis that faces the requested compass side (default south).
    const [bx, bz] = bearingVec(opts.openBearing ?? 180)
    const sign = Math.sign(Math.cos(g.angle) * bx + Math.sin(g.angle) * bz) || 1
    openDir = sign
  }
  for (const c of g.cells) {
    if (!c.inside) { if (c.d > -1.2) g.set(c, 1, C.concrete2); continue }
    const isOpen = openDir != null && c.u * openDir > g.uMax * 0.58
    if (c.d < W && !isOpen) {
      const { h, tier, rim } = standHeight(c.d / W, spec.tiers, hMax)
      g.set(c, h, rim || c.d < 1.6 ? C.concrete : seatColor(spec, tier, Math.floor(c.d), spec.tiers))
    } else if (isOpen && c.d < W) {
      g.set(c, 2, c.d < 2 ? C.concrete : C.concrete2) // open-end plaza
      if (c.u * openDir > g.uMax * 0.86 && Math.abs(c.v) < g.vMax * 0.5) g.set(c, 6, '#2B2F33') // end-zone scoreboard
    } else fieldSurface(g, c, spec, { lines: opts.lines ?? 0.55, spacing: Math.max(3, Math.round(((g.uMax - W) * 2) / 10)) })
  }
  return W
}

function ballpark(g, spec) {
  const cf = bearingVec(spec.cf_bearing ?? 67.5)
  const W = Math.max(4, Math.round(g.maxD * 0.33))
  const ext = Math.max(g.uMax, g.vMax)
  // Home plate sits on the opposite side of center from center field.
  const home = [-cf[0] * ext * 0.42, -cf[1] * ext * 0.42]
  const lf = bearingVec((spec.cf_bearing ?? 67.5) - 45)
  for (const c of g.cells) {
    if (!c.inside) { if (c.d > -1.2) g.set(c, 1, C.concrete2); continue }
    const rel = [c.x - home[0], c.z - home[1]]
    const along = rel[0] * cf[0] + rel[1] * cf[1]
    const dist = Math.hypot(rel[0], rel[1])
    const ang = Math.acos(Math.max(-1, Math.min(1, along / (dist || 1)))) * (180 / Math.PI)
    const behindHome = along < ext * 0.5
    if (c.d < W && behindHome) {
      const { h, tier, rim } = standHeight(c.d / W, spec.tiers, spec.tiers > 1 ? 13 : 9)
      g.set(c, h, rim || c.d < 1.6 ? C.concrete : seatColor(spec, tier, Math.floor(c.d), spec.tiers))
    } else if (c.d < 2.2) {
      // Outfield wall; Green Monster on the left-field side.
      const lfDot = (rel[0] * lf[0] + rel[1] * lf[1]) / (dist || 1)
      if (spec.features.includes('green_monster') && lfDot > 0.93 && along > ext * 0.3) g.set(c, 12, C.monster)
      else if (spec.features.includes('ivy_wall')) g.set(c, 3, C.ivy)
      else g.set(c, 3, shade(spec.seat_colors[0], -0.08))
    } else {
      const fair = ang < 45 && along > 0
      if (fair && dist < ext * 0.36 && dist > ext * 0.15) g.set(c, 1, C.dirt)
      else if (dist < ext * 0.05) g.set(c, 1, C.dirt)
      else g.set(c, 1, Math.floor((along + 100) / 3) % 2 ? C.grass : C.grass2)
      // Bases.
      for (const a of [-45, 45]) {
        const b = bearingVec((spec.cf_bearing ?? 67.5) + a)
        const bp = [home[0] + b[0] * ext * 0.22, home[1] + b[1] * ext * 0.22]
        if (Math.hypot(c.x - bp[0], c.z - bp[1]) < 0.8) g.set(c, 2, C.line)
      }
      const second = [home[0] + cf[0] * ext * 0.31, home[1] + cf[1] * ext * 0.31]
      if (Math.hypot(c.x - second[0], c.z - second[1]) < 0.8) g.set(c, 2, C.line)
      if (dist < 0.9) g.set(c, 2, C.line)
    }
  }
}

function arena(g, spec, opts = {}) {
  const hWall = opts.hWall ?? 12
  const ring = spec.features.includes('cable_ring_roof')
  for (const c of g.cells) {
    if (!c.inside) { if (c.d > -1.5) g.set(c, 1, C.concrete2); continue }
    const r = c.d / g.maxD
    if (c.d < 1.2) {
      // Facade with a team-color band.
      g.set(c, hWall, C.glass)
      c.band = [Math.round(hWall * 0.55), Math.round(hWall * 0.75), spec.seat_colors[0]]
    } else {
      const dome = Math.round(r * (opts.domeRise ?? 4))
      let col = Math.floor(c.d) % 2 ? C.roof : C.roof2
      if (ring) {
        const ang = Math.atan2(c.z, c.x)
        if (c.d < 3.2) col = spec.seat_colors[0]
        else if (Math.round((ang / Math.PI) * 12) % 2 === 0) col = C.roof2
        else col = C.roof
      }
      g.set(c, hWall + 1 + dome, col)
    }
  }
}

function dome(g, spec) {
  bowl(g, spec, { hMax: 14 })
  const hRoof = 18
  const W = Math.max(4, Math.round(g.maxD * 0.42))
  const retract = spec.roof === 'retractable'
  for (const c of g.cells) {
    if (!c.inside) continue
    const r = c.d / g.maxD
    const top = hRoof + Math.round(Math.sqrt(Math.max(0, r)) * 6)
    if (retract && Math.abs(c.v) < g.vMax * 0.22 && c.d > W * 0.7) continue // open slot
    if (c.d < 1.2) g.set(c, Math.max(c.h, hRoof - 2), C.glass)
    else g.set(c, top, spec.features.includes('superdome_roof') ? (Math.floor(c.d / 2) % 2 ? C.roof : C.steel) : (Math.floor(c.d) % 2 ? C.roof : C.roof2))
  }
}

function tennisBowl(g, spec) {
  const W = Math.max(4, Math.round(g.maxD * 0.62))
  for (const c of g.cells) {
    if (!c.inside) { if (c.d > -1.2) g.set(c, 1, C.concrete2); continue }
    if (c.d < W) {
      const { h, tier, rim } = standHeight(c.d / W, Math.max(2, spec.tiers), 20)
      g.set(c, h, rim || c.d < 1.6 ? C.concrete : seatColor(spec, tier, Math.floor(c.d), spec.tiers))
    } else {
      const inCourt = Math.abs(c.u) < (g.maxD - W) * 0.8 && Math.abs(c.v) < (g.maxD - W) * 0.42
      g.set(c, 1, inCourt ? C.court : C.court2)
      if (inCourt && (Math.abs(c.u) < 0.5)) c.color = C.line
    }
  }
  if (spec.features.includes('retractable_roof_frame')) {
    for (const c of g.cells) {
      if (!c.inside) continue
      if (c.d < 2.2) c.h += 3, c.color = C.steel
      else if (c.d < W * 0.75 && Math.abs(c.v) > g.vMax * 0.35) { c.h = Math.max(c.h, 25); c.color = Math.floor(c.u) % 3 === 0 ? C.steel : C.roof }
    }
  }
}

function ovalTrack(g, spec) {
  // Ideal stadium-shaped oval aligned to the footprint's long axis.
  const L = g.uMax * 0.86, Wd = Math.min(g.vMax * 0.86, L * 0.55)
  const R = Wd, straight = Math.max(0, L - R)
  const T = Math.max(2.2, Wd * 0.13)
  const front = bearingVec({ N: 0, E: 90, S: 180, W: 270 }[spec.front ?? 'W'])
  const frontSign = Math.sign(-Math.sin(g.angle) * front[0] + Math.cos(g.angle) * front[1]) || 1
  const ovalDist = (u, v) => {
    const du = Math.max(0, Math.abs(u) - straight)
    return Math.hypot(du, v) - R // signed: 0 on the centerline radius
  }
  for (const c of g.cells) {
    const od = ovalDist(c.u, c.v)
    const onTrack = od > -T && od < 0
    const outside = od >= 0
    if (!c.inside && !(outside && od < 6)) { continue }
    if (onTrack) {
      g.set(c, 1, Math.floor(c.u) % 8 === 0 ? C.asphalt2 : C.asphalt)
      if (spec.features.includes('yard_of_bricks') && Math.abs(c.u) < 0.6 && c.v * frontSign > 0) g.set(c, 1, C.brick)
    } else if (outside && od < 1) g.set(c, 2, C.line) // outer wall
    else if (outside && od < 7.5 && Math.abs(c.u) < straight + R * 0.4) {
      const isFront = c.v * frontSign > 0
      const depth = (od - 1) / 6.5
      const { h, tier, rim } = standHeight(1 - depth, isFront ? spec.tiers : 1, isFront ? 16 : 8)
      g.set(c, h, rim ? C.concrete : seatColor(spec, tier, Math.floor(od)))
    } else if (outside) { if (c.inside) g.set(c, 1, '#7E9B6E') }
    else g.set(c, 1, Math.floor((c.u + 200) / 4) % 2 ? C.grass : C.grass2) // infield
  }
  if (spec.features.includes('pagoda_tower')) {
    // Tower on the infield side of the front straight, at start/finish.
    // Stepped tower: three levels, each narrower and taller.
    const vc = frontSign * (R - T - 3.5)
    for (const c of g.cells) {
      const du = Math.abs(c.u - 2), dv = Math.abs(c.v - vc)
      if (du < 1.1 && dv < 1.1) { g.set(c, 24, C.glass); c.band = [21, 24, C.pagoda] }
      else if (du < 2.1 && dv < 2.1) { g.set(c, 16, C.glass); c.band = [13, 16, C.pagoda] }
      else if (du < 3.1 && dv < 2.6) { g.set(c, 8, C.glass); c.band = [6, 8, C.pagoda] }
    }
  }
}

// ── mesh assembly ─────────────────────────────────────────────────────────────
export function buildVenue(spec, ring) {
  let g = new Grid(ring)
  let usedHull = false
  // Ring-shaped footprints (field mapped as a hole or a notch) fill far less of
  // their convex hull than a real stadium outline does.
  const gh = new Grid(hull(ring.slice(0, -1)))
  const fill = g.cells.filter((c) => c.inside).length / Math.max(1, gh.cells.filter((c) => c.inside).length) * (gh.cell / g.cell) ** 2
  if (g.holeFrac > 0.05 || fill < 0.65) { g = gh; usedHull = true }
  const a = spec.archetype
  if (a === 'full_bowl' || a === 'horseshoe' || a === 'soccer_specific') bowl(g, spec, a === 'soccer_specific' ? { lines: 0 } : {})
  else if (a === 'ballpark') ballpark(g, spec)
  else if (a === 'arena') arena(g, spec)
  else if (a === 'dome') dome(g, spec)
  else if (a === 'tennis_bowl') tennisBowl(g, spec)
  else if (a === 'oval_track') ovalTrack(g, spec)

  // Culled mesh: one top quad per column, and side quads only where a column
  // rises above its neighbor. Side faces get a seam every 3 plates (one brick).
  const pos = [], nor = [], col = [], idx = []
  const tmp = new THREE.Color()
  const quad = (a, b, cc, d, n, color) => {
    const base = pos.length / 3
    tmp.set(color)
    for (const p of [a, b, cc, d]) { pos.push(...p); nor.push(...n); col.push(tmp.r, tmp.g, tmp.b) }
    idx.push(base, base + 1, base + 2, base, base + 2, base + 3)
  }
  const H = new Map(g.cells.filter((c) => c.color).map((c) => [`${c.i},${c.k}`, c.h]))
  const segs = (c) => (c.band ? [[0, c.band[0], c.color], [c.band[0], c.band[1], c.band[2]], [c.band[1], c.h, c.color]] : [[0, c.h, c.color]])
  const SIDES = [[1, 0, [1, 0, 0]], [-1, 0, [-1, 0, 0]], [0, 1, [0, 0, 1]], [0, -1, [0, 0, -1]]]
  const studs = []
  for (const c of g.cells) {
    if (!c.color) continue
    const x0 = c.x - 0.5, x1 = c.x + 0.5, z0 = c.z - 0.5, z1 = c.z + 0.5, top = c.h * PLATE
    quad([x0, top, z1], [x1, top, z1], [x1, top, z0], [x0, top, z0], [0, 1, 0], c.color)
    for (const [di, dk, n] of SIDES) {
      const nh = H.get(`${c.i + di},${c.k + dk}`) ?? 0
      if (nh >= c.h) continue
      for (const [s0, s1, sc] of segs(c)) {
        // Split exposed span into brick courses of 3 plates for visible seams.
        for (let y = Math.max(s0, nh); y < s1; y += 3) {
          const ya = y * PLATE, yb = Math.min(s1, y + 3) * PLATE
          const cc = (Math.floor(y / 3) % 2) ? shade(sc, -0.03) : sc
          if (di === 1) quad([x1, ya, z1], [x1, ya, z0], [x1, yb, z0], [x1, yb, z1], n, cc)
          else if (di === -1) quad([x0, ya, z0], [x0, ya, z1], [x0, yb, z1], [x0, yb, z0], n, cc)
          else if (dk === 1) quad([x0, ya, z1], [x1, ya, z1], [x1, yb, z1], [x0, yb, z1], n, cc)
          else quad([x1, ya, z0], [x0, ya, z0], [x0, yb, z0], [x1, yb, z0], n, cc)
        }
      }
    }
    studs.push([c.x, top, c.z, c.color])
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
  geo.setIndex(idx)
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.name = 'bricks'

  const studGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.18, 10, 1, false)
  studGeo.translate(0, 0.09, 0)
  const studMesh = new THREE.InstancedMesh(studGeo, new THREE.MeshStandardMaterial({ roughness: 0.5 }), studs.length)
  const m = new THREE.Matrix4()
  studs.forEach(([x, y, z, color], i) => { m.makeTranslation(x, y, z); studMesh.setMatrixAt(i, m); studMesh.setColorAt(i, new THREE.Color(color)) })
  studMesh.name = 'studs'

  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), new THREE.LineBasicMaterial({ color: 0x1b1f24, transparent: true, opacity: 0.14 }))
  edges.name = 'outline'

  const group = new THREE.Group()
  group.add(mesh, studMesh, edges)
  group.userData = { cells: g.cells.filter((c) => c.color).length, studs: studs.length, usedHull }
  return group
}

// Orthographic isometric camera fitted to the model (same angle for every venue).
export function fitCamera(object, aspect = 1, margin = 0.04) {
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1000, 1000)
  const dir = new THREE.Vector3(1, Math.SQRT2 * 0.82, 1).normalize() // ~35 deg elevation, from the south-east
  cam.position.copy(dir.multiplyScalar(200))
  cam.lookAt(0, 0, 0)
  cam.updateMatrixWorld()
  const boxW = new THREE.Box3().setFromObject(object)
  const pts = []
  for (const x of [boxW.min.x, boxW.max.x]) for (const y of [boxW.min.y, boxW.max.y]) for (const z of [boxW.min.z, boxW.max.z]) pts.push(new THREE.Vector3(x, y, z).applyMatrix4(cam.matrixWorldInverse))
  const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y)
  let w = Math.max(...xs) - Math.min(...xs), h = Math.max(...ys) - Math.min(...ys)
  const cx = (Math.max(...xs) + Math.min(...xs)) / 2, cy = (Math.max(...ys) + Math.min(...ys)) / 2
  if (w / h > aspect) h = w / aspect; else w = h * aspect
  w *= 1 + margin * 2; h *= 1 + margin * 2
  cam.left = cx - w / 2; cam.right = cx + w / 2; cam.top = cy + h / 2; cam.bottom = cy - h / 2
  cam.updateProjectionMatrix()
  return cam
}

export function addLights(scene) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.9))
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 0.6))
  const key = new THREE.DirectionalLight(0xffffff, 1.6)
  key.position.set(-60, 120, 40)
  scene.add(key)
}
