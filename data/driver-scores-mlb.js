// MLB driver scores — researched 1-10 driver scores for 22 non-curated MLB teams
// Curated (in teams.js): Yankees, Dodgers, Red Sox, Cubs, Giants, Mets, Braves, Astros
// Sources: Forbes 2024, Sportico 2024, CNBC, Baseball-Reference, Spotrac, SBJ
export const mlbDriverScores = {

  // ─── AL EAST ─────────────────────────────────────────────────────────────

  "Toronto Blue Jays": {
    mediaRights: 8,    // Rogers owns team + Sportsnet RSN — fully vertically integrated; sole MLB team in Canada
    stadium: 6,        // Rogers Centre Rogers-owned; $300M+ renovation 2023-24; 41K capacity, retractable roof
    brand: 7,          // only MLB team in Canada — 30M+ national fanbase; 2 World Series ('92/'93)
    marketSize: 8,     // Toronto DMA + entire Canadian market; no MLB competition nationally
    onField: 5,        // playoff regular but no recent ALCS; Vladdy Jr. + Bichette core, contract uncertainty
  },

  "Tampa Bay Rays": {
    mediaRights: 4,    // bottom-tier MLB national share + Diamond Sports/Bally collapse hit local; Tropicana Field broadcast not premium
    stadium: 2,        // Tropicana Field roof destroyed by Hurricane Milton Oct 2024; playing at Steinbrenner Field 2025; future uncertain
    brand: 4,          // 2 AL pennants but no titles; thin merchandise; analytics-darling reputation but limited star power
    marketSize: 4,     // Tampa-St. Pete DMA #11 but consistently bottom-3 MLB attendance; thin corporate base
    onField: 6,        // perennial AL East contender on lowest payroll; smart front office; 2 pennants in 5 years
  },

  "Baltimore Orioles": {
    mediaRights: 5,    // Rubenstein 2024 acquisition; MASN rights dispute with Nats ongoing; cap on regional revenue
    stadium: 7,        // Camden Yards (1992) — historic, well-regarded; 30yr lease incl. development rights
    brand: 6,          // 3 World Series titles; iconic Cal Ripken legacy; mid-tier merchandise, regional brand
    marketSize: 5,     // Baltimore DMA #28; some bleed into DC market with Nationals competition
    onField: 7,        // young core (Henderson, Rutschman) post-rebuild; 2023 division title; 2024 sale at $1.725B reset
  },

  // ─── AL CENTRAL ──────────────────────────────────────────────────────────

  "Chicago White Sox": {
    mediaRights: 4,    // CHSN equity stake but small market; 121-loss 2024 season hurt ratings; Reinsdorf cost discipline
    stadium: 4,        // Guaranteed Rate Field (1991) publicly owned, aging; Reinsdorf pushing for new South Loop ballpark
    brand: 5,          // 3 World Series; shared Chicago market with Cubs (always 2nd fiddle); modest merchandise
    marketSize: 6,     // Chicago DMA #3 but split with Cubs; corporate base shared
    onField: 2,        // 121-loss 2024 (modern record); deep rebuild; Ishbia capital infusion + 2029-34 purchase option
  },

  "Cleveland Guardians": {
    mediaRights: 5,    // mid-tier RSN exposure; Diamond/Bally exposure migrated to direct; small market discount
    stadium: 6,        // Progressive Field (1994) — well-maintained; renovation completed 2025; lease through 2036
    brand: 4,          // long title drought (1948); Guardians rebrand 2022 reset some legacy; José Ramírez core
    marketSize: 4,     // Cleveland DMA #19; Ohio market shared with Reds; modest corporate base
    onField: 6,        // 2024 ALCS; Ramírez 7yr/$124M anchor; Stephen Vogt rookie-of-the-year manager
  },

  "Detroit Tigers": {
    mediaRights: 5,    // Bally Sports Detroit transition; Ilitch family ownership; medium-tier Midwest reach
    stadium: 7,        // Comerica Park (2000) — Ilitch-financed; downtown Detroit with adjacent Little Caesars Arena (NHL)
    brand: 6,          // 4 World Series titles; deep MI/MidWest fanbase; Tarik Skubal 2024 Cy Young driving merchandise
    marketSize: 5,     // Detroit DMA #14; population decline pressure but loyal base
    onField: 6,        // 2024 surprise playoff run; Skubal anchor; emerging young core post-rebuild
  },

  "Kansas City Royals": {
    mediaRights: 3,    // small market; Diamond Sports collapse direct hit; bottom-quartile RSN economics
    stadium: 4,        // Kauffman Stadium (1973) publicly owned, dated; new $1.9B downtown KC ballpark planned 2027-28
    brand: 4,          // 2 World Series ('85, '15); Witt Jr. emergence; modest national merchandise
    marketSize: 3,     // KC DMA #33; smallest MLB markets; thin corporate base
    onField: 6,        // Bobby Witt Jr. 11yr/$288M — superstar anchor; 2024 wild card; on the rise
  },

  "Minnesota Twins": {
    mediaRights: 4,    // Bally Sports North exposure; Pohlad family explored sale 2024 then reversed; mid-low RSN
    stadium: 6,        // Target Field (2010) downtown Minneapolis — well-regarded outdoor ballpark
    brand: 5,          // 2 World Series ('87, '91); MN/Upper Midwest regional brand; thin national presence
    marketSize: 5,     // Minneapolis-St. Paul DMA #15; only major league baseball in Upper Midwest
    onField: 5,        // 2023 ALDS but 2024 collapse; Carlos Correa anchor; mid-tier payroll
  },

  // ─── AL WEST ─────────────────────────────────────────────────────────────

  "Los Angeles Angels": {
    mediaRights: 6,    // Bally Sports West deal; LA market reach but always #2 to Dodgers
    stadium: 5,        // Angel Stadium (1966) publicly owned, aging; Moreno-city dispute over land sale unresolved
    brand: 5,          // 1 World Series ('02); Ohtani years lifted brand globally then walked to Dodgers
    marketSize: 7,     // shares LA market with Dodgers (DMA #2); Orange County base distinct
    onField: 3,        // post-Ohtani/Trout-injury era; Moreno's payroll ceiling; bottom-tier roster
  },

  "Oakland Athletics": {
    mediaRights: 3,    // relocated to Sacramento (Sutter Health Park) for 2025-27; minimal local TV; Vegas plans 2028
    stadium: 2,        // Coliseum vacated; Sutter Health Park interim (minor-league venue, ~14K); $2B Vegas ballpark in progress
    brand: 4,          // 9 World Series titles all-time but 30yr drought; Moneyball legacy; relocation churn dilutes brand
    marketSize: 3,     // Sacramento interim (DMA #20) → Las Vegas (DMA #40); fragmented fanbase post-relocation
    onField: 2,        // John Fisher slash-and-burn payroll; bottom of league; rebuild during relocation
  },

  "Seattle Mariners": {
    mediaRights: 6,    // ROOT Sports NW survived Diamond collapse — owned by Mariners + Kraken; strong Pacific NW reach
    stadium: 7,        // T-Mobile Park (1999) publicly owned but 25yr renovation just completed; team-favorable lease
    brand: 5,          // only MLB team without WS appearance; Ichiro/Griffey legacy; PNW regional loyalty
    marketSize: 6,     // Seattle DMA #14; only MLB team in Pacific NW (claims Alaska/Idaho/Montana)
    onField: 5,        // 2022 playoff drought-breaker; Julio Rodriguez 12yr/$210M; pitching-led roster
  },

  "Texas Rangers": {
    mediaRights: 5,    // Bally Sports Southwest exposure but transitioning; large DFW reach
    stadium: 8,        // Globe Life Field (2020) — fully retractable roof, 40K capacity; $1.2B ($500M public/$700M private)
    brand: 6,          // 2023 World Series champions ended drought; growing DFW market presence
    marketSize: 7,     // Dallas-Fort Worth DMA #5; massive corporate base; no MLB competition
    onField: 8,        // 2023 World Series + 2024 reload; Seager 10yr/$325M, deGrom; defending-era core
  },

  // ─── NL EAST ─────────────────────────────────────────────────────────────

  "Miami Marlins": {
    mediaRights: 3,    // Bally Sports Florida limbo; bottom MLB ratings; thin national appeal
    stadium: 4,        // loanDepot Park (2012) — controversial $634M public/county-funded; lowest attendance in MLB
    brand: 3,          // 2 World Series ('97, '03) under different ownership; chronic firesales eroded brand
    marketSize: 5,     // Miami DMA #16; large hispanic base potential but consistently bottom attendance
    onField: 3,        // chronic small-payroll churn under Sherman/Jeter (resigned 2022); rebuild perpetual
  },

  "Philadelphia Phillies": {
    mediaRights: 7,    // NBC Sports Philadelphia (Comcast-owned) intracompany RSN; strong Delaware Valley reach
    stadium: 7,        // Citizens Bank Park (2004) — well-financed, sellout-era atmosphere; Phillies own operating rights
    brand: 7,          // 2 World Series ('80, '08); rabid Philly fanbase; top-10 MLB merchandise
    marketSize: 6,     // Philly DMA #4; covers PA/NJ/DE; no MLB competition in market
    onField: 7,        // 2022 NL pennant + consecutive NLCS; Harper/Schwarber/Wheeler core; top-5 payroll
  },

  "Washington Nationals": {
    mediaRights: 4,    // MASN rights dispute with Orioles ongoing — chronic underpayment vs. market; Lerner family
    stadium: 6,        // Nationals Park (2008) publicly financed by DC; downtown waterfront development uplift
    brand: 5,          // 2019 World Series title; Soto/Strasburg/Scherzer era brand peak; rebuild reset
    marketSize: 6,     // Washington DC DMA #9; corporate/political market; bleeds into Baltimore
    onField: 4,        // post-2019 rebuild; CJ Abrams + James Wood emerging core; not yet contender
  },

  // ─── NL CENTRAL ──────────────────────────────────────────────────────────

  "Cincinnati Reds": {
    mediaRights: 4,    // Bally Sports Ohio exposure; Castellini family; small Ohio Valley market
    stadium: 6,        // Great American Ball Park (2003) publicly owned; well-regarded riverfront park
    brand: 5,          // 5 World Series titles incl. Big Red Machine legacy; Elly De La Cruz star turn
    marketSize: 4,     // Cincinnati DMA #36; covers Ohio/KY/IN tri-state but small base
    onField: 5,        // 2023 surprise contender; De La Cruz franchise centerpiece; .500-tier roster
  },

  "Milwaukee Brewers": {
    mediaRights: 4,    // Bally Sports Wisconsin transition; small Wisconsin market; mid-low RSN
    stadium: 6,        // American Family Field (2001, retractable roof) publicly owned; 2024 lease extension + $500M state renovation
    brand: 5,          // 0 World Series titles; consistent NL Central contender brand; strong regional loyalty
    marketSize: 4,     // Milwaukee DMA #36; only MLB team in Wisconsin; some bleed from Chicago market
    onField: 7,        // 6 playoff appearances last 7 years on small payroll; David Stearns-era model continues
  },

  "Pittsburgh Pirates": {
    mediaRights: 3,    // SportsNet Pittsburgh (joint venture with Penguins) post-Diamond pivot; small market
    stadium: 7,        // PNC Park (2001) — consistently rated best ballpark in MLB; publicly financed (70%) but team-operated
    brand: 4,          // 5 World Series titles all-time but most recent 1979; Nutting payroll discipline = brand drag
    marketSize: 3,     // Pittsburgh DMA #26; thin corporate base; western PA/WV/eastern OH reach
    onField: 4,        // Paul Skenes pre-arb cornerstone (NL ROY 2024); Cherington rebuild produced young core; not yet contender
  },

  "St. Louis Cardinals": {
    mediaRights: 6,    // Bally Sports Midwest transition; massive multi-state Cardinals Nation footprint; deep RSN reach
    stadium: 7,        // Busch Stadium (2006) team-owned; majority private financing; Ballpark Village adjacent dev
    brand: 8,          // 11 World Series titles (2nd most); deepest fan loyalty in MLB; multi-state regional brand
    marketSize: 5,     // St. Louis DMA #21 but Cardinals reach 8-state Midwest market; massive secondary fanbase
    onField: 5,        // 2022 NL Central but consecutive sub-.500 years; Arenado anchor aging; Marmol pressure
  },

  // ─── NL WEST ─────────────────────────────────────────────────────────────

  "Arizona Diamondbacks": {
    mediaRights: 3,    // Bally Sports Arizona collapsed → MLB Local Media operating; lowest-tier RSN economics
    stadium: 5,        // Chase Field (1998) retractable roof; lease through 2027; $500M renovation needed; relocation rumors
    brand: 4,          // 1 World Series (2001); 2023 NL pennant brought reset; mid-tier merchandise
    marketSize: 5,     // Phoenix DMA #11 (large) but split sports market with Suns/Cardinals/Coyotes-now-Utah
    onField: 6,        // 2023 NL pennant; Carroll/Marte/Gallen locked young core; sustainable contender
  },

  "Colorado Rockies": {
    mediaRights: 3,    // Bally Sports Rocky Mountain collapse → MLB Local Media; bottom-quartile RSN
    stadium: 6,        // Coors Field (1995) downtown Denver, publicly financed; LoDo development halo; sellout legacy
    brand: 4,          // 0 World Series titles (1 NL pennant 2007); high-altitude novelty brand; thin national reach
    marketSize: 4,     // Denver DMA #17 but only MLB team in Mountain time zone — claims regional sweep
    onField: 2,        // chronic bottom of NL West; Bryant contract disaster; Monfort family payroll discipline; perpetual rebuild
  },

  "San Diego Padres": {
    mediaRights: 5,    // owned-broadcast model post-Diamond — direct streaming pioneer; ~$100M local revenue model
    stadium: 7,        // Petco Park (2004, $301M public) — top-tier ballpark, downtown; East Village dev lift
    brand: 6,          // 0 World Series titles but 2 pennants; Tony Gwynn legacy; brown-and-gold rebrand 2020 hit
    marketSize: 5,     // San Diego DMA #28 but no in-market competition; cross-border Tijuana audience
    onField: 7,        // Machado/Bogaerts/Tatis locked through 2032-34; 4 consecutive playoffs through 2024; top-5 payroll era
  },

};
