// EPL driver scores — researched 1-10 driver scores for non-curated EPL clubs
// Curated (handled in teams.js): Manchester United, Manchester City, Liverpool, Arsenal,
// Chelsea, Tottenham Hotspur, Newcastle United, Aston Villa.
// Reference: 2024-25 Premier League season; Forbes/Sportico/CNBC 2024-25 valuations;
// Deloitte Money League; UK PL central distribution data.
export const eplDriverScores = {

  "Brighton & Hove Albion": {
    mediaRights: 6,    // ~£155M central distribution 2023-24 (top-half merit + heavy UK facility fee from regular Sky/TNT picks); Europa League 2023-24 added €30M+ UEFA cash
    stadium: 6,        // American Express Stadium (2011) club-owned by Tony Bloom; 31,876 capacity (smallest of mid-tier); strong matchday yield via debt-free build
    brand: 5,          // Tony Bloom analytics moneyball brand rising globally; UCL/Europa qualifiers 2023; ~3M IG followers; modern data-driven identity
    marketSize: 4,     // Brighton coastal city DMA ~250K; no big corporate base, but London-adjacent and London commuter overlap
    onField: 6,        // 6th place 2022-23 (highest finish ever); Europa League regulars; consistent top-half since 2017 promotion; recent De Zerbi/Hürzeler eras
  },

  "West Ham United": {
    mediaRights: 6,    // ~£140M central PL distribution; Europa League / Conference League appearances drive incremental UEFA cash; mid-tier facility fee
    stadium: 5,        // London Stadium 99-yr lease from London Legacy Dev Corp; ~62K capacity but heavy lease subsidy means most matchday upside captured by landlord
    brand: 6,          // London-based East End heritage club; ~9M global IG/social; 1980 FA Cup, 2023 Europa Conference League trophy; growing US following
    marketSize: 8,     // London market — global financial hub, deep corporate sponsorship pool, large diaspora following
    onField: 5,        // 2023 Conference League winner; mid-table 2024-25; Bowen/Antonio core; no PL title in PL era
  },

  "Crystal Palace": {
    mediaRights: 5,    // ~£130M central distribution; mid-tier merit; minimal UCL/Europa history (2025 Conference League qualified for first time)
    stadium: 4,        // Selhurst Park (1924) club-owned but aging; 25,486 capacity; main stand redevelopment delayed; matchday revenue capped
    brand: 5,          // South London cult heritage; Holmesdale Fanatics ultras; recent 2025 FA Cup win (first major trophy); ~2M IG; mid-tier global
    marketSize: 7,     // South London DMA; competes with five other London PL clubs but established local identity
    onField: 6,        // 2025 FA Cup winner (first major trophy in 120-year history); consistent mid-table PL since 2013; Eze/Olise/Mateta core
  },

  "Everton": {
    mediaRights: 5,    // ~£125-145M central distribution depending on finish; PSR points deductions 2023-24 (-8 pts) hurt merit payment; no Europe in 5+ yrs
    stadium: 8,        // Hill Dickinson Stadium (Bramley-Moore Dock) opened 2025 — £760M new build, 52,888 capacity, club-owned waterfront — major step-change vs. Goodison
    brand: 6,          // Founding member of Football League (1888); 9 league titles (last 1987); deep Merseyside heritage; ~5M IG; UK-strong / globally lapsed
    marketSize: 5,     // Liverpool city-region shared with bigger Liverpool FC; no London premium; Friedkin Group new ownership Dec 2024
    onField: 4,        // Two PSR points deductions (2023-24, 2024-25); 15th-17th finishes; relegation-fight era; rebuild under Friedkin/Moyes
  },

  "Fulham": {
    mediaRights: 5,    // ~£130M central distribution; mid-table merit and steady UK broadcasts; no UEFA revenue
    stadium: 6,        // Craven Cottage (1896) club-owned by Shahid Khan; Riverside Stand redevelopment completed 2024 (~£100M private financing); Thames-side premium hospitality
    brand: 5,          // Quirky west London identity, Mitrović/Palhinha era; Khan's Jacksonville/Fulham crossover; ~1.5M IG; growing US presence via Khan
    marketSize: 7,     // Affluent west London catchment (Hammersmith/Chelsea-adjacent); strong corporate hospitality demand
    onField: 5,        // Mid-table 2022-23 onwards; no major trophies; promoted/relegated yo-yo through 2010s, now stable PL
  },

  "Wolverhampton Wanderers": {
    mediaRights: 5,    // ~£125M central distribution; mid-tier merit; Europa League 2019-20 + 2024-25 (limited recent UEFA)
    stadium: 5,        // Molineux (1889) club-owned; 31,750 capacity; phased expansion plans paused under Fosun cost-cutting; moderate matchday yield
    brand: 5,          // Old Gold heritage (founding Football League 1888); 3 First Division titles (last 1959); ~3M IG; Mendes/Portuguese player pipeline gives unique identity
    marketSize: 4,     // Wolverhampton DMA small; no nearby PL competition but West Midlands region split with Aston Villa/Birmingham
    onField: 4,        // 13th-14th place 2024-25 finishes; PSR-driven asset sales (Cunha, Ait-Nouri); rebuild era; no major PL-era trophies
  },

  "AFC Bournemouth": {
    mediaRights: 4,    // ~£115-125M central distribution; bottom-half merit; minimal UK facility fee; relegation risk
    stadium: 3,        // Vitality Stadium — 11,307 capacity, smallest in PL; club exploring new stadium under Bill Foley but capped matchday revenue
    brand: 4,          // South coast town club; Foley-era marketing push (Vegas Knights crossover); ~1M IG; global brand limited
    marketSize: 3,     // Bournemouth DMA ~190K; tourist economy not corporate; smallest PL market by metro size
    onField: 5,        // Mid-table 2024-25 (best PL finish ever ~9th-10th); Foley aggressive transfer spend lifting trajectory; no UEFA history
  },

  "Brentford": {
    mediaRights: 4,    // ~£115M central distribution; bottom-half merit; modest UK facility fee
    stadium: 5,        // Gtech Community Stadium (2020) club-owned; 17,250 capacity (small but new); Matchbook/smartodds analytics-driven build; west London location
    brand: 4,          // Matthew Benham moneyball brand; ~700K IG; local west London identity; analytics-cult following but limited mainstream global appeal
    marketSize: 6,     // West London catchment; competes with Chelsea/Fulham/QPR but adjacent to wealthy Hounslow/Ealing
    onField: 5,        // Stable mid-table since 2021 promotion; no UEFA; Toney/Mbeumo era; Frank → Andrews managerial transition 2024
  },

  "Nottingham Forest": {
    mediaRights: 5,    // ~£130M central distribution but PSR points deduction 2023-24 (-4 pts) cost merit; 2024-25 strong finish recovered
    stadium: 5,        // City Ground (1898) club-owned; 30,455 capacity; expansion / new stadium debate ongoing; Trentside heritage venue
    brand: 5,          // Two-time European Cup winner (1979, 1980 under Clough) is historic asset; ~3M IG; Marinakis Greek shipping ownership; global heritage credentials
    marketSize: 4,     // Nottingham/East Midlands DMA mid-sized; no major corporate base; regional appeal
    onField: 6,        // 2024-25 punching above weight (top-7 contention); Hudson-Odoi/Wood/Elanga core (£55M Elanga sale); back in PL since 2022 after 23-yr absence
  },

  "Ipswich Town": {
    mediaRights: 3,    // ~£110M central distribution as 18th-place 2024-25 (relegated); minimal facility fee; parachute payments incoming Y1 ~£44M
    stadium: 3,        // Portman Road (1884) club-owned; 30,311 capacity; aging facility, no recent expansion; East Anglia regional venue
    brand: 4,          // 1981 UEFA Cup winner under Robson; two-time First Division runner-up; ~500K IG; deep East Anglia roots but limited global brand
    marketSize: 2,     // Ipswich DMA ~140K; rural East Anglia, smallest PL market by population
    onField: 3,        // Promoted to PL 2024 after 22-year absence; relegated 2024-25 PL season; rebuild for Championship return; Delap £30M sold to Chelsea
  },

  "Leicester City": {
    mediaRights: 4,    // ~£115-125M central distribution as relegation candidate; PSR points deduction risk; parachute payments structure post-relegation
    stadium: 5,        // King Power Stadium (2002) club-owned by Srivaddhanaprabha family; 32,261 capacity; planned 40K expansion paused during PSR struggles
    brand: 6,          // 2016 PL title under Ranieri (greatest sports underdog story) is enduring brand asset; ~6M IG; FA Cup 2021; global recognition outsized for market size
    marketSize: 4,     // Leicester DMA ~330K; East Midlands; mid-sized regional market
    onField: 4,        // Yo-yo: relegated 2023, promoted 2024 as Championship champions, relegated again 2025 PL; PSR points deduction; Vardy era ending
  },

  "Southampton": {
    mediaRights: 3,    // ~£110M central distribution as 20th-place 2024-25 (earliest-ever PL relegation, 7 games to spare); minimal merit; parachute payments incoming
    stadium: 4,        // St Mary's Stadium (2001) club-owned; 32,384 capacity; modern build but aging premium fit-out
    brand: 4,          // Saints heritage including 1976 FA Cup; renowned youth academy (Bale, Walcott, Shaw, Chamberlain); ~2M IG; Sport Republic/Solak ownership
    marketSize: 4,     // Southampton DMA ~270K; south coast, port city; corporate base modest
    onField: 3,        // 2024-25 worst PL points haul in history; relegated with 7 games to play; rebuild for Championship; Dibling £42M sold to Everton
  },

};
