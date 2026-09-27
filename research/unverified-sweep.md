# Unverified sweep

Generated 2026-09-27 by `scripts/build-refresh.mjs`. Every item the September 2026 fact refresh could not verify, by team, with the exact field and the last known value, so it can be run as its own research session. Rules applied on the site: numeric or date fields keep their value and render with "as of May 2026"; on-field, ownership and media sentences are removed from the profile; everything else is unchanged and listed here.

Totals: 321 items. 77 kept with "as of", 54 removed, 3 resolved by hand, 187 listed only.

## How to run the follow-up

1. For each row, find a 2026 source for the field. 2. Add a `changes` entry with `field`, `old`, `new`, `fact`, `source` to the team in `research/raw/refresh-<league>.json` (or to `research/raw/refresh-fixes.json`) and remove the matching `unverified` string. 3. Run `node scripts/build-refresh.mjs` and rebuild.

## NFL (36)

### Buffalo Bills
- `stadium.namingRightsDeal` · last known: "Highmark Blue Cross Blue Shield of Western New York, ~$5-6M/year (deal extended to cover new stadium, exact value undisclosed)" · action: kept; rendered "as of May 2026"
  - value of the Highmark deal on the new building not disclosed in any 2026 source found
- `stadium.nonGameRevenue` · last known: "Limited — aging facility with minimal non-NFL events" · action: listed for follow-up
  - no 2026 event-slate data found for the new building
### Miami Dolphins
- `media.streamingNotes` · last known: "Standard NFL package" · action: sentence removed from the profile
  - no 2026 source found
### New England Patriots
- `media.streamingNotes` · last known: "Standard NFL package" · action: sentence removed from the profile
  - no 2026 source found
### New York Jets
- `media.streamingNotes` · last known: "Standard NFL package" · action: sentence removed from the profile
  - no 2026 source found
### Baltimore Ravens
- `stadium.namingRightsDeal` · last known: "M&T Bank, original 15-year $75M deal (2003), extended through 2037 season; current per-year value undisclosed (~$6M/year est. prior to renewal)" · action: kept; rendered "as of May 2026"
  - current M&T annual value not disclosed
### Cincinnati Bengals
- `stadium.nonGameRevenue` · last known: "Limited — Hamilton County lease structure historically disadvantaged team on event revenue" · action: listed for follow-up
  - no 2026 source on event revenue under the new lease
### Cleveland Browns
- `stadium.namingRightsDeal` · last known: "Huntington Bank, 20-year deal announced Sept 2024; financial terms undisclosed; naming rights follow team to any new stadium" · action: kept; rendered "as of May 2026"
  - Huntington terms for the new building still undisclosed
### Pittsburgh Steelers
- `onField.starContracts` · last known: [{"player":"Aaron Rodgers","position":"QB","aav":13.65,"contractNote":"1yr/$13.65M base (June 2025), up to $19.5M with incentives; 2026 UFA tender in place"}] · action: listed for follow-up
  - Rodgers 2026 base salary vs. incentives split not found
### Houston Texans
- `stadium.newStadiumPlans` · last known: "As of May 2026, Cal McNair committed to staying at NRG Park site; renovation vs. new build under discussion with Harris County" · action: listed for follow-up
  - renovation cost and scope not yet published
### Indianapolis Colts
- `stadium.namingRightsDeal` · last known: {"sponsor":"Lucas Oil Products","annualValue_M":6.1,"totalValue_M":122,"expiryYear":2027,"notes":"20-year deal signed 2006 for $122M total; expires ~2026-2027;  · action: kept; rendered "as of May 2026"
  - Lucas Oil deal expires ~2026 and no renewal announcement was found
### Jacksonville Jaguars
- `stadium.namingRightsDeal` · last known: {"sponsor":"EverBank","annualValue_M":4.3,"totalValue_M":43,"expiryYear":2027,"notes":"Original 10-year, $43M deal; extended 3 years through end of 2027 season; · action: kept; rendered "as of May 2026"
  - EverBank extension beyond 2027 not found
### Tennessee Titans
- `stadium.namingRightsDeal` · last known: {"sponsor":"Nissan North America","annualValue_M":null,"totalValue_M":null,"expiryYear":2047,"notes":"20-year naming rights for new stadium announced Nov 2023;  · action: kept; rendered "as of May 2026"
  - Nissan annual value still undisclosed
### Denver Broncos
- `media.streamingNotes` · last known: "" · action: sentence removed from the profile
  - no 2026 source found
### Kansas City Chiefs
- `stadium.namingRightsDeal` · last known: {"sponsor":"GEHA (Government Employees Health Association)","annualValue_M":null,"totalValue_M":null,"expiryYear":2031,"notes":"10-year deal announced March 202 · action: kept; rendered "as of May 2026"
  - whether GEHA follows the team to Kansas not reported
### Las Vegas Raiders
- `ownership.ownerNetWorth` · last known: "~$500M (Forbes est., excluding Raiders stake)" · action: kept; rendered "as of May 2026"
  - no 2026 update on Mark Davis net worth found
### Los Angeles Chargers
- `ownership.institutionalInvestors` · last known: n/a · action: listed for follow-up
  - Arctos deal valuation never disclosed
### Dallas Cowboys
- `stadium.namingRightsDeal` · last known: "AT&T, ~$17-19M/year, expires ~2029" · action: kept; rendered "as of May 2026"
  - AT&T renewal status beyond ~2029 not found
- `ownership.ownerNetWorth` · last known: "~$10-12B (est.)" · action: kept; rendered "as of May 2026"
  - no 2026 update found
### New York Giants
- `onField.starContracts` · last known: [] · action: listed for follow-up
  - Dart rookie contract value not pulled
- `ownership.ownershipGroup` · last known: [{"name":"John Mara","role":"president, CEO, 50% ownership (Mara family)","pct":50},{"name":"Steve Tisch","role":"chairman, EVP, 50% ownership (Tisch family)"," · action: listed for follow-up
  - exact post-Koch split between the Mara and Tisch families not disclosed
### Philadelphia Eagles
- `stadium.newStadiumPlans` · last known: "Stadium revitalization/renovation project underway as of 2024-25" · action: listed for follow-up
  - Lincoln Financial Field renovation scope and cost not found in 2026 sources
### Washington Commanders
- `stadium.newStadiumPlans` · last known: "New stadium planned at RFK Stadium site in Washington D.C., targeting 2030 opening; pending D.C. Council approvals" · action: listed for follow-up
  - seat count reported as both 65,000 and 70,000+ across sources
### Chicago Bears
- `stadium.newStadiumPlans` · last known: "Bears pursuing new domed stadium; Arlington Heights and Hammond, IN remain as final two candidate sites as of May 2026; Illinois House passed property tax relie..." · action: listed for follow-up
  - total Hammond project cost not yet published
### Detroit Lions
- `stadium.namingRightsDeal` · last known: "Ford Motor Company, originally $40M/20-year deal (2002); extended through 2036 season in March 2025 — new terms undisclosed" · action: kept; rendered "as of May 2026"
  - Ford extension terms through 2036 still undisclosed
### Green Bay Packers
- `onField.starContracts` · last known: [{"player":"Jordan Love","position":"QB","aav":55,"contractNote":"4yr/$220M (July 2024), $100.8M guaranteed at signing, runs through 2028"}] · action: listed for follow-up
  - Micah Parsons trade/contract (Aug 2025) not verified in this pass
### Minnesota Vikings
- `media.streamingNotes` · last known: "Standard NFL package" · action: sentence removed from the profile
  - no 2026 source found
### Atlanta Falcons
- `onField.starContracts` · last known: [{"player":"Kirk Cousins","position":"QB","aav":45,"contractNote":"4yr/$180M signed 2024; $100M guaranteed"}] · action: listed for follow-up
  - Penix rookie contract value not pulled
### Carolina Panthers
- `stadium.newStadiumPlans` · last known: "$800M renovation approved June 2024; $650M public / $150M team; phased 2026-2029" · action: kept; rendered "as of May 2026"
  - 2026 renovation phase progress not found
### New Orleans Saints
- `onField.starContracts` · last known: [{"player":"Derek Carr","position":"QB","aav":37.5,"contractNote":"4yr/$150M signed 2023; Carr retired in 2024; large dead cap remains on books"}] · action: listed for follow-up
  - Shough rookie contract value not pulled
- `stadium.newStadiumPlans` · last known: "Ongoing $450M+ renovation funded via Caesars naming rights proceeds and state" · action: listed for follow-up
  - Superdome renovation completion status not re-verified
### Tampa Bay Buccaneers
- `stadium.namingRightsDeal` · last known: {"sponsor":"Raymond James Financial","annualValue":null,"totalValue":null,"expiry":2027,"notes":"Partnership runs through 2027; original 13-year deal in 1998 fo · action: kept; rendered "as of May 2026"
  - no Raymond James extension beyond 2027 announced
### Arizona Cardinals
- `stadium.namingRightsDeal` · last known: {"sponsor":"State Farm","annualValue":null,"totalValue":null,"expiry":null,"notes":"18-year naming rights deal effective 2018; financial terms confidential; est · action: kept; rendered "as of May 2026"
  - State Farm terms still confidential
### Los Angeles Rams
- `media.streamingNotes` · last known: "" · action: sentence removed from the profile
  - no 2026 source found
### San Francisco 49ers
- `stadium.namingRightsDeal.annualValue` · last known: 17 · action: kept; rendered "as of May 2026"
  - proxies list null; enrichment $17M/yr from the 2024 extension retained
### Seattle Seahawks
- `ownership.ownerNetWorth` · last known: "~$20B (Paul Allen estate)" · action: kept; rendered "as of May 2026"
  - Khosla family net worth not verified; old Allen-estate figure retained

## NBA (55)

### Boston Celtics
- `ownership.ownershipGroup` · last known: [{"name":"Bill Chisholm","role":"majority owner / incoming governor","pct":null},{"name":"Wyc Grousbeck","role":"minority / governor through 2027-28","pct":null · action: listed for follow-up
  - Wikipedia's owners list shows Chisholm 51% with Grousbeck, Mittal, Beal, Hale and Sixth Street as minority holders; percentages beyond 51/49 not sourced
- `arena.namingRightsDeal` · last known: {"sponsor":"TD Bank (TD Group)","annualValue_M":6,"totalValue_M":119.1,"expiryYear":null,"notes":"20-year deal signed 2005 at ~$119.1M total; renewed; paid to a · action: kept; rendered "as of May 2026"
  - no 2026 TD Garden renewal terms found
### Brooklyn Nets
- (no field) · last known: n/a · action: listed for follow-up
  - Cam Thomas status: not on the Nets' 2026-27 contract table at Basketball-Reference; his 2026 destination was not sourced
- `ownership.ownershipGroup` · last known: [{"name":"Joe Tsai","role":"majority owner / governor (BSE Global)","pct":"~85% post-Koch"},{"name":"Julia Koch & family","role":"minority (15% of BSE Global, a · action: listed for follow-up
  - no 2026 change to the Tsai/Koch structure found, but not re-verified
### New York Knicks
- `media.localTVDeal` · last known: "MSG Network (owned by MSG Sports Corp — same entity as the Knicks; vertically integrated); most valuable local NBA TV deal" · action: sentence removed from the profile
  - MSG Network still carries the team per Wikipedia 2026-27 season page, but no 2026 rights-fee update found
- (no field) · last known: n/a · action: listed for follow-up
  - The Knicks also won the 2025 NBA Cup per Wikipedia; not added as a field
### Philadelphia 76ers
- `arena.namingRightsDeal` · last known: {"sponsor":"Wells Fargo","annualValue_M":8,"totalValue_M":null,"expiryYear":null,"notes":"Multi-decade relationship; ~$40M originally, extended; paid to Comcast · action: kept; rendered "as of May 2026"
  - Xfinity Mobile naming sponsor value not sourced (enrichment still lists Wells Fargo)
- (no field) · last known: n/a · action: listed for follow-up
  - New arena cost: reported only as undisclosed and privately funded
### Toronto Raptors
- `media.localTVDeal` · last known: "Sportsnet (Rogers Communications regional network — same parent as majority MLSE owner; vertically integrated post-2025); national Canadian broadcast rights via..." · action: sentence removed from the profile
  - Wikipedia 2026-27 page lists TSN and Sportsnet; no 2026 Canadian rights renewal terms found
- (no field) · last known: n/a · action: listed for follow-up
  - MLSE CA$17.4B 2026 equity figure is from the Wikipedia infobox and was not traced to its underlying source
### Chicago Bulls
- (no field) · last known: n/a · action: listed for follow-up
  - Head coach Billy Donovan stepped down April 21, 2026 per Wikipedia; successor not sourced
- (no field) · last known: n/a · action: listed for follow-up
  - ownership: no 2026 Reinsdorf succession or sale news found
### Cleveland Cavaliers
- (no field) · last known: n/a · action: listed for follow-up
  - DAZN rights fee: not disclosed; league guidance was that former FanDuel teams recover up to roughly 60% of lost 2025-26 fees from the Main Street wind-down
### Detroit Pistons
- (no field) · last known: n/a · action: listed for follow-up
  - Scripps rights fee and deal length not disclosed
- (no field) · last known: n/a · action: listed for follow-up
  - Jalen Duren contract status: not visible on BBR top rows for 2026-27; not re-verified
### Indiana Pacers
- (no field) · last known: n/a · action: listed for follow-up
  - DAZN Pacers deal: reported as expected, not announced; fee unknown
- `ownership.ownershipGroup` · last known: [{"name":"Herb Simon","role":"owner/governor (~80%)","pct":"~80%"},{"name":"Steven Rales","role":"minority (~20%, pending)","pct":"~20%"}] · action: listed for follow-up
  - Steven Rales stake listed as pending in enrichment; closing not re-verified
### Atlanta Hawks
- (no field) · last known: n/a · action: listed for follow-up
  - WANF rights fee and term not disclosed
### Charlotte Hornets
- (no field) · last known: n/a · action: listed for follow-up
  - Spectrum Center renovation completion status in 2026 not sourced
### Miami Heat
- (no field) · last known: n/a · action: listed for follow-up
  - WPLG rights fee and deal length not disclosed
### Orlando Magic
- (no field) · last known: n/a · action: listed for follow-up
  - New head coach after Mosley's May 2026 dismissal not sourced
- (no field) · last known: n/a · action: listed for follow-up
  - Cox deal length not announced
### Washington Wizards
- (no field) · last known: n/a · action: listed for follow-up
  - Monumental's exact share of the $1B-plus renovation budget not stated in 2026 sources (prior figure $285M)
- (no field) · last known: n/a · action: listed for follow-up
  - Dybantsa draft slot not sourced beyond the contract table
### Milwaukee Bucks
- (no field) · last known: n/a · action: listed for follow-up
  - WVTV rights fee and term not disclosed
- `ownership.ownershipGroup` · last known: [{"name":"Wes Edens","role":"managing partner/governor","pct":"majority"},{"name":"Jimmy & Dee Haslam","role":"minority (~25%)","pct":"~25%"}] · action: listed for follow-up
  - Edens/Haslam split not re-verified in 2026
### Denver Nuggets
- (no field) · last known: n/a · action: listed for follow-up
  - No 2026 Jokic extension found in the Hoops Rumors tracker; his 2027-28 season remains the last under contract
- (no field) · last known: n/a · action: listed for follow-up
  - Wikipedia lists Ann Walton Kroenke as the Nuggets' owner of record (long-standing KSE structure); enrichment's Stan Kroenke/KSE framing left as is
### Minnesota Timberwolves
- (no field) · last known: n/a · action: listed for follow-up
  - DAZN rights fee not disclosed; five-year term with opt-out is from the Star Tribune (page returned 429 on direct fetch, relied on search summary)
- `arena.newArenaPlans` · last known: "New ownership exploring arena options given 1990 vintage building; no formal announcement as of 2025" · action: listed for follow-up
  - no 2026 Target Center replacement announcement found
### Oklahoma City Thunder
- (no field) · last known: n/a · action: listed for follow-up
  - Griffin Media deal terms not disclosed; primary announcement not retrieved
### Portland Trail Blazers
- `ownership.acquisitionYear` · last known: n/a · action: resolved in refresh-fixes.json
  - transactions.js dates the Dundon tranche-1 close 2025-09-13, while Wikipedia's Moda Center and owners pages say the purchase closed in March 2026; transactions.js kept as the established record, flagged for review
- `arena.newArenaPlans` · last known: "$365M Oregon state public renovation funding proposed for Moda Center overhaul (2026); pending Oregon Legislative Assembly approval" · action: kept; rendered "as of May 2026"
  - Wikipedia says Dundon's representatives secured state and local commitments to finance Moda Center renovations in 2025, but the $365M Oregon approval status in 2026 was not sourced
- (no field) · last known: n/a · action: listed for follow-up
  - New head coach Micah Nori listed on the 2026-27 season page; hire date not sourced
### Utah Jazz
- (no field) · last known: n/a · action: listed for follow-up
  - Total private cost of the Delta Center rebuild not stated in 2026 coverage
- `media.localTVDeal` · last known: "Smith Entertainment Group in-house media operations, ~$15M/yr — integrates Jazz and Utah Hockey Club content distribution" · action: sentence removed from the profile
  - Wikipedia lists KJZZ-TV, KUTV, Jazz+ (Kiswe) and Root Sports Northwest; the enrichment's ~$15M in-house figure not re-verified
### Golden State Warriors
- `ownership.ownershipGroup` · last known: [{"name":"Joe Lacob","role":"co-executive chairman / lead governor","pct":null},{"name":"Peter Guber","role":"co-executive chairman","pct":null},{"name":"Arctos · action: listed for follow-up
  - no 2026 Arctos or other minority stake transaction found; not re-verified
### Los Angeles Clippers
- (no field) · last known: n/a · action: listed for follow-up
  - 2026-27 local TV partner not announced as of late September 2026
- (no field) · last known: n/a · action: listed for follow-up
  - Interim governor during Ballmer's suspension not sourced
### Los Angeles Lakers
- (no field) · last known: n/a · action: listed for follow-up
  - The Wikipedia 2026-27 season page cites 'potential tax fraud issues' with Walter as a reason for the sale; not corroborated by SI or The Ringer, so not recorded
- `ownership.acquisitionPrice` · last known: 10 · action: kept; rendered "as of May 2026"
  - stays $10B (2025 Walter deal) until the $12.5B sale closes
### Phoenix Suns
- `arena.newArenaPlans` · last known: "Active engagement with City of Phoenix on renovation or replacement; 1992 venue is second-oldest in NBA — significant renovation or replacement needed within 5-..." · action: listed for follow-up
  - no 2026 renovation or replacement agreement with the City of Phoenix found; the arena did host the 2026 women's Final Four
- (no field) · last known: n/a · action: listed for follow-up
  - arena.namingRightsDeal value for Mortgage Matchup still undisclosed
### Sacramento Kings
- `media.localTVDeal` · last known: "NBC Sports California, ~$15M/yr" · action: sentence removed from the profile
  - Wikipedia lists NBC Sports California plus CBS 13 for 2026-27; over-the-air component and fee not sourced
- (no field) · last known: n/a · action: listed for follow-up
  - No 2026 ownership or Golden 1 Center news found; coach Doug Christie, GM Scott Perry per Wikipedia
### Dallas Mavericks
- (no field) · last known: n/a · action: listed for follow-up
  - Tegna rights fee not sourced
- (no field) · last known: n/a · action: listed for follow-up
  - Irving arena: a proposal noted on Wikipedia, no 2026 agreement found
### Houston Rockets
- `arena.newArenaPlans` · last known: "$180M renovation approved 2024: Texas state $95M + Fertitta $85M; includes new scoreboard, premium suite expansion, practice facility improvements; completing 2..." · action: kept; rendered "as of May 2026"
  - $180M Toyota Center renovation was slated to complete in 2026; completion not sourced
- (no field) · last known: n/a · action: listed for follow-up
  - Fertitta's status as US ambassador to Italy (2025) and any resulting governance change not researched
### Memphis Grizzlies
- (no field) · last known: n/a · action: listed for follow-up
  - Gray Media and DAZN rights fees not disclosed
- `arena.namingRightsDeal` · last known: {"sponsor":"FedEx Corporation","annualValue_M":5,"totalValue_M":92,"expiryYear":null,"notes":"Original 20-year, $92M deal ($4.6M/yr) signed 2004; FedEx is Memph · action: kept; rendered "as of May 2026"
  - FedExForum renewal status not sourced
### New Orleans Pelicans
- `arena.newArenaPlans` · last known: "$250M major renovation OR $1B+ new arena at proposed downtown entertainment district being studied; decision expected 2026-27; 1999 venue approaching 30-year li..." · action: kept; rendered "as of May 2026"
  - no 2026 decision on a Smoothie King Center renovation versus a new downtown arena found
- (no field) · last known: n/a · action: listed for follow-up
  - arena.namingRightsDeal renewal terms not sourced
### San Antonio Spurs
- (no field) · last known: n/a · action: listed for follow-up
  - Hemisfair arena construction status in 2026 not sourced (2030 target unchanged in enrichment)
- (no field) · last known: n/a · action: listed for follow-up
  - Tegna and DAZN rights fees not disclosed

## MLB (38)

### New York Yankees
- `media.localTVDeal` · last known: "YES Network — Yankees own ~26% equity stake (reacquired 2019 from Fox/Sinclair group); YES generates ~$300M+ annual revenue with ~$150M+ flowing to team between..." · action: sentence removed from the profile
  - YES Network arrangement not re-checked with a 2026 source
- `media.streamingNotes` · last known: "Apple TV+ Friday Game of the Week; ESPN/Fox national packages; YES available on streaming via YouTube TV, Hulu Live, fuboTV" · action: sentence removed from the profile
  - Apple TV+ Friday package status for 2026 not re-checked
### Boston Red Sox
- `ownership.ownerNetWorth` · last known: "~$5.7B (Forbes Oct 2024)" · action: kept; rendered "as of May 2026"
  - no 2026 refresh of Henry net worth
### Toronto Blue Jays
- `stadium.newStadiumPlans` · last known: "Ongoing renovation plan through 2025; Rogers Centre retractable roof and large footprint constrain sightlines; long-term new ballpark discussions have surfaced ..." · action: listed for follow-up
  - no 2026 source on a new Toronto ballpark
- `media.localTVDeal` · last known: "Sportsnet (Rogers Media subsidiary) — fully owned by parent Rogers Communications; no arm's-length media deal; team, stadium, and RSN are all Rogers properties,..." · action: sentence removed from the profile
  - Sportsnet arrangement assumed unchanged under Rogers ownership; not separately checked
### Tampa Bay Rays
- `onField.starContracts` · last known: [{"player":"Yandy Díaz","position":"1B","aav":13,"contractNote":"4yr/$52M extension (2023), through 2026"},{"player":"Shane McClanahan","position":"SP","aav":17 · action: listed for follow-up
  - Díaz and McClanahan contract status for 2026 not re-checked; Freddy Peralta acquired from the Mets Aug 2, 2026 (Wikipedia) but his contract terms not sourced
### Baltimore Orioles
- `ownership.ownershipGroup` · last known: [{"name":"David Rubenstein","role":"majority purchaser / new principal owner","pct":null},{"name":"Michael Arougheti","role":"minority investor (Ares Management · action: listed for follow-up
  - exact post-2024 stake split among Rubenstein, Arougheti, Bloomberg and the Angelos family not sourced
### Chicago White Sox
- `onField.starContracts` · last known: [{"player":"Eloy Jiménez","position":"LF/DH","aav":14,"contractNote":"6yr/$43M (2020 preagreed extension); injury-prone; through 2026"},{"player":"Dylan Cease", · action: listed for follow-up
  - 2026 roster contracts (Jiménez departed; Colson Montgomery, Luis Robert Jr. traded to the Mets per Mets 2026 page) not fully sourced; array left as is
- `ownership.ownershipGroup` · last known: [{"name":"Jerry Reinsdorf","role":"chairman / majority owner","pct":null},{"name":"Justin Ishbia","role":"incoming limited partner (2025); option for control 20 · action: listed for follow-up
  - Ishbia's LP percentage after the 2025 buyouts is undisclosed
### Cleveland Guardians
- `ownership.ownershipGroup` · last known: n/a · action: resolved in refresh-fixes.json
  - secondary sources put Blitzer at ~35% with a control option exercisable after the 2027 season (vs. 27% / 2028 in the enrichment); no primary source found, left unchanged
- `stadium.namingRightsDeal` · last known: {"sponsor":"Progressive Insurance","annualValue_M":3.6,"totalValue_M":null,"expiryYear":2023,"notes":"Progressive Insurance paid $3.6M/yr for naming rights; dea · action: kept; rendered "as of May 2026"
  - Progressive extension term not re-checked
### Kansas City Royals
- `ownership.ownershipGroup` · last known: [{"name":"John Sherman","role":"managing partner / chairman","pct":null},{"name":"David Glass family","role":"retained minority stake","pct":null}] · action: listed for follow-up
  - ESPN lists Patrick Mahomes and Eric Stonestreet among Sherman's investors; group composition not otherwise re-checked
### Houston Astros
- `stadium.namingRightsDeal` · last known: {"sponsor":"Daikin Comfort Technologies North America (Daikin)","annualValue_M":null,"totalValue_M":null,"expiryYear":2039,"notes":"15-year deal announced Nov 2 · action: kept; rendered "as of May 2026"
  - Daikin fee still undisclosed; no 2026 source
- `onField.starContracts` · last known: [{"player":"Jose Altuve","position":"2B","aav":29,"contractNote":"Multi-year extension; franchise icon; 3x All-Star, 2017 WS MVP, 7x AL batting title contender" · action: listed for follow-up
  - Peña's exact free-agency year not sourced
### Los Angeles Angels
- `stadium.newStadiumPlans` · last known: "Future uncertain: Angels lease runs through 2029 with club option extensions; relocation to Irvine or new Anaheim stadium remains in discussion" · action: listed for follow-up
  - transactions.js notes the lease runs to 2032 with options to 2038 (vs. 2029 in the enrichment) and ~130 acres of parking; no primary lease source fetched, left unchanged
### Oakland Athletics
- `onField.starContracts` · last known: [{"player":"Brent Rooker","position":"LF/DH","aav":10,"contractNote":"Multi-year extension; emerged as key offensive piece during Oakland final seasons and Sacr · action: listed for follow-up
  - Lawrence Butler and Luis Severino contracts not sourced (Wikipedia disambiguation only)
- `media.streamingNotes` · last known: "MLB.TV nationally; A's broadcasting some games on local OTA affiliates during Sacramento transition; Las Vegas media deal TBD" · action: sentence removed from the profile
  - in-market streaming arrangement for Sacramento not sourced
### Seattle Mariners
- `onField.starContracts` · last known: [{"player":"Julio Rodríguez","position":"CF","aav":17.5,"contractNote":"12yr/$210M guaranteed + club options potentially worth $470M total (Aug 2022, as a rooki · action: listed for follow-up
  - Gilbert extension terms carried from the enrichment, not re-sourced
### Texas Rangers
- `onField.starContracts` · last known: [{"player":"Corey Seager","position":"SS","aav":32.5,"contractNote":"10yr/$325M (Dec 2021), through 2031; franchise-record deal at signing; 2023 WS MVP; 2x WS M · action: listed for follow-up
  - Eovaldi's current contract not re-checked
### Atlanta Braves
- `ownership.ownerNetWorth` · last known: "John Malone: ~$9B est.; Greg Maffei (Liberty Live Group CEO): ~$1B est.; company market cap ~$2.5B" · action: kept; rendered "as of May 2026"
  - BATRA/BATRK market cap not refreshed for 2026
- `onField.starContracts` · last known: [{"player":"Ronald Acuña Jr.","position":"OF","aav":17,"contractNote":"8yr/$100M (2019 extension), final years at $17M; through 2026; signed when Acuña was stil · action: listed for follow-up
  - Acuña option years carried from public contract data, not a 2026 source
### New York Mets
- `stadium.namingRightsDeal` · last known: {"sponsor":"Citigroup","annualValue_M":20,"totalValue_M":400,"expiryYear":2028,"notes":"20-year/$400M deal signed 2006, $20M/yr; most lucrative MLB naming right · action: kept; rendered "as of May 2026"
  - Citi extension terms beyond 2028 not sourced
- `ownership.ownershipGroup` · last known: [{"name":"Steve Cohen","role":"controlling owner / chairman & CEO","pct":97},{"name":"Alexandra Cohen","role":"co-owner","pct":null}] · action: listed for follow-up
  - ESPN lists Cohen at ~95% vs 97% in the enrichment; not resolved
### Philadelphia Phillies
- `onField.starContracts` · last known: [{"player":"Bryce Harper","position":"1B/OF","aav":25.4,"contractNote":"13yr/$330M (2019), through 2031; moved from RF to 1B post-UCL surgery; 2021 NL MVP"},{"p · action: listed for follow-up
  - Wheeler's 2024 extension figure drawn from public contract data, not a 2026 source
- `ownership.institutionalInvestors` · last known: "~$500M raised from three new institutional investors in Nov 2024 at ~$3B implied valuation; first major outside capital raise for the franchise" · action: kept; rendered "as of May 2026"
  - 2024 institutional raise not re-checked
### Washington Nationals
- `ownership.institutionalInvestors` · last known: "Fully family-owned; no PE or institutional investors as of 2024" · action: sentence removed from the profile
  - no 2026 source on a Lerner sale process; ESPN lists the Lerner family as owner
### Chicago Cubs
- `media.localTVDeal` · last known: "Marquee Sports Network — Cubs-owned regional sports network launched Feb 2020; Cubs own majority stake in partnership with Sinclair Broadcast Group; Marquee pro..." · action: sentence removed from the profile
  - Marquee/Comcast carriage status in 2026 not re-checked
- `media.streamingNotes` · last known: "Apple TV+ (Friday night games), MLB.TV; Marquee available via cable/streaming; Cubs exploring expanded streaming distribution; Comcast carriage dispute (2025) c..." · action: sentence removed from the profile
  - not re-checked
### Cincinnati Reds
- `ownership.ownerBackground` · last known: n/a · action: resolved in refresh-fixes.json
  - the enrichment says Bob Castellini died in Jan 2024, but the 2026 Reds season page still lists Bob Castellini as owner and ESPN describes a Feb 2026 succession; the death claim looks wrong and should be re-checked before publishing
### Milwaukee Brewers
- `ownership.ownershipGroup` · last known: [{"name":"Mark Attanasio","role":"principal owner / chairman","pct":null},{"name":"Various limited partners","role":"minority investors","pct":null}] · action: listed for follow-up
  - ESPN notes Giannis Antetokounmpo as a minority investor since 2021; not added without a primary source
### Pittsburgh Pirates
- `onField.starContracts` · last known: [{"player":"Ke'Bryan Hayes","position":"3B","aav":8.75,"contractNote":"8yr/$70M (Mar 2021), through 2028; Gold Glove caliber, bat has underperformed"}] · action: removed contract line(s): Ke'Bryan Hayes
  - Ke'Bryan Hayes' status (reported 2025 trade to Cincinnati) not sourced; dropped from the array pending confirmation
### Los Angeles Dodgers
- `media.localTVDeal` · last known: "SportsNet LA (Spectrum Sports/Charter Communications); 25-year deal signed 2013 totaling $8.35B through 2039 (~$334M/yr at face value; reported annual receipts ..." · action: sentence removed from the profile
  - SportsNet LA / Charter arrangement not re-checked with a 2026 source
### San Francisco Giants
- `media.localTVDeal` · last known: "NBC Sports Bay Area (Giants co-own the RSN with NBCUniversal via a joint venture); generated ~$92M in local TV revenue for the Giants in 2022; unlike Bally Spor..." · action: sentence removed from the profile
  - NBC Sports Bay Area JV not re-checked for 2026
- `ownership.ownershipGroup` · last known: [{"name":"Charles B. Johnson","role":"principal owner","pct":null},{"name":"Larry Baer","role":"president and CEO / limited partner","pct":null},{"name":"Sixth  · action: listed for follow-up
  - ESPN lists Greg Johnson as chairman with 30-plus partners incl. Buster Posey; not restructured without a fuller source
### Colorado Rockies
- `onField.starContracts` · last known: [{"player":"Kris Bryant","position":"OF/3B","aav":26,"contractNote":"7yr/$182M (Mar 2022), through 2028; back injuries have derailed tenure; played fewer than 1 · action: listed for follow-up
  - McMahon's reported 2025 trade to the Yankees not sourced; entry left as is
- `ownership.ownershipGroup` · last known: [{"name":"Dick Monfort","role":"chairman and CEO","pct":null},{"name":"Charlie Monfort","role":"co-owner / general partner","pct":null},{"name":"Greg Penner / C · action: listed for follow-up
  - Penner stake pct left at 40 pending the closing source (April 2026 per Wikipedia; enrichment said 2025)
### Arizona Diamondbacks
- `onField.starContracts` · last known: [{"player":"Zac Gallen","position":"SP","aav":12,"contractNote":"5yr/$60M (Nov 2022) through 2027; D-backs homegrown ace; sub-3.00 ERA franchise starter"}] · action: removed contract line(s): Zac Gallen
  - Marte's extension terms and Zac Gallen's status (free agent after 2025) not sourced with a 2026 link
- `stadium.namingRightsDeal` · last known: {"sponsor":"Chase (JPMorgan Chase Bank)","annualValue_M":3,"totalValue_M":null,"expiryYear":null,"notes":"Bank One Ballpark at opening (1998); renamed Chase Fie · action: kept; rendered "as of May 2026"
  - Chase deal term not re-checked

## NHL (76)

### Boston Bruins
- `onField.starContracts` · last known: [{"player":"David Pastrnak","position":"RW","aav":11.25,"contractNote":"8yr/$90M (2023), through 2030-31; 6th-richest NHL deal at signing"},{"player":"Charlie M · action: listed for follow-up
  - CapWages lists JJ Peterka ($7.7M) and Elias Lindholm ($7.75M) on the 2026-27 Bruins; the Peterka move was not second-sourced so it is not added
- `arena.nonArenaRevenue` · last known: "Delaware North owns the surrounding Hub on Causeway mixed-use development (~1.5M sq ft of office, retail, hotel), a $1.2B co-development with Boston Properties;..." · action: listed for follow-up
  - Hub on Causeway: no 2026 source checked
### Buffalo Sabres
- `onField.starContracts` · last known: [{"player":"Tage Thompson","position":"C","aav":7.14,"contractNote":"7yr/$50M signed Aug 2022, through 2029-30; led team with 47 goals in 2023-24"},{"player":"J · action: listed for follow-up
  - Rasmus Dahlin (captain per Wikipedia) and Owen Power did not appear in the CapWages excerpt returned, so their current cap hits were not confirmed
- `media.localTVDeal` · last known: "MSG Network (MSG Sports & Entertainment); Sabres games broadcast regionally on MSG Network and MSG+" · action: sentence removed from the profile
  - no 2026 source found
- `arena.newArenaPlans` · last known: "Sabres engaged lobbying firm (Ostroff Associates) to advocate for state funding for major KeyBank Center renovations; lease through 2031 with potential for majo..." · action: listed for follow-up
  - no 2026 source found on state renovation funding
### Detroit Red Wings
- (no field) · last known: n/a · action: listed for follow-up
  - Wikipedia infobox shows the captaincy vacant and Shawn Horcoff as interim GM (named Sept 15, 2026) while CapWages still lists Larkin at $8.7M; Larkin's status and Steve Yzerman's departure were not second-sourced, so currentFranchisePlayer is left as is
- `arena.nonArenaRevenue` · last known: "District Detroit: $2.5B+ mixed-use development surrounding the arena (office, residential, hotel, retail); Ilitch Holdings captures development economics; 313 P..." · action: listed for follow-up
  - no 2026 source checked
### Florida Panthers
- `arena.newArenaPlans` · last known: "Lease extended through 2033; no announced new arena plans; Panthers paid off $51.5M in county arena debt as part of new deal" · action: listed for follow-up
  - the 2033 lease extension and $51.5M debt payoff were not re-sourced in 2026
- `arena.namingRightsDeal` · last known: {"sponsor":"Amerant Bank","annualValue_M":null,"totalValue_M":null,"expiryYear":null,"notes":"Renamed from BB&T Center/FLA Live Arena to Amerant Bank Arena in S · action: kept; rendered "as of May 2026"
  - terms still undisclosed
### Montreal Canadiens
- `arena.nonArenaRevenue` · last known: "Evenko (event promoter): Molson ownership includes Evenko, Montreal's largest live entertainment company, capturing concert and event revenue beyond hockey; Bel..." · action: listed for follow-up
  - the $600M Bell Centre refinancing in early 2026 was not found on Wikipedia; left as is
- (no field) · last known: n/a · action: listed for follow-up
  - Lane Hutson extension date and total (8yr/$70.8M) rely on CapWages plus prior knowledge; not second-sourced
### Ottawa Senators
- (no field) · last known: n/a · action: listed for follow-up
  - LeBreton Flats arena cost and opening year: not published
- (no field) · last known: n/a · action: listed for follow-up
  - Return for Brady Tkachuk beyond 'a package of draft picks' not itemized in the source
### Tampa Bay Lightning
- (no field) · last known: n/a · action: listed for follow-up
  - Benchmark International naming-rights value and length: undisclosed
- (no field) · last known: n/a · action: listed for follow-up
  - Timing of the governor handoff from Vinik to Ostrover/Lipschultz (enrichment says ~2027): no 2026 source
### Toronto Maple Leafs
- (no field) · last known: n/a · action: listed for follow-up
  - Wikipedia infobox lists John Chayka as general manager; not second-sourced
- `arena.newArenaPlans` · last known: "$350M renovation of Scotiabank Arena underway starting 2024-25, continuing through ~2026-27 season; focus on premium club expansion and facility modernization; ..." · action: kept; rendered "as of May 2026"
  - status of the $350M Scotiabank Arena renovation not found in a 2026 source
- (no field) · last known: n/a · action: listed for follow-up
  - Bobrovsky contract length and date rely on CapWages (three seasons at $7M) and the Panthers page
### Carolina Hurricanes
- `arena.newArenaPlans` · last known: "No immediate replacement planned; arena modernization ongoing; 80-acre surrounding development represents major long-term revenue opportunity" · action: listed for follow-up
  - no 2026 source found on the 80-acre Lenovo Center district timeline
- (no field) · last known: n/a · action: listed for follow-up
  - Ehlers and Miller signing dates and totals rely on CapWages plus prior knowledge; not second-sourced
### Columbus Blue Jackets
- (no field) · last known: n/a · action: listed for follow-up
  - CapWages shows Adam Fantilli at a $13.75M cap hit for 2026-27 alongside an entry-level bonus note; contradictory, not added
- (no field) · last known: n/a · action: listed for follow-up
  - Wikipedia infobox shows the captaincy vacant; no 2026 source on a captain
### New Jersey Devils
- (no field) · last known: n/a · action: listed for follow-up
  - Nico Hischier extension: CapWages shows six seasons remaining at $7.25M but no date or total was found
- (no field) · last known: n/a · action: listed for follow-up
  - Luke Hughes contract date and total rely on CapWages plus prior knowledge
- (no field) · last known: n/a · action: listed for follow-up
  - GM listed as Sunny Mehta on Wikipedia (front-office change not second-sourced)
### New York Islanders
- `ownership.ownershipGroup` · last known: [{"name":"Jon Ledecky","role":"co-owner / governor","pct":null},{"name":"Scott Malkin","role":"co-owner","pct":null}] · action: listed for follow-up
  - Wikipedia infobox lists Scott Malkin as governor (enrichment lists Jon Ledecky); single source, not changed
- (no field) · last known: n/a · action: listed for follow-up
  - GM Mathieu Darche and coach Peter DeBoer (Wikipedia infobox) not second-sourced
### New York Rangers
- (no field) · last known: n/a · action: listed for follow-up
  - Pavel Dorofeyev acquisition date, mechanism and contract terms (CapWages roster and a Wikipedia sentence only)
- (no field) · last known: n/a · action: listed for follow-up
  - Any MSG Sports / Sphere Entertainment / MSG Networks corporate restructuring: not found on the Rangers page
### Philadelphia Flyers
- `arena.newArenaPlans` · last known: "New $1.3B arena announced Jan 2025 — joint project by Comcast Spectacor (Flyers) and HBSE (76ers); fully privately financed; planned to open ~2030 in South Phil..." · action: listed for follow-up
  - no 2026 source found on the $1.3B South Philadelphia arena timeline with the 76ers
- (no field) · last known: n/a · action: listed for follow-up
  - Zegras extension date and length (CapWages cap hit only)
- (no field) · last known: n/a · action: listed for follow-up
  - The Flyers tendered a 5yr/$90M offer sheet to Anaheim's Leo Carlsson on July 3, 2026 (CapWages article); Anaheim's match is inferred from Carlsson appearing on the Ducks' 2026-27 sheet
### Pittsburgh Penguins
- `ownership.ownershipGroup` · last known: [{"name":"Hoffmann Family of Companies (David Hoffmann)","role":"majority owner / governor","pct":null},{"name":"Sidney Crosby","role":"minority investor","pct" · action: listed for follow-up
  - Wikipedia lists Mario Lemieux as the only minority owner; Sidney Crosby's minority stake (in the enrichment) was not confirmed
- (no field) · last known: n/a · action: listed for follow-up
  - Malkin's 2026-27 one-year deal date and bonuses (CapWages cap hit only)
### Washington Capitals
- (no field) · last known: n/a · action: listed for follow-up
  - Alex Tuch and Jordan Kyrou acquisition dates and returns (CapWages rosters only)
- `arena.newArenaPlans` · last known: "Capitals and Wizards engaged in arena debate 2022-2024 around potential Virginia relocation; $515M DC deal (2024) commits both teams to Capital One Arena throug..." · action: listed for follow-up
  - no 2026 source found on Capital One Arena renovation progress or cost
- (no field) · last known: n/a · action: listed for follow-up
  - Any Monumental minority stake sale: not found on the Capitals page
### Utah Hockey Club
- (no field) · last known: n/a · action: listed for follow-up
  - Public share of the $900M Delta Center package: Wikipedia does not break out the sales-tax contribution
- (no field) · last known: n/a · action: listed for follow-up
  - Nick Schmaltz extension date and total (CapWages cap hit only)
### Chicago Blackhawks
- (no field) · last known: n/a · action: listed for follow-up
  - CapWages lists Patrick Kane on the 2026-27 Blackhawks at $8M; not second-sourced, not added
- `arena.newArenaPlans` · last known: "$7B United Center District mixed-use development announced 2024; no United Center replacement planned; current arena through at least 2040s; city and state publ..." · action: kept; rendered "as of May 2026"
  - no 2026 source found on the $7B United Center district (1901 Project) progress
### Colorado Avalanche
- (no field) · last known: n/a · action: listed for follow-up
  - Necas extension date and total (CapWages cap hit only)
- `arena.newArenaPlans` · last known: "No arena replacement planned; Ball Arena district mixed-use redevelopment of surrounding parking lots approved by Denver City Council 2024; franchise committed ..." · action: listed for follow-up
  - no 2026 source found on Ball Arena district construction
### Dallas Stars
- (no field) · last known: n/a · action: listed for follow-up
  - Robertson's one-year $12M deal: date and structure rest on CapWages only
- (no field) · last known: n/a · action: listed for follow-up
  - Victory+ status after the Prime Video deal: not confirmed
- `arena.newArenaPlans` · last known: "American Airlines Center lease expires ~2031; Dallas-area arena district conversations ongoing; no firm replacement plans announced as of 2024; Mavs potentially..." · action: listed for follow-up
  - no 2026 source found on the 2031 lease or a new arena
### Minnesota Wild
- `arena.newArenaPlans` · last known: "Wild ownership asked Minnesota for $362M in arena renovation funding in March 2026; arguments center on Xcel Energy Center's role as a busy regional entertainme..." · action: listed for follow-up
  - the $362M state renovation ask (March 2026) was not found on Wikipedia; left as is
- (no field) · last known: n/a · action: listed for follow-up
  - Grand Casino naming-rights value and length: undisclosed
- (no field) · last known: n/a · action: listed for follow-up
  - Gustavsson extension date and total (CapWages cap hit only)
### Nashville Predators
- (no field) · last known: n/a · action: listed for follow-up
  - Nick Saban / Joe Agresti minority stake (December 2025 in the enrichment): not found on the Predators page
- `arena.newArenaPlans` · last known: "No near-term arena replacement plan; Bridgestone Arena lease discussions ongoing with Metro Nashville; long-term stadium district development discussions given ..." · action: listed for follow-up
  - no 2026 source found on Bridgestone Arena lease talks
### St. Louis Blues
- (no field) · last known: n/a · action: listed for follow-up
  - Kyrou, Schenn and McTavish trade dates and returns (CapWages rosters only)
- (no field) · last known: n/a · action: listed for follow-up
  - Broberg and Holloway extension dates and totals (CapWages cap hits only)
- (no field) · last known: n/a · action: listed for follow-up
  - GM Alexander Steen (Wikipedia infobox) not second-sourced
### Winnipeg Jets
- (no field) · last known: n/a · action: listed for follow-up
  - David Thomson's role: not named on the Jets page; left as in the enrichment
- `arena.newArenaPlans` · last known: "No near-term arena replacement; Canada Life Centre capacity (15,321) is NHL's smallest and limits revenue upside; renovation discussions intermittent but no maj..." · action: listed for follow-up
  - no 2026 source found on Canada Life Centre upgrades
### Anaheim Ducks
- (no field) · last known: n/a · action: listed for follow-up
  - Anaheim's match of the Carlsson offer sheet is inferred from CapWages (offer-sheet article plus team page); no second source
- (no field) · last known: n/a · action: listed for follow-up
  - Gauthier contract date and total (CapWages cap hit only)
- `arena.newArenaPlans` · last known: "$1.1B+ Honda Center renovation as part of OCVibe development; construction ongoing 2024-2026; no separate new arena planned" · action: kept; rendered "as of May 2026"
  - no 2026 source found on Honda Center renovation or OCVibe milestones
- (no field) · last known: n/a · action: listed for follow-up
  - Chris Kreider not on the CapWages 2026-27 roster; status unconfirmed
### Calgary Flames
- (no field) · last known: n/a · action: listed for follow-up
  - Kadri and Andersson trade dates and returns (CapWages rosters only)
- (no field) · last known: n/a · action: listed for follow-up
  - Wolf and Nemec contract dates and totals (CapWages cap hits only)
- `ownership.institutionalInvestors` · last known: "Minority stake sale explored in 2024 per reports; no deal announced" · action: sentence removed from the profile
  - no 2026 source on a CSEC minority stake sale
### Edmonton Oilers
- (no field) · last known: n/a · action: listed for follow-up
  - Wikipedia infobox lists Stan Bowman as GM and Mike Babcock as head coach; coaching change not second-sourced
- (no field) · last known: n/a · action: listed for follow-up
  - Darnell Nurse appears on San Jose's 2026-27 sheet at $9.25M; trade not second-sourced
### Los Angeles Kings
- (no field) · last known: n/a · action: listed for follow-up
  - Artemi Panarin, acquired from the Rangers at the 2026 deadline, did not appear in the CapWages depth-chart excerpt; his 2026-27 status is unconfirmed
- (no field) · last known: n/a · action: listed for follow-up
  - Brandt Clarke extension date and total (CapWages cap hit only)
- (no field) · last known: n/a · action: listed for follow-up
  - Ken Holland as GM (Wikipedia) not second-sourced
### San Jose Sharks
- (no field) · last known: n/a · action: listed for follow-up
  - Darnell Nurse acquisition date and return (CapWages roster only)
- (no field) · last known: n/a · action: listed for follow-up
  - Marchment contract details (CapWages cap hit only)
### Seattle Kraken
- (no field) · last known: n/a · action: listed for follow-up
  - David Bonderman's death (December 2024) and the formal chair title: not stated on the Kraken page
- (no field) · last known: n/a · action: listed for follow-up
  - Melinda French Gates stake size and date: not given
### Vancouver Canucks
- (no field) · last known: n/a · action: listed for follow-up
  - Wikipedia infobox lists Ryan Johnson as GM, Manny Malhotra as coach and Daniel and Henrik Sedin as co-presidents of hockey operations; front-office changes not second-sourced
- (no field) · last known: n/a · action: listed for follow-up
  - Demko and Boeser contract dates and totals (CapWages cap hits only)
### Vegas Golden Knights
- (no field) · last known: n/a · action: listed for follow-up
  - Rasmus Andersson acquisition date and contract total (CapWages only)
- `arena.newArenaPlans` · last known: "Foley has proposed $300M upgrade to T-Mobile Arena if Las Vegas receives an NBA franchise; no confirmed plans as of 2024" · action: listed for follow-up
  - no 2026 source found on a T-Mobile Arena renovation or NBA-related upgrade

## MLS (59)

### Atlanta United FC
- `media.localTVDeal` · last known: "Bally Sports South / Gray Television regional broadcasts; transitioning post-Diamond Sports collapse" · action: sentence removed from the profile
  - no 2026 source on the post-Bally regional arrangement
- `ownership.ownerNetWorth` · last known: "~$10B (Bloomberg 2024)" · action: kept; rendered "as of May 2026"
  - no 2026 figure checked
### Charlotte FC
- `onField.currentFranchisePlayer` · last known: "Pep Biel — DP signed January 2024 as creative midfielder; key playmaker post-Świderski" · action: sentence removed from the profile
  - no 2026 source checked
- `media.localTVDeal` · last known: "WCNC / Telemundo Charlotte regional broadcasts" · action: sentence removed from the profile
  - no 2026 source
### Chicago Fire FC
- `media.localTVDeal` · last known: "WGN-TV / NBC Sports Chicago regional broadcasts; transitioning post-Diamond Sports collapse" · action: sentence removed from the profile
  - no 2026 source
- `onField.starContracts` · last known: [{"player":"Hugo Cuypers","position":"ST","aav":3.5,"contractNote":"Designated Player Feb 2024; club-record $12M+$2M transfer fee; 2025 guaranteed $3.53M"},{"pl · action: listed for follow-up
  - Cuypers and Bamba 2026 status not checked
### FC Cincinnati
- `media.localTVDeal` · last known: "WSTR/CW Cincinnati regional broadcasts" · action: sentence removed from the profile
  - no 2026 source
- `ownership.ownershipGroup` · last known: [{"name":"Carl H. Lindner III","role":"controlling owner / CEO","pct":null},{"name":"Meg Whitman","role":"managing owner (former HP/eBay CEO, US Ambassador)","p · action: listed for follow-up
  - no 2026 check
### Columbus Crew SC
- `onField.starContracts` · last known: [{"player":"Cucho Hernández","position":"ST","aav":2,"contractNote":"Back-to-back MLS Best XI (2023-2024); 19G/14A in 2024; transferred to Real Betis (LaLiga) F · action: listed for follow-up
  - 2026 status of Rossi and Nagbe not checked
- `media.localTVDeal` · last known: "Bally Sports Ohio successor (Sinclair regional sports network)" · action: sentence removed from the profile
  - no 2026 source
### D.C. United
- `onField.starContracts` · last known: [{"player":"Christian Benteke","position":"ST","aav":4.5,"contractNote":"DP from Crystal Palace Aug 2022; 2024 MLS Golden Boot; 47G/10A in 93 league matches; op · action: listed for follow-up
  - Klich 2026 status not checked
- `media.localTVDeal` · last known: "Monumental Sports Network (MSN) regional broadcasts; Monumental owned by Ted Leonsis but DC United is independent" · action: sentence removed from the profile
  - no 2026 source
### Inter Miami CF
- `stadium.publicSubsidy` · last known: 0 · action: kept; rendered "as of May 2026"
  - $8M state road grant and $20M/yr park payments to the city noted but not netted into the field
- `ownership.institutionalInvestors` · last known: "Marcelo Claure exited 2022; Ares Management has explored minority investment; ownership remains primarily Mas/Beckham private" · action: sentence removed from the profile
  - Ares Management is in the stadium financing partnership; equity stake in the club not confirmed
### CF Montréal
- (no field) · last known: n/a · action: listed for follow-up
  - onField.currentFranchisePlayer and starContracts: no 2026 roster source checked
- `media.localTVDeal` · last known: "TVA Sports (French-language Quebec) and CTV/TSN secondary; Apple TV+ MLS Season Pass for full schedule" · action: sentence removed from the profile
  - no 2026 source
### Nashville SC
- `media.localTVDeal` · last known: "Streaming-only via Apple TV+ MLS Season Pass; selective games on Bally Sports South / Tennessean radio partnerships" · action: sentence removed from the profile
  - no 2026 source
- `stadium.namingRightsDeal` · last known: {"sponsor":"GEODIS (French logistics)","annualValue_M":null,"totalValue_M":null,"expiryYear":null,"notes":"10-year deal signed 2021; financial terms undisclosed · action: kept; rendered "as of May 2026"
  - no updated GEODIS terms
### New England Revolution
- `onField.currentFranchisePlayer` · last known: "Carles Gil — Designated Player ~$3M/yr; 2021 Landon Donovan MVP" · action: sentence removed from the profile
  - 2026 status not checked
- `stadium.newStadiumPlans` · last known: "Long-discussed Everett, MA soccer-specific stadium has stalled multiple times since 2019; Kraft Group has not committed land or capital; current expectation is ..." · action: listed for follow-up
  - opening year beyond 'earliest 2027' not confirmed
### New York City FC
- `onField.currentFranchisePlayer` · last known: "Santiago Rodríguez — Designated Player ~$2.8M/yr; Uruguayan playmaker" · action: sentence removed from the profile
  - Rodríguez departed; 2026 franchise player not identified from a source
- `ownership.ownershipGroup` · last known: [{"name":"City Football Group / Abu Dhabi United Group","role":"majority","pct":70},{"name":"Yankee Global Enterprises (Steinbrenner family)","role":"minority o · action: listed for follow-up
  - no 2026 change found
### New York Red Bulls
- `media.localTVDeal` · last known: "Streaming-only via Apple TV+ MLS Season Pass; selective games on MSG Network" · action: sentence removed from the profile
  - no 2026 source
### Orlando City SC
- `onField.starContracts` · last known: [{"player":"Martín Ojeda","position":"AM","aav":3,"contractNote":"Designated Player; Argentine playmaker; central to attack"},{"player":"Pedro Gallese","positio · action: listed for follow-up
  - Jansson 2026 status not checked
- `stadium.namingRightsDeal` · last known: {"sponsor":"Inter&Co (Brazilian fintech)","annualValue_M":5,"totalValue_M":null,"expiryYear":null,"notes":"Long-term deal announced Jan 2024 replacing Exploria  · action: kept; rendered "as of May 2026"
  - no updated terms
### Philadelphia Union
- `onField.starContracts` · last known: [{"player":"Mikael Uhre","position":"ST","aav":2.5,"contractNote":"Designated Player; key goalscorer since 2022"},{"player":"Daniel Gazdag","position":"AM","aav · action: listed for follow-up
  - Gazdag and Uhre 2026 status not checked
- `onField.currentFranchisePlayer` · last known: "Mikael Uhre — Designated Player ~$2.5M/yr; Danish striker" · action: sentence removed from the profile
  - no 2026 source
### Toronto FC
- `stadium.capacity` · last known: 30991 · action: kept; rendered "as of May 2026"
  - permanent post-World Cup capacity not confirmed
- `stadium.namingRightsDeal` · last known: {"sponsor":"BMO Financial Group (Bank of Montreal)","annualValue_M":4,"totalValue_M":27,"expiryYear":2027,"notes":"Renewed 2017 at C$3.4M/yr ($27M over 10yr); B · action: kept; rendered "as of May 2026"
  - no renewal found
### Austin FC
- `onField.currentFranchisePlayer` · last known: "Sebastián Driussi — Designated Player, ~$3M base/$4.5M total comp through 2026; Argentine attacking mid" · action: sentence removed from the profile
  - 2026 headline player not identified from a source
- `media.localTVDeal` · last known: "Local English-language broadcasts via CW Austin (selected matches outside Apple package)" · action: sentence removed from the profile
  - no 2026 source
### Colorado Rapids
- `stadium.namingRightsDeal` · last known: {"sponsor":"Dick's Sporting Goods (Pittsburgh-based retailer)","annualValue_M":2,"totalValue_M":40,"expiryYear":2027,"notes":"20-year deal signed 2007; ~$2M/yr; · action: kept; rendered "as of May 2026"
  - no renewal found
- `stadium.newStadiumPlans` · last known: "Kroenke exploring land near current stadium for next major development; no firm new-stadium announcement" · action: listed for follow-up
  - no 2026 Kroenke announcement found
### FC Dallas
- `onField.starContracts` · last known: [{"player":"Petar Musa","position":"ST","aav":5.5,"contractNote":"Designated Player through 2027; club-record signing"},{"player":"Asier Illarramendi","position · action: listed for follow-up
  - Illarramendi 2026 status not checked
- `media.localTVDeal` · last known: "Selected matches on local broadcast partners outside Apple package" · action: sentence removed from the profile
  - no 2026 source
### Houston Dynamo FC
- `onField.starContracts` · last known: [{"player":"Sebastian Ferreira","position":"ST","aav":3.5,"contractNote":"Designated Player through 2025"},{"player":"Héctor Herrera","position":"CM","aav":5.5, · action: listed for follow-up
  - Ferreira 2026 status not confirmed
- `media.localTVDeal` · last known: "Local Spanish-language broadcast partnerships; selected matches outside Apple package" · action: sentence removed from the profile
  - no 2026 source
### LA Galaxy
- `media.localTVDeal` · last known: "Spectrum SportsNet (Charter) regional broadcasts; selected matches outside Apple package" · action: sentence removed from the profile
  - no 2026 source
### Los Angeles FC
- `media.localTVDeal` · last known: "Spanish-language broadcasts via TUDN; selected matches outside Apple package" · action: sentence removed from the profile
  - no 2026 source
- (no field) · last known: n/a · action: listed for follow-up
  - revenue: no 2025 or 2026 revenue figure sourced
### Minnesota United FC
- `media.localTVDeal` · last known: "Bally Sports North (selected matches outside Apple package); RSN distribution disrupted by Diamond Sports bankruptcy" · action: sentence removed from the profile
  - no 2026 source on the post-Diamond arrangement
- `stadium.nonGameRevenue` · last known: "Concerts; college soccer events; McGuire-owned $54M land bank around stadium for hotel/mixed-use development still in planning" · action: listed for follow-up
  - Midway development timeline not sourced beyond McGuire comments
### Portland Timbers
- `onField.starContracts` · last known: [{"player":"Evander","position":"AM","aav":3.5,"contractNote":"Designated Player; club-record signing; led Timbers in goals + assists 2024"},{"player":"Diego Ch · action: listed for follow-up
  - Chara 2026 status not checked
- `media.localTVDeal` · last known: "Local broadcast partnerships outside Apple package; KPDX (Fox affiliate) has historic relationship" · action: sentence removed from the profile
  - no 2026 source
### Real Salt Lake
- `ownership.institutionalInvestors` · last known: "Arctos Sports Partners (sports-focused PE)" · action: sentence removed from the profile
  - whether Arctos and Dwyane Wade kept stakes after the 2025 sale is not sourced
- `media.localTVDeal` · last known: "KMYU/KJZZ-TV (Sinclair) regional broadcast partner for select matches not on Apple" · action: sentence removed from the profile
  - no 2026 source
### San Diego FC
- `stadium.newStadiumPlans` · last known: "Long-term ambition of soccer-specific venue under discussion but no announced plans" · action: listed for follow-up
  - no 2026 announcement found on a soccer-specific venue
- `media.localTVDeal` · last known: "Limited local TV — most matches on Apple TV+ MLS Season Pass; selective broadcast partnerships" · action: sentence removed from the profile
  - no 2026 source
### San Jose Earthquakes
- (no field) · last known: n/a · action: listed for follow-up
  - ownership: no buyer or price for the Fisher sale (Moelis, launched June 2025) found as of Sept 2026
- `onField.starContracts` · last known: [{"player":"Cristian Espinoza","position":"Winger","aav":2.5,"contractNote":"Designated Player; longtime Quakes star; Argentine playmaker"},{"player":"Hernán Ló · action: listed for follow-up
  - Espinoza and López Muñoz 2026 status not checked
### Seattle Sounders FC
- (no field) · last known: n/a · action: listed for follow-up
  - ownership: outcome of the Moelis raise not found
- `onField.starContracts` · last known: [{"player":"Albert Rusnák","position":"Attacking Midfielder","aav":3,"contractNote":"Designated Player; signed 2022 from RSL on free transfer"},{"player":"Crist · action: listed for follow-up
  - 2026 status not checked
- `media.localTVDeal` · last known: "Local broadcast rights via Apple-MLS deal exclusively for matches; pre-Apple deal had local KING-TV partnership" · action: sentence removed from the profile
  - no 2026 source
### Sporting Kansas City
- `media.localTVDeal` · last known: "KSHB / E.W. Scripps regional partner for select matches not on Apple" · action: sentence removed from the profile
  - no 2026 source
- `onField.starContracts` · last known: [{"player":"Dániel Sallói","position":"Forward","aav":1.5,"contractNote":"TAM/Designated Player; Hungarian international; longtime franchise scorer"},{"player": · action: listed for follow-up
  - Sallói and Thommy 2026 status not checked
### St. Louis City SC
- `onField.currentFranchisePlayer` · last known: "Eduard Löwen — German Designated Player midfielder, ~$2.5M AAV" · action: sentence removed from the profile
  - 2026 role not confirmed
- `media.localTVDeal` · last known: "FanDuel Sports Network Midwest regional partner for select matches not on Apple" · action: sentence removed from the profile
  - no 2026 source
### Vancouver Whitecaps FC
- `media.localTVDeal` · last known: "TSN regional rights for select matches not on Apple" · action: sentence removed from the profile
  - no 2026 source
- (no field) · last known: n/a · action: listed for follow-up
  - revenue: no post-2023 figure sourced

## EPL (57)

### Manchester United
- `revenue.estimate` · last known: 845 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts (June 2026 year end) not yet published; Forbes 2026 shows revenue $865M and operating income $237M
- `ownership.ownerNetWorth` · last known: "Glazer family ~$8B est; Sir Jim Ratcliffe ~$23B (INEOS chemicals)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
### Manchester City
- `ownership.ownerNetWorth` · last known: "Sheikh Mansour est. ~$30B+ personal; Al Nahyan family wealth via Abu Dhabi sovereign funds (~$1.7T managed across ADIA, Mubadala, ADQ)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- `stadium.namingRightsDeal.expiryYear` · last known: 2025 · action: kept; rendered "as of May 2026"
  - Etihad deal continues into 2026-27 but renewal terms and new expiry not published
- `revenue.estimate` · last known: 902 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $900M
### Liverpool
- `ownership.ownerNetWorth` · last known: "John Henry ~$2.6B (commodities trading via Henry & Co); FSG holding-co est. value ~$10B+" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- `revenue.estimate` · last known: 779 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $911M
### Arsenal
- (no field) · last known: n/a · action: listed for follow-up
  - stadium.namingRightsDeal annual value and expiry: 2026 Emirates renewal reported (to 2033, ~£70M/yr) but not confirmed by the club in a source I could read
- `ownership.ownerNetWorth` · last known: "Stan Kroenke ~$16B (real estate / Walmart family marriage to Ann Walton); Josh Kroenke (son) increasing operational role" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- `revenue.estimate` · last known: 772 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $895M
### Chelsea
- (no field) · last known: n/a · action: listed for follow-up
  - ownership.ownershipGroup percentages for Wyss: carried from prior enrichment, not re-sourced in 2026
- `revenue.estimate` · last known: 591 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $637M
- (no field) · last known: n/a · action: listed for follow-up
  - 2025 Club World Cup win: reported by ESPN in the Maresca exit coverage but not separately verified
### Tottenham Hotspur
- (no field) · last known: n/a · action: listed for follow-up
  - ownership.ownershipGroup percentages: Levy's effective stake may have changed if the Eight Sports Capital deal completed; ENIC denies knowledge, so the old split is retained
- `ownership.ownerNetWorth` · last known: "Joe Lewis estate ~$5B+ (pre-2024 reorganization); Levy ~£500M est." · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- `revenue.estimate` · last known: 665 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $733M
### Newcastle United
- `ownership.ownerNetWorth` · last known: "PIF AUM ~$925B+ (one of world's largest sovereign wealth funds); chairman Yasir Al-Rumayyan" · action: kept; rendered "as of May 2026"
  - PIF AUM not re-checked in 2026
- `revenue.estimate` · last known: 425 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $435M
- (no field) · last known: n/a · action: listed for follow-up
  - Matthias Jaissle appointment: taken from the 2026-27 season page, not a club announcement I could read
### Aston Villa
- `ownership.ownerNetWorth` · last known: "Sawiris ~$9.3B (richest person in Egypt per Forbes); Edens ~$2.9B; Atairos ~$8B AUM" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- (no field) · last known: n/a · action: listed for follow-up
  - July 2026 reports that Villa put academy players up for sale to meet spending rules: headline seen, article not read
- `revenue.estimate` · last known: 463 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $490M
### Brighton & Hove Albion
- `stadium.newStadiumPlans` · last known: "Expansion plans to ~40,000 capacity in discussion; constrained by site and South Downs National Park boundary; no firm timetable as of 2025" · action: listed for follow-up
  - no 2026 source found on Amex expansion
- `ownership.ownerNetWorth` · last known: "~£1.3B (Forbes / Sunday Times Rich List 2025)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- `revenue.estimate` · last known: 279 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $295M
### West Ham United
- (no field) · last known: n/a · action: listed for follow-up
  - ownership.ownershipGroup exact percentages: Bloomberg article is paywalled; figures from secondary reporting (Kretinsky 46%, Sullivan 40%)
- (no field) · last known: n/a · action: listed for follow-up
  - Kretinsky reportedly exploring buying the London Stadium: unconfirmed
- `revenue.estimate` · last known: 349 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; relegation cuts broadcast income from 2026-27
### Crystal Palace
- `ownership.ownershipGroup` · last known: [{"name":"Steve Parish","role":"chairman / co-owner","pct":10},{"name":"Woody Johnson","role":"co-owner (replaced Textor July 2025)","pct":45},{"name":"Josh Har · action: listed for follow-up
  - Harris and Blitzer's combined stake reported as 30% by the FT versus 36% in the enrichment; not resolved
- `revenue.estimate` · last known: 215 · action: kept; rendered "as of May 2026"
  - FY2024-25 and FY2025-26 accounts not checked
- (no field) · last known: n/a · action: listed for follow-up
  - Forbes 2026 list: Palace absent; last Forbes figure $750M (2025)
### Everton
- `stadium.namingRightsDeal.annualValue_M` · last known: 13 · action: kept; rendered "as of May 2026"
  - £10M/yr figure not re-confirmed in 2026
- `revenue.estimate` · last known: 234 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts (first stadium season) due spring 2027; Forbes 2026 revenue $255M
- (no field) · last known: n/a · action: listed for follow-up
  - Dibling fee: enrichment for Southampton said £42M, Everton season page says £35M; £35M used
### Fulham
- `ownership.ownerNetWorth` · last known: "Shahid Khan: ~$15B (Forbes); ~$11.9B (Bloomberg Feb 2026)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
- `stadium.newStadiumPlans` · last known: "Riverside Stand redevelopment fully opened 2024-25; capacity expanded from ~25,700 to 29,600; further expansion of Hammersmith End under consideration" · action: listed for follow-up
  - no 2026 update on further Craven Cottage works found
- `revenue.estimate` · last known: 229 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; Forbes 2026 revenue $253M
### Wolverhampton Wanderers
- (no field) · last known: n/a · action: listed for follow-up
  - Sale rumours: the SportsPro report of Fosun seeking to sell 20% at £350M dates from 2019, not 2026; no 2026 sale process sourced
- `revenue.estimate` · last known: 224 · action: kept; rendered "as of May 2026"
  - FY2024-25 accounts reported a £15.3M loss and record £117M player profits per secondary reporting; primary source not read
### AFC Bournemouth
- (no field) · last known: n/a · action: listed for follow-up
  - stadium.namingRightsDeal.expiryYear 2026: Vitality renewal status not found
- `revenue.estimate` · last known: 196 · action: kept; rendered "as of May 2026"
  - FY2024-25 and FY2025-26 accounts not checked; Forbes 2026 list does not include Bournemouth (last Forbes-listed figure $420M, 2024)
- `ownership.ownerNetWorth` · last known: "Bill Foley: ~$1.5B (Forbes); founded Fidelity National Financial; chairman emeritus Black Knight (sold to ICE 2023 for $13B)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
### Brentford
- (no field) · last known: n/a · action: listed for follow-up
  - ownership.ownershipGroup percentages after March 2026: undisclosed
- `revenue.estimate` · last known: 220 · action: kept; rendered "as of May 2026"
  - FY2025-26 accounts not yet published; not on the Forbes 2026 list
- `ownership.ownerNetWorth` · last known: "~£500M (Smartodds founder; Matchbook Betting Exchange)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
### Nottingham Forest
- (no field) · last known: n/a · action: listed for follow-up
  - £550M stadium cost figure: club/council-cited investment figure in secondary reporting; no primary document read
- `revenue.estimate` · last known: 250 · action: kept; rendered "as of May 2026"
  - FY2024-25 and FY2025-26 accounts not checked; not on the Forbes 2026 list (last figure a $900M 2025 market estimate, not Forbes)
- `ownership.ownerNetWorth` · last known: "~$1.0B (Capital Maritime & Trading shipping; Olympiacos owner)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
### Ipswich Town
- `ownership.primaryOwner` · last known: "Portman Holdings LLC (US consortium consolidated December 2025)" · action: sentence removed from the profile
  - enrichment says 'Portman Holdings LLC (US consortium consolidated December 2025)'; the 2025-26 and 2026-27 season records list the club owner as Gamechanger 20 Ltd with Mark Ashton as chairman and no ownership change; could not verify the December 2025 restructuring
- `stadium.newStadiumPlans` · last known: "October 2024: agreement in principle to acquire land behind Portman Road for stadium expansion to ~40K capacity (from current ~30K); two-tier stand redevelopmen..." · action: listed for follow-up
  - no 2026 update on the Portman Road expansion land found
- `revenue.estimate` · last known: 175 · action: kept; rendered "as of May 2026"
  - FY2024-25 and FY2025-26 accounts not checked; no Forbes figure (last figure a $350M 2025 Athletic-sourced estimate)
### Leicester City
- `stadium.newStadiumPlans` · last known: "East Stand expansion to 40K capacity; planning approved with Section 106 agreement secured December 2023 — club has until end of 2028 to commence; PSR/financial..." · action: listed for follow-up
  - East Stand expansion status in 2026 not found; deadline to commence remains end-2028 per the 2023 consent
- `revenue.estimate` · last known: 135 · action: kept; rendered "as of May 2026"
  - FY2024-25 and FY2025-26 accounts not checked; no Forbes figure (enrichment carries a $400M 2025 estimate)
- `ownership.ownerNetWorth` · last known: "~$3.5B (King Power family fortune; Forbes 2024)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked
### Southampton
- (no field) · last known: n/a · action: listed for follow-up
  - Dibling fee: enrichment says £42M, Everton season record says £35M; recorded as reported £35M
- `revenue.estimate` · last known: 175 · action: kept; rendered "as of May 2026"
  - FY2024-25 and FY2025-26 accounts not checked; no Forbes figure (enrichment carries a $450M 2025 estimate)
- `ownership.ownerNetWorth` · last known: "Šolak ~€1.7B (December 2024 estimate; 2nd-richest in Serbia)" · action: kept; rendered "as of May 2026"
  - no 2026 source checked

