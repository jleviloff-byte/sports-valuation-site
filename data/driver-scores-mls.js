// MLS driver scores — researched 1-10 driver scores for the 22 non-curated MLS teams
// Curated by hand (excluded from this file): Inter Miami CF, LA Galaxy, Los Angeles FC,
//   Atlanta United FC, Toronto FC, Seattle Sounders FC, New York Red Bulls, Portland Timbers
//
// Scoring framework:
//   mediaRights — Apple TV deal pays uniform ~$8M/team; differentiation comes from pre-2023
//                 local TV legacy, parent media operator, or Spanish-language reach
//   stadium    — soccer-specific build, team ownership, capacity, age, mixed-use development
//   brand      — heritage, supporters culture, social reach, marquee DPs, transfers credit
//   marketSize — DMA rank, hispanic/soccer fanbase, MLS competition in market, corporate base
//   onField    — MLS Cups, playoff frequency, current DP roster strength, CONCACAF results
export const mlsDriverScores = {

  "Charlotte FC": {
    mediaRights: 4,    // Apple TV uniform; no premium local-rights legacy (expansion 2022)
    stadium: 4,        // Bank of America Stadium shared with Panthers; not soccer-specific, upper bowls tarped
    brand: 4,          // newest expansion class (2022); Tepper visibility helps but no heritage
    marketSize: 6,     // Charlotte DMA #22 fastest-growing in southeast; no competing MLS team in Carolinas
    onField: 4,        // first playoff appearance 2024; mid-table expansion club
  },

  "Chicago Fire FC": {
    mediaRights: 5,    // Apple TV uniform; legacy Mansueto-owned WGN/Marquee bundle pre-2023 was modest
    stadium: 4,        // Soldier Field tenant since 2020 (NFL Bears co-tenant); aging concrete bowl, not soccer-specific
    brand: 5,          // founding-era 1998 club; supporters culture intact; 4 US Open Cups historically; recent struggles diluted brand
    marketSize: 8,     // Chicago DMA #3; shared market with Cubs/Bears/Bulls/Sox but enormous corporate + hispanic base
    onField: 3,        // 1 MLS Cup (1998); long playoff drought; 2024 missed playoffs again
  },

  "FC Cincinnati": {
    mediaRights: 5,    // Apple TV uniform; Lindner-owned Bally Sports Ohio legacy now subsumed
    stadium: 8,        // TQL Stadium (2021, $250M, privately financed by Lindner); 26K capacity, soccer-specific, premium build
    brand: 6,          // built fanbase in lower divisions before MLS (2019); supporters culture strong; growing kit deals
    marketSize: 4,     // Cincinnati DMA #36; midwest mid-market with no MLS competition
    onField: 6,        // 2023 Supporters' Shield; consistent MLS Cup contender 2023-2024; Acosta era
  },

  "Columbus Crew SC": {
    mediaRights: 5,    // Apple TV uniform; Bally Sports Ohio legacy; Haslam Sports Group bundle
    stadium: 8,        // Lower.com Field (2021, ~$314M, primarily privately financed); 20K soccer-specific; team-controlled with Haslam
    brand: 7,          // founding 1996 club; "Save the Crew" 2017-2018 supporters movement is league legend; Cucho era global cred
    marketSize: 4,     // Columbus DMA #34 small-market; no MLS competition in Ohio adjacent to Cincinnati
    onField: 8,        // 2008, 2020, 2023 MLS Cups; perennial contender; Wilfried Nancy era technical excellence
  },

  "D.C. United": {
    mediaRights: 5,    // Apple TV uniform; legacy NBC Sports Washington local deal modest
    stadium: 6,        // Audi Field (2018, ~$500M privately financed); 20K soccer-specific; team-owned operations
    brand: 7,          // founding 1996 club; 4 MLS Cups (most pre-2010); deep heritage but lapsed since 2004 last cup
    marketSize: 7,     // Washington DMA #9; large corporate base; hispanic fanbase moderate
    onField: 3,        // last MLS Cup 2004; perennial bottom-table 2020s; rebuild stage
  },

  "CF Montréal": {
    mediaRights: 4,    // Apple TV uniform; TVA Sports French-language pre-2023 was distinct asset, now subsumed
    stadium: 4,        // Stade Saputo (2008, expanded 2012); 19K capacity; aging; cold-weather Olympic Stadium fallback
    brand: 5,          // 2012 expansion as MLS team but USL/NASL heritage 1992; Saputo family long tenure; brand softened post-Impact rebrand
    marketSize: 5,     // Montréal DMA significant Canadian/francophone market; cross-pressure from Canadiens NHL dominance
    onField: 4,        // multiple Canadian Championships; CONCACAF semis 2015; recent struggles; no MLS Cup
  },

  "Nashville SC": {
    mediaRights: 6,    // Apple TV uniform; Ingram media bundle leverage modest but premium positioning
    stadium: 9,        // GEODIS Park (2022, $335M); largest MLS-only stadium (30,000); team-controlled with John Ingram capital
    brand: 6,          // 2020 expansion; rapid brand build via Hany Mukhtar MVP run; strong country-music city tie-in
    marketSize: 6,     // Nashville DMA #27 but fastest-growing southern market; corporate + tourism base
    onField: 6,        // every-year playoff team since entry; 2023 Leagues Cup final; no MLS Cup yet
  },

  "New England Revolution": {
    mediaRights: 5,    // Apple TV uniform; Kraft NESN bundle legacy pre-2023 was distinct asset
    stadium: 3,        // Gillette Stadium tenant under Kraft; oversized NFL bowl, not soccer-specific; Everett new-build planned but stalled
    brand: 5,          // founding 1996 club; 5 MLS Cup final losses (most ever); brand undercut by no-title legacy
    marketSize: 7,     // Boston DMA #10; large corporate base; soccer fanbase moderate
    onField: 4,        // 2021 Supporters' Shield (record points); recent regression; Bruce Arena exit cloud
  },

  "New York City FC": {
    mediaRights: 7,    // Apple TV uniform; CFG global content engine leverage; YES Network historic synergy
    stadium: 4,        // Yankee Stadium tenant (NYCFC undersized config); $780M Etihad Park (Queens) under construction, opens 2027
    brand: 7,          // City Football Group / Manchester City sister club brand halo; 2021 MLS Cup; growing global identity
    marketSize: 9,     // NYC DMA #1; competes with Red Bulls but #1 market with massive hispanic + soccer base
    onField: 6,        // 2021 MLS Cup champions; consistent playoff team; multiple high-profile DPs (Villa, Pirlo legacy)
  },

  "Orlando City SC": {
    mediaRights: 5,    // Apple TV uniform; Wilf bundle with Vikings limited cross-leverage in MLS
    stadium: 7,        // Inter&Co Stadium (2017, $155M privately financed); 25K soccer-specific; team-owned operations
    brand: 6,          // 2015 expansion; supporters culture strong (Wall); Pride NWSL same ownership; Brazilian connection
    marketSize: 6,     // Orlando DMA #18; tourism + hispanic base; growing corporate
    onField: 6,        // 2022 US Open Cup; consistent recent playoff team; Brazilian DP investment
  },

  "Philadelphia Union": {
    mediaRights: 4,    // Apple TV uniform; no premium local-rights leverage; Sugarman ownership not media-adjacent
    stadium: 5,        // Subaru Park (2010, ~$120M, $87M public Chester PA subsidy); 18.5K soccer-specific; suburban location
    brand: 6,          // 2010 expansion; Sons of Ben supporters group is league benchmark; consistent identity
    marketSize: 6,     // Philadelphia DMA #4 large but team is in Chester (suburb); strong corporate
    onField: 8,        // 2022 Supporters' Shield; 2022 MLS Cup runner-up; perennial top-3 2020-2024; academy pipeline elite
  },

  "Austin FC": {
    mediaRights: 6,    // Apple TV uniform; Precourt bundle + Matthew McConaughey marketing visibility unique
    stadium: 8,        // Q2 Stadium (2021, $260M privately financed); 20.5K soccer-specific; team-controlled; instant sellout history
    brand: 7,          // 2021 expansion but Austin music/cultural cachet; supporters culture strong; high social media
    marketSize: 7,     // Austin DMA #36 but top US growth market; tech + hispanic base; only pro team in city
    onField: 5,        // 2022 Western Conference final; recent regression; rebuild under new sporting director 2024
  },

  "Colorado Rapids": {
    mediaRights: 4,    // Apple TV uniform; Kroenke Altitude RSN bundle limited cross-leverage in MLS
    stadium: 5,        // Dick's Sporting Goods Park (2007); 18K soccer-specific; team-owned via KSE; aging
    brand: 4,          // 2010 MLS Cup but otherwise modest brand; Kroenke ownership not engaged in MLS the way KSE is in NBA/NFL
    marketSize: 5,     // Denver DMA #17; competes for corporate dollars with Broncos/Avs/Nuggets/Rockies (all KSE except Broncos)
    onField: 4,        // 2010 MLS Cup; recent missed playoffs; mid-table
  },

  "FC Dallas": {
    mediaRights: 4,    // Apple TV uniform; Hunt-controlled bundle limited
    stadium: 5,        // Toyota Stadium (2005, Frisco TX) under $182M renovation 2025; 20K soccer-specific; suburban
    brand: 5,          // founding 1996 club (Dallas Burn); Hunt family heritage; academy pipeline elite (Pepi, Ferreira, Reyna era)
    marketSize: 6,     // Dallas DMA #5; large hispanic base; competes with Cowboys/Mavs/Stars/Rangers
    onField: 5,        // 2016 Supporters' Shield; consistent playoff team; never won MLS Cup
  },

  "Houston Dynamo FC": {
    mediaRights: 4,    // Apple TV uniform; no legacy local-rights premium
    stadium: 6,        // Shell Energy Stadium (2012, $95M); 22K soccer-specific; team-controlled; relatively new
    brand: 5,          // 2006 expansion (Earthquakes relocation); 2x MLS Cups (2006, 2007) early; brand faded mid-2010s
    marketSize: 7,     // Houston DMA #7; large hispanic base; significant corporate
    onField: 5,        // 2023 US Open Cup; recent playoff returns; mid-table; Tim Howard minority owner per 2024 deal at $700M valuation
  },

  "Minnesota United FC": {
    mediaRights: 4,    // Apple TV uniform; no premium media leverage
    stadium: 8,        // Allianz Field (2019, $250M privately financed McGuire family); 19.4K soccer-specific; team-controlled
    brand: 6,          // 2017 expansion (NASL heritage 2010-16); supporters culture strong; "Loons" brand resonates
    marketSize: 5,     // Minneapolis-St. Paul DMA #14; competes with Vikings/Wild/Timberwolves/Twins
    onField: 5,        // 2 Western Conference finals 2019/2020; consistent playoff team; no MLS Cup
  },

  "Real Salt Lake": {
    mediaRights: 4,    // Apple TV uniform; KSL legacy modest
    stadium: 6,        // America First Field (2008, ~$110M); 20K soccer-specific; team-controlled
    brand: 5,          // 2005 expansion; 2009 MLS Cup champions; supporters culture intact; Blitzer/Smith bundle 2022 ($400M)
    marketSize: 4,     // Salt Lake DMA #29; smaller market; competes with Jazz (and now Utah HC)
    onField: 5,        // 2009 MLS Cup; 2013 final; consistent recent playoffs; mid-table
  },

  "San Diego FC": {
    mediaRights: 6,    // Apple TV uniform; Sycuan Tribe + Mansour Group bundle premium positioning
    stadium: 6,        // Snapdragon Stadium tenant (shared with SDSU football); 35K capacity; 2022 build; not soccer-only
    brand: 7,          // 2025 expansion (year 1); $500M record expansion fee; Hirving "Chucky" Lozano as marquee DP; Mansour Group oil money
    marketSize: 7,     // San Diego DMA #28 but cross-border Tijuana metro doubles hispanic/soccer reach; growing tech base
    onField: 5,        // entered 2025; preseason buzz strong; rookie campaign too early to score
  },

  "San Jose Earthquakes": {
    mediaRights: 4,    // Apple TV uniform; Fisher (Athletics) bundle limited
    stadium: 6,        // PayPal Park (2015, $100M); 18K soccer-specific; team-controlled
    brand: 5,          // founding 1996 (Clash); 2 MLS Cups 2001/2003; brand softened with relocation drama early 2000s; SF Bay Area heritage
    marketSize: 6,     // San Jose / Bay Area DMA #6; tech corporate base; soccer-friendly demographics
    onField: 3,        // 2 MLS Cups (2001, 2003); long playoff drought; recent rebuild; bottom-table 2024
  },

  "Sporting Kansas City": {
    mediaRights: 4,    // Apple TV uniform; Bally Sports Kansas legacy modest, now subsumed
    stadium: 8,        // Children's Mercy Park (2011, $200M); 18.5K soccer-specific; team-owned; one of league's best venues
    brand: 6,          // founding 1996 (Wizards) rebrand 2010 to Sporting; 2 MLS Cups (2000, 2013); academy + technical reputation strong
    marketSize: 4,     // Kansas City DMA #31 small-market; competes with Chiefs/Royals
    onField: 5,        // 2 MLS Cups; recent regression and 2025 majority-stake sale at $700M; rebuild
  },

  "St. Louis City SC": {
    mediaRights: 5,    // Apple TV uniform; Taylor family (Enterprise) media leverage modest
    stadium: 8,        // CITYPARK (2023, $460M privately financed); 22.5K soccer-specific; team-owned; new-build premium
    brand: 7,          // 2023 expansion year 1 winning Western Conference (record points); Carolyn Kindle-led ownership engagement
    marketSize: 6,     // St. Louis DMA #21; deep US soccer history (US WNT player pipeline); only pro soccer team
    onField: 6,        // 2023 first-year Western champ; 2024 regression; mid-table trajectory
  },

  "Vancouver Whitecaps FC": {
    mediaRights: 4,    // Apple TV uniform; Canadian rights through Canadian deal (no Sportsnet premium for MLS team)
    stadium: 4,        // BC Place tenant (shared with BC Lions CFL); oversized roof venue; not soccer-specific; 2025 active sale + Las Vegas relocation threat
    brand: 5,          // founding 2011 MLS but NASL/USL heritage 1986; Canadian Championship 4x; brand has plateaued; ownership uncertainty 2024-2025
    marketSize: 5,     // Vancouver DMA significant Canadian market; competes with Canucks
    onField: 4,        // multiple Canadian Championships; recent CONCACAF run 2024; no MLS Cup; relocation cloud
  },

};
