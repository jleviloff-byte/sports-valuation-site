// EPL team enrichments — all 20 clubs (2024-25 Premier League season)
// Sources: Forbes, Sportico, CNBC, Deloitte Football Money League, ESPN, BBC Sport, The Athletic, Transfermarkt
// 2025-28 EPL UK domestic TV deal: £6.7B/4yr (~£1.67B/yr); international rights ~£5.3B/3yr
// Distribution: equal share + facility fee (UK TV appearances) + merit payment (league position) + parachute payments for relegated clubs
export const eplEnrichments = {
"Manchester United": {
    valuationHistory: [
      { year: 2019, value: 3.81, source: "Forbes" },
      { year: 2020, value: 4.20, source: "Forbes" },
      { year: 2021, value: 4.20, source: "Forbes" },
      { year: 2022, value: 4.60, source: "Forbes" },
      { year: 2023, value: 6.00, source: "Forbes / validated by Glazer-Ratcliffe sale process" },
      { year: 2024, value: 6.55, source: "Forbes / Sportico $6.2B; Ratcliffe deal implied ~$5.4B" },
    ],
    revenue: { estimate: 845, year: 2024, source: "Manchester United plc accounts (£666.5M FY2024-25 record); converted USD", operatingIncome: -23 },
    transactions: [
      { year: 2005, price: 1.40, buyer: "Malcolm Glazer / Glazer family", seller: "Manchester United plc shareholders (J.P. McManus & John Magnier among them)", notes: "Leveraged buyout; ~£790M debt loaded onto club balance sheet; controversial among supporters; took private 2005, re-listed on NYSE 2012 as MANU" },
      { year: 2024, price: 1.60, buyer: "Sir Jim Ratcliffe / INEOS", seller: "Glazer family (partial)", notes: "INEOS acquired 27.7% stake in Feb 2024 (~£1.3B / $1.6B), with sporting control / football operations; commitment to invest $300M in infrastructure (Old Trafford); valued club at £4.5B / $5.4B; subsequent £100M investment Dec 2024" }
    ],
    stadium: {
      name: "Old Trafford",
      yearBuilt: 1910,
      capacity: 74310,
      ownershipModel: "owned by Manchester United plc (club outright)",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal — 'Old Trafford' is the historic name; club has resisted commercial renaming despite financial leverage" },
      nonGameRevenue: "Megastore + tours + corporate hospitality + concerts (limited); ~£160M record matchday revenue FY2024-25",
      newStadiumPlans: "Ratcliffe announced March 2025 plan for new ~100,000-capacity 'world's greatest stadium' adjacent to Old Trafford; estimated £2B cost; design by Foster + Partners; would be the largest UK club stadium"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Most-televised UK club typically captures top-tier facility fee; MUTV in-house club channel for behind-scenes content",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season; United received £165-175M historically as top-half merit + max facility fee tier"
    },
    ownership: {
      primaryOwner: "Glazer family (majority voting control via dual-class shares); Sir Jim Ratcliffe / INEOS (28.94%, sporting control)",
      ownerNetWorth: "Glazer family ~$8B est; Sir Jim Ratcliffe ~$23B (INEOS chemicals)",
      ownerBackground: "Malcolm Glazer (d. 2014) made fortune in real estate / Tampa Bay Buccaneers; sons Joel and Avram Glazer co-chairmen; Ratcliffe is INEOS chemicals founder, also owns OGC Nice (Ligue 1), Lausanne-Sport, INEOS Grenadiers cycling, Mercedes F1 1/3 stake",
      acquisitionYear: 2005,
      acquisitionPrice: 1.40,
      currentValuation: 6.55,
      impliedReturn: "Glazers ~4.7x in 19 years (~8.6% CAGR — relatively modest by Big-Six standards given debt drag and trophy decline)",
      ownershipGroup: [
        { name: "Glazer family (Joel, Avram, Bryan, Edward, Darcie, Kevin)", role: "majority owners, voting control via dual-class structure", pct: 49 },
        { name: "Sir Jim Ratcliffe / INEOS", role: "minority + football operations control (since Feb 2024)", pct: 28.94 },
        { name: "Public float (NYSE: MANU)", role: "minority shareholders", pct: 22 }
      ],
      institutionalInvestors: "Publicly listed on NYSE since 2012 — largest float of any English football club; held by various US institutions",
      otherBusinessInterests: "Glazers: Tampa Bay Buccaneers (NFL); Ratcliffe/INEOS: Nice (Ligue 1), Lausanne-Sport, INEOS Grenadiers cycling, Mercedes F1 (~1/3), INEOS Britannia (America's Cup)"
    },
    brand: {
      socialMedia: { instagram: "~63M", twitter: "~36M", facebook: "~80M" },
      merchandiseNotes: "Top-2 globally for football merchandise alongside Real Madrid; record £333.3M commercial revenue FY2024-25; Adidas kit deal £900M/10yr (2015-2025) renewed at lower terms 2025",
      internationalFanbase: "Estimated ~1.1B global followers; particularly strong in Asia (India, Indonesia, Malaysia), Africa, and North America — globalization peak under Ferguson/Beckham era",
      notableSponsorships: ["Snapdragon (front of shirt, 5yr ~£60M/yr from 2024)", "Adidas (kit manufacturer, ~£90M/yr)", "DXC Technology (sleeve sponsor)", "Hublot, Marriott, Konami"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Bruno Fernandes — captain, ~£300K/wk, contract through 2026 with extension option",
      starContracts: [
        { player: "Bruno Fernandes", position: "AM", aav: 19.5, contractNote: "~£300K/wk; signed 2022 extension; 2nd-highest paid in squad" },
        { player: "Marcus Rashford", position: "FW", aav: 22.0, contractNote: "5yr extension signed 2023; ~£325K/wk; loaned to Aston Villa Feb 2025" },
        { player: "Casemiro", position: "DM", aav: 18.0, contractNote: "Signed 2022 from Real Madrid for £70M; ~£350K/wk" }
      ]
    },
    analystNotes: "Manchester United is the case study in brand resilience without sporting success — record £666.5M revenue FY2024-25 despite a decade with zero Premier League titles validates the global commercial flywheel. The Ratcliffe minority deal at £4.5B implied valuation, combined with a planned £2B new stadium, signals the next leg of value creation hinges on infrastructure modernization to recapture matchday economics versus Tottenham/Arsenal. Primary risks are leveraged balance sheet (~£700M net debt legacy), continued trophy drought eroding international appeal, and Glazer-Ratcliffe governance friction over voting control."
  },

  "Manchester City": {
    valuationHistory: [
      { year: 2019, value: 2.69, source: "Forbes" },
      { year: 2020, value: 2.69, source: "Forbes" },
      { year: 2021, value: 4.00, source: "Forbes" },
      { year: 2022, value: 4.25, source: "Forbes" },
      { year: 2023, value: 4.99, source: "Forbes" },
      { year: 2024, value: 5.30, source: "Forbes / Sportico $5.30B / £4.1B" },
    ],
    revenue: { estimate: 902, year: 2024, source: "Manchester City Football Club Ltd accounts FY2023-24 (£712.8M)", operatingIncome: 80 },
    transactions: [
      { year: 2008, price: 0.39, buyer: "Sheikh Mansour bin Zayed Al Nahyan / Abu Dhabi United Group (ADUG)", seller: "Thaksin Shinawatra (Thai former PM)", notes: "ADUG paid £210M for the club in Sept 2008; Mansour is half-brother of UAE president Sheikh Mohamed bin Zayed; began transformative spending immediately, Robinho £32.5M record signing day one" },
      { year: 2015, price: null, buyer: "China Media Capital (CMC) / Citic Capital", seller: "ADUG (partial dilution)", notes: "Bought 13% of City Football Group for $400M, valuing CFG at $3B in 2015 — first major external valuation marker; Silver Lake later (2019) bought 10% at $4.8B CFG valuation" },
      { year: 2019, price: 0.50, buyer: "Silver Lake Partners", seller: "ADUG (partial dilution)", notes: "Silver Lake paid $500M for 10% of City Football Group, implying CFG valuation of $4.8B; established benchmark for multi-club ownership equity" }
    ],
    stadium: {
      name: "Etihad Stadium",
      yearBuilt: 2002,
      capacity: 53400,
      ownershipModel: "owned by Manchester City Council; club holds 250-year lease (one of longest in football)",
      teamOwnsLand: false,
      publicSubsidy: 110,
      privateFinancing: null,
      namingRightsDeal: { sponsor: "Etihad Airways", annualValue_M: 28, totalValue_M: 400, expiryYear: 2025, notes: "10-year deal signed 2011 covered stadium + Etihad Campus + sleeve + extensive UAE-linked commercial integration; PSR / fair-value scrutiny by Premier League pending in 115 charges; deal renewed/extended" },
      nonGameRevenue: "Etihad Campus (training + academy + community + women's stadium); concerts; Tunnel Club premium hospitality; expansion under construction",
      newStadiumPlans: "£300M+ Etihad expansion approved 2023: North Stand expansion to ~61,000 capacity by 2026, plus hotel, museum, fan zone; financed by club / ADUG"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee tier 1 due to title dominance",
      streamingNotes: "All Or Nothing Amazon Prime documentary (2018) defining behind-scenes deal; CityTV in-house",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season; City received ~£175M as 2023-24 champion (top merit pool)"
    },
    ownership: {
      primaryOwner: "Sheikh Mansour bin Zayed Al Nahyan / Abu Dhabi United Group (ADUG) holds ~81% of City Football Group",
      ownerNetWorth: "Sheikh Mansour est. ~$30B+ personal; Al Nahyan family wealth via Abu Dhabi sovereign funds (~$1.7T managed across ADIA, Mubadala, ADQ)",
      ownerBackground: "Sheikh Mansour: vice president of UAE, deputy prime minister, brother of UAE president; bought City as marketing vehicle for Abu Dhabi 'Vision 2030' diversification away from oil; CFG now owns/stakes in 13 clubs across 5 continents",
      acquisitionYear: 2008,
      acquisitionPrice: 0.39,
      currentValuation: 5.30,
      impliedReturn: "~13.6x in 16 years (~17% CAGR) — best in Big Six; transformed bottom-half club into 6x champion in 7 years; net spend ~£2B+ on transfers since 2008",
      ownershipGroup: [
        { name: "ADUG (Sheikh Mansour)", role: "majority owner via City Football Group ~81%", pct: 81 },
        { name: "Silver Lake Partners", role: "minority CFG investor since 2019", pct: 10 },
        { name: "China Media Capital + Citic Capital", role: "minority CFG since 2015", pct: 9 }
      ],
      institutionalInvestors: "Silver Lake (US PE), CMC (China) at CFG holding-co level; not publicly listed",
      otherBusinessInterests: "City Football Group: NYCFC (MLS), Melbourne City, Mumbai City, Yokohama F. Marinos, Girona FC, Lommel SK, Troyes, Palermo, Sichuan Jiuniu, Bahia, Montevideo City Torque, Sk Vorwärts Steyr"
    },
    brand: {
      socialMedia: { instagram: "~52M", twitter: "~12M", facebook: "~46M" },
      merchandiseNotes: "Commercial revenue £343M FY2023-24 (~$430M); Puma kit deal £65M/yr from 2019 was record at signing; benefits from Haaland-driven sales surge",
      internationalFanbase: "Rapid growth post-2008 from local Manchester base; major presence in MENA region via Etihad/UAE; growing in Asia-Pacific via CFG network",
      notableSponsorships: ["Etihad (front of shirt + stadium, ~£67.5M/yr)", "Puma (kit, £65M/yr)", "Marathonbet, OKX (sleeve), Nexen Tire, Asahi"]
    },
    onField: {
      championshipsLast10Years: 6,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Erling Haaland — 9.5yr / £390K/wk extension signed Jan 2025, contract through 2034",
      starContracts: [
        { player: "Erling Haaland", position: "FW", aav: 26.4, contractNote: "Jan 2025 extension; ~£390K/wk; through 2034; record-breaking £51M release clause from Dortmund 2022" },
        { player: "Kevin De Bruyne", position: "AM", aav: 26.0, contractNote: "~£385K/wk; departing summer 2025 free transfer announced" },
        { player: "Phil Foden", position: "AM/W", aav: 19.0, contractNote: "Local academy product; ~£300K/wk; through 2027; PFA Player of Season 2023-24" }
      ]
    },
    analystNotes: "Manchester City is the modern football valuation peak — 6 Premier League titles in 7 years and 2023 Champions League/treble validate the ADUG-funded buildout, with $902M revenue ranking top-3 globally and best-in-class operating margins (~$148M EBITDA). The 13.6x return on Mansour's £210M 2008 entry is the textbook sovereign-wealth football case study. Primary risk is the unresolved 115 Premier League charges (alleged PSR breaches 2009-2018) — adverse outcome could trigger points deductions, transfer restrictions, or expulsion; secondary risks are succession dependence on Pep Guardiola and the inflated wage bill (£200M+ annually) anchored by the Haaland mega-deal."
  },

  "Liverpool": {
    valuationHistory: [
      { year: 2019, value: 2.18, source: "Forbes" },
      { year: 2020, value: 2.46, source: "Forbes" },
      { year: 2021, value: 4.10, source: "Forbes" },
      { year: 2022, value: 4.45, source: "Forbes" },
      { year: 2023, value: 5.29, source: "Forbes" },
      { year: 2024, value: 5.37, source: "Forbes" },
    ],
    revenue: { estimate: 779, year: 2024, source: "Liverpool FC accounts FY2023-24 (£614M)", operatingIncome: 71 },
    transactions: [
      { year: 2007, price: 0.44, buyer: "Tom Hicks & George Gillett", seller: "David Moores / Granada plc", notes: "American duo bought for £218.9M in leveraged deal; tenure marked by financial mismanagement, near-administration; debt spiraled to ~£280M by 2010" },
      { year: 2010, price: 0.48, buyer: "Fenway Sports Group (John W. Henry / Tom Werner)", seller: "Tom Hicks & George Gillett (forced sale via High Court order)", notes: "FSG paid £300M (~$477M) in October 2010 in court-ordered sale resolving Hicks/Gillett debt crisis; transformative ownership turned club into top-3 globally" },
      { year: 2021, price: null, buyer: "RedBird Capital", seller: "FSG (partial dilution)", notes: "RedBird paid $750M for ~11% of FSG holding-co (covering Liverpool + Red Sox + Penguins), implying ~$7.35B FSG enterprise value" },
      { year: 2023, price: null, buyer: "Dynasty Equity", seller: "FSG (partial)", notes: "$200M minority equity injection into Liverpool FC specifically (not FSG holding) Sept 2023; valued club around $4.5-5B; FSG explored sale earlier 2023 but pulled listing" }
    ],
    stadium: {
      name: "Anfield",
      yearBuilt: 1884,
      capacity: 61276,
      ownershipModel: "owned by Liverpool Football Club (FSG ownership)",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 290,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal; 'Anfield' is heritage name protected from commercial renaming by FSG explicitly" },
      nonGameRevenue: "Stadium tours, museum, concerts, premium hospitality 'The Boot Room' / Main Stand suites; matchday revenue ~£100M FY2023-24",
      newStadiumPlans: "£80M Anfield Road Stand expansion completed 2023-24 (added ~7,000 seats to reach 61,276); no further stadium plans announced — capacity-constrained relative to Tottenham/Arsenal/United"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee tier 1 (most-televised tier)",
      streamingNotes: "LFCTV behind-scenes content; Amazon Prime 'This is Anfield' (2020) all-access doc",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season; Liverpool received ~£170M as 2023-24 third place + Champions League"
    },
    ownership: {
      primaryOwner: "Fenway Sports Group (John W. Henry chairman, Tom Werner co-owner)",
      ownerNetWorth: "John Henry ~$2.6B (commodities trading via Henry & Co); FSG holding-co est. value ~$10B+",
      ownerBackground: "Henry made fortune in commodities/futures trading; Werner background in TV production (Carsey-Werner); FSG founded 2002; portfolio includes Boston Red Sox (MLB), Pittsburgh Penguins (NHL), RFK Racing (NASCAR), Fenway Sports Management",
      acquisitionYear: 2010,
      acquisitionPrice: 0.48,
      currentValuation: 5.37,
      impliedReturn: "~11.2x on 2010 entry over 14 years (~18% CAGR); benefits from Klopp era turnaround (2015-2024)",
      ownershipGroup: [
        { name: "Fenway Sports Group", role: "majority owner of Liverpool FC", pct: null },
        { name: "RedBird Capital Partners", role: "minority FSG holding-co (~11% acquired 2021 for $750M)", pct: null },
        { name: "Dynasty Equity", role: "Liverpool FC direct minority injection $200M Sept 2023", pct: null },
        { name: "LeBron James", role: "FSG minority partner via Maverick Carter", pct: null }
      ],
      institutionalInvestors: "RedBird Capital (US PE), Dynasty Equity (US sports PE), Salem Partners minority",
      otherBusinessInterests: "FSG portfolio: Boston Red Sox (MLB, $4.8B Forbes), Pittsburgh Penguins (NHL, sold to Hoffmann Family Dec 2025), RFK Racing (NASCAR), Fenway Park, NESN ~80%"
    },
    brand: {
      socialMedia: { instagram: "~46M", twitter: "~21M", facebook: "~46M" },
      merchandiseNotes: "Top-5 global football merchandise; Nike kit deal £30M/yr base + significant royalty share (10-yr deal signed 2020) — uplift over previous New Balance £45M flat-fee deal; Klopp/Salah/Van Dijk era-defining commercial pull",
      internationalFanbase: "Strong global presence ~580M+ followers; particularly deep penetration in SE Asia (Indonesia, Thailand, Malaysia), Scandinavia, and Ireland; 'You'll Never Walk Alone' anthem heritage",
      notableSponsorships: ["Standard Chartered (front of shirt, £50M/yr extended through 2027)", "Nike (kit, £30M base + royalty)", "Expedia (sleeve), Carlsberg, Axa, Google Pixel"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Mohamed Salah — 2yr extension signed April 2025, ~£400K/wk through 2027",
      starContracts: [
        { player: "Mohamed Salah", position: "FW", aav: 27.0, contractNote: "April 2025 extension after long uncertainty; through 2027; ~£400K/wk; club's top earner" },
        { player: "Virgil van Dijk", position: "CB", aav: 21.0, contractNote: "April 2025 extension as captain; through 2027; ~£310K/wk" },
        { player: "Trent Alexander-Arnold", position: "RB", aav: 0, contractNote: "Departed June 2025 free transfer to Real Madrid (signed pre-bosman in May)" }
      ]
    },
    analystNotes: "Liverpool's $5.37B valuation reflects FSG's 11.2x return since 2010 — Klopp era (2015-2024) delivered Champions League 2019, Premier League 2019-20, and consistent top-4 finishes that elevated the brand to global top-5. The 2024-25 Premier League title under Arne Slot validated post-Klopp continuity and cemented the manager succession. Primary risks are stadium capacity constraint (Anfield maxed at 61,276 vs. Tottenham/United 60K+/74K), aging core (Salah/Van Dijk both 32+), and FSG's exit speculation following 2022-23 strategic review — though Henry has publicly committed to long-term ownership."
  },

  "Arsenal": {
    valuationHistory: [
      { year: 2019, value: 2.27, source: "Forbes" },
      { year: 2020, value: 2.88, source: "Forbes" },
      { year: 2021, value: 2.80, source: "Forbes" },
      { year: 2022, value: 2.83, source: "Forbes" },
      { year: 2023, value: 2.26, source: "Forbes" },
      { year: 2024, value: 3.42, source: "Forbes / Sportico $3.4B / Football Benchmark €4.01B" },
    ],
    revenue: { estimate: 772, year: 2024, source: "Arsenal Holdings Ltd accounts FY2023-24 (£616.6M); FY2024-25 record £691M", operatingIncome: 174 },
    transactions: [
      { year: 2007, price: null, buyer: "Stan Kroenke (KSE)", seller: "Various Arsenal shareholders", notes: "Began acquiring shares in April 2007; reached 29.9% by 2009 forcing position; Alisher Usmanov also amassed parallel ~30% stake" },
      { year: 2018, price: 0.84, buyer: "Stan Kroenke (KSE)", seller: "Alisher Usmanov", notes: "Aug 2018: Kroenke took full control by buying out Usmanov's 30.04% for £550M; reached 100% ownership; total Kroenke investment to acquire club estimated ~£800M-1B over 11 years" },
      { year: 2024, price: null, buyer: null, seller: null, notes: "No transactions; KSE retains 100% ownership; speculation around minority stake sale or future exit at $3.5B+ implied valuation, no formal process announced" }
    ],
    stadium: {
      name: "Emirates Stadium",
      yearBuilt: 2006,
      capacity: 60704,
      ownershipModel: "owned by Arsenal Holdings Ltd / KSE",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 510,
      namingRightsDeal: { sponsor: "Emirates Airline", annualValue_M: 31, totalValue_M: 200, expiryYear: 2028, notes: "Emirates 5-year extension signed 2018 covered shirt + stadium combined ~£200M total; one of largest single-sponsor packages in football; predecessor 'Ashburton Grove' development name" },
      nonGameRevenue: "Stadium tours, museum, concerts (Taylor Swift, Coldplay), Arsenal Hub training facility tours, premium hospitality at 'Diamond Club' — matchday revenue ~£166M FY2023-24",
      newStadiumPlans: "Kroenke considering Emirates expansion to ~70,000 capacity; planning study underway 2024-25; no firm timeline; would require redevelopment of east stand"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee tier 1",
      streamingNotes: "Amazon 'All or Nothing: Arsenal' (2022) major brand boost; Arsenal Player in-house",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season; Arsenal received ~£175M as 2023-24 second-place finish + Champions League"
    },
    ownership: {
      primaryOwner: "Stan Kroenke / Kroenke Sports & Entertainment (KSE) — 100%",
      ownerNetWorth: "Stan Kroenke ~$16B (real estate / Walmart family marriage to Ann Walton); Josh Kroenke (son) increasing operational role",
      ownerBackground: "Stan Kroenke built fortune in shopping centers + real estate; married into Walton family (Walmart heirs) 1974; KSE portfolio: LA Rams (NFL), Denver Nuggets (NBA), Colorado Avalanche (NHL), Colorado Rapids (MLS), Colorado Mammoth (NLL)",
      acquisitionYear: 2018,
      acquisitionPrice: 0.84,
      currentValuation: 3.42,
      impliedReturn: "~4x on £550M Usmanov buyout in 6 years; full ownership cost ~£800M-1B implies ~3-4x — strong but trails City/Liverpool returns",
      ownershipGroup: [
        { name: "Kroenke Sports & Entertainment (Stan & Josh Kroenke)", role: "100% owner", pct: 100 }
      ],
      institutionalInvestors: "None — fully privately held by Kroenke family",
      otherBusinessInterests: "KSE: LA Rams (NFL), Nuggets (NBA), Avalanche (NHL), Rapids (MLS), Pepsi Center / Ball Arena, Altitude Sports Network, vast real estate portfolio (~$8B est.)"
    },
    brand: {
      socialMedia: { instagram: "~32M", twitter: "~22M", facebook: "~38M" },
      merchandiseNotes: "Strong North London / international brand; Adidas kit deal £75M/yr (2019-2024) renewed at uplift; Arteta era + Saka/Ødegaard-led young core driving fresh merchandise cycle",
      internationalFanbase: "Particularly strong in Africa (Nigeria especially), Asia, and US — benefits from London market presence and exciting young squad rebrand",
      notableSponsorships: ["Emirates (front of shirt + stadium combined £200M+)", "Adidas (kit, £75M+/yr)", "Visit Rwanda (sleeve, ~£10M/yr controversial)", "Konami, Lavazza"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Bukayo Saka — 4yr extension signed 2023, £200K/wk through 2027",
      starContracts: [
        { player: "Bukayo Saka", position: "RW", aav: 13.5, contractNote: "Academy product; £200K/wk; through 2027; star of Arteta rebuild" },
        { player: "Martin Ødegaard", position: "AM", aav: 14.2, contractNote: "Captain; signed 2022 from Real Madrid £30M; £210K/wk through 2028" },
        { player: "Declan Rice", position: "DM", aav: 16.2, contractNote: "Signed 2023 from West Ham £105M club record; £240K/wk through 2028" }
      ]
    },
    analystNotes: "Arsenal's $3.42B valuation has rebounded sharply with the Arteta-era resurgence — 2nd-place finishes 2022-23 and 2023-24 plus return to Champions League ended a 7-year European exile. Football Benchmark's €4.01B enterprise value suggests further upside if Premier League title returns, with record £691M revenue FY2024-25 closing the gap to the City/Liverpool/United top tier. Primary risks are sustained title-less status under Kroenke (no PL title since Wenger's 2003-04 'Invincibles'), Emirates capacity ceiling vs. peers, and dependence on Arteta's project — but young homegrown core (Saka, Saliba, Martinelli) provides multi-year value visibility."
  },

  "Chelsea": {
    valuationHistory: [
      { year: 2019, value: 2.58, source: "Forbes" },
      { year: 2020, value: 2.58, source: "Forbes" },
      { year: 2021, value: 3.20, source: "Forbes" },
      { year: 2022, value: 5.40, source: "Forbes / validated by Boehly £4.25B sale (incl. infrastructure commitments)" },
      { year: 2023, value: 3.10, source: "Forbes (post-sale recalibration)" },
      { year: 2024, value: 3.25, source: "Forbes / Sportico $3.25B" },
    ],
    revenue: { estimate: 591, year: 2024, source: "Chelsea FC Holdings Ltd / 22 Holdco accounts FY2023-24 (£468M)", operatingIncome: -29 },
    transactions: [
      { year: 2003, price: 0.23, buyer: "Roman Abramovich", seller: "Ken Bates", notes: "Russian oligarch paid £140M including debt assumption; transformed Chelsea via massive transfer spending; era ended with UK government sanctions March 2022 following Russia's invasion of Ukraine" },
      { year: 2022, price: 5.20, buyer: "Todd Boehly / Clearlake Capital consortium (BlueCo 22 Ltd)", seller: "Roman Abramovich (forced sale via UK sanctions)", notes: "May 2022 sale at £4.25B (~$5.2B) — record football transaction at time; £2.5B payment plus £1.75B infrastructure / charity commitments; Abramovich proceeds frozen pending Ukraine relief deployment per UK government" }
    ],
    stadium: {
      name: "Stamford Bridge",
      yearBuilt: 1877,
      capacity: 41631,
      ownershipModel: "Stadium operated by Chelsea FC; freehold owned by Chelsea Pitch Owners (CPO), a separate fan-investor entity holding ~25% of land",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights — 'Stamford Bridge' is heritage name; Chelsea Pitch Owners arrangement complicates redevelopment / commercial naming" },
      nonGameRevenue: "Stadium tours, museum, hotels (2 Chelsea-branded hotels on site), Earl's Court redevelopment proximity; matchday revenue ~£101M (capped by stadium capacity)",
      newStadiumPlans: "Boehly-Clearlake exploring £2B+ new stadium or major Stamford Bridge redevelopment; site constraints from CPO ownership and West London property prices remain obstacles; Earl's Court redevelopment site one option floated"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee tier 1",
      streamingNotes: "Disney+ 'Chelsea: The Movie' (2024) all-access doc; Chelsea TV platform; Apple-Stagwell content partnership",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season; Chelsea received ~£155M as 2023-24 sixth-place finish (no European competition)"
    },
    ownership: {
      primaryOwner: "BlueCo 22 Ltd: Clearlake Capital (~61.5%) + Boehly consortium (~38.5%, includes Mark Walter, Hansjörg Wyss)",
      ownerNetWorth: "Todd Boehly ~$6.7B (Eldridge Industries, Dodgers minority); Behdad Eghbali / Clearlake co-founders est. $2-3B each; Mark Walter $7B+ (Lakers, Dodgers control); Hansjörg Wyss $5B+",
      ownerBackground: "Boehly: Eldridge Industries founder, LA Dodgers minority co-owner, LA Sparks owner; Clearlake Capital: PE firm with $90B AUM; Walter: Guggenheim Partners CEO, now Lakers majority + Dodgers; Wyss: Synthes founder, philanthropist",
      acquisitionYear: 2022,
      acquisitionPrice: 5.20,
      currentValuation: 3.25,
      impliedReturn: "Negative ~38% on cost basis after 2 years (£4.25B → ~$3.25B; further write-down to nil reported by 22 Holdco SEC filings); largest paper loss in modern football M&A",
      ownershipGroup: [
        { name: "Clearlake Capital", role: "majority equity (~61.5% via BlueCo)", pct: 61.5 },
        { name: "Todd Boehly / Eldridge Industries", role: "co-control / governor", pct: 13 },
        { name: "Mark Walter / Guggenheim", role: "minority (~13% within Boehly group)", pct: 13 },
        { name: "Hansjörg Wyss", role: "minority", pct: 12 }
      ],
      institutionalInvestors: "Clearlake's $90B AUM funds back the deal; £450M equity injection 2024-25 from existing investors — largest single round since acquisition",
      otherBusinessInterests: "Boehly: LA Dodgers minority (5%), LA Sparks majority, Eldridge (DraftKings, Athletic, Beverly Hills Hotel); Walter: LA Lakers majority (2025 $10B deal), LA Dodgers control; Clearlake: RB Strasbourg (Ligue 1) parallel ownership"
    },
    brand: {
      socialMedia: { instagram: "~37M", twitter: "~22M", facebook: "~50M" },
      merchandiseNotes: "Strong global brand from Abramovich era trophies; Nike kit deal £60M/yr (2017-2032) — long-tail commercial moat; mass squad churn under Boehly disrupting kit/merchandise continuity",
      internationalFanbase: "Established global presence from Abramovich-era investment in marketing; significant in Asia (especially Nigeria, Indonesia, Thailand); CFG-style multi-club approach via Strasbourg mirrors City Football Group strategy",
      notableSponsorships: ["Infinite Athlete (front of shirt 2yr ~£40M/yr)", "Nike (kit, £60M/yr through 2032)", "Cadbury, Hyundai, Trivago, BingX"]
    },
    onField: {
      championshipsLast10Years: 2,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Cole Palmer — 9yr contract through 2033, club's young franchise player",
      starContracts: [
        { player: "Cole Palmer", position: "AM", aav: 9.3, contractNote: "Signed 9yr deal Sept 2024 (long-term amortization tactic) through 2033; ~£140K/wk; surprise £40M signing from City 2023" },
        { player: "Enzo Fernández", position: "CM", aav: 11.0, contractNote: "Signed 2023 from Benfica £107M British record at time; 8.5yr deal through 2032" },
        { player: "Moises Caicedo", position: "DM", aav: 9.5, contractNote: "Signed 2023 from Brighton £115M British record (eclipsing Fernández); 8yr deal through 2031" }
      ]
    },
    analystNotes: "Chelsea is the modern football M&A cautionary tale — the £4.25B 2022 Boehly-Clearlake purchase is now marked at nil by parent BlueCo's SEC filings, with £700M FY2024 losses driven by historic squad-rebuild spend (~£1B+ net since takeover) and 6th-place 2023-24 finish missing European competition. Stamford Bridge's 41,631 capacity structurally caps matchday revenue at ~£100M vs. £160M+ at peers, and CPO land arrangement complicates redevelopment. The 2025 Conference League trophy and Cole Palmer's emergence offer green shoots, but Chelsea remains the consensus 'overpaid at the top' recent transaction in the league."
  },

  "Tottenham Hotspur": {
    valuationHistory: [
      { year: 2019, value: 1.65, source: "Forbes" },
      { year: 2020, value: 2.30, source: "Forbes" },
      { year: 2021, value: 2.30, source: "Forbes" },
      { year: 2022, value: 2.50, source: "Forbes" },
      { year: 2023, value: 2.80, source: "Forbes" },
      { year: 2024, value: 3.20, source: "Forbes" },
      { year: 2025, value: 3.30, source: "Forbes / CNBC Global Soccer Valuations 2025" },
    ],
    revenue: { estimate: 665, year: 2024, source: "Tottenham Hotspur 2023-24 financial results / Deloitte Football Money League", operatingIncome: 5 },
    transactions: [
      { year: 2001, price: 0.030, buyer: "ENIC International Ltd (Joe Lewis / Daniel Levy)", seller: "Alan Sugar / Tottenham Hotspur plc", notes: "ENIC bought initial 27% stake from Sugar at ~£22M; gradually increased to 85%+ over the next decade; Lewis funded via Tavistock Group / family trusts" },
      { year: 2022, price: null, buyer: "Lewis Family Trust (reorganization)", seller: "Joe Lewis (direct)", notes: "Joe Lewis ceased to be listed as person with significant control after Lewis Family Trust reorganization; remains beneficial owner via trust; followed by 2023 SEC insider trading charges (Lewis pleaded guilty Jan 2024, pardoned 2025); daughter Vivienne Lewis effectively oversees stake" },
      { year: 2024, price: 0.134, buyer: "ENIC / Lewis family (capital injection)", seller: "Tottenham Hotspur Limited (new shares)", notes: "$134M (~£106M) capital injection from ownership in late 2024 to fund operations and squad; Levy retained chairman role" }
    ],
    stadium: {
      name: "Tottenham Hotspur Stadium",
      yearBuilt: 2019,
      capacity: 62850,
      ownershipModel: "wholly owned by Tottenham Hotspur Limited; built on site of former White Hart Lane",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 1200,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights partner yet — Levy holding out for £25M+/year deal; club has actively shopped rights since 2017 without finding buyer at desired price" },
      nonGameRevenue: "Multi-event venue strategy: 2 NFL regular season games per year (10-year deal extended to 2030); Beyoncé Renaissance Tour (2023, six dates); Lady Gaga, Pink, F1 simulator experience, boxing, rugby; ~£100M+ non-football revenue annually; retractable pitch system unique in Premier League",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, BBC, Amazon Prime in UK; NBC Universal in US (6yr ~$2.7B through 2028); international rights distributed by PL globally",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season"
    },
    ownership: {
      primaryOwner: "ENIC International Ltd (Lewis Family Trust 60.7% effective + Daniel Levy 25.9% effective)",
      ownerNetWorth: "Joe Lewis estate ~$5B+ (pre-2024 reorganization); Levy ~£500M est.",
      ownerBackground: "ENIC bought initial Spurs stake from Alan Sugar in 2001 (~£22M for 27%); Lewis (currency trader, Tavistock Group founder) bankrolled investment; gradually consolidated to 85%+ via repeat purchases; Lewis charged with SEC insider trading 2023, pleaded guilty 2024, pardoned 2025; daughter Vivienne now oversees Lewis Family Trust holdings; Levy chairman since 2001, 25-year tenure unmatched in PL",
      acquisitionYear: 2001,
      acquisitionPrice: 0.030,
      currentValuation: 3.30,
      impliedReturn: "~110x over 24 years (~21% CAGR) — among the strongest sports franchise returns globally; driven by stadium build + PL TV explosion",
      ownershipGroup: [
        { name: "ENIC International (parent)", role: "majority", pct: 86.58 },
        { name: "Lewis Family Trust (via ENIC)", role: "effective ultimate owner", pct: 60.7 },
        { name: "Daniel Levy (via ENIC)", role: "chairman / effective", pct: 25.9 },
        { name: "Andrew Ashcroft family", role: "minority", pct: 3.4 },
        { name: "Other minority shareholders", role: "minority", pct: 10.0 }
      ],
      institutionalInvestors: "None significant; ENIC actively explored minority stake sale 2023-2024 with US PE/sovereign wealth interest; no deal closed",
      otherBusinessInterests: "Lewis: Tavistock Group (200+ assets across 13 countries), Aviva yacht, Bahamas property; Levy: ENIC operating businesses including stake interests in Slavia Prague, Glasgow Rangers (historical)"
    },
    brand: {
      socialMedia: { instagram: "~33M", twitter: "~10M", facebook: "~31M" },
      merchandiseNotes: "Top-10 PL merchandise; Son Heung-min driving massive Korean/Asian merchandise sales; James Maddison shirts; club shop multi-channel strong",
      internationalFanbase: "~370M global fans per Nielsen; deep penetration in Asia (Korea via Son), North America (NFL stadium dual-use builds US brand), Scandinavia",
      notableSponsorships: ["AIA (front of shirt, ~£40M/yr through 2027)", "Nike (kit, ~£30M/yr)", "Lavazza (regional)", "Cinch (sleeve)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Son Heung-min — captain, contract through 2025-26 ~£200K/wk; James Maddison ~£170K/wk through 2028",
      starContracts: [
        { player: "Son Heung-min", position: "FW", aav: 13.5, contractNote: "~£200K/wk (~$13.5M USD), contract through June 2026; captain since 2023" },
        { player: "James Maddison", position: "AM", aav: 11.5, contractNote: "~£170K/wk; signed from Leicester 2023 for £40M; contract through 2028" },
        { player: "Cristian Romero", position: "CB", aav: 10.0, contractNote: "~£150K/wk; vice-captain; contract through 2027" },
        { player: "Dominic Solanke", position: "FW", aav: 9.0, contractNote: "~£140K/wk; signed from Bournemouth Aug 2024 for £55M club-record fee; through 2030" }
      ]
    },
    analystNotes: "Spurs are the cleanest recent example of stadium-led valuation expansion: Daniel Levy's £1.2B Tottenham Hotspur Stadium (opened 2019) transformed the club from a £30M acquisition (2001) into a $3.3B asset — a ~110x return powered by NFL/concert non-football revenue and London real-estate optionality. The trophy gap (no major silverware since 2008 League Cup) and on-pitch volatility — Champions League absence cost £30M+ in 2024-25 revenue — are the main valuation drags relative to the Big Six peers. ENIC has actively shopped a minority stake at $3B+ valuations since 2023 without closing, suggesting a topping-out signal at current marks until silverware or stadium naming rights deliver fresh growth."
  },

  "Newcastle United": {
    valuationHistory: [
      { year: 2019, value: 0.345, source: "Forbes" },
      { year: 2020, value: 0.375, source: "Forbes" },
      { year: 2021, value: 0.405, source: "Forbes / pre-PIF Mike Ashley sale" },
      { year: 2022, value: 0.575, source: "Forbes" },
      { year: 2023, value: 0.794, source: "Forbes" },
      { year: 2024, value: 0.795, source: "Forbes (May 2024); 23rd globally" },
      { year: 2025, value: 1.05, source: "Forbes / CNBC 2025 / agbi.com PIF analysis Oct 2025" },
    ],
    revenue: { estimate: 425, year: 2024, source: "Newcastle United 2024-25 financial results (£335M record)", operatingIncome: 35 },
    transactions: [
      { year: 2007, price: 0.265, buyer: "Mike Ashley", seller: "Sir John Hall / Freddy Shepherd consortium", notes: "Sports Direct founder Ashley bought for £134.4M (~$265M); 14-year tenure marked by underinvestment, two relegations, fan protests, sale attempts blocked by PL governance challenges" },
      { year: 2021, price: 0.405, buyer: "Saudi PIF 80% + RB Sports & Media (Reuben Brothers) 10% + PCP Capital Partners (Amanda Staveley) 10%", seller: "Mike Ashley", notes: "£305M (~$405M) deal closed Oct 7, 2021 after 18 months of regulatory/PL approval delays; PIF chairman Yasir Al-Rumayyan installed; Staveley played broker role" },
      { year: 2024, price: null, buyer: "PIF (consolidating to ~85%) + RB Sports & Media (to ~15%)", seller: "PCP Capital Partners (Amanda Staveley exit)", notes: "Staveley's PCP exited in mid-2024; PIF and Reuben Brothers absorbed her 10% stake; Staveley pivoted to other sports investments including failed Tottenham bid" }
    ],
    stadium: {
      name: "St James' Park",
      yearBuilt: 1892,
      capacity: 52305,
      ownershipModel: "owned by Newcastle United Limited (the club); freehold purchased back from Mike Ashley regime",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming sponsor — Mike Ashley briefly renamed it 'sportsdirect.com @ St James' Park' in 2011 to massive fan backlash; PIF era has prioritized brand integrity, no naming partner sought" },
      nonGameRevenue: "Limited compared to multi-event venues; conferencing, tours, hospitality; PIF investing in match-day premium product",
      newStadiumPlans: "Active exploration of new ~70,000-seat stadium (Leazes Park or expanded current site); early cost estimates £1.5-2B; Bloomberg reports PIF reluctant to fully fund — exploring long-term debt-financing model; decision expected 2025-26"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, BBC, Amazon Prime in UK; NBC Universal in US; club has actively built direct-to-consumer Saudi/Middle East content via PIF-aligned channels",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season"
    },
    ownership: {
      primaryOwner: "Saudi Public Investment Fund (PIF) — sovereign wealth fund of Saudi Arabia",
      ownerNetWorth: "PIF AUM ~$925B+ (one of world's largest sovereign wealth funds); chairman Yasir Al-Rumayyan",
      ownerBackground: "PIF acquired Newcastle Oct 2021 for £305M after 18-month PL approval delay; deal subject to extensive human rights criticism; Saudi state legally separated from PIF for PL governance test; PIF treats Newcastle as one of its highest-profile sports investments alongside LIV Golf, F1 sponsorships, Saudi Pro League buys",
      acquisitionYear: 2021,
      acquisitionPrice: 0.405,
      currentValuation: 1.05,
      impliedReturn: "~2.6x in 4 years (~27% CAGR) — among the fastest valuation jumps in PL history; driven by spending unlock, on-pitch progress (Champions League 2023-24), and PIF brand premium",
      ownershipGroup: [
        { name: "Saudi Public Investment Fund (PIF)", role: "majority", pct: 85 },
        { name: "RB Sports & Media (Reuben Brothers)", role: "minority", pct: 15 }
      ],
      institutionalInvestors: "PIF itself is sovereign wealth; Reuben Brothers UK-based property/investment family ($25B+ net worth combined)",
      otherBusinessInterests: "PIF: LIV Golf, Saudi Pro League clubs (Al-Ittihad, Al-Nassr, Al-Hilal, Al-Ahli), Lucid Motors, Magic Leap, Aston Martin (~16%), Boeing, Live Nation, Uber stake, Heathrow Airport stake; Reuben Brothers: London real estate, racecourses (Newbury, Arena Racing), data centers"
    },
    brand: {
      socialMedia: { instagram: "~3M", twitter: "~2.5M", facebook: "~3M" },
      merchandiseNotes: "Massive uplift since PIF takeover; Sela kit deal driving merchandise; Geordie identity and fanaticism a unique brand asset",
      internationalFanbase: "Strong UK base; PIF has invested heavily in Saudi/MENA fanbase development and Asian outreach; growing global profile post-Champions League run",
      notableSponsorships: ["Sela (front of shirt, Saudi entertainment company, ~£25M/yr through 2028)", "Adidas (kit, ~£30M/yr)", "Noon.com (sleeve, Saudi-based)", "FUN88"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Bruno Guimarães — midfield captain, ~£180K/wk through 2028; Alexander Isak ~£140K/wk through 2028 (subject to summer transfer interest)",
      starContracts: [
        { player: "Bruno Guimarães", position: "CM", aav: 12.0, contractNote: "~£180K/wk; signed from Lyon Jan 2022 for £40M; new deal 2024 through 2028" },
        { player: "Alexander Isak", position: "FW", aav: 9.5, contractNote: "~£140K/wk; signed from Real Sociedad 2022 for club-record £63M; through 2028" },
        { player: "Sandro Tonali", position: "CM", aav: 9.0, contractNote: "~£135K/wk; signed from AC Milan 2023 for £55M; betting ban 2023-24 served; through 2028" },
        { player: "Anthony Gordon", position: "FW", aav: 8.0, contractNote: "~£120K/wk; signed from Everton 2023 for £45M; through 2028" }
      ]
    },
    analystNotes: "Newcastle is the highest-CAGR PL franchise of the past four years: PIF's £305M Oct 2021 entry has expanded ~2.6x to ~$1.05B by 2025, driven by sovereign-wealth spending firepower, Champions League qualification (2022-23), and brand reset from the toxic Mike Ashley era. The new-stadium decision — £1.5-2B for a 70K-seat venue vs. expanded St James' — is the next inflection point and Bloomberg reporting that PIF wants debt financing rather than equity injection signals capital discipline despite the deep-pocket optionality. Risks: PSR/FFP constraints visible in 2024 player sales (Anderson, Minteh) to balance the books, and the PIF brand premium is partly priced in — incremental returns from here depend on consistent CL qualification and stadium execution."
  },

  "Aston Villa": {
    valuationHistory: [
      { year: 2019, value: 0.270, source: "Forbes / promotion year" },
      { year: 2020, value: 0.430, source: "Forbes" },
      { year: 2021, value: 0.530, source: "Forbes" },
      { year: 2022, value: 0.560, source: "Forbes" },
      { year: 2023, value: 0.620, source: "Forbes" },
      { year: 2024, value: 0.667, source: "Forbes (May 2024)" },
      { year: 2025, value: 1.27, source: "TBR Football / Atairos transaction implied; Champions League uplift" },
    ],
    revenue: { estimate: 463, year: 2025, source: "Aston Villa Financial Results 2024-25 / Sportico Champions League analysis", operatingIncome: 15 },
    transactions: [
      { year: 2016, price: 0.076, buyer: "Tony Xia / Recon Group", seller: "Randy Lerner", notes: "Chinese businessman Xia bought for £76M after Lerner's 2006-2016 ownership ended in relegation; Xia tenure brief and financially troubled" },
      { year: 2018, price: 0.038, buyer: "Nassef Sawiris (NSWE) + Wes Edens", seller: "Tony Xia / Recon Group (distressed)", notes: "V Sports / NSWE bought 55% stake for £30M (~$38M) when Villa was Championship-tier and financially distressed; valuation implied ~$70M total enterprise; transformed club via promotion 2019, sustained PL investment" },
      { year: 2024, price: null, buyer: "Atairos (US private equity, Comcast-backed)", seller: "V Sports (dilution)", notes: "Atairos acquired ~21% minority stake initially, increased to ~31.1% via additional ~£100M equity injection; deal valued Aston Villa at ~£800M-1.0B implied; Atairos managing partner Michael Angelakis (former Comcast CFO)" }
    ],
    stadium: {
      name: "Villa Park",
      yearBuilt: 1897,
      capacity: 42682,
      ownershipModel: "owned by Aston Villa FC; one of the oldest top-flight grounds in continuous use",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming partner — Villa Park is a heritage name with strong fan attachment; club has resisted commercial renaming" },
      nonGameRevenue: "Limited non-match-day revenue; conferences and tours; expansion plans will add hospitality/event capacity",
      newStadiumPlans: "£100M+ North Stand redevelopment to expand Villa Park capacity from 42,682 to ~50,000 by 2027-28; planning permission secured 2023; aimed at meeting demand from Champions League / European matchday revenue uplift"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, BBC, Amazon Prime in UK; NBC Universal in US; club has invested in global digital reach via Villa TV / direct content",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season"
    },
    ownership: {
      primaryOwner: "V Sports — Nassef Sawiris (Egyptian, OCI N.V. fertilizer/industrial) + Wes Edens (Fortress Investment co-founder, Milwaukee Bucks co-owner)",
      ownerNetWorth: "Sawiris ~$9.3B (richest person in Egypt per Forbes); Edens ~$2.9B; Atairos ~$8B AUM",
      ownerBackground: "Sawiris-Edens duo bought distressed Villa from Tony Xia in 2018 for ~$38M (55% stake at ~$70M valuation); transformed club via promotion (2019) and sustained PL investment under Steven Gerrard then Unai Emery (2022-); reached UEFA Conference League Final 2025; Champions League 2024-25; Atairos minority entry 2024 brought US PE legitimacy",
      acquisitionYear: 2018,
      acquisitionPrice: 0.070,
      currentValuation: 1.27,
      impliedReturn: "~18x in 7 years (~52% CAGR) — exceptional return driven by promotion + on-pitch progress + EPL TV scale + Atairos validation",
      ownershipGroup: [
        { name: "Nassef Sawiris (via V Sports / NSWE)", role: "co-owner", pct: 34.4 },
        { name: "Wes Edens (via V Sports / NSWE)", role: "co-owner / chairman", pct: 34.4 },
        { name: "Atairos Group", role: "minority (US PE)", pct: 31.1 }
      ],
      institutionalInvestors: "Atairos Group — US private equity firm anchored by Michael Angelakis (former Comcast CFO) with ~$8B AUM; Comcast/NBCUniversal anchor LP; brings strategic depth on US media + sponsorship",
      otherBusinessInterests: "Sawiris: OCI N.V. (fertilizers, listed on Euronext Amsterdam), Adidas board member, LafargeHolcim past stake, Egyptian retail/real estate; Edens: Fortress Investment Group co-founder/co-CEO, Milwaukee Bucks NBA co-owner, NEC Wimborne (English League One), Brightline rail, Drogheda United"
    },
    brand: {
      socialMedia: { instagram: "~5M", twitter: "~2.5M", facebook: "~7M" },
      merchandiseNotes: "Mid-tier PL merch performer with Champions League 2024-25 uplift; Ollie Watkins shirts; new Adidas kit 2024 driving sales",
      internationalFanbase: "Historic English midlands base; Champions League run building broader European recognition; Sawiris connections drive MENA growth",
      notableSponsorships: ["Betano (front of shirt, Greek/Brazilian betting, ~£20M/yr)", "Adidas (kit deal from 2023, ~£15M/yr)", "Trade Nation", "Cazoo (historical)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Ollie Watkins — top scorer; Emiliano Martínez (World Cup 2022 winner, Argentine #1 GK); Morgan Rogers (£8M 2024 acquisition exploded into England starter)",
      starContracts: [
        { player: "Ollie Watkins", position: "FW", aav: 8.5, contractNote: "~£125K/wk; new deal Aug 2024 through 2028; club-record sale interest from Arsenal 2024 rebuffed" },
        { player: "Emiliano Martínez", position: "GK", aav: 8.0, contractNote: "~£120K/wk; through 2027; 2x World Cup Golden Glove winner" },
        { player: "Pau Torres", position: "CB", aav: 7.5, contractNote: "~£110K/wk; signed from Villarreal 2023 for £33M; through 2028" },
        { player: "Morgan Rogers", position: "AM", aav: 5.0, contractNote: "~£75K/wk; signed from Middlesbrough Jan 2024 for £8M; through 2030" }
      ]
    },
    analystNotes: "Aston Villa is the strongest sports-private-equity playbook in the PL: Sawiris/Edens bought for $38M in 2018 distress, executed promotion → Champions League in seven seasons, and now command an ~18x return at $1.27B implied (Atairos transaction). The Atairos minority entry validates valuation while bringing US media/sponsorship strategic depth via Comcast LP backing. Risks are PSR-driven (2024 squad sales — Douglas Luiz, Diaby — to balance books) and the structural challenge of converting one-off CL qualification into sustained Big-Six membership; the £100M Villa Park expansion to 50K is the matchday-revenue lever to widen the gap from peer clubs like Newcastle and West Ham."
  },

  "Brighton & Hove Albion": {
    valuationHistory: [
      { year: 2019, value: 0.215, source: "Forbes / post-promotion era" },
      { year: 2020, value: 0.290, source: "Forbes" },
      { year: 2021, value: 0.350, source: "Forbes" },
      { year: 2022, value: 0.450, source: "Forbes" },
      { year: 2023, value: 0.660, source: "Forbes" },
      { year: 2024, value: 0.730, source: "Forbes (May 2024)" },
      { year: 2025, value: 0.800, source: "CNBC Global Soccer Valuations 2025 (24th)" },
    ],
    revenue: { estimate: 279, year: 2024, source: "Forbes 2023-24; $35M matchday + $38M commercial + $206M broadcast", operatingIncome: 12 },
    transactions: [
      { year: 2009, price: 0.093, buyer: "Tony Bloom", seller: "Dick Knight (chairman) / consortium (rescue context)", notes: "Bloom invested initial ~£93M of personal money to rescue Brighton from administration risk; club was in League One; bankrolled stadium, training ground, manager appointments — total personal investment ~£400M+ over ownership tenure" },
      { year: 2017, price: null, buyer: "Tony Bloom (continued investment)", seller: "n/a", notes: "Promotion to Premier League at end of 2016-17 Championship season; Bloom's analytics-led 'Moneyball' model with Starlizard ties became case study" }
    ],
    stadium: {
      name: "American Express Stadium (Amex Stadium)",
      yearBuilt: 2011,
      capacity: 31876,
      ownershipModel: "owned by Brighton & Hove Albion FC (Tony Bloom funded build); 999-year ground lease from Brighton & Hove City Council",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 105,
      namingRightsDeal: { sponsor: "American Express", annualValue_M: 4, totalValue_M: null, expiryYear: 2030, notes: "Amex (American Express) naming since 2011 stadium opening; financial services giant with HQ in Brighton; ~£3M/yr (US$4M); renewed multiple times" },
      nonGameRevenue: "Conferencing, weddings, music events (Madness, Stereophonics); training ground complex at Lancing also generates licensing income; Premier League hospitality demand has expanded",
      newStadiumPlans: "Expansion plans to ~40,000 capacity in discussion; constrained by site and South Downs National Park boundary; no firm timetable as of 2025"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, BBC, Amazon Prime in UK; NBC Universal in US",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season — Brighton received £108M in 2023-24"
    },
    ownership: {
      primaryOwner: "Tony Bloom (~96.4% as of Nov 2025) — professional sports bettor / Starlizard founder",
      ownerNetWorth: "~£1.3B (Forbes / Sunday Times Rich List 2025)",
      ownerBackground: "Bloom built fortune via Starlizard professional sports betting syndicate (one of largest in world); bought boyhood club Brighton in 2009 from administration risk; built Amex Stadium (£105M personal financing); pioneered analytics-led player recruitment via Starlizard data infrastructure shared with the club; total personal investment in Brighton ~£400M+ across stadium, training ground, transfers; club operates at break-even with consistent player trading profits (Caicedo £115M to Chelsea, Mac Allister £35M to Liverpool, Cucurella £62M to Chelsea)",
      acquisitionYear: 2009,
      acquisitionPrice: 0.093,
      currentValuation: 0.800,
      impliedReturn: "~8.6x in 16 years (~14% CAGR) — strong return given Bloom's continued capital injections; player trading profits drive ongoing operating returns separate from valuation",
      ownershipGroup: [
        { name: "Tony Bloom", role: "majority owner / chairman", pct: 96.4 },
        { name: "Other minority shareholders", role: "minority (incl. legacy small holders)", pct: 3.6 }
      ],
      institutionalInvestors: "None significant; Bloom has resisted institutional minority sales — sole-owner model",
      otherBusinessInterests: "Starlizard (professional betting syndicate based in London, est. one of largest globally), Premier Bet (Africa), Royale Union Saint-Gilloise (Belgian Pro League side, sister club model with player loans/sales pipeline to Brighton)"
    },
    brand: {
      socialMedia: { instagram: "~2M", twitter: "~600K", facebook: "~1.4M" },
      merchandiseNotes: "Smaller fanbase than London/Manchester clubs but loyal regional South Coast support; Mitoma jerseys driving Japanese market; analytics-driven player development creates rapid star turnover",
      internationalFanbase: "Niche but growing global following via Premier League exposure; Mitoma drives Japan visibility; Caicedo and Mac Allister built South American profile",
      notableSponsorships: ["American Express (stadium naming + front of shirt, ~£8M/yr combined)", "Nike (kit, replaced Umbro 2024)", "JD Sports (sleeve)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Carlos Baleba — central midfielder, £25M+ valuation; Kaoru Mitoma — Japanese international winger; Joël Veltman — veteran defender",
      starContracts: [
        { player: "Carlos Baleba", position: "CM", aav: 5.5, contractNote: "~£80K/wk; signed from Lille 2023 for £23M; through 2028; reported transfer interest from top-six clubs at £80M+" },
        { player: "Kaoru Mitoma", position: "LW", aav: 5.0, contractNote: "~£75K/wk; signed from Kawasaki Frontale 2021 for ~£3M; through 2027" },
        { player: "Lewis Dunk", position: "CB", aav: 4.5, contractNote: "~£65K/wk; club captain, academy graduate; through 2027" },
        { player: "Bart Verbruggen", position: "GK", aav: 3.5, contractNote: "~£50K/wk; signed from Anderlecht 2023 for £16M; Netherlands #1; through 2028" }
      ]
    },
    analystNotes: "Brighton is the league's premier 'Moneyball' case study: Bloom's £400M cumulative personal investment has converted a 2009 League One rescue into an $800M franchise (~8.6x return) while generating ~£300M+ in player-trading profits via a Starlizard-fed analytics edge (Caicedo £115M, Mac Allister £35M, Cucurella £62M, Mitoma trajectory). The model's resilience comes from constant talent replenishment via the Belgian feeder club (Union Saint-Gilloise) and emerging-market scouting, partially offsetting structural matchday revenue limits at the 31K-capacity Amex. The principal valuation cap is sole-owner concentration risk: Bloom is 96.4% holder with no institutional capital — any future sale or succession event would set the next price discovery point."
  },

  "West Ham United": {
    valuationHistory: [
      { year: 2019, value: 0.508, source: "Forbes" },
      { year: 2020, value: 0.620, source: "Forbes" },
      { year: 2021, value: 0.700, source: "Forbes" },
      { year: 2022, value: 0.825, source: "Forbes" },
      { year: 2023, value: 0.945, source: "Forbes" },
      { year: 2024, value: 1.10, source: "Forbes (May 2024); 17th globally per CNBC 2025" },
      { year: 2025, value: 1.20, source: "CNBC Global Soccer Valuations 2025 / hammersheadlines.com" },
    ],
    revenue: { estimate: 349, year: 2024, source: "West Ham 2023-24 financial results / Forbes ($56M matchday + $82M commercial + $211M broadcast)", operatingIncome: 22 },
    transactions: [
      { year: 2010, price: 0.165, buyer: "David Sullivan + David Gold + Karren Brady", seller: "Eggert Magnusson / CB Holding (Icelandic consortium, distressed)", notes: "Sullivan/Gold (Birmingham City prior owners) bought controlling stake for ~£105M (~$165M) when CB Holding collapsed post-2008 financial crisis; took on ~£100M debt; Karren Brady appointed vice-chair" },
      { year: 2021, price: null, buyer: "Daniel Křetínský (via 1890s Holdings B.V.) + Pavel Horský", seller: "David Sullivan / David Gold (partial sale, 27%)", notes: "Czech billionaire Křetínský (EP Industries / Sparta Prague past owner / J Sainsbury / Royal Mail stake) bought ~27% stake at implied enterprise value ~£600-650M; entered as strategic minority with future option" },
      { year: 2024, price: null, buyer: "Sullivan + Křetínský (consolidating to equal partners)", seller: "Gold family (~25.1% stake post David Gold's death Jan 2023)", notes: "Sullivan and Křetínský jointly purchasing Gold family shares to become equal majority partners; Karren Brady stepped down 2024 amid ownership transition; Křetínský takeover speculation continues" }
    ],
    stadium: {
      name: "London Stadium",
      yearBuilt: 2012,
      capacity: 62500,
      ownershipModel: "owned by London Legacy Development Corporation (LLDC, Mayor of London); West Ham 99-year lease at £2.5M/year + revenue share; controversial subsidized terms",
      teamOwnsLand: false,
      publicSubsidy: 700,
      privateFinancing: 15,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Naming rights belong to LLDC (stadium owner), not West Ham; previous attempts to sell rights (Vodafone, others) have not landed; LLDC and West Ham legal disputes over operational control and revenue share" },
      nonGameRevenue: "LLDC operates non-football events (concerts: Beyoncé, Foo Fighters; athletics: Diamond League); West Ham receives limited share — major source of fan and ownership friction; Olympic Stadium dual-use design compromises sightlines",
      newStadiumPlans: "No new stadium plans — West Ham locked into 99-year LLDC lease through 2113; Křetínský speculated to push for renegotiation or stadium alternative; January 2025 stadium legal dispute won by club expanded operational rights"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, BBC, Amazon Prime in UK; NBC Universal in US",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season — West Ham received £147M in 2023-24"
    },
    ownership: {
      primaryOwner: "David Sullivan (~38.8%) and Daniel Křetínský (~27%, increasing toward 38-40% as Gold shares acquired)",
      ownerNetWorth: "Sullivan ~£1.2B (publishing, Gold/Sport newspaper group, real estate); Křetínský ~$8B+ (EPH energy holding, Casino retail group France, Royal Mail, J Sainsbury 4%, AC Sparta Prague past)",
      ownerBackground: "Sullivan/Gold/Brady consortium bought distressed West Ham in 2010 for £105M; oversaw 2016 move from Boleyn Ground (Upton Park) to London Stadium — financially transformative but fan-divisive; Křetínský's 2021 minority entry signaled likely takeover path; David Gold died Jan 2023; ownership now in transition with Sullivan and Křetínský consolidating ahead of expected full Křetínský bid in 2026",
      acquisitionYear: 2010,
      acquisitionPrice: 0.165,
      currentValuation: 1.20,
      impliedReturn: "~7.3x in 15 years (~14% CAGR) — solid PL-era return; London Stadium move (2016) drove revenue uplift despite operational frictions",
      ownershipGroup: [
        { name: "David Sullivan", role: "co-chairman / majority", pct: 38.8 },
        { name: "Daniel Křetínský (via 1890s Holdings)", role: "vice-chairman / minority growing", pct: 27.0 },
        { name: "Gold family estate", role: "minority (selling down 2024-26)", pct: 25.1 },
        { name: "Tripp Smith / Pavel Horský / others", role: "minority", pct: 9.1 }
      ],
      institutionalInvestors: "Křetínský brings EPH Group institutional muscle; Tripp Smith (US, ex-GSO Capital) ~8% from 2017; consolidation expected to leave 2-investor majority structure",
      otherBusinessInterests: "Sullivan: Sport Newspapers Ltd, Birmingham City prior owner, UK property; Křetínský: EPH (Central European energy, ~$30B group), Casino (French grocery), Royal Mail (UK), J Sainsbury 4%, Foot Locker stake, AC Sparta Prague, Le Monde 49% media stake"
    },
    brand: {
      socialMedia: { instagram: "~2.5M", twitter: "~1.5M", facebook: "~3M" },
      merchandiseNotes: "Mid-tier PL merch; East London cultural identity ('Irons', claret-and-blue); Bowen jerseys driving recent sales; Conference League win 2023 fueled merchandise cycle",
      internationalFanbase: "Strong UK base (East London, Essex); growing US and Asian followings via PL exposure; Conference League European tour boosted continental visibility",
      notableSponsorships: ["Betway (front of shirt, ~£10M/yr through 2026)", "Umbro (kit ~£10M/yr from 2024)", "Sela (sleeve, Saudi entertainment, replaced Cazoo)", "Scope Markets"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Jarrod Bowen — England forward, captain since Declan Rice's 2023 sale; Lucas Paquetá — Brazilian international; Mohammed Kudus drew major transfer interest summer 2025",
      starContracts: [
        { player: "Jarrod Bowen", position: "FW", aav: 8.0, contractNote: "~£120K/wk; new deal 2024 through 2030; captain; club's all-time PL goalscorer" },
        { player: "Lucas Paquetá", position: "AM", aav: 9.5, contractNote: "~£140K/wk; signed from Lyon 2022 for £51M; FA spot-fixing investigation cleared 2024-25; through 2027" },
        { player: "Mohammed Kudus", position: "AM/FW", aav: 8.0, contractNote: "~£120K/wk; signed from Ajax 2023 for £38M; through 2028 (subject to ongoing transfer interest from top-six)" },
        { player: "Niclas Füllkrug", position: "FW", aav: 6.5, contractNote: "~£100K/wk; signed from Borussia Dortmund 2024 for £27M; through 2028" }
      ]
    },
    analystNotes: "West Ham's $1.2B valuation is structurally constrained by the London Stadium tenure: a 99-year LLDC lease at £2.5M/yr looks like a bargain on paper, but the Olympic Stadium retrofit costs the club ~£15-30M annually in foregone naming rights, non-match-day revenue, and operational control disputes — a 'red flag for potential buyers' per Yahoo Sports analysis. The pending ownership consolidation (Sullivan + Křetínský absorbing Gold family stake) telegraphs a likely 2026+ Křetínský full takeover; his $8B+ EPH energy fortune and trophy-club thesis for AC Sparta Prague suggest spending firepower comparable to Newcastle's PIF era. Trophy room (Conference League 2023, Declan Rice's £105M sale to Arsenal as outsized comp) provides recent validation; risk is relegation single-event sensitivity given 2024-25 league position pressure."
  },

"Crystal Palace": {
    valuationHistory: [
      { year: 2021, value: 0.30, source: "Implied by Textor 40% stake at £87.5M ($110M)" },
      { year: 2022, value: 0.36, source: "Sportico" },
      { year: 2023, value: 0.48, source: "Forbes" },
      { year: 2024, value: 0.73, source: "Forbes (~£580M)" },
      { year: 2025, value: 0.75, source: "Forbes Aug 2025 (~£595M); Textor stake sale to Woody Johnson at ~£420M implied" },
    ],
    revenue: { estimate: 215, year: 2024, source: "Companies House / Deloitte Football Money League", operatingIncome: 18 },
    transactions: [
      { year: 2010, price: 0.045, buyer: "Steve Parish / CPFC 2010 consortium (Parish, Stephen Browett, Martin Long, Jeremy Hosking)", seller: "Administrators (Brendan Guilfoyle)", notes: "Parish-led consortium rescued club from administration; £18M for club + £15M for Selhurst Park freehold; promotion to Premier League followed in 2013" },
      { year: 2015, price: 0.18, buyer: "Josh Harris + David Blitzer (HBSE)", seller: "Existing Parish consortium (minority dilution)", notes: "Harris-Blitzer paid ~£72M for combined 36% stake; same owners now hold 76ers (NBA), Devils (NHL), and Real Salt Lake (MLS) via SEG; significant US institutional capital entry" },
      { year: 2021, price: 0.30, buyer: "John Textor / Eagle Football Holdings", seller: "Existing shareholders (40%)", notes: "Textor paid ~£87.5M for 40% via Eagle Football Holdings (also Lyon, Botafogo, RWD Molenbeek); implied ~£220M valuation" },
      { year: 2025, price: 0.42, buyer: "Woody Johnson (NY Jets owner)", seller: "John Textor / Eagle Football Holdings (45% stake)", notes: "Johnson paid ~£190M for Textor's stake July 2025; resolved UEFA multi-club ownership conflict (Palace had been demoted to Conference League due to Textor's Lyon ownership); implied club EV ~£420M+" }
    ],
    stadium: {
      name: "Selhurst Park",
      yearBuilt: 1924,
      capacity: 25486,
      ownershipModel: "club-owned freehold (acquired 2010 by Parish consortium for £15M); long-pursued redevelopment of Main Stand to expand capacity to 34,000",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal — historical name preserved" },
      nonGameRevenue: "Limited — south London location; minimal non-matchday utilization vs. modern peers",
      newStadiumPlans: "Main Stand redevelopment plans approved by Croydon Council 2018 — would add ~8,000 seats and modern hospitality. Project repeatedly delayed; revived under Textor; Woody Johnson era expected to refocus capital on the build (~£150-200M)"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, Amazon (Boxing Day fixtures); Premier League Productions for international",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; total typically £100-180M/club/season — Palace consistently in mid-£100M range"
    },
    ownership: {
      primaryOwner: "Steve Parish (chairman, ~10%) + Woody Johnson (~45%, post-2025) + Josh Harris/David Blitzer HBSE (~36% combined)",
      ownerNetWorth: "Johnson: ~$5B (Johnson & Johnson family heir); Harris: ~$10B (Apollo co-founder); Blitzer: ~$2B (Blackstone)",
      ownerBackground: "Parish — Selhurst Park freehold investor / consortium leader; Johnson — Jets NFL owner since 2000, J&J heir; Harris/Blitzer — HBSE platform also owns 76ers (NBA), Devils (NHL), Real Salt Lake (MLS), Premiere League stake replaces Textor's exit forced by UEFA multi-club rule",
      acquisitionYear: 2010,
      acquisitionPrice: 0.045,
      currentValuation: 0.75,
      impliedReturn: "Parish consortium ~17x on £33M total investment over 15 years (~21% IRR)",
      ownershipGroup: [
        { name: "Steve Parish", role: "chairman / co-owner", pct: 10 },
        { name: "Woody Johnson", role: "co-owner (replaced Textor July 2025)", pct: 45 },
        { name: "Josh Harris (HBSE)", role: "co-owner", pct: 18 },
        { name: "David Blitzer (HBSE)", role: "co-owner", pct: 18 },
        { name: "Stephen Browett", role: "minority", pct: 3 },
        { name: "Jeremy Hoskins", role: "minority", pct: 3 }
      ],
      institutionalInvestors: "Harris/Blitzer hold via HBSE — institutional family office structure",
      otherBusinessInterests: "Johnson: NY Jets (NFL); Harris: Apollo Global Management, 76ers, Devils, Commanders (NFL); Blitzer: Blackstone Tactical Opportunities, Devils, RSL, Pelicans minority"
    },
    brand: {
      socialMedia: { instagram: "~2.0M", twitter: "~1.7M", facebook: "~3.4M" },
      merchandiseNotes: "South London identity and 'Holmesdale Fanatics' ultras culture drive strong matchday merchandise; recent FA Cup 2024-25 final appearance lifted profile",
      internationalFanbase: "Niche but passionate global following; modest compared to Big Six but punches above its weight in fan engagement metrics",
      notableSponsorships: ["Net88 (front-of-shirt)", "Kalshi (sleeve)", "Macron (kit manufacturer)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Eberechi Eze — sold to Arsenal summer 2025 ~£60M; replacement core: Adam Wharton (England midfielder)",
      starContracts: [
        { player: "Marc Guéhi", position: "CB", aav: 6.0, contractNote: "England international centre-back; £55M+ valuation; contract negotiations ongoing 2025-26" },
        { player: "Jean-Philippe Mateta", position: "ST", aav: 4.5, contractNote: "France international striker; signed extension through 2027" },
        { player: "Adam Wharton", position: "CM", aav: 3.5, contractNote: "Signed from Blackburn 2024; long-term contract; emerging England midfielder" }
      ]
    },
    analystNotes: "Crystal Palace's value trajectory has been driven by sustained Premier League survival, the FA Cup 2024-25 final appearance, and the resolution of the Textor/Lyon UEFA multi-club ownership crisis via Woody Johnson's £190M acquisition of Textor's stake at an implied ~£420M+ EV. Selhurst Park redevelopment remains the largest unrealized value lever — a successful 34,000-capacity expansion would close the matchday-revenue gap with mid-market peers. Risk: Premier League survival is not guaranteed; relegation would compress valuation by 30-50% via parachute-payment mechanics."
  },

  "Everton": {
    valuationHistory: [
      { year: 2019, value: 0.41, source: "Forbes" },
      { year: 2020, value: 0.45, source: "Forbes" },
      { year: 2021, value: 0.48, source: "Forbes" },
      { year: 2022, value: 0.55, source: "Forbes" },
      { year: 2023, value: 0.61, source: "Forbes" },
      { year: 2024, value: 1.05, source: "Forbes / Friedkin Dec 2024 enterprise value implied (~£800M equity + restructured debt approaches £1B EV)" },
    ],
    revenue: { estimate: 234, year: 2024, source: "Companies House / Deloitte Football Money League 2024", operatingIncome: -55 },
    transactions: [
      { year: 1999, price: 0.030, buyer: "Bill Kenwright / True Blue Holdings", seller: "Peter Johnson", notes: "Kenwright theatrical impresario led £20M buyout; Kenwright remained chairman until death July 2023" },
      { year: 2016, price: 0.290, buyer: "Farhad Moshiri (Monaco-based Iranian-British investor)", seller: "Bill Kenwright minority dilution / new shares", notes: "Moshiri acquired 49.9% for £200M, rising to 94% over time; aggressive transfer spending culminated in financial distress and PSR breaches; Bramley-Moore Dock stadium project committed" },
      { year: 2024, price: 0.50, buyer: "The Friedkin Group (Dan Friedkin)", seller: "Farhad Moshiri (~94%)", notes: "Friedkin Group completed acquisition Dec 2024 — equity ~£400M+ plus restructured/assumed debt brings EV closer to £800M-1B; Friedkin had previously walked away in summer 2024 over due diligence; deal followed 777 Partners' failed bid; Friedkin also owns AS Roma" }
    ],
    stadium: {
      name: "Hill Dickinson Stadium (at Bramley-Moore Dock)",
      yearBuilt: 2025,
      capacity: 52888,
      ownershipModel: "club-owned freehold; built on Bramley-Moore Dock waterfront site; Goodison Park (1892-2025) retired and being redeveloped for women's team and community use",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 950,
      namingRightsDeal: { sponsor: "Hill Dickinson", annualValue_M: 13, totalValue_M: 130, expiryYear: 2035, notes: "10-year deal announced May 2025 with international commercial law firm Hill Dickinson; ~£10M/year (~$13M)" },
      nonGameRevenue: "New stadium designed for year-round revenue: concerts, hospitality suites, conferences; waterfront positioning expected to drive significant non-matchday utilization vs. Goodison's near-zero",
      newStadiumPlans: "Stadium opened 2025; commissioning season 2025-26; Goodison Park redevelopment plans for women's team facility and mixed-use community space"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, Amazon (Boxing Day fixtures); Premier League Productions for international",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; Everton consistently in £105-130M range as a frequent bottom-half finisher with high TV pick-up due to historic profile"
    },
    ownership: {
      primaryOwner: "The Friedkin Group (Dan Friedkin)",
      ownerNetWorth: "Dan Friedkin: ~$8B (Forbes); also chairman/CEO Gulf States Toyota distributorship",
      ownerBackground: "Friedkin family controls largest US Toyota distributor (Houston-based); acquired AS Roma 2020; family office invested in cinema, hospitality (Auberge Resorts), private aviation; Dan Friedkin also a Hollywood producer (All the Money in the World, The Square)",
      acquisitionYear: 2024,
      acquisitionPrice: 0.50,
      currentValuation: 1.05,
      impliedReturn: "Pending — too early to assess; Moshiri lost ~£500M+ on his investment over 8 years",
      ownershipGroup: [
        { name: "The Friedkin Group", role: "majority owner", pct: 94 },
        { name: "Other minority shareholders", role: "minority", pct: 6 }
      ],
      institutionalInvestors: "Friedkin Group is Friedkin family office; not institutional capital",
      otherBusinessInterests: "AS Roma (Serie A); Gulf States Toyota; Auberge Resorts; Imperative Entertainment (film); private aviation; Friedkin Properties"
    },
    brand: {
      socialMedia: { instagram: "~3.5M", twitter: "~2.5M", facebook: "~5.0M" },
      merchandiseNotes: "Goodison farewell season 2024-25 drove record merchandise; Hill Dickinson Stadium opening creates new merchandise cycle; Everton 'People's Club' identity strong in Liverpool",
      internationalFanbase: "Solid global English football following; Tim Howard era boosted US presence; underperforms Big Six internationally",
      notableSponsorships: ["Stake.com (front-of-shirt)", "Christopher Ward (sleeve)", "Castore (kit manufacturer)", "Hill Dickinson (stadium naming)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Jordan Pickford — England #1 goalkeeper; signed contract through 2027 at ~£100K/week",
      starContracts: [
        { player: "Jordan Pickford", position: "GK", aav: 6.5, contractNote: "England international; ~£100K/week through 2027" },
        { player: "Iliman Ndiaye", position: "AM", aav: 4.5, contractNote: "Senegal international; signed 2024 from Marseille for ~£15M" },
        { player: "Beto", position: "ST", aav: 3.8, contractNote: "Guinea-Bissau international; £25M from Udinese 2023" }
      ]
    },
    analystNotes: "The Friedkin Group's December 2024 acquisition closed the most distressed major-club takeover saga of the modern Premier League era — Moshiri's ~£500M+ loss on his 8-year stewardship and the new Hill Dickinson Stadium reset Everton's value trajectory from a relegation-risk laggard to a credible top-half platform play. The £950M+ private stadium spend is the single largest infrastructure investment in EPL history; with 52,888 capacity and waterfront non-matchday potential, it doubles non-TV revenue capacity vs. Goodison. Key risk: PSR (profit and sustainability rules) compliance during the post-acquisition transition and on-pitch survival to amortize stadium economics."
  },

  "Fulham": {
    valuationHistory: [
      { year: 2019, value: 0.30, source: "Forbes" },
      { year: 2020, value: 0.34, source: "Forbes" },
      { year: 2021, value: 0.40, source: "Forbes" },
      { year: 2022, value: 0.46, source: "Forbes" },
      { year: 2023, value: 0.55, source: "Forbes" },
      { year: 2024, value: 0.85, source: "Forbes Nov 2025; CNBC Global Soccer 2025 ranked #19 globally" },
    ],
    revenue: { estimate: 229, year: 2024, source: "Deloitte / Companies House — broadcasting $170M, matchday $23M, commercial $36M", operatingIncome: -8 },
    transactions: [
      { year: 1997, price: 0.012, buyer: "Mohamed Al-Fayed", seller: "Bill Muddyman / existing owners", notes: "Harrods owner Al-Fayed bought relegation-threatened Division Three side for £6.25M; funded promotions to Premier League by 2001" },
      { year: 2013, price: 0.30, buyer: "Shahid Khan / Fulham Football Club Limited", seller: "Mohamed Al-Fayed", notes: "Khan paid undisclosed amount widely reported at $200M+; Pakistani-American auto parts billionaire (Flex-N-Gate); also acquired Jacksonville Jaguars (NFL) in 2012 for $770M" }
    ],
    stadium: {
      name: "Craven Cottage",
      yearBuilt: 1896,
      capacity: 29600,
      ownershipModel: "club-owned freehold; iconic Thames-side location in Fulham; new Riverside Stand redevelopment completed 2024-25",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 250,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No stadium naming rights deal — Craven Cottage heritage name preserved (built 1896, oldest Premier League ground)" },
      nonGameRevenue: "Riverside Stand redevelopment added ~4,000 seats, two Michelin-star restaurants, rooftop swimming pool, hotel rooms, spa, corporate hospitality, event space — transforming Craven Cottage into year-round mixed-use asset; Khan invested £500M+ across stadium and club operations",
      newStadiumPlans: "Riverside Stand redevelopment fully opened 2024-25; capacity expanded from ~25,700 to 29,600; further expansion of Hammersmith End under consideration"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, Amazon (Boxing Day fixtures); Premier League Productions for international",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; Fulham 2023-24 broadcasting revenue $170M (~£135M) reflects strong mid-table TV pickup"
    },
    ownership: {
      primaryOwner: "Shahid Khan (sole owner)",
      ownerNetWorth: "Shahid Khan: ~$15B (Forbes); ~$11.9B (Bloomberg Feb 2026)",
      ownerBackground: "Pakistani-American billionaire; founded Flex-N-Gate (auto parts manufacturer) — supplier to all major OEMs; emigrated to US 1967 with $500; bought Jacksonville Jaguars 2012 for $770M (now $5.4B Forbes); also owns AEW (All Elite Wrestling); Kismet superyacht; previously owned Naval Air Station JAX area development",
      acquisitionYear: 2013,
      acquisitionPrice: 0.30,
      currentValuation: 0.85,
      impliedReturn: "~2.8x in 12 years (~9% CAGR); below Big Six trajectory but ahead of Premier League average given stadium investment",
      ownershipGroup: [
        { name: "Shahid Khan", role: "sole owner", pct: 100 }
      ],
      institutionalInvestors: "None — single-family ownership",
      otherBusinessInterests: "Jacksonville Jaguars (NFL); Flex-N-Gate Corporation; AEW (All Elite Wrestling); Kismet yacht (charter/personal)"
    },
    brand: {
      socialMedia: { instagram: "~1.6M", twitter: "~1.0M", facebook: "~2.2M" },
      merchandiseNotes: "Riverside Stand opening drove premium merchandise; cult status under Marco Silva; iconic 'Mitre' kits and Thames-side identity",
      internationalFanbase: "Niche international following; strong US presence via Khan ownership and Mitre brand; modest global reach vs. Big Six",
      notableSponsorships: ["SBOTOP (front-of-shirt)", "Adidas (kit manufacturer)", "TBC (sleeve sponsor 2025-26)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Raúl Jiménez — Mexico international striker; £5.5M from Wolves 2023; signed extension through 2027",
      starContracts: [
        { player: "Raúl Jiménez", position: "ST", aav: 4.5, contractNote: "Mexico international; extension to 2027" },
        { player: "Andreas Pereira", position: "AM", aav: 3.8, contractNote: "Brazil international; signed permanently from Man United 2022" },
        { player: "Antonee Robinson", position: "LB", aav: 3.5, contractNote: "USMNT regular; signed extension 2024" }
      ]
    },
    analystNotes: "Fulham's $850M valuation reflects Khan's $500M+ infrastructure investment in Craven Cottage's Riverside Stand and consistent Premier League survival under Marco Silva — uniquely positioning the club as a hospitality-driven boutique in central London with two Michelin-star restaurants and rooftop hotel programming. The ~$170M broadcasting share and 29,600 capacity create a modest revenue base vs. Big Six peers, but the Thames-side land asset value (in zone 2 London) provides meaningful downside protection. Khan's net worth and sole ownership remove the financing risk that plagues most mid-tier EPL clubs."
  },

  "Wolverhampton Wanderers": {
    valuationHistory: [
      { year: 2019, value: 0.32, source: "Forbes" },
      { year: 2020, value: 0.36, source: "Forbes" },
      { year: 2021, value: 0.42, source: "Forbes" },
      { year: 2022, value: 0.48, source: "Forbes" },
      { year: 2023, value: 0.50, source: "Forbes" },
      { year: 2024, value: 0.60, source: "Forbes / Sportico (~£480M); CNBC Global Soccer 2025" },
    ],
    revenue: { estimate: 224, year: 2024, source: "Companies House — £177.7M for FY ending May 2024", operatingIncome: -18 },
    transactions: [
      { year: 2007, price: 0.020, buyer: "Steve Morgan / Bridgemere Investments", seller: "Sir Jack Hayward", notes: "Morgan, Redrow Homes founder, paid £10M plus committed £30M working capital; Hayward sold for nominal sum after 17 years of stewardship" },
      { year: 2016, price: 0.057, buyer: "Fosun International (Guo Guangchang)", seller: "Steve Morgan", notes: "Chinese conglomerate Fosun paid £45M; Guo Guangchang (Fosun chairman, 'China's Warren Buffett') drove acquisition; Wolves promoted to Premier League 2018" },
      { year: 2024, price: null, buyer: "Fosun (buyback from Peak6)", seller: "Peak6 Investments", notes: "Fosun bought back ~8% stake from Peak6 for ~£38M, implying ~£480M EV; consolidates Fosun control" }
    ],
    stadium: {
      name: "Molineux Stadium",
      yearBuilt: 1889,
      capacity: 31750,
      ownershipModel: "club-owned freehold; one of oldest football grounds in England (1889); home to Wolves continuously since 1889",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights deal — historical 'Molineux' name (after the Molineux family) preserved" },
      nonGameRevenue: "Limited — Wolverhampton location and modest capacity constrain non-matchday utilization; conference and event hire ongoing",
      newStadiumPlans: "Phased stadium expansion plans periodically discussed (Steve Bull stand redevelopment) but capital constrained under recent Fosun strategic review; no committed timeline"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, Amazon (Boxing Day fixtures); Premier League Productions for international",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; Wolves 2024-25 revenue £172M down from £177.7M reflecting lower league finish + one fewer live UK broadcast"
    },
    ownership: {
      primaryOwner: "Fosun International (Guo Guangchang)",
      ownerNetWorth: "Guo Guangchang: ~$5B (Forbes); Fosun International market cap ~$5-10B range (HK-listed, volatile)",
      ownerBackground: "Guo Guangchang founded Fosun 1992 in Shanghai; built diversified conglomerate (Club Med, Cirque du Soleil partial, Thomas Cook Group, BHF Bank, Tom Tailor, hospitals); 'China's Warren Buffett' moniker; Fosun has been gradually divesting non-core assets since 2022 amid Chinese capital outflow restrictions and balance sheet pressure",
      acquisitionYear: 2016,
      acquisitionPrice: 0.057,
      currentValuation: 0.60,
      impliedReturn: "~10x in 9 years on £45M entry (~28% CAGR) — top-tier return reflecting Premier League promotion premium",
      ownershipGroup: [
        { name: "Fosun International", role: "majority owner", pct: 100 },
        { name: "Jorge Mendes / GestiFute", role: "advisor (player recruitment)", pct: 0 }
      ],
      institutionalInvestors: "Peak6 Investments held ~8% stake; sold back to Fosun for ~£38M in 2024",
      otherBusinessInterests: "Fosun: Club Med, Cirque du Soleil, Thomas Cook Group brand, pharmaceuticals (Fosun Pharma), insurance, real estate, mining, fintech"
    },
    brand: {
      socialMedia: { instagram: "~2.0M", twitter: "~2.4M", facebook: "~3.0M" },
      merchandiseNotes: "Iconic gold-and-black Wolverhampton identity; strong heritage from 1950s Stan Cullis dominance; Castore kit deal launched 2022 drove modernized merchandise cycle",
      internationalFanbase: "Strong Portuguese-speaking fanbase via Mendes recruitment pipeline (Neves, Moutinho, Diogo Jota era); modest broader international reach",
      notableSponsorships: ["DEBET (front-of-shirt)", "Castore (kit manufacturer)", "ManBetX historical"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Matheus Cunha — Brazil international; sold to Manchester United summer 2025 ~£62.5M; current core: Jørgen Strand Larsen (Norway striker)",
      starContracts: [
        { player: "Jørgen Strand Larsen", position: "ST", aav: 4.0, contractNote: "Norway international; signed permanently from Celta Vigo 2024 for ~£23M; primary striker post-Cunha" },
        { player: "Rayan Aït-Nouri", position: "LB", aav: 3.5, contractNote: "Algeria international; signed extension; ~£40M+ market value but recurring transfer speculation" },
        { player: "João Gomes", position: "CM", aav: 3.5, contractNote: "Brazil international; £15M from Flamengo 2023; emerging midfield core" }
      ]
    },
    analystNotes: "Wolves' valuation has stabilized around £480M ($600M) reflecting Fosun's strategic decision to maintain control via the 2024 Peak6 buyback amid broader Fosun deleveraging — but capital constraints are visible in repeated star-player departures (Cunha to Man Utd, Neves to Saudi Arabia, Diogo Jota to Liverpool historically). The Mendes/GestiFute Portuguese pipeline that fueled the 2018-22 era has cooled, leaving the club operating closer to the relegation zone in 2024-25. Sale rumors persist; if Fosun divests, this could trade closer to the £600M+ comp set."
  },

  "AFC Bournemouth": {
    valuationHistory: [
      { year: 2019, value: 0.20, source: "Forbes" },
      { year: 2020, value: 0.21, source: "Forbes" },
      { year: 2021, value: 0.18, source: "Forbes (relegation)" },
      { year: 2022, value: 0.15, source: "Implied by Foley acquisition Dec 2022" },
      { year: 2023, value: 0.32, source: "Forbes / Sportico" },
      { year: 2024, value: 0.42, source: "Forbes Aug 2025; CNBC Global Soccer 2025" },
    ],
    revenue: { estimate: 196, year: 2024, source: "Companies House — projected $172M+ in 2023, ~£155M in 2024", operatingIncome: -28 },
    transactions: [
      { year: 2011, price: 0.001, buyer: "Maxim Demin (Russian-British petrochemicals investor)", seller: "Eddie Mitchell consortium", notes: "Demin acquired ~50% then full control by 2015 for nominal amount; financed promotion from League Two to Premier League by 2015 (historic feat for small-budget club)" },
      { year: 2022, price: 0.148, buyer: "Bill Foley / Black Knight Football Club consortium", seller: "Maxim Demin", notes: "Foley-led consortium acquired 100% for $123.7M plus $24.7M contingent on Premier League survival = ~$148M total; Michael B. Jordan minority owner; Foley brings Vegas Golden Knights playbook and Black Knight financial services capital" }
    ],
    stadium: {
      name: "Vitality Stadium (Dean Court)",
      yearBuilt: 1910,
      capacity: 11307,
      ownershipModel: "smallest stadium in Premier League by capacity; club-owned operations; freehold ownership history complex (long lease historically); training ground at Canford Magna",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: "Vitality (Discovery Group)", annualValue_M: 2, totalValue_M: null, expiryYear: 2026, notes: "Vitality (UK health insurance) has held naming rights since 2015; multiple renewals; modest deal value reflecting capacity" },
      nonGameRevenue: "Highly limited — smallest Premier League ground constrains hospitality and non-matchday revenue",
      newStadiumPlans: "Foley has publicly committed to expansion / new stadium evaluation since 2023; site studies for ~25,000-capacity replacement at Canford Magna training ground or expanded Dean Court ongoing; no committed timeline as of 2025"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports, TNT Sports, Amazon (Boxing Day fixtures); Premier League Productions for international",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; Bournemouth as a small-market club typically near league-floor pickup but benefits substantially from equal share component"
    },
    ownership: {
      primaryOwner: "Bill Foley / Black Knight Football Club",
      ownerNetWorth: "Bill Foley: ~$1.5B (Forbes); founded Fidelity National Financial; chairman emeritus Black Knight (sold to ICE 2023 for $13B)",
      ownerBackground: "Foley founded Fidelity National Financial (largest US title insurance company) and Black Knight (mortgage tech, sold to ICE 2023 $13B); founded Vegas Golden Knights NHL expansion (2017, won Cup 2023); West Point graduate; aggressive M&A approach to franchise sports building 'multi-club ownership' platform; also owns Lorient (Ligue 1, France); minority stake in Hibernian (Scotland); Auckland FC (Australia A-League founder)",
      acquisitionYear: 2022,
      acquisitionPrice: 0.148,
      currentValuation: 0.42,
      impliedReturn: "~2.8x in 3 years (~41% CAGR) — strong return driven by Premier League survival + Foley platform value premium + general EPL value inflation",
      ownershipGroup: [
        { name: "Bill Foley (Black Knight FC)", role: "majority owner / chairman", pct: 87 },
        { name: "Michael B. Jordan", role: "minority owner / brand ambassador", pct: 5 },
        { name: "Nullah Sarker", role: "minority", pct: 3 },
        { name: "Other minority investors", role: "minority", pct: 5 }
      ],
      institutionalInvestors: "Black Knight Football Club is family office structure; not institutional capital",
      otherBusinessInterests: "Vegas Golden Knights (NHL); FC Lorient (Ligue 1, acquired 2024); Auckland FC (A-League, founded 2024); Hibernian FC minority; Foley Family Wines; Whitefish Mountain Resort"
    },
    brand: {
      socialMedia: { instagram: "~0.9M", twitter: "~0.7M", facebook: "~1.2M" },
      merchandiseNotes: "Smaller-market merchandise base; Foley era brought modernized brand strategy and aggressive global ambition; Michael B. Jordan ambassador role drives US visibility",
      internationalFanbase: "Modest; Foley's multi-club platform driving cross-pollination strategy with Lorient/Auckland fanbases",
      notableSponsorships: ["bj88 (front-of-shirt)", "Umbro (kit manufacturer)", "Vitality (stadium naming)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Antoine Semenyo — Ghana international winger; signed extension through 2030; transfer interest at £60M+",
      starContracts: [
        { player: "Antoine Semenyo", position: "RW", aav: 4.5, contractNote: "Ghana international; new long-term deal 2025; £60M+ transfer interest from Liverpool/Spurs" },
        { player: "Evanilson", position: "ST", aav: 4.0, contractNote: "Brazil international; £40M from Porto 2024 (club record)" },
        { player: "Justin Kluivert", position: "AM", aav: 3.5, contractNote: "Netherlands international; signed from Roma 2024" }
      ]
    },
    analystNotes: "Bournemouth's valuation has nearly tripled from Foley's $148M acquisition to ~$420M in three years — driven by sustained Premier League survival, aggressive but disciplined transfer policy (Evanilson, Kluivert, Semenyo), and Foley's platform-premium across his multi-club football portfolio (Lorient, Auckland, Hibs minority). The 11,307-capacity Vitality Stadium remains the structural ceiling on revenue; a successful 25,000-seat expansion would unlock the next valuation step. Risk: Foley platform thesis depends on multi-club synergies that have yet to be empirically validated at scale."
  },

  "Brentford": {
    valuationHistory: [
      { year: 2021, value: 0.150, source: "estimate post-EPL promotion" },
      { year: 2022, value: 0.230, source: "Football Benchmark" },
      { year: 2023, value: 0.300, source: "Football Benchmark" },
      { year: 2024, value: 0.400, source: "Rothschild-led process / Bloomberg reporting" },
      { year: 2025, value: 0.500, source: "Onefootball / market reports during sale exploration" },
    ],
    revenue: { estimate: 220, year: 2024, source: "Brentford FC 2024/25 financial results", operatingIncome: 35 },
    transactions: [
      { year: 2012, price: null, buyer: "Matthew Benham (100% via Bees United transfer)", seller: "Bees United Supporters Trust", notes: "Benham took 100% ownership in 2012 after the Bees United fan trust unanimously voted to transfer control; Benham had been bankrolling the club via loans since 2007; rare modern example of transition from fan-owned to single-billionaire ownership" },
      { year: 2025, price: null, buyer: "Best Intentions Analytics (Benham holdco)", seller: "Matthew Benham (personal)", notes: "Benham transferred his shares to a newly formed holding company Best Intentions Analytics in 2024/25; Rothschild engaged in late 2023 to explore minority/majority sale at £400-500M valuation" }
    ],
    stadium: {
      name: "Gtech Community Stadium",
      yearBuilt: 2020,
      capacity: 17250,
      ownershipModel: "team-owned (Brentford FC); developed alongside Brentford London Borough; replaced Griffin Park (1904-2020)",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 71,
      namingRightsDeal: { sponsor: "Grey Technology (Gtech)", annualValue_M: null, totalValue_M: null, expiryYear: 2032, notes: "10-year naming partnership signed July 2022 with British vacuum/tech manufacturer; financial terms undisclosed but estimated low single-digit £M/year" },
      nonGameRevenue: "Concerts and events programmed via in-house events team; venue used for London Irish rugby tenancy (departed 2023); shared parking constrained by Kew Bridge residential area",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports + TNT Sports UK; NBC/Peacock US; international rights via Premier League collective sale across 200+ territories",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; relegated clubs receive parachute payments (~£44M Y1, declining over 3yrs)"
    },
    ownership: {
      primaryOwner: "Matthew Benham (100% via Best Intentions Analytics)",
      ownerNetWorth: "~£500M (Smartodds founder; Matchbook Betting Exchange)",
      ownerBackground: "Physics-trained former trader at Bank of America; founded Smartodds (sports betting analytics) and Matchbook (peer-to-peer betting exchange); used quantitative analytics for player recruitment building Brentford from League One in 2012 to mid-table EPL by 2024; also owned Danish club FC Midtjylland",
      acquisitionYear: 2012,
      acquisitionPrice: null,
      currentValuation: 0.500,
      impliedReturn: "From League One purchase in 2012 to ~£500M EPL club in 2025 — among the steepest value-creation arcs in modern English football, driven by promotion from League One→Championship→EPL plus stadium build",
      ownershipGroup: [
        { name: "Matthew Benham (Best Intentions Analytics)", role: "100% owner / chairman", pct: 100 }
      ],
      institutionalInvestors: "None as of 2025; Rothschild engaged late 2023 to source minority or majority investors at £400-500M valuation",
      otherBusinessInterests: "Smartodds (sports modeling firm); Matchbook (betting exchange); previously FC Midtjylland (Denmark) ownership"
    },
    brand: {
      socialMedia: { instagram: "~1.0M", twitter: "~900K", facebook: "~500K" },
      merchandiseNotes: "West London community brand; punching above weight commercially given 17K-seat stadium; 'Bees' identity strong with younger London demographics",
      internationalFanbase: "Limited international footprint; analytics/'moneyball' angle drives some US-based fan interest",
      notableSponsorships: ["Hollywoodbets (front-of-shirt 2023+)", "Gtech (stadium naming)", "Beavertown (back-of-shirt)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Bryan Mbeumo — Cameroon international forward; key player in Brentford's recruitment-driven model; sold to Manchester United summer 2025 for ~£65M",
      starContracts: [
        { player: "Bryan Mbeumo", position: "FW", aav: 5.5, contractNote: "~£90K/wk wages; ~£65M sale to Man Utd summer 2025" },
        { player: "Yoane Wissa", position: "FW", aav: 4.5, contractNote: "Congolese forward; high goal output post-Toney" },
        { player: "Ivan Toney", position: "FW", aav: null, contractNote: "Sold to Al-Ahli (Saudi Pro League) August 2024 for ~£40M after 8-month FA betting ban" }
      ]
    },
    analystNotes: "Brentford is the textbook 'analytics-built EPL club' — Benham's quantitative recruitment turned a League One side into a top-half EPL fixture in a decade, with a privately financed 17K stadium (low debt, 100% control) underpinning ~£500M valuation potential. The active sale process at £400-500M reflects scarcity premium for control of an EPL club; principal risk is small-stadium revenue ceiling vs. larger London rivals, mitigated by player-trading model that converted Toney→£40M and Mbeumo→£65M into reinvested capital."
  },

  "Nottingham Forest": {
    valuationHistory: [
      { year: 2020, value: 0.080, source: "estimate (Championship era)" },
      { year: 2022, value: 0.250, source: "estimate post-EPL promotion" },
      { year: 2023, value: 0.450, source: "Football Benchmark" },
      { year: 2024, value: 0.600, source: "Football Benchmark / Sportico" },
      { year: 2025, value: 0.900, source: "post-Champions League qualification market estimates" },
    ],
    revenue: { estimate: 250, year: 2024, source: "Deloitte Football Money League / Forbes", operatingIncome: -50 },
    transactions: [
      { year: 2017, price: 0.050, buyer: "Evangelos Marinakis (NF Football Investments)", seller: "Fawaz Al-Hasawi", notes: "Greek shipping magnate Marinakis took majority via NF Football Investments at ~£50M total enterprise value (including debt assumption); club had been languishing in Championship and burning cash under Al-Hasawi" },
    ],
    stadium: {
      name: "City Ground",
      yearBuilt: 1898,
      capacity: 30404,
      ownershipModel: "team operates under long-term lease from Nottingham City Council (council owns freehold); long-running negotiations over freehold acquisition",
      teamOwnsLand: false,
      publicSubsidy: null,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: 0, totalValue_M: 0, expiryYear: null, notes: "No naming rights — heritage stance preserves City Ground identity (one of oldest grounds in football, used since 1898)" },
      nonGameRevenue: "Limited non-matchday revenue given aging facility and lease structure; Marinakis pushing for stadium freehold or new stadium development",
      newStadiumPlans: "£200M+ redevelopment proposed to expand capacity from ~30K to ~52K via new Peter Taylor Stand; planning application in detailed stage 2024-25; alternative new-build site explored if council freehold dispute unresolved"
    },
    media: {
      localTVDeal: "Premier League collective deal — UK domestic 2025-28: ~£6.7B/4yr (~£1.67B/yr); facility fee based on UK TV appearances",
      streamingNotes: "Sky Sports + TNT Sports UK; international via Premier League collective; Champions League appearances (2025-26) add UEFA distribution",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; relegated clubs receive parachute payments (~£44M Y1, declining over 3yrs)"
    },
    ownership: {
      primaryOwner: "Evangelos Marinakis (NF Football Investments)",
      ownerNetWorth: "~$1.0B (Capital Maritime & Trading shipping; Olympiacos owner)",
      ownerBackground: "Greek shipping magnate; chairman of Capital Maritime & Trading Corp; owns Olympiacos (Greek Super League) since 2010 and Rio Ave (Portugal); Forest the third club in his football portfolio; aggressive transfer-market spending led to 2024 PSR breach and 4-point deduction",
      acquisitionYear: 2017,
      acquisitionPrice: 0.050,
      currentValuation: 0.900,
      impliedReturn: "~18x in 8 years — among the highest valuation appreciations in modern EPL ownership; driven by EPL promotion 2022 + Champions League qualification 2025",
      ownershipGroup: [
        { name: "Evangelos Marinakis", role: "majority / chairman", pct: null },
        { name: "Sokratis Kominakis", role: "minority / director", pct: null }
      ],
      institutionalInvestors: "None disclosed; £80M debt facility raised 2025 ('pricey debt' per market reports) to bridge transfer activity around PSR limits",
      otherBusinessInterests: "Capital Maritime & Trading Corp (shipping); Olympiacos FC; Rio Ave FC; Greek media interests (Alter Ego Media)"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~1.0M", facebook: "~750K" },
      merchandiseNotes: "Heritage brand revived by 2 European Cup history (1979, 1980 under Brian Clough); merchandise traction up sharply since 2022 promotion; Champions League 2025-26 return amplifies global awareness",
      internationalFanbase: "Resurgent international following due to Champions League return; strong heritage in older football fan demographics globally",
      notableSponsorships: ["Kaiyun Sports (front-of-shirt 2024+)", "Ideagen (back-of-shirt)", "Macron (kit supplier)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Murillo — Brazilian centre-back; signed from Corinthians 2023 for ~£10M; reportedly subject of 2025 Bayern Munich interest at £60M+ valuation",
      starContracts: [
        { player: "Anthony Elanga", position: "RW/FW", aav: null, contractNote: "Sold to Newcastle summer 2025 for £52M + £3M add-ons (£55M total); had joined from Man Utd 2023 on 5-year deal" },
        { player: "Morgan Gibbs-White", position: "AM", aav: 6.5, contractNote: "Signed from Wolves 2022 for ~£42M; long-running club captain; subject of Spurs interest summer 2025" },
        { player: "Nikola Milenković", position: "CB", aav: 5.0, contractNote: "Signed from Fiorentina 2024 for ~£12M; key 2024-25 defensive performer" }
      ]
    },
    analystNotes: "Forest are the EPL's most aggressive case study in PE-style ownership leverage — Marinakis bought at £50M in 2017 and the club is now trading at ~£900M post-Champions League qualification, an 18x return in 8 years. The PSR points deduction (March 2024) and £80M debt facility highlight the operational risk: aggressive transfer spending fuels on-field returns but compresses regulatory headroom. Stadium freehold dispute with Nottingham City Council is the single biggest structural overhang on long-term valuation."
  },

  "Ipswich Town": {
    valuationHistory: [
      { year: 2021, value: 0.040, source: "PSPRS sale price (League One era)" },
      { year: 2023, value: 0.080, source: "estimate (Championship era)" },
      { year: 2024, value: 0.250, source: "estimate post-EPL promotion" },
      { year: 2025, value: 0.350, source: "Athletic / Matt Slater Portman Holdings restructuring valuation" },
    ],
    revenue: { estimate: 175, year: 2024, source: "Deloitte / club accounts (first EPL season uplift)", operatingIncome: -25 },
    transactions: [
      { year: 2021, price: 0.040, buyer: "Gamechanger 20 Ltd (ORG / Three Lions / Brett Johnson / Berke Bakay group)", seller: "Marcus Evans", notes: "US-based consortium led by Arizona PSPRS pension fund (via ORG Portfolio Management) and Three Lions co-owner Brett Johnson bought from Marcus Evans for ~£40M including debt; club was then in League One; widely cited as 'pension fund as football owner' first" },
      { year: 2025, price: null, buyer: "Portman Holdings LLC (consolidated holdco)", seller: "Gamechanger 20 (restructured)", notes: "December 2025 restructuring brought existing investors under new Portman Holdings entity; £350M valuation reported by The Athletic represents ~9x on £40M 2021 entry; Championship-record valuation if accurate" }
    ],
    stadium: {
      name: "Portman Road",
      yearBuilt: 1884,
      capacity: 30311,
      ownershipModel: "team-owned freehold (Ipswich Town FC); one of England's oldest continuously used football grounds",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: null,
      namingRightsDeal: { sponsor: null, annualValue_M: 0, totalValue_M: 0, expiryYear: null, notes: "No stadium naming rights — heritage Portman Road identity preserved since 1884" },
      nonGameRevenue: "Limited matchday hospitality given aging stand layouts; club acquired adjacent land Oct 2024 for expansion footprint",
      newStadiumPlans: "October 2024: agreement in principle to acquire land behind Portman Road for stadium expansion to ~40K capacity (from current ~30K); two-tier stand redevelopment planned for medium-to-long term"
    },
    media: {
      localTVDeal: "Premier League collective deal 2024-25 only; relegation back to Championship returns club to EFL deal (~£15M central distribution + parachute payments)",
      streamingNotes: "Sky Sports + TNT Sports during EPL season; Sky Sports / iFollow during Championship",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; relegated clubs receive parachute payments (~£44M Y1, declining over 3yrs) — Ipswich relegated 2025 after one EPL season"
    },
    ownership: {
      primaryOwner: "Portman Holdings LLC (US consortium consolidated December 2025)",
      ownerNetWorth: "Aggregate ownership group ~$500M+ across investors",
      ownerBackground: "Original 2021 buyer Gamechanger 20 fronted by Brett Johnson (US sports investor; co-owner Three Lions / Phoenix Rising USL); Ed Schwartz (ORG Portfolio Management co-founder) led pension-fund participation via Arizona Public Safety Personnel Retirement System; Berke Bakay (former Kona Grill CEO) the day-to-day chairman",
      acquisitionYear: 2021,
      acquisitionPrice: 0.040,
      currentValuation: 0.350,
      impliedReturn: "~9x in 4 years if £350M valuation holds — Championship record valuation",
      ownershipGroup: [
        { name: "Portman Holdings LLC (Three Lions + Clara Vista)", role: "majority", pct: null },
        { name: "ORG Portfolio Management (Ed Schwartz)", role: "minority (post-restructure)", pct: null },
        { name: "Berke Bakay", role: "chairman", pct: null }
      ],
      institutionalInvestors: "Originally Arizona PSPRS pension fund via ORG; restructured 2025 with ORG retaining minority",
      otherBusinessInterests: "ORG manages real estate / alternatives funds; Three Lions co-investments include US soccer (Phoenix Rising)"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~500K", facebook: "~350K" },
      merchandiseNotes: "Strong East Anglia regional fanbase; first EPL season since 2002 generated significant 2024-25 merchandise spike; brand cools post-relegation",
      internationalFanbase: "Limited; some US recognition through Bobby Robson / Sir Alf Ramsey heritage and US ownership group's marketing",
      notableSponsorships: ["TGGB (front-of-shirt)", "Umbro (kit supplier)", "Ed Sheeran (back-of-shirt during EPL season — local-celebrity tie-in)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Liam Delap — sold to Chelsea June 2025 for £30M (six-year deal); had been club's top scorer with 12 goals in first EPL season",
      starContracts: [
        { player: "Liam Delap", position: "FW", aav: null, contractNote: "Sold to Chelsea June 2025 for £30M; had been signed from Manchester City in July 2024 for ~£20M with sell-on" },
        { player: "Omari Hutchinson", position: "AM/RW", aav: 4.0, contractNote: "Signed permanently from Chelsea 2024 for £20M after promotion-season loan" },
        { player: "Jack Clarke", position: "LW", aav: 3.5, contractNote: "Signed from Sunderland 2024 for £15M+" }
      ]
    },
    analystNotes: "Ipswich is the rare modern case of a US-pension-fund football play, with a £40M 2021 entry implying a ~9x mark in four years off back-to-back promotions and the 2024 Portman Holdings restructuring at £350M. Immediate relegation back to Championship in 2025 caps the upside cycle, but parachute payments (~£44M Y1) plus a freehold-owned stadium and player trading (Delap → £30M Chelsea) preserve the financial structure. The club is a textbook illustration of how EPL promotion-relegation creates option-like valuation step-changes that domestic-league franchises in the US never see."
  },

  "Leicester City": {
    valuationHistory: [
      { year: 2020, value: 0.500, source: "Forbes (post-2016 title era)" },
      { year: 2021, value: 0.580, source: "Forbes" },
      { year: 2022, value: 0.600, source: "Forbes" },
      { year: 2023, value: 0.620, source: "Forbes May 2023" },
      { year: 2024, value: 0.450, source: "estimate post-relegation" },
      { year: 2025, value: 0.400, source: "estimate post-second-relegation + PSR breach" },
    ],
    revenue: { estimate: 135, year: 2024, source: "Leicester City FC FY24 financial accounts (post-relegation drop from £177M to £105M)", operatingIncome: -90 },
    transactions: [
      { year: 2010, price: 0.039, buyer: "Vichai Srivaddhanaprabha (King Power International)", seller: "Milan Mandarić", notes: "Thai duty-free billionaire Vichai purchased for ~£39M; transformed club from Championship into 2016 Premier League champions in 6 years; legendary 'leveraged-stadium-naming + signing premium' model" },
    ],
    stadium: {
      name: "King Power Stadium",
      yearBuilt: 2002,
      capacity: 32259,
      ownershipModel: "team-owned freehold (Leicester City FC, controlled by King Power); replaced Filbert Street (1891-2002)",
      teamOwnsLand: true,
      publicSubsidy: null,
      privateFinancing: 37,
      namingRightsDeal: { sponsor: "King Power International (owner-affiliated)", annualValue_M: 5, totalValue_M: null, expiryYear: null, notes: "Named for owner's flagship business since 2011 (was Walkers Stadium 2002-2011); related-party deal with intercompany pricing implications under PSR" },
      nonGameRevenue: "Limited matchday hospitality given current 32K capacity; expansion rationale partly hospitality/premium-product driven",
      newStadiumPlans: "East Stand expansion to 40K capacity; planning approved with Section 106 agreement secured December 2023 — club has until end of 2028 to commence; PSR/financial situation has delayed start; hotel/retail/residential mixed-use district planned alongside"
    },
    media: {
      localTVDeal: "EFL Championship deal 2024+ (~£8M central distribution) post-relegation; Sky Sports primary; one of largest parachute-payment recipients",
      streamingNotes: "Sky Sports / TNT Sports during EPL seasons; Sky Sports / iFollow during Championship",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; relegated clubs receive parachute payments (~£44M Y1, declining over 3yrs) — Leicester relegated 2023, promoted 2024, relegated 2025"
    },
    ownership: {
      primaryOwner: "Aiyawatt 'Top' Srivaddhanaprabha (King Power International) — 55% direct stake",
      ownerNetWorth: "~$3.5B (King Power family fortune; Forbes 2024)",
      ownerBackground: "Son of Vichai Srivaddhanaprabha (founder of King Power duty-free, killed in October 2018 helicopter crash outside the stadium); CEO of King Power post-2018; family's total investment in the club exceeds £420M including debt-to-equity conversions; iconic 2016 EPL title win remains highest valuation event in club history",
      acquisitionYear: 2010,
      acquisitionPrice: 0.039,
      currentValuation: 0.400,
      impliedReturn: "~10x at peak (£620M 2023) before falling back to ~£400M post-second-relegation; Vichai-era return of ~16x peaked with 2016 title and Champions League quarterfinal 2017",
      ownershipGroup: [
        { name: "Aiyawatt Srivaddhanaprabha", role: "chairman / 55%", pct: 55 },
        { name: "Other Srivaddhanaprabha family members", role: "minority", pct: null }
      ],
      institutionalInvestors: "None — entirely family-controlled via King Power International",
      otherBusinessInterests: "King Power Group (Thai duty-free retail dominance — Suvarnabhumi Airport etc.); Belgian club OH Leuven (sister club); King Power Mahanakhon (Bangkok skyscraper)"
    },
    brand: {
      socialMedia: { instagram: "~5.5M", twitter: "~3.5M", facebook: "~7M" },
      merchandiseNotes: "Global brand built on miracle 2016 EPL title; strong Asian (especially Thai) retail tie-in via King Power channels; merchandise revenue under pressure during Championship seasons",
      internationalFanbase: "Strong Thai/Asian following via King Power retail; meaningful US/global fanbase from 2016 title narrative; one of EPL's most internationally-recognized non-Big Six brands",
      notableSponsorships: ["BC.GAME (front-of-shirt 2024+)", "Adidas (kit supplier — long-term)", "King Power (stadium naming, related-party)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Wilfred Ndidi — Nigerian midfielder; long-tenured club captain figure; major asset-sale candidate post-relegation",
      starContracts: [
        { player: "Mads Hermansen", position: "GK", aav: 3.0, contractNote: "Signed from Brøndby 2023 for £5M; key 2023-24 promotion player" },
        { player: "Wilfred Ndidi", position: "DM", aav: 4.5, contractNote: "Long-term club fixture; contract running" },
        { player: "Stephy Mavididi", position: "LW", aav: 3.5, contractNote: "Signed from Montpellier 2023 for £8M" }
      ]
    },
    analystNotes: "Leicester is the cautionary tale of EPL ownership economics: a 16x return at the 2016 title peak has reverted to ~10x at acquisition cost following two relegations and a PSR breach (six-point deduction recommended February 2026). The Srivaddhanaprabha family's £420M+ all-in investment plus debt-to-equity conversions illustrates the carrying cost of trying to maintain a Champions League-era squad through Championship cycles. Stadium freehold + 40K expansion approval represents the cleanest structural upside, but execution depends on stabilizing PSR position and returning to EPL with a sustainable cost base."
  },

  "Southampton": {
    valuationHistory: [
      { year: 2020, value: 0.300, source: "Forbes (Liebherr era)" },
      { year: 2022, value: 0.300, source: "Sport Republic acquisition reference (£100M for 80%)" },
      { year: 2023, value: 0.380, source: "Football Benchmark (post-relegation)" },
      { year: 2024, value: 0.460, source: "Football Benchmark (post-promotion)" },
      { year: 2025, value: 0.450, source: "market estimate post-second-relegation" },
    ],
    revenue: { estimate: 175, year: 2024, source: "Deloitte Football Money League / club accounts (EPL season)", operatingIncome: -35 },
    transactions: [
      { year: 2017, price: 0.210, buyer: "Gao Jisheng (Lander Sports Development)", seller: "Liebherr family (Katharina Liebherr)", notes: "Chinese businessman Gao acquired 80% from Liebherr family for ~£210M; troubled tenure marked by FFP issues and limited investment" },
      { year: 2022, price: 0.100, buyer: "Sport Republic (Dragan Šolak / Henrik Kraft / Rasmus Ankersen)", seller: "Gao Jisheng", notes: "Sport Republic invested ~£100M to take Gao's 80%; Katharina Liebherr retained 20%; deal valued club at ~£125M enterprise; multi-club model intent stated, though only Goztepe (Turkey) sister club acquired since" },
    ],
    stadium: {
      name: "St Mary's Stadium",
      yearBuilt: 2001,
      capacity: 32384,
      ownershipModel: "team-owned freehold (Southampton FC); largest football stadium in South East England; opened August 2001",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 32,
      namingRightsDeal: { sponsor: null, annualValue_M: 0, totalValue_M: 0, expiryYear: null, notes: "No naming rights deal — St Mary's name preserved (referencing the church on the original site of the football club)" },
      nonGameRevenue: "Conferencing/events; concerts (Take That, Foo Fighters in recent years); aging facility limits premium hospitality",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Premier League collective 2024-25 then EFL Championship 2025-26+ post-relegation",
      streamingNotes: "Sky Sports + TNT Sports during EPL season; Sky Sports / iFollow during Championship",
      nationalShareNote: "EPL distributes via equal share + facility fee + merit payment; relegated clubs receive parachute payments (~£44M Y1, declining over 3yrs) — Southampton relegated 2023, promoted 2024, relegated 2025 (earliest relegation in EPL history)"
    },
    ownership: {
      primaryOwner: "Sport Republic (80%) led by Dragan Šolak; Katharina Liebherr (20%)",
      ownerNetWorth: "Šolak ~€1.7B (December 2024 estimate; 2nd-richest in Serbia)",
      ownerBackground: "Šolak is Serbian-born media mogul and founder/majority owner of United Group (Telco/cable/media conglomerate operating across Southeast Europe); Sport Republic founded December 2021 by ex-Brentford director of football Rasmus Ankersen and former PE partner Henrik Kraft; multi-club model intent (only Goztepe Turkey added so far)",
      acquisitionYear: 2022,
      acquisitionPrice: 0.100,
      currentValuation: 0.450,
      impliedReturn: "~3.6x in 3 years (gross enterprise basis, including Liebherr 20%); much of the gain reflects EPL TV-deal uplift rather than fundamental operational improvement",
      ownershipGroup: [
        { name: "Sport Republic (Šolak / Ankersen / Kraft)", role: "majority — 80%", pct: 80 },
        { name: "Katharina Liebherr", role: "minority — 20% (retained from family ownership era)", pct: 20 }
      ],
      institutionalInvestors: "Sport Republic structured as PE-style sports holding company; specific LP base not disclosed",
      otherBusinessInterests: "Šolak: United Group (€2B+ revenue Southeast European telco/media); Sport Republic: Goztepe (Turkey) sister club"
    },
    brand: {
      socialMedia: { instagram: "~1.8M", twitter: "~1.6M", facebook: "~3M" },
      merchandiseNotes: "South Coast (UK) regional brand; declining merchandise traction post-Le Tissier-era; academy reputation (Bale, Walcott, Oxlade-Chamberlain, Shaw, Bednarek) supports recruitment but doesn't drive consumer revenue",
      internationalFanbase: "Modest international following; East African fan pockets via historical kit-supplier marketing; Korean exposure via Heung-min Son's pre-Spurs years",
      notableSponsorships: ["Rollbit (front-of-shirt 2024+)", "Puma (kit supplier)", "Hacken AI (sleeve)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Tyler Dibling — sold to Everton summer 2025 for £42M (record sale of a Saints academy product)",
      starContracts: [
        { player: "Tyler Dibling", position: "RW", aav: null, contractNote: "Sold to Everton summer 2025 for £42M; had been homegrown academy graduate, became one of EPL's most-watched teen prospects in 2024-25" },
        { player: "Mateus Fernandes", position: "AM", aav: 3.5, contractNote: "Signed from Sporting Lisbon 2024 for £15M" },
        { player: "Aaron Ramsdale", position: "GK", aav: 5.5, contractNote: "Signed from Arsenal 2024 for £25M; loaned out 2025 post-relegation" }
      ]
    },
    analystNotes: "Southampton is the structural opposite of Brentford or Forest — a freehold-owned 32K stadium and academy infrastructure suggest mid-table EPL fit, but Sport Republic's first three years have produced a relegation-promotion-relegation cycle with the earliest-ever EPL relegation (April 2025). Tyler Dibling £42M sale is the single largest academy validation since the Bale/Walcott/Oxlade era and points to player-trading as the dominant value-creation lever. Path to ~£600M+ valuation requires stabilizing EPL status with Sport Republic capital discipline, which the first cycle has not demonstrated."
  },

};