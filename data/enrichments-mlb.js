// MLB team enrichments — all 30 teams
// Sources: Forbes, Sportico, CNBC, ESPN, SBJ, Baseball-Reference, Spotrac
// National TV: ESPN 7yr ~$550M/yr through 2028, Fox 7yr ~$729M/yr through 2028, Apple TV+ ~$85M/yr through 2031 (~$57M/team/year)
export const mlbEnrichments = {
// ─── AL EAST ────────────────────────────────────────────────────

  "New York Yankees": {
    valuationHistory: [
      { year: 2019, value: 5.0,  source: "Forbes" },
      { year: 2020, value: 5.25, source: "Forbes" },
      { year: 2021, value: 5.7,  source: "Forbes" },
      { year: 2022, value: 6.0,  source: "Forbes" },
      { year: 2023, value: 7.1,  source: "Forbes" },
      { year: 2024, value: 8.2,  source: "Forbes" },
    ],
    revenue: { estimate: 728, year: 2024, source: "Forbes/CNBC", operatingIncome: 60 },
    transactions: [
      { year: 1973, price: 0.010, buyer: "George Steinbrenner-led group (12 investors)", seller: "CBS", notes: "Steinbrenner purchased the franchise for $8.7M; CBS sold at a loss after acquiring for $11.2M in 1964; transformative ownership that established the modern Yankees brand" },
      { year: 2008, price: null,  buyer: "Hal Steinbrenner (managing general partner)", seller: "George Steinbrenner (retirement from active role)", notes: "Hal Steinbrenner assumed day-to-day control; George died in 2010; Yankee Global Enterprises continues as family holding vehicle. No external transaction — intrafamily succession." }
    ],
    stadium: {
      name: "Yankee Stadium",
      yearBuilt: 2009,
      capacity: 50287,
      ownershipModel: "built and owned by a city/state bond-financed special purpose vehicle; Yankees hold long-term lease; effectively team-controlled facility",
      teamOwnsLand: false,
      publicSubsidy: 220,
      privateFinancing: 1380,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Yankees have never sold naming rights — a deliberate brand decision maintained since the stadium opened in 2009; estimated forgone value $15-20M/yr versus comparable large-market naming deals" },
      nonGameRevenue: "Stadium hosts concerts, boxing and other premium events; team captures event economics via Yankee Stadium LLC; YES Network broadcast revenue is the dominant media asset (~26% Yankees-owned stake in YES, valued at ~$3.5B enterprise value in 2019)",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "YES Network — Yankees own ~26% equity stake (reacquired 2019 from Fox/Sinclair group); YES generates ~$300M+ annual revenue with ~$150M+ flowing to team between rights fee and equity distributions; richest local media arrangement in MLB",
      streamingNotes: "Apple TV+ Friday Game of the Week; ESPN/Fox national packages; YES available on streaming via YouTube TV, Hulu Live, fuboTV",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Hal Steinbrenner (managing general partner)",
      ownerNetWorth: "Steinbrenner family: ~$4B+ (est.); Hal personally ~$1-2B",
      ownerBackground: "George Steinbrenner purchased franchise from CBS in 1973 for $8.7M; Hal assumed managing general partner role 2008; George died July 2010. Family control is absolute — Yankee Global Enterprises, LLC is the holding entity.",
      acquisitionYear: 1973,
      acquisitionPrice: 0.0087,
      currentValuation: 8.2,
      impliedReturn: "~940x in ~52 years from $8.7M to $8.2B (~15% CAGR)",
      ownershipGroup: [
        { name: "Hal Steinbrenner", role: "managing general partner", pct: null },
        { name: "Jennifer Steinbrenner Swindal", role: "limited partner / family", pct: null },
        { name: "Jessica Steinbrenner", role: "limited partner / family", pct: null },
        { name: "Hank Steinbrenner estate", role: "limited partner", pct: null }
      ],
      institutionalInvestors: "None — wholly family-owned; Yankees have consistently rejected partial sales. YES Network (26% stake) is the only external structural complexity.",
      otherBusinessInterests: "YES Network (26% ownership stake); Legends Hospitality (co-founded by Cowboys); real estate around stadium complex"
    },
    brand: {
      socialMedia: { instagram: "~9M", twitter: "~7M", facebook: "~12M" },
      merchandiseNotes: "#1 in MLB merchandise sales globally for most years on record; interlocking NY logo among the most recognized in all of sports; strong international licensing in Japan, Dominican Republic, Latin America, and Europe",
      internationalFanbase: "Strongest international brand in MLB; Yankees cap is a global symbol; significant Japanese following (Tanaka, Igawa legacy); dominant in Dominican Republic and Puerto Rico",
      notableSponsorships: ["Mastercard (jersey patch partner)", "Delta Air Lines", "Pepsi", "Bank of America", "Google Cloud"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Aaron Judge — 9yr/$360M extension signed Dec 2022, $40M AAV, through 2031",
      starContracts: [
        { player: "Aaron Judge", position: "CF/RF", aav: 40.0, contractNote: "9yr/$360M (Dec 2022), through 2031; 2022 AL MVP, 62 HR record" },
        { player: "Gerrit Cole", position: "SP", aav: 36.0, contractNote: "9yr/$324M (Dec 2019), through 2028; 2023 AL Cy Young" },
        { player: "Carlos Rodón", position: "SP", aav: 27.0, contractNote: "6yr/$162M (Dec 2022), through 2028" }
      ]
    },
    analystNotes: "The Yankees are baseball's only genuine global franchise — the $8.2B Forbes valuation (2024), first MLB team past $8B, reflects both brand scarcity and a YES Network equity stake that converts media rights into ownership upside unavailable to any other team. The no-naming-rights policy sacrifices ~$15-20M/yr but preserves the Yankee Stadium brand value; the tradeoff is rational at scale. Primary risk is a postseason drought now at 15 years (last World Series 2009) eroding the brand equity premium that sustains the valuation multiple relative to market-size peers."
  },

  "Boston Red Sox": {
    valuationHistory: [
      { year: 2019, value: 3.3,  source: "Forbes" },
      { year: 2020, value: 3.35, source: "Forbes" },
      { year: 2021, value: 3.7,  source: "Forbes" },
      { year: 2022, value: 4.1,  source: "Forbes" },
      { year: 2023, value: 4.35, source: "Forbes" },
      { year: 2024, value: 4.8,  source: "Forbes" },
    ],
    revenue: { estimate: 400, year: 2023, source: "Forbes", operatingIncome: 85 },
    transactions: [
      { year: 2002, price: 0.660, buyer: "John Henry / New England Sports Ventures (Tom Werner, Larry Lucchino group)", seller: "Yawkey Trust (Jean Yawkey estate)", notes: "Winning bid of $660M included team + Fenway Park + 50% of NESN; Forbes record MLB franchise sale at time; Henry sold Florida Marlins to fund bid; key early stakeholder was LeBron James advisor Leon Rose" },
      { year: 2022, price: null,  buyer: "Fenway Sports Group (ongoing)", seller: "N/A", notes: "FSG expanded with RFK Racing NASCAR stake and TGL golf league team; Liverpool FC remains core FSG asset alongside Red Sox; no team ownership change" }
    ],
    stadium: {
      name: "Fenway Park",
      yearBuilt: 1912,
      capacity: 37755,
      ownershipModel: "privately owned by Fenway Sports Group / Boston Red Sox; oldest active MLB ballpark — purchased with the team in 2002 acquisition",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 400,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal; Fenway Park brand is itself a major asset. Jersey patch sponsor is MassMutual. Stadium renovation investment of ~$400M since 2002 has been entirely privately funded by FSG." },
      nonGameRevenue: "Fenway Park hosts ~100 non-game events annually (concerts, soccer, hockey games); Green Monster seats and premium hospitality among highest per-cap revenue in MLB despite lowest capacity; 'Fenway of the Future' renovation plan expands surrounding real estate footprint",
      newStadiumPlans: "No replacement plans; FSG committed long-term to Fenway Park as a historic asset and 'home forever'; ongoing annual improvement capex of $30-50M"
    },
    media: {
      localTVDeal: "NESN (New England Sports Network) — FSG (Red Sox) owns 80%, Delaware North owns 20%; NESN is both the RSN carrier and a Red Sox-controlled revenue stream; reported ~$97M in TV revenue to team per 2022 data",
      streamingNotes: "NESN+ direct-to-consumer streaming launched 2022; Apple TV+ Friday games; nationally on ESPN/Fox",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "John W. Henry (principal owner)",
      ownerNetWorth: "~$5.7B (Forbes Oct 2024)",
      ownerBackground: "Commodity trader who made fortune at John W. Henry & Company algorithmic trading firm. Bought Marlins 1999, sold 2002 to lead Red Sox bid. Tom Werner (TV producer — Cosby Show, Roseanne) is chairman. FSG is a sports conglomerate: Red Sox, Liverpool FC, RFK Racing (NASCAR), TGL (golf).",
      acquisitionYear: 2002,
      acquisitionPrice: 0.660,
      currentValuation: 4.8,
      impliedReturn: "~7.3x in 22 years (~10% CAGR), plus NESN equity and Liverpool appreciation",
      ownershipGroup: [
        { name: "John W. Henry", role: "principal owner / CEO", pct: null },
        { name: "Tom Werner", role: "chairman", pct: null },
        { name: "Mike Gordon", role: "partner", pct: null },
        { name: "Fenway Sports Group", role: "holding entity (also owns Liverpool FC, RFK Racing)", pct: null }
      ],
      institutionalInvestors: "RedBird Capital Partners invested in FSG in 2021 at ~$8B FSG valuation; RedBird also co-invested in Liverpool stake; LeBron James / Maverick Carter hold a small equity stake in FSG",
      otherBusinessInterests: "Liverpool FC (Premier League), NESN (RSN ownership), Fenway Park real estate, RFK Racing (NASCAR), Fenway Sports Management (agency)"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~3M", facebook: "~8M" },
      merchandiseNotes: "Top-5 MLB merchandise franchise; Red Sox Nation fan base extends well beyond New England; Fenway Park and green monster iconography drive high-margin licensed goods",
      internationalFanbase: "Significant Japanese following (Daisuke Matsuzaka era; Masataka Yoshida currently); UK fanbase via Liverpool FSG cross-promotion; strong Red Sox diaspora in New England expat communities",
      notableSponsorships: ["MassMutual (jersey patch)", "Dunkin'", "Monster Energy", "Truly Hard Seltzer", "State Street Global Advisors"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Triston Casas — pre-arb; team in rebuilding mode following Devers trade (Jan 2025)",
      starContracts: [
        { player: "Rafael Devers", position: "3B", aav: 30.1, contractNote: "11yr/$331M extension (signed Jan 2023); traded to San Francisco Giants Jan 2025 — contract transferred in deal" },
        { player: "Masataka Yoshida", position: "DH/OF", aav: 21.0, contractNote: "5yr/$90M (Dec 2022); through 2027" }
      ]
    },
    analystNotes: "The Red Sox's NESN dual-ownership model — team owns 80% of the RSN — is the structurally superior media arrangement outside of YES Network; unlike teams exposed to Diamond Sports' RSN collapse, FSG captures both the rights fee and distribution economics. Fenway's historic scarcity (third-lowest MLB capacity at 37,755) drives per-game revenue consistently above league average and eliminates new-stadium public subsidy exposure. The Devers trade to SF (Jan 2025) signals a reset cycle; the primary near-term valuation risk is competitive decline compressing gate revenue, though the NESN and Fenway asset floor provides a durable downside case."
  },

  "Toronto Blue Jays": {
    valuationHistory: [
      { year: 2019, value: 1.35, source: "Forbes" },
      { year: 2020, value: 1.5,  source: "Forbes" },
      { year: 2021, value: 1.7,  source: "Forbes" },
      { year: 2022, value: 2.0,  source: "Forbes" },
      { year: 2023, value: 2.1,  source: "Forbes" },
      { year: 2024, value: 2.15, source: "Forbes" },
    ],
    revenue: { estimate: 290, year: 2023, source: "Forbes est.", operatingIncome: -60 },
    transactions: [
      { year: 1976, price: 0.0075, buyer: "Labatt Breweries / Imperial Trust / CIBC consortium", seller: "MLB expansion grant", notes: "Blue Jays entered MLB as an expansion franchise for $7M CAD entry fee" },
      { year: 2000, price: 0.137,  buyer: "Rogers Communications", seller: "Interbrew (successor to Labatt Breweries)", notes: "Rogers paid C$137M for the franchise; completed 100% stake acquisition by 2004; Rogers also acquired SkyDome (renamed Rogers Centre) in 2005 for C$25M — effectively paid less than replacement cost for the stadium" }
    ],
    stadium: {
      name: "Rogers Centre",
      yearBuilt: 1989,
      capacity: 49286,
      ownershipModel: "owned by Rogers Communications (Blue Jays parent); Rogers also owns the team — fully vertically integrated ownership of team + stadium + RSN (Sportsnet)",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 300,
      namingRightsDeal: { sponsor: "Rogers Communications (internal)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Rogers renamed SkyDome to Rogers Centre upon acquiring it in 2005 for C$25M; no external naming rights revenue — the naming serves Rogers' telecom brand. $300M+ multi-phase renovation (2022-2025) privately funded by Rogers transformed the dome into a more baseball-specific venue." },
      nonGameRevenue: "Rogers captures concert and event economics directly as stadium owner; Rogers Centre is one of Canada's largest indoor entertainment venues; concert economics are wholly consolidated within Rogers Communications",
      newStadiumPlans: "Ongoing renovation plan through 2025; Rogers Centre retractable roof and large footprint constrain sightlines; long-term new ballpark discussions have surfaced but no formal plans announced as of 2025"
    },
    media: {
      localTVDeal: "Sportsnet (Rogers Media subsidiary) — fully owned by parent Rogers Communications; no arm's-length media deal; team, stadium, and RSN are all Rogers properties, creating complex intracompany revenue recognition",
      streamingNotes: "Sportsnet+ direct streaming; Apple TV+ Friday games; Rogers ecosystem integration means Blue Jays content drives Sportsnet subscriptions and Rogers wireless bundling",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Rogers Communications (NYSE/TSX: RCI) — Mark Cohon as Blue Jays president",
      ownerNetWorth: "Rogers Communications market cap ~C$25-30B; Ted Rogers Jr. family trust (Rogers Control Trust) controls voting shares",
      ownerBackground: "Ted Rogers Sr. built Rogers Communications from a single radio station into Canada's largest telecom; purchased Blue Jays in 2000 to anchor a sports media content strategy. Ted Sr. died 2008; family trust continues to control voting shares. Rogers recently exploring MLSE merger that would combine Jays + Rogers Centre into a broader sports entity.",
      acquisitionYear: 2000,
      acquisitionPrice: 0.137,
      currentValuation: 2.15,
      impliedReturn: "~16x from C$137M to ~$2.15B USD; plus Rogers Centre acquired separately for C$25M in 2005",
      ownershipGroup: [
        { name: "Rogers Communications", role: "100% owner (publicly traded company)", pct: 100 }
      ],
      institutionalInvestors: "Rogers Communications is publicly traded; Rogers Control Trust (family) controls majority of voting shares. Sportico's 2026 reporting indicates Rogers exploring partial sale of sports assets at implied ~$18B total valuation for sports portfolio.",
      otherBusinessInterests: "Rogers Centre (stadium), Sportsnet (RSN), Rogers telecom/media empire (Canada's largest private-sector telecom), partial stake in MLSE (which owns Maple Leafs, Raptors, Toronto FC)"
    },
    brand: {
      socialMedia: { instagram: "~1.2M", twitter: "~1M", facebook: "~2.5M" },
      merchandiseNotes: "Canada's MLB franchise — national following across all 10 provinces; only MLB team outside USA creates unique international merchandise dynamics and Canadian pride angle",
      internationalFanbase: "Strong across Canada (only Canadian MLB franchise); Venezuelan fanbase growing through Vlad Guerrero Jr.; Dominican Republic fan engagement via roster demographics",
      notableSponsorships: ["Richardson International (jersey patch — Canadian canola/ag company)", "DraftKings Canada", "Scotiabank", "Canadian Tire", "Budweiser"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Vladimir Guerrero Jr. — 14yr/$500M extension signed 2025, $35.7M AAV, through 2038",
      starContracts: [
        { player: "Vladimir Guerrero Jr.", position: "1B", aav: 35.7, contractNote: "14yr/$500M extension (2025), through 2038; third-largest contract in MLB history; $325M signing bonus" },
        { player: "George Springer", position: "CF", aav: 25.0, contractNote: "6yr/$150M (Nov 2020), through 2026; postseason presence" }
      ]
    },
    analystNotes: "The Blue Jays' vertical integration — Rogers owns team, stadium, and Sportsnet — is structurally elegant but creates headline risk: Rogers' reported $60M operating loss (2024) on the franchise illustrates that intracompany pricing obscures true team economics. The Vladimir Guerrero Jr. 14-year/$500M extension secures the franchise cornerstone through 2038 and anchors the next competitive window. Long-term valuation ceiling is constrained by Canadian dollar exposure (some revenue in CAD while players are paid USD) and the MLB revenue-sharing pool treating the Blue Jays identically to US market clubs despite unique cross-border economics."
  },

  "Tampa Bay Rays": {
    valuationHistory: [
      { year: 2019, value: 0.9,  source: "Forbes" },
      { year: 2020, value: 0.95, source: "Forbes" },
      { year: 2021, value: 1.0,  source: "Forbes" },
      { year: 2022, value: 1.2,  source: "Forbes" },
      { year: 2023, value: 1.2,  source: "Forbes" },
      { year: 2024, value: 1.25, source: "Forbes" },
    ],
    revenue: { estimate: 190, year: 2023, source: "Forbes est.", operatingIncome: 15 },
    transactions: [
      { year: 1998, price: 0.130, buyer: "Vince Naimoli-led group", seller: "MLB expansion grant", notes: "Devil Rays entered MLB as expansion franchise for $130M; Tampa Bay's first MLB team" },
      { year: 2004, price: 0.200, buyer: "Stuart Sternberg / Matthew Silverman group (Goldman Sachs partners)", seller: "Naimoli group (controlling stake)", notes: "Sternberg acquired controlling stake for ~$200M; rebranded to Tampa Bay Rays in 2008 and transformed franchise into a model small-market organization" },
      { year: 2025, price: 1.700, buyer: "Patrick Zalupski-led group (Florida homebuilder)", seller: "Stuart Sternberg", notes: "Zalupski group reached agreement to purchase franchise at ~$1.7B; deal pending MLB approval as of early 2025; Hurricane Milton (Oct 2024) damaged Tropicana Field and complicated concurrent stadium negotiations" }
    ],
    stadium: {
      name: "Tropicana Field (damaged; team playing at Steinbrenner Field 2025)",
      yearBuilt: 1990,
      capacity: 25000,
      ownershipModel: "owned by St. Petersburg / city of Tampa Bay; Rays are tenants under long-term lease; Tropicana Field roof destroyed by Hurricane Milton Oct 2024 — team displaced to Steinbrenner Field (Yankees spring training facility) for 2025 season",
      teamOwnsLand: false,
      publicSubsidy: 138,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Tropicana (PepsiCo brand)", annualValue_M: 2.0, totalValue_M: null, expiryYear: null, notes: "Long-standing naming rights deal with Tropicana orange juice brand; deal terms undisclosed but estimated ~$2M/yr; one of the lower-value naming rights deals in MLB reflecting the stadium's dated profile" },
      nonGameRevenue: "Minimal — aging dome with limited premium amenity revenue; Rays historically one of MLB's lowest-revenue teams despite strong on-field performance",
      newStadiumPlans: "Pre-hurricane: Rays and St. Petersburg had agreed on $1.3B stadium development project adjacent to Tropicana Field site. Post-Hurricane Milton (Oct 2024): Sternberg withdrew from the agreement in early 2025; new ownership group (Zalupski) will need to negotiate fresh stadium solution. Future unclear as of mid-2025."
    },
    media: {
      localTVDeal: "Bally Sports Sun — carrier affected by Diamond Sports Group bankruptcy (2023); Rays negotiating post-Diamond local broadcast arrangement; among the MLB franchises most affected by RSN collapse due to small market and limited local alternatives",
      streamingNotes: "Apple TV+ Friday games; some Rays games moved to direct streaming during RSN transition; MLB.TV blackout restrictions complicate in-market access",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Patrick Zalupski (pending, ~2025); Stuart Sternberg (outgoing)",
      ownerNetWorth: "Sternberg: ~$1B (Goldman Sachs partner background); Zalupski: Florida homebuilder, net worth undisclosed",
      ownerBackground: "Sternberg, a Goldman Sachs partner, bought control in 2004 for $200M and transformed the Rays into a perennial playoff contender on the lowest payroll in MLB — the 'Rays Way' analytic model. Hurricane Milton forced stadium renegotiation, accelerating ownership transition. Zalupski group agreed at ~$1.7B.",
      acquisitionYear: 2025,
      acquisitionPrice: 1.7,
      currentValuation: 1.25,
      impliedReturn: "Sternberg: ~8.5x on $200M entry in ~21 years (~11% CAGR); Zalupski buying at $1.7B vs. Forbes $1.25B — paying 36% premium, betting on new stadium value creation",
      ownershipGroup: [
        { name: "Patrick Zalupski", role: "incoming majority owner / principal", pct: null },
        { name: "Stuart Sternberg", role: "outgoing majority / seller", pct: null },
        { name: "Matthew Silverman", role: "president (operational continuity)", pct: null }
      ],
      institutionalInvestors: "None disclosed for Zalupski group; acquisition structure pending MLB approval",
      otherBusinessInterests: "Zalupski: Dream Finders Homes (NYSE: DFH), Florida homebuilder; Sternberg: Goldman Sachs alumni network"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~500K", facebook: "~1.2M" },
      merchandiseNotes: "Small-market franchise with limited national merchandise profile; 'Rays Way' analytic brand resonates among baseball insiders; blue and gold rebrand (2019) improved aesthetic appeal",
      internationalFanbase: "Latin American pipeline particularly strong (Cuba, Dominican Republic); Randy Arozarena departure to Mariners reduced key international draw",
      notableSponsorships: ["DraftKings (jersey patch)", "Tropicana (stadium naming)", "Raymond James", "Regions Bank"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Wander Franco — suspended; team in transition under new ownership",
      starContracts: [
        { player: "Yandy Díaz", position: "1B", aav: 13.0, contractNote: "4yr/$52M extension (2023), through 2026" },
        { player: "Shane McClanahan", position: "SP", aav: 17.2, contractNote: "5yr/$86M extension (signed 2024), through 2028" }
      ]
    },
    analystNotes: "The Rays are MLB's deepest valuation paradox: a franchise that has won more games per dollar than any other organization over the past 15 years yet consistently ranks 28th-29th in Forbes franchise value due to stadium, market, and attendance constraints. The Hurricane Milton stadium crisis and pending $1.7B ownership transition to Zalupski represents either the catalyst that finally forces a new ballpark — unlocking premium revenue — or a further delay that perpetuates the structural value ceiling. At $1.7B acquisition price, Zalupski is explicitly buying a real estate/stadium optionality story more than a current cash flow story."
  },

  "Baltimore Orioles": {
    valuationHistory: [
      { year: 2019, value: 1.3,  source: "Forbes" },
      { year: 2020, value: 1.35, source: "Forbes" },
      { year: 2021, value: 1.45, source: "Forbes" },
      { year: 2022, value: 1.5,  source: "Forbes" },
      { year: 2023, value: 1.6,  source: "Forbes" },
      { year: 2024, value: 1.725, source: "Forbes / validated by 2024 Rubenstein acquisition" },
    ],
    revenue: { estimate: 230, year: 2023, source: "Forbes est.", operatingIncome: 28 },
    transactions: [
      { year: 1993, price: 0.173, buyer: "Peter Angelos (attorney)", seller: "Eli Jacobs", notes: "Angelos-led group purchased franchise at bankruptcy auction for $173M — record MLB sale at time. Peter Angelos practiced personal injury law; franchise was his primary sports investment." },
      { year: 2024, price: 1.725, buyer: "David Rubenstein-led group (38% initial stake, full acquisition pending)", seller: "Angelos family (Louis and John Angelos)", notes: "Peter Angelos died 2023; sons Louis and John sold to Rubenstein group at implied $1.725B valuation; MLB unanimously approved March 2024. Rubenstein's group includes Michael Arougheti (Ares Management), Michael Bloomberg, Grant Hill, and Cal Ripken Jr. Full acquisition of remaining ~30% family stake pending." }
    ],
    stadium: {
      name: "Oriole Park at Camden Yards",
      yearBuilt: 1992,
      capacity: 45971,
      ownershipModel: "owned by Maryland Stadium Authority; Orioles are tenants under long-term lease; 30-year lease signed Dec 2023 includes rights to develop surrounding 'Camden Yards Sports Complex' land — a significant value unlock for the new ownership group",
      teamOwnsLand: false,
      publicSubsidy: 235,
      privateFinancing: 75,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Camden Yards retains its original historic name — no naming rights deal sold. A deliberate choice preserving the landmark ballpark identity that influenced a generation of 'retro' stadium design. Jersey patch and scoreboard sponsorships generate incremental revenue." },
      nonGameRevenue: "Stadium Authority controls facility economics; Orioles retain game-day revenue per lease; surrounding Camden Yards development rights (included in 30-year lease signed 2023) offer significant mixed-use real estate upside for Rubenstein ownership group",
      newStadiumPlans: "No plans for new stadium; Rubenstein group committed to Camden Yards; development rights in the lease are the monetization vehicle rather than a new facility"
    },
    media: {
      localTVDeal: "MASN (Mid-Atlantic Sports Network) — Orioles own 67% of MASN, Nationals own 33%; long-running revenue dispute with Nationals over rights fees paid by MASN to both teams in arbitration since 2012; district court ruled in 2023 that Nationals owed ~$100M+ in underpaid fees from Orioles-advantaged MASN arrangement",
      streamingNotes: "MASN available on streaming platforms; Apple TV+ Friday games; legal uncertainty around MASN rights fee dispute creates ongoing revenue risk",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "David Rubenstein (Carlyle Group co-founder, majority purchaser)",
      ownerNetWorth: "Rubenstein: ~$4B (Forbes); Arougheti (Ares): ~$1B; Bloomberg: ~$108B",
      ownerBackground: "Rubenstein is co-founder of Carlyle Group, one of the world's largest private equity firms; Baltimore native — buying hometown team. Michael Arougheti co-founded Ares Management ($450B AUM). Michael Bloomberg is former NYC Mayor and Bloomberg LP founder. Cal Ripken Jr. adds local legend status. Initial 38% stake at $1.725B implied value; full acquisition of remaining Angelos family stake pending.",
      acquisitionYear: 2024,
      acquisitionPrice: 1.725,
      currentValuation: 1.725,
      impliedReturn: "Peter Angelos: ~10x on $173M over 31 years (~8% CAGR) — substantially below market; property underinvestment and family conflict constrained value creation during Angelos era",
      ownershipGroup: [
        { name: "David Rubenstein", role: "majority purchaser / new principal owner", pct: null },
        { name: "Michael Arougheti", role: "minority investor (Ares Management co-founder)", pct: null },
        { name: "Michael Bloomberg", role: "minority investor", pct: null },
        { name: "Grant Hill", role: "minority investor (NBA Hall of Famer)", pct: null },
        { name: "Cal Ripken Jr.", role: "minority investor / ambassador", pct: null }
      ],
      institutionalInvestors: "Rubenstein likely used personal capital and co-investors from his PE network; deal structure includes phased acquisition of full control as remaining Angelos family stake becomes available",
      otherBusinessInterests: "Rubenstein: Carlyle Group (co-founder), various PE holdings; Bloomberg: Bloomberg LP, Bloomberg Philanthropies"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~600K", facebook: "~1.5M" },
      merchandiseNotes: "Mid-market MLB brand; Camden Yards iconic status elevates brand above on-field results; orange-and-black color scheme and Bird logo with strong regional recognition in Baltimore-DC corridor",
      internationalFanbase: "Limited global profile; Gunnar Henderson and Adley Rutschman building domestic brand capital during competitive window",
      notableSponsorships: ["Betway (jersey patch — sports betting)", "Maryland Lottery", "BGE (utility sponsor)", "Under Armour (Baltimore-based apparel company — strong local alignment)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Gunnar Henderson — pre-extension superstar; likely franchise cornerstone for next decade",
      starContracts: [
        { player: "Adley Rutschman", position: "C", aav: 15.0, contractNote: "6yr/$90M extension (Mar 2023), through 2028; franchise catcher" },
        { player: "Gunnar Henderson", position: "SS", aav: null, contractNote: "Pre-arbitration through 2026; extension discussions expected; comps suggest $200M+ deal" }
      ]
    },
    analystNotes: "The Rubenstein acquisition represents a high-quality institutional buyer stepping into a chronically undermanaged franchise at an inflection point — Baltimore's farm system (several top-10 picks in succession) is one of MLB's deepest, Henderson/Rutschman is a generational dual-cornerstone, and Camden Yards real estate development rights under the new 30-year lease create a mixed-use value layer absent in the prior ownership era. The primary risk is the unresolved MASN rights-fee litigation, which could result in material cash outflows; the franchise sale price of $1.725B represents a relatively modest entry vs. comparable market peers, suggesting buyer awareness of the MASN liability."
  },

  // ─── AL CENTRAL ────────────────────────────────────────────────────

  "Chicago White Sox": {
    valuationHistory: [
      { year: 2019, value: 1.65, source: "Forbes" },
      { year: 2020, value: 1.7,  source: "Forbes" },
      { year: 2021, value: 1.9,  source: "Forbes" },
      { year: 2022, value: 2.1,  source: "Forbes" },
      { year: 2023, value: 2.1,  source: "Forbes" },
      { year: 2024, value: 2.05, source: "Forbes" },
    ],
    revenue: { estimate: 240, year: 2023, source: "Forbes est.", operatingIncome: 40 },
    transactions: [
      { year: 1981, price: 0.020, buyer: "Jerry Reinsdorf / Eddie Einhorn group", seller: "Bill Veeck", notes: "Reinsdorf-Einhorn group purchased for $20M; saved franchise from potential relocation; Reinsdorf is a real estate attorney turned sports owner who also separately acquired the Chicago Bulls in 1985" },
      { year: 2025, price: null,  buyer: "Justin Ishbia (capital infusion, future option)", seller: "N/A — no current transfer", notes: "Ishbia (United Wholesale Mortgage founder, Phoenix Suns NBA co-owner) agreed in June 2025 to make capital infusions as limited partner in 2025-26; Reinsdorf retains option to sell controlling interest to Ishbia 2029-2033; Ishbia gets purchase right after 2034. Expected eventual sale price ~$2B+" }
    ],
    stadium: {
      name: "Guaranteed Rate Field",
      yearBuilt: 1991,
      capacity: 40615,
      ownershipModel: "publicly owned by Illinois Sports Facilities Authority; White Sox hold long-term lease through 2029; team actively negotiating for new stadium (South Loop site preferred) requiring ~$1B+ public subsidy",
      teamOwnsLand: false,
      publicSubsidy: 167,
      privateFinancing: 137,
      namingRightsDeal: { sponsor: "Guaranteed Rate (mortgage company)", annualValue_M: 5.2, totalValue_M: null, expiryYear: 2026, notes: "Naming rights deal with Guaranteed Rate mortgage company; previously U.S. Cellular Field ('The Cell'); deal expiring around 2026 — renewal or replacement under negotiation as team addresses stadium future" },
      nonGameRevenue: "Illinois Sports Facilities Authority captures most event economics; White Sox have limited non-game revenue at current aging facility",
      newStadiumPlans: "White Sox seeking public support for new stadium in Chicago's South Loop/Near South Side; early proposals sought ~$1B+ in public financing; City Council debate ongoing as of 2025 with political complications given the 2024 historic 121-loss season diminishing leverage"
    },
    media: {
      localTVDeal: "Chicago Sports Network (CHSN) — new regional sports network launched 2024 with White Sox, Cubs, Blackhawks, and Bulls all as equity stakeholders; replaced Bally Sports Chicago which collapsed with Diamond Sports bankruptcy; CHSN is the preferred industry model for post-RSN team-controlled media",
      streamingNotes: "CHSN+ direct streaming component; Apple TV+ Friday games; White Sox equity stake in CHSN means team participates in network upside",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Jerry Reinsdorf (majority, since 1981)",
      ownerNetWorth: "~$2B (est.)",
      ownerBackground: "Reinsdorf made early fortune in real estate (Roberts Realty) before purchasing White Sox in 1981 for $20M. Also owns Chicago Bulls (purchased 1985 for $16M — now worth ~$4.7B). Well-known for frugal payroll philosophy and the 2024 team that lost 121 games (worst in AL history). Son Michael Reinsdorf also involved in Bulls management.",
      acquisitionYear: 1981,
      acquisitionPrice: 0.020,
      currentValuation: 2.05,
      impliedReturn: "~102x on $20M entry over 44 years (plus Chicago Bulls acquired separately at $16M in 1985, now ~$4.7B)",
      ownershipGroup: [
        { name: "Jerry Reinsdorf", role: "chairman / majority owner", pct: null },
        { name: "Justin Ishbia", role: "incoming limited partner (2025); option for control 2029-2034", pct: null }
      ],
      institutionalInvestors: "None currently; Ishbia deal provides path to institutional-quality ownership transition over 5-9 years",
      otherBusinessInterests: "Chicago Bulls (NBA) — also owned by Reinsdorf, now worth ~$4.7B; CHSN (equity stake)"
    },
    brand: {
      socialMedia: { instagram: "~900K", twitter: "~700K", facebook: "~2M" },
      merchandiseNotes: "Third-largest media market in the US but historically second team in Chicago to the Cubs; 2024's historically bad 121-loss season damaged brand equity; black-and-white throwback uniforms have cult appeal among baseball fashion community",
      internationalFanbase: "Limited global profile; significant Latino fan engagement in Chicago (Southside demographics); few current international star draws",
      notableSponsorships: ["Guaranteed Rate (stadium naming through ~2026)", "DraftKings", "Amazon Web Services", "Mastercard"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Andrew Vaughn / Colson Montgomery — rebuilding after historic 121-loss 2024 season",
      starContracts: [
        { player: "Eloy Jiménez", position: "LF/DH", aav: 14.0, contractNote: "6yr/$43M (2020 preagreed extension); injury-prone; through 2026" },
        { player: "Dylan Cease", position: "SP", aav: 19.0, contractNote: "traded to San Diego Padres Feb 2024 — no longer on roster" }
      ]
    },
    analystNotes: "The White Sox are a textbook turnaround setup: cheapest large-market franchise in the sport at $2.05B (1/4 the Cubs' valuation in the same city), in a planned ownership transition to a better-capitalized buyer (Ishbia), with a new RSN model (CHSN with equity participation) and a new stadium negotiation that could unlock a public subsidy-funded facility. The downside is real — 121 losses in 2024 have depleted goodwill with the fanbase and reduced stadium-replacement political leverage; Reinsdorf's track record as a cost-minimizer has structurally constrained revenue generation. The 2029-2034 Ishbia purchase window means current valuation is pricing in a control premium that doesn't transfer until the transaction closes."
  },

  "Cleveland Guardians": {
    valuationHistory: [
      { year: 2019, value: 1.05, source: "Forbes" },
      { year: 2020, value: 1.1,  source: "Forbes" },
      { year: 2021, value: 1.15, source: "Forbes" },
      { year: 2022, value: 1.3,  source: "Forbes" },
      { year: 2023, value: 1.35, source: "Forbes" },
      { year: 2024, value: 1.4,  source: "Forbes" },
    ],
    revenue: { estimate: 185, year: 2023, source: "Forbes est.", operatingIncome: 22 },
    transactions: [
      { year: 2000, price: 0.323, buyer: "Larry Dolan / Dolan family", seller: "Dick Jacobs", notes: "Dolan (media attorney, brother of Cablevision founder Charles Dolan) purchased franchise for $323M; previously the Cleveland Indians" },
      { year: 2022, price: null,  buyer: "David Blitzer (minority stake, ~25-30%)", seller: "Dolan family (partial)", notes: "Blitzer (co-owner of NBA 76ers, Devils, and multiple other sports franchises) acquired 25-30% minority stake at an implied valuation of ~$1.3-1.4B, with contractual right to purchase majority control in 2028. Larry Dolan died 2025; Paul Dolan (son) now leads franchise." }
    ],
    stadium: {
      name: "Progressive Field",
      yearBuilt: 1994,
      capacity: 34830,
      ownershipModel: "owned by Gateway Economic Development Corporation (public); Guardians hold long-term lease with major renovation commitment; $202M renovation completed 2015 (public-private partnership)",
      teamOwnsLand: false,
      publicSubsidy: 175,
      privateFinancing: 91,
      namingRightsDeal: { sponsor: "Progressive Insurance", annualValue_M: 3.6, totalValue_M: null, expiryYear: 2023, notes: "Progressive Insurance paid $3.6M/yr for naming rights; deal renegotiated/extended through approximately 2028; one of MLB's more competitively-priced naming rights deals given mid-market position but strong brand alignment with Cleveland-area corporate headquarters" },
      nonGameRevenue: "Limited; Gateway Corporation controls facility; team focused on premium seating monetization following 2015 renovation",
      newStadiumPlans: "No new stadium plans; 2015 renovation extended stadium life; Paul Dolan committed to Progressive Field location; long-term lease in place"
    },
    media: {
      localTVDeal: "Bally Sports Great Lakes (Diamond Sports Group) — affected by Diamond's 2023 bankruptcy; Guardians among MLB teams forced to negotiate post-RSN local TV transition; team exploring direct streaming deals and potential CHSN-style local network",
      streamingNotes: "Apple TV+ Friday games; MLB.TV; local streaming future uncertain post-Diamond bankruptcy; FanDuel Sports Network (formerly Bally Sports) in transition",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Paul Dolan (majority, following Larry Dolan's death in 2025)",
      ownerNetWorth: "Dolan family: ~$1.5B (est.); David Blitzer: ~$2B+ (Blackstone senior executive background)",
      ownerBackground: "Larry Dolan (media attorney, brother of Cablevision's Charles Dolan) bought franchise in 2000 for $323M. Larry died 2025; son Paul Dolan assumed principal role. David Blitzer, a Blackstone executive and multi-sport franchise investor, acquired 25-30% stake in 2022 with a 2028 option for majority — the likely future ownership transition point.",
      acquisitionYear: 2000,
      acquisitionPrice: 0.323,
      currentValuation: 1.4,
      impliedReturn: "~4.3x on $323M over 25 years (~6% CAGR) — below-average sports franchise appreciation, reflecting small market constraints",
      ownershipGroup: [
        { name: "Paul Dolan", role: "majority owner / chairman / CEO", pct: null },
        { name: "David Blitzer", role: "minority investor (~25-30%); option for majority in 2028", pct: 27 }
      ],
      institutionalInvestors: "Blitzer's investment group may include Blackstone-network co-investors; structure undisclosed",
      otherBusinessInterests: "Blitzer: Philadelphia 76ers (co-owner with Josh Harris), New Jersey Devils, Crystal Palace FC, Toulouse FC, Real Salt Lake; Dolan: media/legal background"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~500K", facebook: "~1.5M" },
      merchandiseNotes: "Guardians rebrand (2022 from Cleveland Indians) required full merchandise reset; new identity has grown but fan resistance from some traditionalists; mid-market sales profile",
      internationalFanbase: "Limited global profile; José Ramírez (Venezuelan) is team's biggest international draw",
      notableSponsorships: ["Progressive Insurance (stadium naming)", "Hyland (jersey patch — cloud software company)", "KeyBank", "Goodyear"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "José Ramírez — 7yr/$124M extension (signed Oct 2022), ~$17.7M AAV, through 2028",
      starContracts: [
        { player: "José Ramírez", position: "3B", aav: 17.7, contractNote: "7yr/$124M extension (Oct 2022), through 2028; perennial MVP candidate, 4-time All-Star" },
        { player: "Shane Bieber", position: "SP", aav: 7.0, contractNote: "long-term deal; multiple injuries 2023-24 limiting effectiveness" }
      ]
    },
    analystNotes: "The Guardians represent the model small-market franchise: sustained on-field excellence (multiple playoff appearances, pennant race perennials) on a payroll 60-70% below market, driven by elite player development. The Blitzer minority stake (2022) with a 2028 majority-purchase option is the key valuation catalyst — Blitzer's multi-sport portfolio (76ers, Devils, Crystal Palace) creates strategic value beyond the Cleveland market, and his 2028 majority control window effectively prices in a private equity-style re-rating. Primary risk: the RSN collapse (Diamond Sports) disrupts local media revenue at the exact time national revenue sharing is the primary subsidy keeping small-market economics viable."
  },

  "Detroit Tigers": {
    valuationHistory: [
      { year: 2019, value: 1.2,  source: "Forbes" },
      { year: 2020, value: 1.225, source: "Forbes" },
      { year: 2021, value: 1.275, source: "Forbes" },
      { year: 2022, value: 1.37, source: "Forbes" },
      { year: 2023, value: 1.45, source: "Forbes" },
      { year: 2024, value: 1.55, source: "Forbes" },
    ],
    revenue: { estimate: 270, year: 2023, source: "Forbes", operatingIncome: 30 },
    transactions: [
      { year: 1992, price: 0.085, buyer: "Mike Ilitch (Little Caesars Pizza founder)", seller: "Tom Monaghan (Domino's Pizza founder)", notes: "Ilitch purchased for $85M; one of two major Detroit sports franchise acquisitions (also bought Red Wings 1982); Little Caesars empire funded both sports investments" },
      { year: 2017, price: null,  buyer: "Christopher Ilitch (son / Ilitch Holdings CEO)", seller: "Estate of Mike Ilitch (died Feb 2017)", notes: "Mike Ilitch died February 2017; Chris Ilitch assumed chairman/CEO role at Ilitch Holdings and principal owner of both Tigers and Red Wings; no external transaction" }
    ],
    stadium: {
      name: "Comerica Park",
      yearBuilt: 2000,
      capacity: 41083,
      ownershipModel: "Detroit-Wayne County Stadium Authority owns facility; Tigers operate under long-term lease; Ilitch Holdings contributed ~$140M of the $326M total construction cost",
      teamOwnsLand: false,
      publicSubsidy: 145,
      privateFinancing: 140,
      namingRightsDeal: { sponsor: "Comerica Bank (will become Fifth Third after 2026)", annualValue_M: 2.2, totalValue_M: 66.0, expiryYear: 2034, notes: "Comerica Bank paid $66M over 30 years ($2.2M/yr) when agreed in 1998; extended through 2034 in 2018. Fifth Third Bancorp acquired Comerica in 2025 deal — stadium will be renamed after 2026 season pending Fifth Third's rebranding decisions. New naming rights deal likely ~$8-10M/yr given current market rates." },
      nonGameRevenue: "Stadium Authority controls facility; Tigers retain game-day revenue per lease; surrounding Ilitch Holdings real estate ('District Detroit' development) creates adjacent value independent of ballpark",
      newStadiumPlans: "No immediate plans; Comerica Park is 25 years old but well-maintained; District Detroit mixed-use development by Ilitch Holdings around Little Caesars Arena (Red Wings/Pistons) creates synergies but does not include Tigers stadium redevelopment"
    },
    media: {
      localTVDeal: "Bally Sports Detroit (Diamond Sports Group) — affected by Diamond bankruptcy; Tigers negotiating post-RSN local broadcast solution; Detroit market has fewer cord-cutting alternatives than larger markets, creating transition complexity",
      streamingNotes: "Apple TV+ Friday games; MLB.TV; local media future contingent on post-Diamond RSN resolution",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Christopher Ilitch (chairman/CEO, Ilitch Holdings)",
      ownerNetWorth: "Ilitch family: ~$8B (Forbes est.) via Ilitch Holdings (Little Caesars, Tiger, Red Wings, and real estate empire)",
      ownerBackground: "Mike Ilitch founded Little Caesars Pizza in 1959 and built Ilitch Holdings into a Michigan-based empire spanning pizza, sports, and real estate. Purchased Tigers in 1992 and Red Wings in 1982. Son Chris Ilitch took over as CEO of Ilitch Holdings upon Mike's death in Feb 2017; oversees both Tigers and Red Wings alongside Little Caesars corporate operations.",
      acquisitionYear: 1992,
      acquisitionPrice: 0.085,
      currentValuation: 1.55,
      impliedReturn: "~18x on $85M over 33 years (~9% CAGR)",
      ownershipGroup: [
        { name: "Christopher Ilitch", role: "chairman / CEO, Ilitch Holdings", pct: null },
        { name: "Ilitch Holdings, Inc.", role: "corporate holding entity (private)", pct: 100 }
      ],
      institutionalInvestors: "None; Ilitch Holdings is entirely private family-controlled",
      otherBusinessInterests: "Little Caesars Pizza (global franchise, 5,600+ locations), Detroit Red Wings (NHL), Ilitch real estate (District Detroit), Blue Line Foodservice Distribution"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~600K", facebook: "~2M" },
      merchandiseNotes: "English 'D' logo one of most recognized in baseball; Old English font has strong nostalgia and cultural cache; national merchandise profile improving with Tarik Skubal Cy Young 2024 attention",
      internationalFanbase: "Limited global footprint; growing Venezuelan fan connection (Eduardo Rodriguez, Miguel Cabrera legacy); Miguel Cabrera era built Latin American fanbase",
      notableSponsorships: ["Rocket Mortgage (jersey patch — Quicken Loans / Detroit-headquartered company)", "Comerica Bank (stadium naming — transitioning to Fifth Third)", "Meijer", "Chevrolet (Detroit auto industry alignment)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Tarik Skubal — 2024 AL Cy Young winner; extension expected as franchise cornerstone",
      starContracts: [
        { player: "Tarik Skubal", position: "SP", aav: null, contractNote: "Pre-extension as of 2025; 2024 AL Cy Young; control through arbitration, extension discussions likely to yield $150M+ deal" },
        { player: "Spencer Torkelson", position: "1B", aav: null, contractNote: "Pre-arb franchise corner; 2021 #1 overall pick in development" },
        { player: "Riley Greene", position: "CF", aav: null, contractNote: "Pre-arb; emerging offensive talent" }
      ]
    },
    analystNotes: "The Tigers' rebuild has yielded the game's premier pitching prospect (Tarik Skubal, 2024 Cy Young) and a promising core (Torkelson, Greene, Jace Jung), positioning the franchise for a competitive window that would meaningfully move the revenue needle from its current $270M base. At $1.55B, the Tigers are arguably the cheapest franchise in a major US market given Detroit's population and Ilitch Holdings' financial resources. The Comerica naming-rights transition (Fifth Third acquiring Comerica) will reset rights fee economics to current market (~$8-10M/yr vs. the current ~$2.2M/yr) — a near-term revenue upgrade embedded in existing contractual terms."
  },

"Kansas City Royals": {
    valuationHistory: [
      { year: 2019, value: 1.0,  source: "Forbes" },
      { year: 2020, value: 1.02, source: "Forbes" },
      { year: 2021, value: 1.1,  source: "Forbes" },
      { year: 2022, value: 1.25, source: "Forbes" },
      { year: 2023, value: 1.35, source: "Forbes" },
      { year: 2024, value: 1.3,  source: "Forbes" },
    ],
    revenue: { estimate: 240, year: 2023, source: "Forbes", operatingIncome: 28 },
    transactions: [
      { year: 2019, price: 1.0, buyer: "John Sherman-led ownership group", seller: "David Glass family", notes: "Sherman, a Wichita energy entrepreneur, led a multi-investor group to buy from the Glass family; MLB approved Nov 2019; ~$1B purchase; Glass had bought the franchise out of bankruptcy in 2000 for $96M" },
    ],
    stadium: {
      name: "Kauffman Stadium",
      yearBuilt: 1973,
      capacity: 37903,
      ownershipModel: "publicly owned by Jackson County, Missouri; team leases; renovation in 2009 cost ~$250M with public/private split",
      teamOwnsLand: false,
      publicSubsidy: 250,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Stadium named for founder Ewing Kauffman; no external naming rights deal; new stadium planned under Crown Center project" },
      nonGameRevenue: "Limited — aging stadium with minimal non-baseball events; primary revenue is game-day and premium seating",
      newStadiumPlans: "New $1.9B ballpark at Crown Center (85-acre mixed-use development totaling $3B) announced 2026; ~2/3 private / ~1/3 public funding; state + city earmarks; groundbreaking targeted for 2027; targeted opening ~2030"
    },
    media: {
      localTVDeal: "Bally Sports Kansas City (Diamond Sports Group); Diamond filed Chapter 11 bankruptcy 2023; Royals and other Bally teams face uncertain local media future as Diamond restructures",
      streamingNotes: "MLB.TV nationally; Royals exploring direct-to-consumer streaming options as RSN landscape collapses",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "John Sherman (managing partner/chairman)",
      ownerNetWorth: "~$2B est. (energy sector, Occidental Petroleum background)",
      ownerBackground: "Sherman made his fortune in the oil and gas industry via SemGroup and other ventures; built Kansas City ties through Wichita business network; led investor group that included dozens of local/regional investors; first-time sports owner",
      acquisitionYear: 2019,
      acquisitionPrice: 1.0,
      currentValuation: 1.3,
      impliedReturn: "~1.3x in 5 years (~5% CAGR); below-market appreciation reflecting small-market economics and no new stadium catalyst yet",
      ownershipGroup: [
        { name: "John Sherman", role: "managing partner / chairman", pct: null },
        { name: "David Glass family", role: "retained minority stake", pct: null },
      ],
      institutionalInvestors: "Syndicate of ~25+ local Kansas City investors; no disclosed institutional PE",
      otherBusinessInterests: "Sherman: energy sector (SemGroup, Occidental Petroleum ventures)"
    },
    brand: {
      socialMedia: { instagram: "~500K", twitter: "~700K", facebook: "~1.3M" },
      merchandiseNotes: "Small-market; merchandise driven by playoff runs; 2014-15 back-to-back World Series appearances built lasting fan equity; Bobby Witt Jr. era driving youth engagement",
      internationalFanbase: "Minimal; primarily domestic fanbase concentrated in KC metro and Kansas/Missouri region",
      notableSponsorships: ["Bally Sports (local TV)", "Cerner (IT; prior jersey patch)", "Sporting KC (cross-promotional KC sports tie-ins)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Bobby Witt Jr. — 11yr/$288.8M extension signed Feb 2024, $26.3M AAV, through 2034 with opt-outs after 2030",
      starContracts: [
        { player: "Bobby Witt Jr.", position: "SS", aav: 26.3, contractNote: "11yr/$288.8M (Feb 2024), through 2034; four player opt-outs starting 2030; franchise-record deal" },
        { player: "Salvador Perez", position: "C", aav: 14.0, contractNote: "Multi-year deal; franchise cornerstone through mid-2020s" },
      ]
    },
    analystNotes: "The Royals are a textbook small-market franchise caught between two major stadium catalysts: the end of Kauffman Stadium's useful life and the $1.9B Crown Center project that could transform the KC sports market. Sherman's 2019 entry at ~$1B has underperformed the broader MLB appreciation curve, but the new stadium — if public funding is secured — represents the single largest potential value unlock in franchise history. Bobby Witt Jr.'s 11yr/$288.8M extension at a sub-market $26.3M AAV keeps the franchise cornerstone locked through his prime, a structural advantage most small-market teams cannot replicate. Key risk: the new stadium financing remains contested, and Royals revenue at ~$240M sits near the bottom quartile of MLB."
  },

  "Minnesota Twins": {
    valuationHistory: [
      { year: 2019, value: 1.15, source: "Forbes" },
      { year: 2020, value: 1.2,  source: "Forbes" },
      { year: 2021, value: 1.25, source: "Forbes" },
      { year: 2022, value: 1.35, source: "Forbes" },
      { year: 2023, value: 1.45, source: "Forbes" },
      { year: 2024, value: 1.5,  source: "Forbes" },
    ],
    revenue: { estimate: 280, year: 2023, source: "Forbes", operatingIncome: 30 },
    transactions: [
      { year: 1984, price: 0.036, buyer: "Carl Pohlad", seller: "Calvin Griffith", notes: "Pohlad purchased franchise for ~$36-44M; Griffith family had owned since 1955 (Washington Senators era); Pohlad was a Minneapolis banking magnate (Marquette Bank)" },
      { year: 2024, price: null, buyer: "Tom Pohlad (new controlling owner) + new minority investors", seller: "Pohlad family internal restructuring", notes: "Family explored full sale 2024 (initial ask ~$1.7B, reduced to ~$1.5B) then reversed; Tom Pohlad installed as new controlling owner in place of brother Joe Pohlad; three new minority investors added to improve competitive investment capacity" },
    ],
    stadium: {
      name: "Target Field",
      yearBuilt: 2010,
      capacity: 38544,
      ownershipModel: "owned by Metropolitan Sports Facilities Authority (MSFA, a public body); Twins are primary tenant; 30-year lease through 2040",
      teamOwnsLand: false,
      publicSubsidy: 350,
      privateFinancing: 185,
      namingRightsDeal: { sponsor: "Target Corporation", annualValue_M: 15, totalValue_M: 175, expiryYear: 2035, notes: "25-year deal signed ~2010 at estimated $15M/yr; Target is a Minneapolis-based retailer making this a strong local fit; ~$175M total" },
      nonGameRevenue: "Target Field hosts concerts, events; Twins do not own the building but capture event revenue under operating agreement; skyline location in downtown Minneapolis enables premium non-baseball programming",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Bally Sports North (Diamond Sports Group); Diamond filed Chapter 11 bankruptcy 2023; Twins among teams exploring streaming alternatives as RSN revenues uncertain; Twins TV situation among the most uncertain in AL Central",
      streamingNotes: "MLB.TV nationally; Twins pursuing direct streaming partnerships to replace/supplement RSN",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Tom Pohlad (controlling owner / chairman)",
      ownerNetWorth: "Pohlad family: ~$3.5B est. (Marquette Financial / banking, real estate)",
      ownerBackground: "Carl Pohlad, Minneapolis banking patriarch (Marquette Banks), bought the Twins in 1984 for ~$36M; died 2009; Jim Pohlad became chairman and ran franchise for 15+ years; 2024 restructuring installed Tom Pohlad as controlling owner with new minority investors joining; family reversed planned sale, citing desire to win and franchise commitment to Twin Cities",
      acquisitionYear: 1984,
      acquisitionPrice: 0.036,
      currentValuation: 1.5,
      impliedReturn: "~42x on $36M entry over 40 years (~9.5% CAGR)",
      ownershipGroup: [
        { name: "Tom Pohlad", role: "controlling owner / chairman", pct: null },
        { name: "Jim Pohlad", role: "minority / former chairman", pct: null },
        { name: "New minority investors (3)", role: "minority passive (2024 addition)", pct: null },
      ],
      institutionalInvestors: "Three new minority investors added in 2024; names undisclosed",
      otherBusinessInterests: "Pohlad family: Marquette Financial Companies (banking/financial services), real estate holdings across Twin Cities"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~800K", facebook: "~1.5M" },
      merchandiseNotes: "Consistent mid-tier performer; Kirby Puckett legacy sustains multigenerational fans; Carlos Correa trade dampened recent momentum; Byron Buxton star power if healthy",
      internationalFanbase: "Modest; some Dominican Republic connection via prospects; primarily domestic/regional fanbase",
      notableSponsorships: ["Target (stadium naming)", "Bally Sports North (local TV)", "Delta Air Lines", "Old Dutch Foods"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Byron Buxton — multi-year deal with full no-trade clause; Buxton has stated he will be 'a Twin for life'",
      starContracts: [
        { player: "Byron Buxton", position: "CF", aav: 10.0, contractNote: "7yr/$100M deal (2022), through 2028; full no-trade clause; injury history limits effectiveness" },
        { player: "Pablo López", position: "SP", aav: 16.5, contractNote: "Multi-year extension; $21.5M/yr from 2025-27; acquired from Marlins in 2022 Correa-to-Mets-to-KC ripple trade" },
      ]
    },
    analystNotes: "The Pohlad family's 2024 reversal on a sale — walking away from an asking price of ~$1.5B after attracting no offers at $1.7B — is itself a valuation signal: the Twins' $425M in team debt was a structural overhang that scared acquirers even with Target Field as a crown jewel. The franchise is caught in the RSN collapse (Bally Sports North), which could cost $30-50M/year in local media revenue and severely compress EBITDA. Byron Buxton's injury-prone prime and a tepid free-agent market in small-market Minneapolis compound the on-field risk. The most plausible re-rating catalyst is a streaming-native local media deal that stabilizes the revenue base — until then, the Twins trade at a discount to market comps."
  },

  "Houston Astros": {
    valuationHistory: [
      { year: 2019, value: 1.6,  source: "Forbes" },
      { year: 2020, value: 1.65, source: "Forbes" },
      { year: 2021, value: 1.8,  source: "Forbes" },
      { year: 2022, value: 2.1,  source: "Forbes" },
      { year: 2023, value: 2.2,  source: "Forbes" },
      { year: 2024, value: 2.8,  source: "Forbes" },
    ],
    revenue: { estimate: 445, year: 2023, source: "Forbes", operatingIncome: 54 },
    transactions: [
      { year: 2011, price: 0.615, buyer: "Jim Crane", seller: "Drayton McLane Jr.", notes: "Crane paid $680M originally, but MLB refunded $35M and McLane refunded $35M as part of NL→AL league-change stipulation; effective price ~$615M; approved by MLB Nov 2011" },
    ],
    stadium: {
      name: "Daikin Park",
      yearBuilt: 2000,
      capacity: 41168,
      ownershipModel: "owned by Harris County-Houston Sports Authority; Astros are primary tenant; team has long-term operating lease",
      teamOwnsLand: false,
      publicSubsidy: 250,
      privateFinancing: 68,
      namingRightsDeal: { sponsor: "Daikin Comfort Technologies North America (Daikin)", annualValue_M: null, totalValue_M: null, expiryYear: 2039, notes: "15-year deal announced Nov 2024, effective Jan 1 2025, through 2039 season; stadium previously named Minute Maid Park (2002-2024) under Coca-Cola/Minute Maid deal estimated ~$6-7M/yr; Daikin deal financials undisclosed but industry estimates suggest $10-15M/yr for the Houston market" },
      nonGameRevenue: "Stadium hosts concerts, boxing, other events; Astros and Harris County share event revenues under lease agreement; downtown Houston location enables strong non-baseball calendar",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Space City Home Network (SCHN) — Astros (with Houston Rockets) launched own RSN in October 2023 after AT&T SportsNet Southwest ceased operations; Astros/Rockets each hold equity stake; SCHN is carried by major Houston-area cable and satellite providers; transition from AT&T SportsNet cost estimated ~$23M in lost revenue in transition year",
      streamingNotes: "SCHN has direct streaming option; MLB.TV nationally; Apple TV+ Friday games; Astros among most nationally televised teams given championship success",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Jim Crane (chairman and CEO)",
      ownerNetWorth: "~$5B est. (Crane Worldwide Logistics)",
      ownerBackground: "Crane built his fortune in third-party logistics (Crane Worldwide Logistics, formerly EGL Inc.); purchased Astros in 2011 for $615M despite controversy over his background check; moved team from NL to AL West as part of league-balance restructuring; presided over 2017 World Series win (subsequently tainted by sign-stealing scandal) and 2022 World Series championship; regarded as aggressive operator who competes for titles",
      acquisitionYear: 2011,
      acquisitionPrice: 0.615,
      currentValuation: 2.8,
      impliedReturn: "~4.6x in 13 years (~12% CAGR)",
      ownershipGroup: [
        { name: "Jim Crane", role: "chairman / CEO / majority owner", pct: null },
      ],
      institutionalInvestors: "No disclosed institutional PE; tight family/operator ownership structure",
      otherBusinessInterests: "Crane Worldwide Logistics (global freight and logistics); real estate; golf (Floridian National Golf Club, others)"
    },
    brand: {
      socialMedia: { instagram: "~1.3M", twitter: "~1.5M", facebook: "~2.8M" },
      merchandiseNotes: "Top-15 MLB franchise for merchandise; Astros brand benefited enormously from 2017/2022 World Series runs; sign-stealing controversy (2020) put a lasting asterisk on 2017 but did not materially impair merch sales",
      internationalFanbase: "Strong Venezuelan/Latin American connection (Altuve, Correa, Gurriel era); growing fanbase in Dominican Republic and Panama via prospects",
      notableSponsorships: ["Daikin (stadium naming)", "Space City Home Network (co-owned RSN)", "Mattress Firm", "Whataburger"]
    },
    onField: {
      championshipsLast10Years: 2,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Jose Altuve — 5yr/$125M extension signed 2019, through 2024; re-signed on new deal; franchise cornerstone SS/2B since 2011",
      starContracts: [
        { player: "Jose Altuve", position: "2B", aav: 29.0, contractNote: "Multi-year extension; franchise icon; 3x All-Star, 2017 WS MVP, 7x AL batting title contender" },
        { player: "Framber Valdez", position: "SP", aav: 16.0, contractNote: "Extension keeping ace starter through mid-2020s; elite sinker/curveball arsenal" },
      ]
    },
    analystNotes: "The Astros' $2.8B Forbes valuation reflects a franchise that has compounded at ~12% CAGR since Crane's $615M 2011 entry, driven by two World Series wins, sustained contention (8 straight AL West titles through 2023), and the launch of Space City Home Network as an owned media asset. SCHN is the critical variable: owning equity in the local RSN rather than being a rights-fee payer to Diamond Sports transforms the media calculus and positions the Astros ahead of the RSN collapse. The $23M revenue headwind from the AT&T SportsNet transition is transient; the long-term SCHN equity value — shared with the Rockets — is the franchise's most underappreciated financial asset. Talent risk is real: the core of Altuve, Valdez, and Tucker ages into the late 2020s without an obvious star-power successor."
  },

  "Los Angeles Angels": {
    valuationHistory: [
      { year: 2019, value: 1.9,  source: "Forbes" },
      { year: 2020, value: 1.9,  source: "Forbes" },
      { year: 2021, value: 2.0,  source: "Forbes" },
      { year: 2022, value: 2.2,  source: "Forbes" },
      { year: 2023, value: 2.5,  source: "Forbes" },
      { year: 2024, value: 2.75, source: "Forbes" },
    ],
    revenue: { estimate: 355, year: 2023, source: "Forbes", operatingIncome: 35 },
    transactions: [
      { year: 2003, price: 0.180, buyer: "Arte Moreno", seller: "The Walt Disney Company", notes: "Moreno paid $180M for the Angels — then the Los Angeles Angels of Anaheim — becoming the first Mexican-American and first Latino to own a major North American professional sports franchise; Disney had owned since 1996" },
    ],
    stadium: {
      name: "Angel Stadium of Anaheim",
      yearBuilt: 1966,
      capacity: 45517,
      ownershipModel: "owned by the City of Anaheim; Angels lease under a long-term agreement; proposed $320M purchase of stadium and surrounding land by Moreno's SRB Management (2020-2022) fell through after Anaheim corruption scandal; team continues as tenant",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "City of Anaheim retains naming rights per lease terms; stadium called 'Angel Stadium of Anaheim' without a commercial naming rights partner; Angels had agreed to purchase the stadium for $320M in 2020 but deal collapsed amid City of Anaheim corruption investigation (2022)" },
      nonGameRevenue: "City of Anaheim retains non-game venue economics; Angels limited to baseball revenue; stadium land redevelopment potential is significant (250+ acres surrounding the ballpark)",
      newStadiumPlans: "Future uncertain: Angels lease runs through 2029 with club option extensions; relocation to Irvine or new Anaheim stadium remains in discussion"
    },
    media: {
      localTVDeal: "Bally Sports West (Diamond Sports Group); Diamond filed Chapter 11 bankruptcy 2023; Angels among the most exposed teams to RSN collapse given the large LA market — Bally West covered both Angels and Kings (NHL); loss of RSN revenues is the key financial risk",
      streamingNotes: "MLB.TV nationally; Angels exploring streaming deals as Diamond restructures; LA market cable penetration declining; Peacock/Apple TV+ national games provide exposure",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Arte Moreno (majority owner / chairman)",
      ownerNetWorth: "~$4.5B est. (Moreno billboard/outdoor advertising empire via Clear Channel predecessor)",
      ownerBackground: "Arte Moreno built his fortune in outdoor advertising, selling his company to Clear Channel Communications for ~$3B in 1999; bought the Angels from Disney in 2003 for $180M, becoming the first Latino MLB owner; spent aggressively on players in early years (Vlad Guerrero, Torii Hunter, Josh Hamilton era); presided over Shohei Ohtani's 2018-2023 tenure and his departure to Dodgers for $700M deal; explored franchise sale Aug 2022-early 2023 then reversed course citing 'unfinished business'",
      acquisitionYear: 2003,
      acquisitionPrice: 0.180,
      currentValuation: 2.75,
      impliedReturn: "~15x in 21 years (~14% CAGR)",
      ownershipGroup: [
        { name: "Arte Moreno", role: "majority owner / chairman", pct: null },
        { name: "Carole Moreno", role: "co-owner", pct: null },
      ],
      institutionalInvestors: "No disclosed institutional PE; tight family ownership",
      otherBusinessInterests: "Outdoor advertising holdings; real estate"
    },
    brand: {
      socialMedia: { instagram: "~1.2M", twitter: "~1.4M", facebook: "~2.5M" },
      merchandiseNotes: "LA market franchise with historically strong merchandise base; Shohei Ohtani's 2018-2023 tenure drove significant international merchandise (especially Japan); post-Ohtani era presents major brand risk; Mike Trout long-term injury profile further dampens appeal",
      internationalFanbase: "Strong Japanese fanbase from Ohtani era (now shifted to Dodgers); significant Latino fanbase in Southern California",
      notableSponsorships: ["Bally Sports West (local TV)", "United Airlines (jersey patch)", "Honda", "Bank of America"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Mike Trout — 12yr/$426.5M extension signed 2019, $35.5M AAV, through 2030; persistent injuries (knee, back) have limited to part-time play since 2021",
      starContracts: [
        { player: "Mike Trout", position: "CF", aav: 35.5, contractNote: "12yr/$426.5M (2019), through 2030; injuries have severely limited availability; Trout played in 29/82/119 games 2021-2023" },
        { player: "Anthony Rendon", position: "3B", aav: 38.6, contractNote: "7yr/$245M (2019), through 2026; persistent injuries; played in 58 games total 2022-2023; widely viewed as worst contract in Angels history" },
      ]
    },
    analystNotes: "The Angels' $2.75B valuation is arguably the most contested comp in MLB — the franchise combines a large-market location (Orange County/LA) with structural liabilities that would disqualify most buyers: two of the worst injury-plagued mega-contracts in baseball (Trout $35.5M/yr + Rendon $38.6M/yr through 2026), no RSN certainty post-Diamond bankruptcy, a stadium lease that expires in 2029 with no replacement plan, and the post-Ohtani brand void. Moreno's refusal to sell in 2023 after exploring the market for 6+ months signaled that bids came in below expectations — suggesting the buy-side sees the same structural risks. The only re-rating catalyst is a stadium resolution (new venue with team owning surrounding land) that would unlock venue economics comparable to the Braves' Battery Atlanta model."
  },

  "Oakland Athletics": {
    valuationHistory: [
      { year: 2019, value: 1.0,  source: "Forbes" },
      { year: 2020, value: 1.0,  source: "Forbes" },
      { year: 2021, value: 1.05, source: "Forbes" },
      { year: 2022, value: 1.08, source: "Forbes" },
      { year: 2023, value: 1.2,  source: "Forbes" },
      { year: 2024, value: 1.8,  source: "Forbes / relocation premium; +50% YoY" },
    ],
    revenue: { estimate: 195, year: 2023, source: "Forbes", operatingIncome: 8 },
    transactions: [
      { year: 2005, price: 0.180, buyer: "John Fisher / Lewis Wolff", seller: "Hofmann family / prior ownership", notes: "Fisher and Wolff jointly acquired the A's for $180M; Fisher is the son of Gap founders Donald and Doris Fisher; Wolff was a hotel developer with Stanford ties to Bud Selig" },
      { year: 2016, price: null, buyer: "John Fisher (100%)", seller: "Lewis Wolff (10% stake)", notes: "Wolff sold his 10% stake to Fisher, giving Fisher full majority control; sale price undisclosed; Wolff had been the public face of the ownership through the Oakland stadium fight" },
    ],
    stadium: {
      name: "Sutter Health Park (temporary — Sacramento)",
      yearBuilt: 1999,
      capacity: 14014,
      ownershipModel: "minor-league ballpark in Sacramento; A's using as temporary home for 2025-2027 seasons while Las Vegas stadium is constructed; Sacramento city-owned facility",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Sutter Health", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Pre-existing naming rights on Sacramento's minor-league park; A's using ballpark under temporary arrangement; former home Oakland Coliseum (1968-2024) was team-leased publicly-owned facility" },
      nonGameRevenue: "Minimal at Sutter Health Park given minor-league facility size; A's revenue severely compressed by relocation and small temporary venue",
      newStadiumPlans: "New Las Vegas ballpark on the Tropicana Las Vegas site (strip-adjacent); ~$1.75-2B total cost; Fisher committed $1B private investment; Goldman Sachs $300M construction loan; Aramark $175M equity/concessions stake; Nevada Tourism Infrastructure Tax provides ~$380M public contribution; 33,000 capacity; targeted opening 2028"
    },
    media: {
      localTVDeal: "NBC Sports California (AT&T SportsNet) went dark in 2023; A's playing games without a local cable TV deal in transition years; exploring direct streaming and OTA broadcast options in both Sacramento and Las Vegas markets",
      streamingNotes: "MLB.TV nationally; A's broadcasting some games on local OTA affiliates during Sacramento transition; Las Vegas media deal TBD",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "John Fisher (majority owner / chairman)",
      ownerNetWorth: "~$3B est. (Gap Inc. inheritance / Fisher family fortune)",
      ownerBackground: "John Fisher is the son of Gap Inc. founders Donald and Doris Fisher; inherited a significant portion of the family fortune; was a minority investor in the San Francisco Giants before acquiring the A's with Wolff in 2005; widely criticized by Oakland fans for failing to build a new Oakland stadium and ultimately relocating the franchise to Sacramento/Las Vegas; Fisher is known as a hands-off owner with low payroll tolerance",
      acquisitionYear: 2005,
      acquisitionPrice: 0.180,
      currentValuation: 1.8,
      impliedReturn: "~10x in 19 years (~13% CAGR); most appreciation driven by Las Vegas relocation announcement premium",
      ownershipGroup: [
        { name: "John Fisher", role: "majority owner / chairman", pct: null },
        { name: "Fisher family trusts", role: "beneficial ownership", pct: null },
      ],
      institutionalInvestors: "Minority stake sale explored 2025 at implied $2B valuation (25% chunk = ~$500M); Aramark Sports + Entertainment holds equity stake via concessions partnership",
      otherBusinessInterests: "Fisher family: Gap Inc. (apparel retail); real estate; KIPP public charter schools (philanthropy)"
    },
    brand: {
      socialMedia: { instagram: "~400K", twitter: "~600K", facebook: "~900K" },
      merchandiseNotes: "Historically among MLB's weakest merchandise franchises; Oakland departure severely damaged loyalty base; Sacramento temporary identity muted; Las Vegas brand TBD — could be MLB's first major market in Nevada",
      internationalFanbase: "Minimal; historically domestic small-market fanbase; Las Vegas tourism-driven model could attract transient/international visitors",
      notableSponsorships: ["Sutter Health (Sacramento temporary park)", "Aramark (concessions/equity partner)", "Las Vegas corporate sponsors TBD"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Brent Rooker — breakout 2023-24 seasons; signed multi-year extension; represents the scrappy value-player model the A's rely on given low payroll",
      starContracts: [
        { player: "Brent Rooker", position: "LF/DH", aav: 10.0, contractNote: "Multi-year extension; emerged as key offensive piece during Oakland final seasons and Sacramento transition" },
      ]
    },
    analystNotes: "The A's $1.8B Forbes valuation — up 50% in a single year — is almost entirely a relocation premium, reflecting the market's bet that a Las Vegas franchise on the Strip will command dramatically higher local revenues, corporate sponsorships, and gate receipts than the Oakland model ever could. Fisher's $180M 2005 entry is a masterclass in asset appreciation: the franchise is worth 10x entry despite generating among the lowest revenue and payroll in baseball. The critical risk is execution: the Las Vegas stadium is not yet fully financed (Fisher pledged $1B of a ~$1.75-2B project but Goldman/Aramark contributions leave a gap), the local media deal is nonexistent, and the Sacramento interim years will bleed revenue. If the Vegas ballpark opens on schedule (~2028), the A's could re-rate toward $3B; if it stalls, the franchise will have no stadium, no market, and no TV deal."
  },

  "Seattle Mariners": {
    valuationHistory: [
      { year: 2019, value: 1.25, source: "Forbes" },
      { year: 2020, value: 1.2,  source: "Forbes" },
      { year: 2021, value: 1.35, source: "Forbes" },
      { year: 2022, value: 1.5,  source: "Forbes" },
      { year: 2023, value: 1.95, source: "Forbes" },
      { year: 2024, value: 2.2,  source: "Forbes" },
    ],
    revenue: { estimate: 330, year: 2023, source: "Forbes", operatingIncome: 40 },
    transactions: [
      { year: 1992, price: 0.125, buyer: "Nintendo of America (Hiroshi Yamauchi) + local investors", seller: "Jeff Smulyan", notes: "Yamauchi led a rescue purchase for $125M to keep the Mariners in Seattle; Nintendo retained 55% stake; local investors (including Chris Larson) joined; MLB allowed foreign ownership exception for Nintendo given crisis circumstances" },
      { year: 2016, price: 1.4, buyer: "John Stanton-led group (90% stake)", seller: "Nintendo of America (majority stake)", notes: "Stanton group acquired 90% from Nintendo at a ~$1.4B total valuation; Nintendo retained 10% stake; Stanton is a telecom entrepreneur (Western Wireless, VoiceStream/T-Mobile predecessor)" },
    ],
    stadium: {
      name: "T-Mobile Park",
      yearBuilt: 1999,
      capacity: 47929,
      ownershipModel: "owned by the Public Facilities District (PFD), a Washington State public body; Mariners lease for $1.5M/yr under 25-year lease signed 2018; team invests in facility maintenance/upgrades as part of lease terms",
      teamOwnsLand: false,
      publicSubsidy: 372,
      privateFinancing: 45,
      namingRightsDeal: { sponsor: "T-Mobile (Deutsche Telekom subsidiary)", annualValue_M: 8, totalValue_M: 87.5, expiryYear: 2039, notes: "Original Safeco Field naming rights replaced; T-Mobile deal signed 2018 for naming rights; estimated ~$8M/yr; T-Mobile global HQ is in Bellevue, WA — strong local alignment" },
      nonGameRevenue: "T-Mobile Park hosts concerts, MLS Seattle Sounders (some matches), and other events; PFD captures venue economics; Mariners capture event-day revenue under lease; retractable roof enables year-round events in Seattle's climate",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "ROOT Sports Northwest (AT&T/DirecTV regional network); unlike most RSNs, ROOT Sports Northwest remained operational — not part of Diamond Sports Group/Bally bankruptcy; Mariners have more stable local TV than most AL West competitors",
      streamingNotes: "ROOT Sports streaming app; MLB.TV nationally; Apple TV+ Friday games; Mariners among the most profitable teams in 2022 (best EBITDA in MLB that year)",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "John Stanton (chairman / controlling owner)",
      ownerNetWorth: "~$2.5B est. (Western Wireless / VoiceStream telecom)",
      ownerBackground: "Stanton built his fortune in Pacific Northwest telecom — co-founded Western Wireless and built VoiceStream Wireless (sold to Deutsche Telekom for $35B in 2001, becoming T-Mobile US); purchased 90% of Mariners from Nintendo of America in 2016 at ~$1.4B franchise valuation; Chris Larson (Microsoft early employee, ~$1.5B net worth) is a co-owner; Nintendo of America retains 10%",
      acquisitionYear: 2016,
      acquisitionPrice: 1.4,
      currentValuation: 2.2,
      impliedReturn: "~1.6x in 8 years (~6% CAGR); below-market appreciation relative to MLB average reflects limited competitive investment",
      ownershipGroup: [
        { name: "John Stanton", role: "chairman / controlling owner", pct: null },
        { name: "Chris Larson", role: "co-owner / minority", pct: null },
        { name: "Nintendo of America", role: "minority (10%)", pct: 10 },
      ],
      institutionalInvestors: "No disclosed institutional PE beyond Nintendo passive stake",
      otherBusinessInterests: "Stanton: Trilogy International Partners (mobile/telecom); Larson: early Microsoft/tech investments"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~900K", facebook: "~1.7M" },
      merchandiseNotes: "Strong Pacific Northwest regional brand; Ken Griffey Jr. legacy sustains multi-generational loyalty; Julio Rodriguez emergence as face of franchise driving merchandise growth; 2022 playoff run ended 21-year drought and reinvigorated fanbase",
      internationalFanbase: "Growing Dominican Republic connection (Julio Rodriguez); significant Japanese fan base from Ichiro era (2001-2010, 2018); strong Korean connection (Ryu Hyun-jin era in division, Mariners scouting Korean market)",
      notableSponsorships: ["T-Mobile (stadium naming)", "ROOT Sports NW (local TV)", "Alaska Airlines", "Safeco Insurance (legacy)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Julio Rodríguez — 12yr guaranteed/$210M (up to $470M with options), signed Aug 2022 as a rookie; through 2034 with club options potentially through 2039",
      starContracts: [
        { player: "Julio Rodríguez", position: "CF", aav: 17.5, contractNote: "12yr/$210M guaranteed + club options potentially worth $470M total (Aug 2022, as a rookie); through 2034; opt-outs and escalators based on MVP voting performance; unprecedented deal structure" },
        { player: "Logan Gilbert", position: "SP", aav: 18.0, contractNote: "5yr/$140M extension (2024), anchoring rotation through late 2020s" },
      ]
    },
    analystNotes: "The Mariners are the most financially disciplined franchise in the AL West, sitting on strong EBITDA (led all MLB in operating income in 2022) despite 21 consecutive years without a playoff appearance through 2021. ROOT Sports Northwest's survival amid the Bally Sports collapse is a structural advantage worth ~$40-60M/year in media certainty over competitors. Julio Rodriguez's landmark 12yr/$210M rookie deal is either franchise-defining or the most expensive albatross in Mariners history — the opt-out structure (linked to MVP voting) means both sides have hedges, but at 12 guaranteed years it's an extraordinary commitment to an unproven player. The biggest risk is ownership's historical under-investment: Stanton's group has been criticized for keeping payroll near the league minimum while posting strong EBITDA, effectively distributing profits rather than reinvesting in talent."
  },

  "Texas Rangers": {
    valuationHistory: [
      { year: 2019, value: 1.6,  source: "Forbes" },
      { year: 2020, value: 1.65, source: "Forbes" },
      { year: 2021, value: 1.75, source: "Forbes" },
      { year: 2022, value: 1.9,  source: "Forbes" },
      { year: 2023, value: 2.2,  source: "Forbes" },
      { year: 2024, value: 2.45, source: "Forbes" },
    ],
    revenue: { estimate: 360, year: 2023, source: "Forbes", operatingIncome: 38 },
    transactions: [
      { year: 2010, price: 0.593, buyer: "Ray Davis / Bob Simpson (Rangers Baseball Express)", seller: "Tom Hicks (Hicks Sports Group)", notes: "Hicks sold the Rangers out of bankruptcy at $593M after defaulting on stadium debt; Davis (energy entrepreneur, JPMorgan) and Simpson (natural gas billionaire) beat out a competing group; purchase approved by MLB Aug 2010" },
    ],
    stadium: {
      name: "Globe Life Field",
      yearBuilt: 2020,
      capacity: 40300,
      ownershipModel: "publicly owned by the City of Arlington; Rangers lease under a 30-year agreement; Arlington and team share in venue economics",
      teamOwnsLand: false,
      publicSubsidy: 500,
      privateFinancing: 700,
      namingRightsDeal: { sponsor: "Globe Life (Liberty National Life Insurance)", annualValue_M: 25, totalValue_M: 62.5, expiryYear: 2043, notes: "Globe Life Inc. is an Arlington, TX-based insurance company; naming rights deal ~$62.5M+ total over 25 years (~$25M/yr est.); replaces Globe Life Park in Arlington (previous stadium) deal" },
      nonGameRevenue: "Globe Life Field retractable roof enables year-round events in Dallas-Fort Worth; hosted 2020 MLB Bubble Postseason (entire 2020 playoffs), Super Bowl LVI watch events, and multiple concerts; DFW's 8M-person metro is among MLB's largest markets",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Southwest (Diamond Sports Group); Diamond filed Chapter 11 bankruptcy 2023; Rangers exploring alternatives as Diamond restructures; Texas is among the most lucrative local sports markets in the US",
      streamingNotes: "MLB.TV nationally; Apple TV+ Friday games; Rangers 2023 World Series drives national viewership; exploring direct-to-consumer streaming partnerships",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Ray Davis (co-owner / managing partner)",
      ownerNetWorth: "~$8B est. (energy — Torch Energy and others); Bob Simpson ~$5B est.",
      ownerBackground: "Ray C. Davis made his fortune in energy (Torch Energy, Enserco, various oil and gas ventures); Bob R. Simpson co-founded XTO Energy (sold to ExxonMobil for $41B in 2010); together they formed Rangers Baseball Express and outbid competing groups to rescue the franchise from Tom Hicks' bankruptcy; Davis is the managing partner and public face; co-ownership has been harmonious with both partners bringing energy-sector fortunes to bear on payroll investment",
      acquisitionYear: 2010,
      acquisitionPrice: 0.593,
      currentValuation: 2.45,
      impliedReturn: "~4.1x in 14 years (~11% CAGR)",
      ownershipGroup: [
        { name: "Ray Davis", role: "co-owner / managing partner", pct: null },
        { name: "Bob Simpson", role: "co-owner / limited partner", pct: null },
      ],
      institutionalInvestors: "No disclosed institutional PE; private co-ownership",
      otherBusinessInterests: "Davis: Torch Energy, energy sector ventures; Simpson: XTO Energy (sold to ExxonMobil 2010), Fort Worth philanthropy"
    },
    brand: {
      socialMedia: { instagram: "~800K", twitter: "~1.0M", facebook: "~2.0M" },
      merchandiseNotes: "2023 World Series championship drove the largest single-year merchandise surge in Rangers history; DFW metro market (8M+ people) is underserved by baseball historically; Globe Life Field opened the premium-seat market; Corey Seager/Marcus Semien dual-shortstop identity is distinctive",
      internationalFanbase: "Modest; some Latin American following via Hispanic DFW community; growing Japanese connection via Yu Darvish legacy (2012-2017) and international marketing",
      notableSponsorships: ["Globe Life (stadium naming)", "Bally Sports Southwest (local TV)", "Bank of America", "Bell Flight (aerospace)", "Kubota"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Corey Seager — 10yr/$325M signed Dec 2021, $32.5M AAV, through 2031; 2023 World Series MVP",
      starContracts: [
        { player: "Corey Seager", position: "SS", aav: 32.5, contractNote: "10yr/$325M (Dec 2021), through 2031; franchise-record deal at signing; 2023 WS MVP; 2x WS MVP in career" },
        { player: "Marcus Semien", position: "2B", aav: 29.0, contractNote: "7yr/$175M (Dec 2021), through 2027; signed same day as Seager; dual-SS/2B keystone of 2023 championship team" },
        { player: "Nathan Eovaldi", position: "SP", aav: 18.0, contractNote: "4yr/$68M (2023), through 2026; ace of 2023 postseason run" },
      ]
    },
    analystNotes: "The Rangers' 2023 World Series championship — won in the first full season at Globe Life Field's 3-year-old retractable-roof stadium — was the ultimate stadium investment validation story: $1.2B in construction (half public) produced a facility that hosted MLB's COVID Bubble in 2020, drove premium-seat sellouts during the 2023 run, and created a DFW sports moment the market had never previously experienced. At $2.45B, the franchise trades at roughly 4x the $593M bankruptcy entry price over 14 years. The primary risk is media: Bally Sports Southwest's Diamond bankruptcy exposes the Rangers to a $40-60M/year local TV revenue uncertainty, and Davis/Simpson will need to navigate RSN restructuring carefully. The $32.5M Seager + $29M Semien commitments lock up ~$61.5M AAV through 2027-31, limiting payroll flexibility but providing a championship-caliber core."
  },

// ─── NL EAST ─────────────────────────────────────────────────────────────

  "Atlanta Braves": {
    valuationHistory: [
      { year: 2019, value: 1.625, source: "Forbes" },
      { year: 2020, value: 1.5,   source: "Forbes" },
      { year: 2021, value: 1.75,  source: "Forbes" },
      { year: 2022, value: 2.0,   source: "Forbes" },
      { year: 2023, value: 2.35,  source: "Forbes" },
      { year: 2024, value: 2.8,   source: "Forbes" },
    ],
    revenue: { estimate: 521, year: 2023, source: "Forbes / Atlanta Braves Holdings SEC filings", operatingIncome: 68 },
    transactions: [
      { year: 2007, price: 0.450, buyer: "Liberty Media Corporation", seller: "Time Warner Inc.", notes: "Liberty Media acquired a 61% controlling interest in the Braves from Time Warner; team had been part of the Turner Broadcasting / AOL Time Warner empire since 1976 Ted Turner acquisition" },
      { year: 2023, price: null, buyer: "Atlanta Braves Holdings (BATRA/BATRK)", seller: "Liberty Media (spin-off)", notes: "Liberty Media completed spin-off of Atlanta Braves Holdings as a standalone publicly traded company (BATRA/BATRK) in November 2023; no cash transaction but clarified market-valued ownership structure; Liberty Live Group retains controlling interest" },
    ],
    stadium: {
      name: "Truist Park",
      yearBuilt: 2017,
      capacity: 41149,
      ownershipModel: "Cobb County owns the stadium; Braves hold a 30-year lease through 2046 and operate the facility; Braves own The Battery Atlanta mixed-use development on adjacent land (restaurants, hotel, office, apartments)",
      teamOwnsLand: false,
      publicSubsidy: 392,
      privateFinancing: 330,
      namingRightsDeal: { sponsor: "Truist Financial (successor to SunTrust after BB&T merger)", annualValue_M: 10, totalValue_M: 250, expiryYear: 2042, notes: "Original 25-year deal signed with SunTrust Bank at ~$10M/yr before 2017 opening; renamed to Truist Park in 2020 following SunTrust-BB&T merger; deal runs through approximately 2042" },
      nonGameRevenue: "The Battery Atlanta generates significant non-game revenue for the Braves: ~$558M mixed-use development (Braves funded ~$470M) features hotels, restaurants, office, residential, and entertainment venues on land the Braves control; The Battery positions the franchise as a real estate and entertainment company, not just a baseball team",
      newStadiumPlans: null,
    },
    media: {
      localTVDeal: "Bally Sports South / Diamond Sports Group (in Chapter 11 bankruptcy restructuring 2023-2024); Braves launched Bally Live direct-to-consumer streaming option as RSN model under stress; new direct streaming deals likely post-restructuring",
      streamingNotes: "Apple TV+ (Friday night games), Peacock (select games), MLB.TV blackout rules apply; team and league negotiating new regional distribution model post-Diamond bankruptcy",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Atlanta Braves Holdings, Inc. (BATRA/BATRK) — publicly traded; Liberty Live Group (John Malone / Greg Maffei) holds controlling interest",
      ownerNetWorth: "John Malone: ~$9B est.; Greg Maffei (Liberty Live Group CEO): ~$1B est.; company market cap ~$2.5B",
      ownerBackground: "Liberty Media (now Liberty Live Group) acquired controlling interest in the Braves from Time Warner in 2007 for ~$450M. In November 2023, Liberty Media completed a spin-off of the Braves into Atlanta Braves Holdings (BATRA/BATRK), making it one of the few MLB teams traded as a public equity. Terry McGuirk (longtime Braves executive under Turner) serves as chairman; Mike Plant as president",
      acquisitionYear: 2007,
      acquisitionPrice: 0.450,
      currentValuation: 2.8,
      impliedReturn: "Liberty entry at ~$450M (2007); current Forbes $2.8B = ~6.2x in 17 years (~11% CAGR); Battery Atlanta real estate substantially enhances total enterprise value",
      ownershipGroup: [
        { name: "Liberty Live Group / John Malone", role: "controlling interest via BATRA/BATRK voting structure", pct: null },
        { name: "Terry McGuirk", role: "chairman", pct: null },
        { name: "Mike Plant", role: "president", pct: null },
        { name: "Public shareholders (BATRA/BATRK)", role: "minority, publicly traded", pct: null },
      ],
      institutionalInvestors: "Publicly traded; institutional ownership includes standard index funds and active managers; Liberty Live Group retains control via supervoting structure",
      otherBusinessInterests: "Liberty Live Group: Live Nation Entertainment (controlling stake), SiriusXM (controlling stake), Formula 1 Group (spun off as separate entity); broad media and entertainment conglomerate",
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2.2M", facebook: "~5.8M" },
      merchandiseNotes: "One of MLB's top merchandise performers; tomahawk chop national brand; 2021 World Series championship drove sustained merchandise cycle; Ronald Acuña Jr. as franchise face drives apparel; consistent playoff appearances 2018-present",
      internationalFanbase: "Latin American following via Ronald Acuña Jr. (Venezuela), Ozzie Albies (Curaçao); growing presence in Dominican Republic market",
      notableSponsorships: ["Truist Financial (stadium naming)", "Coca-Cola (Atlanta HQ relationship)", "Xfinity", "Quaker State", "Lexus"],
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Ronald Acuña Jr. — 8yr/$100M extension (2019), $12.5M AAV through 2026; 2023 NL MVP, first 40-40 season in MLB history",
      starContracts: [
        { player: "Ronald Acuña Jr.", position: "OF", aav: 17.0, contractNote: "8yr/$100M (2019 extension), final years at $17M; through 2026; signed when Acuña was still pre-MVP" },
        { player: "Matt Olson", position: "1B", aav: 21.0, contractNote: "8yr/$168M (2022), through 2029; acquired from Oakland, immediately signed to franchise-cornerstone extension" },
        { player: "Michael Harris II", position: "CF", aav: 9.0, contractNote: "8yr/$72M extension (2023), through 2030; signed to club-friendly deal as 2022 NL Rookie of the Year" },
      ],
    },
    analystNotes: "The Braves are the most financially sophisticated franchise in baseball: the only MLB team traded as a public equity (BATRA/BATRK), with The Battery Atlanta mixed-use development creating a real estate enterprise layered on top of the baseball operation. The $558M Battery development — entirely Braves-controlled land adjacent to Cobb County's stadium — effectively doubles the franchise's operating revenue base relative to a pure-play team. The primary risk is RSN exposure: Bally Sports South (Diamond bankruptcy) represented significant local TV revenue; the team and league are navigating a structural shift toward direct-to-consumer streaming that will reset local media economics for all MLB franchises.",
  },

  "Miami Marlins": {
    valuationHistory: [
      { year: 2019, value: 0.980, source: "Forbes" },
      { year: 2020, value: 0.980, source: "Forbes" },
      { year: 2021, value: 0.990, source: "Forbes" },
      { year: 2022, value: 1.0,   source: "Forbes" },
      { year: 2023, value: 1.0,   source: "Forbes" },
      { year: 2024, value: 1.0,   source: "Forbes" },
    ],
    revenue: { estimate: 295, year: 2023, source: "Forbes", operatingIncome: 34 },
    transactions: [
      { year: 1992, price: 0.095, buyer: "Wayne Huizenga (Blockbuster Video founder)", seller: "MLB expansion", notes: "Expansion franchise granted to H. Wayne Huizenga for $95M; won World Series in 1997 (5th year) then sold/dispersed roster" },
      { year: 2002, price: 0.158, buyer: "Jeffrey Loria", seller: "John Henry", notes: "Loria paid $158.5M; Henry (selling Marlins) simultaneously bought Red Sox; Loria's ownership marked by two championships (2003) and two fire-sales" },
      { year: 2017, price: 1.2, buyer: "Bruce Sherman-led group (incl. Michael Jordan, Derek Jeter)", seller: "Jeffrey Loria", notes: "Sherman-led consortium paid $1.2B; Loria's exit ended contentious ownership era; Derek Jeter became CEO/partner; Jeter resigned Feb 2022 after conflicts with Sherman over payroll strategy" },
    ],
    stadium: {
      name: "LoanDepot Park",
      yearBuilt: 2012,
      capacity: 37446,
      ownershipModel: "Miami-Dade County and City of Miami own the stadium; Marlins operate under long-term lease; stadium financed primarily with public funds amid significant controversy",
      teamOwnsLand: false,
      publicSubsidy: 515,
      privateFinancing: 120,
      namingRightsDeal: { sponsor: "LoanDepot", annualValue_M: 3.69, totalValue_M: 36.9, expiryYear: 2030, notes: "10-year deal signed 2021; renamed from Marlins Park; previously had no naming rights deal for first 9 years of stadium's existence" },
      nonGameRevenue: "Limited; retractable roof enables year-round events in Miami heat; county-owned structure limits team's direct non-game revenue capture; Little Havana location limits mixed-use development potential",
      newStadiumPlans: null,
    },
    media: {
      localTVDeal: "Bally Sports Florida / Diamond Sports Group (in bankruptcy restructuring); Marlins among most affected by RSN collapse given small local TV audience; team exploring direct-to-consumer alternatives",
      streamingNotes: "Apple TV+ (Friday night games), MLB.TV; local TV situation in flux post-Diamond bankruptcy",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Bruce Sherman (principal owner / managing general partner)",
      ownerNetWorth: "~$550M est.",
      ownerBackground: "Bruce Sherman: co-founder of Private Capital Management (PCM), sold to Legg Mason. Led acquisition group in 2017 for $1.2B. Derek Jeter was partner and CEO from 2017-2022; Jeter resigned Feb 2022 citing disagreements with Sherman over spending priorities. Michael Jordan (Charlotte Hornets owner) was a minority investor; sold his Marlins stake around 2022-23",
      acquisitionYear: 2017,
      acquisitionPrice: 1.2,
      currentValuation: 1.0,
      impliedReturn: "Slight loss on paper (~0.83x) over 7 years — rare MLB franchise value stagnation; primary driver is lowest-revenue team in MLB, small local TV market, and county-owned stadium limiting ancillary economics",
      ownershipGroup: [
        { name: "Bruce Sherman", role: "principal owner / managing general partner", pct: null },
        { name: "Jorge Mas", role: "minority investor / board member", pct: null },
        { name: "Various limited partners", role: "minority investors", pct: null },
      ],
      institutionalInvestors: "MLB approved PE ownership rule (Dec 2023) may create opportunity for minority PE stake sale",
      otherBusinessInterests: "Sherman: Private Capital Management (PCM); Mas: MasTec (infrastructure engineering NYSE: MTZ)",
    },
    brand: {
      socialMedia: { instagram: "~1.2M", twitter: "~750K", facebook: "~1.4M" },
      merchandiseNotes: "Lowest merchandise sales in MLB; limited national brand; two championship legacies (1997, 2003) belong to different ownership eras; Marlins Man (Laurence Leavy) is the franchise's most recognizable fan symbol",
      internationalFanbase: "Strong Cuban-American fanbase in South Florida; international appeal via Latin American players; Jorge Soler, Sandy Alcantara fan followings",
      notableSponsorships: ["LoanDepot (stadium naming)", "Baptist Health", "Carnival Cruise Line", "Florida Blue"],
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Sandy Alcantara — 5yr/$56M extension (2022), $11.2M AAV through 2027; 2022 NL Cy Young Award winner (Tommy John surgery 2023, recovering)",
      starContracts: [
        { player: "Sandy Alcantara", position: "SP", aav: 11.2, contractNote: "5yr/$56M extension (2022), through 2027; Cy Young winner 2022; missed 2023-24 recovering from TJ surgery" },
        { player: "Jazz Chisholm Jr.", position: "OF/2B", aav: 5.0, contractNote: "Pre-arb through 2025; traded to Yankees July 2024; listed for historical contract context" },
      ],
    },
    analystNotes: "The Marlins are MLB's most distressed franchise by nearly every metric: lowest valuation ($1.0B), worst revenue per capita, a publicly financed stadium they don't own, and a failed $1.2B acquisition price that has yet to see appreciation. The Sherman-led group's 2017 purchase at $1.2B — a 40% premium to comparable 2015 comps — has produced a ~$200M paper loss in 7 years, the only MLB franchise to lose paper value post-2017. The structural bull case requires either a new stadium deal with real estate upside (unlikely near term) or a sale to a higher-conviction buyer willing to invest in payroll and marketing to activate the South Florida market.",
  },

  "New York Mets": {
    valuationHistory: [
      { year: 2019, value: 2.3,  source: "Forbes" },
      { year: 2020, value: 2.1,  source: "Forbes" },
      { year: 2021, value: 2.4,  source: "Forbes" },
      { year: 2022, value: 2.9,  source: "Forbes" },
      { year: 2023, value: 2.9,  source: "Forbes" },
      { year: 2024, value: 3.2,  source: "Forbes" },
    ],
    revenue: { estimate: 389, year: 2023, source: "Forbes", operatingIncome: -60 },
    transactions: [
      { year: 1986, price: 0.081, buyer: "Nelson Doubleday / Fred Wilpon", seller: "Doubleday & Co.", notes: "Joint sale; Wilpon and Doubleday had partnered in 1980; team sold to clear estate issues" },
      { year: 2002, price: 0.391, buyer: "Fred Wilpon / Saul Katz (increased majority stake)", seller: "Nelson Doubleday", notes: "Wilpon-Katz group bought out Doubleday for $391M; implied $550M franchise value" },
      { year: 2020, price: 2.42, buyer: "Steve Cohen and Alexandra Cohen", seller: "Wilpon / Katz families", notes: "Cohen paid record $2.42B MLB price at time; Point72 hedge fund founder; Wilpon family sold after Madoff scandal fallout strained finances; deal closed Nov 2020" },
    ],
    stadium: {
      name: "Citi Field",
      yearBuilt: 2009,
      capacity: 41922,
      ownershipModel: "New York City owns the stadium (constructed on city land in Flushing, Queens); Mets operate under long-term lease; stadium financed via NYC municipal bonds to be repaid by team over time",
      teamOwnsLand: false,
      publicSubsidy: 615,
      privateFinancing: 235,
      namingRightsDeal: { sponsor: "Citigroup", annualValue_M: 20, totalValue_M: 400, expiryYear: 2028, notes: "20-year/$400M deal signed 2006, $20M/yr; most lucrative MLB naming rights deal at time; deal survived controversy when Citi received $45B TARP bailout in 2008-09 and considered renegotiating; deal extended beyond original 2028 term" },
      nonGameRevenue: "SNY regional sports network (~8% Mets ownership stake); Citi Field hosts concerts, soccer (NY Red Bulls occasional matches), other events; location in Flushing generates meaningful non-baseball event revenue",
      newStadiumPlans: null,
    },
    media: {
      localTVDeal: "SNY (SportsNet New York) — Mets own approximately 8% stake in SNY; Comcast (NBCU) is majority partner; SNY is the team's primary local broadcaster and one of the most-watched RSNs in the country despite small-market size of RSN industry",
      streamingNotes: "Apple TV+ (Friday night games), MLB.TV, Peacock; SNY streaming available via cable/streaming bundles; Cohen has expressed interest in digital distribution expansion",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Steve Cohen (controlling owner / chairman & CEO)",
      ownerNetWorth: "~$21B est. (Point72 hedge fund / SAC Capital successor)",
      ownerBackground: "Steven A. Cohen is founder of SAC Capital (later Point72 Asset Management) and one of the most successful hedge fund managers in history. SAC Capital paid $1.8B in SEC settlements in 2013-14 (insider trading); Cohen was personally banned from managing outside money through 2018. Bought Mets at record $2.42B MLB price in Nov 2020; has committed to high payroll spending — team has exceeded luxury tax threshold every year under his ownership. Wife Alexandra Cohen is co-owner",
      acquisitionYear: 2020,
      acquisitionPrice: 2.42,
      currentValuation: 3.2,
      impliedReturn: "~1.3x in 4 years (~7% CAGR); operating at significant losses ($60M+ annually under Cohen) while investing in payroll and player development; capital appreciation story, not income story",
      ownershipGroup: [
        { name: "Steve Cohen", role: "controlling owner / chairman & CEO", pct: 97 },
        { name: "Alexandra Cohen", role: "co-owner", pct: null },
      ],
      institutionalInvestors: "Cohen holds ~97% controlling interest; MLB approved PE ownership stakes (Dec 2023), Cohen has discussed potential sale of minority stake to institutional investors",
      otherBusinessInterests: "Point72 Asset Management (hedge fund, AUM ~$34B); Cohen also owns significant art collection ($1B+); past SAC Capital operations",
    },
    brand: {
      socialMedia: { instagram: "~3.8M", twitter: "~2.5M", facebook: "~6.2M" },
      merchandiseNotes: "New York market drives strong merchandise base; Juan Soto signing (15yr/$765M, Jan 2025) is largest contract in pro sports history and elevates franchise star power; Francisco Lindor has been the face of the team; historically second to Yankees in NYC market but narrowing gap under Cohen-era spending",
      internationalFanbase: "Strong Puerto Rican fanbase via Francisco Lindor; Dominican Republic following; Juan Soto (Dominican) expands Latin American reach; Japanese fanbase interest via Kodai Senga",
      notableSponsorships: ["Citigroup (stadium naming)", "Amazon Web Services", "BetMGM", "Hyundai", "New York Lottery"],
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Francisco Lindor — 10yr/$341M (2021), $34.1M AAV through 2031; plus Juan Soto 15yr/$765M (Jan 2025), $51M AAV through 2039",
      starContracts: [
        { player: "Juan Soto", position: "OF", aav: 51.0, contractNote: "15yr/$765M (Jan 2025) — largest contract in professional sports history; signed before 2025 season; through 2039" },
        { player: "Francisco Lindor", position: "SS", aav: 34.1, contractNote: "10yr/$341M (2021 extension), through 2031; signed shortly after Cohen acquisition to anchor franchise rebuild" },
        { player: "Kodai Senga", position: "SP", aav: 15.0, contractNote: "5yr/$75M (2023), through 2027; missed most of 2024 with injury" },
      ],
    },
    analystNotes: "The Cohen-era Mets represent a generational bet on unlocking the New York market: a $21B+ hedge fund owner committing to luxury-tax-level payroll every year while absorbing $60M+ annual operating losses. The Juan Soto acquisition (15yr/$765M, Jan 2025) — the largest contract in professional sports history — signals Cohen's intent to make the Mets the dominant New York baseball franchise, not just competitive. The franchise trades at a discount to the Yankees ($3.2B vs. $8.2B) despite playing in the same market, reflecting historical ownership underinvestment and the lack of a media empire equivalent to YES Network; closing that gap is the bull case. The risk is that operating losses are structurally baked in at current payroll levels, and Soto's $765M deal creates a 15-year anchor that limits roster flexibility.",
  },

  "Philadelphia Phillies": {
    valuationHistory: [
      { year: 2019, value: 1.65,  source: "Forbes" },
      { year: 2020, value: 1.55,  source: "Forbes" },
      { year: 2021, value: 1.8,   source: "Forbes" },
      { year: 2022, value: 2.1,   source: "Forbes" },
      { year: 2023, value: 2.45,  source: "Forbes" },
      { year: 2024, value: 2.93,  source: "Forbes" },
    ],
    revenue: { estimate: 391, year: 2023, source: "Forbes", operatingIncome: 52 },
    transactions: [
      { year: 1981, price: 0.030, buyer: "Bill Giles-led group", seller: "Ruly Carpenter family", notes: "Giles group paid $30M for the franchise; team had been in Carpenter family since 1943" },
      { year: 1994, price: null, buyer: "John Middleton (minority stake, ~15%)", seller: "Secondary sale", notes: "Middleton acquired ~15% minority interest for approximately $18M; became dominant minority partner over time" },
      { year: 2016, price: null, buyer: "John Middleton (control person designation)", seller: "MLB approval", notes: "MLB owners designated Middleton as control person in Nov 2016; no full sale but effective management transfer; Middleton-Giles-Buck families remain primary ownership" },
      { year: 2024, price: null, buyer: "New institutional investors (capital raise)", seller: "Existing investors (partial)", notes: "Phillies raised ~$500M from three new investors at implied ~$3B valuation (Nov 2024); Middleton and Stanley Middleman also reinvested; total capital infusion ~$600M; largest MLB minority investment round in history" },
    ],
    stadium: {
      name: "Citizens Bank Park",
      yearBuilt: 2004,
      capacity: 42901,
      ownershipModel: "City of Philadelphia-owned land; stadium financed jointly with public-private partnership; Phillies operate and maintain under long-term lease",
      teamOwnsLand: false,
      publicSubsidy: 229,
      privateFinancing: 229,
      namingRightsDeal: { sponsor: "Citizens Bank (Citizens Financial Group)", annualValue_M: 3.8, totalValue_M: 95, expiryYear: 2028, notes: "Original 25-year/$95M deal signed 2003 ($3.8M/yr including $57.5M naming rights + $37.5M exclusive advertising rights); among longest-running naming rights deals in MLB; renewal discussions ongoing ahead of 2028 expiry" },
      nonGameRevenue: "Phillies own and operate the stadium food and concessions via Aramark partnership; premium club and suite revenue; Citizens Bank Park is in the South Philadelphia sports complex alongside Lincoln Financial Field (Eagles) and Wells Fargo Center (Flyers/76ers), creating regional sports entertainment cluster",
      newStadiumPlans: "Part of South Philadelphia sports complex redevelopment discussions (2024+); city and teams exploring mixed-use development around the sports complex site",
    },
    media: {
      localTVDeal: "NBC Sports Philadelphia (NBCSP) — NBC Sports Regional Networks (Comcast/NBCU owned); Phillies have partial ownership stake (~25%) in NBCSP; Phillies-NBCSP relationship is one of the most stable RSN arrangements in MLB given Comcast ownership",
      streamingNotes: "Apple TV+ (Friday night games), Peacock (Comcast-owned, promotional alignment with NBCSP), MLB.TV; Comcast ownership of NBCSP provides distribution stability amid RSN industry disruption",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "John Middleton (managing partner / control person)",
      ownerNetWorth: "~$3.5B est. (tobacco and investments)",
      ownerBackground: "John Middleton made his fortune through Standard Commercial Corporation (leaf tobacco processing) and investments. Has been with Phillies ownership since 1994 (~15% stake for ~$18M). Named MLB control person in 2016. Known for aggressive player spending: signed Bryce Harper ($330M, 2019), Trea Turner ($300M, 2023) and publicly committed to a World Series champion. Partners include the Buck family (longtime Phillies ownership group since 1981) and Stanley Middleman (Freedom Mortgage founder)",
      acquisitionYear: 2016,
      acquisitionPrice: null,
      currentValuation: 2.93,
      impliedReturn: "Middleton's ~15% stake (est. $18M in 1994) at current $2.93B = ~$440M implied value for that stake = ~24x in 30 years (~11% CAGR)",
      ownershipGroup: [
        { name: "John Middleton", role: "managing partner / control person", pct: null },
        { name: "Buck family (Bill Giles heirs)", role: "founding ownership family", pct: null },
        { name: "Stanley Middleman", role: "minority owner (Freedom Mortgage founder)", pct: null },
        { name: "New institutional investors (3 groups, 2024 raise)", role: "minority, passive", pct: null },
      ],
      institutionalInvestors: "~$500M raised from three new institutional investors in Nov 2024 at ~$3B implied valuation; first major outside capital raise for the franchise",
      otherBusinessInterests: "Middleton: Standard Commercial Corporation (tobacco); Middleman: Freedom Mortgage; Buck family: various business interests",
    },
    brand: {
      socialMedia: { instagram: "~2.8M", twitter: "~1.8M", facebook: "~4.2M" },
      merchandiseNotes: "Bryce Harper's #3 jersey among MLB's top sellers since 2019 signing; Trea Turner addition deepens offensive star power; 2008 World Series champions + 2022-23 WS appearances driving renewed interest; Philadelphia fanbase among most passionate in MLB",
      internationalFanbase: "Dominican Republic fanbase via Trea Turner; limited international audience historically; Latin player base growing",
      notableSponsorships: ["Citizens Bank (stadium naming)", "NBCSP / Comcast", "Santander Bank", "Independence Blue Cross", "Subway"],
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Bryce Harper — 13yr/$330M (2019), $25.4M AAV through 2031; 2021 NL MVP, 2022 NLCS MVP",
      starContracts: [
        { player: "Bryce Harper", position: "1B/OF", aav: 25.4, contractNote: "13yr/$330M (2019), through 2031; moved from RF to 1B post-UCL surgery; 2021 NL MVP" },
        { player: "Trea Turner", position: "SS", aav: 27.3, contractNote: "11yr/$300M (2023 extension), through 2033; added to pair with Harper as franchise cornerstone duo" },
        { player: "Zack Wheeler", position: "SP", aav: 23.6, contractNote: "5yr/$118M (2019-2024); re-signed on new deal; perennial Cy Young contender" },
      ],
    },
    analystNotes: "The Phillies are baseball's best example of small-market-to-contender transformation via surgical star acquisitions: Middleton's Harper ($330M) and Turner ($300M) investments created a core that has reached two World Series (2022, attempted 2023) after a decade of mediocrity. The $600M institutional capital raise (Nov 2024) at a $3B implied valuation confirms private-market conviction in the franchise at a 22% premium to Forbes' $2.45B 2023 estimate — likely reflecting Citizens Bank Park redevelopment optionality, the NBCSP partnership, and Harper-era playoff economics. The franchise's primary risk is the Turner contract ($300M through 2033) aging poorly if Turner's production declines, compounding Harper's $330M commitment and limiting payroll flexibility.",
  },

  "Washington Nationals": {
    valuationHistory: [
      { year: 2019, value: 1.675, source: "Forbes" },
      { year: 2020, value: 1.59,  source: "Forbes" },
      { year: 2021, value: 1.7,   source: "Forbes" },
      { year: 2022, value: 1.8,   source: "Forbes" },
      { year: 2023, value: 1.93,  source: "Forbes" },
      { year: 2024, value: 2.0,   source: "Forbes" },
    ],
    revenue: { estimate: 288, year: 2023, source: "Forbes", operatingIncome: 40 },
    transactions: [
      { year: 2006, price: 0.450, buyer: "Ted Lerner-led group (Lerner Enterprises)", seller: "MLB (league-controlled)", notes: "MLB had owned the team since purchasing from Jeffrey Loria (who traded to become Marlins owner) in 2002 for $120M; awarded DC expansion to Lerner group for $450M in 2006 after DC stadium deal secured" },
      { year: 2023, price: null, buyer: "Mark Lerner (managing principal partner)", seller: "Ted Lerner estate", notes: "Ted Lerner, founding principal owner, passed away in April 2023 at age 97; son Mark Lerner became managing principal partner; no sale, intra-family succession" },
    ],
    stadium: {
      name: "Nationals Park",
      yearBuilt: 2008,
      capacity: 41546,
      ownershipModel: "DC government (via District of Columbia Sports and Entertainment Commission) owns the stadium; Nationals operate under a 30-year lease through 2038; stadium funded almost entirely by DC public financing via ballpark tax on DC businesses with $5M+ in gross revenue",
      teamOwnsLand: false,
      publicSubsidy: 611,
      privateFinancing: 82,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal; stadium is called 'Nationals Park' — team has opted not to sell naming rights; represents significant revenue foregone vs. peers at $5-10M/year opportunity" },
      nonGameRevenue: "Capitol Riverfront neighborhood development adjacent to Nationals Park has transformed the area; team does not directly own surrounding land; DC government captures much of the real estate value appreciation; Nationals do capture premium suite and event revenue from the facility",
      newStadiumPlans: null,
    },
    media: {
      localTVDeal: "MASN (Mid-Atlantic Sports Network) — contentious arrangement: MASN is majority owned by Baltimore Orioles (Peter Angelos family); Nationals have a minority stake (~33%) and have been in litigation with MASN over rights fee payments since 2012; legal dispute has lasted over a decade and remains partially unresolved",
      streamingNotes: "Apple TV+ (Friday night games), MLB.TV; MASN streaming via cable packages; legal dispute with MASN means Nationals have received below-market rights fees for years",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Mark Lerner (managing principal partner) / Lerner Enterprises family",
      ownerNetWorth: "Lerner family (Ted Lerner estate): ~$6B est. (Washington DC real estate)",
      ownerBackground: "Ted Lerner built one of Washington DC's largest private real estate empires (Lerner Enterprises) over 60+ years, developing major commercial and residential properties throughout the Mid-Atlantic region. Won the 2006 MLB expansion bid for $450M after DC built Nationals Park. Team won 2019 World Series — first DC championship since 1924 Senators. Ted Lerner passed away April 2023 at age 97; son Mark Lerner, who had been involved in operations for years, became managing principal partner",
      acquisitionYear: 2006,
      acquisitionPrice: 0.450,
      currentValuation: 2.0,
      impliedReturn: "~4.4x in 18 years (~8.5% CAGR); below-peer appreciation due to MASN rights fee dispute suppressing media revenue and DC government-owned stadium limiting ancillary economics",
      ownershipGroup: [
        { name: "Mark Lerner", role: "managing principal partner", pct: null },
        { name: "Lerner family members", role: "ownership group", pct: null },
        { name: "Robert Tanenbaum", role: "limited partner", pct: null },
      ],
      institutionalInvestors: "Fully family-owned; no PE or institutional investors as of 2024",
      otherBusinessInterests: "Lerner Enterprises: major commercial and residential real estate development throughout DC/Maryland/Virginia metro area; one of the largest private landowners in the Washington region",
    },
    brand: {
      socialMedia: { instagram: "~1.9M", twitter: "~1.2M", facebook: "~3.8M" },
      merchandiseNotes: "2019 World Series championship drove strong merchandise cycle; Nationals' baby-shark playoff run created a national cultural moment; currently in rebuilding phase with limited marquee star power post-Soto trade",
      internationalFanbase: "Juan Soto (traded Dec 2023) was the face of the franchise; Dominican/Latin American fanbase followed Soto to Yankees/Mets; rebuilding around young core with limited international star power currently",
      notableSponsorships: ["Marriott", "Geico", "Xfinity", "Pepsi", "Ted Lerner (legacy naming convention)"],
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "MacKenzie Gore — emerging ace; James Wood — 2024 debut, considered top-5 MLB prospect; rebuilding around young core post-Soto/Scherzer era",
      starContracts: [
        { player: "MacKenzie Gore", position: "SP", aav: 4.5, contractNote: "Pre-arb; considered key rotation anchor for rebuilding Nationals" },
        { player: "James Wood", position: "OF", aav: 0.7, contractNote: "Pre-arb (2024 MLB debut); top prospect; center of Nationals' next competitive window" },
      ],
    },
    analystNotes: "The Nationals are in the most deliberate rebuilding cycle in the NL East — trading Juan Soto (Dec 2023 to Yankees), Max Scherzer (2021 deadline), and Trea Turner before that has created a prospect-rich pipeline but a present-day product far from competitive. The franchise's persistent undervaluation relative to DC's market size reflects two structural handicaps: the MASN rights fee dispute (a decade+ litigation suppressing local media revenue to below-market rates) and a government-owned stadium with no development upside. Resolution of the MASN dispute and the emergence of James Wood as a franchise-cornerstone player represent the two primary near-term catalysts for value re-rating.",
  },

  // ─── NL CENTRAL ──────────────────────────────────────────────────────────

  "Chicago Cubs": {
    valuationHistory: [
      { year: 2019, value: 3.2,   source: "Forbes" },
      { year: 2020, value: 3.1,   source: "Forbes" },
      { year: 2021, value: 3.4,   source: "Forbes" },
      { year: 2022, value: 3.9,   source: "Forbes" },
      { year: 2023, value: 4.1,   source: "Forbes" },
      { year: 2024, value: 4.225, source: "Forbes" },
    ],
    revenue: { estimate: 440, year: 2023, source: "Forbes", operatingIncome: 55 },
    transactions: [
      { year: 1981, price: 0.020, buyer: "Tribune Company", seller: "William Wrigley Jr. estate / Wrigley family", notes: "Tribune Company (Chicago Tribune) purchased Cubs from the Wrigley family for $20.5M; Wrigley family had owned since 1918 and built Wrigley Field (then Cubs Park/Weeghman Park)" },
      { year: 2009, price: 0.845, buyer: "Ricketts family (Tom Ricketts, managing partner)", seller: "Tribune Company", notes: "Ricketts family purchased 95% of the Cubs and Wrigley Field from Tribune for $845M; record baseball sale at time; Tribune retained 5% until Cubs bought it in 2019; included Wrigley Field and an 80% stake in Comcast SportsNet Chicago" },
    ],
    stadium: {
      name: "Wrigley Field",
      yearBuilt: 1914,
      capacity: 41649,
      ownershipModel: "Chicago Cubs own Wrigley Field outright (purchased as part of 2009 acquisition from Tribune; bought out final 5% Tribune stake in 2019); team owns the land and building — one of only a handful of MLB teams that own their stadium",
      teamOwnsLand: true,
      publicSubsidy: 22,
      privateFinancing: 978,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal — 'Wrigley' is the historic name, having been formally named after chewing gum magnate William Wrigley Jr. since 1926; the Wrigley name is sacrosanct; any naming rights sale would face intense fan and public backlash; estimated $5-10M/yr revenue foregone relative to standard MLB naming deal" },
      nonGameRevenue: "Wrigley Field generates substantial non-game revenue: concerts (multiple per year), other events; bleacher roof structure is unique; neighborhood rooftop building owners with views into Wrigley pay licensing fees; Gallagher Way plaza (adjacent) generates event revenue; 1060 Project renovation (~$1B total, 2014-2019) added premium clubs, suites, new video boards, expanded concourses",
      newStadiumPlans: null,
    },
    media: {
      localTVDeal: "Marquee Sports Network — Cubs-owned regional sports network launched Feb 2020; Cubs own majority stake in partnership with Sinclair Broadcast Group; Marquee provides Cubs with media ownership economics (rights fees + distribution revenue) rather than just a rights fee from an outside RSN",
      streamingNotes: "Apple TV+ (Friday night games), MLB.TV; Marquee available via cable/streaming; Cubs exploring expanded streaming distribution; Comcast carriage dispute (2025) created distribution friction",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Ricketts family (Tom Ricketts, executive chairman)",
      ownerNetWorth: "Joe Ricketts (patriarch) founded TD Ameritrade; Ricketts family net worth est. ~$6B combined",
      ownerBackground: "Joe Ricketts founded TD Ameritrade (originally First Omaha Securities) in 1975; sold to TD Bank Group in 2020 for ~$22B. Tom Ricketts (son) led the 2009 Cubs acquisition and serves as executive chairman; siblings Pete, Laura, and Todd Ricketts are co-owners. Tom Ricketts bought out Tribune's final 5% stake in 2019. 2016 World Series championship (ending 108-year drought) was the defining moment of the Ricketts ownership era",
      acquisitionYear: 2009,
      acquisitionPrice: 0.845,
      currentValuation: 4.225,
      impliedReturn: "~5x in 15 years (~11% CAGR); includes Wrigley Field real estate appreciation and Marquee Sports Network value creation — both assets owned outright",
      ownershipGroup: [
        { name: "Tom Ricketts", role: "executive chairman", pct: null },
        { name: "Joe Ricketts", role: "patriarch / founding investor", pct: null },
        { name: "Pete Ricketts", role: "co-owner (also US Senator, Nebraska)", pct: null },
        { name: "Laura Ricketts", role: "co-owner", pct: null },
        { name: "Todd Ricketts", role: "co-owner", pct: null },
      ],
      institutionalInvestors: "No external institutional investors; family-owned and controlled",
      otherBusinessInterests: "Joe Ricketts: TD Ameritrade (sold 2020); Pete Ricketts: US Senator (Nebraska), former Governor; family has diverse business and political interests",
    },
    brand: {
      socialMedia: { instagram: "~4.5M", twitter: "~2.8M", facebook: "~9.2M" },
      merchandiseNotes: "Wrigley Field is the most recognizable MLB venue brand in the world after Yankee Stadium; Cubs are a top-5 MLB merchandise franchise; 2016 World Series championship (ending 108-year drought) is the most commercially impactful single-season merchandise event in baseball history; Cubs gear sold globally as cultural artifact",
      internationalFanbase: "Strong following in Japan (Seiya Suzuki), Latin America; Wrigley Field attracts international tourism independent of baseball interest; Cubs have active international marketing programs",
      notableSponsorships: ["Wrigley Field (naming, legacy Wrigley gum connection)", "American Airlines (jersey patch)", "Budweiser", "T-Mobile", "Old Style Beer (legendary Wrigley concession)"],
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Dansby Swanson — 7yr/$177M (2023), $25.3M AAV through 2029",
      starContracts: [
        { player: "Dansby Swanson", position: "SS", aav: 25.3, contractNote: "7yr/$177M (Dec 2022), through 2029; Cubs signed as key piece of post-dynasty rebuild" },
        { player: "Cody Bellinger", position: "OF/1B", aav: 26.7, contractNote: "3yr/$80M (2024), through 2026; re-signed after strong 2023 bounce-back; key offensive piece" },
        { player: "Seiya Suzuki", position: "OF", aav: 14.0, contractNote: "5yr/$85M (2022), through 2026; first Japanese star import to franchise" },
      ],
    },
    analystNotes: "The Cubs are the most asset-rich franchise in the NL Central: Wrigley Field ownership (a $1B+ real estate and entertainment asset with annual renovation investment), Marquee Sports Network ownership (capturing both rights fees and distribution economics), and a fanbase that transcends the 2016 championship cycle. The franchise's key structural advantage — owning Wrigley outright when most MLB teams are RSN-dependent tenants — makes the Cubs the most media-economically sophisticated team in the NL, with Marquee providing RSN stability as Diamond Sports Group collapsed around them. The investment risk is that the Cubs have underinvested in roster since the 2016-18 dynasty years; without a sustained rebuild around Swanson/Bellinger, the franchise risks premium multiple compression as the 2016 championship emotional dividend fades.",
  },

  "Cincinnati Reds": {
    valuationHistory: [
      { year: 2019, value: 1.025, source: "Forbes" },
      { year: 2020, value: 0.940, source: "Forbes" },
      { year: 2021, value: 1.0,   source: "Forbes" },
      { year: 2022, value: 1.1,   source: "Forbes" },
      { year: 2023, value: 1.2,   source: "Forbes" },
      { year: 2024, value: 1.25,  source: "Forbes" },
    ],
    revenue: { estimate: 330, year: 2024, source: "Forbes / CNBC", operatingIncome: 41 },
    transactions: [
      { year: 1967, price: 0.008, buyer: "Francis Dale / group", seller: "Powel Crosley Jr. estate", notes: "Dale group purchased from Crosley estate for $7.8M; franchise had been with the Crosley family since 1934" },
      { year: 1973, price: 0.012, buyer: "Louis Nippert (increased control)", seller: "Various minority holders", notes: "Nippert family consolidated control; owned through to 1984" },
      { year: 1984, price: 0.018, buyer: "Marge Schott", seller: "Nippert estate / group", notes: "$18M acquisition; Schott's ownership ended in 1999 amid public controversies; managed by Bob Castellini and Carl Lindner Jr. as limited partners during Schott era" },
      { year: 2006, price: 0.270, buyer: "Bob Castellini-led group", seller: "Marge Schott estate / limited partners", notes: "Castellini group paid $270M; Bob Castellini became managing general partner; Phil Castellini later became president/COO; Bob Castellini passed away January 2024" },
    ],
    stadium: {
      name: "Great American Ball Park",
      yearBuilt: 2003,
      capacity: 42319,
      ownershipModel: "Owned by Hamilton County (Cincinnati); Reds operate under long-term lease; stadium financed primarily with public funds from Hamilton County sales tax",
      teamOwnsLand: false,
      publicSubsidy: 280,
      privateFinancing: 50,
      namingRightsDeal: { sponsor: "Great American Insurance Company", annualValue_M: 2.5, totalValue_M: 75, expiryYear: 2033, notes: "30-year/$75M deal signed 2002 when stadium opened; $2.5M/yr; Great American Insurance is Cincinnati-based, so deal has strong local ties; one of the lower-value naming rights deals in MLB" },
      nonGameRevenue: "Ohio River waterfront location provides scenic venue appeal for concerts and events; limited non-baseball event portfolio relative to peers; county-owned structure captures most real estate upside",
      newStadiumPlans: null,
    },
    media: {
      localTVDeal: "Bally Sports Ohio / Diamond Sports Group (in Chapter 11 bankruptcy restructuring 2023-2024); Reds among teams most exposed to RSN collapse; exploring direct-to-consumer streaming alternatives; Cincinnati market smaller than most MLB markets",
      streamingNotes: "Apple TV+ (Friday night games), MLB.TV; local TV situation under restructuring",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Phil Castellini (president / managing partner) / Castellini family",
      ownerNetWorth: "Castellini family: est. ~$500M+ (produce distribution, real estate)",
      ownerBackground: "Bob Castellini was a major produce distribution businessman (Castellini Company) who led the 2006 acquisition for $270M. Bob Castellini served as managing general partner and chairman until his passing in January 2024. Son Phil Castellini (president/COO since 2016) assumed managing partner role. Carl Lindner Jr. (Great American Insurance) was a co-investor. The Reds are historically one of baseball's oldest franchises (1882 NL charter member) but have struggled to compete as a small-market team without significant payroll investment",
      acquisitionYear: 2006,
      acquisitionPrice: 0.270,
      currentValuation: 1.25,
      impliedReturn: "~4.6x in 18 years (~9% CAGR); below-median MLB appreciation reflecting small-market constraints and limited stadium control",
      ownershipGroup: [
        { name: "Phil Castellini", role: "president / managing partner", pct: null },
        { name: "Castellini family", role: "majority ownership group", pct: null },
        { name: "Carl Lindner III (Great American Insurance)", role: "minority investor", pct: null },
      ],
      institutionalInvestors: "No current PE or institutional investors",
      otherBusinessInterests: "Castellini family: Castellini Company (produce distribution, one of North America's largest); Carl Lindner III: Great American Insurance Group",
    },
    brand: {
      socialMedia: { instagram: "~1.4M", twitter: "~900K", facebook: "~2.8M" },
      merchandiseNotes: "Mid-tier MLB merchandise performer; Big Red Machine legacy (1970s) provides historical brand; Elly De La Cruz and Hunter Greene driving new merchandise interest with young, exciting roster; Cincinnati is a smaller market with passionate core fanbase",
      internationalFanbase: "Dominican Republic following via Elly De La Cruz; Japanese interest via Shogo Akiyama (former Red); limited broader international following",
      notableSponsorships: ["Great American Insurance (stadium naming)", "Procter & Gamble (Cincinnati HQ)", "Kroger", "Fifth Third Bank", "Western & Southern Financial"],
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Elly De La Cruz — 10yr/$175M extension (2025), $17.5M AAV through 2034; 2023-24 breakout as one of baseball's most exciting young players (MLB's first 30-30-30-30 player)",
      starContracts: [
        { player: "Elly De La Cruz", position: "SS", aav: 17.5, contractNote: "10yr/$175M extension (2025), through 2034; signed at age 22 after back-to-back dynamic seasons" },
        { player: "Hunter Greene", position: "SP", aav: 11.0, contractNote: "Extension signed locking in ace-level starter; one of MLB's hardest-throwing starters" },
      ],
    },
    analystNotes: "The Reds represent MLB's most compelling small-market development story: Elly De La Cruz ($175M, age 22) and Hunter Greene form one of the most exciting young cornerstone duos in baseball, anchored by a team-friendly deal that positions Cincinnati for a competitive window through 2034 at below-market costs. The franchise's bull case is structural: a small-market team with real talent locked in on club-friendly terms, positioned to compete in a rebuilding NL Central. The bear case is also structural: Hamilton County owns the stadium (no land upside), the RSN situation is uncertain post-Diamond bankruptcy, and the Cincinnati market generates lower revenue relative to its on-field roster investment than any other franchise in this analysis.",
  },

  "Milwaukee Brewers": {
    valuationHistory: [
      { year: 2019, value: 1.03,  source: "Forbes" },
      { year: 2020, value: 0.975, source: "Forbes" },
      { year: 2021, value: 1.025, source: "Forbes" },
      { year: 2022, value: 1.2,   source: "Forbes" },
      { year: 2023, value: 1.4,   source: "Forbes" },
      { year: 2024, value: 1.61,  source: "Forbes" },
    ],
    revenue: { estimate: 337, year: 2024, source: "Forbes / CNBC", operatingIncome: 29 },
    transactions: [
      { year: 1970, price: 0.010, buyer: "Bud Selig-led group", seller: "Seattle Pilots (bankruptcy)", notes: "Selig group purchased bankrupt Seattle Pilots for $10.8M and relocated to Milwaukee; Selig became MLB Commissioner in 1992 (in role through 2015) while retaining team ownership through family trust" },
      { year: 2005, price: 0.223, buyer: "Mark Attanasio-led group", seller: "Selig family trust", notes: "Attanasio group (Crescent Capital co-founder) paid $223M; Selig's family trust sold as Selig prepared to fully assume Commissioner role; MLB had required divestiture" },
    ],
    stadium: {
      name: "American Family Field",
      yearBuilt: 2001,
      capacity: 41900,
      ownershipModel: "Southeast Wisconsin Professional Baseball Park District (public entity) owns the stadium; Brewers operate under long-term lease; stadium has retractable roof, one of six in MLB; publicly financed via Wisconsin state lottery funds and stadium district taxes",
      teamOwnsLand: false,
      publicSubsidy: 310,
      privateFinancing: 90,
      namingRightsDeal: { sponsor: "American Family Insurance", annualValue_M: 4.7, totalValue_M: 117.5, expiryYear: 2040, notes: "25-year/$117.5M deal signed 2021 (~$4.7M/yr); renamed from Miller Park (1996-2021); MillerCoors had the naming rights from opening; new state agreement includes $290M toward future stadium replacement or major renovation" },
      nonGameRevenue: "Retractable roof enables concerts and year-round events in Wisconsin climate; stadium district captures some revenue; limited mixed-use development adjacent to stadium; Milwaukee market smaller than most MLB cities constrains event demand",
      newStadiumPlans: "Wisconsin approved $290M state contribution in 2023 toward either a major renovation of American Family Field or a new stadium; Brewers committed $100M; deal includes lease extension through 2043",
    },
    media: {
      localTVDeal: "Bally Sports Wisconsin / Diamond Sports Group (in Chapter 11 bankruptcy restructuring 2023-2024); Milwaukee is one of the smallest TV markets in MLB, making RSN economics particularly challenging; team exploring direct streaming alternatives",
      streamingNotes: "Apple TV+ (Friday night games), MLB.TV; Wisconsin market has limited regional broadcast depth",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)",
    },
    ownership: {
      primaryOwner: "Mark Attanasio (principal owner / chairman)",
      ownerNetWorth: "~$1B est. (Crescent Capital Group)",
      ownerBackground: "Mark Attanasio co-founded Crescent Capital Group (high-yield credit investment management) and purchased the Brewers from the Bud Selig family trust in 2005 for $223M. Attanasio has invested significantly in payroll relative to market size — including the Christian Yelich $215M extension (2019) — and turned the Brewers into consistent playoff contenders. Has also invested in ancillary businesses including the Milwaukee Admirals (AHL) and Real Salt Lake (MLS, sold 2024)",
      acquisitionYear: 2005,
      acquisitionPrice: 0.223,
      currentValuation: 1.61,
      impliedReturn: "~7.2x in 19 years (~11% CAGR); strong appreciation for a small-market team, driven by consistent competitiveness and solid operating management",
      ownershipGroup: [
        { name: "Mark Attanasio", role: "principal owner / chairman", pct: null },
        { name: "Various limited partners", role: "minority investors", pct: null },
      ],
      institutionalInvestors: "No major PE or institutional investors; Attanasio-controlled",
      otherBusinessInterests: "Crescent Capital Group (credit investment management, AUM ~$45B); previously owned Real Salt Lake MLS (sold 2024); Milwaukee Admirals (AHL)",
    },
    brand: {
      socialMedia: { instagram: "~1.6M", twitter: "~850K", facebook: "~2.5M" },
      merchandiseNotes: "Mid-tier MLB merchandise performer; Christian Yelich jersey-seller during peak years; Milwaukee is a passionate smaller market; Brewers have built strong regional identity; Jackson Chourio (debut 2024) is emerging merchandise driver",
      internationalFanbase: "Limited; Willy Adames (Dominican Republic) and other Latin players provide modest international following; primarily regional Wisconsin/Midwest fanbase",
      notableSponsorships: ["American Family Insurance (stadium naming)", "BMO (formerly BMO Harris)", "MillerCoors (historic stadium naming)", "Kwik Trip", "Harley-Davidson"],
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Christian Yelich — 9yr/$215M extension (2019), $23.9M AAV through 2028; 2018 NL MVP, 2019 NL MVP runner-up",
      starContracts: [
        { player: "Christian Yelich", position: "LF", aav: 23.9, contractNote: "9yr/$215M extension (2019), through 2028; signed after back-to-back NL MVP/runner-up; club-friendly deal for first few years that became expensive as Yelich declined post-2019" },
        { player: "Jackson Chourio", position: "OF", aav: 7.3, contractNote: "8yr/$82M extension (2023), through 2030; signed before MLB debut as top prospect; AAV rises significantly in later years" },
        { player: "Freddy Peralta", position: "SP", aav: 10.5, contractNote: "5yr/$52.5M extension (2022), through 2026; consistent starter with strikeout ability" },
      ],
    },
    analystNotes: "The Brewers are the most efficiently run small-market franchise in the NL Central: five playoff appearances in seven seasons under Attanasio, driven by elite pitching development and strong player procurement rather than premium payroll. Jackson Chourio's 8yr/$82M pre-debut extension (2023) mirrors the Acuña model — a franchise bet on a generational talent at below-market entry cost. The $290M state-backed stadium deal (2023) provides long-term stability and capital flexibility. The primary headwind is the RSN crisis: Bally Sports Wisconsin (Diamond Sports) bankruptcy impacts local media revenue in an already-small market, and the Yelich contract ($23.9M AAV through 2028) has aged poorly as his production has declined from MVP levels, limiting roster construction around him.",
  },

"Pittsburgh Pirates": {
    valuationHistory: [
      { year: 2019, value: 1.07, source: "Forbes" },
      { year: 2020, value: 1.20, source: "Forbes" },
      { year: 2021, value: 1.25, source: "Forbes" },
      { year: 2022, value: 1.32, source: "Forbes" },
      { year: 2023, value: 1.32, source: "Forbes" },
      { year: 2024, value: 1.32, source: "Forbes" },
    ],
    revenue: { estimate: 309, year: 2023, source: "Forbes", operatingIncome: 68 },
    transactions: [
      { year: 1996, price: 0.092, buyer: "Kevin McClatchy (lead) / Nutting family (minority)", seller: "Douglas Danforth estate group", notes: "McClatchy assembled investor group that included the Nutting family of Ogden Newspapers; Nuttings progressively increased stake through early 2000s" },
      { year: 2007, price: null, buyer: "Bob Nutting (Nutting family / Ogden Newspapers)", seller: "Kevin McClatchy (controlling interest)", notes: "Bob Nutting formally took over as controlling owner; franchise remained in Nutting family hands as McClatchy transitioned out; no disclosed transaction price as internal ownership shift" }
    ],
    stadium: {
      name: "PNC Park",
      yearBuilt: 2001,
      capacity: 38362,
      ownershipModel: "owned by Pittsburgh Sports & Exhibition Authority (SEA); Pirates lease under a long-term agreement with nominal annual rent of ~$200,000; SEA is a public authority funded by Pennsylvania state, Allegheny County, and the City of Pittsburgh",
      teamOwnsLand: false,
      publicSubsidy: 172,
      privateFinancing: 44,
      namingRightsDeal: { sponsor: "PNC Financial Services Group (PNC Bank)", annualValue_M: 2.0, totalValue_M: null, expiryYear: null, notes: "PNC Bank naming rights deal signed 1999 before opening; initial 20-year deal at ~$30M total; renewed and extended; annual value modest by MLB standards at ~$2M/yr" },
      nonGameRevenue: "SEA retains most venue economics; Pirates capture some game-day premium seating and hospitality; PNC Park widely regarded as one of baseball's best ballparks with Pittsburgh skyline views, generating premium tourism/game-day spend even for a small-market team",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "SportsNet Pittsburgh (joint venture with Pittsburgh Penguins, operated in partnership with NESN/Fenway Sports Group); SNP 360 direct-to-consumer streaming at $21.99/month launched 2024; moved away from Diamond Sports/AT&T SportsNet Pittsburgh",
      streamingNotes: "SNP 360 subscription available in Pirates territory (PA, WV, eastern OH); MLB.TV out-of-market; Apple TV+ Friday Night Baseball",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Bob Nutting (Nutting family / Ogden Newspapers)",
      ownerNetWorth: "~$1.5B est. (Ogden Newspapers private media empire)",
      ownerBackground: "Nutting family built wealth through Ogden Newspapers, one of the largest private newspaper groups in the US. Bob Nutting became controlling owner in 2007 after the Nuttings incrementally acquired stake from Kevin McClatchy since 1996. Controversial tenure as Pirates fans pushed for higher payroll investment.",
      acquisitionYear: 2007,
      acquisitionPrice: null,
      currentValuation: 1.32,
      impliedReturn: "Nuttings' entry basis was part of a $92M total 1996 purchase; franchise stagnated in value at $1.32B from 2022-2024, underperforming MLB peers significantly",
      ownershipGroup: [
        { name: "Bob Nutting", role: "controlling owner / chairman", pct: null },
        { name: "Nutting family (Ogden Newspapers)", role: "majority ownership group", pct: null }
      ],
      institutionalInvestors: "No known institutional investors; purely private family ownership",
      otherBusinessInterests: "Ogden Newspapers (80+ newspapers in 14 states); West Virginia University football stadium naming rights"
    },
    brand: {
      socialMedia: { instagram: "~500K", twitter: "~600K", facebook: "~1.1M" },
      merchandiseNotes: "Small-market team with limited national merchandise presence; Pittsburgh loyalty strong locally; Roberto Clemente legacy merchandise perennial seller; Paul Skenes rookie cards drove hobby demand in 2024",
      internationalFanbase: "Limited; Roberto Clemente remains iconic in Puerto Rico and Latin America",
      notableSponsorships: ["PNC Bank (stadium naming)", "UPMC (health system)", "Iron City Beer", "Giant Eagle"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Paul Skenes — service-time controlled through ~2029; no extension signed as of 2025; 2024 NL Rookie of the Year, sub-2.00 ERA in debut season",
      starContracts: [
        { player: "Bryan Reynolds", position: "CF/LF", aav: 17.75, contractNote: "6yr/$106.5M (Feb 2022), through 2027; hometown-discount deal for small-market star" },
        { player: "Ke'Bryan Hayes", position: "3B", aav: 8.75, contractNote: "8yr/$70M (Mar 2021), through 2028; Gold Glove caliber, bat has underperformed" },
        { player: "Paul Skenes", position: "SP", aav: null, contractNote: "Pre-arb; no extension as of 2025; franchise cornerstone" }
      ]
    },
    analystNotes: "The Pirates are MLB's clearest value trap: a beautiful park, a generational pitching talent in Paul Skenes, and a Forbes valuation that has stagnated at $1.32B for three straight years — lagging the ~12% annual MLB average appreciation. The Nutting family's Ogden Newspapers ownership structure creates an incentive to run the franchise as a cash generator (68M operating income on $309M revenue = 22% margin is near league high), rather than maximize on-field investment. A Skenes extension would de-risk the franchise's only genuine asset; failure to sign him would reset the valuation narrative to one of extractive ownership in a small market with limited room to compensate."
  },

  "St. Louis Cardinals": {
    valuationHistory: [
      { year: 2019, value: 1.90, source: "Forbes" },
      { year: 2020, value: 2.00, source: "Forbes" },
      { year: 2021, value: 2.20, source: "Forbes" },
      { year: 2022, value: 2.35, source: "Forbes" },
      { year: 2023, value: 2.50, source: "Forbes" },
      { year: 2024, value: 2.55, source: "Forbes" },
    ],
    revenue: { estimate: 372, year: 2023, source: "Forbes", operatingIncome: 57 },
    transactions: [
      { year: 1953, price: null, buyer: "Anheuser-Busch (August Busch Sr.)", seller: "Fred Saigh (forced sale under tax fraud charges)", notes: "Anheuser-Busch purchased Cardinals to keep franchise in St. Louis; AB owned team for 43 years and is why the current stadium is named Busch" },
      { year: 1995, price: 0.150, buyer: "William DeWitt Jr.-led group", seller: "Anheuser-Busch", notes: "DeWitt assembled ownership group that included Fred Hanser, Andrew Baur, and others; $150M purchase ended AB's 43-year ownership; one of the best franchise investments in MLB history, now valued at $2.55B" }
    ],
    stadium: {
      name: "Busch Stadium",
      yearBuilt: 2006,
      capacity: 44494,
      ownershipModel: "owned by St. Louis Cardinals LP (team-owned); one of the few MLB stadiums majority-privately financed and team-owned since opening; Cardinals also developed surrounding Ballpark Village entertainment district",
      teamOwnsLand: true,
      publicSubsidy: 45,
      privateFinancing: 320,
      namingRightsDeal: { sponsor: "Anheuser-Busch InBev (Busch brand)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Naming rights retained by AB InBev as legacy arrangement honoring the Busch family heritage; financial terms not disclosed publicly; effectively a non-cash recognition deal given franchise history" },
      nonGameRevenue: "Ballpark Village (phases I and II complete) adds year-round entertainment, dining, and live music adjacent to stadium; Cardinals capture revenue from bars, restaurants, and event space in the development; significant non-game revenue multiplier vs. a standalone ballpark",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Midwest (Diamond Sports Group/Sinclair); ~$73M local TV revenue in 2024; Cardinals re-upped with Diamond despite bankruptcy proceedings; outcome of Diamond restructuring may alter future local deal terms",
      streamingNotes: "Bally Sports+ streaming app in territory; MLB.TV out-of-market; Apple TV+ Friday Night Baseball nationally",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "William (Bill) DeWitt Jr.",
      ownerNetWorth: "~$2.5B est.; valuation largely concentrated in Cardinals franchise",
      ownerBackground: "DeWitt family has deep baseball roots: father Bill DeWitt Sr. was GM of the Yankees and Reds. Bill Jr. led the 1995 purchase from Anheuser-Busch for $150M in a group including Fred Hanser and Andrew Baur. Delivered multiple World Series rings (2006, 2011) and has overseen one of the best-run mid-market franchises in baseball. Bill DeWitt III increasingly involved in day-to-day operations.",
      acquisitionYear: 1995,
      acquisitionPrice: 0.150,
      currentValuation: 2.55,
      impliedReturn: "~17x in 30 years (~10% CAGR on $150M entry)",
      ownershipGroup: [
        { name: "Bill DeWitt Jr.", role: "managing partner / chairman", pct: null },
        { name: "Bill DeWitt III", role: "president / COO", pct: null },
        { name: "Fred Hanser", role: "limited partner", pct: null },
        { name: "Andrew Baur", role: "limited partner", pct: null }
      ],
      institutionalInvestors: "No institutional investors; family/private LP structure",
      otherBusinessInterests: "Ballpark Village LLC (mixed-use development adjacent to stadium); minor real estate interests"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~1.3M", facebook: "~3.5M" },
      merchandiseNotes: "Strong Midwest fanbase; Cardinals are consistently top-10 in MLB attendance and merchandise; multigenerational fan loyalty in a large regional footprint extending into Arkansas, Tennessee, and southern Illinois",
      internationalFanbase: "Limited international profile; strong domestic reach across the Midwest and South",
      notableSponsorships: ["Anheuser-Busch InBev (stadium naming / historic partner)", "Enterprise (official car)", "Edward Jones", "BJC Healthcare"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Nolan Arenado — 3yr/$66M remaining on original 10yr/$260M deal (signed 2019), ~$32M AAV through 2027; trade rumors circulated in 2025 as team rebuilds",
      starContracts: [
        { player: "Nolan Arenado", position: "3B", aav: 32.0, contractNote: "Remaining years on 10yr/$260M (2019 extension with Colorado); through 2027; perennial Gold Glove; trade demand grew as Cardinals pivoted to rebuild" },
        { player: "Sonny Gray", position: "SP", aav: 25.0, contractNote: "4yr/$100M (Dec 2022), through 2026; consistent NL Cy Young contender-level starter" }
      ]
    },
    analystNotes: "The Cardinals' $150M → $2.55B return is one of MLB's best ownership stories — 30 years of consistent winning, two World Series titles, and a team-owned stadium with Ballpark Village generating ancillary revenue no rent tenant can replicate. The near-term overhang is a rebuild cycle (Goldschmidt and Arenado both aging/expensive) after a decade of playoff relevance; mid-market revenue constraints mean free-agent flexibility is limited. The $73M local TV deal with Diamond Sports survives bankruptcy restructuring but faces renegotiation risk — the Cardinals' next local media arrangement will be the key 2026-2028 valuation variable."
  },

  "Los Angeles Dodgers": {
    valuationHistory: [
      { year: 2019, value: 3.30, source: "Forbes" },
      { year: 2020, value: 3.40, source: "Forbes" },
      { year: 2021, value: 3.57, source: "Forbes" },
      { year: 2022, value: 4.08, source: "Forbes" },
      { year: 2023, value: 4.80, source: "Forbes" },
      { year: 2024, value: 5.45, source: "Forbes" },
    ],
    revenue: { estimate: 850, year: 2023, source: "Forbes / Sportico", operatingIncome: 100 },
    transactions: [
      { year: 1998, price: 0.311, buyer: "News Corporation / Fox Entertainment Group", seller: "O'Malley family", notes: "Rupert Murdoch's Fox bought franchise from the O'Malley family who had owned since Brooklyn; $311M sale ended 50+ years of O'Malley ownership; Fox saw team as content asset for their regional sports networks" },
      { year: 2004, price: 0.430, buyer: "Frank McCourt (Boston real estate developer)", seller: "News Corporation / Fox Entertainment", notes: "McCourt purchased for $430M; controversial ownership era marked by divorce proceedings and MLB commissioner intervention; McCourt put team into bankruptcy in 2011" },
      { year: 2012, price: 2.150, buyer: "Guggenheim Baseball Management (Mark Walter, Stan Kasten, Magic Johnson, Todd Boehly, Peter Guber)", seller: "Frank McCourt (bankruptcy)", notes: "Record $2.15B MLB sale at time; Guggenheim group assembled by Mark Walter outbid multiple parties; Frank McCourt realized a windfall exit from his troubled tenure; Magic Johnson's presence drove initial marketing narrative but Walter was the financial lead" }
    ],
    stadium: {
      name: "Dodger Stadium",
      yearBuilt: 1962,
      capacity: 56000,
      ownershipModel: "team-owned; Walter O'Malley designed and privately financed Dodger Stadium in 1962 for ~$23M; the Dodgers own the stadium, the surrounding Chavez Ravine land, and parking facilities — one of only three MLB teams (with Giants and Cardinals) with full stadium ownership; no rent payments to public entity",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 23,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal; the Dodgers have retained the 'Dodger Stadium' name since 1962; the owned-stadium structure means the franchise captures all venue economics including naming rights optionality worth estimated $20-30M/yr if monetized" },
      nonGameRevenue: "Dodgers capture all venue economics: concerts, events, parking (16,000 spaces), premium clubs, DodgerVision, the outfield pavilion redevelopment project. Stadium also surrounded by team-owned land representing significant real estate optionality. Sportico estimates team-inclusive real estate value at $7.73B.",
      newStadiumPlans: "No new stadium; significant ongoing renovation investment; Dodger Stadium renovations (2019-2025) added premium club spaces and modernized amenities while preserving historic character"
    },
    media: {
      localTVDeal: "SportsNet LA (Spectrum Sports/Charter Communications); 25-year deal signed 2013 totaling $8.35B through 2039 (~$334M/yr at face value; reported annual receipts ~$196M in 2022 due to deal structure); Dodgers co-own SportsNet LA with Charter",
      streamingNotes: "Dodger games on SportsNet LA via Spectrum cable; MLB.TV out-of-market; Apple TV+ Friday Night Baseball; national playoff and World Series on Fox/ESPN/TBS",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Mark Walter (Guggenheim Baseball Management, managing partner)",
      ownerNetWorth: "~$5B+ est. (Guggenheim Partners CEO; institutional asset management)",
      ownerBackground: "Mark Walter founded and leads Guggenheim Partners, a diversified financial services and investment management firm. Led the 2012 acquisition for $2.15B with partners including Magic Johnson, Stan Kasten (team president), Todd Boehly (later sold stake to buy Chelsea FC), and Peter Guber. Walter is also co-owner of the LA Lakers (majority stake acquired 2025) and Chelsea FC, making him one of the most prominent sports ownership figures globally.",
      acquisitionYear: 2012,
      acquisitionPrice: 2.150,
      currentValuation: 5.45,
      impliedReturn: "~2.5x in 13 years (~7% CAGR on $2.15B entry); above-average for a team already expensive at entry",
      ownershipGroup: [
        { name: "Mark Walter", role: "managing partner / governor", pct: null },
        { name: "Stan Kasten", role: "president and CEO", pct: null },
        { name: "Magic Johnson", role: "limited partner (small stake)", pct: null },
        { name: "Peter Guber", role: "limited partner", pct: null }
      ],
      institutionalInvestors: "Guggenheim Partners institutional investors participate through the GBM vehicle; specific LP structure not disclosed",
      otherBusinessInterests: "Guggenheim Partners (asset management); Chelsea FC (English Premier League, co-owner); Los Angeles Lakers (majority owner, 2025)"
    },
    brand: {
      socialMedia: { instagram: "~8M", twitter: "~4.5M", facebook: "~6M" },
      merchandiseNotes: "Top-3 MLB merchandise franchise; Shohei Ohtani signing created unprecedented global demand, adding Japanese market and new casual fans; Dodgers are MLB's #1 team in revenue, surpassing $1B for first time in 2024; LA market of 13M+ population is the largest in MLB",
      internationalFanbase: "Strong and growing; Ohtani signing (2023) drove massive Japanese fanbase expansion and $70M+ in incremental sponsorship from Japanese brands (ANA, Daiso, Kose, Kowa, Toyo Tires, Yakult); also significant Korean, Latin American, and global baseball audiences",
      notableSponsorships: ["All Nippon Airways (ANA — jersey patch, Ohtani-driven)", "Chevron", "Coca-Cola", "Hyundai", "Kia", "State Farm", "Toyota", "Daiso", "Yakult"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Shohei Ohtani — 10yr/$700M (Dec 2023), $70M AAV, through 2033; largest contract in professional sports history; $680M of $700M total deferred to post-contract",
      starContracts: [
        { player: "Shohei Ohtani", position: "DH/SP", aav: 70.0, contractNote: "10yr/$700M (Dec 2023) through 2033; $680M deferred; actual cash AAV ~$2M/yr until 2034; luxury tax figure ~$46M AAV" },
        { player: "Mookie Betts", position: "SS/RF", aav: 36.5, contractNote: "12yr/$365M (Apr 2020) through 2032; $115M deferred; Gold Glove, multiple MVP-caliber seasons" },
        { player: "Freddie Freeman", position: "1B", aav: 27.0, contractNote: "6yr/$162M (Apr 2022) through 2027; $57M deferred; 2020 NL MVP, 2024 WS MVP" },
        { player: "Kyle Tucker", position: "RF", aav: 48.0, contractNote: "5yr/$240M (2025), through 2029; acquired via trade from Houston, re-signed immediately" }
      ]
    },
    analystNotes: "The Dodgers are the first MLB franchise to cross $1B in annual revenue and represent the sport's clearest example of a self-reinforcing premium: team-owned Dodger Stadium (no rent, full event economics), the richest local TV deal in baseball ($8.35B/25yr SportsNet LA), and the Ohtani signing's $70M+ incremental sponsorship haul. The deferred compensation strategy ($1.375B deferred across active contracts) compresses the luxury tax basis while preserving franchise cash flows — a financial innovation unavailable to most competitors. Primary risk is the 2039 SportsNet LA deal in an era of cord-cutting; its face value may not be realized in full if Charter/Spectrum's cable subscriber base continues to erode."
  },

  "San Francisco Giants": {
    valuationHistory: [
      { year: 2019, value: 3.00, source: "Forbes" },
      { year: 2020, value: 3.20, source: "Forbes" },
      { year: 2021, value: 3.50, source: "Forbes" },
      { year: 2022, value: 3.70, source: "Forbes" },
      { year: 2023, value: 3.80, source: "Forbes" },
      { year: 2024, value: 3.80, source: "Forbes" },
    ],
    revenue: { estimate: 480, year: 2023, source: "Forbes / Sportico", operatingIncome: 72 },
    transactions: [
      { year: 1993, price: 0.100, buyer: "Peter Magowan-led group (including Larry Baer, Charles Schwab, Walter Shorenstein)", seller: "Bob Lurie", notes: "Magowan's group saved the Giants from moving to Tampa Bay/St. Petersburg; franchise had been sold to Tampa buyers who were blocked by NL owners; $100M acquisition kept SF franchise in California; Lurie had reportedly wanted ~$115M from Tampa buyers" },
      { year: 2025, price: null, buyer: "Sixth Street Partners (10% minority stake)", seller: "Giants ownership group (partial)", notes: "Giants sold 10% stake to Sixth Street Partners (private equity / credit firm) in March 2025 at undisclosed valuation; proceeds earmarked for Mission Rock development project adjacent to Oracle Park; represents Giants' entry into PE ownership era approved by MLB in 2023" }
    ],
    stadium: {
      name: "Oracle Park",
      yearBuilt: 2000,
      capacity: 41915,
      ownershipModel: "team-owned; Oracle Park was the first privately financed MLB ballpark since Dodger Stadium (1962); the Giants own the stadium and surrounding land; no public subsidy was provided — the Giants financed construction entirely through private equity, bank loans, and naming rights",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 357,
      namingRightsDeal: { sponsor: "Oracle Corporation", annualValue_M: 10.0, totalValue_M: 200.0, expiryYear: 2039, notes: "20-year naming rights deal announced Jan 2019 at $200M total ($10M/yr); previously AT&T Park (2000-2018, $57M/17yr) then SBC Park (briefly); Oracle deal is paid to the team, not a public authority, as team owns the building" },
      nonGameRevenue: "Giants capture all venue economics: concerts (consistently top-10 nationally by concert revenue due to location and outdoor setting), corporate events, premium club hospitality, and the Mission Rock development project (mixed-use waterfront adjacent to Oracle Park — Giants are a development partner alongside Tishman Speyer and the Port of San Francisco)",
      newStadiumPlans: "No new stadium; Mission Rock mixed-use development (Phase 1 delivered 2022) is a multi-decade asset alongside the ballpark site"
    },
    media: {
      localTVDeal: "NBC Sports Bay Area (Giants co-own the RSN with NBCUniversal via a joint venture); generated ~$92M in local TV revenue for the Giants in 2022; unlike Bally Sports/Diamond teams, Giants' co-ownership structure protects against RSN bankruptcy risk",
      streamingNotes: "NBC Sports Bay Area app in territory; MLB.TV out-of-market; Apple TV+ Friday Night Baseball; Giants game broadcast sometimes available on NBC free-to-air",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Charles B. Johnson (primary owner) / Larry Baer (president and CEO)",
      ownerNetWorth: "Charles Johnson: ~$8B (Franklin Templeton Investments founder/chairman); Baer: operating partner",
      ownerBackground: "Peter Magowan-led group saved the franchise from Tampa relocation in 1993; Charles Johnson (Franklin Templeton) became majority owner over time and is now the controlling investor. Larry Baer joined in 1992 and has been the day-to-day leader as CEO/President. The group also includes heirs to other original Magowan investors. Sixth Street Partners bought a 10% stake in 2025.",
      acquisitionYear: 1993,
      acquisitionPrice: 0.100,
      currentValuation: 3.80,
      impliedReturn: "~38x in 32 years (~12% CAGR on $100M entry)",
      ownershipGroup: [
        { name: "Charles B. Johnson", role: "principal owner", pct: null },
        { name: "Larry Baer", role: "president and CEO / limited partner", pct: null },
        { name: "Sixth Street Partners", role: "minority investor (10%)", pct: 10 }
      ],
      institutionalInvestors: "Sixth Street Partners (10%, 2025); MLB PE ownership rules permit up to 20% passive institutional stake",
      otherBusinessInterests: "Franklin Templeton Investments (Charles Johnson); Mission Rock development partnership (Tishman Speyer + Giants)"
    },
    brand: {
      socialMedia: { instagram: "~1.6M", twitter: "~1.4M", facebook: "~2.8M" },
      merchandiseNotes: "Top-5 MLB merchandise franchise; strong Bay Area tech industry fanbase supports premium ticket and sponsorship pricing; three World Series titles (2010, 2012, 2014) in a five-year dynasty cycle remain in cultural memory; Oracle Park widely regarded as the best ballpark in baseball by many metrics",
      internationalFanbase: "Modest international profile; Bay Area tech demographics drive sponsor premiums (Salesforce, Oracle, Google Cloud) more than traditional sports fanbase metrics",
      notableSponsorships: ["Oracle (stadium naming)", "Salesforce", "Google Cloud", "Workday", "Comcast", "Chase (bank)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Logan Webb — 5yr/$90M extension (Mar 2022), $18M AAV, through 2026; Giants ace and homegrown franchise cornerstone",
      starContracts: [
        { player: "Logan Webb", position: "SP", aav: 18.0, contractNote: "5yr/$90M extension (Mar 2022) through 2026; NL Cy Young contender, 200+ innings per year" },
        { player: "Matt Chapman", position: "3B", aav: 18.0, contractNote: "3yr/$54M (Dec 2023) through 2026; Gold Glove third baseman, cornerstone of rebuild" },
        { player: "Jung Hoo Lee", position: "CF", aav: 18.8, contractNote: "6yr/$113M (Jan 2024) through 2029; KBO Korean star; injury-plagued debut 2024" }
      ]
    },
    analystNotes: "The Giants' $100M → $3.8B compounding is MLB's cleanest franchise-value-as-real-estate story: Oracle Park (privately financed, team-owned, concerts/events) is arguably worth $1B+ on its own, with the Mission Rock waterfront development adding a multi-decade real estate optionality that most MLB franchises lack. The co-owned NBC Sports Bay Area RSN provides insulation from the Diamond Sports bankruptcy contagion affecting ~14 other MLB teams. Near-term concern is on-field: three consecutive non-playoff years post-dynasty era (2010-2014) and the core Logan Webb / Matt Chapman window closing without a superstar-level acquisition to anchor the next contention cycle."
  },

  "San Diego Padres": {
    valuationHistory: [
      { year: 2019, value: 1.05, source: "Forbes" },
      { year: 2020, value: 1.10, source: "Forbes" },
      { year: 2021, value: 1.40, source: "Forbes" },
      { year: 2022, value: 1.65, source: "Forbes" },
      { year: 2023, value: 1.78, source: "Forbes" },
      { year: 2024, value: 1.95, source: "Forbes" },
    ],
    revenue: { estimate: 370, year: 2023, source: "Forbes / Sportico", operatingIncome: 28 },
    transactions: [
      { year: 1994, price: 0.080, buyer: "John Moores / Larry Lucchino group", seller: "Tom Werner group", notes: "Moores (software billionaire, BMC Software) and Lucchino (former Orioles/Red Sox exec) bought franchise for $80M and launched the Petco Park project" },
      { year: 2012, price: 0.600, buyer: "Ron Fowler (lead) / Peter Seidler (O'Malley family heir) group", seller: "John Moores", notes: "Fowler/Seidler group paid $600M; Peter Seidler was a grandnephew of Walter O'Malley (who originally moved the Dodgers to LA); family baseball lineage added credibility; Seidler became chairman and driving force for big free-agent spending" },
      { year: 2026, price: 3.900, buyer: "José E. Feliciano / Kwanza Jones", seller: "Seidler family (post-Peter Seidler death Nov 2023)", notes: "Pending sale at ~$3.9B — record MLB franchise sale at time of announcement; Feliciano (Clearlake Capital co-founder) is also a Chelsea FC co-owner alongside Mark Walter; sale represents a 6.5x return on the 2012 $600M purchase in 14 years" }
    ],
    stadium: {
      name: "Petco Park",
      yearBuilt: 2004,
      capacity: 40209,
      ownershipModel: "owned by City of San Diego (Centre City Development Corporation); Padres operate under a long-term lease with the city; Padres responsible for operations and certain capital improvements; stadium embedded in downtown Ballpark District redevelopment zone",
      teamOwnsLand: false,
      publicSubsidy: 301,
      privateFinancing: 153,
      namingRightsDeal: { sponsor: "Petco (pet supply retail)", annualValue_M: 7.7, totalValue_M: null, expiryYear: 2026, notes: "Original 22-year/$60M deal signed 2003 ($2.7M/yr); renegotiated and extended at higher rate; current deal estimated ~$7-8M/yr; Petco is headquartered in San Diego, aligning brand with local community" },
      nonGameRevenue: "Padres own broadcast rights and manage direct distribution deals with local cable/satellite operators; Petco Park's downtown location drives hotel/restaurant tax benefit to city and surrounding Gaslamp Quarter; Padres retain most premium hospitality economics under operating agreement",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Padres own broadcast rights directly; moved away from RSN model; distribute games via direct contracts with local cable/satellite providers and own streaming; generated ~$100M in local TV/streaming revenue in 2024; pioneering model for MLB direct-to-consumer distribution",
      streamingNotes: "Padres own direct streaming rights in territory; simulcast on KFMB free-to-air; MLB.TV out-of-market; Apple TV+ Friday Night Baseball",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Seidler family (Peter Seidler died Nov 2023; John Seidler managing); sale to José Feliciano / Kwanza Jones pending",
      ownerNetWorth: "Peter Seidler est. ~$1.5B at death; Feliciano: $4B+ (Clearlake Capital)",
      ownerBackground: "Ron Fowler and Peter Seidler's group bought for $600M in 2012. Peter Seidler (O'Malley family heir, grandnephew of Walter O'Malley) pushed aggressive spending including Juan Soto trade (2022), Xander Bogaerts signing (2022), and Manny Machado extensions. Seidler died unexpectedly Nov 16, 2023. Family group subsequently negotiated the $3.9B sale to José Feliciano (Clearlake Capital, Chelsea FC co-owner alongside Mark Walter) and Kwanza Jones (philanthropist/investor).",
      acquisitionYear: 2012,
      acquisitionPrice: 0.600,
      currentValuation: 1.95,
      impliedReturn: "~3.2x in 14 years to Forbes valuation; $3.9B sale price = 6.5x return on $600M entry (~14% CAGR)",
      ownershipGroup: [
        { name: "Seidler family", role: "controlling owners (pending sale)", pct: null },
        { name: "Ron Fowler", role: "executive chairman / limited partner", pct: null },
        { name: "José E. Feliciano", role: "incoming controlling owner (deal pending)", pct: null },
        { name: "Kwanza Jones", role: "incoming co-owner (deal pending)", pct: null }
      ],
      institutionalInvestors: "No current institutional investors in MLB-approved structure; Feliciano is PE/institutional background",
      otherBusinessInterests: "Seidler family: O'Malley family real estate interests in California; Feliciano: Clearlake Capital (PE), Chelsea FC co-owner"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~1.0M", facebook: "~1.5M" },
      merchandiseNotes: "Growing brand driven by Tatis Jr. and Machado star power; ranked 2nd in MLB attendance in 2025 (3.4M fans); San Diego's demographic profile (military, cross-border with Tijuana, coastal urban) creates unique fan base; Fernando Tatis Jr.'s suspension (2022) and comeback tested brand resilience",
      internationalFanbase: "Strong and growing Latin American base due to Tatis Jr. (Dominican Republic), Bogaerts (Aruba/Netherlands Antilles), Machado (Dominican Republic); cross-border San Diego-Tijuana market is unique in MLB",
      notableSponsorships: ["Petco (stadium naming)", "Sharp Healthcare", "Motorola (jersey patch)", "Qualcomm", "GEICO"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Fernando Tatis Jr. — 14yr/$340M (Feb 2021), $24.3M AAV, through 2034; missed 2022 (suspension + injury); resurgent 2023-2024",
      starContracts: [
        { player: "Manny Machado", position: "3B", aav: 31.8, contractNote: "11yr/$350M total (original 10yr/$300M + 1yr extension); through 2032; franchise cornerstone and clubhouse leader" },
        { player: "Xander Bogaerts", position: "SS", aav: 25.5, contractNote: "11yr/$280M (Dec 2022) through 2033; former Red Sox captain; moved to SS in SD" },
        { player: "Fernando Tatis Jr.", position: "SS/RF", aav: 24.3, contractNote: "14yr/$340M (Feb 2021) through 2034; missed 2022 season (PED suspension + wrist surgery); resurgent star" }
      ]
    },
    analystNotes: "The pending $3.9B Padres sale to José Feliciano represents a 6.5x return on the 2012 $600M entry — one of the best risk-adjusted returns in recent MLB franchise history, driven by the Peter Seidler era's aggressive star accumulation (Tatis/Machado/Bogaerts locked through 2033-2034) and the team's first-mover advantage in direct broadcast distribution (~$100M local revenue with no RSN middleman). The Feliciano acquisition implies a $3.9B valuation for a team Forbes marked at $1.95B — a 100% premium, reflecting the strategic value of the Padres' owned-media model and the locked-in superstar payroll base as franchise insurance. Key risk: $800M+ in committed contract obligations creates limited payroll flexibility if Tatis Jr. or Bogaerts underperform."
  },

  "Colorado Rockies": {
    valuationHistory: [
      { year: 2019, value: 1.10, source: "Forbes" },
      { year: 2020, value: 1.15, source: "Forbes" },
      { year: 2021, value: 1.30, source: "Forbes" },
      { year: 2022, value: 1.40, source: "Forbes" },
      { year: 2023, value: 1.475, source: "Forbes" },
      { year: 2024, value: 1.475, source: "Forbes" },
    ],
    revenue: { estimate: 310, year: 2023, source: "Forbes", operatingIncome: 42 },
    transactions: [
      { year: 1993, price: 0.095, buyer: "Colorado Baseball Partnership (Coors family / Monfort family / other Denver investors)", seller: "MLB expansion award", notes: "Colorado received MLB expansion franchise for $95M fee; Coors Brewing provided anchor investment and naming rights for Coors Field; Monfort family (JBS USA) was among original investors and progressively acquired control" },
      { year: 2005, price: null, buyer: "Dick Monfort / Charlie Monfort (controlling interest)", seller: "Coors Brewing / other original investors (transition over time)", notes: "Dick and Charlie Monfort formally assumed majority ownership as original Coors/Denver investor group transitioned out; Monforts built wealth through JBS USA (beef processing); no clean single transaction price disclosed" },
      { year: 2025, price: null, buyer: "Greg Penner / Carrie Walton Penner (Broncos owners, ~40% stake)", seller: "Monfort family (partial)", notes: "Walton-Penner group (Denver Broncos owners, Walmart heirs) acquired ~40% minority stake in Rockies; deal implies franchise valuation above Forbes estimate; Monforts retain controlling majority; brings deep-pocketed institutional capital to the franchise" }
    ],
    stadium: {
      name: "Coors Field",
      yearBuilt: 1995,
      capacity: 46897,
      ownershipModel: "owned by Colorado Baseball Stadium District (public stadium authority); Rockies lease under long-term agreement; construction funded through a 0.1% Denver metro sales tax approved by voters in Aug 1990",
      teamOwnsLand: false,
      publicSubsidy: 168,
      privateFinancing: 47,
      namingRightsDeal: { sponsor: "Coors Brewing Company (Molson Coors)", annualValue_M: 1.5, totalValue_M: null, expiryYear: null, notes: "Original naming rights deal with Coors (the founding corporate sponsor) since 1995; terms have not been publicly disclosed but considered below-market given Coors' founding role; stadium name is effectively in perpetuity by convention" },
      nonGameRevenue: "Stadium District captures primary venue economics; Rockies retain game-day premium seating, hospitality, and some events revenue per lease; Coors Field's location in LoDo revitalized the downtown Denver entertainment district and contributed to broader Denver real estate appreciation, though team does not directly capture that upside",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "MLB Local Media (league-operated broadcast entity); previously AT&T SportsNet Rocky Mountain (Diamond Sports Group), which went bankrupt in 2023; Rockies are among the teams whose broadcasts were taken over by MLB's local media operation, generating less than the prior $60-70M RSN deal",
      streamingNotes: "MLB Local Media streaming in territory; MLB.TV out-of-market; Apple TV+ Friday Night Baseball",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Dick Monfort (chairman and CEO) / Charlie Monfort",
      ownerNetWorth: "Dick Monfort: ~$3B est. (JBS USA / beef processing wealth)",
      ownerBackground: "Dick and Charlie Monfort are heirs to the JBS USA meat processing empire (formerly ConAgra beef). The Monforts became controlling Rockies owners in 2005 after incrementally acquiring stakes from the original 1993 expansion investors. Controversial ownership tenure marked by consistent losing, payroll cuts, and the Kris Bryant contract being a notable high-profile miss. Greg and Carrie Penner (Walmart heirs, Denver Broncos owners) acquired ~40% stake in 2025.",
      acquisitionYear: 2005,
      acquisitionPrice: null,
      currentValuation: 1.475,
      impliedReturn: "Original $95M 1993 entry by founding group; Forbes value stagnated at $1.475B from 2023-2024; Walton-Penner 2025 stake purchase implies higher implied valuation",
      ownershipGroup: [
        { name: "Dick Monfort", role: "chairman and CEO", pct: null },
        { name: "Charlie Monfort", role: "co-owner / general partner", pct: null },
        { name: "Greg Penner / Carrie Walton Penner", role: "minority owners (~40%)", pct: 40 }
      ],
      institutionalInvestors: "Walton-Penner group (Walmart family / PE background) has ~40% stake",
      otherBusinessInterests: "JBS USA / beef processing (Monfort family); Denver Broncos (Walton-Penner group)"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~750K", facebook: "~1.3M" },
      merchandiseNotes: "Mid-tier MLB merchandise; Coors Field atmosphere and Rockies purple/black aesthetic have cult following; thin national profile limits cross-market penetration; altitude-affected statistics (Coors Effect) create analytical narrative unique to the franchise",
      internationalFanbase: "Limited; small Latin American following; Coors Field altitude creates its own tourism draw for baseball fans",
      notableSponsorships: ["Coors (stadium naming / founding sponsor)", "Kaiser Permanente", "DISH Network / Sling", "Xfinity"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Ezequiel Tovar — team-controlled through ~2028; homegrown SS prospect emerging as franchise cornerstone in rebuild",
      starContracts: [
        { player: "Kris Bryant", position: "OF/3B", aav: 26.0, contractNote: "7yr/$182M (Mar 2022), through 2028; back injuries have derailed tenure; played fewer than 100 games total 2022-2024; widely viewed as worst free-agent contract of the era" },
        { player: "Ryan McMahon", position: "2B", aav: 11.7, contractNote: "6yr/$70M (Feb 2022) through 2027; consistent Gold Glove-caliber 2B; team's best value contract" }
      ]
    },
    analystNotes: "The Rockies are the clearest cautionary tale in MLB franchise valuation: a $1.475B stagnant price tag for a team that hasn't made the playoffs in five years, plays in the most distorted statistical environment in baseball (Coors Effect), and made the worst large free-agent contract of the era ($182M Bryant). The Walton-Penner minority acquisition signals that Denver's franchise may see fresh capital and ambition — the same family revitalized the Broncos — but the Monforts retain control and have shown limited appetite for aggressive payroll. The RSN collapse (losing Diamond Sports revenue) is a near-term headwind, while Ezequiel Tovar's development is the only genuine valuation optionality the franchise currently offers."
  },

  "Arizona Diamondbacks": {
    valuationHistory: [
      { year: 2019, value: 1.05, source: "Forbes" },
      { year: 2020, value: 1.10, source: "Forbes" },
      { year: 2021, value: 1.20, source: "Forbes" },
      { year: 2022, value: 1.30, source: "Forbes" },
      { year: 2023, value: 1.45, source: "Forbes" },
      { year: 2024, value: 1.60, source: "Forbes" },
    ],
    revenue: { estimate: 320, year: 2023, source: "Forbes", operatingIncome: 35 },
    transactions: [
      { year: 1995, price: 0.130, buyer: "Jerry Colangelo-led group (Arizona expansion)", seller: "MLB expansion award", notes: "Arizona awarded NL expansion franchise in 1995 for $130M expansion fee; Colangelo (NBA Suns executive) built the franchise from scratch; D-backs reached World Series in just their 4th season (2001)" },
      { year: 2004, price: 0.238, buyer: "Ken Kendrick / Jeffrey Royer / Mike Chipman group", seller: "Jerry Colangelo / original investors", notes: "Kendrick-led group acquired controlling interest from Colangelo for ~$238M; Colangelo stayed briefly before transitioning out; Kendrick has been managing general partner since" },
      { year: 2023, price: null, buyer: "Rob Walton (Walmart heir, Denver Broncos co-owner)", seller: "Existing D-backs ownership group (partial)", notes: "Walton purchased ~10% minority stake at implied ~$2B valuation; proceeds used for Chase Field improvements; Walton's investment predates the larger Rockies stake acquisition in 2025" }
    ],
    stadium: {
      name: "Chase Field",
      yearBuilt: 1998,
      capacity: 48633,
      ownershipModel: "owned by Maricopa County; Diamondbacks lease under agreement expiring 2027; retractable roof (only MLB ballpark with a roof in this era besides Marlins and Rangers); Maricopa County and team in negotiations over new stadium or Chase Field renovation",
      teamOwnsLand: false,
      publicSubsidy: 238,
      privateFinancing: 117,
      namingRightsDeal: { sponsor: "Chase (JPMorgan Chase Bank)", annualValue_M: 3.0, totalValue_M: null, expiryYear: null, notes: "Bank One Ballpark at opening (1998); renamed Chase Field in 2005 after Bank One acquisition by JPMorgan Chase; Chase Bank naming rights at ~$3M/yr is below market for a modern deal; lease expiry in 2027 creates naming rights renegotiation opportunity for future stadium" },
      nonGameRevenue: "Maricopa County captures most venue economics; team retains game-day premium seating and some events; retractable roof enables year-round events in desert climate — a structural advantage over open-air parks; new stadium legislation ($500M public funding bill) passed Arizona House in 2025",
      newStadiumPlans: "$500M Arizona state public funding bill for new stadium cleared the Arizona House in 2025, headed to Governor Hobbs; new stadium in Phoenix metro likely if signed; would reset team's venue economics entirely"
    },
    media: {
      localTVDeal: "MLB Local Media (league-operated broadcasts); previously Bally Sports Arizona (Diamond Sports Group), generating ~$68M/yr before Diamond bankruptcy; MLB took over Arizona D-backs broadcasts in 2024; less revenue than prior RSN deal but more sustainable model",
      streamingNotes: "MLB Local Media streaming in territory; MLB.TV out-of-market; Apple TV+ Friday Night Baseball",
      nationalShareNote: "~$57M/team/year from MLB national deals (ESPN through 2028 ~$550M/yr, Fox through 2028 ~$729M/yr, Apple TV+ ~$85M/yr)"
    },
    ownership: {
      primaryOwner: "Ken Kendrick (managing general partner)",
      ownerNetWorth: "~$1.2B est. (2026); Kendrick founded Dataware Instruments and other tech businesses",
      ownerBackground: "Ken Kendrick is a West Virginia native who made his fortune in technology businesses. Purchased controlling interest from Jerry Colangelo for ~$238M in 2004. Overseen the franchise through a World Series appearance (2023), youth development that produced Carlos Correa, Paul Goldschmidt (both moved on), and the current Corbin Carroll / Ketel Marte core. Rob Walton (Walmart / Broncos) owns a ~10% stake since 2023.",
      acquisitionYear: 2004,
      acquisitionPrice: 0.238,
      currentValuation: 1.60,
      impliedReturn: "~6.7x in 21 years (~10% CAGR on $238M entry)",
      ownershipGroup: [
        { name: "Ken Kendrick", role: "managing general partner", pct: null },
        { name: "Jeff Royer", role: "general partner", pct: null },
        { name: "Mike Chipman", role: "general partner", pct: null },
        { name: "Rob Walton", role: "minority investor (~10%)", pct: 10 }
      ],
      institutionalInvestors: "Rob Walton (Walmart / private wealth) holds ~10% PE-style stake; broader ML institutional ownership not present",
      otherBusinessInterests: "Kendrick: technology ventures; Walton: Walmart family investments, Denver Broncos co-owner"
    },
    brand: {
      socialMedia: { instagram: "~800K", twitter: "~800K", facebook: "~1.2M" },
      merchandiseNotes: "Mid-tier MLB merchandise brand; 2023 World Series run (upset of Rangers to reach Series, lost to Rangers) drove merchandise spike; Corbin Carroll NL MVP 2023 is a new marketing cornerstone; serpientes culture (Spanish nickname) drives Latin American fan engagement",
      internationalFanbase: "Growing Latin American fanbase driven by roster diversity; active cross-border marketing in Mexico via proximity to Tucson and border communities",
      notableSponsorships: ["Chase/JPMorgan (stadium naming)", "Salt River Project (energy utility)", "LifeWest Chiropractic", "Avnet"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Corbin Carroll — 8yr/$111M (Jan 2024), $13.875M AAV, through 2031; 2023 NL Rookie of the Year and early 2023 NL MVP Award winner",
      starContracts: [
        { player: "Ketel Marte", position: "2B/CF", aav: 19.4, contractNote: "6yr/$116.5M (Mar 2021) through 2026; consistent All-Star, franchise stalwart" },
        { player: "Corbin Carroll", position: "CF/LF", aav: 13.875, contractNote: "8yr/$111M (Jan 2024) through 2031; pre-arb extension locking in ROY and breakout star through prime years" },
        { player: "Zac Gallen", position: "SP", aav: 12.0, contractNote: "5yr/$60M (Nov 2022) through 2027; D-backs homegrown ace; sub-3.00 ERA franchise starter" }
      ]
    },
    analystNotes: "The Diamondbacks' 2023 World Series run (shocking upset path through Brewers, Dodgers, and Phillies) demonstrated the franchise's ability to punch above its market-size weight via player development and roster construction efficiency — Corbin Carroll, Zac Gallen, and Gabriel Moreno are all homegrown at below-market cost. The Chase Field lease expiry in 2027 is the defining near-term catalyst: a new stadium bill with $500M in public funding advances the franchise toward a revenue-generating venue structure that could add $50-80M in annual revenue, compressing the current valuation gap to Phoenix's market size. The Rob Walton minority investment signals franchise confidence from the same family that revitalized the Broncos."
  },

};