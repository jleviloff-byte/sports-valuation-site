// Venue sprite sizing for the stadium map.
//
// size = k(zoom) * sqrt(capacity), so area tracks capacity: Michigan Stadium
// (107,601) reads about 1.9x Yulman Stadium (30,000) in width. Above 110,000
// growth turns logarithmic so the largest racetracks stay the biggest marks
// without covering a region. A per-zoom floor keeps 15,000-seat venues legible.

export const SOFT_CAP = 110000

export function sizeUnits(capacity) {
  const c = Math.max(1, capacity || 0)
  if (c <= SOFT_CAP) return Math.sqrt(c)
  return Math.sqrt(SOFT_CAP) * (1 + 0.5 * Math.log(c / SOFT_CAP))
}

const REF = sizeUnits(100000)

// Width in CSS pixels at a map zoom level.
// Racetracks: capacities are 100k-250k estimates of mostly open ground, so their
// marks are sized as if capped at RACETRACK_CAP; otherwise they dominate the map.
export const RACETRACK_CAP = 70000

export function spritePx(capacity, zoom, type) {
  if (type === 'racetrack') capacity = Math.min(capacity || 0, RACETRACK_CAP)
  // A 100k venue is 50px at zoom 4; growth is quick to zoom 6, then gentle, like map landmarks.
  const at100k = zoom <= 6 ? 50 * Math.pow(1.3, zoom - 4) : 50 * 1.69 * Math.pow(1.12, zoom - 6)
  const floor = Math.min(30, 17 * Math.pow(1.22, zoom - 4))
  return Math.round(Math.min(220, Math.max(floor, (at100k * sizeUnits(capacity)) / REF)))
}

// Legend reference sizes.
export const LEGEND_CAPACITIES = [15000, 50000, 100000]
