// EPL supplements — extended valuation history (2000-2018) + factor narratives
// Sources: Forbes World's Most Valuable Soccer Teams (2004+), Deloitte Money League (revenue proxy pre-2004),
//          Sportico, BBC Sport, Companies House filings, Soccerex, transfermarkt
// Values in $B (USD); pre-2018 entries supplement the 2019-2024 series in enrichments-epl.js

export const eplSupplements = {

  "Manchester United": {
    extendedValuationHistory: [
      { year: 2000, value: 0.97,  source: "Deloitte Money League / market cap (LSE listing pre-2005)" },
      { year: 2001, value: 1.00,  source: "Deloitte Money League / LSE", isEstimated: true },
      { year: 2002, value: 1.05,  source: "Deloitte Money League / LSE", isEstimated: true },
      { year: 2003, value: 1.10,  source: "Deloitte Money League / LSE", isEstimated: true },
      { year: 2004, value: 1.25,  source: "Forbes" },
      { year: 2005, value: 1.40,  source: "Glazer 2005 LBO valued club at £790M = ~$1.4B" },
      { year: 2006, value: 1.30,  source: "Forbes" },
      { year: 2007, value: 1.45,  source: "Forbes" },
      { year: 2008, value: 1.87,  source: "Forbes" },
      { year: 2009, value: 1.87,  source: "Forbes" },
      { year: 2010, value: 1.83,  source: "Forbes" },
      { year: 2011, value: 1.86,  source: "Forbes" },
      { year: 2012, value: 2.23,  source: "Forbes / NYSE IPO valued club at $2.3B" },
      { year: 2013, value: 3.17,  source: "Forbes" },
      { year: 2014, value: 2.81,  source: "Forbes" },
      { year: 2015, value: 3.10,  source: "Forbes" },
      { year: 2016, value: 3.32,  source: "Forbes" },
      { year: 2017, value: 3.69,  source: "Forbes" },
      { year: 2018, value: 4.12,  source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "Receives ~£170M in EPL central distribution in good seasons but exposure to merit payment cliff during Glazer-era underperformance; commercial revenue ~£300M/yr (largest in football, Adidas £900M/10yr kit deal anchors).",
      stadium: "Old Trafford (1910, 74,310) is club-owned and debt-free at the asset level; £2B 'world's greatest stadium' redevelopment announced 2025 under Ratcliffe-INEOS sporting control could materially re-rate matchday economics.",
      brand: "Most-followed football club globally (~150M+ social media), 13 Premier League titles + 3 UCLs; commercial pricing power second only to Real Madrid in the sport, even through underperforming on-field cycles.",
      marketSize: "Manchester DMA but operates as global brand — claimed 600M+ followers worldwide; deepest reach of any EPL club in Asia, Africa, and emerging markets, where commercial yield per fan is the long-tail upside.",
      onField: "Eight years without an EPL title (last 2012-13); inconsistent UCL participation and recent finishes outside top-4 have compressed merit payments and broadcast facility fees; Ratcliffe sporting overhaul in early innings."
    }
  },

  "Manchester City": {
    extendedValuationHistory: [
      { year: 2000, value: 0.05, source: "pre-Premier League establishment", isEstimated: true },
      { year: 2003, value: 0.08, source: "Shinawatra-era estimate", isEstimated: true },
      { year: 2007, value: 0.20, source: "Thaksin Shinawatra purchase from Bernstein for ~£81M = ~$160M" },
      { year: 2008, value: 0.30, source: "ADUG/Sheikh Mansour bought from Shinawatra Sept 2008 for ~£200M = ~$360M" },
      { year: 2010, value: 0.305, source: "Forbes" },
      { year: 2011, value: 0.40,  source: "Forbes" },
      { year: 2012, value: 0.64,  source: "Forbes" },
      { year: 2013, value: 0.69,  source: "Forbes" },
      { year: 2014, value: 0.86,  source: "Forbes" },
      { year: 2015, value: 1.38,  source: "Forbes" },
      { year: 2016, value: 1.92,  source: "Forbes" },
      { year: 2017, value: 2.08,  source: "Forbes" },
      { year: 2018, value: 2.47,  source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "Top-of-table merit payment plus consistent UCL participation drives among the highest broadcast take in football; 115 PSR charges create a tail risk to commercial-deal scrutiny but EPL central distribution remains formula-driven.",
      stadium: "Etihad Stadium (53,400) leased from Manchester City Council on ~250yr term; expansion to 61,000 by 2026 plus North Stand / Co-op Live precinct create the most aggressive football real-estate plan in the EPL.",
      brand: "City Football Group umbrella (NYCFC, Melbourne, Mumbai, Yokohama, etc.) creates global commercial leverage; younger fan base than United/Liverpool but six EPL titles in seven years reset the brand's trophy density.",
      marketSize: "Same Manchester DMA as United but historically less global reach; CFG strategy explicitly designed to monetize secondary markets (US, India, Japan, Australia) through sister-club brand laddering.",
      onField: "Six Premier League titles in seven years (2018-2024) plus 2023 UCL win — most successful active English club; squad cost-controlled but largest wage bill in football raises FFP/PSR risk if commercial deals are unwound."
    }
  },

  "Liverpool": {
    extendedValuationHistory: [
      { year: 2000, value: 0.18, source: "Deloitte Money League / pre-Hicks era", isEstimated: true },
      { year: 2004, value: 0.74, source: "Forbes" },
      { year: 2005, value: 0.85, source: "Forbes" },
      { year: 2006, value: 0.97, source: "Forbes" },
      { year: 2007, value: 1.10, source: "Hicks-Gillett LBO from Moores valued at £218M = ~$430M debt-loaded" },
      { year: 2008, value: 1.05, source: "Forbes" },
      { year: 2009, value: 1.01, source: "Forbes" },
      { year: 2010, value: 0.82, source: "FSG / John Henry purchased from Hicks-Gillett for £300M = ~$477M" },
      { year: 2011, value: 0.55, source: "Forbes" },
      { year: 2012, value: 0.62, source: "Forbes" },
      { year: 2013, value: 0.65, source: "Forbes" },
      { year: 2014, value: 0.69, source: "Forbes" },
      { year: 2015, value: 0.98, source: "Forbes" },
      { year: 2016, value: 1.55, source: "Forbes" },
      { year: 2017, value: 1.49, source: "Forbes" },
      { year: 2018, value: 1.94, source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "Consistent UCL contender drives top-quartile merit payments; FSG's discipline keeps wage-to-revenue among healthiest in the Big Six; 2025 EPL UK domestic deal +6% maintains tailwind.",
      stadium: "Anfield (1884, 61,276 post-Anfield Road expansion) club-owned with no debt against the asset; further capacity beyond ~64K constrained by listed surroundings; matchday revenue per seat top-quartile in the EPL.",
      brand: "Six European Cups + global anthemic identity ('You'll Never Walk Alone'); strong North American pull post-2019 title; FSG cross-marketing with Red Sox/Penguins strengthens US distribution.",
      marketSize: "Liverpool DMA is small (~1.5M) but the club indexes globally; strongest single-fan-base merchandise sales outside Madrid/Barcelona; Standard Chartered shirt deal renewed at £100M/yr in 2025.",
      onField: "2019-20 Premier League title broke 30-year drought; Klopp-era added 1 UCL + 7 cup competitions; Slot transition holding form with 2025 EPL title; squad value ~£900M (Transfermarkt)."
    }
  },

  "Arsenal": {
    extendedValuationHistory: [
      { year: 2000, value: 0.40, source: "Deloitte Money League / pre-Emirates era", isEstimated: true },
      { year: 2004, value: 0.61, source: "Forbes" },
      { year: 2005, value: 0.74, source: "Forbes" },
      { year: 2006, value: 0.92, source: "Forbes / Emirates Stadium opens — financing event" },
      { year: 2007, value: 1.20, source: "Forbes" },
      { year: 2008, value: 1.20, source: "Forbes" },
      { year: 2009, value: 1.20, source: "Forbes" },
      { year: 2010, value: 1.18, source: "Forbes" },
      { year: 2011, value: 1.19, source: "Forbes / Kroenke increases stake to majority" },
      { year: 2012, value: 1.29, source: "Forbes" },
      { year: 2013, value: 1.33, source: "Forbes" },
      { year: 2014, value: 1.33, source: "Forbes" },
      { year: 2015, value: 1.31, source: "Forbes" },
      { year: 2016, value: 2.02, source: "Forbes" },
      { year: 2017, value: 1.93, source: "Forbes" },
      { year: 2018, value: 2.24, source: "Forbes / Kroenke buys out Usmanov 30% at £550M (£1.8B implied)" },
    ],
    factorNarratives: {
      mediaRights: "UCL return in 2023-24 plus title contention 2024-25 has restored top-quartile merit payments and broadcast facility fees; commercial-led growth (Emirates extension £50M/yr, Adidas £75M/yr) supplements broadcast.",
      stadium: "Emirates Stadium (60,704, opened 2006, £390M private financing) club-owned with the original construction debt now paid down — debt-free asset is a structural advantage over Tottenham.",
      brand: "Strong London brand with deep US following post-Amazon 'All or Nothing'; Invincibles era cultural cachet; club-record 700K+ shirt sales 2023-24 reflects Arteta-era recovery.",
      marketSize: "North London DMA with global pull; second-strongest EPL brand in the United States (Highbury House NYC partnership, Emirates fan tour); growing female fan base via Arsenal Women dominance.",
      onField: "Three consecutive top-2 finishes 2022-2025; Arteta-era squad youngest in EPL by minutes weighting; £1B+ squad value (Transfermarkt); zero EPL titles since 2003-04 'Invincibles' is the open execution gap."
    }
  },

  "Chelsea": {
    extendedValuationHistory: [
      { year: 2000, value: 0.10, source: "pre-Abramovich era", isEstimated: true },
      { year: 2003, value: 0.21, source: "Roman Abramovich purchased from Ken Bates for £140M = ~$233M" },
      { year: 2004, value: 0.33, source: "Forbes" },
      { year: 2005, value: 0.43, source: "Forbes" },
      { year: 2006, value: 0.54, source: "Forbes" },
      { year: 2007, value: 0.79, source: "Forbes" },
      { year: 2008, value: 0.80, source: "Forbes" },
      { year: 2009, value: 0.80, source: "Forbes" },
      { year: 2010, value: 0.65, source: "Forbes" },
      { year: 2011, value: 0.66, source: "Forbes" },
      { year: 2012, value: 0.76, source: "Forbes / UCL win" },
      { year: 2013, value: 0.90, source: "Forbes" },
      { year: 2014, value: 0.87, source: "Forbes" },
      { year: 2015, value: 1.37, source: "Forbes" },
      { year: 2016, value: 1.66, source: "Forbes" },
      { year: 2017, value: 1.85, source: "Forbes" },
      { year: 2018, value: 2.06, source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "UCL absence post-2022-23 + 6th place 2023-24 cost the club ~£40M+ in merit and broadcast facility fees; 2025 Conference League win brings UEL access; downside risk if 2025-26 sees no European football.",
      stadium: "Stamford Bridge (1877, 41,631) is the smallest of the Big Six; Chelsea Pitch Owners arrangement on the freehold structurally complicates redevelopment; Boehly-era plans (£2B new stadium) remain undelivered.",
      brand: "Top-10 global football brand with strong US following post-Boehly; CFC operates under sanctions-era goodwill rebuild; women's team success (CWFC 5-time consecutive WSL champions) extends franchise.",
      marketSize: "West London DMA is the wealthiest in the EPL on per-capita basis; American-led ownership rebuild aimed at California/NYC commercial activations; Mediterranean and US following are key growth markets.",
      onField: "Five EPL titles + 2 UCLs (2012, 2021) under Abramovich era — historic cluster mostly outside last 5 years; Boehly-era squad rebuild (~£1B+ net spend) yet to deliver European return; Cole Palmer is the franchise pillar."
    }
  },

  "Tottenham Hotspur": {
    extendedValuationHistory: [
      { year: 2000, value: 0.10, source: "Deloitte Money League / pre-ENIC", isEstimated: true },
      { year: 2001, value: 0.12, source: "ENIC consortium initial 27% stake at £62M (£100M implied)" },
      { year: 2004, value: 0.18, source: "Forbes" },
      { year: 2005, value: 0.20, source: "Forbes" },
      { year: 2006, value: 0.26, source: "Forbes" },
      { year: 2007, value: 0.34, source: "Forbes" },
      { year: 2008, value: 0.43, source: "Forbes" },
      { year: 2009, value: 0.44, source: "Forbes" },
      { year: 2010, value: 0.45, source: "Forbes" },
      { year: 2011, value: 0.51, source: "Forbes" },
      { year: 2012, value: 0.57, source: "Forbes" },
      { year: 2013, value: 0.63, source: "Forbes" },
      { year: 2014, value: 0.66, source: "Forbes" },
      { year: 2015, value: 0.69, source: "Forbes" },
      { year: 2016, value: 1.06, source: "Forbes" },
      { year: 2017, value: 1.06, source: "Forbes" },
      { year: 2018, value: 1.24, source: "Forbes / new stadium under construction" },
    ],
    factorNarratives: {
      mediaRights: "European football qualification has been on/off in recent cycles, creating volatility in merit payments; 2024-25 UEL success restores European broadcast revenue; UK central distribution near league median.",
      stadium: "Tottenham Hotspur Stadium (2019, 62,850, £1.2B+) is the modern revenue benchmark in the EPL — purpose-built multi-event venue (NFL, F1, boxing, concerts) with retractable pitch generates ~£250M+ non-football income/yr.",
      brand: "Strong London brand with NFL-led US distribution lift via Tottenham-NFL partnership at the stadium; 'no trophy' meme persists in critical media but commercial growth has outpaced on-pitch results.",
      marketSize: "North London DMA with growing US/Asian following; stadium-as-platform strategy means non-football events drive a substantially larger share of revenue than peers (~25%+).",
      onField: "Zero EPL titles in club history; last major trophy 2008 League Cup; European Cup runners-up 2019; structural under-investment vs. Big 5 explains mid-tier on-field spend per Levy-era discipline."
    }
  },

  "Newcastle United": {
    extendedValuationHistory: [
      { year: 2000, value: 0.11, source: "Deloitte Money League / Sir John Hall era", isEstimated: true },
      { year: 2004, value: 0.20, source: "Forbes" },
      { year: 2005, value: 0.22, source: "Forbes" },
      { year: 2006, value: 0.24, source: "Forbes" },
      { year: 2007, value: 0.30, source: "Mike Ashley bought from Hall family for £134M = ~$265M" },
      { year: 2008, value: 0.30, source: "Forbes" },
      { year: 2009, value: 0.10, source: "relegated to Championship — sharp valuation discount", isEstimated: true },
      { year: 2010, value: 0.20, source: "promoted back to EPL", isEstimated: true },
      { year: 2012, value: 0.30, source: "Forbes" },
      { year: 2014, value: 0.35, source: "Forbes", isEstimated: true },
      { year: 2016, value: 0.30, source: "relegated to Championship 2016", isEstimated: true },
      { year: 2017, value: 0.35, source: "promoted back to EPL", isEstimated: true },
      { year: 2018, value: 0.35, source: "Forbes", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "PIF takeover (Oct 2021) lifted club into UCL by 2023-24, transforming merit payments and central distribution; 2024-25 UCL absence cost ~£40M; 2025 Carabao Cup win restores European football trajectory.",
      stadium: "St James' Park (1892, 52,305) club-owned and city-center adjacent; ~60K capacity expansion under PIF active planning; 'most atmospheric' stadium reputation in Premier League polling.",
      brand: "Loyal regional brand with one of EPL's highest matchday-attendance-as-percent-of-capacity ratios; PIF investment has reset international visibility but commercial revenue still ~30% of Big-Six peers.",
      marketSize: "Northeast England — provincial market with limited London/global hub effect; Saudi ownership opens MENA-region commercial activation as new growth lever, e.g., Sela shirt sponsor at £25M/yr.",
      onField: "Last EPL title 1927; 2023-24 UCL return ended 20-year European drought; 2025 Carabao Cup ended 70-year domestic trophy drought; Bruno Guimarães/Isak/Trippier core under Howe."
    }
  },

  "Aston Villa": {
    extendedValuationHistory: [
      { year: 2000, value: 0.12, source: "Doug Ellis era", isEstimated: true },
      { year: 2004, value: 0.20, source: "Forbes" },
      { year: 2006, value: 0.27, source: "Randy Lerner purchased from Ellis for £62M (£175M debt-included)" },
      { year: 2008, value: 0.30, source: "Forbes" },
      { year: 2010, value: 0.30, source: "Forbes" },
      { year: 2012, value: 0.26, source: "Forbes" },
      { year: 2014, value: 0.27, source: "Forbes", isEstimated: true },
      { year: 2016, value: 0.10, source: "relegated to Championship 2016", isEstimated: true },
      { year: 2017, value: 0.10, source: "Tony Xia ownership, Championship", isEstimated: true },
      { year: 2018, value: 0.18, source: "Sawiris/Edens bought 55% from Xia for £30M (~£55M implied) — distressed", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "2024-25 UCL participation restored European broadcast economics after 41-year absence; merit + central distribution +60% YoY; UCL non-qualification 2025-26 is the immediate downside watch-point.",
      stadium: "Villa Park (1897, 42,682) club-owned; £100M+ North Stand redevelopment plans active; capacity expansion to ~50K targeted but planning constraints around residential surrounds slow timeline.",
      brand: "Heritage Big-Six-adjacent brand with seven First Division titles + 1982 European Cup; 21st-century brand erosion from relegation cycles being repaired post-Sawiris/Edens; growing US fan footprint.",
      marketSize: "Birmingham DMA — 2nd largest English city — but historically split with Birmingham City; Villa indexes higher on national/international following than crosstown rival.",
      onField: "Top-4 EPL finish 2023-24 ended 28-year UCL drought; squad value ~£500M (Transfermarkt) under Emery; key risk is sustaining UCL revenue without re-leveraging on Watkins/Kamara/Martinez core."
    }
  },

  "Brighton & Hove Albion": {
    extendedValuationHistory: [
      { year: 2000, value: 0.005, source: "near-extinction; lower-league financial crisis", isEstimated: true },
      { year: 2009, value: 0.02, source: "Tony Bloom buys controlling stake; League One", isEstimated: true },
      { year: 2011, value: 0.05, source: "Amex Stadium opens; promoted to Championship", isEstimated: true },
      { year: 2014, value: 0.07, source: "Championship play-off campaigns", isEstimated: true },
      { year: 2017, value: 0.20, source: "promoted to EPL May 2017", isEstimated: true },
      { year: 2018, value: 0.25, source: "Forbes (first EPL season)", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Punches above weight on broadcast facility fees thanks to entertaining play under De Zerbi/Hürzeler; 2023-24 UEL participation generated additional ~£15-20M; central distribution near league median.",
      stadium: "American Express Stadium (Amex, 2011, 31,876) club-owned and privately financed; expansion to 35K under planning; modest matchday revenue base limits commercial leverage vs. Big Six.",
      brand: "Niche progressive brand with strong analytics-driven reputation following Bloom's (poker player/Starlizard founder) recruitment model; 'best-run mid-table club' meme drives outsized US analytics following.",
      marketSize: "Brighton DMA is small (~300K) but commuter-belt to London; gay-friendly city status drives unique fan demographic; club-driven STEM/inclusion programs yield positive brand externality.",
      onField: "Player-trading model: ~£270M in net player sales 2022-2024 (Caicedo £115M, Mac Allister £35M, Cucurella £55M); 6th place 2022-23 (UEL qualification) is the franchise high water mark."
    }
  },

  "West Ham United": {
    extendedValuationHistory: [
      { year: 2000, value: 0.10, source: "Deloitte Money League", isEstimated: true },
      { year: 2004, value: 0.18, source: "Forbes" },
      { year: 2006, value: 0.21, source: "Forbes" },
      { year: 2007, value: 0.27, source: "Icelandic Eggert Magnusson consortium buys from Brown family for £85M" },
      { year: 2009, value: 0.16, source: "post-Icelandic banking crisis writedown", isEstimated: true },
      { year: 2010, value: 0.20, source: "Sullivan/Gold buy from Straumur for ~£105M debt-included" },
      { year: 2012, value: 0.30, source: "Forbes" },
      { year: 2014, value: 0.40, source: "Forbes", isEstimated: true },
      { year: 2016, value: 0.50, source: "London Stadium move" },
      { year: 2018, value: 0.55, source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "2023 UEFA Conference League win + 2023-24 UEL participation lifted European broadcast revenue; 2025-26 European absence resets baseline; central distribution near league median.",
      stadium: "London Stadium (60,000) leased from London Legacy Development Corporation on 99-year deal — controversially heavily subsidized (£15M/yr rent for £700M+ public-built asset); structural revenue upside from concerts.",
      brand: "Loyal East London identity with 'Hammers' folk culture; Bobby Moore / 1966 World Cup heritage; Croatian/Polish Eastern European fan corridors via player imports under Sullivan.",
      marketSize: "East London DMA with regeneration tailwind from Stratford / Olympic Park area; significant home-borough catchment vs. North London (Spurs/Arsenal) and Chelsea's western base.",
      onField: "Three top-7 EPL finishes in last five seasons; 2023 UECL trophy first major silverware since 1980 FA Cup; squad value ~£300M (Transfermarkt) — mid-tier ceiling with current resource base."
    }
  },

  "Crystal Palace": {
    extendedValuationHistory: [
      { year: 2000, value: 0.02, source: "lower-league crisis era", isEstimated: true },
      { year: 2010, value: 0.02, source: "administration; Steve Parish-led CPFC 2010 consortium rescue", isEstimated: true },
      { year: 2013, value: 0.10, source: "promoted to EPL", isEstimated: true },
      { year: 2015, value: 0.18, source: "Harris/Blitzer (HBSE) bought 18% stake; club-implied ~$180M" },
      { year: 2017, value: 0.24, source: "Forbes", isEstimated: true },
      { year: 2018, value: 0.27, source: "Textor/Eagle Football joins ownership 2021 (~$103M for ~40%)", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Stable EPL central distribution with mid-table merit payments; 2025 FA Cup win provided Conference League access in 2025-26 — first European campaign in club history boosts broadcast take.",
      stadium: "Selhurst Park (1924, 25,486) club-owned but constrained — smallest top-half capacity; £150M Main Stand redevelopment under planning targets 34K capacity but timing uncertain.",
      brand: "South London club with cult-like Holmesdale Fanatics ultras culture (most photographed EPL fan banners); 1990s top-flight establishment after multi-era yo-yo history.",
      marketSize: "South London catchment with no direct EPL competitor (West Ham east, Chelsea west, Arsenal/Spurs north); strong African/Caribbean diaspora connection.",
      onField: "2025 FA Cup win first major trophy in 120-year history; Eagle Football multi-club exit triggered Glasner-era squad disruption; Eze star player core."
    }
  },

  "Everton": {
    extendedValuationHistory: [
      { year: 2000, value: 0.13, source: "Deloitte Money League / Peter Johnson era", isEstimated: true },
      { year: 2004, value: 0.21, source: "Forbes" },
      { year: 2006, value: 0.25, source: "Forbes" },
      { year: 2008, value: 0.35, source: "Forbes" },
      { year: 2010, value: 0.34, source: "Forbes" },
      { year: 2012, value: 0.34, source: "Forbes" },
      { year: 2014, value: 0.41, source: "Forbes", isEstimated: true },
      { year: 2016, value: 0.45, source: "Farhad Moshiri buys 49.9% from Bill Kenwright for £87.5M" },
      { year: 2018, value: 0.52, source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "PSR points deductions in 2023-24 (10 then 6 points combined) created relegation risk and capped commercial deal scale; central distribution stable but EPL parachute risk if relegated.",
      stadium: "Hill Dickinson Stadium (Bramley-Moore Dock, 2025, 52,888, ~£760M private financing) is the largest waterfront ballpark in Europe — replaces Goodison Park (1892); transformative matchday revenue lift expected.",
      brand: "Founding member of EPL (1888 Football League) — only club to be present in every EPL season; nine top-flight titles + 1985 European Cup-Winners Cup; tradition-rich but underperforming brand last 30 years.",
      marketSize: "Liverpool DMA shared with Liverpool FC (much larger reach); ground is geographic identity (Bramley-Moore site visible from Mersey crossings); locality + nostalgia drive matchday demand at new ground.",
      onField: "Friedkin Group (Dec 2024 acquisition from Moshiri ~£400M) inheriting squad still in transition; survival-focused 2024-25 with new Hill Dickinson Stadium opening as primary 2025-26 narrative."
    }
  },

  "Fulham": {
    extendedValuationHistory: [
      { year: 2000, value: 0.04, source: "Mohamed Al-Fayed era; lower-league recovery", isEstimated: true },
      { year: 2002, value: 0.08, source: "promoted to EPL", isEstimated: true },
      { year: 2008, value: 0.16, source: "Forbes" },
      { year: 2010, value: 0.20, source: "UEFA Europa League runners-up 2010", isEstimated: true },
      { year: 2013, value: 0.18, source: "Shahid Khan buys from Al-Fayed for £150M-£200M ($210-280M)" },
      { year: 2014, value: 0.10, source: "relegated to Championship", isEstimated: true },
      { year: 2018, value: 0.17, source: "promoted to EPL via play-offs", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Yo-yo club between EPL and Championship over last 15 years caps long-run media value; current EPL stretch (since 2022-23) longest of Khan era; mid-table central distribution with limited European exposure.",
      stadium: "Craven Cottage (1896, 28,800) club-owned; £100M+ Riverside Stand redevelopment completed 2024 (29K capacity, hospitality lift) — privately financed by Khan; Thames-side location is unique premium asset.",
      brand: "Niche West London identity with Hollywood/celebrity fanbase; Hugh Grant cult appeal; pretty-football reputation under Marco Silva; NFL-style Khan media leverage via Jacksonville Jaguars sister club.",
      marketSize: "West London DMA with affluent local demographics; small stadium caps matchday revenue but premium hospitality yields highest per-seat revenue outside Tottenham/Chelsea.",
      onField: "2010 UEFA Europa League final (lost to Atlético) is high-water mark; mid-table EPL finishes since 2022 promotion; Mitrović exit 2023 reset squad cost; Pereira-led commercial side outpacing pitch results."
    }
  },

  "Wolverhampton Wanderers": {
    extendedValuationHistory: [
      { year: 2000, value: 0.03, source: "Sir Jack Hayward era; Championship", isEstimated: true },
      { year: 2003, value: 0.08, source: "promoted to EPL via play-off", isEstimated: true },
      { year: 2007, value: 0.05, source: "Steve Morgan buys from Hayward for £10M nominal (debt assumed)", isEstimated: true },
      { year: 2012, value: 0.05, source: "relegated to Championship; League One drop 2013", isEstimated: true },
      { year: 2016, value: 0.05, source: "Fosun International buys from Morgan for £45M = ~$60M" },
      { year: 2018, value: 0.20, source: "promoted to EPL May 2018; surprise 7th place", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Stable mid-table EPL central distribution since 2018 promotion; Europa League 2019-20 lifted European broadcast revenue; PSR risk in 2024 forced player exits to comply.",
      stadium: "Molineux Stadium (1889, 31,750) club-owned with proposed expansion to 50K — Fosun-funded master plan tied to broader Wolverhampton city redevelopment; one of the oldest continuously used grounds in football.",
      brand: "Three First Division titles (1950s); 'old-gold' Wolves identity heritage-rich; Jorge Mendes/GestiFute connection has produced steady stream of Portuguese marquee names (Diogo Jota, Rúben Neves, Pedro Neto).",
      marketSize: "West Midlands DMA shared with Aston Villa and Birmingham City; provincial market with strong Chinese commercial activation under Fosun ownership (Shanghai-based parent).",
      onField: "Three consecutive top-7 EPL finishes 2018-2021 unmatched since promotion; recent struggles around mid-table; Cunha/Ait-Nouri 2024 sale forced by PSR; squad value ~£280M (Transfermarkt)."
    }
  },

  "AFC Bournemouth": {
    extendedValuationHistory: [
      { year: 2000, value: 0.005, source: "League Two; near-administration", isEstimated: true },
      { year: 2008, value: 0.005, source: "administration; -17 points; almost folded", isEstimated: true },
      { year: 2011, value: 0.01, source: "Maxim Demin minority stake", isEstimated: true },
      { year: 2013, value: 0.02, source: "Demin buys 100% (~£850K)", isEstimated: true },
      { year: 2015, value: 0.10, source: "promoted to EPL; first time in top flight in 105-year history", isEstimated: true },
      { year: 2018, value: 0.18, source: "Forbes / EPL stable", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Stable EPL central distribution since 2022 promotion under Foley; mid-table merit payments; no European football exposure; parachute payment downside if relegated (~£44M Y1).",
      stadium: "Vitality Stadium (1910, 11,307) is smallest in EPL — capped matchday revenue; Foley-era plan for new 25K+ stadium under master-plan but no committed timeline.",
      brand: "Niche south-coast brand with no historic top-flight tradition before 2015; Bill Foley (Vegas Golden Knights/Black Knight) ownership injects American sports analytics culture and commercial professionalism.",
      marketSize: "Bournemouth DMA is small (~400K) but high-income coastal demographic; geographic isolation limits derby-economics but supports tight supporter base.",
      onField: "Surprise 9th place 2024-25 under Iraola is club's best-ever EPL finish; Solanke £55M sale to Spurs 2024 reset squad; Foley's player-trading-with-development model generating modest profit cycle."
    }
  },

  "Brentford": {
    extendedValuationHistory: [
      { year: 2000, value: 0.005, source: "League One; pre-Benham", isEstimated: true },
      { year: 2012, value: 0.01, source: "Matthew Benham (Smartodds, Matchbook) takeover; League One", isEstimated: true },
      { year: 2015, value: 0.03, source: "Championship steady", isEstimated: true },
      { year: 2018, value: 0.05, source: "Championship play-off contender", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Stable EPL central distribution since 2021 promotion; mid-table merit payments; data-driven recruitment model produces sustainable margin even without European football.",
      stadium: "Gtech Community Stadium (2020, 17,250) club-owned and privately financed (£71M); replaced 116-year-old Griffin Park; modern hospitality / commercial spec generates strong per-seat revenue.",
      brand: "London's seventh-largest EPL club by following but cult appeal among analytics fans; Benham's algorithmic recruitment / 'Moneyball' model generates outsized player-sale margins (Ivan Toney, Bryan Mbeumo).",
      marketSize: "West London DMA constrained between Fulham, Chelsea, Wimbledon AFC; commuter belt growth but small core fan base relative to neighbors.",
      onField: "Three consecutive EPL seasons since 2021 promotion (longest since 1947); 9th and 13th place finishes; squad value ~£280M (Transfermarkt); Frank-era data-led model now under Andoni Iraola pupil tree."
    }
  },

  "Nottingham Forest": {
    extendedValuationHistory: [
      { year: 2000, value: 0.05, source: "First Division (now Championship)", isEstimated: true },
      { year: 2005, value: 0.04, source: "League One relegation 2005", isEstimated: true },
      { year: 2008, value: 0.04, source: "promoted back to Championship", isEstimated: true },
      { year: 2012, value: 0.08, source: "Fawaz Al-Hasawi family buys from Doughty estate (~£50M)", isEstimated: true },
      { year: 2017, value: 0.10, source: "Marinakis buys from Al-Hasawi for ~£50M = ~$65M (debt-included)" },
      { year: 2018, value: 0.10, source: "Championship stabilization", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "EPL central distribution since 2022 promotion; PSR 4-point deduction 2024 limited mid-table merit payment ceiling; 2024-25 European football return (UECL) restores some broadcast leverage.",
      stadium: "City Ground (1898, 30,404) club-owned but in poor condition; Marinakis-led £100M Peter Taylor Stand redevelopment under planning; capacity expansion to ~38K targeted by 2027.",
      brand: "European Cup winners 1979 and 1980 (back-to-back) under Brian Clough — unique heritage credential among current EPL clubs at this revenue tier; one of only 5 English clubs to win European Cup.",
      marketSize: "East Midlands DMA shared with Leicester and Derby; smaller commercial base but loyal local following; Greek-Brazilian-Portuguese player connections under Marinakis's multi-club ownership (Olympiacos, Rio Ave).",
      onField: "Surprise 7th place 2024-25 with European qualification — best finish since 1995; squad value ~£270M (Transfermarkt); £55M Anthony Elanga sale to Newcastle 2025 funded ongoing rebuild."
    }
  },

  "Ipswich Town": {
    extendedValuationHistory: [
      { year: 2000, value: 0.05, source: "First Division; final season before relegation", isEstimated: true },
      { year: 2002, value: 0.03, source: "relegated to Championship", isEstimated: true },
      { year: 2018, value: 0.04, source: "Marcus Evans ownership; Championship", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Promoted to EPL May 2024 — first EPL season since 2001-02; central distribution lifts 2024-25 revenue ~5x vs. Championship; relegation-bound 2024-25 means 2025-26 parachute payment (~£44M).",
      stadium: "Portman Road (1884, 30,056) club-owned; oldest professional football ground in Suffolk; modest hospitality footprint; modernization plans contingent on EPL stay duration.",
      brand: "Heritage-rich East Anglian brand with 1981 UEFA Cup win + 1962 First Division title under Sir Alf Ramsey; longest-serving English manager (Ramsey 1955-63) before England 1966 World Cup; modest current fanbase.",
      marketSize: "East Anglian regional market — Suffolk/Norfolk catchment without major commercial hub; rivalry with Norwich City defines local economics.",
      onField: "Mick McCarthy / Kieran McKenna rebuild produced two consecutive promotions (League One → Championship → EPL); 2024-25 EPL relegation likely; squad value ~£70M (Transfermarkt) is smallest in EPL."
    }
  },

  "Leicester City": {
    extendedValuationHistory: [
      { year: 2000, value: 0.06, source: "Premier League era under Martin O'Neill", isEstimated: true },
      { year: 2002, value: 0.03, source: "relegation; financial crisis", isEstimated: true },
      { year: 2010, value: 0.04, source: "Vichai Srivaddhanaprabha (King Power) takeover (~£39M)", isEstimated: true },
      { year: 2014, value: 0.10, source: "promoted to EPL", isEstimated: true },
      { year: 2016, value: 0.30, source: "Premier League title — historic 5000-1 odds win" },
      { year: 2017, value: 0.32, source: "Forbes" },
      { year: 2018, value: 0.34, source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "EPL central distribution lifts 2024-25 revenue post-promotion; relegation-bound 2024-25 means 2025-26 parachute payment; PSR points deduction risk overhanging.",
      stadium: "King Power Stadium (2002, 32,261) club-owned; planned expansion to 40K under Top family multi-year master-plan; modern infrastructure relative to most newly promoted clubs.",
      brand: "2016 EPL title is one of sport's great underdog stories — global brand lift persists through 2024 across Asia (Thai owners, King Power duty-free retail) and US; FA Cup win 2021 added trophy density.",
      marketSize: "East Midlands DMA shared with Forest and Derby; Thai owners' King Power retail leverage extends commercial reach into Asian transit/airport markets uniquely among EPL clubs.",
      onField: "Title 2015-16 + FA Cup 2021 are recent franchise highs; relegated 2023, promoted 2024, likely relegated 2025; Vichai Srivaddhanaprabha helicopter death 2018 was inflection point; son Aiyawatt now governs."
    }
  },

  "Southampton": {
    extendedValuationHistory: [
      { year: 2000, value: 0.05, source: "Premier League established era", isEstimated: true },
      { year: 2005, value: 0.03, source: "relegated to Championship after 27 years in top flight", isEstimated: true },
      { year: 2009, value: 0.02, source: "administration; -10 points; League One; Markus Liebherr rescue (~£15M)", isEstimated: true },
      { year: 2012, value: 0.10, source: "promoted to EPL", isEstimated: true },
      { year: 2017, value: 0.30, source: "Gao Jisheng (Chinese property investor) buys 80% from Liebherr family for £210M = ~$270M" },
      { year: 2018, value: 0.30, source: "Forbes" },
    ],
    factorNarratives: {
      mediaRights: "EPL central distribution lifts 2024-25 revenue post-2024 promotion; earliest EPL relegation in history (2024-25, with 7 games to spare) means 2025-26 parachute payment (~£44M).",
      stadium: "St Mary's Stadium (2001, 32,384) club-owned; modern infrastructure adequate for EPL spec; one of the better stadia outside top-half clubs.",
      brand: "Player-development reputation at the academy level (Bale, Walcott, Oxlade-Chamberlain, Shaw, Lallana, Chambers) — the 'Saints System' is global academy benchmark; modest matchday brand.",
      marketSize: "South Coast DMA — Hampshire/Solent catchment ~1M; geographic isolation from London limits commercial activation but supports tight supporter base.",
      onField: "2024-25 EPL relegation (worst statistical EPL season ever — 12 points, fewer than Derby 2007-08 record); Sport Republic ownership (Solak) under pressure; rebuild focus on academy + Tyler Dibling generation."
    }
  }

};
