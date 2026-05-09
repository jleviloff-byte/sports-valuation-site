// NBA team enrichments — all 30 teams
// Sources: Forbes, Sportico, CNBC, Basketball-Reference, ESPN, Sports Business Journal
// National TV: 11-year deal 2025-26 through 2035-36, ESPN/ABC + NBC/Peacock + Amazon Prime (~$230M/team/yr)
export const nbaEnrichments = {


  "Boston Celtics": {
    valuationHistory: [
      { year: 2019, value: 3.1,  source: "Forbes" },
      { year: 2020, value: 3.2,  source: "Forbes" },
      { year: 2021, value: 3.55, source: "Forbes" },
      { year: 2022, value: 4.1,  source: "Forbes" },
      { year: 2023, value: 4.7,  source: "Forbes" },
      { year: 2024, value: 6.1,  source: "Forbes / validated by 2024 sale" },
    ],
    revenue: { estimate: 360, year: 2023, source: "Forbes", operatingIncome: 51 },
    transactions: [
      { year: 2002, price: 0.360, buyer: "Wyc Grousbeck / Boston Basketball Partners", seller: "Paul Gaston", notes: "Grousbeck-led group paid $360M; record NBA sale at the time; BPP included Steve Pagliuca and others" },
      { year: 2024, price: 6.1, buyer: "Bill Chisholm-led investor group (majority stake)", seller: "Wyc Grousbeck group (majority)", notes: "Grousbeck announced intention to sell majority stake Sept 2023; Chisholm group closed at $6.1B — record NBA franchise sale at time; Grousbeck retains minority + governor role through 2027-28" }
    ],
    arena: {
      name: "TD Garden",
      yearOpened: 1995,
      capacity: 19156,
      ownershipModel: "owned by Delaware North (Jacobs family); Celtics and Bruins are co-tenants; both teams have equity participation in ownership vehicle",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 160,
      namingRightsDeal: { sponsor: "TD Bank (TD Group)", annualValue_M: 6, totalValue_M: 119.1, expiryYear: null, notes: "20-year deal signed 2005 at ~$119.1M total; renewed; paid to arena ownership (Delaware North)" },
      nonArenaRevenue: "Celtics do not directly control arena P&L; Bruins and Celtics each hold equity in the arena ownership vehicle; non-game revenue shared across tenants",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "NBC Sports Boston (regional sports network); Celtics are flagship programming",
      streamingNotes: "Standard NBA League Pass; games on ABC/ESPN nationally",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Bill Chisholm (majority, Symphony Technology Group managing partner)",
      ownerNetWorth: "Chisholm: private equity background (STG); Grousbeck: ~$2B est.",
      ownerBackground: "Grousbeck-led Boston Basketball Partners bought franchise in 2002 for $360M; announced planned majority sale in Sept 2023; Chisholm group closed 2024 acquisition at $6.1B record. Grousbeck retaining minority and governor role through 2027-28 season",
      acquisitionYear: 2024,
      acquisitionPrice: 6.1,
      currentValuation: 6.1,
      impliedReturn: "Grousbeck group ~17x on $360M entry over 22 years (~15% CAGR)",
      ownershipGroup: [
        { name: "Bill Chisholm", role: "majority owner / incoming governor", pct: null },
        { name: "Wyc Grousbeck", role: "minority / governor through 2027-28", pct: null },
        { name: "Steve Pagliuca", role: "minority", pct: null },
        { name: "Rob Hale", role: "minority investor (previous Celtics co-investor)", pct: null }
      ],
      institutionalInvestors: "Chisholm group includes several high-net-worth and institutional co-investors; specific structure undisclosed",
      otherBusinessInterests: "Grousbeck: founding partner Causeway Capital Management; Chisholm: STG portfolio companies"
    },
    brand: {
      socialMedia: { instagram: "~6M", twitter: "~5M", facebook: "~11M" },
      merchandiseNotes: "Top-5 NBA merchandise franchise; 18 championships (most in NBA history) sustain deep national fanbase; 2024 title and Tatum/Brown duo driving fresh merchandise cycle",
      internationalFanbase: "Strong global brand, particularly in Europe; Bill Russell and Larry Bird legacy extends across generations",
      notableSponsorships: ["Vistaprint (jersey patch)", "TD Bank (arena naming)", "Liberty Mutual", "FanDuel"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Jayson Tatum — 5yr/$315M supermax extension signed Oct 2023, $63M AAV, runs through 2029-30",
      starContracts: [
        { player: "Jayson Tatum", position: "SF/PF", aav: 63.0, contractNote: "5yr/$315M supermax (Oct 2023), through 2029-30" },
        { player: "Jaylen Brown", position: "SG/SF", aav: 60.8, contractNote: "5yr/$304M supermax (Aug 2023), through 2028-29" }
      ]
    },
    analystNotes: "The Celtics' $6.1B 2024 sale — record NBA franchise price at closing — is the cleanest recent comp for mid-market top-tier NBA valuations: Boston is not New York or LA yet commands pricing consistent with the league's top tier, built on 18 championships, a fiercely loyal market, and the Tatum/Brown supermax core locked through 2028-29. The ~17x return on Grousbeck's $360M 2002 entry is textbook sports franchise appreciation. The primary risk is a combined $123.8M AAV in dual supermax contracts: the highest locked-in star payroll in the league, limiting roster flexibility around the core regardless of performance."
  },

  "Brooklyn Nets": {
    valuationHistory: [
      { year: 2019, value: 2.35, source: "Forbes / Tsai acquisition implied" },
      { year: 2020, value: 2.5,  source: "Forbes" },
      { year: 2021, value: 3.2,  source: "Forbes" },
      { year: 2022, value: 3.2,  source: "Forbes" },
      { year: 2023, value: 3.5,  source: "Forbes" },
      { year: 2024, value: 3.6,  source: "Forbes" },
    ],
    revenue: { estimate: 280, year: 2023, source: "Forbes est.", operatingIncome: 30 },
    transactions: [
      { year: 2019, price: 3.5, buyer: "Joe Tsai (BSE Global)", seller: "Mikhail Prokhorov", notes: "Tsai paid ~$2.35B for Nets + ~$1B for Barclays Center separately (~$3.5B total for combined BSE Global package); completed Sept 2019; Prokhorov had bought Nets in 2010 for $223M" },
      { year: 2024, price: null, buyer: "Julia Koch & family (15% of BSE Global)", seller: "Joe Tsai (partial)", notes: "Tsai sold 15% stake in BSE Global (Nets + Barclays Center + NY Liberty) to Koch family at implied $6B BSE total valuation; Tsai retains majority control" }
    ],
    arena: {
      name: "Barclays Center",
      yearOpened: 2012,
      capacity: 17732,
      ownershipModel: "owned by BSE Global (Joe Tsai entity); Nets and WNBA Liberty are primary tenants; arena operated independently as major NYC event venue",
      teamOwnsLand: true,
      publicSubsidy: 511,
      privateFinancing: 600,
      namingRightsDeal: { sponsor: "Barclays Bank", annualValue_M: 10, totalValue_M: 200, expiryYear: 2033, notes: "20-year deal signed 2012 at ~$200M total (~$10M/year); expires June 2033; paid to BSE Global" },
      nonArenaRevenue: "320+ events/year (concerts, boxing, wrestling, esports, family shows); NY Liberty (WNBA) home venue; among NYC's highest-volume arenas for non-sports programming",
      newArenaPlans: "No new arena planned; Barclays Center redevelopment enhancements ongoing"
    },
    media: {
      localTVDeal: "YES Network (primary regional sports network); Nets are major YES anchor tenant",
      streamingNotes: "Standard NBA League Pass; YES Network available via streaming",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Joe Tsai (BSE Global — 100% before partial Koch sale; ~85% post-2024)",
      ownerNetWorth: "~$10-11B (est.); co-chairman of Alibaba Group",
      ownerBackground: "Taiwanese-Canadian billionaire; Alibaba co-founder with Jack Ma; acquired minority Nets stake in 2018, full BSE Global package in 2019; BSE Global encompasses Nets, Barclays Center, and NY Liberty (WNBA). 2024 Koch family sale at $6B BSE implied valuation is notable disclosure of Tsai's willingness to dilute for strategic capital",
      acquisitionYear: 2019,
      acquisitionPrice: 3.5,
      currentValuation: 3.6,
      impliedReturn: "Modest appreciation on the Nets alone; combined BSE Global implied at $6B by Koch stake sale, suggesting ~$3.6B Nets + $2.4B Barclays Center + Liberty complex",
      ownershipGroup: [
        { name: "Joe Tsai", role: "majority owner / governor (BSE Global)", pct: "~85% post-Koch" },
        { name: "Julia Koch & family", role: "minority (15% of BSE Global, acquired 2024)", pct: "~15%" }
      ],
      institutionalInvestors: "Koch stake represents family office capital, not institutional PE fund; BSE Global is otherwise Tsai-controlled",
      otherBusinessInterests: "Tsai: Alibaba co-chairman; BSE Global includes Barclays Center + NY Liberty"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2.5M", facebook: "~4M" },
      merchandiseNotes: "Brooklyn brand became a cultural phenomenon 2012-2022 during Jay-Z association and Durant/Irving era; brand has softened post-superteam dismantling but Brooklyn moniker retains strong streetwear/culture cachet",
      internationalFanbase: "Moderate; Brooklyn cultural identity translates internationally; diminished by roster rebuilding phase",
      notableSponsorships: ["Hulu (jersey patch)", "Barclays Bank (arena naming)", "NYCFC adjacent through NYC sports ecosystem"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Cam Thomas — emerging franchise player; contract extension expected",
      starContracts: [
        { player: "Cam Thomas", position: "SG", aav: 33.0, contractNote: "Extension expected; primary franchise asset in rebuild" }
      ]
    },
    analystNotes: "The Nets are the most complex asset in the NBA: the franchise, Barclays Center, and NY Liberty are bundled in BSE Global, making the Nets' standalone value difficult to isolate from the real estate and arena economics. The Koch 15% stake at $6B BSE implied valuation ($900M for 15%) is the most recent arm's-length transaction and suggests the combined entity is worth considerably more than Forbes' $3.6B team-only figure. The PILOT bond financing ($511M tax-exempt) that built Barclays Center was novel in 2009 and politically contentious; it now represents a completed-cost asset on Tsai's books. The primary basketball risk is roster transition: Mikal Bridges was traded to the Knicks in 2024 for substantial draft capital, beginning a rebuild whose return timeline is uncertain."
  },

  "New York Knicks": {
    valuationHistory: [
      { year: 2019, value: 4.0,  source: "Forbes" },
      { year: 2020, value: 4.6,  source: "Forbes" },
      { year: 2021, value: 5.4,  source: "Forbes" },
      { year: 2022, value: 6.1,  source: "Forbes" },
      { year: 2023, value: 6.3,  source: "Forbes" },
      { year: 2024, value: 7.5,  source: "Forbes" },
    ],
    revenue: { estimate: 483, year: 2023, source: "Forbes", operatingIncome: 87 },
    transactions: [],
    arena: {
      name: "Madison Square Garden",
      yearOpened: 1968,
      capacity: 19812,
      ownershipModel: "arena owned by MSG Entertainment (Dolan family controlled entity, separate from MSG Sports Corp which owns the Knicks); both entities are Dolan-controlled but legally distinct",
      teamOwnsLand: false,
      publicSubsidy: null,
      privateFinancing: null,
      namingRightsDeal: "No external naming rights — 'Madison Square Garden' is a permanent legacy brand; MSG Entertainment derives venue revenue through concerts, boxing, events, and suite/premium licensing paid by the Knicks and Rangers as tenants",
      nonArenaRevenue: "Most valuable entertainment venue in the world by revenue; 320+ events/year (Knicks, Rangers, concerts, boxing, WrestleMania, Disney on Ice, college basketball)",
      newArenaPlans: "MSG special permit from NYC periodically renewed amid political dispute; Dolan has previously explored MSG Penn Station relocation concept; no imminent move announced"
    },
    media: {
      localTVDeal: "MSG Network (owned by MSG Sports Corp — same entity as the Knicks; vertically integrated); most valuable local NBA TV deal",
      streamingNotes: "Standard NBA League Pass; games on ABC/ESPN nationally; Knicks routinely receive primetime national slots",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "James L. Dolan (executive chairman, MSG Sports Corp)",
      ownerNetWorth: "~$2-3B est.; family wealth tied to Dolan media/cable empire",
      ownerBackground: "Inherited effective control from father Charles Dolan through Cablevision; Cablevision sold to Altice USA in 2016 for $17.7B; MSG was spun off and Dolan retained control via dual-class shares; also controls MSG Entertainment and MSG Networks",
      acquisitionYear: 1994,
      acquisitionPrice: null,
      currentValuation: 7.5,
      impliedReturn: "N/A — Dolan family inherited control through corporate succession; no external purchase price for isolated Knicks stake",
      ownershipGroup: [
        { name: "James Dolan", role: "executive chairman / controlling shareholder (MSG Sports Corp)", pct: null },
        { name: "Dolan family trust", role: "controlling voting block", pct: null }
      ],
      institutionalInvestors: "MSG Sports Corp (MSGS) is publicly traded on Nasdaq; float held by institutional investors; Dolan family retains voting control via dual-class structure",
      otherBusinessInterests: "New York Rangers (NHL, MSG Sports); MSG Networks (regional sports TV); MSG Entertainment (arena operations); Sphere Entertainment (Las Vegas Sphere)"
    },
    brand: {
      socialMedia: { instagram: "~5M", twitter: "~4M", facebook: "~7M" },
      merchandiseNotes: "Top-5 NBA merchandise franchise; strongest brand premium of any non-championship team in the league; New York market drives global recognition independent of performance",
      internationalFanbase: "Strong global brand; New York City provides unmatched baseline international recognition",
      notableSponsorships: ["Squarespace (jersey patch)", "Kia", "Goldman Sachs", "JPMorgan Chase"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Jalen Brunson — 4yr/$156.5M extension signed July 2023, $39.1M AAV, runs through 2026-27",
      starContracts: [
        { player: "Jalen Brunson", position: "PG", aav: 39.1, contractNote: "4yr/$156.5M extension (July 2023), through 2026-27" },
        { player: "Karl-Anthony Towns", position: "C", aav: 49.1, contractNote: "3yr/$147.5M signed 2024 after trade from Timberwolves; through 2026-27" },
        { player: "OG Anunoby", position: "SF", aav: 36.0, contractNote: "5yr extension signed 2024; key defensive anchor" }
      ]
    },
    analystNotes: "The Knicks' $7.5B Forbes 2024 valuation rests almost entirely on market premium and MSG's irreplaceable physical asset — the franchise has not won a title since 1973 yet commands a price-to-performance premium unmatched in American sports. The MSG operating permit (NYC's special permit granting operating rights at Penn Station) is the single largest binary risk: MSG is the most valuable arena site in global sports, and any disruption to operating rights would be a material event. Jalen Brunson's emergence as a genuine All-NBA point guard at the relatively efficient $39M AAV is the franchise's first credible basketball-driven value catalyst in 20 years. The KAT trade adds a proven second star but concentrates 2026-27 contract cliffs simultaneously."
  },

  "Philadelphia 76ers": {
    valuationHistory: [
      { year: 2019, value: 2.0,  source: "Forbes" },
      { year: 2020, value: 2.1,  source: "Forbes" },
      { year: 2021, value: 2.8,  source: "Forbes" },
      { year: 2022, value: 3.5,  source: "Forbes" },
      { year: 2023, value: 4.3,  source: "Forbes" },
      { year: 2024, value: 4.6,  source: "Forbes" },
    ],
    revenue: { estimate: 340, year: 2023, source: "Forbes est.", operatingIncome: 40 },
    transactions: [
      { year: 2011, price: 0.280, buyer: "Harris Blitzer Sports & Entertainment (Josh Harris, David Blitzer)", seller: "Comcast-Spectacor", notes: "Harris-led group paid $280M; record at the time for 76ers; Harris co-founded HBSE which also owns NJ Devils (NHL); Blitzer is Blackstone executive" }
    ],
    arena: {
      name: "Wells Fargo Center",
      yearOpened: 1996,
      capacity: 20478,
      ownershipModel: "owned by Comcast Spectacor (Comcast subsidiary); 76ers and Flyers are paying tenants with long-term leases",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 210,
      namingRightsDeal: { sponsor: "Wells Fargo", annualValue_M: 8, totalValue_M: null, expiryYear: null, notes: "Multi-decade relationship; ~$40M originally, extended; paid to Comcast Spectacor" },
      nonArenaRevenue: "76ers and Flyers do not control arena economics — Comcast Spectacor retains non-game revenue; teams pay rent per lease",
      newArenaPlans: "Original '76 Place at Market East' arena plan (Center City) abandoned January 2025; new plan is a 50/50 joint venture with Comcast Spectacor to build a new South Philly arena housing both 76ers and Flyers, estimated $1.5B+; would be adjacent to existing stadium complex"
    },
    media: {
      localTVDeal: "NBC Sports Philadelphia (Comcast-owned regional sports network); 76ers are one of two flagship tenants (with Flyers)",
      streamingNotes: "Standard NBA League Pass; games on ABC/ESPN nationally",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Josh Harris (managing partner, Harris Blitzer Sports & Entertainment)",
      ownerNetWorth: "Harris: ~$7B+ est. (Apollo Global co-founder); Blitzer: ~$1B+ est.",
      ownerBackground: "Harris is co-founder of Apollo Global Management; Blitzer is a senior executive at Blackstone; HBSE bought 76ers for $280M in 2011 — one of the best-timed PE-style sports acquisitions; Harris separately led the Washington Commanders NFL purchase for $6.05B in 2023 but retained 76ers ownership",
      acquisitionYear: 2011,
      acquisitionPrice: 0.280,
      currentValuation: 4.6,
      impliedReturn: "~16.4x in 13 years (~23% CAGR)",
      ownershipGroup: [
        { name: "Josh Harris", role: "managing partner / governor", pct: null },
        { name: "David Blitzer", role: "co-owner / limited partner", pct: null },
        { name: "David Adelman", role: "limited partner / real estate co-investor", pct: null }
      ],
      institutionalInvestors: "HBSE has taken on additional minority LPs over time; structure not fully public",
      otherBusinessInterests: "HBSE: NJ Devils (NHL); Crystal Palace FC (EPL); Harris: Apollo Global Management; Washington Commanders (NFL, separate buyer group but Harris led)"
    },
    brand: {
      socialMedia: { instagram: "~4M", twitter: "~3M", facebook: "~5M" },
      merchandiseNotes: "Process-era fanbase ('Trust the Process') created unusual cult following; Embiid drives international interest particularly in Cameroon/Africa; brand dependent on health and availability of star players",
      internationalFanbase: "Growing international profile driven by Embiid (Cameroonian) and Maxey; Philadelphia market strong but mid-tier nationally",
      notableSponsorships: ["Integrity Express Logistics (jersey patch)", "Wells Fargo (arena naming)", "Ticketmaster/Live Nation", "Xfinity (Comcast — landlord synergy)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Joel Embiid — max extension signed 2024, $64.3M AAV, through 2028-29",
      starContracts: [
        { player: "Joel Embiid", position: "C", aav: 64.3, contractNote: "3yr/$192.9M max extension (2024), through 2028-29; highest AAV in NBA at signing" },
        { player: "Tyrese Maxey", position: "PG", aav: 40.8, contractNote: "5yr/$204M max extension (2024), through 2028-29" },
        { player: "Paul George", position: "SF", aav: 53.0, contractNote: "4yr/$212M signed 2024 (free agent from Clippers), through 2027-28" }
      ]
    },
    analystNotes: "The 76ers are the most health-dependent valuation in the NBA: Joel Embiid's $64.3M AAV is the highest individual AAV in league history, and his chronic injury history (knee, face, and availability concerns) creates a binary outcome for the franchise — healthy Embiid is a legitimate title threat; unavailable Embiid is dead cap with middling playoff performance. The South Philly joint-venture arena plan (50/50 with Comcast Spectacor, replacing abandoned Center City scheme) is potentially transformative if the team gains economic participation in a modern venue, but the timeline and political approvals add execution risk. HBSE's ~16x return trajectory since 2011 is one of the best in sports PE."
  },

  "Toronto Raptors": {
    valuationHistory: [
      { year: 2019, value: 1.8,  source: "Forbes" },
      { year: 2020, value: 2.0,  source: "Forbes" },
      { year: 2021, value: 2.6,  source: "Forbes" },
      { year: 2022, value: 3.0,  source: "Forbes" },
      { year: 2023, value: 3.6,  source: "Forbes" },
      { year: 2024, value: 4.1,  source: "Sportico / Forbes est." },
    ],
    revenue: { estimate: 320, year: 2023, source: "Forbes est.", operatingIncome: 50 },
    transactions: [
      { year: 2024, price: null, buyer: "Rogers Communications (37.5% stake in MLSE)", seller: "BCE (Bell Canada)", notes: "Rogers agreed to buy Bell's 37.5% MLSE stake for CA$4.7B in Sept 2024; deal closed July 2025; Rogers now holds 75% of MLSE; Larry Tanenbaum retains 25%; total MLSE implied valuation CA$12.5B+ (Raptors + Maple Leafs + Scotiabank Arena + MLS/CFL assets). Rogers has option to acquire Tanenbaum's 25% by 2026 per Sportico reports" }
    ],
    arena: {
      name: "Scotiabank Arena",
      yearOpened: 1999,
      capacity: 19800,
      ownershipModel: "owned by MLSE (not isolated to Raptors; shared with NHL Maple Leafs under same parent); one of the most valuable dual-tenant arena assets in North America",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 265,
      namingRightsDeal: { sponsor: "Scotiabank (Bank of Nova Scotia)", annualValue_M: 30, totalValue_M: 800, expiryYear: 2038, notes: "20-year deal signed 2017 valued at CA$800M (~$38M USD/year at signing); among the largest naming rights deals in global sports; paid to MLSE" },
      nonArenaRevenue: "MLSE controls all arena economics; Raptors and Maple Leafs operate in the same parent — no arm's-length rent; arena also hosts Maple Leafs games (NHL's most valuable franchise), concerts, WNBA Toronto (potential), Rogers events",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Sportsnet (Rogers Communications regional network — same parent as majority MLSE owner; vertically integrated post-2025); national Canadian broadcast rights via Sportsnet and TSN",
      streamingNotes: "Canadian market has separate CRTC regulatory framework; NBA League Pass available in Canada; Sportsnet carries significant Raptors programming",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon); Canadian broadcast market handled separately"
    },
    ownership: {
      primaryOwner: "MLSE — Maple Leaf Sports & Entertainment; majority owned by Rogers Communications (75% as of July 2025)",
      ownerNetWorth: "Rogers Communications: ~CA$60B market cap (TSX-listed); Tanenbaum/Kilmer Sports: private",
      ownerBackground: "MLSE is one of the most valuable sports/entertainment companies in Canada; owns Raptors, Maple Leafs (NHL), Toronto FC (MLS), Toronto Argonauts (CFL), Scotiabank Arena. BCE sold its 37.5% stake to Rogers for CA$4.7B agreed Sept 2024, closed July 2025 — creating a vertically integrated Rogers ecosystem (owns broadcast rights + team + arena). Tanenbaum's 25% option to Rogers expected by 2026",
      acquisitionYear: 2024,
      acquisitionPrice: null,
      currentValuation: 4.1,
      impliedReturn: "Raptors standalone appreciation difficult to isolate from MLSE bundle; MLSE total implied CA$12.5B+ vs original franchise acquisition at much lower prices in 1990s",
      ownershipGroup: [
        { name: "Rogers Communications", role: "majority shareholder (75%) of MLSE", pct: "75%" },
        { name: "Larry Tanenbaum / Kilmer Sports", role: "minority shareholder (25%) of MLSE; option for Rogers to buy by 2026", pct: "25%" }
      ],
      institutionalInvestors: "MLSE itself is institutionally owned; Rogers is a public company (TSX: RCI)",
      otherBusinessInterests: "MLSE: Toronto Maple Leafs (NHL), Toronto FC (MLS), Toronto Argonauts (CFL), Scotiabank Arena. Rogers: major Canadian telecom, Sportsnet broadcast network"
    },
    brand: {
      socialMedia: { instagram: "~4M", twitter: "~3.5M", facebook: "~6M" },
      merchandiseNotes: "2019 championship created sustained merchandise and fanbase expansion; only NBA franchise in Canada with national market; brand transcends Toronto into country-wide following",
      internationalFanbase: "Unique position as Canada's NBA team drives national-scale fanbase unavailable to US teams competing in single-market cities; strong following in Caribbean communities",
      notableSponsorships: ["Sun Life Financial (jersey patch)", "Scotiabank (arena naming)", "Rogers (parent company)", "Air Canada (historical)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Scottie Barnes — 5yr/$225M supermax extension signed July 2024, $45M AAV, effective 2025-26 through 2029-30 (eligible for $270M with performance bonuses)",
      starContracts: [
        { player: "Scottie Barnes", position: "PF/SF", aav: 45.0, contractNote: "5yr/$225M supermax (July 2024), effective 2025-26 through 2029-30; could reach $270M with bonuses" },
        { player: "RJ Barrett", position: "SG/SF", aav: 24.0, contractNote: "Acquired from Knicks in 2023 trade; on existing max extension" }
      ]
    },
    analystNotes: "The Raptors' key valuation story is the MLSE bundle: as the only NBA franchise in Canada, Toronto captures national-scale fanbase economics unavailable to any US mid-market team. The Rogers-Bell MLSE restructuring (CA$4.7B for 37.5% implies CA$12.5B total MLSE value) underscores how the combined Raptors + Leafs + arena entity is worth multiples of any individual asset. The Rogers vertical integration — owning broadcast rights, telecoms infrastructure, and now 75% of the team — creates a closed-loop media/sports ecosystem with no direct US analog. The Scottie Barnes supermax is the franchise's bet on a young franchise player, but the rebuild is at an early stage post-2019 championship core (Lowry, Siakam traded away 2022-24)."
  },

  "Chicago Bulls": {
    valuationHistory: [
      { year: 2019, value: 3.2,  source: "Forbes" },
      { year: 2020, value: 3.1,  source: "Forbes" },
      { year: 2021, value: 3.5,  source: "Forbes" },
      { year: 2022, value: 4.1,  source: "Forbes" },
      { year: 2023, value: 4.6,  source: "Forbes" },
      { year: 2024, value: 5.0,  source: "Forbes" },
    ],
    revenue: { estimate: 296, year: 2023, source: "Forbes", operatingIncome: 57 },
    transactions: [
      { year: 1985, price: 0.016, buyer: "Jerry Reinsdorf group (Reinsdorf + Judd Malkin)", seller: "Jonathan Kovler / Lester Crown group", notes: "Reinsdorf-led group paid $16M for majority stake; closed March 1985; Reinsdorf also bought Chicago White Sox (MLB) in 1981 for $19M" }
    ],
    arena: {
      name: "United Center",
      yearOpened: 1994,
      capacity: 20917,
      ownershipModel: "privately owned — co-owned 50/50 by Bulls (Reinsdorf) and Blackhawks (Wirtz family) through United Center Joint Venture; one of the few major arenas co-owned by two team ownership groups",
      teamOwnsLand: true,
      publicSubsidy: 18,
      privateFinancing: 175,
      namingRightsDeal: { sponsor: "United Airlines", annualValue_M: 9, totalValue_M: null, expiryYear: 2034, notes: "Long-running deal extended through ~2034; est. $8-10M/year currently; original 1994 deal at $1.8M/year — one of the longest-running naming rights relationships in American sports; paid to United Center Joint Venture (Bulls + Blackhawks)" },
      nonArenaRevenue: "Bulls retain 50% of arena economics including naming rights, premium seating, and non-game events; Blackhawks share the other 50%; United Center hosts concerts, boxing, college events, family shows",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Chicago Sports Network (CHSN) — Bulls, Blackhawks, Cubs, and White Sox joint RSN venture launched September 2024, replacing NBC Sports Chicago; direct-to-consumer and cable model",
      streamingNotes: "CHSN available DTC and via cable/satellite; standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Jerry Reinsdorf (chairman, ~40% stake)",
      ownerNetWorth: "~$1.5-2B est. (primarily tied to franchise values)",
      ownerBackground: "Real estate developer who bought Bulls for $16M in 1985 and White Sox in 1981 for $19M; Jordan dynasty owner; remains one of most influential owners in NBA history despite no title since 1998; now in his 80s; succession planning is an ongoing question",
      acquisitionYear: 1985,
      acquisitionPrice: 0.016,
      currentValuation: 5.0,
      impliedReturn: "~312x in 40 years on the majority stake (~15% CAGR)",
      ownershipGroup: [
        { name: "Jerry Reinsdorf", role: "chairman / managing partner (~40%)", pct: "~40%" },
        { name: "Reinsdorf family & co-investors", role: "remaining minority stakes", pct: null }
      ],
      institutionalInvestors: "No significant institutional investment; Reinsdorf-family controlled",
      otherBusinessInterests: "Chicago White Sox (MLB) — same Reinsdorf ownership; United Center 50% stake (co-owned with Blackhawks)"
    },
    brand: {
      socialMedia: { instagram: "~5M", twitter: "~3.5M", facebook: "~8M" },
      merchandiseNotes: "Michael Jordan legacy sustains Bulls as global merchandise juggernaut; red-and-black colorway among most recognized in sports worldwide; current team performance well below legacy brand positioning",
      internationalFanbase: "Among NBA's strongest international brands globally — Jordan's 1990s dominance created generational fandom that persists independent of current results; particularly strong in Europe and Asia",
      notableSponsorships: ["Motorola (jersey patch)", "United Airlines (arena naming)", "Advocate Health", "DraftKings"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Zach LaVine — 5yr/$215.2M max signed July 2022, $43M AAV, through 2026-27",
      starContracts: [
        { player: "Zach LaVine", position: "SG", aav: 43.0, contractNote: "5yr/$215.2M max (July 2022), through 2026-27; frequent subject of trade speculation" },
        { player: "Nikola Vucevic", position: "C", aav: 22.0, contractNote: "Extended; veteran anchor" }
      ]
    },
    analystNotes: "The Bulls at $5.0B are a case study in brand value divorced from performance: Michael Jordan's 1990s dynasty created a global recognition floor that keeps Chicago among the NBA's most valuable franchises despite no playoff success in over a decade. The United Center co-ownership (50/50 with the Blackhawks) is a distinctive asset — Reinsdorf participates in arena economics that most NBA tenants forgo. The LaVine $43M AAV through 2026-27 is the central roster question: he is among the most trade-rumored stars in the league, and a successful LaVine exit could accelerate a rebuild or, if executed poorly, set the franchise back further. CHSN's launch as a joint Bulls/Blackhawks/Cubs/Sox DTC network is a structurally interesting RSN experiment in a post-Bally Sports landscape."
  },

  "Cleveland Cavaliers": {
    valuationHistory: [
      { year: 2019, value: 1.4,  source: "Forbes" },
      { year: 2020, value: 1.35, source: "Forbes" },
      { year: 2021, value: 1.5,  source: "Forbes" },
      { year: 2022, value: 2.1,  source: "Forbes" },
      { year: 2023, value: 2.9,  source: "Forbes" },
      { year: 2024, value: 3.95, source: "Sportico / CNBC est." },
    ],
    revenue: { estimate: 265, year: 2023, source: "Forbes est.", operatingIncome: 40 },
    transactions: [
      { year: 2005, price: 0.375, buyer: "Dan Gilbert", seller: "Gordon Gund", notes: "Gilbert paid $375M; record NBA sale at the time; Gilbert simultaneously acquired arena naming rights; Gund had owned franchise since 1983" }
    ],
    arena: {
      name: "Rocket Arena",
      yearOpened: 1994,
      capacity: 19432,
      ownershipModel: "arena owned by Gateway Economic Development Corp (public entity), leased to Cavaliers; $185M renovation completed 2019; Cavaliers operate the facility",
      teamOwnsLand: false,
      publicSubsidy: 185,
      privateFinancing: 185,
      namingRightsDeal: { sponsor: "Rocket Companies (Dan Gilbert's company)", annualValue_M: 10, totalValue_M: null, expiryYear: null, notes: "Arena renamed Rocket Mortgage FieldHouse in 2019 when Gilbert's Quicken Loans rebranded to Rocket Mortgage; renamed again to simply 'Rocket Arena' in February 2025 when Rocket Companies rebranded; self-dealing arrangement — Gilbert owns both the team and Rocket Companies; est. $10M/year" },
      nonArenaRevenue: "Rock Entertainment Group (Gilbert's entity) controls ancillary events; Cleveland Monsters (AHL) also play at Rocket Arena",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Ohio (Sinclair Broadcast Group / Diamond Sports Group regional network; RSN industry in flux post-Diamond bankruptcy)",
      streamingNotes: "Standard NBA League Pass; Diamond Sports Group RSN availability subject to ongoing bankruptcy/restructuring",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Dan Gilbert (100% owner)",
      ownerNetWorth: "~$27-40B est.; founder of Rocket Companies (Quicken Loans); one of wealthiest NBA owners",
      ownerBackground: "Founded Quicken Loans (now Rocket Mortgage/Rocket Companies) in 1985; became one of largest mortgage lenders in the US; bought Cavaliers in 2005 for $375M; wrote famous 'comic sans letter' when LeBron left in 2010; had a stroke in May 2019 but remains active owner; also major real estate developer in downtown Cleveland and Detroit",
      acquisitionYear: 2005,
      acquisitionPrice: 0.375,
      currentValuation: 3.95,
      impliedReturn: "~10.5x in 19 years (~13% CAGR)",
      ownershipGroup: [
        { name: "Dan Gilbert", role: "owner / governor", pct: "100%" }
      ],
      institutionalInvestors: "None significant; Gilbert retains full control",
      otherBusinessInterests: "Rocket Companies (NYSE: RKT — mortgage/fintech platform); Rock Ventures (private equity/real estate); major Detroit and Cleveland urban development holdings; Cleveland Monsters (AHL)"
    },
    brand: {
      socialMedia: { instagram: "~2.5M", twitter: "~2M", facebook: "~4M" },
      merchandiseNotes: "LeBron-era (2003-2010, 2014-2018) created national following that faded post-LeBron departure; 2016 championship provided permanent credibility; Mitchell-era creating fresh fanbase cycle",
      internationalFanbase: "Moderate; Donovan Mitchell has European following; 2016 championship made Cleveland a culturally significant market",
      notableSponsorships: ["Goodyear (jersey patch)", "Rocket Companies (arena naming — self-dealing)", "Sherwin-Williams", "Rock Financial (Gilbert ecosystem)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Donovan Mitchell — extension signed 2023, $32.7M AAV; Evan Mobley max extension $53.8M AAV effective 2024-25",
      starContracts: [
        { player: "Donovan Mitchell", position: "SG/PG", aav: 32.7, contractNote: "5yr/$163.5M supermax (2023), player option 2027-28; acquired from Jazz in 2022 trade" },
        { player: "Evan Mobley", position: "C/PF", aav: 53.8, contractNote: "5yr/$269M max extension (effective 2024-25), through 2028-29; highest-upside young big in the East" },
        { player: "Darius Garland", position: "PG", aav: 33.0, contractNote: "Max extension; through 2026-27" }
      ]
    },
    analystNotes: "The Cavaliers are the NBA's most compelling mid-market rebuild story: valuation jumped from $1.35B (2020) to ~$3.95B (2024) — nearly 3x in four years — driven by the Garland/Mitchell/Mobley/Allen young core assembling organically and via the Mitchell trade. The self-dealing naming rights structure (Dan Gilbert owns both the team and Rocket Companies, which pays arena naming rights) compresses comparable transaction data but is common in single-owner scenarios. The RSN risk (Bally Sports Ohio in Diamond Sports Group bankruptcy) is a near-term media revenue overhang. Mobley's $53.8M max extension is the franchise's highest-value bet — a long, switchable center with offensive upside who could be a top-5 player in his prime."
  },

  "Detroit Pistons": {
    valuationHistory: [
      { year: 2019, value: 1.2,  source: "Forbes" },
      { year: 2020, value: 1.2,  source: "Forbes" },
      { year: 2021, value: 1.35, source: "Forbes" },
      { year: 2022, value: 1.6,  source: "Forbes" },
      { year: 2023, value: 1.8,  source: "Forbes" },
      { year: 2024, value: 2.4,  source: "Sportico / CNBC est." },
    ],
    revenue: { estimate: 331, year: 2024, source: "CNBC 2026 season data", operatingIncome: 114 },
    transactions: [
      { year: 2011, price: 0.325, buyer: "Tom Gores / Platinum Equity", seller: "Karen Davidson (widow of Bill Davidson)", notes: "Gores paid $325M for Palace Sports & Entertainment (Pistons + arena assets); closed June 2011; Platinum Equity is Beverly Hills-based PE firm" },
      { year: 2015, price: null, buyer: "Tom Gores (increased to 100%)", seller: "Remaining minority holders", notes: "Gores consolidated to full ownership; reported additional ~$800M consideration" }
    ],
    arena: {
      name: "Little Caesars Arena",
      yearOpened: 2017,
      capacity: 20332,
      ownershipModel: "arena owned by Olympia Development / Ilitch family (Detroit Red Wings ownership group); Pistons and Red Wings are co-tenants paying rent; Gores/Pistons do NOT own the arena",
      teamOwnsLand: false,
      publicSubsidy: 324,
      privateFinancing: 539,
      namingRightsDeal: { sponsor: "Little Caesars Pizza", annualValue_M: 6, totalValue_M: 120, expiryYear: 2037, notes: "20-year, $120M deal ($6M/year); paid to Olympia Development (Ilitch family — arena owner, not Pistons)" },
      nonArenaRevenue: "Pistons do not control arena economics; Ilitch family retains all non-game and naming revenue; arena also hosts Red Wings (NHL) and concerts",
      newArenaPlans: "None announced; Pistons moved downtown from Auburn Hills (Palace of Auburn Hills) in 2017 per Gores mandate to revitalize downtown Detroit"
    },
    media: {
      localTVDeal: "Bally Sports Detroit (Sinclair/Diamond Sports Group regional network; RSN industry in flux post-Diamond bankruptcy)",
      streamingNotes: "Standard NBA League Pass; Diamond Sports Group RSN availability subject to ongoing bankruptcy/restructuring",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Tom Gores (Platinum Equity founder/CEO)",
      ownerNetWorth: "~$10.1B est.; Platinum Equity manages ~$48B AUM",
      ownerBackground: "Born in Michigan; founded Platinum Equity in 1995 specializing in carve-outs and operationally complex transactions; bought Pistons as local pride investment in 2011; led move from suburban Auburn Hills to downtown Detroit's Little Caesars Arena in 2017; controversial ownership due to poor team performance and fan frustration",
      acquisitionYear: 2011,
      acquisitionPrice: 0.325,
      currentValuation: 2.4,
      impliedReturn: "~7.4x in 13 years (~15% CAGR) on original $325M basis",
      ownershipGroup: [
        { name: "Tom Gores", role: "owner / governor (Platinum Equity)", pct: "100%" }
      ],
      institutionalInvestors: "No external investors; Gores controls through Platinum Equity vehicle",
      otherBusinessInterests: "Platinum Equity: ~$48B AUM across telecom, media, industrial, technology sectors; no major disclosed co-sports investments"
    },
    brand: {
      socialMedia: { instagram: "~1.8M", twitter: "~1.5M", facebook: "~3M" },
      merchandiseNotes: "Bad Boys 1988-90 legacy and Pistons blue-collar identity maintain brand recognition above current performance; Cade Cunningham generating fresh marketing cycle; among lowest current brand equity in NBA",
      internationalFanbase: "Limited; Detroit market is primarily local; Cunningham building domestic following",
      notableSponsorships: ["Flagstar Bank (jersey patch)", "Little Caesars (arena naming — paid to Ilitch, not Pistons)", "Rocket Companies (Gilbert-adjacent Detroit ecosystem)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Cade Cunningham — 5yr max extension ~$224M signed summer 2024, $44.8M AAV",
      starContracts: [
        { player: "Cade Cunningham", position: "PG", aav: 44.8, contractNote: "5yr/$224M max extension (summer 2024); franchise cornerstone through 2028-29" },
        { player: "Jalen Duren", position: "C", aav: 18.0, contractNote: "Extension; young anchor in frontcourt" }
      ]
    },
    analystNotes: "The Pistons are the NBA's most straightforward turnaround bet: Detroit is a large market with deep basketball history, the franchise sits at the league's valuation floor (~$2.4B), and Cade Cunningham's $44.8M max extension is the cornerstone of a rebuild centered on the 2021 #1 draft pick. The structural disadvantage is arena economics: Gores/Pistons pay rent to the Ilitch family's Olympia Development for Little Caesars Arena and do not participate in naming rights or non-game revenue — a meaningful gap vs. arena-owning peers. The team had zero playoff appearances in five years heading into 2024-25, creating outsized upside if Cunningham + Duren develop as projected but also validating the discount at current valuation. Revenue of $331M with $114M operating income (2024-25 per CNBC) is stronger than the valuation gap suggests, indicating new-deal economics are already flowing."
  }

,

  // --- EASTERN CONFERENCE — CENTRAL DIVISION (cont.) ---

  "Indiana Pacers": {
    valuationHistory: [
      { year: 2019, value: 1.4,  source: "Forbes" },
      { year: 2020, value: 1.45, source: "Forbes" },
      { year: 2021, value: 1.58, source: "Forbes" },
      { year: 2022, value: 1.95, source: "Forbes" },
      { year: 2023, value: 3.0,  source: "Forbes" },
      { year: 2024, value: 3.6,  source: "Forbes/Sportico" },
    ],
    revenue: { estimate: 285, year: 2024, source: "Forbes/Sportico est.", operatingIncome: 35 },
    transactions: [
      { year: 1983, price: 0.0105, buyer: "Herb Simon (Simon Property Group)", seller: "Previous ownership group", notes: "Simon purchased franchise for $10.5M; family has operated continuously for 40+ years — longest active ownership tenure in NBA" },
      { year: 2024, price: null, buyer: "Steven Rales (Danaher co-founder)", seller: "Herb Simon (partial)", notes: "Rales acquired ~20% stake pending NBA approval; Danaher co-founder adds institutional credibility to the franchise" }
    ],
    arena: {
      name: "Gainbridge Fieldhouse",
      yearOpened: 1999,
      capacity: 17274,
      ownershipModel: "City of Indianapolis owns arena via Capital Improvement Board; Pacers operate under long-term lease; $360M renovation completed 2023 largely franchise-funded",
      teamOwnsLand: false,
      publicSubsidy: 79,
      privateFinancing: 464,
      namingRightsDeal: { sponsor: "Gainbridge (Global Indemnity/OneAmerica affiliate)", annualValue_M: 5, totalValue_M: 55, expiryYear: 2031, notes: "11-year deal starting 2021 at ~$5M/yr" },
      nonArenaRevenue: "Adjacent Bicentennial Unity Plaza; Pacers operate as arena tenant with limited direct non-game economics",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Indiana / FanDuel Sports Network, ~$12M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Herb Simon (Simon Property Group founder/chairman)",
      ownerNetWorth: "~$3-4B est. (Simon Property Group real estate holdings)",
      ownerBackground: "Shopping mall real estate billionaire; co-founder of Simon Property Group (world's largest REIT); purchased franchise with brother Mel Simon for $10.5M in 1983; Mel died 2009; Herb has held sole control since; Steven Rales acquired ~20% in 2024",
      acquisitionYear: 1983,
      acquisitionPrice: 0.0105,
      currentValuation: 3.6,
      impliedReturn: "~343x in 42 years (~15% CAGR)",
      ownershipGroup: [
        { name: "Herb Simon", role: "owner/governor (~80%)", pct: "~80%" },
        { name: "Steven Rales", role: "minority (~20%, pending)", pct: "~20%" }
      ],
      institutionalInvestors: "Rales is a private individual investor (Danaher co-founder); no institutional PE fund",
      otherBusinessInterests: "Simon Property Group (NYSE: SPG — world's largest REIT, 230+ US malls and premium outlets)"
    },
    brand: {
      socialMedia: { instagram: "~2.5M", twitter: "~1.5M", facebook: "~3M" },
      merchandiseNotes: "Small-market franchise with passionate Indiana basketball culture; Haliburton All-Star emergence driving fresh merchandise cycle",
      internationalFanbase: "Primarily domestic Midwest fanbase; limited international following",
      notableSponsorships: ["Gainbridge (arena naming)", "Community Health Network (jersey patch)", "Indiana Farm Bureau Insurance", "Indiana Fever WNBA (co-tenant)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Tyrese Haliburton — 5yr/$224M max extension (2023), $44.8M AAV, through 2027-28; led Pacers to 2024 Eastern Conference Finals",
      starContracts: [
        { player: "Tyrese Haliburton", position: "PG", aav: 44.8, contractNote: "5yr/$224M max (2023), through 2027-28; 2024 All-Star" },
        { player: "Myles Turner", position: "C", aav: 30.0, contractNote: "4yr/$120M (2024), through 2027-28" }
      ]
    },
    analystNotes: "Herb Simon's 42-year tenure makes the Pacers the NBA's most stable small-market ownership story — the $10.5M purchase has returned ~343× in value. The $360M Gainbridge Fieldhouse renovation (largely franchise-funded, completed 2023) reflects family commitment without public arena leverage. Haliburton's emergence as a top-10 NBA player and the 2024 Eastern Conference Finals run resets the franchise's commercial trajectory; Indianapolis is a rare small-market team with legitimate championship aspirations and a clean balance sheet."
  },

  // --- EASTERN CONFERENCE — SOUTHEAST DIVISION ---

  "Atlanta Hawks": {
    valuationHistory: [
      { year: 2019, value: 1.55, source: "Forbes" },
      { year: 2020, value: 1.6,  source: "Forbes" },
      { year: 2021, value: 1.8,  source: "Forbes" },
      { year: 2022, value: 2.1,  source: "Forbes" },
      { year: 2023, value: 2.45, source: "Forbes" },
      { year: 2024, value: 2.8,  source: "Forbes" },
    ],
    revenue: { estimate: 295, year: 2024, source: "Forbes est.", operatingIncome: 40 },
    transactions: [
      { year: 2015, price: 0.73, buyer: "Tony Ressler group (Apollo Global co-founder)", seller: "Atlanta Spirit Group", notes: "Ressler-led group acquired for ~$730M; deal included State Farm Arena operating rights; franchise more than doubled in value under Ressler's tenure" }
    ],
    arena: {
      name: "State Farm Arena",
      yearOpened: 1999,
      capacity: 16888,
      ownershipModel: "arena primarily privately built (1999); major 2018 renovation city-financed; Hawks operate and retain management/event rights under operating agreement",
      teamOwnsLand: false,
      publicSubsidy: 143,
      privateFinancing: 271,
      namingRightsDeal: { sponsor: "State Farm Insurance", annualValue_M: 15, totalValue_M: 300, expiryYear: 2038, notes: "20-year deal signed 2018 at ~$15M/yr — one of NBA's stronger local naming rights values" },
      nonArenaRevenue: "Hawks retain non-game event revenue under operating agreement; concerts and events supplement game-day income",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Southeast / FanDuel Sports Network, ~$15M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Tony Ressler (Apollo Global Management co-founder)",
      ownerNetWorth: "~$8B est. (Apollo Global co-founder; ~$700B AUM firm)",
      ownerBackground: "Ressler co-founded Apollo Global Management in 1990; acquired Hawks in 2015 for $730M; PE background drives analytical ownership approach; Grant Hill (NBA Hall of Famer) is a minority owner and senior executive",
      acquisitionYear: 2015,
      acquisitionPrice: 0.73,
      currentValuation: 2.8,
      impliedReturn: "~3.8x in 9 years (~18% CAGR)",
      ownershipGroup: [
        { name: "Tony Ressler", role: "managing partner/governor", pct: null },
        { name: "Grant Hill", role: "minority owner and vice chairman", pct: null }
      ],
      institutionalInvestors: "None disclosed",
      otherBusinessInterests: "Apollo Global Management (NYSE: APO)"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2M", facebook: "~4.5M" },
      merchandiseNotes: "Underperforms Atlanta's 9th-largest DMA in merchandise; Trae Young drives younger demographic; limited sustained national following",
      internationalFanbase: "Moderate; Trae Young has international social media following; Atlanta market growing in diversity and corporate base",
      notableSponsorships: ["State Farm (arena naming)", "Sharecare (jersey patch)", "Chick-fil-A (Atlanta corporate)", "Truist Bank"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Trae Young — 5yr/$215M max extension (2021), $43M AAV, through 2025-26; Jalen Johnson emerging as co-star",
      starContracts: [
        { player: "Trae Young", position: "PG", aav: 43.0, contractNote: "5yr/$215M max (2021), through 2025-26; frequent trade speculation" },
        { player: "Jalen Johnson", position: "SF", aav: 32.5, contractNote: "4yr/$130M (2024), through 2027-28; emerging franchise co-star" }
      ]
    },
    analystNotes: "Atlanta's 9th-largest DMA creates a structural valuation floor that the franchise has consistently underperformed — fan attendance and loyalty metrics lag large-market peers. The 2018 State Farm Arena renovation ($200M, with $142.5M from the city) upgraded premium amenities at favorable financing terms. Trae Young's trade demand creates near-term uncertainty, but Jalen Johnson's emergence provides a succession narrative. Ressler's private equity background favors patient value creation; at $2.8B in the 9th DMA, the Hawks remain meaningfully undervalued vs. similarly sized markets."
  },

  "Charlotte Hornets": {
    valuationHistory: [
      { year: 2019, value: 1.5,  source: "Forbes" },
      { year: 2020, value: 1.55, source: "Forbes" },
      { year: 2021, value: 1.68, source: "Forbes" },
      { year: 2022, value: 1.95, source: "Forbes" },
      { year: 2023, value: 3.0,  source: "Forbes / implied by Jordan sale" },
      { year: 2024, value: 3.39, source: "Forbes" },
    ],
    revenue: { estimate: 280, year: 2024, source: "Forbes est.", operatingIncome: 30 },
    transactions: [
      { year: 2010, price: 0.275, buyer: "Michael Jordan", seller: "Robert Johnson (BET founder)", notes: "Jordan acquired controlling interest for $275M; first former NBA player to become majority owner of an NBA franchise" },
      { year: 2023, price: 3.0, buyer: "Gabe Plotkin & Rick Schnall (20+ investor group)", seller: "Michael Jordan", notes: "Plotkin/Schnall group acquired majority at $3B valuation; included Hornets, Greensboro Swarm (G League), Hornets Venom GT (NBA 2K), and Spectrum Center operating rights" }
    ],
    arena: {
      name: "Spectrum Center",
      yearOpened: 2005,
      capacity: 19432,
      ownershipModel: "City-owned via municipal bonds repaid through hotel/rental car taxes; Hornets pay ~$1M/yr rent; new ownership committed $215M private renovation capital ('Re!magine') plus city approved $300M in improvements",
      teamOwnsLand: false,
      publicSubsidy: 265,
      privateFinancing: 215,
      namingRightsDeal: { sponsor: "Charter Communications (Spectrum brand)", annualValue_M: 13, totalValue_M: null, expiryYear: null, notes: "Multi-year deal at ~$13M/yr — notable deal for a city-owned venue" },
      nonArenaRevenue: "Plotkin/Schnall's $215M Re!magine renovation and $300M city-approved improvements transforming arena economics toward partial-ownership benefits",
      newArenaPlans: "$300M additional city-approved arena improvements underway (2025); total ~$475M in upcoming upgrades"
    },
    media: {
      localTVDeal: "Bally Sports Southeast / FanDuel Sports Network, ~$13M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Gabe Plotkin & Rick Schnall (co-lead, 20+ investor group)",
      ownerNetWorth: "Plotkin: ~$800M est. (Melvin Capital); Schnall: ~$500M est. (private credit)",
      ownerBackground: "Plotkin (Melvin Capital founder, who survived the 2021 GameStop short squeeze losses) and Schnall co-led consortium purchasing majority from Michael Jordan at $3B in 2023; 20+ member investor group includes tech, finance, and media executives; Jordan retained small stake",
      acquisitionYear: 2023,
      acquisitionPrice: 3.0,
      currentValuation: 3.39,
      impliedReturn: "Minimal — recent acquisition; $3.0B → $3.39B since 2023",
      ownershipGroup: [
        { name: "Gabe Plotkin", role: "co-lead managing partner", pct: null },
        { name: "Rick Schnall", role: "co-lead managing partner", pct: null },
        { name: "Michael Jordan", role: "small retained minority", pct: null }
      ],
      institutionalInvestors: "20+ investor consortium includes hedge fund, tech, and finance executives",
      otherBusinessInterests: "Plotkin: managing personal capital post-Melvin Capital closure (2022)"
    },
    brand: {
      socialMedia: { instagram: "~3M", twitter: "~2M", facebook: "~4M" },
      merchandiseNotes: "LaMelo Ball driving significant jersey sales; Jordan Brand heritage elevates franchise baseline; Charlotte corporate market growing rapidly with relocations from Northeast",
      internationalFanbase: "LaMelo's Shoes brand and social media create international following above market size expectations",
      notableSponsorships: ["Spectrum/Charter (arena naming)", "Ally Financial (jersey patch)", "Bojangles (Charlotte local)", "Hendrick Motorsports NASCAR crossover"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "LaMelo Ball — 5yr/$204M max extension (2023), $40.8M AAV, through 2027-28",
      starContracts: [
        { player: "LaMelo Ball", position: "PG", aav: 40.8, contractNote: "5yr/$204M max (2023), through 2027-28; injury history the primary risk" }
      ]
    },
    analystNotes: "The Plotkin/Schnall acquisition at $3B was immediately followed by $215M+ in private arena investment — a PE-style infrastructure play betting on LaMelo Ball's health and Charlotte's emerging market. LaMelo Ball's health and development is the franchise's singular valuation variable: when healthy, he drives top-15 jersey sales and national TV interest; when injured, the franchise loses its entire commercial premium. Charlotte is an emerging market with strong corporate growth and demographic tailwinds, positioning the Hornets for meaningful DMA appreciation if LaMelo delivers on his generational potential."
  },

  "Miami Heat": {
    valuationHistory: [
      { year: 2019, value: 1.71, source: "Forbes" },
      { year: 2020, value: 1.8,  source: "Forbes" },
      { year: 2021, value: 2.0,  source: "Forbes" },
      { year: 2022, value: 2.8,  source: "Forbes" },
      { year: 2023, value: 3.35, source: "Forbes" },
      { year: 2024, value: 4.0,  source: "Forbes" },
    ],
    revenue: { estimate: 380, year: 2024, source: "Forbes", operatingIncome: 65 },
    transactions: [
      { year: 1988, price: 0.0325, buyer: "Micky Arison group", seller: "NBA expansion", notes: "Miami Heat was an NBA expansion franchise; Arison (Carnival Cruise Line) paid $32.5M expansion fee; family has owned continuously since founding in 1988" }
    ],
    arena: {
      name: "Kaseya Center",
      yearOpened: 1999,
      capacity: 19600,
      ownershipModel: "Miami-Dade County owns arena; Heat pay no rent and receive operating subsidies; county paid $64M in direct subsidies; arena sits on $38M of county-owned land — one of the most favorable arena economic structures in the NBA",
      teamOwnsLand: false,
      publicSubsidy: 213,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Kaseya (IT management software)", annualValue_M: 7, totalValue_M: 117, expiryYear: 2040, notes: "17-year, $117.4M deal signed 2023; previously FTX Arena (deal canceled Nov 2022 after FTX collapse); before that AmericanAirlines Arena 1999-2021" },
      nonArenaRevenue: "Heat have no direct arena ownership but favorable county lease generates strong concessions and events margin; ancillary economics effectively accrue to team under operating arrangement",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Sun / FanDuel Sports Network, ~$20M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Micky Arison (Carnival Cruise Line chairman)",
      ownerNetWorth: "~$9-10B est. (Carnival Corporation majority owner)",
      ownerBackground: "Arison co-founded the Heat as an NBA expansion franchise in 1988; has owned continuously for 37+ years through founding; Pat Riley joined in 1995 and is the most consequential basketball executive in franchise history; family retains 100% control",
      acquisitionYear: 1988,
      acquisitionPrice: 0.0325,
      currentValuation: 4.0,
      impliedReturn: "~123x in 37 years (~14% CAGR)",
      ownershipGroup: [
        { name: "Micky Arison", role: "owner/governor", pct: "~100%" }
      ],
      institutionalInvestors: "None; tightly Arison-family held",
      otherBusinessInterests: "Carnival Corporation & plc (NYSE: CCL — world's largest cruise operator)"
    },
    brand: {
      socialMedia: { instagram: "~7M", twitter: "~4M", facebook: "~9M" },
      merchandiseNotes: "Heat Culture brand is one of the NBA's most powerful organizational identities; transcends rosters — Heat consistently overperform their seed in the playoffs; Jimmy Butler trade to Golden State (Jan 2025) transitioning brand era",
      internationalFanbase: "Strong Latin American and Caribbean following; Miami's diverse market creates multilingual fanbase with large Brazilian, Venezuelan, and Dominican communities",
      notableSponsorships: ["Kaseya (arena naming)", "Amazon Prime (jersey patch)", "Baptist Health", "Carnival Cruise (Arison vertical integration)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Bam Adebayo — 5yr/$195M (2021), $39M AAV; Jimmy Butler traded to Golden State January 2025",
      starContracts: [
        { player: "Bam Adebayo", position: "C", aav: 39.0, contractNote: "5yr/$195M (2021), through 2025-26; franchise anchor through transition" },
        { player: "Tyler Herro", position: "SG", aav: 32.5, contractNote: "4yr/$130M (2022), through 2025-26" }
      ]
    },
    analystNotes: "The Kaseya Center's county ownership is a structural anomaly that benefits the Heat: no rent, no maintenance capital, county subsidies — creating one of the most favorable arena economic structures in professional sports. Micky Arison's 37-year tenure and Pat Riley's culture system provide organizational stability that transcends individual rosters; the Heat Culture brand can attract stars at discount (Udonis Haslem, LeBron James, Jimmy Butler) and develop undrafted players into starters. The Jimmy Butler trade to Golden State in January 2025 marks the end of an era; Bam Adebayo anchors the next competitive window, but the franchise's ability to attract a new superstar in a salary-cap environment defines the 2025-27 trajectory."
  },

  "Orlando Magic": {
    valuationHistory: [
      { year: 2019, value: 1.5,  source: "Forbes" },
      { year: 2020, value: 1.55, source: "Forbes" },
      { year: 2021, value: 1.65, source: "Forbes" },
      { year: 2022, value: 1.95, source: "Forbes" },
      { year: 2023, value: 2.5,  source: "Forbes" },
      { year: 2024, value: 3.2,  source: "Forbes" },
    ],
    revenue: { estimate: 334, year: 2024, source: "Forbes est.", operatingIncome: 45 },
    transactions: [
      { year: 1991, price: 0.085, buyer: "Richard DeVos (Amway co-founder)", seller: "NBA expansion group", notes: "DeVos purchased expansion franchise for $85M; DeVos family has maintained ownership continuously for 35+ years under multiple family members" }
    ],
    arena: {
      name: "Kia Center",
      yearOpened: 2010,
      capacity: 18846,
      ownershipModel: "City of Orlando financed via tourist development tax bonds; Magic contributed $50M and pay ~$1M/yr rent; team operates arena day-to-day",
      teamOwnsLand: false,
      publicSubsidy: 430,
      privateFinancing: 50,
      namingRightsDeal: { sponsor: "Kia Motors America", annualValue_M: 7, totalValue_M: null, expiryYear: null, notes: "Kia naming deal signed 2023 replacing 10-year $40M Amway deal; arena opened as Amway Center in 2010" },
      nonArenaRevenue: "Tourism-driven visiting fan spend supplements gate revenue; DeVos-operated concessions and suite agreements",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Florida / FanDuel Sports Network, ~$15M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "DeVos family (Dan DeVos, managing governor)",
      ownerNetWorth: "DeVos family ~$6B est. (Amway/Alticor empire)",
      ownerBackground: "Richard DeVos co-founded Amway Corporation with Jay Van Andel; bought expansion franchise for $85M in 1991; Richard died 2018; DeVos family continues ownership through Dan DeVos and multiple family members as managing governor; among most stable long-term family ownerships in NBA",
      acquisitionYear: 1991,
      acquisitionPrice: 0.085,
      currentValuation: 3.2,
      impliedReturn: "~37.6x in 34 years (~11% CAGR)",
      ownershipGroup: [
        { name: "DeVos family", role: "controlling owners/governors", pct: "100%" }
      ],
      institutionalInvestors: "None; tightly family-held",
      otherBusinessInterests: "Amway/Alticor Corporation (private; one of world's largest direct-sales companies)"
    },
    brand: {
      socialMedia: { instagram: "~3M", twitter: "~2M", facebook: "~4M" },
      merchandiseNotes: "Youth-driven brand resurgence with Banchero and Wagner; historically below-average merchandise rank; Orlando tourism creates unique out-of-market visitor attendance premium",
      internationalFanbase: "Franz Wagner drives German fanbase; Banchero has Italian-American heritage appeal; growing international profile",
      notableSponsorships: ["Kia Motors (arena naming)", "Orlando Health (jersey patch)", "Darden Restaurants (local Orlando)", "Universal Orlando Resort"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Paolo Banchero — 5yr/$239M max extension (2025), $47.8M AAV; Franz Wagner — 5yr/$224M (2024), $44.8M AAV",
      starContracts: [
        { player: "Paolo Banchero", position: "SF", aav: 47.8, contractNote: "5yr/$239M max extension (2025), through 2029-30; 2023 Rookie of the Year" },
        { player: "Franz Wagner", position: "SG", aav: 44.8, contractNote: "5yr/$224M (2024), through 2028-29" }
      ]
    },
    analystNotes: "The DeVos family's 34-year stewardship created an extraordinarily patient ownership model — enduring years of mediocrity before building the Banchero-Wagner young core. The Kia Center's predominantly public-financed structure (city paid $430M+ of the $480M cost) keeps the franchise's capex burden near zero, freeing capital for roster investment. The Banchero ($239M) and Wagner ($224M) dual supermax commitments total $463M to a young core under 25 — making Orlando one of the more aggressive long-term competitive bets in the Eastern Conference, with the talent cost basis locked in below future market rates."
  },

  "Washington Wizards": {
    valuationHistory: [
      { year: 2019, value: 1.82, source: "Forbes" },
      { year: 2020, value: 1.9,  source: "Forbes" },
      { year: 2021, value: 2.1,  source: "Forbes" },
      { year: 2022, value: 2.8,  source: "Forbes" },
      { year: 2023, value: 3.5,  source: "Forbes" },
      { year: 2024, value: 4.1,  source: "Forbes" },
    ],
    revenue: { estimate: 360, year: 2024, source: "Forbes est.", operatingIncome: 40 },
    transactions: [
      { year: 1999, price: 0.085, buyer: "Ted Leonsis (Monumental Sports & Entertainment)", seller: "Abe Pollin estate / successors", notes: "Leonsis (AOL co-founder) acquired Wizards and Capitals together for ~$85M; built Monumental Sports & Entertainment into DC's dominant sports empire" }
    ],
    arena: {
      name: "Capital One Arena",
      yearOpened: 1997,
      capacity: 20356,
      ownershipModel: "Originally 100% privately built by Abe Pollin ($200M, 1997); $800M renovation deal (2025-2028): DC Council providing $515M public investment, Monumental contributing $285M; District purchasing building for $88M during process",
      teamOwnsLand: false,
      publicSubsidy: 515,
      privateFinancing: 485,
      namingRightsDeal: { sponsor: "Capital One Financial", annualValue_M: 8, totalValue_M: null, expiryYear: null, notes: "Capital One naming began 2017 (from Verizon Center 2006-2017, MCI Center 1997-2006); paid to Monumental Sports & Entertainment" },
      nonArenaRevenue: "Monumental-owned regional streaming network (MSN) provides direct media revenue; MSE also owns Capitals (NHL); arena hosts concerts and major events year-round",
      newArenaPlans: "$800M renovation underway (2025-2028): $515M DC public + $285M Monumental; completing in phases; anchors franchise's Washington presence through 2030s+"
    },
    media: {
      localTVDeal: "Monumental Sports Network (MSE-owned OTT streaming platform), ~$20M/yr — one of NBA's earliest team-owned DTC regional sports networks",
      streamingNotes: "Full DTC streaming via Monumental Sports Network; no traditional RSN dependency; Ted Leonsis pursuing MLB/MLS DC expansions to expand content base",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Ted Leonsis (Monumental Sports & Entertainment founder/chairman)",
      ownerNetWorth: "~$3B est. (AOL co-founder; MSE portfolio)",
      ownerBackground: "AOL co-founder and early internet billionaire; acquired Capitals (NHL) in 1999 and Wizards/Mystics subsequently through Monumental Sports & Entertainment; built DC sports empire; also pursuing MLS and MLB DC expansion franchises to add content to Monumental Sports Network",
      acquisitionYear: 1999,
      acquisitionPrice: 0.085,
      currentValuation: 4.1,
      impliedReturn: "~48x in 26 years (~16% CAGR)",
      ownershipGroup: [
        { name: "Ted Leonsis", role: "chairman/governor via MSE", pct: "controlling" }
      ],
      institutionalInvestors: "MSE minority investors not disclosed",
      otherBusinessInterests: "Washington Capitals (NHL); Washington Mystics (WNBA); Monumental Sports Network; Capital One Arena; pursues DC MLS and MLB expansion"
    },
    brand: {
      socialMedia: { instagram: "~2.5M", twitter: "~2M", facebook: "~3.5M" },
      merchandiseNotes: "6th-largest US market dramatically underperforms in merchandise and fan loyalty; multiple consecutive poor seasons limiting brand equity; Alexandre Sarr era beginning",
      internationalFanbase: "Limited; DC political prominence does not translate to basketball following internationally",
      notableSponsorships: ["Capital One (arena naming)", "Geico", "Washington Gas", "DC United (Leonsis adjacent via regional sports ecosystem)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Alexandre Sarr (#2 pick 2024) — on rookie contract; full franchise rebuild underway",
      starContracts: [
        { player: "Kyle Kuzma", position: "SF", aav: 25.5, contractNote: "4yr/$102M (2022), through 2025-26" }
      ]
    },
    analystNotes: "Capital One Arena's $800M renovation — the largest public-private arena investment in DC history — anchors the franchise's long-term Washington presence through the 2030s, resolving years of relocation speculation. At $4.1B in the 6th-largest US market, the Wizards remain significantly undervalued relative to their DMA; a competitive team could unlock $5B+ consistent with other major-market franchises. The 2024 #2 draft pick Alexandre Sarr represents the franchise reset, though the depth of rebuild required from the 15-win 2023-24 season means the turnaround timeline extends through 2027-28 at minimum."
  },
  // --- WESTERN CONFERENCE — NORTHWEST DIVISION ---

  "Denver Nuggets": {
    valuationHistory: [
      { year: 2019, value: 1.6,  source: "Forbes" },
      { year: 2020, value: 1.85, source: "Forbes" },
      { year: 2021, value: 2.05, source: "Forbes" },
      { year: 2022, value: 2.4,  source: "Forbes" },
      { year: 2023, value: 3.05, source: "Forbes" },
      { year: 2024, value: 3.15, source: "Forbes" },
    ],
    revenue: { estimate: 370, year: 2024, source: "Forbes est.", operatingIncome: 55 },
    transactions: [
      { year: 2000, price: 0.461, buyer: "Stan Kroenke (KSE)", seller: "Charlie Lyons / Comsat Entertainment", notes: "Kroenke acquired Nuggets + Avalanche (NHL) + Ball Arena (then Pepsi Center) as a $461M KSE portfolio deal; one of the most diversified sports asset acquisitions in US history" }
    ],
    arena: {
      name: "Ball Arena",
      yearOpened: 1999,
      capacity: 19520,
      ownershipModel: "100% privately owned by Kroenke Sports & Entertainment; co-home of NHL Colorado Avalanche under same KSE ownership — no arm's-length rent; full arena economics accrue to KSE",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 185,
      namingRightsDeal: { sponsor: "Ball Corporation", annualValue_M: 6, totalValue_M: 90, expiryYear: 2036, notes: "15-year deal signed 2021 at ~$6M/yr; replaced Pepsi Center naming (1999-2021)" },
      nonArenaRevenue: "KSE owns Altitude Sports (regional sports network) — captures full local media economics; dual-team operation with Avalanche maximizes arena utilization; major concerts and events with no public revenue-sharing obligation",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Altitude Sports (KSE-owned regional sports network), ~$20M/yr — KSE owns both content and distribution",
      streamingNotes: "KSE controls regional broadcast economics through Altitude; NBA League Pass also available",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Stan Kroenke (Kroenke Sports & Entertainment)",
      ownerNetWorth: "~$12B est. (real estate and multi-sport empire)",
      ownerBackground: "Real estate developer who built the most diversified sports ownership portfolio in the world; KSE owns LA Rams (NFL), Arsenal FC (EPL), Colorado Avalanche (NHL), Colorado Rapids (MLS), and multiple venues; acquired Nuggets + Avalanche + arena together for $461M in 2000; one of the most operationally sophisticated sports ownership groups globally",
      acquisitionYear: 2000,
      acquisitionPrice: 0.461,
      currentValuation: 3.15,
      impliedReturn: "~6.8x in 25 years (~8% CAGR) on Nuggets portion; total KSE portfolio appreciated far more",
      ownershipGroup: [
        { name: "Stan Kroenke", role: "owner/governor (KSE)", pct: "controlling" }
      ],
      institutionalInvestors: "KSE is privately held; no external institutional PE",
      otherBusinessInterests: "Los Angeles Rams (NFL), Arsenal FC (EPL), Colorado Avalanche (NHL), Colorado Rapids (MLS), SoFi Stadium, Kroenke Sports real estate"
    },
    brand: {
      socialMedia: { instagram: "~5M", twitter: "~3M", facebook: "~8M" },
      merchandiseNotes: "2023 NBA championship dramatically elevated merchandise rank; Jokic's three MVPs and unique play style drive European and international interest; historically mid-tier nationally",
      internationalFanbase: "Jokic strong Serbian and Eastern European following; 2023 championship created broader global awareness for previously underexposed Denver market",
      notableSponsorships: ["Ball Corporation (arena naming)", "Transamerica (jersey patch)", "Altitude Sports (KSE-owned)", "Gatorade"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Nikola Jokic — 5yr/$270M supermax (2022), $54M AAV, through 2026-27; 3× MVP, 2023 champion and Finals MVP",
      starContracts: [
        { player: "Nikola Jokic", position: "C", aav: 54.0, contractNote: "5yr/$270M supermax (2022), through 2026-27; highest win-shares per game in NBA history" },
        { player: "Jamal Murray", position: "PG", aav: 29.3, contractNote: "5yr/$207M max extension effective 2021-22, through 2025-26" }
      ]
    },
    analystNotes: "Ball Arena's 100% private KSE ownership and dual-sport Nuggets/Avalanche co-tenancy delivers superior ancillary and event revenue vs. publicly-owned peers — a structural advantage rarely noted in franchise valuation discourse. KSE's Altitude Sports ownership eliminates RSN overhead entirely, capturing full local media economics. Jokic's three MVPs and 2023 championship fundamentally changed Denver's national media premium; the primary ceiling remains Denver's ~17th-ranked DMA, which constrains gate and sponsorship upside relative to coastal peers despite the championship pedigree."
  },

  "Minnesota Timberwolves": {
    valuationHistory: [
      { year: 2019, value: 1.35, source: "Forbes" },
      { year: 2020, value: 1.5,  source: "Forbes" },
      { year: 2021, value: 1.55, source: "Forbes" },
      { year: 2022, value: 1.85, source: "Forbes" },
      { year: 2023, value: 2.25, source: "Forbes" },
      { year: 2024, value: 3.29, source: "Forbes" },
    ],
    revenue: { estimate: 295, year: 2024, source: "Forbes est.", operatingIncome: 30 },
    transactions: [
      { year: 1994, price: 0.072, buyer: "City of Minneapolis", seller: "Wolfenson/Ratner (private owners)", notes: "City acquired Target Center for $72M after private owners faced financial distress; team operations continued under ownership changes" },
      { year: 2010, price: 0.28, buyer: "Glen Taylor", seller: "Previous ownership group", notes: "Taylor completed majority acquisition; businessman and Minnesota state senator owned franchise for over a decade" },
      { year: 2025, price: 1.5, buyer: "Marc Lore & Alex Rodriguez", seller: "Glen Taylor", notes: "Lore-Rodriguez group finalized purchase in June 2025 at $1.5B after multi-year transition process initiated 2021; brings tech and media credibility to franchise repositioning" }
    ],
    arena: {
      name: "Target Center",
      yearOpened: 1990,
      capacity: 19356,
      ownershipModel: "City of Minneapolis owns arena (purchased for $72M in 1994 after private owner distress); Wolves pay rent under long-term operating agreement; 2017 renovation $140M ($74M city + $60M Taylor + $5.9M AEG)",
      teamOwnsLand: false,
      publicSubsidy: 147,
      privateFinancing: 66,
      namingRightsDeal: { sponsor: "Target Corporation", annualValue_M: 13, totalValue_M: null, expiryYear: null, notes: "Long-running Target Corp naming deal; Target HQ in Minneapolis; among NBA's longest-tenured naming relationships" },
      nonArenaRevenue: "Team does not own arena; limited direct non-game economics; new ownership (Lore/Rodriguez) likely to pursue arena modernization or replacement",
      newArenaPlans: "New ownership exploring arena options given 1990 vintage building; no formal announcement as of 2025"
    },
    media: {
      localTVDeal: "Amazon Prime Video (regional streaming deal, 2024), ~$15M/yr — one of NBA's first streaming-primary local broadcast agreements",
      streamingNotes: "Wolves broke new ground as one of first NBA teams to pivot to streaming-first local distribution as RSN landscape collapsed; NBA League Pass also available",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Marc Lore & Alex Rodriguez (co-owners)",
      ownerNetWorth: "Lore: ~$4B est. (Walmart.com sale $3.3B in 2016); Rodriguez: ~$400M est.",
      ownerBackground: "Lore sold Jet.com to Walmart for $3.3B in 2016 and Walmart.com unit for ~$3.3B in 2016; partnered with former Yankee legend Alex Rodriguez to acquire majority stake from Glen Taylor; multi-year transition process completed June 2025; Lore and Rodriguez bring e-commerce, tech, and celebrity backgrounds to franchise repositioning",
      acquisitionYear: 2025,
      acquisitionPrice: 1.5,
      currentValuation: 3.29,
      impliedReturn: "Recent acquisition — long-term appreciation pending",
      ownershipGroup: [
        { name: "Marc Lore", role: "co-owner", pct: null },
        { name: "Alex Rodriguez", role: "co-owner", pct: null }
      ],
      institutionalInvestors: "Minority investor consortium",
      otherBusinessInterests: "Lore: e-commerce, retail tech investments; Rodriguez: A-Rod Corp, various media and business ventures"
    },
    brand: {
      socialMedia: { instagram: "~5M", twitter: "~3M", facebook: "~6M" },
      merchandiseNotes: "Anthony Edwards 'Ant-Man' persona and 2024 Western Conference semis run significantly elevated brand; franchise historically below average in merchandise; Karl-Anthony Towns trade to Knicks (2024) reduced international profile",
      internationalFanbase: "Edwards building domestic following rapidly; 2024 playoff run created national awareness for previously below-the-radar franchise",
      notableSponsorships: ["Target (arena naming)", "Timberwolves Gaming (NBA 2K)", "Old Spice", "Bally Bet (former RSN partner)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Anthony Edwards — 5yr/$245M max extension (2023), $49M AAV, through 2027-28",
      starContracts: [
        { player: "Anthony Edwards", position: "SG", aav: 49.0, contractNote: "5yr/$245M max (2023), through 2027-28; supermax eligible with All-NBA trigger" }
      ]
    },
    analystNotes: "The Lore-Rodriguez acquisition at $1.5B (closed June 2025) was a ~2.2× step-up from Taylor's acquisition cost, validating the Edwards era even before the new owners took control. Edwards' supermax-eligible contract anchors the franchise's decade-long trajectory; Target Center's city ownership caps premium revenue potential, but the new ownership's tech backgrounds signal a coming arena modernization push. The Amazon Prime regional streaming deal (2024) is a structural experiment that positions the franchise for the next broadcast rights cycle regardless of RSN industry collapse."
  },

  "Oklahoma City Thunder": {
    valuationHistory: [
      { year: 2019, value: 1.55, source: "Forbes" },
      { year: 2020, value: 1.7,  source: "Forbes" },
      { year: 2021, value: 1.85, source: "Forbes" },
      { year: 2022, value: 2.4,  source: "Forbes" },
      { year: 2023, value: 2.65, source: "Forbes" },
      { year: 2024, value: 3.55, source: "Forbes" },
    ],
    revenue: { estimate: 285, year: 2025, source: "Sportico/CNBC post-championship est.", operatingIncome: 55 },
    transactions: [
      { year: 2006, price: 0.35, buyer: "Clay Bennett / PBC Sports & Entertainment", seller: "Howard Schultz (Starbucks CEO)", notes: "Bennett group purchased Seattle SuperSonics for $350M; relocated team to Oklahoma City in 2008 as the Thunder after paying $45M Seattle relocation settlement; widely criticized at relocation but franchise became OKC community cornerstone" }
    ],
    arena: {
      name: "Paycom Center",
      yearOpened: 2002,
      capacity: 18203,
      ownershipModel: "100% publicly owned by City of Oklahoma City via MAPS (Metropolitan Area Projects) program; Thunder pay rent under long-term operating lease",
      teamOwnsLand: false,
      publicSubsidy: 89,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Paycom Software", annualValue_M: 8, totalValue_M: 115, expiryYear: 2036, notes: "15-year, ~$115M deal signed 2021; Paycom is OKC's largest publicly traded technology company" },
      nonArenaRevenue: "Team does not own current arena; incoming Continental Coliseum (2028) will be fully public-funded MAPS 4 project",
      newArenaPlans: "New $900M Continental Coliseum breaking ground March 2026; fully public-funded via OKC MAPS 4 sales tax; opening 2028; Paycom Center to be replaced; modern facility will dramatically increase premium seating capacity"
    },
    media: {
      localTVDeal: "Bally Sports Oklahoma / FanDuel Sports Network, ~$12M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Clay Bennett / PBC Sports & Entertainment",
      ownerNetWorth: "~$2B est. (OKC oil, gas, and real estate businesses)",
      ownerBackground: "Oklahoma City business executive and civic leader; led group to purchase Seattle SuperSonics for $350M in 2006; relocated team to OKC in 2008; PBC includes Tom Ward and Clayton Bennett family members; relocation was deeply controversial but franchise became one of OKC's defining civic institutions",
      acquisitionYear: 2008,
      acquisitionPrice: 0.35,
      currentValuation: 3.55,
      impliedReturn: "~10.1x in 17 years (~14% CAGR)",
      ownershipGroup: [
        { name: "Clay Bennett", role: "principal owner/governor (PBC)", pct: "majority" },
        { name: "Tom Ward", role: "limited partner", pct: null }
      ],
      institutionalInvestors: "None significant",
      otherBusinessInterests: "PBC Sports & Entertainment; Oklahoma City civic investments"
    },
    brand: {
      socialMedia: { instagram: "~7M", twitter: "~4M", facebook: "~8M" },
      merchandiseNotes: "2025 NBA championship created merchandise surge; OKC has the highest fan loyalty index in the NBA despite the smallest DMA in the league; SGA jersey ranks #1-2 in NBA sales nationally",
      internationalFanbase: "Growing rapidly post-championship; SGA's Canadian-Guyanese heritage drives Caribbean following; international exposure from NBA record-setting 68-14 season",
      notableSponsorships: ["Paycom Software (arena naming)", "Love's Travel Stops (OKC corporate anchor)", "Tractor Supply", "Devon Energy"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Shai Gilgeous-Alexander — 4yr/$285M supermax extension (2025), $71.25M AAV — richest single-season contract in NBA history",
      starContracts: [
        { player: "Shai Gilgeous-Alexander", position: "PG", aav: 71.25, contractNote: "4yr/$285M supermax (2025), $71.25M AAV — highest single-season contract in NBA history at signing; 2024-25 MVP" },
        { player: "Chet Holmgren", position: "C/PF", aav: 11.0, contractNote: "On rookie scale through 2025-26; max extension expected" }
      ]
    },
    analystNotes: "OKC's 2024-25 championship at 68-14 — the best regular-season record in NBA history — is the SGA era's defining statement. The franchise's NBA-record $3.55B valuation-to-DMA ratio is the starkest evidence that national media revenue, championship credibility, and fanatical single-team-market loyalty can substantially offset small-market constraints. The incoming Continental Coliseum ($900M, 2028) will be the most modern arena in the league, with significantly higher premium seating that should begin closing the revenue gap with large-market peers. OKC's fan loyalty index (highest in NBA) in the league's smallest market is a structural outlier that investors consistently underweight in valuation models."
  },

  "Portland Trail Blazers": {
    valuationHistory: [
      { year: 2019, value: 1.8,  source: "Forbes" },
      { year: 2020, value: 1.9,  source: "Forbes" },
      { year: 2021, value: 2.1,  source: "Forbes" },
      { year: 2022, value: 2.4,  source: "Forbes" },
      { year: 2023, value: 3.0,  source: "Forbes" },
      { year: 2024, value: 3.6,  source: "Forbes" },
    ],
    revenue: { estimate: 275, year: 2024, source: "Forbes est.", operatingIncome: 30 },
    transactions: [
      { year: 1988, price: 0.07, buyer: "Paul Allen (Microsoft co-founder)", seller: "Larry Weinberg", notes: "Allen purchased for $70M; owned franchise until his death October 2018; estate managed by sister Jody Allen" },
      { year: 2025, price: 4.25, buyer: "Tom Dundon group", seller: "Jody Allen (Paul Allen estate trustee)", notes: "NBA Board of Governors approved Dundon acquisition at $4.25B — meaningful premium over Forbes $3.6B estimate; Dundon also owns Carolina Hurricanes (NHL)" }
    ],
    arena: {
      name: "Moda Center",
      yearOpened: 1995,
      capacity: 19441,
      ownershipModel: "Mixed public-private financing at construction; primarily private — Paul Allen personal $46M + private bonds $155M + $34.5M city of Portland; operated by Portland Blazers LLC (team entity)",
      teamOwnsLand: false,
      publicSubsidy: 35,
      privateFinancing: 227,
      namingRightsDeal: { sponsor: "Moda Health (Oregon regional health insurer)", annualValue_M: 4, totalValue_M: null, expiryYear: null, notes: "Modest naming rights deal relative to peer arenas; Oregon public market limits naming sponsor pool" },
      nonArenaRevenue: "Blazers operate arena and capture some non-game event revenue; $365M Oregon state renovation funding proposed (2026) pending legislative approval",
      newArenaPlans: "$365M Oregon state public renovation funding proposed for Moda Center overhaul (2026); pending Oregon Legislative Assembly approval"
    },
    media: {
      localTVDeal: "Root Sports Northwest (AT&T Sports Networks), ~$12M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Tom Dundon (majority owner, 2025 acquisition)",
      ownerNetWorth: "~$3B est. (auto finance industry; DriveTime Automotive)",
      ownerBackground: "Dundon made fortune in auto finance industry as majority owner of DriveTime Automotive; also owns Carolina Hurricanes (NHL) since 2018; acquired Blazers from Paul Allen's estate for $4.25B — a premium over Forbes estimates reflecting Pacific Northwest franchise scarcity and competitive bidding",
      acquisitionYear: 2025,
      acquisitionPrice: 4.25,
      currentValuation: 3.6,
      impliedReturn: "Recent acquisition — paid above Forbes estimate; long-term appreciation pending",
      ownershipGroup: [
        { name: "Tom Dundon", role: "majority owner/governor", pct: "majority" }
      ],
      institutionalInvestors: "Multi-investor group",
      otherBusinessInterests: "Carolina Hurricanes (NHL); DriveTime Automotive (auto finance)"
    },
    brand: {
      socialMedia: { instagram: "~4M", twitter: "~3M", facebook: "~6M" },
      merchandiseNotes: "Only major-league team in Pacific Northwest; 'Rip City' identity is one of NBA's strongest regional brands; franchise in full rebuild, dampening current merchandise cycle",
      internationalFanbase: "Limited international following; strong Pacific Northwest regional captive audience as the sole major-league franchise in the region",
      notableSponsorships: ["Moda Health (arena naming)", "adidas (historical)", "Portland General Electric", "Columbia Sportswear (Pacific Northwest anchor sponsor)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Scoot Henderson (#3 pick 2023) — on rookie scale; full franchise rebuild underway",
      starContracts: [
        { player: "Scoot Henderson", position: "PG", aav: 10.5, contractNote: "Rookie scale contract through 2026-27; franchise cornerstone of rebuild" }
      ]
    },
    analystNotes: "The $4.25B Dundon sale price marks a meaningful premium over Forbes' ~$3.6B estimate, reflecting Pacific Northwest franchise scarcity and competitive bidding for the only major-league team across Oregon, Washington, and Idaho. The franchise is in full rebuild around 2023 #3 pick Scoot Henderson; the arena situation is the key infrastructure risk — Moda Center's 30-year vintage requires significant renovation capital, and Oregon state public funding approval is not guaranteed. Dundon's Hurricanes ownership provides a cross-sport operational template for how to build winning cultures in mid-market environments."
  },

  "Utah Jazz": {
    valuationHistory: [
      { year: 2019, value: 1.55, source: "Forbes" },
      { year: 2020, value: 1.95, source: "Forbes" },
      { year: 2021, value: 2.0,  source: "Forbes" },
      { year: 2022, value: 2.25, source: "Forbes" },
      { year: 2023, value: 3.3,  source: "Forbes" },
      { year: 2024, value: 3.75, source: "Forbes" },
    ],
    revenue: { estimate: 300, year: 2024, source: "Forbes est.", operatingIncome: 45 },
    transactions: [
      { year: 1985, price: 0.022, buyer: "Larry H. Miller", seller: "Sam Battistone", notes: "Miller acquired controlling interest for ~$22M over several transactions; built one of NBA's most stable small-market franchises with Stockton-Malone era" },
      { year: 2020, price: 1.66, buyer: "Ryan Smith (Smith Entertainment Group)", seller: "Gail Miller (Larry H. Miller estate)", notes: "Smith acquired franchise + Delta Center + G League Stars + Salt Lake Bees (AAA baseball) for $1.66B total — bundled asset deal; included real estate and arena as one of the decade's best-valued sports acquisitions" }
    ],
    arena: {
      name: "Delta Center",
      yearOpened: 1991,
      capacity: 18305,
      ownershipModel: "100% privately built by Larry H. Miller in 1991 ($93M); Ryan Smith acquired arena as part of $1.66B package deal; Jazz own the arena outright — one of only ~10 NBA franchises with outright arena ownership",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 93,
      namingRightsDeal: { sponsor: "Delta Air Lines", annualValue_M: 7, totalValue_M: 70, expiryYear: 2033, notes: "10-year deal signed 2023; Delta Center was originally named for Delta Air Lines 1991-2006, then Vivint 2014-2023; Ryan Smith brought Delta back as anchor sponsor" },
      nonArenaRevenue: "Delta Center now shared with Utah Hockey Club (NHL expansion franchise, also Ryan Smith-owned); dual-sport revenue from NHL games, concerts, events; $525M Utah public infrastructure investment expanding capacity",
      newArenaPlans: "$525M Utah state/city infrastructure earmarked for Delta Center upgrades shared between Jazz and Utah Hockey Club; retractable seating and dual-sport configuration enhancements"
    },
    media: {
      localTVDeal: "Smith Entertainment Group in-house media operations, ~$15M/yr — integrates Jazz and Utah Hockey Club content distribution",
      streamingNotes: "SEG controls regional media distribution; integrating Jazz and Hockey Club into unified content platform",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Ryan Smith (Smith Entertainment Group)",
      ownerNetWorth: "~$1.5B est. (Qualtrics co-founder; SAP acquired for $8B in 2019)",
      ownerBackground: "Co-founded Qualtrics experience management software in his parents' basement; SAP acquired for $8B in 2019; Smith immediately invested proceeds in Utah sports — acquiring Jazz, arena, G League, and minor league baseball for $1.66B in 2020; subsequently launched Utah Hockey Club as NHL expansion franchise (2025); building a multi-sport Utah sports empire with shared infrastructure",
      acquisitionYear: 2020,
      acquisitionPrice: 1.66,
      currentValuation: 3.75,
      impliedReturn: "~2.3x in 5 years on full $1.66B package; Jazz-only portion appreciated significantly more",
      ownershipGroup: [
        { name: "Ryan Smith", role: "owner/governor (Smith Entertainment Group)", pct: "controlling" }
      ],
      institutionalInvestors: "None significant",
      otherBusinessInterests: "Utah Hockey Club (NHL expansion franchise); Delta Center arena; Salt Lake Bees (AAA baseball); Utah Royals (NWSL)"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2M", facebook: "~4M" },
      merchandiseNotes: "Karl Malone/John Stockton dynasty created deep regional loyalty; Ryan Smith modernizing brand with younger demographic; Lauri Markkanen building national profile",
      internationalFanbase: "Primarily domestic Rocky Mountain regional fanbase; Markkanen drives Finnish and Nordic following",
      notableSponsorships: ["Delta Air Lines (arena naming)", "Qualtrics (jersey patch — Smith's own company)", "HealthEquity", "Rio Tinto (mining sector)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Lauri Markkanen — 5yr/$238M (2023), $47.6M AAV, through 2027-28; franchise in rebuild with strong draft assets",
      starContracts: [
        { player: "Lauri Markkanen", position: "PF", aav: 47.6, contractNote: "5yr/$238M (2023), through 2027-28" }
      ]
    },
    analystNotes: "Ryan Smith's $1.66B bundled acquisition — franchise + arena + multiple sports assets — is the decade's most capital-efficient sports investment. At $1.66B total, the Jazz alone have appreciated to $3.75B within 5 years, implying an extraordinary return even before accounting for the arena (owned outright) and Utah Hockey Club (new NHL expansion franchise). The Delta Center dual-NBA/NHL configuration is a national model for multi-sport arena efficiency, and $525M in state infrastructure support mitigates capital risk. The Jazz rebuild's success is constrained primarily by Salt Lake City's small DMA (~50th nationally), but the arena ownership and multi-sport economics create structural advantages unavailable to most small-market peers."
  },
  // --- WESTERN CONFERENCE — PACIFIC DIVISION ---

  "Golden State Warriors": {
    valuationHistory: [
      { year: 2019, value: 3.5,  source: "Forbes" },
      { year: 2020, value: 4.3,  source: "Forbes" },
      { year: 2021, value: 5.6,  source: "Forbes" },
      { year: 2022, value: 7.0,  source: "Forbes" },
      { year: 2023, value: 7.7,  source: "Forbes" },
      { year: 2024, value: 9.4,  source: "CNBC / Forbes est." },
    ],
    revenue: { estimate: 781, year: 2024, source: "Forbes/CNBC", operatingIncome: 138 },
    transactions: [
      { year: 2010, price: 0.450, buyer: "Joe Lacob & Peter Guber group", seller: "Chris Cohan", notes: "Lacob/Guber beat Larry Ellison's competing bid; $450M all-cash; record NBA sale at time; approved Nov 2010; widely criticized as overpayment — proved transformational" },
      { year: 2021, price: null, buyer: "Arctos Partners (~8% initial, grew to ~15%)", seller: "Warriors ownership (partial)", notes: "Private equity firm Arctos Partners entered as minority partner at ~$5.5B implied valuation; one of first institutional PE investments in an NBA franchise; set precedent for league PE rule expansion" }
    ],
    arena: {
      name: "Chase Center",
      yearOpened: 2019,
      capacity: 18064,
      ownershipModel: "privately owned — GSW Arena LLC (Warriors entity); 100% privately financed; zero public subsidy; Warriors own the arena and surrounding Mission Bay real estate",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 1400,
      namingRightsDeal: { sponsor: "JPMorgan Chase Bank (Chase brand)", annualValue_M: 15, totalValue_M: 300, expiryYear: 2039, notes: "20-year, $300M deal signed 2016; one of NBA's largest naming rights deals; paid directly to Warriors (not a landlord)" },
      nonArenaRevenue: "Chase Center Entertainment operates 200+ non-NBA events/year (concerts, boxing, family shows); Mission Bay mixed-use development surrounds arena; Warriors own surrounding commercial real estate providing development appreciation",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "NBC Sports Bay Area (regional sports network), ~$30M/yr",
      streamingNotes: "Standard NBA League Pass; games on ABC/ESPN nationally; Warriors generate ratings premium nationally during primetime",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Joe Lacob (co-executive chairman) & Peter Guber (co-executive chairman)",
      ownerNetWorth: "Lacob: ~$3B est. (KPCB venture capital); Guber: ~$900M est.",
      ownerBackground: "Lacob is a KPCB venture capitalist; Guber is a Hollywood producer (Rain Man, Batman) and entertainment executive; partnership formed specifically to bid on Warriors in 2010; their complementary skill sets in technology and entertainment defined the franchise's dual-market positioning",
      acquisitionYear: 2010,
      acquisitionPrice: 0.450,
      currentValuation: 9.4,
      impliedReturn: "~20.9x in 15 years (~23% CAGR)",
      ownershipGroup: [
        { name: "Joe Lacob", role: "co-executive chairman / lead governor", pct: null },
        { name: "Peter Guber", role: "co-executive chairman", pct: null },
        { name: "Arctos Partners", role: "minority (~15%)", pct: "~15%" }
      ],
      institutionalInvestors: "Arctos Partners paid ~$125M for initial ~8% stake at ~$5.5B implied valuation (2021); one of the first institutional PE investments in an NBA franchise; set precedent for league's private equity ownership rule expansion",
      otherBusinessInterests: "Lacob: Kleiner Perkins portfolio companies; Guber: Mandalay Entertainment, Los Angeles FC (MLS, minority stake)"
    },
    brand: {
      socialMedia: { instagram: "~10M", twitter: "~8M", facebook: "~16M" },
      merchandiseNotes: "Consistently #1 or #2 in NBA merchandise globally; Stephen Curry jersey among best-selling in NBA history; Warriors brand expanded massively in Asia during dynasty years (2015-2022); Klay Thompson departure (2024) tests brand durability",
      internationalFanbase: "Among NBA's strongest international followings; major presence in China, Philippines, and throughout Southeast Asia; Curry's clean image expands brand in markets where controversial stars cannot",
      notableSponsorships: ["Chase Bank (arena naming, paid to Warriors)", "Rakuten (jersey patch, ~$20M/yr deal)", "United Airlines", "NTT Data"]
    },
    onField: {
      championshipsLast10Years: 4,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Stephen Curry — 3yr extension signed Aug 2023, $55.8M AAV, through 2028-29",
      starContracts: [
        { player: "Stephen Curry", position: "PG", aav: 55.8, contractNote: "3yr extension (Aug 2023), ~$167M total through 2028-29; all-time 3-point record holder" },
        { player: "Draymond Green", position: "PF", aav: 22.3, contractNote: "4yr/$100M extension (Oct 2022), through 2026-27" }
      ]
    },
    analystNotes: "The Warriors are the NBA's clearest case of franchise value created through asset ownership. Chase Center — $1.4B privately financed, zero public subsidy, team-owned — generates concert and event revenue independent of basketball; the Mission Bay mixed-use development surrounding it compounds the asset base further. The Arctos Partners minority stake at ~$5.5B implied valuation (2021) was one of the first institutional PE investments in NBA basketball and set the precedent for the league's PE rule expansion. At $9.4B (CNBC 2025) with $781M revenue — highest in the NBA — the Warriors' ~21x return on Lacob/Guber's $450M entry is the defining ownership alpha story in professional basketball. Post-dynasty transition (Klay Thompson departed 2024) is the primary near-term risk."
  },

  "Los Angeles Clippers": {
    valuationHistory: [
      { year: 2019, value: 2.4,  source: "Forbes" },
      { year: 2020, value: 2.5,  source: "Forbes" },
      { year: 2021, value: 3.0,  source: "Forbes" },
      { year: 2022, value: 3.75, source: "Forbes" },
      { year: 2023, value: 4.7,  source: "Forbes" },
      { year: 2024, value: 7.5,  source: "Forbes" },
    ],
    revenue: { estimate: 510, year: 2024, source: "Forbes/Sportico est.", operatingIncome: 100 },
    transactions: [
      { year: 2014, price: 2.0, buyer: "Steve Ballmer (former Microsoft CEO)", seller: "Shelly Sterling (estate of Donald Sterling)", notes: "NBA forced sale following Donald Sterling racism scandal; Ballmer's $2B was an NBA record by 2x at the time" },
      { year: 2024, price: 2.0, buyer: "Steve Ballmer (self-funded)", seller: null, notes: "Ballmer spent $2B+ of personal capital building Intuit Dome in Inglewood; opened August 15, 2024 — the most technologically advanced arena in NBA history; Ballmer also paid $400M to acquire the Forum venue and ~$66M for land" }
    ],
    arena: {
      name: "Intuit Dome",
      yearOpened: 2024,
      capacity: 18000,
      ownershipModel: "100% privately owned by Steve Ballmer; Ballmer self-funded $2B construction + $400M Forum acquisition + $66M land = $2.5B+ total Inglewood complex investment; one of the most significant private sports infrastructure investments in US history",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 2000,
      namingRightsDeal: { sponsor: "Intuit Inc.", annualValue_M: 22, totalValue_M: 500, expiryYear: 2044, notes: "23-year, $500M+ deal signed 2021; one of the largest naming rights deals in US sports" },
      nonArenaRevenue: "Ballmer also owns The Forum (Inglewood) acquired from MSG for $400M — hosts major concerts independently; Intuit Dome pursuing non-NBA event calendar; significant upside from Inglewood entertainment district development adjacent to SoFi Stadium",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "NBC Sports California / streaming hybrid, ~$30M/yr",
      streamingNotes: "Clippers exploring DTC distribution options leveraging Ballmer's tech background; NBA League Pass available",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Steve Ballmer (former Microsoft CEO, sole owner)",
      ownerNetWorth: "~$100B est. (Microsoft equity holdings — among the world's largest personal fortunes)",
      ownerBackground: "Succeeded Bill Gates as Microsoft CEO (2000-2014); bought Clippers for $2B in 2014 — NBA record by 2× after Donald Sterling racism scandal forced NBA-mandated sale; subsequently invested $2B+ building Intuit Dome from scratch, $400M acquiring The Forum from MSG, and $66M in land — over $2.5B of private capital in Inglewood entertainment infrastructure; wealthiest owner in NBA by a wide margin",
      acquisitionYear: 2014,
      acquisitionPrice: 2.0,
      currentValuation: 7.5,
      impliedReturn: "~3.75x in 11 years (~14% CAGR) on franchise purchase; total investment including arena and Forum exceeds $4.5B",
      ownershipGroup: [
        { name: "Steve Ballmer", role: "sole owner/governor", pct: "100%" }
      ],
      institutionalInvestors: "None; Ballmer owns 100%",
      otherBusinessInterests: "Microsoft equity (personal fortune); The Forum (Inglewood, concert venue)"
    },
    brand: {
      socialMedia: { instagram: "~8M", twitter: "~5M", facebook: "~9M" },
      merchandiseNotes: "Intuit Dome opening (2024) creating new brand chapter; historically second-fiddle to Lakers in LA; Kawhi Leonard's health defines merchandise cycle — when healthy, a top-5 jersey seller",
      internationalFanbase: "Moderate; LA market provides international baseline but Clippers don't match Lakers' global reach; Kawhi Leonard's Canada affinity creates Canadian following",
      notableSponsorships: ["Intuit (arena naming)", "Honey/PayPal (jersey patch)", "Kia Motors", "State Farm"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Kawhi Leonard — 3yr/$153M (2023), $51M AAV, through 2025-26; James Harden on 2yr/$70M (2023)",
      starContracts: [
        { player: "Kawhi Leonard", position: "SF", aav: 51.0, contractNote: "3yr/$153M (2023), through 2025-26; chronic load management/injury risk" },
        { player: "James Harden", position: "PG", aav: 35.0, contractNote: "2yr/$70M (2023), through 2024-25" }
      ]
    },
    analystNotes: "Ballmer's $2B Intuit Dome is a transformational infrastructure bet — no other NBA owner has self-funded a $2B arena from personal capital, and the entirely private financing means the Clippers own a premium revenue-generating asset free of public obligations. The $7.5B Forbes 2024 valuation reflects both the LA market premium and the arena's new-building effect — a ~57% step-up in one year driven entirely by Intuit Dome's opening. The primary strategic risk remains championship credibility: the franchise has never won an NBA title, and Kawhi Leonard's chronic injury history creates uncertainty around the competitive window. The Ballmer ownership model — unlimited personal capital, tech sophistication, intense engagement — is unique in the league and structurally advantages the franchise in any long-term infrastructure or media investment decision."
  },

  "Los Angeles Lakers": {
    valuationHistory: [
      { year: 2019, value: 4.4,  source: "Forbes" },
      { year: 2020, value: 4.4,  source: "Forbes" },
      { year: 2021, value: 4.6,  source: "Forbes" },
      { year: 2022, value: 4.65, source: "Forbes" },
      { year: 2023, value: 5.52, source: "Forbes" },
      { year: 2024, value: 7.09, source: "Forbes" },
    ],
    revenue: { estimate: 476, year: 2024, source: "Forbes", operatingIncome: 95 },
    transactions: [
      { year: 1979, price: 0.0675, buyer: "Jerry Buss", seller: "Jack Kent Cooke", notes: "Buss bought Lakers + Kings (NHL) + The Forum arena + a ranch for $67.5M total; transformed NBA with Showtime-era marketing and celebrity culture; one of the most visionary sports purchases in history" },
      { year: 2025, price: 10.0, buyer: "Mark Walter (Guggenheim Partners CEO)", seller: "Buss family (Jeanie Buss and siblings)", notes: "Walter acquired majority stake at implied $10B valuation in October 2025 — highest valuation ever ascribed to an NBA franchise; Jeanie Buss retains governor role and minority stake; deal valued Lakers at 40% premium to Forbes 2024 estimate" }
    ],
    arena: {
      name: "Crypto.com Arena",
      yearOpened: 1999,
      capacity: 18997,
      ownershipModel: "AEG (Anschutz Entertainment Group) privately owns arena; Lakers and Clippers both pay rent as co-tenants; AEG retains all event economics from one of the world's busiest multi-use venues",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 375,
      namingRightsDeal: { sponsor: "Crypto.com", annualValue_M: 35, totalValue_M: 700, expiryYear: 2041, notes: "20-year, $700M deal signed 2021 — largest arena naming deal in NBA history at signing; paid to AEG (not Lakers); previously Staples Center 1999-2021" },
      nonArenaRevenue: "Lakers do not own arena; AEG captures all non-game event revenue from nation's busiest multi-use venue by event count; Lakers' inability to capture arena economics is their largest structural financial disadvantage",
      newArenaPlans: "None; Lakers bound by AEG tenant lease"
    },
    media: {
      localTVDeal: "Spectrum SportsNet (Charter Communications), ~$150M/yr — 20-year deal through 2032; richest local TV contract in NBA history",
      streamingNotes: "Spectrum SportsNet streaming available; standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Mark Walter (majority, Guggenheim Partners CEO) / Jeanie Buss (governor)",
      ownerNetWorth: "Walter: ~$5B est. (Guggenheim Partners); Buss: ~$500M est.",
      ownerBackground: "Mark Walter is CEO of Guggenheim Partners ($325B+ AUM investment firm); acquired majority at $10B implied valuation in 2025 — the highest NBA franchise price ever; Jeanie Buss retains governorship and minority stake, maintaining Buss family connection; original Jerry Buss purchase (1979) for $67.5M is the most celebrated franchise investment in NBA history",
      acquisitionYear: 2025,
      acquisitionPrice: 10.0,
      currentValuation: 10.0,
      impliedReturn: "Recent acquisition; Buss family nominal entry at $67.5M package (1979) appreciated to $10B+ over 46 years",
      ownershipGroup: [
        { name: "Mark Walter", role: "majority owner", pct: "majority" },
        { name: "Jeanie Buss", role: "governor / minority owner", pct: null },
        { name: "Magic Johnson", role: "small passive minority", pct: null }
      ],
      institutionalInvestors: "None disclosed at time of Walter acquisition",
      otherBusinessInterests: "Walter: Guggenheim Partners (investment management); also co-owner Chelsea FC (EPL); Buss: franchise legacy and philanthropy"
    },
    brand: {
      socialMedia: { instagram: "~22M", twitter: "~10M", facebook: "~25M" },
      merchandiseNotes: "#1 or #2 NBA merchandise franchise globally; 17 championships and Hollywood celebrity culture create unmatched brand depth; Luka Doncic acquisition (Feb 2025) reloads star power for next merchandise cycle",
      internationalFanbase: "Strongest international brand in NBA; dominant in Asia (Philippines, China, Southeast Asia), Europe, and globally; LeBron/Kobe/Magic/Kareem legacy spans multiple generations of international fans",
      notableSponsorships: ["Crypto.com (arena naming — paid to AEG)", "Bibigo (jersey patch)", "Spectrum (broadcast)", "Nike (apparel)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Luka Doncic — acquired from Dallas Mavericks Feb 2025; 5yr/$346M (2024), $69.2M AAV; LeBron James on $52.6M option through 2025-26",
      starContracts: [
        { player: "Luka Doncic", position: "PG", aav: 69.2, contractNote: "5yr/$346M (2024), $69.2M AAV; acquired from Dallas Feb 2025 for Anthony Davis; 5× All-Star under age 26" },
        { player: "LeBron James", position: "SF", aav: 52.6, contractNote: "$52.6M player option exercised for 2025-26; playing into age 41 as NBA all-time scoring leader" }
      ]
    },
    analystNotes: "The Lakers' $10B majority stake sale to Mark Walter in 2025 represents the apex of NBA franchise valuations — a 40% premium to Forbes' 2024 figure driven by brand scarcity, LA market size, and the Luka Doncic acquisition reloading star power for the post-LeBron era. The Crypto.com Arena tenant structure is the franchise's largest structural disadvantage: AEG captures all venue economics including concerts from the world's busiest multi-use arena, limiting the team's owned revenue base. The Spectrum local TV deal ($150M/yr) is the richest in basketball but faces cord-cutting exposure in the 2030s; the new national deal and Doncic acquisition partially mitigate this risk. At $10B, the Lakers are now valued at a level that makes a pure financial return difficult — the Walter acquisition is a trophy asset purchase with strategic and social capital dimensions that transcend IRR calculations."
  },

  "Phoenix Suns": {
    valuationHistory: [
      { year: 2019, value: 1.4,  source: "Forbes" },
      { year: 2020, value: 1.4,  source: "Forbes" },
      { year: 2021, value: 1.8,  source: "Forbes" },
      { year: 2022, value: 1.8,  source: "Forbes" },
      { year: 2023, value: 4.0,  source: "Forbes / Ishbia acquisition implied" },
      { year: 2024, value: 4.1,  source: "Forbes" },
    ],
    revenue: { estimate: 348, year: 2024, source: "Forbes est.", operatingIncome: 45 },
    transactions: [
      { year: 2004, price: 0.401, buyer: "Robert Sarver", seller: "Jerry Colangelo", notes: "Sarver's group acquired for $401M; franchise won 62 games under Steve Nash in 2004-05 next season; Sarver's contentious tenure ended with NBA investigation and forced sale 2022" },
      { year: 2023, price: 4.0, buyer: "Mat Ishbia (UWM Holdings CEO)", seller: "Robert Sarver (forced sale after NBA workplace investigation)", notes: "NBA-record $4B sale at time — 10x Sarver's 2004 purchase; deal also included WNBA Phoenix Mercury; Ishbia paid premium over Forbes estimates driven by competitive bidding and reported LeBron James interest" }
    ],
    arena: {
      name: "Mortgage Matchup Center",
      yearOpened: 1992,
      capacity: 17055,
      ownershipModel: "City of Phoenix owns arena; Suns pay rent and operate under lease; $89M original construction fully publicly funded; 2021 renovation $230M ($150M city + ~$80M team); second-oldest arena in NBA",
      teamOwnsLand: false,
      publicSubsidy: 239,
      privateFinancing: 80,
      namingRightsDeal: { sponsor: "Mortgage Matchup (UWM Holdings/Ishbia affiliate)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Ishbia renamed arena for his mortgage business in 2025; previously Footprint Center (2021-25), PHX Arena (2020-21), Talking Stick Resort Arena, US Airways Center (until 2006); new deal value undisclosed" },
      nonArenaRevenue: "City manages facility maintenance; Suns operational economics under lease; Phoenix Mercury WNBA co-tenancy included in Ishbia's $4B acquisition package",
      newArenaPlans: "Active engagement with City of Phoenix on renovation or replacement; 1992 venue is second-oldest in NBA — significant renovation or replacement needed within 5-10 years"
    },
    media: {
      localTVDeal: "Bally Sports Arizona / FanDuel Sports Network, ~$20M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Mat Ishbia (UWM Holdings / United Wholesale Mortgage CEO)",
      ownerNetWorth: "~$6B est. (UWM Holdings equity; NYSE: UWMC)",
      ownerBackground: "Mat Ishbia inherited leadership of United Wholesale Mortgage from father Jeff Ishbia; built it into the nation's largest wholesale mortgage lender; UWM IPO 2021 at ~$16B valuation; purchased Suns and Mercury for NBA-record $4B in 2023; brother Justin holds minor stake",
      acquisitionYear: 2023,
      acquisitionPrice: 4.0,
      currentValuation: 4.1,
      impliedReturn: "Minimal — recent acquisition; $4.0B → $4.1B since 2023",
      ownershipGroup: [
        { name: "Mat Ishbia", role: "majority owner/governor", pct: "majority" },
        { name: "Justin Ishbia", role: "minority owner (brother)", pct: null }
      ],
      institutionalInvestors: "None",
      otherBusinessInterests: "UWM Holdings (NYSE: UWMC — nation's largest wholesale mortgage lender); Phoenix Mercury (WNBA) included in acquisition"
    },
    brand: {
      socialMedia: { instagram: "~8M", twitter: "~5M", facebook: "~9M" },
      merchandiseNotes: "Suns enjoyed merchandise surge during 2021 Finals run; Devin Booker's national brand recognition drives jerseys; roster restructuring creating transition period",
      internationalFanbase: "Moderate; Kevin Durant's global brand extends Phoenix's reach; Phoenix fast-growing market with young demographic",
      notableSponsorships: ["Mortgage Matchup (arena naming — Ishbia entity)", "Verizon", "Arizona Coyotes/Diamondbacks regional crossover sponsors"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Devin Booker — 4yr/$224M (2023), $56M AAV, through 2026-27; Kevin Durant age 36",
      starContracts: [
        { player: "Devin Booker", position: "SG", aav: 56.0, contractNote: "4yr/$224M (2023), through 2026-27; 4× All-Star" },
        { player: "Kevin Durant", position: "SF", aav: 56.5, contractNote: "2yr/$113M (2023); age 36+ entering 2025-26; injury risk increasing" },
        { player: "Bradley Beal", position: "SG", aav: 50.2, contractNote: "5yr/$251M (2022), through 2026-27; no-trade clause; $56.3M in 2025-26 — most constrained cap item in Western Conference" }
      ]
    },
    analystNotes: "Ishbia's $4B acquisition was immediately stress-tested by a dysfunctional roster — the Durant-Booker-Beal triumvirate spent as much time injured as together, and Beal's unmovable contract ($56M/yr, no-trade clause through 2026-27) is the most cited valuation overhang in the Western Conference. The arena's 1992 vintage is second-oldest in the NBA and limits premium revenue; active Phoenix renovation negotiations are the franchise's most material near-term capex decision. The flat Forbes valuation ($4.0B → $4.1B) from purchase to 2024 reflects real competitive and structural uncertainty, partly offset by Phoenix's strong population growth and Ishbia's deep mortgage-industry corporate sponsor relationships."
  },

  "Sacramento Kings": {
    valuationHistory: [
      { year: 2019, value: 1.58, source: "Forbes" },
      { year: 2020, value: 1.7,  source: "Forbes" },
      { year: 2021, value: 1.9,  source: "Forbes" },
      { year: 2022, value: 2.3,  source: "Forbes" },
      { year: 2023, value: 3.2,  source: "Forbes" },
      { year: 2024, value: 4.45, source: "Forbes" },
    ],
    revenue: { estimate: 325, year: 2024, source: "Forbes est.", operatingIncome: 50 },
    transactions: [
      { year: 2013, price: 0.534, buyer: "Vivek Ranadivé group", seller: "Maloof family", notes: "Ranadivé-led group acquired 65% controlling interest for $534M; deal blocked proposed relocation to Seattle and anchored franchise permanently in Sacramento" }
    ],
    arena: {
      name: "Golden 1 Center",
      yearOpened: 2016,
      capacity: 17608,
      ownershipModel: "Mixed public-private: city of Sacramento contributed $255M, Kings contributed $304M to $559M total; Kings have substantial operational control and revenue participation under long-term agreement",
      teamOwnsLand: false,
      publicSubsidy: 255,
      privateFinancing: 304,
      namingRightsDeal: { sponsor: "Golden 1 Credit Union", annualValue_M: 6, totalValue_M: 120, expiryYear: 2035, notes: "20-year, $120M deal signed 2015 — first credit union naming rights deal in major US professional sports" },
      nonArenaRevenue: "Golden 1 Center anchors DOCO (Downtown Commons) entertainment district; Kings capture revenue from adjacent development and events; LEED Platinum certification and 100% solar power create unique green brand differentiator",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "NBC Sports California, ~$15M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Vivek Ranadivé (founder/chairman)",
      ownerNetWorth: "~$2B est. (TIBCO Software founder; sold to Vista Equity for $4.3B)",
      ownerBackground: "Software entrepreneur who co-founded TIBCO Software and sold to Vista Equity Partners for $4.3B in 2014; organized investor group to acquire Kings in 2013 for $534M and keep team in Sacramento, blocking threatened Seattle relocation; has built franchise from near-moved position to $4.45B asset",
      acquisitionYear: 2013,
      acquisitionPrice: 0.534,
      currentValuation: 4.45,
      impliedReturn: "~8.3x in 12 years (~19% CAGR)",
      ownershipGroup: [
        { name: "Vivek Ranadivé", role: "controlling owner/chairman", pct: "majority" },
        { name: "Paul Jacobs", role: "minority (former Qualcomm CEO)", pct: null }
      ],
      institutionalInvestors: "None significant",
      otherBusinessInterests: "Technology and real estate investments; Sacramento Republic FC (USL — pursuing MLS expansion bid)"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2M", facebook: "~4M" },
      merchandiseNotes: "16-year playoff drought broken in 2023 created significant merchandise bounce; De'Aaron Fox trade to San Antonio creates uncertainty; Golden 1 Center as LEED Platinum venue creates green brand differentiation",
      internationalFanbase: "Limited; primarily regional Northern California following as Sacramento's largest entertainment asset",
      notableSponsorships: ["Golden 1 Credit Union (arena naming)", "Geico (jersey patch)", "Papa Murphy's", "California Almond Board"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Domantas Sabonis — 4yr/$218M (2022), $54.5M AAV; Zach LaVine acquired from Chicago 2025",
      starContracts: [
        { player: "Domantas Sabonis", position: "C", aav: 54.5, contractNote: "4yr/$218M (2022), through 2025-26; 3× All-Star; franchise anchor" },
        { player: "Zach LaVine", position: "SG", aav: 46.0, contractNote: "Acquired from Chicago Bulls 2025 along with picks; 3yr/$138M through 2024-25" }
      ]
    },
    analystNotes: "Ranadivé's 12-year stewardship transformed a near-relocation franchise into one of the NBA's fastest-appreciating assets (8.3× from $534M to $4.45B). Golden 1 Center's DOCO entertainment district revitalization of downtown Sacramento is a textbook arena-led urban development case study. The De'Aaron Fox trade to San Antonio (2025) introduces competitive uncertainty, but the draft capital haul and LaVine acquisition provides roster flexibility. Sacramento is the largest US market without a second major-league team — the Kings' captive regional audience creates a structural revenue floor unavailable in multi-team markets."
  },
  // --- WESTERN CONFERENCE — SOUTHWEST DIVISION ---

  "Dallas Mavericks": {
    valuationHistory: [
      { year: 2019, value: 1.9,  source: "Forbes" },
      { year: 2020, value: 2.0,  source: "Forbes" },
      { year: 2021, value: 2.35, source: "Forbes" },
      { year: 2022, value: 2.0,  source: "Forbes" },
      { year: 2023, value: 3.3,  source: "Forbes" },
      { year: 2024, value: 4.5,  source: "Forbes" },
    ],
    revenue: { estimate: 358, year: 2024, source: "Forbes est.", operatingIncome: 60 },
    transactions: [
      { year: 2000, price: 0.285, buyer: "Mark Cuban", seller: "Ross Perot Jr.", notes: "Cuban purchased for $285M after selling Broadcast.com to Yahoo for $5.7B; his hands-on ownership style and technology investments transformed franchise culture and NBA owner expectations" },
      { year: 2023, price: 3.5, buyer: "Miriam Adelson & Patrick Dumont (Las Vegas Sands)", seller: "Mark Cuban", notes: "Adelson/Dumont acquired 69% at implied $3.5B valuation (Dec 2023); Cuban retained 27% and governor role; deal strategically linked to Texas gaming legislation as Sands lobbies for Texas casino licenses" }
    ],
    arena: {
      name: "American Airlines Center",
      yearOpened: 2001,
      capacity: 19200,
      ownershipModel: "City of Dallas and Dallas County provided ~$125M in public financing; remainder privately financed by Mavericks and NHL Stars jointly; operated by Mavericks/Stars joint venture",
      teamOwnsLand: false,
      publicSubsidy: 125,
      privateFinancing: 295,
      namingRightsDeal: { sponsor: "American Airlines", annualValue_M: 10, totalValue_M: null, expiryYear: 2031, notes: "30-year deal signed 2000; estimated ~$10M/yr current market; covers both Mavericks and NHL Dallas Stars as co-tenants; expires 2031" },
      nonArenaRevenue: "Mavericks and Stars jointly operate venue and split economics from non-game events; full renovation or replacement discussions active given 2001 vintage",
      newArenaPlans: "Active discussions between Stars, Mavs, and city/county on renovation or new arena; AAC naming rights expire 2031, triggering natural decision point"
    },
    media: {
      localTVDeal: "Bally Sports Southwest / FanDuel Sports Network, ~$12M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Miriam Adelson & Patrick Dumont (Las Vegas Sands, 69% majority)",
      ownerNetWorth: "Adelson family: ~$30B est. (Las Vegas Sands estate); Dumont: ~$1B est.",
      ownerBackground: "Miriam Adelson inherited Las Vegas Sands from late billionaire Sheldon Adelson; son-in-law Patrick Dumont serves as Sands CEO; acquired 69% at $3.5B implied in Dec 2023 — strategic bet tied to Texas sports gambling legislation as Sands lobbies aggressively for Texas casino licenses; Mark Cuban retained 27% stake through 2023-24 as governor",
      acquisitionYear: 2023,
      acquisitionPrice: 3.5,
      currentValuation: 4.5,
      impliedReturn: "$3.5B → $4.5B in 2 years; NBA-wide comp expansion plus market rerating",
      ownershipGroup: [
        { name: "Miriam Adelson / Patrick Dumont", role: "majority (69%) via Las Vegas Sands", pct: "69%" },
        { name: "Mark Cuban", role: "minority (27%), retained governor through 2023-24", pct: "27%" }
      ],
      institutionalInvestors: "None significant",
      otherBusinessInterests: "Las Vegas Sands Corp (NYSE: LVS — global casino/resort operator); Texas gaming legislation pursuit"
    },
    brand: {
      socialMedia: { instagram: "~8M", twitter: "~5M", facebook: "~10M" },
      merchandiseNotes: "Luka Doncic departure to Lakers (Feb 2025) resets merchandise cycle; Anthony Davis arrival creates new championship narrative; DFW market is 4th-largest US DMA with massive corporate sponsor base",
      internationalFanbase: "Luka Doncic built one of NBA's most global fanbases (Slovenian, European); now Lakers-focused; Dallas maintains strong domestic DFW base",
      notableSponsorships: ["American Airlines (arena naming)", "Chime Financial (jersey patch)", "PNC Bank", "5-Hour Energy"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Anthony Davis — acquired from Lakers in Luka Doncic trade Feb 2025; 3yr/$186M (2023), $62M AAV; Cooper Flagg selected #1 overall pick 2025",
      starContracts: [
        { player: "Anthony Davis", position: "C", aav: 62.0, contractNote: "3yr/$186M (2023), through 2025-26; acquired from Lakers in blockbuster Doncic trade Feb 2025" },
        { player: "Kyrie Irving", position: "PG", aav: 42.0, contractNote: "3yr/$126M (2023), through 2025-26" },
        { player: "Cooper Flagg", position: "SF", aav: 14.0, contractNote: "#1 overall pick 2025; on rookie scale through 2028-29" }
      ]
    },
    analystNotes: "The Adelson acquisition's implicit thesis was Texas sports gambling legislation — Las Vegas Sands has lobbied aggressively for Texas casino licenses, and Mavericks ownership provides political leverage and brand presence in the nation's most valuable potential gaming market. The Luka Doncic trade (Feb 2025) to LA is the most disruptive Western Conference transaction in years: it resets Dallas's championship timeline while Anthony Davis' arrival creates a different, older path to contention. Cooper Flagg's #1 draft selection immediately restores optimism about the franchise's long-term trajectory. The implied $3.5B → $4.5B appreciation reflects league-wide DFW market appreciation, not franchise-specific development — Adelson/Dumont's test is whether the post-Luka rebuild can sustain valuation at the 4th-largest US DMA."
  },

  "Houston Rockets": {
    valuationHistory: [
      { year: 2019, value: 2.5,  source: "Forbes" },
      { year: 2020, value: 2.4,  source: "Forbes" },
      { year: 2021, value: 2.5,  source: "Forbes" },
      { year: 2022, value: 1.9,  source: "Forbes" },
      { year: 2023, value: 3.3,  source: "Forbes" },
      { year: 2024, value: 4.1,  source: "Forbes" },
    ],
    revenue: { estimate: 379, year: 2025, source: "Forbes/CNBC est.", operatingIncome: 75 },
    transactions: [
      { year: 1993, price: 0.085, buyer: "Leslie Alexander", seller: "Charlie Thomas", notes: "Alexander paid $85M; franchise won back-to-back championships in 1994 and 1995 the following two seasons; Olajuwon era validated purchase as transformative" },
      { year: 2017, price: 2.2, buyer: "Tilman Fertitta (Landry's Inc.)", seller: "Leslie Alexander", notes: "Fertitta paid $2.2B — then-NBA record; Houston native restaurant/casino magnate; deal closed October 2017" }
    ],
    arena: {
      name: "Toyota Center",
      yearOpened: 2003,
      capacity: 18055,
      ownershipModel: "Harris County-Houston Sports Authority financed construction via bonds; Rockets operate under long-term lease and fund improvements; $180M renovation approved 2024",
      teamOwnsLand: false,
      publicSubsidy: 140,
      privateFinancing: 95,
      namingRightsDeal: { sponsor: "Toyota Motor North America", annualValue_M: 9, totalValue_M: null, expiryYear: null, notes: "Long-running Toyota deal at ~$9M/yr; one of NBA's consistent naming relationships; Toyota Motor NA HQ in Plano, TX" },
      nonArenaRevenue: "Space City Home Network (Rockets-owned DTC streaming platform) provides direct subscriber revenue — innovative alternative to traditional RSN economics",
      newArenaPlans: "$180M renovation approved 2024: Texas state $95M + Fertitta $85M; includes new scoreboard, premium suite expansion, practice facility improvements; completing 2026"
    },
    media: {
      localTVDeal: "Space City Home Network (Rockets-owned DTC streaming platform, launched 2023) — alternative model bypassing traditional RSN; ~$100M revenue equivalent",
      streamingNotes: "Space City Home Network provides direct-to-consumer local games; one of NBA's most innovative local media experiments; NBA League Pass also available",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Tilman Fertitta (Landry's Inc. / Golden Nugget Hotels & Casinos)",
      ownerNetWorth: "~$4B est. (Landry's restaurant and casino empire)",
      ownerBackground: "Houston native who built Landry's restaurant empire (600+ locations including Landry's Seafood, Bubba Gump, Golden Nugget Hotels); also owns Golden Nugget Online Gaming; purchased Rockets for $2.2B in 2017 — then-record; immediately became one of NBA's most vocal owners; launched Space City Home Network DTC experiment in 2023 when Bally Sports/Sinclair RSN collapsed",
      acquisitionYear: 2017,
      acquisitionPrice: 2.2,
      currentValuation: 4.1,
      impliedReturn: "~1.86x in 8 years (~9% CAGR)",
      ownershipGroup: [
        { name: "Tilman Fertitta", role: "sole owner/governor", pct: "100%" }
      ],
      institutionalInvestors: "None; Fertitta owns 100%",
      otherBusinessInterests: "Landry's Inc. (private; 600+ restaurant and hospitality properties); Golden Nugget Hotels & Casinos (gaming assets)"
    },
    brand: {
      socialMedia: { instagram: "~7M", twitter: "~4M", facebook: "~8M" },
      merchandiseNotes: "Jalen Green + Kevin Durant core building national brand; Space City (Houston) identity resonating locally; Hakeem/Olajuwon legacy sustains brand floor nationally",
      internationalFanbase: "Kevin Durant's global brand extends Houston's reach; strong Houston Hispanic community drives local engagement; 8th-largest US DMA with growing diverse demographics",
      notableSponsorships: ["Toyota (arena naming)", "Xfinity (jersey patch)", "CenterPoint Energy", "Houston Methodist (medical partner)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Jalen Green — 5yr/$165M (2023), $33M AAV; Kevin Durant acquired from Phoenix Suns 2025",
      starContracts: [
        { player: "Jalen Green", position: "SG", aav: 33.0, contractNote: "5yr/$165M (2023), through 2027-28; franchise cornerstone" },
        { player: "Kevin Durant", position: "SF", aav: 56.5, contractNote: "Acquired from Phoenix Suns 2025; age 36+; global brand extends Houston's reach" },
        { player: "Fred VanVleet", position: "PG", aav: 43.3, contractNote: "3yr/$130M (2023), through 2025-26" }
      ]
    },
    analystNotes: "Houston's $4.1B Forbes valuation represents an 86% appreciation on Fertitta's 2017 purchase, driven primarily by league-wide comp expansion and the Jalen Green-Alperen Sengun youth core's promise. The Space City Home Network DTC bet is the franchise's most consequential strategic decision — abandoning cable distribution for direct streaming positions Houston optimally for the next rights cycle, but carries subscriber acquisition risk as the Houston RSN subscriber base is habituated to cable. The $180M renovation commitment (state $95M + team $85M) resolves near-term arena obsolescence and locks in Toyota Center for another decade."
  },

  "Memphis Grizzlies": {
    valuationHistory: [
      { year: 2019, value: 1.3,  source: "Forbes" },
      { year: 2020, value: 1.3,  source: "Forbes" },
      { year: 2021, value: 1.5,  source: "Forbes" },
      { year: 2022, value: 1.6,  source: "Forbes" },
      { year: 2023, value: 1.9,  source: "Forbes" },
      { year: 2024, value: 2.5,  source: "Forbes" },
    ],
    revenue: { estimate: 272, year: 2024, source: "Forbes est.", operatingIncome: 30 },
    transactions: [
      { year: 2012, price: 0.377, buyer: "Robert Pera (Ubiquiti Networks founder)", seller: "Michael Heisley estate", notes: "Pera paid $377M — at age 36, the youngest majority owner in NBA history at the time; franchise was losing ~$15M/yr; Ubiquiti Networks' subsequent growth made the Grizzlies a modest fraction of Pera's total net worth" }
    ],
    arena: {
      name: "FedExForum",
      yearOpened: 2004,
      capacity: 17794,
      ownershipModel: "Financed primarily via city and state bonds; owned by Memphis and Shelby County jointly; Grizzlies operate under long-term lease",
      teamOwnsLand: false,
      publicSubsidy: 200,
      privateFinancing: 50,
      namingRightsDeal: { sponsor: "FedEx Corporation", annualValue_M: 5, totalValue_M: 92, expiryYear: null, notes: "Original 20-year, $92M deal ($4.6M/yr) signed 2004; FedEx is Memphis's largest employer by far and defining corporate identity; likely renewed" },
      nonArenaRevenue: "Grizzlies operate as arena tenant; limited direct non-game economics",
      newArenaPlans: "None announced; arena is publicly managed with periodic discussion of upgrades"
    },
    media: {
      localTVDeal: "Bally Sports Southeast / FanDuel Sports Network, ~$12M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Robert Pera (Ubiquiti Networks founder/CEO)",
      ownerNetWorth: "~$18B est. (Ubiquiti Networks equity; NYSE: UI — Pera owns ~90%)",
      ownerBackground: "Self-made tech billionaire who founded Ubiquiti Networks (low-cost networking equipment for emerging markets); bought Grizzlies at age 36 in 2012 for $377M — youngest NBA majority owner at the time; Ubiquiti's market cap grew from ~$1B to ~$18B under Pera's continued leadership, making the Grizzlies a relatively small portion of his portfolio",
      acquisitionYear: 2012,
      acquisitionPrice: 0.377,
      currentValuation: 2.5,
      impliedReturn: "~6.6x in 13 years (~15% CAGR)",
      ownershipGroup: [
        { name: "Robert Pera", role: "majority owner/governor", pct: "majority" },
        { name: "Justin Timberlake", role: "small passive minority", pct: null }
      ],
      institutionalInvestors: "None significant",
      otherBusinessInterests: "Ubiquiti Networks (NYSE: UI — ~$18B market cap; Pera owns ~90%)"
    },
    brand: {
      socialMedia: { instagram: "~4M", twitter: "~2.5M", facebook: "~5M" },
      merchandiseNotes: "Grit and Grind identity created powerful franchise mythology; Ja Morant's explosiveness and off-court controversies define brand narrative; JJJ's defensive excellence generates basketball-cognoscenti respect",
      internationalFanbase: "Limited; Memphis is 45th US DMA; primarily domestic regional following with Ja Morant's social media driving some youth following nationally",
      notableSponsorships: ["FedEx (arena naming)", "American Family Insurance (jersey patch)", "FedEx Ground (logistics)", "Bank of America"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Ja Morant — 5yr/$231M (2022), $46.2M AAV, through 2026-27; multiple gun-related suspensions create ongoing reputational risk",
      starContracts: [
        { player: "Ja Morant", position: "PG", aav: 46.2, contractNote: "5yr/$231M (2022), through 2026-27; two gun-related suspensions (2022-23 and 2023-24); trade speculation active" },
        { player: "Jaren Jackson Jr.", position: "C/PF", aav: 60.0, contractNote: "4yr/$240M (2024), through 2027-28; 2023 Defensive Player of the Year" }
      ]
    },
    analystNotes: "Memphis is the NBA's clearest test case of whether superstar ceiling can override market size — at the 45th DMA, franchise value is almost entirely driven by the national revenue pool and Ja Morant's star power. Pera's $377M → $2.5B appreciation (+563%) is among the best returns of any NBA owner in the modern era despite no playoff success recently. Morant's repeated conduct issues (two gun-related suspensions in consecutive seasons) have suppressed valuation relative to comparable small-market teams and created trade speculation that could either reset the franchise with draft capital or, if Morant recommits cleanly, deliver an outsized return as one of the league's most electrifying players."
  },

  "New Orleans Pelicans": {
    valuationHistory: [
      { year: 2019, value: 1.4,  source: "Forbes" },
      { year: 2020, value: 1.35, source: "Forbes" },
      { year: 2021, value: 1.45, source: "Forbes" },
      { year: 2022, value: 1.5,  source: "Forbes" },
      { year: 2023, value: 1.75, source: "Forbes" },
      { year: 2024, value: 2.2,  source: "Forbes" },
    ],
    revenue: { estimate: 258, year: 2024, source: "Forbes est.", operatingIncome: 25 },
    transactions: [
      { year: 2012, price: 0.338, buyer: "Tom Benson", seller: "NBA (league had taken over team in 2010)", notes: "NBA sold Hornets (rebranded Pelicans 2013) to Saints owner Tom Benson for $338M after league took control from George Shinn; Benson rebranded team as New Orleans Pelicans in 2013" },
      { year: 2018, price: null, buyer: "Gayle Benson (inheritance)", seller: "Tom Benson estate", notes: "Tom Benson died March 2018 at age 90; Gayle Benson (wife) inherited both Saints and Pelicans — one of only a handful of women in US history to control two major professional sports franchises simultaneously" }
    ],
    arena: {
      name: "Smoothie King Center",
      yearOpened: 1999,
      capacity: 16867,
      ownershipModel: "100% publicly funded via New Orleans hotel tax revenues; owned by Ernest N. Morial New Orleans Exhibition Hall Authority; Pelicans operate under long-term agreement",
      teamOwnsLand: false,
      publicSubsidy: 114,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Smoothie King (Franchise Group)", annualValue_M: 4, totalValue_M: 40, expiryYear: null, notes: "10-year, $40M deal signed 2014 at $4M/yr; terms reportedly renewed ~2023" },
      nonArenaRevenue: "Pelicans operate as arena tenant with limited direct event economics",
      newArenaPlans: "$250M major renovation OR $1B+ new arena at proposed downtown entertainment district being studied; decision expected 2026-27; 1999 venue approaching 30-year lifecycle"
    },
    media: {
      localTVDeal: "Bally Sports New Orleans / FanDuel Sports Network, ~$12M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Gayle Benson (Benson family)",
      ownerNetWorth: "~$3-4B est. (combined Saints + Pelicans + real estate and media holdings)",
      ownerBackground: "Wife of late Tom Benson (died 2018 at 90); inherited both NFL Saints and NBA Pelicans simultaneously — one of the most concentrated women's sports ownership portfolios in US history; Tom Benson originally purchased Pelicans (then Hornets) from the NBA in 2012 after league took control; Gayle is an active owner with deep New Orleans civic ties",
      acquisitionYear: 2012,
      acquisitionPrice: 0.338,
      currentValuation: 2.2,
      impliedReturn: "~6.5x in 13 years; combined Saints + Pelicans empire worth $6B+",
      ownershipGroup: [
        { name: "Gayle Benson", role: "owner/governor", pct: "100%" }
      ],
      institutionalInvestors: "None; tightly Benson-family held",
      otherBusinessInterests: "New Orleans Saints (NFL); Benson family real estate, media, and Louisiana business interests"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2M", facebook: "~4M" },
      merchandiseNotes: "Zion Williamson's health trajectory is the primary brand variable — healthy Zion is a top-10 jersey seller globally; injury seasons limit activation and brand consistency",
      internationalFanbase: "Limited; New Orleans is 52nd DMA; primarily regional Gulf Coast following with Zion driving some international youth interest when healthy",
      notableSponsorships: ["Smoothie King (arena naming)", "Caesars Entertainment (jersey patch)", "Zatarain's (New Orleans local)", "Entergy Louisiana"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Zion Williamson — 5yr/$197M (2022), $39.4M AAV, through 2026-27; Brandon Ingram requested trade 2025",
      starContracts: [
        { player: "Zion Williamson", position: "PF", aav: 39.4, contractNote: "5yr/$197M (2022), through 2026-27; chronic injury history limits availability; $39.4M guaranteed regardless" },
        { player: "Brandon Ingram", position: "SF", aav: 31.6, contractNote: "5yr/$158M (2021), through 2025-26; submitted trade request 2025" },
        { player: "CJ McCollum", position: "PG", aav: 29.3, contractNote: "3yr/$88M (2022), through 2024-25" }
      ]
    },
    analystNotes: "The Pelicans are the NBA's highest-risk/highest-reward small-market franchise — Zion Williamson's combination of superstar talent and chronic injury history defines the entire valuation narrative. If healthy, New Orleans can compete for playoff positioning; if unavailable, the franchise loses more value per lost game than any other team given the lack of local market revenue cushion. Gayle Benson's dual ownership of Saints and Pelicans creates unique operational synergies (stadium negotiation leverage, shared sponsorship relationships, political connections) but also concentrated risk — two sports franchises in one distressed small market without clear succession planning visibility. The arena decision (renovation vs. new, $250M vs. $1B+) will be the franchise's defining strategic choice in the next 24 months."
  },

  "San Antonio Spurs": {
    valuationHistory: [
      { year: 2019, value: 1.6,  source: "Forbes" },
      { year: 2020, value: 1.55, source: "Forbes" },
      { year: 2021, value: 1.65, source: "Forbes" },
      { year: 2022, value: 1.6,  source: "Forbes" },
      { year: 2023, value: 1.85, source: "Forbes" },
      { year: 2024, value: 2.35, source: "Forbes" },
    ],
    revenue: { estimate: 278, year: 2024, source: "Forbes est.", operatingIncome: 35 },
    transactions: [
      { year: 1993, price: 0.075, buyer: "Peter Holt-led consortium", seller: "B.J. 'Red' McCombs", notes: "Holt group acquired franchise for $75M; Holt served as governor through all five championships (1999, 2003, 2005, 2007, 2014) — the most decorated ownership run in NBA history by titles per dollar invested" }
    ],
    arena: {
      name: "Frost Bank Center",
      yearOpened: 2002,
      capacity: 18418,
      ownershipModel: "Bexar County owns arena; Spurs operate under long-term lease; new $1.3B Hemisfair downtown arena approved November 2024 will be Spurs' first owned/co-owned venue",
      teamOwnsLand: false,
      publicSubsidy: 186,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Frost Bank (Cullen/Frost Bankers Inc.)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Frost Bank naming started 2022; AT&T Center 20-year naming deal expired 2022; Frost Bank is San Antonio's largest homegrown bank" },
      nonArenaRevenue: "Limited; current Frost Bank Center is county-owned; Spurs do not capture event economics; Hemisfair arena (2030) will transform this equation",
      newArenaPlans: "New $1.3B Hemisfair arena downtown San Antonio: voters approved $311M city GO bonds (Nov 2024) + $489M additional city financing + $500M Spurs private contribution; expected completion 2030; designed by Gensler; Spurs will own or co-own venue for first time in franchise history"
    },
    media: {
      localTVDeal: "Bally Sports Southwest / FanDuel Sports Network, ~$15M/yr",
      streamingNotes: "Standard NBA League Pass",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Spurs Sports & Entertainment (Holt family and investment partners)",
      ownerNetWorth: "Holt family: ~$1B est. (oil, gas, real estate); investment partners undisclosed",
      ownerBackground: "Peter Holt-led consortium purchased franchise for $75M in 1993; Holt served as governor through all five championships; ownership restructured ~2021 with Sycamore Hill Capital and new investors; Julianna Holt (Peter's ex-wife, longtime franchise executive) elevated; Peter transitioned to senior advisory role",
      acquisitionYear: 1993,
      acquisitionPrice: 0.075,
      currentValuation: 2.35,
      impliedReturn: "~31x in 32 years (~12% CAGR)",
      ownershipGroup: [
        { name: "Holt family", role: "controlling ownership via SS&E", pct: "majority" },
        { name: "Sycamore Hill Capital affiliated investors", role: "minority", pct: null }
      ],
      institutionalInvestors: "Sycamore Hill Capital is private equity-affiliated; limited public disclosure",
      otherBusinessInterests: "SS&E also owns Austin Spurs (NBA G League); San Antonio FC (USL); AT&T Center operations (outgoing lease)"
    },
    brand: {
      socialMedia: { instagram: "~5M", twitter: "~3M", facebook: "~6M" },
      merchandiseNotes: "Five championships and Popovich/Duncan dynasty created one of NBA's most respected organizational brands; Victor Wembanyama arriving era generating international merchandise surge; De'Aaron Fox acquisition adds established star alongside generational prospect",
      internationalFanbase: "Victor Wembanyama is the largest French sports star since Thierry Henry; massive French following and European brand expansion; international metrics improving sharply post-2023 draft",
      notableSponsorships: ["Frost Bank (arena naming)", "H-E-B (Texas grocery — deeply embedded local partner)", "Spurs Give (community)", "AT&T (former naming partner — 20yr deal)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Victor Wembanyama — rookie scale contract ($13.75M AAV through 2026-27); 2024 Rookie of the Year; #1 pick 2023; supermax extension eligible 2026",
      starContracts: [
        { player: "Victor Wembanyama", position: "C/PF", aav: 13.75, contractNote: "Rookie scale through 2026-27; 7'4\" wingspan; considered once-in-generation talent; max extension ~$280M eligible summer 2026" },
        { player: "De'Aaron Fox", position: "PG", aav: 30.0, contractNote: "Acquired from Sacramento Kings in 3-team trade Feb 2025; established All-Star guard to complement Wembanyama's development" }
      ]
    },
    analystNotes: "The Spurs' $2.35B valuation dramatically understates the asset's long-term potential: Victor Wembanyama is still on a below-market rookie contract ($13.75M/yr vs. $70M+ max extension value), and the new $1.3B Hemisfair arena (2030) will give the Spurs outright venue economics for the first time in franchise history. Wembanyama's combination of 7'4\" wingspan, guard skill set, and defensive versatility has already validated generational-talent status in his rookie season — French media deals, European marketing partnerships, and Nike revenue tied to Wembanyama will compound as he enters his prime. The $311M voter-approved city GO bond for the Hemisfair arena is the most significant civic commitment to San Antonio's NBA franchise since the 1999 championship, and the Spurs' $500M private contribution signals deep ownership confidence in the Wembanyama era."
  },


  "Milwaukee Bucks": {
    valuationHistory: [
      { year: 2019, value: 1.63, source: "Forbes" },
      { year: 2020, value: 1.78, source: "Forbes" },
      { year: 2021, value: 2.1,  source: "Forbes" },
      { year: 2022, value: 2.85, source: "Forbes" },
      { year: 2023, value: 3.2,  source: "Forbes" },
      { year: 2024, value: 4.0,  source: "Forbes" },
    ],
    revenue: { estimate: 340, year: 2024, source: "Forbes", operatingIncome: 55 },
    transactions: [
      { year: 2014, price: 0.55, buyer: "Wes Edens & Marc Lasry", seller: "Herb Kohl (Senator)", notes: "Edens/Lasry purchased for $550M; Herb Kohl required commitment to keep team in Milwaukee as condition of sale" },
      { year: 2023, price: 0.875, buyer: "Jimmy & Dee Haslam", seller: "Marc Lasry (~25% stake)", notes: "Cleveland Browns owners Haslams purchased Lasry's ~25% stake at implied $3.5B franchise valuation; Haslam paid approximately $875M for the stake" }
    ],
    arena: {
      name: "Fiserv Forum",
      yearOpened: 2018,
      capacity: 17341,
      ownershipModel: "owned by Deer District LLC (Bucks-affiliated entity); Bucks ownership built arena with $250M public support from Wisconsin state and Milwaukee County",
      teamOwnsLand: true,
      publicSubsidy: 250,
      privateFinancing: 274,
      namingRightsDeal: { sponsor: "Fiserv Inc.", annualValue_M: 6, totalValue_M: 150, expiryYear: 2043, notes: "25-year deal signed 2018 at ~$150M total (~$6M/yr)" },
      nonArenaRevenue: "Deer District — 7-acre adjacent entertainment district with restaurants, bars, outdoor plaza; generates year-round non-game revenue that materially reduces dependence on basketball performance cycles",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Wisconsin / FanDuel Sports Network, ~$15M/yr",
      streamingNotes: "Standard NBA League Pass; Deer District digital content expands fan engagement",
      nationalShareNote: "~$230M/team/year under new 11-year NBA TV deal starting 2025-26 (ESPN/ABC + NBC/Peacock + Amazon)"
    },
    ownership: {
      primaryOwner: "Wes Edens (managing partner) and Jimmy & Dee Haslam (~25% co-owners)",
      ownerNetWorth: "Edens: ~$2.5B est. (Fortress Investment Group co-founder); Haslams: ~$4B est. (Pilot Flying J / Cleveland Browns)",
      ownerBackground: "Edens co-founded Fortress Investment Group ($50B+ AUM alternative asset manager); partnered with Marc Lasry to buy Bucks for $550M in 2014 with Kohl's requirement to keep team in Milwaukee; Lasry sold ~25% stake to Cleveland Browns owners Jimmy and Dee Haslam in 2023 at $3.5B implied valuation",
      acquisitionYear: 2014,
      acquisitionPrice: 0.55,
      currentValuation: 4.0,
      impliedReturn: "~7.3x in 11 years (~20% CAGR)",
      ownershipGroup: [
        { name: "Wes Edens", role: "managing partner/governor", pct: "majority" },
        { name: "Jimmy & Dee Haslam", role: "minority (~25%)", pct: "~25%" }
      ],
      institutionalInvestors: "No institutional PE fund; Haslam family office capital",
      otherBusinessInterests: "Edens: Fortress Investment Group; Haslams: Cleveland Browns (NFL), Pilot Flying J (truck stop chain)"
    },
    brand: {
      socialMedia: { instagram: "~3M", twitter: "~2.5M", facebook: "~5M" },
      merchandiseNotes: "Giannis and Deer District are the brand pillars; 2021 championship created national cachet for a ~40th DMA market; Giannis Greek Freak marketing is above small-market peer expectations",
      internationalFanbase: "Exceptional for market size; Giannis drives strong Greek and European fanbase; one of the NBA's most recognized international brands given Milwaukee's small DMA",
      notableSponsorships: ["Fiserv (arena naming)", "Nike/Jordan Brand (Giannis apparel)", "MillerCoors (arena pouring rights)", "Northwestern Mutual"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Giannis Antetokounmpo — 3yr/$186M extension (2023), $62M AAV, through 2027-28; Damian Lillard — 4yr/$220M (2023), $55M AAV",
      starContracts: [
        { player: "Giannis Antetokounmpo", position: "PF", aav: 62.0, contractNote: "3yr/$186M extension (2023), through 2027-28; free agency decision post-2028 is the franchise's most consequential event" },
        { player: "Damian Lillard", position: "PG", aav: 55.0, contractNote: "4yr/$220M (2023), through 2026-27; acquired from Portland in 2023 trade" }
      ]
    },
    analystNotes: "Fiserv Forum's Deer District is best-in-class NBA arena district development — non-game events and hospitality revenues buffer a franchise that would otherwise be purely dependent on a ~40th-ranked US DMA. Giannis's 3-year extension through 2027-28 is the defining valuation anchor; his free agency decision post-2028 will be the most consequential financial event in Bucks history and one of the most watched in NBA free agency ever. At $4B in a market this size, the franchise demonstrates how championship pedigree and arena infrastructure can meaningfully exceed pure market-size expectations — a playbook applicable to multiple small-market franchises watching the Bucks closely."
  }

};