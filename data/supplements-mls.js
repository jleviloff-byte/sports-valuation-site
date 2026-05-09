// MLS supplements — extended valuation history + factor narratives
// Sources: Forbes 2008/2013/2023+ MLS valuations, Sportico, ESPN, MLS, SBJ
// Note: Forbes published MLS values irregularly: 2008 (one-off), 2013 (one-off), then annual from 2023.
// Pre-2023 years between Forbes datapoints are interpolated and flagged isEstimated: true.
// Expansion fees serve as anchor for newer franchises.

export const mlsSupplements = {

  "Atlanta United FC": {
    extendedValuationHistory: [
      { year: 2017, value: 0.07, source: "expansion fee 2014 + early Forbes proxy", isEstimated: true },
      { year: 2018, value: 0.33, source: "Forbes / Sportico — post-MLS Cup year" },
    ],
    factorNarratives: {
      mediaRights: "Atlanta receives ~$8M/yr from Apple TV+ MLS Season Pass; pre-2023 the club benefited from a Fox Sports South local deal but those rights are now subsumed under the Apple package.",
      stadium: "Mercedes-Benz Stadium (2017) shared with NFL Falcons under Arthur Blank ownership — soccer-friendly retractable seating delivers MLS-record attendance and bundled corporate sponsorship leverage.",
      brand: "MLS expansion blueprint: 70K+ home crowds, 2018 MLS Cup in second season, and a heritage built around fan culture rather than legacy clubs make Atlanta one of the league's two or three strongest brands.",
      marketSize: "Atlanta DMA #6 with no competing MLS team, deep Hispanic/soccer base, and minimal pro-sports calendar competition during MLS season.",
      onField: "Thiago Almada produced an MLS record outgoing transfer fee (~$25M to Botafogo, Feb 2024); current DP cohort is rebuild-era but Blank's spending willingness is a structural advantage."
    }
  },

  "Charlotte FC": {
    extendedValuationHistory: [
      { year: 2022, value: 0.325, source: "expansion fee paid by Tepper" },
    ],
    factorNarratives: {
      mediaRights: "Charlotte receives ~$8M/yr from Apple TV+ MLS Season Pass; no separate local TV deal — Apple's blanket rights apply uniformly.",
      stadium: "Bank of America Stadium shared with David Tepper's NFL Panthers — not soccer-specific (74K capacity), upper bowls tarped, but tarp-off matches deliver MLS-record crowds when marquee opponents visit.",
      brand: "Newest of the post-2020 expansion class with limited heritage; Tepper ownership and the bundled Panthers/Charlotte FC commercial program drive an outsized sponsorship base for an expansion club.",
      marketSize: "Charlotte DMA #22 but fastest-growing major market in the Southeast; no competing MLS team in the Carolinas.",
      onField: "Mid-table expansion-era performance; first playoff appearance 2024; squad-build is reliant on South American DPs typical of mid-budget MLS clubs."
    }
  },

  "Chicago Fire FC": {
    extendedValuationHistory: [
      { year: 2008, value: 0.041, source: "Forbes" },
      { year: 2013, value: 0.144, source: "Forbes" },
      { year: 2018, value: 0.235, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Chicago receives ~$8M/yr from Apple TV+; legacy 1998 founding-era local TV equity is gone and the Fire are largely undifferentiated in the MLS Apple regime.",
      stadium: "Soldier Field move (2020) downtown reversed the SeatGeek Stadium suburb experiment but the Fire are Bears tenants — no soccer-specific revenue and the venue is oversized (61K) for typical MLS demand.",
      brand: "Inaugural-era 1998 founding member with a 1998 MLS Cup, but multi-decade rebrand churn and on-field stagnation eroded brand equity; Joe Mansueto ownership (2019+) has restored stability.",
      marketSize: "Chicago DMA #3 — among the league's top markets — but soccer competition for share of mind from MLB, NFL, NBA, and NHL incumbents.",
      onField: "1 MLS Cup (1998), 4 US Open Cups, but only sporadic playoff runs since 2012; current DP slate is mid-tier and the franchise is in a long structural rebuild."
    }
  },

  "FC Cincinnati": {
    extendedValuationHistory: [
      { year: 2018, value: 0.150, source: "expansion fee paid 2018" },
    ],
    factorNarratives: {
      mediaRights: "Cincinnati receives ~$8M/yr from Apple TV+; pre-2023 the club's USL-era local broadcasts seeded a regional fanbase but had no rights value.",
      stadium: "TQL Stadium (2021) — $250M privately financed soccer-specific venue owned by the club is among the strongest stadium-economics positions in MLS.",
      brand: "Strongest fan-culture among the post-2018 expansion class — converted from successful USL franchise (2016-18) with deep grassroots support; 2023 Supporters' Shield validated the model.",
      marketSize: "Cincinnati DMA #36 — sub-scale by national-sports standards but no competing MLS team; benefits from regional reach into Kentucky/Indiana.",
      onField: "Lucho Acosta led 2023 Supporters' Shield and MLS MVP campaign before departing to Saudi Arabia; current DP slate is in transition but Cincinnati has been a top-half playoff team since 2022."
    }
  },

  "Columbus Crew SC": {
    extendedValuationHistory: [
      { year: 2008, value: 0.030, source: "Forbes" },
      { year: 2013, value: 0.105, source: "Forbes" },
      { year: 2018, value: 0.150, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Columbus receives ~$8M/yr from Apple TV+; pre-2023 local TV revenue was modest given the Columbus DMA's limited scale.",
      stadium: "Lower.com Field (2021) — $300M+ downtown soccer-specific stadium replaced the original Mapfre Stadium (1999, MLS's first soccer-specific venue) and unlocked a step-change in matchday economics.",
      brand: "Inaugural 1996 founding member; #SaveTheCrew movement (2018) when prior owners attempted Austin relocation became a defining MLS heritage moment; Haslam Sports Group has restored stability.",
      marketSize: "Columbus DMA #34 — small by major-league standards but no competing MLS team and a state-capital corporate base.",
      onField: "3 MLS Cups (2008, 2020, 2023) — most-decorated of the league's mid-market franchises; Cucho Hernández was the lead DP through 2024 before departing for Real Betis."
    }
  },

  "D.C. United": {
    extendedValuationHistory: [
      { year: 2008, value: 0.036, source: "Forbes" },
      { year: 2013, value: 0.135, source: "Forbes" },
      { year: 2018, value: 0.230, source: "Forbes / post-Audi Field opening", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "D.C. United receive ~$8M/yr from Apple TV+; legacy NBC Sports Washington local rights have lapsed and the club is undifferentiated in the Apple era.",
      stadium: "Audi Field (2018) — $400M+ privately financed soccer-specific stadium ended a decades-long RFK Stadium tenure and put D.C. on a normalized matchday revenue base.",
      brand: "Inaugural 1996 founding member with 4 MLS Cups (1996, 1997, 1999, 2004) — the early-MLS dynasty — but two-plus decades of decline have eroded brand equity outside the supporters core.",
      marketSize: "Washington DMA #9 with no competing MLS team and a high-income corporate base, though MLS is a niche product in a saturated DC sports market.",
      onField: "Rebuild-era roster post-Wayne Rooney (2018-19); Christian Benteke is the lead striker DP; persistent bottom-half finishes since 2020."
    }
  },

  "Inter Miami CF": {
    extendedValuationHistory: [
      { year: 2020, value: 0.205, source: "Forbes — inaugural season" },
      { year: 2022, value: 0.585, source: "Forbes — pre-Messi" },
    ],
    factorNarratives: {
      mediaRights: "Inter Miami receive ~$8M/yr from Apple TV+ but the Messi signing (July 2023) renegotiated an Apple bonus structure and drove MLS Season Pass subscriber growth — global broadcast reach now far exceeds typical MLS team.",
      stadium: "Chase Stadium (interim, 19K) is a constraint; new $1B Miami Freedom Park (25K capacity, opening 2026) is the most consequential stadium project in MLS and will likely double matchday revenue.",
      brand: "Messi era (July 2023+) transformed Inter Miami into MLS's only globally recognized brand; David Beckham co-ownership and Mas brothers' Latin American business networks compound the international story.",
      marketSize: "Miami DMA #16 but uniquely globalized — Latin American media reach extends the addressable market well beyond the local DMA.",
      onField: "Messi/Suárez/Busquets/Alba supercore signed 2023-24 anchored by the league's only true global star roster; 2024 Supporters' Shield validated the on-field thesis."
    }
  },

  "CF Montréal": {
    extendedValuationHistory: [
      { year: 2013, value: 0.110, source: "Forbes" },
      { year: 2018, value: 0.190, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Montréal receives ~$8M/yr from Apple TV+; pre-2023 TVA Sports French-language local rights were a meaningful regional asset but are not separately monetized today.",
      stadium: "Stade Saputo (2008, expanded 2012) — soccer-specific 19K venue privately built by the Saputo family — modest scale but team-controlled economics and no competing tenant.",
      brand: "2012 expansion as Montreal Impact (rebranded CF Montréal 2021) — French-Canadian soccer heritage and Saputo family ownership provide stable identity but limited international resonance post-Drogba/Piatti era.",
      marketSize: "Montréal DMA — Canada's second-largest francophone-dominant market — substantial soccer base via Quebec immigration patterns but smaller than Toronto.",
      onField: "Persistent mid-table to bottom-half finishes; rebuild-era roster post-Saputo cost-cutting; no MLS Cup appearances; CONCACAF Champions League run (2015) remains the high-water mark."
    }
  },

  "Nashville SC": {
    extendedValuationHistory: [
      { year: 2020, value: 0.150, source: "expansion fee paid 2017 + inaugural season" },
    ],
    factorNarratives: {
      mediaRights: "Nashville receives ~$8M/yr from Apple TV+; pre-2023 the club had a Bally Sports South local deal that was lost to MLS bundling.",
      stadium: "GEODIS Park (2022) — 30K capacity is largest soccer-specific stadium in MLS, ~$335M build with $50M public subsidy; Ingram family ownership controls the venue economics.",
      brand: "2020 expansion — limited heritage but well-curated identity (gold/navy, sound-themed branding) and one of the strongest fan-engagement programs in the post-2018 expansion class.",
      marketSize: "Nashville DMA #28 — subscale but fastest-growing Southeast market; no competing MLS team and limited overlap with NFL Titans/NHL Predators calendars.",
      onField: "Hany Mukhtar 2022 MLS MVP anchored the early identity; persistent playoff-team profile since 2020 expansion; current DP slate is mid-tier."
    }
  },

  "New England Revolution": {
    extendedValuationHistory: [
      { year: 2008, value: 0.027, source: "Forbes" },
      { year: 2013, value: 0.107, source: "Forbes" },
      { year: 2018, value: 0.190, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Revolution receive ~$8M/yr from Apple TV+; under Kraft Sports & Entertainment the club historically benefited from bundled NESN exposure but those rights are now Apple's.",
      stadium: "Gillette Stadium (NFL Patriots venue, 65K) — Revolution are tenants in a non-soccer-specific oversized venue; no soccer-specific stadium has materialized despite multi-year Everett MA proposals.",
      brand: "Inaugural 1996 founding member with five MLS Cup runner-up finishes but no Cup; Kraft family ownership provides resources but soccer commitment has been periodically questioned by supporters.",
      marketSize: "Boston DMA #10 with no competing MLS team but Revolution are buried in a top-tier sports calendar (Patriots/Red Sox/Celtics/Bruins); soccer-specific stadium would unlock latent demand.",
      onField: "Carles Gil 2021 MLS MVP and Supporters' Shield anchor; current roster is in transition; persistent playoff-team profile but limited deep runs."
    }
  },

  "New York City FC": {
    extendedValuationHistory: [
      { year: 2015, value: 0.100, source: "expansion fee paid 2013" },
      { year: 2018, value: 0.275, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "NYCFC receive ~$8M/yr from Apple TV+; YES Network legacy local rights (via Yankees co-ownership) ended with the Apple deal and removed a meaningful pre-2023 differentiator.",
      stadium: "Yankee Stadium tenancy is an MLS-wide outlier — undersized, awkward dimensions, no team economics; new $780M Etihad Park at Willets Point (Queens, opening 2027) is club-owned and transformative for valuation.",
      brand: "City Football Group affiliation (Manchester City sister club) provides player-development pipeline and sister-club commercial integration unique in MLS; 2021 MLS Cup validated the platform.",
      marketSize: "New York DMA #1 but shared with Red Bulls and saturated by every major US sports league; soccer-specific brand-building remains the strategic challenge.",
      onField: "Talles Magno and Santiago Rodríguez are current DP cornerstones; consistent playoff appearances since 2016; 2021 MLS Cup as recent peak."
    }
  },

  "New York Red Bulls": {
    extendedValuationHistory: [
      { year: 2008, value: 0.044, source: "Forbes" },
      { year: 2013, value: 0.143, source: "Forbes" },
      { year: 2018, value: 0.290, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Red Bulls receive ~$8M/yr from Apple TV+; MSG Networks legacy local rights provided substantial regional reach pre-2023 but have been displaced by the Apple bundle.",
      stadium: "Sports Illustrated Stadium (formerly Red Bull Arena, 2010) — 25K soccer-specific venue privately built by Red Bull GmbH for ~$200M; team-controlled venue economics are a structural advantage.",
      brand: "Inaugural 1996 founding member (as MetroStars) with Red Bull rebrand 2006; three Supporters' Shields (2013, 2015, 2018) but no MLS Cup; multi-club Red Bull ecosystem (RB Leipzig, Salzburg) provides player flow.",
      marketSize: "New York DMA #1 but shared with NYCFC and the Hudson River geography limits supporter overlap; suburban New Jersey base is loyal but limited.",
      onField: "Emil Forsberg arrival 2024 (from RB Leipzig) signals reinvestment; consistent playoff appearances but persistent inability to break through deep runs."
    }
  },

  "Orlando City SC": {
    extendedValuationHistory: [
      { year: 2015, value: 0.070, source: "expansion fee paid 2013" },
      { year: 2018, value: 0.295, source: "Forbes / post-Exploria opening", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Orlando City receives ~$8M/yr from Apple TV+; Spanish-language local broadcasting carries niche value in the Orlando DMA but is bundled into the Apple deal.",
      stadium: "Inter&Co Stadium (2017) — $155M privately financed soccer-specific 25K venue downtown; Wilf family ownership (acquired 2022) controls venue economics.",
      brand: "2015 expansion with strong supporters' culture (The Wall) and Brazilian/Latino DP history (Kaká, Nani, Pereyra); brand is solidly above-average but lacks marquee on-field history.",
      marketSize: "Orlando DMA #18 — Latino-heavy market with deep soccer base; no competing MLS team and Florida tourism brings additional matchday demand.",
      onField: "2022 US Open Cup (first major trophy); Luis Muriel and Martín Ojeda current DPs; consistent playoff appearances since 2020."
    }
  },

  "Philadelphia Union": {
    extendedValuationHistory: [
      { year: 2010, value: 0.040, source: "expansion fee paid 2008" },
      { year: 2013, value: 0.118, source: "Forbes" },
      { year: 2018, value: 0.205, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Union receive ~$8M/yr from Apple TV+; pre-2023 NBC Sports Philadelphia local rights provided regional reach but are now subsumed.",
      stadium: "Subaru Park (2010) — $120M soccer-specific 19K venue with public-private financing; Sugarman ownership controls venue economics.",
      brand: "2010 expansion with above-average fan culture (Sons of Ben supporters group) but limited national brand resonance; identity is rooted in scrappy, analytics-driven sporting model.",
      marketSize: "Philadelphia DMA #4 with no competing MLS team but soccer competes against deeply entrenched 4-major-pro-leagues calendar.",
      onField: "Strongest sporting model in MLS by efficiency metrics — academy-driven, low-budget, high-output; 2022 MLS Cup runner-up; 2020 Supporters' Shield; persistent top-3 finishes from 2020-2022."
    }
  },

  "Toronto FC": {
    extendedValuationHistory: [
      { year: 2008, value: 0.044, source: "Forbes — early in inaugural seasons" },
      { year: 2013, value: 0.175, source: "Forbes" },
      { year: 2018, value: 0.405, source: "Forbes / post-Treble year 2017", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Toronto FC receive Apple TV+ MLS Season Pass + Canadian-specific rights via TSN/Sportsnet; MLSE bundles TFC commercially with Maple Leafs/Raptors providing scale efficiencies unique in the league.",
      stadium: "BMO Field (2007, expanded 2014/2024) — soccer-specific stadium owned by Toronto via lease to MLSE; recent expansion to ~30K capacity for 2026 World Cup; team-controlled venue economics.",
      brand: "2007 expansion that pioneered Canadian MLS and the high-spending DP model (Defoe, Bradley, Giovinco era); 2017 Treble (Supporters' Shield + MLS Cup + Canadian Championship) remains the league's only domestic treble.",
      marketSize: "Toronto DMA — Canada's largest market — substantial soccer-friendly immigrant base; no competing MLS team but Canadian Premier League has emerged.",
      onField: "Federico Bernardeschi and Lorenzo Insigne 2022 mega-DPs underdelivered; current rebuild after 2022-2024 bottom-table finishes; 2026 World Cup co-host status will drive engagement."
    }
  },

  "Austin FC": {
    extendedValuationHistory: [
      { year: 2021, value: 0.150, source: "expansion fee paid 2018" },
    ],
    factorNarratives: {
      mediaRights: "Austin FC receive ~$8M/yr from Apple TV+; no separate local TV deal; bilingual Spanish/English Apple production reflects Austin's market profile.",
      stadium: "Q2 Stadium (2021) — $260M privately financed by Precourt; soccer-specific 20.5K venue is one of the strongest acoustic environments in MLS; team-owned economics.",
      brand: "2021 expansion that has established the strongest fan-culture among post-2018 expansion clubs; Matthew McConaughey minority ownership delivers cultural cachet; perpetual sellouts.",
      marketSize: "Austin DMA #38 but fastest-growing major US market; tech/finance corporate base supports premium pricing; no competing MLS team in Texas-Hill Country.",
      onField: "2022 Western Conference Final run validated the expansion thesis; mid-table 2023-24 rebuild; current DP slate is South American-led but not marquee."
    }
  },

  "Colorado Rapids": {
    extendedValuationHistory: [
      { year: 2008, value: 0.030, source: "Forbes" },
      { year: 2013, value: 0.103, source: "Forbes" },
      { year: 2018, value: 0.165, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Rapids receive ~$8M/yr from Apple TV+; pre-2023 Altitude TV (Kroenke-owned RSN) provided niche regional reach.",
      stadium: "Dick's Sporting Goods Park (2007) — soccer-specific 18K venue built for ~$135M with public subsidy; Kroenke-owned, large adjacent youth-soccer complex.",
      brand: "Inaugural 1996 founding member; 2010 MLS Cup remains highlight; persistent below-the-radar identity within Kroenke Sports & Entertainment portfolio (Avalanche, Nuggets, Rams).",
      marketSize: "Denver DMA #17 — quality outdoor sports market but soccer competes for share within a saturated Kroenke ecosystem.",
      onField: "Persistent mid-table profile since 2010 Cup; rebuild-era roster; lack of marquee DPs has constrained ceiling for over a decade."
    }
  },

  "FC Dallas": {
    extendedValuationHistory: [
      { year: 2008, value: 0.039, source: "Forbes" },
      { year: 2013, value: 0.110, source: "Forbes" },
      { year: 2018, value: 0.185, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "FC Dallas receive ~$8M/yr from Apple TV+; pre-2023 Bally Sports Southwest local rights ended; bilingual production via Apple.",
      stadium: "Toyota Stadium (2005, $80M) — soccer-specific 20K venue in Frisco TX with $182M renovation underway through 2027; Hunt Sports Group owns and operates.",
      brand: "Inaugural 1996 founding member (as Dallas Burn); Hunt family heritage from KC Wizards/AFL; strong academy reputation (Weston McKennie, Reggie Cannon, Ricardo Pepi) but limited national brand.",
      marketSize: "Dallas-Fort Worth DMA #5 — large market, no competing MLS team in Texas other than Houston/Austin; deep Hispanic/soccer base.",
      onField: "2016 Supporters' Shield + US Open Cup double; consistent playoff team historically but no MLS Cup; current roster is academy-heavy with mid-tier DPs."
    }
  },

  "Houston Dynamo FC": {
    extendedValuationHistory: [
      { year: 2008, value: 0.039, source: "Forbes" },
      { year: 2013, value: 0.110, source: "Forbes" },
      { year: 2018, value: 0.155, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Dynamo receive ~$8M/yr from Apple TV+; bilingual production reflects Houston's Hispanic-majority market; pre-2023 AT&T SportsNet rights ended with the Apple deal.",
      stadium: "Shell Energy Stadium (2012) — soccer-specific 22K venue in downtown Houston, originally built for ~$95M; Ted Segal acquired majority ownership 2021.",
      brand: "2006 transplant from San Jose with two MLS Cups (2006, 2007) immediately upon arrival; brand has stagnated since 2013 and is now mid-pack in MLS.",
      marketSize: "Houston DMA #7 — deep Hispanic base and soccer-friendly demographics; no competing MLS team but Texas market is now split with Dallas and Austin.",
      onField: "Long structural rebuild since 2014; Héctor Herrera DP signing 2022 underdelivered; current roster is mid-tier with persistent lower-half finishes."
    }
  },

  "LA Galaxy": {
    extendedValuationHistory: [
      { year: 2008, value: 0.100, source: "Forbes" },
      { year: 2013, value: 0.165, source: "Forbes" },
      { year: 2018, value: 0.265, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Galaxy receive ~$8M/yr from Apple TV+; Spanish-language broadcasting via local affiliates carries strong regional value but is bundled into the Apple deal.",
      stadium: "Dignity Health Sports Park (2003) — owned by AEG (Anschutz); Galaxy are tenants but the AEG ecosystem provides operational scale and event leverage; venue is soccer-specific (27K).",
      brand: "MLS's most decorated franchise (5 MLS Cups, most in league); David Beckham era 2007-2012 transformed Galaxy into MLS's first global brand; deep LA market presence since 1996 founding.",
      marketSize: "LA DMA #2 but shared with LAFC since 2018; large Hispanic and youth-soccer base.",
      onField: "Riqui Puig is the current DP cornerstone; 2024 MLS Cup ended a decade-long title drought; Greg Vanney rebuild has restored playoff competitiveness."
    }
  },

  "Los Angeles FC": {
    extendedValuationHistory: [
      { year: 2018, value: 0.110, source: "expansion fee paid 2014 + inaugural year" },
    ],
    factorNarratives: {
      mediaRights: "LAFC receive ~$8M/yr from Apple TV+; MLS-record $10M/yr BMO Stadium naming rights deal validates the LAFC commercial premium; bilingual production unique in scale.",
      stadium: "BMO Stadium (2018, formerly Banc of California Stadium) — $350M+ privately financed soccer-specific 22K venue at Exposition Park; team-owned, premium hospitality program drives top-tier matchday revenue.",
      brand: "Most successful expansion in MLS history — 2022 MLS Cup in 5th season; celebrity-heavy ownership (Will Ferrell, Magic Johnson, Mia Hamm, Jesse Williams) and curated black-and-gold aesthetic; Carlos Vela early-DP era set tone.",
      marketSize: "LA DMA #2 — shared with Galaxy but LAFC commands the urban core demographic; large Hispanic and corporate base.",
      onField: "Denis Bouanga, Hugo Lloris current DP cornerstones; 2022 MLS Cup, 2024 Concacaf Champions Cup runner-up; consistently top-table since 2019."
    }
  },

  "Minnesota United FC": {
    extendedValuationHistory: [
      { year: 2017, value: 0.100, source: "expansion fee paid 2015" },
      { year: 2018, value: 0.140, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Minnesota receive ~$8M/yr from Apple TV+; pre-2023 Bally Sports North local rights ended.",
      stadium: "Allianz Field (2019) — $250M privately financed soccer-specific 19.4K venue in St. Paul; McGuire ownership controls venue economics; widely regarded as one of MLS's premium gameday environments.",
      brand: "2017 expansion with strong supporters' culture (transferred from NASL/MISL Minnesota lineage); Loons identity is well-curated; mid-tier national brand resonance.",
      marketSize: "Minneapolis-St. Paul DMA #15 — no competing MLS team and Twin Cities soccer culture is deeper than population would suggest.",
      onField: "Persistent playoff-team profile since 2018; 2020 Western Conference Final; current DP slate is mid-tier; Manny Lagos sporting director continuity provides operational stability."
    }
  },

  "Portland Timbers": {
    extendedValuationHistory: [
      { year: 2011, value: 0.060, source: "expansion fee paid 2009" },
      { year: 2013, value: 0.123, source: "Forbes" },
      { year: 2018, value: 0.235, source: "Forbes / post-MLS Cup runner-up", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Timbers receive ~$8M/yr from Apple TV+; pre-2023 Root Sports local rights ended.",
      stadium: "Providence Park (1926, expanded 2011/2019) — Merritt Paulson family-owned soccer-specific venue with unique heritage and 25.2K capacity; 4,000-seat 2019 expansion lifted matchday revenue meaningfully.",
      brand: "Strongest fan culture in MLS — Timbers Army supporters' group, Timber Joey log-cutting tradition, and TV-friendly atmospherics make Portland the league's most recognizable mid-market brand.",
      marketSize: "Portland DMA #21 — modest by major-league standards but soccer-mad demographic profile and no competing MLS team in the Pacific Northwest core.",
      onField: "2015 MLS Cup, 2021 MLS Cup runner-up; persistent playoff-team profile since 2013; current DP slate is in transition; sister NWSL Thorns provide commercial bundling."
    }
  },

  "Real Salt Lake": {
    extendedValuationHistory: [
      { year: 2008, value: 0.061, source: "Forbes — Rio Tinto Stadium opening year" },
      { year: 2013, value: 0.134, source: "Forbes" },
      { year: 2018, value: 0.215, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "RSL receive ~$8M/yr from Apple TV+; pre-2023 KMYU local rights ended.",
      stadium: "America First Field (2008, formerly Rio Tinto Stadium) — soccer-specific 20.2K venue privately built; SEG (Smith Entertainment Group / David Blitzer / Ryan Smith) acquired ownership 2022.",
      brand: "2009 MLS Cup remains highlight; identity stagnated under Dell Loy Hansen ownership controversy (sold 2022); SEG/Blitzer repositioning is in early stages.",
      marketSize: "Salt Lake DMA #29 — modest scale but loyal Mormon-heritage soccer base; no competing MLS team and limited regional pro-sports calendar.",
      onField: "Chicho Arango current DP; 2009 MLS Cup, 2013 US Open Cup; consistent playoff appearances historically; Pablo Mastroeni rebuild ongoing."
    }
  },

  "San Diego FC": {
    extendedValuationHistory: [
      { year: 2025, value: 0.500, source: "expansion fee paid 2023 — record MLS expansion" },
    ],
    factorNarratives: {
      mediaRights: "San Diego FC receive ~$8M/yr from Apple TV+; binational US-Mexico market is uniquely valuable for Apple's Spanish-language production.",
      stadium: "Snapdragon Stadium (2022, shared with San Diego State football) — 35K capacity, public-built ($310M); SDFC are tenants but venue is high-quality and the only major-league venue in San Diego post-Chargers.",
      brand: "2025 expansion that paid record $500M expansion fee; Sycuan Tribe + Mansour family ownership; binational identity (San Diego/Tijuana) and connection to Liga MX Club Tijuana ecosystem provide unique cross-border brand differentiation.",
      marketSize: "San Diego DMA #28 — soccer-friendly demographics, large Hispanic population, deep cross-border integration with Tijuana/Liga MX market.",
      onField: "Inaugural 2025 squad with Hirving 'Chucky' Lozano marquee DP; on-field expectations are mid-table for inaugural season but ownership-spending profile is top-tier."
    }
  },

  "San Jose Earthquakes": {
    extendedValuationHistory: [
      { year: 2008, value: 0.025, source: "Forbes — re-expansion inaugural year" },
      { year: 2013, value: 0.105, source: "Forbes" },
      { year: 2018, value: 0.155, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Earthquakes receive ~$8M/yr from Apple TV+; pre-2023 NBC Sports Bay Area local rights ended.",
      stadium: "PayPal Park (2015) — $100M privately financed soccer-specific 18.0K venue; Fisher ownership controls venue economics.",
      brand: "Inaugural 1996 founding member with two MLS Cups (2001, 2003 — original era); franchise relocated to Houston 2006, re-expanded as San Jose 2008; brand discontinuity has limited national resonance.",
      marketSize: "San Francisco-Oakland-San Jose DMA #6 — large market and tech-corporate base, but soccer-specific identity is shared with the broader Bay Area sports calendar.",
      onField: "Persistent bottom-table finishes since 2012 outside 2017/2020 anomalies; current rebuild under new ownership era; mid-tier DP slate."
    }
  },

  "Seattle Sounders FC": {
    extendedValuationHistory: [
      { year: 2010, value: 0.085, source: "expansion fee paid 2007 — first full Forbes year" },
      { year: 2013, value: 0.175, source: "Forbes" },
      { year: 2018, value: 0.305, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Sounders receive ~$8M/yr from Apple TV+; pre-2023 Root Sports Northwest local rights provided substantial regional reach but are now subsumed.",
      stadium: "Lumen Field — NFL Seahawks' venue, 68K capacity (Sounders typically draw 30-45K); not soccer-specific but matchday economics are strong due to scale.",
      brand: "Strongest mid-2000s expansion success story; 2009 expansion led to MLS attendance records (30K+ averages); two MLS Cups (2016, 2019) plus 2022 CONCACAF Champions League — only MLS team to win the regional title; deep supporter culture (ECS).",
      marketSize: "Seattle DMA #14 — soccer-mad demographics and no competing MLS team in the Pacific Northwest; tech-corporate base supports premium pricing.",
      onField: "Jordan Morris and Cristian Roldan are veteran cornerstones; 2022 CCL win was peak of competitive era; current rebuild post-Lodeiro/Ruidiaz."
    }
  },

  "Sporting Kansas City": {
    extendedValuationHistory: [
      { year: 2008, value: 0.026, source: "Forbes — Wizards era" },
      { year: 2013, value: 0.137, source: "Forbes — first full SKC rebrand year" },
      { year: 2018, value: 0.230, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Sporting KC receive ~$8M/yr from Apple TV+; pre-2023 Bally Sports Kansas City local rights ended.",
      stadium: "Children's Mercy Park (2011) — $200M privately financed soccer-specific 18.5K venue; team-owned by OnGoal LLC ownership group.",
      brand: "Inaugural 1996 founding member (as KC Wizards); 2011 SKC rebrand restored brand equity after years of underperformance; two MLS Cups (2000 as Wizards, 2013 as Sporting KC); strong supporters' culture (Cauldron).",
      marketSize: "Kansas City DMA #32 — modest scale but loyal soccer base and no competing MLS team in the central Plains region.",
      onField: "Persistent playoff-team profile through 2010s under Peter Vermes; recent rebuild years; Alan Pulido injury-derailed DP era; mid-table 2024-25 squad."
    }
  },

  "St. Louis City SC": {
    extendedValuationHistory: [
      { year: 2023, value: 0.200, source: "expansion fee paid 2019" },
    ],
    factorNarratives: {
      mediaRights: "St. Louis City receive ~$8M/yr from Apple TV+; bilingual Apple production reflects market profile.",
      stadium: "CITYPARK (2023) — $460M privately financed soccer-specific 22.5K venue; Carolyn Kindle / Taylor (Enterprise Rent-A-Car) ownership family controls venue economics; widely regarded as one of MLS's premier gameday environments.",
      brand: "2023 expansion that became the highest-spending MLS team during inaugural year; first majority-female-led ownership in MLS history; St. Louis soccer heritage (USMNT contributor city, deep grassroots) provides unique brand depth among expansion clubs.",
      marketSize: "St. Louis DMA #23 — long-time NCAA-soccer power and youth-soccer strong; no competing MLS team and minimal pro-sports calendar competition outside Cardinals.",
      onField: "Inaugural-season Western Conference 1st seed (2023) was MLS expansion-era best; 2024 regression but core DPs (Roman Bürki, Eduard Löwen) remain in place; mid-table 2025 rebuild."
    }
  },

  "Vancouver Whitecaps FC": {
    extendedValuationHistory: [
      { year: 2011, value: 0.040, source: "expansion fee paid 2009" },
      { year: 2013, value: 0.103, source: "Forbes" },
      { year: 2018, value: 0.190, source: "Forbes / Sportico", isEstimated: true },
    ],
    factorNarratives: {
      mediaRights: "Whitecaps receive ~$8M/yr from Apple TV+ + Canadian-specific TSN/Sportsnet rights; pre-2023 TSN local rights provided substantial regional reach.",
      stadium: "BC Place — shared with BC Lions (CFL), 54K capacity (Whitecaps typically tarp upper bowl to ~22K); not soccer-specific and limited team economics.",
      brand: "2011 expansion with deep Vancouver soccer heritage (NASL Whitecaps lineage); persistent rebuild-era identity; ownership uncertainty (Aquilini family active sale process 2024-25) and Las Vegas relocation rumors weigh on brand trajectory.",
      marketSize: "Vancouver DMA — Canada's third-largest market and uniquely soccer-friendly via Asian/European immigrant demographics; no competing MLS team but Canadian Premier League has emerged.",
      onField: "Persistent mid-table to bottom-half finishes since 2017 (peak Cascadia rivalry era); current DP slate is modest; 2024 Canadian Championship was recent highlight."
    }
  },

};
