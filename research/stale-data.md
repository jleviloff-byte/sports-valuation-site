# Stale data audit

Generated 2026-09-27 by `research/tools/figure-audit.mjs`. Every figure the site shows traces to the newest loaded Forbes list per league where one exists (NFL 2026, MLB 2026, NBA 2025, NHL 2024, EPL top 11 from the 2026 soccer list). Teams below keep an older, typed-in figure and show its year.

## League status

| League | Forbes export | Teams on export | Teams on typed figures |
|---|---|---|---|
| NFL | loaded | 32 | 0 |
| NBA | loaded | 30 | 0 |
| MLB | loaded | 30 | 0 |
| NHL | loaded | 32 | 0 |
| MLS | no-components | 0 | 30 |
| EPL | no-components | 11 | 9 |

## Teams without a loaded Forbes figure

These keep their last Forbes figure with the year shown on the profile KPI. No MLS export exists (`research/forbes-raw/mls.json` was not present; every MLS list year returned empty when saved by hand).

| League | Team | Headline shown | Year | Source | Revenue shown |
|---|---|---|---|---|---|
| MLS | Atlanta United FC | $1B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $105M (2023, Forbes / SBJ (typed)) |
| MLS | Charlotte FC | $0.78B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $75M (2023, Forbes (typed)) |
| MLS | Chicago Fire FC | $0.72B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $60M (2023, Forbes (typed)) |
| MLS | FC Cincinnati | $0.78B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $95M (2023, Forbes / SBJ (typed)) |
| MLS | Columbus Crew SC | $0.9B | 2025 | Edwards 10% stake transaction (typed) | $85M (2023, Forbes (typed)) |
| MLS | D.C. United | $0.74B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $65M (2023, Forbes (typed)) |
| MLS | Inter Miami CF | $1.5B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $200M (2023, Forbes / SBJ (post-Messi jump) (typed)) |
| MLS | CF Montréal | $0.43B | 2025 | Forbes / Sportico (last in MLS) (typed) | $45M (2023, Forbes (typed)) |
| MLS | Nashville SC | $0.78B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $75M (2023, Forbes (typed)) |
| MLS | New England Revolution | $0.72B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $60M (2023, Forbes (typed)) |
| MLS | New York City FC | $0.85B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $90M (2023, Forbes (typed)) |
| MLS | New York Red Bulls | $0.78B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $70M (2023, Forbes (typed)) |
| MLS | Orlando City SC | $0.75B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $65M (2023, Forbes (typed)) |
| MLS | Philadelphia Union | $0.7B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $75M (2023, Forbes (typed)) |
| MLS | Toronto FC | $0.78B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $80M (2023, Forbes (typed)) |
| MLS | Austin FC | $0.95B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $90M (2024, Forbes (typed)) |
| MLS | Colorado Rapids | $0.62B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $50M (2023, Forbes (typed)) |
| MLS | FC Dallas | $0.7B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $65M (2023, Forbes (typed)) |
| MLS | Houston Dynamo FC | $0.7B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $55M (2023, Forbes (typed)) |
| MLS | LA Galaxy | $1.05B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $102M (2024, Sportico/Forbes (typed)) |
| MLS | Los Angeles FC | $1.32B | 2024 | Sportico May 2025; Joe Tsai exit Q1 2026 implied $1.25B for full club (typed) | $167M (2024, Sportico/Forbes (highest MLS revenue) (typed)) |
| MLS | Minnesota United FC | $0.7B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $60M (2023, Forbes (typed)) |
| MLS | Portland Timbers | $0.78B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $65M (2023, Forbes (typed)) |
| MLS | Real Salt Lake | $0.66B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $56M (2023, Forbes (typed)) |
| MLS | San Diego FC | $0.85B | 2025 | Sportico Oct 2025 (expansion) (typed May 2026) | $50M (2025, Sportico estimate inaugural year (typed)) |
| MLS | San Jose Earthquakes | $0.6B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $48M (2023, Forbes (typed)) |
| MLS | Seattle Sounders FC | $0.85B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $95M (2023, Forbes (typed)) |
| MLS | Sporting Kansas City | $0.7B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $65M (2023, Forbes (typed)) |
| MLS | St. Louis City SC | $0.85B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $70M (2023, Forbes (inaugural year) (typed)) |
| MLS | Vancouver Whitecaps FC | $0.6B | 2025 | Forbes MLS Nov 2025 (typed May 2026) | $25M (2023, Forbes (lowest in MLS) (typed)) |
| EPL | West Ham United | $1.25B | 2025 | Forbes Soccer May 2025 (typed May 2026) | $349M (2024, West Ham 2023-24 financial results / Forbes ($56M matchday + $82M commercial + $211M broadcast) (typed)) |
| EPL | Crystal Palace | $0.55B | 2025 | Sportico Sep 2025 (typed May 2026) | $215M (2024, Companies House / Deloitte Football Money League (typed)) |
| EPL | Wolverhampton Wanderers | $0.8B | 2025 | Sportico Sep 2025 (typed May 2026) | $224M (2024, Companies House — £177.7M for FY ending May 2024 (typed)) |
| EPL | AFC Bournemouth | $0.42B | 2024 | Forbes Aug 2025; CNBC Global Soccer 2025 (typed) | $196M (2024, Companies House — projected $172M+ in 2023, ~£155M in 2024 (typed)) |
| EPL | Brentford | $0.45B | 2025 | Sportico Sep 2025 (typed May 2026) | $220M (2024, Brentford FC 2024/25 financial results (typed)) |
| EPL | Nottingham Forest | $0.55B | 2025 | Sportico Sep 2025 (typed May 2026) | $250M (2024, Deloitte Football Money League / Forbes (typed)) |
| EPL | Ipswich Town | $0.35B | 2025 | Athletic / Matt Slater Portman Holdings restructuring valuation (typed) | $175M (2024, Deloitte / club accounts (first EPL season uplift) (typed)) |
| EPL | Leicester City | $0.4B | 2025 | estimate post-second-relegation + PSR breach (typed) | $135M (2024, Leicester City FC FY24 financial accounts (post-relegation drop from £177M to £105M) (typed)) |
| EPL | Southampton | $0.45B | 2025 | market estimate post-second-relegation (typed) | $175M (2024, Deloitte Football Money League / club accounts (EPL season) (typed)) |

## Typed figures superseded by the export

126 teams had typed valuation-history years that differ from the Forbes export for the same year; the export now wins for those years (`enrichments.js` layer 4).

- NFL Buffalo Bills: 2019: 1.6→1.9
- NFL Miami Dolphins: 2020: 3.02→2.9; 2021: 3.53→3.42; 2024: 7.1→6.2
- NFL Baltimore Ravens: 2019: 2.5→2.75; 2020: 2.75→2.975; 2021: 3.1→3.4; 2024: 6.03→5
- NFL Cincinnati Bengals: 2019: 1.8→2; 2021: 2.2→2.275; 2024: 5.25→4.1
- NFL Cleveland Browns: 2021: 2.575→2.6; 2022: 3.725→3.85; 2024: 6.02→5.15
- NFL Pittsburgh Steelers: 2020: 3.1→3; 2021: 3.45→3.43; 2024: 6.08→5.3
- NFL Houston Texans: 2019: 3.3→3.1; 2020: 3.7→3.3; 2021: 3.3→3.7; 2024: 6.01→6.1
- NFL Indianapolis Colts: 2019: 2.85→2.65; 2021: 2.9→3.25; 2024: 4.99→4.8
- NFL Jacksonville Jaguars: 2019: 2.45→2.325; 2020: 2.6→2.45; 2021: 2.5→2.8; 2023: 4.05→4
- NFL Tennessee Titans: 2019: 2.3→2.15; 2020: 2.45→2.3; 2021: 2.3→2.625; 2023: 4.37→4.4; 2024: 6.01→4.9
- NFL Denver Broncos: 2019: 3.2→3; 2024: 6.2→5.5
- NFL Kansas City Chiefs: 2019: 2.5→2.3
- NFL Las Vegas Raiders: 2019: 3.1→2.9
- NFL Los Angeles Chargers: 2019: 2.6→2.5; 2021: 2.9→2.92; 2024: 5.83→5.1
- NFL Dallas Cowboys: 2019: 5→5.5; 2023: 9.2→9
- NFL New York Giants: 2024: 7.8→7.3
- NFL Chicago Bears: 2021: 4.1→4.075
- NFL Detroit Lions: 2019: 1.9→1.95; 2022: 3.1→3.05
- NFL Green Bay Packers: 2019: 2.63→2.85; 2020: 3.1→3.05; 2023: 5.6→4.6; 2024: 6.65→5.6
- NFL Minnesota Vikings: 2019: 2.4→2.7; 2022: 3.93→3.925; 2024: 5.3→5.05
- NFL Atlanta Falcons: 2019: 2.6→2.755; 2020: 2.755→2.875; 2021: 2.88→3.2; 2024: 5.9→5.2
- NFL Carolina Panthers: 2020: 2.4→2.55; 2021: 2.81→2.91; 2024: 5.13→4.5
- NFL New Orleans Saints: 2019: 2.08→2.275; 2020: 2.08→2.475
- NFL Tampa Bay Buccaneers: 2019: 2.04→2.2; 2024: 5.5→5.4
- NFL Arizona Cardinals: 2019: 2.15→2.25; 2021: 2.69→2.65; 2022: 3.17→3.27
- NFL San Francisco 49ers: 2019: 3.05→3.5; 2024: 6.86→6.8
- NFL Seattle Seahawks: 2020: 3.1→3.075; 2023: 4.8→5; 2024: 5.59→5.45
- NBA Boston Celtics: 2022: 4.1→4; 2024: 6.1→6
- NBA Brooklyn Nets: 2019: 2.35→2.5; 2020: 2.5→2.65; 2022: 3.2→3.5; 2023: 3.5→3.85; 2024: 3.6→4.8
- NBA New York Knicks: 2019: 4→4.6; 2020: 4.6→5; 2021: 5.4→5.8; 2023: 6.3→6.6
- NBA Philadelphia 76ers: 2020: 2.1→2.075; 2021: 2.8→2.45; 2022: 3.5→3.15
- NBA Toronto Raptors: 2019: 1.8→2.1; 2020: 2→2.15; 2021: 2.6→2.475; 2022: 3→3.1; 2023: 3.6→4.1; 2024: 4.1→4.4
- NBA Chicago Bulls: 2020: 3.1→3.3; 2021: 3.5→3.65
- NBA Cleveland Cavaliers: 2019: 1.4→1.51; 2020: 1.35→1.56; 2021: 1.5→1.65; 2022: 2.1→2.05; 2023: 2.9→3.35
- NBA Detroit Pistons: 2019: 1.2→1.45; 2020: 1.2→1.45; 2021: 1.35→1.58; 2022: 1.6→1.9; 2023: 1.8→3.075; 2024: 2.4→3.4
- NBA Indiana Pacers: 2019: 1.4→1.525; 2020: 1.45→1.55; 2021: 1.58→1.67; 2022: 1.95→1.8; 2023: 3→2.9
- NBA Atlanta Hawks: 2019: 1.55→1.52; 2020: 1.6→1.52; 2021: 1.8→1.68; 2022: 2.1→1.975; 2023: 2.45→3.325; 2024: 2.8→3.8
- NBA Charlotte Hornets: 2020: 1.55→1.5; 2021: 1.68→1.575; 2022: 1.95→1.7; 2024: 3.39→3.3
- NBA Miami Heat: 2019: 1.71→1.95; 2020: 1.8→2; 2021: 2→2.3; 2022: 2.8→3; 2023: 3.35→3.9; 2024: 4→4.25
- NBA Orlando Magic: 2019: 1.5→1.43; 2020: 1.55→1.46; 2021: 1.65→1.64; 2022: 1.95→1.85; 2023: 2.5→2.95
- NBA Washington Wizards: 2019: 1.82→1.75; 2020: 1.9→1.8; 2021: 2.1→1.925; 2022: 2.8→2.5
- NBA Denver Nuggets: 2020: 1.85→1.65; 2021: 2.05→1.725; 2022: 2.4→1.93; 2023: 3.05→3.375; 2024: 3.15→3.9
- NBA Minnesota Timberwolves: 2019: 1.35→1.375; 2020: 1.5→1.4; 2022: 1.85→1.67; 2023: 2.25→2.5; 2024: 3.29→3.1
- NBA Oklahoma City Thunder: 2019: 1.55→1.575; 2020: 1.7→1.575; 2021: 1.85→1.63; 2022: 2.4→1.875; 2023: 2.65→3.05; 2024: 3.55→3.65
- NBA Portland Trail Blazers: 2019: 1.8→1.85; 2021: 2.1→2.05; 2022: 2.4→2.1; 2023: 3→3.08; 2024: 3.6→3.5
- NBA Utah Jazz: 2020: 1.95→1.66; 2021: 2→1.75; 2022: 2.25→2.025; 2023: 3.3→3.09; 2024: 3.75→3.55
- NBA Golden State Warriors: 2019: 3.5→4.3; 2020: 4.3→4.7; 2024: 9.4→8.8
- NBA Los Angeles Clippers: 2019: 2.4→2.6; 2020: 2.5→2.75; 2021: 3→3.3; 2022: 3.75→3.9; 2023: 4.7→4.65; 2024: 7.5→5.5
- NBA Los Angeles Lakers: 2020: 4.4→4.6; 2021: 4.6→5.5; 2022: 4.65→5.9; 2023: 5.52→6.4; 2024: 7.09→7.1
- NBA Phoenix Suns: 2019: 1.4→1.625; 2020: 1.4→1.7; 2022: 1.8→2.7; 2024: 4.1→4.3
- NBA Sacramento Kings: 2019: 1.58→1.775; 2020: 1.7→1.825; 2021: 1.9→2; 2022: 2.3→2.03; 2023: 3.2→3.33; 2024: 4.45→3.7
- NBA Dallas Mavericks: 2019: 1.9→2.4; 2020: 2→2.45; 2021: 2.35→2.7; 2022: 2→3.3; 2023: 3.3→4.5; 2024: 4.5→4.7
- NBA Houston Rockets: 2019: 2.5→2.475; 2020: 2.4→2.5; 2021: 2.5→2.75; 2022: 1.9→3.2; 2023: 3.3→4.4; 2024: 4.1→4.9
- NBA Memphis Grizzlies: 2022: 1.6→1.65; 2023: 1.9→2.4; 2024: 2.5→3
- NBA New Orleans Pelicans: 2019: 1.4→1.35; 2021: 1.45→1.525; 2022: 1.5→1.6; 2023: 1.75→2.55; 2024: 2.2→3.05
- NBA San Antonio Spurs: 2019: 1.6→1.8; 2020: 1.55→1.85; 2021: 1.65→1.98; 2022: 1.6→2; 2023: 1.85→3.25; 2024: 2.35→3.85
- NBA Milwaukee Bucks: 2019: 1.63→1.58; 2020: 1.78→1.625; 2021: 2.1→1.9; 2022: 2.85→2.3
- MLB New York Yankees: 2019: 5→4.6; 2020: 5.25→5; 2021: 5.7→5.25; 2024: 8.2→7.55
- MLB Boston Red Sox: 2019: 3.3→3.2; 2020: 3.35→3.3; 2021: 3.7→3.465; 2022: 4.1→3.9; 2023: 4.35→4.5; 2024: 4.8→4.5
- MLB Toronto Blue Jays: 2019: 1.35→1.5; 2020: 1.5→1.625; 2021: 1.7→1.675; 2022: 2→1.78; 2024: 2.15→2.1
- MLB Tampa Bay Rays: 2019: 0.9→1.01; 2020: 0.95→1.05; 2021: 1→1.055; 2022: 1.2→1.1; 2023: 1.2→1.25
- MLB Baltimore Orioles: 2019: 1.3→1.28; 2020: 1.35→1.4; 2021: 1.45→1.43; 2022: 1.5→1.375; 2023: 1.6→1.713
- MLB Chicago White Sox: 2019: 1.65→1.6; 2020: 1.7→1.65; 2021: 1.9→1.685; 2022: 2.1→1.76; 2023: 2.1→2.05
- MLB Cleveland Guardians: 2019: 1.05→1.15; 2020: 1.1→1.15; 2021: 1.15→1.16; 2023: 1.35→1.3; 2024: 1.4→1.35
- MLB Detroit Tigers: 2019: 1.2→1.25; 2020: 1.225→1.25; 2021: 1.275→1.26; 2022: 1.37→1.4; 2024: 1.55→1.45
- MLB Kansas City Royals: 2019: 1→1.025; 2021: 1.1→1.06; 2022: 1.25→1.11; 2023: 1.35→1.2; 2024: 1.3→1.225
- MLB Minnesota Twins: 2019: 1.15→1.2; 2020: 1.2→1.3; 2021: 1.25→1.325; 2022: 1.35→1.39; 2023: 1.45→1.39; 2024: 1.5→1.46
- MLB Houston Astros: 2019: 1.6→1.775; 2020: 1.65→1.85; 2021: 1.8→1.87; 2022: 2.1→1.98; 2023: 2.2→2.25; 2024: 2.8→2.425
- MLB Los Angeles Angels: 2020: 1.9→1.975; 2021: 2→2.025; 2023: 2.5→2.7; 2024: 2.75→2.7
- MLB Oakland Athletics: 2019: 1→1.1; 2020: 1→1.1; 2021: 1.05→1.125; 2022: 1.08→1.18; 2023: 1.2→1.18; 2024: 1.8→1.2
- MLB Seattle Mariners: 2019: 1.25→1.575; 2020: 1.2→1.6; 2021: 1.35→1.63; 2022: 1.5→1.7; 2023: 1.95→2.2
- MLB Texas Rangers: 2019: 1.6→1.65; 2020: 1.65→1.75; 2021: 1.75→1.785; 2022: 1.9→2.05; 2023: 2.2→2.225; 2024: 2.45→2.4
- MLB Atlanta Braves: 2019: 1.625→1.7; 2020: 1.5→1.8; 2021: 1.75→1.875; 2022: 2→2.1; 2023: 2.35→2.6
- MLB Miami Marlins: 2019: 0.98→1; 2022: 1→0.99
- MLB New York Mets: 2020: 2.1→2.4; 2021: 2.4→2.45; 2022: 2.9→2.65; 2024: 3.2→3
- MLB Philadelphia Phillies: 2019: 1.65→1.85; 2020: 1.55→2; 2021: 1.8→2.05; 2022: 2.1→2.3; 2023: 2.45→2.575; 2024: 2.93→2.925
- MLB Washington Nationals: 2019: 1.675→1.75; 2020: 1.59→1.9; 2021: 1.7→1.925; 2022: 1.8→2; 2023: 1.93→2
- MLB Chicago Cubs: 2019: 3.2→3.1; 2020: 3.1→3.2; 2021: 3.4→3.36; 2022: 3.9→3.8
- MLB Cincinnati Reds: 2019: 1.025→1.05; 2020: 0.94→1.075; 2021: 1→1.085; 2022: 1.1→1.19; 2023: 1.2→1.19
- MLB Milwaukee Brewers: 2019: 1.03→1.175; 2020: 0.975→1.2; 2021: 1.025→1.22; 2022: 1.2→1.28; 2023: 1.4→1.605; 2024: 1.61→1.605
- MLB Pittsburgh Pirates: 2019: 1.07→1.275; 2020: 1.2→1.26; 2021: 1.25→1.285
- MLB St. Louis Cardinals: 2019: 1.9→2.1; 2020: 2→2.2; 2021: 2.2→2.245; 2022: 2.35→2.45; 2023: 2.5→2.55
- MLB San Francisco Giants: 2020: 3.2→3.1; 2021: 3.5→3.175; 2022: 3.7→3.5; 2023: 3.8→3.7
- MLB San Diego Padres: 2019: 1.05→1.35; 2020: 1.1→1.45; 2021: 1.4→1.5; 2022: 1.65→1.575; 2023: 1.78→1.75; 2024: 1.95→1.78
- MLB Colorado Rockies: 2019: 1.1→1.225; 2020: 1.15→1.275; 2022: 1.4→1.385
- MLB Arizona Diamondbacks: 2019: 1.05→1.29; 2020: 1.1→1.29; 2021: 1.2→1.32; 2022: 1.3→1.38; 2023: 1.45→1.38; 2024: 1.6→1.425
- NHL Boston Bruins: 2019: 0.95→1; 2020: 1.05→1; 2021: 1.2→1.3; 2022: 1.5→1.4; 2024: 2.75→2.7
- NHL Buffalo Sabres: 2019: 0.6→0.4; 2020: 0.63→0.385; 2021: 0.7→0.5; 2022: 0.75→0.61; 2024: 0.85→1.1
- NHL Detroit Red Wings: 2020: 0.82→0.775; 2021: 0.95→0.99; 2022: 1.1→1.03; 2023: 1.5→1.2; 2024: 2.1→2.125
- NHL Florida Panthers: 2019: 0.5→0.31; 2020: 0.5→0.295; 2021: 0.6→0.45; 2022: 0.7→0.55; 2023: 0.85→0.775
- NHL Montreal Canadiens: 2019: 1.3→1.34; 2020: 1.4→1.34; 2021: 1.7→1.6; 2022: 2→1.85; 2023: 2.5→2.3; 2024: 3.1→3
- NHL Ottawa Senators: 2019: 0.52→0.445; 2020: 0.5→0.43; 2021: 0.55→0.525; 2022: 0.65→0.8; 2024: 1.1→1.15
- NHL Tampa Bay Lightning: 2019: 0.65→0.47; 2020: 0.75→0.47; 2021: 1→0.65; 2022: 1.15→1; 2023: 1.3→1.25
- NHL Toronto Maple Leafs: 2019: 1.35→1.5; 2021: 1.9→1.8; 2022: 2.1→2; 2024: 4.4→3.8
- NHL Carolina Hurricanes: 2019: 0.43→0.45; 2020: 0.47→0.44; 2021: 0.57→0.55; 2023: 1.25→0.825; 2024: 2→1.25
- NHL Columbus Blue Jackets: 2019: 0.44→0.325; 2020: 0.47→0.31; 2021: 0.56→0.475; 2023: 0.85→0.765
- NHL New Jersey Devils: 2020: 0.6→0.53; 2021: 0.72→0.775; 2022: 0.85→0.96; 2023: 1.15→1.45; 2024: 1.55→2.1
- NHL New York Islanders: 2019: 0.54→0.52; 2020: 0.6→0.52; 2021: 0.7→0.95; 2022: 0.85→1.02; 2023: 1.15→1.55; 2024: 1.55→1.9
- NHL New York Rangers: 2020: 1.8→1.65
- NHL Philadelphia Flyers: 2019: 0.89→0.825; 2020: 0.95→0.8; 2021: 1→1.2; 2023: 1.45→1.65; 2024: 1.65→2.3
- NHL Pittsburgh Penguins: 2019: 0.67→0.665; 2020: 0.73→0.65; 2021: 0.78→0.9; 2022: 0.87→0.99; 2023: 1.37→1.175
- NHL Washington Capitals: 2019: 0.9→0.775; 2020: 1→0.75; 2021: 1.1→0.93; 2023: 1.8→1.6; 2024: 2.1→2.15
- NHL Utah Hockey Club: 2019: 0.42→0.3; 2020: 0.4→0.285; 2021: 0.43→0.4; 2022: 0.43→0.45
- NHL Chicago Blackhawks: 2019: 1→1.085; 2020: 1→1.085; 2021: 1.25→1.4; 2022: 1.8→1.5; 2023: 2.05→1.875
- NHL Colorado Avalanche: 2019: 0.69→0.475; 2020: 0.7→0.465; 2022: 0.9→0.86; 2024: 1.45→1.7
- NHL Dallas Stars: 2019: 0.75→0.6; 2020: 0.75→0.575; 2021: 0.8→0.72; 2022: 1.15→0.925; 2023: 1.45→1.08; 2024: 1.94→2
- NHL Minnesota Wild: 2019: 0.68→0.51; 2020: 0.68→0.5; 2021: 0.72→0.675; 2022: 0.94→0.85; 2023: 1.25→1.05; 2024: 1.6→1.55
- NHL Nashville Predators: 2019: 0.64→0.46; 2020: 0.64→0.435; 2021: 0.7→0.6; 2022: 0.78→0.81; 2023: 0.99→0.975; 2024: 1.3→1.5
- NHL St. Louis Blues: 2019: 0.5→0.53; 2020: 0.55→0.51; 2021: 0.65→0.64; 2022: 0.87→0.88; 2023: 1.14→0.99; 2024: 1.53→1.45
- NHL Winnipeg Jets: 2019: 0.55→0.42; 2020: 0.55→0.405; 2021: 0.62→0.575; 2022: 0.73→0.65; 2023: 0.87→0.78
- NHL Anaheim Ducks: 2019: 0.61→0.48; 2020: 0.63→0.46; 2021: 0.685→0.62; 2022: 0.74→0.725; 2023: 0.82→0.925; 2024: 0.925→1.3
- NHL Calgary Flames: 2019: 0.82→0.5; 2020: 0.875→0.48; 2021: 0.99→0.68; 2022: 1.1→0.855; 2023: 1.22→1.1; 2024: 1.4→1.65
- NHL Edmonton Oilers: 2019: 0.94→0.575; 2020: 1→0.55; 2022: 1.38→1.275; 2023: 1.96→1.85
- NHL Los Angeles Kings: 2019: 1.35→0.85; 2020: 1.45→0.825; 2021: 1.65→1.025; 2022: 2→1.3; 2023: 2.4→2; 2024: 2.85→2.9
- NHL San Jose Sharks: 2019: 0.59→0.54; 2020: 0.605→0.515; 2021: 0.67→0.625; 2022: 0.72→0.74; 2023: 0.82→0.9; 2024: 1.05→1.35
- NHL Seattle Kraken: 2021: 0.9→0.875; 2022: 1.23→1.05; 2023: 1.42→1.225
- NHL Vancouver Canucks: 2019: 0.88→0.74; 2020: 0.96→0.725; 2021: 1.1→0.825; 2022: 1.38→1.01; 2023: 1.55→1.325; 2024: 1.94→1.95
- NHL Vegas Golden Knights: 2019: 0.67→0.58; 2020: 0.74→0.57; 2021: 0.82→0.71; 2022: 1.05→0.965; 2023: 1.48→1.125
- EPL Manchester City: 2024: 5.3→5.1
- EPL Arsenal: 2022: 2.83→2.05; 2024: 3.42→2.6
- EPL Chelsea: 2022: 5.4→3.1; 2024: 3.25→3.125
- EPL Tottenham Hotspur: 2019: 1.65→1.624; 2022: 2.5→2.35
- EPL Newcastle United: 2025: 1.05→1.1
- EPL Aston Villa: 2022: 0.56→0.75; 2023: 0.62→0.756; 2024: 0.667→0.8; 2025: 1.27→0.9
- EPL Brighton & Hove Albion: 2025: 0.8→0.86
- EPL Fulham: 2024: 0.85→0.79

## Figures no longer rendered from typed text

- `ownership.currentValuation` and `ownership.impliedReturn` (typed strings from May 2026) are no longer displayed; the profile computes current value from the headline and the return from `acquisitionPrice` / `acquisitionYear`.
- `revenue` and `operatingIncome` for export teams come from the export; the typed `revenue` object is kept as `revenueTyped` for reference only.
- `ownerNetWorth` remains a typed string; the refresh overlay updates it only where an agent sourced a 2026 figure. It is labeled as an estimate on the profile.
