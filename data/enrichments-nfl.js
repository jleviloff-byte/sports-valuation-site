// NFL team enrichments — multi-source research (all 32 teams)
// Sources: Forbes, Spotrac, Wikipedia, ESPN, Sports Business Journal, local news archives
export const nflEnrichments = {

  // ─── AFC EAST ────────────────────────────────────────────────────

  "Buffalo Bills": {
    valuationHistory: [
      { year: 2019, value: 1.6, source: "Forbes" },
      { year: 2020, value: 2.05, source: "Forbes" },
      { year: 2021, value: 2.27, source: "Forbes" },
      { year: 2022, value: 3.4, source: "Forbes" },
      { year: 2023, value: 3.7, source: "Forbes" },
      { year: 2024, value: 4.2, source: "Forbes" },
    ],
    revenue: { estimate: 552, year: 2023, source: "Forbes", operatingIncome: 101 },
    transactions: [
      { year: 2014, price: 1.4, buyer: "Terry Pegula", seller: "Wilson estate", notes: "NFL record at time; Ralph Wilson estate sale" }
    ],
    stadium: {
      name: "Highmark Stadium",
      yearBuilt: 1973,
      capacity: 71608,
      ownershipModel: "publicly-owned, state of New York",
      teamOwnsLand: false,
      publicSubsidy: null,
      privateFinancing: null,
      namingRightsDeal: "Highmark Blue Cross Blue Shield of Western New York, ~$5-6M/year (deal extended to cover new stadium, exact value undisclosed)",
      nonGameRevenue: "Limited — aging facility with minimal non-NFL events",
      newStadiumPlans: "New $1.54B Highmark Stadium under construction in Orchard Park, opening 2026; ~$850M public funding ($600M state + $250M Erie County), $550M private; 30-year lease; state-owned"
    },
    media: {
      localTVDeal: null,
      radioPartner: "WGR 550 (WGRF-FM)",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Terry and Kim Pegula",
      ownerNetWorth: "~$9B (est.)",
      ownerBackground: "Terry Pegula made fortune in natural gas (East Resources); also owns NHL Buffalo Sabres",
      acquisitionYear: 2014,
      acquisitionPrice: 1.4,
      currentValuation: 4.2,
      impliedReturn: "~3x in 11 years",
      ownershipGroup: [{ name: "Terry Pegula", role: "majority", pct: null }],
      institutionalInvestors: "Minority stake sale under exploration as of 2024",
      otherBusinessInterests: "Buffalo Sabres (NHL), natural gas (East Resources)"
    },
    brand: {
      socialMedia: { instagram: "~1.2M", twitter: "~800K", facebook: "~1.7M" },
      merchandiseNotes: "Mid-tier NFL merchandise performer; Josh Allen driving recent growth",
      internationalFanbase: null,
      notableSponsorships: ["Highmark Blue Cross Blue Shield (stadium naming)", "New Era (local)", "KeyBank"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchiseQB: "Josh Allen — 6yr/$330M extension signed March 2025, $55M AAV, $250M guaranteed",
      starContracts: [
        { player: "Josh Allen", position: "QB", aav: 55.0, contractNote: "6yr/$330M (March 2025), runs through 2030" }
      ]
    },
    analystNotes: "The Bills' valuation story is almost entirely a Josh Allen story — a generational QB in a mid-sized, captive market with no NFL competition for 400 miles. The new publicly-subsidized stadium opening in 2026 is the next re-rating catalyst: modern premium inventory, expanded club capacity, and naming rights optionality. Allen's March 2025 contract reset — taken deliberately below market AAV to create cap flexibility — is itself a signal of a franchise orienting around a championship window. A Super Bowl run before the new building opens would be transformative for the brand."
  },

  "Miami Dolphins": {
    valuationHistory: [
      { year: 2019, value: 2.76, source: "Forbes" },
      { year: 2020, value: 3.02, source: "Forbes" },
      { year: 2021, value: 3.53, source: "Forbes" },
      { year: 2022, value: 4.6, source: "Forbes" },
      { year: 2023, value: 5.7, source: "Forbes" },
      { year: 2024, value: 7.1, source: "Forbes" },
    ],
    revenue: { estimate: 656, year: 2023, source: "Forbes", operatingIncome: 63 },
    transactions: [
      { year: 2009, price: 1.0, buyer: "Stephen Ross (majority)", seller: "Wayne Huizenga", notes: "Ross paid $550M for 50% in 2008, then acquired additional 45% by 2009 for total ~$1B" }
    ],
    stadium: {
      name: "Hard Rock Stadium",
      yearBuilt: 1987,
      capacity: 65326,
      ownershipModel: "privately owned — Ross/Dolphins ownership",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 755,
      namingRightsDeal: "Hard Rock International, $250M over 18 years (~$13.9M/year), signed 2016, expires 2034",
      nonGameRevenue: "Super Bowls, College Football Playoff, FIFA World Cup 2026, Formula 1 Miami Grand Prix (annual), major concerts; among most event-diverse NFL venues",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: null,
      radioPartner: "WQAM 560 AM",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Stephen M. Ross",
      ownerNetWorth: "~$10B (est.)",
      ownerBackground: "Real estate developer; founder of Related Companies; acquired Dolphins 2008-2009",
      acquisitionYear: 2009,
      acquisitionPrice: 1.0,
      currentValuation: 7.1,
      impliedReturn: "~7x in 16 years",
      ownershipGroup: [
        { name: "Stephen Ross", role: "majority owner", pct: "~95%" },
        { name: "Bin Lin", role: "limited partner", pct: "~1% (sold 2026 at implied $12.5B total asset valuation)" }
      ],
      institutionalInvestors: "Ross sold 1% stake in 2026 valuing team+assets at $12.5B; previously sold ~13% to Joe Tsai and others",
      otherBusinessInterests: "Related Companies (real estate), Formula 1 Miami Grand Prix, Miami Open (tennis)"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~1.1M", facebook: "~2.6M" },
      merchandiseNotes: "Strong lifestyle brand; Miami market provides international fashion/culture crossover",
      internationalFanbase: "Growing — Formula 1 tie-in and Miami market give strong international exposure",
      notableSponsorships: ["Hard Rock International (stadium naming)", "Baptist Health (jersey patch)", "Enovis"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "Tua Tagovailoa — 4yr/$212.4M extension signed July 2024, $53.1M AAV, $167.2M guaranteed",
      starContracts: [
        { player: "Tua Tagovailoa", position: "QB", aav: 53.1, contractNote: "4yr/$212.4M (July 2024), runs through 2028" }
      ]
    },
    analystNotes: "The Dolphins are the NFL's most uniquely positioned franchise for non-football revenue monetization. Hard Rock Stadium is privately owned and fully paid off — a rare asset in the league — generating Super Bowl bids, the Miami Grand Prix, and FIFA World Cup 2026 hosting. Tua Tagovailoa's $53M AAV extension is a bold bet on a fragile asset; a QB health resolution in either direction will be the most significant near-term valuation driver. The $12.5B implied asset value reflected in the 2026 minority stake sale already prices in the full real estate and entertainment complex, not just the franchise."
  },

  "New England Patriots": {
    valuationHistory: [
      { year: 2019, value: 4.1, source: "Forbes" },
      { year: 2020, value: 4.4, source: "Forbes" },
      { year: 2021, value: 5.0, source: "Forbes" },
      { year: 2022, value: 6.4, source: "Forbes" },
      { year: 2023, value: 7.0, source: "Forbes" },
      { year: 2024, value: 7.4, source: "Forbes" },
    ],
    revenue: { estimate: 712, year: 2023, source: "Forbes", operatingIncome: 261 },
    transactions: [],
    stadium: {
      name: "Gillette Stadium",
      yearBuilt: 2002,
      capacity: 65878,
      ownershipModel: "privately owned — Kraft Group",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 325,
      namingRightsDeal: "Procter & Gamble (Gillette brand), ~$8M/year, original 15-year deal 2002, extended through 2031 season",
      nonGameRevenue: "New England Revolution (MLS), concerts, soccer internationals, Patriot Place retail/entertainment complex adjacent to stadium",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: null,
      radioPartner: "WBGN 98.5 The Sports Hub",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Robert Kraft",
      ownerNetWorth: "~$10-11B (est.)",
      ownerBackground: "Paper/packaging entrepreneur; bought Patriots in 1994 for $172M; built one of NFL's most vertically integrated franchise businesses",
      acquisitionYear: 1994,
      acquisitionPrice: 0.172,
      currentValuation: 7.4,
      impliedReturn: "~43x in 31 years",
      ownershipGroup: [{ name: "Robert Kraft / Kraft Group", role: "majority owner", pct: null }],
      institutionalInvestors: "Minority stake sold in 2025 at ~$9B implied team valuation (per CNBC report)",
      otherBusinessInterests: "New England Revolution (MLS), Patriot Place (retail/entertainment), Kraft Group (paper/packaging)"
    },
    brand: {
      socialMedia: { instagram: "~2.8M", twitter: "~1.8M", facebook: "~6M" },
      merchandiseNotes: "Consistently top-3 NFL merchandise seller; 6 Super Bowl titles sustain strong national brand even in rebuild",
      internationalFanbase: "Strong — Brady/Belichick dynasty created global following",
      notableSponsorships: ["Gillette / P&G (stadium naming)", "Raytheon Technologies", "Delta Air Lines"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Drake Maye — 4yr/$36.6M rookie contract (2024 draft pick No. 3), fully guaranteed; eligible for extension 2026",
      starContracts: [
        { player: "Drake Maye", position: "QB", aav: 9.16, contractNote: "4yr/$36.6M rookie deal (2024), fully guaranteed; 5th-year option available" }
      ]
    },
    analystNotes: "The Patriots are a rare case of a franchise whose valuation is structurally supported by business infrastructure independent of on-field results. The Kraft Group's vertically integrated model — 100% privately financed stadium, adjacent Patriot Place commercial real estate, MLS team, and one of the league's highest operating margins ($261M) — gives it a floor that most franchises can't match. Drake Maye is the obvious re-rating trigger: a true franchise QB would close the gap to the Cowboys/Giants tier quickly. The 2025 minority stake at ~$9B implied valuation is a forward indicator that smart money already agrees."
  },

  "New York Jets": {
    valuationHistory: [
      { year: 2019, value: 3.2, source: "Forbes" },
      { year: 2020, value: 3.55, source: "Forbes" },
      { year: 2021, value: 4.05, source: "Forbes" },
      { year: 2022, value: 5.4, source: "Forbes" },
      { year: 2023, value: 6.1, source: "Forbes" },
      { year: 2024, value: 6.9, source: "Forbes" },
    ],
    revenue: { estimate: 620, year: 2023, source: "Forbes", operatingIncome: 138 },
    transactions: [
      { year: 2000, price: 0.635, buyer: "Woody Johnson", seller: "Leon Hess estate", notes: "NFL record at time; Hess estate sale" }
    ],
    stadium: {
      name: "MetLife Stadium",
      yearBuilt: 2010,
      capacity: 82500,
      ownershipModel: "privately financed, co-owned by Jets and Giants (50/50 JV)",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 800,
      namingRightsDeal: "MetLife Insurance, ~$17-20M/year (Jets receive roughly half), 25-year deal signed 2011, expires ~2036",
      nonGameRevenue: "Shared with Giants: Super Bowls, FIFA World Cup 2026, major concerts, international soccer; among highest-capacity NFL venues",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: null,
      radioPartner: "WEPN 98.7 ESPN New York",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Woody Johnson",
      ownerNetWorth: "~$6-7B (est.)",
      ownerBackground: "Heir to Johnson & Johnson pharmaceutical fortune; purchased Jets in 2000 for $635M; served as U.S. Ambassador to UK (2017-2021)",
      acquisitionYear: 2000,
      acquisitionPrice: 0.635,
      currentValuation: 6.9,
      impliedReturn: "~11x in 25 years",
      ownershipGroup: [
        { name: "Woody Johnson", role: "majority owner", pct: null },
        { name: "Christopher Johnson", role: "minority / vice chairman", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Johnson family trusts"
    },
    brand: {
      socialMedia: { instagram: "~1.3M", twitter: "~1.1M", facebook: "~2.9M" },
      merchandiseNotes: "New York market supports above-average merchandise floor regardless of performance; Aaron Rodgers signing in 2023 briefly boosted merch",
      internationalFanbase: "Moderate — New York market gives baseline global recognition",
      notableSponsorships: ["MetLife Insurance (stadium naming, shared with Giants)", "Sievert", "Daikin"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchiseQB: "Justin Fields — 2yr/$40M deal signed March 2025, $20M AAV; traded to Kansas City mid-2025-season; franchise QB situation unresolved as of 2026",
      starContracts: [
        { player: "Justin Fields", position: "QB", aav: 20.0, contractNote: "2yr/$40M (March 2025); traded to Chiefs Nov 2025; Jets carrying dead cap" }
      ]
    },
    analystNotes: "The Jets are the quintessential 'market premium' valuation story — a $6.9B franchise that has not made the playoffs in over a decade, sustained almost entirely by the New York City market, MetLife Stadium's revenue infrastructure, and NFL revenue sharing. The Rodgers era ended as a financial and on-field disappointment. The Justin Fields chapter was shorter. The Jets' core investment thesis rests entirely on the NFL's collective revenue floor and New York market scarcity — not on on-field alpha. A genuine franchise QB would be a 30-40% valuation catalyst in a market this large; the discount for QB uncertainty is arguably the largest in the league."
  },

  // ─── AFC NORTH ───────────────────────────────────────────────────

  "Baltimore Ravens": {
    valuationHistory: [
      { year: 2019, value: 2.5, source: "Forbes" },
      { year: 2020, value: 2.75, source: "Forbes" },
      { year: 2021, value: 3.1, source: "Forbes" },
      { year: 2022, value: 3.9, source: "Forbes" },
      { year: 2023, value: 4.63, source: "Forbes" },
      { year: 2024, value: 6.03, source: "Forbes" },
    ],
    revenue: { estimate: 570, year: 2023, source: "Forbes est.", operatingIncome: 95 },
    transactions: [
      { year: 2004, price: 0.6, buyer: "Steve Bisciotti", seller: "Art Modell", notes: "Bisciotti bought 49% in 2000 for ~$275M then exercised option to buy remaining 51% in 2004; total deal valued at ~$600M" }
    ],
    stadium: {
      name: "M&T Bank Stadium",
      yearBuilt: 1998,
      capacity: 70745,
      ownershipModel: "publicly owned — Maryland Stadium Authority",
      teamOwnsLand: false,
      publicSubsidy: 200,
      privateFinancing: 22,
      namingRightsDeal: "M&T Bank, original 15-year $75M deal (2003), extended through 2037 season; current per-year value undisclosed (~$6M/year est. prior to renewal)",
      nonGameRevenue: "Limited — primarily football and select concerts; $430-489M renovation proposal under negotiation as of 2023-2024",
      newStadiumPlans: "Major renovation (up to ~$489M) under negotiation, with Maryland and Ravens splitting costs; no new build announced"
    },
    media: {
      localTVDeal: null,
      radioPartner: "WBAL 1090 AM / 98 Rock (WIYY)",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Steve Bisciotti",
      ownerNetWorth: "~$5-6B (est.)",
      ownerBackground: "Co-founded Allegis Group (staffing); became minority owner 2000, majority owner 2004 after Art Modell transition",
      acquisitionYear: 2004,
      acquisitionPrice: 0.6,
      currentValuation: 6.03,
      impliedReturn: "~10x in 21 years",
      ownershipGroup: [{ name: "Steve Bisciotti", role: "majority owner", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Allegis Group (staffing/recruiting, private)"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~1.1M", facebook: "~2.5M" },
      merchandiseNotes: "Solid mid-tier; Lamar Jackson driving recent merchandise growth",
      internationalFanbase: null,
      notableSponsorships: ["M&T Bank (stadium naming)", "Under Armour (regional)", "CareFirst BlueCross BlueShield"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchiseQB: "Lamar Jackson — 5yr/$260M extension signed May 2023, $52M AAV, $185M guaranteed",
      starContracts: [
        { player: "Lamar Jackson", position: "QB", aav: 52.0, contractNote: "5yr/$260M (May 2023), runs through 2027" }
      ]
    },
    analystNotes: "The Ravens are the AFC's most structurally sound franchise outside of Kansas City — elite front office, a two-time MVP in his prime, and a defense-first culture that produces playoff appearances with unusual regularity for a mid-market club. The $260M Lamar Jackson deal locked in a generational talent at a price that already looks below-market given the 2024-2025 QB contract inflation. The stadium situation is the key wildcard: M&T Bank is aging and publicly owned, and the renovation negotiation will define whether Baltimore retains a top-tier facility or faces gradual revenue disadvantage versus newer buildings."
  },

  "Cincinnati Bengals": {
    valuationHistory: [
      { year: 2019, value: 1.8, source: "Forbes" },
      { year: 2020, value: 2.0, source: "Forbes" },
      { year: 2021, value: 2.2, source: "Forbes" },
      { year: 2022, value: 3.0, source: "Forbes" },
      { year: 2023, value: 3.5, source: "Forbes" },
      { year: 2024, value: 5.25, source: "Forbes" },
    ],
    revenue: { estimate: 498, year: 2023, source: "Forbes", operatingIncome: 70 },
    transactions: [],
    stadium: {
      name: "Paycor Stadium",
      yearBuilt: 2000,
      capacity: 65515,
      ownershipModel: "publicly owned — Hamilton County",
      teamOwnsLand: false,
      publicSubsidy: 555,
      privateFinancing: 25,
      namingRightsDeal: "Paycor HCM, 16-year deal signed Aug 2022, total $66.7M (~$4.16M/year); replaces Paul Brown Stadium name",
      nonGameRevenue: "Limited — Hamilton County lease structure historically disadvantaged team on event revenue",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: null,
      radioPartner: "ESPN 1530 WCKY",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Mike Brown (Brown family)",
      ownerNetWorth: "~$3-4B (est.)",
      ownerBackground: "Son of franchise founder Paul Brown; team has been family-owned since 1968; Mike Brown assumed control after Paul Brown's death in 1991",
      acquisitionYear: 1991,
      acquisitionPrice: null,
      currentValuation: 5.25,
      impliedReturn: null,
      ownershipGroup: [{ name: "Brown family (Mike Brown, Katie Blackburn, et al.)", role: "majority", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "No major disclosed outside interests"
    },
    brand: {
      socialMedia: { instagram: "~900K", twitter: "~700K", facebook: "~1.4M" },
      merchandiseNotes: "Super Bowl LVI run (2022) produced a major merchandise spike; Joe Burrow and Ja'Marr Chase sustaining above-historic-average engagement",
      internationalFanbase: null,
      notableSponsorships: ["Paycor HCM (stadium naming)", "Great American Insurance", "Procter & Gamble"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchiseQB: "Joe Burrow — 5yr/$275M extension signed Sept 2023, $55M AAV, $219M guaranteed",
      starContracts: [
        { player: "Joe Burrow", position: "QB", aav: 55.0, contractNote: "5yr/$275M (Sept 2023), runs through 2028" },
        { player: "Ja'Marr Chase", position: "WR", aav: null, contractNote: "Extension expected; one of NFL's top WR assets" }
      ]
    },
    analystNotes: "The Bengals are the NFL's most compelling valuation gap story. For three consecutive years (2022-2024) Forbes ranked them last in the league, yet they went to a Super Bowl and two AFC Championship games on the back of a generational QB-WR pairing. The $1.35B jump in valuation from 2023 to 2024 signals the market is finally repricing the franchise on its talent base rather than its small market and frugal ownership history. Burrow's $55M AAV locked in before the QB market reset to $60M+ looks prescient — but only if the surrounding roster is maintained."
  },

  "Cleveland Browns": {
    valuationHistory: [
      { year: 2019, value: 2.175, source: "Forbes" },
      { year: 2020, value: 2.35, source: "Forbes" },
      { year: 2021, value: 2.575, source: "Forbes" },
      { year: 2022, value: 3.725, source: "Forbes" },
      { year: 2023, value: 4.62, source: "Forbes" },
      { year: 2024, value: 6.02, source: "Forbes" },
    ],
    revenue: { estimate: 540, year: 2023, source: "Forbes est.", operatingIncome: 80 },
    transactions: [
      { year: 2012, price: 1.05, buyer: "Jimmy and Dee Haslam", seller: "Randy Lerner", notes: "Arm's-length sale; approved by NFL owners Oct 2012" }
    ],
    stadium: {
      name: "Huntington Bank Field",
      yearBuilt: 1999,
      capacity: 67895,
      ownershipModel: "publicly owned — City of Cleveland",
      teamOwnsLand: false,
      publicSubsidy: 283,
      privateFinancing: null,
      namingRightsDeal: "Huntington Bank, 20-year deal announced Sept 2024; financial terms undisclosed; naming rights follow team to any new stadium",
      nonGameRevenue: "Limited — primarily NFL; renovation or replacement under active planning",
      newStadiumPlans: "New domed stadium planned in Brook Park near Cleveland Hopkins Airport, targeting 2029 opening; Haslams seeking public-private financing; city offered ~$550M toward ~$1.1B proposal"
    },
    media: {
      localTVDeal: null,
      radioPartner: "92.3 The Fan (WKRK-FM)",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Jimmy and Dee Haslam",
      ownerNetWorth: "~$5-6B (est.)",
      ownerBackground: "Jimmy Haslam is CEO of Pilot Flying J (truck stop chain); acquired Browns in 2012; also own Columbus Crew (MLS) and minority stake in Milwaukee Bucks (NBA)",
      acquisitionYear: 2012,
      acquisitionPrice: 1.05,
      currentValuation: 6.02,
      impliedReturn: "~5.7x in 13 years",
      ownershipGroup: [
        { name: "Jimmy Haslam", role: "managing principal", pct: null },
        { name: "Dee Haslam", role: "principal partner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Pilot Flying J (truck stops/travel centers), Columbus Crew (MLS), Milwaukee Bucks (NBA minority stake)"
    },
    brand: {
      socialMedia: { instagram: "~1M", twitter: "~800K", facebook: "~2.5M" },
      merchandiseNotes: "Deshaun Watson signing produced short-lived merchandise bump; fanbase resilient despite sustained losing",
      internationalFanbase: null,
      notableSponsorships: ["Huntington Bank (stadium naming)", "Sherwin-Williams"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Deshaun Watson — 5yr/$230M fully guaranteed signed 2022, $46M AAV; has missed extensive time due to injury and suspension; contract a significant cap liability",
      starContracts: [
        { player: "Deshaun Watson", position: "QB", aav: 46.0, contractNote: "5yr/$230M (2022), fully guaranteed; runs through 2026; extensive cap dead money exposure" }
      ]
    },
    analystNotes: "The Browns' valuation appreciation from $1.05B to $6B in 13 years is a textbook NFL ownership ROI story — but the current picture is complicated by the most scrutinized contract in modern NFL history. Deshaun Watson's 5yr/$230M fully guaranteed deal has produced one of the worst QB efficiency outcomes per dollar committed in the salary cap era. The new domed stadium in Brook Park is the franchise's genuine value-creation lever: an indoor venue in a market with harsh winters, adjacent to an international airport, could transform Cleveland's revenue ceiling. The Watson contract expires after 2026 — that is the actual reset date for this franchise."
  },

  "Pittsburgh Steelers": {
    valuationHistory: [
      { year: 2019, value: 2.8, source: "Forbes" },
      { year: 2020, value: 3.1, source: "Forbes" },
      { year: 2021, value: 3.45, source: "Forbes" },
      { year: 2022, value: 3.975, source: "Forbes" },
      { year: 2023, value: 4.63, source: "Forbes" },
      { year: 2024, value: 6.08, source: "Forbes" },
    ],
    revenue: { estimate: 548, year: 2023, source: "Forbes", operatingIncome: 96 },
    transactions: [],
    stadium: {
      name: "Acrisure Stadium",
      yearBuilt: 2001,
      capacity: 68400,
      ownershipModel: "publicly owned — Sports & Exhibition Authority of Pittsburgh and Allegheny County",
      teamOwnsLand: false,
      publicSubsidy: 171,
      privateFinancing: 110,
      namingRightsDeal: "Acrisure (insurance brokerage), 15-year deal signed July 2022; ~$10-12M/year (est.); replaces Heinz Field name after 21 years",
      nonGameRevenue: "Pitt Panthers football, concerts; limited versus newer NFL venues",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: null,
      radioPartner: "WDVE 102.5 FM",
      streamingNotes: "Standard NFL package",
      nationalShareNote: "~$340M/year from NFL national deal (2023-2033)"
    },
    ownership: {
      primaryOwner: "Rooney family (Art Rooney II, president)",
      ownerNetWorth: "~$1-2B (est., family collective)",
      ownerBackground: "Art Rooney Sr. founded franchise in 1933 for $2,500; family has maintained majority ownership for 90+ years through three generations",
      acquisitionYear: 1933,
      acquisitionPrice: 0.0025,
      currentValuation: 6.08,
      impliedReturn: "Immeasurable — 90+ year hold",
      ownershipGroup: [
        { name: "Rooney family", role: "majority", pct: null },
        { name: "Thomas Tull", role: "minority investor", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "No major disclosed outside sports interests"
    },
    brand: {
      socialMedia: { instagram: "~2M", twitter: "~1.5M", facebook: "~5.8M" },
      merchandiseNotes: "Consistently top-5 NFL merchandise seller; Terrible Towel is one of the most recognizable single merchandise items in professional sports; strong national fanbase outside Pittsburgh metro",
      internationalFanbase: "Strong — disproportionate national following relative to market size; Pittsburgh diaspora drives reach",
      notableSponsorships: ["Acrisure (stadium naming)", "UPMC (healthcare)", "Dollar Bank"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchiseQB: "Aaron Rodgers — 1yr/$13.65M base deal signed June 2025 ($19.5M max with incentives); team holds UFA tender for 2026",
      starContracts: [
        { player: "Aaron Rodgers", position: "QB", aav: 13.65, contractNote: "1yr/$13.65M base (June 2025), up to $19.5M with incentives; 2026 UFA tender in place" }
      ]
    },
    analystNotes: "The Steelers are the NFL's most paradoxical asset: the league's highest fan equity relative to market size — a national brand built on the Rooney dynasty and six Super Bowls — combined with a franchise that has not won a playoff game since 2016. The Aaron Rodgers signing in June 2025 represents a calculated short-term bet on a veteran bridge QB at age 42, with the franchise absorbing real uncertainty about succession beyond 2026. The investment thesis here is not QB optionality; it is the durability of the brand floor. The Terrible Towel travels. No other mid-market NFL franchise has demonstrated comparable national merchandise penetration."
  },

  // ─── AFC SOUTH ───────────────────────────────────────────────────

  "Houston Texans": {
    valuationHistory: [
      { year: 2019, value: 3.3, source: "Forbes" },
      { year: 2020, value: 3.7, source: "Forbes (est.)" },
      { year: 2021, value: 3.3, source: "Forbes" },
      { year: 2022, value: 4.7, source: "Forbes" },
      { year: 2023, value: 5.5, source: "Forbes" },
      { year: 2024, value: 6.01, source: "Forbes" },
    ],
    revenue: { estimate: 663, year: 2023, source: "Forbes", operatingIncome: 195 },
    transactions: [],
    stadium: {
      name: "NRG Stadium",
      yearBuilt: 2002,
      capacity: 72220,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 215,
      privateFinancing: 137,
      namingRightsDeal: { sponsor: "Reliant Energy (NRG Energy 2014-2026, reverting to Reliant)", annualValue_M: 10, totalValue_M: 300, expiryYear: 2032, notes: "Original 30-year, $300M deal signed 2000; stadium renamed back to Reliant Stadium starting 2026 season" },
      nonGameRevenue: "Rodeo Houston (20-day annual tenancy), concerts, college football bowl games",
      newStadiumPlans: "As of May 2026, Cal McNair committed to staying at NRG Park site; renovation vs. new build under discussion with Harris County"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Cal McNair",
      ownerNetWorth: "~$5B (Forbes est.)",
      ownerBackground: "Son of founder Bob McNair; real estate and energy background via Palmetto Partners; became principal owner March 2024",
      acquisitionYear: 1999,
      acquisitionPrice: 0.60,
      currentValuation: 6.01,
      impliedReturn: "~10x on $600M entry over 25 years",
      ownershipGroup: [{ name: "Cal McNair", role: "principal owner / chairman", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Palmetto Partners (real estate / private equity)"
    },
    brand: {
      socialMedia: { instagram: "@houstontexans", twitter: "@HoustonTexans", facebook: "HoustonTexans" },
      merchandiseNotes: "Mid-tier NFL merchandise; benefiting from CJ Stroud breakout 2023 season driving jersey sales",
      internationalFanbase: null,
      notableSponsorships: ["Reliant/NRG (stadium title)", "Halliburton", "United Airlines"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "C.J. Stroud",
      starContracts: [{ player: "C.J. Stroud", position: "QB", aav: 9.1, contractNote: "4-year, $36.3M rookie deal (2023 draft, #2 overall); extension negotiations expected 2025-26" }]
    },
    analystNotes: "The Texans represent a rare combination of a blue-chip NFL market (4th-largest U.S. metro), a nascent on-field identity under Stroud, and a stadium situation that will define the franchise's valuation ceiling over the next decade. NRG Stadium's publicly-owned structure caps non-game day revenue relative to team-owned venues, but a favorable renovation or replacement deal with Harris County could meaningfully close the gap to peers."
  },

  "Indianapolis Colts": {
    valuationHistory: [
      { year: 2019, value: 2.85, source: "Forbes" },
      { year: 2020, value: 2.85, source: "Forbes" },
      { year: 2021, value: 2.90, source: "Forbes" },
      { year: 2022, value: 3.80, source: "Forbes" },
      { year: 2023, value: 4.35, source: "Forbes (est.)" },
      { year: 2024, value: 4.99, source: "Forbes" },
    ],
    revenue: { estimate: 591, year: 2023, source: "Forbes", operatingIncome: 101 },
    transactions: [],
    stadium: {
      name: "Lucas Oil Stadium",
      yearBuilt: 2008,
      capacity: 67000,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 620,
      privateFinancing: 100,
      namingRightsDeal: { sponsor: "Lucas Oil Products", annualValue_M: 6.1, totalValue_M: 122, expiryYear: 2027, notes: "20-year deal signed 2006 for $122M total; expires ~2026-2027; renewal negotiations ongoing" },
      nonGameRevenue: "NCAA Final Four, Big Ten Championship, major concerts; tied to Indiana Convention Center expansion",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Irsay family (Carlie Irsay-Gordon, Kalen Jackson, Casey Foyt)",
      ownerNetWorth: "~$3B combined (Forbes est.)",
      ownerBackground: "Jim Irsay (d. 2024) inherited franchise from father Robert Irsay in 1997; three daughters now operate as co-owners",
      acquisitionYear: 1972,
      acquisitionPrice: 0.019,
      currentValuation: 4.99,
      impliedReturn: "Compounding over 50+ years of family ownership",
      ownershipGroup: [
        { name: "Carlie Irsay-Gordon", role: "co-owner", pct: null },
        { name: "Kalen Jackson", role: "co-owner / vice chair", pct: null },
        { name: "Casey Foyt", role: "co-owner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Family trust interests"
    },
    brand: {
      socialMedia: { instagram: "@colts", twitter: "@Colts", facebook: "Colts" },
      merchandiseNotes: "Mid-market Midwest franchise; Anthony Richardson jersey sales emerging",
      internationalFanbase: null,
      notableSponsorships: ["Lucas Oil (stadium title)", "Caesars Sportsbook (field naming)", "Salesforce"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchiseQB: "Anthony Richardson",
      starContracts: [{ player: "Anthony Richardson", position: "QB", aav: 8.5, contractNote: "4-year, $33.99M rookie deal (2023 draft, #4 overall); 5th-year option declined; free agent after 2026" }]
    },
    analystNotes: "The Colts remain the quietest franchise in the AFC South — solid mid-market economics, public stadium, and no franchise QB anchor. The transition to three-daughter joint ownership creates governance complexity, and the 2026 naming-rights expiration at Lucas Oil represents both a near-term revenue uncertainty and a potential upside catalyst. Richardson's development is the single largest value driver; a breakout season could add $500M+ to implied franchise value within 24 months."
  },

  "Jacksonville Jaguars": {
    valuationHistory: [
      { year: 2019, value: 2.45, source: "Forbes" },
      { year: 2020, value: 2.60, source: "Forbes (est.)" },
      { year: 2021, value: 2.50, source: "Forbes" },
      { year: 2022, value: 3.475, source: "Forbes" },
      { year: 2023, value: 4.05, source: "Forbes (est.)" },
      { year: 2024, value: 4.60, source: "Forbes" },
    ],
    revenue: { estimate: 567, year: 2023, source: "Forbes", operatingIncome: 139 },
    transactions: [
      { year: 2012, price: 0.770, buyer: "Shahid (Shad) Khan", seller: "Wayne Weaver ownership group", notes: "Agreed Nov 2011, approved by NFL Dec 14 2011, closed Jan 4 2012; $770M all-cash arm's-length sale" }
    ],
    stadium: {
      name: "EverBank Stadium",
      yearBuilt: 1995,
      capacity: 69132,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 700,
      privateFinancing: 625,
      namingRightsDeal: { sponsor: "EverBank", annualValue_M: 4.3, totalValue_M: 43, expiryYear: 2027, notes: "Original 10-year, $43M deal; extended 3 years through end of 2027 season; stadium to re-open 2028" },
      nonGameRevenue: "Florida-Georgia football game (annual); concerts; will expand significantly post-2028 renovation",
      newStadiumPlans: "$1.4B 'Stadium of the Future' renovation (City $625M + Jaguars $625M + $150M maintenance); approved Oct 2024; re-opens 2028; Jaguars playing 2027 home games in Orlando"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Shahid (Shad) Khan",
      ownerNetWorth: "~$14.3B (Forbes 2025)",
      ownerBackground: "Pakistani-American billionaire; founder/majority owner of Flex-N-Gate (auto parts); also owns Fulham AFC (English Premier League)",
      acquisitionYear: 2012,
      acquisitionPrice: 0.770,
      currentValuation: 4.60,
      impliedReturn: "~6x on $770M entry in 12 years",
      ownershipGroup: [
        { name: "Shad Khan", role: "majority owner", pct: null },
        { name: "Tony Khan", role: "president / minority", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Flex-N-Gate Corporation (auto manufacturing); Fulham AFC (English Premier League); All Elite Wrestling (AEW)"
    },
    brand: {
      socialMedia: { instagram: "@jaguars", twitter: "@Jaguars", facebook: "Jaguars" },
      merchandiseNotes: "Small-market franchise; Trevor Lawrence jersey among top sellers nationally after 2022-23 breakout",
      internationalFanbase: "International Series games in London (Wembley); established UK fanbase",
      notableSponsorships: ["EverBank (stadium title)", "Baptist Health", "FanDuel"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "Trevor Lawrence",
      starContracts: [{ player: "Trevor Lawrence", position: "QB", aav: 55.0, contractNote: "5-year, $275M extension (2024); $200M guaranteed; signed through 2029 season" }]
    },
    analystNotes: "Jacksonville is the most compelling optionality story in the AFC South: the $770M Khan acquisition now sits at ~$4.6B (6x in 12 years) yet Jacksonville remains one of the league's smallest markets. The Stadium of the Future renovation is a genuine value catalyst — the $1.4B project converts a 1995 facility into a modern mixed-use venue opening 2028, with Khan absorbing all cost overruns. Lawrence's $55M AAV cap drag is the primary near-term margin headwind against that constructive long-term thesis."
  },

  "Tennessee Titans": {
    valuationHistory: [
      { year: 2019, value: 2.30, source: "Forbes" },
      { year: 2020, value: 2.45, source: "Forbes (est.)" },
      { year: 2021, value: 2.30, source: "Forbes" },
      { year: 2022, value: 3.50, source: "Forbes" },
      { year: 2023, value: 4.37, source: "Forbes" },
      { year: 2024, value: 6.01, source: "Forbes (CNBC)" },
    ],
    revenue: { estimate: 561, year: 2023, source: "Forbes", operatingIncome: 123 },
    transactions: [],
    stadium: {
      name: "Nissan Stadium (current, 1999) → New Nissan Stadium (2027)",
      yearBuilt: 1999,
      capacity: 69143,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 1260,
      privateFinancing: 840,
      namingRightsDeal: { sponsor: "Nissan North America", annualValue_M: null, totalValue_M: null, expiryYear: 2047, notes: "20-year naming rights for new stadium announced Nov 2023; continues Nissan relationship since 2015; financial terms undisclosed" },
      nonGameRevenue: "Tennessee State University football; SEC and college events; concerts; new stadium targets concerts, MLS expansion, Super Bowl bids",
      newStadiumPlans: "New enclosed $2.1B Nissan Stadium under construction on East Bank of Cumberland River; on track for Feb 2027 completion; 60,000 seats; largest public stadium subsidy in U.S. history ($1.26B public)"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Amy Adams Strunk",
      ownerNetWorth: "~$2B (Forbes est.)",
      ownerBackground: "Daughter of founder Bud Adams; became controlling owner March 2015; family bought out sister Susie Adams Smith's 33% in Dec 2020",
      acquisitionYear: 1959,
      acquisitionPrice: 0.000025,
      currentValuation: 6.01,
      impliedReturn: "Compounding over 65+ years of family ownership",
      ownershipGroup: [
        { name: "Amy Adams Strunk", role: "controlling owner / chairman", pct: 50 },
        { name: "Kenneth Adams, Barclay Adams, Susan Lewis (collective)", role: "minority", pct: 50 }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "KSA Industries (family holding company)"
    },
    brand: {
      socialMedia: { instagram: "@tennesseetitans", twitter: "@Titans", facebook: "TennesseeTitans" },
      merchandiseNotes: "Mid-market franchise; limited national merchandise profile; new stadium expected to accelerate brand visibility",
      internationalFanbase: null,
      notableSponsorships: ["Nissan (stadium title)", "Pinnacle Financial Partners", "Tennessee Tourism"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Will Levis",
      starContracts: [{ player: "Will Levis", position: "QB", aav: 2.4, contractNote: "4-year, $9.54M rookie deal (2023 draft, #33 overall 2nd round); 5th-year option available 2027" }]
    },
    analystNotes: "The Titans' valuation jumped 26% in 2023 — the largest single-year gain in the NFL — almost entirely driven by the state and Metro Nashville approving the $2.1B new stadium deal, the largest public sports subsidy in U.S. history. The new enclosed venue, opening 2027, converts a revenue-capped publicly-owned outdoor facility into a year-round premium entertainment asset with Super Bowl and Final Four hosting capability. The primary valuation risk is a protracted rebuild at QB — Levis's development trajectory will determine whether Nashville's rising market tailwinds translate into premium ticket pricing and sponsorship yield."
  },

  // ─── AFC WEST ────────────────────────────────────────────────────

  "Denver Broncos": {
    valuationHistory: [
      { year: 2019, value: 3.20, source: "Forbes" },
      { year: 2020, value: 3.20, source: "Forbes (est.)" },
      { year: 2021, value: 3.75, source: "Forbes" },
      { year: 2022, value: 4.65, source: "Forbes" },
      { year: 2023, value: 5.10, source: "Forbes" },
      { year: 2024, value: 6.20, source: "Forbes (CNBC)" },
    ],
    revenue: { estimate: 608, year: 2023, source: "Forbes", operatingIncome: 114 },
    transactions: [
      { year: 2022, price: 4.65, buyer: "Walton-Penner Family Ownership Group (led by Rob Walton)", seller: "Bowlen family trust / Pat Bowlen estate", notes: "Agreement June 2022; NFL approved Aug 10, 2022; $4.65B — then-record price for any North American sports franchise" }
    ],
    stadium: {
      name: "Empower Field at Mile High",
      yearBuilt: 2001,
      capacity: 76125,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 249,
      privateFinancing: 115,
      namingRightsDeal: { sponsor: "Empower Retirement (Great-West Life & Annuity)", annualValue_M: 6.2, totalValue_M: 130, expiryYear: 2040, notes: "21-year deal announced Sep 2019; ~$125-130M total; paid to MFSD not directly to the Broncos" },
      nonGameRevenue: "Concerts, international soccer, college football; MFSD exploring mixed-use redevelopment of stadium grounds",
      newStadiumPlans: "$4B new stadium at Burnham Yard site in Denver advancing; targeting 2031 opening; financing and public subsidy structure TBD"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Greg Penner (CEO) / Rob Walton (chairman)",
      ownerNetWorth: "Rob Walton ~$60B (Forbes); Walton-Penner family collectively among wealthiest NFL owners",
      ownerBackground: "Rob Walton is heir to Walmart fortune; daughter Carrie Walton Penner and son-in-law Greg Penner serve as active operators; ownership group includes Condoleezza Rice, Mellody Hobson, Lewis Hamilton",
      acquisitionYear: 2022,
      acquisitionPrice: 4.65,
      currentValuation: 6.20,
      impliedReturn: "~33% in ~2 years on $4.65B entry",
      ownershipGroup: [
        { name: "Rob Walton", role: "chairman", pct: null },
        { name: "Greg Penner", role: "CEO / controlling owner", pct: null },
        { name: "Carrie Walton Penner", role: "co-owner", pct: null },
        { name: "Mellody Hobson", role: "limited partner", pct: null },
        { name: "Condoleezza Rice", role: "limited partner", pct: null },
        { name: "Lewis Hamilton", role: "limited partner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Walmart (Walton family); investment holdings (Penner); F1 racing (Hamilton)"
    },
    brand: {
      socialMedia: { instagram: "@broncos", twitter: "@Broncos", facebook: "DenverBroncos" },
      merchandiseNotes: "Strong legacy brand from Elway/Peyton Manning Super Bowl eras; merchandise recovering as Bo Nix develops",
      internationalFanbase: null,
      notableSponsorships: ["Empower (stadium title)", "United Airlines", "Xfinity", "Coors Light"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchiseQB: "Bo Nix",
      starContracts: [{ player: "Bo Nix", position: "QB", aav: 4.7, contractNote: "4-year, $18.6M rookie deal fully guaranteed (2024 draft, #12 overall); Spotrac market projection ~$53.4M AAV on extension" }]
    },
    analystNotes: "The $4.65B Walton-Penner acquisition in 2022 — then the most expensive North American sports franchise ever sold — has already appreciated ~33% to ~$6.2B, validating both the NFL asset class premium and the Walton family's ability to pay through the market. The franchise's value ceiling is constrained by Empower Field's publicly-owned structure and the Broncos' weakest on-field record of any major market team since 2016; a new $4B stadium at Burnham Yard would be the single largest value-creation lever available to the new ownership group."
  },

  "Kansas City Chiefs": {
    valuationHistory: [
      { year: 2019, value: 2.50, source: "Forbes" },
      { year: 2020, value: 2.50, source: "Forbes" },
      { year: 2021, value: 2.93, source: "Forbes" },
      { year: 2022, value: 3.70, source: "Forbes" },
      { year: 2023, value: 4.30, source: "Forbes" },
      { year: 2024, value: 4.85, source: "Forbes" },
    ],
    revenue: { estimate: 591, year: 2023, source: "Forbes", operatingIncome: 115 },
    transactions: [],
    stadium: {
      name: "GEHA Field at Arrowhead Stadium",
      yearBuilt: 1972,
      capacity: 76416,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 250,
      privateFinancing: 125,
      namingRightsDeal: { sponsor: "GEHA (Government Employees Health Association)", annualValue_M: null, totalValue_M: null, expiryYear: 2031, notes: "10-year deal announced March 2021; expires Jan 2031 coinciding with lease expiration; terms undisclosed" },
      nonGameRevenue: "Limited; Arrowhead is primarily a single-use NFL venue",
      newStadiumPlans: "Dec 2025: Chiefs announced intent to build new $3B stadium in Wyandotte County, Kansas; $1.8B public subsidy (Kansas STAR Bond legislation); target opening 2031"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Clark Hunt (chairman & CEO)",
      ownerNetWorth: "Hunt family ~$24.8B (Forbes 2024)",
      ownerBackground: "Clark Hunt is son of founder Lamar Hunt and grandson of oil tycoon H.L. Hunt; Clark named chairman 2005, CEO 2010; four Lamar Hunt children each hold ownership stakes",
      acquisitionYear: 1960,
      acquisitionPrice: 0.000025,
      currentValuation: 4.85,
      impliedReturn: "Compounding over 65+ years of family ownership",
      ownershipGroup: [
        { name: "Clark Hunt", role: "chairman / CEO", pct: null },
        { name: "Lamar Hunt Jr.", role: "partner", pct: null },
        { name: "Sharron Hunt", role: "partner", pct: null },
        { name: "Daniel Hunt", role: "partner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Hunt Oil Company; FC Dallas (MLS); Columbus Crew (MLS)"
    },
    brand: {
      socialMedia: { instagram: "@kansascitychiefs", twitter: "@Chiefs", facebook: "KansasCityChiefs" },
      merchandiseNotes: "Among the top 3 NFL merchandise brands since 2019; Mahomes and Swift-effect driving record jersey sales and mainstream crossover audience",
      internationalFanbase: "Significant global fanbase driven by Taylor Swift media coverage 2023-24; International Series appearances",
      notableSponsorships: ["GEHA (stadium field title)", "T-Mobile", "Walmart"]
    },
    onField: {
      championshipsLast10Years: 4,
      playoffAppearancesLast5Years: 5,
      currentFranchiseQB: "Patrick Mahomes",
      starContracts: [{ player: "Patrick Mahomes", position: "QB", aav: 45.0, contractNote: "10-year, $450M extension signed July 2020; restructured multiple times; effectively runs through 2031 season" }]
    },
    analystNotes: "The Chiefs represent the NFL's most perplexing valuation anomaly: four Super Bowl wins in six seasons, the league's most recognizable active player (Mahomes), and a mainstream cultural moment (Swift effect) have driven brand value that Forbes consistently under-prices relative to on-field dominance. The persistent discount is explained by Arrowhead's aging publicly-owned infrastructure, smaller market revenue base, and Mahomes' $45M AAV limiting operating income. The new $3B Kansas City stadium — with $1.8B in public subsidy — is poised to close that gap structurally by 2031-2032."
  },

  "Las Vegas Raiders": {
    valuationHistory: [
      { year: 2019, value: 3.10, source: "Forbes" },
      { year: 2020, value: 3.10, source: "Forbes (est.)" },
      { year: 2021, value: 3.415, source: "Forbes" },
      { year: 2022, value: 5.10, source: "Forbes" },
      { year: 2023, value: 6.20, source: "Forbes" },
      { year: 2024, value: 6.70, source: "Forbes" },
    ],
    revenue: { estimate: 779, year: 2023, source: "Forbes", operatingIncome: 115 },
    transactions: [
      { year: 2024, price: null, buyer: "Tom Brady & Tom Wagner (combined 10% stake)", seller: "Mark Davis", notes: "Oct 2024; Brady & Wagner paid ~$220M for combined 10% stake; ~$6.5B implied valuation" },
      { year: 2024, price: null, buyer: "Michael Meldman & Shari Redstone group (15% stake)", seller: "Mark Davis", notes: "Dec 2024; 15% sold at ~$6.5B implied team valuation" }
    ],
    stadium: {
      name: "Allegiant Stadium",
      yearBuilt: 2020,
      capacity: 65000,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 750,
      privateFinancing: 1100,
      namingRightsDeal: { sponsor: "Allegiant Travel Company (Allegiant Air)", annualValue_M: 22.5, totalValue_M: 650, expiryYear: 2050, notes: "30-year deal announced Aug 2019; estimated $20M-$25M/year; paid partially to Raiders, partially to stadium authority" },
      nonGameRevenue: "Las Vegas entertainment market: concerts, boxing, UFC, college football (Las Vegas Bowl), Super Bowl LVIII (2024); $549M in PSL sales pre-opening; top NFL gate receipts since opening",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Mark Davis",
      ownerNetWorth: "~$500M (Forbes est., excluding Raiders stake)",
      ownerBackground: "Son of Raiders founder Al Davis; inherited franchise in 2011; Davis is the least wealthy majority owner in the NFL; has been selling minority stakes to fund operations",
      acquisitionYear: 1972,
      acquisitionPrice: null,
      currentValuation: 6.70,
      impliedReturn: "Compounding over 50+ years; Davis inherited",
      ownershipGroup: [
        { name: "Mark Davis", role: "majority owner / managing general partner", pct: null },
        { name: "Tom Brady", role: "limited partner", pct: null },
        { name: "Tom Wagner", role: "limited partner", pct: null },
        { name: "Michael Meldman", role: "limited partner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Davis is primarily a Raiders-focused owner"
    },
    brand: {
      socialMedia: { instagram: "@raiders", twitter: "@Raiders", facebook: "Raiders" },
      merchandiseNotes: "Historic outlaw brand with national following disproportionate to market; Las Vegas relocation revitalized merchandise and apparel sales; Raiders remain top-10 NFL merchandise brands",
      internationalFanbase: "Significant fanbase in Mexico City; played International Series games in Mexico",
      notableSponsorships: ["Allegiant (stadium title)", "Circa Sports", "MGM Resorts", "Bud Light"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Geno Smith",
      starContracts: [{ player: "Geno Smith", position: "QB", aav: null, contractNote: "Acquired as bridge starter for 2025 season; franchise QB identity unresolved post-Carr departure" }]
    },
    analystNotes: "The Las Vegas relocation from Oakland is the NFL's most unambiguous stadium-driven value creation story of the past decade: valuation jumped from $3.1B to $6.7B between 2019 and 2024 — +116% — almost entirely attributable to Allegiant Stadium's $779M revenue generation and Las Vegas's entertainment market premium. The Brady minority stake and Meldman/Redstone stake at ~$6.5B implied valuation confirm market-clearing prices near Forbes estimates. A competent QB upgrade in 2025-26 could push valuation toward $8B+ given the revenue infrastructure already in place."
  },

  "Los Angeles Chargers": {
    valuationHistory: [
      { year: 2019, value: 2.60, source: "Forbes" },
      { year: 2020, value: 2.60, source: "Forbes (est.)" },
      { year: 2021, value: 2.90, source: "Forbes (est.)" },
      { year: 2022, value: 3.875, source: "Forbes" },
      { year: 2023, value: 4.15, source: "Forbes" },
      { year: 2024, value: 5.83, source: "Forbes (CNBC)" },
    ],
    revenue: { estimate: 518, year: 2022, source: "Forbes", operatingIncome: 65 },
    transactions: [
      { year: 2024, price: null, buyer: "Tom Gores (Pistons owner)", seller: "Dea Berberian (née Spanos)", notes: "Gores paid ~$750M for ~27% stake; NFL approved 2024; resolves Spanos family sibling dispute" }
    ],
    stadium: {
      name: "SoFi Stadium",
      yearBuilt: 2020,
      capacity: 70240,
      ownershipModel: "leased",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 200,
      namingRightsDeal: { sponsor: "SoFi Technologies", annualValue_M: 20, totalValue_M: 400, expiryYear: 2039, notes: "Deal is between SoFi and Kroenke's Hollywood Park entity; Chargers do not receive naming rights revenue; Rams control ~85% of stadium revenue per lease" },
      nonGameRevenue: "Chargers do not meaningfully participate in SoFi non-game revenue (Kroenke retains); Chargers pay $1/year in rent but have unfavorable revenue-sharing",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Dean Spanos (principal owner) / Tom Gores (27% limited partner as of 2024)",
      ownerNetWorth: "Dean Spanos ~$1.1B (Forbes est.); Tom Gores ~$7B",
      ownerBackground: "Alex Spanos acquired 60% of San Diego Chargers for $48.3M in 1984; Dean Spanos took over operations in 1994; 2024 sale of 27% to Tom Gores resolved years of Spanos sibling ownership disputes",
      acquisitionYear: 1984,
      acquisitionPrice: 0.0483,
      currentValuation: 5.83,
      impliedReturn: "Compounding over 40 years of family ownership",
      ownershipGroup: [
        { name: "Spanos family (Dean, Michael, Alexandria)", role: "majority controlling group", pct: null },
        { name: "Tom Gores", role: "limited partner 27%", pct: 27 }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "A.G. Spanos Companies (real estate development); Tom Gores: Detroit Pistons (NBA), Platinum Equity (PE firm)"
    },
    brand: {
      socialMedia: { instagram: "@chargers", twitter: "@Chargers", facebook: "Chargers" },
      merchandiseNotes: "Historically strong brand in San Diego; Los Angeles identity still developing post-2017 relocation; Justin Herbert jersey among top sellers nationally",
      internationalFanbase: null,
      notableSponsorships: ["SoFi (stadium title — flows to Kroenke)", "Acrisure", "Ticketmaster"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "Justin Herbert",
      starContracts: [{ player: "Justin Herbert", position: "QB", aav: 52.5, contractNote: "5-year, $262.5M extension signed 2023; $218.7M guaranteed; through 2029 season" }]
    },
    analystNotes: "The Chargers are the NFL's most structurally disadvantaged franchise relative to their market: playing in the world's most expensive stadium in the second-largest U.S. market yet receiving only a fraction of non-game stadium revenue under their tenant arrangement with Kroenke — the Rams capture ~85% of SoFi's ancillary economics. This structural disadvantage explains why the Chargers consistently rank 25th-27th in valuations despite an LA market that should support top-10 franchise value. The Tom Gores minority investment provides an implicit option on future control; an arm's-length control transfer could reprice the franchise significantly above current Forbes estimates."
  },

  // ─── NFC EAST ────────────────────────────────────────────────────

  "Dallas Cowboys": {
    valuationHistory: [
      { year: 2019, value: 5.0, source: "Forbes" },
      { year: 2020, value: 5.7, source: "Forbes" },
      { year: 2021, value: 6.5, source: "Forbes" },
      { year: 2022, value: 8.0, source: "Forbes" },
      { year: 2023, value: 9.2, source: "Forbes" },
      { year: 2024, value: 10.1, source: "Forbes" },
    ],
    revenue: { estimate: 1100, year: 2023, source: "Forbes", operatingIncome: 350 },
    transactions: [],
    stadium: {
      name: "AT&T Stadium",
      yearBuilt: 2009,
      capacity: 80000,
      ownershipModel: "publicly-owned facility, team-operated",
      teamOwnsLand: false,
      publicSubsidy: 325,
      privateFinancing: 675,
      namingRightsDeal: "AT&T, ~$17-19M/year, expires ~2029",
      nonGameRevenue: "Super Bowls, College Football Playoff, FIFA World Cup 2026, major concerts",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: "105.3 The Fan (KRLD-FM)", streamingNotes: "Cowboys among most-featured teams on national broadcasts", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Jerry Jones",
      ownerNetWorth: "~$10-12B (est.)",
      ownerBackground: "Oil and gas executive; bought Cowboys in 1989 for $140M, also serves as GM",
      acquisitionYear: 1989,
      acquisitionPrice: 0.14,
      currentValuation: 10.1,
      impliedReturn: "~72x in 35 years",
      ownershipGroup: [{ name: "Jerry Jones", role: "majority owner & GM", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Oil and gas (Jones Energy)"
    },
    brand: {
      socialMedia: { instagram: "~4M", twitter: "~2.5M", facebook: "~10M" },
      merchandiseNotes: "Consistently #1 or #2 in NFL merchandise sales",
      internationalFanbase: "Strong global brand, particularly in Mexico",
      notableSponsorships: ["AT&T (stadium naming)", "Bank of America", "PepsiCo", "Nike"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchiseQB: "Dak Prescott — 4yr/$240M extension signed Sept 2024, $60M AAV, $231M guaranteed",
      starContracts: [{ player: "Dak Prescott", position: "QB", aav: 60.0, contractNote: "4yr/$240M (2024), runs through 2028" }]
    },
    analystNotes: "The Cowboys are the NFL's only true global brand — $10B+ valuation on zero Super Bowls since 1995 is the definitive proof that Jerry Jones' 35-year media strategy and primetime slot accumulation create franchise value independent of the scoreboard. The analogue isn't other NFL teams; it's the Yankees."
  },

  "New York Giants": {
    valuationHistory: [
      { year: 2019, value: 3.9, source: "Forbes" },
      { year: 2020, value: 4.3, source: "Forbes" },
      { year: 2021, value: 4.85, source: "Forbes" },
      { year: 2022, value: 6.0, source: "Forbes" },
      { year: 2023, value: 6.8, source: "Forbes" },
      { year: 2024, value: 7.8, source: "Forbes" },
    ],
    revenue: { estimate: 620, year: 2023, source: "Forbes", operatingIncome: 185 },
    transactions: [],
    stadium: {
      name: "MetLife Stadium",
      yearBuilt: 2010,
      capacity: 82500,
      ownershipModel: "privately financed, co-owned by Giants and Jets",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 1600,
      namingRightsDeal: "MetLife Insurance, ~$17-20M/year, 25-year deal signed 2011, expires ~2036",
      nonGameRevenue: "Shared with Jets; Super Bowls, concerts, FIFA World Cup 2026 Final",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: "WFAN 660 AM / 101.9 FM", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "John Mara (president/CEO) & Steve Tisch (chairman/EVP)",
      ownerNetWorth: "Mara family est. ~$1-2B; Tisch family est. ~$2-3B",
      ownerBackground: "Mara family has owned 50% since Wellington Mara era; Tisch family bought 50% from Tim Mara in 1991 for est. $75M",
      acquisitionYear: 1925,
      acquisitionPrice: 0.0005,
      currentValuation: 7.8,
      impliedReturn: "N/A — multi-generational family ownership",
      ownershipGroup: [
        { name: "John Mara", role: "president, CEO, 50% ownership (Mara family)", pct: 50 },
        { name: "Steve Tisch", role: "chairman, EVP, 50% ownership (Tisch family)", pct: 50 }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Tisch family: Loews Corporation, hospitality, entertainment"
    },
    brand: {
      socialMedia: { instagram: "~2M", twitter: "~1.5M", facebook: "~5M" },
      merchandiseNotes: "Mid-tier NFL merchandise sales; brand has lost share during sustained losing seasons",
      internationalFanbase: "Limited international presence; primarily tri-state area fanbase",
      notableSponsorships: ["MetLife (stadium naming)", "Quest Diagnostics", "Stop & Shop", "Pepsi"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "No established franchise QB as of 2025; Tommy DeVito re-signed on 1-year/$1.03M deal; team actively seeking franchise solution via draft or trade",
      starContracts: []
    },
    analystNotes: "The Giants' $7-8B valuation is almost entirely market- and brand-driven — the NY metro market, MetLife Stadium economics (100% privately financed, co-owned with Jets), and the legacy brand. On-field performance has been irrelevant to the upward valuation trend, which is both reassuring to ownership and damning to fans."
  },

  "Philadelphia Eagles": {
    valuationHistory: [
      { year: 2019, value: 3.05, source: "Forbes" },
      { year: 2020, value: 3.4, source: "Forbes" },
      { year: 2021, value: 3.8, source: "Forbes" },
      { year: 2022, value: 4.9, source: "Forbes" },
      { year: 2023, value: 5.8, source: "Forbes" },
      { year: 2024, value: 6.6, source: "Forbes" },
    ],
    revenue: { estimate: 688, year: 2024, source: "Forbes", operatingIncome: 158 },
    transactions: [
      { year: 1994, price: 0.185, buyer: "Jeffrey Lurie", seller: "Norman Braman", notes: "Lurie paid $185M on May 6, 1994, financed in part with a $190M Bank of Boston loan" }
    ],
    stadium: {
      name: "Lincoln Financial Field",
      yearBuilt: 2003,
      capacity: 67594,
      ownershipModel: "publicly-assisted private construction",
      teamOwnsLand: false,
      publicSubsidy: 188,
      privateFinancing: 330,
      namingRightsDeal: "Lincoln Financial Group, originally $139.6M/21-year deal (2002); extended through 2032 for ~$170M (est. $14-17M/year)",
      nonGameRevenue: "Temple University football, concerts, soccer, Penn Mutual sponsorship events",
      newStadiumPlans: "Stadium revitalization/renovation project underway as of 2024-25"
    },
    media: { localTVDeal: null, radioPartner: "94.1 WIP", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Jeffrey Lurie",
      ownerNetWorth: "~$5.3B (Forbes est.)",
      ownerBackground: "Film producer and businessman; bought Eagles in 1994 for $185M, financed with loan from Bank of Boston",
      acquisitionYear: 1994,
      acquisitionPrice: 0.185,
      currentValuation: 6.6,
      impliedReturn: "~35x in 30 years",
      ownershipGroup: [{ name: "Jeffrey Lurie", role: "majority owner & chairman", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Film production background (Chestnut Hill Productions)"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2M", facebook: "~7M" },
      merchandiseNotes: "Among top 5 in NFL merchandise; Super Bowl LII win (2018) and LIX run (2025) significant brand boosts",
      internationalFanbase: "Growing international presence, particularly in UK",
      notableSponsorships: ["Lincoln Financial Group (stadium naming)", "Pepsi", "Bud Light", "Independence Blue Cross", "Dunkin'"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 4,
      currentFranchiseQB: "Jalen Hurts — 5yr/$255M extension signed April 2023, $51M AAV, $179.3M guaranteed",
      starContracts: [{ player: "Jalen Hurts", position: "QB", aav: 51.0, contractNote: "5yr/$255M (2023), runs through 2028" }]
    },
    analystNotes: "The Eagles are the quintessential mid-large-market franchise that executes well on both the field and in the front office. Lurie's 35x return on his 1994 investment is the NFL standard example of franchise appreciation. The Lincoln Financial naming rights extension and a consistently elite roster make the Eagles a franchise growing into its valuation."
  },

  "Washington Commanders": {
    valuationHistory: [
      { year: 2019, value: 3.4, source: "Forbes" },
      { year: 2020, value: 3.5, source: "Forbes" },
      { year: 2021, value: 4.2, source: "Forbes" },
      { year: 2022, value: 5.6, source: "Forbes" },
      { year: 2023, value: 6.05, source: "Forbes" },
      { year: 2024, value: 6.3, source: "Forbes" },
    ],
    revenue: { estimate: 670, year: 2024, source: "Forbes", operatingIncome: 149 },
    transactions: [
      { year: 2023, price: 6.05, buyer: "Josh Harris group (Harris Blitzer Sports & Entertainment, Mitchell Rales, Magic Johnson et al.)", seller: "Dan Snyder", notes: "Record $6.05B sale approved by NFL owners on July 20, 2023; most ever paid for any sports franchise at time of sale" }
    ],
    stadium: {
      name: "Northwest Stadium (formerly FedEx Field)",
      yearBuilt: 1997,
      capacity: 64000,
      ownershipModel: "privately financed, team-owned",
      teamOwnsLand: true,
      publicSubsidy: 70,
      privateFinancing: 180,
      namingRightsDeal: "Northwest Federal Credit Union, 8-year deal signed Aug 2024, est. >$7.5M/year, runs through 2031 season",
      nonGameRevenue: "Limited; older facility without premium non-NFL programming",
      newStadiumPlans: "New stadium planned at RFK Stadium site in Washington D.C., targeting 2030 opening; pending D.C. Council approvals"
    },
    media: { localTVDeal: null, radioPartner: "ESPN 980 / WTEM", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Josh Harris",
      ownerNetWorth: "~$7B (est.)",
      ownerBackground: "Co-founder Apollo Global Management; also owns Philadelphia 76ers and NJ Devils (Harris Blitzer Sports & Entertainment); purchased Commanders for $6.05B in 2023",
      acquisitionYear: 2023,
      acquisitionPrice: 6.05,
      currentValuation: 6.3,
      impliedReturn: "Slight appreciation post-acquisition; upside hinges on new RFK stadium",
      ownershipGroup: [
        { name: "Josh Harris", role: "managing partner", pct: null },
        { name: "Mitchell Rales", role: "limited partner", pct: null },
        { name: "Magic Johnson", role: "limited partner", pct: null }
      ],
      institutionalInvestors: "Apollo Global Management-affiliated investors in group",
      otherBusinessInterests: "Philadelphia 76ers, New Jersey Devils (HBSE)"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~1M", facebook: "~4M" },
      merchandiseNotes: "Recovering from brand damage under Snyder era; name/identity stabilized as 'Commanders' since 2022",
      internationalFanbase: "Historically strong D.C./mid-Atlantic market; international presence rebuilding",
      notableSponsorships: ["Northwest Federal Credit Union (stadium naming)", "Geico", "Capital One"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Jayden Daniels — 4yr/$37.7M fully guaranteed rookie contract (2024 #2 overall pick), $9.4M AAV; extension-eligible after 2025",
      starContracts: [{ player: "Jayden Daniels", position: "QB", aav: 9.4, contractNote: "4yr/$37.7M rookie deal (2024), fully guaranteed, 5th-year option" }]
    },
    analystNotes: "The $6.05B Harris purchase price at the 2023 sale was simultaneously a record-setter and a value bet — Harris paid a slight premium to the Forbes estimate, betting on the RFK stadium site unlocking massive upside. If the new Washington D.C. stadium deal closes, this acquisition will look prescient. If it stalls, Harris overpaid for a team in a temporary facility with limited revenue levers."
  },

  // ─── NFC NORTH ───────────────────────────────────────────────────

  "Chicago Bears": {
    valuationHistory: [
      { year: 2019, value: 3.45, source: "Forbes" },
      { year: 2020, value: 3.53, source: "Forbes" },
      { year: 2021, value: 4.1, source: "Forbes" },
      { year: 2022, value: 5.8, source: "Forbes" },
      { year: 2023, value: 6.3, source: "Forbes" },
      { year: 2024, value: 6.4, source: "Forbes" },
    ],
    revenue: { estimate: 627, year: 2024, source: "Forbes", operatingIncome: 74 },
    transactions: [],
    stadium: {
      name: "Soldier Field",
      yearBuilt: 1924,
      capacity: 61500,
      ownershipModel: "publicly-owned (Chicago Park District), leased to Bears",
      teamOwnsLand: false,
      publicSubsidy: null,
      privateFinancing: null,
      namingRightsDeal: "No corporate naming rights — Soldier Field is a designated war memorial",
      nonGameRevenue: "Limited; Chicago Fire (MLS) and concerts; smallest capacity in NFL",
      newStadiumPlans: "Bears pursuing new domed stadium; Arlington Heights and Hammond, IN remain as final two candidate sites as of May 2026; Illinois House passed property tax relief bill May 2026, awaiting Senate vote"
    },
    media: { localTVDeal: null, radioPartner: "WBBM 780 AM / 105.9 FM", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "McCaskey family (heirs of founder George Halas)",
      ownerNetWorth: "~$4-5B (est., based on franchise value; family wealth largely tied to franchise)",
      ownerBackground: "George Halas founded the franchise in 1920 (originally Decatur Staleys); Virginia Halas McCaskey (daughter) inherited control in 1983; George H. McCaskey (grandson of Halas) now serves as chairman after Virginia's death in early 2025",
      acquisitionYear: 1920,
      acquisitionPrice: 0.0001,
      currentValuation: 6.4,
      impliedReturn: "Multi-generational; franchise founded by Halas family",
      ownershipGroup: [
        { name: "George H. McCaskey", role: "chairman", pct: null },
        { name: "McCaskey family", role: "majority ownership (~80%)", pct: 80 }
      ],
      institutionalInvestors: "Minority stake (est. $235M for ~3.8% stake) sold to PE-affiliated group in 2024 as part of NFL's private equity rule expansion",
      otherBusinessInterests: "No major non-football enterprises reported"
    },
    brand: {
      socialMedia: { instagram: "~2M", twitter: "~1.5M", facebook: "~6M" },
      merchandiseNotes: "Top-10 NFL merchandise historically; brand linked to storied franchise history (Ditka, Butkus, Payton) rather than recent on-field performance",
      internationalFanbase: "Loyal Midwest/Chicago fanbase; limited international reach",
      notableSponsorships: ["United Airlines (jersey patch)", "Motorola", "Slalom (presenting sponsor)", "Advocate Health Care"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchiseQB: "Caleb Williams — 4yr/$39.5M fully guaranteed rookie contract (#1 overall pick 2024), ~$9.9M AAV",
      starContracts: [{ player: "Caleb Williams", position: "QB", aav: 9.87, contractNote: "4yr/$39.5M rookie deal (2024), fully guaranteed, 5th-year option" }]
    },
    analystNotes: "The Bears' valuation sits in an interesting limbo: a top-10 NFL brand trapped in the league's smallest stadium with no naming rights revenue. The new stadium saga (Arlington Heights vs. Hammond, IN as of May 2026) is the single largest lever on franchise value — a modern domed facility could add $1-2B to the franchise's valuation overnight. Caleb Williams as the #1 pick and the McCaskey family's expressed desire to keep the team in Chicago for '100 more years' are the two pillars the current story rests on."
  },

  "Detroit Lions": {
    valuationHistory: [
      { year: 2019, value: 1.9, source: "Forbes" },
      { year: 2020, value: 2.1, source: "Forbes" },
      { year: 2021, value: 2.4, source: "Forbes" },
      { year: 2022, value: 3.1, source: "Forbes" },
      { year: 2023, value: 3.6, source: "Forbes" },
      { year: 2024, value: 4.15, source: "Forbes" },
    ],
    revenue: { estimate: 501, year: 2024, source: "Forbes", operatingIncome: 56 },
    transactions: [],
    stadium: {
      name: "Ford Field",
      yearBuilt: 2002,
      capacity: 65000,
      ownershipModel: "publicly-assisted construction (51% public / 49% private)",
      teamOwnsLand: false,
      publicSubsidy: 255,
      privateFinancing: 245,
      namingRightsDeal: "Ford Motor Company, originally $40M/20-year deal (2002); extended through 2036 season in March 2025 — new terms undisclosed",
      nonGameRevenue: "NCAA basketball, concerts, WrestleMania; year-round indoor venue",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: "97.1 The Ticket (WXYT-FM)", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Sheila Ford Hamp",
      ownerNetWorth: "~$2-3B (est., Ford family wealth)",
      ownerBackground: "Daughter of William Clay Ford Sr. (who purchased Lions for $4.5M in 1963) and granddaughter of Edsel Ford; Sheila Ford Hamp became principal owner/chairwoman June 23, 2020",
      acquisitionYear: 1963,
      acquisitionPrice: 0.0045,
      currentValuation: 4.15,
      impliedReturn: "~920x over 60 years (Ford family)",
      ownershipGroup: [
        { name: "Sheila Ford Hamp", role: "principal owner & chairwoman", pct: null },
        { name: "Ford family", role: "majority ownership", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Ford Motor Company (family heritage); Rajasthan Royals IPL cricket team (Hamp joined ownership group 2026)"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~1.2M", facebook: "~3M" },
      merchandiseNotes: "Historically lower merchandise volume; strong surge 2023-24 as team became NFC contender under Dan Campbell",
      internationalFanbase: "Limited international presence; strong Midwest/Michigan loyalty",
      notableSponsorships: ["Ford Motor Company (stadium naming)", "Rocket Mortgage", "Little Caesars", "MotorCity Casino"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "Jared Goff — 4yr/$212M extension signed May 2024, $53M AAV, $170M guaranteed; no-trade clause",
      starContracts: [{ player: "Jared Goff", position: "QB", aav: 53.0, contractNote: "4yr/$212M (May 2024), $170M guaranteed, no-trade clause, runs through 2028" }]
    },
    analystNotes: "The Lions' valuation trajectory is the most interesting in the NFC North: historically the league's lowest-valued franchise in a mid-size market, now accelerating toward the league mean on the back of a genuine Super Bowl-contending roster under Dan Campbell. Jared Goff's $53M/year extension locked in the QB at a price that looks reasonable given market rates. The upside case: Lions become an NFC dynasty and break the $6-7B ceiling within three years."
  },

  "Green Bay Packers": {
    valuationHistory: [
      { year: 2019, value: 2.63, source: "Forbes" },
      { year: 2020, value: 3.1, source: "Forbes" },
      { year: 2021, value: 3.475, source: "Forbes" },
      { year: 2022, value: 4.25, source: "Forbes" },
      { year: 2023, value: 5.6, source: "Forbes" },
      { year: 2024, value: 6.65, source: "Forbes" },
    ],
    revenue: { estimate: 654, year: 2023, source: "Packers public financial report (nonprofit disclosure)", operatingIncome: 60 },
    transactions: [],
    stadium: {
      name: "Lambeau Field",
      yearBuilt: 1957,
      capacity: 81441,
      ownershipModel: "city-owned/team-operated; renovation bonds backed by Brown County sales tax",
      teamOwnsLand: false,
      publicSubsidy: null,
      privateFinancing: null,
      namingRightsDeal: "No naming rights — Lambeau Field named for founder Curly Lambeau; naming rights not currently being pursued",
      nonGameRevenue: "Titletown District (adjacent mixed-use development owned by Packers), stadium tours, Packers Hall of Fame, Titletown Tech (venture fund w/ Microsoft)",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: "Learfield/Packers Radio Network", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Community-owned nonprofit — Green Bay Packers, Inc.",
      ownerNetWorth: "N/A — nonprofit corporation with ~538,967 shareholders (~5.2M shares outstanding); no individual owns more than 200,000 shares; no dividends paid; shares have no resale value",
      ownerBackground: "Publicly owned since 1923; last share offering in 2021-22 raised $67M; NFL has grandfathered this ownership structure — no new community-owned teams permitted under current NFL rules",
      acquisitionYear: 1923,
      acquisitionPrice: null,
      currentValuation: 6.65,
      impliedReturn: "N/A — community asset; shares functionally worthless as financial instruments",
      ownershipGroup: [
        { name: "Board of Directors (45 members)", role: "governance", pct: null },
        { name: "Executive Committee (7 members)", role: "day-to-day oversight", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Titletown District real estate development; TitletownTech venture fund (w/ Microsoft); Packers Pro Shop retail"
    },
    brand: {
      socialMedia: { instagram: "~3M", twitter: "~2M", facebook: "~8M" },
      merchandiseNotes: "Among top-5 NFL merchandise teams; strong national fanbase due to community-owned identity and storied history",
      internationalFanbase: "Historically strong national fanbase across all 50 states; modest international presence",
      notableSponsorships: ["No Lambeau naming rights", "Johnsonville Sausage (official brat)", "Associated Bank", "Bellin Health", "Schneider National"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchiseQB: "Jordan Love — 4yr/$220M extension signed July 2024, $55M AAV, $100.8M fully guaranteed at signing",
      starContracts: [{ player: "Jordan Love", position: "QB", aav: 55.0, contractNote: "4yr/$220M (July 2024), $100.8M guaranteed at signing, runs through 2028" }]
    },
    analystNotes: "The Packers are the NFL's most unusual financial entity: a publicly owned nonprofit trading at $6.65B 'market cap' that no one can actually buy. The structure creates fascinating valuation dynamics — because the franchise can never be sold, Forbes is effectively pricing a non-tradable asset using comparable transaction multiples. The community-owned model limits revenue flexibility (no naming rights, constrained PE access) relative to privately-owned competitors, which likely keeps the Packers' valuation growing more slowly than peers despite the storied brand and Lambeau Field's 81,441-seat capacity."
  },

  "Minnesota Vikings": {
    valuationHistory: [
      { year: 2019, value: 2.4, source: "Forbes" },
      { year: 2020, value: 2.95, source: "Forbes" },
      { year: 2021, value: 3.35, source: "Forbes" },
      { year: 2022, value: 3.93, source: "Forbes" },
      { year: 2023, value: 4.65, source: "Forbes" },
      { year: 2024, value: 5.3, source: "Forbes" },
    ],
    revenue: { estimate: 569, year: 2023, source: "Forbes", operatingIncome: 70 },
    transactions: [
      { year: 2005, price: 0.6, buyer: "Zygi Wilf (Wilf family group)", seller: "Red McCombs", notes: "Wilf and partners purchased Vikings for reported $600M; approved by NFL owners May 25, 2005" }
    ],
    stadium: {
      name: "U.S. Bank Stadium",
      yearBuilt: 2016,
      capacity: 66200,
      ownershipModel: "publicly-owned (Minnesota Sports Facilities Authority), team-operated",
      teamOwnsLand: false,
      publicSubsidy: 498,
      privateFinancing: 551,
      namingRightsDeal: "U.S. Bank, 25-year/$220M deal signed June 2015, ~$8.8M/year, runs through 2040",
      nonGameRevenue: "Super Bowl LII host, NCAA Final Four, concerts, conventions; year-round indoor events",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: "KFAN 100.3 FM", streamingNotes: "Standard NFL package", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Zygi Wilf",
      ownerNetWorth: "~$3B (est.)",
      ownerBackground: "Real estate developer (Wilf family, Wood-Ridge, NJ-based commercial/residential developer); purchased Vikings for $600M in 2005; brother Mark Wilf and cousin Leonard Wilf are co-owners",
      acquisitionYear: 2005,
      acquisitionPrice: 0.6,
      currentValuation: 5.3,
      impliedReturn: "~8.8x in ~20 years",
      ownershipGroup: [
        { name: "Zygi Wilf", role: "owner & chairman", pct: null },
        { name: "Mark Wilf", role: "co-owner & president", pct: null },
        { name: "Leonard Wilf", role: "co-owner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Garden Homes/Wilf real estate development"
    },
    brand: {
      socialMedia: { instagram: "~2M", twitter: "~1.5M", facebook: "~5M" },
      merchandiseNotes: "Mid-tier NFL merchandise; loyal fanbase in Upper Midwest; brand carried by legacy (Fran Tarkenton, Randy Moss, Adrian Peterson)",
      internationalFanbase: "Limited; strong Scandinavian-American regional identity in Minnesota/Upper Midwest",
      notableSponsorships: ["U.S. Bank (stadium naming)", "Mystic Lake Casino Hotel", "3M", "Treasure Island Resort & Casino"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "J.J. McCarthy — 4yr/$21.85M fully guaranteed rookie contract (2024 #10 overall pick), ~$5.46M AAV; missed 2024 season with knee injury, expected starter 2025",
      starContracts: [{ player: "J.J. McCarthy", position: "QB", aav: 5.46, contractNote: "4yr/$21.85M rookie deal (2024), fully guaranteed, 5th-year option; missed 2024 with knee injury" }]
    },
    analystNotes: "The Vikings' story right now is almost entirely about J.J. McCarthy: a $600M 2005 acquisition that has compounded to $5.3B in 20 years, sitting in a publicly financed modern stadium with a solid naming rights deal, waiting on a rookie QB to validate the investment thesis. U.S. Bank Stadium's indoor multi-use economics (Super Bowls, Final Four, year-round events) are among the most favorable in the league for a non-owner-financed facility."
  },

  // ─── NFC SOUTH ───────────────────────────────────────────────────

  "Atlanta Falcons": {
    valuationHistory: [
      { year: 2019, value: 2.6,   source: "Forbes" },
      { year: 2020, value: 2.755, source: "Forbes" },
      { year: 2021, value: 2.88,  source: "Forbes" },
      { year: 2022, value: 4.0,   source: "Forbes" },
      { year: 2023, value: 4.7,   source: "Forbes" },
      { year: 2024, value: 5.9,   source: "Forbes" },
    ],
    revenue: { estimate: 585, year: 2023, source: "Forbes", operatingIncome: 94 },
    transactions: [
      { year: 2002, price: 0.545, buyer: "Arthur Blank", seller: "Taylor Smith estate", notes: "Blank (Home Depot co-founder) acquired controlling interest for $545M" }
    ],
    stadium: {
      name: "Mercedes-Benz Stadium",
      yearBuilt: 2017,
      capacity: 71000,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 200,
      privateFinancing: 1400,
      namingRightsDeal: { sponsor: "Mercedes-Benz", annualValue: 12, totalValue: 324, expiry: 2042, notes: "27-year deal announced August 2015; estimated ~$12M/year" },
      nonGameRevenue: "Hosts Atlanta United FC (MLS), college football, concerts; operated by AMB Group",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Arthur Blank",
      ownerNetWorth: "~$7B",
      ownerBackground: "Co-founder of The Home Depot; sold HD stake to fund team and other ventures",
      acquisitionYear: 2002,
      acquisitionPrice: 0.545,
      currentValuation: 5.9,
      impliedReturn: "~10x in 22 years (~11% CAGR)",
      ownershipGroup: [{ name: "Arthur Blank", role: "majority", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Atlanta United FC (MLS), AMB Group real estate"
    },
    brand: {
      socialMedia: { instagram: "@atlantafalcons", twitter: "@AtlantaFalcons", facebook: "AtlantaFalcons" },
      merchandiseNotes: "Mid-tier NFL market; gains from dual-tenant stadium exposure",
      internationalFanbase: null,
      notableSponsorships: ["Mercedes-Benz (stadium naming rights)", "Ticketmaster", "Pepsi"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Kirk Cousins",
      starContracts: [{ player: "Kirk Cousins", position: "QB", aav: 45.0, contractNote: "4yr/$180M signed 2024; $100M guaranteed" }]
    },
    analystNotes: "Mercedes-Benz Stadium is among the NFL's most versatile venues, hosting MLS, college football, and marquee events that supplement pure NFL revenue — a key valuation differentiator. Arthur Blank's $545M entry in 2002 now sits at $5.9B (Forbes 2024), an ~11x return supported by ATL market growth and stadium economics. The team remains a sell-side story on market appreciation and venue optionality rather than on-field performance."
  },

  "Carolina Panthers": {
    valuationHistory: [
      { year: 2019, value: 2.4,   source: "Forbes" },
      { year: 2020, value: 2.4,   source: "Forbes" },
      { year: 2021, value: 2.81,  source: "Forbes" },
      { year: 2022, value: 3.6,   source: "Forbes" },
      { year: 2023, value: 4.1,   source: "Forbes" },
      { year: 2024, value: 5.13,  source: "Forbes" },
    ],
    revenue: { estimate: 574, year: 2023, source: "Forbes", operatingIncome: 72 },
    transactions: [
      { year: 2018, price: 2.275, buyer: "David Tepper", seller: "Jerry Richardson", notes: "Record NFL sale at the time; Tepper had been minority owner of Pittsburgh Steelers" }
    ],
    stadium: {
      name: "Bank of America Stadium",
      yearBuilt: 1996,
      capacity: 74867,
      ownershipModel: "privately-owned",
      teamOwnsLand: true,
      publicSubsidy: 56,
      privateFinancing: 186,
      namingRightsDeal: { sponsor: "Bank of America", annualValue: null, totalValue: 140, expiry: null, notes: "Original 20-25 year deal in 2004 worth ~$140M; extended by Tepper after 2018 acquisition; term undisclosed" },
      nonGameRevenue: "Charlotte FC (MLS) matches; college football; concerts",
      newStadiumPlans: "$800M renovation approved June 2024; $650M public / $150M team; phased 2026-2029"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "David Tepper",
      ownerNetWorth: "~$20B",
      ownerBackground: "Founder of Appaloosa Management (hedge fund); former minority owner of Pittsburgh Steelers",
      acquisitionYear: 2018,
      acquisitionPrice: 2.275,
      currentValuation: 5.13,
      impliedReturn: "~2.3x in 6 years (~15% CAGR)",
      ownershipGroup: [{ name: "David Tepper", role: "majority", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Charlotte FC (MLS), Tepper Sports & Entertainment"
    },
    brand: {
      socialMedia: { instagram: "@panthers", twitter: "@Panthers", facebook: "CarolinaPanthers" },
      merchandiseNotes: "Bi-state Carolina market; limited national following relative to legacy franchises",
      internationalFanbase: null,
      notableSponsorships: ["Bank of America (stadium naming rights)", "Lowe's"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchiseQB: "Bryce Young",
      starContracts: [{ player: "Bryce Young", position: "QB", aav: 9.49, contractNote: "4yr/$37.96M rookie deal (2023 draft, #1 overall); 5th-year option picked up" }]
    },
    analystNotes: "The $2.275B Tepper acquisition in 2018 remains the cleanest NFL comp transaction of the modern era — the franchise has since appreciated to $5.13B (Forbes 2024), validating NFL scarcity premium even for struggling franchises. The $800M Bank of America Stadium renovation (65% publicly funded) materially reduces capex burden for the team while extending the asset's competitive lifespan. On-field performance and QB development are the primary near-term risk; valuation is structurally supported by NFL revenue sharing and Charlotte's fast-growing market."
  },

  "New Orleans Saints": {
    valuationHistory: [
      { year: 2019, value: 2.08, source: "Forbes" },
      { year: 2020, value: 2.08, source: "Forbes" },
      { year: 2021, value: 2.83, source: "Forbes" },
      { year: 2022, value: 3.575, source: "Forbes" },
      { year: 2023, value: 4.08, source: "Forbes" },
      { year: 2024, value: 4.4,  source: "Forbes" },
    ],
    revenue: { estimate: 587, year: 2023, source: "Forbes", operatingIncome: 115 },
    transactions: [],
    stadium: {
      name: "Caesars Superdome",
      yearBuilt: 1975,
      capacity: 73208,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 450,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Caesars Entertainment", annualValue: 6.9, totalValue: 138, expiry: 2041, notes: "20-year, $138M deal approved by Louisiana Legislature in 2021; Saints hold naming rights via lease; all proceeds pledged to stadium renovation" },
      nonGameRevenue: "Major concert venue; college football; Sugar Bowl; Super Bowl host",
      newStadiumPlans: "Ongoing $450M+ renovation funded via Caesars naming rights proceeds and state"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Gayle Benson",
      ownerNetWorth: "~$3B",
      ownerBackground: "Inherited controlling interest from husband Tom Benson (d. 2018); no arm's-length transfer",
      acquisitionYear: 2018,
      acquisitionPrice: null,
      currentValuation: 4.4,
      impliedReturn: "N/A — intra-family estate transfer",
      ownershipGroup: [{ name: "Gayle Benson", role: "majority", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "New Orleans Pelicans (NBA)"
    },
    brand: {
      socialMedia: { instagram: "@saints", twitter: "@Saints", facebook: "neworleanssaints" },
      merchandiseNotes: "Strong regional loyalty; Who Dat Nation; moderate national brand",
      internationalFanbase: null,
      notableSponsorships: ["Caesars Entertainment (stadium naming rights)", "Ochsner Health", "Entergy"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Derek Carr",
      starContracts: [{ player: "Derek Carr", position: "QB", aav: 37.5, contractNote: "4yr/$150M signed 2023; Carr retired in 2024; large dead cap remains on books" }]
    },
    analystNotes: "The Saints represent a structurally sound mid-market NFL franchise underpinned by the Superdome's unique event economics — the stadium's $450M renovation (financed largely through the Caesars naming rights) is publicly owned, shielding the franchise from capital expenditure risk. No arm's-length sale has occurred since Tom Benson's 1985 acquisition, meaning the Forbes valuation ($4.4B in 2024) is unvalidated by a market transaction. QB transition risk post-Carr and a smaller media market cap Saints valuation relative to peers."
  },

  "Tampa Bay Buccaneers": {
    valuationHistory: [
      { year: 2019, value: 2.04,  source: "Forbes" },
      { year: 2020, value: 2.28,  source: "Forbes" },
      { year: 2021, value: 2.94,  source: "Forbes" },
      { year: 2022, value: 3.675, source: "Forbes" },
      { year: 2023, value: 4.2,   source: "Forbes" },
      { year: 2024, value: 5.5,   source: "Forbes" },
    ],
    revenue: { estimate: 629, year: 2024, source: "Forbes", operatingIncome: 130 },
    transactions: [
      { year: 1995, price: 0.192, buyer: "Malcolm Glazer", seller: "NFL (expansion award)", notes: "Glazer family paid $192M for NFL expansion franchise; franchise now held by Glazer family after Malcolm Glazer's death in 2014" }
    ],
    stadium: {
      name: "Raymond James Stadium",
      yearBuilt: 1998,
      capacity: 69218,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 169,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Raymond James Financial", annualValue: null, totalValue: null, expiry: 2027, notes: "Partnership runs through 2027; original 13-year deal in 1998 for $32.5M; extended twice (2006, 2016); second-longest continuous stadium naming rights deal in NFL" },
      nonGameRevenue: "Concerts, college football; Super Bowl host (2001, 2009, 2021)",
      newStadiumPlans: "$1B+ modernization project underway as of 2026"
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Glazer Family",
      ownerNetWorth: "~$7B (family combined)",
      ownerBackground: "Malcolm Glazer acquired 1995 expansion franchise; also own Manchester United (EPL); family-run since Malcolm's death in 2014",
      acquisitionYear: 1995,
      acquisitionPrice: 0.192,
      currentValuation: 5.5,
      impliedReturn: "~28x in 29 years (~12% CAGR)",
      ownershipGroup: [
        { name: "Bryan Glazer", role: "co-chair", pct: null },
        { name: "Joel Glazer", role: "co-chair", pct: null },
        { name: "Edward Glazer", role: "co-chair", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "Manchester United FC (EPL)"
    },
    brand: {
      socialMedia: { instagram: "@buccaneers", twitter: "@Buccaneers", facebook: "TampaBayBuccaneers" },
      merchandiseNotes: "Brady era (2020-2022) drove significant national brand lift; retains elevated baseline",
      internationalFanbase: null,
      notableSponsorships: ["Raymond James Financial (stadium naming rights)", "Pepsi", "Publix"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchiseQB: "Baker Mayfield",
      starContracts: [{ player: "Baker Mayfield", position: "QB", aav: 33.3, contractNote: "3yr/$100M signed 2024; $50M guaranteed" }]
    },
    analystNotes: "The Glazers' 1995 expansion entry at $192M is now worth $5.5B (Forbes 2024) — a 28x return over 29 years — making the Bucs among the most compelling long-horizon NFL return case studies. The Tom Brady era validated the franchise's national brand elasticity: merchandise and sponsorship revenue saw structural step-up gains that have not fully reverted. The stadium's publicly owned structure and pending $1B modernization reduce near-term capex drag while the naming rights extension provides a visible revenue anchor through 2027."
  },

  // ─── NFC WEST ────────────────────────────────────────────────────

  "Arizona Cardinals": {
    valuationHistory: [
      { year: 2019, value: 2.15,  source: "Forbes" },
      { year: 2020, value: 2.325, source: "Forbes" },
      { year: 2021, value: 2.69,  source: "Forbes" },
      { year: 2022, value: 3.17,  source: "Forbes" },
      { year: 2023, value: 3.8,   source: "Forbes" },
      { year: 2024, value: 4.3,   source: "Forbes" },
    ],
    revenue: { estimate: 546, year: 2023, source: "Forbes", operatingIncome: 112 },
    transactions: [],
    stadium: {
      name: "State Farm Stadium",
      yearBuilt: 2006,
      capacity: 63400,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 302,
      privateFinancing: 143,
      namingRightsDeal: { sponsor: "State Farm", annualValue: null, totalValue: null, expiry: null, notes: "18-year naming rights deal effective 2018; financial terms confidential; estimated $200-400M range over term; replaces University of Phoenix naming rights ($7.7M/year)" },
      nonGameRevenue: "Super Bowl host, WrestleMania, Copa América 2024, college football; retractable natural grass field",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Michael Bidwill",
      ownerNetWorth: "~$1B est.",
      ownerBackground: "Third-generation Bidwill family ownership; longest-tenured ownership family in NFL history; Bill Bidwill brought team from St. Louis to Arizona in 1988",
      acquisitionYear: 1932,
      acquisitionPrice: null,
      currentValuation: 4.3,
      impliedReturn: "N/A — continuous family ownership since 1932",
      ownershipGroup: [{ name: "Michael Bidwill", role: "chairman/president", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "State Farm Stadium event management"
    },
    brand: {
      socialMedia: { instagram: "@azcardinals", twitter: "@AZCardinals", facebook: "ArizonaCardinals" },
      merchandiseNotes: "Historically one of the weaker NFL brands nationally; growing Phoenix market provides tailwind",
      internationalFanbase: null,
      notableSponsorships: ["State Farm (stadium naming rights)", "Banner Health", "Arizona Sports & Tourism Authority"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Kyler Murray",
      starContracts: [{ player: "Kyler Murray", position: "QB", aav: 46.1, contractNote: "5yr/$230.5M extension through 2028 signed 2022; $160M guaranteed; Murray missed 2022 due to ACL injury" }]
    },
    analystNotes: "The Cardinals represent the NFL's longest-tenured ownership story — Bidwill family since 1932 — with no arm's-length transaction benchmark, meaning Forbes' $4.3B (2024) carries valuation uncertainty relative to peers. Phoenix's rapid demographic growth provides a secular tailwind: the metro is among the fastest-growing large markets in the US, and State Farm Stadium's event profile (Super Bowls, Copa América, WrestleMania) generates non-NFL revenue that meaningfully supports team economics. Kyler Murray's $230.5M extension is a $160M guaranteed liability the franchise must manage through 2028."
  },

  "Los Angeles Rams": {
    valuationHistory: [
      { year: 2019, value: 3.8,  source: "Forbes" },
      { year: 2020, value: 4.0,  source: "Forbes" },
      { year: 2021, value: 4.8,  source: "Forbes" },
      { year: 2022, value: 6.2,  source: "Forbes" },
      { year: 2023, value: 6.9,  source: "Forbes" },
      { year: 2024, value: 7.6,  source: "Forbes" },
    ],
    revenue: { estimate: 756, year: 2023, source: "Forbes", operatingIncome: 125 },
    transactions: [
      { year: 2010, price: 0.750, buyer: "Stan Kroenke", seller: "Georgia Frontiere estate / minority partners", notes: "Kroenke consolidated control for ~$750M; relocated franchise from St. Louis to Los Angeles in 2016" }
    ],
    stadium: {
      name: "SoFi Stadium",
      yearBuilt: 2020,
      capacity: 70240,
      ownershipModel: "privately-owned",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 5500,
      namingRightsDeal: { sponsor: "SoFi Technologies", annualValue: 30, totalValue: 625, expiry: 2039, notes: "20-year, $625M deal (record at signing); most naming rights revenue flows to stadium construction debt, not team operations" },
      nonGameRevenue: "Shared with LA Chargers (15% suite/sponsorship share); Super Bowl LVI host; concerts, soccer, awards shows; part of Hollywood Park mixed-use development",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Stan Kroenke",
      ownerNetWorth: "~$15B",
      ownerBackground: "Real estate and sports magnate; also owns Arsenal FC (EPL), Colorado Avalanche, Denver Nuggets, Colorado Rapids, Colorado Mammoth",
      acquisitionYear: 2010,
      acquisitionPrice: 0.750,
      currentValuation: 7.6,
      impliedReturn: "~10x in 14 years (~17% CAGR)",
      ownershipGroup: [{ name: "Stan Kroenke", role: "majority", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Arsenal FC (EPL), Colorado Avalanche (NHL), Denver Nuggets (NBA), Hollywood Park mixed-use development"
    },
    brand: {
      socialMedia: { instagram: "@rams", twitter: "@RamsNFL", facebook: "LARams" },
      merchandiseNotes: "LA market relocation (2016) reset national brand; Super Bowl LVI win (2022) accelerated sponsorship and merchandise revenue",
      internationalFanbase: null,
      notableSponsorships: ["SoFi Technologies (stadium naming rights)", "Verizon", "American Airlines"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 2,
      currentFranchiseQB: "Matthew Stafford",
      starContracts: [{ player: "Matthew Stafford", position: "QB", aav: 42.0, contractNote: "2yr/$84M extension (2023); $80M guaranteed; extension talks progressing as of April 2026" }]
    },
    analystNotes: "SoFi Stadium — the most expensive sports venue ever built at ~$5.5B — is the central valuation driver for the Rams: Kroenke's wholly private financing creates no public subsidy exposure but also saddles the franchise with ~$3.5B in debt, the most in the NFL. The LA market relocation premium, Super Bowl LVI championship, and Hollywood Park mixed-use development collectively justify the ~$7.6B Forbes (2024) valuation. The Rams' ~17% CAGR since Kroenke's $750M 2010 acquisition is the best return trajectory of any franchise in this set, driven almost entirely by the relocation arbitrage."
  },

  "San Francisco 49ers": {
    valuationHistory: [
      { year: 2019, value: 3.05,  source: "Forbes" },
      { year: 2020, value: 3.8,   source: "Forbes" },
      { year: 2021, value: 4.175, source: "Forbes" },
      { year: 2022, value: 5.2,   source: "Forbes" },
      { year: 2023, value: 6.0,   source: "Forbes" },
      { year: 2024, value: 6.86,  source: "Forbes" },
    ],
    revenue: { estimate: 723, year: 2023, source: "Forbes", operatingIncome: 115 },
    transactions: [],
    stadium: {
      name: "Levi's Stadium",
      yearBuilt: 2014,
      capacity: 68500,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 114,
      privateFinancing: 1186,
      namingRightsDeal: { sponsor: "Levi Strauss & Co.", annualValue: 17, totalValue: 390, expiry: 2043, notes: "Original 20-year, $220M deal in 2013 ($11M/year); extended 10 years in January 2024 for $170M additional ($17M/year through 2043)" },
      nonGameRevenue: "Concerts, college football, international soccer; Silicon Valley corporate suite demand is best in NFL",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "York Family (Jed York, CEO)",
      ownerNetWorth: "~$3B (family combined)",
      ownerBackground: "Denise DeBartolo York (daughter of original owner Eddie DeBartolo Sr.) has controlled team since 2000; Jed York serves as CEO; family acquired for $13M in 1977",
      acquisitionYear: 1977,
      acquisitionPrice: 0.013,
      currentValuation: 6.86,
      impliedReturn: "~528x in 47 years (continuous family ownership)",
      ownershipGroup: [
        { name: "Denise DeBartolo York", role: "co-owner", pct: null },
        { name: "Jed York", role: "CEO/co-owner", pct: null }
      ],
      institutionalInvestors: null,
      otherBusinessInterests: "DeBartolo family real estate holdings"
    },
    brand: {
      socialMedia: { instagram: "@49ers", twitter: "@49ers", facebook: "SanFrancisco49ers" },
      merchandiseNotes: "One of NFL's legacy brands with 5 Super Bowl wins; strong Bay Area and national fanbase; benefiting from current competitive window",
      internationalFanbase: null,
      notableSponsorships: ["Levi Strauss & Co. (stadium naming rights)", "Verizon", "Dignity Health"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchiseQB: "Brock Purdy",
      starContracts: [{ player: "Brock Purdy", position: "QB", aav: 53.0, contractNote: "5yr/$265M extension signed 2024; $182.55M guaranteed; locks Purdy through 2029; last pick of 2022 draft" }]
    },
    analystNotes: "The 49ers sit at a rare intersection of on-field sustained excellence and Silicon Valley market premium: corporate suite demand from Bay Area tech companies is the highest in the NFL and underpins Levi's Stadium economics even in down years. Brock Purdy's 5-year, $265M extension ($53M AAV) is market-rate for an elite QB and locks the team's competitive identity through 2029 at a manageable cap structure. The York family's $13M entry in 1977 and lack of any arm's-length transaction means Forbes' $6.86B (2024) valuation has never been market-tested — a point of caution for sell-side comparables."
  },

  "Seattle Seahawks": {
    valuationHistory: [
      { year: 2019, value: 2.775, source: "Forbes" },
      { year: 2020, value: 3.1,   source: "Forbes" },
      { year: 2021, value: 3.5,   source: "Forbes" },
      { year: 2022, value: 4.5,   source: "Forbes" },
      { year: 2023, value: 4.8,   source: "Forbes" },
      { year: 2024, value: 5.59,  source: "Forbes" },
    ],
    revenue: { estimate: 624, year: 2024, source: "Forbes", operatingIncome: 104 },
    transactions: [],
    stadium: {
      name: "Lumen Field",
      yearBuilt: 2002,
      capacity: 69500,
      ownershipModel: "publicly-owned",
      teamOwnsLand: false,
      publicSubsidy: 251,
      privateFinancing: 109,
      namingRightsDeal: { sponsor: "Lumen Technologies (CenturyLink rebranded)", annualValue: null, totalValue: 163, expiry: 2033, notes: "CenturyLink paid $162.7M in 2017 for 15-year extension (2019-2033); PSA receives ~$70M; rebranded to Lumen Field in 2020" },
      nonGameRevenue: "Seattle Sounders FC (MLS) primary tenant; concerts; soccer; FIFA World Cup 2026 host venue",
      newStadiumPlans: null
    },
    media: { localTVDeal: null, radioPartner: null, streamingNotes: "", nationalShareNote: "~$340M/year from NFL national deal (2023-2033)" },
    ownership: {
      primaryOwner: "Jody Allen (trustee of Paul Allen estate)",
      ownerNetWorth: "~$20B (Paul Allen estate)",
      ownerBackground: "Paul Allen (Microsoft co-founder) purchased team in 1997 for $200M; died October 2018; sister Jody Allen serves as trustee of Vulcan Inc. estate; sale process announced",
      acquisitionYear: 1997,
      acquisitionPrice: 0.200,
      currentValuation: 5.59,
      impliedReturn: "~28x since 1997 (~12% CAGR); proceeds to philanthropy per estate plan",
      ownershipGroup: [{ name: "Jody Allen (Paul Allen Estate / Vulcan Inc.)", role: "trustee/majority", pct: null }],
      institutionalInvestors: null,
      otherBusinessInterests: "Portland Trail Blazers (NBA) also held by Allen estate"
    },
    brand: {
      socialMedia: { instagram: "@seahawks", twitter: "@Seahawks", facebook: "SeattleSeahawks" },
      merchandiseNotes: "12th Man culture among NFL's most passionate regional fanbases; national brand elevated by Super Bowl XLVIII win (2014)",
      internationalFanbase: null,
      notableSponsorships: ["Lumen Technologies (stadium naming rights)", "Alaska Airlines", "Safeco (now Liberty Mutual)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchiseQB: "Sam Darnold",
      starContracts: [{ player: "Sam Darnold", position: "QB", aav: 33.5, contractNote: "3yr/$100.5M signed 2025; $55M guaranteed; signed after Geno Smith trade to Las Vegas Raiders" }]
    },
    analystNotes: "The Seahawks are the most anticipated near-term NFL transaction: Jody Allen has stated intention to sell with proceeds flowing to the Paul Allen charitable estate, and reported bidders in 2025-2026 have pegged the franchise at $6-7B. A completed sale would serve as the definitive Pacific Northwest market comp. Lumen Field's dual-tenant economics (Sounders FC) and FIFA 2026 hosting provide incremental revenue not captured in NFL-only analysis. The pending sale process is the key monitorable for this asset."
  },

};
