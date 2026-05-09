const teams = [

  // ─────────────────────────────────────────────
  // NFL
  // ─────────────────────────────────────────────

  {
    name: "Dallas Cowboys",
    league: "NFL",
    city: "Dallas, TX",
    currentValuation: 10.1,
    valuationYear: 2024,
    fiveYearGrowth: 84,
    ownsStadium: false,
    stadiumName: "AT&T Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Became the first sports franchise to surpass $10B in Forbes valuation (2023); no controlling stake sale since Jerry Jones acquired for $140M in 1989",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 6,
      brand: 10,
      marketSize: 8,
      onField: 5,
    },
    oneLiner:
      "America's Team commands a ~50% premium over the next most valuable NFL franchise on 35 years of brand engineering and primetime saturation, not recent championships.",
  },

  {
    name: "New England Patriots",
    league: "NFL",
    city: "Foxborough, MA",
    currentValuation: 7.3,
    valuationYear: 2024,
    fiveYearGrowth: 83,
    ownsStadium: true,
    stadiumName: "Gillette Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Kraft family retains full control; Robert Kraft purchased for $172M in 1994, now worth $7.3B — a 42x return; Gillette Stadium privately owned since 2002",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 8,
      brand: 9,
      marketSize: 7,
      onField: 7,
    },
    oneLiner:
      "Six Super Bowl championships under Belichick-Brady compounded into a franchise brand and privately owned stadium that sustain elite valuation even through a post-dynasty transition.",
  },

  {
    name: "Los Angeles Rams",
    league: "NFL",
    city: "Los Angeles, CA",
    currentValuation: 6.9,
    valuationYear: 2024,
    fiveYearGrowth: 44,
    ownsStadium: true,
    stadiumName: "SoFi Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Stan Kroenke privately financed $5.5B SoFi Stadium (opened 2020) with no public funds, anchoring a 298-acre entertainment district in Inglewood; team purchased for ~$550M in 2010",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 10,
      brand: 6,
      marketSize: 10,
      onField: 6,
    },
    oneLiner:
      "The Rams thesis is a real estate play as much as a football play — SoFi Stadium anchors a 298-acre private entertainment district making the franchise inseparable from one of the largest stadium developments in history.",
  },

  {
    name: "New York Giants",
    league: "NFL",
    city: "East Rutherford, NJ",
    currentValuation: 6.8,
    valuationYear: 2024,
    fiveYearGrowth: 74,
    ownsStadium: true,
    stadiumName: "MetLife Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Mara and Tisch families retain controlling interest; MetLife Stadium co-built by Giants and Jets for $1.6B in 2010 with zero public funds — one of two privately financed NFL stadiums",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 7,
      brand: 8,
      marketSize: 10,
      onField: 3,
    },
    oneLiner:
      "The New York market alone justifies elite valuation — the Giants' stadium co-ownership in the nation's #1 media market creates a scarcity premium that holds regardless of on-field performance.",
  },

  {
    name: "San Francisco 49ers",
    league: "NFL",
    city: "Santa Clara, CA",
    currentValuation: 6.8,
    valuationYear: 2024,
    fiveYearGrowth: 94,
    ownsStadium: false,
    stadiumName: "Levi's Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "York family retains full control; Levi's Stadium naming rights ($114M over 20 years) reflect Silicon Valley corporate market depth; franchise has appreciated ~94% over five years on media deal tailwinds",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 6,
      brand: 8,
      marketSize: 9,
      onField: 7,
    },
    oneLiner:
      "Silicon Valley's Fortune 500 concentration gives the 49ers sponsor rates and suite economics that no other NFC West team can match, multiplying the NFL's media rights floor into an elite valuation.",
  },

  {
    name: "New York Jets",
    league: "NFL",
    city: "East Rutherford, NJ",
    currentValuation: 6.5,
    valuationYear: 2024,
    fiveYearGrowth: 103,
    ownsStadium: true,
    stadiumName: "MetLife Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Woody Johnson retains majority; Aaron Rodgers acquisition in 2023 drove significant national media attention and sponsorship activation; MetLife Stadium co-ownership with the Giants shares infrastructure cost",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 7,
      brand: 6,
      marketSize: 10,
      onField: 2,
    },
    oneLiner:
      "A franchise with one Super Bowl title (1969) worth $6.5B is the starkest proof in professional sports that the NFL's revenue-sharing floor and New York market position — not the scoreboard — set the valuation.",
  },

  {
    name: "Philadelphia Eagles",
    league: "NFL",
    city: "Philadelphia, PA",
    currentValuation: 6.5,
    valuationYear: 2024,
    fiveYearGrowth: 110,
    ownsStadium: false,
    stadiumName: "Lincoln Financial Field",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Jeffrey Lurie retains control (purchased for $185M in 1994); 2023 NFC Championship run drove record merchandise sales; new stadium discussions emerged in 2024 as Lincoln Financial Field approaches replacement age",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 6,
      brand: 8,
      marketSize: 8,
      onField: 7,
    },
    oneLiner:
      "Philadelphia's fanatical fan base creates one of the NFL's most inelastic attendance curves — sellouts regardless of record, Delaware Valley corporate suite premiums, and a 2018 championship that permanently elevated the brand.",
  },

  {
    name: "Washington Commanders",
    league: "NFL",
    city: "Landover, MD",
    currentValuation: 6.05,
    valuationYear: 2023,
    fiveYearGrowth: 95,
    ownsStadium: true,
    stadiumName: "Northwest Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Josh Harris-led group acquired from Dan Snyder for a then-record $6.05B in July 2023 — the highest price paid for any NFL franchise; sale triggered by years of legal controversy surrounding prior ownership",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 5,
      brand: 5,
      marketSize: 9,
      onField: 2,
    },
    oneLiner:
      "The Commanders' $6.05B sale — despite years of franchise mismanagement and an aging stadium — proved that the DC market and NFL revenue floor are structurally bulletproof; brand deterioration has a price ceiling, but not a valuation floor.",
  },

  // ─────────────────────────────────────────────
  // NBA
  // ─────────────────────────────────────────────

  {
    name: "Golden State Warriors",
    league: "NBA",
    city: "San Francisco, CA",
    currentValuation: 8.8,
    valuationYear: 2024,
    fiveYearGrowth: 105,
    ownsStadium: true,
    stadiumName: "Chase Center",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Joe Lacob and Peter Guber group bought for $450M in 2010; Chase Center opened 2019 privately financed for $1.4B with no public funds; $300M JPMorgan naming rights deal is largest in NBA history",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 10,
      brand: 10,
      marketSize: 9,
      onField: 9,
    },
    oneLiner:
      "The Warriors built Chase Center without a dollar of public subsidy then used it to anchor a San Francisco entertainment district — combining the NBA's top brand with the franchise-as-developer model in the nation's most expensive real estate market.",
  },

  {
    name: "New York Knicks",
    league: "NBA",
    city: "New York, NY",
    currentValuation: 6.6,
    valuationYear: 2024,
    fiveYearGrowth: 83,
    ownsStadium: true,
    stadiumName: "Madison Square Garden",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "James Dolan's MSG Sports retains full control; no championship since 1973; MSG Network regional rights and arena naming revenues compound the team's core franchise value within the Dolan media empire",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 10,
      brand: 9,
      marketSize: 10,
      onField: 2,
    },
    oneLiner:
      "The world's most famous arena in the world's largest market creates a valuation so structurally durable that the Knicks haven't won a championship since 1973 yet remain among the NBA's most valuable franchises.",
  },

  {
    name: "Los Angeles Lakers",
    league: "NBA",
    city: "Los Angeles, CA",
    currentValuation: 6.4,
    valuationYear: 2024,
    fiveYearGrowth: 73,
    ownsStadium: false,
    stadiumName: "Crypto.com Arena",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Buss family retains majority control; minority stakes sold to various investors; LeBron James era maintained global brand through a post-Kobe transition; new local media deal pending as RSN landscape shifts",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 4,
      brand: 10,
      marketSize: 10,
      onField: 7,
    },
    oneLiner:
      "Magic, Kareem, Shaq, Kobe, LeBron — the Lakers carry the NBA's deepest international brand lineage, creating a global fan base that makes the Los Angeles market premium feel redundant on top of an already-elite standalone brand.",
  },

  {
    name: "Boston Celtics",
    league: "NBA",
    city: "Boston, MA",
    currentValuation: 6.1,
    valuationYear: 2024,
    fiveYearGrowth: 118,
    ownsStadium: false,
    stadiumName: "TD Garden",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Sold to Bill Chisholm-led group for $6.1B in August 2024 — then-record for any NBA franchise; Wyc Grousbeck's group had purchased for $360M in 2002, delivering a 17x return in 22 years",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 4,
      brand: 9,
      marketSize: 7,
      onField: 9,
    },
    oneLiner:
      "The $6.1B Celtics sale was the moment the market confirmed that the NBA's new $76B media deal was already priced into buyer expectations — 18 championships meeting a structural rights re-rating in real time.",
  },

  {
    name: "Chicago Bulls",
    league: "NBA",
    city: "Chicago, IL",
    currentValuation: 4.3,
    valuationYear: 2024,
    fiveYearGrowth: 48,
    ownsStadium: true,
    stadiumName: "United Center",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Jerry Reinsdorf retains majority ownership; United Center co-owned with the Blackhawks since 1994 provides a dual-revenue arena asset; no significant external transaction since the franchise's 1985 purchase for $16M",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 7,
      brand: 9,
      marketSize: 9,
      onField: 2,
    },
    oneLiner:
      "Jordan's six championships created a global brand so durable it generates merchandise and sponsor premiums three decades after his retirement — the NBA's clearest proof that legacy brand is a standalone asset class.",
  },

  {
    name: "Los Angeles Clippers",
    league: "NBA",
    city: "Los Angeles, CA",
    currentValuation: 4.0,
    valuationYear: 2024,
    fiveYearGrowth: 100,
    ownsStadium: true,
    stadiumName: "Intuit Dome",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Steve Ballmer acquired for $2.0B in 2014 (NBA record at the time); Intuit Dome opened September 2024, privately financed for ~$2B with zero public subsidy — only the second major U.S. arena built entirely with private funds this century",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 9,
      brand: 6,
      marketSize: 10,
      onField: 5,
    },
    oneLiner:
      "Steve Ballmer turned a punchline into a platform — Intuit Dome's 2024 opening gave the Clippers their first genuine arena edge over the Lakers, privately financed and purpose-built to end the second-tenant stigma.",
  },

  {
    name: "Phoenix Suns",
    league: "NBA",
    city: "Phoenix, AZ",
    currentValuation: 4.0,
    valuationYear: 2023,
    fiveYearGrowth: 186,
    ownsStadium: false,
    stadiumName: "Footprint Center",
    mediaRightsTier: "high",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Mat Ishbia (United Wholesale Mortgage CEO) acquired from Robert Sarver for $4.0B in February 2023 — a forced sale following an NBA investigation into workplace misconduct; deal included the WNBA Phoenix Mercury",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 4,
      brand: 6,
      marketSize: 6,
      onField: 6,
    },
    oneLiner:
      "The Suns' $4B forced sale — triggered by owner misconduct, not a willing seller — set an NBA valuation floor that shocked analysts and forced a wholesale re-rating of every franchise in the league.",
  },

  {
    name: "Houston Rockets",
    league: "NBA",
    city: "Houston, TX",
    currentValuation: 3.8,
    valuationYear: 2024,
    fiveYearGrowth: 65,
    ownsStadium: false,
    stadiumName: "Toyota Center",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Tilman Fertitta acquired for $2.2B in 2017; franchise in extended rebuild following Harden trade but Houston's status as the US's 4th-largest city with deep international ties (especially China) provides a structural valuation floor",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 4,
      brand: 6,
      marketSize: 8,
      onField: 2,
    },
    oneLiner:
      "Houston's massive and fast-growing metro population — 4th-largest in the US with significant international demographics — gives the Rockets a market size premium that sustains valuation through extended rebuilding cycles.",
  },

  // ─────────────────────────────────────────────
  // MLB
  // ─────────────────────────────────────────────

  {
    name: "New York Yankees",
    league: "MLB",
    city: "New York, NY",
    currentValuation: 7.1,
    valuationYear: 2024,
    fiveYearGrowth: 54,
    ownsStadium: false,
    stadiumName: "Yankee Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Steinbrenner family retains majority; Yankees own ~80% of YES Network (shared with Amazon/others) — a unique media vertical that captures both the rights fee and the distribution margin; franchise hasn't changed hands since Steinbrenner's $10M purchase in 1973",
    valuationDrivers: {
      mediaRights: 10,
      stadium: 5,
      brand: 10,
      marketSize: 10,
      onField: 6,
    },
    oneLiner:
      "The Yankees are baseball's only truly global brand — 27 World Series titles plus YES Network ownership means the franchise captures both the rights fee and the distribution margin, compounding media value unlike any other MLB team.",
  },

  {
    name: "Los Angeles Dodgers",
    league: "MLB",
    city: "Los Angeles, CA",
    currentValuation: 4.8,
    valuationYear: 2024,
    fiveYearGrowth: 45,
    ownsStadium: true,
    stadiumName: "Dodger Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Mark Walter-led Guggenheim Baseball Management purchased for $2.15B in 2012; $700M Shohei Ohtani contract (2023) is largest in professional sports history and positioned the club as MLB's premier franchise",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 8,
      brand: 9,
      marketSize: 10,
      onField: 8,
    },
    oneLiner:
      "Dodger Stadium ownership in a 13M-person market plus the Shohei Ohtani era has made the Dodgers MLB's highest-revenue franchise, with local streaming renegotiations post-RSN collapse representing a potential additional value unlock.",
  },

  {
    name: "Boston Red Sox",
    league: "MLB",
    city: "Boston, MA",
    currentValuation: 4.3,
    valuationYear: 2024,
    fiveYearGrowth: 34,
    ownsStadium: true,
    stadiumName: "Fenway Park",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Fenway Sports Group (John Henry, Tom Werner) owns the Red Sox, Liverpool FC, and Pittsburgh Penguins; FSG reported at $10B+ combined valuation in 2021; Fenway Park has been continuously renovated rather than replaced, driving premium pricing",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 8,
      brand: 9,
      marketSize: 7,
      onField: 7,
    },
    oneLiner:
      "Fenway Park's irreplaceable historic status means renovation drives premium pricing rather than replacement — giving the Red Sox a real estate story no new-construction team can replicate, anchored by the oldest stadium in MLB.",
  },

  {
    name: "Chicago Cubs",
    league: "MLB",
    city: "Chicago, IL",
    currentValuation: 4.2,
    valuationYear: 2024,
    fiveYearGrowth: 31,
    ownsStadium: true,
    stadiumName: "Wrigley Field",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Ricketts family acquired for $845M in 2009; launched $750M Wrigley Field renovation alongside the Gallagher Way mixed-use development; Cubs co-own Marquee Sports Network, capturing local rights distribution profit",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 9,
      brand: 9,
      marketSize: 9,
      onField: 5,
    },
    oneLiner:
      "Wrigley Field's century of neighborhood identity has been monetized into a comprehensive real estate platform — the Gallagher Way development transforms the Cubs from a baseball team into a Wrigleyville destination operator.",
  },

  {
    name: "San Francisco Giants",
    league: "MLB",
    city: "San Francisco, CA",
    currentValuation: 3.8,
    valuationYear: 2024,
    fiveYearGrowth: 15,
    ownsStadium: true,
    stadiumName: "Oracle Park",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Charles B. Johnson family trust retains majority; Oracle Park opened in 2000 financed entirely with $357M in private funds — one of the only MLB stadiums built without public money; AT&T/SBC/Oracle naming rights history mirrors Silicon Valley's corporate evolution",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 9,
      brand: 7,
      marketSize: 9,
      onField: 4,
    },
    oneLiner:
      "Oracle Park's privately-financed waterfront location on China Basin — with McCovey Cove part of the brand identity — gives the Giants a premium real estate asset and the most distinctive ballpark setting in professional sports.",
  },

  {
    name: "New York Mets",
    league: "MLB",
    city: "New York, NY",
    currentValuation: 2.9,
    valuationYear: 2024,
    fiveYearGrowth: 38,
    ownsStadium: false,
    stadiumName: "Citi Field",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Steve Cohen (hedge fund billionaire, SAC Capital) acquired for $2.4B in November 2020 — then-record for MLB; Cohen's reported $22B+ net worth enables historic payroll investments; franchise transformation attempt ongoing",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 5,
      brand: 6,
      marketSize: 10,
      onField: 3,
    },
    oneLiner:
      "Steve Cohen's $2.4B acquisition unlocked the Mets' perpetually unrealized New York market potential — demonstrating how a single ultra-high-net-worth buyer can reset valuation expectations for an entire market position.",
  },

  {
    name: "Atlanta Braves",
    league: "MLB",
    city: "Atlanta, GA",
    currentValuation: 2.3,
    valuationYear: 2024,
    fiveYearGrowth: 35,
    ownsStadium: true,
    stadiumName: "Truist Park",
    mediaRightsTier: "medium",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Liberty Media (John Malone) spun off Atlanta Braves Holdings as an independent public company (BATRK) in 2023; The Battery Atlanta — 1.5M sq ft of mixed-use retail, hotel, and office surrounding Truist Park — generates year-round revenue independent of the baseball calendar",
    valuationDrivers: {
      mediaRights: 6,
      stadium: 9,
      brand: 6,
      marketSize: 6,
      onField: 6,
    },
    oneLiner:
      "The Battery Atlanta is MLB's most advanced proof-of-concept for the franchise-as-real-estate-developer thesis — 1.5M sq ft of mixed-use development surrounding Truist Park that operates 365 days a year regardless of the Braves' record.",
  },

  {
    name: "Houston Astros",
    league: "MLB",
    city: "Houston, TX",
    currentValuation: 2.1,
    valuationYear: 2024,
    fiveYearGrowth: 31,
    ownsStadium: false,
    stadiumName: "Minute Maid Park",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Jim Crane acquired for $610M in 2011; two World Series titles (2017, 2022) — with the 2017 title tainted by sign-stealing scandal — demonstrated how sustained performance elevates valuation for a large-market team without a top-tier historic brand",
    valuationDrivers: {
      mediaRights: 6,
      stadium: 4,
      brand: 6,
      marketSize: 8,
      onField: 7,
    },
    oneLiner:
      "The Astros built a dynasty through revolutionary analytics and player development that delivered two World Series appearances — showing how sustained on-field excellence materially elevates a large-market franchise that started with limited brand equity.",
  },

  // ─────────────────────────────────────────────
  // NHL
  // ─────────────────────────────────────────────

  {
    name: "Toronto Maple Leafs",
    league: "NHL",
    city: "Toronto, Canada",
    currentValuation: 2.8,
    valuationYear: 2024,
    fiveYearGrowth: 87,
    ownsStadium: true,
    stadiumName: "Scotiabank Arena",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "MLSE (Maple Leaf Sports & Entertainment) majority owned by Rogers Communications and BCE Inc.; MLSE's combined portfolio (Leafs, Raptors, Toronto FC, Argonauts) valued at $8B+, making the Leafs the anchor of Canada's most valuable sports conglomerate",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 8,
      brand: 9,
      marketSize: 9,
      onField: 1,
    },
    oneLiner:
      "The Maple Leafs haven't won the Stanley Cup since 1967 yet command Canada's most valuable sports franchise — proof that Toronto's market size, a hockey-obsessed culture, and Scotiabank Arena ownership within the MLSE conglomerate override any performance discount.",
  },

  {
    name: "New York Rangers",
    league: "NHL",
    city: "New York, NY",
    currentValuation: 2.6,
    valuationYear: 2024,
    fiveYearGrowth: 58,
    ownsStadium: true,
    stadiumName: "Madison Square Garden",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "James Dolan's MSG Sports retains full control; Rangers share Madison Square Garden economics with the Knicks, creating a dual-sport arena premium; MSG Entertainment separately manages venue operations generating additional sponsorship and event revenue",
    valuationDrivers: {
      mediaRights: 7,
      stadium: 10,
      brand: 8,
      marketSize: 10,
      onField: 4,
    },
    oneLiner:
      "The Rangers' MSG co-occupancy creates a dual-sport premium in hockey's best market — amplified by sharing infrastructure costs with the Knicks while capturing the cultural cachet of the world's most famous arena.",
  },

  {
    name: "Montreal Canadiens",
    league: "NHL",
    city: "Montreal, Canada",
    currentValuation: 2.0,
    valuationYear: 2024,
    fiveYearGrowth: 54,
    ownsStadium: true,
    stadiumName: "Bell Centre",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Geoff Molson-led family group controls majority through Groupe CH; Bell Centre at 21,302 capacity is the largest arena in the NHL; minority stake sold to Stephen Bronfman's Claridge private equity in recent years",
    valuationDrivers: {
      mediaRights: 7,
      stadium: 8,
      brand: 9,
      marketSize: 8,
      onField: 2,
    },
    oneLiner:
      "Hockey's most storied franchise — 24 Stanley Cup championships — benefits from the NHL's largest arena by capacity and Quebec's uniquely hockey-obsessed culture, sustaining brand equity durable enough to withstand decades of performance volatility.",
  },

  {
    name: "Boston Bruins",
    league: "NHL",
    city: "Boston, MA",
    currentValuation: 1.9,
    valuationYear: 2024,
    fiveYearGrowth: 73,
    ownsStadium: true,
    stadiumName: "TD Garden",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Jeremy Jacobs (Delaware North CEO) retains majority; Delaware North's ownership of both the Bruins and TD Garden is NHL's clearest vertical integration — the same family captures team economics, arena revenue, and food & beverage operations simultaneously",
    valuationDrivers: {
      mediaRights: 7,
      stadium: 8,
      brand: 8,
      marketSize: 7,
      onField: 5,
    },
    oneLiner:
      "Jeremy Jacobs' dual ownership of the Bruins and TD Garden is the NHL's cleanest vertical integration play — the same family captures franchise value, arena economics, and hospitality revenue while sharing infrastructure costs with the Celtics.",
  },

  {
    name: "Chicago Blackhawks",
    league: "NHL",
    city: "Chicago, IL",
    currentValuation: 1.7,
    valuationYear: 2024,
    fiveYearGrowth: 31,
    ownsStadium: true,
    stadiumName: "United Center",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Wirtz family (Rocky Wirtz) retains control; sexual abuse scandal involving a 2010 player created significant legal liability surfacing in 2021-22; franchise now in rebuild mode anchored by Connor Bedard, the 2023 #1 overall pick",
    valuationDrivers: {
      mediaRights: 6,
      stadium: 7,
      brand: 8,
      marketSize: 9,
      onField: 2,
    },
    oneLiner:
      "Three Stanley Cups in six years (2010-2015) built a global Blackhawks brand just as the franchise entered a scandal-fueled decline — now pinned on Connor Bedard to sustain a valuation built on a dynasty that's already history.",
  },

  {
    name: "Philadelphia Flyers",
    league: "NHL",
    city: "Philadelphia, PA",
    currentValuation: 1.7,
    valuationYear: 2024,
    fiveYearGrowth: 55,
    ownsStadium: true,
    stadiumName: "Wells Fargo Center",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Comcast Spectacor (a subsidiary of Comcast NBCUniversal) owns both the Flyers and Wells Fargo Center; $400M+ arena renovation completed in 2019; Comcast's global media assets create potential rights synergies unavailable to traditional sports owners",
    valuationDrivers: {
      mediaRights: 6,
      stadium: 8,
      brand: 7,
      marketSize: 8,
      onField: 2,
    },
    oneLiner:
      "Comcast's ownership creates the most distinctive media synergy in the NHL — a global cable and streaming conglomerate owning a team and its arena, with potential distribution and rights advantages no traditional sports owner possesses.",
  },

  {
    name: "Vegas Golden Knights",
    league: "NHL",
    city: "Las Vegas, NV",
    currentValuation: 1.5,
    valuationYear: 2024,
    fiveYearGrowth: 76,
    ownsStadium: false,
    stadiumName: "T-Mobile Arena",
    mediaRightsTier: "medium",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Bill Foley paid $500M expansion fee in 2017 — the most expensive expansion fee in NHL history at the time; franchise won the Stanley Cup in 2023 in just its sixth season; current valuation ~$1.5B represents a 200% return on the expansion investment in 7 years",
    valuationDrivers: {
      mediaRights: 6,
      stadium: 5,
      brand: 6,
      marketSize: 7,
      onField: 8,
    },
    oneLiner:
      "The Golden Knights' $500M-to-$1.5B appreciation in 7 years — capped by a Stanley Cup win — validates the Vegas entertainment market thesis and sets the template for professional sports expansion in tourist-dominant cities.",
  },

  {
    name: "Los Angeles Kings",
    league: "NHL",
    city: "Los Angeles, CA",
    currentValuation: 1.4,
    valuationYear: 2024,
    fiveYearGrowth: 65,
    ownsStadium: false,
    stadiumName: "Crypto.com Arena",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Two Stanley Cup championships (2012, 2014) elevated the brand; current ownership group operates in a market shared with the Lakers, Clippers, Dodgers, and Rams — making the Kings the least dominant team in the world's most crowded premium sports market",
    valuationDrivers: {
      mediaRights: 6,
      stadium: 4,
      brand: 6,
      marketSize: 10,
      onField: 5,
    },
    oneLiner:
      "Sharing the world's most famous entertainment market with four other premium franchises, the Kings demonstrate how the Los Angeles market multiplies brand and sponsorship value even for the least dominant team in the city's sports hierarchy.",
  },

  // ─────────────────────────────────────────────
  // MLS
  // ─────────────────────────────────────────────

  {
    name: "Inter Miami CF",
    league: "MLS",
    city: "Fort Lauderdale, FL",
    currentValuation: 1.15,
    valuationYear: 2024,
    fiveYearGrowth: 580,
    ownsStadium: true,
    stadiumName: "Chase Stadium",
    mediaRightsTier: "medium",
    marketSize: "medium",
    brandStrength: "high",
    recentTransaction:
      "Lionel Messi signed July 2023 for ~$50M-60M/year including revenue sharing — transforming Apple TV MLS Season Pass subscriptions, global jersey sales, and the club's worldwide profile overnight; David Beckham's 2014 $25M expansion option grew into a franchise now valued at $1.15B+",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 5,
      brand: 9,
      marketSize: 5,
      onField: 7,
    },
    oneLiner:
      "Messi's July 2023 arrival was the highest-impact individual player signing in North American sports history — Apple TV subscriptions surged, jersey sales shattered records, and the entire MLS valuation conversation reset in a single announcement.",
  },

  {
    name: "LA Galaxy",
    league: "MLS",
    city: "Los Angeles, CA",
    currentValuation: 0.95,
    valuationYear: 2024,
    fiveYearGrowth: 98,
    ownsStadium: true,
    stadiumName: "Dignity Health Sports Park",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "AEG (Philip Anschutz) founded and retains full ownership of both the Galaxy and Dignity Health Sports Park; Galaxy pioneered the MLS Designated Player Rule with David Beckham's $6.5M/year signing in 2007",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 7,
      brand: 8,
      marketSize: 10,
      onField: 5,
    },
    oneLiner:
      "The Galaxy established the MLS Designated Player playbook with Beckham in 2007 — a template for Messi, Zlatan, and every high-profile MLS signing that followed — giving the club a founding-era brand premium no expansion franchise can replicate.",
  },

  {
    name: "LAFC",
    league: "MLS",
    city: "Los Angeles, CA",
    currentValuation: 0.9,
    valuationYear: 2024,
    fiveYearGrowth: 100,
    ownsStadium: true,
    stadiumName: "BMO Stadium",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "LAFC ownership group includes Will Ferrell, Magic Johnson, and Chad Hurley (YouTube co-founder); BMO Stadium privately financed for $350M with no public subsidy (opened 2018); 2022 MLS Cup champions",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 8,
      brand: 6,
      marketSize: 10,
      onField: 6,
    },
    oneLiner:
      "LAFC built BMO Stadium without public funds in 2018, won the 2022 MLS Cup, and emerged as LA's second major soccer brand — demonstrating that a purpose-built privately financed venue can create structural advantages over a longer-tenured rival in the same market.",
  },

  {
    name: "Atlanta United",
    league: "MLS",
    city: "Atlanta, GA",
    currentValuation: 0.85,
    valuationYear: 2024,
    fiveYearGrowth: 70,
    ownsStadium: true,
    stadiumName: "Mercedes-Benz Stadium",
    mediaRightsTier: "medium",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Arthur Blank (Home Depot co-founder) owns both Atlanta United and the NFL's Atlanta Falcons; Mercedes-Benz Stadium opened 2017 for ~$1.6B, primarily privately financed; Atlanta United set MLS single-game attendance records in their inaugural seasons",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 8,
      brand: 6,
      marketSize: 6,
      onField: 6,
    },
    oneLiner:
      "Arthur Blank's decision to share a $1.6B privately-financed stadium between the Falcons and Atlanta United — with the soccer club setting MLS attendance records — proved that shared NFL-grade infrastructure can drive soccer demand in the American South.",
  },

  {
    name: "Toronto FC",
    league: "MLS",
    city: "Toronto, Canada",
    currentValuation: 0.75,
    valuationYear: 2024,
    fiveYearGrowth: 50,
    ownsStadium: false,
    stadiumName: "BMO Field",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "MLSE (same conglomerate as the Maple Leafs and Raptors) owns Toronto FC; MLSE's multi-sport infrastructure gives TFC cross-marketing reach and corporate relationships unavailable to independent MLS clubs",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 5,
      brand: 6,
      marketSize: 9,
      onField: 4,
    },
    oneLiner:
      "Toronto FC's MLSE ownership — sitting alongside the Maple Leafs, Raptors, and Argonauts — gives it marketing infrastructure and corporate access that no standalone MLS franchise can match, demonstrating the premium of embedding soccer within a multi-sport conglomerate.",
  },

  {
    name: "Seattle Sounders",
    league: "MLS",
    city: "Seattle, WA",
    currentValuation: 0.72,
    valuationYear: 2024,
    fiveYearGrowth: 69,
    ownsStadium: false,
    stadiumName: "Lumen Field",
    mediaRightsTier: "medium",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Ownership includes the Allen estate (Paul Allen co-founded), Joe Roth, and Adrian Hanauer; Sounders became the first MLS team to win CONCACAF Champions League (2022); Apple TV MLS deal provides first stable national distribution platform",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 5,
      brand: 7,
      marketSize: 7,
      onField: 7,
    },
    oneLiner:
      "Seattle's tech-economy fan base and consistently elite on-field performance — multiple MLS Cup wins plus CONCACAF Champions League — have built the Sounders into MLS's most complete franchise outside the Messi-era Inter Miami exception.",
  },

  {
    name: "New York Red Bulls",
    league: "MLS",
    city: "Harrison, NJ",
    currentValuation: 0.65,
    valuationYear: 2024,
    fiveYearGrowth: 76,
    ownsStadium: true,
    stadiumName: "Red Bull Arena",
    mediaRightsTier: "medium",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "Red Bull GmbH (Austria) owns both the club and Red Bull Arena; Red Bull's multi-club portfolio (RB Leipzig, Red Bull Salzburg, Red Bull Bragantino) uses New York as a proving ground for a global player development pipeline",
    valuationDrivers: {
      mediaRights: 5,
      stadium: 7,
      brand: 5,
      marketSize: 9,
      onField: 5,
    },
    oneLiner:
      "Red Bull's corporate ownership — funding both the team and its privately owned arena while running a global player development pipeline across four clubs — is MLS's most distinctive institutional ownership structure and a model no rival can organically replicate.",
  },

  {
    name: "Portland Timbers",
    league: "MLS",
    city: "Portland, OR",
    currentValuation: 0.6,
    valuationYear: 2024,
    fiveYearGrowth: 88,
    ownsStadium: false,
    stadiumName: "Providence Park",
    mediaRightsTier: "low",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Merritt Paulson (Peregrine Sports) owns both the Timbers and NWSL's Portland Thorns; 2022 MLS Cup champions; valuation suppressed relative to peers by Portland's mid-sized market and lack of stadium ownership",
    valuationDrivers: {
      mediaRights: 4,
      stadium: 4,
      brand: 6,
      marketSize: 5,
      onField: 7,
    },
    oneLiner:
      "The Timbers Army's authentic supporter culture — Providence Park sellouts and one of MLS's most passionate fan bases — has built regional brand equity that consistently punches above Portland's mid-tier market size.",
  },

  // ─────────────────────────────────────────────
  // EPL
  // ─────────────────────────────────────────────

  {
    name: "Manchester United",
    league: "EPL",
    city: "Manchester, UK",
    currentValuation: 6.5,
    valuationYear: 2024,
    fiveYearGrowth: 71,
    ownsStadium: true,
    stadiumName: "Old Trafford",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Jim Ratcliffe (INEOS founder) acquired 25% controlling stake for £1.25B in February 2024, taking over football operations while Glazer family retains 75% financial interest; Old Trafford redevelopment announced at estimated £2B cost",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 7,
      brand: 10,
      marketSize: 8,
      onField: 2,
    },
    oneLiner:
      "Manchester United's 1.1B-strong global fan base is the largest in football — a brand so structurally valuable it commands a $6.5B valuation despite a decade without a Premier League title, proving the biggest soccer brands are nearly performance-independent at the apex.",
  },

  {
    name: "Manchester City",
    league: "EPL",
    city: "Manchester, UK",
    currentValuation: 6.0,
    valuationYear: 2024,
    fiveYearGrowth: 122,
    ownsStadium: false,
    stadiumName: "Etihad Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Abu Dhabi United Group (ADUG/Sheikh Mansour) retains majority; Silver Lake Partners acquired ~10% of City Football Group for $500M in 2023, implying CFG valuation at $6B+; CFG now owns 13 clubs across 6 continents",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 5,
      brand: 9,
      marketSize: 8,
      onField: 10,
    },
    oneLiner:
      "City Football Group's 13-club, 6-continent portfolio — built on Abu Dhabi sovereign wealth — has transformed Manchester City from an English club into a global sports conglomerate with economies of scale in scouting, coaching methodology, and data infrastructure.",
  },

  {
    name: "Liverpool",
    league: "EPL",
    city: "Liverpool, UK",
    currentValuation: 5.5,
    valuationYear: 2024,
    fiveYearGrowth: 104,
    ownsStadium: true,
    stadiumName: "Anfield",
    mediaRightsTier: "high",
    marketSize: "medium",
    brandStrength: "high",
    recentTransaction:
      "Fenway Sports Group (John Henry, Tom Werner) completed acquisition in 2012; Anfield Road stand expansion completed in 2023 adding ~7,000 seats; FSG's combined portfolio (Red Sox, Liverpool, Pittsburgh Penguins) valued at $10B+",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 8,
      brand: 10,
      marketSize: 6,
      onField: 8,
    },
    oneLiner:
      "Liverpool's global fan base is disproportionate to the city of Liverpool's size — the result of European Cup legacy compounded by Klopp-era dominance, proving that elite trophy performance creates international commercial premiums worth billions over decades.",
  },

  {
    name: "Arsenal",
    league: "EPL",
    city: "London, UK",
    currentValuation: 4.0,
    valuationYear: 2024,
    fiveYearGrowth: 74,
    ownsStadium: true,
    stadiumName: "Emirates Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Stan Kroenke (KSE) completed 100% buyout of remaining Usmanov stake in 2021 for ~£600M; Emirates Stadium built for £390M in 2006 using commercial debt — the club owns it outright; KSE also owns the Rams, Nuggets, Avalanche, and Colorado Mammoth",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 8,
      brand: 9,
      marketSize: 10,
      onField: 5,
    },
    oneLiner:
      "London's global city status combined with Arsenal's historic brand and Emirates Stadium ownership gives KSE a Premier League asset that appreciates regardless of Champions League qualification — the London real estate premium playing out through sport.",
  },

  {
    name: "Chelsea",
    league: "EPL",
    city: "London, UK",
    currentValuation: 3.5,
    valuationYear: 2024,
    fiveYearGrowth: 30,
    ownsStadium: false,
    stadiumName: "Stamford Bridge",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "high",
    recentTransaction:
      "Clearlake Capital and Todd Boehly-led group acquired from Roman Abramovich (forced sale due to UK sanctions) for £4.25B in May 2022 — then-record for any sports club globally; Chelsea Pitch Owners (CPO) fan trust holds the Stamford Bridge freehold, blocking redevelopment without supporter approval",
    valuationDrivers: {
      mediaRights: 9,
      stadium: 3,
      brand: 8,
      marketSize: 10,
      onField: 4,
    },
    oneLiner:
      "Chelsea's unique structural constraint — Stamford Bridge's freehold owned by a fan trust, not the club — has suppressed stadium development options and may represent the most significant stadium overhang in world football.",
  },

  {
    name: "Tottenham Hotspur",
    league: "EPL",
    city: "London, UK",
    currentValuation: 3.0,
    valuationYear: 2024,
    fiveYearGrowth: 67,
    ownsStadium: true,
    stadiumName: "Tottenham Hotspur Stadium",
    mediaRightsTier: "high",
    marketSize: "large",
    brandStrength: "medium",
    recentTransaction:
      "ENIC Group (Joe Lewis and Daniel Levy) retains full control; Tottenham Hotspur Stadium opened 2019 for £1B+ entirely with private financing; stadium hosts NFL International Series games and major concerts, generating revenue independent of football",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 9,
      brand: 7,
      marketSize: 10,
      onField: 2,
    },
    oneLiner:
      "Tottenham's £1B privately-financed London stadium — with a retractable NFL surface, a dedicated NFL gate, and a retail and hospitality district — is the EPL's clearest stadium-driven valuation story and a template for multi-use sports venue economics.",
  },

  {
    name: "Newcastle United",
    league: "EPL",
    city: "Newcastle, UK",
    currentValuation: 2.5,
    valuationYear: 2024,
    fiveYearGrowth: 525,
    ownsStadium: true,
    stadiumName: "St. James' Park",
    mediaRightsTier: "high",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "PIF (Saudi Arabia's Public Investment Fund), PCP Capital Partners, and RB Sports & Media acquired 80% from Mike Ashley for £305M in October 2021; current $2.5B implied valuation represents an 8x appreciation in 3 years — among the fastest documented appreciations in sports history",
    valuationDrivers: {
      mediaRights: 8,
      stadium: 6,
      brand: 5,
      marketSize: 5,
      onField: 5,
    },
    oneLiner:
      "Saudi Arabia's PIF transformed Newcastle from a mid-table English club into a geopolitical soft power vehicle in 36 months — the starkest example of sovereign wealth rewriting sports valuation rules by operating entirely outside conventional return expectations.",
  },

  {
    name: "Aston Villa",
    league: "EPL",
    city: "Birmingham, UK",
    currentValuation: 1.5,
    valuationYear: 2024,
    fiveYearGrowth: 275,
    ownsStadium: true,
    stadiumName: "Villa Park",
    mediaRightsTier: "high",
    marketSize: "medium",
    brandStrength: "medium",
    recentTransaction:
      "Nassef Sawiris (Egyptian industrial billionaire) and Wes Edens (Fortress Investment co-founder) acquired majority in 2018 for ~£60M when Villa was in the Championship; club earned UEFA Champions League qualification in 2024 driving significant commercial uplift",
    valuationDrivers: {
      mediaRights: 7,
      stadium: 6,
      brand: 6,
      marketSize: 6,
      onField: 7,
    },
    oneLiner:
      "Aston Villa's trajectory from the Championship in 2019 to UEFA Champions League in 2024 under NSWE Capital is the EPL's most dramatic proof that strategic investment and managerial excellence can rapidly re-rate a mid-tier football club.",
  },
];

export default teams;
