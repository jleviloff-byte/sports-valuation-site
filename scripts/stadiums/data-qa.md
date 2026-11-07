# Stadium data QA report

Generated 2026-11-06 by `scripts/stadiums/build-qa.mjs`. Data: `data/stadiums.json`.

## Summary

- **354 venues included** (US, active, capacity >= 15,000). 126 candidates excluded (listed at the end).
- By type: stadium 204, arena 71, racetrack 31, ballpark 29, soccer_specific 17, tennis 2.
- By tenant league (a venue counts once per league): NCAA FBS 135, NCAA FCS 41, NCAA D1 basketball 32, NFL 30, NBA 29, MLB 28, NASCAR Cup 27, MLS 25, NHL 25, NWSL 10, WNBA 9, IndyCar 8, Neutral site 7, Tennis 3, Formula 1 1.
- States represented: 48. Alaska and Hawaii: Clarence T. C. Ching Athletics Complex (HI).
- Tenants linked to an existing team page on the site: 139.
- Official-site cross-check: 45 venues have at least one field confirmed or corrected from an official team, venue or school page (details below). Every other value is single-source Wikipedia.
- Largest: Indianapolis Motor Speedway 257,325; Bristol Motor Speedway 146,000; Daytona International Speedway 123,500. Pilot check: Michigan Stadium 107,601, Yulman Stadium 30,000.

## Method (short)

1. Candidates come from current Wikipedia list pages and 2026 schedules (NFL, MLB, NBA, NHL, MLS, NWSL, WNBA, FBS, FCS, D1 basketball, NASCAR Cup, IndyCar, F1, tennis) plus 7 hand-picked neutral sites. Every page is cached with its revision id in `research/raw/stadiums/wiki/`.
2. Capacity is read from the venue article infobox: standing room, "expandable to" maxima, record crowds and historical capacities are dropped; with several configurations, the primary tenant's sport is the headline and the rest go in `capacity_by_sport`.
3. Official team, venue or school pages override Wikipedia where they state a figure (`scripts/stadiums/overrides.json`, with URL and quote).
4. Coordinates are the OpenStreetMap footprint centroid when the OSM match is credible (name match or contains the Wikipedia point), else Wikipedia GeoData.
5. State comes from the list page's State/Location column, else point-in-polygon on coordinates. Only venues inside the US are kept.
6. `cost_real` = nominal x CPI-U(2025) / CPI-U(cost year). The cost year is the opening year unless an official source says otherwise. CPI-U 2025 is the mean of 11 months (BLS did not collect October 2025).
7. Rankings are computed at build time (ties share a rank). Sport ranks use that sport's configuration capacity.

## Missing fields

Counts are over included venues. Missing values are stored as `null` and display as "N/A".

| Field | Missing | Share |
|---|---|---|
| opened | 0 | 0% |
| cost_nominal | 64 | 18% |
| latest renovation scope | 41 | 12% |
| latest renovation cost | 110 | 31% |
| roof (inferred, not sourced) | 278 | 79% |
| OSM footprint | 26 | 7% |

### Missing opened year

_None._

### Missing construction cost

64 venues. Most are college venues whose infobox has no cost field.

- Pro venue: [SoFi Stadium](https://en.wikipedia.org/w/index.php?title=SoFi_Stadium&oldid=1383905843)
- Pro venue: [Allegiant Stadium](https://en.wikipedia.org/w/index.php?title=Allegiant_Stadium&oldid=1382640502)
- Pro venue: [Northwest Stadium](https://en.wikipedia.org/w/index.php?title=Northwest_Stadium&oldid=1374296465)
- Pro venue: [Dodger Stadium](https://en.wikipedia.org/w/index.php?title=Dodger_Stadium&oldid=1383480052)
- Pro venue: [Nationals Park](https://en.wikipedia.org/w/index.php?title=Nationals_Park&oldid=1383031398)
- Pro venue: [Oracle Park](https://en.wikipedia.org/w/index.php?title=Oracle_Park&oldid=1372223272)
- Pro venue: [Geodis Park](https://en.wikipedia.org/w/index.php?title=Geodis_Park&oldid=1380167869)
- Pro venue: [Nu Stadium](https://en.wikipedia.org/w/index.php?title=Nu_Stadium&oldid=1376171477)
- Pro venue: [Dignity Health Sports Park](https://en.wikipedia.org/w/index.php?title=Dignity_Health_Sports_Park&oldid=1380797120)
- Pro venue: [Crypto.com Arena](https://en.wikipedia.org/w/index.php?title=Crypto.com_Arena&oldid=1383479019)
- Pro venue: [Chase Center](https://en.wikipedia.org/w/index.php?title=Chase_Center&oldid=1383273881)

### Renovation scope

Scopes are written from the venue's Wikipedia text for that renovation year (evidence sentences kept in research/raw/stadiums/renovation-sentences.json, scopes in scripts/stadiums/renovation-scopes.json) or taken from an official page. 108 of 149 venues with a renovation now have a scope for the most recent one. The rest show "N/A": the article either has no sentence about that year's work or the sentence does not say what was done. Costs are filled only where that text states a figure for the project (not proposals, estimates or one funder's share).

### No OSM footprint

26 venues have no matched OSM polygon (needed for Phase 2 art). Coordinates for these fall back to Wikipedia.

Atlanta Motor Speedway, U.S. Bank Stadium, Gateway Motorsports Park, Casino Del Sol Stadium, Bill Snyder Family Football Stadium, First Community Stadium, Pratt & Whitney Stadium at Rentschler Field, TDECU Stadium, Renasant Stadium, Flagler Credit Union Stadium, InfoCision Stadium–Summa Field, Skelly Field at H. A. Chapman Stadium, FMOL Health/St. Francis Stadium, Memorial Stadium, Fitton Field, Casem-Spinks Stadium, Houchens Industries–L. T. Smith Stadium, First Horizon Coliseum, S.B. Ballard Stadium, Q2 Stadium, Richard Gouse Field at Brown Stadium, Eddie G. Robinson Memorial Stadium, Navarre Stadium, Robert K. Kraft Field at Lawrence A. Wien Stadium, Simmons Bank Field, Panther Stadium at Blackshear Field

## Conflicts between sources

### Official site vs Wikipedia (resolved to official)

| Venue | Wikipedia | Official | Source |
|---|---|---|---|
| Bank of America Stadium | 75037 (Wikipedia infobox) | 75525 (official) | [official](https://www.bankofamericastadium.com/stadium/stadiuminfo.html) |
| Lucas Oil Stadium | 63000 (Wikipedia infobox) | 67000 (official) | [official](https://www.lucasoilstadium.com/tours-stadium-info/background-history/) |
| Lumen Field | 68740 (Wikipedia infobox) | 68000 (official) | [official](https://www.lumenfield.com/venue-info/stadium-history-facts) |
| M&T Bank Stadium | 70745 (Wikipedia infobox) | 70257 (official) | [official](https://www.baltimoreravens.com/stadium/index) |
| Barclays Center | 17732 (Wikipedia infobox) | 17553 (official) | [official](https://www.barclayscenter.com/center-info/about-us) |
| State Farm Arena | 17608 (Wikipedia infobox) | 16888 (official) | [official](https://www.statefarmarena.com/about-the-arena/quick-facts) |
| Xfinity Mobile Arena | 20478 (Wikipedia infobox) | 21000 (official) | [official](https://www.xfinitymobilearena.com/connect-with-us/arena-history) |
| Climate Pledge Arena | 17151 (Wikipedia infobox) | 17100 (official) | [official](https://climatepledgearena.com/frequently-asked-questions/) |
| PPG Paints Arena | 19000 (Wikipedia infobox) | 18187 (official) | [official](https://www.ppgpaintsarena.com/ppg-paints-arena/faqs) |
| Dignity Health Sports Park | 27000 (Wikipedia infobox) | 26000 (official) | [official](https://www.dignityhealthsportspark.com/about/venues/soccer-stadium) |
| Inter.co Stadium | 24453 (Wikipedia infobox) | 25000 (official) | [official](https://www.intercostadium.com/) |
| Michigan Stadium | 107600 (Wikipedia infobox) | 107601 (official) | [official](https://mgoblue.com/sports/2017/6/16/facilities-michigan-stadium-html) |

### Wikipedia infobox vs Wikipedia list page (unresolved; infobox used)

| Venue | Infobox | List page | Link |
|---|---|---|---|
| Acrisure Stadium | 68400 (infobox) | 68984 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Allegiant Stadium | 65000 (infobox) | 66000 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Arrowhead Stadium | 76416 (infobox) | 73426 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| EverBank Stadium | 67814 (infobox) | 69132 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Gillette Stadium | 64628 (infobox) | 66829 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Gillette Stadium | 64628 (infobox) | 20000 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| Hard Rock Stadium | 64767 (infobox) | 65326 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Hard Rock Stadium | 64767 (infobox) | 14000 (List of tennis stadiums by capacity) | [list](https://en.wikipedia.org/w/index.php?title=List_of_tennis_stadiums_by_capacity&oldid=1380826943) |
| Lincoln Financial Field | 67594 (infobox) | 69596 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Mercedes-Benz Stadium | 71000 (infobox) | 42500 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| Raymond James Stadium | 69218 (infobox) | 65890 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Soldier Field | 66944 (infobox) | 62500 (List of current NFL stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_NFL_stadiums&oldid=1382562348) |
| Soldier Field | 66944 (infobox) | 24955 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| Comerica Park | 40120 (infobox) | 41083 (List of current Major League Baseball stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_Major_League_Baseball_stadiums&oldid=1374728191) |
| Progressive Field | 33530 (infobox) | 34820 (List of current Major League Baseball stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_Major_League_Baseball_stadiums&oldid=1374728191) |
| T-Mobile Park | 47368 (infobox) | 47929 (List of current Major League Baseball stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_current_Major_League_Baseball_stadiums&oldid=1374728191) |
| Yankee Stadium | 46537 (infobox) | 30321 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| American Airlines Center | 19200 (infobox) | 18532 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Ball Arena | 19520 (infobox) | 17809 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Capital One Arena | 20356 (infobox) | 18573 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Crypto.com Arena | 19079 (infobox) | 18230 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Delta Center | 18186 (infobox) | 16020 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| FedExForum | 16667 (infobox) | 17794 (List of NBA arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NBA_arenas&oldid=1383816605) |
| FedExForum | 16667 (infobox) | 18119 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Gainbridge Fieldhouse | 17274 (infobox) | 17923 (List of NBA arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NBA_arenas&oldid=1383816605) |
| Little Caesars Arena | 20332 (infobox) | 19515 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Madison Square Garden | 20012 (infobox) | 18006 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Target Center | 18798 (infobox) | 18024 (List of NBA arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NBA_arenas&oldid=1383816605) |
| TD Garden | 19156 (infobox) | 18624 (List of NBA arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NBA_arenas&oldid=1383816605) |
| TD Garden | 19156 (infobox) | 17565 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| United Center | 20917 (infobox) | 19717 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Lenovo Center | 19367 (infobox) | 18547 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Prudential Center | 18711 (infobox) | 16514 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| SAP Center | 19190 (infobox) | 17435 (List of National Hockey League arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_National_Hockey_League_arenas&oldid=1382289967) |
| Providence Park | 24686 (infobox) | 25218 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| Shell Energy Stadium | 22039 (infobox) | 20656 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| Toyota Stadium (Texas) | 11000 (infobox) | 19096 (List of Major League Soccer stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_Major_League_Soccer_stadiums&oldid=1383203573) |
| JMA Wireless Dome | 42784 (infobox) | 35446 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Warren McGuirk Alumni Stadium | 17000 (infobox) | 21430 (List of NCAA Division I FBS football stadiums) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_FBS_football_stadiums&oldid=1380930711) |
| Marriott Center | 17978 (infobox) | 19000 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Hilton Coliseum | 15000 (infobox) | 14267 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Carver–Hawkeye Arena | 14998 (infobox) | 15500 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Value City Arena | 19500 (infobox) | 18809 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Thomas & Mack Center | 17923 (infobox) | 18776 (List of NCAA Division I basketball arenas) | [list](https://en.wikipedia.org/w/index.php?title=List_of_NCAA_Division_I_basketball_arenas&oldid=1370701169) |
| Daytona International Speedway | 123500 (infobox) | 101500 (List of NASCAR tracks) | [list](https://en.wikipedia.org/w/index.php?title=Daytona_International_Speedway&oldid=1379712876) |
| Circuit of the Americas | 120000 (infobox) | 56000 (List of NASCAR tracks) | [list](https://en.wikipedia.org/w/index.php?title=Circuit_of_the_Americas&oldid=1381855951) |
| Sonoma Raceway | 44000 (infobox) | 47000 (List of NASCAR tracks) | [list](https://en.wikipedia.org/w/index.php?title=Sonoma_Raceway&oldid=1375913816) |

### OSM capacity tag disagrees by more than 1,000 (informational)

| Venue | Ours | OSM tag | Link |
|---|---|---|---|
| Northwest Stadium | 64000 (infobox) | 62000 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/24617361) |
| SAP Center | 19190 (infobox) | 18000 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/24169210) |
| Autzen Stadium | 60129 (infobox) | 54000 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/1021825978) |
| California Memorial Stadium | 52428 (infobox) | 62467 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/24025053) |
| Davis Wade Stadium | 60311 (infobox) | 61337 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/207653615) |
| Jack Trice Stadium | 61500 (infobox) | 55000 (OSM capacity tag) | [osm](https://www.openstreetmap.org/relation/11545732) |
| Ohio Stadium | 102780 (infobox) | 104944 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/119153498) |
| Bryant–Denny Stadium | 100077 (infobox) | 101821 (OSM capacity tag) | [osm](https://www.openstreetmap.org/way/89748161) |

### Racetrack capacity: infobox vs List of NASCAR tracks

| Venue | Infobox | NASCAR list | Link |
|---|---|---|---|
| Daytona International Speedway | 123500 (infobox) | 101500 (List of NASCAR tracks) | [wiki](https://en.wikipedia.org/w/index.php?title=Daytona_International_Speedway&oldid=1379712876) |
| Circuit of the Americas | 120000 (infobox) | 56000 (List of NASCAR tracks) | [wiki](https://en.wikipedia.org/w/index.php?title=Circuit_of_the_Americas&oldid=1381855951) |
| Sonoma Raceway | 44000 (infobox) | 47000 (List of NASCAR tracks) | [wiki](https://en.wikipedia.org/w/index.php?title=Sonoma_Raceway&oldid=1375913816) |

### Official pages that state a different or looser figure (kept Wikipedia; noted)

- **Reliant Stadium**: Texans site: 'Reliant Stadium (previously known as NRG Stadium)'. Capacity not stated on official pages. [source](https://www.houstontexans.com/stadium/)
- **SoFi Stadium**: Official site says 'approximately 70,000, expandable up to 100,000'; Wikipedia's 70,240 kept as the more precise figure. [source](https://www.sofistadium.com/stadium)
- **U.S. Bank Stadium**: Official history page cites the approved $975 million budget; Wikipedia's $1.061 billion is kept as the reported final cost. [source](https://www.usbankstadium.com/stadium-info/history)
- **Ball Arena**: Same official page also says 'seats 19,099 for basketball games and 18,007 for hockey'; the Seating section figures (19,520 / 17,809) are used. Official cost is 'more than $180 million'. [source](https://www.ballarena.com/arena-information/about-ball-arena/)
- **Delta Center**: Current capacity not stated on official site. [source](https://www.deltacenter.com/about-us/)
- **Intuit Dome**: Official site gives only '18,000 of your closest friends' (marketing copy); Wikipedia's 18,300 kept. [source](https://www.intuitdome.com/about/about-us)
- **Toyota Center**: Official arena pages read do not confirm a 2026 WNBA Houston Comets season; tenant comes from Wikipedia's current WNBA teams table. [source](https://www.toyotacenter.com/arena-info/about-us)
- **Lenovo Center**: Official site gives only 'up to 20,000' across configurations. [source](https://www.lenovocenter.com/arena-info/venue-facts-history)
- **UBS Arena**: Official FAQ says only 'seats over 17,000 fans'. [source](https://ubsarena.com/about-the-arena/faqs/)
- **Geodis Park**: Official site says '30000 Seats' (rounded); Wikipedia's 30,109 kept. [source](https://geodispark.com/)
- **Indian Wells Tennis Garden**: Official figure is from the tournament's history page (2000 entry), not a current spec sheet. [source](https://www.bnpparibasopen.com/history)

### State: list page vs coordinates

- Paycor Stadium: list says OH, coordinates fall in KY (list used; coarse state outlines on a river border)

### Coordinates: OSM centroid more than 1 km from Wikipedia

| Venue | km | OSM | Wikipedia |
|---|---|---|---|
| Circuit of the Americas | 1.0 | [osm](https://www.openstreetmap.org/way/113586692) | [wiki](https://en.wikipedia.org/w/index.php?title=Circuit_of_the_Americas&oldid=1381855951) |

## Venues within 1,000 of the 15,000 cutoff

These flip in or out on small changes. "Official" means the school or venue site confirmed the figure.

| Venue | Capacity | Status | Official check | Confidence |
|---|---|---|---|---|
| Harry Turpin Stadium | 15,971 | above (included) | confirmed | high |
| Save Mart Center | 15,596 | above (included) | not confirmed | medium |
| State Farm Center | 15,544 | above (included) | not confirmed | low |
| Pinnacle Bank Arena | 15,500 | above (included) | not confirmed | medium |
| The Pit (arena) | 15,411 | above (included) | not confirmed | high |
| Coleman Coliseum | 15,383 | above (included) | not confirmed | medium |
| Jerry Richardson Stadium | 15,314 | above (included) | not confirmed | high |
| Allen Fieldhouse | 15,300 | above (included) | not confirmed | high |
| Bryce Jordan Center | 15,261 | above (included) | not confirmed | medium |
| Kibbie Dome | 15,250 | above (included) | confirmed | medium |
| MVP Arena | 15,229 | above (included) | not confirmed | medium |
| Clarence T. C. Ching Athletics Complex | 15,194 | above (included) | not confirmed | high |
| United Supermarkets Arena | 15,098 | above (included) | not confirmed | high |
| Mizzou Arena | 15,061 | above (included) | not confirmed | high |
| Panther Stadium at Blackshear Field | 15,000 | above (included) | confirmed | high |
| Saluki Stadium | 15,000 | above (included) | not confirmed | high |
| Hilton Coliseum | 15,000 | above (included) | not confirmed | low |
| Jon M. Huntsman Center | 15,000 | above (included) | not confirmed | high |
| Carver–Hawkeye Arena | 14,998 | below (excluded) | not confirmed | high |
| Mackey Arena | 14,876 | below (excluded) | not confirmed | high |
| Breslin Student Events Center | 14,797 | below (excluded) | not confirmed | high |
| McKale Center | 14,688 | below (excluded) | not confirmed | high |
| Lawrence Joel Veterans Memorial Coliseum | 14,665 | below (excluded) | not confirmed | medium |
| The Barn (arena) | 14,625 | below (excluded) | not confirmed | low |
| John Paul Jones Arena | 14,623 | below (excluded) | not confirmed | medium |
| Homer Bryce Stadium | 14,575 | below (excluded) | not confirmed | high |
| Drake Stadium (Drake University) | 14,557 | below (excluded) | not confirmed | high |
| Memorial Gymnasium (Vanderbilt University) | 14,316 | below (excluded) | not confirmed | high |
| Desert Financial Arena | 14,198 | below (excluded) | not confirmed | high |
| Louis Armstrong Stadium | 14,053 | below (excluded) | not confirmed | high |
| Bowers Stadium | 14,000 | below (excluded) | not confirmed | high |
| Rhodes Stadium | 14,000 | below (excluded) | not confirmed | high |
| Hope Coliseum | 14,000 | below (excluded) | not confirmed | high |

### Excluded on seated capacity, but another configuration is 15,000+

Kept out because the brief defines capacity as current seated capacity. Worth a decision for the ones marked expandable or redevelopment.

| Venue | Seated | Other figures in infobox |
|---|---|---|
| Toyota Stadium (Texas) | 11,000 | 23,900 (after redevelopment) |
| Lynn Family Stadium | 11,700 | 15,304 (seated with standing room) |
| Alerus Center | 12,283 | 21,000 (expand=) |
| Bob Ford Field at Tom & Mary Casey Stadium | 8,500 | 24,000 (expandable to) [expandable] |
| Christy Mathewson–Memorial Stadium | 13,100 | 18,000 (1924 1940) |
| Drake Stadium (Drake University) | 14,557 | 18,000 (1925 2005) |
| Hancock Stadium | 13,391 | 15,000 (1977 2007); 18,000 (1963 1976) |
| Johnson Hagood Stadium | 12,500 | 22,342 (Former capacity 1949 1959); 22,500 (1960 1996); 21,000 (1997 2003); 21,000 (2006 2016) |
| Memorial Stadium (Terre Haute, Indiana) | 12,764 | 20,500 (1970&ndash 1995); 16,000 (1924&ndash 1966) |
| Zable Stadium | 12,672 | 15,000 (1935 1996) |
| John Paul Jones Arena | 14,623 | 15,177 (End stage 360°); 15,405 (Center stage) |
| Carver–Hawkeye Arena | 14,998 | 15,056 (2018 2023); 15,400 (2011 18); 15,500 (1983 2011) |
| Memorial Gymnasium (Vanderbilt University) | 14,316 | 15,311 (1997 2000); 15,317 (1993 1995); 15,378 (1989 1993); 15,626 (1976 1989); 15,581 (1969 1975) |

## Low confidence

### Capacity chosen from several infobox figures

| Venue | Used | Why | Link |
|---|---|---|---|
| Allegiant Stadium | 65,000 | multiple figures in infobox: 65,000 (NFL); 61,000 (Soccer) | [wiki](https://en.wikipedia.org/w/index.php?title=Allegiant_Stadium&oldid=1382640502) |
| AT&T Stadium | 80,000 | multiple figures in infobox: 80,000 (expandable to over); 70,649 (2026 FIFA World Cup) | [wiki](https://en.wikipedia.org/w/index.php?title=AT%26T_Stadium&oldid=1383880767) |
| Caesars Superdome | 73,208 | multiple figures in infobox: 73,208 (Football expandable to); 73,432 (Basketball); 56,941 (Baseball) | [wiki](https://en.wikipedia.org/w/index.php?title=Caesars_Superdome&oldid=1380147806) |
| Empower Field at Mile High | 76,125 | multiple figures in infobox: 76,125 (football); 85,000 (concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Empower_Field_at_Mile_High&oldid=1384002210) |
| EverBank Stadium | 67,814 | multiple figures in infobox: 67,814 (expandable to); 42,507 (during renovations) | [wiki](https://en.wikipedia.org/w/index.php?title=EverBank_Stadium&oldid=1383564692) |
| Ford Field | 65,000 | multiple figures in infobox: 65,000 (Football); 78,000 (Basketball) | [wiki](https://en.wikipedia.org/w/index.php?title=Ford_Field&oldid=1384079305) |
| Gillette Stadium | 64,628 | multiple figures in infobox: 64,628 (American football 2023 present); 20,000 (Soccer expandable) | [wiki](https://en.wikipedia.org/w/index.php?title=Gillette_Stadium&oldid=1383630323) |
| Hard Rock Stadium | 64,767 | multiple figures in infobox: 64,767 (American Football); 14,000 (Tennis); 75,000 (Original); 64,478 (2026 FIFA World Cup) | [wiki](https://en.wikipedia.org/w/index.php?title=Hard_Rock_Stadium&oldid=1383564422) |
| Levi's Stadium | 68,500 | multiple figures in infobox: 68,500; 68,827 (2026 FIFA World Cup) | [wiki](https://en.wikipedia.org/w/index.php?title=Levi's_Stadium&oldid=1383332389) |
| Lincoln Financial Field | 67,594 | multiple figures in infobox: 67,594; 68,324 (2026 FIFA World Cup) | [wiki](https://en.wikipedia.org/w/index.php?title=Lincoln_Financial_Field&oldid=1382931983) |
| Mercedes-Benz Stadium | 71,000 | multiple figures in infobox: 71,000 (American football); 42,500 (Soccer); 73,019 (standing room to at least) | [wiki](https://en.wikipedia.org/w/index.php?title=Mercedes-Benz_Stadium&oldid=1383070338) |
| MetLife Stadium | 82,500 | multiple figures in infobox: 82,500; 80,663 (2026 FIFA World Cup) | [wiki](https://en.wikipedia.org/w/index.php?title=MetLife_Stadium&oldid=1381185974) |
| Nissan Stadium (Nashville) | 69,143 | multiple figures in infobox: 69,143; 67,700 (Former capacity 1999); 68,498 (2000); 68,798 (2001); 68,804 (2002); 68,809 (2003); 68,932 (2004); 69,149 (2005) | [wiki](https://en.wikipedia.org/w/index.php?title=Nissan_Stadium_(Nashville)&oldid=1375930209) |
| Northwest Stadium | 64,000 | multiple figures in infobox: 64,000; 62,000 (Former capacity 2022 2024); 58,000 (2021); 67,617 (2015&ndash 2021); 79,000 (2012 2015); 83,000 (2011); 91,704 (200 | [wiki](https://en.wikipedia.org/w/index.php?title=Northwest_Stadium&oldid=1374296465) |
| Soldier Field | 66,944 | multiple figures in infobox: 66,944 (1994 2003); 62,500 (since 2003) | [wiki](https://en.wikipedia.org/w/index.php?title=Soldier_Field&oldid=1383684812) |
| State Farm Stadium | 63,400 | multiple figures in infobox: 63,400 (expandable to); 78,600 (standing room to) | [wiki](https://en.wikipedia.org/w/index.php?title=State_Farm_Stadium&oldid=1380823511) |
| U.S. Bank Stadium | 66,467 | multiple figures in infobox: 66,202 (expandable to); 66,467 (Former capacity Football 2019 2021); 66,860 (Football 2017 2018); 66,200 (Football 2016) | [wiki](https://en.wikipedia.org/w/index.php?title=U.S._Bank_Stadium&oldid=1381185446) |
| Busch Stadium | 44,383 | multiple figures in infobox: 44,383 (since 2020); 44,494 (2018 2019); 45,529 (2017); 45,538 (2016); 45,399 (2014 2015); 43,975 (2006 2013); 47,514 (with standin | [wiki](https://en.wikipedia.org/w/index.php?title=Busch_Stadium&oldid=1383625205) |
| Chase Field | 48,330 | multiple figures in infobox: 48,330 (since 2023); 48,405 (2020 2022); 48,418 (2019); 48,618 (2018); 48,686 (2017); 48,519 (2015 2016); 48,633 (2011 2014); 48,65 | [wiki](https://en.wikipedia.org/w/index.php?title=Chase_Field&oldid=1383441734) |
| Citi Field | 41,922 | multiple figures in infobox: 41,922 (2012 present); 45,000 (including standing room) | [wiki](https://en.wikipedia.org/w/index.php?title=Citi_Field&oldid=1383734956) |
| Comerica Park | 40,120 | multiple figures in infobox: 40,120 (2000 2002); 41,070 (2003 2007); 41,000 (2008); 41,255 (2009 2013); 41,681 (2014); 41,574 (2015); 41,297 (2016); 41,299 (201 | [wiki](https://en.wikipedia.org/w/index.php?title=Comerica_Park&oldid=1380085153) |
| Coors Field | 46,897 | multiple figures in infobox: 46,897; 50,144 (with standing room 2018 present); 50,398 (2012 2017); 50,490 (2011); 50,445 (2001 2010); 50,381 (1999 2000); 50,200 | [wiki](https://en.wikipedia.org/w/index.php?title=Coors_Field&oldid=1383393991) |
| Fenway Park | 37,305 | multiple figures in infobox: 37,305 (day); 37,755 (night) | [wiki](https://en.wikipedia.org/w/index.php?title=Fenway_Park&oldid=1384003410) |
| LoanDepot Park | 36,742 | multiple figures in infobox: 36,742; 37,442 (with standing room); 34,000 (football) | [wiki](https://en.wikipedia.org/w/index.php?title=LoanDepot_Park&oldid=1383882370) |
| Oracle Park | 41,331 | multiple figures in infobox: 41,331 (Baseball 2021 present); 42,000 (Rugby sevens) | [wiki](https://en.wikipedia.org/w/index.php?title=Oracle_Park&oldid=1372223272) |
| Petco Park | 39,860 | multiple figures in infobox: 39,860 (since 2024); 39,909 (2022 2023); 40,019 (2020 2021); 40,204 (2019); 40,209 (2017 2018); 40,162 (2016); 41,164 (2015); 42,30 | [wiki](https://en.wikipedia.org/w/index.php?title=Petco_Park&oldid=1383883106) |
| T-Mobile Park | 47,368 | multiple figures in infobox: 47,368 (Baseball); 30,144 (Football) | [wiki](https://en.wikipedia.org/w/index.php?title=T-Mobile_Park&oldid=1382551471) |
| Yankee Stadium | 46,537 | multiple figures in infobox: 46,537 (Baseball 2020 present); 28,743 (Soccer Expandable to); 54,251 (Football); 49,653 (Soccer); 54,251 (Football) | [wiki](https://en.wikipedia.org/w/index.php?title=Yankee_Stadium&oldid=1383884566) |
| American Airlines Center | 19,200 | multiple figures in infobox: 19,200 (Basketball up to); 18,532 (Ice hockey up to); 21,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=American_Airlines_Center&oldid=1382756054) |
| Ball Arena | 19,520 | multiple figures in infobox: 19,520 (Basketball); 17,809 (Hockey/Lacrosse); 21,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Ball_Arena&oldid=1383880827) |
| Capital One Arena | 20,356 | multiple figures in infobox: 20,356 (Basketball); 19,300 (Pro wrestling); 18,573 (Ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Capital_One_Arena&oldid=1375927841) |
| Chase Center | 18,064 | multiple figures in infobox: 18,064 (Basketball); 19,500 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Chase_Center&oldid=1383273881) |
| Crypto.com Arena | 19,079 | multiple figures in infobox: 20,000 (Concerts); 19,079 (Basketball); 21,000 (Boxing/Wrestling 16 000); 18,145 (Ice hockey); 16,096 (Arena football) | [wiki](https://en.wikipedia.org/w/index.php?title=Crypto.com_Arena&oldid=1383479019) |
| Delta Center | 18,186 | multiple figures in infobox: 18,186 (Basketball); 20,000 (Concerts); 16,020 (Ice hockey); 3,000 (NuSkin Theater); 7,000 | [wiki](https://en.wikipedia.org/w/index.php?title=Delta_Center&oldid=1379043310) |
| FedExForum | 16,667 | multiple figures in infobox: 16,667 (Basketball); 16,411 (Ice hockey); 18,119 (Concert) | [wiki](https://en.wikipedia.org/w/index.php?title=FedExForum&oldid=1373012936) |
| Fiserv Forum | 17,385 | multiple figures in infobox: 17,385 (Basketball); 15,178 (Ice hockey); 18,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Fiserv_Forum&oldid=1383696648) |
| Frost Bank Center | 18,418 | multiple figures in infobox: 18,418 (2015 present); 16,151 (Ice Hockey); 6,374 (with curtain system); 19,000 (Concert maximum capacity) | [wiki](https://en.wikipedia.org/w/index.php?title=Frost_Bank_Center&oldid=1372180807) |
| Gainbridge Fieldhouse | 17,274 | multiple figures in infobox: 17,274 (Basketball); 18,274 (Concerts); 11,651 (Ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Gainbridge_Fieldhouse&oldid=1381441842) |
| Golden 1 Center | 17,608 | multiple figures in infobox: 17,608 (Basketball); 19,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Golden_1_Center&oldid=1380442256) |
| Kaseya Center | 19,600 | multiple figures in infobox: 19,600 (Basketball); 16,500 (Without upper levels); 20,021 (Concerts 5 000); 14,447 (Hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Kaseya_Center&oldid=1379398233) |
| Kia Center | 18,846 | multiple figures in infobox: 18,846 (NBA); 17,030 (center stage concert); 16,486 (end stage concert); 20,000 (NCAA basketball); 17,192 (arena football); 17,353  | [wiki](https://en.wikipedia.org/w/index.php?title=Kia_Center&oldid=1377516173) |
| Little Caesars Arena | 20,332 | multiple figures in infobox: 20,332 (Basketball); 22,000 (Concerts 15 000); 19,515 (Ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Little_Caesars_Arena&oldid=1383686902) |
| Madison Square Garden | 20,012 | multiple figures in infobox: 20,012 (Basketball); 20,789 (MMA); 22,000 (Concert); 18,006 (Ice hockey Pro wrestling); 18,538 (Pro wrestling) | [wiki](https://en.wikipedia.org/w/index.php?title=Madison_Square_Garden&oldid=1383025871) |
| Moda Center | 19,393 | multiple figures in infobox: 19,393 (Basketball 2015 present); 18,280 (Ice hockey / Box lacrosse); 20,500 (Center stage approx.); 15,000 (End stage approx.); 6, | [wiki](https://en.wikipedia.org/w/index.php?title=Moda_Center&oldid=1381686892) |
| Mortgage Matchup Center | 17,071 | multiple figures in infobox: 17,071 (basketball); 16,210 (hockey and indoor football); 17,716 (in the round concerts); 12,565 (end stage concerts); 4,379 (theat | [wiki](https://en.wikipedia.org/w/index.php?title=Mortgage_Matchup_Center&oldid=1383654781) |
| Paycom Center | 18,203 | multiple figures in infobox: 18,203 (Basketball); 15,152 (Hockey); 16,591 (Concerts); 16,757 (Wrestling/Boxing/MMA) | [wiki](https://en.wikipedia.org/w/index.php?title=Paycom_Center&oldid=1372206126) |
| Rocket Arena | 19,432 | multiple figures in infobox: 19,432 (Basketball); 18,926 (Ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Rocket_Arena&oldid=1379138612) |
| Smoothie King Center | 16,867 | multiple figures in infobox: 17,971 (Concerts); 16,867 (NBA basketball); 18,500 (College basketball/NBA playoff games) | [wiki](https://en.wikipedia.org/w/index.php?title=Smoothie_King_Center&oldid=1380134811) |
| Spectrum Center | 19,444 | multiple figures in infobox: 19,444 (Basketball); 20,200 (Pro wrestling); 13,376 (Concerts End stage 180°); 15,236 (End stage 270°); 18,249 (End stage 360°); 18 | [wiki](https://en.wikipedia.org/w/index.php?title=Spectrum_Center&oldid=1380171931) |
| Target Center | 18,798 | multiple figures in infobox: 18,798 (Basketball); 17,500 (Hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Target_Center&oldid=1379559475) |
| TD Garden | 19,156 | multiple figures in infobox: 19,156 (2019 present); 20,000 (Concerts); 17,850 (2019 present) | [wiki](https://en.wikipedia.org/w/index.php?title=TD_Garden&oldid=1372238200) |
| Toyota Center | 18,104 | multiple figures in infobox: 19,000 (Concerts); 18,104 (Basketball); 17,800 (Hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Toyota_Center&oldid=1379987960) |
| United Center | 20,917 | multiple figures in infobox: 20,917 (Basketball); 23,129 (with standing room); 23,500 (Concerts); 19,717 (Ice hockey); 22,428 (with standing room) | [wiki](https://en.wikipedia.org/w/index.php?title=United_Center&oldid=1383479288) |
| Amerant Bank Arena | 19,250 | multiple figures in infobox: 20,737 (Basketball); 23,000 (Concerts); 19,250 (Ice hockey at least); 20,000 (at least with standing room); 3,000 (Theatre) | [wiki](https://en.wikipedia.org/w/index.php?title=Amerant_Bank_Arena&oldid=1379821144) |
| Benchmark International Arena | 19,092 | multiple figures in infobox: 18,500 (Arena football); 20,500 (Basketball); 21,500 (Concerts); 19,092 (Ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Benchmark_International_Arena&oldid=1376541285) |
| Bridgestone Arena | 17,159 | multiple figures in infobox: 18,500 (Basketball); 20,000 (Concerts 10 000); 17,159 (Ice hockey); 5,145 (Theater) | [wiki](https://en.wikipedia.org/w/index.php?title=Bridgestone_Arena&oldid=1380457078) |
| Enterprise Center | 18,096 | multiple figures in infobox: 18,096 (Ice hockey); 22,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Enterprise_Center&oldid=1383625172) |
| Grand Casino Arena | 17,954 | multiple figures in infobox: 17,954 (2012 present); 12,999 (Concerts End Stage); 20,554 (Center Stage) | [wiki](https://en.wikipedia.org/w/index.php?title=Grand_Casino_Arena&oldid=1383911644) |
| Honda Center | 17,174 | multiple figures in infobox: 18,336 (Basketball); 18,900 (Concerts 13 793); 17,174 (Ice hockey); 10,935 (Theater) | [wiki](https://en.wikipedia.org/w/index.php?title=Honda_Center&oldid=1383683168) |
| KeyBank Center | 19,070 | multiple figures in infobox: 19,070 (Basketball); 18,500 (Concerts); 19,070 (2013 present); 16,597 (Wrestling) | [wiki](https://en.wikipedia.org/w/index.php?title=KeyBank_Center&oldid=1383073266) |
| Lenovo Center | 19,367 | multiple figures in infobox: 19,367 (2026 present); 20,000 (Concerts); 18,547 (2026 present); 10,000 (Theatre 4 000) | [wiki](https://en.wikipedia.org/w/index.php?title=Lenovo_Center&oldid=1383688622) |
| Nationwide Arena | 18,500 | multiple figures in infobox: 19,500 (Basketball); 20,000 (Concerts); 18,500 (Ice hockey); 19,500 (with standing room) | [wiki](https://en.wikipedia.org/w/index.php?title=Nationwide_Arena&oldid=1379010656) |
| Prudential Center | 18,711 | multiple figures in infobox: 16,514 (2015 present); 18,711 (Basketball); 17,502 (Indoor soccer); 17,625 (Lacrosse); 17,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Prudential_Center&oldid=1383689164) |
| SAP Center | 19,190 | multiple figures in infobox: 19,190 (Concerts); 18,543 (Basketball); 18,300 (Wrestling); 17,435 (2023 present); 11,386 (Tennis) | [wiki](https://en.wikipedia.org/w/index.php?title=SAP_Center&oldid=1380804230) |
| T-Mobile Arena | 17,500 | multiple figures in infobox: 18,000 (Basketball); 20,000 (with standing room); 20,000 (Boxing/MMA/Pro Wrestling); 20,000 (Concerts 12 000); 17,500 (Ice hockey); | [wiki](https://en.wikipedia.org/w/index.php?title=T-Mobile_Arena&oldid=1381593285) |
| UBS Arena | 17,255 | multiple figures in infobox: 19,000 (Concerts); 17,255 (Ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=UBS_Arena&oldid=1374271562) |
| Dick's Sporting Goods Park | 18,061 | multiple figures in infobox: 18,061 (soccer); 27,000 (concert) | [wiki](https://en.wikipedia.org/w/index.php?title=Dick's_Sporting_Goods_Park&oldid=1382314239) |
| Sporting Park | 18,467 | multiple figures in infobox: 18,467 (soccer); 25,000 (concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Sporting_Park&oldid=1372232057) |
| Subaru Park | 18,500 | multiple figures in infobox: 18,500 (Soccer); 26,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Subaru_Park&oldid=1377178083) |
| Alamodome | 64,000 | multiple figures in infobox: 64,000 (American football); 52,295 (Baseball); 59,000 (Canadian football); 20,662 (Basketball expandable to); 70,000 (and); 36,000  | [wiki](https://en.wikipedia.org/w/index.php?title=Alamodome&oldid=1383422358) |
| Husky Stadium | 72,132 | multiple figures in infobox: 72,132; 70,083 (Former capacity 2014); 70,138 (2013); 72,500 (1987 2011); 58,000 (1968 1986); 55,000 (1950 1967); 40,000 (1936 1949 | [wiki](https://en.wikipedia.org/w/index.php?title=Husky_Stadium&oldid=1382536125) |
| Camp Randall Stadium | 76,030 | multiple figures in infobox: 76,030 (2024 present); 11,900 | [wiki](https://en.wikipedia.org/w/index.php?title=Camp_Randall_Stadium&oldid=1384092752) |
| David Booth Kansas Memorial Stadium | 41,525 | multiple figures in infobox: 41,525 (2025); 32,000 (2026); 43,000 (2027) | [wiki](https://en.wikipedia.org/w/index.php?title=David_Booth_Kansas_Memorial_Stadium&oldid=1381254544) |
| Falcon Stadium | 39,441 | multiple figures in infobox: 39,441 (2024 present); 46,692 (2005 present) | [wiki](https://en.wikipedia.org/w/index.php?title=Falcon_Stadium&oldid=1383396558) |
| Fargodome | 18,700 | multiple figures in infobox: 18,700 (football expand=); 3,500 (Gate City Bank Theater); 11,000 (Half house); 16,000 (3/4 house); 22,000 (End stage); 26,700 (Cen | [wiki](https://en.wikipedia.org/w/index.php?title=Fargodome&oldid=1383081889) |
| Faurot Field | 63,609 | multiple figures in infobox: 63,609 (2026); 57,321 (Former capacity 2025); 71,168 (2014 2017); 67,124 (2013); 71,004 (2009 2012); 68,349 (2003 2008); 68,174 (19 | [wiki](https://en.wikipedia.org/w/index.php?title=Faurot_Field&oldid=1381639921) |
| Galaxy Stadium | 60,229 | multiple figures in infobox: 60,229; 56,200 (2023); 60,454 (2010 2022); 58,930 (2009); 53,000 (2003 2008); 48,000 (1972 2002); 41,500 (1959 1971); 27,000 (1947  | [wiki](https://en.wikipedia.org/w/index.php?title=Galaxy_Stadium&oldid=1375977736) |
| JMA Wireless Dome | 42,784 | multiple figures in infobox: 42,784 (Football); 39,925 (Ice hockey); 33,000 (Basketball); 56,250 (Concerts); 49,262 (2003 2020); 49,550 (1998 2002); 50,000 (198 | [wiki](https://en.wikipedia.org/w/index.php?title=JMA_Wireless_Dome&oldid=1373732825) |
| Lane Stadium | 65,632 | multiple figures in infobox: 65,632 (total); 1,200 (Club Seating) | [wiki](https://en.wikipedia.org/w/index.php?title=Lane_Stadium&oldid=1378051648) |
| Los Angeles Memorial Coliseum | 77,500 | multiple figures in infobox: 77,500; 93,607 (pre 2018) | [wiki](https://en.wikipedia.org/w/index.php?title=Los_Angeles_Memorial_Coliseum&oldid=1382253868) |
| Pratt & Whitney Stadium at Rentschler Field | 40,000 | multiple figures in infobox: 40,000 (standing room to expandable to at least); 41,000 (expandable to at least) | [wiki](https://en.wikipedia.org/w/index.php?title=Pratt_%26_Whitney_Stadium_at_Rentschler_Field&oldid=1373943730) |
| First Community Stadium | 47,000 | multiple figures in infobox: 47,000; 68,142 (Super Bowl VIII) | [wiki](https://en.wikipedia.org/w/index.php?title=First_Community_Stadium&oldid=1380858219) |
| Valley Children's Stadium | 30,000 | multiple figures in infobox: 30,000 (1981 1990); 40,541 (1991 1992); 41,031 (1993 2017); 40,727 (since 2018) | [wiki](https://en.wikipedia.org/w/index.php?title=Valley_Children's_Stadium&oldid=1380169629) |
| Kibbie Dome | 15,250 | multiple figures in infobox: 15,250 (Football 2011 present); 7,000 (Basketball) | [wiki](https://en.wikipedia.org/w/index.php?title=Kibbie_Dome&oldid=1378384931) |
| Provost Umphrey Stadium | 17,500 | multiple figures in infobox: 17,500 (1964); 16,000 (2010) | [wiki](https://en.wikipedia.org/w/index.php?title=Provost_Umphrey_Stadium&oldid=1382034726) |
| KFC Yum! Center | 22,090 | multiple figures in infobox: 22,090 (Basketball); 21,500 (Volleyball); 17,500 (End stage); 22,090 (Max) | [wiki](https://en.wikipedia.org/w/index.php?title=KFC_Yum!_Center&oldid=1375342603) |
| Hilton Coliseum | 15,000 | multiple figures in infobox: 15,000 (concerts); 14,267 (2021 present) | [wiki](https://en.wikipedia.org/w/index.php?title=Hilton_Coliseum&oldid=1379216524) |
| CHI Health Center | 18,320 | multiple figures in infobox: 18,320 (basketball); 17,100 (hockey); 18,975 (concert center stage); 2,693 (Peter Kiewit Grand Ballroom) | [wiki](https://en.wikipedia.org/w/index.php?title=CHI_Health_Center&oldid=1383899007) |
| State Farm Center | 15,544 | multiple figures in infobox: 15,544 (permanent); 16,500 (permanent concert 2016 present); 17,085 (2014 2015); 16,618 (2003 2014); 16,450 (1995 2003); 16,321 (19 | [wiki](https://en.wikipedia.org/w/index.php?title=State_Farm_Center&oldid=1378524310) |
| Pinnacle Bank Arena | 15,500 | multiple figures in infobox: 15,500 (Basketball); 14,660 (Boxing); 12,700 (Ice hockey); 15,290 (Volleyball); 16,130 (Center stage); 14,620 (End stage); 10,900 ( | [wiki](https://en.wikipedia.org/w/index.php?title=Pinnacle_Bank_Arena&oldid=1372214540) |
| Value City Arena | 19,500 | multiple figures in infobox: 17,500 (ice hockey); 19,500 (basketball); 20,000 (concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Value_City_Arena&oldid=1383925822) |
| Bryce Jordan Center | 15,261 | multiple figures in infobox: 15,261 (Basketball); 16,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Bryce_Jordan_Center&oldid=1383410667) |
| Kohl Center | 17,287 | multiple figures in infobox: 17,287 (basketball); 15,359 (ice hockey) | [wiki](https://en.wikipedia.org/w/index.php?title=Kohl_Center&oldid=1384051214) |
| MVP Arena | 15,229 | multiple figures in infobox: 15,357 (concerts); 15,229 (basketball); 14,236 (hockey/lacrosse); 13,785 (arena football); 17,500 (max) | [wiki](https://en.wikipedia.org/w/index.php?title=MVP_Arena&oldid=1372427063) |
| Thomas & Mack Center | 17,923 | multiple figures in infobox: 17,923 (Basketball); 18,645 (Boxing); 16,606 (Arena football); 14,729 (Concerts End stage 180°); 15,736 (End stage 270°); 18,069 (E | [wiki](https://en.wikipedia.org/w/index.php?title=Thomas_%26_Mack_Center&oldid=1381656758) |
| Save Mart Center | 15,596 | multiple figures in infobox: 16,182 (Concerts Professional wrestling Boxing); 15,596 (Basketball); 14,224 (Hockey); 12,368 (Rodeo) | [wiki](https://en.wikipedia.org/w/index.php?title=Save_Mart_Center&oldid=1372228700) |
| Coleman Coliseum | 15,383 | multiple figures in infobox: 15,383 (basketball); 15,075 (gymnastics) | [wiki](https://en.wikipedia.org/w/index.php?title=Coleman_Coliseum&oldid=1375509132) |
| Rupp Arena | 20,500 | multiple figures in infobox: 20,500 (Basketball); 18,345 (Ice hockey); 23,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Rupp_Arena&oldid=1372226858) |
| Colonial Life Arena | 18,000 | multiple figures in infobox: 18,000 (Basketball); 19,000 (Concerts) | [wiki](https://en.wikipedia.org/w/index.php?title=Colonial_Life_Arena&oldid=1372077063) |
| Daytona International Speedway | 123,500 | multiple figures in infobox: 101,500; 167,785 (w/ infield depending on configuration); 123,500 (grandstand capacity) | [wiki](https://en.wikipedia.org/w/index.php?title=Daytona_International_Speedway&oldid=1379712876) |
| Mid-Ohio Sports Car Course | 75,000 | multiple figures in infobox: 12,000 (Bleachers); 75,000 (Open seating) | [wiki](https://en.wikipedia.org/w/index.php?title=Mid-Ohio_Sports_Car_Course&oldid=1381712451) |
| Indian Wells Tennis Garden | 16,100 | multiple figures in infobox: 16,100 (Stadium 1); 8,000 (Stadium 2) | [wiki](https://en.wikipedia.org/w/index.php?title=Indian_Wells_Tennis_Garden&oldid=1372205653) |
| Camping World Stadium | 60,219 | multiple figures in infobox: 60,219 (Football 2014 present); 19,500 (Soccer) | [wiki](https://en.wikipedia.org/w/index.php?title=Camping_World_Stadium&oldid=1383564981) |
| BOK Center | 17,839 | multiple figures in infobox: 19,199 (Central stage); 17,839 (Basketball); 17,096 (Hockey); 16,582 (Arena football); 13,644 (End stage) | [wiki](https://en.wikipedia.org/w/index.php?title=BOK_Center&oldid=1383910142) |

### Opened year ambiguous

| Venue | Used | Why |
|---|---|---|
| Angel Stadium | 1998 | other years in field: 1966, 1998 |
| Madison Square Garden | 1968 | other years in field: 1968, 1879, 1879, 1890, 1890, 1925, 1925 |
| Husky Stadium | 1920 | multiple years in field: 1920, 2013 |
| California Memorial Stadium | 2012 | other years in field: 1923, 2012 |
| FirstBank Stadium | 1922 | other years in field: 1922, 1981 |
| S.B. Ballard Stadium | 1936 | multiple years in field: 1936, 2019 |
| Nippert Stadium | 1915 | other years in field: 1915, 1924 |
| Rose Bowl (stadium) | 1922 | multiple years in field: 1922, 1923 |
| Stanford Stadium | 1921 | other years in field: 1921, 2006 |
| Kibbie Dome | 1971 | other years in field: 1975, 1971 |
| Pocono Raceway | 1971 | other years in field: 1969, 1971 |
| North Wilkesboro Speedway | 2022 | other years in field: 1947, 2010, 2022 |
| New Hampshire Motor Speedway | 1990 | other years in field: 1965, 1990 |
| Gateway Motorsports Park | 1997 | other years in field: 1985, 1997 |

### Cost given as a range (stored as null)

| Venue | Source text |
|---|---|
| SoFi Stadium | range in source: $5–6 billion (estimated)($– in dollars) |

### Sanity checks (values that look wrong)

| Venue | Issue |
|---|---|
| Indianapolis Motor Speedway | cost year 1909 is before 1913; real cost uses 1913 CPI |
| Mercedes-Benz Stadium | soccer configuration 42,500 vs headline 71,000 |
| Lumen Field | soccer configuration 37,722 vs headline 68,000 |
| Hard Rock Stadium | tennis configuration 14,000 vs headline 64,767 |
| Gillette Stadium | soccer configuration 20,000 vs headline 64,628 |
| Amon G. Carter Stadium | cost $164.0M for a 1930 opening is probably a later renovation |
| Franklin Field | cost year 1895 is before 1913; real cost uses 1913 CPI |
| Fenway Park | cost year 1912 is before 1913; real cost uses 1913 CPI |
| Milwaukee Mile | cost $150.0M for a 1903 opening is probably a later renovation |
| Milwaukee Mile | cost year 1903 is before 1913; real cost uses 1913 CPI |
| Harvard Stadium | cost year 1903 is before 1913; real cost uses 1913 CPI |
| North Wilkesboro Speedway | racetrack opened 2022: may be a reopening year |
| Caesars Superdome / Smoothie King Center | coordinates 240 m apart: check both point at their own building |

### Racetrack capacities are estimates

All 31 racetracks carry `capacity_type: "estimated"`. No track site read in the cross-check published a seat count; figures are Wikipedia's. COTA's 120,000 and Barber's 90,000 likely include general admission.

| Track | Capacity | Source |
|---|---|---|
| Indianapolis Motor Speedway | 257,325 | [source](https://en.wikipedia.org/w/index.php?title=Indianapolis_Motor_Speedway&oldid=1382316958) |
| Bristol Motor Speedway | 146,000 | [source](https://en.wikipedia.org/w/index.php?title=Bristol_Motor_Speedway&oldid=1382114880) |
| Daytona International Speedway | 123,500 | [source](https://en.wikipedia.org/w/index.php?title=Daytona_International_Speedway&oldid=1379712876) |
| Circuit of the Americas | 120,000 | [source](https://en.wikipedia.org/w/index.php?title=Circuit_of_the_Americas&oldid=1381855951) |
| Charlotte Motor Speedway | 95,000 | [source](https://en.wikipedia.org/w/index.php?title=Charlotte_Motor_Speedway&oldid=1380796288) |
| Barber Motorsports Park | 90,000 | [source](https://en.wikipedia.org/w/index.php?title=Barber_Motorsports_Park&oldid=1383752841) |
| Las Vegas Motor Speedway | 80,000 | [source](https://en.wikipedia.org/w/index.php?title=Las_Vegas_Motor_Speedway&oldid=1378172030) |
| Talladega Superspeedway | 80,000 | [source](https://en.wikipedia.org/w/index.php?title=Talladega_Superspeedway&oldid=1381991846) |
| Pocono Raceway | 76,812 | [source](https://en.wikipedia.org/w/index.php?title=Pocono_Raceway&oldid=1371926237) |
| Mid-Ohio Sports Car Course | 75,000 | [source](https://en.wikipedia.org/w/index.php?title=Mid-Ohio_Sports_Car_Course&oldid=1381712451) |
| Texas Motor Speedway | 75,000 | [source](https://en.wikipedia.org/w/index.php?title=Texas_Motor_Speedway&oldid=1375916063) |
| Atlanta Motor Speedway | 71,000 | [source](https://en.wikipedia.org/w/index.php?title=Atlanta_Motor_Speedway&oldid=1371494090) |
| Gateway Motorsports Park | 57,000 | [source](https://en.wikipedia.org/w/index.php?title=Gateway_Motorsports_Park&oldid=1380110817) |
| Michigan International Speedway | 56,000 | [source](https://en.wikipedia.org/w/index.php?title=Michigan_International_Speedway&oldid=1367532611) |
| Dover Motor Speedway | 54,000 | [source](https://en.wikipedia.org/w/index.php?title=Dover_Motor_Speedway&oldid=1369044907) |
| Richmond Raceway | 50,000 | [source](https://en.wikipedia.org/w/index.php?title=Richmond_Raceway&oldid=1372320994) |
| Kansas Speedway | 48,000 | [source](https://en.wikipedia.org/w/index.php?title=Kansas_Speedway&oldid=1372100292) |
| Chicagoland Speedway | 47,000 | [source](https://en.wikipedia.org/w/index.php?title=Chicagoland_Speedway&oldid=1371147861) |
| Darlington Raceway | 47,000 | [source](https://en.wikipedia.org/w/index.php?title=Darlington_Raceway&oldid=1382313747) |
| Martinsville Speedway | 44,000 | [source](https://en.wikipedia.org/w/index.php?title=Martinsville_Speedway&oldid=1380300800) |
| New Hampshire Motor Speedway | 44,000 | [source](https://en.wikipedia.org/w/index.php?title=New_Hampshire_Motor_Speedway&oldid=1376814826) |
| Sonoma Raceway | 44,000 | [source](https://en.wikipedia.org/w/index.php?title=Sonoma_Raceway&oldid=1375913816) |
| Homestead–Miami Speedway | 43,000 | [source](https://en.wikipedia.org/w/index.php?title=Homestead%E2%80%93Miami_Speedway&oldid=1375904742) |
| Phoenix Raceway | 42,000 | [source](https://en.wikipedia.org/w/index.php?title=Phoenix_Raceway&oldid=1379963743) |
| Watkins Glen International | 38,900 | [source](https://en.wikipedia.org/w/index.php?title=Watkins_Glen_International&oldid=1379208606) |
| Milwaukee Mile | 37,000 | [source](https://en.wikipedia.org/w/index.php?title=Milwaukee_Mile&oldid=1368303230) |
| Iowa Speedway | 30,000 | [source](https://en.wikipedia.org/w/index.php?title=Iowa_Speedway&oldid=1381722842) |
| Portland International Raceway | 30,000 | [source](https://en.wikipedia.org/w/index.php?title=Portland_International_Raceway&oldid=1383181960) |
| Nashville Superspeedway | 25,000 | [source](https://en.wikipedia.org/w/index.php?title=Nashville_Superspeedway&oldid=1381600293) |
| North Wilkesboro Speedway | 19,800 | [source](https://en.wikipedia.org/w/index.php?title=North_Wilkesboro_Speedway&oldid=1380933627) |
| Bowman Gray Stadium | 17,000 | [source](https://en.wikipedia.org/w/index.php?title=Bowman_Gray_Stadium&oldid=1370869298) |

### Neutral-site venues (hand-picked inclusion)

| Venue | Capacity | Events |
|---|---|---|
| Camping World Stadium | 60,219 | Citrus Bowl, Pop-Tarts Bowl |
| Cotton Bowl (stadium) | 92,100 | Red River Rivalry, State Fair Classic |
| Legion Field | 71,594 | Magic City Classic |
| Independence Stadium (Shreveport) | 50,000 | Independence Bowl |
| Charles Schwab Field | 24,505 | College World Series |
| BOK Center | 17,839 | NCAA Division I men's basketball tournament |
| First Horizon Coliseum | 22,000 | ACC men's basketball tournament |

### Infobox lists a "closed" date (kept: each appears on a current list or schedule)

- [Soldier Field](https://en.wikipedia.org/w/index.php?title=Soldier_Field&oldid=1383684812): "2002– (renovations)"
- [S.B. Ballard Stadium](https://en.wikipedia.org/w/index.php?title=S.B._Ballard_Stadium&oldid=1381711030): "November 17, 2018 (for demolition and reconstruction)"
- [Coronado Street Course](https://en.wikipedia.org/w/index.php?title=Coronado_Street_Course&oldid=1375912777): "2016"
- [North Wilkesboro Speedway](https://en.wikipedia.org/w/index.php?title=North_Wilkesboro_Speedway&oldid=1380933627): "First: 1997 Second: 2011"
- [Detroit Street Circuit](https://en.wikipedia.org/w/index.php?title=Detroit_Street_Circuit&oldid=1376815173): "1991"
- [Washington Street Circuit](https://en.wikipedia.org/w/index.php?title=Washington_Street_Circuit&oldid=1383952136): "2026"

### Roof inferred (no roof field in source)

278 venues. Arenas are stored as `dome` (fixed roof); outdoor stadiums with no roof field as `open`. Rule-based, not sourced.

## Official-site cross-check coverage

Done for every NFL, MLB, NBA, NHL and MLS venue, the six pilot venues, all racetracks and tennis venues, and the near-cutoff college venues. Many official sites do not publish a seat count (most MLB ballpark pages on mlb.com, most racetracks, many arenas), or blocked automated reads. Those stay single-source.

| Venue | Fields confirmed or corrected |
|---|---|
| Acrisure Stadium | capacity |
| Allegiant Stadium | capacity |
| Bank of America Stadium | capacity |
| Empower Field at Mile High | capacity, opened, cost_nominal |
| Ford Field | capacity, opened, cost_nominal |
| Gillette Stadium | capacity, opened |
| Levi's Stadium | capacity, opened |
| Lucas Oil Stadium | cost_nominal, opened, capacity |
| Lumen Field | cost_nominal, opened, capacity |
| M&T Bank Stadium | cost_nominal, opened, capacity |
| MetLife Stadium | capacity, opened, cost_nominal |
| State Farm Stadium | capacity, opened |
| U.S. Bank Stadium | opened |
| Chase Field | opened |
| Wrigley Field | opened |
| Ball Arena | capacity, opened |
| Barclays Center | opened, capacity |
| Capital One Arena | opened |
| Crypto.com Arena | opened |
| Delta Center | cost_nominal |
| Frost Bank Center | opened |
| Kia Center | opened |
| Paycom Center | capacity, opened, cost_nominal |
| State Farm Arena | opened, capacity |
| Target Center | opened |
| TD Garden | capacity, cost_nominal |
| Toyota Center | opened |
| Xfinity Mobile Arena | opened, capacity |
| Climate Pledge Arena | capacity, opened, cost_nominal |
| Enterprise Center | opened |
| Grand Casino Arena | opened, cost_nominal |
| KeyBank Center | opened |
| Lenovo Center | opened, cost_nominal |
| Nationwide Arena | opened |
| PPG Paints Arena | capacity |
| T-Mobile Arena | capacity, opened, cost_nominal |
| Dignity Health Sports Park | opened, capacity |
| Energizer Park | capacity |
| Inter.co Stadium | opened, capacity |
| TQL Stadium | capacity, opened, cost_nominal |
| Michigan Stadium | capacity |
| Harry Turpin Stadium | capacity |
| Kibbie Dome | capacity |
| Panther Stadium at Blackshear Field | capacity, opened |
| Indian Wells Tennis Garden | capacity, opened |

## Excluded candidates

| Candidate | Reason | Source |
|---|---|---|
| WakeMed Soccer Park | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=WakeMed_Soccer_Park&oldid=1372250135) |
| Alfond Sports Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Alfond_Sports_Stadium&oldid=1372061841) |
| Alumni Memorial Field | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Alumni_Memorial_Field&oldid=1377263125) |
| Bank Independent Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bank_Independent_Stadium&oldid=1382895059) |
| Daytona Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Daytona_Stadium&oldid=1372079736) |
| Estes Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Estes_Stadium&oldid=1372149751) |
| Fortera Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Fortera_Stadium&oldid=1377857737) |
| Houck Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Houck_Stadium&oldid=1375945236) |
| Phil Simms Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Phil_Simms_Stadium&oldid=1379438531) |
| Rice–Totten Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Rice%E2%80%93Totten_Stadium&oldid=1380322210) |
| University Stadium (West Georgia) | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=University_Stadium_(West_Georgia)&oldid=1372247687) |
| William H. Greene Stadium | capacity 10,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=William_H._Greene_Stadium&oldid=1381712331) |
| Hughes Stadium (Morgan State) | capacity 10,001 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Hughes_Stadium_(Morgan_State)&oldid=1372204432) |
| Fifth Third Stadium | capacity 10,200 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Fifth_Third_Stadium&oldid=1381782063) |
| Moye Complex | capacity 10,200 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Moye_Complex&oldid=1381797986) |
| Crown Field at Andy Kerr Stadium | capacity 10,221 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Crown_Field_at_Andy_Kerr_Stadium&oldid=1381707777) |
| Campus Field | capacity 10,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Campus_Field&oldid=1372072405) |
| Greater Zion Stadium | capacity 10,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Greater_Zion_Stadium&oldid=1373436281) |
| Manning Field at John L. Guidry Stadium | capacity 10,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Manning_Field_at_John_L._Guidry_Stadium&oldid=1372083816) |
| UC Davis Health Stadium | capacity 10,743 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=UC_Davis_Health_Stadium&oldid=1378372635) |
| Toyota Stadium (Texas) | capacity 11,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Toyota_Stadium_(Texas)&oldid=1373278841) |
| Memorial Field (Dartmouth) | capacity 11,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Memorial_Field_(Dartmouth)&oldid=1372085750) |
| Welcome Stadium | capacity 11,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Welcome_Stadium&oldid=1372250934) |
| Wildcat Stadium (University of New Hampshire) | capacity 11,015 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Wildcat_Stadium_(University_of_New_Hampshire)&oldid=1382345257) |
| Mustang Memorial Field | capacity 11,075 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Mustang_Memorial_Field&oldid=1381747235) |
| Johnny Unitas Stadium | capacity 11,198 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Johnny_Unitas_Stadium&oldid=1372208118) |
| Walkup Skydome | capacity 11,230 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Walkup_Skydome&oldid=1373432838) |
| CPKC Stadium | capacity 11,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=CPKC_Stadium&oldid=1372071444) |
| Ernest Hawkins Field at Memorial Stadium | capacity 11,582 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Ernest_Hawkins_Field_at_Memorial_Stadium&oldid=1372086562) |
| Lynn Family Stadium | capacity 11,700 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Lynn_Family_Stadium&oldid=1379246377) |
| Anthony Field at Wildcat Stadium | capacity 12,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Anthony_Field_at_Wildcat_Stadium&oldid=1372063232) |
| Armstrong Stadium | capacity 12,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Armstrong_Stadium&oldid=1372064105) |
| ICCU Dome | capacity 12,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=ICCU_Dome&oldid=1379387229) |
| Martin Stadium (Northwestern University) | capacity 12,023 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Martin_Stadium_(Northwestern_University)&oldid=1383742506) |
| Alerus Center | capacity 12,283 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Alerus_Center&oldid=1383081037) |
| Kenneth P. LaValle Stadium | capacity 12,300 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Kenneth_P._LaValle_Stadium&oldid=1372209919) |
| Johnson Hagood Stadium | capacity 12,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Johnson_Hagood_Stadium&oldid=1380322339) |
| Villanova Stadium | capacity 12,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Villanova_Stadium&oldid=1375633901) |
| Zable Stadium | capacity 12,672 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Zable_Stadium&oldid=1372281219) |
| Memorial Stadium (Terre Haute, Indiana) | capacity 12,764 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Memorial_Stadium_(Terre_Haute%2C_Indiana)&oldid=1372085928) |
| Gibbs Stadium | capacity 13,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Gibbs_Stadium&oldid=1372182578) |
| Christy Mathewson–Memorial Stadium | capacity 13,100 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Christy_Mathewson%E2%80%93Memorial_Stadium&oldid=1381707685) |
| Fisher Stadium | capacity 13,132 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Fisher_Stadium&oldid=1372280221) |
| Hancock Stadium | capacity 13,391 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Hancock_Stadium&oldid=1372185215) |
| Stewart Stadium | capacity 13,441 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Stewart_Stadium&oldid=1381711694) |
| Robert and Janet Vackar Stadium | capacity 13,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Robert_and_Janet_Vackar_Stadium&oldid=1383636514) |
| Bob Waters Field at E. J. Whitmire Stadium | capacity 13,742 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bob_Waters_Field_at_E._J._Whitmire_Stadium&oldid=1372069022) |
| Bowers Stadium | capacity 14,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bowers_Stadium&oldid=1381707357) |
| Rhodes Stadium | capacity 14,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Rhodes_Stadium&oldid=1381710822) |
| Hope Coliseum | capacity 14,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Hope_Coliseum&oldid=1372204048) |
| Louis Armstrong Stadium | capacity 14,053 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Louis_Armstrong_Stadium&oldid=1372214950) |
| Desert Financial Arena | capacity 14,198 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Desert_Financial_Arena&oldid=1376383420) |
| Memorial Gymnasium (Vanderbilt University) | capacity 14,316 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Memorial_Gymnasium_(Vanderbilt_University)&oldid=1375844366) |
| Drake Stadium (Drake University) | capacity 14,557 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Drake_Stadium_(Drake_University)&oldid=1382114430) |
| Homer Bryce Stadium | capacity 14,575 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Homer_Bryce_Stadium&oldid=1372203897) |
| John Paul Jones Arena | capacity 14,623 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=John_Paul_Jones_Arena&oldid=1375317204) |
| The Barn (arena) | capacity 14,625 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=The_Barn_(arena)&oldid=1381687124) |
| Lawrence Joel Veterans Memorial Coliseum | capacity 14,665 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Lawrence_Joel_Veterans_Memorial_Coliseum&oldid=1383748958) |
| McKale Center | capacity 14,688 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=McKale_Center&oldid=1381709879) |
| Breslin Student Events Center | capacity 14,797 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Breslin_Student_Events_Center&oldid=1372069974) |
| Mackey Arena | capacity 14,876 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Mackey_Arena&oldid=1380254326) |
| Carver–Hawkeye Arena | capacity 14,998 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Carver%E2%80%93Hawkeye_Arena&oldid=1372073321) |
| Arthur J. Rooney Athletic Field | capacity 2,200 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Arthur_J._Rooney_Athletic_Field&oldid=1372064242) |
| Saxon Stadium | capacity 2,300 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Saxon_Stadium&oldid=1372228771) |
| W. B. Mason Stadium | capacity 2,400 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=W._B._Mason_Stadium&oldid=1373651275) |
| Joe Walton Stadium | capacity 3,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Joe_Walton_Stadium&oldid=1378529467) |
| Wagner College Stadium | capacity 3,700 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Wagner_College_Stadium&oldid=1381752716) |
| Buccaneer Field | capacity 4,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Buccaneer_Field&oldid=1372070684) |
| Duane Stadium | capacity 4,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Duane_Stadium&oldid=1372279457) |
| Kessler Stadium | capacity 4,200 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Kessler_Stadium&oldid=1372210013) |
| Beirne Stadium | capacity 4,400 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Beirne_Stadium&oldid=1378529950) |
| Cooper Field | capacity 4,418 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Cooper_Field&oldid=1372077709) |
| Brown Field (Valparaiso University) | capacity 5,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Brown_Field_(Valparaiso_University)&oldid=1374068702) |
| Husky Stadium (Houston Christian University) | capacity 5,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Husky_Stadium_(Houston_Christian_University)&oldid=1381736433) |
| Ralph F. DellaCamera Stadium | capacity 5,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Ralph_F._DellaCamera_Stadium&oldid=1372223678) |
| Tenney Stadium at Leonidoff Field | capacity 5,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Tenney_Stadium_at_Leonidoff_Field&oldid=1381751813) |
| Arute Field | capacity 5,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Arute_Field&oldid=1372064291) |
| Barker–Lane Stadium | capacity 5,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Barker%E2%80%93Lane_Stadium&oldid=1381755245) |
| Bud and Jackie Sellick Bowl | capacity 5,647 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bud_and_Jackie_Sellick_Bowl&oldid=1372070736) |
| Bethpage Federal Credit Union Stadium | capacity 6,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bethpage_Federal_Credit_Union_Stadium&oldid=1372068016) |
| Gayle and Tom Benson Stadium | capacity 6,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Gayle_and_Tom_Benson_Stadium&oldid=1372181963) |
| Richardson Stadium (Davidson) | capacity 6,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Richardson_Stadium_(Davidson)&oldid=1372224980) |
| Spec Martin Stadium | capacity 6,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Spec_Martin_Stadium&oldid=1372231789) |
| Torero Stadium | capacity 6,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Torero_Stadium&oldid=1372244725) |
| Bailey Memorial Stadium | capacity 6,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bailey_Memorial_Stadium&oldid=1372065925) |
| Meade Stadium | capacity 6,555 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Meade_Stadium&oldid=1372085286) |
| Pete Hanna Stadium | capacity 6,700 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Pete_Hanna_Stadium&oldid=1372213902) |
| Coffey Field | capacity 7,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Coffey_Field&oldid=1381740512) |
| Alumni Stadium (Delaware State) | capacity 7,193 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Alumni_Stadium_(Delaware_State)&oldid=1372062547) |
| Strawberry Stadium | capacity 7,408 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Strawberry_Stadium&oldid=1372236784) |
| Harlen C. Hunter Stadium | capacity 7,450 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Harlen_C._Hunter_Stadium&oldid=1381782926) |
| Graham Stadium | capacity 7,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Graham_Stadium&oldid=1372183526) |
| Hillsboro Stadium | capacity 7,600 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Hillsboro_Stadium&oldid=1378908551) |
| William B. Greene Jr. Stadium | capacity 7,694 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=William_B._Greene_Jr._Stadium&oldid=1372251935) |
| E. Claiborne Robins Stadium | capacity 8,217 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=E._Claiborne_Robins_Stadium&oldid=1381756171) |
| Bob Ford Field at Tom & Mary Casey Stadium | capacity 8,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Bob_Ford_Field_at_Tom_%26_Mary_Casey_Stadium&oldid=1381796142) |
| Eccles Coliseum | capacity 8,500 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Eccles_Coliseum&oldid=1373434457) |
| Nottingham Field | capacity 8,533 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Nottingham_Field&oldid=1379549690) |
| Roos Field | capacity 8,600 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Roos_Field&oldid=1383723653) |
| Ernest W. Spangler Stadium | capacity 9,000 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=Ernest_W._Spangler_Stadium&oldid=1372086564) |
| DakotaDome | capacity 9,100 < 15,000 | [source](https://en.wikipedia.org/w/index.php?title=DakotaDome&oldid=1383079810) |
| BMO Stadium | no sourced capacity | [source](https://en.wikipedia.org/w/index.php?title=BMO_Stadium&oldid=1381605973) |
| Martin Stadium (disambiguation) | no sourced capacity | [source](https://en.wikipedia.org/w/index.php?title=Martin_Stadium_(disambiguation)&oldid=1384122395) |
| Road America | no sourced capacity | [source](https://en.wikipedia.org/w/index.php?title=Road_America&oldid=1383952346) |
| Laguna Seca | no sourced capacity | [source](https://en.wikipedia.org/w/index.php?title=Laguna_Seca&oldid=1383421210) |
| PenAir Field | no Wikipedia article found | source |
| Rogers Centre | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Rogers_Centre&oldid=1383851466) |
| Scotiabank Arena | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Scotiabank_Arena&oldid=1383864101) |
| Bell Centre | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Bell_Centre&oldid=1382832919) |
| Canada Life Centre | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Canada_Life_Centre&oldid=1379717047) |
| Canadian Tire Centre | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Canadian_Tire_Centre&oldid=1381913177) |
| Rogers Arena | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Rogers_Arena&oldid=1379918849) |
| Rogers Place | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Rogers_Place&oldid=1380110483) |
| Scotiabank Saddledome | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Scotiabank_Saddledome&oldid=1381667086) |
| BC Place | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=BC_Place&oldid=1383403810) |
| BMO Field | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=BMO_Field&oldid=1377704191) |
| Saputo Stadium | outside the US (by coordinates) | [source](https://en.wikipedia.org/w/index.php?title=Saputo_Stadium&oldid=1372228447) |
| Coronado Street Course | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Coronado_Street_Course&oldid=1375912777) |
| St. Petersburg Street Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=St._Petersburg_Street_Circuit&oldid=1383181037) |
| Arlington Street Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Arlington_Street_Circuit&oldid=1383752044) |
| Long Beach Street Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Long_Beach_Street_Circuit&oldid=1381878448) |
| Detroit Street Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Detroit_Street_Circuit&oldid=1376815173) |
| Markham Street Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Markham_Street_Circuit&oldid=1381595275) |
| Washington Street Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Washington_Street_Circuit&oldid=1383952136) |
| Miami International Autodrome | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Miami_International_Autodrome&oldid=1379329992) |
| Las Vegas Strip Circuit | temporary street circuit (scope rule) | [source](https://en.wikipedia.org/w/index.php?title=Las_Vegas_Strip_Circuit&oldid=1376988769) |

