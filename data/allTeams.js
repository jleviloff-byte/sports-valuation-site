// allTeams.js — unified list of all 174 teams across 6 leagues
// Curated entries from teams.js are used as-is; remaining teams are synthesized from enrichments
// so the LeagueExplorer / CompareTool can render all franchises.
import curatedTeams from './teams.js'
import { nflEnrichments } from './enrichments-nfl.js'
import { nbaEnrichments } from './enrichments-nba.js'
import { mlbEnrichments } from './enrichments-mlb.js'
import { nhlEnrichments } from './enrichments-nhl.js'
import { mlsEnrichments } from './enrichments-mls.js'
import { eplEnrichments } from './enrichments-epl.js'
import { nflDriverScores } from './driver-scores-nfl.js'
import { nbaDriverScores } from './driver-scores-nba.js'
import { mlbDriverScores } from './driver-scores-mlb.js'
import { nhlDriverScores } from './driver-scores-nhl.js'
import { mlsDriverScores } from './driver-scores-mls.js'
import { eplDriverScores } from './driver-scores-epl.js'

const RESEARCHED_DRIVERS = {
  ...nflDriverScores,
  ...nbaDriverScores,
  ...mlbDriverScores,
  ...nhlDriverScores,
  ...mlsDriverScores,
  ...eplDriverScores,
}

const LEAGUE_FILES = [
  ['NFL', nflEnrichments],
  ['NBA', nbaEnrichments],
  ['MLB', mlbEnrichments],
  ['NHL', nhlEnrichments],
  ['MLS', mlsEnrichments],
  ['EPL', eplEnrichments],
]

// City lookup for teams not in curated teams.js — covers all 174 teams
// keyed by team name to keep the LeagueExplorer's "city" column populated.
const CITY_MAP = {
  // NFL (curated handles 8; rest below)
  "Buffalo Bills": "Buffalo, NY",
  "Miami Dolphins": "Miami Gardens, FL",
  "New York Jets": "East Rutherford, NJ",
  "Baltimore Ravens": "Baltimore, MD",
  "Cincinnati Bengals": "Cincinnati, OH",
  "Cleveland Browns": "Cleveland, OH",
  "Pittsburgh Steelers": "Pittsburgh, PA",
  "Houston Texans": "Houston, TX",
  "Indianapolis Colts": "Indianapolis, IN",
  "Jacksonville Jaguars": "Jacksonville, FL",
  "Tennessee Titans": "Nashville, TN",
  "Denver Broncos": "Denver, CO",
  "Kansas City Chiefs": "Kansas City, MO",
  "Las Vegas Raiders": "Las Vegas, NV",
  "Los Angeles Chargers": "Los Angeles, CA",
  "Philadelphia Eagles": "Philadelphia, PA",
  "Washington Commanders": "Landover, MD",
  "Chicago Bears": "Chicago, IL",
  "Detroit Lions": "Detroit, MI",
  "Green Bay Packers": "Green Bay, WI",
  "Minnesota Vikings": "Minneapolis, MN",
  "Atlanta Falcons": "Atlanta, GA",
  "Carolina Panthers": "Charlotte, NC",
  "New Orleans Saints": "New Orleans, LA",
  "Tampa Bay Buccaneers": "Tampa, FL",
  "Arizona Cardinals": "Glendale, AZ",
  "Seattle Seahawks": "Seattle, WA",

  // NBA
  "Brooklyn Nets": "Brooklyn, NY",
  "Philadelphia 76ers": "Philadelphia, PA",
  "Toronto Raptors": "Toronto, Canada",
  "Cleveland Cavaliers": "Cleveland, OH",
  "Detroit Pistons": "Detroit, MI",
  "Indiana Pacers": "Indianapolis, IN",
  "Milwaukee Bucks": "Milwaukee, WI",
  "Atlanta Hawks": "Atlanta, GA",
  "Charlotte Hornets": "Charlotte, NC",
  "Miami Heat": "Miami, FL",
  "Orlando Magic": "Orlando, FL",
  "Washington Wizards": "Washington, DC",
  "Denver Nuggets": "Denver, CO",
  "Minnesota Timberwolves": "Minneapolis, MN",
  "Oklahoma City Thunder": "Oklahoma City, OK",
  "Portland Trail Blazers": "Portland, OR",
  "Utah Jazz": "Salt Lake City, UT",
  "Sacramento Kings": "Sacramento, CA",
  "Dallas Mavericks": "Dallas, TX",
  "Memphis Grizzlies": "Memphis, TN",
  "New Orleans Pelicans": "New Orleans, LA",
  "San Antonio Spurs": "San Antonio, TX",

  // MLB
  "Toronto Blue Jays": "Toronto, Canada",
  "Tampa Bay Rays": "St. Petersburg, FL",
  "Baltimore Orioles": "Baltimore, MD",
  "Chicago White Sox": "Chicago, IL",
  "Cleveland Guardians": "Cleveland, OH",
  "Detroit Tigers": "Detroit, MI",
  "Kansas City Royals": "Kansas City, MO",
  "Minnesota Twins": "Minneapolis, MN",
  "Los Angeles Angels": "Anaheim, CA",
  "Oakland Athletics": "Sacramento, CA",
  "Seattle Mariners": "Seattle, WA",
  "Texas Rangers": "Arlington, TX",
  "Miami Marlins": "Miami, FL",
  "Philadelphia Phillies": "Philadelphia, PA",
  "Washington Nationals": "Washington, DC",
  "Cincinnati Reds": "Cincinnati, OH",
  "Milwaukee Brewers": "Milwaukee, WI",
  "Pittsburgh Pirates": "Pittsburgh, PA",
  "St. Louis Cardinals": "St. Louis, MO",
  "San Diego Padres": "San Diego, CA",
  "Colorado Rockies": "Denver, CO",
  "Arizona Diamondbacks": "Phoenix, AZ",

  // NHL
  "Buffalo Sabres": "Buffalo, NY",
  "Detroit Red Wings": "Detroit, MI",
  "Florida Panthers": "Sunrise, FL",
  "Ottawa Senators": "Ottawa, Canada",
  "Tampa Bay Lightning": "Tampa, FL",
  "Carolina Hurricanes": "Raleigh, NC",
  "Columbus Blue Jackets": "Columbus, OH",
  "New Jersey Devils": "Newark, NJ",
  "New York Islanders": "Elmont, NY",
  "Pittsburgh Penguins": "Pittsburgh, PA",
  "Washington Capitals": "Washington, DC",
  "Utah Hockey Club": "Salt Lake City, UT",
  "Colorado Avalanche": "Denver, CO",
  "Dallas Stars": "Dallas, TX",
  "Minnesota Wild": "St. Paul, MN",
  "Nashville Predators": "Nashville, TN",
  "St. Louis Blues": "St. Louis, MO",
  "Winnipeg Jets": "Winnipeg, Canada",
  "Anaheim Ducks": "Anaheim, CA",
  "Calgary Flames": "Calgary, Canada",
  "Edmonton Oilers": "Edmonton, Canada",
  "San Jose Sharks": "San Jose, CA",
  "Seattle Kraken": "Seattle, WA",
  "Vancouver Canucks": "Vancouver, Canada",

  // MLS
  "Charlotte FC": "Charlotte, NC",
  "Chicago Fire FC": "Chicago, IL",
  "FC Cincinnati": "Cincinnati, OH",
  "Columbus Crew SC": "Columbus, OH",
  "D.C. United": "Washington, DC",
  "CF Montréal": "Montréal, Canada",
  "Nashville SC": "Nashville, TN",
  "New England Revolution": "Foxborough, MA",
  "New York City FC": "New York, NY",
  "Orlando City SC": "Orlando, FL",
  "Philadelphia Union": "Chester, PA",
  "Austin FC": "Austin, TX",
  "Colorado Rapids": "Commerce City, CO",
  "FC Dallas": "Frisco, TX",
  "Houston Dynamo FC": "Houston, TX",
  "Los Angeles FC": "Los Angeles, CA",
  "Minnesota United FC": "St. Paul, MN",
  "Real Salt Lake": "Sandy, UT",
  "San Diego FC": "San Diego, CA",
  "San Jose Earthquakes": "San Jose, CA",
  "Sporting Kansas City": "Kansas City, KS",
  "St. Louis City SC": "St. Louis, MO",
  "Vancouver Whitecaps FC": "Vancouver, Canada",

  // EPL
  "Liverpool": "Liverpool, UK",
  "Aston Villa": "Birmingham, UK",
  "Brighton & Hove Albion": "Brighton, UK",
  "West Ham United": "London, UK",
  "Crystal Palace": "London, UK",
  "Everton": "Liverpool, UK",
  "Fulham": "London, UK",
  "Wolverhampton Wanderers": "Wolverhampton, UK",
  "AFC Bournemouth": "Bournemouth, UK",
  "Brentford": "London, UK",
  "Nottingham Forest": "Nottingham, UK",
  "Ipswich Town": "Ipswich, UK",
  "Leicester City": "Leicester, UK",
  "Southampton": "Southampton, UK",
}

// Large markets (DMA top 12) for marketSize derivation
const LARGE_MARKETS = new Set([
  'New York', 'Los Angeles', 'Chicago', 'Philadelphia', 'Dallas', 'San Francisco',
  'Boston', 'Atlanta', 'Houston', 'Washington', 'Toronto', 'London', 'Manchester',
])
const SMALL_MARKETS = new Set([
  'Green Bay', 'Buffalo', 'Cincinnati', 'Jacksonville', 'Memphis', 'Salt Lake City',
  'Sacramento', 'New Orleans', 'Indianapolis', 'Milwaukee', 'Oklahoma City',
  'Winnipeg', 'Edmonton', 'Calgary', 'Ottawa', 'Brighton', 'Bournemouth',
  'Ipswich', 'Wolverhampton', 'Foxborough', 'Frisco', 'Sandy',
])

function marketSizeFor(city) {
  if (!city) return 'medium'
  const head = city.split(',')[0].trim()
  if (LARGE_MARKETS.has(head)) return 'large'
  if (SMALL_MARKETS.has(head)) return 'small'
  return 'medium'
}

function ownsVenue(enrichment) {
  const venue = enrichment.stadium || enrichment.arena
  if (!venue) return false
  const m = (venue.ownershipModel || '').toLowerCase()
  if (/publicly owned|public-owned|publicly-owned|county-owned|state-owned|city-owned/.test(m)) return false
  return /team-owned|club-owned|team owns|club owns|owned by .{0,40}(team|club|franchise)|owned outright|fully owned/.test(m)
       || /team-controlled/.test(m)
}

function brandFromSocial(enrichment) {
  const ig = enrichment.brand?.socialMedia?.instagram || ''
  const match = ig.match(/(\d+(?:\.\d+)?)\s*([MK])/i)
  if (!match) return 'medium'
  const num = parseFloat(match[1]) * (match[2].toUpperCase() === 'M' ? 1 : 0.001)
  if (num >= 5) return 'high'
  if (num >= 1) return 'medium'
  return 'low'
}

function mediaTierFor(league, enrichment) {
  if (league === 'NFL') return 'high'
  if (league === 'EPL') {
    const ig = enrichment.brand?.socialMedia?.instagram || ''
    return /(\d+)M/.test(ig) && parseInt(ig) >= 5 ? 'high' : 'medium'
  }
  if (league === 'NBA') {
    const localDeal = enrichment.media?.localTVDeal || ''
    return localDeal.length > 30 ? 'high' : 'medium'
  }
  if (league === 'MLB') {
    const own = (enrichment.media?.localTVDeal || '').toLowerCase()
    return own.includes('yes network') || own.includes('nesn') || own.includes('marquee') ? 'high' : 'medium'
  }
  if (league === 'MLS') return 'low'
  return 'medium'
}

function pctChange(latest, then) {
  if (!latest || !then || then.value <= 0) return null
  return Math.round(((latest.value - then.value) / then.value) * 100)
}

function deriveTeam(name, enrichment, league) {
  const history = enrichment.valuationHistory ?? []
  const sorted = [...history].sort((a, b) => a.year - b.year)
  const latest = sorted[sorted.length - 1] ?? { year: null, value: 0 }
  const findYearsAgo = (n) => sorted.find(h => h.year === (latest.year - n))
  const oneAgo = findYearsAgo(1)
  const fiveAgo = findYearsAgo(5)
  const tenAgo = findYearsAgo(10)

  const city = CITY_MAP[name] || ''
  const ms = marketSizeFor(city)
  const owns = ownsVenue(enrichment)
  const brand = brandFromSocial(enrichment)
  const mediaTier = mediaTierFor(league, enrichment)
  const titles = enrichment.onField?.championshipsLast10Years ?? 0
  const playoffs = enrichment.onField?.playoffAppearancesLast5Years ?? 0
  const onFieldScore = Math.max(2, Math.min(10, 3 + titles * 2 + Math.min(3, playoffs)))

  return {
    name,
    league,
    city,
    currentValuation: latest.value || 0,
    valuationYear: latest.year || new Date().getFullYear(),
    oneYearGrowth: pctChange(latest, oneAgo),
    fiveYearGrowth: pctChange(latest, fiveAgo) ?? 0,
    tenYearGrowth: pctChange(latest, tenAgo),
    ownsStadium: owns,
    stadiumName: enrichment.stadium?.name || enrichment.arena?.name || '',
    mediaRightsTier: mediaTier,
    marketSize: ms,
    brandStrength: brand,
    recentTransaction: enrichment.transactions?.slice(-1)[0]?.notes || '',
    valuationDrivers: RESEARCHED_DRIVERS[name] || {
      mediaRights: mediaTier === 'high' ? 8 : mediaTier === 'medium' ? 5 : 3,
      stadium: owns ? 7 : 4,
      brand: brand === 'high' ? 8 : brand === 'medium' ? 5 : 3,
      marketSize: ms === 'large' ? 8 : ms === 'small' ? 3 : 5,
      onField: onFieldScore,
    },
    oneLiner: enrichment.analystNotes || '',
    isSynthesized: !RESEARCHED_DRIVERS[name],
  }
}

const curatedByName = Object.fromEntries(curatedTeams.map(t => [t.name, t]))

const builtTeams = LEAGUE_FILES.flatMap(([league, file]) =>
  Object.entries(file).map(([name, enrichment]) => {
    const curated = curatedByName[name]
    const derived = deriveTeam(name, enrichment, league)
    if (curated) {
      // Curated entries are hand-curated, but valuation/growth must reflect latest history
      // (so 2025 data flows through). Keep curated's marketing-quality oneLiner and drivers.
      return {
        ...curated,
        currentValuation: derived.currentValuation || curated.currentValuation,
        valuationYear:    derived.valuationYear    || curated.valuationYear,
        oneYearGrowth:    derived.oneYearGrowth,
        fiveYearGrowth:   derived.fiveYearGrowth   || curated.fiveYearGrowth,
        tenYearGrowth:    derived.tenYearGrowth,
      }
    }
    return derived
  })
)

// Compute per-team driver rankings within their league and within their city.
// Used by the detail panel to show "#3 in NBA" / "#1 in Los Angeles" badges.
const DRIVER_KEYS = ['mediaRights', 'stadium', 'brand', 'marketSize', 'onField']

function rankWithinGroup(group, teamName, driverKey) {
  // Standard competition ranking (1224): tied teams share rank, next rank skips
  const sorted = [...group].sort(
    (a, b) => (b.valuationDrivers?.[driverKey] ?? 0) - (a.valuationDrivers?.[driverKey] ?? 0)
  )
  const myScore = group.find(t => t.name === teamName)?.valuationDrivers?.[driverKey] ?? 0
  let rank = 1
  for (const t of sorted) {
    const s = t.valuationDrivers?.[driverKey] ?? 0
    if (s > myScore) rank++
    else break
  }
  return { rank, total: group.length }
}

const teamsByLeague = {}
const teamsByCity = {}
for (const t of builtTeams) {
  ;(teamsByLeague[t.league] ||= []).push(t)
  if (t.city) (teamsByCity[t.city] ||= []).push(t)
}

const allTeams = builtTeams.map(team => {
  const rankings = { league: {}, city: {} }
  for (const dk of DRIVER_KEYS) {
    rankings.league[dk] = rankWithinGroup(teamsByLeague[team.league], team.name, dk)
    const cityGroup = team.city ? teamsByCity[team.city] : null
    if (cityGroup && cityGroup.length > 1) {
      rankings.city[dk] = rankWithinGroup(cityGroup, team.name, dk)
    }
  }
  return { ...team, rankings }
})

export default allTeams
