// NBA driver scores — researched 1-10 driver scores for non-curated NBA teams (22 teams)
// Curated teams handled in teams.js: Warriors, Knicks, Lakers, Celtics, Bulls, Clippers, Suns, Rockets
// Sources: Forbes 2024, NBA RSN landscape, social media, championships last 10 yrs, on-court roster
// Baseline note: New NBA national TV deal (~$230M/team uniformly under 11yr 2025-26+ deal) sets mediaRights floor at ~6-7;
//   teams with own RSN equity, large local markets, or unique commercial leverage push higher.
export const nbaDriverScores = {

  // ─── ATLANTIC ───────────────────────────────────────────────
  "Brooklyn Nets": {
    mediaRights: 7,    // equal NBA share; YES Network minor exposure via Tsai/BSE; shared NYC DMA premium
    stadium: 7,        // Barclays Center (2012) controlled via Tsai/BSE Global; downtown BK premium + non-NBA events
    brand: 6,          // post-Big Three rebuild; KD/Kyrie departures hurt; Brooklyn cultural cachet sustains
    marketSize: 9,     // NYC market shared with Knicks but enormous
    onField: 3,        // sub-.500 rebuild; no franchise cornerstone signed long-term post-Mikal trade
  },
  "Philadelphia 76ers": {
    mediaRights: 7,    // equal NBA share; NBC Sports Philadelphia (Comcast intracompany)
    stadium: 5,        // Wells Fargo Center (1996) shared with Flyers; new $1.3B arena planned 2031 with Comcast/HBSE
    brand: 7,          // rich tradition (Wilt, Dr. J, Iverson); deep PHI fanbase; "Trust the Process" era halo
    marketSize: 8,     // Philadelphia DMA #4
    onField: 6,        // Embiid MVP era; multiple second-round exits but no Finals; injury risk concerns
  },
  "Toronto Raptors": {
    mediaRights: 7,    // equal NBA share + Canadian premium via MLSE (Sportsnet/TSN); only NBA team in Canada
    stadium: 6,        // Scotiabank Arena (1999) MLSE-owned; shared with Maple Leafs; high non-game event volume
    brand: 7,          // 2019 NBA championship national-Canada effect; only NBA team in Canada = country-wide fanbase
    marketSize: 8,     // Toronto DMA + entire Canadian market dynamic
    onField: 4,        // post-Kawhi/Siakam rebuild; Scottie Barnes core; missed playoffs recent
  },

  // ─── CENTRAL ────────────────────────────────────────────────
  "Cleveland Cavaliers": {
    mediaRights: 6,    // equal NBA share; FanDuel Sports Network Ohio (Diamond Sports legacy RSN risk)
    stadium: 5,        // Rocket Arena (1994, $185M renovation 2019) publicly owned; Cavs operate
    brand: 6,          // 2016 title halo + LeBron-era residual; mid-market exposure
    marketSize: 4,     // Cleveland DMA #19
    onField: 8,        // 2024 ECF run; Mitchell/Mobley/Garland core; 1 seed in East 2024-25; 2016 champs
  },
  "Detroit Pistons": {
    mediaRights: 6,    // equal NBA share; FanDuel Sports Network Detroit (Diamond legacy RSN risk)
    stadium: 6,        // Little Caesars Arena (2017) shared with Red Wings; Ilitch family control
    brand: 5,          // Bad Boys/Going-to-Work heritage but recent decade of losing diluted commercial appeal
    marketSize: 6,     // Detroit DMA #15
    onField: 4,        // Cade Cunningham core ascending; 2024-25 turnaround after historic 2023-24 losses
  },
  "Indiana Pacers": {
    mediaRights: 6,    // equal NBA share; FanDuel Sports Network Indiana
    stadium: 6,        // Gainbridge Fieldhouse (1999) Pacers-controlled; $400M renovation 2022; 25-year Indianapolis commitment
    brand: 5,          // deep Hoosier basketball heritage; limited national reach until recent playoff runs
    marketSize: 3,     // Indianapolis DMA #25 but team is regional crown jewel
    onField: 8,        // 2024 ECF + 2025 Finals run; Haliburton core; rapid trajectory upgrade
  },
  "Milwaukee Bucks": {
    mediaRights: 7,    // equal NBA share; Bally Sports Wisconsin (RSN risk); Giannis driving outsized national exposure
    stadium: 7,        // Fiserv Forum (2018) Deer District public-private development success
    brand: 7,          // Giannis = top-3 NBA brand globally; 2021 championship halo
    marketSize: 4,     // Milwaukee DMA #34 but Giannis transcends market
    onField: 8,        // 2021 champs; consistent contender; Giannis/Lillard supermax core; recent playoff disappointments
  },

  // ─── SOUTHEAST ──────────────────────────────────────────────
  "Atlanta Hawks": {
    mediaRights: 7,    // equal NBA share; FanDuel Sports Network South
    stadium: 7,        // State Farm Arena (1999, $193M renovation 2018); team-controlled, premium concert venue
    brand: 5,          // "True to Atlanta" rebrand modernized but limited championship tradition
    marketSize: 8,     // Atlanta DMA #6
    onField: 5,        // 2021 ECF run; Trae Young core inconsistent; mostly mid-tier playoff trajectory
  },
  "Charlotte Hornets": {
    mediaRights: 6,    // equal NBA share; lowest local commercial leverage tier
    stadium: 4,        // Spectrum Center publicly owned 2005; modest non-NBA event slate
    brand: 4,          // Jordan-ownership era (sold 2023 to Plotkin/Schnall) faded; teal/purple equity remains
    marketSize: 5,     // Charlotte DMA #22 fast-growing
    onField: 2,        // chronic losing; LaMelo durability concerns; rebuild perpetual
  },
  "Miami Heat": {
    mediaRights: 7,    // equal NBA share; "Heat Culture" brand drives outsized national TV slot demand
    stadium: 6,        // Kaseya Center (1999) team-controlled; multiple naming sponsor cycles
    brand: 8,          // "Heat Culture" + Wade/LeBron decade halo + Pat Riley aura = top-5 NBA brand
    marketSize: 7,     // Miami DMA #16 but global tourism + Latin America audience
    onField: 8,        // 2 Finals last 5 yrs (2020, 2023); Spoelstra/Riley structural advantage; Butler-era ending
  },
  "Orlando Magic": {
    mediaRights: 6,    // equal NBA share; FanDuel Sports Network Florida (RSN risk)
    stadium: 5,        // Kia Center (formerly Amway, 2010) publicly owned; team operates
    brand: 5,          // Shaq/Penny + Dwight nostalgia; rebuilt brand around Banchero
    marketSize: 5,     // Orlando DMA #18
    onField: 6,        // back-to-back playoff appearances; Banchero/Wagner core trajectory upgrade
  },
  "Washington Wizards": {
    mediaRights: 7,    // equal NBA share + Monumental Sports Network (Leonsis-owned RSN — rare equity)
    stadium: 6,        // Capital One Arena (1997) Monumental-owned; shared with Capitals; $515M renovation underway
    brand: 4,          // limited modern tradition; Wall era nostalgia faded
    marketSize: 7,     // DC DMA #7
    onField: 2,        // worst record in NBA 2024-25; full rebuild around 2024-25 picks
  },

  // ─── NORTHWEST ──────────────────────────────────────────────
  "Denver Nuggets": {
    mediaRights: 7,    // equal NBA share + Altitude Sports (KSE-owned RSN — full equity)
    stadium: 6,        // Ball Arena (1999) KSE-owned; shared with Avalanche, Mammoth (NLL)
    brand: 7,          // Jokic 3x MVP + 2023 championship halo = top-tier basketball brand for small market
    marketSize: 5,     // Denver DMA #16
    onField: 9,        // 2023 champs; Jokic perennial MVP candidate; consistent contender 2020-present
  },
  "Minnesota Timberwolves": {
    mediaRights: 6,    // equal NBA share; FanDuel Sports North (Diamond legacy RSN risk)
    stadium: 4,        // Target Center (1990) publicly owned; oldest active NBA arena needing modernization
    brand: 5,          // KAT/Edwards era halo; A-Rod/Lore ownership transition closed 2025
    marketSize: 5,     // Minneapolis-St. Paul DMA #15
    onField: 8,        // 2024 WCF run; Edwards superstar trajectory; back-to-back deep playoff runs
  },
  "Oklahoma City Thunder": {
    mediaRights: 6,    // equal NBA share; small local TV footprint
    stadium: 4,        // Paycom Center (2002) publicly owned; new $900M+ public-financed arena approved 2023, opening 2028-29
    brand: 6,          // Durant/Westbrook nostalgia + SGA emergence; rebuilding national brand fast
    marketSize: 3,     // Oklahoma City DMA #45 — smallest in NBA
    onField: 10,       // 2025 NBA champions; SGA MVP; deepest contending core; #1 seed
  },
  "Portland Trail Blazers": {
    mediaRights: 6,    // equal NBA share; team-owned Trail Blazers Productions / Rip City TV streaming pivot
    stadium: 6,        // Moda Center (1995) team-owned via Allen estate; shared event venue
    brand: 6,          // passionate Rip City fanbase; only major pro team in market = monopoly
    marketSize: 5,     // Portland DMA #21 but exclusive (no NBA/NFL/MLB competition)
    onField: 3,        // post-Lillard rebuild; Scoot Henderson/Sharpe/Avdija core young
  },
  "Utah Jazz": {
    mediaRights: 6,    // equal NBA share + KJZZ broadcast/streaming via Smith Entertainment Group
    stadium: 7,        // Delta Center (1991) team-owned via SEG; now shared with Utah HC (NHL) since 2024
    brand: 5,          // Stockton/Malone heritage; consistent regional brand; limited national appeal
    marketSize: 4,     // Salt Lake DMA #29
    onField: 2,        // full rebuild post-Mitchell/Gobert trades; tanking for 2025-26 picks
  },
  "Sacramento Kings": {
    mediaRights: 6,    // equal NBA share; NBC Sports California (Comcast intracompany)
    stadium: 7,        // Golden 1 Center (2016) publicly subsidized but modern; tech-forward arena anchor
    brand: 4,          // Light the Beam era boost; limited national appeal historically; Sacramento exclusive
    marketSize: 4,     // Sacramento DMA #20 but exclusive (no other major pro team)
    onField: 4,        // 2023 playoff appearance ended 16-year drought; missed 2024-25 playoffs
  },

  // ─── PACIFIC (only Kings — Lakers/Clippers/Warriors/Suns curated) ─

  // ─── SOUTHWEST ──────────────────────────────────────────────
  "Dallas Mavericks": {
    mediaRights: 7,    // equal NBA share; Tegna broadcast deal post-2023 (post-RSN exit)
    stadium: 4,        // American Airlines Center (2001) shared with Stars; not Mavs-owned; new arena discussions
    brand: 8,          // Cuban-era brand engineering + Dirk legacy + global Luka era; controversial 2025 Luka trade
    marketSize: 7,     // DFW DMA #5
    onField: 7,        // 2024 Finals run; 2025 Luka trade reshapes core; AD-led roster going forward
  },
  "Memphis Grizzlies": {
    mediaRights: 6,    // equal NBA share; FanDuel Sports Network Southeast
    stadium: 5,        // FedExForum (2004) publicly owned; team operates with FedEx anchor
    brand: 6,          // Grit & Grind era + Ja Morant ascendance brand; persistent off-court issues drag
    marketSize: 3,     // Memphis DMA #50
    onField: 6,        // 2022/2023 playoff regulars; Ja injuries/suspensions limit ceiling; 2024 collapse
  },
  "New Orleans Pelicans": {
    mediaRights: 6,    // equal NBA share; Gulf Coast Sports & Entertainment legacy
    stadium: 4,        // Smoothie King Center (1999) publicly owned; shared with Saints WR district
    brand: 4,          // Zion injury saga limits brand momentum; CP3/AD eras receded
    marketSize: 4,     // New Orleans DMA #50
    onField: 3,        // sub-.500; Zion durability questions; rebuild signal
  },
  "San Antonio Spurs": {
    mediaRights: 6,    // equal NBA share; small local TV market
    stadium: 5,        // Frost Bank Center (2002) publicly owned; new downtown arena under exploration
    brand: 8,          // Duncan dynasty (5 titles) + Popovich legacy = top-3 NBA brand for small market
    marketSize: 3,     // San Antonio DMA #31
    onField: 4,        // Wembanyama era beginning; rebuild but generational talent trajectory
  },

};
