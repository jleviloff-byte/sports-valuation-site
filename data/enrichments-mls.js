// MLS team enrichments — all 30 teams
// Sources: Forbes, Sportico, CNBC, ESPN, MLS, Goal.com, SBJ
// National TV: Apple TV+ MLS Season Pass — 10yr $2.5B deal 2023-2032 (~$8M/team/year national share)
export const mlsEnrichments = {
"Atlanta United FC": {
    valuationHistory: [
      { year: 2019, value: 0.500, source: "Forbes (early MLS estimates)" },
      { year: 2021, value: 0.640, source: "Sportico" },
      { year: 2022, value: 0.850, source: "Sportico" },
      { year: 2023, value: 0.945, source: "Forbes" },
      { year: 2024, value: 1.00,  source: "Forbes" },
      { year: 2025, value: 1.14,  source: "Sportico" },
    ],
    revenue: { estimate: 105, year: 2023, source: "Forbes / SBJ", operatingIncome: 12 },
    transactions: [
      { year: 2014, price: 0.070, buyer: "AMB Group / Arthur Blank", seller: "MLS (expansion)", notes: "Atlanta awarded MLS expansion franchise April 2014; expansion fee ~$70M; began play 2017" },
    ],
    stadium: {
      name: "Mercedes-Benz Stadium",
      yearBuilt: 2017,
      capacity: 42500,
      ownershipModel: "owned by Georgia World Congress Center Authority (state agency); operated by AMB Sports & Entertainment under long-term lease; Falcons (NFL) primary tenant, Atlanta United co-tenant; reduced configuration for soccer (~42.5K, expandable to ~71K)",
      teamOwnsLand: false,
      publicSubsidy: 700,
      privateFinancing: 800,
      namingRightsDeal: { sponsor: "Mercedes-Benz", annualValue_M: 12, totalValue_M: 324, expiryYear: 2042, notes: "27-year deal signed 2015; deal split between NFL Falcons and Atlanta United usage" },
      nonGameRevenue: "AMB controls all venue economics; concerts, college football championships (Peach Bowl, CFP), Super Bowl LIII (2019); record MLS attendance (over 70K several matches)",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Bally Sports South / Gray Television regional broadcasts; transitioning post-Diamond Sports collapse",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Arthur M. Blank (AMB Group)",
      ownerNetWorth: "~$10B (Bloomberg 2024)",
      ownerBackground: "Co-founder of Home Depot; also owns Atlanta Falcons (NFL, purchased 2002 for $545M); diversified Atlanta-based holdings include Mountain Sky Guest Ranch, PGA TOUR Superstore",
      acquisitionYear: 2014,
      acquisitionPrice: 0.070,
      currentValuation: 1.14,
      impliedReturn: "~16x in 11 years (~28% CAGR)",
      ownershipGroup: [
        { name: "Arthur Blank / AMB Group", role: "majority owner", pct: 100 }
      ],
      institutionalInvestors: "100% privately held by AMB Group",
      otherBusinessInterests: "Atlanta Falcons (NFL), PGA TOUR Superstore, Mountain Sky Guest Ranch, Arthur M. Blank Family Foundation"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~700K", facebook: "~1.5M" },
      merchandiseNotes: "Top-tier MLS merchandise franchise; Atlanta market embraces brand identity built around 17s/Five Stripes; record MLS jersey sales early years",
      internationalFanbase: "Strong Latin American following; Argentine connection through Almada/Pity Martinez, Paraguayan via Almiron",
      notableSponsorships: ["Mercedes-Benz (stadium naming)", "American Family Insurance (jersey)", "Adidas (kit)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Emmanuel Latte Lath — DP striker signed Feb 2025 from Middlesbrough for ~$22M club-record incoming transfer",
      starContracts: [
        { player: "Thiago Almada", position: "AM", aav: 1.5, contractNote: "Young DP from 2022; transferred to Botafogo July 2024 for MLS-record $21M (up to $30M) — opened DP slot" },
        { player: "Miguel Almirón", position: "AM", aav: 4.0, contractNote: "Returned to Atlanta from Newcastle as DP for 2025; club legend reacquired" },
        { player: "Brad Guzan", position: "GK", aav: 1.5, contractNote: "Veteran USMNT keeper, franchise face since 2017" }
      ]
    },
    analystNotes: "Atlanta United's $1.14B Sportico 2025 valuation reflects the Mercedes-Benz Stadium revenue platform plus Arthur Blank's NFL-grade operations infrastructure — even though the team has stagnated post-2018 MLS Cup. The MLS-record $21M Almada outgoing transfer (and previous $27M Almirón sale to Newcastle) demonstrates a player-trading IP advantage few MLS clubs match. Primary risk is the soccer-football revenue split: AMB captures stadium economics across both tenants, but on-field decline has shrunk attendance from peak 50K+ averages."
  },

  "Charlotte FC": {
    valuationHistory: [
      { year: 2022, value: 0.500, source: "Forbes (expansion-fee implied)" },
      { year: 2023, value: 0.625, source: "Forbes" },
      { year: 2024, value: 0.700, source: "Forbes" },
      { year: 2025, value: 0.760, source: "Sportico" },
    ],
    revenue: { estimate: 75, year: 2023, source: "Forbes", operatingIncome: -5 },
    transactions: [
      { year: 2019, price: 0.325, buyer: "David Tepper / Tepper Sports & Entertainment", seller: "MLS (expansion)", notes: "Charlotte awarded MLS expansion franchise December 2019; $325M expansion fee — record at the time; began play 2022" },
    ],
    stadium: {
      name: "Bank of America Stadium",
      yearBuilt: 1996,
      capacity: 38000,
      ownershipModel: "owned by Tepper Sports & Entertainment (privately by David Tepper); shared with Carolina Panthers (NFL); reduced lower-bowl-only configuration for MLS matches (~38K capped); $800M renovation 2024-27 with $650M public subsidy",
      teamOwnsLand: true,
      publicSubsidy: 650,
      privateFinancing: 688,
      namingRightsDeal: { sponsor: "Bank of America", annualValue_M: 7, totalValue_M: 140, expiryYear: 2034, notes: "Original 20-year deal signed 2004 (~$140M); inherited by Charlotte FC as co-tenant" },
      nonGameRevenue: "TS&E controls all venue economics; concerts, ACC Championship football, college games; Charlotte FC benefits from existing NFL infrastructure but does not own venue revenue streams",
      newStadiumPlans: "$800M renovation underway through 2027; no plans for soccer-specific stadium given dual-use synergies with Panthers"
    },
    media: {
      localTVDeal: "WCNC / Telemundo Charlotte regional broadcasts",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "David Tepper (Tepper Sports & Entertainment)",
      ownerNetWorth: "~$20.6B (Forbes 2024)",
      ownerBackground: "Founder of Appaloosa Management hedge fund; bought Carolina Panthers from Jerry Richardson in 2018 for $2.275B (NFL record at time); ranks among wealthiest US sports owners",
      acquisitionYear: 2019,
      acquisitionPrice: 0.325,
      currentValuation: 0.760,
      impliedReturn: "~2.3x in 6 years (~15% CAGR)",
      ownershipGroup: [
        { name: "David Tepper / Tepper Sports & Entertainment", role: "majority owner", pct: 100 }
      ],
      institutionalInvestors: "100% privately held",
      otherBusinessInterests: "Carolina Panthers (NFL), Appaloosa Management, GG&C Bar Company"
    },
    brand: {
      socialMedia: { instagram: "~250K", twitter: "~120K", facebook: "~280K" },
      merchandiseNotes: "Strong launch merchandise sales 2022 expansion; Crown City branding builds local identity; mid-tier MLS merchandise performer",
      internationalFanbase: "Limited international footprint; some German/European fan crossover via Karol Świderski era",
      notableSponsorships: ["Bank of America (stadium naming)", "Ally Financial", "Coca-Cola"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Pep Biel — DP signed January 2024 as creative midfielder; key playmaker post-Świderski",
      starContracts: [
        { player: "Karol Świderski", position: "ST", aav: 2.4, contractNote: "First-ever DP signed January 2022; club all-time leading scorer (32G/15A); transferred to Panathinaikos January 2025" },
        { player: "Patrick Agyemang", position: "ST", aav: 0.085, contractNote: "USMNT call-up 2024-25; sold to Derby County January 2025 for club-record sale ~$10M+" },
        { player: "Pep Biel", position: "AM", aav: 2.5, contractNote: "DP from Olympiacos January 2024; chief creator after Świderski departure" }
      ]
    },
    analystNotes: "Charlotte FC paid the then-record $325M MLS expansion fee in 2019 banking on Tepper Sports & Entertainment leveraging Bank of America Stadium economics across NFL and MLS — a dual-use model the league has historically discouraged but Tepper's NFL playbook makes work. The 2.3x valuation gain since entry is below the MLS expansion-fee inflation curve (San Diego paid $500M in 2025), suggesting Charlotte's brand has not broken out of mid-tier yet. Player-trading is becoming a real revenue lever (Świderski + Agyemang outbound transfers) but on-field volatility under multiple coaches has capped further upside."
  },

  "Chicago Fire FC": {
    valuationHistory: [
      { year: 2019, value: 0.400, source: "Mansueto acquisition implied" },
      { year: 2021, value: 0.410, source: "Sportico" },
      { year: 2022, value: 0.515, source: "Sportico" },
      { year: 2023, value: 0.595, source: "Forbes" },
      { year: 2024, value: 0.640, source: "Forbes" },
      { year: 2025, value: 0.700, source: "Sportico" },
    ],
    revenue: { estimate: 60, year: 2023, source: "Forbes", operatingIncome: -8 },
    transactions: [
      { year: 2007, price: 0.035, buyer: "Andrew Hauptman / Andell Holdings", seller: "AEG", notes: "Hauptman bought controlling interest from Anschutz Entertainment Group in 2007; era marked by underperformance and exurban Bridgeview stadium isolation" },
      { year: 2018, price: 0.196, buyer: "Joe Mansueto (49% stake)", seller: "Andrew Hauptman", notes: "Mansueto bought 49% minority stake in July 2018 at ~$400M implied valuation" },
      { year: 2019, price: 0.204, buyer: "Joe Mansueto (remaining 51%)", seller: "Andrew Hauptman", notes: "September 2019 Mansueto acquired remaining 51% from Hauptman for $204M; full takeover at $400M total enterprise value; team returned to Soldier Field 2020" },
    ],
    stadium: {
      name: "Soldier Field",
      yearBuilt: 1924,
      capacity: 61500,
      ownershipModel: "owned by Chicago Park District; managed by SMG/ASM Global; primary tenant Chicago Bears (NFL); Chicago Fire returned 2020 from suburban SeatGeek Stadium (Bridgeview); reduced capacity for MLS",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 0,
      namingRightsDeal: { sponsor: null, annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "No naming rights — Soldier Field is a National Historic Landmark" },
      nonGameRevenue: "Fire are tenants only; receive no stadium concessions/parking revenue beyond gameday rentals; structural revenue ceiling vs. owners of soccer-specific venues",
      newStadiumPlans: "Mansueto unveiled June 2025 plans for $650-750M, 22,000-seat soccer-specific stadium at 'The 78' development site in South Loop in partnership with Related Midwest; targeted opening late 2020s"
    },
    media: {
      localTVDeal: "WGN-TV / NBC Sports Chicago regional broadcasts; transitioning post-Diamond Sports collapse",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Joe Mansueto",
      ownerNetWorth: "~$6.7B (Forbes 2024)",
      ownerBackground: "Founder and chairman of Morningstar Inc. (NASDAQ: MORN), the financial-research firm; Chicago native; took team back to downtown Chicago at Soldier Field 2020 in stark reversal of Hauptman-era exurban strategy",
      acquisitionYear: 2019,
      acquisitionPrice: 0.400,
      currentValuation: 0.700,
      impliedReturn: "~1.75x in 6 years (~10% CAGR)",
      ownershipGroup: [
        { name: "Joe Mansueto", role: "100% owner / chairman", pct: 100 }
      ],
      institutionalInvestors: "100% privately held",
      otherBusinessInterests: "Morningstar Inc. (controlling shareholder), various Chicago real estate and venture investments"
    },
    brand: {
      socialMedia: { instagram: "~150K", twitter: "~250K", facebook: "~360K" },
      merchandiseNotes: "Mid-tier MLS merchandise; brand recovery underway after 2010s suburban-stadium-era erosion; Cuypers as marquee striker rebuilding identity",
      internationalFanbase: "Strong Polish-American base in Chicago; Mexican-American support given metro demographics",
      notableSponsorships: ["Motorola (jersey)", "AbbVie", "Gallagher"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Hugo Cuypers — DP striker signed Feb 2024 from KAA Gent for club-record $12M+$2M; team top scorer 2024 with 10 goals; contract through 2026 + 2027 option",
      starContracts: [
        { player: "Hugo Cuypers", position: "ST", aav: 3.5, contractNote: "Designated Player Feb 2024; club-record $12M+$2M transfer fee; 2025 guaranteed $3.53M" },
        { player: "Jonathan Bamba", position: "LW", aav: 4.0, contractNote: "DP signed July 2024 from Celta Vigo on free transfer" },
        { player: "Brian Gutiérrez", position: "AM", aav: 0.6, contractNote: "Homegrown midfielder; USMNT call-up; building block" }
      ]
    },
    analystNotes: "Chicago Fire's value proposition hinges entirely on Mansueto's planned $650-750M private soccer-specific stadium at 'The 78' South Loop site — Soldier Field tenancy structurally caps non-gameday economics and explains the lagging valuation curve (1.75x vs. 2-3x for MLS peers). The 6th-largest US metro should support a $1B+ franchise but the brand is still recovering from the suburban exile decade. The new stadium plus Cuypers/Bamba DP investment together represent the most significant transformation since the Mansueto takeover and the catalyst for valuation re-rating."
  },

  "FC Cincinnati": {
    valuationHistory: [
      { year: 2019, value: 0.300, source: "Sportico (expansion fee implied)" },
      { year: 2021, value: 0.535, source: "Sportico" },
      { year: 2022, value: 0.625, source: "Sportico" },
      { year: 2023, value: 0.690, source: "Forbes" },
      { year: 2024, value: 0.790, source: "Forbes" },
      { year: 2025, value: 0.840, source: "Sportico" },
    ],
    revenue: { estimate: 95, year: 2023, source: "Forbes / SBJ", operatingIncome: 8 },
    transactions: [
      { year: 2019, price: 0.150, buyer: "Carl H. Lindner III + ownership group", seller: "MLS (expansion)", notes: "Cincinnati awarded MLS expansion franchise May 2018; $150M expansion fee; began MLS play 2019 after USL years; Lindner family + ownership group includes Meg Whitman, Dr. Griff Harsh, Scott Farmer, George Joseph" },
    ],
    stadium: {
      name: "TQL Stadium",
      yearBuilt: 2021,
      capacity: 26000,
      ownershipModel: "stadium and land owned by Port of Greater Cincinnati Development Authority (public agency); leased to FC Cincinnati on long-term basis; stadium debt-financed via public bonds with team servicing payments; West End neighborhood",
      teamOwnsLand: false,
      publicSubsidy: 35,
      privateFinancing: 215,
      namingRightsDeal: { sponsor: "Total Quality Logistics (TQL)", annualValue_M: 9, totalValue_M: 100, expiryYear: 2031, notes: "10-year naming rights deal signed 2021 worth ~$100M total at ~$9-10M/yr; one of the larger MLS naming rights packages" },
      nonGameRevenue: "FC Cincinnati operates the venue; concerts (Imagine Dragons, etc.), Bengals preseason events, NCAA games; closest-seat-to-pitch in MLS (15ft) builds premium ticketing experience",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "WSTR/CW Cincinnati regional broadcasts",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Carl H. Lindner III",
      ownerNetWorth: "~$2B (est., Forbes-tier)",
      ownerBackground: "Co-CEO American Financial Group (AFG, NYSE: AFG); inherited stake in Cincinnati financial services empire from father Carl Lindner Jr.; founded FC Cincinnati 2015 as USL club, ascended to MLS by 2019",
      acquisitionYear: 2015,
      acquisitionPrice: 0.150,
      currentValuation: 0.840,
      impliedReturn: "~5.6x in 10 years (~19% CAGR)",
      ownershipGroup: [
        { name: "Carl H. Lindner III", role: "controlling owner / CEO", pct: null },
        { name: "Meg Whitman", role: "managing owner (former HP/eBay CEO, US Ambassador)", pct: null },
        { name: "Dr. Griff Harsh", role: "managing owner (Whitman's husband)", pct: null },
        { name: "Scott Farmer", role: "managing owner (Cintas Corp)", pct: null },
        { name: "George Joseph", role: "managing owner", pct: null }
      ],
      institutionalInvestors: "Diverse investor group; broad Cincinnati business community participation",
      otherBusinessInterests: "American Financial Group (insurance/financial services); various Cincinnati civic and real estate holdings"
    },
    brand: {
      socialMedia: { instagram: "~250K", twitter: "~225K", facebook: "~210K" },
      merchandiseNotes: "Strong supporters culture inherited from USL era; Cincinnati Soccer scene grown rapidly post-MLS entry; Lucho Acosta-era merchandise built brand depth",
      internationalFanbase: "Limited international reach; growing German-American community engagement",
      notableSponsorships: ["TQL (stadium naming)", "Mercy Health", "FOX19", "Kroger"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Evander — DP creative midfielder acquired from Portland Timbers Feb 2025 for ~$12M; replaces departed Lucho Acosta as primary playmaker",
      starContracts: [
        { player: "Evander", position: "AM", aav: 5.0, contractNote: "DP from Portland Timbers Feb 2025; ~$12M acquisition cost" },
        { player: "Luciano Acosta", position: "AM", aav: 3.0, contractNote: "2023 MLS MVP; departed Feb 2025 to FC Dallas for $5M+$1M; back-to-back 19-assist seasons (2022, 2024)" },
        { player: "Kévin Denkey", position: "ST", aav: 4.5, contractNote: "DP striker from Cercle Brugge Dec 2024; reported MLS-record incoming transfer ~$16.2M" }
      ]
    },
    analystNotes: "FC Cincinnati's $790M Forbes 2024 / $840M Sportico 2025 valuation reflects one of MLS's most successful expansion stories — Lindner family ownership built a soccer-specific stadium with privately-led $250M financing, executed a USL-to-MLS-Supporters-Shield arc in under a decade, and returned 5.6x on the original $150M expansion fee. The Acosta-Denkey-Evander DP rotation evidences a sophisticated player-trading model. Primary risk: stadium debt service is meaningful drag on operating income, and West End community-relations issues could complicate any future expansion."
  },

  "Columbus Crew SC": {
    valuationHistory: [
      { year: 2019, value: 0.290, source: "Sportico" },
      { year: 2021, value: 0.485, source: "Sportico" },
      { year: 2022, value: 0.560, source: "Sportico" },
      { year: 2023, value: 0.700, source: "Forbes" },
      { year: 2024, value: 0.800, source: "Forbes" },
      { year: 2025, value: 0.900, source: "Edwards 10% stake transaction" },
    ],
    revenue: { estimate: 85, year: 2023, source: "Forbes", operatingIncome: 5 },
    transactions: [
      { year: 2018, price: 0.150, buyer: "Haslam Sports Group + Edwards family", seller: "Anthony Precourt", notes: "December 2018 'Save the Crew' deal: Precourt had attempted to relocate club to Austin but instead Haslam Sports Group (Jimmy and Dee Haslam, also Cleveland Browns) and Cincinnati-based Pete Edwards Jr. family combined to keep franchise in Columbus; Precourt received Austin FC expansion rights" },
      { year: 2025, price: 0.090, buyer: "Edwards family (additional 10% stake)", seller: "Haslam Sports Group", notes: "January 2025: Edwards bought additional 10% from Haslam at $900M implied valuation; Edwards now owns ~30%, Haslam ~70%" },
    ],
    stadium: {
      name: "Lower.com Field",
      yearBuilt: 2021,
      capacity: 20011,
      ownershipModel: "owned by Crew Stadium Co (team-controlled entity); Confluence Village mixed-use district adjacent; replaced Historic Crew Stadium (1999, MLS's first soccer-specific stadium)",
      teamOwnsLand: true,
      publicSubsidy: 50,
      privateFinancing: 264,
      namingRightsDeal: { sponsor: "Lower.com (mortgage tech)", annualValue_M: null, totalValue_M: null, expiryYear: 2031, notes: "10-year naming rights signed 2021; financial terms undisclosed but estimated $50-80M total" },
      nonGameRevenue: "Crew control all venue economics; near-total sellouts since 2021 opening; concerts (Phil Collins, etc.), USMNT/USWNT matches, Confluence Village development unlocks ancillary value",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Bally Sports Ohio successor (Sinclair regional sports network)",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Haslam Sports Group (Jimmy and Dee Haslam) — 70% / Edwards family — 30%",
      ownerNetWorth: "Haslam family ~$6-8B est.; Edwards family also Cincinnati financial services",
      ownerBackground: "Jimmy and Dee Haslam control Pilot Flying J truck stop chain (sold majority to Berkshire Hathaway) and Cleveland Browns NFL (purchased 2012); Pete Edwards Jr. is Cincinnati orthopedic surgeon and longtime FC Cincinnati medical director, Columbus Crew family co-investor in 2018 'Save the Crew' deal",
      acquisitionYear: 2018,
      acquisitionPrice: 0.150,
      currentValuation: 0.900,
      impliedReturn: "~6x in 7 years (~30% CAGR)",
      ownershipGroup: [
        { name: "Haslam Sports Group", role: "majority owner", pct: 70 },
        { name: "Edwards family", role: "minority partner", pct: 30 }
      ],
      institutionalInvestors: "Privately held by Haslam and Edwards family offices",
      otherBusinessInterests: "Haslam: Cleveland Browns (NFL), Pilot Flying J (truck stops, sold 80% to Berkshire Hathaway), Milwaukee Bucks (minority); Edwards: medical/financial services"
    },
    brand: {
      socialMedia: { instagram: "~285K", twitter: "~225K", facebook: "~315K" },
      merchandiseNotes: "Strong yellow-and-black brand identity; nation-wide MLS Cup champions appeal; 2008/2020/2023 MLS Cup wins build merchandise depth",
      internationalFanbase: "Modest international footprint; strong USMNT supporter base hub (Columbus = 'Soccer Capital of America')",
      notableSponsorships: ["Lower.com (stadium naming)", "OhioHealth (jersey)", "Acura"]
    },
    onField: {
      championshipsLast10Years: 2,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Diego Rossi — DP forward; led 2024 with high goal/assist totals after Cucho Hernández departure",
      starContracts: [
        { player: "Cucho Hernández", position: "ST", aav: 2.0, contractNote: "Back-to-back MLS Best XI (2023-2024); 19G/14A in 2024; transferred to Real Betis (LaLiga) Feb 2025 for ~$16M; one of the highest-profile MLS-to-Europe sales" },
        { player: "Diego Rossi", position: "FW", aav: 3.0, contractNote: "Designated Player; key Cucho replacement starting 2025" },
        { player: "Darlington Nagbe", position: "DM", aav: 1.6, contractNote: "Veteran central midfielder; 2020/2023 MLS Cup champion; club captain figure" }
      ]
    },
    analystNotes: "Columbus Crew's 6x valuation gain since the 2018 'Save the Crew' rescue ($150M → $900M Edwards stake transaction) makes it MLS's most successful turnaround case study — Haslam Sports Group leveraged Cleveland Browns operational infrastructure plus a privately funded $314M downtown stadium to convert a relocation-threatened franchise into a back-to-back-to-back MLS Cup champion (2008/2020/2023). Cucho Hernández's $16M outbound sale to Real Betis demonstrates a player-trading flywheel few MLS clubs match. Primary risk is the small Columbus market relative to sustainable revenue scaling beyond ~$90M."
  },

  "D.C. United": {
    valuationHistory: [
      { year: 2019, value: 0.500, source: "Sportico" },
      { year: 2021, value: 0.580, source: "Sportico" },
      { year: 2022, value: 0.800, source: "Sportico (Erick Thohir minority stake transaction)" },
      { year: 2023, value: 0.730, source: "Forbes" },
      { year: 2024, value: 0.770, source: "Forbes" },
      { year: 2025, value: 0.785, source: "Sportico" },
    ],
    revenue: { estimate: 65, year: 2023, source: "Forbes", operatingIncome: -10 },
    transactions: [
      { year: 2012, price: 0.050, buyer: "Erick Thohir + Jason Levien + Will Chang group", seller: "Will Chang / Victor MacFarlane", notes: "Thohir-led group bought controlling stake in 2012; Indonesian businessman Erick Thohir served as majority owner before selling stake" },
      { year: 2018, price: 0.253, buyer: "Jason Levien / Stephen Kaplan (consolidation)", seller: "Erick Thohir", notes: "Levien acquired Thohir's majority stake for $253M in 2018, consolidated control with longtime partner Steve Kaplan; ~60% combined" },
    ],
    stadium: {
      name: "Audi Field",
      yearBuilt: 2018,
      capacity: 20000,
      ownershipModel: "owned by D.C. United Holdings LLC; constructed via complex land-swap with DC government; located at Buzzard Point, Southwest Waterfront DC",
      teamOwnsLand: true,
      publicSubsidy: 183,
      privateFinancing: 217,
      namingRightsDeal: { sponsor: "Audi (Volkswagen Group)", annualValue_M: 5, totalValue_M: 50, expiryYear: 2030, notes: "12-year deal signed 2018; ~$50M total value over the term" },
      nonGameRevenue: "DC United operates Audi Field; concerts, Wizards (NWSL former) and DC Defenders (XFL) tenant arrangements; team explores expansion + new roof for 2025+",
      newStadiumPlans: "Feb 2025: announced Audi Field expansion plans + roof addition; capacity expansion under study"
    },
    media: {
      localTVDeal: "Monumental Sports Network (MSN) regional broadcasts; Monumental owned by Ted Leonsis but DC United is independent",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Jason Levien & Stephen Kaplan (D.C. United Holdings LLC, ~60% combined)",
      ownerNetWorth: "Levien — sports executive (former NBA exec, agent); Kaplan — Oaktree Capital co-founder, also Swansea City AFC owner",
      ownerBackground: "Levien is operating partner / CEO; Kaplan is co-chairman, longtime financial backer; together they consolidated control 2018 from prior multi-partner ownership; expanded group includes Yo Gotti, Mark Ingram II, Earvin 'Magic' Johnson minority stakes",
      acquisitionYear: 2018,
      acquisitionPrice: 0.253,
      currentValuation: 0.785,
      impliedReturn: "~3x in 7 years (~17% CAGR)",
      ownershipGroup: [
        { name: "Jason Levien", role: "CEO / co-chairman / operating partner", pct: null },
        { name: "Stephen Kaplan", role: "co-chairman", pct: null },
        { name: "Yo Gotti (Mario Mims)", role: "minority investor", pct: null },
        { name: "Mark Ingram II", role: "minority investor", pct: null }
      ],
      institutionalInvestors: "Various sports/entertainment minority partners; ~40% spread across LP-style passive investors",
      otherBusinessInterests: "Levien: previously Memphis Grizzlies CEO; Kaplan: Oaktree Capital Management, Swansea City AFC (EFL Championship)"
    },
    brand: {
      socialMedia: { instagram: "~210K", twitter: "~325K", facebook: "~290K" },
      merchandiseNotes: "Historic MLS franchise (4 MLS Cups 1996-2004); brand depth from early-MLS dynasty era; Wayne Rooney short stint built international resonance; Christian Benteke 2024 Golden Boot recent merchandise driver",
      internationalFanbase: "Some Latin American/Caribbean DC-area following; Indonesian community link via Thohir era",
      notableSponsorships: ["Audi (stadium naming)", "Capital One", "Leidos (jersey)"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 0,
      currentFranchisePlayer: "Christian Benteke — DP striker, 2024 MLS Golden Boot; declined 2026 option, free agent in 2025-26 cycle",
      starContracts: [
        { player: "Christian Benteke", position: "ST", aav: 4.5, contractNote: "DP from Crystal Palace Aug 2022; 2024 MLS Golden Boot; 47G/10A in 93 league matches; option declined for 2026" },
        { player: "Mateusz Klich", position: "AM", aav: 1.8, contractNote: "DP from Leeds United Jan 2023; veteran Polish playmaker" },
      ]
    },
    analystNotes: "D.C. United's $785M valuation reflects the legacy 4-time-MLS-Cup brand plus the Audi Field privately-controlled stadium revenue base — but the 7-year playoff drought (last appearance 2019) caps merchandise and gate growth. The 2018 Levien-Kaplan consolidation at $253M represents a ~3x return vintage, materially below MLS peer 5-7x performance. The Audi Field expansion plans + Buzzard Point district development represent the primary upside path; on-field rebuild dependency makes near-term valuation re-rating unlikely without DP investment beyond Benteke."
  },

  "Inter Miami CF": {
    valuationHistory: [
      { year: 2020, value: 0.305, source: "Sportico (expansion-fee implied)" },
      { year: 2021, value: 0.340, source: "Sportico" },
      { year: 2022, value: 0.585, source: "Sportico" },
      { year: 2023, value: 1.030, source: "Forbes (post-Messi)" },
      { year: 2024, value: 1.200, source: "Forbes" },
      { year: 2025, value: 1.350, source: "Forbes (most valuable in MLS)" },
    ],
    revenue: { estimate: 200, year: 2023, source: "Forbes / SBJ (post-Messi jump)", operatingIncome: 9 },
    transactions: [
      { year: 2018, price: 0.025, buyer: "David Beckham + Jorge Mas + Jose Mas (Mas Group)", seller: "MLS (expansion)", notes: "MLS awarded Miami expansion January 2018; Beckham exercised purchase option from his 2007 LA Galaxy contract (~$25M); brought in Jorge Mas (Mas Group) and brother Jose Mas as managing owners; began play 2020" },
    ],
    stadium: {
      name: "Chase Stadium (formerly DRV PNK Stadium)",
      yearBuilt: 2020,
      capacity: 21500,
      ownershipModel: "owned by Inter Miami CF / Mas Group; built on former Lockhart Stadium site in Fort Lauderdale; team operates and controls all economics; transitional venue until Miami Freedom Park (Nu Stadium) opens 2026",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 70,
      namingRightsDeal: { sponsor: "JPMorgan Chase", annualValue_M: 3, totalValue_M: 18, expiryYear: 2026, notes: "Transitional naming rights through Chase Stadium; replaces DRV PNK; ends when Nu Stadium opens 2026" },
      nonGameRevenue: "Team controls all venue economics; Messi-era sellouts ~21K every match; concerts limited by capacity",
      newStadiumPlans: "Miami Freedom Park ('Nu Stadium' per March 2026 Bloomberg announcement) — 25,000-seat privately financed $1B+ stadium near Miami International Airport; J.P. Morgan provided $650M financing package including $450M senior construction loan; opens 2026; Brazilian fintech Nu (Nubank) naming rights"
    },
    media: {
      localTVDeal: "Apple TV+ MLS Season Pass exclusive (no traditional local TV deal)",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032); Inter Miami matches drove ~50% of MLS Season Pass subscriber growth post-Messi",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games; Inter Miami matches command premium Apple TV traffic"
    },
    ownership: {
      primaryOwner: "Mas brothers (Jorge Mas / Jose Mas) — managing owners; David Beckham — co-owner",
      ownerNetWorth: "Jorge Mas ~$2.5B (Mas Group), David Beckham ~$500M (post-football brand portfolio)",
      ownerBackground: "Jorge Mas is Chairman/CEO of MasTec (NYSE: MTZ), publicly traded infrastructure construction company; brother Jose Mas is President/CEO of MasTec; Beckham exercised $25M LA Galaxy contract option for MLS expansion club; Marcelo Claure (former Sprint CEO, SoftBank exec) was original investor but exited 2022 over disputes",
      acquisitionYear: 2018,
      acquisitionPrice: 0.025,
      currentValuation: 1.350,
      impliedReturn: "~54x in 7 years (~76% CAGR) — among highest in pro sports history",
      ownershipGroup: [
        { name: "Jorge Mas", role: "managing owner / chairman (Mas Group)", pct: null },
        { name: "Jose Mas", role: "managing owner (Mas Group)", pct: null },
        { name: "David Beckham", role: "co-owner / global ambassador", pct: null }
      ],
      institutionalInvestors: "Marcelo Claure exited 2022; Ares Management has explored minority investment; ownership remains primarily Mas/Beckham private",
      otherBusinessInterests: "Jorge Mas: MasTec (publicly traded), Cuban-American Foundation; Beckham: Studio 99 production, DB Ventures, Salford City FC (EFL League Two minority), Inter Miami brand licensing"
    },
    brand: {
      socialMedia: { instagram: "~16M (post-Messi)", twitter: "~3M", facebook: "~7M" },
      merchandiseNotes: "MLS's #1 merchandise franchise post-Messi; jersey sales rank in global Top 5 of any soccer club; Adidas reported Inter Miami became #1 jersey worldwide briefly post-Messi signing; Latin America merchandise distribution dwarfs all other MLS clubs",
      internationalFanbase: "Massive global fanbase (Argentina, broader Latin America); Messi/Suárez/Busquets/Alba 'Barcelona Lite' assemblage drives European interest; Beckham brand opens Asian/UK markets",
      notableSponsorships: ["Royal Caribbean (jersey)", "JPMorgan Chase (stadium)", "Adidas (kit)", "Apple (Messi co-branding)", "Heineken"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Lionel Messi — DP since July 2023; signed 3-year contract extension Oct 2025 through 2028; total package ~$150M including club equity at retirement",
      starContracts: [
        { player: "Lionel Messi", position: "RW/CAM", aav: 20.5, contractNote: "Originally July 2023 free transfer; extended Oct 2025 through 2028 — covers Nu Stadium opening; $20.4M guaranteed compensation 2024; Apple/Adidas equity components; equity in Inter Miami at retirement" },
        { player: "Sergio Busquets", position: "DM", aav: 8.8, contractNote: "DP signed 2023 alongside Messi; contract through 2025; veteran Spanish midfielder" },
        { player: "Luis Suárez", position: "ST", aav: 1.5, contractNote: "Signed Dec 2023 below DP threshold via TAM; rejoined Messi from Gremio; contract structured to preserve DP slot" },
        { player: "Jordi Alba", position: "LB", aav: 6.0, contractNote: "Signed July 2023 alongside Messi; not a DP slot — paid via TAM; contract through 2025" },
      ]
    },
    analystNotes: "Inter Miami's 54x return on the original $25M expansion fee — driven by Messi's July 2023 arrival — is the most valuable single transaction in MLS history and arguably the most successful brand transformation in pro sports this decade. The $1.35B Forbes valuation is built on (a) the Messi-era global brand, (b) the privately financed $1B+ Nu Stadium opening 2026, and (c) the Apple TV partnership halo. The Messi contract extension through 2028 + stadium opening creates a clear 3-year window of valuation upside; primary risk is post-Messi cliff and whether Mas/Beckham can institutionalize the brand beyond the GOAT himself."
  },

  "CF Montréal": {
    valuationHistory: [
      { year: 2019, value: 0.260, source: "Sportico" },
      { year: 2021, value: 0.290, source: "Sportico" },
      { year: 2022, value: 0.330, source: "Sportico" },
      { year: 2023, value: 0.370, source: "Forbes" },
      { year: 2024, value: 0.375, source: "Forbes (29th of 30 in MLS)" },
      { year: 2025, value: 0.430, source: "Forbes / Sportico (last in MLS)" },
    ],
    revenue: { estimate: 45, year: 2023, source: "Forbes", operatingIncome: -12 },
    transactions: [
      { year: 2010, price: 0.040, buyer: "Joey Saputo / Saputo Inc. family", seller: "MLS (expansion)", notes: "Montreal awarded MLS expansion May 2010; Saputo family paid ~$40M expansion fee; began MLS play 2012 after USL years; rebranded from 'Montreal Impact' to 'CF Montréal' in 2021" },
    ],
    stadium: {
      name: "Stade Saputo",
      yearBuilt: 2008,
      capacity: 19619,
      ownershipModel: "owned by Saputo family / club; built on Olympic Park grounds (Régie des installations olympiques) with land lease; expanded 2012 from 13K to 19.6K seats with $23M Quebec government funding; second-largest soccer-specific stadium in Canada (after BMO Field)",
      teamOwnsLand: false,
      publicSubsidy: 17,
      privateFinancing: 23,
      namingRightsDeal: { sponsor: "Saputo Inc. (dairy)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Saputo family ownership extends to naming rights; family-business naming rather than third-party sponsor; financial terms internal" },
      nonGameRevenue: "Modest concert and event activity; aging infrastructure caps premium offerings; team plays select cold-weather/marquee matches at 60K+ Olympic Stadium nearby",
      newStadiumPlans: "Sept 2025 reports: club seeking municipal/provincial support for upgrades; not relocating but pressing for public investment in either Saputo expansion or new venue"
    },
    media: {
      localTVDeal: "TVA Sports (French-language Quebec) and CTV/TSN secondary; Apple TV+ MLS Season Pass for full schedule",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Joey Saputo (Saputo family)",
      ownerNetWorth: "Saputo family ~$5B (Saputo Inc., publicly traded TSX:SAP — global dairy producer)",
      ownerBackground: "Joey Saputo is chairman of the team and longtime president of Saputo Inc. dairy empire; family-owned franchise since 2002 USL Impact roots; led MLS entry 2010-12; also owns Bologna FC (Italy) since 2014",
      acquisitionYear: 2010,
      acquisitionPrice: 0.040,
      currentValuation: 0.430,
      impliedReturn: "~10.75x in 15 years (~17% CAGR)",
      ownershipGroup: [
        { name: "Joey Saputo / Saputo family", role: "100% owner / chairman", pct: 100 }
      ],
      institutionalInvestors: "100% privately held by Saputo family",
      otherBusinessInterests: "Saputo Inc. (TSX-listed dairy multinational); Bologna FC 1909 (Serie A Italian football); various Quebec real estate"
    },
    brand: {
      socialMedia: { instagram: "~150K", twitter: "~210K", facebook: "~440K" },
      merchandiseNotes: "Niche but loyal Quebec fanbase; bilingual merchandise distribution; CF Montréal rebrand 2021 (from Impact) was controversial with some legacy fans",
      internationalFanbase: "Significant Italian-Canadian heritage following (Saputo links to Bologna FC); modest French/European visibility",
      notableSponsorships: ["BMO (jersey)", "Saputo Inc.", "Adidas (kit)", "Air Transat"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Prince Owusu — German-Ghanaian DP striker; club's primary attacking threat in 2024-25",
      starContracts: [
        { player: "Prince Owusu", position: "ST", aav: 1.6, contractNote: "Designated Player from Toronto FC trade; club top scorer 2024" },
        { player: "Josef Martínez", position: "ST", aav: 2.5, contractNote: "Former Atlanta DP; signed 2024 to replace Kei Kamara; veteran Venezuelan striker" },
      ]
    },
    analystNotes: "CF Montréal sits at the bottom of MLS valuations ($430M, last/29th of 30) — below the current $500M MLS expansion buy-in (San Diego 2025), reflecting structural disadvantages: aging Stade Saputo infrastructure, lack of Quebec/federal government appetite for new stadium financing, French-Canadian-language MLS content economics, and absent meaningful DP investment. The 10.75x return on the original $40M Saputo expansion fee is healthy in absolute terms but trails MLS-average growth meaningfully. Primary risk is no Saputo successor catalyst — without a new venue, expanded DP roster, or sale to outside group, valuation faces structural ceiling."
  },

"Nashville SC": {
    valuationHistory: [
      { year: 2020, value: 0.275, source: "Forbes (expansion entry)" },
      { year: 2021, value: 0.34,  source: "Forbes" },
      { year: 2022, value: 0.43,  source: "Forbes" },
      { year: 2023, value: 0.535, source: "Forbes" },
      { year: 2024, value: 0.57,  source: "Forbes" },
    ],
    revenue: { estimate: 75, year: 2023, source: "Forbes", operatingIncome: 6 },
    transactions: [
      { year: 2017, price: 0.150, buyer: "John R. Ingram-led ownership group", seller: "MLS (expansion)", notes: "Nashville SC awarded MLS expansion franchise Dec 2017 for $150M expansion fee; Ingram Industries chairman John Ingram led group with Turner family (Dollar General); team began MLS play 2020" },
      { year: 2022, price: null, buyer: "Reese Witherspoon, Derrick Henry, Jim Toth, Giannis Antetokounmpo (minority)", seller: "John Ingram (partial)", notes: "High-profile minority investors added to ownership group April 2022; valuation undisclosed but signaled market validation; Ingram retained controlling majority" }
    ],
    stadium: {
      name: "GEODIS Park",
      yearBuilt: 2022,
      capacity: 30000,
      ownershipModel: "publicly owned by Metropolitan Government of Nashville/Davidson County; Nashville SC operates under long-term lease and retains substantially all event-day revenue; team committed to Metro fairgrounds site through ~2052",
      teamOwnsLand: false,
      publicSubsidy: 50,
      privateFinancing: 285,
      namingRightsDeal: { sponsor: "GEODIS (French logistics)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "10-year deal signed 2021; financial terms undisclosed but estimated $4-5M/yr; Nashville-based GEODIS regional HQ; covers stadium, training center signage" },
      nonGameRevenue: "Largest soccer-specific stadium in US/Canada; hosts CONCACAF, Copa America, friendlies, concerts; ancillary parking + naming + premium seating drive ~$15-20M non-MLS revenue; team owns operating rights",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Streaming-only via Apple TV+ MLS Season Pass; selective games on Bally Sports South / Tennessean radio partnerships",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "John R. Ingram (Ingram Industries chairman)",
      ownerNetWorth: "~$3.0B (Forbes; Ingram Industries — book distribution, marine, insurance)",
      ownerBackground: "John Ingram inherited stake in family business empire; Ingram Industries is one of largest US private companies (~$2B annual revenue); led Nashville's MLS expansion bid; lifelong Tennessee resident and Vanderbilt alum",
      acquisitionYear: 2017,
      acquisitionPrice: 0.150,
      currentValuation: 0.57,
      impliedReturn: "~3.8x in 7 years on $150M expansion fee (~21% IRR)",
      ownershipGroup: [
        { name: "John R. Ingram", role: "majority / chairman", pct: null },
        { name: "Turner family (Dollar General)", role: "minority partner", pct: null },
        { name: "Reese Witherspoon", role: "minority", pct: null },
        { name: "Derrick Henry", role: "minority", pct: null },
        { name: "Jim Toth", role: "minority", pct: null },
        { name: "Giannis Antetokounmpo", role: "minority", pct: null }
      ],
      institutionalInvestors: "Ownership remains family/HNW individuals; no announced PE involvement",
      otherBusinessInterests: "Ingram Industries (book distribution Ingram Content Group, marine transport, insurance Tennessee Book Co.); also owns Huntsville City FC (MLS NEXT Pro)"
    },
    brand: {
      socialMedia: { instagram: "~430K", twitter: "~190K", facebook: "~210K" },
      merchandiseNotes: "Strong country music / Nashville cultural alignment; minority owners Reese Witherspoon and Derrick Henry drive crossover audience; merchandise growing post-GEODIS Park opening",
      internationalFanbase: "Limited; growing through Antetokounmpo (Greek) connection and German DP Hany Mukhtar fanbase",
      notableSponsorships: ["GEODIS (stadium naming)", "Ingram Content Group (jersey)", "Bridgestone", "Ascension Saint Thomas Health", "Dollar General"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Hany Mukhtar — Designated Player ~$3M/yr; 2022 MLS MVP; rumored extension under negotiation 2025",
      starContracts: [
        { player: "Hany Mukhtar", position: "AM", aav: 3.0, contractNote: "Designated Player; 2022 MLS MVP; central to Nashville attack" },
        { player: "Walker Zimmerman", position: "CB", aav: 1.5, contractNote: "TAM/DP; USMNT veteran; defensive cornerstone" },
        { player: "Sam Surridge", position: "ST", aav: 2.5, contractNote: "Designated Player; key signing post-Mukhtar dependency" }
      ]
    },
    analystNotes: "Nashville SC's $570M Forbes mark on a $150M 2017 expansion entry — ~3.8x in 7 years — sits comfortably in the league's upper-middle tier despite a small media market, with GEODIS Park (30K capacity, largest soccer-specific stadium in North America) as the primary structural asset. The Ingram family balance sheet and high-profile celebrity minority owners (Witherspoon, Henry, Antetokounmpo) provide brand and capital optionality, but the franchise's ceiling is constrained by being a one-DP-team-MVP economy and limited international resonance. Upside case: continued MLS national TV/streaming inflation lifts mid-market valuations toward $700M; downside: Apple deal renewal in 2032 underwhelms and small-market clubs face revenue compression."
  },

  "New England Revolution": {
    valuationHistory: [
      { year: 2019, value: 0.230, source: "Forbes" },
      { year: 2020, value: 0.245, source: "Forbes" },
      { year: 2021, value: 0.275, source: "Forbes" },
      { year: 2022, value: 0.345, source: "Forbes" },
      { year: 2023, value: 0.480, source: "Forbes" },
      { year: 2024, value: 0.530, source: "Sportico Jan 2025" },
    ],
    revenue: { estimate: 60, year: 2023, source: "Forbes", operatingIncome: -5 },
    transactions: [
      { year: 1995, price: 0.005, buyer: "Robert Kraft (Kraft Group)", seller: "MLS (founding membership)", notes: "Kraft was one of MLS's original investor-operators; founding fee was nominal (~$5M); team began play 1996; one of three MLS teams owned by NFL franchise owners at founding" }
    ],
    stadium: {
      name: "Gillette Stadium",
      yearBuilt: 2002,
      capacity: 65878,
      ownershipModel: "100% privately owned by Kraft Group (also owns NFL Patriots); Revolution share stadium with Patriots; massive scale (~66K) is structurally undersized — sub-20K MLS crowd lost in NFL bowl",
      teamOwnsLand: true,
      publicSubsidy: 0,
      privateFinancing: 350,
      namingRightsDeal: { sponsor: "Gillette (Procter & Gamble)", annualValue_M: 8, totalValue_M: 240, expiryYear: 2031, notes: "$240M for 30 years (2002-2031); Patriots-driven deal; Revolution benefit by association" },
      nonGameRevenue: "Patriot Place mall, concerts (Taylor Swift, Beyoncé), 2026 FIFA World Cup (7 matches); Revolution-specific non-game revenue marginal; Patriots dominate venue economics",
      newStadiumPlans: "Long-discussed Everett, MA soccer-specific stadium has stalled multiple times since 2019; Kraft Group has not committed land or capital; current expectation is Revolution remain at Gillette indefinitely; 2023 $225M Gillette renovation cements that"
    },
    media: {
      localTVDeal: "Streaming-only via Apple TV+ MLS Season Pass; radio via 98.5 The Sports Hub",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Robert Kraft (Kraft Group chairman/CEO)",
      ownerNetWorth: "~$11.0B (Bloomberg/Forbes; Kraft Group — paper/packaging, sports, real estate)",
      ownerBackground: "Robert Kraft made initial fortune via International Forest Products and Rand-Whitney; bought Patriots 1994 for $172M (now valued ~$7B); MLS founding investor 1995; sons Jonathan (president) and Robert Jr. active in operations; Revolution has historically been a Kraft Group afterthought relative to NFL focus",
      acquisitionYear: 1995,
      acquisitionPrice: 0.005,
      currentValuation: 0.530,
      impliedReturn: "~106x in 30 years on $5M founding investment (~16% IRR)",
      ownershipGroup: [
        { name: "Robert Kraft", role: "majority / chairman", pct: null },
        { name: "Jonathan Kraft", role: "president, Kraft Group", pct: null }
      ],
      institutionalInvestors: "None disclosed; Kraft Group is private",
      otherBusinessInterests: "NFL New England Patriots, Kraft Group (paper/packaging), Patriot Place real estate, International Forest Products"
    },
    brand: {
      socialMedia: { instagram: "~290K", twitter: "~250K", facebook: "~440K" },
      merchandiseNotes: "Mid-tier MLS merchandise; flagship Boston market underperforms relative to size due to Gillette geography (~30 miles from Boston); brand revival hopes pinned on stadium move",
      internationalFanbase: "Limited; New England diaspora tied to Portuguese/Brazilian community; Carles Gil (Spanish) and Latin American DPs connect to Hispanic markets",
      notableSponsorships: ["UnitedHealthcare (jersey)", "Gillette (stadium)", "Bose", "Bauer Hockey"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Carles Gil — Designated Player ~$3M/yr; 2021 Landon Donovan MVP",
      starContracts: [
        { player: "Carles Gil", position: "AM", aav: 3.0, contractNote: "Designated Player; club captain; 2021 MLS MVP" },
        { player: "Tomás Chancalay", position: "W", aav: 1.5, contractNote: "Designated Player; loan-to-permanent from Racing Club" }
      ]
    },
    analystNotes: "The Revolution are MLS's most visible underperformance-of-a-strong-market story: a $530M valuation on the 5th-largest US TV market, capped structurally by Gillette Stadium tenancy and three decades of Kraft Group ambivalence about MLS-first investment. The team has reached the MLS Cup Final five times without winning and the long-promised Everett soccer-specific stadium remains a paper plan. Upside requires either a stadium catalyst or a Kraft generational handoff that prioritizes the Revolution; absent that, the franchise drifts at the mid-tier despite a market that should sustain a $1B+ valuation."
  },

  "New York City FC": {
    valuationHistory: [
      { year: 2019, value: 0.350, source: "Forbes" },
      { year: 2020, value: 0.435, source: "Forbes" },
      { year: 2021, value: 0.760, source: "Forbes" },
      { year: 2022, value: 0.715, source: "Forbes" },
      { year: 2023, value: 0.760, source: "Forbes" },
      { year: 2024, value: 0.850, source: "Forbes" },
    ],
    revenue: { estimate: 90, year: 2023, source: "Forbes", operatingIncome: 5 },
    transactions: [
      { year: 2013, price: 0.100, buyer: "City Football Group / Yankee Global Enterprises (joint)", seller: "MLS (expansion)", notes: "NYCFC awarded as 20th MLS franchise May 2013; CFG (Sheikh Mansour, Abu Dhabi) led ownership at ~80%; Yankees minority ~20%; combined $100M expansion fee; team began play 2015" },
      { year: 2024, price: 0.150, buyer: "Marcelo Claure (10% stake)", seller: "City Football Group / Yankees (partial)", notes: "Bolivian-American billionaire Claure acquired 10% stake at implied $1.5B valuation including new stadium project; signaled CFG's confidence in NYC market and Etihad Park asset value" }
    ],
    stadium: {
      name: "Yankee Stadium (current); Etihad Park (2027)",
      yearBuilt: 2027,
      capacity: 25000,
      ownershipModel: "Etihad Park: privately financed by NYCFC ownership; long-term ground lease from NYC at Willets Point, Queens; team-controlled venue economics — first soccer-specific stadium in NYC five boroughs",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 780,
      namingRightsDeal: { sponsor: "Etihad Airways", annualValue_M: 20, totalValue_M: null, expiryYear: null, notes: "Etihad is UAE flag carrier, longstanding CFG partner (also Manchester City stadium); deal terms undisclosed but estimated $15-20M/yr" },
      nonGameRevenue: "New stadium projected to host concerts, international friendlies, NWSL/Gotham FC overflow; major upgrade vs. Yankee Stadium tenancy where MLS-share of non-MLB revenue minimal",
      newStadiumPlans: "Etihad Park: 25,000-seat soccer-specific stadium in Willets Point, Queens; $780M total cost; construction began Dec 2024; expected open for 2027 MLS season; first new sports venue in NYC five boroughs in years"
    },
    media: {
      localTVDeal: "Streaming-only via Apple TV+ MLS Season Pass; selective games via YES Network (Yankees-affiliated)",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "City Football Group (Sheikh Mansour bin Zayed Al Nahyan / Abu Dhabi United Group)",
      ownerNetWorth: "Sheikh Mansour: ~$30B+ personal; Abu Dhabi sovereign wealth backing effectively unlimited",
      ownerBackground: "CFG is global multi-club ownership network — Manchester City, Girona (La Liga), Yokohama F. Marinos, Mumbai City, Melbourne City and others; NYCFC is CFG's North American flagship; Yankees minority partnership delivers New York market access and resources",
      acquisitionYear: 2013,
      acquisitionPrice: 0.100,
      currentValuation: 0.850,
      impliedReturn: "~8.5x in 11 years on $100M expansion fee (~22% IRR)",
      ownershipGroup: [
        { name: "City Football Group / Abu Dhabi United Group", role: "majority", pct: 70 },
        { name: "Yankee Global Enterprises (Steinbrenner family)", role: "minority operating partner", pct: 20 },
        { name: "Marcelo Claure (Claure Capital)", role: "minority", pct: 10 }
      ],
      institutionalInvestors: "Silver Lake Partners holds ~10% of CFG (parent) at ~$5B implied 2019, marked higher in 2023; private; PIF (Saudi) reportedly explored CFG investment but deal did not close",
      otherBusinessInterests: "CFG: 13+ clubs globally; Steinbrenner family: Yankees + YES Network; Claure: SoftBank Vision Fund, Bolivian telecom"
    },
    brand: {
      socialMedia: { instagram: "~1.1M", twitter: "~470K", facebook: "~620K" },
      merchandiseNotes: "Strong international resonance via CFG global network; NYC market benefits from cosmopolitan fanbase; MLS Cup 2021 win provided brand validation; merchandise growth tied to Etihad Park opening",
      internationalFanbase: "Strong; CFG sister-club affinity from Manchester City fans, Latin American supporters via Spanish-language community",
      notableSponsorships: ["Etihad Airways (kit + stadium)", "Nike (technical)", "Heineken", "Volkswagen"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Santiago Rodríguez — Designated Player ~$2.8M/yr; Uruguayan playmaker",
      starContracts: [
        { player: "Santiago Rodríguez", position: "AM", aav: 2.8, contractNote: "Designated Player; central creative force; signed permanent 2024" },
        { player: "Maxime Chanot", position: "CB", aav: 1.0, contractNote: "TAM; longtime club captain; defensive leader" },
        { player: "Alonso Martínez", position: "ST", aav: 1.5, contractNote: "Young DP; Costa Rican international; key 2024 signing" }
      ]
    },
    analystNotes: "NYCFC's $850M Forbes mark — bolstered by Marcelo Claure's 10% buy at $1.5B implied — reflects the Etihad Park premium more than current operations: the Willets Point stadium opening in 2027 should be the largest single valuation step-change in MLS, transitioning the club from Yankee Stadium tenant to NYC's first soccer-specific venue with full economic capture. CFG's global network and Abu Dhabi capital backstop give the club strategic depth few US clubs can match, with the 2021 MLS Cup demonstrating sporting credibility. Primary risk: cost overruns or delays at Etihad Park; secondary risk: regulatory/political backlash against Gulf-state ownership in NYC market."
  },

  "New York Red Bulls": {
    valuationHistory: [
      { year: 2019, value: 0.290, source: "Forbes" },
      { year: 2020, value: 0.345, source: "Forbes" },
      { year: 2021, value: 0.395, source: "Forbes" },
      { year: 2022, value: 0.395, source: "Forbes" },
      { year: 2023, value: 0.475, source: "Forbes" },
      { year: 2024, value: 0.525, source: "Forbes" },
    ],
    revenue: { estimate: 70, year: 2023, source: "Forbes", operatingIncome: -3 },
    transactions: [
      { year: 1996, price: 0.005, buyer: "MetroStars investor group (founding)", seller: "MLS (founding membership)", notes: "Original NY/NJ MetroStars founded as MLS charter franchise 1996; multiple ownership iterations through early 2000s" },
      { year: 2006, price: 0.100, buyer: "Red Bull GmbH", seller: "Anschutz Entertainment Group (AEG)", notes: "Red Bull purchased MetroStars from AEG for ~$100M; rebranded as New York Red Bulls; built Red Bull Arena (now Sports Illustrated Stadium) in Harrison NJ for ~$200M" }
    ],
    stadium: {
      name: "Sports Illustrated Stadium (formerly Red Bull Arena)",
      yearBuilt: 2010,
      capacity: 25000,
      ownershipModel: "100% privately owned by Red Bull GmbH; team owns and operates stadium; hosts Gotham FC (NWSL) as secondary tenant; full venue economics captured by ownership",
      teamOwnsLand: true,
      publicSubsidy: 40,
      privateFinancing: 160,
      namingRightsDeal: { sponsor: "Sports Illustrated Tickets (Authentic Brands Group / Box Office)", annualValue_M: 8, totalValue_M: 100, expiryYear: 2037, notes: "13-year deal announced Dec 2024; deal value reported as 'nine figures' (>$100M); first major sports venue with blockchain ticketing partnership; Red Bull GmbH retains team brand but sold venue naming rights" },
      nonGameRevenue: "Concerts, USMNT/USWNT internationals, Gotham FC NWSL games, college football; ~$10-15M annual non-MLS revenue",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Streaming-only via Apple TV+ MLS Season Pass; selective games on MSG Network",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Red Bull GmbH (Mateschitz estate / Yoovidhya family)",
      ownerNetWorth: "Red Bull GmbH: ~$25B+ enterprise value; Mateschitz family ~49%, Yoovidhya family (Thai) 51%",
      ownerBackground: "Dietrich Mateschitz co-founded Red Bull in 1984 with Thai partner Chaleo Yoovidhya; Mateschitz died Oct 2022, son Mark Mateschitz inherited 49% (Forbes ranks him among Austria's wealthiest); Yoovidhya family controls 51% via Chaleo's heirs; Red Bull soccer empire includes RB Leipzig (Bundesliga), RB Salzburg, RB Bragantino (Brazil), and youth pipeline operations",
      acquisitionYear: 2006,
      acquisitionPrice: 0.100,
      currentValuation: 0.525,
      impliedReturn: "~5.3x in 18 years on $100M acquisition (~10% IRR)",
      ownershipGroup: [
        { name: "Red Bull GmbH", role: "100% owner via corporate entity", pct: 100 }
      ],
      institutionalInvestors: "None; Red Bull GmbH is private corporation",
      otherBusinessInterests: "Red Bull global energy drink empire; F1 Red Bull Racing; RB Leipzig (Bundesliga), RB Salzburg, RB Bragantino, NY Red Bulls II (MLS NEXT Pro)"
    },
    brand: {
      socialMedia: { instagram: "~370K", twitter: "~310K", facebook: "~440K" },
      merchandiseNotes: "Brand polarizing — Red Bull corporate logo on kit alienates traditionalists; consistent on-field competitiveness sustains core supporter base; loss of Red Bull Arena naming rights to SI Tickets clouds brand identity",
      internationalFanbase: "Red Bull soccer global network creates passive cross-fan flow but no organic Red Bulls international brand; supporters' groups (Empire Supporters Club, Viking Army) retain MetroStars-era loyalty",
      notableSponsorships: ["Red Bull (kit + brand)", "Sports Illustrated Tickets (stadium naming)", "Provident Bank", "RWJBarnabas Health"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Emil Forsberg — Designated Player ~$5M/yr; Sweden international; arrived from RB Leipzig 2024",
      starContracts: [
        { player: "Emil Forsberg", position: "AM", aav: 5.0, contractNote: "Designated Player; arrived from sister-club RB Leipzig Jan 2024; central attacking force" },
        { player: "Cory Burke", position: "ST", aav: 1.0, contractNote: "TAM; veteran Jamaican international" }
      ]
    },
    analystNotes: "The Red Bulls are MLS's most consistent regular-season club without ever winning the MLS Cup — a paradox that has capped franchise narrative despite strong on-field performance. The Dec 2024 sale of stadium naming rights to Sports Illustrated Tickets ($100M+ for 13 years) signals Red Bull's willingness to monetize ancillary assets while retaining team naming, but also raises questions about long-term commitment vs. RB Leipzig and RB Salzburg as priority investments. The $525M Forbes mark trails NYCFC by ~$325M despite identical media market — the gap reflects NYCFC's Etihad Park catalyst and CFG capital depth more than Red Bulls weaknesses."
  },

  "Orlando City SC": {
    valuationHistory: [
      { year: 2019, value: 0.290, source: "Forbes" },
      { year: 2020, value: 0.310, source: "Forbes" },
      { year: 2021, value: 0.355, source: "Forbes" },
      { year: 2022, value: 0.395, source: "Forbes" },
      { year: 2023, value: 0.475, source: "Forbes" },
      { year: 2024, value: 0.520, source: "Forbes" },
    ],
    revenue: { estimate: 65, year: 2023, source: "Forbes", operatingIncome: -2 },
    transactions: [
      { year: 2013, price: 0.070, buyer: "Flávio Augusto da Silva (Wise Up English Schools founder)", seller: "MLS (expansion)", notes: "Brazilian businessman da Silva led Orlando City's MLS expansion bid; awarded as 21st franchise Nov 2013; $70M expansion fee; team began play 2015" },
      { year: 2021, price: 0.450, buyer: "Wilf family (Zygi/Mark/Lenny Wilf)", seller: "Flávio Augusto da Silva", notes: "Wilf family (NFL Minnesota Vikings owners since 2005) acquired Orlando City SC and NWSL Orlando Pride for ~$450M combined July 2021; brought MLS/NWSL operational expertise; investment thesis tied to Florida growth and FIFA World Cup 2026 lift" }
    ],
    stadium: {
      name: "Inter&Co Stadium (formerly Exploria Stadium)",
      yearBuilt: 2017,
      capacity: 25500,
      ownershipModel: "100% privately financed and team-owned; sits on city-owned land in downtown Orlando under long-term lease; team retains all venue economics",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 155,
      namingRightsDeal: { sponsor: "Inter&Co (Brazilian fintech)", annualValue_M: 5, totalValue_M: null, expiryYear: null, notes: "Long-term deal announced Jan 2024 replacing Exploria Resorts (since 2019); Brazilian connection ties to city's Latin American demographic; financial terms undisclosed estimated $4-6M/yr" },
      nonGameRevenue: "Hosts Orlando Pride (NWSL — same ownership), concerts, college soccer, international friendlies; ancillary ~$8-12M/yr",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Streaming-only via Apple TV+ MLS Season Pass",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Mark Wilf (chairman); Wilf family (Zygmunt 'Zygi', Mark, Leonard)",
      ownerNetWorth: "~$5.8B (Forbes; Wilf family net worth — real estate + Vikings)",
      ownerBackground: "Wilf family built Garden Homes (NJ-based real estate development — apartments, retail) starting 1950s; bought Vikings in 2005 for $600M (now valued ~$5.5B); family includes Zygi (chairman), Mark (vice chairman) and cousin Lenny; Orlando City represents diversification into MLS/NWSL with Florida demographic exposure",
      acquisitionYear: 2021,
      acquisitionPrice: 0.450,
      currentValuation: 0.520,
      impliedReturn: "~1.2x in 3 years on combined $450M (MLS + NWSL Pride) entry",
      ownershipGroup: [
        { name: "Mark Wilf", role: "chairman / governor", pct: null },
        { name: "Zygmunt Wilf", role: "owner", pct: null },
        { name: "Leonard Wilf", role: "owner", pct: null }
      ],
      institutionalInvestors: "None disclosed",
      otherBusinessInterests: "NFL Minnesota Vikings, Garden Homes (real estate development), NWSL Orlando Pride"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~310K", facebook: "~750K" },
      merchandiseNotes: "Strong purple/lion identity; deep Hispanic and Brazilian fanbase in Central Florida; Orlando Pride (same ownership) adds NWSL crossover; merchandise growth post-Wilf acquisition",
      internationalFanbase: "Strong Latin American (especially Brazilian) connection from da Silva era and Inter&Co naming; tourism market drives walk-up international interest",
      notableSponsorships: ["Inter&Co (stadium)", "Walt Disney World (jersey)", "Orlando Health", "Pepsi"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Facundo Torres — Designated Player ~$3M/yr; Uruguayan international; sold to Palmeiras 2025 for ~$15M club-record fee",
      starContracts: [
        { player: "Martín Ojeda", position: "AM", aav: 3.0, contractNote: "Designated Player; Argentine playmaker; central to attack" },
        { player: "Pedro Gallese", position: "GK", aav: 1.5, contractNote: "TAM; Peruvian international; longtime starter" },
        { player: "Robin Jansson", position: "CB", aav: 1.2, contractNote: "TAM; Swedish defender; defensive captain" }
      ]
    },
    analystNotes: "Orlando City's $520M Forbes mark on Wilf family's $450M 2021 entry represents only modest appreciation (~1.2x in 3 years), suggesting the league-wide Messi-era lift has compressed the relative gap between mid-tier clubs. The franchise has structural strengths — team-owned Inter&Co Stadium, dual-asset MLS/NWSL platform, and Latin American demographic tailwinds in Central Florida — but no MLS Cup and limited DP star power have left it on the cusp rather than near the top. Wilf family's NFL discipline should drive operational improvement; the upside trigger is FIFA World Cup 2026 (Orlando hosting matches) and a marquee DP signing."
  },

  "Philadelphia Union": {
    valuationHistory: [
      { year: 2019, value: 0.265, source: "Forbes" },
      { year: 2020, value: 0.320, source: "Forbes" },
      { year: 2021, value: 0.380, source: "Forbes" },
      { year: 2022, value: 0.480, source: "Forbes" },
      { year: 2023, value: 0.560, source: "Forbes" },
      { year: 2024, value: 0.685, source: "Forbes" },
    ],
    revenue: { estimate: 75, year: 2023, source: "Forbes", operatingIncome: 8 },
    transactions: [
      { year: 2008, price: 0.040, buyer: "Keystone Sports & Entertainment (Jay Sugarman, Jim Nevels, Pat Croce et al)", seller: "MLS (expansion)", notes: "Philadelphia Union awarded as 16th MLS franchise Feb 2008; $40M expansion fee; iStar Inc CEO Jay Sugarman became managing partner; team began play 2010 at PPL Park" }
    ],
    stadium: {
      name: "Subaru Park (formerly PPL Park, Talen Energy Stadium)",
      yearBuilt: 2010,
      capacity: 18500,
      ownershipModel: "publicly-owned land (Delaware River Port Authority); stadium privately financed by Union ownership; team operates and retains substantially all revenue under long-term lease",
      teamOwnsLand: false,
      publicSubsidy: 47,
      privateFinancing: 73,
      namingRightsDeal: { sponsor: "Subaru of America", annualValue_M: 3, totalValue_M: null, expiryYear: null, notes: "Multi-year deal signed 2020 replacing Talen Energy; Camden NJ-based Subaru regional fit; financial terms undisclosed estimated $3-4M/yr" },
      nonGameRevenue: "Concerts, NCAA Lacrosse, Philadelphia Soul (arena football), CONCACAF; ancillary ~$5-8M/yr; modest scale relative to large-market peers",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Streaming-only via Apple TV+ MLS Season Pass; selective games on NBC Sports Philadelphia",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Jay Sugarman (managing partner / CEO)",
      ownerNetWorth: "~$300-500M (estimated; iStar Inc / Safehold founder)",
      ownerBackground: "Jay Sugarman founded iStar Inc (formerly Starwood Financial Trust) in 1993; spun off Safehold (NYSE: SAFE) in 2017 — net-lease real estate REIT; financial backbone of Union ownership; brought sustained operational discipline despite modest budget; long-tenured majority owner since 2008",
      acquisitionYear: 2008,
      acquisitionPrice: 0.040,
      currentValuation: 0.685,
      impliedReturn: "~17x in 16 years on $40M expansion fee (~19% IRR)",
      ownershipGroup: [
        { name: "Jay Sugarman", role: "managing partner", pct: null },
        { name: "Richie Graham", role: "minority investor", pct: null },
        { name: "Various Philadelphia HNW investors", role: "minority", pct: null }
      ],
      institutionalInvestors: "None disclosed; ownership has resisted PE entry historically",
      otherBusinessInterests: "iStar Inc / Safehold (real estate finance)"
    },
    brand: {
      socialMedia: { instagram: "~280K", twitter: "~300K", facebook: "~340K" },
      merchandiseNotes: "Sons of Ben supporters' group is MLS-elite for organization and atmosphere; merchandise mid-tier but consistent; sustained on-field success since 2019 has built fan loyalty",
      internationalFanbase: "Limited; modest crossover with Mexican/Caribbean diaspora in Philadelphia",
      notableSponsorships: ["Bimbo Bakeries (jersey)", "Subaru (stadium)", "Independence Blue Cross", "Wawa"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Mikael Uhre — Designated Player ~$2.5M/yr; Danish striker",
      starContracts: [
        { player: "Mikael Uhre", position: "ST", aav: 2.5, contractNote: "Designated Player; key goalscorer since 2022" },
        { player: "Daniel Gazdag", position: "AM", aav: 2.2, contractNote: "Designated Player; Hungarian international; 2022 MLS Cup runner-up campaign hero" },
        { player: "Andre Blake", position: "GK", aav: 1.5, contractNote: "TAM; multi-time MLS Goalkeeper of the Year; Jamaican international" }
      ]
    },
    analystNotes: "The Union are MLS's purest sporting-meritocracy story: a $685M valuation built on consistent on-field performance (5 straight playoffs, 2022 MLS Cup runner-up, Supporters' Shield 2020) rather than market size or capital firepower. The Sugarman-led ownership has been disciplined to a fault — no marquee DP, no stadium upgrade, but sustained academy investment that has produced significant transfer revenue (Brenden Aaronson, Mark McKenzie, Paxten Aaronson). Upside requires a stadium/training expansion catalyst or a generational DP signing; the franchise's structural ceiling is the Philly/South Jersey market, which limits revenue scaling vs. NYC/LA peers."
  },

  "Toronto FC": {
    valuationHistory: [
      { year: 2019, value: 0.395, source: "Forbes" },
      { year: 2020, value: 0.450, source: "Forbes" },
      { year: 2021, value: 0.580, source: "Forbes" },
      { year: 2022, value: 0.690, source: "Forbes" },
      { year: 2023, value: 0.685, source: "Forbes" },
      { year: 2024, value: 0.725, source: "Forbes" },
    ],
    revenue: { estimate: 80, year: 2023, source: "Forbes", operatingIncome: -8 },
    transactions: [
      { year: 2005, price: 0.010, buyer: "Maple Leaf Sports & Entertainment (MLSE)", seller: "MLS (expansion)", notes: "Toronto FC awarded as 13th MLS franchise May 2005 with ~$10M expansion fee — bargain pricing for first MLS Canadian franchise; team began play 2007" },
      { year: 2024, price: null, buyer: "Rogers Communications (acquired Bell's 37.5% stake)", seller: "Bell Canada", notes: "Rogers paid C$4.7B (US$3.5B) for Bell's 37.5% MLSE stake Sept 2024; transaction implies MLSE total value ~C$12.5B (US$9.4B); Rogers became 75% MLSE owner with Tanenbaum 25%; deal reshapes Toronto sports media landscape" }
    ],
    stadium: {
      name: "BMO Field",
      yearBuilt: 2007,
      capacity: 30991,
      ownershipModel: "owned by City of Toronto; operated under long-term lease by MLSE; team retains all event-day revenue; major renovation underway 2024-26 for FIFA World Cup including expansion to ~45,500 seats",
      teamOwnsLand: false,
      publicSubsidy: 18,
      privateFinancing: 45,
      namingRightsDeal: { sponsor: "BMO Financial Group (Bank of Montreal)", annualValue_M: 4, totalValue_M: 27, expiryYear: 2027, notes: "Renewed 2017 at C$3.4M/yr ($27M over 10yr); BMO is MLSE longtime banking partner; renewal expected at higher figure pre-2026 World Cup" },
      nonGameRevenue: "Hosts Toronto Argonauts (CFL) since 2016; concerts; CanMNT internationals; FIFA World Cup 2026 (6 matches expected); ~$15-20M/yr non-MLS revenue; expected significant uplift post-renovation",
      newStadiumPlans: "BMO Field renovation 2024-26: expansion from 30,991 to ~45,500 capacity (17K temporary seats for World Cup), upgraded broadcast/Wi-Fi/hospitality; total cost ~C$130M; partial public funding from Ontario/federal/Toronto"
    },
    media: {
      localTVDeal: "Sportsnet (Rogers); TSN (Bell); selective games on Apple TV+ MLS Season Pass",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); Canadian teams receive additional Canadian Soccer Business / domestic distribution; Rogers ownership creates intracompany media leverage"
    },
    ownership: {
      primaryOwner: "Maple Leaf Sports & Entertainment (MLSE) — Rogers Communications 75% / Larry Tanenbaum 25%",
      ownerNetWorth: "Rogers family (controlling Rogers Communications): ~$15B; Tanenbaum: ~$1.5B",
      ownerBackground: "MLSE consolidated under Rogers (75%) and Tanenbaum (25%) Sept 2024 after Rogers paid C$4.7B for Bell's 37.5% stake; MLSE owns Maple Leafs (NHL), Raptors (NBA), Toronto FC (MLS), Marlies (AHL), Argonauts (CFL minority); largest sports holding company in Canada; Rogers also controls Sportsnet RSN — vertical integration of teams + media unique in North America",
      acquisitionYear: 2005,
      acquisitionPrice: 0.010,
      currentValuation: 0.725,
      impliedReturn: "~72x in 19 years on $10M expansion fee (~26% IRR)",
      ownershipGroup: [
        { name: "Rogers Communications", role: "majority via MLSE", pct: 75 },
        { name: "Larry Tanenbaum (Kilmer Sports Inc.)", role: "minority via MLSE", pct: 25 }
      ],
      institutionalInvestors: "Rogers Communications publicly traded (TSX: RCI.B); MLSE itself private",
      otherBusinessInterests: "Rogers: cable/wireless/media/Sportsnet; Tanenbaum: Kilmer Van Nostrand (cement/aggregates); MLSE: Leafs (NHL), Raptors (NBA), Marlies (AHL)"
    },
    brand: {
      socialMedia: { instagram: "~630K", twitter: "~570K", facebook: "~720K" },
      merchandiseNotes: "Strong Canadian-soccer flagship brand; 2017 MLS Cup champion + 2017 Supporters' Shield + 2017 Canadian Championship treble drives merchandise; cosmopolitan Toronto market supports broad fan base; underperformance 2022-2024 cooled momentum",
      internationalFanbase: "Strong; Toronto's diverse immigrant communities (Italian, Portuguese, Caribbean, South Asian) create natural soccer affinity; Sebastian Giovinco era (2015-2018) built Italian/European following",
      notableSponsorships: ["BMO (kit + stadium)", "Bell Canada", "Coca-Cola", "GMC (jersey sleeve)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Federico Bernardeschi — Designated Player ~$6.5M/yr; Italian international; under-delivered relative to contract since 2022",
      starContracts: [
        { player: "Federico Bernardeschi", position: "AM", aav: 6.5, contractNote: "Designated Player since 2022; ex-Juventus/Italy; controversial deal given output" },
        { player: "Lorenzo Insigne", position: "W", aav: 15.4, contractNote: "Designated Player since 2022; ex-Napoli/Italy; massive contract through 2026 — among MLS's largest; salary reset/release in 2025 widely reported" },
        { player: "Sean Johnson", position: "GK", aav: 1.5, contractNote: "TAM; veteran USMNT goalkeeper" }
      ]
    },
    analystNotes: "Toronto FC's $725M Forbes mark and 6th-place 2024 MLS ranking obscure a franchise in transition: the 2022 Insigne/Bernardeschi DP era ($22M+ combined annual cost) produced two playoff misses and reset the cost-discipline framework. Rogers's 2024 consolidation of MLSE control (75% / C$4.7B for Bell stake) creates unique vertical integration with Sportsnet RSN, potentially unlocking media value but also concentrating leverage. BMO Field's World Cup 2026 expansion is the single largest near-term catalyst, with the broader MLSE ecosystem (Leafs, Raptors) providing institutional discipline; the franchise's $725M valuation could underwrite an expanded BMO Field uplift to $1B+ post-2026 if sporting performance recovers."
  },

  "Austin FC": {
    valuationHistory: [
      { year: 2021, value: 0.475, source: "Sportico (expansion fee)" },
      { year: 2022, value: 0.630, source: "Forbes" },
      { year: 2023, value: 0.760, source: "Forbes" },
      { year: 2024, value: 0.800, source: "Forbes" },
      { year: 2025, value: 0.825, source: "Forbes (May 2025); $912M implied by minority stake transactions" },
    ],
    revenue: { estimate: 90, year: 2024, source: "Forbes", operatingIncome: 4 },
    transactions: [
      { year: 2018, price: 0.150, buyer: "Anthony Precourt / Two Oak Ventures", seller: "MLS (expansion)", notes: "Precourt secured Austin expansion rights in 2018; effectively relocated previous Columbus Crew SC ownership to Austin (kept Crew via separate sale to Haslam family); MLS expansion fee ~$150M; team began play 2021" },
      { year: 2025, price: null, buyer: "Borgen family + four other minority investors", seller: "Precourt (partial dilution)", notes: "Series of 2025 minority transactions valued the club at ~$912M enterprise value; Precourt retains majority and primary governor role" }
    ],
    stadium: {
      name: "Q2 Stadium",
      yearBuilt: 2021,
      capacity: 20738,
      ownershipModel: "City of Austin owns the stadium; team holds long-term operating lease; Two Oak Ventures (Precourt) privately funded the entire $260M construction cost",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 260,
      namingRightsDeal: { sponsor: "Q2 Holdings (Austin-based digital banking software firm)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "10-year naming rights deal signed pre-launch; specific value undisclosed but estimated at $3-4M/yr" },
      nonGameRevenue: "Hosts concerts and USL/NWSL matches; St. David's Performance Center training facility on adjacent land",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Local English-language broadcasts via CW Austin (selected matches outside Apple package)",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Anthony Precourt (Founder, Majority Owner, CEO; via Two Oak Ventures / Precourt Sports Ventures)",
      ownerNetWorth: "$200M+ est. (private)",
      ownerBackground: "Stanford-educated; ran family investment firm Precourt Capital Management; previously operated Columbus Crew SC (2013-2018) before relocating MLS rights to Austin; original Crew kept in Columbus via separate sale to Haslam/Edwards family",
      acquisitionYear: 2018,
      acquisitionPrice: 0.150,
      currentValuation: 0.825,
      impliedReturn: "~5.5x in 7 years (2018-2025)",
      ownershipGroup: [
        { name: "Anthony Precourt", role: "majority owner / governor / CEO", pct: null },
        { name: "Matthew McConaughey", role: "Minister of Culture / minority owner", pct: null },
        { name: "Borgen family", role: "minority (added 2025)", pct: null },
        { name: "Bryan Sheffield", role: "minority", pct: null },
        { name: "Marius Haas", role: "minority", pct: null }
      ],
      institutionalInvestors: "Inner Circle Sports advised on 2025 minority sale process; multiple HNW co-investors in 2025 round",
      otherBusinessInterests: "Two Oak Ventures real estate; St. David's Performance Center development"
    },
    brand: {
      socialMedia: { instagram: "~600K", twitter: "~300K", facebook: "~200K" },
      merchandiseNotes: "Quickly became one of MLS's strongest merchandise performers; Austin's tech-economy demographics + sold-out stadium = premium kit pricing power",
      internationalFanbase: "Heavy Mexican-American crossover given Texas market; Latin American digital fanbase modest",
      notableSponsorships: ["Q2 Holdings (stadium)", "YETI", "Tito's Vodka", "AT&T", "Greater Austin Toyota Dealers"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Sebastián Driussi — Designated Player, ~$3M base/$4.5M total comp through 2026; Argentine attacking mid",
      starContracts: [
        { player: "Sebastián Driussi", position: "AM/CF", aav: 4.5, contractNote: "Designated Player through 2026; signed from Zenit St. Petersburg" },
        { player: "Brad Stuver", position: "GK", aav: 0.7, contractNote: "TAM-level deal; longtime starter" }
      ]
    },
    analystNotes: "Austin FC is the prototype for next-generation MLS expansion economics: Precourt's $150M expansion entry now valued at ~$825M-$912M (5.5x in 7 years), driven by privately financed stadium control, sold-out attendance, and a fast-growing tech economy market. The 2025 minority-stake transactions confirm institutional investor demand at ~6x revenue multiples. Risk centers on operating income compression (~$4M margin on $90M revenue suggests aggressive on-field spending) and continued Designated Player turnover after early Driussi-era success."
  },

  "Colorado Rapids": {
    valuationHistory: [
      { year: 2019, value: 0.215, source: "Forbes" },
      { year: 2020, value: 0.230, source: "Forbes" },
      { year: 2021, value: 0.290, source: "Forbes" },
      { year: 2022, value: 0.305, source: "Forbes" },
      { year: 2023, value: 0.330, source: "Forbes" },
      { year: 2024, value: 0.350, source: "Forbes (lowest valuation in MLS)" },
    ],
    revenue: { estimate: 50, year: 2023, source: "Forbes", operatingIncome: -8 },
    transactions: [
      { year: 1995, price: 0.020, buyer: "MLS (founding club, originally operated by AEG)", seller: "n/a", notes: "Original MLS founding member; operated by AEG initially; transferred to Kroenke Sports & Entertainment in 2003 for ~$8M" },
      { year: 2003, price: 0.008, buyer: "Stan Kroenke / Kroenke Sports & Entertainment", seller: "AEG", notes: "Kroenke acquired Rapids as part of building Denver-based sports portfolio (alongside Nuggets/Avalanche/Mammoth); ~$8M nominal price reflected MLS's struggling early-2000s economics" }
    ],
    stadium: {
      name: "Dick's Sporting Goods Park",
      yearBuilt: 2007,
      capacity: 19680,
      ownershipModel: "Kroenke Sports & Entertainment owns and operates the stadium; built on land in Commerce City (8 miles north of downtown Denver)",
      teamOwnsLand: true,
      publicSubsidy: 60,
      privateFinancing: 71,
      namingRightsDeal: { sponsor: "Dick's Sporting Goods (Pittsburgh-based retailer)", annualValue_M: 2, totalValue_M: 40, expiryYear: 2027, notes: "20-year deal signed 2007; ~$2M/yr; expected to renew as Kroenke evaluates Denver-area development plans" },
      nonGameRevenue: "Concerts, lacrosse (Mammoth), youth tournaments, training facility complex; relatively low utilization vs. peer MLS venues",
      newStadiumPlans: "Kroenke exploring land near current stadium for next major development; no firm new-stadium announcement"
    },
    media: {
      localTVDeal: "Altitude Sports (Kroenke-owned RSN); selected non-Apple matches; same RSN distributing Nuggets/Avalanche",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Stan Kroenke / Kroenke Sports & Entertainment",
      ownerNetWorth: "~$15B (Forbes 2024)",
      ownerBackground: "Married Ann Walton (Walmart heiress); built sprawling sports empire spanning Arsenal FC (EPL), LA Rams (NFL), Denver Nuggets (NBA), Colorado Avalanche (NHL), Colorado Mammoth (NLL); Rapids generally seen as the lowest-priority asset in the portfolio",
      acquisitionYear: 2003,
      acquisitionPrice: 0.008,
      currentValuation: 0.350,
      impliedReturn: "~44x in 22 years (~18% CAGR), but lowest absolute appreciation in KSE portfolio",
      ownershipGroup: [
        { name: "Stan Kroenke", role: "majority / governor", pct: null },
        { name: "Josh Kroenke", role: "vice chairman / day-to-day involvement", pct: null }
      ],
      institutionalInvestors: "None reported; family-held",
      otherBusinessInterests: "Arsenal FC, LA Rams, Denver Nuggets, Colorado Avalanche, KSE land/real estate (5,000+ acres in Colorado)"
    },
    brand: {
      socialMedia: { instagram: "~210K", twitter: "~190K", facebook: "~340K" },
      merchandiseNotes: "Bottom quartile MLS merchandise performer; Forever-31st valuation reputation has eroded fan goodwill; supporters group walked out of stadium in protest of valuation gap (2024)",
      internationalFanbase: "Modest Latino fanbase in Denver metro; little international pull compared to LA/Atlanta peers",
      notableSponsorships: ["Dick's Sporting Goods (stadium)", "Transamerica (jersey)", "Diageo", "Pepsi"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Djordje Mihailovic — DP-level CAM acquired from CF Montréal (2024); ~$2M base, $3M total comp",
      starContracts: [
        { player: "Djordje Mihailovic", position: "CAM", aav: 3.0, contractNote: "Designated Player; signed from CF Montréal Jan 2024" },
        { player: "Rafael Navarro", position: "ST", aav: 1.5, contractNote: "TAM-level Brazilian forward" }
      ]
    },
    analystNotes: "Colorado is the structural value laggard in MLS — Forbes' lowest valuation ($350M) at a moment when expansion fees have crossed $500M, signaling the market views the franchise as worth less than league replacement cost. Kroenke's de-prioritization (Rapids consistently the lowest-spend asset in his $15B portfolio) and Commerce City's geographic disconnect from downtown Denver limit attendance and sponsorship pricing. Upside requires either a major new-stadium development closer to downtown or a sale to a more-engaged owner; neither is on the immediate horizon."
  },

  "FC Dallas": {
    valuationHistory: [
      { year: 2019, value: 0.260, source: "Forbes" },
      { year: 2020, value: 0.295, source: "Forbes" },
      { year: 2021, value: 0.385, source: "Forbes" },
      { year: 2022, value: 0.460, source: "Forbes" },
      { year: 2023, value: 0.500, source: "Forbes" },
      { year: 2024, value: 0.500, source: "Forbes" },
    ],
    revenue: { estimate: 65, year: 2023, source: "Forbes", operatingIncome: 2 },
    transactions: [
      { year: 2003, price: 0.014, buyer: "Hunt Sports Group (Clark Hunt / Dan Hunt)", seller: "MLS (originally Lamar Hunt founder)", notes: "Hunt Sports Group reorganized ownership of original MLS founding club (Dallas Burn / Dallas Stars) to corporate structure; club rebranded to FC Dallas in 2005 ahead of Frisco stadium move" }
    ],
    stadium: {
      name: "Toyota Stadium",
      yearBuilt: 2005,
      capacity: 20500,
      ownershipModel: "City of Frisco / Frisco ISD own the land and stadium; FC Dallas operates and maintains under long-term lease; team funds all renovations",
      teamOwnsLand: false,
      publicSubsidy: 65,
      privateFinancing: 80,
      namingRightsDeal: { sponsor: "Toyota Motor North America", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Long-term naming rights; specific deal value undisclosed; renewed 2017" },
      nonGameRevenue: "National Soccer Hall of Fame on-site; National Soccer Tournament hub (FCD's youth academy is among MLS's most productive); concerts and youth events",
      newStadiumPlans: "$182M renovation underway 2025-2027 — North End enclosure, suite expansion, Hall of Fame upgrade; first phase of broader $1.1-1.3B mixed-use Frisco district (office, hotel, multifamily)"
    },
    media: {
      localTVDeal: "Selected matches on local broadcast partners outside Apple package",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Hunt Sports Group (Clark Hunt CEO; Dan Hunt President)",
      ownerNetWorth: "Hunt family: ~$24B (Forbes); Lamar Hunt heirs",
      ownerBackground: "Lamar Hunt was MLS founding investor and Hunt Sports Group origin; sons Clark and Dan inherited; family also owns NFL's Kansas City Chiefs (Clark is chairman/CEO); Hunt family was one of MLS's earliest and most committed owners (kept multiple clubs alive in early years)",
      acquisitionYear: 1996,
      acquisitionPrice: null,
      currentValuation: 0.500,
      impliedReturn: "30-year ownership; family-strategic asset rather than financial trade",
      ownershipGroup: [
        { name: "Clark Hunt", role: "chairman / CEO", pct: null },
        { name: "Dan Hunt", role: "president", pct: null },
        { name: "Sharon Hunt / Lamar Hunt Jr.", role: "co-owners", pct: null }
      ],
      institutionalInvestors: "None reported; closely held family asset",
      otherBusinessInterests: "Kansas City Chiefs (NFL), Hunt Realty Investments, oil & gas, Hunt Refining"
    },
    brand: {
      socialMedia: { instagram: "~270K", twitter: "~250K", facebook: "~440K" },
      merchandiseNotes: "Mid-tier MLS merchandise performer; strong reputation for academy/youth development brand even without trophy haul",
      internationalFanbase: "Strong Mexican-American fanbase in DFW; one of MLS's most diverse local supporter bases",
      notableSponsorships: ["Toyota (stadium)", "MTX Group (jersey)", "AT&T", "Frost Bank", "American Airlines"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Petar Musa — Croatian DP striker signed from Benfica 2024; $5M+ AAV; emerging franchise centerpiece",
      starContracts: [
        { player: "Petar Musa", position: "ST", aav: 5.5, contractNote: "Designated Player through 2027; club-record signing" },
        { player: "Asier Illarramendi", position: "DM", aav: 1.8, contractNote: "TAM/DP veteran from Real Sociedad" }
      ]
    },
    analystNotes: "FC Dallas's stagnant $500M valuation belies a long-term real-estate optionality story: the $182M Toyota Stadium overhaul is the first move in a $1.1-1.3B Frisco mixed-use district that materially expands the franchise's non-soccer cash flows. Hunt family ownership (also Chiefs) provides patient capital and operating sophistication. Risks include weak revenue per fan vs. coastal peers, on-field underperformance relative to academy production, and the long execution timeline on the Frisco district build-out."
  },

  "Houston Dynamo FC": {
    valuationHistory: [
      { year: 2019, value: 0.240, source: "Forbes" },
      { year: 2020, value: 0.280, source: "Forbes" },
      { year: 2021, value: 0.400, source: "Forbes / Segal acquisition" },
      { year: 2022, value: 0.490, source: "Forbes" },
      { year: 2023, value: 0.550, source: "Forbes" },
      { year: 2024, value: 0.700, source: "Forbes / 2024 Tim Howard minority transaction" },
    ],
    revenue: { estimate: 55, year: 2023, source: "Forbes", operatingIncome: -2 },
    transactions: [
      { year: 2006, price: 0.010, buyer: "Anschutz Entertainment Group / Brener International", seller: "MLS (relocation from San Jose)", notes: "Houston franchise was relocated from San Jose Earthquakes (operations transferred); rebranded as Dynamo for 2006 season" },
      { year: 2021, price: 0.400, buyer: "Ted Segal", seller: "Gabriel Brener / partners", notes: "Real estate investor Segal acquired majority stake in Dynamo + NWSL Dash + Shell Energy Stadium operating rights at ~$400M valuation; June 2021 closing" },
      { year: 2024, price: null, buyer: "Tim Howard + co-investors (minority stake)", seller: "Segal (partial dilution)", notes: "Former US national team goalkeeper Tim Howard joined Dynamo/Dash ownership group; transaction implied ~$700M overall enterprise valuation including NWSL club" }
    ],
    stadium: {
      name: "Shell Energy Stadium",
      yearBuilt: 2012,
      capacity: 22039,
      ownershipModel: "Houston Dynamo Holdings owns/operates; located in East Downtown Houston on land acquired with City of Houston/Harris County participation",
      teamOwnsLand: true,
      publicSubsidy: 35,
      privateFinancing: 60,
      namingRightsDeal: { sponsor: "Shell USA (was BBVA Compass through 2019, PNC Stadium 2021-2023)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Renamed Shell Energy Stadium in 2023; Shell HQ in Houston; multi-year deal value undisclosed" },
      nonGameRevenue: "Hosts NWSL Dash; concerts; new Regions Bank Club premium space + 15,000 sq ft suite product added 2023-24; rooftop solar / sustainability upgrades",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Local Spanish-language broadcast partnerships; selected matches outside Apple package",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Ted Segal (managing owner; via Houston Dynamo Holdings)",
      ownerNetWorth: "$500M+ est. (private)",
      ownerBackground: "Founder of NYC-based real-estate investment firm; acquired Dynamo from Brener/AEG-led group in 2021; has invested $30M+ in Shell Energy Stadium upgrades since",
      acquisitionYear: 2021,
      acquisitionPrice: 0.400,
      currentValuation: 0.700,
      impliedReturn: "~1.75x in 4 years (Segal-era)",
      ownershipGroup: [
        { name: "Ted Segal", role: "majority / governor", pct: null },
        { name: "Tim Howard", role: "minority + ambassador (added 2024)", pct: null },
        { name: "Mexican investor consortium (Brener legacy)", role: "minority", pct: null }
      ],
      institutionalInvestors: "PJT Partners hired by Segal Jan 2025 to explore NWSL Dash sale (~$120M)",
      otherBusinessInterests: "Real estate investment portfolio (private); NWSL Houston Dash"
    },
    brand: {
      socialMedia: { instagram: "~250K", twitter: "~210K", facebook: "~370K" },
      merchandiseNotes: "Strong Hispanic-market presence; orange kit recognition; mid-pack overall MLS merchandise performer",
      internationalFanbase: "Heavy Mexican fanbase given Houston's demographics; MLS's most Latino-tilted supporter base after LA Galaxy",
      notableSponsorships: ["Shell (stadium)", "MoneyGram (jersey)", "BBVA", "Memorial Hermann"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Sebastian Ferreira — Designated Player Paraguayan striker; club's record signing era",
      starContracts: [
        { player: "Sebastian Ferreira", position: "ST", aav: 3.5, contractNote: "Designated Player through 2025" },
        { player: "Héctor Herrera", position: "CM", aav: 5.5, contractNote: "Mexican international DP signed from Atletico Madrid" }
      ]
    },
    analystNotes: "Houston Dynamo's Segal-era story is a textbook MLS value-play: a $400M 2021 acquisition that has compounded ~75% on the back of stadium investment, brand reset, and the broader MLS Apple/Messi-era valuation surge. The 2024 Tim Howard transaction at ~$700M validates the trajectory. Risks include weak operating income (~-$2M margin on $55M revenue) and heavy concentration in a single Hispanic-immigrant market — but Houston's sustained population growth and a 2026 World Cup boost for the city offer near-term tailwinds."
  },

  "LA Galaxy": {
    valuationHistory: [
      { year: 2019, value: 0.480, source: "Forbes" },
      { year: 2020, value: 0.530, source: "Forbes" },
      { year: 2021, value: 0.685, source: "Forbes" },
      { year: 2022, value: 0.840, source: "Forbes" },
      { year: 2023, value: 0.925, source: "Forbes" },
      { year: 2024, value: 1.080, source: "Forbes / Sportico (5x MLS Cup record + 2024 champions)" },
    ],
    revenue: { estimate: 102, year: 2024, source: "Sportico/Forbes", operatingIncome: 8 },
    transactions: [
      { year: 1996, price: 0.005, buyer: "Anschutz Entertainment Group (AEG)", seller: "MLS (founding club)", notes: "AEG was MLS's largest founding investor — at one point operated 6 of 10 MLS teams to keep league afloat; LA Galaxy retained as flagship asset in single-entity restructuring" }
    ],
    stadium: {
      name: "Dignity Health Sports Park",
      yearBuilt: 2003,
      capacity: 27000,
      ownershipModel: "AEG owns and operates the entire 125-acre Carson, CA campus on land leased from California State University, Dominguez Hills (CSUDH); first soccer-specific MLS stadium",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 150,
      namingRightsDeal: { sponsor: "Dignity Health (CommonSpirit Health subsidiary)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Renamed from StubHub Center to Dignity Health Sports Park in 2019; multi-year deal; specific value undisclosed" },
      nonGameRevenue: "Major concert/event venue (AEG flagship); USTA tournaments; previously hosted LA Chargers (NFL) 2017-2019 during SoFi build; track & field events; high-margin asset for AEG even excluding Galaxy match days",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Spectrum SportsNet (Charter) regional broadcasts; selected matches outside Apple package",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Philip Anschutz / AEG (Anschutz Entertainment Group)",
      ownerNetWorth: "Anschutz: ~$11B (Forbes 2024)",
      ownerBackground: "Anschutz built fortune in oil/railroads/telecom; AEG is world's largest sports/live entertainment company (owns/operates 100+ venues including Crypto.com Arena, Coachella festival promoter, Lakers/Kings minority stakes); LA Galaxy is AEG's MLS flagship asset",
      acquisitionYear: 1996,
      acquisitionPrice: 0.005,
      currentValuation: 1.080,
      impliedReturn: "~216x over 30 years (~21% CAGR)",
      ownershipGroup: [
        { name: "Philip Anschutz", role: "owner / chairman", pct: null },
        { name: "AEG / Dan Beckerman (CEO)", role: "operating company", pct: null }
      ],
      institutionalInvestors: "AEG is privately held by Anschutz Co.; not externally raised",
      otherBusinessInterests: "AEG's ~100-venue entertainment portfolio; LA Kings (NHL); Coachella; The O2 (London); Crypto.com Arena operator; oil & gas; The Examiner / Weekly Standard publishing"
    },
    brand: {
      socialMedia: { instagram: "~1.5M", twitter: "~970K", facebook: "~3.2M" },
      merchandiseNotes: "Top-3 MLS merchandise franchise globally; Beckham-era (2007-2012) established international brand still leveraged today; Riqui Puig and Joseph Paintsil currency post-2024 MLS Cup",
      internationalFanbase: "Strongest MLS international brand outside Inter Miami; deep Mexico/Latin America presence; Beckham-era European recognition still resonates",
      notableSponsorships: ["Dignity Health (stadium)", "Herbalife (jersey 2007-2024 — record long-term MLS jersey deal)", "AEG-affiliated sponsors", "AT&T", "Spectrum"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Riqui Puig — Spanish DP attacking mid signed from Barcelona 2022; 2024 MLS Cup MVP; ~$1.5M base / $2.5M total",
      starContracts: [
        { player: "Riqui Puig", position: "AM", aav: 2.5, contractNote: "Designated Player through 2026; 2024 MLS Cup MVP" },
        { player: "Joseph Paintsil", position: "RW", aav: 4.2, contractNote: "Designated Player Ghanaian winger signed from Genk 2024" },
        { player: "Gabriel Pec", position: "LW", aav: 3.8, contractNote: "Designated Player Brazilian winger from Vasco da Gama" }
      ]
    },
    analystNotes: "LA Galaxy's $1.08B valuation places it solidly among MLS's three billion-dollar clubs and reflects 2024 MLS Cup glory plus the franchise's Beckham-era global brand still compounding. Revenue ($102M) trails only LAFC, Inter Miami, and Atlanta. Structural risk: AEG owns the stadium directly so non-match-day economics flow to Anschutz Co., not the team P&L — meaning Galaxy operating margins look thinner than they would under a team-owned-stadium model. The $216x return on AEG's 1996 entry is the textbook MLS founding-club outcome."
  },

  "Los Angeles FC": {
    valuationHistory: [
      { year: 2019, value: 0.475, source: "Forbes" },
      { year: 2020, value: 0.625, source: "Forbes" },
      { year: 2021, value: 0.860, source: "Forbes" },
      { year: 2022, value: 0.965, source: "Forbes" },
      { year: 2023, value: 1.150, source: "Forbes (first MLS team to cross $1B in Forbes/Sportico)" },
      { year: 2024, value: 1.320, source: "Sportico May 2025; Joe Tsai exit Q1 2026 implied $1.25B for full club" },
    ],
    revenue: { estimate: 167, year: 2024, source: "Sportico/Forbes (highest MLS revenue)", operatingIncome: 14 },
    transactions: [
      { year: 2014, price: 0.110, buyer: "LAFC ownership consortium (Bennett Rosenthal / Larry Berg / Brandon Beck and ~25 partners)", seller: "MLS (expansion)", notes: "LAFC awarded as MLS expansion franchise in 2014 to replace Chivas USA in Los Angeles market; expansion fee ~$110M; began play 2018" },
      { year: 2026, price: null, buyer: "Carlos Vela (former LAFC star; minority entry) + ownership reshuffle", seller: "Joe Tsai (Alibaba co-founder; full exit)", notes: "Q1 2026 transaction valued LAFC at ~$1.25B; Vela became first former player to take LAFC ownership stake; Tsai exited entirely to focus on Brooklyn Nets/NWSL stake" }
    ],
    stadium: {
      name: "BMO Stadium",
      yearBuilt: 2018,
      capacity: 22000,
      ownershipModel: "LAFC privately funded entire $350M stadium construction on leased land at California State University, Los Angeles' Exposition Park campus; team controls all venue operations and sponsorship inventory",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 350,
      namingRightsDeal: { sponsor: "BMO (Bank of Montreal)", annualValue_M: 10, totalValue_M: 100, expiryYear: 2032, notes: "10-year deal renewed 2023 — at $10M/yr it is the largest naming rights deal in MLS history for a soccer-specific stadium; previously Banc of California Stadium" },
      nonGameRevenue: "Concerts (Coldplay, Bad Bunny etc.); NWSL Angel City FC co-tenant (LAFC took ownership stake in Angel City 2024); high-margin event venue in dense LA market",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Spanish-language broadcasts via TUDN; selected matches outside Apple package",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Bennett Rosenthal (lead managing owner) / Larry Berg / Brandon Beck (co-managing owners)",
      ownerNetWorth: "Combined ownership group net worth $5B+ (multiple HNW partners)",
      ownerBackground: "Rosenthal: co-founder Ares Management ($350B+ AUM private credit/equity firm); Berg: senior partner Ares; Beck: co-founder Riot Games (League of Legends); celebrity-heavy partner roster designed for cultural brand-building from inception",
      acquisitionYear: 2014,
      acquisitionPrice: 0.110,
      currentValuation: 1.320,
      impliedReturn: "~12x in 12 years (~23% CAGR)",
      ownershipGroup: [
        { name: "Bennett Rosenthal", role: "lead managing owner / governor", pct: null },
        { name: "Larry Berg", role: "co-managing owner", pct: null },
        { name: "Brandon Beck", role: "co-managing owner / president", pct: null },
        { name: "Will Ferrell", role: "celebrity owner / brand", pct: null },
        { name: "Magic Johnson", role: "minority owner", pct: null },
        { name: "Mia Hamm / Nomar Garciaparra", role: "minority owners", pct: null },
        { name: "Giorgio Chiellini", role: "former player turned minority", pct: null },
        { name: "Carlos Vela", role: "minority (added 2026)", pct: null }
      ],
      institutionalInvestors: "Ares Management partners broadly represented in LP roster; multiple HNW families",
      otherBusinessInterests: "NWSL Angel City FC (LAFC took ~10% stake 2024); Riot Games (Beck); Ares Management (Rosenthal/Berg)"
    },
    brand: {
      socialMedia: { instagram: "~1.4M", twitter: "~620K", facebook: "~880K" },
      merchandiseNotes: "Top-tier MLS merchandise performance; black-and-gold kit recognition has international currency; 3252 supporters group reputation drives premium local sales",
      internationalFanbase: "Strong Mexico/Latin America fanbase given LA market + Mexican-American DPs (Vela, Cifuentes, etc.); growing European recognition through Chiellini",
      notableSponsorships: ["BMO (stadium)", "Best Buy (jersey)", "YouTube TV", "Heineken", "Adidas (kit)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 5,
      currentFranchisePlayer: "Denis Bouanga — French-Gabonese DP winger; 18+ goals/season; ~$3M base / $4.5M total",
      starContracts: [
        { player: "Denis Bouanga", position: "LW/CF", aav: 4.5, contractNote: "Designated Player through 2026; one of MLS's top scorers" },
        { player: "Hugo Lloris", position: "GK", aav: 3.0, contractNote: "Former France/Tottenham captain; signed 2024 as DP" },
        { player: "Olivier Giroud", position: "CF", aav: 3.5, contractNote: "DP signed 2024; departed 2025 — replaced by Son Heung-min" },
        { player: "Son Heung-min", position: "LW/CF", aav: 11.0, contractNote: "Designated Player signed 2025 from Tottenham; record MLS DP salary at signing" }
      ]
    },
    analystNotes: "LAFC is the MLS premium-brand template: a $110M expansion entry compounded into $1.32B in 12 years (~23% CAGR) by combining a privately financed stadium, MLS-record naming deal ($10M/yr BMO), elite ownership network, and an aggressive Designated Player roster. Revenue of $167M leads MLS, and the 2025 Son Heung-min signing at record DP salary further raises the franchise's global profile ahead of 2026 World Cup. Risk centers on player-cost compression: the LAFC roster is approaching $40M+ in DP/TAM costs, and Apple TV national share growth is needed to keep margins stable. Joe Tsai's 2026 exit signals natural ownership rotation rather than concern."
  },

  "Minnesota United FC": {
    valuationHistory: [
      { year: 2019, value: 0.220, source: "Forbes" },
      { year: 2020, value: 0.265, source: "Forbes" },
      { year: 2021, value: 0.345, source: "Forbes" },
      { year: 2022, value: 0.420, source: "Forbes" },
      { year: 2023, value: 0.470, source: "Forbes" },
      { year: 2024, value: 0.520, source: "Forbes" },
    ],
    revenue: { estimate: 60, year: 2023, source: "Forbes", operatingIncome: -3 },
    transactions: [
      { year: 2015, price: 0.100, buyer: "Bill McGuire (Minnesota United Soccer Holdings)", seller: "MLS (expansion)", notes: "McGuire's group acquired MLS expansion rights; original Minnesota United was NASL franchise that McGuire bought in 2012; transitioned to MLS for 2017 season" }
    ],
    stadium: {
      name: "Allianz Field",
      yearBuilt: 2019,
      capacity: 19400,
      ownershipModel: "Minnesota United Soccer Holdings owns/operates; built on St. Paul Midway redevelopment site; McGuire personally also owns surrounding land for hotel/mixed-use development",
      teamOwnsLand: true,
      publicSubsidy: 18,
      privateFinancing: 232,
      namingRightsDeal: { sponsor: "Allianz SE (German insurance/financial group)", annualValue_M: 4, totalValue_M: null, expiryYear: null, notes: "Long-term naming rights from 2018; Allianz also Bayern Munich and Juventus stadium sponsor — global soccer brand portfolio" },
      nonGameRevenue: "Concerts; college soccer events; McGuire-owned $54M land bank around stadium for hotel/mixed-use development still in planning",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "Bally Sports North (selected matches outside Apple package); RSN distribution disrupted by Diamond Sports bankruptcy",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Dr. Bill McGuire (Minnesota United Soccer Holdings)",
      ownerNetWorth: "$1.2B+ est.",
      ownerBackground: "Former CEO UnitedHealth Group (1991-2006); resigned in stock-options backdating scandal but has remained a major Minneapolis civic investor; physician by training; aggressive art collector and philanthropist; one of the most engaged owners in MLS",
      acquisitionYear: 2012,
      acquisitionPrice: 0.020,
      currentValuation: 0.520,
      impliedReturn: "~26x in 13 years (~28% CAGR)",
      ownershipGroup: [
        { name: "Bill McGuire", role: "majority / governor", pct: null },
        { name: "Pohlad family (MN Twins owners)", role: "minority", pct: null },
        { name: "Glen Taylor (former MN Timberwolves)", role: "minority", pct: null },
        { name: "Wendy Carlson Nelson (Carlson hospitality)", role: "minority", pct: null }
      ],
      institutionalInvestors: "None reported; Minnesota-business consortium structure",
      otherBusinessInterests: "Personal real-estate around Allianz Field; art collection; venture investments"
    },
    brand: {
      socialMedia: { instagram: "~210K", twitter: "~210K", facebook: "~280K" },
      merchandiseNotes: "Mid-tier MLS merchandise; loyal local supporter culture in Twin Cities market; Loon mascot/branding has cult following",
      internationalFanbase: "Modest; Latino fanbase building but Twin Cities is less Hispanic-tilted than peer MLS markets",
      notableSponsorships: ["Allianz (stadium)", "Target (jersey)", "Securian Financial", "U.S. Bank"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Robin Lod — Finnish attacking mid; long-tenured franchise figure; ~$1.5M total",
      starContracts: [
        { player: "Kelvin Yeboah", position: "ST", aav: 2.5, contractNote: "Designated Player Ghanaian-Italian forward signed from Genoa 2024" },
        { player: "Joaquín Pereyra", position: "AM", aav: 1.8, contractNote: "Argentine attacking mid; TAM/DP-level deal" }
      ]
    },
    analystNotes: "Minnesota United is the patient, civic-investor MLS model: McGuire's $20M 2012 NASL/MLS entry has compounded ~26x to $520M, anchored by team-owned Allianz Field and a strong Twin Cities ownership consortium (Pohlads/Taylor/Carlson). The franchise has been consistently competitive (4 of last 5 playoff appearances) but lacks the international DP star power needed to break into MLS's top valuation tier. Major upside catalyst is McGuire's adjacent land bank — if mixed-use development around Allianz Field executes, Minnesota could be a top-15 MLS asset by decade-end."
  },

  "Portland Timbers": {
    valuationHistory: [
      { year: 2019, value: 0.275, source: "Forbes" },
      { year: 2020, value: 0.295, source: "Forbes" },
      { year: 2021, value: 0.395, source: "Forbes" },
      { year: 2022, value: 0.580, source: "Forbes" },
      { year: 2023, value: 0.635, source: "Forbes" },
      { year: 2024, value: 0.685, source: "Forbes" },
    ],
    revenue: { estimate: 65, year: 2023, source: "Forbes", operatingIncome: 1 },
    transactions: [
      { year: 2009, price: 0.040, buyer: "Merritt Paulson / Peregrine Sports LLC", seller: "MLS (expansion)", notes: "Paulson's Peregrine Sports awarded MLS expansion rights in 2009; began play 2011; expansion fee ~$40M; same group also owned NWSL Portland Thorns and previously Triple-A Beavers (since sold)" },
      { year: 2024, price: 0.063, buyer: "Bhathal family (Southern California)", seller: "Merritt Paulson", notes: "Paulson sold NWSL Portland Thorns to Bhathal family for $63M (NWSL record at time) in January 2024 — kept Timbers; transaction triggered by post-NWSL fallout but separate from Timbers operations" }
    ],
    stadium: {
      name: "Providence Park",
      yearBuilt: 1926,
      capacity: 25218,
      ownershipModel: "City of Portland owns the land; Peregrine Sports operates under long-term lease; team funded all major renovations 2011-present",
      teamOwnsLand: false,
      publicSubsidy: 11,
      privateFinancing: 130,
      namingRightsDeal: { sponsor: "Providence Health & Services", annualValue_M: 1.5, totalValue_M: null, expiryYear: null, notes: "Long-term deal from 2014; modest annual value reflecting smaller-market dynamics" },
      nonGameRevenue: "Hosts Portland State football (Vikings) and other community events; renowned for atmosphere/Timbers Army supporters but limited scale for premium events",
      newStadiumPlans: "$85M east-side expansion completed 2019 added 4,000 seats; further expansion limited by site footprint"
    },
    media: {
      localTVDeal: "Local broadcast partnerships outside Apple package; KPDX (Fox affiliate) has historic relationship",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Merritt Paulson (Peregrine Sports LLC; majority)",
      ownerNetWorth: "$200M+ est.",
      ownerBackground: "Son of former US Treasury Secretary Hank Paulson; previously CEO of NBA's Portland Trail Blazers business operations and minor-league baseball; bought Triple-A Beavers in 2007 (later sold) and Timbers/Thorns in 2009; stepped back from day-to-day operations in 2023 following NWSL investigation findings, hired Heather Davis as CEO Jan 2025",
      acquisitionYear: 2009,
      acquisitionPrice: 0.040,
      currentValuation: 0.685,
      impliedReturn: "~17x in 16 years (~19% CAGR), excluding Thorns sale proceeds",
      ownershipGroup: [
        { name: "Merritt Paulson", role: "majority / owner", pct: null },
        { name: "Hank Paulson family", role: "minority / family financial backing", pct: null }
      ],
      institutionalInvestors: "None public; closely held",
      otherBusinessInterests: "Peregrine Sports portfolio; Paulson family investments; previously Portland Thorns (NWSL, sold Jan 2024 for $63M)"
    },
    brand: {
      socialMedia: { instagram: "~360K", twitter: "~290K", facebook: "~480K" },
      merchandiseNotes: "Top-quartile MLS merchandise; Timbers Army supporter culture is one of MLS's most iconic; green-and-gold colors and chainsaw goal celebration drive premium pricing",
      internationalFanbase: "Modest in absolute terms but cult-followed in US/Canada soccer culture; Timbers Army has become a brand template referenced by other MLS supporters groups",
      notableSponsorships: ["Providence Health (stadium)", "Alaska Airlines (jersey)", "Toyota", "Adidas (kit)"]
    },
    onField: {
      championshipsLast10Years: 1,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Evander — Brazilian DP attacking mid signed from FC Midtjylland 2023; club-record signing era",
      starContracts: [
        { player: "Evander", position: "AM", aav: 3.5, contractNote: "Designated Player; club-record signing; led Timbers in goals + assists 2024" },
        { player: "Diego Chara", position: "DM", aav: 1.5, contractNote: "Longtime franchise figure since 2011; near end of career" },
        { player: "Felipe Mora", position: "ST", aav: 2.0, contractNote: "Chilean DP striker through 2026" }
      ]
    },
    analystNotes: "Portland is MLS's gold standard for sustained fan engagement: the Timbers Army supporter culture commands premium pricing despite a small-market metro and a 99-year-old stadium with limited expansion capacity. The 2015 MLS Cup remains the franchise's signature win. Merritt Paulson's $40M 2009 entry has compounded ~17x to $685M. Risks include Paulson family reputational overhang from the 2022 NWSL investigation (resolved via Thorns sale and CEO transition Jan 2025) and the Providence Park footprint constraint that caps top-line growth — Portland is unlikely to break into MLS's top-10 valuation tier without a major new venue or development project."
  },

"Real Salt Lake": {
    valuationHistory: [
      { year: 2019, value: 0.235, source: "Forbes" },
      { year: 2020, value: 0.27,  source: "Forbes" },
      { year: 2021, value: 0.32,  source: "Forbes" },
      { year: 2022, value: 0.40,  source: "Forbes / 2022 sale implied" },
      { year: 2023, value: 0.50,  source: "Forbes" },
      { year: 2024, value: 0.58,  source: "Forbes" },
    ],
    revenue: { estimate: 56, year: 2023, source: "Forbes", operatingIncome: 4 },
    transactions: [
      { year: 2013, price: 0.075, buyer: "Dell Loy Hansen", seller: "Dave Checketts", notes: "Hansen, Salt Lake City real estate developer (Wasatch Property Management), bought from team founder Checketts; Hansen later forced to sell after 2020 racism allegations" },
      { year: 2022, price: 0.400, buyer: "Smith Entertainment Group (Ryan Smith) + David Blitzer", seller: "Dell Loy Hansen", notes: "MLS-approved sale Jan 2022 totaling ~$400M for the bundle: RSL + America First Field + Real Monarchs (USL) + Zions Bank Stadium training facility; Blitzer named Governor; Arctos Sports Partners minority limited partner; Smith group also owns NBA Utah Jazz" }
    ],
    stadium: {
      name: "America First Field",
      yearBuilt: 2008,
      capacity: 20213,
      ownershipModel: "team-owned / SEG-owned; located in Sandy, Utah on team-owned land; renamed from Rio Tinto Stadium to America First Field in March 2022",
      teamOwnsLand: true,
      publicSubsidy: 35,
      privateFinancing: 80,
      namingRightsDeal: { sponsor: "America First Credit Union", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "15-year deal signed March 2022 replacing Rio Tinto naming; financial terms undisclosed but reported in $25-40M range over term" },
      nonGameRevenue: "Hosts concerts, USL matches (Real Monarchs), high school playoffs, USA Rugby; fully owned facility allows team to capture 100% of non-MLS event economics",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "KMYU/KJZZ-TV (Sinclair) regional broadcast partner for select matches not on Apple",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Smith Entertainment Group (Ryan Smith) + David Blitzer",
      ownerNetWorth: "Smith ~$2B (Qualtrics co-founder); Blitzer multi-billionaire (Blackstone senior MD)",
      ownerBackground: "SEG/Blitzer acquired Jan 2022 for ~$400M; Blitzer also has stakes in 76ers (NBA), Devils (NHL), Crystal Palace (EPL), Pelicans, plus Cleveland Guardians; Smith founded Qualtrics (sold to SAP for $8B in 2018), also owns Utah Jazz and Utah Hockey Club",
      acquisitionYear: 2022,
      acquisitionPrice: 0.4,
      currentValuation: 0.58,
      impliedReturn: "~45% in 2 years on team-only attribution",
      ownershipGroup: [
        { name: "David Blitzer", role: "majority / Governor", pct: null },
        { name: "Smith Entertainment Group (Ryan Smith)", role: "majority / alternate Governor", pct: null },
        { name: "Arctos Sports Partners", role: "institutional minority LP", pct: null },
        { name: "Dwyane Wade", role: "minority investor", pct: null }
      ],
      institutionalInvestors: "Arctos Sports Partners (sports-focused PE)",
      otherBusinessInterests: "Blitzer: Harris Blitzer Sports & Entertainment (76ers, Devils), Crystal Palace EPL minority, Cleveland Guardians; Smith: Utah Jazz, Utah Hockey Club, Qualtrics legacy"
    },
    brand: {
      socialMedia: { instagram: "~280K", twitter: "~280K", facebook: "~660K" },
      merchandiseNotes: "Mid-tier MLS merchandise; brand modernized post-2022 acquisition with new crest direction; Real Monarchs USL2 affiliate adds youth pipeline",
      internationalFanbase: "Limited international following beyond expat Utah communities; Latino fan base in Salt Lake metro",
      notableSponsorships: ["America First Credit Union (stadium)", "LiveView Technologies (jersey)", "Megaplex Theatres", "Smith's Food and Drug"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Cristian 'Chicho' Arango — Designated Player, Colombian forward, $2-3M AAV (estimated)",
      starContracts: [
        { player: "Cristian Arango", position: "Forward", aav: 2.5, contractNote: "Designated Player; signed 2024 from LAFC; Colombian international" },
        { player: "Diego Luna", position: "Midfielder", aav: 1.2, contractNote: "Young Designated Player; US international; homegrown system product" }
      ]
    },
    analystNotes: "Real Salt Lake represents the cleanest recent MLS comp for a small-market acquisition: SEG/Blitzer paid ~$400M for the full bundle in 2022 and has watched valuations rise ~45% as MLS-Apple deal validated league-wide media revenue floors. America First Field ownership is the franchise's structural advantage, capturing concert/event economics that BC Place-style tenants cannot. The 2022 sale price is the most recent data point for sub-top-tier MLS franchise valuation, and Blitzer's institutional ownership network (HBSE) provides operational sophistication beyond what Hansen's local ownership offered."
  },

  "San Diego FC": {
    valuationHistory: [
      { year: 2023, value: 0.50,  source: "Implied by $500M expansion fee" },
      { year: 2024, value: 0.55,  source: "Sportico estimate pre-launch" },
      { year: 2025, value: 0.85,  source: "Sportico" },
    ],
    revenue: { estimate: 50, year: 2025, source: "Sportico estimate inaugural year", operatingIncome: -10 },
    transactions: [
      { year: 2023, price: 0.500, buyer: "Mohamed Mansour + Sycuan Band of the Kumeyaay Nation", seller: "Major League Soccer (expansion grant)", notes: "MLS announced expansion award May 18, 2023 at Snapdragon Stadium; $500M expansion fee — record at the time; Manny Machado (Padres SS) joined as minority investor; first MLS team with majority Native American tribal ownership; began play 2025" }
    ],
    stadium: {
      name: "Snapdragon Stadium",
      yearBuilt: 2022,
      capacity: 35000,
      ownershipModel: "owned by San Diego State University (built on former SDCCU/Qualcomm Stadium site); SDFC is anchor tenant alongside SDSU football and other events; team does not own venue",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 310,
      namingRightsDeal: { sponsor: "Snapdragon (Qualcomm)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Naming rights paid to SDSU; SDFC does not capture stadium naming revenue" },
      nonGameRevenue: "Limited — tenant arrangement with SDSU caps non-matchday upside; concert/event revenue accrues primarily to SDSU",
      newStadiumPlans: "Long-term ambition of soccer-specific venue under discussion but no announced plans"
    },
    media: {
      localTVDeal: "Limited local TV — most matches on Apple TV+ MLS Season Pass; selective broadcast partnerships",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Mohamed Mansour (Mansour Group, British-Egyptian)",
      ownerNetWorth: "Mansour ~$3B+ (Mansour Group conglomerate — automotive, consumer goods, real estate)",
      ownerBackground: "Mohamed Mansour is chairman of Mansour Group, multi-generational Egyptian business empire spanning auto distribution (GM Egypt), Caterpillar, Coca-Cola bottling; former Egyptian Minister of Transport; UK-based and Conservative Party donor; first non-North American MLS principal owner; partnered with Sycuan Tribe (federally recognized Kumeyaay Nation, owners of Sycuan Casino Resort) — first MLS team with majority tribal ownership",
      acquisitionYear: 2023,
      acquisitionPrice: 0.5,
      currentValuation: 0.85,
      impliedReturn: "~70% in 2 years (driven by Lozano signing, Western Conference title 2025)",
      ownershipGroup: [
        { name: "Mohamed Mansour / Mansour Group", role: "managing partner / Chairman", pct: null },
        { name: "Sycuan Band of the Kumeyaay Nation", role: "co-owner / strategic partner", pct: null },
        { name: "Manny Machado", role: "minority investor", pct: null },
        { name: "Tom Vernon (Right to Dream Academy founder)", role: "minority / sporting director architect", pct: null }
      ],
      institutionalInvestors: "Mansour Group corporate vehicle; Sycuan tribal sovereign wealth",
      otherBusinessInterests: "Mansour Group: GM Egypt (largest automotive distributor in Egypt), Caterpillar dealer, Mantrac, Right to Dream global academy network; Sycuan: Sycuan Casino Resort (one of largest tribal casinos in California)"
    },
    brand: {
      socialMedia: { instagram: "~140K", twitter: "~50K", facebook: "~80K" },
      merchandiseNotes: "Strong inaugural-season merchandise sales driven by Lozano signing and Western Conference title; expansion-team novelty premium; tied into Right to Dream global academy brand",
      internationalFanbase: "Cross-border Mexico fanbase critical (San Diego-Tijuana metro); Lozano signing leverages Mexican market; Right to Dream connection provides African and Danish supporter networks",
      notableSponsorships: ["Snapdragon (stadium, via SDSU)", "Sycuan Casino Resort (jersey)", "United Airlines"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Hirving 'Chucky' Lozano — Designated Player, Mexican international, ~$8M AAV",
      starContracts: [
        { player: "Hirving 'Chucky' Lozano", position: "Forward / Winger", aav: 8.0, contractNote: "Designated Player; signed 2024 from PSV Eindhoven; Mexican national team star — anchor of cross-border marketing strategy" },
        { player: "Onni Valakari", position: "Midfielder", aav: 1.5, contractNote: "Designated Player; Finnish international; signed from Pafos FC" }
      ]
    },
    analystNotes: "San Diego FC is the most successful MLS expansion launch in modern league history — $500M expansion fee instantly validated by inaugural-season Western Conference title (63 points, league-record for expansion sides) and Lozano-led cross-border commercial strategy. The structural disadvantage is Snapdragon Stadium tenancy: SDSU controls the building, capping non-matchday revenue and naming-rights capture. The Mansour-Sycuan partnership uniquely combines global commercial sophistication with deep local political/economic standing, and the Right to Dream affiliation gives the club a global youth pipeline most MLS clubs cannot match."
  },

  "San Jose Earthquakes": {
    valuationHistory: [
      { year: 2019, value: 0.30,  source: "Forbes" },
      { year: 2020, value: 0.31,  source: "Forbes" },
      { year: 2021, value: 0.345, source: "Forbes" },
      { year: 2022, value: 0.40,  source: "Forbes" },
      { year: 2023, value: 0.50,  source: "Forbes" },
      { year: 2024, value: 0.54,  source: "Forbes" },
    ],
    revenue: { estimate: 48, year: 2023, source: "Forbes", operatingIncome: -8 },
    transactions: [
      { year: 2008, price: 0.020, buyer: "Earthquakes Soccer LLC (John Fisher / Lew Wolff)", seller: "MLS (re-expansion)", notes: "Original Earthquakes franchise had moved to Houston (Dynamo) in 2005; Fisher and Wolff acquired re-expansion rights and began play in 2008; Wolff later exited" },
      { year: 2025, price: null, buyer: "TBD (sale process active)", seller: "John Fisher", notes: "Fisher hired Moelis & Co. June 2025 to facilitate sale of controlling stake; club valuation in $540M-$600M range per Forbes/Sportico; sale ongoing as of 2025" }
    ],
    stadium: {
      name: "PayPal Park",
      yearBuilt: 2015,
      capacity: 18000,
      ownershipModel: "team-owned (Earthquakes ownership), built on land leased from city of San Jose; soccer-specific stadium; also serves as home of Bay FC (NWSL) since 2024",
      teamOwnsLand: false,
      publicSubsidy: 0,
      privateFinancing: 100,
      namingRightsDeal: { sponsor: "PayPal", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Multi-year naming rights deal with San Jose-headquartered PayPal; financial terms undisclosed; renamed from Avaya Stadium in 2021" },
      nonGameRevenue: "Concerts, NWSL home matches (Bay FC), USL2 affiliate; modest non-MLS event slate",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "NBC Sports California regional partner for select matches not on Apple",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "John Fisher (currently selling)",
      ownerNetWorth: "~$3B (Forbes) — Gap Inc. heir",
      ownerBackground: "John Fisher inherited stake in Gap Inc. (parents Donald and Doris Fisher founded the retailer); also majority owner of Oakland/Sacramento/Las Vegas Athletics MLB; principal Earthquakes owner since 2008; announced sale process June 2025 via Moelis & Co.",
      acquisitionYear: 2008,
      acquisitionPrice: 0.02,
      currentValuation: 0.54,
      impliedReturn: "~27x in 17 years (~21% CAGR) — but franchise has been operationally distressed",
      ownershipGroup: [
        { name: "John Fisher", role: "majority / selling", pct: null },
        { name: "Lew Wolff", role: "former co-owner (exited)", pct: null }
      ],
      institutionalInvestors: "None publicly disclosed",
      otherBusinessInterests: "Athletics MLB (relocating Oakland → Sacramento → Las Vegas); Pisco Trail Capital; Gap Inc. legacy stake"
    },
    brand: {
      socialMedia: { instagram: "~200K", twitter: "~250K", facebook: "~530K" },
      merchandiseNotes: "Below-tier MLS merchandise performer; brand has stagnated under Fisher era; Bay Area soccer market increasingly dominated by USMNT/Mexico interest rather than club fandom",
      internationalFanbase: "Modest Mexican-American fanbase in Bay Area; limited international following",
      notableSponsorships: ["PayPal (stadium)", "Sutter Health (jersey)", "Visit San Jose"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Cristian 'Chicho' Espinoza — Designated Player, Argentine winger, ~$2.5M AAV",
      starContracts: [
        { player: "Cristian Espinoza", position: "Winger", aav: 2.5, contractNote: "Designated Player; longtime Quakes star; Argentine playmaker" },
        { player: "Hernán López Muñoz", position: "Midfielder", aav: 2.0, contractNote: "Designated Player; signed 2024 from River Plate; Argentine youth international" }
      ]
    },
    analystNotes: "San Jose Earthquakes is the test case for a structurally disadvantaged MLS franchise: Bay Area sports market is over-served (49ers, Warriors, Giants, A's history, Sharks, Bay FC) and Earthquakes lack the geographic moat or commercial differentiation to compete. Fisher's June 2025 sale announcement at $540-600M Sportico/Forbes valuations would represent a massive multiple on his $20M 2008 entry, but the franchise has run operating losses for years and lacks the global brand or marquee DP signings that drive top-tier MLS valuations. The eventual buyer's challenge is whether the Bay Area can support a third soccer team or whether deeper investment in playing talent can grow the matchday economics from PayPal Park's 18,000-seat capacity."
  },

  "Seattle Sounders FC": {
    valuationHistory: [
      { year: 2019, value: 0.32,  source: "Forbes" },
      { year: 2020, value: 0.35,  source: "Forbes" },
      { year: 2021, value: 0.40,  source: "Forbes" },
      { year: 2022, value: 0.535, source: "Forbes" },
      { year: 2023, value: 0.65,  source: "Forbes" },
      { year: 2024, value: 0.825, source: "Sportico" },
    ],
    revenue: { estimate: 95, year: 2023, source: "Forbes", operatingIncome: 12 },
    transactions: [
      { year: 2007, price: 0.030, buyer: "Adrian Hanauer / Joe Roth / Drew Carey / Paul Allen", seller: "MLS (expansion grant)", notes: "Sounders began MLS play 2009; expansion fee ~$30M; Joe Roth (Hollywood producer) initially led group with Hanauer (CEO) and Carey (celebrity face); Allen estate exited after his 2018 death" },
      { year: 2015, price: null, buyer: "Adrian Hanauer (control)", seller: "Joe Roth (majority sale)", notes: "Hanauer assumed majority/managing ownership from Roth; Roth retained minority stake" },
      { year: 2025, price: null, buyer: "TBD (capital raise process active)", seller: "n/a (new minority partner sought)", notes: "Sounders engaged Moelis & Co. October 2025 to explore first major stake sale since 2009; targeting strategic minority partner to fund Longacres new stadium development; Sportico valuation $825M" }
    ],
    stadium: {
      name: "Lumen Field",
      yearBuilt: 2002,
      capacity: 37722,
      ownershipModel: "owned by Washington State Public Stadium Authority; Sounders are tenants; venue shared with NFL Seahawks and NWSL Reign FC; team capacity capped at ~37,722 in soccer config but expandable to 69,000+ for big matches",
      teamOwnsLand: false,
      publicSubsidy: 300,
      privateFinancing: 130,
      namingRightsDeal: { sponsor: "Lumen Technologies (CenturyLink)", annualValue_M: 8, totalValue_M: 169, expiryYear: 2033, notes: "20-year deal originally with Qwest 2004, renewed/renamed to CenturyLink Field then Lumen Field 2020; ~$169M total estimated; revenue accrues to stadium authority/Seahawks not Sounders" },
      nonGameRevenue: "Limited Sounders capture — Lumen is Seahawks-controlled; Sounders earn matchday concessions but not stadium revenue; Reign FC also tenant",
      newStadiumPlans: "Sounders exploring soccer-specific stadium at Longacres development site (Renton, WA); current Lumen lease expires 2032; capital raise specifically to fund this project"
    },
    media: {
      localTVDeal: "Local broadcast rights via Apple-MLS deal exclusively for matches; pre-Apple deal had local KING-TV partnership",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Adrian Hanauer (majority / managing owner)",
      ownerNetWorth: "Hanauer ~$200M est. (MLS investments, family wealth)",
      ownerBackground: "Hanauer led original 2007 MLS expansion bid; assumed majority ownership 2015 from Joe Roth; one of MLS's most operationally engaged owners (also Sounders GM 2008-2014); group expanded over years with celebrity and tech minority owners",
      acquisitionYear: 2015,
      acquisitionPrice: null,
      currentValuation: 0.825,
      impliedReturn: "Group's 2007 $30M expansion entry to $825M Sportico valuation = ~27x over 17 years (~21% CAGR)",
      ownershipGroup: [
        { name: "Adrian Hanauer", role: "majority / managing owner", pct: null },
        { name: "Joe Roth", role: "minority / former chairman", pct: null },
        { name: "Drew Carey", role: "minority / brand ambassador", pct: null },
        { name: "Russell Wilson + Ciara", role: "minority owners (joined 2019)", pct: null },
        { name: "Macklemore", role: "minority owner", pct: null },
        { name: "Satya Nadella (Microsoft CEO)", role: "minority owner", pct: null },
        { name: "Ken Griffey Jr.", role: "minority owner", pct: null },
        { name: "Bezos/Wright/Nordstrom-related families", role: "minority partner families", pct: null }
      ],
      institutionalInvestors: "None disclosed; 2025 Moelis-led raise specifically targeting institutional/strategic minority partner",
      otherBusinessInterests: "Hanauer family: Pacific Coast Feather Co. (legacy textile business), various venture investments; Wilson: NFL Broncos QB; Nadella: Microsoft CEO (also Cricket Sounders Reign-adjacent investments)"
    },
    brand: {
      socialMedia: { instagram: "~660K", twitter: "~620K", facebook: "~1.1M" },
      merchandiseNotes: "Top-tier MLS merchandise performer; consistent average-attendance leader since 2009 entry; Sounders FC brand is among MLS's strongest with deep local cultural integration; recent star deficit (post-Ruidíaz) has muted some of the merchandise momentum",
      internationalFanbase: "Strong PNW Cascadia rivalry following; Latino fanbase across King County; modest international footprint via 2022 CONCACAF Champions League title",
      notableSponsorships: ["Microsoft (jersey)", "Lumen (regional)", "Alaska Airlines", "Symetra"]
    },
    onField: {
      championshipsLast10Years: 2,
      playoffAppearancesLast5Years: 4,
      currentFranchisePlayer: "Albert Rusnák — Designated Player, Slovak attacking midfielder, ~$3M AAV",
      starContracts: [
        { player: "Albert Rusnák", position: "Attacking Midfielder", aav: 3.0, contractNote: "Designated Player; signed 2022 from RSL on free transfer" },
        { player: "Cristian Roldan", position: "Midfielder", aav: 2.0, contractNote: "TAM contract; US international; longtime franchise stalwart" },
        { player: "Pedro de la Vega", position: "Winger", aav: 2.5, contractNote: "Young Designated Player; signed 2024 from Lanús (Argentina)" }
      ]
    },
    analystNotes: "Seattle Sounders is the most operationally mature non-MLS-cup-dynasty franchise in the league: 2 MLS Cups (2016, 2019), 2022 CONCACAF Champions League title (only MLS team ever), and consistent 30K+ attendance for 17 seasons. The 2025 Moelis-led capital raise at $825M Sportico valuation is structured around the Longacres new-stadium project — exiting Lumen tenancy is the single highest-ROI move available to the franchise, since the current arrangement caps non-matchday revenue and naming-rights capture. The Hanauer-led broad ownership coalition (Wilson, Nadella, Macklemore, Griffey) provides cultural reach but has limited institutional capital depth, making a strategic PE/sports-fund minority partner the natural next step."
  },

  "Sporting Kansas City": {
    valuationHistory: [
      { year: 2019, value: 0.27,  source: "Forbes" },
      { year: 2020, value: 0.295, source: "Forbes" },
      { year: 2021, value: 0.34,  source: "Forbes" },
      { year: 2022, value: 0.40,  source: "Forbes" },
      { year: 2023, value: 0.58,  source: "Forbes" },
      { year: 2024, value: 0.65,  source: "Forbes; validated by 2025 $700M majority-stake transaction" },
    ],
    revenue: { estimate: 65, year: 2023, source: "Forbes", operatingIncome: 6 },
    transactions: [
      { year: 2006, price: 0.015, buyer: "OnGoal LLC (Cliff Illig, Neal Patterson, Pat Curran, Greg Maday, Robb Heineman)", seller: "Lamar Hunt family (MLS founder estate)", notes: "Wizards franchise sold by Hunt family to local Kansas City ownership group; Cerner Corp. co-founders Patterson and Illig led group; rebranded as Sporting Kansas City in 2010 with new visual identity" },
      { year: 2025, price: 0.7, buyer: "Peter Mallouk (Creative Planning CEO, raising stake to 80%)", seller: "Illig family (reducing to <10%)", notes: "Mallouk acquired 71% majority stake from Illig family at $700M valuation; reported to be highest-valuation majority-stake purchase in MLS history; Forbes Feb 2025 had valued club at $650M; Illig retains minority position" }
    ],
    stadium: {
      name: "Children's Mercy Park (reverting to 'Sporting Park' after 2025)",
      yearBuilt: 2011,
      capacity: 18467,
      ownershipModel: "team-owned/operated (Sporting Group LLC); built on Wyandotte County, Kansas land via STAR bond financing; team operates and captures full event revenue",
      teamOwnsLand: false,
      publicSubsidy: 146,
      privateFinancing: 65,
      namingRightsDeal: { sponsor: "Children's Mercy Hospital (expiring entering 2026)", annualValue_M: null, totalValue_M: null, expiryYear: 2025, notes: "10-year deal signed Nov 2015 expiring entering 2026 season; club has no replacement deal announced and reverts to 'Sporting Park'; original deal financial terms undisclosed but estimated $20-30M total" },
      nonGameRevenue: "USL Championship (Sporting KC II / Sporting Wyandotte) home matches; concerts, USA Rugby, college soccer events; team captures full non-MLS event economics",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "KSHB / E.W. Scripps regional partner for select matches not on Apple",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Peter Mallouk (Creative Planning CEO, ~80% post-2025 transaction)",
      ownerNetWorth: "Mallouk ~$1B est. — Creative Planning founder (one of largest US RIA wealth-management firms)",
      ownerBackground: "Mallouk built Creative Planning into a $300B+ AUM RIA; had been minority Sporting KC investor before 2025 majority acquisition; Illig family (Cliff Illig, Cerner co-founder) had owned since 2006 and remains minority; Patterson died 2017 leaving estate stake",
      acquisitionYear: 2025,
      acquisitionPrice: 0.5,
      currentValuation: 0.7,
      impliedReturn: "OnGoal group's 2006 $15M entry to 2025 $700M valuation = ~47x over 19 years (~22% CAGR)",
      ownershipGroup: [
        { name: "Peter Mallouk", role: "controlling owner / Chairman", pct: 80 },
        { name: "Illig family (Cliff, Mike)", role: "minority (<10%)", pct: 10 },
        { name: "Robb Heineman", role: "minority / former CEO", pct: null },
        { name: "Greg Maday", role: "minority", pct: null }
      ],
      institutionalInvestors: "None publicly disclosed",
      otherBusinessInterests: "Mallouk: Creative Planning RIA; Illig family: Cerner legacy stake (acquired by Oracle 2022 for $28B); Heineman: tech investments"
    },
    brand: {
      socialMedia: { instagram: "~290K", twitter: "~390K", facebook: "~510K" },
      merchandiseNotes: "Mid-tier MLS merchandise performer; 'Sporting' rebrand (2010) was widely praised and remains aesthetic high-water mark; loyal Cauldron supporter section",
      internationalFanbase: "Limited; modest Kansas City Latino fanbase",
      notableSponsorships: ["Children's Mercy (stadium, expiring)", "Compass Minerals (jersey)", "Garmin", "Hy-Vee"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 2,
      currentFranchisePlayer: "Dániel Sallói — Hungarian international forward, longtime franchise player, ~$1.5M AAV",
      starContracts: [
        { player: "Dániel Sallói", position: "Forward", aav: 1.5, contractNote: "TAM/Designated Player; Hungarian international; longtime franchise scorer" },
        { player: "Erik Thommy", position: "Midfielder", aav: 2.0, contractNote: "Designated Player; German midfielder; signed 2023 from Stuttgart" }
      ]
    },
    analystNotes: "Sporting Kansas City's $700M 2025 majority-stake transaction is the most important recent comp for mid-market MLS franchises — Mallouk's 71% acquisition at a record valuation validates that even small-market clubs with team-controlled stadiums can command ~$700M+ once Apple-deal revenue floors are baked in. The 47x return on the 2006 OnGoal $15M entry is among the strongest 20-year MLS owner returns documented. Children's Mercy Park ownership/operation captures more revenue than tenant clubs (Whitecaps, Sounders), and the brand strength of the 2010 Sporting rebrand provides commercial differentiation; the expiring naming deal and competitive on-field decline are the near-term execution challenges Mallouk inherits."
  },

  "St. Louis City SC": {
    valuationHistory: [
      { year: 2023, value: 0.50,  source: "Forbes (inaugural year)" },
      { year: 2024, value: 0.71,  source: "Forbes" },
      { year: 2025, value: 0.78,  source: "Sportico" },
    ],
    revenue: { estimate: 70, year: 2023, source: "Forbes (inaugural year)", operatingIncome: 8 },
    transactions: [
      { year: 2019, price: 0.20, buyer: "MLS4TheLou (Carolyn Kindle Betz / Taylor family / Jim Kavanaugh)", seller: "MLS (expansion grant)", notes: "MLS awarded expansion to St. Louis Aug 2019; $200M expansion fee; Kindle Betz (granddaughter of Enterprise founder Jack Taylor) became first majority female owner in MLS history; team began play 2023; ownership group did not request public funding for stadium" }
    ],
    stadium: {
      name: "CITYPARK (Energizer Park as of 2024 — naming rights renamed)",
      yearBuilt: 2023,
      capacity: 22500,
      ownershipModel: "team-owned (privately financed by ownership group); located in downtown St. Louis Downtown West neighborhood; first soccer-specific MLS stadium built downtown",
      teamOwnsLand: true,
      publicSubsidy: 30,
      privateFinancing: 458,
      namingRightsDeal: { sponsor: "Energizer (renamed from CITYPARK in 2024)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "Energizer (Energizer Holdings, St. Louis-based) acquired naming rights 2024; financial terms undisclosed; original CITYPARK name was placeholder" },
      nonGameRevenue: "Concerts, USL Championship (St. Louis CITY2) home matches, training facility, corporate HQ; full campus cost ~$667M including practice fields and offices; revenue captured 100% by team",
      newStadiumPlans: null
    },
    media: {
      localTVDeal: "FanDuel Sports Network Midwest regional partner for select matches not on Apple",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Carolyn Kindle (Taylor family — Enterprise Mobility / Enterprise Rent-A-Car)",
      ownerNetWorth: "Taylor family combined ~$30B+ (Enterprise Mobility one of largest US privately held companies)",
      ownerBackground: "Carolyn Kindle (granddaughter of Enterprise founder Jack Taylor, daughter of Andy Taylor) leads MLS4TheLou ownership group; first majority female owner in MLS history; Jim Kavanaugh (World Wide Technology founder/CEO) is co-owner; ownership group structured ahead of the 2023 expansion; CITYPARK financed entirely by Taylor family / ownership without public funding",
      acquisitionYear: 2019,
      acquisitionPrice: 0.2,
      currentValuation: 0.78,
      impliedReturn: "~3.9x in 6 years on team-only attribution (excluding stadium/campus capex)",
      ownershipGroup: [
        { name: "Carolyn Kindle", role: "managing partner / CEO", pct: null },
        { name: "Taylor family (Enterprise)", role: "majority backers", pct: null },
        { name: "Jim Kavanaugh", role: "co-owner", pct: null }
      ],
      institutionalInvestors: "None publicly disclosed — Taylor family corporate vehicle",
      otherBusinessInterests: "Taylor family: Enterprise Mobility (Enterprise Rent-A-Car, National, Alamo) ~$35B+ revenue private; Kavanaugh: World Wide Technology (~$20B revenue private IT services)"
    },
    brand: {
      socialMedia: { instagram: "~190K", twitter: "~120K", facebook: "~210K" },
      merchandiseNotes: "Strong inaugural season merchandise sales 2023; pioneering 'CITY' branding aesthetic; downtown stadium amplifies matchday commerce",
      internationalFanbase: "Limited; modest international following beyond St. Louis diaspora; strong local heritage given St. Louis soccer history",
      notableSponsorships: ["Energizer (stadium)", "Purina (jersey)", "Centene", "Enterprise"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 1,
      currentFranchisePlayer: "Eduard Löwen — German Designated Player midfielder, ~$2.5M AAV",
      starContracts: [
        { player: "Eduard Löwen", position: "Midfielder", aav: 2.5, contractNote: "Designated Player; signed 2022 from Hertha Berlin; German Bundesliga pedigree" },
        { player: "Cedric Teuchert", position: "Forward", aav: 1.5, contractNote: "Designated Player; German forward; signed 2024 from Hannover" }
      ]
    },
    analystNotes: "St. Louis City SC is the gold-standard recent MLS expansion model: $200M 2019 entry plus ~$667M fully privately-financed downtown campus has produced a $780M Sportico valuation in three seasons, with full team-owned stadium economics and a top-tier 2023 inaugural campaign (Western Conference top seed). The Taylor-family balance sheet provides effectively unlimited capital depth, removing the financing constraint that hampers most expansion sides. The structural risk is that St. Louis is a mid-sized MLS market dependent on the team-owned stadium model continuing to differentiate it from larger-market competitors like LAFC and Inter Miami in the next valuation cycle."
  },

  "Vancouver Whitecaps FC": {
    valuationHistory: [
      { year: 2019, value: 0.275, source: "Forbes" },
      { year: 2020, value: 0.295, source: "Forbes" },
      { year: 2021, value: 0.32,  source: "Forbes" },
      { year: 2022, value: 0.36,  source: "Forbes" },
      { year: 2023, value: 0.40,  source: "Forbes" },
      { year: 2024, value: 0.45,  source: "Sportico (29th in MLS, down 4%)" },
    ],
    revenue: { estimate: 25, year: 2023, source: "Forbes (lowest in MLS)", operatingIncome: -14 },
    transactions: [
      { year: 2008, price: 0.035, buyer: "Greg Kerfoot / Steve Luczo / Jeff Mallett / Steve Nash", seller: "MLS (expansion grant)", notes: "Whitecaps awarded MLS expansion 2009; $35M expansion fee; began MLS play 2011; group includes tech veterans Mallett (Yahoo COO), Luczo (Seagate CEO), Kerfoot (Kerfoot Group); Steve Nash (NBA HoFer) joined as minority/ambassador" },
      { year: 2025, price: null, buyer: "TBD (sale process active; Las Vegas relocation threatened)", seller: "Kerfoot/Mallett/Luczo group", notes: "Whitecaps publicly listed for sale Dec 2024; Grant Gustavson (Tamara Gustavson son) made formal offer to relocate to Las Vegas; BC government scrambling to find local Vancouver buyer; >100 groups expressed interest; sale unresolved as of late 2025" }
    ],
    stadium: {
      name: "BC Place",
      yearBuilt: 1983,
      capacity: 22120,
      ownershipModel: "owned by BC Pavilion Corporation (PavCo, BC Crown corporation); Whitecaps are tenants alongside BC Lions (CFL); club lease is widely regarded as MLS's worst — Whitecaps capture only ~12% of matchday revenue compared to ~100% for stadium-owning MLS clubs",
      teamOwnsLand: false,
      publicSubsidy: null,
      privateFinancing: null,
      namingRightsDeal: { sponsor: "BC Place (no commercial naming partner)", annualValue_M: null, totalValue_M: null, expiryYear: null, notes: "BC Pavilion Corporation has not sold venue naming rights; revenue would accrue to PavCo not Whitecaps" },
      nonGameRevenue: "None to Whitecaps — BC Place captures all event revenue including BC Lions, FIFA World Cup 2026 hosting, concerts; tenant model is core economic constraint",
      newStadiumPlans: "Long-discussed soccer-specific stadium for Whitecaps but no announced project; sale process likely conditioned on relocation or new venue plan"
    },
    media: {
      localTVDeal: "TSN regional rights for select matches not on Apple",
      streamingNotes: "All MLS matches available via Apple TV+ MLS Season Pass (10yr $2.5B deal 2023-2032)",
      nationalShareNote: "~$8M/team/year from MLS-Apple deal (~$250M/yr ÷ 30 teams); plus selective Fox Sports Sunday games"
    },
    ownership: {
      primaryOwner: "Greg Kerfoot (largest shareholder; ownership group selling)",
      ownerNetWorth: "Kerfoot ~$300M est.; Luczo ~$500M+; Mallett ~$200M; Nash ~$95M",
      ownerBackground: "Kerfoot (Kerfoot Group, largest stake) is Vancouver tech entrepreneur; Mallett was Yahoo COO; Luczo Seagate CEO/Chairman; Nash Hall of Fame NBA point guard; group acquired MLS rights 2009 via $35M expansion grant; relationships have been challenged by stadium economics and 14-year operating losses",
      acquisitionYear: 2008,
      acquisitionPrice: 0.035,
      currentValuation: 0.45,
      impliedReturn: "~13x in 17 years (~16% CAGR) — but constrained by ongoing operating losses and BC Place lease",
      ownershipGroup: [
        { name: "Greg Kerfoot", role: "majority / largest shareholder", pct: null },
        { name: "Steve Luczo", role: "minority", pct: null },
        { name: "Jeff Mallett", role: "minority", pct: null },
        { name: "Steve Nash", role: "minority / ambassador", pct: null }
      ],
      institutionalInvestors: "None disclosed",
      otherBusinessInterests: "Luczo: Seagate Chairman, sports investments via House of Sport; Mallett: Yahoo legacy, San Francisco Giants minority owner; Nash: NBA broadcasting, various NBA team minority interests"
    },
    brand: {
      socialMedia: { instagram: "~210K", twitter: "~280K", facebook: "~570K" },
      merchandiseNotes: "Below-tier MLS merchandise performer; brand limited by BC Place tenant arrangement (no team store visibility), modest on-field results, and operating losses that have constrained marketing investment",
      internationalFanbase: "Cascadia rivalry following with Sounders/Timbers; Asian-Canadian fanbase in Greater Vancouver; modest international footprint",
      notableSponsorships: ["bet365 (jersey)", "Vancouver International Airport", "Bell Canada"]
    },
    onField: {
      championshipsLast10Years: 0,
      playoffAppearancesLast5Years: 3,
      currentFranchisePlayer: "Brian White — American forward, ~$1.2M AAV; club has lacked marquee Designated Player commitment",
      starContracts: [
        { player: "Brian White", position: "Forward", aav: 1.2, contractNote: "TAM contract; US international; longtime franchise scorer" },
        { player: "Andrés Cubas", position: "Defensive Midfielder", aav: 1.5, contractNote: "Designated Player; Paraguayan international; signed 2022 from Nîmes (Ligue 1)" }
      ]
    },
    analystNotes: "Vancouver Whitecaps is the structurally weakest MLS franchise: BC Place tenant arrangement caps matchday revenue at ~12% (vs. ~100% for owner-operators), Forbes-reported $14M operating losses on $25M revenue in 2023, and a sale process actively threatened with Las Vegas relocation. The eventual transaction will be a referendum on whether the Lower Mainland market can be unlocked with a soccer-specific stadium — without one, the franchise is economically capped at the bottom of MLS valuations regardless of ownership. The Las Vegas alternative (via Gustavson bid) introduces relocation optionality that paradoxically may push the eventual sale price above current $445M Forbes mark, since Vegas market premium could exceed Vancouver under-stadium constraints."
  },

};