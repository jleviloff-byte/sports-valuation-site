// Builds scripts/stadiums/cpi-u.json: BLS CPI-U, U.S. city average, all items,
// not seasonally adjusted (series CUUR0000SA0), annual averages 1913–2025.
//
// Source: BLS Public Data API v1 (no key), monthly values. download.bls.gov
// refuses automated clients, so the annual average is computed here as the
// mean of the monthly index values, which is how BLS defines it. BLS did not
// collect October 2025 data (lapse in appropriations), so 2025 is the mean of
// 11 months and carries a note.
//
// Usage: node scripts/stadiums/build-cpi.mjs
import fs from 'node:fs'

const SERIES = 'CUUR0000SA0'
const API = 'https://api.bls.gov/publicAPI/v1/timeseries/data/'
const monthly = {}
for (let y = 1913; y <= 2025; y += 10) {
  const end = Math.min(y + 9, 2025)
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'FranchiseMathStadiumBot/0.1' },
    body: JSON.stringify({ seriesid: [SERIES], startyear: String(y), endyear: String(end) }),
  })
  const j = await res.json()
  if (j.status !== 'REQUEST_SUCCEEDED') throw new Error(`BLS ${y}-${end}: ${j.message}`)
  for (const d of j.Results.series[0].data) {
    if (!/^M(0[1-9]|1[0-2])$/.test(d.period)) continue
    const v = Number(d.value)
    if (!Number.isFinite(v)) continue
    ;(monthly[d.year] ||= []).push(v)
  }
}

const annual = {}
const notes = {}
for (const [y, vs] of Object.entries(monthly)) {
  annual[y] = Math.round((vs.reduce((a, b) => a + b, 0) / vs.length) * 1000) / 1000
  if (vs.length !== 12) notes[y] = `Mean of ${vs.length} months.${y === '2025' ? ' BLS did not collect October 2025 CPI data (2025 lapse in appropriations).' : ''}`
}

const out = {
  series: SERIES,
  description: 'CPI-U, U.S. city average, all items, not seasonally adjusted, 1982-84=100. Annual average = mean of monthly index values.',
  source: 'https://data.bls.gov/timeseries/CUUR0000SA0',
  api: API,
  license: 'U.S. Bureau of Labor Statistics data are in the public domain.',
  base_year_for_real_dollars: 2025,
  fetched: new Date().toISOString(),
  notes,
  annual,
}
fs.writeFileSync('scripts/stadiums/cpi-u.json', JSON.stringify(out, null, 1))
console.log(`wrote ${Object.keys(annual).length} years; 1913=${annual[1913]} 2025=${annual[2025]}`, notes)
