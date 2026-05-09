// US sports-city metro definitions for the CitiesMap visualization.
// Multi-team metros (NYC, LA, SF Bay) absorb the various city strings used in
// our team data — e.g. Inglewood, Anaheim, Carson all roll up to "Los Angeles".
//
// Lat/lng is approximate metro center, used to project a bubble onto an
// AlbersUsa-projected SVG.

export const US_METROS = [
  // Mega metros — multi-team
  {
    name: 'New York',
    lat: 40.7128, lng: -74.0060,
    cities: [
      'New York, NY', 'Brooklyn, NY', 'Bronx, NY', 'Queens, NY',
      'East Rutherford, NJ', 'Newark, NJ', 'Harrison, NJ',
      'Elmont, NY', 'Uniondale, NY',
    ],
  },
  {
    name: 'Los Angeles',
    lat: 34.0522, lng: -118.2437,
    cities: ['Los Angeles, CA', 'Anaheim, CA', 'Inglewood, CA', 'Carson, CA'],
  },
  {
    name: 'SF Bay Area',
    lat: 37.7749, lng: -122.4194,
    cities: ['San Francisco, CA', 'Santa Clara, CA', 'San Jose, CA', 'Oakland, CA'],
  },
  {
    name: 'Chicago',
    lat: 41.8781, lng: -87.6298,
    cities: ['Chicago, IL', 'Bridgeview, IL'],
  },
  {
    name: 'Boston',
    lat: 42.3601, lng: -71.0589,
    cities: ['Boston, MA', 'Foxborough, MA', 'Foxboro, MA'],
  },
  {
    name: 'Philadelphia',
    lat: 39.9526, lng: -75.1652,
    cities: ['Philadelphia, PA', 'Chester, PA'],
  },
  {
    name: 'Washington DC',
    lat: 38.9072, lng: -77.0369,
    cities: ['Washington, DC', 'Landover, MD'],
  },
  {
    name: 'Dallas–Fort Worth',
    lat: 32.7767, lng: -96.7970,
    cities: ['Dallas, TX', 'Arlington, TX', 'Frisco, TX'],
  },
  {
    name: 'Miami',
    lat: 25.7617, lng: -80.1918,
    cities: ['Miami, FL', 'Miami Gardens, FL', 'Sunrise, FL', 'Fort Lauderdale, FL'],
  },
  {
    name: 'Phoenix',
    lat: 33.4484, lng: -112.0740,
    cities: ['Phoenix, AZ', 'Glendale, AZ'],
  },
  {
    name: 'Denver',
    lat: 39.7392, lng: -104.9903,
    cities: ['Denver, CO', 'Commerce City, CO'],
  },
  {
    name: 'Minneapolis–St. Paul',
    lat: 44.9778, lng: -93.2650,
    cities: ['Minneapolis, MN', 'Saint Paul, MN', 'St. Paul, MN'],
  },
  {
    name: 'Tampa Bay',
    lat: 27.9506, lng: -82.4572,
    cities: ['Tampa, FL', 'St. Petersburg, FL'],
  },
  {
    name: 'Salt Lake City',
    lat: 40.7608, lng: -111.8910,
    cities: ['Salt Lake City, UT', 'Sandy, UT'],
  },
  {
    name: 'Las Vegas',
    lat: 36.1699, lng: -115.1398,
    cities: ['Las Vegas, NV', 'Paradise, NV'],
  },
  {
    name: 'Kansas City',
    lat: 39.0997, lng: -94.5786,
    cities: ['Kansas City, MO', 'Kansas City, KS'],
  },
  {
    name: 'Raleigh',
    lat: 35.7796, lng: -78.6382,
    cities: ['Raleigh, NC', 'Cary, NC'],
  },
  {
    name: 'St. Louis',
    lat: 38.6270, lng: -90.1994,
    cities: ['St. Louis, MO', 'Saint Louis, MO'],
  },

  // Single-team metros
  { name: 'Sacramento',     lat: 38.5816, lng: -121.4944, cities: ['Sacramento, CA'] },
  { name: 'San Diego',      lat: 32.7157, lng: -117.1611, cities: ['San Diego, CA'] },
  { name: 'Houston',        lat: 29.7604, lng: -95.3698,  cities: ['Houston, TX'] },
  { name: 'Atlanta',        lat: 33.7490, lng: -84.3880,  cities: ['Atlanta, GA'] },
  { name: 'Detroit',        lat: 42.3314, lng: -83.0458,  cities: ['Detroit, MI'] },
  { name: 'Seattle',        lat: 47.6062, lng: -122.3321, cities: ['Seattle, WA'] },
  { name: 'Portland',       lat: 45.5152, lng: -122.6784, cities: ['Portland, OR'] },
  { name: 'Cleveland',      lat: 41.4993, lng: -81.6944,  cities: ['Cleveland, OH'] },
  { name: 'Cincinnati',     lat: 39.1031, lng: -84.5120,  cities: ['Cincinnati, OH'] },
  { name: 'Pittsburgh',     lat: 40.4406, lng: -79.9959,  cities: ['Pittsburgh, PA'] },
  { name: 'Orlando',        lat: 28.5383, lng: -81.3792,  cities: ['Orlando, FL'] },
  { name: 'Jacksonville',   lat: 30.3322, lng: -81.6557,  cities: ['Jacksonville, FL'] },
  { name: 'Charlotte',      lat: 35.2271, lng: -80.8431,  cities: ['Charlotte, NC'] },
  { name: 'Buffalo',        lat: 42.8864, lng: -78.8784,  cities: ['Buffalo, NY'] },
  { name: 'Indianapolis',   lat: 39.7684, lng: -86.1581,  cities: ['Indianapolis, IN'] },
  { name: 'Memphis',        lat: 35.1495, lng: -90.0490,  cities: ['Memphis, TN'] },
  { name: 'Nashville',      lat: 36.1627, lng: -86.7816,  cities: ['Nashville, TN'] },
  { name: 'New Orleans',    lat: 29.9511, lng: -90.0715,  cities: ['New Orleans, LA'] },
  { name: 'Oklahoma City',  lat: 35.4676, lng: -97.5164,  cities: ['Oklahoma City, OK'] },
  { name: 'San Antonio',    lat: 29.4241, lng: -98.4936,  cities: ['San Antonio, TX'] },
  { name: 'Austin',         lat: 30.2672, lng: -97.7431,  cities: ['Austin, TX'] },
  { name: 'Milwaukee',      lat: 43.0389, lng: -87.9065,  cities: ['Milwaukee, WI'] },
  { name: 'Green Bay',      lat: 44.5133, lng: -88.0133,  cities: ['Green Bay, WI'] },
  { name: 'Baltimore',      lat: 39.2904, lng: -76.6122,  cities: ['Baltimore, MD'] },
  { name: 'Columbus',       lat: 39.9612, lng: -82.9988,  cities: ['Columbus, OH'] },
]

const cityToMetro = new Map()
for (const metro of US_METROS) {
  for (const city of metro.cities) {
    cityToMetro.set(city, metro)
  }
}

export function findMetro(city) {
  return cityToMetro.get(city) || null
}

// Cities/teams to exclude from the US map (Canadian + cross-border edge cases).
// EPL teams are filtered out by league at the call site.
export const NON_US_CITIES = new Set([
  'Toronto, Canada',
  'Toronto, ON',
  'Montreal, Canada',
  'Montréal, Canada',
  'Vancouver, Canada',
  'Calgary, Canada',
  'Edmonton, Canada',
  'Ottawa, Canada',
  'Winnipeg, Canada',
])
