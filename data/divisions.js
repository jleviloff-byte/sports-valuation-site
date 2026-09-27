// Division membership for the four leagues with a Forbes component breakdown.
// Used to pick division peers for the "Inside the Forbes Number" commentary.
// 2025-26 alignment. Team ids match teamIdFor() in allTeams.js.

const D = {
  // NFL
  'AFC East':  ['buffalo-bills', 'miami-dolphins', 'new-england-patriots', 'new-york-jets'],
  'AFC North': ['baltimore-ravens', 'cincinnati-bengals', 'cleveland-browns', 'pittsburgh-steelers'],
  'AFC South': ['houston-texans', 'indianapolis-colts', 'jacksonville-jaguars', 'tennessee-titans'],
  'AFC West':  ['denver-broncos', 'kansas-city-chiefs', 'las-vegas-raiders', 'los-angeles-chargers'],
  'NFC East':  ['dallas-cowboys', 'new-york-giants', 'philadelphia-eagles', 'washington-commanders'],
  'NFC North': ['chicago-bears', 'detroit-lions', 'green-bay-packers', 'minnesota-vikings'],
  'NFC South': ['atlanta-falcons', 'carolina-panthers', 'new-orleans-saints', 'tampa-bay-buccaneers'],
  'NFC West':  ['arizona-cardinals', 'los-angeles-rams', 'san-francisco-49ers', 'seattle-seahawks'],
  // NBA
  'Atlantic':  ['boston-celtics', 'brooklyn-nets', 'new-york-knicks', 'philadelphia-76ers', 'toronto-raptors'],
  'Central':   ['chicago-bulls', 'cleveland-cavaliers', 'detroit-pistons', 'indiana-pacers', 'milwaukee-bucks'],
  'Southeast': ['atlanta-hawks', 'charlotte-hornets', 'miami-heat', 'orlando-magic', 'washington-wizards'],
  'Northwest': ['denver-nuggets', 'minnesota-timberwolves', 'oklahoma-city-thunder', 'portland-trail-blazers', 'utah-jazz'],
  'Pacific':   ['golden-state-warriors', 'los-angeles-clippers', 'los-angeles-lakers', 'phoenix-suns', 'sacramento-kings'],
  'Southwest': ['dallas-mavericks', 'houston-rockets', 'memphis-grizzlies', 'new-orleans-pelicans', 'san-antonio-spurs'],
  // MLB
  'AL East':    ['baltimore-orioles', 'boston-red-sox', 'new-york-yankees', 'tampa-bay-rays', 'toronto-blue-jays'],
  'AL Central': ['chicago-white-sox', 'cleveland-guardians', 'detroit-tigers', 'kansas-city-royals', 'minnesota-twins'],
  'AL West':    ['houston-astros', 'los-angeles-angels', 'oakland-athletics', 'seattle-mariners', 'texas-rangers'],
  'NL East':    ['atlanta-braves', 'miami-marlins', 'new-york-mets', 'philadelphia-phillies', 'washington-nationals'],
  'NL Central': ['chicago-cubs', 'cincinnati-reds', 'milwaukee-brewers', 'pittsburgh-pirates', 'st-louis-cardinals'],
  'NL West':    ['arizona-diamondbacks', 'colorado-rockies', 'los-angeles-dodgers', 'san-diego-padres', 'san-francisco-giants'],
  // NHL
  'Atlantic (NHL)':     ['boston-bruins', 'buffalo-sabres', 'detroit-red-wings', 'florida-panthers', 'montreal-canadiens', 'ottawa-senators', 'tampa-bay-lightning', 'toronto-maple-leafs'],
  'Metropolitan':       ['carolina-hurricanes', 'columbus-blue-jackets', 'new-jersey-devils', 'new-york-islanders', 'new-york-rangers', 'philadelphia-flyers', 'pittsburgh-penguins', 'washington-capitals'],
  'Central (NHL)':      ['chicago-blackhawks', 'colorado-avalanche', 'dallas-stars', 'minnesota-wild', 'nashville-predators', 'st-louis-blues', 'utah-hockey-club', 'winnipeg-jets'],
  'Pacific (NHL)':      ['anaheim-ducks', 'calgary-flames', 'edmonton-oilers', 'los-angeles-kings', 'san-jose-sharks', 'seattle-kraken', 'vancouver-canucks', 'vegas-golden-knights'],
}

export const divisionOf = {}
export const divisionMembers = {}
for (const [name, ids] of Object.entries(D)) {
  const label = name.replace(/ \(NHL\)$/, '')
  divisionMembers[name] = ids
  for (const id of ids) divisionOf[id] = { key: name, label, peers: ids.filter((x) => x !== id) }
}
