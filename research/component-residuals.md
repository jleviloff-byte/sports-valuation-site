# Forbes component residuals (internal)

Generated 2026-09-27 by `research/tools/component-model.mjs`. Nothing in this file renders on the site; it exists so Josh can decide where commentary is warranted.

Method: within each league, OLS of the Forbes component on standardized proxies (missing proxies median-imputed; a predictor is dropped when more than half the league lacks it). Residual = Forbes minus fitted. z = residual / residual SD. Sport is compared with the league median instead (flag beyond ±5%). Sample sizes are 30 to 32, so one outlier moves the line; R² is reported so the weak models are obvious.

## NFL (Forbes list 2026)

### Market · R² 0.20 · n=32

Predictors: metro population; TV households; household income; local competition.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Dallas Cowboys | $3.79B | $1.50B | +$2.29B | 4.57 |
| Los Angeles Chargers | $933M | $1.58B | -$648M | -1.29 |
| Arizona Cardinals | $795M | $1.37B | -$572M | -1.14 |
| Las Vegas Raiders | $1.40B | $923M | +$474M | 0.94 |
| Atlanta Falcons | $1.04B | $1.49B | -$454M | -0.90 |
| Green Bay Packers | $1.34B | $913M | +$425M | 0.85 |
| Los Angeles Rams | $1.94B | $1.58B | +$363M | 0.72 |
| Jacksonville Jaguars | $658M | $1.00B | -$345M | -0.69 |

### Stadium · R² 0.59 · n=32

Predictors: opening year of current building; capacity; premium seating (16 imputed); team ownership of the building; team owns the land; adjacent team-controlled real estate; naming-rights value ($M/yr) (14 imputed).

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Atlanta Falcons | $2.63B | $1.27B | +$1.36B | 2.60 |
| Los Angeles Chargers | $755M | $2.05B | -$1.30B | -2.48 |
| Dallas Cowboys | $3.25B | $2.13B | +$1.12B | 2.14 |
| Los Angeles Rams | $3.59B | $2.76B | +$827M | 1.58 |
| New England Patriots | $1.55B | $2.37B | -$815M | -1.56 |
| Las Vegas Raiders | $2.79B | $2.05B | +$748M | 1.43 |
| Washington Commanders | $1.35B | $630M | +$721M | 1.38 |
| Chicago Bears | $877M | $366M | +$511M | 0.98 |

### Brand · R² 0.32 · n=32

Predictors: championships since 2001; national TV exposure; social following. Dropped for missing data: merchandise rank.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Dallas Cowboys | $3.25B | $1.40B | +$1.85B | 4.40 |
| Los Angeles Rams | $899M | $389M | +$510M | 1.21 |
| Pittsburgh Steelers | $539M | $991M | -$452M | -1.07 |
| Kansas City Chiefs | $479M | $925M | -$446M | -1.06 |
| Philadelphia Eagles | $679M | $1.11B | -$429M | -1.02 |
| Detroit Lions | $411M | $822M | -$411M | -0.98 |
| New England Patriots | $1.02B | $619M | +$402M | 0.96 |
| Jacksonville Jaguars | $384M | $21M | +$363M | 0.86 |

### Sport · median $6.30B · 15 of 32 beyond ±5%

Sport should be near flat. Teams beyond ±5% of the median:

| Team | Forbes | vs median |
|---|---|---|
| New York Giants | $7.34B | +16% |
| Green Bay Packers | $5.37B | -15% |
| Las Vegas Raiders | $5.42B | -14% |
| Los Angeles Rams | $7.07B | +12% |
| Chicago Bears | $6.95B | +10% |
| Seattle Seahawks | $6.85B | +9% |
| New York Jets | $6.80B | +8% |
| Philadelphia Eagles | $6.76B | +7% |
| New Orleans Saints | $5.87B | -7% |
| Baltimore Ravens | $5.88B | -7% |
| Cleveland Browns | $5.88B | -7% |
| Carolina Panthers | $5.89B | -7% |

## NBA (Forbes list 2025)

### Market · R² 0.54 · n=30

Predictors: metro population; TV households (1 imputed); household income; local competition.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Los Angeles Lakers | $4.61B | $2.78B | +$1.83B | 2.55 |
| Golden State Warriors | $4.22B | $2.46B | +$1.76B | 2.46 |
| Brooklyn Nets | $1.49B | $3.16B | -$1.67B | -2.33 |
| Washington Wizards | $1.23B | $2.29B | -$1.06B | -1.48 |
| New York Knicks | $4.16B | $3.16B | +$997M | 1.39 |
| Minnesota Timberwolves | $788M | $1.74B | -$956M | -1.33 |
| Denver Nuggets | $1.01B | $1.85B | -$839M | -1.17 |
| Detroit Pistons | $894M | $1.44B | -$541M | -0.76 |

### Stadium · R² 0.51 · n=30

Predictors: opening year of current building; capacity; team ownership of the building; team owns the land; adjacent team-controlled real estate; naming-rights value ($M/yr) (3 imputed). Dropped for missing data: premium seating.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Golden State Warriors | $3.71B | $1.98B | +$1.73B | 3.67 |
| Milwaukee Bucks | $626M | $1.73B | -$1.10B | -2.34 |
| Brooklyn Nets | $1.37B | $1.93B | -$560M | -1.19 |
| Charlotte Hornets | $608M | $1.13B | -$525M | -1.12 |
| Houston Rockets | $1.44B | $976M | +$463M | 0.99 |
| Memphis Grizzlies | $323M | $772M | -$449M | -0.96 |
| Minnesota Timberwolves | $374M | $808M | -$434M | -0.92 |
| Atlanta Hawks | $1.53B | $1.15B | +$377M | 0.80 |

### Brand · R² 0.59 · n=30

Predictors: championships since 2001; national TV exposure; social following. Dropped for missing data: merchandise rank.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| New York Knicks | $1.41B | $744M | +$668M | 3.03 |
| Oklahoma City Thunder | $406M | $781M | -$375M | -1.70 |
| Los Angeles Lakers | $1.55B | $1.20B | +$347M | 1.58 |
| Cleveland Cavaliers | $532M | $857M | -$325M | -1.48 |
| Houston Rockets | $563M | $874M | -$311M | -1.41 |
| Los Angeles Clippers | $883M | $573M | +$310M | 1.41 |
| San Antonio Spurs | $365M | $674M | -$309M | -1.40 |
| Minnesota Timberwolves | $288M | $523M | -$235M | -1.07 |

### Sport · median $2.21B · 14 of 30 beyond ±5%

Sport should be near flat. Teams beyond ±5% of the median:

| Team | Forbes | vs median |
|---|---|---|
| Golden State Warriors | $1.70B | -23% |
| Philadelphia 76ers | $1.85B | -16% |
| Cleveland Cavaliers | $1.90B | -14% |
| Los Angeles Lakers | $2.44B | +10% |
| Denver Nuggets | $2.43B | +10% |
| Atlanta Hawks | $1.99B | -10% |
| Dallas Mavericks | $2.00B | -10% |
| San Antonio Spurs | $2.00B | -9% |
| Boston Celtics | $2.39B | +8% |
| Indiana Pacers | $2.38B | +8% |
| Los Angeles Clippers | $2.06B | -7% |
| Sacramento Kings | $2.06B | -7% |

## MLB (Forbes list 2026)

### Market · R² 0.48 · n=30

Predictors: metro population; TV households (1 imputed); household income; local competition.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Los Angeles Dodgers | $4.26B | $2.44B | +$1.82B | 2.43 |
| New York Yankees | $4.52B | $2.81B | +$1.71B | 2.28 |
| New York Mets | $1.48B | $2.81B | -$1.33B | -1.78 |
| Los Angeles Angels | $1.25B | $2.44B | -$1.19B | -1.58 |
| Chicago White Sox | $528M | $1.64B | -$1.12B | -1.49 |
| Boston Red Sox | $2.63B | $1.52B | +$1.11B | 1.48 |
| Chicago Cubs | $2.46B | $1.64B | +$811M | 1.08 |
| Washington Nationals | $867M | $1.64B | -$778M | -1.04 |

### Stadium · R² 0.39 · n=30

Predictors: opening year of current building; capacity (1 imputed); team ownership of the building; team owns the land; adjacent team-controlled real estate; naming-rights value ($M/yr) (12 imputed). Dropped for missing data: premium seating.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| New York Yankees | $2.21B | $675M | +$1.54B | 3.71 |
| Los Angeles Dodgers | $2.08B | $1.47B | +$614M | 1.48 |
| Houston Astros | $1.01B | $459M | +$554M | 1.34 |
| St. Louis Cardinals | $517M | $1.00B | -$485M | -1.17 |
| Oakland Athletics | $227M | $232M | +$459M | 1.11 |
| Atlanta Braves | $1.01B | $580M | +$434M | 1.05 |
| Colorado Rockies | $307M | $702M | -$395M | -0.96 |
| Minnesota Twins | $265M | $607M | -$342M | -0.83 |

### Brand · R² 0.64 · n=30

Predictors: championships since 2001; national TV exposure. Dropped for missing data: social following; merchandise rank.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| New York Yankees | $1.38B | $724M | +$655M | 3.23 |
| Los Angeles Dodgers | $1.42B | $946M | +$475M | 2.35 |
| St. Louis Cardinals | $356M | $645M | -$289M | -1.43 |
| Kansas City Royals | $138M | $404M | -$266M | -1.31 |
| Detroit Tigers | $184M | $424M | -$240M | -1.19 |
| Houston Astros | $428M | $645M | -$217M | -1.07 |
| Oakland Athletics | $153M | $42M | +$195M | 0.96 |
| Cleveland Guardians | $177M | $366M | -$189M | -0.93 |

### Sport · median $716M · 22 of 30 beyond ±5%

Sport in this league reads as a net revenue-sharing position (big-market clubs low, small-market clubs high), so flatness is not the right test; the list below is a ranking of net positions, not of errors.

| Team | Forbes | vs median |
|---|---|---|
| Los Angeles Dodgers | $35M | -95% |
| New York Yankees | $393M | -45% |
| Oakland Athletics | $1.02B | +42% |
| Atlanta Braves | $424M | -41% |
| Tampa Bay Rays | $995M | +39% |
| Chicago Cubs | $457M | -36% |
| Houston Astros | $461M | -36% |
| Boston Red Sox | $480M | -33% |
| Chicago White Sox | $933M | +30% |
| Baltimore Orioles | $916M | +28% |
| St. Louis Cardinals | $856M | +19% |
| Arizona Diamondbacks | $840M | +17% |

## NHL (Forbes list 2024)

### Market · R² 0.41 · n=32

Predictors: metro population; TV households (7 imputed); household income; local competition.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| New York Rangers | $1.76B | $1.04B | +$721M | 2.34 |
| Toronto Maple Leafs | $1.85B | $1.18B | +$675M | 2.19 |
| Boston Bruins | $1.17B | $639M | +$530M | 1.72 |
| Florida Panthers | $439M | $959M | -$520M | -1.69 |
| Edmonton Oilers | $1.19B | $680M | +$513M | 1.67 |
| Anaheim Ducks | $412M | $918M | -$506M | -1.65 |
| Columbus Blue Jackets | $310M | $677M | -$367M | -1.19 |
| New York Islanders | $682M | $1.04B | -$357M | -1.16 |

### Stadium · R² 0.50 · n=32

Predictors: opening year of current building; capacity; team ownership of the building; team owns the land; adjacent team-controlled real estate; naming-rights value ($M/yr) (9 imputed). Dropped for missing data: premium seating.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| New York Rangers | $1.00B | $485M | +$520M | 2.58 |
| New Jersey Devils | $781M | $384M | +$397M | 1.97 |
| Edmonton Oilers | $844M | $471M | +$373M | 1.85 |
| Boston Bruins | $835M | $469M | +$366M | 1.82 |
| Columbus Blue Jackets | $178M | $484M | -$306M | -1.52 |
| Buffalo Sabres | $218M | $501M | -$283M | -1.40 |
| Utah Hockey Club | $107M | $312M | -$205M | -1.02 |
| Seattle Kraken | $405M | $608M | -$203M | -1.01 |

### Brand · R² 0.57 · n=32

Predictors: championships since 2001; national TV exposure; social following. Dropped for missing data: merchandise rank.

| Team | Forbes | Fitted | Residual | z |
|---|---|---|---|---|
| Montreal Canadiens | $650M | $433M | +$217M | 2.37 |
| Los Angeles Kings | $393M | $209M | +$184M | 2.00 |
| San Jose Sharks | $102M | $269M | -$167M | -1.82 |
| Winnipeg Jets | $106M | $238M | -$132M | -1.43 |
| Buffalo Sabres | $101M | $229M | -$128M | -1.39 |
| New York Rangers | $515M | $394M | +$121M | 1.32 |
| Toronto Maple Leafs | $594M | $473M | +$121M | 1.32 |
| Pittsburgh Penguins | $250M | $359M | -$109M | -1.19 |

### Sport · median $389M · 28 of 32 beyond ±5%

Sport in this league reads as a net revenue-sharing position (big-market clubs low, small-market clubs high), so flatness is not the right test; the list below is a ranking of net positions, not of errors.

| Team | Forbes | vs median |
|---|---|---|
| Utah Hockey Club | $747M | +92% |
| Montreal Canadiens | $54M | -86% |
| Los Angeles Kings | $99M | -75% |
| Toronto Maple Leafs | $169M | -57% |
| Edmonton Oilers | $203M | -48% |
| New York Rangers | $219M | -44% |
| San Jose Sharks | $540M | +39% |
| New Jersey Devils | $268M | -31% |
| Vegas Golden Knights | $270M | -31% |
| Detroit Red Wings | $499M | +28% |
| New York Islanders | $491M | +26% |
| Chicago Blackhawks | $299M | -23% |

## Largest residuals across all leagues and components

By absolute dollars (Market, Stadium, Brand models):

| League | Team | Component | Residual | z |
|---|---|---|---|---|
| NFL | Dallas Cowboys | market | +$2.29B | 4.57 |
| NFL | Dallas Cowboys | brand | +$1.85B | 4.40 |
| NBA | Los Angeles Lakers | market | +$1.83B | 2.55 |
| MLB | Los Angeles Dodgers | market | +$1.82B | 2.43 |
| NBA | Golden State Warriors | market | +$1.76B | 2.46 |
| NBA | Golden State Warriors | stadium | +$1.73B | 3.67 |
| MLB | New York Yankees | market | +$1.71B | 2.28 |
| NBA | Brooklyn Nets | market | -$1.67B | -2.33 |
| MLB | New York Yankees | stadium | +$1.54B | 3.71 |
| NFL | Atlanta Falcons | stadium | +$1.36B | 2.60 |
| MLB | New York Mets | market | -$1.33B | -1.78 |
| NFL | Los Angeles Chargers | stadium | -$1.30B | -2.48 |
| MLB | Los Angeles Angels | market | -$1.19B | -1.58 |
| NFL | Dallas Cowboys | stadium | +$1.12B | 2.14 |
| MLB | Chicago White Sox | market | -$1.12B | -1.49 |

By standardized residual (|z|):

| League | Team | Component | Residual | z |
|---|---|---|---|---|
| NFL | Dallas Cowboys | market | +$2.29B | 4.57 |
| NFL | Dallas Cowboys | brand | +$1.85B | 4.40 |
| MLB | New York Yankees | stadium | +$1.54B | 3.71 |
| NBA | Golden State Warriors | stadium | +$1.73B | 3.67 |
| MLB | New York Yankees | brand | +$655M | 3.23 |
| NBA | New York Knicks | brand | +$668M | 3.03 |
| NFL | Atlanta Falcons | stadium | +$1.36B | 2.60 |
| NHL | New York Rangers | stadium | +$520M | 2.58 |
| NBA | Los Angeles Lakers | market | +$1.83B | 2.55 |
| NFL | Los Angeles Chargers | stadium | -$1.30B | -2.48 |
| NBA | Golden State Warriors | market | +$1.76B | 2.46 |
| MLB | Los Angeles Dodgers | market | +$1.82B | 2.43 |
| NHL | Montreal Canadiens | brand | +$217M | 2.37 |
| MLB | Los Angeles Dodgers | brand | +$475M | 2.35 |
| NHL | New York Rangers | market | +$721M | 2.34 |

## Reading these

- A large positive residual means Forbes values the component above what the proxies predict. It is a prompt to look, not a verdict: the proxies miss things like a team-owned district (Chase Center, SoFi), operating control of a public building (Allegiant), or a local media asset (YES, SportsNet LA).
- Stadium R² is low in every league even with ownership, land, real estate and naming rights included, because premium-seat counts and event revenue are missing for most teams.
- Use the tables to pick which teams get a "Forbes is right / off" sentence in data/forbes-commentary.js. Write the sentence from the facts, not from the residual.
