// NHL driver scores — researched 1-10 driver scores for non-curated NHL teams
// (24 of 32; the 8 curated teams in teams.js are excluded: Toronto Maple Leafs,
// New York Rangers, Montreal Canadiens, Boston Bruins, Chicago Blackhawks,
// Philadelphia Flyers, Vegas Golden Knights, Los Angeles Kings)
//
// Scoring philosophy:
//   - mediaRights: US baseline ~$19M/team (ESPN+TNT through 2028); Canadian teams +1-3 from Rogers/Bell/TVA
//                  team-owned RSN equity (Capitals MSE, Bruins NESN — already curated) is a major boost
//   - stadium:     team-owned + naming rights + non-game events = high; publicly owned long lease = low
//   - brand:       Original Six > legacy expansion (1967-79) > 1990s expansion > sun-belt > recent expansion
//                  Stanley Cup count (esp. last 10) compounds brand
//   - marketSize:  DMA size + hockey traditionality + market exclusivity (vs. NHL competition)
//   - onField:     Cups last 10 (max 6 pts) + playoff appearances last 5 (max 3 pts) + roster trajectory

export const nhlDriverScores = {

  // ─── ATLANTIC ─────────────────────────────────────────────────────────────

  "Buffalo Sabres": {
    mediaRights: 4,    // ~$19M national; no Canadian premium; no team-owned RSN equity (MSG-area RSN)
    stadium: 4,        // KeyBank Center (1996) publicly owned by Erie County; lease through 2031
    brand: 5,          // 1970 expansion class; no Cups; 13-year playoff drought through 2024 hurt brand
    marketSize: 4,     // Buffalo DMA #54 small; Pegula bundles with Bills but no NHL competitor
    onField: 4,        // 14-yr playoff drought broke ~2024-25; Tage Thompson/Dahlin core; no Cup contention yet
  },

  "Detroit Red Wings": {
    mediaRights: 6,    // ~$19M + Bally Sports Detroit (Diamond bankruptcy disruption); no Canadian premium
    stadium: 7,        // Little Caesars Arena (2017) — Ilitch family $863M build, team operates; District Detroit
    brand: 9,          // Original Six; 11 Stanley Cups; "Hockeytown" identity; deep international fanbase
    marketSize: 6,     // Detroit DMA #14; hockey-traditional market; no NHL competition
    onField: 4,        // Yzerman rebuild; no playoffs since 2016; Larkin captain anchoring extension
  },

  "Florida Panthers": {
    mediaRights: 5,    // ~$19M national; FanDuel Sports SE Florida; no Canadian/RSN-equity premium
    stadium: 5,        // Amerant Bank Arena owned by Broward County; team operates with development rights
    brand: 7,          // Brand momentum from back-to-back 2024/2025 Cups; non-traditional market
    marketSize: 5,     // Miami-Ft. Lauderdale DMA #17 large but hockey-thin; shared with Lightning regionally
    onField: 9,        // 2024 + 2025 Stanley Cup champions; Tkachuk/Barkov/Bobrovsky elite core through 2028+
  },

  "Ottawa Senators": {
    mediaRights: 7,    // Canadian Rogers/TSN premium; ~$30-40M effective vs. $19M for US peers
    stadium: 5,        // Canadian Tire Centre (1996) team-owned but Kanata location is suburban/aging; new downtown LeBreton arena planned
    brand: 6,          // 1992 expansion; no Cups (1 Final 2007); strong Canadian hockey market presence
    marketSize: 5,     // Ottawa-Gatineau ~1.5M; capital-city corporate base; sole NHL franchise in market
    onField: 5,        // Andlauer 2023 takeover; Brady Tkachuk captain; emerging from rebuild but no playoffs since 2017
  },

  "Tampa Bay Lightning": {
    mediaRights: 5,    // ~$19M national + FanDuel Sports Sun (Diamond risk); no Canadian/RSN-equity premium
    stadium: 7,        // Amalie Arena team-operated with strong non-game events (concert flagship); Vinik Water Street development
    brand: 7,          // 3 Stanley Cup Finals 2020/21/22 (back-to-back champ 2020-21); strong sun-belt brand build
    marketSize: 5,     // Tampa-St.Petersburg DMA #11; non-traditional hockey market but established
    onField: 8,        // Back-to-back Cups 2020/21; Kucherov/Point/Hedman core; 9 straight playoff appearances
  },

  // ─── METROPOLITAN ─────────────────────────────────────────────────────────

  "Carolina Hurricanes": {
    mediaRights: 6,    // ~$19M + team-owned broadcast (FanDuel Sports South pivot); 2026 implied $2.66B
    stadium: 6,        // Lenovo Center (1999) county-owned with 80-acre team-controlled development rights
    brand: 6,          // 2006 Cup; "Bunch of Jerks" era; growing sun-belt brand under Dundon
    marketSize: 5,     // Raleigh-Durham DMA #25; growing tech/research triangle; sole NHL franchise
    onField: 7,        // 6 straight playoffs through 2024-25; ECF runs 2019/2023; Aho/Slavin core; no Cup yet
  },

  "Columbus Blue Jackets": {
    mediaRights: 3,    // ~$19M; FanDuel Sports Ohio; no premium streams; weakest NHL media position
    stadium: 4,        // Nationwide Arena city-owned since 2012 (CIB bailout); lease structure
    brand: 3,          // 2000 expansion; never past 2nd round; smallest NHL brand
    marketSize: 4,     // Columbus DMA #32; Ohio State football dominates; corporate base limited
    onField: 3,        // Operating losses; ~$148M revenue smallest in NHL; rebuild post-Gaudreau tragedy
  },

  "New Jersey Devils": {
    mediaRights: 6,    // ~$19M + MSG Networks regional; HBSE bundles cross-property leverage
    stadium: 6,        // Prudential Center (2007) team-owned; Newark venue; non-game events (concerts, MMA)
    brand: 6,          // 3 Stanley Cups (95/00/03); Lou Lamoriello legacy; market-shared with Rangers/Islanders
    marketSize: 6,     // NY DMA #1 but tri-team-shared; corporate base strong but Devils 3rd in market
    onField: 6,        // Hughes/Hischier core both 7-8yr extensions; 2023 playoff resurgence; rebuilding contender
  },

  "New York Islanders": {
    mediaRights: 6,    // ~$19M + MSG Networks; smaller share of NY media pie than Rangers
    stadium: 8,        // UBS Arena (2021) 100% privately financed $1.1B at Belmont Park; UBS naming $175M deal
    brand: 6,          // 4 consecutive Cups 1980-83 dynasty heritage; recent ECF runs 2020/21; mid-market profile
    marketSize: 6,     // NY DMA #1 shared 3-way; Long Island base limits outside-borough draw
    onField: 5,        // 2 ECF appearances under Trotz; Barzal franchise center; stuck mid-tier
  },

  "Pittsburgh Penguins": {
    mediaRights: 5,    // ~$19M + SportsNet Pittsburgh (PPG/FSN); no Canadian or equity premium
    stadium: 5,        // PPG Paints Arena (2010) publicly owned; aging vs. peers; recent attendance dip
    brand: 8,          // 5 Stanley Cups (2 of last 10: 2016/17); Crosby/Malkin Hall of Fame era
    marketSize: 5,     // Pittsburgh DMA #26; hockey-traditional rust belt; sole NHL franchise
    onField: 5,        // 16-year playoff streak ended 2023; Crosby still elite at 38; aging core, late-window
  },

  "Washington Capitals": {
    mediaRights: 8,    // ~$19M + Monumental Sports Network (team-owned RSN; Leonsis empire); rare equity stake
    stadium: 7,        // Capital One Arena shared with Wizards; $515M DC arena package locks teams to ~2050
    brand: 7,          // 2018 Stanley Cup; Ovechkin all-time goals leader 2025; strong DC/mid-Atlantic brand
    marketSize: 6,     // DC DMA #9; corporate-government base; shared with Wizards in arena
    onField: 6,        // Ovechkin final season 2025-26; transition era post-record; Carbery rebuild
  },

  // ─── CENTRAL ──────────────────────────────────────────────────────────────

  "Utah Hockey Club": {
    mediaRights: 5,    // ~$19M; new market with Smith Entertainment Group ecosystem advantages; no RSN equity yet
    stadium: 6,        // Delta Center shared with Utah Jazz under SEG; $900M public renovation funding underway
    brand: 5,          // 2024 relocation premium + Smith ownership halo; brand-building from blank slate
    marketSize: 5,     // Salt Lake DMA #29; Mormon corridor sole NHL market; SEG cross-property leverage
    onField: 5,        // First Utah season 2024-25; inherited Coyotes' Keller/Cooley core; modestly competitive
  },

  "Colorado Avalanche": {
    mediaRights: 7,    // ~$19M + Altitude Sports (KSE-owned RSN — vertical integration play, immune to Diamond)
    stadium: 7,        // Ball Arena (1999) team-owned (KSE); shared with Nuggets; strong non-game events
    brand: 7,          // 3 Stanley Cups (1996/2001/2022); MacKinnon-era dynastic feel; KSE empire backing
    marketSize: 6,     // Denver DMA #16; hockey-traditional Rocky Mountain market; shared arena only
    onField: 8,        // 2022 Cup; 7 straight playoffs; MacKinnon ($12.6M) + Makar ($9M) elite core through 2030
  },

  "Dallas Stars": {
    mediaRights: 5,    // ~$19M + Victory+ direct-to-consumer streaming pioneer; no Canadian/equity premium
    stadium: 5,        // American Airlines Center shared with Mavericks; city-owned; lease structure
    brand: 6,          // 1999 Stanley Cup; Modano legacy; sun-belt-converted hockey market
    marketSize: 6,     // Dallas-Ft.Worth DMA #5; large market; hockey is 4th-pro sport but established
    onField: 7,        // 3 straight WCFs (2023/24/25); Heiskanen/Robertson/Hintz core; deep-roster contender
  },

  "Minnesota Wild": {
    mediaRights: 5,    // ~$19M + FanDuel Sports North; Diamond bankruptcy created disruption; minimal premium
    stadium: 7,        // Xcel Energy Center (2000) Leipold-owned outright; 200+ events/yr non-game revenue
    brand: 6,          // "State of Hockey" market identity; 2000 expansion; no Cup; recent Kaprizov contract halo
    marketSize: 6,     // Minneapolis-St.Paul DMA #15; deepest US hockey market by participation
    onField: 6,        // Kaprizov 8yr/$136M ($17M AAV — NHL record Sept 2025); regular playoff team but 2nd-round ceiling
  },

  "Nashville Predators": {
    mediaRights: 5,    // ~$19M + FanDuel Sports South; no premium tier
    stadium: 7,        // Bridgestone Arena (1996) Metro-owned but team-operated with concerts/CMA — top US arena by event count
    brand: 6,          // Country-music brand integration; 2017 Cup Final; Predators Inc. cultural differentiator
    marketSize: 5,     // Nashville DMA #28; non-traditional hockey but tourism/entertainment market unique
    onField: 5,        // Saban minority stake Dec 2025; Forsberg/Josi aging core; transition era
  },

  "St. Louis Blues": {
    mediaRights: 5,    // ~$19M + FanDuel Sports Midwest; Diamond risk; no premium streams
    stadium: 4,        // Enterprise Center (1994) city-owned/team-operated; aging vs. peers
    brand: 7,          // 2019 Stanley Cup (first in franchise history); 1967 expansion class heritage
    marketSize: 5,     // St. Louis DMA #21; loyal hockey market; sole NHL franchise (Cardinals dominate sports)
    onField: 5,        // 2019 Cup era ended; Kyrou/Thomas new-era core ($8.125M each); rebuild-retool
  },

  "Winnipeg Jets": {
    mediaRights: 7,    // Canadian Rogers/Bell premium; ~$40-60M effective vs. $19M US; only Cdn franchise in deep prairie market
    stadium: 6,        // Canada Life Centre (2004) True North-owned; smallest NHL capacity ~15K limits matchday
    brand: 5,          // 2011 relocation from Atlanta Thrashers; no Cups in current iteration; loyal Canadian market
    marketSize: 4,     // Winnipeg DMA-equivalent ~600K; smallest NHL market; Thomson family backstop critical
    onField: 6,        // Hellebuyck Vezina-tier; Scheifele/Connor core; 2023/24 division wins; deep playoff appearances
  },

  // ─── PACIFIC ──────────────────────────────────────────────────────────────

  "Anaheim Ducks": {
    mediaRights: 4,    // ~$19M + Bally Sports SoCal disruption; LA market shared 3-way with Kings/Lakers/Clippers
    stadium: 6,        // Honda Center city-owned/Samueli-operated; OCVibe $4B mixed-use development underway
    brand: 5,          // 2007 Stanley Cup; Disney-era origin (Mighty Ducks 1993); fading vs. recent rebuild
    marketSize: 5,     // LA DMA #2 but Orange County subset; shared with Kings; corporate base mixed
    onField: 4,        // Rebuild era; Carlsson/McTavish/Zegras young core; 6 straight non-playoff seasons
  },

  "Calgary Flames": {
    mediaRights: 7,    // Canadian Rogers/Bell premium; ~$30-40M effective vs. $19M US baseline
    stadium: 4,        // Scotiabank Saddledome (1983) — oldest active NHL arena; new Scotia Place arena 2027 opening
    brand: 6,          // 1989 Stanley Cup; "Battle of Alberta"; deep Canadian prairie hockey market
    marketSize: 5,     // Calgary metro ~1.5M; oil-economy corporate base; sole NHL franchise
    onField: 5,        // Recent rebuild post-Gaudreau/Tkachuk; Kadri/Andersson/Huberdeau mid-tier roster
  },

  "Edmonton Oilers": {
    mediaRights: 8,    // Canadian Rogers/Bell premium ($40-60M effective); McDavid global brand multiplier
    stadium: 7,        // Rogers Place (2016) ~$480M public/private split; Ice District development; Katz portfolio
    brand: 8,          // 5 Stanley Cups (Gretzky 80s dynasty); McDavid-era global hockey relevance
    marketSize: 4,     // Edmonton metro ~1.4M; oil economy; small Canadian hockey-traditional market
    onField: 9,        // 2024 + 2025 Stanley Cup Finals (lost both); McDavid + Draisaitl ($14M AAV) elite core
  },

  "San Jose Sharks": {
    mediaRights: 5,    // ~$19M + NBC Sports California; Bay Area corporate strength but shared with multiple pro
    stadium: 5,        // SAP Center (1993) city-owned/Plattner-operated; aging mid-tier facility
    brand: 5,          // 1991 expansion; 2016 Cup Final; tech-region brand; deep rebuild since
    marketSize: 5,     // San Francisco-Oakland-San Jose DMA #6 large but shared 5-team market
    onField: 3,        // Macklin Celebrini #1 2024 + Will Smith young core; bottom-3 record; multi-year rebuild
  },

  "Seattle Kraken": {
    mediaRights: 6,    // ~$19M + ROOT Sports NW (recently expanded JV stake); newest NHL media rights
    stadium: 9,        // Climate Pledge Arena (2021) $1.15B 100% privately financed; first carbon-neutral NHL arena
    brand: 7,          // Newest NHL franchise (2021); slick brand build; sustainability/tech identity differentiator
    marketSize: 6,     // Seattle DMA #14; tech corporate base (Amazon, Microsoft); growing hockey market
    onField: 4,        // 1 playoff appearance (2023 2nd-round); rebuild-mode roster; no franchise centerpiece yet
  },

  "Vancouver Canucks": {
    mediaRights: 7,    // Canadian Rogers/Bell premium; ~$30-40M effective vs. $19M US peers
    stadium: 7,        // Rogers Arena (1995) Aquilini-owned outright; downtown Vancouver; concert flagship
    brand: 7,          // 3 Cup Finals (1982/94/2011); deep Canadian Pacific hockey market; passionate base
    marketSize: 5,     // Vancouver metro ~2.5M; sole NHL franchise; Canadian dollar headwinds
    onField: 7,        // Quinn Hughes Norris winner; Pettersson 8yr/$11.6M; 2024 division winner; competitive
  },

};
