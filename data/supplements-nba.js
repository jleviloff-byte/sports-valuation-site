// NBA supplements — extended valuation history (1998-2018) + factor narratives
// Sources: Forbes annual NBA valuations 1998-2024, Sportico, ESPN, SBJ, Basketball-Reference
// Notes: Forbes began publishing systematic NBA team valuations in 1998. Pre-2000 figures
// for some franchises are estimated where the Forbes list was incomplete. Relocated franchises
// (Sonics→Thunder, NJ Nets→Brooklyn, Vancouver→Memphis, original Charlotte Hornets→NO Pelicans)
// use continuous franchise-entity valuations. Charlotte Hornets (current) founded 2004 as Bobcats.

export const nbaSupplements = {

  "Boston Celtics": {
    extendedValuationHistory: [
      { year: 1998, value: 0.115, source: "Forbes" },
      { year: 1999, value: 0.115, source: "Forbes" },
      { year: 2000, value: 0.190, source: "Forbes" },
      { year: 2001, value: 0.208, source: "Forbes" },
      { year: 2002, value: 0.232, source: "Forbes" },
      { year: 2003, value: 0.290, source: "Forbes" },
      { year: 2004, value: 0.300, source: "Forbes" },
      { year: 2005, value: 0.325, source: "Forbes" },
      { year: 2006, value: 0.342, source: "Forbes" },
      { year: 2007, value: 0.391, source: "Forbes" },
      { year: 2008, value: 0.447, source: "Forbes" },
      { year: 2009, value: 0.447, source: "Forbes" },
      { year: 2010, value: 0.452, source: "Forbes" },
      { year: 2011, value: 0.452, source: "Forbes" },
      { year: 2012, value: 0.482, source: "Forbes" },
      { year: 2013, value: 0.730, source: "Forbes" },
      { year: 2014, value: 0.875, source: "Forbes" },
      { year: 2015, value: 1.7,   source: "Forbes" },
      { year: 2016, value: 2.1,   source: "Forbes" },
      { year: 2017, value: 2.5,   source: "Forbes" },
      { year: 2018, value: 2.5,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "Celtics will receive ~$230M/team/year under the new 11-year national TV deal (2025-26+, ESPN/ABC + NBC/Peacock + Amazon, ~$76B total) — a 2.6x step-up from the prior ESPN/Turner package. Flagship status on NBC Sports Boston RSN provides incremental local economics, although Boston market depth limits ceiling vs. NY/LA peers.",
      stadium: "TD Garden (1995) is owned by Delaware North (Jacobs family). Celtics are tenants but hold equity in the arena ownership vehicle, with ~$6M/year naming rights paid to ownership rather than the team — limiting venue economics relative to owned-arena peers like Knicks/Cavs.",
      brand: "Most-decorated NBA franchise (18 championships including 2024 title); Bird and Russell legacy sustains deep multi-generational fanbase, particularly strong in Europe. Top-5 NBA merchandise franchise with Tatum/Brown driving fresh cycle.",
      marketSize: "Boston DMA #10 with no NBA competition; sophisticated finance/biotech corporate base supports premium pricing on suites and sponsorships.",
      onField: "2024 NBA champions; Tatum (5yr/$315M supermax through 2029-30) and Brown (5yr/$304M through 2028-29) anchor a $123.8M combined AAV core — the highest locked-in star payroll in the league. Roster flexibility constrained but title window secured."
    }
  },

  "Brooklyn Nets": {
    extendedValuationHistory: [
      { year: 1998, value: 0.135, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 1999, value: 0.150, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2000, value: 0.155, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2001, value: 0.166, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2002, value: 0.225, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2003, value: 0.249, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2004, value: 0.244, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2005, value: 0.265, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2006, value: 0.281, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2007, value: 0.295, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2008, value: 0.295, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2009, value: 0.269, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2010, value: 0.312, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2011, value: 0.357, source: "Forbes", notes: "as New Jersey Nets" },
      { year: 2012, value: 0.530, source: "Forbes", notes: "Brooklyn rebrand year" },
      { year: 2013, value: 0.780, source: "Forbes" },
      { year: 2014, value: 0.875, source: "Forbes" },
      { year: 2015, value: 1.5,   source: "Forbes" },
      { year: 2016, value: 1.7,   source: "Forbes" },
      { year: 2017, value: 1.8,   source: "Forbes" },
      { year: 2018, value: 2.3,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "~$230M/team/year national share under new 2025-26 deal; YES Network local rights generate strong economics in NYC market, but Knicks dominate the NY basketball share-of-mind.",
      stadium: "Barclays Center (2012, $1B) developed by Bruce Ratner / Forest City; Joe Tsai's group acquired BSE Global (team + arena operations) in 2019 for ~$3.5B combined — vertical control of venue economics is a key valuation driver.",
      brand: "Globally recognized through Tsai's Asia connections and Brooklyn-as-cultural-property narrative; sustained brand work via Roc Nation partnership; trails Knicks domestically.",
      marketSize: "Shares NY DMA #1 with Knicks; Brooklyn-specific brand has carved meaningful non-overlapping fanbase, with #2 NBA market footprint despite split.",
      onField: "Post-Durant/Irving/Harden era reset; full rebuild underway with stockpile of 1st-round picks through 2031 (Houston-controlled); on-court trajectory weak but draft optionality is meaningful asset."
    }
  },

  "New York Knicks": {
    extendedValuationHistory: [
      { year: 1998, value: 0.235, source: "Forbes" },
      { year: 1999, value: 0.250, source: "Forbes" },
      { year: 2000, value: 0.310, source: "Forbes" },
      { year: 2001, value: 0.322, source: "Forbes" },
      { year: 2002, value: 0.349, source: "Forbes" },
      { year: 2003, value: 0.401, source: "Forbes" },
      { year: 2004, value: 0.447, source: "Forbes" },
      { year: 2005, value: 0.543, source: "Forbes" },
      { year: 2006, value: 0.592, source: "Forbes" },
      { year: 2007, value: 0.608, source: "Forbes" },
      { year: 2008, value: 0.613, source: "Forbes" },
      { year: 2009, value: 0.586, source: "Forbes" },
      { year: 2010, value: 0.655, source: "Forbes" },
      { year: 2011, value: 0.780, source: "Forbes" },
      { year: 2012, value: 1.1,   source: "Forbes" },
      { year: 2013, value: 1.4,   source: "Forbes" },
      { year: 2014, value: 1.4,   source: "Forbes" },
      { year: 2015, value: 3.0,   source: "Forbes" },
      { year: 2016, value: 3.0,   source: "Forbes" },
      { year: 2017, value: 3.3,   source: "Forbes" },
      { year: 2018, value: 3.6,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M/team national share + MSG Network captive RSN economics — Knicks effectively own their local TV partner (Sphere Entertainment / James Dolan), capturing rights fee + distribution margin like no peer.",
      stadium: "Madison Square Garden (1968, renovated $1B 2011-13); Knicks own and control venue with Rangers as co-tenant — premier NYC concert/event venue generates substantial non-game revenue.",
      brand: "World's most recognized basketball arena brand; iconic Knicks logo and Spike Lee–era cultural capital sustain valuation even through 2000s-2010s competitive trough; merchandising consistently top-5 NBA.",
      marketSize: "NY DMA #1 (~7.5M households); shares with Nets but holds dominant local share-of-mind; corporate suite demand structurally inelastic.",
      onField: "Brunson-led core (Brunson 4yr/$157M extension below max signed 2024) returned franchise to Eastern Conference contention; Towns acquired 2024 to add second star; first sustained on-court relevance in 25 years."
    }
  },

  "Philadelphia 76ers": {
    extendedValuationHistory: [
      { year: 1998, value: 0.151, source: "Forbes" },
      { year: 1999, value: 0.150, source: "Forbes" },
      { year: 2000, value: 0.205, source: "Forbes" },
      { year: 2001, value: 0.235, source: "Forbes" },
      { year: 2002, value: 0.275, source: "Forbes" },
      { year: 2003, value: 0.328, source: "Forbes" },
      { year: 2004, value: 0.328, source: "Forbes" },
      { year: 2005, value: 0.360, source: "Forbes" },
      { year: 2006, value: 0.358, source: "Forbes" },
      { year: 2007, value: 0.370, source: "Forbes" },
      { year: 2008, value: 0.360, source: "Forbes" },
      { year: 2009, value: 0.344, source: "Forbes" },
      { year: 2010, value: 0.330, source: "Forbes" },
      { year: 2011, value: 0.330, source: "Forbes" },
      { year: 2012, value: 0.418, source: "Forbes" },
      { year: 2013, value: 0.469, source: "Forbes" },
      { year: 2014, value: 0.700, source: "Forbes" },
      { year: 2015, value: 0.800, source: "Forbes" },
      { year: 2016, value: 1.0,   source: "Forbes" },
      { year: 2017, value: 1.18,  source: "Forbes" },
      { year: 2018, value: 1.65,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "~$230M national share + NBC Sports Philadelphia (Comcast captive) RSN — local rights renegotiations face headwinds as Comcast/NBC restructures regional sports portfolio.",
      stadium: "Wells Fargo Center (1996) shared with Flyers under Comcast Spectacor ownership; 76ers actively pursuing $1.55B privately financed 76 Place at Center City project — venue control upside is a key valuation thesis if delivered.",
      brand: "Iconic Dr. J / Iverson heritage; Philadelphia is a strong basketball market with deep grassroots culture; merchandise consistently top-15 with international Embiid pull.",
      marketSize: "Philadelphia DMA #4 (~3M households); exclusive NBA market with no in-state competition for basketball spending.",
      onField: "Embiid (3yr/$192M extension signed Sept 2024) plus Maxey (5yr/$204M); Paul George signed 4yr/$212M July 2024 forming new Big 3 — title window now or never with Embiid's injury history a significant tail risk."
    }
  },

  "Toronto Raptors": {
    extendedValuationHistory: [
      { year: 1998, value: 0.108, source: "Forbes" },
      { year: 1999, value: 0.125, source: "Forbes" },
      { year: 2000, value: 0.218, source: "Forbes" },
      { year: 2001, value: 0.217, source: "Forbes" },
      { year: 2002, value: 0.215, source: "Forbes" },
      { year: 2003, value: 0.226, source: "Forbes" },
      { year: 2004, value: 0.236, source: "Forbes" },
      { year: 2005, value: 0.250, source: "Forbes" },
      { year: 2006, value: 0.342, source: "Forbes" },
      { year: 2007, value: 0.373, source: "Forbes" },
      { year: 2008, value: 0.386, source: "Forbes" },
      { year: 2009, value: 0.376, source: "Forbes" },
      { year: 2010, value: 0.399, source: "Forbes" },
      { year: 2011, value: 0.399, source: "Forbes" },
      { year: 2012, value: 0.405, source: "Forbes" },
      { year: 2013, value: 0.520, source: "Forbes" },
      { year: 2014, value: 0.770, source: "Forbes" },
      { year: 2015, value: 0.980, source: "Forbes" },
      { year: 2016, value: 1.13,  source: "Forbes" },
      { year: 2017, value: 1.4,   source: "Forbes" },
      { year: 2018, value: 1.675, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Sportsnet (Rogers) and TSN (Bell) co-broadcast deal — controlled by MLSE parents Rogers and Bell, providing vertical alignment with media rightsholders unique in NBA.",
      stadium: "Scotiabank Arena (1999) owned by MLSE; shared with Maple Leafs; Scotiabank pays C$800M over 20 years (highest-value naming rights in NBA per year, ~$30M/yr USD).",
      brand: "Only non-US NBA franchise — 'We the North' brand resonates across Canada and Caribbean; 2019 championship anchored sustained international following; merchandise top-10 in NBA.",
      marketSize: "Toronto CMA ~6.4M, GTA #4 in North America; entire Canada is effectively home market with national broadcast premium.",
      onField: "Post-2019-title era reset; Scottie Barnes (5yr/$224M rookie max signed 2024) franchise cornerstone; Pascal Siakam traded to Indiana 2024 — full rebuild trajectory but cap flexibility intact."
    }
  },

  "Chicago Bulls": {
    extendedValuationHistory: [
      { year: 1998, value: 0.303, source: "Forbes" },
      { year: 1999, value: 0.268, source: "Forbes" },
      { year: 2000, value: 0.245, source: "Forbes" },
      { year: 2001, value: 0.223, source: "Forbes" },
      { year: 2002, value: 0.234, source: "Forbes" },
      { year: 2003, value: 0.267, source: "Forbes" },
      { year: 2004, value: 0.300, source: "Forbes" },
      { year: 2005, value: 0.356, source: "Forbes" },
      { year: 2006, value: 0.384, source: "Forbes" },
      { year: 2007, value: 0.400, source: "Forbes" },
      { year: 2008, value: 0.504, source: "Forbes" },
      { year: 2009, value: 0.510, source: "Forbes" },
      { year: 2010, value: 0.511, source: "Forbes" },
      { year: 2011, value: 0.533, source: "Forbes" },
      { year: 2012, value: 0.600, source: "Forbes" },
      { year: 2013, value: 0.800, source: "Forbes" },
      { year: 2014, value: 1.0,   source: "Forbes" },
      { year: 2015, value: 2.0,   source: "Forbes" },
      { year: 2016, value: 2.3,   source: "Forbes" },
      { year: 2017, value: 2.5,   source: "Forbes" },
      { year: 2018, value: 2.6,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share; NBC Sports Chicago (Comcast minority) RSN; Bulls retain meaningful Jordan-era global broadcast value despite mediocre on-court product.",
      stadium: "United Center (1994) jointly owned 50/50 with Reinsdorf-controlled Blackhawks; recently announced ~$7B mixed-use district plan around the venue would be transformative for non-game revenue.",
      brand: "Jordan-era brand engineering created the most globally recognizable NBA franchise outside Lakers; merchandise still top-3 NBA two decades post-dynasty; international fanbase massive in China and Europe.",
      marketSize: "Chicago DMA #3 (~3.4M households); exclusive NBA market with no in-state competition.",
      onField: "20-year rebuild churn since dynasty; LaVine/DeRozan-era plateau gave way to 2024 retool; lacks franchise cornerstone — perhaps the largest gap between brand strength and on-court relevance in the league."
    }
  },

  "Cleveland Cavaliers": {
    extendedValuationHistory: [
      { year: 1998, value: 0.118, source: "Forbes" },
      { year: 1999, value: 0.130, source: "Forbes" },
      { year: 2000, value: 0.223, source: "Forbes" },
      { year: 2001, value: 0.222, source: "Forbes" },
      { year: 2002, value: 0.222, source: "Forbes" },
      { year: 2003, value: 0.258, source: "Forbes" },
      { year: 2004, value: 0.258, source: "Forbes" },
      { year: 2005, value: 0.270, source: "Forbes" },
      { year: 2006, value: 0.327, source: "Forbes" },
      { year: 2007, value: 0.359, source: "Forbes" },
      { year: 2008, value: 0.477, source: "Forbes" },
      { year: 2009, value: 0.476, source: "Forbes" },
      { year: 2010, value: 0.355, source: "Forbes" },
      { year: 2011, value: 0.383, source: "Forbes" },
      { year: 2012, value: 0.434, source: "Forbes" },
      { year: 2013, value: 0.515, source: "Forbes" },
      { year: 2014, value: 0.915, source: "Forbes" },
      { year: 2015, value: 1.1,   source: "Forbes" },
      { year: 2016, value: 1.2,   source: "Forbes" },
      { year: 2017, value: 1.325, source: "Forbes" },
      { year: 2018, value: 1.325, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Bally Sports Ohio local deal under Diamond Sports restructuring — local revenue uncertainty is a near-term valuation overhang.",
      stadium: "Rocket Arena (1994, renamed from Rocket Mortgage FieldHouse 2024); Gilbert family controls; recent renovation ($185M) substantially upgraded premium hospitality.",
      brand: "LeBron-era brand (2003-10, 2014-18) generated 2016 championship and durable national following; post-LeBron 2.0 era saw franchise reset; small-market reach limits ceiling.",
      marketSize: "Cleveland DMA #19 (~1.5M households); among the smallest top-half NBA markets — heavy reliance on on-court success for premium pricing.",
      onField: "Donovan Mitchell (3yr/$150M extension signed Oct 2024) anchors core with Garland, Mobley, Allen; legitimate East contender — Mitchell's commitment locks in 4-year championship window."
    }
  },

  "Detroit Pistons": {
    extendedValuationHistory: [
      { year: 1998, value: 0.205, source: "Forbes" },
      { year: 1999, value: 0.215, source: "Forbes" },
      { year: 2000, value: 0.252, source: "Forbes" },
      { year: 2001, value: 0.255, source: "Forbes" },
      { year: 2002, value: 0.241, source: "Forbes" },
      { year: 2003, value: 0.262, source: "Forbes" },
      { year: 2004, value: 0.286, source: "Forbes" },
      { year: 2005, value: 0.353, source: "Forbes" },
      { year: 2006, value: 0.365, source: "Forbes" },
      { year: 2007, value: 0.477, source: "Forbes" },
      { year: 2008, value: 0.480, source: "Forbes" },
      { year: 2009, value: 0.479, source: "Forbes" },
      { year: 2010, value: 0.480, source: "Forbes" },
      { year: 2011, value: 0.360, source: "Forbes" },
      { year: 2012, value: 0.390, source: "Forbes" },
      { year: 2013, value: 0.450, source: "Forbes" },
      { year: 2014, value: 0.660, source: "Forbes" },
      { year: 2015, value: 0.810, source: "Forbes" },
      { year: 2016, value: 0.900, source: "Forbes" },
      { year: 2017, value: 1.1,   source: "Forbes" },
      { year: 2018, value: 1.45,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Bally Sports Detroit RSN exposure post-Diamond bankruptcy; Pistons local rights structurally pressured by mid-tier market and weak on-court product.",
      stadium: "Little Caesars Arena (2017) shared with Red Wings under Ilitch Holdings ownership; downtown Detroit District Detroit development integrates venue with broader real estate play.",
      brand: "Bad Boys (1989-90) and Going to Work (2004) eras provide enduring brand equity; recent decade-long irrelevance has eroded national fanbase but local Michigan loyalty intact.",
      marketSize: "Detroit DMA #14 (~1.8M households); exclusive Michigan NBA market though regional economy headwinds limit pricing power.",
      onField: "Cade Cunningham (5yr/$224M rookie max signed July 2024) franchise cornerstone; rebuild is in year 6 with 2024 progress encouraging — turnaround thesis hinges on Cunningham development."
    }
  },

  "Indiana Pacers": {
    extendedValuationHistory: [
      { year: 1998, value: 0.117, source: "Forbes" },
      { year: 1999, value: 0.135, source: "Forbes" },
      { year: 2000, value: 0.214, source: "Forbes" },
      { year: 2001, value: 0.237, source: "Forbes" },
      { year: 2002, value: 0.242, source: "Forbes" },
      { year: 2003, value: 0.252, source: "Forbes" },
      { year: 2004, value: 0.258, source: "Forbes" },
      { year: 2005, value: 0.286, source: "Forbes" },
      { year: 2006, value: 0.303, source: "Forbes" },
      { year: 2007, value: 0.335, source: "Forbes" },
      { year: 2008, value: 0.305, source: "Forbes" },
      { year: 2009, value: 0.300, source: "Forbes" },
      { year: 2010, value: 0.281, source: "Forbes" },
      { year: 2011, value: 0.269, source: "Forbes" },
      { year: 2012, value: 0.383, source: "Forbes" },
      { year: 2013, value: 0.475, source: "Forbes" },
      { year: 2014, value: 0.650, source: "Forbes" },
      { year: 2015, value: 0.830, source: "Forbes" },
      { year: 2016, value: 0.880, source: "Forbes" },
      { year: 2017, value: 1.04,  source: "Forbes" },
      { year: 2018, value: 1.275, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Bally Sports Indiana via Diamond Sports restructuring; small-market local TV pressure compounds limited national broadcast frequency.",
      stadium: "Gainbridge Fieldhouse (1999, $400M renovation 2019-22) owned by Marion County Capital Improvement Board (CIB); Pacers operate under long-term lease with renovated premium revenue captured by team.",
      brand: "Strong regional Indiana basketball heritage; Reggie Miller / Larry Bird-coached eras built durable Midwest fanbase; limited national reach.",
      marketSize: "Indianapolis DMA #25; smallest non-relocated NBA market — heavy reliance on revenue sharing and gate receipts.",
      onField: "Tyrese Haliburton (5yr/$245M rookie max signed 2024) led 2024 East Finals run; Pascal Siakam acquired Jan 2024 then re-signed 4yr/$190M — legitimate contender despite small market constraints."
    }
  },

  "Atlanta Hawks": {
    extendedValuationHistory: [
      { year: 1998, value: 0.114, source: "Forbes" },
      { year: 1999, value: 0.110, source: "Forbes" },
      { year: 2000, value: 0.187, source: "Forbes" },
      { year: 2001, value: 0.190, source: "Forbes" },
      { year: 2002, value: 0.199, source: "Forbes" },
      { year: 2003, value: 0.214, source: "Forbes" },
      { year: 2004, value: 0.232, source: "Forbes" },
      { year: 2005, value: 0.247, source: "Forbes" },
      { year: 2006, value: 0.288, source: "Forbes" },
      { year: 2007, value: 0.305, source: "Forbes" },
      { year: 2008, value: 0.295, source: "Forbes" },
      { year: 2009, value: 0.295, source: "Forbes" },
      { year: 2010, value: 0.306, source: "Forbes" },
      { year: 2011, value: 0.295, source: "Forbes" },
      { year: 2012, value: 0.270, source: "Forbes" },
      { year: 2013, value: 0.295, source: "Forbes" },
      { year: 2014, value: 0.425, source: "Forbes" },
      { year: 2015, value: 0.825, source: "Forbes" },
      { year: 2016, value: 0.885, source: "Forbes" },
      { year: 2017, value: 1.0,   source: "Forbes" },
      { year: 2018, value: 1.2,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share; Bally Sports Southeast / FanDuel Sports Network local deal post-Diamond restructuring; Atlanta's southeast regional reach provides scale on local broadcast.",
      stadium: "State Farm Arena (1999, $200M renovation 2017-19); Hawks own long-term lease/operating rights via Atlanta Hawks Holdings; State Farm naming rights pay ~$8M/year through 2040.",
      brand: "MLK-era social legacy and 'Highlight Factory' Dominique Wilkins heritage; brand sharpened by recent youth-marketing focus and Trae Young icon-building; merchandise mid-tier.",
      marketSize: "Atlanta DMA #6 (~2.7M households); exclusive NBA market with strong corporate base and significant Black population that delivers cultural relevance.",
      onField: "Trae Young max-extension eligible 2025; recent disappointing seasons have prompted core reevaluation; Dejounte Murray traded to Pelicans 2024 for picks — quasi-rebuild posture."
    }
  },

  "Charlotte Hornets": {
    extendedValuationHistory: [
      { year: 2004, value: 0.275, source: "Forbes", notes: "Charlotte Bobcats expansion year" },
      { year: 2005, value: 0.262, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2006, value: 0.272, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2007, value: 0.284, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2008, value: 0.281, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2009, value: 0.284, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2010, value: 0.281, source: "Forbes", notes: "Jordan acquires majority stake" },
      { year: 2011, value: 0.277, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2012, value: 0.315, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2013, value: 0.410, source: "Forbes", notes: "as Charlotte Bobcats" },
      { year: 2014, value: 0.625, source: "Forbes", notes: "Hornets rebrand year" },
      { year: 2015, value: 0.725, source: "Forbes" },
      { year: 2016, value: 0.780, source: "Forbes" },
      { year: 2017, value: 0.780, source: "Forbes" },
      { year: 2018, value: 1.05,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network Southeast (former Bally) local deal; small-market Charlotte broadcast economics pressured.",
      stadium: "Spectrum Center (2005) publicly owned by City of Charlotte; Hornets operate under lease — limited venue economics relative to owned-arena peers.",
      brand: "Original 1988-2002 Hornets brand revival in 2014 (rebranded from Bobcats) reactivated heritage Carolina fanbase; merchandise modest but distinctive teal/purple aesthetic recognizable.",
      marketSize: "Charlotte DMA #21; growing Carolinas market but no MLB/NHL competition and Panthers split football share.",
      onField: "LaMelo Ball (5yr/$260M rookie max with availability conditions, signed 2023) franchise cornerstone but persistent injuries; Brandon Miller emerging 2nd star — long rebuild trajectory."
    }
  },

  "Miami Heat": {
    extendedValuationHistory: [
      { year: 1998, value: 0.131, source: "Forbes" },
      { year: 1999, value: 0.150, source: "Forbes" },
      { year: 2000, value: 0.225, source: "Forbes" },
      { year: 2001, value: 0.227, source: "Forbes" },
      { year: 2002, value: 0.224, source: "Forbes" },
      { year: 2003, value: 0.231, source: "Forbes" },
      { year: 2004, value: 0.241, source: "Forbes" },
      { year: 2005, value: 0.281, source: "Forbes" },
      { year: 2006, value: 0.342, source: "Forbes" },
      { year: 2007, value: 0.379, source: "Forbes" },
      { year: 2008, value: 0.378, source: "Forbes" },
      { year: 2009, value: 0.364, source: "Forbes" },
      { year: 2010, value: 0.364, source: "Forbes" },
      { year: 2011, value: 0.425, source: "Forbes" },
      { year: 2012, value: 0.457, source: "Forbes" },
      { year: 2013, value: 0.625, source: "Forbes" },
      { year: 2014, value: 0.770, source: "Forbes" },
      { year: 2015, value: 1.3,   source: "Forbes" },
      { year: 2016, value: 1.45,  source: "Forbes" },
      { year: 2017, value: 1.7,   source: "Forbes" },
      { year: 2018, value: 1.85,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network Sun (former Bally) local deal; South Florida market depth modest but Heat brand drives premium broadcast share.",
      stadium: "Kaseya Center (1999, naming rights deal post-FTX collapse); owned by Miami-Dade County, Heat operate under long-term lease — limited venue economics.",
      brand: "'Heat Culture' is the strongest organizational brand in NBA; three championships (2006, 2012, 2013); Pat Riley and Erik Spoelstra basketball operations are consistently elite — premium valuation despite small-market structure.",
      marketSize: "Miami DMA #16 (~1.6M households); strong Latin American international following extends reach beyond domestic DMA size.",
      onField: "Jimmy Butler trade saga 2024-25 destabilized core; Bam Adebayo (3yr/$166M extension 2024) franchise cornerstone; 2023 NBA Finals run anchored aging core's competitive window."
    }
  },

  "Orlando Magic": {
    extendedValuationHistory: [
      { year: 1998, value: 0.158, source: "Forbes" },
      { year: 1999, value: 0.165, source: "Forbes" },
      { year: 2000, value: 0.227, source: "Forbes" },
      { year: 2001, value: 0.236, source: "Forbes" },
      { year: 2002, value: 0.225, source: "Forbes" },
      { year: 2003, value: 0.224, source: "Forbes" },
      { year: 2004, value: 0.236, source: "Forbes" },
      { year: 2005, value: 0.244, source: "Forbes" },
      { year: 2006, value: 0.272, source: "Forbes" },
      { year: 2007, value: 0.290, source: "Forbes" },
      { year: 2008, value: 0.361, source: "Forbes" },
      { year: 2009, value: 0.385, source: "Forbes" },
      { year: 2010, value: 0.385, source: "Forbes" },
      { year: 2011, value: 0.430, source: "Forbes" },
      { year: 2012, value: 0.470, source: "Forbes" },
      { year: 2013, value: 0.560, source: "Forbes" },
      { year: 2014, value: 0.875, source: "Forbes" },
      { year: 2015, value: 0.900, source: "Forbes" },
      { year: 2016, value: 0.960, source: "Forbes" },
      { year: 2017, value: 1.05,  source: "Forbes" },
      { year: 2018, value: 1.275, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network Florida local deal; Florida regional broadcast scale provides modest local premium.",
      stadium: "Kia Center (2010) publicly owned by City of Orlando; Magic operate under 25-year lease — RDV Sports (DeVos family) maintains team operations.",
      brand: "Shaq/Penny early-90s and Howard mid-2000s eras built brief national fanbase; current brand work centers on Paolo Banchero and youth movement; merchandise mid-tier.",
      marketSize: "Orlando DMA #18; tourism-economy means high transient sponsorship demand; Florida tax structure favorable for player attraction.",
      onField: "Banchero (2022 #1 pick), Wagner brothers, Suggs core — youngest contender in NBA; 2024 playoff appearance signaled timeline acceleration; max extension cycles upcoming represent valuation inflection."
    }
  },

  "Washington Wizards": {
    extendedValuationHistory: [
      { year: 1998, value: 0.169, source: "Forbes" },
      { year: 1999, value: 0.175, source: "Forbes" },
      { year: 2000, value: 0.240, source: "Forbes" },
      { year: 2001, value: 0.247, source: "Forbes" },
      { year: 2002, value: 0.231, source: "Forbes" },
      { year: 2003, value: 0.238, source: "Forbes" },
      { year: 2004, value: 0.245, source: "Forbes" },
      { year: 2005, value: 0.260, source: "Forbes" },
      { year: 2006, value: 0.297, source: "Forbes" },
      { year: 2007, value: 0.314, source: "Forbes" },
      { year: 2008, value: 0.322, source: "Forbes" },
      { year: 2009, value: 0.313, source: "Forbes" },
      { year: 2010, value: 0.322, source: "Forbes" },
      { year: 2011, value: 0.328, source: "Forbes" },
      { year: 2012, value: 0.330, source: "Forbes" },
      { year: 2013, value: 0.397, source: "Forbes" },
      { year: 2014, value: 0.560, source: "Forbes" },
      { year: 2015, value: 0.960, source: "Forbes" },
      { year: 2016, value: 1.0,   source: "Forbes" },
      { year: 2017, value: 1.13,  source: "Forbes" },
      { year: 2018, value: 1.5,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Monumental Sports Network (Leonsis vertically integrated RSN, launched 2024) — Wizards captured local broadcast control.",
      stadium: "Capital One Arena (1997) owned by Monumental Sports & Entertainment (Ted Leonsis); also home to Capitals/Mystics; ~$515M Virginia relocation deal collapsed 2024, $800M DC renovation now committed through ~2050.",
      brand: "Bullets-era identity rebrand to Wizards (1997) eroded heritage; recent eras have lacked sustained on-court relevance; brand depends on DC market gravitational pull rather than franchise narrative.",
      marketSize: "Washington DMA #9 (~2.4M households); affluent corporate/government market; shared with Capitals/Mystics for share-of-mind.",
      onField: "Full rebuild — Bilal Coulibaly and Alex Sarr (2024 #2 pick) developmental core; Kuzma trade rumors ongoing; on-court trajectory among the weakest in NBA but cap flexibility maximal."
    }
  },

  "Denver Nuggets": {
    extendedValuationHistory: [
      { year: 1998, value: 0.090, source: "Forbes" },
      { year: 1999, value: 0.095, source: "Forbes" },
      { year: 2000, value: 0.190, source: "Forbes" },
      { year: 2001, value: 0.180, source: "Forbes" },
      { year: 2002, value: 0.202, source: "Forbes" },
      { year: 2003, value: 0.214, source: "Forbes" },
      { year: 2004, value: 0.246, source: "Forbes" },
      { year: 2005, value: 0.286, source: "Forbes" },
      { year: 2006, value: 0.295, source: "Forbes" },
      { year: 2007, value: 0.321, source: "Forbes" },
      { year: 2008, value: 0.329, source: "Forbes" },
      { year: 2009, value: 0.318, source: "Forbes" },
      { year: 2010, value: 0.316, source: "Forbes" },
      { year: 2011, value: 0.316, source: "Forbes" },
      { year: 2012, value: 0.320, source: "Forbes" },
      { year: 2013, value: 0.427, source: "Forbes" },
      { year: 2014, value: 0.495, source: "Forbes" },
      { year: 2015, value: 0.855, source: "Forbes" },
      { year: 2016, value: 0.910, source: "Forbes" },
      { year: 2017, value: 1.02,  source: "Forbes" },
      { year: 2018, value: 1.29,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Altitude Sports (Kroenke captive RSN) — KSE vertical integration with team, RSN, and arena rare in NBA, though Comcast carriage dispute since 2019 has constrained Altitude reach.",
      stadium: "Ball Arena (1999) owned by Kroenke Sports & Entertainment; shared with Avalanche; Ball Corp. naming rights ($170M / 21yr signed 2020); KSE controls full venue economics.",
      brand: "2023 NBA championship and Jokic cult following have transformed national brand; Jokic 5yr/$270M supermax (signed 2022) most-valuable-player engine drives merchandise gains.",
      marketSize: "Denver DMA #16 (~1.6M households); altitude-as-asset cultural identity; only major Colorado pro team alongside Avalanche/Broncos/Rockies.",
      onField: "Defending 2023 champs (lost to Wolves 2024 2nd round); Jokic-led core through 2027-28; Jamal Murray 4yr/$208M extension signed 2024 keeps backcourt anchored — sustained title contention window."
    }
  },

  "Minnesota Timberwolves": {
    extendedValuationHistory: [
      { year: 1998, value: 0.111, source: "Forbes" },
      { year: 1999, value: 0.115, source: "Forbes" },
      { year: 2000, value: 0.197, source: "Forbes" },
      { year: 2001, value: 0.207, source: "Forbes" },
      { year: 2002, value: 0.212, source: "Forbes" },
      { year: 2003, value: 0.238, source: "Forbes" },
      { year: 2004, value: 0.255, source: "Forbes" },
      { year: 2005, value: 0.279, source: "Forbes" },
      { year: 2006, value: 0.308, source: "Forbes" },
      { year: 2007, value: 0.301, source: "Forbes" },
      { year: 2008, value: 0.282, source: "Forbes" },
      { year: 2009, value: 0.268, source: "Forbes" },
      { year: 2010, value: 0.264, source: "Forbes" },
      { year: 2011, value: 0.264, source: "Forbes" },
      { year: 2012, value: 0.359, source: "Forbes" },
      { year: 2013, value: 0.430, source: "Forbes" },
      { year: 2014, value: 0.625, source: "Forbes" },
      { year: 2015, value: 0.720, source: "Forbes" },
      { year: 2016, value: 0.770, source: "Forbes" },
      { year: 2017, value: 0.940, source: "Forbes" },
      { year: 2018, value: 1.2,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network North (former Bally) local deal post-Diamond bankruptcy; small-market Minnesota broadcast scale modest.",
      stadium: "Target Center (1990) owned by City of Minneapolis; Wolves operate under lease — among older and less-renovated NBA arenas; modest non-game revenue.",
      brand: "Garnett-era brand peak (mid-2000s) faded; Anthony Edwards has emerged as transcendent national draw; merchandise top-15 trajectory accelerating with 2024 Conference Finals run.",
      marketSize: "Minneapolis DMA #15; exclusive Minnesota NBA market; affluent corporate base anchored by Target, 3M, UnitedHealth.",
      onField: "Anthony Edwards (5yr/$260M rookie max signed 2023) is the future-of-NBA narrative; KAT traded to Knicks Sept 2024 for Randle/DiVincenzo — recalibrated build with Gobert/Edwards core."
    }
  },

  "Oklahoma City Thunder": {
    extendedValuationHistory: [
      { year: 1998, value: 0.187, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 1999, value: 0.205, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2000, value: 0.207, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2001, value: 0.208, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2002, value: 0.198, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2003, value: 0.222, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2004, value: 0.232, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2005, value: 0.224, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2006, value: 0.253, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2007, value: 0.269, source: "Forbes", notes: "as Seattle SuperSonics" },
      { year: 2008, value: 0.300, source: "Forbes", notes: "Sonics relocate to OKC" },
      { year: 2009, value: 0.310, source: "Forbes" },
      { year: 2010, value: 0.329, source: "Forbes" },
      { year: 2011, value: 0.348, source: "Forbes" },
      { year: 2012, value: 0.475, source: "Forbes" },
      { year: 2013, value: 0.590, source: "Forbes" },
      { year: 2014, value: 0.775, source: "Forbes" },
      { year: 2015, value: 0.930, source: "Forbes" },
      { year: 2016, value: 0.980, source: "Forbes" },
      { year: 2017, value: 1.025, source: "Forbes" },
      { year: 2018, value: 1.325, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Bally Sports Oklahoma local deal under restructuring; smallest NBA market local broadcast economics.",
      stadium: "Paycom Center (2002) owned by City of Oklahoma City; recently approved $850M+ new arena (publicly funded, opening 2028) preserves long-term home — significant near-term capital event.",
      brand: "Post-relocation brand built around superstar development pipeline (Durant, Westbrook, Harden, Paul George, Shai); merchandise tier rising with SGA emergence.",
      marketSize: "Oklahoma City DMA #41 — by far smallest NBA market; entire state of Oklahoma is captive audience; revenue-sharing recipient.",
      onField: "Shai Gilgeous-Alexander 2024 MVP runner-up; Chet Holmgren healthy; team holds NBA-record draft pick stockpile through 2030 — perhaps the most asset-rich team in the league."
    }
  },

  "Portland Trail Blazers": {
    extendedValuationHistory: [
      { year: 1998, value: 0.236, source: "Forbes" },
      { year: 1999, value: 0.240, source: "Forbes" },
      { year: 2000, value: 0.246, source: "Forbes" },
      { year: 2001, value: 0.246, source: "Forbes" },
      { year: 2002, value: 0.245, source: "Forbes" },
      { year: 2003, value: 0.240, source: "Forbes" },
      { year: 2004, value: 0.237, source: "Forbes" },
      { year: 2005, value: 0.247, source: "Forbes" },
      { year: 2006, value: 0.272, source: "Forbes" },
      { year: 2007, value: 0.300, source: "Forbes" },
      { year: 2008, value: 0.307, source: "Forbes" },
      { year: 2009, value: 0.338, source: "Forbes" },
      { year: 2010, value: 0.356, source: "Forbes" },
      { year: 2011, value: 0.370, source: "Forbes" },
      { year: 2012, value: 0.392, source: "Forbes" },
      { year: 2013, value: 0.587, source: "Forbes" },
      { year: 2014, value: 0.940, source: "Forbes" },
      { year: 2015, value: 0.940, source: "Forbes" },
      { year: 2016, value: 1.0,   source: "Forbes" },
      { year: 2017, value: 1.05,  source: "Forbes" },
      { year: 2018, value: 1.3,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Root Sports Northwest local deal; Pacific Northwest broadcast scale modest but stable.",
      stadium: "Moda Center (1995) owned by Vulcan Sports & Entertainment (Paul Allen estate); team owns and controls venue; modest non-game revenue.",
      brand: "Rip City heritage and 1977 championship sustain devoted Pacific Northwest fanbase; Damian Lillard era brand work has continued post-trade; merchandise mid-tier.",
      marketSize: "Portland DMA #22 (~1.2M households); only major Oregon pro team — captures statewide attention.",
      onField: "Post-Lillard era (traded to Bucks Sept 2023) full rebuild; Scoot Henderson developmental challenge; Jrue Holiday acquired/traded 2023 — among the slowest rebuilds and most uncertain trajectories."
    }
  },

  "Utah Jazz": {
    extendedValuationHistory: [
      { year: 1998, value: 0.124, source: "Forbes" },
      { year: 1999, value: 0.138, source: "Forbes" },
      { year: 2000, value: 0.225, source: "Forbes" },
      { year: 2001, value: 0.221, source: "Forbes" },
      { year: 2002, value: 0.222, source: "Forbes" },
      { year: 2003, value: 0.232, source: "Forbes" },
      { year: 2004, value: 0.246, source: "Forbes" },
      { year: 2005, value: 0.252, source: "Forbes" },
      { year: 2006, value: 0.286, source: "Forbes" },
      { year: 2007, value: 0.311, source: "Forbes" },
      { year: 2008, value: 0.358, source: "Forbes" },
      { year: 2009, value: 0.343, source: "Forbes" },
      { year: 2010, value: 0.337, source: "Forbes" },
      { year: 2011, value: 0.332, source: "Forbes" },
      { year: 2012, value: 0.418, source: "Forbes" },
      { year: 2013, value: 0.432, source: "Forbes" },
      { year: 2014, value: 0.525, source: "Forbes" },
      { year: 2015, value: 0.830, source: "Forbes" },
      { year: 2016, value: 0.910, source: "Forbes" },
      { year: 2017, value: 1.04,  source: "Forbes" },
      { year: 2018, value: 1.34,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + KJZZ-TV / KMYU local broadcast (Smith family integrated) — Ryan Smith vertical with Utah Hockey Club shares broadcast operations efficiency.",
      stadium: "Delta Center (1991, $900M renovation underway through 2027) owned by Smith Entertainment Group; now shared with Utah Hockey Club from 2024-25 — dual-tenant economics + public renovation funding key value driver.",
      brand: "Stockton-Malone-era brand peak (1990s); recent Donovan Mitchell years shifted brand to youth-focus; international fanbase modest, regional Utah grip very strong.",
      marketSize: "Salt Lake City DMA #29; Utah is exclusive captive market; LDS demographics deliver unusual loyalty; tech-economy growth in Silicon Slopes elevates corporate base.",
      onField: "Post-Mitchell/Gobert tear-down (2022) full rebuild; Lauri Markkanen extension signed Aug 2024 (4yr/$220M); first-round picks stockpiled — slow rebuild trajectory."
    }
  },

  "Golden State Warriors": {
    extendedValuationHistory: [
      { year: 1998, value: 0.149, source: "Forbes" },
      { year: 1999, value: 0.155, source: "Forbes" },
      { year: 2000, value: 0.187, source: "Forbes" },
      { year: 2001, value: 0.190, source: "Forbes" },
      { year: 2002, value: 0.215, source: "Forbes" },
      { year: 2003, value: 0.240, source: "Forbes" },
      { year: 2004, value: 0.255, source: "Forbes" },
      { year: 2005, value: 0.278, source: "Forbes" },
      { year: 2006, value: 0.295, source: "Forbes" },
      { year: 2007, value: 0.309, source: "Forbes" },
      { year: 2008, value: 0.335, source: "Forbes" },
      { year: 2009, value: 0.315, source: "Forbes" },
      { year: 2010, value: 0.363, source: "Forbes" },
      { year: 2011, value: 0.450, source: "Forbes" },
      { year: 2012, value: 0.555, source: "Forbes" },
      { year: 2013, value: 0.750, source: "Forbes" },
      { year: 2014, value: 1.3,   source: "Forbes" },
      { year: 2015, value: 1.9,   source: "Forbes" },
      { year: 2016, value: 2.6,   source: "Forbes" },
      { year: 2017, value: 3.1,   source: "Forbes" },
      { year: 2018, value: 3.5,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + NBC Sports Bay Area RSN — Warriors are the most-broadcast NBA team this decade given Curry-era national interest.",
      stadium: "Chase Center (2019, $1.4B fully privately financed) owned by Warriors ownership; San Francisco bayfront location captures premium hospitality and concert revenue; among the most lucrative arena economics in NBA.",
      brand: "Curry-era four-championship dynasty (2015, 2017, 2018, 2022) created the most globally valuable NBA brand outside Lakers; merchandise consistently #1 NBA; Asia/China reach unmatched.",
      marketSize: "San Francisco-Oakland-San Jose DMA #6 (~2.5M households); world's wealthiest tech-corporate sponsor base; absent in-state NBA competition.",
      onField: "Curry/Green core entering twilight; Curry 1yr/$62M extension signed Aug 2024 keeps him through 2026-27; Butler acquired 2025 to extend competitive window — title-window optimization with aging stars."
    }
  },

  "Los Angeles Clippers": {
    extendedValuationHistory: [
      { year: 1998, value: 0.122, source: "Forbes" },
      { year: 1999, value: 0.130, source: "Forbes" },
      { year: 2000, value: 0.214, source: "Forbes" },
      { year: 2001, value: 0.225, source: "Forbes" },
      { year: 2002, value: 0.227, source: "Forbes" },
      { year: 2003, value: 0.235, source: "Forbes" },
      { year: 2004, value: 0.234, source: "Forbes" },
      { year: 2005, value: 0.252, source: "Forbes" },
      { year: 2006, value: 0.282, source: "Forbes" },
      { year: 2007, value: 0.297, source: "Forbes" },
      { year: 2008, value: 0.297, source: "Forbes" },
      { year: 2009, value: 0.295, source: "Forbes" },
      { year: 2010, value: 0.305, source: "Forbes" },
      { year: 2011, value: 0.305, source: "Forbes" },
      { year: 2012, value: 0.324, source: "Forbes" },
      { year: 2013, value: 0.430, source: "Forbes" },
      { year: 2014, value: 0.575, source: "Forbes" },
      { year: 2015, value: 1.6,   source: "Forbes", notes: "post-Ballmer $2B sale" },
      { year: 2016, value: 2.0,   source: "Forbes" },
      { year: 2017, value: 2.15,  source: "Forbes" },
      { year: 2018, value: 2.5,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Spectrum SportsNet / Bally Sports local deal; LA market provides broadcast scale though Lakers shadow remains.",
      stadium: "Intuit Dome (2024, $2B fully privately financed by Ballmer); Clippers fully control venue economics — separation from Crypto.com Arena (Lakers/Kings) unlocks substantial owned-venue revenue.",
      brand: "Ballmer-era brand investment ($2B 2014 purchase, sustained marketing) building credible LA #2 identity; merchandise expanding; recent playoff exits limit deeper brand traction.",
      marketSize: "Los Angeles DMA #2 (~5.5M households); shared with Lakers but Inglewood-located new arena establishes geographic differentiation.",
      onField: "Kawhi/Paul George era ended with George's exit to 76ers (2024); James Harden acquired/extended 2024 (2yr/$70M); Kawhi 3yr/$153M extension 2024 — title contention window narrowing with health concerns."
    }
  },

  "Los Angeles Lakers": {
    extendedValuationHistory: [
      { year: 1998, value: 0.268, source: "Forbes" },
      { year: 1999, value: 0.290, source: "Forbes" },
      { year: 2000, value: 0.360, source: "Forbes" },
      { year: 2001, value: 0.390, source: "Forbes" },
      { year: 2002, value: 0.447, source: "Forbes" },
      { year: 2003, value: 0.447, source: "Forbes" },
      { year: 2004, value: 0.510, source: "Forbes" },
      { year: 2005, value: 0.560, source: "Forbes" },
      { year: 2006, value: 0.568, source: "Forbes" },
      { year: 2007, value: 0.560, source: "Forbes" },
      { year: 2008, value: 0.584, source: "Forbes" },
      { year: 2009, value: 0.607, source: "Forbes" },
      { year: 2010, value: 0.643, source: "Forbes" },
      { year: 2011, value: 0.900, source: "Forbes" },
      { year: 2012, value: 1.0,   source: "Forbes" },
      { year: 2013, value: 1.35,  source: "Forbes" },
      { year: 2014, value: 1.5,   source: "Forbes" },
      { year: 2015, value: 2.6,   source: "Forbes" },
      { year: 2016, value: 3.0,   source: "Forbes" },
      { year: 2017, value: 3.3,   source: "Forbes" },
      { year: 2018, value: 3.3,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Spectrum SportsNet 20yr/$3B local deal (2012-2032, ~$150M/yr — richest local TV deal in NBA); Lakers generate national ratings premiums on every nationally televised game.",
      stadium: "Crypto.com Arena (1999) owned by AEG (Anschutz Entertainment Group); Lakers and Clippers have been co-tenants — AEG captures venue economics, Lakers' largest structural disadvantage; Clippers exit to Intuit Dome 2024 marginally improves capacity allocation.",
      brand: "World's most globally recognized basketball franchise alongside Bulls; 17 championships; Showtime, Shaq/Kobe, LeBron eras layered into multi-generational fanbase; Asia/China reach #1 in NBA.",
      marketSize: "Los Angeles DMA #2; world-tier celebrity-economy market; shared with Clippers but dominant share-of-mind.",
      onField: "Mark Walter $10B 2025 majority acquisition validates brand premium; LeBron+Doncic acquired Feb 2025 for Anthony Davis reloads star power into post-LeBron era; competitive window calibrated around Doncic timeline."
    }
  },

  "Phoenix Suns": {
    extendedValuationHistory: [
      { year: 1998, value: 0.161, source: "Forbes" },
      { year: 1999, value: 0.180, source: "Forbes" },
      { year: 2000, value: 0.247, source: "Forbes" },
      { year: 2001, value: 0.262, source: "Forbes" },
      { year: 2002, value: 0.255, source: "Forbes" },
      { year: 2003, value: 0.273, source: "Forbes" },
      { year: 2004, value: 0.291, source: "Forbes" },
      { year: 2005, value: 0.342, source: "Forbes" },
      { year: 2006, value: 0.390, source: "Forbes" },
      { year: 2007, value: 0.420, source: "Forbes" },
      { year: 2008, value: 0.429, source: "Forbes" },
      { year: 2009, value: 0.418, source: "Forbes" },
      { year: 2010, value: 0.411, source: "Forbes" },
      { year: 2011, value: 0.395, source: "Forbes" },
      { year: 2012, value: 0.474, source: "Forbes" },
      { year: 2013, value: 0.565, source: "Forbes" },
      { year: 2014, value: 0.910, source: "Forbes" },
      { year: 2015, value: 1.0,   source: "Forbes" },
      { year: 2016, value: 1.1,   source: "Forbes" },
      { year: 2017, value: 1.28,  source: "Forbes" },
      { year: 2018, value: 1.65,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Suns Live (direct-to-consumer streaming launched 2023, replaced Bally Sports) + free-to-air Gray TV partnership — pioneering post-RSN local distribution model.",
      stadium: "Footprint Center (1992, $230M renovation 2019-21) jointly funded by city of Phoenix and team — Mat Ishbia controls operating economics under public ownership.",
      brand: "Steve Nash MVP era and Devin Booker / Charles Barkley narratives sustain brand; Ishbia 2023 $4B purchase brought aggressive commercial repositioning.",
      marketSize: "Phoenix DMA #11 (~2M households); fast-growing Sun Belt market; exclusive NBA territory.",
      onField: "Booker/Durant/Beal $150M+ AAV trio signed 2023 has underdelivered (1st-round exit 2024); luxury tax penalties severe; Beal's no-trade clause complicates flexibility — Big 3 valuation thesis under stress."
    }
  },

  "Sacramento Kings": {
    extendedValuationHistory: [
      { year: 1998, value: 0.091, source: "Forbes" },
      { year: 1999, value: 0.110, source: "Forbes" },
      { year: 2000, value: 0.183, source: "Forbes" },
      { year: 2001, value: 0.195, source: "Forbes" },
      { year: 2002, value: 0.191, source: "Forbes" },
      { year: 2003, value: 0.224, source: "Forbes" },
      { year: 2004, value: 0.235, source: "Forbes" },
      { year: 2005, value: 0.273, source: "Forbes" },
      { year: 2006, value: 0.269, source: "Forbes" },
      { year: 2007, value: 0.297, source: "Forbes" },
      { year: 2008, value: 0.305, source: "Forbes" },
      { year: 2009, value: 0.305, source: "Forbes" },
      { year: 2010, value: 0.293, source: "Forbes" },
      { year: 2011, value: 0.293, source: "Forbes" },
      { year: 2012, value: 0.300, source: "Forbes" },
      { year: 2013, value: 0.525, source: "Forbes", notes: "Ranadive purchase $534M" },
      { year: 2014, value: 0.550, source: "Forbes" },
      { year: 2015, value: 0.800, source: "Forbes" },
      { year: 2016, value: 1.075, source: "Forbes" },
      { year: 2017, value: 1.075, source: "Forbes" },
      { year: 2018, value: 1.55,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + NBC Sports California local deal; Sacramento broadcast scale among NBA's smallest.",
      stadium: "Golden 1 Center (2016, $560M, $255M public funding) downtown Sacramento; Kings own/control venue with Vivek Ranadive ownership — anchor of Downtown Commons mixed-use development.",
      brand: "Early-2000s Webber-era 'Greatest Show on Court' enduring cult brand; long irrelevance period (2006-2022) eroded national reach; 2023 playoff return rebuilt momentum.",
      marketSize: "Sacramento DMA #20; capital-of-California state-government economy; tech-economy spillover from Bay Area.",
      onField: "De'Aaron Fox max-extension upcoming; Domantas Sabonis 4yr/$190M extension signed 2023; first playoff appearance since 2006 in 2023 then 2024 play-in exit — competitive but second-tier West trajectory."
    }
  },

  "Dallas Mavericks": {
    extendedValuationHistory: [
      { year: 1998, value: 0.125, source: "Forbes" },
      { year: 1999, value: 0.138, source: "Forbes" },
      { year: 2000, value: 0.193, source: "Forbes", notes: "Mark Cuban acquisition year" },
      { year: 2001, value: 0.225, source: "Forbes" },
      { year: 2002, value: 0.255, source: "Forbes" },
      { year: 2003, value: 0.298, source: "Forbes" },
      { year: 2004, value: 0.338, source: "Forbes" },
      { year: 2005, value: 0.374, source: "Forbes" },
      { year: 2006, value: 0.421, source: "Forbes" },
      { year: 2007, value: 0.466, source: "Forbes" },
      { year: 2008, value: 0.466, source: "Forbes" },
      { year: 2009, value: 0.446, source: "Forbes" },
      { year: 2010, value: 0.438, source: "Forbes" },
      { year: 2011, value: 0.453, source: "Forbes" },
      { year: 2012, value: 0.498, source: "Forbes" },
      { year: 2013, value: 0.685, source: "Forbes" },
      { year: 2014, value: 0.765, source: "Forbes" },
      { year: 2015, value: 1.15,  source: "Forbes" },
      { year: 2016, value: 1.4,   source: "Forbes" },
      { year: 2017, value: 1.45,  source: "Forbes" },
      { year: 2018, value: 1.825, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Bally Sports Southwest (former) / Tegna over-the-air free-broadcast partnership 2024 — Mavericks pioneered free-to-air local distribution amid RSN collapse.",
      stadium: "American Airlines Center (2001) shared with Stars under venue management; Mavericks operate under lease — limited venue economics relative to owned-arena peers.",
      brand: "Cuban-era brand engineering (2000-2023) transformed franchise into top-15 globally recognizable NBA team; 2011 championship, Dirk era, Doncic era successively reinforced.",
      marketSize: "Dallas-Fort Worth DMA #5 (~3M households); fast-growing Sun Belt corporate market; exclusive North Texas NBA territory.",
      onField: "2024 NBA Finals appearance; Doncic traded to Lakers Feb 2025 in stunning move — Anthony Davis acquired but franchise direction now uncertain; Kyrie Irving 3yr/$126M extension 2024 anchors retooled core."
    }
  },

  "Houston Rockets": {
    extendedValuationHistory: [
      { year: 1998, value: 0.157, source: "Forbes" },
      { year: 1999, value: 0.180, source: "Forbes" },
      { year: 2000, value: 0.262, source: "Forbes" },
      { year: 2001, value: 0.267, source: "Forbes" },
      { year: 2002, value: 0.255, source: "Forbes" },
      { year: 2003, value: 0.282, source: "Forbes" },
      { year: 2004, value: 0.314, source: "Forbes" },
      { year: 2005, value: 0.357, source: "Forbes" },
      { year: 2006, value: 0.388, source: "Forbes" },
      { year: 2007, value: 0.422, source: "Forbes" },
      { year: 2008, value: 0.443, source: "Forbes" },
      { year: 2009, value: 0.443, source: "Forbes" },
      { year: 2010, value: 0.453, source: "Forbes" },
      { year: 2011, value: 0.443, source: "Forbes" },
      { year: 2012, value: 0.453, source: "Forbes" },
      { year: 2013, value: 0.568, source: "Forbes" },
      { year: 2014, value: 0.775, source: "Forbes" },
      { year: 2015, value: 1.25,  source: "Forbes" },
      { year: 2016, value: 1.65,  source: "Forbes" },
      { year: 2017, value: 1.65,  source: "Forbes" },
      { year: 2018, value: 2.2,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + Space City Home Network (Astros joint RSN, launched 2024 post-AT&T SportsNet collapse) — vertical integration with MLB Astros provides operational scale.",
      stadium: "Toyota Center (2003) owned by Harris County — Sports & Convention Corporation; Rockets operate under long-term lease; modest non-game revenue.",
      brand: "Hakeem Olajuwon-era championships (1994, 1995) and Yao Ming-era (2002-11) China expansion built durable international brand; merchandise penetration in Asia among NBA's top 5.",
      marketSize: "Houston DMA #7 (~2.6M households); 4th-largest US city; energy-economy corporate base.",
      onField: "Post-Harden rebuild yielding results in 2024; Sengun, Jalen Green, Amen Thompson young core; Fred VanVleet 3yr/$130M signed 2023 provides veteran ballast — emerging contender trajectory."
    }
  },

  "Memphis Grizzlies": {
    extendedValuationHistory: [
      { year: 1998, value: 0.121, source: "Forbes", notes: "as Vancouver Grizzlies" },
      { year: 1999, value: 0.130, source: "Forbes", notes: "as Vancouver Grizzlies" },
      { year: 2000, value: 0.156, source: "Forbes", notes: "as Vancouver Grizzlies" },
      { year: 2001, value: 0.140, source: "Forbes", notes: "Memphis relocation year" },
      { year: 2002, value: 0.171, source: "Forbes" },
      { year: 2003, value: 0.190, source: "Forbes" },
      { year: 2004, value: 0.207, source: "Forbes" },
      { year: 2005, value: 0.223, source: "Forbes" },
      { year: 2006, value: 0.252, source: "Forbes" },
      { year: 2007, value: 0.255, source: "Forbes" },
      { year: 2008, value: 0.252, source: "Forbes" },
      { year: 2009, value: 0.243, source: "Forbes" },
      { year: 2010, value: 0.257, source: "Forbes" },
      { year: 2011, value: 0.269, source: "Forbes" },
      { year: 2012, value: 0.305, source: "Forbes" },
      { year: 2013, value: 0.377, source: "Forbes" },
      { year: 2014, value: 0.453, source: "Forbes" },
      { year: 2015, value: 0.750, source: "Forbes" },
      { year: 2016, value: 0.870, source: "Forbes" },
      { year: 2017, value: 1.0,   source: "Forbes" },
      { year: 2018, value: 1.2,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network local deal post-Bally restructuring; Memphis broadcast scale among NBA's smallest.",
      stadium: "FedExForum (2004, $250M, ~$200M public) owned by Memphis Public Building Authority; Grizzlies operate under long-term lease; modest non-game revenue.",
      brand: "'Grit and Grind' identity (Conley/Gasol/Randolph era) created durable cultural cachet; Ja Morant's transcendent athleticism propels current brand work; merchandise rising tier.",
      marketSize: "Memphis DMA #50 — by far smallest NBA market alongside OKC; revenue-sharing recipient.",
      onField: "Ja Morant (5yr/$197M rookie supermax 2023) availability concerns; Jaren Jackson Jr. extension upcoming; 2024 injury-decimated season sub-.500 — bounce-back potential meaningful but Morant trajectory key risk."
    }
  },

  "New Orleans Pelicans": {
    extendedValuationHistory: [
      { year: 1998, value: 0.105, source: "Forbes", notes: "as original Charlotte Hornets" },
      { year: 1999, value: 0.110, source: "Forbes", notes: "as original Charlotte Hornets" },
      { year: 2000, value: 0.180, source: "Forbes", notes: "as original Charlotte Hornets" },
      { year: 2001, value: 0.182, source: "Forbes", notes: "as original Charlotte Hornets" },
      { year: 2002, value: 0.197, source: "Forbes", notes: "New Orleans relocation year" },
      { year: 2003, value: 0.217, source: "Forbes", notes: "as New Orleans Hornets" },
      { year: 2004, value: 0.229, source: "Forbes", notes: "as New Orleans Hornets" },
      { year: 2005, value: 0.247, source: "Forbes", notes: "as NO/Oklahoma City Hornets" },
      { year: 2006, value: 0.258, source: "Forbes", notes: "as NO/Oklahoma City Hornets" },
      { year: 2007, value: 0.272, source: "Forbes", notes: "as NO/Oklahoma City Hornets" },
      { year: 2008, value: 0.267, source: "Forbes", notes: "as New Orleans Hornets" },
      { year: 2009, value: 0.273, source: "Forbes", notes: "as New Orleans Hornets" },
      { year: 2010, value: 0.280, source: "Forbes", notes: "as New Orleans Hornets" },
      { year: 2011, value: 0.280, source: "Forbes", notes: "NBA-owned" },
      { year: 2012, value: 0.340, source: "Forbes", notes: "Benson acquisition" },
      { year: 2013, value: 0.420, source: "Forbes", notes: "Pelicans rebrand year" },
      { year: 2014, value: 0.530, source: "Forbes" },
      { year: 2015, value: 0.625, source: "Forbes" },
      { year: 2016, value: 0.750, source: "Forbes" },
      { year: 2017, value: 0.825, source: "Forbes" },
      { year: 2018, value: 1.0,   source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network New Orleans (former Bally) local deal under restructuring; Gulf-Coast broadcast scale modest.",
      stadium: "Smoothie King Center (1999) shared with Saints under Louisiana Stadium and Exposition District ownership; Pelicans operate under lease with Tom Benson Charitable Trust providing ownership stability.",
      brand: "Post-Katrina identity rebuild via Pelicans branding (2013); Anthony Davis era transitioning to Zion Williamson as cultural anchor; merchandise mid-tier with regional Louisiana grip.",
      marketSize: "New Orleans DMA #51; smallest NBA market measured by households; tourism-economy supports premium hospitality despite modest local TV scale.",
      onField: "Zion Williamson (5yr/$197M rookie max 2022) availability remains key risk; Brandon Ingram extension 2024 declined; Dejounte Murray acquired 2024 reset core — competitive but Zion-dependent thesis."
    }
  },

  "San Antonio Spurs": {
    extendedValuationHistory: [
      { year: 1998, value: 0.139, source: "Forbes" },
      { year: 1999, value: 0.165, source: "Forbes" },
      { year: 2000, value: 0.215, source: "Forbes" },
      { year: 2001, value: 0.227, source: "Forbes" },
      { year: 2002, value: 0.227, source: "Forbes" },
      { year: 2003, value: 0.245, source: "Forbes" },
      { year: 2004, value: 0.286, source: "Forbes" },
      { year: 2005, value: 0.319, source: "Forbes" },
      { year: 2006, value: 0.348, source: "Forbes" },
      { year: 2007, value: 0.373, source: "Forbes" },
      { year: 2008, value: 0.405, source: "Forbes" },
      { year: 2009, value: 0.398, source: "Forbes" },
      { year: 2010, value: 0.404, source: "Forbes" },
      { year: 2011, value: 0.398, source: "Forbes" },
      { year: 2012, value: 0.450, source: "Forbes" },
      { year: 2013, value: 0.527, source: "Forbes" },
      { year: 2014, value: 0.660, source: "Forbes" },
      { year: 2015, value: 1.0,   source: "Forbes" },
      { year: 2016, value: 1.04,  source: "Forbes" },
      { year: 2017, value: 1.175, source: "Forbes" },
      { year: 2018, value: 1.55,  source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + KENS (CBS affiliate over-the-air partnership 2024) — Spurs pioneered over-the-air model post-Bally; San Antonio broadcast scale modest but locally exclusive.",
      stadium: "Frost Bank Center (2002) owned by Bexar County; Spurs operate under long-term lease; modest non-game revenue; Project Marvel new arena in downtown San Antonio under planning ($1.3B+).",
      brand: "Greatest dynasty of the cap era (5 championships 1999-2014); Duncan/Ginobili/Parker / Popovich-coached identity is the 'organizational excellence' brand benchmark; recent rebuild has tested loyalty.",
      marketSize: "San Antonio DMA #31; only major Texas city without competing big-4 franchise share; entire South Texas captive audience.",
      onField: "Victor Wembanyama (2023 #1 pick, 2024 Rookie of the Year) is the most-anticipated prospect since LeBron — generational valuation upside if franchise development trajectory holds; 2024 Chris Paul/Harrison Barnes additions accelerate timeline."
    }
  },

  "Milwaukee Bucks": {
    extendedValuationHistory: [
      { year: 1998, value: 0.116, source: "Forbes" },
      { year: 1999, value: 0.130, source: "Forbes" },
      { year: 2000, value: 0.193, source: "Forbes" },
      { year: 2001, value: 0.195, source: "Forbes" },
      { year: 2002, value: 0.196, source: "Forbes" },
      { year: 2003, value: 0.205, source: "Forbes" },
      { year: 2004, value: 0.215, source: "Forbes" },
      { year: 2005, value: 0.235, source: "Forbes" },
      { year: 2006, value: 0.264, source: "Forbes" },
      { year: 2007, value: 0.278, source: "Forbes" },
      { year: 2008, value: 0.278, source: "Forbes" },
      { year: 2009, value: 0.254, source: "Forbes" },
      { year: 2010, value: 0.258, source: "Forbes" },
      { year: 2011, value: 0.268, source: "Forbes" },
      { year: 2012, value: 0.312, source: "Forbes" },
      { year: 2013, value: 0.405, source: "Forbes" },
      { year: 2014, value: 0.550, source: "Forbes", notes: "Edens/Lasry acquisition $550M" },
      { year: 2015, value: 0.600, source: "Forbes" },
      { year: 2016, value: 0.785, source: "Forbes" },
      { year: 2017, value: 0.95,  source: "Forbes" },
      { year: 2018, value: 1.225, source: "Forbes" }
    ],
    factorNarratives: {
      mediaRights: "$230M national share + FanDuel Sports Network Wisconsin (former Bally) local deal post-Diamond restructuring; Wisconsin broadcast scale modest.",
      stadium: "Fiserv Forum (2018, $524M, $250M public funding) owned by Bucks ownership; recently completed Deer District mixed-use development around arena delivers significant non-game revenue.",
      brand: "Giannis Antetokounmpo-era brand (2013+) transformed franchise from periphery to top-tier merchandise franchise; 2021 championship anchored sustained relevance; international Greek connection drives unusual European reach.",
      marketSize: "Milwaukee DMA #36; smallest NBA market with championship credentials; entire Wisconsin captive audience.",
      onField: "Giannis (3yr/$186M extension 2023, $228M total locked through 2027-28) anchors core; Damian Lillard acquired 2023 to extend competitive window; 2024 1st-round playoff exit raises questions about diminishing returns."
    }
  }

}
