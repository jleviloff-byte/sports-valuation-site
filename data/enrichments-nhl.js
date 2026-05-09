// NHL team enrichments — all 32 teams
// Sources: Forbes, Sportico, CNBC, ESPN, SBJ, Hockey-Reference, PuckPedia, Spotrac
// US national TV: ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028 (~$19M/team/year)
// Canadian teams (Maple Leafs, Canadiens, Senators, Jets, Flames, Oilers, Canucks) receive additional Rogers/Bell/TVA national revenue
export const nhlEnrichments = {
"Boston Bruins": {
    valuationHistory: [
      { year: 2019, value: 0.95, source: "Forbes" },
      { year: 2020, value: 1.05, source: "Forbes" },
      { year: 2021, value: 1.2,  source: "Forbes" },
      { year: 2022, value: 1.5,  source: "Forbes" },
      { year: 2023, value: 1.9,  source: "Forbes" },
      { year: 2024, value: 2.75, source: "Forbes" },
    ],
    revenue: { estimate: 220, year: 2023, source: "Forbes", operatingIncome: 28 },
    transactions: [
      { year: 1975, price: 0.010, buyer: "Jeremy M. Jacobs (Delaware North chairman)", seller: "Storer Broadcasting Company", notes: "Jacobs paid $10M for the franchise; deal included the old Boston Garden; transformative ownership that positioned the Bruins as one of the Original Six's most stable franchises" },
      { year: 2012, price: null, buyer: "Jeremy Jacobs transfers operational control to children", seller: "N/A (internal restructuring)", notes: "Jeremy Jacobs divided his ownership stake among his six children approximately five years before 2017; Charlie Jacobs became CEO of Boston Bruins; Jeremy retains chairman role and veto power; no external transaction" }
    ],
    arena: {
      name: "TD Garden",
      yearOpened: 1995,
      capacity: 17850,
      ownershipModel: "owned and operated by Delaware North (Jacobs family subsidiary); Bruins and Celtics are co-tenants; both teams hold equity interests in the arena ownership vehicle",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 160,
      namingRightsDeal: { sponsor: "TD Bank (TD Group)", annualValue_M: 6, totalValue_M: 119.1, expiryYear: null, notes: "20-year deal signed 2005 at ~$119.1M total; renewed; naming rights revenue paid to Delaware North (arena owner), not directly to the Bruins" },
      nonArenaRevenue: "Delaware North owns the surrounding Hub on Causeway mixed-use development (~1.5M sq ft of office, retail, hotel), a $1.2B co-development with Boston Properties; TD Garden ranked #6 highest-grossing venue worldwide (~200+ events/year); Bruins capture premium seating/suite revenue but venue economics flow primarily to Delaware North",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "NESN (New England Sports Network); Bruins are co-flagship programming alongside Red Sox; 80% owned by Fenway Sports Group (Red Sox owners); 20% owned by Boston Bruins / Delaware North",
      streamingNotes: "NESN+ streaming; national games on ESPN/ABC and TNT",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Jeremy M. Jacobs (chairman) and family / Delaware North",
      ownerNetWorth: "Jacobs family: ~$6B+ (Delaware North is one of the largest food-service/hospitality companies in North America)",
      ownerBackground: "Jeremy Jacobs Sr. purchased the Bruins in 1975 for $10M alongside the old Boston Garden; Delaware North now operates TD Garden and the Hub on Causeway development; ownership transferred operationally to six children ~2017; Charlie Jacobs serves as CEO and is team governor",
      acquisitionYear: 1975,
      acquisitionPrice: 0.010,
      currentValuation: 2.75,
      impliedReturn: "~275x on $10M entry over ~50 years; exceptional even accounting for inflation (~14% nominal CAGR)",
      ownershipGroup: [
        { name: "Jeremy M. Jacobs", role: "chairman / ultimate controlling owner", pct: null },
        { name: "Charlie Jacobs", role: "CEO / governor", pct: null },
        { name: "Jeremy Jacobs Jr.", role: "Delaware North co-owner", pct: null },
        { name: "Louis Jacobs", role: "Delaware North co-owner", pct: null }
      ],
      institutionalInvestors: "No external institutional investors; fully family-controlled through Delaware North",
      otherBusinessInterests: "Delaware North: one of largest global food-service and hospitality companies (~$3.5B revenue); TD Garden / Hub on Causeway; 20% stake in NESN; Keystone Raceway (horse racing); Golden State Warriors arena partnership (Chase Center)"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~1.2M", facebook: "~2.5M" },
      merchandiseNotes: "Original Six franchise with deep New England loyalty; Pastrnak and McAvoy driving fresh merchandise cycle post-Marchand era; Bruins black-and-gold brand among most recognized in NHL",
      internationalFanbase: "Moderate; Original Six brand resonates in Europe; Czech fanbase for David Pastrnak",
      notableSponsorships: ["TD Bank (arena naming)", "Dunkin'", "New Balance", "Geico"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "David Pastrnak — 8yr/$90M ($11.25M AAV), signed 2023, through 2030-31",
      starContracts: [
        { player: "David Pastrnak", position: "RW", aav: 11.25, contractNote: "8yr/$90M (2023), through 2030-31; 6th-richest NHL deal at signing" },
        { player: "Charlie McAvoy", position: "D", aav: 9.5, contractNote: "8yr/$76M (2022), through 2029-30; franchise defenseman" }
      ]
    },
    analystNotes: "The Bruins' $2.75B Forbes 2024 valuation reflects a franchise with structurally superior economics: Delaware North's ownership of TD Garden and the surrounding Hub on Causeway mixed-use development means the Jacobs family captures both team and real estate appreciation — a compounding flywheel most NHL owners lack. The 20% NESN stake adds a media distribution margin on top. The primary risk is succession: Jeremy Jacobs Sr. is in his 80s and the ownership structure is a family holding with veto-power concentration; any restructuring or sale would be the largest NHL transaction in history at current valuations."
  },

  "Buffalo Sabres": {
    valuationHistory: [
      { year: 2019, value: 0.60, source: "Forbes" },
      { year: 2020, value: 0.63, source: "Forbes" },
      { year: 2021, value: 0.70, source: "Forbes" },
      { year: 2022, value: 0.75, source: "Forbes" },
      { year: 2023, value: 0.75, source: "Forbes" },
      { year: 2024, value: 0.85, source: "Forbes" },
    ],
    revenue: { estimate: 125, year: 2023, source: "Forbes", operatingIncome: -8 },
    transactions: [
      { year: 2011, price: 0.189, buyer: "Terry and Kim Pegula", seller: "Tom Golisano", notes: "Pegula paid $189M (some sources cite $170M) for the Sabres; at the time a record for an NHL franchise; Pegula made his fortune in natural gas fracking (East Resources, sold to Royal Dutch Shell in 2010 for ~$4.7B); he also owns the NFL's Buffalo Bills (purchased 2014 for $1.4B)" }
    ],
    arena: {
      name: "KeyBank Center",
      yearOpened: 1996,
      capacity: 19070,
      ownershipModel: "Erie County/City of Buffalo own the arena; Pegula Sports & Entertainment operates under a long-term lease through September 2031; Pegula PSE manages the facility and retains operational economics",
      teamOwnsLand: false,
      publicSubsidy: 122,
      privateFinancing: 45,
      namingRightsDeal: { sponsor: "KeyBank", annualValue_M: 5, totalValue_M: null, expiryYear: null, notes: "KeyBank naming rights (formerly HSBC Arena, First Niagara Center); multi-year deal; revenue retained by facility ownership/operating agreement; Sabres exploring significant public funding for future arena upgrades" },
      nonArenaRevenue: "Pegula Sports & Entertainment also manages the arena's event business and non-hockey programming; arena renovation discussions ongoing with state/county for significant public capital investment",
      newArenaPlans: "Sabres engaged lobbying firm (Ostroff Associates) to advocate for state funding for major KeyBank Center renovations; lease through 2031 with potential for major public-funded upgrade package thereafter"
    },
    media: {
      localTVDeal: "MSG Network (MSG Sports & Entertainment); Sabres games broadcast regionally on MSG Network and MSG+",
      streamingNotes: "ESPN+ and NHL.tv streaming for out-of-market; MSG+ streaming app",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Terry and Kim Pegula",
      ownerNetWorth: "~$6.8B (Forbes 2024)",
      ownerBackground: "Terry Pegula founded East Resources, a natural gas company; sold to Royal Dutch Shell in 2010 for ~$4.7B; purchased Sabres in 2011 for $189M, then NFL Buffalo Bills in 2014 for $1.4B; combined sports portfolio valued at ~$5B+; Kim Pegula is co-owner and was active in team operations before suffering a cardiac arrest in June 2022",
      acquisitionYear: 2011,
      acquisitionPrice: 0.189,
      currentValuation: 0.85,
      impliedReturn: "~4.5x on $189M entry over ~14 years; well below market comps due to persistent on-ice failure and Buffalo's small market",
      ownershipGroup: [
        { name: "Terry Pegula", role: "majority owner / governor", pct: null },
        { name: "Kim Pegula", role: "co-owner (health complications since 2022)", pct: null }
      ],
      institutionalInvestors: "No reported external institutional investors; fully family-controlled",
      otherBusinessInterests: "Buffalo Bills (NFL, purchased 2014 for $1.4B, now valued ~$4.6B+); Pegula Sports & Entertainment holding company; natural gas legacy investments"
    },
    brand: {
      socialMedia: { instagram: "~350K", twitter: "~430K", facebook: "~700K" },
      merchandiseNotes: "Small-market franchise; 13-year playoff drought (2011-2023) suppressed merchandise demand; Tage Thompson's emergence as a 50-goal scorer has reinvigorated the fan base",
      internationalFanbase: "Limited; European scouting emphasis (Czech/Slovak players) but minimal international brand presence",
      notableSponsorships: ["KeyBank (arena naming)", "LECOM Health", "New Era (cap manufacturer, Buffalo HQ)", "Rich Products"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Tage Thompson — 7yr/$50M ($7.14M AAV), signed 2022, through 2029-30",
      starContracts: [
        { player: "Tage Thompson", position: "C", aav: 7.14, contractNote: "7yr/$50M signed Aug 2022, through 2029-30; led team with 47 goals in 2023-24" },
        { player: "Jason Zucker", position: "LW", aav: 5.0, contractNote: "1yr/$5M (2023-24); veteran leadership role" }
      ]
    },
    analystNotes: "The Sabres are the textbook example of a small-market NHL franchise trading at a structural discount: 13 consecutive playoff misses through 2022-23 compressed valuation to the point where the Bills ($4.6B NFL) and the Sabres ($850M NHL) represent a ~5x implied market size differential in the same city. Tage Thompson's emergence as a genuine star and the broader NHL valuation surge have provided a floor, but without a playoff run the franchise's revenue growth is capped by a modest 1M-person metro. The arena upgrade discussion (requiring substantial public capital) is the key near-term value catalyst."
  },

  "Detroit Red Wings": {
    valuationHistory: [
      { year: 2019, value: 0.80, source: "Forbes" },
      { year: 2020, value: 0.82, source: "Forbes" },
      { year: 2021, value: 0.95, source: "Forbes" },
      { year: 2022, value: 1.1,  source: "Forbes" },
      { year: 2023, value: 1.5,  source: "Forbes" },
      { year: 2024, value: 2.1,  source: "Forbes" },
    ],
    revenue: { estimate: 175, year: 2023, source: "Forbes", operatingIncome: 18 },
    transactions: [
      { year: 1982, price: 0.008, buyer: "Mike Ilitch (Little Caesars founder)", seller: "Bruce Norris", notes: "Ilitch purchased the team for $8M; under his ownership the Red Wings won 4 Stanley Cups (1997, 1998, 2002, 2008); died February 2017; one of the most transformative ownerships in NHL history" },
      { year: 2017, price: null, buyer: "Chris Ilitch (Ilitch Holdings CEO)", seller: "Mike Ilitch estate (internal transfer)", notes: "Chris Ilitch assumed ownership and control of the Red Wings and Detroit Tigers following his father Mike's death; manages all Ilitch Holdings sports assets including Little Caesars Arena and the District Detroit development" }
    ],
    arena: {
      name: "Little Caesars Arena",
      yearOpened: 2017,
      capacity: 19515,
      ownershipModel: "owned by the Downtown Development Authority (DDA) of Detroit through a public-private structure; Olympia Development (Ilitch Holdings subsidiary) managed construction and operates the arena; Red Wings are anchor tenant; Wings and Pistons (NBA) both play here",
      teamOwnsLand: false,
      publicSubsidy: 324,
      privateFinancing: 539,
      namingRightsDeal: { sponsor: "Little Caesars (Ilitch Holdings)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Little Caesars naming rights are an intra-company deal — Ilitch Holdings owns both the pizza chain and the team; no external cash exchange; deal estimated at ~$5-6M/yr equivalent but functions as brand extension for the Ilitch family businesses" },
      nonArenaRevenue: "District Detroit: $2.5B+ mixed-use development surrounding the arena (office, residential, hotel, retail); Ilitch Holdings captures development economics; 313 Presents joint venture handles live events; LCA is also home to Pistons (NBA), generating additional non-hockey event revenue",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Detroit (Diamond Sports Group / Sinclair Broadcast Group); Red Wings regional rights held by Bally Sports through 2033 but Diamond's bankruptcy restructuring created uncertainty; team exploring direct-to-consumer streaming alternatives",
      streamingNotes: "Bally Sports+ streaming; ESPN+ for national games; Diamond Sports restructuring may accelerate shift to team-controlled streaming",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Chris Ilitch (Ilitch Holdings CEO and president)",
      ownerNetWorth: "Ilitch family: ~$6.9B (Forbes 2024)",
      ownerBackground: "Mike Ilitch founded Little Caesars in 1959, purchased the Red Wings in 1982 for $8M and the Tigers in 1992; built District Detroit real estate empire around Little Caesars Arena; died Feb 2017 at age 87; son Chris Ilitch took over Ilitch Holdings; Ryan Gustafson serves as president/CEO of Ilitch Sports & Entertainment (promoted March 2024)",
      acquisitionYear: 1982,
      acquisitionPrice: 0.008,
      currentValuation: 2.1,
      impliedReturn: "~262x on $8M entry over ~42 years (~14% nominal CAGR); includes significant real estate appreciation via District Detroit",
      ownershipGroup: [
        { name: "Chris Ilitch", role: "owner / governor (Ilitch Holdings CEO)", pct: null },
        { name: "Ilitch Holdings", role: "parent entity (privately held family company)", pct: 100 }
      ],
      institutionalInvestors: "No external investors; 100% Ilitch family-controlled through Ilitch Holdings",
      otherBusinessInterests: "Little Caesars Pizza (global QSR chain, ~$4B+ annual system sales); Detroit Tigers (MLB); Olympia Entertainment (events); District Detroit real estate; Fox Theatre; Comerica Park management; 313 Presents (concert promotion JV)"
    },
    brand: {
      socialMedia: { instagram: "~900K", twitter: "~750K", facebook: "~2.1M" },
      merchandiseNotes: "Original Six franchise with strong national merchandise presence; Red Wings jersey is among the most iconic in sports; rebuild under GM Steve Yzerman (hired 2019) has restored organizational credibility",
      internationalFanbase: "Strong European connection — historically a pipeline for Swedish and Czech talent; global recognition as an Original Six franchise",
      notableSponsorships: ["Little Caesars (arena naming, intra-company)", "Fifth Third Bank (transitioning as Comerica Bank winds down)", "Ticketmaster", "313 Presents partners"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Dylan Larkin — 8yr/$69.6M ($8.7M AAV), signed March 2023, through 2030-31",
      starContracts: [
        { player: "Dylan Larkin", position: "C", aav: 8.7, contractNote: "8yr/$69.6M signed March 2023, through 2030-31; team captain and franchise cornerstone" },
        { player: "Lucas Raymond", position: "RW", aav: 8.0, contractNote: "8yr/$64M extension (2023), through 2031-32; Swedish-born 2021 4th-overall pick" }
      ]
    },
    analystNotes: "The Red Wings' valuation doubled between 2022 and 2024 as the Steve Yzerman rebuild accelerated from teardown to genuine contender ahead of schedule — Larkin, Raymond, and Moritz Seider form one of the youngest elite cores in the NHL. The Little Caesars Arena / District Detroit real estate ecosystem is a structural advantage: Ilitch Holdings captures $2.5B+ in surrounding development value that doesn't appear in team revenue. The primary risk is the Bally Sports Detroit RSN situation: Diamond Sports' bankruptcy puts regional media economics in flux, potentially forcing a direct-streaming pivot that could reduce near-term local media revenue before team-controlled alternatives are mature."
  },

  "Florida Panthers": {
    valuationHistory: [
      { year: 2019, value: 0.50, source: "Forbes" },
      { year: 2020, value: 0.50, source: "Forbes" },
      { year: 2021, value: 0.60, source: "Forbes" },
      { year: 2022, value: 0.70, source: "Forbes" },
      { year: 2023, value: 0.85, source: "Forbes" },
      { year: 2024, value: 1.4,  source: "Forbes" },
    ],
    revenue: { estimate: 155, year: 2023, source: "Forbes", operatingIncome: 12 },
    transactions: [
      { year: 2013, price: 0.250, buyer: "Vincent Viola and Doug Cifu", seller: "Sunrise Sports & Entertainment / previous ownership", notes: "Viola led a group that purchased the franchise for $250M; previous owners had kept the Panthers in financial distress; Viola (founder of Virtu Financial, a HFT firm) recapitalized the franchise and invested heavily in hockey operations and arena improvements" }
    ],
    arena: {
      name: "Amerant Bank Arena",
      yearOpened: 1998,
      capacity: 19250,
      ownershipModel: "owned by Broward County; Panthers operate under a lease and operating agreement; team eliminated $51.5M in remaining arena debt in exchange for a new 9-year lease extension through at least 2033; county pays $25M/yr in tourism tax revenue for capital expenditures",
      teamOwnsLand: false,
      publicSubsidy: 185,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "Amerant Bank", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Renamed from BB&T Center/FLA Live Arena to Amerant Bank Arena in September 2023; undisclosed multi-year deal; prior naming rights history: Broward County Civic Arena (1998), Office Depot Center (1999-2005), BankUnited Center (2009), BB&T Center (2012), FLA Live Arena (2021), Amerant (2023)" },
      nonArenaRevenue: "Panthers retain operational economics from the arena; county tourism tax of $25M/yr for capital expenditures provides significant public subsidy for building maintenance; no surrounding real estate development comparable to other franchises",
      newArenaPlans: "Lease extended through 2033; no announced new arena plans; Panthers paid off $51.5M in county arena debt as part of new deal"
    },
    media: {
      localTVDeal: "Bally Sports Florida (Diamond Sports Group / Sinclair); regional rights through ~2030; Diamond bankruptcy created uncertainty; Panthers also exploring streaming options in South Florida market",
      streamingNotes: "Bally Sports+ streaming; NHL.tv for out-of-market; ESPN+ for national games",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Vincent Viola (founder, Virtu Financial HFT firm)",
      ownerNetWorth: "~$6.1B (Forbes 2024)",
      ownerBackground: "Viola founded Virtu Financial, a high-frequency trading firm; graduated from West Point and is a veteran; served briefly as Army Secretary nominee under Trump (withdrew 2017); purchased the Panthers for $250M in 2013; vice chairman Doug Cifu co-owns; transformed Panthers from distressed asset to back-to-back Stanley Cup champions (2023 Final, 2024 Stanley Cup)",
      acquisitionYear: 2013,
      acquisitionPrice: 0.250,
      currentValuation: 1.4,
      impliedReturn: "~5.6x on $250M entry over ~11 years; back-to-back Finals runs (2023 runner-up, 2024 champion) drove significant valuation inflection",
      ownershipGroup: [
        { name: "Vincent Viola", role: "majority owner / governor", pct: null },
        { name: "Doug Cifu", role: "vice chairman / co-owner", pct: null }
      ],
      institutionalInvestors: "No reported institutional investors",
      otherBusinessInterests: "Virtu Financial (NASDAQ: VIRT, market-making/HFT firm); West Point and military philanthropy; horse racing interests"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~500K", facebook: "~1.1M" },
      merchandiseNotes: "Two consecutive Stanley Cup Final appearances (2023 runner-up, 2024 champion) created a merchandise surge in South Florida; Tkachuk has become the face of a Florida sports renaissance alongside Dolphins and Heat",
      internationalFanbase: "Growing; Finnish and European players on roster; South Florida's international population drives diverse fan engagement",
      notableSponsorships: ["Amerant Bank (arena naming)", "Celsius Energy Drinks", "Florida Blue", "AutoNation"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Matthew Tkachuk — 8yr/$76M ($9.5M AAV), signed 2022, through 2029-30",
      starContracts: [
        { player: "Matthew Tkachuk", position: "LW", aav: 9.5, contractNote: "8yr/$76M signed 2022, through 2029-30; acquired from Calgary in blockbuster 2022 trade for Jonathan Huberdeau; led Panthers to back-to-back Finals" },
        { player: "Brad Marchand", position: "LW/C", aav: 5.25, contractNote: "6yr/$31.5M signed 2025; acquired from Boston at 2025 trade deadline; Bruins retained 50% of salary" }
      ]
    },
    analystNotes: "The Panthers' $1.4B Forbes 2024 valuation — up from $250M when Viola bought in 2013 — reflects a franchise that has made the most dramatic on-ice turnaround in NHL history, with the 2023 runner-up and 2024 Stanley Cup creating a dual tailwind of brand value and playoff revenue. The structural vulnerability is the Broward County arena arrangement and South Florida's hockey market size: the team ranks in the bottom half of NHL attendance markets and the Bally Sports RSN bankruptcy creates near-term media economics uncertainty. Viola's $51.5M arena debt payoff in exchange for a 2033 lease extension shows a pragmatic approach to managing the landlord relationship, but the franchise won't reach its ceiling without either a new arena deal or a material shift in South Florida hockey culture."
  },

  "Montreal Canadiens": {
    valuationHistory: [
      { year: 2019, value: 1.3,  source: "Forbes" },
      { year: 2020, value: 1.4,  source: "Forbes" },
      { year: 2021, value: 1.7,  source: "Forbes" },
      { year: 2022, value: 2.0,  source: "Forbes" },
      { year: 2023, value: 2.5,  source: "Forbes" },
      { year: 2024, value: 3.1,  source: "Forbes" },
    ],
    revenue: { estimate: 280, year: 2023, source: "Forbes", operatingIncome: 72 },
    transactions: [
      { year: 2009, price: 0.575, buyer: "Geoff, Andrew, and Justin Molson (Molson family)", seller: "George Gillett Jr. / former ownership group", notes: "The Molson family — descendants of the brewery dynasty — purchased the Canadiens, Bell Centre, and Evenko (entertainment subsidiary) for $575M USD; the Molsons had previously sold the team in 2001 but retained a minority stake; this reacquisition reunited the franchise with its historic family" }
    ],
    arena: {
      name: "Bell Centre",
      yearOpened: 1996,
      capacity: 21302,
      ownershipModel: "privately owned by the Montreal Canadiens / Molson family; the Canadiens own and operate Bell Centre outright — one of the few NHL arenas fully owned by the team with no public financing",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 190,
      namingRightsDeal: { sponsor: "Bell Canada (BCE Inc.)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Bell Centre naming rights deal is an ongoing arrangement with Bell Canada; exact annual value undisclosed; estimated C$10-12M/yr equivalent; Bell Canada is also the arena's telecommunications infrastructure provider" },
      nonArenaRevenue: "Evenko (event promoter): Molson ownership includes Evenko, Montreal's largest live entertainment company, capturing concert and event revenue beyond hockey; Bell Centre is also the largest indoor arena in Canada (21,302 capacity) generating premium event economics; in early 2026, Geoff Molson refinanced the Bell Centre for $600M (National Bank mortgage) to capitalize on rising asset values",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "TVA Sports (French-language; Groupe TVA / Quebecor, major rights-holder for francophone Quebec); RDS (French, Bell Media subsidiary); Sportsnet (English); CJAD 800 AM (English radio)",
      streamingNotes: "TVA Sports+ and RDS+ for streaming; NHL.tv for English out-of-market",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN/TNT); Canadian national deal with Rogers Sportsnet C$5.2B through 2026 adds ~C$40-50M/year for Canadian franchises; Canadiens additionally benefit from TVA Sports (Quebecor) rights for French-language Quebec market — among the richest per-team broadcast markets in hockey"
    },
    ownership: {
      primaryOwner: "Geoff Molson (president and CEO) with brothers Andrew and Justin Molson",
      ownerNetWorth: "Molson family: ~$3B+ (Molson Coors Beverage Company; Molson family interests)",
      ownerBackground: "The Molson family founded Molson Brewery in 1786; Molson Coors is one of the world's largest brewing companies; Geoff Molson (cousin to the Coors-Molson line) spearheaded the 2009 reacquisition after the family had previously owned and sold the Canadiens in 2001; Geoff is president and CEO and acts as governor; the Canadiens represent a rare overlap of historic brand stewardship (franchise founded 1909) and a financial family dynasty",
      acquisitionYear: 2009,
      acquisitionPrice: 0.575,
      currentValuation: 3.1,
      impliedReturn: "~5.4x on $575M entry (including Bell Centre) over ~16 years; total package now conservatively worth $3.5B+ (team) + $600M (Bell Centre real estate) = ~$4.1B vs $575M entry",
      ownershipGroup: [
        { name: "Geoff Molson", role: "president, CEO and governor", pct: null },
        { name: "Andrew Molson", role: "co-owner", pct: null },
        { name: "Justin Molson", role: "co-owner", pct: null }
      ],
      institutionalInvestors: "No reported external institutional investors; fully family-controlled",
      otherBusinessInterests: "Evenko (live entertainment / event promotion); Bell Centre real estate; Molson Coors minority family interests; Laval Rocket (AHL affiliate)"
    },
    brand: {
      socialMedia: { instagram: "~1.8M", twitter: "~1.5M", facebook: "~4.2M" },
      merchandiseNotes: "24 Stanley Cups — most in NHL history — sustain global brand recognition; jersey and merchandise sales among NHL's top 3; bilingual market (French/English) creates unique dual-demographic brand strength; last Cup 1993 but historic brand value remains undiminished",
      internationalFanbase: "Strong global presence particularly in Quebec diaspora (France, Belgium, Switzerland); historically popular in Europe; international brand strength second only to Maple Leafs among Canadian franchises",
      notableSponsorships: ["Bell Canada (arena naming)", "Molson (jersey patch, family-owned)", "Desjardins Group", "Canadian Tire"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Cole Caufield — 8yr/$62.8M ($7.85M AAV), signed June 2023, through 2030-31",
      starContracts: [
        { player: "Cole Caufield", position: "RW", aav: 7.85, contractNote: "8yr/$62.8M signed June 2023, through 2030-31; elite goal-scorer; American-born franchise centerpiece of the rebuild" },
        { player: "Nick Suzuki", position: "C", aav: 7.875, contractNote: "8yr/$63M (2022 extension), through 2029-30; team captain; key piece of the rebuild" }
      ]
    },
    analystNotes: "The Canadiens trade at a structural premium to most NHL markets because of three compounding advantages: full arena ownership (Bell Centre carrying ~$600M refinanced value), Evenko live entertainment revenues, and Canada's unique hockey-media economics (TVA Sports + Rogers Sportsnet national deals dwarf US equivalents on a per-team basis). The rebuild under GM Kent Hughes and head coach Martin St. Louis (Caufield, Suzuki, Slafkovsky) is widely regarded as legitimate, positioning the franchise for its first Cup run since 1993 within the next 3-5 years — which would be the most powerful single valuation catalyst of any sport given the franchise's global brand. The $600M Bell Centre refinancing in early 2026 is a signal that the Molson family is treating the asset as a financial instrument, not just a sports legacy."
  },

  "Ottawa Senators": {
    valuationHistory: [
      { year: 2019, value: 0.52, source: "Forbes" },
      { year: 2020, value: 0.50, source: "Forbes" },
      { year: 2021, value: 0.55, source: "Forbes" },
      { year: 2022, value: 0.65, source: "Forbes" },
      { year: 2023, value: 0.95, source: "Forbes / implied by Andlauer acquisition" },
      { year: 2024, value: 1.1,  source: "Forbes" },
    ],
    revenue: { estimate: 120, year: 2023, source: "Forbes", operatingIncome: -5 },
    transactions: [
      { year: 2003, price: 0.130, buyer: "Eugene Melnyk", seller: "Rod Bryden / Senators Sports & Entertainment (bankruptcy proceedings)", notes: "Melnyk purchased the team and Canadian Tire Centre together for $130M USD as the Senators emerged from bankruptcy; Melnyk held ownership until his death in March 2022; team passed to his daughters Anna and Olivia Melnyk" },
      { year: 2023, price: 0.950, buyer: "Michael Andlauer (lead) with investor group", seller: "Melnyk estate (Anna and Olivia Melnyk)", notes: "Toronto billionaire Michael Andlauer purchased 90% controlling stake for $950M USD — highest price ever paid for an NHL franchise at time of closing (September 2023); Melnyk daughters retained 10%; Andlauer is founder of Andlauer Healthcare Group, a pharmaceutical logistics company (TSX: AND)" }
    ],
    arena: {
      name: "Canadian Tire Centre",
      yearOpened: 1996,
      capacity: 18652,
      ownershipModel: "arena owned by the Ottawa Senators Hockey Club (transferred through ownership succession); opened as the Palladium in January 1996; originally financed by Rod Bryden through private borrowing (~C$188M) with an Ontario provincial government loan guarantee for the Highway 417 interchange and a $6M federal grant",
      teamOwnsLand: true,
      publicSubsidy: 6,
      privateFinancing: 182,
      namingRightsDeal: { sponsor: "Canadian Tire Corporation", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Renamed Canadian Tire Centre July 1, 2013; multi-year deal of undisclosed value; prior names: The Palladium (1996), Corel Centre (1996-2006), Scotiabank Place (2006-2013); Canadian Tire is a major Canadian retail chain" },
      nonArenaRevenue: "Arena located 16 miles (26 km) from Ottawa downtown — considered a structural disadvantage limiting walk-up traffic and game-day hospitality economics; Senators pursuing new downtown arena at LeBreton Flats",
      newArenaPlans: "The Senators have long sought a new downtown Ottawa arena at LeBreton Flats; discussions with National Capital Commission ongoing; no firm timeline or public funding commitment as of 2025"
    },
    media: {
      localTVDeal: "Sportsnet (Rogers; English); TSN (English); TVA Sports (French-language Quebec market); CFRA 580 AM (radio)",
      streamingNotes: "Sportsnet NOW and TSN Direct streaming; NHL.tv for out-of-market",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN/TNT); Canadian national deal with Rogers Sportsnet + TSN adds ~C$40-50M/year for Canadian franchises"
    },
    ownership: {
      primaryOwner: "Michael Andlauer (Andlauer Healthcare Group founder)",
      ownerNetWorth: "~$2B+ (Andlauer Healthcare Group TSX: AND, ~$1.3B market cap; additional private holdings)",
      ownerBackground: "Michael Andlauer founded Andlauer Healthcare Group, a specialized transportation and logistics company serving Canada's pharmaceutical and healthcare sectors; TSX-listed with ~$1.3B market cap; has been a minority investor in the Montreal Canadiens; the Senators purchase at $950M was the largest NHL franchise sale ever at time of closing; Andlauer's investment group includes 20+ local Ottawa-area businesspeople",
      acquisitionYear: 2023,
      acquisitionPrice: 0.950,
      currentValuation: 1.1,
      impliedReturn: "~16% unrealized gain over ~2 years since closing; early innings of a potential rebuild-and-sale cycle",
      ownershipGroup: [
        { name: "Michael Andlauer", role: "majority owner / governor (90% controlling stake)", pct: 90 },
        { name: "Anna Melnyk", role: "minority owner (Melnyk family retained interest)", pct: 5 },
        { name: "Olivia Melnyk", role: "minority owner (Melnyk family retained interest)", pct: 5 },
        { name: "Ottawa-area investor group", role: "passive minority (20+ local investors)", pct: null }
      ],
      institutionalInvestors: "No institutional investors; local business community minority holders",
      otherBusinessInterests: "Andlauer Healthcare Group (TSX: AND); pharmaceutical cold-chain logistics; prior minority interest in Montreal Canadiens (sold upon Senators purchase per NHL rules)"
    },
    brand: {
      socialMedia: { instagram: "~350K", twitter: "~430K", facebook: "~850K" },
      merchandiseNotes: "Small-market Canadian franchise; strong local loyalty in Ottawa but limited national merchandise reach; Brady Tkachuk's 7yr commitment and on-ice grit have energized the fan base",
      internationalFanbase: "Limited; European prospects developing; Ottawa's smaller national profile limits international brand development",
      notableSponsorships: ["Canadian Tire (arena naming)", "Bell Canada", "TD Bank", "Mitel (technology)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Brady Tkachuk — 7yr/$57.5M ($8.22M AAV), signed Oct 2021, through 2027-28",
      starContracts: [
        { player: "Brady Tkachuk", position: "LW", aav: 8.22, contractNote: "7yr/$57.5M signed Oct 2021, through 2027-28; team captain; son of NHL veteran Keith Tkachuk, brother of Matthew Tkachuk (Panthers)" },
        { player: "Tim Stützle", position: "C/LW", aav: 7.625, contractNote: "8yr/$61M extension (2022), through 2030; German-born 2020 3rd-overall pick; developing as co-star alongside Tkachuk" }
      ]
    },
    analystNotes: "The Senators' $950M Andlauer acquisition — record NHL franchise price at time of sale — reflects Canada's structural premium for hockey assets but looks stretched relative to $1.1B Forbes 2024 for a small-market team still two years from contention. The Canadian Tire Centre's suburban location (26km from downtown) and the ongoing LeBreton Flats new arena discussion represent both the franchise's greatest structural liability and its biggest potential value catalyst: a properly financed new downtown arena with ancillary development rights could add $400-600M in franchise value. Andlauer's 20+ local investor syndicate creates alignment with Ottawa's business community but also potential governance complexity at scale."
  },

  "Tampa Bay Lightning": {
    valuationHistory: [
      { year: 2019, value: 0.65, source: "Forbes" },
      { year: 2020, value: 0.75, source: "Forbes" },
      { year: 2021, value: 1.0,  source: "Forbes" },
      { year: 2022, value: 1.15, source: "Forbes" },
      { year: 2023, value: 1.3,  source: "Forbes" },
      { year: 2024, value: 1.8,  source: "Forbes / implied by Oct 2024 majority sale" },
    ],
    revenue: { estimate: 190, year: 2023, source: "Forbes", operatingIncome: 30 },
    transactions: [
      { year: 2010, price: 0.170, buyer: "Jeff Vinik", seller: "OK Hockey / Palace Entertainment group", notes: "Vinik, a former Fidelity Magellan portfolio manager turned venture capitalist, purchased the Lightning for $170M from a distressed ownership group; transformed the franchise from an arena planning to hold tractor pulls into a perennial Stanley Cup contender" },
      { year: 2024, price: 1.8, buyer: "Doug Ostrover and Marc Lipschultz (Blue Owl Capital co-CEOs)", seller: "Jeff Vinik (majority stake)", notes: "Blue Owl Capital co-CEOs acquired majority ownership in October 2024 at an implied ~$1.8B valuation; Vinik retains a minority stake and will continue running team operations as governor for an additional three years, after which Ostrover and Lipschultz assume control; NHL approved Oct 2024" }
    ],
    arena: {
      name: "Amalie Arena",
      yearOpened: 1996,
      capacity: 19092,
      ownershipModel: "owned by Hillsborough County; Lightning operate under a long-term management agreement through Vinik Sports Group; Vinik has invested $100M+ in private renovations and improvements over his ownership tenure",
      teamOwnsLand: false,
      publicSubsidy: 139,
      privateFinancing: 47,
      namingRightsDeal: { sponsor: "Amalie Oil Company", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Renamed from St. Pete Times Forum to Tampa Bay Times Forum, then Amalie Arena in 2014; multi-year naming rights deal with Tampa-based motor oil company; exact annual value undisclosed; estimated ~$3-4M/yr" },
      nonArenaRevenue: "Water Street Tampa: Vinik's $3.5B+ mixed-use development surrounding Amalie Arena (residential, office, retail, hotel) is one of the largest waterfront urban redevelopment projects in US history; Vinik captures development economics independent of the team; $6.5M outdoor digital video wall added as anchor for the plaza ecosystem",
      newArenaPlans: "Water Street Tampa development continues; no announced arena replacement — ongoing capital improvements under the county-Vinik operating agreement"
    },
    media: {
      localTVDeal: "Bally Sports Sun (Diamond Sports Group / Sinclair; regional rights for Florida market); Diamond bankruptcy has created uncertainty similar to other Bally Sports RSN markets",
      streamingNotes: "Bally Sports+ streaming; ESPN+ for national games; NHL.tv for out-of-market",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Doug Ostrover and Marc Lipschultz (Blue Owl Capital, majority); Jeff Vinik (minority, governor through ~2027)",
      ownerNetWorth: "Vinik: ~$1.5B+; Ostrover/Lipschultz: Blue Owl Capital co-CEOs (Blue Owl NYSE: OWL, ~$25B market cap)",
      ownerBackground: "Jeff Vinik was portfolio manager of Fidelity's Magellan Fund before co-founding Vinik Asset Management; purchased Lightning for $170M in 2010 and turned it into a dynasty (back-to-back Cups 2020/2021); also developed Water Street Tampa, a $3.5B+ waterfront urban neighborhood. Sold majority stake Oct 2024 to Blue Owl Capital co-CEOs Doug Ostrover and Marc Lipschultz at ~$1.8B; transition of governance planned for ~2027",
      acquisitionYear: 2010,
      acquisitionPrice: 0.170,
      currentValuation: 1.8,
      impliedReturn: "Vinik: ~10.6x on $170M entry over ~14 years (~18% CAGR); strong by NHL standards",
      ownershipGroup: [
        { name: "Doug Ostrover", role: "majority owner (Blue Owl Capital co-CEO)", pct: null },
        { name: "Marc Lipschultz", role: "majority owner (Blue Owl Capital co-CEO)", pct: null },
        { name: "Jeff Vinik", role: "minority owner / governor (through ~2027)", pct: null }
      ],
      institutionalInvestors: "Blue Owl Capital itself is a publicly traded alternative asset manager; first major instance of publicly traded PE-backed firm owning an NHL team",
      otherBusinessInterests: "Vinik: Water Street Tampa ($3.5B+ real estate development); Vinik Asset Management (hedge fund). Blue Owl Capital: $200B+ in AUM across credit, GP stakes, and real estate"
    },
    brand: {
      socialMedia: { instagram: "~900K", twitter: "~700K", facebook: "~1.5M" },
      merchandiseNotes: "Back-to-back Stanley Cup wins (2020, 2021) created a sustained merchandise boom in the Tampa Bay market; Kucherov, Point, and Hedman are among the most recognizable names in the NHL; Water Street Tampa development has transformed brand perception from 'hockey in a warm market' to a genuine cultural institution",
      internationalFanbase: "Strong Russian following for Kucherov; Swedish fanbase for Hedman; back-to-back Cups elevated global profile significantly",
      notableSponsorships: ["Amalie Motor Oil (arena naming)", "Crunchyroll", "Publix Super Markets", "Jabil"]
    },
    onField: {
      championshipsLast10Years: 2,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Nikita Kucherov — 8yr/$76M ($9.5M AAV), through 2027-28; 2024 Hart Trophy winner",
      starContracts: [
        { player: "Nikita Kucherov", position: "RW", aav: 9.5, contractNote: "8yr/$76M, through 2027-28; 2024 NHL MVP (Hart Trophy); highest-scoring player in Lightning history; becoming UFA 2027 is a franchise-defining decision point" },
        { player: "Brayden Point", position: "C", aav: 9.5, contractNote: "8yr/$76M extension signed 2022, through 2029-30; elite two-way center; 3x 40-goal scorer" }
      ]
    },
    analystNotes: "The Lightning's $1.8B Oct 2024 majority stake transaction anchors the franchise's floor at 10x+ Jeff Vinik's $170M entry — a return driven equally by hockey operations (back-to-back Cups 2020/2021) and urban real estate (Water Street Tampa $3.5B+ development). The Blue Owl Capital acquisition is historically notable as the first publicly traded PE firm to own an NHL franchise, potentially signaling broader institutional money flows into hockey. The primary risk is the Bally Sports RSN collapse disrupting local media economics and the looming Kucherov UFA situation (2027): retaining the franchise's MVP at market rate while maintaining Cup-competitive payroll under the ~$88M cap ceiling will test GM Julien BriseBois's salary management reputation."
  },

  "Toronto Maple Leafs": {
    valuationHistory: [
      { year: 2019, value: 1.35, source: "Forbes" },
      { year: 2020, value: 1.5,  source: "Forbes" },
      { year: 2021, value: 1.9,  source: "Forbes" },
      { year: 2022, value: 2.1,  source: "Forbes" },
      { year: 2023, value: 2.8,  source: "Forbes" },
      { year: 2024, value: 4.4,  source: "Forbes / Rogers-Bell MLSE transaction implied" },
    ],
    revenue: { estimate: 310, year: 2023, source: "Forbes / MLSE disclosed", operatingIncome: 95 },
    transactions: [
      { year: 2012, price: null, buyer: "Rogers Communications + Bell Canada (each ~37.5%)", seller: "Ontario Teachers' Pension Plan and others (majority stake in MLSE)", notes: "Rogers and Bell together purchased majority control of Maple Leaf Sports & Entertainment, the holding company that owns the Maple Leafs, Raptors, TFC, and Marlies; Ontario Teachers' had owned MLSE since 1994; Tanenbaum family retained ~25%; no precise public price disclosed but deal valued MLSE in C$2B+ range" },
      { year: 2024, price: 3.5, buyer: "Rogers Communications (purchased Bell's 37.5% stake)", seller: "Bell Canada (BCE Inc.)", notes: "September 2024: Rogers announced CA$4.7B (~US$3.5B) purchase of BCE's 37.5% MLSE stake, valuing MLSE at CA$12.5B (~US$9.3B); deal closed July 2025 after regulatory approvals; Rogers now holds 75% of MLSE; Tanenbaum family retains 25% with Rogers holding an option to purchase remaining stake in 2026" }
    ],
    arena: {
      name: "Scotiabank Arena",
      yearOpened: 1999,
      capacity: 18819,
      ownershipModel: "owned and operated by MLSE (Maple Leaf Sports & Entertainment); Maple Leafs and Raptors are co-tenants as MLSE subsidiaries; arena is a wholly-owned team asset with full economics captured by ownership",
      teamOwnsLand: true,
      publicSubsidy: 40,
      privateFinancing: 265,
      namingRightsDeal: { sponsor: "Scotiabank (Bank of Nova Scotia)", annualValue_M: 32, totalValue_M: 640, expiryYear: 2037, notes: "20-year CA$800M (~US$640M) naming rights deal signed July 2017, through 2037; previously Air Canada Centre (1999-2017); one of the richest arena naming rights deals in Canada; revenue paid to MLSE" },
      nonArenaRevenue: "MLSE is Canada's most valuable sports entity: owns Maple Leafs (NHL), Raptors (NBA, current Forbes ~$3.0B), Toronto FC (MLS), Toronto Argonauts (CFL), Marlies (AHL); Scotiabank Arena is also one of Canada's highest-grossing concert and entertainment venues; $350M arena renovation launched spring 2024 to add premium clubs and modernize facilities",
      newArenaPlans: "$350M renovation of Scotiabank Arena underway starting 2024-25, continuing through ~2026-27 season; focus on premium club expansion and facility modernization; no plans for new arena construction"
    },
    media: {
      localTVDeal: "Sportsnet (Rogers-owned; 75% MLSE owner Rogers also controls Canada's dominant national sports broadcaster — a unique integrated vertical); TSN (Bell Media subsidiary, Bell previously co-owned MLSE); Maple Leafs games on Sportsnet and TSN nationally across Canada",
      streamingNotes: "Sportsnet NOW (Rogers streaming); NHL.tv internationally; national games on ESPN+ for US market",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN/TNT); Canadian national deal with Rogers Sportsnet adds ~C$40-50M/year for Canadian franchises; Rogers owns both MLSE (75%) AND Sportsnet — a unique vertical integration where the broadcaster and the content owner are the same entity, creating complex but potentially valuable intra-company arrangements"
    },
    ownership: {
      primaryOwner: "Rogers Communications (75% of MLSE, controlling); Larry Tanenbaum / Kilmer Sports (25%)",
      ownerNetWorth: "Rogers Communications: TSX-listed telecom, ~C$25B market cap; Larry Tanenbaum: ~$2B+ (Kilmer Corporation)",
      ownerBackground: "MLSE history: Ontario Teachers' Pension Plan assembled the company in the 1990s; Rogers and Bell each acquired ~37.5% in 2012; Tanenbaum family (through Kilmer Sports) has been an MLSE shareholder since the 1990s. In September 2024, Rogers purchased Bell's 37.5% stake for CA$4.7B, valuing MLSE at CA$12.5B — the largest transaction in Canadian sports history; closed July 2025; Rogers holds option to acquire Tanenbaum's 25% in 2026",
      acquisitionYear: 2024,
      acquisitionPrice: 3.5,
      currentValuation: 4.4,
      impliedReturn: "Rogers: paid CA$4.7B for 37.5%; if MLSE is valued at CA$12.5B, Rogers' 75% stake = CA$9.4B — near immediate 25% appreciation on the MLSE portfolio vs. the 2024 transaction price",
      ownershipGroup: [
        { name: "Rogers Communications", role: "majority owner (75% of MLSE)", pct: 75 },
        { name: "Larry Tanenbaum / Kilmer Sports", role: "minority owner (25% of MLSE)", pct: 25 }
      ],
      institutionalInvestors: "Rogers Communications (TSX: RCI.B) is a publicly traded company; Tanenbaum partnered with OMERS (Ontario Municipal Employees Retirement System) in a Nov 2023 deal where OMERS purchased 20% of Kilmer Sports for US$400M — valuing Kilmer's 25% MLSE stake at US$2B",
      otherBusinessInterests: "MLSE portfolio: Raptors (NBA), Toronto FC (MLS), Argonauts (CFL), Marlies (AHL), Scotiabank Arena. Rogers: Rogers Sportsnet, Rogers Centre (Blue Jays stadium), Canadian wireless/cable/media conglomerate. Tanenbaum: Kilmer Corporation (real estate, private equity)"
    },
    brand: {
      socialMedia: { instagram: "~2.5M", twitter: "~2.0M", facebook: "~4.5M" },
      merchandiseNotes: "Most valuable NHL franchise for three consecutive years; Toronto's 6.5M metro area is the largest in Canada; Maple Leafs jersey is the #1 most recognized hockey jersey globally; last Stanley Cup 1967 but the 57-year drought has paradoxically intensified fan obsession and media coverage rather than suppressing it",
      internationalFanbase: "Largest international NHL fanbase; Canadian diaspora globally follows the Leafs as the default representative of Canadian hockey culture; strong presence across Europe, Caribbean, and Asia due to Toronto's multicultural demographics",
      notableSponsorships: ["Scotiabank (arena naming, CA$800M/20yr)", "Bell Canada", "Molson (jersey patch)", "Air Canada", "TD Bank", "Rogers (parent company integrated)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Auston Matthews — 4yr/$53M ($13.25M AAV), signed Sept 2023, through 2027-28",
      starContracts: [
        { player: "Auston Matthews", position: "C", aav: 13.25, contractNote: "4yr/$53M signed Sept 2023, through 2027-28; NHL's highest-paid player; 2x 60-goal scorer; 2022 Hart Trophy winner; Arizona-born franchise icon" },
        { player: "William Nylander", position: "RW", aav: 11.5, contractNote: "8yr/$92M extension signed Jan 2024, through 2031-32; Swedish-born; elite offensive winger; full no-trade clause" }
      ]
    },
    analystNotes: "The Maple Leafs are structurally the most valuable hockey franchise in the world and it isn't close: the Rogers MLSE acquisition at CA$12.5B (~US$9.3B) implied valuation — with the Maple Leafs representing roughly 40-45% of that total — makes a strong case for a $4-4.5B standalone franchise valuation. The unique Rogers vertical integration (owning both the team and Canada's dominant sports broadcaster) makes traditional media economics analysis impossible: intra-company Sportsnet rights effectively mean the team's television value is captured at the portfolio level. The 57-year Cup drought is the single-most-discussed topic in Canadian sports culture and creates a perennial narrative premium; when the Leafs eventually win — and with Matthews/Nylander/Marner/Tavares, they have the core to do it — the resulting merchandise, attendance, and sponsorship surge will be among the most powerful value events in NHL history."
  },

// ─── METROPOLITAN DIVISION ───────────────────────────────────────────────

  "Carolina Hurricanes": {
    valuationHistory: [
      { year: 2019, value: 0.43, source: "Forbes" },
      { year: 2020, value: 0.47, source: "Forbes" },
      { year: 2021, value: 0.57, source: "Forbes" },
      { year: 2022, value: 0.64, source: "Forbes" },
      { year: 2023, value: 1.25, source: "Forbes" },
      { year: 2024, value: 2.0,  source: "Forbes / CNBC; Sportico $1.92B; 2026 minority stake implied $2.66B" },
    ],
    revenue: { estimate: 183, year: 2024, source: "Sportico", operatingIncome: 42 },
    transactions: [
      { year: 1997, price: 0.047, buyer: "Peter Karmanos Jr.", seller: "NHL (expansion/relocation from Hartford)", notes: "Karmanos relocated franchise from Hartford Whalers to Raleigh; paid $47.5M; became Carolina Hurricanes for 1997-98 season" },
      { year: 2018, price: 0.420, buyer: "Tom Dundon", seller: "Peter Karmanos Jr.", notes: "Dallas-based finance entrepreneur Dundon bought majority stake from Karmanos for $420M; transformed franchise culture, operations, and fan engagement; sellout streak grew to 117+ games" },
      { year: 2026, price: null, buyer: "Brett Jefferson / Bobby Farnham / Marc Grandisson (12.5% stake)", seller: "Tom Dundon (partial)", notes: "Dundon sold 12.5% minority stake at implied $2.66B valuation in March 2026 — record NHL franchise implied value at time; Dundon retains majority control" },
    ],
    arena: {
      name: "Lenovo Center",
      yearOpened: 1999,
      capacity: 18680,
      ownershipModel: "owned by PNC Arena LLC (partnership between Hurricanes ownership and Wake County/City of Raleigh); Hurricanes are primary tenant and operator; Dundon has rights to develop 80 acres surrounding arena",
      teamOwnsLand: false,
      publicSubsidy: 158,
      privateFinancing: 60,
      namingRightsDeal: { sponsor: "Lenovo", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Previously PNC Arena (2008-2023); renamed Lenovo Center 2023 under multi-year deal with Chinese technology company; terms undisclosed; represents significant international brand partnership for Carolina market" },
      nonArenaRevenue: "Dundon has development rights to 80 acres around arena; mixed-use development plans in progress; season-ticket revenue up 227% and suite revenue nearly quadrupled under Dundon ownership",
      newArenaPlans: "No immediate replacement planned; arena modernization ongoing; 80-acre surrounding development represents major long-term revenue opportunity"
    },
    media: {
      localTVDeal: "Carolina Hurricanes TV (team-owned regional broadcast); after Bally Sports/Diamond Sports bankruptcy, Hurricanes launched their own direct-to-consumer broadcast operation — a leading example of team-owned media in NHL",
      streamingNotes: "HockeyTV / team-owned streaming direct to fans; NHL.TV League Pass; national games on ESPN+/Hulu and TNT/Max",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Tom Dundon (majority)",
      ownerNetWorth: "~$3B est. (finance/auto dealership background; founder Santander Consumer USA)",
      ownerBackground: "Dallas-based entrepreneur who built Santander Consumer USA into a major auto finance company; bought Hurricanes in Jan 2018 at $420M when team was a perennial bottom-dweller; transformed culture through player-friendly approach, sellout culture, and direct fan engagement; launched own broadcast after RSN collapse",
      acquisitionYear: 2018,
      acquisitionPrice: 0.420,
      currentValuation: 2.0,
      impliedReturn: "~4.8x on $420M in 8 years (~21% CAGR); 2026 minority stake implied $2.66B = ~6.3x",
      ownershipGroup: [
        { name: "Tom Dundon", role: "majority owner / governor", pct: null },
        { name: "Brett Jefferson", role: "minority investor (2026)", pct: null },
        { name: "Bobby Farnham", role: "minority investor / former NHL player (2026)", pct: null },
        { name: "Marc Grandisson", role: "minority investor (2026)", pct: null },
      ],
      institutionalInvestors: "No PE ownership; Dundon-led private group",
      otherBusinessInterests: "Dundon: Santander Consumer USA (auto finance); various finance and real estate holdings"
    },
    brand: {
      socialMedia: { instagram: "~1M", twitter: "~800K", facebook: "~1.1M" },
      merchandiseNotes: "Significant merchandise growth under Dundon; 'bunch of jerks' era created national buzz; merchandise sales up dramatically from pre-Dundon era small-market positioning",
      internationalFanbase: "Limited historically; Lenovo naming rights signal effort at international brand development",
      notableSponsorships: ["Lenovo (arena naming)", "PNC Financial Services", "Truist", "Dicks Sporting Goods"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Sebastian Aho — 8yr/$9.75M AAV extension signed 2023, runs through 2030-31",
      starContracts: [
        { player: "Sebastian Aho", position: "C", aav: 9.75, contractNote: "8yr/$78M extension signed 2023, through 2030-31; captain and franchise cornerstone since 2016" },
        { player: "Andrei Svechnikov", position: "RW", aav: 7.75, contractNote: "8yr/$62M signed 2021, through 2028-29" },
        { player: "Jaccob Slavin", position: "D", aav: 5.3, contractNote: "7yr/$37.1M, through 2026-27; elite defensive defenseman" }
      ]
    },
    analystNotes: "The Hurricanes are the NHL's most compelling small-market value-creation story: Dundon's $420M 2018 entry has appreciated to at least $2B implied, driven by a 117-game sellout streak, 227% season-ticket revenue growth, and a team-owned broadcast model that bypasses RSN economics entirely. The Lenovo Center development rights (80 acres) and mixed-use district ambitions echo the Atlanta Braves' Battery model. Key risk: the Raleigh market has not historically supported top-tier NHL economics, and the franchise's valuation leap (from $430M in 2019 to $2B in 2024) assumes sustainable premium-market positioning in what remains a Sun Belt hockey market."
  },

  "Columbus Blue Jackets": {
    valuationHistory: [
      { year: 2019, value: 0.44, source: "Forbes" },
      { year: 2020, value: 0.47, source: "Forbes" },
      { year: 2021, value: 0.56, source: "Forbes" },
      { year: 2022, value: 0.62, source: "Forbes" },
      { year: 2023, value: 0.85, source: "Forbes" },
      { year: 2024, value: 1.0,  source: "CNBC / Forbes; lowest valuation in NHL (32nd of 32)" },
    ],
    revenue: { estimate: 148, year: 2024, source: "CNBC", operatingIncome: -12 },
    transactions: [
      { year: 2000, price: 0.080, buyer: "Nationwide Insurance / John H. McConnell", seller: "NHL (expansion franchise)", notes: "Columbus was awarded an expansion franchise for the 2000-01 season; Nationwide Insurance and steel magnate John H. McConnell led ownership group; $80M expansion fee" },
      { year: 2012, price: null, buyer: "John P. McConnell (majority control)", seller: "Nationwide Insurance (stake reduction)", notes: "Nationwide reduced ownership stake; John P. McConnell (son of founder) took majority control; Nationwide remains minority partner and arena naming-rights holder" },
    ],
    arena: {
      name: "Nationwide Arena",
      yearOpened: 2000,
      capacity: 18500,
      ownershipModel: "originally privately built by Nationwide Insurance; Columbus city and Franklin County purchased arena for $42.5M in 2012 as part of deal to keep Blue Jackets in Columbus; team leases from public authority; team has priority booking and revenue rights",
      teamOwnsLand: false,
      publicSubsidy: 42,
      privateFinancing: 175,
      namingRightsDeal: { sponsor: "Nationwide Insurance", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Nationwide Insurance has been arena naming-rights holder since 2000 opening; deal terms undisclosed; Nationwide is also minority team owner — naming rights deal is intracompany arrangement" },
      nonArenaRevenue: "Arena events revenue split with public ownership authority; team captures hospitality, premium seating, and event revenue per lease terms",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Ohio (Diamond Sports / Sinclair successor arrangement); Columbus among teams affected by Diamond Sports Group bankruptcy 2023; media rights situation in flux",
      streamingNotes: "NHL.TV League Pass; national ESPN+/Hulu and TNT/Max; local streaming via Bally Sports app or successor service",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "John P. McConnell (majority)",
      ownerNetWorth: "~$2.5B (Worthington Enterprises / steel processing background)",
      ownerBackground: "Son of founder John H. McConnell (Worthington Industries steel magnate); took majority control ~2012 when Nationwide reduced stake; franchise has operated in small-market difficulty with limited playoff success; lowest NHL valuation reflects small market size and below-average performance",
      acquisitionYear: 2000,
      acquisitionPrice: 0.080,
      currentValuation: 1.0,
      impliedReturn: "~12.5x on $80M expansion fee in 24 years (~11% CAGR); below NHL average appreciation",
      ownershipGroup: [
        { name: "John P. McConnell", role: "majority owner / governor", pct: null },
        { name: "Nationwide Insurance", role: "minority partner / arena naming holder", pct: null }
      ],
      institutionalInvestors: "None disclosed",
      otherBusinessInterests: "John P. McConnell: Worthington Enterprises (formerly Worthington Industries) — steel processing and pressure cylinders; stepped down from board 2023"
    },
    brand: {
      socialMedia: { instagram: "~400K", twitter: "~350K", facebook: "~650K" },
      merchandiseNotes: "Small-market franchise with limited national merchandise reach; Blue Jackets identity built around Columbus civic pride; below-average merchandise performance league-wide",
      internationalFanbase: "Minimal; franchise has limited international following",
      notableSponsorships: ["Nationwide Insurance (arena naming)", "OhioHealth", "Huntington Bank", "Pepsi"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Zach Werenski — franchise D-man; Kirill Marchenko emerging as offensive cornerstone",
      starContracts: [
        { player: "Zach Werenski", position: "D", aav: 9.0, contractNote: "7yr/$63M extension signed 2023, through 2029-30; franchise cornerstone defenseman" },
        { player: "Kirill Marchenko", position: "RW", aav: 6.5, contractNote: "3yr/$19.5M bridge deal; emerging franchise scorer" }
      ]
    },
    analystNotes: "Columbus is the NHL's clearest case of market-constrained valuation: at $1B (league minimum), the franchise trades at the floor despite adequate arena infrastructure and stable ownership. The Blue Jackets have missed the playoffs in five consecutive seasons, operate in one of the NHL's smallest markets, and face ongoing RSN revenue uncertainty post-Diamond Sports bankruptcy. The franchise's one comps event of note — the 2019 upset sweep of Tampa Bay — underscores that on-ice success is achievable but has proven unsustainable in this market. Any valuation upside is almost entirely dependent on either a deep playoff run reigniting local interest or a franchise sale that prices in the league's universal valuation floor."
  },

  "New Jersey Devils": {
    valuationHistory: [
      { year: 2019, value: 0.55, source: "Forbes" },
      { year: 2020, value: 0.60, source: "Forbes" },
      { year: 2021, value: 0.72, source: "Forbes" },
      { year: 2022, value: 0.85, source: "Forbes" },
      { year: 2023, value: 1.15, source: "Forbes" },
      { year: 2024, value: 1.55, source: "Forbes / CNBC; Sportico reports 47% increase to $1.7B" },
    ],
    revenue: { estimate: 215, year: 2023, source: "Forbes", operatingIncome: 28 },
    transactions: [
      { year: 2000, price: 0.175, buyer: "YankeeNets LLC", seller: "John McMullen", notes: "YankeeNets consortium (George Steinbrenner, Lewis Katz, others) purchased Devils and Nets as combined entity for $175M" },
      { year: 2004, price: 0.300, buyer: "Jeffrey Vanderbeek-led group", seller: "YankeeNets LLC", notes: "Vanderbeek led group paid ~$300M to separate Devils from YankeeNets structure after Nets moved to own entity" },
      { year: 2013, price: 0.320, buyer: "Josh Harris / David Blitzer (HBSE)", seller: "Jeffrey Vanderbeek (distressed sale)", notes: "Harris Blitzer Sports & Entertainment purchased Devils and Prudential Center from Vanderbeek, who was in financial distress; $320M; HBSE also owns Philadelphia 76ers (NBA); combined sports empire valued at $14.5B as of 2024" },
    ],
    arena: {
      name: "Prudential Center",
      yearOpened: 2007,
      capacity: 16514,
      ownershipModel: "owned by HBSE (Harris Blitzer Sports & Entertainment) — team owns the arena outright; significant non-NHL event revenue; city of Newark contributed public subsidies for construction",
      teamOwnsLand: false,
      publicSubsidy: 210,
      privateFinancing: 165,
      namingRightsDeal: { sponsor: "Prudential Financial", annualValue_M: 8, totalValue_M: null, expiryYear: 2027, notes: "Prudential Financial (Newark-HQ'd insurance giant) naming deal since arena opened 2007; estimated $8M/year; deal has been renewed; aligns arena name with one of Newark's largest employers" },
      nonArenaRevenue: "HBSE-owned arena captures full event economics; Prudential Center is one of the highest-grossing arenas per event in the US; major concerts and events year-round boost non-hockey revenue significantly",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "MSGSN (MSG Sportsnet) / New Jersey Devils regional broadcasts; Devils and Rangers both broadcast on MSG network family in overlapping NY-NJ market",
      streamingNotes: "NHL.TV League Pass; national games ESPN+/Hulu and TNT/Max; New Jersey market overlaps significantly with Rangers' MSG footprint",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Josh Harris / David Blitzer (Harris Blitzer Sports & Entertainment)",
      ownerNetWorth: "Harris: ~$6B (Apollo Global Management co-founder); Blitzer: ~$1B (Blackstone senior executive)",
      ownerBackground: "HBSE founded 2013 when Harris and Blitzer purchased the Devils from distressed seller Jeffrey Vanderbeek for $320M. Also own Philadelphia 76ers (NBA); own Prudential Center outright. HBSE valued at ~$14.5B as of 2024, third-largest sports ownership empire globally. Josh Harris also led consortium that purchased Washington Commanders (NFL) in 2023 for $6.05B",
      acquisitionYear: 2013,
      acquisitionPrice: 0.320,
      currentValuation: 1.55,
      impliedReturn: "~4.8x on $320M in 11 years (~15% CAGR); plus arena ownership provides additional return",
      ownershipGroup: [
        { name: "Josh Harris", role: "co-managing partner", pct: null },
        { name: "David Blitzer", role: "co-managing partner", pct: null },
        { name: "Michael Rubin", role: "minority investor (Fanatics CEO)", pct: null }
      ],
      institutionalInvestors: "Private group; no disclosed PE ownership beyond HBSE principals",
      otherBusinessInterests: "Harris: Apollo Global Management (co-founder), Washington Commanders (NFL majority), Crystal Palace FC (EPL); Blitzer: Blackstone, Crystal Palace FC, real estate; Rubin: Fanatics"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~750K", facebook: "~1.2M" },
      merchandiseNotes: "Three Stanley Cup championships (1995, 2000, 2003) underpin legacy brand; young core with Jack Hughes and Nico Hischier driving resurgence; compete in NY-NJ market with Rangers for attention",
      internationalFanbase: "Moderate; European fan base through Swiss player Nico Hischier and Czech/European roster",
      notableSponsorships: ["Prudential Financial (arena naming)", "Panasonic", "NJ Transit", "Verizon"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Jack Hughes — 8yr/$9.75M AAV extension signed 2023, through 2030-31; Nico Hischier captain",
      starContracts: [
        { player: "Jack Hughes", position: "C", aav: 9.75, contractNote: "8yr/$78M extension signed 2023, through 2030-31; No. 1 overall pick 2019" },
        { player: "Nico Hischier", position: "C", aav: 8.25, contractNote: "7yr/$57.75M signed 2022, through 2026-27; captain; extension discussions pending" },
        { player: "Jesper Bratt", position: "LW", aav: 8.25, contractNote: "8yr/$66M signed 2022, through 2029-30; elite scorer" }
      ]
    },
    analystNotes: "The Devils' $320M 2013 distressed acquisition by HBSE has returned ~4.8x in franchise value alone — not counting arena ownership (Prudential Center), which adds substantial off-balance-sheet value the way team-only valuations systematically miss. The Jack Hughes–Nico Hischier dual-franchise-player core is the strongest in Devils history since the Brodeur era, with both locked through 2030-31 / 2026-27 respectively. The primary structural risk is NYC market competition with the Rangers for casual hockey fans — the Devils have rarely won the market-share battle despite superior on-ice results in their championship decade — and Hischier's upcoming extension could push franchise payroll to a structurally constrained level."
  },

  "New York Islanders": {
    valuationHistory: [
      { year: 2019, value: 0.54, source: "Forbes" },
      { year: 2020, value: 0.60, source: "Forbes" },
      { year: 2021, value: 0.70, source: "Forbes" },
      { year: 2022, value: 0.85, source: "Forbes" },
      { year: 2023, value: 1.15, source: "Forbes" },
      { year: 2024, value: 1.55, source: "CNBC / Forbes (16th overall in NHL)" },
    ],
    revenue: { estimate: 205, year: 2023, source: "Sportico / post-UBS Arena estimate", operatingIncome: 22 },
    transactions: [
      { year: 1978, price: 0.009, buyer: "John Pickett group", seller: "Roy Boe", notes: "Early ownership history; franchise won four consecutive Stanley Cups 1980-83 under this era" },
      { year: 2000, price: 0.195, buyer: "Computer Horizons Corp / Charles Wang", seller: "John Pickett group", notes: "Wang and partner Sanjay Kumar purchased franchise for $195M; Wang later took sole control" },
      { year: 2014, price: 0.485, buyer: "Jon Ledecky / Scott Malkin (minority, path to majority)", seller: "Charles Wang", notes: "Wang agreed to sell to Ledecky-Malkin group at ~$485M valuation; pair started as minority owners before taking full control in 2016 upon Wang's death" },
      { year: 2016, price: null, buyer: "Jon Ledecky / Scott Malkin (full control)", seller: "Charles Wang estate", notes: "Wang died April 2016; Ledecky and Malkin assumed full ownership control" },
    ],
    arena: {
      name: "UBS Arena",
      yearOpened: 2021,
      capacity: 17255,
      ownershipModel: "privately developed by Oak View Group (OVG) in partnership with the Islanders; built at Belmont Park site (state-owned land); Islanders are anchor tenant with long-term lease and equity stake in arena operations; OVG handles event booking and operations",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 1100,
      namingRightsDeal: { sponsor: "UBS (Union Bank of Switzerland)", annualValue_M: 7, totalValue_M: 175, expiryYear: 2041, notes: "20-year, $175M deal with UBS for naming rights to $1.1B Belmont Park arena; signed 2021 at arena opening; $7M/year (lower than comparable arenas given new-venue establishment period)" },
      nonArenaRevenue: "UBS Arena events revenue shared between OVG and Islanders per equity agreement; Belmont Park location includes surrounding retail/hospitality development potential; revenue dramatically improved from Nassau Coliseum era",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "MSG Sportsnet (Islanders regional broadcasts on MSG+ family); compete for NY-metro cable subscribers with Rangers on same network family",
      streamingNotes: "NHL.TV League Pass; national ESPN+/Hulu and TNT/Max; overlapping NYC DMA with Rangers",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Jon Ledecky (co-owner) / Scott Malkin (co-owner)",
      ownerNetWorth: "Ledecky: ~$500M (US LEC, government contracting); Malkin: ~$1B+ (Value Retail — European outlet villages)",
      ownerBackground: "Ledecky is a lifelong Islanders fan and entrepreneur who built US LEC (government contracting services); Malkin built Value Retail, which operates Bicester Village and other European luxury outlet malls. The pair acquired the franchise in stages from Charles Wang 2014-2016; built UBS Arena at Belmont Park ending the Nassau Coliseum era",
      acquisitionYear: 2016,
      acquisitionPrice: 0.485,
      currentValuation: 1.55,
      impliedReturn: "~3.2x on $485M in 9 years (~14% CAGR)",
      ownershipGroup: [
        { name: "Jon Ledecky", role: "co-owner / governor", pct: null },
        { name: "Scott Malkin", role: "co-owner", pct: null }
      ],
      institutionalInvestors: "No disclosed PE ownership; Ledecky and Malkin private group",
      otherBusinessInterests: "Ledecky: US LEC (government contracting), various ventures; Malkin: Value Retail (European outlet malls)"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~650K", facebook: "~1.1M" },
      merchandiseNotes: "Four-Cup dynasty (1980-83) sustains long-term fan loyalty among older demographic; Matt Barzal driving younger merchandise cycle; UBS Arena modernization improving brand perception",
      internationalFanbase: "Limited; primarily tri-state area fan base",
      notableSponsorships: ["UBS (arena naming)", "Northwell Health", "Heineken", "Geico"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Matt Barzal — 5yr/$7.75M AAV through 2026-27; franchise face",
      starContracts: [
        { player: "Matt Barzal", position: "C", aav: 7.75, contractNote: "5yr/$38.75M signed 2022, through 2026-27; franchise cornerstone; extension discussions upcoming" },
        { player: "Noah Dobson", position: "D", aav: 8.5, contractNote: "7yr/$59.5M signed 2023, through 2029-30; elite offensive defenseman" }
      ]
    },
    analystNotes: "The Islanders' move to UBS Arena resolved the franchise's decade-long stadium crisis — Nassau Coliseum was generating sub-$100M revenue; UBS drove immediate ~2x revenue improvement to ~$205M. The $1.1B arena was 100% privately financed (rare in NHL) and the UBS naming-rights deal ($7M/yr, 20yr) provides long-term revenue visibility. The primary valuation risk is dual exposure to Rangers for NYC casual fans and the franchise's historical positioning as the market's second team despite on-ice parity; the four championships remain the brand foundation rather than recent success, and the Ledecky/Malkin ownership has yet to build a championship contender in the UBS era."
  },

  "New York Rangers": {
    valuationHistory: [
      { year: 2019, value: 1.65, source: "Forbes" },
      { year: 2020, value: 1.80, source: "Forbes" },
      { year: 2021, value: 2.0,  source: "Forbes (first NHL franchise to reach $2B)" },
      { year: 2022, value: 2.2,  source: "Forbes" },
      { year: 2023, value: 2.65, source: "Forbes" },
      { year: 2024, value: 3.5,  source: "Forbes / CNBC; Sportico $3.65B; 2nd overall in NHL behind Maple Leafs" },
    ],
    revenue: { estimate: 360, year: 2024, source: "MSG Sports public filings / Forbes estimate", operatingIncome: 85 },
    transactions: [
      { year: 1994, price: 1.075, buyer: "Cablevision / ITT Corporation (50/50)", seller: "Viacom / Paramount Communications", notes: "Cablevision and ITT purchased Madison Square Garden (arena + Rangers + Knicks) for $1.075B in 1994 from Viacom (who had acquired Paramount/Gulf+Western); Rangers effectively came with the MSG bundle" },
      { year: 1997, price: 0.650, buyer: "Cablevision (full MSG ownership)", seller: "ITT Corporation (50% stake)", notes: "ITT sold its 50% stake in MSG to Cablevision for $650M; Cablevision now owned MSG, Rangers, and Knicks entirely; Dolan family control via Cablevision/MSG structure" },
    ],
    arena: {
      name: "Madison Square Garden",
      yearOpened: 1968,
      capacity: 18006,
      ownershipModel: "owned by MSG Sports (publicly traded, James Dolan controls via Cablevision/Dolan family entity); Rangers and Knicks co-tenants; arena revenue split between MSG Sports (team operations) and MSG Entertainment (arena events); MSG is among the highest-grossing arenas globally by event revenue",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 1100,
      namingRightsDeal: { sponsor: "No naming rights deal", annualValue_M: 0, totalValue_M: 0, expiryYear: null, notes: "MSG deliberately has never sold naming rights — 'Madison Square Garden' is among the most recognized arena names globally and is considered too valuable a brand asset to monetize through naming deal; foregone estimated $20-25M/year in naming rights revenue as brand preservation strategy" },
      nonArenaRevenue: "MSG Entertainment (separate public company) captures events revenue; Rangers benefit from arena revenue sharing but do not capture full MSG event economics; MSG Arena generates estimated $200M+ annually in non-sports events",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "MSG Network (MSG Sports-owned RSN; Rangers are flagship programming); MSG Sports retains full local broadcast economics — uniquely valuable in era of RSN collapses; Dolan family owns the distribution channel",
      streamingNotes: "MSG+ streaming app; NHL.TV League Pass; national games on ESPN+/Hulu and TNT/Max; MSG Network also produces all Rangers digital content",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "James Dolan (MSG Sports Corp / Cablevision/Dolan family)",
      ownerNetWorth: "Dolan family net worth ~$5-7B; James Dolan personally ~$2-3B",
      ownerBackground: "Son of Cablevision founder Charles Dolan; James Dolan became CEO of MSG Sports in 1999 and has controlled Rangers and Knicks since; Cablevision sold to Altice in 2016 but Dolan family retained MSG Sports separately; MSG Sports publicly traded (MSGS); Dolan controls via super-voting share structure. MSG Sports fiscal year revenue ~$1B (shared with Knicks). Dolan's ownership has been controversial due to fan relations issues and arena-ban incidents but Rangers have appreciated dramatically under MSG corporate ownership.",
      acquisitionYear: 1994,
      acquisitionPrice: null,
      currentValuation: 3.5,
      impliedReturn: "MSG paid ~$1.075B for all MSG properties (Rangers + Knicks + arena) in 1994; attributing portion to Rangers only, total MSG value growth has been exceptional — combined MSGS market cap ~$5B+ suggests enormous appreciation",
      ownershipGroup: [
        { name: "James Dolan", role: "executive chairman / MSG Sports controlling shareholder", pct: null },
        { name: "Dolan family", role: "controlling shareholders via super-voting structure", pct: null }
      ],
      institutionalInvestors: "MSG Sports is publicly traded (MSGS on NYSE); institutional shareholders include Vanguard, BlackRock, and other index funds as minority public shareholders; Dolan family retains voting control",
      otherBusinessInterests: "MSG Sports (Knicks NBA), MSG Entertainment (arena + Sphere), MSG Networks, Sphere Entertainment; Dolan family: Altice USA (cable)"
    },
    brand: {
      socialMedia: { instagram: "~2.5M", twitter: "~1.8M", facebook: "~3M" },
      merchandiseNotes: "Top-5 NHL merchandise franchise; 'Broadway Blueshirts' brand commands premium nationally; MSG brand reinforces Rangers as the marquee NHL team in largest US media market",
      internationalFanbase: "Strong; largest US-based NHL fanbase internationally; European fanbase particularly in Sweden/Finland given historical Scandinavian player presence",
      notableSponsorships: ["No arena naming rights (deliberate strategy)", "Chase (bank partner)", "Dunkin'", "Verizon", "Molson Coors"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Adam Fox — 7yr/$9.5M AAV signed 2021, through 2027-28; Norris Trophy winner 2021",
      starContracts: [
        { player: "Adam Fox", position: "D", aav: 9.5, contractNote: "7yr/$66.5M signed 2021, through 2027-28; Norris Trophy 2021; best defenseman in franchise history since Brian Leetch" },
        { player: "Igor Shesterkin", position: "G", aav: 11.5, contractNote: "4yr/$46M signed 2022, through 2025-26; Hart Trophy finalist; elite franchise goaltender; extension pending" },
        { player: "Chris Kreider", position: "LW", aav: 6.5, contractNote: "7yr/$45.5M signed 2021, through 2026-27; team leader" }
      ]
    },
    analystNotes: "The Rangers' $3.5B valuation (2nd in NHL) is structurally underpinned by three unique assets no other hockey franchise possesses simultaneously: the No. 1 US media market, MSG arena ownership (no naming-rights revenue given up, no tenant economics — the team effectively owns one of the world's most valuable arenas), and MSG Network (Rangers own their RSN, bypassing the Bally Sports/Diamond Sports carnage that has hurt ~40% of the league). The primary risk is MSG governance — James Dolan's dual control of MSG Sports and MSG Entertainment creates structural conflicts over revenue allocation between the teams and the arena entity, as well as reputational overhang from fan-relations controversies."
  },

  "Philadelphia Flyers": {
    valuationHistory: [
      { year: 2019, value: 0.89, source: "Forbes" },
      { year: 2020, value: 0.95, source: "Forbes" },
      { year: 2021, value: 1.0,  source: "Forbes" },
      { year: 2022, value: 1.25, source: "Forbes" },
      { year: 2023, value: 1.45, source: "Forbes" },
      { year: 2024, value: 1.65, source: "CNBC / Forbes (8th overall in NHL)" },
    ],
    revenue: { estimate: 230, year: 2023, source: "Forbes", operatingIncome: 35 },
    transactions: [
      { year: 1967, price: 0.002, buyer: "Ed Snider / Jerry Wolman group", seller: "NHL (expansion franchise)", notes: "Flyers were one of the Original Six expansion franchises (1967-68); Ed Snider paid $2M expansion fee and became the defining owner; 'Broad Street Bullies' era built franchise into one of NHL's most iconic" },
      { year: 1996, price: 0.150, buyer: "Comcast Corporation (Comcast Spectacor)", seller: "Ed Snider / Spectacor group", notes: "Comcast purchased majority stake in Spectacor from Ed Snider for ~$150M; Comcast Spectacor created as operating entity; Snider remained chairman until his death in 2016" },
    ],
    arena: {
      name: "Xfinity Mobile Arena",
      yearOpened: 1996,
      capacity: 19543,
      ownershipModel: "owned by Comcast Spectacor (Comcast subsidiary); Flyers and 76ers are co-tenants; Comcast Spectacor completed $400M renovation 2019-2022; renamed from Wells Fargo Center to Xfinity Mobile Arena in September 2025",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 522,
      namingRightsDeal: { sponsor: "Xfinity Mobile (Comcast subsidiary)", annualValue_M: null, totalValue_M: null, expiryYear: 2031, notes: "Wells Fargo Center naming rights expired 2024 (Wells Fargo declined renewal); Xfinity Mobile (Comcast's own wireless brand) took naming rights through 2030-31 season. Effectively an intracompany deal — no external cash changes hands; Comcast avoids external dependency for primary naming partner" },
      nonArenaRevenue: "Comcast Spectacor captures full arena event economics (concerts, other sports, events); South Philly Sports Complex location with Phillies, Eagles, Union in proximity creates sports-destination traffic",
      newArenaPlans: "New $1.3B arena announced Jan 2025 — joint project by Comcast Spectacor (Flyers) and HBSE (76ers); fully privately financed; planned to open ~2030 in South Philadelphia Sports Complex; would replace current Xfinity Mobile Arena"
    },
    media: {
      localTVDeal: "NBC Sports Philadelphia (NBCUniversal RSN; Comcast subsidiary); Flyers broadcast on Comcast-owned network — structurally immune to Diamond Sports/Bally Sports RSN collapse affecting other NHL teams; intracompany distribution economics",
      streamingNotes: "Peacock streaming (NBC/Comcast); NHL.TV League Pass; national games on ESPN+/Hulu and TNT/Max; Comcast's NBC Sports Philadelphia and Peacock provide integrated local-to-national streaming funnel",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Comcast Corporation (Comcast Spectacor subsidiary)",
      ownerNetWorth: "Comcast market cap ~$145B; Brian Roberts (CEO/controlling shareholder) net worth ~$2B",
      ownerBackground: "Comcast purchased Spectacor from founder Ed Snider in 1996 for ~$150M; Ed Snider (died 2016) remained chairman until death; Comcast Spectacor operates Flyers, Xfinity Mobile Arena, and various entertainment properties. Comcast owns NBC Universal (local NBC Sports Philadelphia RSN is intracompany partner), creating uniquely integrated media-team ownership structure in Philadelphia market",
      acquisitionYear: 1996,
      acquisitionPrice: 0.150,
      currentValuation: 1.65,
      impliedReturn: "~11x on $150M in 28 years (~9% CAGR); plus arena appreciation and media value",
      ownershipGroup: [
        { name: "Comcast Corporation", role: "majority owner via Comcast Spectacor", pct: null },
        { name: "Brian Roberts", role: "Comcast CEO / controlling shareholder", pct: null }
      ],
      institutionalInvestors: "Comcast is publicly traded; institutional shareholders as with any public company own indirect equity; team not separately publicly traded",
      otherBusinessInterests: "Comcast: NBC Universal (media), Xfinity (cable/internet/wireless), Sky (European media), Universal Studios, NBCUniversal theme parks"
    },
    brand: {
      socialMedia: { instagram: "~1.2M", twitter: "~900K", facebook: "~2.4M" },
      merchandiseNotes: "Broad Street Bullies legacy and two Stanley Cups (1974, 1975) sustain one of NHL's deepest fan bases; historically passionate Philadelphia sports culture drives consistent merchandise demand despite recent on-ice struggles",
      internationalFanbase: "Limited; primarily northeastern US fan base",
      notableSponsorships: ["Xfinity Mobile (arena naming / intracompany)", "NBC Sports Philadelphia (intracompany)", "Chipotle", "Subaru"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Matvei Michkov — No. 7 overall pick 2023; Cam Atkinson veteran presence",
      starContracts: [
        { player: "Sean Couturier", position: "C", aav: 7.75, contractNote: "8yr/$62M signed 2021, through 2028-29; captain; injury history a concern" },
        { player: "Travis Konecny", position: "RW", aav: 7.0, contractNote: "8yr/$56M signed 2022, through 2029-30; team's best scorer" },
        { player: "Matvei Michkov", position: "RW", aav: 0.925, contractNote: "3yr/$2.775M entry-level, through 2025-26; franchise prospect; considered among NHL's elite future players" }
      ]
    },
    analystNotes: "Comcast's structural integration — team, arena, and RSN all under one corporate umbrella — gives the Flyers the most media-insulated economics in the league: while ~40% of NHL teams faced RSN collapse post-Diamond Sports, Philadelphia's NBC Sports Philadelphia (Comcast-owned) never missed a beat. The $400M arena renovation and pending $1.3B new arena (jointly with 76ers) represent major capital commitment from Comcast in the South Philly sports district. The franchise's primary challenge is on-ice: no playoff appearance in five seasons, a franchise-rebuild phase built around Michkov and young players, creating a risk that continued losing erodes the deep but historically demanding Philadelphia fan base."
  },

  "Pittsburgh Penguins": {
    valuationHistory: [
      { year: 2019, value: 0.67, source: "Forbes" },
      { year: 2020, value: 0.73, source: "Forbes" },
      { year: 2021, value: 0.78, source: "Forbes" },
      { year: 2022, value: 0.87, source: "Forbes" },
      { year: 2023, value: 1.37, source: "Forbes (post-FSG acquisition)" },
      { year: 2024, value: 1.75, source: "Forbes 2025; sold to Hoffmann Family Dec 2025 at $1.7B enterprise value" },
    ],
    revenue: { estimate: 210, year: 2023, source: "Forbes", operatingIncome: 18 },
    transactions: [
      { year: 1999, price: 0.107, buyer: "Mario Lemieux / Ron Burkle-led group", seller: "Howard Baldwin / Morris Belzberg (bankruptcy)", notes: "Lemieux converted $32.5M of owed salary into equity and co-led $107M total acquisition from bankruptcy; one of sports most unique transactions — franchise player became owner; Ron Burkle was co-principal" },
      { year: 2021, price: 0.900, buyer: "Fenway Sports Group (John Henry / Tom Werner)", seller: "Mario Lemieux / Ron Burkle", notes: "FSG paid ~$900M for majority controlling interest; Lemieux and Burkle retained minority stakes; FSG also owns Red Sox (MLB), Liverpool FC (EPL), Pittsburgh Fenway Sports Group retained Lemieux as minority/ambassador" },
      { year: 2025, price: 1.700, buyer: "Hoffmann Family of Companies (David Hoffmann)", seller: "Fenway Sports Group (majority)", notes: "FSG agreed to sell majority stake to Chicago-based Hoffmann Family of Companies at $1.7B enterprise value; deal closed December 2025; Hoffmann family operates 125 global brands, $2B private equity empire; Sidney Crosby and others retained minority stakes" },
    ],
    arena: {
      name: "PPG Paints Arena",
      yearOpened: 2010,
      capacity: 18387,
      ownershipModel: "owned by Pittsburgh Sports & Exhibition Authority (SEA, a public entity); Penguins are primary tenant; $321M construction financed via public revenue bonds backed by state payments, casino license revenue, and team rent; Penguins pay $4.1M/year rent; SEA retains arena ownership",
      teamOwnsLand: false,
      publicSubsidy: 290,
      privateFinancing: 31,
      namingRightsDeal: { sponsor: "PPG Industries", annualValue_M: 3.8, totalValue_M: null, expiryYear: 2040, notes: "PPG Industries (Pittsburgh-based paint/coatings company, Fortune 500) — 20+ year naming rights deal; ~$3.8M/year; arena previously Mellon Arena (The Igloo); PPG deal reflects Pittsburgh corporate heritage" },
      nonArenaRevenue: "SEA retains building economics; Penguins receive event revenues per lease; arena attendance has declined in post-dynasty era (88% capacity 2024-25, lowest since 2007)",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "SportsNet Pittsburgh (previously AT&T SportsNet Pittsburgh / ROOT Sports; Penguins have equity stake in local RSN joint venture); navigated Diamond Sports/Bally Sports bankruptcy due to team equity ownership in SportsNet Pittsburgh",
      streamingNotes: "SportsNet Pittsburgh app; NHL.TV League Pass; national ESPN+/Hulu and TNT/Max",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Hoffmann Family of Companies (David Hoffmann) — majority, as of Dec 2025",
      ownerNetWorth: "David Hoffmann: Hoffmann Family of Companies ~$2B revenue, 125 brands; FSG (John Henry) net worth ~$2.5B",
      ownerBackground: "Franchise bankruptcies precede Lemieux era; Lemieux-Burkle 1999 acquisition ($107M) through converted salary remains one of hockey's most storied ownership stories. FSG (Red Sox/Liverpool) purchased majority for $900M in 2021, nearly doubling prior valuation. Sold to Hoffmann Family in Dec 2025 for $1.7B — franchise in post-Crosby-Malkin transition, missing playoffs since 2022. Sidney Crosby retained minority stake in Hoffmann deal.",
      acquisitionYear: 2025,
      acquisitionPrice: 1.700,
      currentValuation: 1.75,
      impliedReturn: "Hoffmann: acquired at $1.7B, minimal appreciation so far. FSG: ~1.9x on $900M in 4 years (~17% CAGR). Lemieux group: ~16x on $107M in 22 years",
      ownershipGroup: [
        { name: "Hoffmann Family of Companies (David Hoffmann)", role: "majority owner / governor", pct: null },
        { name: "Sidney Crosby", role: "minority investor", pct: null },
        { name: "Mario Lemieux", role: "minority investor (retained)", pct: null }
      ],
      institutionalInvestors: "Private; no disclosed PE institutional investors",
      otherBusinessInterests: "Hoffmann Family: 125 global brands across multiple sectors; Crosby: various Pittsburgh-area businesses"
    },
    brand: {
      socialMedia: { instagram: "~1.8M", twitter: "~1.5M", facebook: "~3.5M" },
      merchandiseNotes: "Three Stanley Cups (2009, 2016, 2017) and Crosby/Malkin/Letang dynasty make Penguins a top-5 NHL merchandise franchise; national fanbase built around Sidney Crosby era; merchandise will face headwinds as dynasty core retires",
      internationalFanbase: "Strong; European following due to Evgeni Malkin (Russian), Kris Letang (French-Canadian), and international roster history",
      notableSponsorships: ["PPG Industries (arena naming)", "Highmark (UPMC competitor/healthcare)", "PNC Bank", "Dollar Bank"]
    },
    onField: {
      championshipsLast10Years: 2,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Sidney Crosby — 2yr/$17.4M ($8.7M AAV), signed Sept 2024, through 2026-27; age 38-39 during contract",
      starContracts: [
        { player: "Sidney Crosby", position: "C", aav: 8.7, contractNote: "2yr/$17.4M signed Sept 2024, through 2026-27; playing at $8.7M — dramatically below market for a player of his production; age 38 going into contract; franchise cornerstone since 2005" },
        { player: "Evgeni Malkin", position: "C", aav: 6.1, contractNote: "2yr/$12.2M signed 2023, through 2024-25; end-of-career contract for franchise legend" },
        { player: "Kris Letang", position: "D", aav: 6.1, contractNote: "2yr/$12.2M through 2024-25; franchise defenseman completing career in Pittsburgh" }
      ]
    },
    analystNotes: "The Penguins' $1.7B Hoffmann acquisition occurred at peak post-dynasty uncertainty: the franchise missed the playoffs in 2022, 2023, 2024, and 2025, with attendance declining to the franchise's lowest capacity utilization since 2007. FSG's quick flip (bought $900M in 2021, sold $1.7B in 2025) extracted nearly a 2x return by selling ahead of a full dynasty transition — the Crosby-Malkin-Letang era's end is structurally priced in by the market. Hoffmann family enters at a potential trough, with Crosby's $8.7M AAV well below market (sustainable for rebuild), but the franchise will need to develop a post-Crosby identity in a mid-size market without the arena economics advantages of team-owned venues."
  },

  "Washington Capitals": {
    valuationHistory: [
      { year: 2019, value: 0.90, source: "Forbes" },
      { year: 2020, value: 1.0,  source: "Forbes" },
      { year: 2021, value: 1.1,  source: "Forbes" },
      { year: 2022, value: 1.2,  source: "Forbes" },
      { year: 2023, value: 1.8,  source: "Forbes" },
      { year: 2024, value: 2.1,  source: "CNBC / Forbes (9th overall in NHL)" },
    ],
    revenue: { estimate: 246, year: 2024, source: "Sportico / CNBC", operatingIncome: 79 },
    transactions: [
      { year: 1982, price: 0.015, buyer: "Abe Pollin", seller: "Various original investors", notes: "Abe Pollin (Washington Bullets/Wizards founder) consolidated full ownership of Capitals; Pollin originally co-founded the franchise in 1974" },
      { year: 1999, price: 0.085, buyer: "Ted Leonsis / AOL group (36% stake)", seller: "Abe Pollin estate/family", notes: "Tech executive Ted Leonsis (AOL VP) bought 36% stake in Pollin's arena/teams holding for $85M; increased to 44% in 2000; became full owner in 2010 when Pollin died Nov 2009" },
      { year: 2010, price: null, buyer: "Ted Leonsis / Monumental Sports & Entertainment", seller: "Pollin estate", notes: "Leonsis and partners bought out Pollin estate, gaining full control of Capitals, Wizards, and Capital One Arena; formed Monumental Sports & Entertainment" },
    ],
    arena: {
      name: "Capital One Arena",
      yearOpened: 1997,
      capacity: 18573,
      ownershipModel: "owned by Monumental Sports & Entertainment (Ted Leonsis entity); originally built by Abe Pollin with private financing of ~$200M; DC contributed ~$79M in site preparation and Metro expansion; Monumental fully owns arena since 2010; arena generates ~$65M annually in DC tax revenue",
      teamOwnsLand: false,
      publicSubsidy: 79,
      privateFinancing: 200,
      namingRightsDeal: { sponsor: "Capital One", annualValue_M: 8, totalValue_M: null, expiryYear: 2027, notes: "Capital One (McLean, VA-based bank) naming rights since 2017 when it replaced Verizon Center name; estimated $8M/year; Verizon Center replaced MCI Center (named for MCI Communications $44M/13yr deal in 1997); series of naming-rights deals reflects DC corporate market depth" },
      nonArenaRevenue: "Monumental owns arena outright — full event economics accrue to ownership including concerts, events, Georgetown basketball. Capital One Arena is one of DC's top entertainment venues; arena-generated tax revenue of ~$65M/year cited in DC stadium negotiations",
      newArenaPlans: "Capitals and Wizards engaged in arena debate 2022-2024 around potential Virginia relocation; $515M DC deal (2024) commits both teams to Capital One Arena through ~2050 with public renovation funding; Monumental agreed to major renovations keeping teams in downtown DC"
    },
    media: {
      localTVDeal: "Monumental Sports Network (team-owned regional streaming/broadcast network); Capitals followed the RSN-collapse playbook and launched own direct streaming service; team captures full local media economics without RSN middleman",
      streamingNotes: "Monumental Sports Network app/streaming direct subscription; NHL.TV League Pass; national ESPN+/Hulu and TNT/Max",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Ted Leonsis (Monumental Sports & Entertainment)",
      ownerNetWorth: "~$1.5B (AOL background; sports empire)",
      ownerBackground: "Ted Leonsis joined AOL as employee and became Vice Chairman; used AOL wealth to buy into DC sports starting 1999. Consolidated full ownership of Capitals, Wizards, and arena in 2010. Built Monumental Sports & Entertainment into major regional sports empire (Capitals, Wizards, Mystics WNBA, various others). Pursuing MLB and MLS team additions as of 2025-26. Also acquired CapFriendly (NHL analytics tool) in 2024 — unusual owner investment in analytics infrastructure.",
      acquisitionYear: 2010,
      acquisitionPrice: 0.085,
      currentValuation: 2.1,
      impliedReturn: "~24.7x on $85M 1999 entry in 25 years (~14% CAGR); one of top returns in NHL ownership history",
      ownershipGroup: [
        { name: "Ted Leonsis", role: "majority owner / governor", pct: null },
        { name: "Monumental Sports & Entertainment", role: "operating entity (Leonsis-controlled)", pct: null }
      ],
      institutionalInvestors: "Private; no disclosed PE institutional investors",
      otherBusinessInterests: "Washington Wizards (NBA), Washington Mystics (WNBA), Capital One Arena (owned), Monumental Sports Network, CapFriendly (analytics acquisition 2024); pursuing MLB team (expansion or purchase) and MLS team as of 2025"
    },
    brand: {
      socialMedia: { instagram: "~1.6M", twitter: "~1.2M", facebook: "~2.3M" },
      merchandiseNotes: "2018 Stanley Cup and Alex Ovechkin's record-breaking goals chase sustain top-tier merchandise brand; Ovechkin is among the three most globally recognized names in hockey history; post-Ovechkin merchandise cycle will be a key test",
      internationalFanbase: "Strong; particularly large Russian fanbase via Ovechkin; significant European following due to Ovechkin's global popularity and ambassadorial role for hockey in non-traditional markets",
      notableSponsorships: ["Capital One (arena naming)", "Geico", "Chipotle", "Slapshot Energy (Ovechkin personal brand)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Alex Ovechkin — 5yr/$47.5M ($9.5M AAV) signed July 2021, through 2025-26; broke Gordie Howe all-time goals record 2023; contract ends after 2025-26 season",
      starContracts: [
        { player: "Alex Ovechkin", position: "LW", aav: 9.5, contractNote: "5yr/$47.5M signed July 2021, through 2025-26 (age 40 season); broke Gordie Howe's all-time NHL goals record (894 career goals); one final season remaining; retirement to be determined after 2025-26" },
        { player: "Dylan Strome", position: "C", aav: 7.35, contractNote: "7yr/$51.45M signed 2022, through 2028-29; franchise C post-Ovechkin" },
        { player: "Tom Wilson", position: "RW/LW", aav: 7.25, contractNote: "7yr/$50.75M signed 2021, through 2027-28; power-forward cornerstone" }
      ]
    },
    analystNotes: "Washington's most pressing valuation question is the Ovechkin transition: the franchise's ~$1.2B valuation appreciation from $900M (2019) to $2.1B (2024) was substantially driven by Ovechkin's record-breaking run and the 2018 Stanley Cup's sustained merchandise and sponsorship momentum. Ted Leonsis's media strategy — launching Monumental Sports Network to own the local broadcast feed outright — mirrors the Hurricanes model and positions the franchise well for RSN-era disruption. The $515M DC arena deal (2024) locking teams through ~2050 provides long-term venue stability. The post-Ovechkin era beginning in 2026-27 is the central near-term risk, though Leonsis's reputation as an active owner pursuing MLB/MLS additions suggests continued capital deployment in DC sports infrastructure."
  },

"Utah Hockey Club": {
    valuationHistory: [
      { year: 2019, value: 0.42, source: "Forbes (as Arizona Coyotes)" },
      { year: 2020, value: 0.40, source: "Forbes (as Arizona Coyotes)" },
      { year: 2021, value: 0.43, source: "Forbes (as Arizona Coyotes)" },
      { year: 2022, value: 0.43, source: "Forbes (as Arizona Coyotes)" },
      { year: 2023, value: 0.50, source: "Forbes (as Arizona Coyotes)" },
      { year: 2024, value: 1.20, source: "Forbes / Ryan Smith acquisition price — relocation premium" },
    ],
    revenue: { estimate: 120, year: 2024, source: "Forbes / estimated first-season Utah revenue", operatingIncome: -15 },
    transactions: [
      { year: 2024, price: 1.2, buyer: "Ryan Smith / Smith Entertainment Group", seller: "Arizona Coyotes ownership (Alex Meruelo group; NHL seized assets)", notes: "NHL voided the Arizona Coyotes' Mullett Arena lease in April 2023; NHL purchased the Coyotes' hockey assets and sold them to Ryan Smith for $1.2B in Dec 2023; team relocated to Salt Lake City for 2024-25 as Utah Hockey Club; renamed Utah Mammoth after inaugural season" }
    ],
    arena: {
      name: "Delta Center",
      yearOpened: 1991,
      capacity: 16200,
      ownershipModel: "Smith Entertainment Group owns Delta Center (also Utah Jazz NBA); Utah Hockey Club and Jazz co-tenant; $900M public-private renovation approved — $525M public for arena upgrades + new surrounding district; dedicated hockey arena long-term TBD",
      teamOwnsLand: true,
      publicSubsidy: 525,
      privateFinancing: 375,
      namingRightsDeal: { sponsor: "Delta Air Lines", annualValue_M: 5.5, totalValue_M: null, expiryYear: null, notes: "Delta naming rights predate hockey; deal held by SEG for both Jazz and Utah HC; terms not publicly disclosed for hockey-specific portion" },
      nonArenaRevenue: "Smith Entertainment Group controls arena economics across both NHL and NBA tenants; concert and event revenue shared; True North Square-style district development planned around Delta Center",
      newArenaPlans: "Salt Lake City council approved $900M package (2025); dedicated hockey-only arena in the district is under discussion but not confirmed; short-term Delta Center capacity constraints noted (16,200 among the smallest in NHL)"
    },
    media: {
      localTVDeal: "KJZZ (local broadcast) + streaming-forward distribution model; partial deal with Utah-area RSN; team exploring direct-to-consumer given RSN industry collapse",
      streamingNotes: "ESPN+/Hulu for national games; Utah HC leaning into streaming distribution as first-year franchise",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Ryan Smith (Smith Entertainment Group)",
      ownerNetWorth: "~$2.6B (Forbes est.); co-founded Qualtrics, sold to SAP for $8B in 2019",
      ownerBackground: "Utah native; co-founded Qualtrics (employee experience software) with brother Jared Smith; sold to SAP for $8B in 2019; purchased Utah Jazz from Gail Miller family in 2020 for ~$1.66B; purchased NHL hockey assets from the league for $1.2B in 2023 to create Utah Hockey Club; youngest NBA/NHL dual-market owner in league history",
      acquisitionYear: 2024,
      acquisitionPrice: 1.2,
      currentValuation: 1.2,
      impliedReturn: "Day-1 hold; no appreciation yet; comparable expansion teams (Seattle Kraken) show strong first-5yr CAGR as market matures",
      ownershipGroup: [
        { name: "Ryan Smith", role: "majority owner / governor", pct: null },
        { name: "Smith Entertainment Group", role: "holding entity (Jazz + Utah HC)", pct: null }
      ],
      institutionalInvestors: "Structure undisclosed; NHL approved ownership; no announced PE investors",
      otherBusinessInterests: "Utah Jazz (NBA), Qualtrics (post-SAP acquisition equity), Salt Lake real estate development"
    },
    brand: {
      socialMedia: { instagram: "~200K", twitter: "~120K", facebook: "~80K" },
      merchandiseNotes: "Brand-new franchise; Utah Mammoth rebrand after inaugural season adds identity; mountain-west outdoor aesthetic resonates with Utah market; merchandise revenue minimal in year one",
      internationalFanbase: "Minimal established base; NHL expansion fanbase-building playbook mirrors Vegas Golden Knights trajectory",
      notableSponsorships: ["Delta Air Lines (arena naming)", "Intermountain Health (jersey patch)", "Vivint (regional)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Clayton Keller — 8yr/$67.2M ($8.4M AAV) signed 2023, inherited as top scorer from Arizona roster",
      starContracts: [
        { player: "Clayton Keller", position: "C/LW", aav: 8.4, contractNote: "8yr/$67.2M, signed Jul 2023, runs through 2030-31; team captain and top scorer" },
        { player: "Mikhail Sergachev", position: "D", aav: 8.5, contractNote: "7yr/$59.5M, signed 2023 (acquired from Tampa); defensive anchor" }
      ]
    },
    analystNotes: "Utah Hockey Club is the NHL's most asymmetric new-franchise bet: Ryan Smith paid $1.2B for hockey assets that were worth ~$0.5B as the struggling Coyotes, with the relocation premium baked into the acquisition price. The Vegas Golden Knights comparables are instructive — Vegas opened at a $500M expansion fee in 2016 and crossed $1B+ within 3 years; Utah enters at $1.2B in a growing, sports-starved mid-size market. The critical near-term risk is Delta Center capacity (16,200 seats — smallest arena in the NHL) limiting gate revenue until the $900M district renovation or a dedicated hockey arena is built. Smith's dual-ownership of the Jazz creates cross-sport synergies but also means arena decisions must balance NBA and NHL scheduling economics."
  },

  "Chicago Blackhawks": {
    valuationHistory: [
      { year: 2019, value: 1.0,  source: "Forbes" },
      { year: 2020, value: 1.0,  source: "Forbes" },
      { year: 2021, value: 1.25, source: "Forbes" },
      { year: 2022, value: 1.80, source: "Forbes" },
      { year: 2023, value: 2.05, source: "Forbes" },
      { year: 2024, value: 2.45, source: "Forbes" },
    ],
    revenue: { estimate: 225, year: 2023, source: "Forbes", operatingIncome: 12 },
    transactions: [
      { year: 1954, price: 0.001, buyer: "Arthur Wirtz", seller: "James Norris Sr. estate", notes: "Arthur Wirtz acquired controlling interest; began Wirtz family era" },
      { year: 2007, price: null, buyer: "Rocky Wirtz (inherited)", seller: "Bill Wirtz (died Sept 2007)", notes: "Rocky Wirtz inherited franchise and immediately reversed 40-year local TV blackout policy; transformed franchise economics; laid groundwork for dynasty era" },
      { year: 2023, price: null, buyer: "Danny Wirtz (inherited)", seller: "Rocky Wirtz (died July 2023)", notes: "Rocky Wirtz died at 70; Danny Wirtz (son) became CEO and Chairman; franchise continuity maintained; Danny inherits Connor Bedard rebuild era" }
    ],
    arena: {
      name: "United Center",
      yearOpened: 1994,
      capacity: 20917,
      ownershipModel: "50/50 owned by Wirtz family (Blackhawks) and Jerry Reinsdorf (Bulls); United Center Joint Venture LLC; largest arena in NHL by capacity; third-largest in NBA",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 175,
      namingRightsDeal: { sponsor: "United Airlines", annualValue_M: 8, totalValue_M: null, expiryYear: null, notes: "United Airlines naming rights deal reportedly ~$8M/yr; shared between Blackhawks and Bulls ownership entity; one of the longest-standing arena naming deals in North America" },
      nonArenaRevenue: "Wirtz/Reinsdorf planning $7B mixed-use development on 55+ acres surrounding United Center — the 'United Center District'; would include housing, retail, hotels, entertainment; one of the most ambitious arena-adjacent real estate projects in US sports",
      newArenaPlans: "$7B United Center District mixed-use development announced 2024; no United Center replacement planned; current arena through at least 2040s; city and state public financing discussions ongoing for district infrastructure"
    },
    media: {
      localTVDeal: "Chicago Sports Network (CHSN) — new RSN launched 2023 as replacement for Bally Sports Chicago; Blackhawks, Bulls, Cubs, White Sox, and Fire are CHSN equity partners; co-owned model; launched at team-favorable economics vs. prior Diamond Sports structure",
      streamingNotes: "ESPN+/Hulu for national games; CHSN direct streaming available for local games; Blackhawks among first teams to have equity ownership in their own RSN",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Danny Wirtz (Wirtz Corporation)",
      ownerNetWorth: "Wirtz Corporation privately held; Rocky Wirtz est. ~$3.5B at death; Danny Wirtz inherited",
      ownerBackground: "Wirtz family has owned franchise since 1954; Arthur → Bill → Rocky → Danny; Rocky Wirtz (2007-2023) revolutionized franchise by ending local TV blackout, building dynasty (3 Cups 2010/2013/2015), and constructing modern analytics/scouting infrastructure; Rocky died July 2023 at 70; Danny became CEO/Chairman and is managing the Bedard rebuild era. Wirtz Corporation is a diversified holding company (real estate, beverage distribution via Breakthru Beverage Group, insurance)",
      acquisitionYear: 1954,
      acquisitionPrice: 0.001,
      currentValuation: 2.45,
      impliedReturn: "Essentially infinite on original cost; 70+ year family hold",
      ownershipGroup: [
        { name: "Danny Wirtz", role: "chairman / CEO / governor", pct: null },
        { name: "Wirtz Corporation", role: "controlling entity", pct: null }
      ],
      institutionalInvestors: "No announced institutional investors; family-controlled",
      otherBusinessInterests: "Wirtz Corporation: Breakthru Beverage Group (one of largest US wine/spirits distributors), real estate (Chicago and national), United Center Joint Venture (50% with Reinsdorf)"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~1.3M", facebook: "~2.8M" },
      merchandiseNotes: "Top-10 NHL merchandise franchise; dynasty-era Toews/Kane jerseys remain perennial sellers despite both players departing; Connor Bedard driving new jersey cycle as franchise centrepiece; Original Six premium supports floor on merchandise",
      internationalFanbase: "Strong European and North American brand from Original Six status and dynasty wins; Bedard (Canadian) supports Canadian market; limited Asia-Pacific penetration vs. other Original Six",
      notableSponsorships: ["United Airlines (arena naming)", "Guaranteed Rate (jersey patch)", "BMO (financial services)", "New Era", "CHSN (equity partner)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Connor Bedard — 3yr ELC at $950K cap hit (signed July 2023), ELC expires after 2025-26; extension negotiations began 2025; widely projected 8yr deal ~$10-12M AAV",
      starContracts: [
        { player: "Connor Bedard", position: "C", aav: 0.95, contractNote: "3yr ELC, $950K cap hit through 2025-26; extension talks expected to reset AAV to $10M+ range; 2023 #1 overall pick" },
        { player: "Seth Jones", position: "D", aav: 9.5, contractNote: "8yr/$76M signed 2021, through 2028-29; highest-paid defenseman at signing; on-ice performance has underwhelmed vs. contract" }
      ]
    },
    analystNotes: "The Blackhawks are simultaneously one of the most compelling rebuild stories in NHL history and a classic franchise-valuation floor play: Original Six status, 20,000+ seat arena, Chicago market, and CHSN equity ownership provide a $2B+ floor regardless of on-ice performance. Connor Bedard — the generational talent who drove $0.40B→$2.45B valuation appreciation from draft lottery probability alone — is now the actual franchise cornerstone. The $7B United Center District development is a decade-long optionality play that, if executed, would rival Oracle Park (Giants) as the most ambitious team-led real estate development in North American sports. Primary risk: Seth Jones' $9.5M AAV underperforming and cap inflexibility limiting the rebuild timeline around Bedard."
  },

  "Colorado Avalanche": {
    valuationHistory: [
      { year: 2019, value: 0.69, source: "Forbes" },
      { year: 2020, value: 0.70, source: "Forbes" },
      { year: 2021, value: 0.63, source: "Forbes" },
      { year: 2022, value: 0.90, source: "Forbes" },
      { year: 2023, value: 1.15, source: "Forbes" },
      { year: 2024, value: 1.45, source: "Forbes / CNBC" },
    ],
    revenue: { estimate: 185, year: 2023, source: "Forbes", operatingIncome: 18 },
    transactions: [
      { year: 1995, price: 0.075, buyer: "COMSAT Entertainment (later Ascent Entertainment)", seller: "Quebec Nordiques (relocated)", notes: "NHL approved relocation of Quebec Nordiques to Denver; COMSAT paid ~$75M; franchise renamed Colorado Avalanche; won Stanley Cup in inaugural Denver season 1996" },
      { year: 2000, price: 0.202, buyer: "Kroenke Sports & Entertainment (Stan Kroenke)", seller: "Ascent Entertainment / Liberty Media", notes: "Stan Kroenke acquired the Avalanche (and Nuggets) for $202M; began building the most diversified sports empire in the world (Rams, Arsenal, Avalanche, Nuggets, Rapids, Mammoth)" }
    ],
    arena: {
      name: "Ball Arena",
      yearOpened: 1999,
      capacity: 18007,
      ownershipModel: "Kroenke Sports & Entertainment owns Ball Arena outright; Avalanche and Nuggets co-tenants; KSE controls all arena P&L including concerts and events; Denver City Council approved rezoning of 55+ acres around Ball Arena for mixed-use development; team committed to downtown Denver through 2050",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 160,
      namingRightsDeal: { sponsor: "Ball Corporation", annualValue_M: 6, totalValue_M: 116, expiryYear: 2030, notes: "Ball Corporation (aerospace/packaging) naming rights signed 2020, 10-yr deal; previously Pepsi Center (1999-2020); $116M total / ~$6M/yr estimate" },
      nonArenaRevenue: "KSE retains full arena economics across both NHL and NBA; concert/event revenue substantial in one of Denver's premier venues; Ball Arena district development (mixed-use housing, retail, entertainment) represents multi-decade optionality",
      newArenaPlans: "No arena replacement planned; Ball Arena district mixed-use redevelopment of surrounding parking lots approved by Denver City Council 2024; franchise committed through 2050 under KSE deal"
    },
    media: {
      localTVDeal: "Altitude Sports (KSE-owned RSN); Kroenke also owns Altitude — rare vertical integration where team owner controls RSN; immune to Diamond Sports / Bally collapse; terms not publicly disclosed as intracompany transaction",
      streamingNotes: "ESPN+/Hulu for national games; Altitude direct streaming; KSE-owned RSN avoids third-party dependency",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Stan Kroenke (Kroenke Sports & Entertainment)",
      ownerNetWorth: "~$14B (Forbes 2024); Walmart heir (married Ann Walton), KSE, real estate",
      ownerBackground: "Stan Kroenke built world's most diversified sports ownership empire: NFL Los Angeles Rams, NHL Colorado Avalanche, NBA Denver Nuggets, Premier League Arsenal FC, MLS Colorado Rapids, NLL Colorado Mammoth, and NWSL Colorado Rapids (women's). Married to Ann Walton Kroenke (Walmart heiress). KSE paid $202M for Avalanche+Nuggets in 2000; portfolio now valued at $21B+ (2025, Denver Gazette). Also owns Altitude Sports RSN — vertical integration across all Denver sports content.",
      acquisitionYear: 2000,
      acquisitionPrice: 0.202,
      currentValuation: 1.45,
      impliedReturn: "~7x on $202M blended Avs+Nuggets acquisition over 25 years (~8% CAGR); significantly understates portfolio value given Arsenal (~$3B), Rams (~$6.5B) appreciation",
      ownershipGroup: [
        { name: "Stan Kroenke", role: "majority owner / governor", pct: null },
        { name: "Ann Walton Kroenke", role: "co-owner", pct: null },
        { name: "KSE", role: "operating holding entity (Avs, Nuggets, Rams, Arsenal, Rapids, Altitude Sports)", pct: null }
      ],
      institutionalInvestors: "No public institutional investors; 100% Kroenke family",
      otherBusinessInterests: "Los Angeles Rams (NFL), Arsenal FC (Premier League), Denver Nuggets (NBA), Colorado Rapids (MLS), Colorado Mammoth (NLL), Altitude Sports (RSN), real estate (KSE Real Estate)"
    },
    brand: {
      socialMedia: { instagram: "~650K", twitter: "~660K", facebook: "~1.2M" },
      merchandiseNotes: "2022 Stanley Cup winners driving merchandise cycle; Nathan MacKinnon GOAT-level recognition supports premium jersey sales; Colorado mountain aesthetic has broad national appeal; relatively young franchise (1995) building generational fanbase",
      internationalFanbase: "MacKinnon (Canadian), Makar (Canadian) support strong Canadian market; Gabriel Landeskog (Swedish) international base; European following solid for mid-market US franchise",
      notableSponsorships: ["Ball Corporation (arena naming)", "Coors Light (primary)", "Pepsi (legacy partner)", "DISH Network", "Kroenke-owned Altitude Sports"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Nathan MacKinnon — 8yr/$100.8M ($12.6M AAV) signed 2022, through 2030-31; 2024 Hart Trophy winner; widely considered best player in NHL",
      starContracts: [
        { player: "Nathan MacKinnon", position: "C", aav: 12.6, contractNote: "8yr/$100.8M signed Jun 2022, through 2030-31; Hart Trophy 2024; increasingly looks like a bargain vs. Kaprizov's $17M reset" },
        { player: "Cale Makar", position: "D", aav: 9.0, contractNote: "6yr/$54M signed 2022, through 2027-28; 2022 Conn Smythe; consensus best defenseman in NHL" },
        { player: "Mikko Rantanen", position: "RW", aav: 9.25, contractNote: "5yr/$46.25M through 2025-26; extension negotiations or trade decision anticipated 2025-26" }
      ]
    },
    analystNotes: "The Avalanche represent the strongest pure hockey asset play in the Central Division: Nathan MacKinnon's 8yr/$12.6M AAV is arguably the most undervalued contract in pro sports, signed just before Kaprizov's $17M reset — MacKinnon is locked through 2030-31 at a price that is 26% below the new market comp. The KSE ownership structure (team + arena + RSN vertical integration) eliminates media rights leakage and creates durable free cash flow; KSE is not a forced seller. The central risk is that Rantanen's contract expires, creating a potential roster cliff, and that the Denver market (~3M metro) caps audience relative to coastal alternatives — the franchise needs continued on-ice success to sustain $1.5B+ valuation multiples."
  },

  "Dallas Stars": {
    valuationHistory: [
      { year: 2019, value: 0.75, source: "Forbes" },
      { year: 2020, value: 0.75, source: "Forbes" },
      { year: 2021, value: 0.80, source: "Forbes" },
      { year: 2022, value: 1.15, source: "Forbes" },
      { year: 2023, value: 1.45, source: "Forbes" },
      { year: 2024, value: 1.94, source: "Forbes / Sportico" },
    ],
    revenue: { estimate: 230, year: 2023, source: "Forbes", operatingIncome: 59 },
    transactions: [
      { year: 1995, price: 0.082, buyer: "Tom Hicks", seller: "Norm Green (relocated from Minnesota North Stars)", notes: "Tom Hicks acquired the franchise; won Stanley Cup in 1999 under Hicks ownership" },
      { year: 2011, price: 0.240, buyer: "Tom Gaglardi / Northland Properties", seller: "NHL (bankruptcy trustee)", notes: "Tom Hicks' Sports Group filed Chapter 11 bankruptcy in 2010; NHL oversaw sale; Canadian hotelier Tom Gaglardi won the bid at $240M; one of the best-timed franchise acquisitions in NHL history" }
    ],
    arena: {
      name: "American Airlines Center",
      yearOpened: 2001,
      capacity: 18532,
      ownershipModel: "Owned by Dallas Arena LLC (joint venture of Dallas Stars and Dallas Mavericks); Stars and Mavs are equal co-tenants and co-owners; managed by ASM Global; city of Dallas provided $125M in public bonds, repaid through hotel/car rental taxes — franchise retains operational control",
      teamOwnsLand: true,
      publicSubsidy: 125,
      privateFinancing: 295,
      namingRightsDeal: { sponsor: "American Airlines", annualValue_M: 6.5, totalValue_M: null, expiryYear: 2031, notes: "American Airlines (headquartered in Fort Worth) naming rights ~$6.5M/yr; deal includes Stars and Mavericks; among the most prominent aviation-named arenas in North America" },
      nonArenaRevenue: "Stars and Mavs share arena net revenue under co-ownership structure; concert and event revenue splits per agreement; Victory Park district development around AAC (hotels, restaurants, entertainment) benefits both franchises",
      newArenaPlans: "American Airlines Center lease expires ~2031; Dallas-area arena district conversations ongoing; no firm replacement plans announced as of 2024; Mavs potentially exploring separate new arena"
    },
    media: {
      localTVDeal: "Victory+ (team-owned direct streaming platform launched 2023); Stars became one of first NHL teams to launch own direct-to-consumer streaming after Bally Sports North collapsed; local games on KFAA broadcast partner; pioneering post-RSN media model",
      streamingNotes: "ESPN+/Hulu for national games; Victory+ direct streaming replaces traditional RSN; cost $4.99/month vs. old cable bundle; Stars capturing full local media revenue without RSN middleman",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Tom Gaglardi (Northland Properties)",
      ownerNetWorth: "~$5B (est.); Northland Properties is one of Canada's largest private hotel/hospitality companies",
      ownerBackground: "Tom Gaglardi is the son of Bob Gaglardi, founder of Northland Properties (Sandman Hotels, Moxie's restaurants, Shark Club); Tom runs Northland and acquired Stars out of bankruptcy for $240M in 2011; born in BC, Canada; one of the few Canadian-ownership NHL teams in a US market. Northland Properties is privately held — Gaglardi family wealth is not publicly disclosed but estimated at $4-6B range from hotel portfolio.",
      acquisitionYear: 2011,
      acquisitionPrice: 0.240,
      currentValuation: 1.94,
      impliedReturn: "~8x on $240M bankruptcy purchase in 13 years (~17% CAGR) — one of the best-returning NHL acquisitions",
      ownershipGroup: [
        { name: "Tom Gaglardi", role: "majority owner / governor", pct: null },
        { name: "Northland Properties", role: "operating holding entity", pct: null }
      ],
      institutionalInvestors: "No announced institutional investors; family-controlled",
      otherBusinessInterests: "Northland Properties: Sandman Hotels (~50 properties), Moxie's Grill & Bar, Shark Club Sports Bar, real estate (Canada/US)"
    },
    brand: {
      socialMedia: { instagram: "~430K", twitter: "~530K", facebook: "~950K" },
      merchandiseNotes: "Strong Sun Belt franchise brand; recent playoff success (2024 Western Conference Final) driving merchandise cycle; Victory+ direct streaming model creates new fan data/engagement channels; Texas hockey market is fastest-growing in NHL",
      internationalFanbase: "Czech-heavy roster historically (Pavelski era); Jason Robertson (Canadian) emerging as face; limited international penetration vs. Canadian markets but Texas hockey culture growing",
      notableSponsorships: ["American Airlines (arena naming)", "Victory+ (team-owned streaming)", "Bank of America", "Southwest Airlines", "Pepsi"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Jason Robertson — 4yr bridge deal at $7.75M AAV (through 2025-26); extension at $11-13M AAV anticipated; top-10 NHL scorer",
      starContracts: [
        { player: "Jason Robertson", position: "LW", aav: 7.75, contractNote: "4yr/$31M bridge deal through 2025-26; extension at ~$11-13M projected given Kaprizov market reset; extension or trade decision defines Stars' 2026-27 cap structure" },
        { player: "Roope Hintz", position: "C", aav: 8.45, contractNote: "8yr/$67.6M signed 2022, through 2029-30; franchise center" },
        { player: "Miro Heiskanen", position: "D", aav: 8.45, contractNote: "8yr/$67.6M signed 2021, through 2028-29; elite two-way defenseman" }
      ]
    },
    analystNotes: "The Dallas Stars are the canonical NHL franchise turnaround story: Gaglardi's $240M 2011 bankruptcy acquisition is an ~8x return in 13 years, and the team's launch of Victory+ direct streaming positions it at the frontier of post-RSN media economics — a model the rest of the NHL is watching closely. The Texas/DFW market (7M+ metro, fastest-growing NHL region) provides a long runway for valuation growth that more mature Midwest/Canadian markets cannot replicate. The primary uncertainty is Jason Robertson's contract extension: an impasse heading into 2025-26 RFA year creates either a franchise-player retention cost ($11-13M AAV) that tightens the Heiskanen/Hintz core, or a trade scenario that resets the competitive window."
  },

  "Minnesota Wild": {
    valuationHistory: [
      { year: 2019, value: 0.68, source: "Forbes" },
      { year: 2020, value: 0.68, source: "Forbes" },
      { year: 2021, value: 0.72, source: "Forbes" },
      { year: 2022, value: 0.94, source: "Forbes" },
      { year: 2023, value: 1.25, source: "Forbes" },
      { year: 2024, value: 1.60, source: "Forbes / CNBC (#21)" },
    ],
    revenue: { estimate: 175, year: 2023, source: "Forbes", operatingIncome: 20 },
    transactions: [
      { year: 2000, price: 0.080, buyer: "Bob Naegele Jr. (founding owner)", seller: "NHL expansion franchise", notes: "Minnesota Wild awarded as NHL expansion franchise for the 2000-01 season; Naegele led local investment group; $80M expansion fee" },
      { year: 2008, price: 0.260, buyer: "Craig Leipold (Minnesota Sports & Entertainment)", seller: "Bob Naegele Jr.", notes: "Leipold (who had previously owned the Nashville Predators 1997-2007) bought the Wild from founding owner Naegele; acquisition announced Jan 2008 for ~$260M; Leipold also owns Xcel Energy Center" }
    ],
    arena: {
      name: "Xcel Energy Center",
      yearOpened: 2000,
      capacity: 17954,
      ownershipModel: "Owned by Minnesota Sports & Entertainment (Craig Leipold); one of the few NHL arenas directly owned by the franchise ownership group (not city/county); team retains all arena P&L including concerts, events, and non-hockey programming",
      teamOwnsLand: true,
      publicSubsidy: 65,
      privateFinancing: 105,
      namingRightsDeal: { sponsor: "Xcel Energy", annualValue_M: 3.6, totalValue_M: null, expiryYear: 2026, notes: "Xcel Energy (utility company) naming rights; deal set to expire ~2026; Wild asking $362M in public renovation funding (2026) in connection with arena upgrade discussions" },
      nonArenaRevenue: "MSE owns Xcel Energy Center outright — concert and event revenue fully accrues to franchise; Saint Paul RiverCentre convention center adjacent; True North Square-style residential/commercial development opportunities in downtown St. Paul",
      newArenaPlans: "Wild ownership asked Minnesota for $362M in arena renovation funding in March 2026; arguments center on Xcel Energy Center's role as a busy regional entertainment hub; negotiations with city/state ongoing"
    },
    media: {
      localTVDeal: "Bally Sports North (Diamond Sports / Sinclair) through 2024-25; Diamond Sports Group filed Chapter 11 in 2023 — Wild among teams working on post-Bally distribution alternative; direct streaming model being explored for 2025+",
      streamingNotes: "ESPN+/Hulu for national games; local streaming transition from Bally Sports North ongoing; Wild among NHL teams facing most acute RSN disruption given Diamond's bankruptcy",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Craig Leipold (Minnesota Sports & Entertainment)",
      ownerNetWorth: "~$2.5B (est.); founded Ameritel (hospitality); made fortune in hotel industry",
      ownerBackground: "Craig Leipold is a Wisconsin businessman who founded hospitality companies (Ameritel); originally purchased the Nashville Predators as a founding expansion owner in 1997 for $80M, and sold to a local consortium in 2007-09 after the franchise struggled; acquired the Minnesota Wild from Bob Naegele Jr. in 2008 for ~$260M. MSE also owns Xcel Energy Center, a lacrosse team, and catering operations. Leipold also invested as a limited partner in the Minnesota Twins (2024). Hockey is the centerpiece of his sports portfolio.",
      acquisitionYear: 2008,
      acquisitionPrice: 0.260,
      currentValuation: 1.60,
      impliedReturn: "~6x on $260M in 16 years (~11% CAGR)",
      ownershipGroup: [
        { name: "Craig Leipold", role: "majority owner / governor", pct: null },
        { name: "Minnesota Sports & Entertainment", role: "operating holding entity (Wild + Xcel Energy Center)", pct: null }
      ],
      institutionalInvestors: "No announced institutional investors; family-controlled",
      otherBusinessInterests: "Xcel Energy Center (owned), Minnesota Twins (limited partner, 2024), Wildside Caterers, Saint Paul RiverCentre partnership"
    },
    brand: {
      socialMedia: { instagram: "~410K", twitter: "~430K", facebook: "~1.0M" },
      merchandiseNotes: "Minnesota hockey culture is deeply embedded — state has highest per-capita hockey participation in US; Wild merchandise benefits from fiercely loyal regional fan base that extends to college and youth hockey; Kaprizov's explosive play driving jersey sales",
      internationalFanbase: "Russian fanbase following Kaprizov; Jared Spurgeon (Canadian) appeal; limited broad international brand but deep Midwest regional identity",
      notableSponsorships: ["Xcel Energy (arena naming)", "3M (primary sponsor)", "Treasure Island Resort & Casino (jersey patch)", "Kwik Trip", "Bell Bank"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Kirill Kaprizov — 8yr/$136M ($17M AAV) signed Sept 2025, begins 2026-27 through 2033-34; richest contract in NHL history at signing",
      starContracts: [
        { player: "Kirill Kaprizov", position: "LW", aav: 17.0, contractNote: "8yr/$136M signed Sept 2025, 2026-27 through 2033-34; NHL record AAV at signing; resets forward market above MacKinnon's $12.6M" },
        { player: "Matt Boldy", position: "LW", aav: 7.0, contractNote: "7yr/$49M signed 2023, through 2029-30; emerging second star alongside Kaprizov" },
        { player: "Filip Gustavsson", position: "G", aav: 6.25, contractNote: "5yr/$31.25M signed 2023, through 2027-28; franchise goalie" }
      ]
    },
    analystNotes: "Kaprizov's $17M/yr contract — the richest in NHL history — is simultaneously Minnesota's greatest franchise validation and its biggest cap risk: the Wild proved willing to pay market-resetting money to retain their franchise star, but $17M in a ~$88M cap era consumes ~19% of total cap space on one player, limiting roster construction flexibility. The franchise's unique arena ownership (team owns Xcel Energy Center outright) is a structural advantage that fully captures concert/event revenue other NHL tenants share with landlords — making MSE's blended yield per dollar invested materially higher than peers. The Bally Sports/Diamond collapse is the near-term earnings headwind; the Wild's post-RSN media transition will define local revenue trajectory through 2030."
  },

  "Nashville Predators": {
    valuationHistory: [
      { year: 2019, value: 0.64, source: "Forbes" },
      { year: 2020, value: 0.64, source: "Forbes" },
      { year: 2021, value: 0.70, source: "Forbes" },
      { year: 2022, value: 0.78, source: "Forbes" },
      { year: 2023, value: 0.99, source: "Forbes" },
      { year: 2024, value: 1.30, source: "Forbes / Haslam acquisition implied" },
    ],
    revenue: { estimate: 155, year: 2023, source: "Forbes", operatingIncome: 14 },
    transactions: [
      { year: 1997, price: 0.080, buyer: "Craig Leipold (founding expansion owner)", seller: "NHL expansion franchise", notes: "Predators awarded as expansion franchise; Leipold paid $80M expansion fee; founding owner through early franchise-building years" },
      { year: 2007, price: 0.193, buyer: "Predators Holdings LLC (17-investor local consortium)", seller: "Craig Leipold", notes: "Leipold sold to local Nashville consortium after franchise financial struggles; ~$193M; consortium included local business leaders committed to keeping franchise in Nashville" },
      { year: 2022, price: 0.775, buyer: "Bill Haslam (phased majority acquisition)", seller: "Predators Holdings LLC (partial)", notes: "Former Tennessee governor Bill Haslam agreed to purchase majority stake in 4 tranches from below $775M to above $900M; became chairman July 2024, majority owner July 2025; deal values franchise at $880M+ total; Nick Saban and Joe Agresti acquired minority stake Dec 2025" }
    ],
    arena: {
      name: "Bridgestone Arena",
      yearOpened: 1996,
      capacity: 17159,
      ownershipModel: "Powers Management LLC (subsidiary of Predators Holdings) operates Bridgestone Arena under long-term agreement with Metro Nashville; city originally built the arena; Predators are primary tenant with operational control; arena is anchor of Nashville's Lower Broadway entertainment district",
      teamOwnsLand: false,
      publicSubsidy: 144,
      privateFinancing: 60,
      namingRightsDeal: { sponsor: "Bridgestone Americas (tire manufacturer)", annualValue_M: 6, totalValue_M: null, expiryYear: 2028, notes: "Bridgestone naming rights ~$6M/yr; Bridgestone Americas is headquartered in Nashville — strong local corporate partner; deal includes Predators and venue events programming" },
      nonArenaRevenue: "Bridgestone Arena anchors Nashville's rapidly growing entertainment district; franchise captures event management revenue (concerts, events) via Powers Management operations agreement; Nashville's tourism boom benefits arena economics — among busiest mid-size arenas in US",
      newArenaPlans: "No near-term arena replacement plan; Bridgestone Arena lease discussions ongoing with Metro Nashville; long-term stadium district development discussions given Nashville's entertainment corridor growth"
    },
    media: {
      localTVDeal: "Bally Sports South (Diamond Sports / Sinclair) — facing disruption from Diamond Chapter 11 filing 2023; Predators working on post-Bally distribution; local broadcast on WZTV",
      streamingNotes: "ESPN+/Hulu for national games; post-Bally streaming transition in progress for local games; Nashville market exploring direct-to-consumer options",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Bill Haslam (majority since July 2025)",
      ownerNetWorth: "~$2.6B (Forbes 2024); Pilot Flying J truck stop chain (Haslam family)",
      ownerBackground: "Bill Haslam is the former Governor of Tennessee (2011-2019) and heir to the Pilot Flying J travel center fortune (one of the largest private US companies, sold majority to Berkshire Hathaway 2017-2023). He agreed to purchase majority stake in the Predators in a 4-tranche deal from 2022-2025 valued at $775M-$900M+. Became franchise chairman July 2024; assumed majority ownership July 2025 at ~57-65% stake. Nick Saban (Alabama football coach, retired) and Joe Agresti acquired a minority stake in December 2025.",
      acquisitionYear: 2022,
      acquisitionPrice: 0.880,
      currentValuation: 1.30,
      impliedReturn: "Haslam deal roughly break-even at inception; Sun Belt hockey market appreciation driving value post-acquisition",
      ownershipGroup: [
        { name: "Bill Haslam", role: "majority owner / governor", pct: 57 },
        { name: "Predators Holdings consortium", role: "remaining minority investors (~17 families)", pct: 43 },
        { name: "Nick Saban / Joe Agresti (Dream Sports Ventures)", role: "minority investor", pct: null }
      ],
      institutionalInvestors: "No announced institutional PE investors; franchise governance under Haslam family",
      otherBusinessInterests: "Pilot Flying J travel centers (Haslam family); Tennessee real estate; former Governor Haslam has board affiliations across corporate Tennessee"
    },
    brand: {
      socialMedia: { instagram: "~380K", twitter: "~400K", facebook: "~990K" },
      merchandiseNotes: "Nashville's growth as a major US entertainment destination drives hockey merchandise beyond traditional hockey demographics; Bridgestone Arena concert traffic creates cross-exposure to non-hockey fans; 2017 Stanley Cup Final run remains a defining brand moment",
      internationalFanbase: "Roman Josi (Swiss) provides European fan engagement; Finnish players historically (Rinne era) built Nordic following; limited broad international reach vs. Original Six",
      notableSponsorships: ["Bridgestone Americas (arena naming)", "Preds+ (direct streaming)", "Caterpillar Financial", "Truist", "Dollar General"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Roman Josi — 8yr/$72.5M ($9.06M AAV) signed 2019, through 2026-27; Norris Trophy winner 2020; franchise captain and best defenseman in franchise history",
      starContracts: [
        { player: "Roman Josi", position: "D", aav: 9.06, contractNote: "8yr/$72.5M signed 2019, through 2026-27; 2020 Norris Trophy; aging but still franchise captain; extension or succession planning imminent" },
        { player: "Filip Forsberg", position: "LW", aav: 8.50, contractNote: "8yr/$68M signed 2022, through 2029-30; franchise leading scorer; 2022 extension kept him in Nashville long-term" }
      ]
    },
    analystNotes: "Nashville represents the Sun Belt hockey thesis in its purest form: a market that barely had hockey culture in 1998 now ranks among the best NHL atmospheres, anchored by Bridgestone Arena's position as one of North America's busiest entertainment venues in the fastest-growing major US city. The Haslam acquisition's phased structure ($775M→$900M+ across 4 tranches) is itself a signal — it prices in franchise appreciation risk over a 4-year window, suggesting Haslam's thesis is long-term Nashville market growth rather than near-term operational leverage. The competitive risks are real: the Josi/Forsberg core is aging (both contracts expire by 2030) and the franchise lacks a clear succession plan at the elite tier; the window for a championship with this core is closing."
  },

  "St. Louis Blues": {
    valuationHistory: [
      { year: 2019, value: 0.50, source: "Forbes" },
      { year: 2020, value: 0.55, source: "Forbes" },
      { year: 2021, value: 0.65, source: "Forbes" },
      { year: 2022, value: 0.87, source: "Forbes (38% surge)" },
      { year: 2023, value: 1.14, source: "Forbes" },
      { year: 2024, value: 1.53, source: "Forbes / CNBC (#23)" },
    ],
    revenue: { estimate: 163, year: 2023, source: "Forbes", operatingIncome: 19 },
    transactions: [
      { year: 1967, price: 0.002, buyer: "Sid Salomon Jr./III (original expansion owners)", seller: "NHL expansion franchise", notes: "Blues awarded as 1967 expansion franchise for $2M; Salomon family built the team into a three-time Finals contender immediately" },
      { year: 1986, price: 0.012, buyer: "Harry Ornest", seller: "Ralston Purina (had bought franchise in 1977)", notes: "Complex ownership history; Ornest bought franchise out of financial difficulties for ~$12M" },
      { year: 2012, price: 0.180, buyer: "SLB Acquisition Holdings LLC (Tom Stillman-led group)", seller: "Sports Capital Holdings / Dave Checketts group", notes: "Stillman-led consortium bought franchise for $180M; SLB acquired remaining minority stake in 2019 achieving 100% ownership; 2019 Stanley Cup title follows within 7 years" }
    ],
    arena: {
      name: "Enterprise Center",
      yearOpened: 1994,
      capacity: 18096,
      ownershipModel: "City of St. Louis owns the building; Blues (SLB Acquisition Holdings) operate under long-term management agreement; franchise retains operational economics including events; city-owned structure common for mid-sized US NHL markets",
      teamOwnsLand: false,
      publicSubsidy: 135,
      privateFinancing: 35,
      namingRightsDeal: { sponsor: "Enterprise Holdings (Rent-A-Car)", annualValue_M: 5.6, totalValue_M: null, expiryYear: 2029, notes: "Enterprise Holdings (headquartered in St. Louis) naming rights; ~$5.6M/yr estimated; previously Kiel Center and Savvis Center; Enterprise is among the city's largest private employers — deep local corporate relationship" },
      nonArenaRevenue: "SLB operates Enterprise Center and retains event management revenue from concerts/events under operational agreement with City; downtown St. Louis mixed-use development ambitions around arena discussed but limited progress vs. peer markets",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Midwest (Diamond Sports Group) — facing Diamond's Chapter 11 disruption; Blues pursuing post-Bally options including direct streaming and potential new RSN arrangement with Sinclair successor entity",
      streamingNotes: "ESPN+/Hulu for national games; Blues Direct streaming offered for local games as Bally backup; RSN transition risk exists through 2025-26",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028); Canadian teams receive additional Rogers/Bell national revenue"
    },
    ownership: {
      primaryOwner: "Tom Stillman (SLB Acquisition Holdings LLC)",
      ownerNetWorth: "~$1B (est.); Schnuck Markets family background; diverse investment portfolio",
      ownerBackground: "Tom Stillman is a St. Louis businessman connected to the Schnuck supermarket family. He led the SLB Acquisition Holdings consortium that purchased the Blues in 2012 for $180M from the Dave Checketts ownership group. SLB acquired the remaining minority stake from Sports Capital Holdings LLC in June 2019, achieving 100% ownership — just in time for the Blues' 2019 Stanley Cup championship. Stillman is a low-profile operator focused on keeping the franchise in St. Louis long-term.",
      acquisitionYear: 2012,
      acquisitionPrice: 0.180,
      currentValuation: 1.53,
      impliedReturn: "~8.5x on $180M in 12 years (~17% CAGR); 2019 Stanley Cup adds championship premium to franchise value",
      ownershipGroup: [
        { name: "Tom Stillman", role: "chairman / governor / majority", pct: null },
        { name: "SLB Acquisition Holdings LLC", role: "controlling entity (100% owned per 2019 buyout)", pct: 100 }
      ],
      institutionalInvestors: "No announced institutional investors",
      otherBusinessInterests: "Diversified investment portfolio; Schnuck Markets family connections; St. Louis real estate and corporate affiliations"
    },
    brand: {
      socialMedia: { instagram: "~450K", twitter: "~580K", facebook: "~1.3M" },
      merchandiseNotes: "2019 Stanley Cup championship drove significant merchandise spike; Gloria (playoff anthem) created a cultural moment extending brand beyond traditional hockey demographics; Midwest hockey market is deeply loyal but geographically concentrated",
      internationalFanbase: "Swedish players (Pietrangelo era) built European following; 2019 Cup run generated broad North American interest; limited international footprint vs. Original Six",
      notableSponsorships: ["Enterprise Holdings (arena naming)", "Scottrade Bank (former, now Edward Jones)", "Anheuser-Busch InBev (St. Louis hometown)", "Boeing", "Edward Jones (current financial partner)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Jordan Kyrou — 8yr/$65M ($8.125M AAV) signed 2023, through 2030-31; breakout star after Ryan O'Reilly trade; becomes face of franchise in rebuild",
      starContracts: [
        { player: "Jordan Kyrou", position: "RW", aav: 8.125, contractNote: "8yr/$65M signed 2023, through 2030-31; franchise building block after O'Reilly and Perron departures" },
        { player: "Brayden Schenn", position: "C", aav: 6.50, contractNote: "7yr/$45.5M through 2026-27; veteran franchise center; contract approaching expiry" },
        { player: "Robert Thomas", position: "C", aav: 8.125, contractNote: "8yr/$65M signed 2023, through 2030-31; elite playmaker; forms new-era core with Kyrou" }
      ]
    },
    analystNotes: "The Blues' 2012 acquisition at $180M producing an ~8.5x return ($1.53B) with a Stanley Cup in the middle is a template mid-market NHL ownership success story: disciplined management, patient roster building, and a city whose identity is deeply tied to hockey. The franchise's structural challenge is Midwest geographic limitations — St. Louis is not a growth market at the speed of Dallas or Utah — and the Bally Sports/Diamond collapse is disrupting the local media economics that historically underpinned mid-market valuations. The Kyrou/Thomas core provides a credible 8-year growth runway, but the franchise will need to navigate the RSN transition and explore arena district development to sustain $1.5B+ valuations through 2030."
  },

  "Winnipeg Jets": {
    valuationHistory: [
      { year: 2019, value: 0.55, source: "Forbes" },
      { year: 2020, value: 0.55, source: "Forbes" },
      { year: 2021, value: 0.62, source: "Forbes" },
      { year: 2022, value: 0.73, source: "Forbes" },
      { year: 2023, value: 0.87, source: "Forbes" },
      { year: 2024, value: 1.05, source: "Forbes / Sportico (31st of 32 teams)" },
    ],
    revenue: { estimate: 145, year: 2023, source: "Forbes", operatingIncome: 22 },
    transactions: [
      { year: 1996, price: 0.065, buyer: "Richard Burke / Steven Gluckstern (Coyotes move)", seller: "Jets original owners (sold franchise)", notes: "Original Winnipeg Jets sold to Arizona; franchise left Winnipeg 1996 amid small-market viability concerns; became Phoenix Coyotes" },
      { year: 2011, price: 0.170, buyer: "True North Sports & Entertainment (Mark Chipman / David Thomson)", seller: "NHL (Atlanta Thrashers relocated)", notes: "TNSE purchased the Atlanta Thrashers from NHL for $170M; relocated to Winnipeg as Jets 2.0; Chipman (local business leader) and Thomson (Thomson Reuters heir) partnership; $170M is now ~$1.05B — ~6x appreciation" }
    ],
    arena: {
      name: "Canada Life Centre",
      yearOpened: 2004,
      capacity: 15321,
      ownershipModel: "True North Sports & Entertainment owns Canada Life Centre; Jets fully control arena economics including concerts and events; smallest capacity arena in the NHL at 15,321; True North also developed True North Square (mixed-use residential/commercial/entertainment complex adjacent to arena)",
      teamOwnsLand: true,
      publicSubsidy: 40,
      privateFinancing: 130,
      namingRightsDeal: { sponsor: "Canada Life Assurance Company (Great-West Lifeco subsidiary)", annualValue_M: 3.5, totalValue_M: null, expiryYear: 2030, notes: "Canada Life naming rights; Canadian insurance company headquartered in Winnipeg; previously MTS Centre and Bell MTS Place; local corporate naming reflects deep Manitoba business community ties" },
      nonArenaRevenue: "TNSE owns arena and True North Square (180K sq ft office, retail, residential); downtown Winnipeg real estate development adds significant non-hockey cash flows; Winnipeg's most transformative mixed-use development project",
      newArenaPlans: "No near-term arena replacement; Canada Life Centre capacity (15,321) is NHL's smallest and limits revenue upside; renovation discussions intermittent but no major announcement"
    },
    media: {
      localTVDeal: "TSN (Bell Media) regional broadcasts; Rogers Sportsnet national Canadian deal covers Jets games; Canadian team — benefits from NHL's Rogers/Bell national rights structure which provides meaningfully higher per-team national revenue than US-market teams",
      streamingNotes: "NHL Centre Ice streaming; Sportsnet NOW for Canadian subscribers; ESPN+/Hulu for US broadcast; Canadian games well-distributed via Rogers/Bell infrastructure",
      nationalShareNote: "Canadian teams (including Jets) receive meaningful premium from Rogers Sportsnet 12yr/$5.2B national Canadian rights deal (through 2025-26); total Canadian national contribution estimated $40-60M/team/year vs ~$19M for US teams; new Canadian deal post-2026 under negotiation"
    },
    ownership: {
      primaryOwner: "Mark Chipman (operating partner) / David Thomson (financial backer)",
      ownerNetWorth: "David Thomson: ~$70B (Forbes 2024, heir to Thomson Reuters empire — one of world's richest people); Mark Chipman: private, Winnipeg business leader",
      ownerBackground: "True North Sports & Entertainment is co-led by Mark Chipman (Winnipeg native, local real estate/business background, day-to-day operator) and David Thomson (3rd Baron Thomson of Fleet, heir to Thomson Reuters fortune — one of the world's 30 richest individuals). Thomson family's financial backing provides unlimited runway for the franchise despite Winnipeg's small-market economics. The partnership structure (Chipman operates, Thomson bankrolls) ensures the Jets never face viability issues that plagued the original Jets. TNSE also developed True North Square, the largest downtown Winnipeg real estate development in decades.",
      acquisitionYear: 2011,
      acquisitionPrice: 0.170,
      currentValuation: 1.05,
      impliedReturn: "~6x on $170M in 13 years (~14% CAGR); CAD/USD currency risk on operating revenues partially offsets CAD appreciation vs. USD valuation",
      ownershipGroup: [
        { name: "Mark Chipman", role: "executive chairman / governor / operating partner", pct: null },
        { name: "David Thomson (Thomson Reuters heir)", role: "majority financial backer", pct: null },
        { name: "True North Sports & Entertainment", role: "holding entity (Jets + Canada Life Centre + True North Square)", pct: null }
      ],
      institutionalInvestors: "No public institutional investors; Thomson family private office is primary capital source",
      otherBusinessInterests: "Thomson Reuters Corporation (David Thomson: chairman + ~30% economic interest), True North Real Estate (True North Square development), Canadian media and financial services via Thomson family"
    },
    brand: {
      socialMedia: { instagram: "~350K", twitter: "~390K", facebook: "~700K" },
      merchandiseNotes: "Winnipeg is one of the most passionate hockey markets in North America per capita; Jets return in 2011 created massive pent-up demand; sellout streak is one of NHL's longest; limited to small-city market size for merchandising upside",
      internationalFanbase: "Mark Scheifele (Canadian) and Kyle Connor (American) are primary stars; significant Canadian national fan following; Jets represent 'Canada got hockey back' narrative that resonates nationally beyond Manitoba",
      notableSponsorships: ["Canada Life (arena naming)", "Winnipeg Blue Bombers cross-promotion (also TNSE)", "IG Wealth Management (jersey patch)", "Richardson Financial", "Great-West Lifeco"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Mark Scheifele — 8yr/$49.6M ($6.125M AAV, signed 2016) through 2023-24 + new extension; franchise captain and all-time leading scorer",
      starContracts: [
        { player: "Mark Scheifele", position: "C", aav: 8.5, contractNote: "Multi-year extension; franchise captain and all-time scorer; aging core but still productive" },
        { player: "Kyle Connor", position: "LW", aav: 7.25, contractNote: "7yr/$50.75M through 2027-28; consistent 30-40 goal scorer; key complementary star" },
        { player: "Josh Morrissey", position: "D", aav: 9.0, contractNote: "8yr/$72M signed 2022, through 2029-30; All-Star defenseman; franchise defensive cornerstone" }
      ]
    },
    analystNotes: "The Winnipeg Jets are the NHL's most fascinating market paradox: the world's ~30th richest person (David Thomson) owns a franchise in Canada's 8th-largest city, ensuring no financial distress while operating a perpetually small-market valuation. Winnipeg's $1.05B Forbes value (31st of 32) understates the franchise's real stability — Thomson's balance sheet eliminates relocation and insolvency risk entirely, and the Canadian national TV premium (~$40-60M/team vs. US teams' ~$19M) meaningfully subsidizes the small-market revenue base. True North Square's $500M+ mixed-use development creates non-hockey cash flows that peers in Winnipeg's revenue tier lack. The primary ceiling is geographic: Winnipeg's ~780,000 metro is simply the NHL's smallest viable market, capping gate and sponsorship upside regardless of on-ice performance."
  },

"Anaheim Ducks": {
    valuationHistory: [
      { year: 2019, value: 0.61, source: "Forbes" },
      { year: 2020, value: 0.63, source: "Forbes" },
      { year: 2021, value: 0.685, source: "Forbes" },
      { year: 2022, value: 0.74, source: "Forbes" },
      { year: 2023, value: 0.82, source: "Forbes" },
      { year: 2024, value: 0.925, source: "Forbes" },
    ],
    revenue: { estimate: 155, year: 2023, source: "Forbes", operatingIncome: 12 },
    transactions: [
      { year: 2005, price: 0.075, buyer: "Henry and Susan Samueli", seller: "The Walt Disney Company", notes: "Disney had owned the Mighty Ducks of Anaheim since 1993 as a corporate marketing vehicle; Samuelis purchased for $75M after Disney decided to exit sports ownership; name changed to Anaheim Ducks in 2006" }
    ],
    arena: {
      name: "Honda Center",
      yearOpened: 1993,
      capacity: 17174,
      ownershipModel: "privately owned by Henry and Susan Samueli / Samuelis' Anaheim Arena Management LLC; team and arena under same ownership; $1.1B+ renovation underway as part of OCVibe mixed-use district",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 123,
      namingRightsDeal: { sponsor: "Honda (American Honda Motor Co.)", annualValue_M: 2.1, totalValue_M: null, expiryYear: 2030, notes: "Honda naming rights deal originally signed 2006; renewed multiple times; revenue flows to Samueli-owned arena entity; OCVibe development adding ancillary hospitality/entertainment revenue" },
      nonArenaRevenue: "OCVibe: Samuelis are developing a 100-acre mixed-use entertainment district around Honda Center with $4B+ in projected investment; arena renovation ($1.1B+) is centerpiece; incremental F&B, hotel, and event revenue to benefit team/arena economics",
      newArenaPlans: "$1.1B+ Honda Center renovation as part of OCVibe development; construction ongoing 2024-2026; no separate new arena planned"
    },
    media: {
      localTVDeal: "KCAL (CBS/KCAL, LA); historically on Bally Sports SoCal (Diamond Sports Group, bankrupt 2023); transitioning to direct-to-consumer or new local deal post-RSN collapse",
      streamingNotes: "ESPN+/Hulu NHL streaming; NHL.tv League Pass; impacted by Diamond Sports bankruptcy",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Henry and Susan Samueli",
      ownerNetWorth: "Henry Samueli ~$10B+ (Broadcom co-founder and CTO)",
      ownerBackground: "Henry Samueli co-founded Broadcom Corporation (now Broadcom Inc.) in 1991; semiconductor giant; purchased Ducks in 2005 for $75M from Disney; Susan Samueli is co-owner; Henry serves as governor; 2007 Stanley Cup championship followed quickly after acquisition",
      acquisitionYear: 2005,
      acquisitionPrice: 0.075,
      currentValuation: 0.925,
      impliedReturn: "~12x in ~19 years (~14% CAGR)",
      ownershipGroup: [
        { name: "Henry Samueli", role: "majority owner / governor", pct: null },
        { name: "Susan Samueli", role: "co-owner", pct: null }
      ],
      institutionalInvestors: "None disclosed; Samuelis hold franchise privately",
      otherBusinessInterests: "Broadcom Inc. (AVGO): Henry remains CTO emeritus and board member; Samueli family foundation; OCVibe real estate development"
    },
    brand: {
      socialMedia: { instagram: "~850K", twitter: "~700K", facebook: "~1.2M" },
      merchandiseNotes: "Mid-tier NHL merchandise; 2007 Stanley Cup drove historical merch peak; young rebuild with Zegras/McTavish core generating fresh fan interest",
      internationalFanbase: "Limited; California-based fanbase; some interest via international players",
      notableSponsorships: ["Honda (arena naming)", "ARCO/ampm", "Ducks NHL sponsors"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Trevor Zegras — entry-level deal expired; RFA 2023; Mason McTavish emerging as co-franchise core",
      starContracts: [
        { player: "Mason McTavish", position: "C", aav: 6.625, contractNote: "7yr/$46.375M signed 2024, through 2030-31; part of youth rebuild" },
        { player: "Trevor Zegras", position: "C/LW", aav: 5.75, contractNote: "3yr/$17.25M bridge deal signed 2023; UFA after 2025-26" }
      ]
    },
    analystNotes: "The Ducks' $925M Forbes valuation represents the NHL's smallest major-market franchise by valuation — an underperforming asset in one of North America's largest DMAs, but with a clear path to rerating. The OCVibe development ($4B+ mixed-use around Honda Center) and the $1.1B arena renovation are Samueli's bet that team performance will eventually catch the real estate play; the Zegras/McTavish youth core is the hockey thesis. The primary risk is prolonged rebuild timeline in a weak-market-for-hockey southern California competitive environment — the Kings, Ducks, and (historically) Coyotes competed for the same thin fan base."
  },

  "Calgary Flames": {
    valuationHistory: [
      { year: 2019, value: 0.82,  source: "Forbes" },
      { year: 2020, value: 0.875, source: "Forbes" },
      { year: 2021, value: 0.99,  source: "Forbes" },
      { year: 2022, value: 1.1,   source: "Forbes" },
      { year: 2023, value: 1.22,  source: "Forbes" },
      { year: 2024, value: 1.4,   source: "Forbes" },
    ],
    revenue: { estimate: 192, year: 2023, source: "Forbes", operatingIncome: 28 },
    transactions: [
      { year: 1980, price: 0.016, buyer: "Harley Hotchkiss / Norman Kwong / Byron Seaman / Doc Seaman group", seller: "Atlanta Flames ownership (Tom Cousins)", notes: "Flames relocated from Atlanta to Calgary in 1980; sale price ~$16M including relocation; Calgary Sports and Entertainment Corporation (CSEC) formed to manage franchise" },
      { year: 1994, price: null, buyer: "N. Murray Edwards (joined ownership group)", seller: null, notes: "Edwards joined CSEC ownership group in 1994; became controlling shareholder; also includes Jeff McCaig, Alvin Libin, Allan Markin" }
    ],
    arena: {
      name: "Scotiabank Saddledome",
      yearOpened: 1983,
      capacity: 19289,
      ownershipModel: "owned by Calgary Sports and Entertainment Corporation (CSEC); built in 1983 as Olympics venue; aging facility; to be replaced by Scotia Place (2026-27 target)",
      teamOwnsLand: false,
      publicSubsidy: 97,
      privateFinancing: 180,
      namingRightsDeal: { sponsor: "Scotiabank", annualValue_M: 5.0, totalValue_M: null, expiryYear: null, notes: "Scotiabank naming rights deal; revenue to CSEC; arena to be replaced; deal likely transfers to or is renegotiated for new Scotia Place" },
      nonArenaRevenue: "CSEC owns the Hitmen (WHL), Roughnecks (NLL), and Wranglers (AHL affiliate); multi-team revenues consolidated under umbrella",
      newArenaPlans: "Scotia Place: new $1.2B total arena project; City of Calgary $537M + Province of Alberta $330M + CSEC $356M (29%); groundbreaking 2024; target opening 2026-27; 35-year commitment by CSEC to keep Flames in Calgary"
    },
    media: {
      localTVDeal: "Sportsnet (Rogers Media) regional broadcasts; Rogers holds national Canadian rights for the NHL through 2025-26",
      streamingNotes: "ESPN+/Hulu in US; Sportsnet Now in Canada",
      nationalShareNote: "Canadian teams receive substantially higher national revenue via Rogers/Bell TV deal than the ~$19M US average; Rogers Canadian deal ~$5.2B over 12 years through 2025-26 (~$80M+/Canadian team/year estimated)"
    },
    ownership: {
      primaryOwner: "N. Murray Edwards (controlling shareholder, CSEC)",
      ownerNetWorth: "Murray Edwards ~$3B+ (Canadian oil sands billionaire)",
      ownerBackground: "N. Murray Edwards is a Canadian businessman who built his fortune in oil sands (Canadian Natural Resources, Laricina Energy); has been majority shareholder of CSEC since mid-1990s; CSEC also includes Jeff McCaig (Trimac Corporation), Alvin Libin, Allan Markin; Edwards split time between Calgary and London for tax purposes — attracted public controversy",
      acquisitionYear: 1994,
      acquisitionPrice: null,
      currentValuation: 1.4,
      impliedReturn: "Franchise appreciated ~85x from $16M Atlanta-era entry basis over ~45 years",
      ownershipGroup: [
        { name: "N. Murray Edwards", role: "controlling shareholder / governor", pct: null },
        { name: "Jeff McCaig", role: "minority partner", pct: null },
        { name: "Alvin Libin", role: "minority partner", pct: null },
        { name: "Allan Markin", role: "minority partner", pct: null }
      ],
      institutionalInvestors: "Minority stake sale explored in 2024 per reports; no deal announced",
      otherBusinessInterests: "Canadian Natural Resources (CNQ — major oil sands; Edwards is chairman); Trimac Transportation (McCaig); multiple energy sector investments"
    },
    brand: {
      socialMedia: { instagram: "~550K", twitter: "~450K", facebook: "~800K" },
      merchandiseNotes: "Steady Canadian fanbase; Flames merchandise driven by playoff runs; limited international reach vs. Original Six Canadian teams (Habs, Leafs)",
      internationalFanbase: "Moderate; Czech Republic (David Rittich, Michal Kovarcik era); Scandinavian players growing fanbase",
      notableSponsorships: ["Scotiabank (arena naming)", "Telus", "Pepsi", "Dodge"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Nazem Kadri — 7yr/$49M ($7M AAV), signed July 2022, through 2028-29",
      starContracts: [
        { player: "Nazem Kadri", position: "C", aav: 7.0, contractNote: "7yr/$49M signed July 2022, through 2028-29; Colorado Cup winner brought as leadership signing" },
        { player: "Rasmus Andersson", position: "D", aav: 4.55, contractNote: "7yr/$31.85M through 2027-28" },
        { player: "Jonathan Huberdeau", position: "LW", aav: 10.5, contractNote: "8yr/$84M signed 2022 (largest deal in Flames history); underperformed vs. contract so far" }
      ]
    },
    analystNotes: "The Flames' Scotia Place arena deal is the franchise's most significant value catalyst in decades: the $1.2B project commits public funding of $867M (72% of total) for a building CSEC controls with minimal capital risk, locking in 35-year residency and unlocking premium seat/hospitality revenue in a building designed for modern NHL economics. The Huberdeau $10.5M AAV contract is an anchor-tenant risk — one of the most expensive underperformers in the NHL — limiting roster flexibility as the new arena opens. The Rogers national TV deal renewal (after 2025-26) will be a major valuation driver for all Canadian franchises."
  },

  "Edmonton Oilers": {
    valuationHistory: [
      { year: 2019, value: 0.94,  source: "Forbes" },
      { year: 2020, value: 1.0,   source: "Forbes" },
      { year: 2021, value: 1.1,   source: "Forbes" },
      { year: 2022, value: 1.38,  source: "Forbes" },
      { year: 2023, value: 1.96,  source: "Forbes" },
      { year: 2024, value: 2.65,  source: "Forbes" },
    ],
    revenue: { estimate: 265, year: 2024, source: "Forbes / OEG public disclosures", operatingIncome: 87 },
    transactions: [
      { year: 1998, price: 0.070, buyer: "Edmonton Investors Group (EIG)", seller: "Peter Pocklington", notes: "Pocklington, who had owned team since 1977, sold to an investor consortium for ~$70M to stave off bankruptcy; Edmonton Investors Group formed to keep team in Edmonton" },
      { year: 2008, price: 0.170, buyer: "Daryl Katz (Katz Group)", seller: "Edmonton Investors Group (EIG)", notes: "Katz purchased franchise from the EIG consortium for ~$170M; NHL approved June 2008; Katz subsequently spearheaded ICE District development and Rogers Place arena" }
    ],
    arena: {
      name: "Rogers Place",
      yearOpened: 2016,
      capacity: 18347,
      ownershipModel: "operated by Oilers Entertainment Group (OEG), Katz Group subsidiary; City of Edmonton retains building ownership under community revitalization levy (CRL) financing arrangement; OEG manages all events and captures event revenue; ICE District surrounding development ($2B+) owned by Katz Group",
      teamOwnsLand: false,
      publicSubsidy: 226,
      privateFinancing: 154,
      namingRightsDeal: { sponsor: "Rogers Communications", annualValue_M: 5.5, totalValue_M: null, expiryYear: null, notes: "Rogers naming rights deal signed 2015; part of Rogers' Canadian NHL rights portfolio; annual value estimated ~$5-6M; revenue to OEG" },
      nonArenaRevenue: "ICE District: $2B+ mixed-use development surrounding Rogers Place — hotels, restaurants, office, residential; OEG captures significant non-hockey event revenue from concerts, other sporting events; Katz Group real estate portfolio compounds arena-adjacent economics substantially",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Sportsnet (Rogers) regional; Oilers TV (club-controlled digital content); SNOplus streaming",
      streamingNotes: "Sportsnet Now streaming; ESPN+/Hulu in US market",
      nationalShareNote: "Canadian teams receive substantially higher national revenue via Rogers/Bell TV deal; Rogers 12-year ~$5.2B Canadian NHL deal through 2025-26 (~$80M+/Canadian team/year estimated); Oilers among top-earning Canadian franchises given market and product quality"
    },
    ownership: {
      primaryOwner: "Daryl Katz (Katz Group of Companies)",
      ownerNetWorth: "Daryl Katz ~$5B+ (Forbes 2024: ranked #612 globally at ~$5B)",
      ownerBackground: "Daryl Katz built fortune through Rexall (pharmacy chain), later pivoted to real estate and entertainment via Katz Group; purchased Oilers in 2008 for $170M; transformed franchise value through ICE District ($2B+) development and new Rogers Place arena (2016); Oilers are the most profitable NHL team in absolute EBITDA terms per Forbes 2025 rankings",
      acquisitionYear: 2008,
      acquisitionPrice: 0.170,
      currentValuation: 2.65,
      impliedReturn: "~15.6x in 16 years (~18% CAGR)",
      ownershipGroup: [
        { name: "Daryl Katz", role: "majority owner / governor", pct: null },
        { name: "Katz Group entities", role: "holding company structure", pct: null }
      ],
      institutionalInvestors: "No institutional investors disclosed",
      otherBusinessInterests: "Katz Group: real estate development (ICE District and others), pharmacy (former Rexall chain, sold to McKesson), media/entertainment; OEG also operates the Bakersfield Condors (AHL affiliate)"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~950K", facebook: "~1.6M" },
      merchandiseNotes: "Connor McDavid is the face of the NHL globally; Oilers merchandise surged with 2024 Stanley Cup Finals run; Gretzky legacy creates generational brand equity rarely seen in small markets",
      internationalFanbase: "Strong Scandinavian following (Draisaitl/German connection); McDavid global brand; Gretzky legacy draws international interest",
      notableSponsorships: ["Rogers (arena naming)", "Scotiabank", "Telus", "Ford"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Connor McDavid — 2yr/$25M ($12.5M AAV), signed 2025, through 2027-28; intentionally below-market to give Oilers cap flexibility",
      starContracts: [
        { player: "Connor McDavid", position: "C", aav: 12.5, contractNote: "2yr/$25M signed 2025; runs through 2027-28; below-market deal by McDavid's choice to enable team building; makes him UFA after 2027-28" },
        { player: "Leon Draisaitl", position: "C/LW", aav: 14.0, contractNote: "8yr/$112M signed 2023; through 2030-31; highest AAV in NHL at signing; German connection" },
        { player: "Evan Bouchard", position: "D", aav: 7.5, contractNote: "7yr/$52.5M signed 2024, through 2030-31" }
      ]
    },
    analystNotes: "The Oilers are the NHL's most financially asymmetric franchise: a small-market Canadian team generating more operating income than any other hockey franchise, driven by the McDavid/Draisaitl core, Rogers Place arena economics, and ICE District real estate compounding. The ~15.6x return on Katz's $170M 2008 entry in 16 years is one of the best documented franchise appreciation stories in hockey. The core risk is structural: McDavid's 2-year/$25M deal expires after 2027-28, creating an existential franchise question — his continued commitment is the only variable separating a $2.65B asset from a $1B one."
  },

  "Los Angeles Kings": {
    valuationHistory: [
      { year: 2019, value: 1.35,  source: "Forbes" },
      { year: 2020, value: 1.45,  source: "Forbes" },
      { year: 2021, value: 1.65,  source: "Forbes" },
      { year: 2022, value: 2.0,   source: "Forbes" },
      { year: 2023, value: 2.4,   source: "Forbes" },
      { year: 2024, value: 2.85,  source: "Forbes" },
    ],
    revenue: { estimate: 310, year: 2024, source: "Forbes / CNBC", operatingIncome: 95 },
    transactions: [
      { year: 1995, price: 0.113, buyer: "AEG / Philip Anschutz + Edward Roski Jr.", seller: "Bruce McNall (bankruptcy proceedings)", notes: "McNall had bought the Kings in 1988 for $20M and pleaded guilty to bank fraud in 1994; AEG/Anschutz + Roski group bought franchise out of financial distress for $113M; Roski later sold his stake to AEG" }
    ],
    arena: {
      name: "Crypto.com Arena",
      yearOpened: 1999,
      capacity: 18230,
      ownershipModel: "100% privately owned by AEG (Anschutz Entertainment Group); Kings and Clippers (NBA) and Lakers (NBA) are all tenants paying rent; AEG captures all arena economics including concerts, events, naming rights — busiest arena in the US by event count",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 375,
      namingRightsDeal: { sponsor: "Crypto.com", annualValue_M: 35.0, totalValue_M: 700, expiryYear: 2041, notes: "20-year deal signed 2021 at $700M total ($35M/yr); paid to AEG (not to Kings); previously Staples Center; deal was largest naming rights agreement at time of signing" },
      nonArenaRevenue: "AEG captures ~$40M+ annually from non-NHL events at Crypto.com Arena (concerts, awards shows, boxing, NBA, etc.); Kings as tenant do not directly share in event economics beyond their games",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Scripps Sports/KCAL (CBS, LA); previously Bally Sports West (Diamond Sports, bankrupt 2023); Kings signed direct broadcast deal with Scripps/KCAL in 2024 — among first NHL teams to exit RSN model post-Diamond collapse",
      streamingNotes: "ESPN+/Hulu NHL; Scripps/KCAL on connected TV; NHL.tv",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "AEG (Anschutz Entertainment Group) / Philip Anschutz",
      ownerNetWorth: "Philip Anschutz ~$16.9B (Forbes 2025: #130 globally)",
      ownerBackground: "Philip Anschutz built fortune in oil, railroads, and telecommunications before pivoting to entertainment/sports; AEG is the world's largest sports and entertainment promoter, owning Kings, multiple MLS teams (LA Galaxy, Chicago Fire, Houston Dynamo, etc.), and venues globally including Crypto.com Arena; AEG was valued at $8B+ by Forbes; Kings acquired for $113M in 1995 from Bruce McNall's bankruptcy",
      acquisitionYear: 1995,
      acquisitionPrice: 0.113,
      currentValuation: 2.85,
      impliedReturn: "~25x in ~30 years (~11% CAGR)",
      ownershipGroup: [
        { name: "Philip Anschutz / AEG", role: "majority owner / governor", pct: null }
      ],
      institutionalInvestors: "AEG is privately held; no outside institutional investors in Kings specifically",
      otherBusinessInterests: "AEG: Crypto.com Arena, StubHub Center, Dignity Health Sports Park, Mercedes-Benz Arena (Berlin), Uber Arena; LA Galaxy (MLS), Chicago Fire, Houston Dynamo, multiple others; concerts/touring (AEG Presents); Anschutz personally: oil/gas, railroads, media properties"
    },
    brand: {
      socialMedia: { instagram: "~1.0M", twitter: "~850K", facebook: "~1.4M" },
      merchandiseNotes: "Strong Southern California fanbase; 2012 and 2014 back-to-back Cups drove merchandise peak; currently in transition between Kopitar generation and next core",
      internationalFanbase: "Growing; Kopitar (Slovenia) sustains European interest; strong following in Czech Republic and Slovakia",
      notableSponsorships: ["Crypto.com (arena naming, AEG)", "Honda", "Levi's", "CarMax"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Anze Kopitar — 8yr/$80M ($10M AAV) signed 2016, nearing end; Quinton Byfield emerging as franchise heir",
      starContracts: [
        { player: "Anze Kopitar", position: "C", aav: 10.0, contractNote: "8yr/$80M through 2025-26; 18-year King, 2x Stanley Cup winner; winding down elite years" },
        { player: "Drew Doughty", position: "D", aav: 11.0, contractNote: "8yr/$88M through 2026-27; highest-paid King in history at signing; missed significant time to injury" },
        { player: "Quinton Byfield", position: "C", aav: 8.15, contractNote: "8yr/$65.2M signed 2023, through 2030-31; heir-apparent franchise center" }
      ]
    },
    analystNotes: "The Kings rank 4th in NHL by Forbes valuation ($2.85B) driven by AEG's Crypto.com Arena ownership model, which generates ~$40M+ annually from non-hockey events that no tenant team can replicate — the Kings effectively inherit arena economics through a favorable operating arrangement rather than a pure tenant relationship. The LA market, back-to-back 2012/2014 Cups, and the Byfield/Mikey Anderson young core set up a mid-decade competitive window. The primary risk is AEG's tandem exposure: the Kings share their arena with the Lakers and Clippers, and AEG's overall leveraged portfolio means the Kings' valuation is partly hostage to a private conglomerate's balance sheet decisions."
  },

  "San Jose Sharks": {
    valuationHistory: [
      { year: 2019, value: 0.59,  source: "Forbes" },
      { year: 2020, value: 0.605, source: "Forbes" },
      { year: 2021, value: 0.67,  source: "Forbes" },
      { year: 2022, value: 0.72,  source: "Forbes" },
      { year: 2023, value: 0.82,  source: "Forbes" },
      { year: 2024, value: 1.05,  source: "Forbes" },
    ],
    revenue: { estimate: 176, year: 2024, source: "CNBC/Forbes", operatingIncome: 15 },
    transactions: [
      { year: 2002, price: 0.147, buyer: "Hasso Plattner (SAP co-founder)", seller: "Howard Baldwin / Compuware Corporation", notes: "Plattner purchased majority stake for $147M; Baldwin had co-founded the Sharks as an expansion team in 1991; Plattner subsequently bought out remaining minority partners to reach full control" }
    ],
    arena: {
      name: "SAP Center",
      yearOpened: 1993,
      capacity: 17435,
      ownershipModel: "City of San Jose owns the building; Sharks (Sharks Sports & Entertainment, Plattner's entity) operate the arena under a management agreement and capture operational revenues including events, naming rights",
      teamOwnsLand: false,
      publicSubsidy: 162,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: "SAP SE", annualValue_M: 3.0, totalValue_M: null, expiryYear: null, notes: "SAP naming rights deal signed 2013; SAP co-founded by Hasso Plattner — same person as Sharks owner; revenue flows to Sharks' arena management entity; arrangement has favorable economics given ownership overlap" },
      nonArenaRevenue: "Sharks Sports & Entertainment (SSE) operates SAP Center and captures concert, event, and non-hockey revenue under city management agreement; SSE also operates SAP Center for other major events",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "NBCS California (NBC Sports Bay Area) — separate from Diamond Sports Group collapse, survived as part of NBCUniversal's RSN network; however Sharks' deal is under pressure as NBCS California faces cord-cutting",
      streamingNotes: "ESPN+/Hulu NHL; NBC Sports app; San Jose Sharks direct streaming in transition",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Hasso Plattner",
      ownerNetWorth: "Hasso Plattner ~$12B (SAP co-founder; Forbes 2024)",
      ownerBackground: "German technology entrepreneur who co-founded SAP SE in 1972 — the world's largest enterprise software company; Plattner purchased Sharks majority stake in 2002 for $147M and became sole majority owner; somewhat unusual owner profile as a German national owning an NHL team; major philanthropist (Plattner Institute, Stanford programs)",
      acquisitionYear: 2002,
      acquisitionPrice: 0.147,
      currentValuation: 1.05,
      impliedReturn: "~7x in ~22 years (~10% CAGR)",
      ownershipGroup: [
        { name: "Hasso Plattner", role: "majority owner / governor", pct: null }
      ],
      institutionalInvestors: "No institutional investors disclosed",
      otherBusinessInterests: "SAP SE (co-founder and supervisory board chairman, largest individual shareholder); Hasso Plattner Institute (HPI, Potsdam); multiple philanthropic foundations; real estate"
    },
    brand: {
      socialMedia: { instagram: "~700K", twitter: "~550K", facebook: "~1.0M" },
      merchandiseNotes: "Silicon Valley fanbase historically strong with tech professionals; 2016 Conference Finals run was merchandise peak; rebuild era dampening current merch momentum",
      internationalFanbase: "Moderate; European players (Tomas Hertl — Czech) and German owner Plattner give European visibility; Macklin Celebrini (2024 #1 overall pick) building next generation",
      notableSponsorships: ["SAP (arena naming, owner-related)", "Cisco", "Pepsi", "Sharks fans tech ecosystem"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Macklin Celebrini — #1 overall pick 2024 NHL Draft; entry-level contract $3.875M AAV; franchise cornerstone of rebuild",
      starContracts: [
        { player: "Macklin Celebrini", position: "C", aav: 3.875, contractNote: "#1 overall pick 2024; entry-level 3yr contract; franchise rebuild centerpiece" },
        { player: "Tomas Hertl", position: "C", aav: 8.0, contractNote: "8yr/$65.875M signed 2022, through 2029-30; veteran franchise player bridging rebuild" },
        { player: "Nico Sturm", position: "C", aav: 3.0, contractNote: "placeholder depth; Sharks in full rebuild mode" }
      ]
    },
    analystNotes: "The Sharks are the NHL's deepest-in-rebuild franchise by competitive metric, but the 2024 #1 overall pick (Celebrini) and a Silicon Valley market create the same setup as the post-lockout Sharks of the early 2000s — high draft equity converting to competitive window within 3-5 years. The SAP Center operating structure, where Plattner's ownership entity runs a city-owned building and captures event revenue including naming rights from his own company, is uniquely self-reinforcing. The risk is prolonged irrelevance in a market with both the Warriors and multiple other entertainment options competing for premium-seat budgets."
  },

  "Seattle Kraken": {
    valuationHistory: [
      { year: 2021, value: 0.90, source: "Forbes / expansion fee implied" },
      { year: 2022, value: 1.23, source: "Forbes" },
      { year: 2023, value: 1.42, source: "Forbes" },
      { year: 2024, value: 1.6,  source: "Forbes" },
    ],
    revenue: { estimate: 215, year: 2024, source: "Forbes/CNBC", operatingIncome: 32 },
    transactions: [
      { year: 2018, price: 0.650, buyer: "Seattle Hockey Partners (Bonderman / Bruckheimer / Leiweke group)", seller: "NHL (expansion franchise)", notes: "NHL awarded Seattle expansion franchise for $650M; group led by David Bonderman (TPG co-founder) and Jerry Bruckheimer (Hollywood producer); Tod Leiweke as CEO; team began play in 2021-22 season — the NHL's 32nd franchise" }
    ],
    arena: {
      name: "Climate Pledge Arena",
      yearOpened: 2021,
      capacity: 17100,
      ownershipModel: "Kraken acquired majority stake in Climate Pledge Arena in 2023; One Roof Sports & Entertainment LLC formed; arena is the world's first carbon-neutral arena per NHL; built on footprint of former KeyArena (1962 World's Fair venue) — historic roof preserved; privately financed renovation",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 1150,
      namingRightsDeal: { sponsor: "Amazon (Climate Pledge)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Amazon 'Climate Pledge' naming rights — unique non-product naming: Amazon named arena after its own sustainability initiative (The Climate Pledge); deal reportedly ~$300M over 20 years; marketing value for Amazon's ESG brand exceeds cost" },
      nonArenaRevenue: "One Roof Sports & Entertainment captures full venue economics: concerts, events, awards shows; carbon-neutral certification premium for events and sponsorships; Kraken majority acquisition of arena in 2023 was key vertical integration move",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "ROOT Sports Northwest (AT&T SportsNet Northwest); ROOT survived Diamond Sports Group bankruptcy as separate RSN; Kraken's local TV situation more stable than many NHL counterparts",
      streamingNotes: "ESPN+/Hulu NHL; ROOT Sports+ streaming; Kraken direct digital content",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "David Bonderman (chairman) / Jerry Bruckheimer / Tod Leiweke (CEO)",
      ownerNetWorth: "David Bonderman ~$8B (TPG Capital co-founder); Jerry Bruckheimer ~$1.2B (Hollywood producer)",
      ownerBackground: "David Bonderman co-founded TPG Capital — one of the world's largest private equity firms; Jerry Bruckheimer is one of Hollywood's most successful producers (Top Gun, Pirates of the Caribbean, CSI); Tod Leiweke is a veteran sports executive (previously CEO of Tampa Bay Lightning during Stanley Cup era); ownership group also includes Samantha Holloway (Bonderman's daughter) and others",
      acquisitionYear: 2018,
      acquisitionPrice: 0.650,
      currentValuation: 1.6,
      impliedReturn: "~2.5x on expansion fee basis in ~6 years (~17% CAGR)",
      ownershipGroup: [
        { name: "David Bonderman", role: "chairman / principal owner", pct: null },
        { name: "Jerry Bruckheimer", role: "partner / minority owner", pct: null },
        { name: "Tod Leiweke", role: "CEO / operating partner", pct: null },
        { name: "Samantha Holloway", role: "partner (Bonderman's daughter)", pct: null }
      ],
      institutionalInvestors: "No institutional investors disclosed; privately held",
      otherBusinessInterests: "TPG Capital (Bonderman): global PE firm, $200B+ AUM; Bruckheimer Films; Leiweke: prior executive roles at Tampa Bay Lightning, NFL (Seattle Seahawks)"
    },
    brand: {
      socialMedia: { instagram: "~800K", twitter: "~600K", facebook: "~450K" },
      merchandiseNotes: "Kraken merchandise phenomenon — brand created enormous demand before first puck dropped; Seattle sports market (Seahawks, Mariners, Sounders) passionate; teal/blue color scheme and nautical brand resonant nationally",
      internationalFanbase: "Growing; Matty Beniers (American) and Jaden Schwartz appeal to US market; building international identity",
      notableSponsorships: ["Amazon/Climate Pledge (arena naming)", "Alaska Airlines", "T-Mobile", "Starbucks"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Matty Beniers — 2024 Calder Trophy winner (2021-22); entry-level through 2023-24; RFA extension in progress",
      starContracts: [
        { player: "Vince Dunn", position: "D", aav: 7.35, contractNote: "5yr/$36.75M signed 2022, through 2026-27; defensive anchor" },
        { player: "Matty Beniers", position: "C", aav: 7.1, contractNote: "8yr/$56.8M signed 2023, through 2030-31; franchise center" },
        { player: "Jared McCann", position: "C/LW", aav: 5.0, contractNote: "5yr/$25M through 2026-27; offensive depth" }
      ]
    },
    analystNotes: "The Kraken are the NHL's most interesting new-franchise investment: $650M expansion fee in 2018 now worth ~$1.6B in six years, with the 2023 majority arena acquisition adding the strategic vertical integration that transforms the economics from pure tenant to full venue operator. Climate Pledge Arena's carbon-neutral certification and Amazon naming rights are a marketing-meets-sustainability story that resonates in Seattle's tech culture. The primary risk is typical expansion-franchise patience — the Beniers/Larson core is developing but the path to a Cup contender remains 2-3 years away, and fan goodwill is finite."
  },

  "Vancouver Canucks": {
    valuationHistory: [
      { year: 2019, value: 0.88,  source: "Forbes" },
      { year: 2020, value: 0.96,  source: "Forbes" },
      { year: 2021, value: 1.1,   source: "Forbes" },
      { year: 2022, value: 1.38,  source: "Forbes" },
      { year: 2023, value: 1.55,  source: "Forbes" },
      { year: 2024, value: 1.94,  source: "Forbes" },
    ],
    revenue: { estimate: 228, year: 2023, source: "Forbes/CNBC", operatingIncome: 42 },
    transactions: [
      { year: 1974, price: 0.009, buyer: "Frank Griffiths / Northwest Sports Enterprises", seller: "Medicor (Minnesota)", notes: "Griffiths family purchased Canucks for ~$9M in 1974; built the franchise through the 1980s-1990s Vancouver Cup runs" },
      { year: 1997, price: 0.125, buyer: "John McCaw Jr. / Orca Bay Sports & Entertainment", seller: "Griffiths family estate", notes: "McCaw (cell phone billionaire — McCaw Cellular) purchased controlling interest in 1997; built Rogers Arena (then GM Place) with private financing" },
      { year: 2004, price: null, buyer: "Francesco Aquilini / Aquilini Investment Group (50%)", seller: "John McCaw Jr. / Orca Bay", notes: "Aquilini acquired 50% stake in 2004 from McCaw, then remaining 50% in 2006 for a total ~$250M in combined transactions; Aquilini Investment Group now sole owner of Canucks, Rogers Arena, and Canucks Sports & Entertainment" }
    ],
    arena: {
      name: "Rogers Arena",
      yearOpened: 1995,
      capacity: 18910,
      ownershipModel: "100% privately owned by Aquilini Investment Group (same owner as Canucks); no public subsidy; team and arena under unified ownership capturing all venue economics",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 160,
      namingRightsDeal: { sponsor: "Rogers Communications", annualValue_M: 8.0, totalValue_M: null, expiryYear: null, notes: "Rogers naming rights deal; Aquilini-owned arena captures revenue directly; Rogers is also Canada's primary NHL national TV rights holder — dual relationship (national rights + naming rights)" },
      nonArenaRevenue: "Aquilini owns arena outright; captures concerts, events (100+ non-hockey events annually), premium parking, F&B; one of few NHL arenas with complete ownership integration between team and venue",
      newArenaPlans: null
    },
    media: {
      localTVDeal: "Sportsnet Pacific (Rogers); regional broadcast for Canucks games; strong market in Vancouver with deep hockey culture",
      streamingNotes: "Sportsnet Now; ESPN+/Hulu in US; Canucks digital content",
      nationalShareNote: "Canadian teams receive substantially higher national revenue via Rogers/Bell TV deal than the ~$19M US average; Rogers 12-year Canadian NHL deal through 2025-26 (~$80M+/Canadian team/year estimated)"
    },
    ownership: {
      primaryOwner: "Francesco Aquilini (Aquilini Investment Group)",
      ownerNetWorth: "Francesco Aquilini ~$6B+ (real estate development empire across BC, Alberta, US)",
      ownerBackground: "Francesco Aquilini is a Vancouver-based real estate developer; Aquilini Investment Group has extensive residential and commercial real estate holdings across Western Canada and the US; purchased 50% of Canucks + Rogers Arena in 2004 and remaining 50% in 2006 for ~$250M combined; Aquilini family (father Luigi and brothers Tom and Roberto) share ownership; Francesco is the public face and managing partner; reports of possible sale explored in 2024 but denied by ownership",
      acquisitionYear: 2006,
      acquisitionPrice: 0.250,
      currentValuation: 1.94,
      impliedReturn: "~7.8x on combined ~$250M entry over ~18 years (~12% CAGR)",
      ownershipGroup: [
        { name: "Francesco Aquilini", role: "managing partner / governor", pct: null },
        { name: "Aquilini Investment Group", role: "holding company (includes family members Tom and Roberto Aquilini)", pct: null }
      ],
      institutionalInvestors: "No institutional investors; Aquilini Group family-owned",
      otherBusinessInterests: "Aquilini Investment Group: real estate ($10B+ portfolio); residential development; agricultural holdings; infrastructure"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~800K", facebook: "~1.5M" },
      merchandiseNotes: "Vancouver is among Canada's most passionate hockey markets; Canucks merchandise second only to Leafs/Habs in Canadian sales; Hughes/Pettersson young core driving new fan generation; Orca logo has strong brand recognition",
      internationalFanbase: "Strong; large Czech and Slovak diaspora in Vancouver; Nordic player pipeline; Pettersson (Sweden) sustains Scandinavian following",
      notableSponsorships: ["Rogers (arena naming, national rights)", "Scotiabank", "Pepsi", "Honda"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Quinn Hughes — franchise defenseman; Elias Pettersson — 8yr/$92.8M ($11.6M AAV) signed 2024 extension, through 2031-32",
      starContracts: [
        { player: "Elias Pettersson", position: "C", aav: 11.6, contractNote: "8yr/$92.8M extension signed 2024, through 2031-32; face of franchise" },
        { player: "Quinn Hughes", position: "D", aav: 7.85, contractNote: "6yr/$47.1M signed 2021, through 2026-27; Norris Trophy contender annually" },
        { player: "J.T. Miller", position: "C/LW", aav: 8.0, contractNote: "7yr/$56M signed 2022, through 2028-29" }
      ]
    },
    analystNotes: "The Canucks represent the most structurally sound mid-tier NHL franchise: team-and-arena unified under Aquilini Group at full private financing ($0 public subsidy), capturing 100% of venue economics in Canada's third-largest city with one of the league's most passionate hockey cultures. The Pettersson $11.6M AAV and Hughes emerging Norris-caliber defenseman create a legitimate Cup window for 2025-2028. The primary risk is Pettersson's trajectory — the $11.6M AAV requires consistent 80-100 point seasons to justify and his consistency has been questioned; his 2024 extension was among the most debated contracts in the league at signing."
  },

  "Vegas Golden Knights": {
    valuationHistory: [
      { year: 2019, value: 0.67,  source: "Forbes" },
      { year: 2020, value: 0.74,  source: "Forbes" },
      { year: 2021, value: 0.82,  source: "Forbes" },
      { year: 2022, value: 1.05,  source: "Forbes" },
      { year: 2023, value: 1.48,  source: "Forbes / post-Cup premium" },
      { year: 2024, value: 1.85,  source: "Forbes" },
    ],
    revenue: { estimate: 225, year: 2024, source: "Forbes/CNBC", operatingIncome: 55 },
    transactions: [
      { year: 2016, price: 0.500, buyer: "Black Knight Sports and Entertainment / Bill Foley", seller: "NHL (expansion franchise)", notes: "NHL awarded Las Vegas expansion franchise for $500M in June 2016; team was the 31st NHL franchise; reached Stanley Cup Final in inaugural 2017-18 season — fastest expansion team to reach the Final in NHL history; won Stanley Cup in 2022-23 season" }
    ],
    arena: {
      name: "T-Mobile Arena",
      yearOpened: 2016,
      capacity: 17500,
      ownershipModel: "T-Mobile Arena jointly owned by AEG (Anschutz Entertainment Group) and MGM Resorts International; Bill Foley / Golden Knights own 15% stake in arena; 85% owned by AEG/MGM JV; the arena sits on the Las Vegas Strip adjacent to MGM properties — location is the most commercially valuable arena site in North America",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 375,
      namingRightsDeal: { sponsor: "T-Mobile", annualValue_M: 6.5, totalValue_M: null, expiryYear: null, notes: "T-Mobile naming rights deal; revenue primarily to AEG/MGM JV; Foley's 15% stake provides limited participation; Foley has discussed $300M renovation plan to accommodate potential NBA team in Las Vegas" },
      nonArenaRevenue: "Golden Knights capture game-day economics within their tenant agreement; Las Vegas tourism-driven attendance (destination market) generates premium box/hospitality revenue unlike any other NHL market; Strip location drives sponsor premiums",
      newArenaPlans: "Foley has proposed $300M upgrade to T-Mobile Arena if Las Vegas receives an NBA franchise; no confirmed plans as of 2024"
    },
    media: {
      localTVDeal: "Vegas 34 (KLAS, CBS affiliate); historically on AT&T SportsNet Rocky Mountain; transitioning post-RSN collapse to direct deals and streaming",
      streamingNotes: "ESPN+/Hulu NHL streaming; direct streaming increasingly important in Las Vegas market with transient population",
      nationalShareNote: "~$19M/team/year from US national deals (ESPN 7yr ~$400M/yr + TNT 7yr ~$225M/yr through 2028)"
    },
    ownership: {
      primaryOwner: "Bill Foley (Black Knight Sports and Entertainment LLC)",
      ownerNetWorth: "Bill Foley ~$1.6B (Forbes estimate)",
      ownerBackground: "William 'Bill' Foley II is a US Air Force Academy graduate and entrepreneur who built his fortune through Fidelity National Financial (title insurance empire) and Black Knight (mortgage data/analytics, later merged with ICE); won NHL franchise through persistence after being rejected previously; transformed expansion franchise into Stanley Cup champion in just 6 years; Adrienne Maloof (casino/media family) had minority stake, sold bulk to Foley in early 2024",
      acquisitionYear: 2016,
      acquisitionPrice: 0.500,
      currentValuation: 1.85,
      impliedReturn: "~3.7x in ~8 years (~18% CAGR)",
      ownershipGroup: [
        { name: "Bill Foley", role: "majority owner / governor", pct: null },
        { name: "Adrienne Maloof", role: "minority (retained small stake after 2024 buyout)", pct: null }
      ],
      institutionalInvestors: "No institutional investors disclosed",
      otherBusinessInterests: "Fidelity National Financial (FNF) — title insurance, mortgage-related; Black Knight (data/analytics, merged with ICE/Intercontinental Exchange); Foley owns Bordeaux wine estates; ice rink facilities in Las Vegas area"
    },
    brand: {
      socialMedia: { instagram: "~1.2M", twitter: "~900K", facebook: "~900K" },
      merchandiseNotes: "Fastest-rising brand in NHL history by merchandise growth; Vegas expansion enthusiasm + 2023 Cup = merchandise surge; gold/black color scheme resonant nationally; destination-market fans buying across the country",
      internationalFanbase: "Growing; Las Vegas as international tourism destination exposes brand globally; international player roster (Eichel, Pietrangelo, Marchessault era)",
      notableSponsorships: ["T-Mobile (arena naming)", "MGM Resorts", "Allegiant Air", "City National Bank"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Jack Eichel — 8yr/$80M ($10M AAV) signed 2022, through 2029-30; franchise center acquired via trade from Buffalo",
      starContracts: [
        { player: "Jack Eichel", position: "C", aav: 10.0, contractNote: "8yr/$80M through 2029-30; franchise cornerstone; underwent artificial disc replacement surgery (first in NHL history) after departure from Buffalo" },
        { player: "Alex Pietrangelo", position: "D", aav: 8.8, contractNote: "7yr/$61.6M through 2026-27; Stanley Cup-winning captain; aging but still effective" },
        { player: "William Karlsson", position: "C", aav: 5.9, contractNote: "8yr/$47.25M through 2025-26; 2018 expansion hero ('Wild Bill')" }
      ]
    },
    analystNotes: "The Golden Knights are the most successful pure expansion franchise in major North American sports history: $500M expansion fee to Stanley Cup champion in 6 years, now valued at $1.85B — a $1.35B gain driven by on-ice success, an irreplaceable Strip location, and Las Vegas's emergence as a destination-sports market. The T-Mobile Arena's Strip positioning creates tourism-driven sellouts and premium box revenue that no other NHL arena can replicate — a structural revenue advantage independent of competitive performance. The risk is Pietrangelo/Karlsson contracts aging into the back end as Eichel's $10M AAV requires consistent franchise-player output to justify cap allocation."
  },

};