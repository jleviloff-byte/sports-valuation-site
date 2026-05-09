// NFL driver scores — researched 1-10 valuation driver scores for non-curated NFL teams
// Curated teams (in teams.js) are skipped: Cowboys, Patriots, Rams, Giants, 49ers, Jets, Eagles, Commanders
// Sources: Forbes 2024 NFL valuations, Nielsen DMA rankings, social media follower counts (Q1 2025),
// stadium ownership/financing public records, on-field record 2020-2024, Spotrac contract data
//
// Scoring framework:
//   mediaRights: NFL national pool (~$340M/team) sets a floor near 7; team-specific lift from
//                primetime frequency, international relevance, local radio quality
//   stadium:    Owned + privately financed + ancillary district = 9-10; team-owned modern = 7-8;
//                shared/leased modern = 5-6; aging/public = 3-4; obsolete = 1-2
//   brand:      Global/cultural reach beyond hardcore football fans
//   marketSize: DMA size + corporate base + market exclusivity
//   onField:    Recent Super Bowls, current QB lock, 5yr playoff frequency

export const nflDriverScores = {

  // ─── AFC EAST ───
  "Buffalo Bills": {
    mediaRights: 8,    // strong national-game frequency under Allen; primetime regular; Bills Mafia drives ratings
    stadium: 4,        // Highmark Stadium (1973) publicly owned, minimal premium revenue; new $1.54B stadium opens 2026 (will lift to 8+)
    brand: 7,          // Bills Mafia is one of NFL's most active fanbases; Allen era driving merchandise into top-10
    marketSize: 3,     // Buffalo DMA #54 — among smallest in NFL; some regional WNY/Canada lift but no metro corporate base
    onField: 8,        // 5 straight playoff appearances, 4 AFC East titles; perennial AFC contender; Allen $55M AAV through 2030
  },

  "Miami Dolphins": {
    mediaRights: 7,    // NFL floor; modest primetime allocation; weak local radio depth vs. legacy markets
    stadium: 7,        // Hard Rock Stadium privately owned by Stephen Ross; $500M+ renovation 2016; F1 Miami Grand Prix anchors massive non-NFL revenue
    brand: 6,          // Marino-era heritage but limited recent cultural reach; strong international (Latin America, Spain games)
    marketSize: 7,     // Miami DMA #16 with elite international appeal and Latin American corporate base
    onField: 5,        // 2 playoff trips in last 5 years; Tua durability concerns cap upside; mid-tier AFC East
  },

  // ─── AFC NORTH ───
  "Baltimore Ravens": {
    mediaRights: 8,    // strong primetime allocation; Lamar Jackson nationally compelling; consistent ratings driver
    stadium: 6,        // M&T Bank Stadium (1998) publicly owned; recent $400M+ renovation; mid-pack non-NFL revenue
    brand: 7,          // 2 Super Bowls (2000, 2012); Lamar era brought broader cultural relevance; strong fan loyalty
    marketSize: 5,     // Baltimore DMA #28; partly subsumed by DC corporate market; respectable but not elite
    onField: 8,        // Lamar 2x MVP, 5yr/$260M extension; 4 playoff appearances last 5 yrs; perennial AFC contender
  },

  "Cincinnati Bengals": {
    mediaRights: 7,    // NFL floor; Burrow-led primetime appearances since 2021 elevated relevance
    stadium: 4,        // Paycor Stadium (2000) publicly owned (Hamilton County); famously bad lease terms; minimal team revenue capture
    brand: 5,          // Brown family ownership long-criticized for under-investment; brand equity below market peers
    marketSize: 4,     // Cincinnati DMA #36; small corporate base; weak market depth
    onField: 7,        // Super Bowl LVI run; Burrow extension 5yr/$275M; injury risks but elite ceiling
  },

  "Cleveland Browns": {
    mediaRights: 7,    // NFL floor; Watson contract created national interest (negative kind) but reduces marketability
    stadium: 5,        // Cleveland Browns Stadium publicly owned, aging; Haslam family pushing $2B+ Brook Park dome (proposed); current uncertain
    brand: 5,          // Reborn 1999 franchise; deeply loyal Dawg Pound but Watson saga and lack of titles cap brand equity
    marketSize: 4,     // Cleveland DMA #19 but in long-term decline; ranked among weaker NFL corporate markets
    onField: 3,        // 1 playoff appearance last 5 yrs; Watson contract is dead money albatross through 2026; rebuild posture
  },

  "Pittsburgh Steelers": {
    mediaRights: 9,    // legacy primetime franchise; consistent flex schedule; massive Steelers Nation diaspora
    stadium: 6,        // Acrisure Stadium (2001) publicly owned; mid-tier ancillary revenue; Acrisure naming deal solid
    brand: 9,          // 6 Super Bowls (most in AFC); Steelers Nation is one of the largest national fanbases beyond home market
    marketSize: 5,     // Pittsburgh DMA #25 but team's diaspora following exceeds market; corporate base modest
    onField: 6,        // 18+ consecutive non-losing seasons through Tomlin era but Watt-era playoff wins absent; QB transition risk
  },

  // ─── AFC SOUTH ───
  "Houston Texans": {
    mediaRights: 7,    // NFL floor; Stroud rookie season elevated national profile; primetime allocation up
    stadium: 6,        // NRG Stadium publicly owned (Harris County); 2002 build aging; rodeo + concert revenue is strong
    brand: 5,          // 2002 expansion franchise; limited heritage; Stroud era beginning to drive merchandise
    marketSize: 8,     // Houston DMA #7; massive corporate base; oil/gas + healthcare anchors elite suite economics
    onField: 6,        // 2 playoff appearances last 5 yrs (Stroud-led); CJ Stroud rookie of year; ascending team
  },

  "Indianapolis Colts": {
    mediaRights: 7,    // NFL floor; modest primetime allocation; Manning-era brand fading from primetime
    stadium: 7,        // Lucas Oil Stadium (2008) publicly owned but team revenue capture strong; Final Four/major events year-round
    brand: 6,          // 2 Super Bowls; strong Manning-era heritage but post-Manning brand softer
    marketSize: 4,     // Indianapolis DMA #25 — small corporate base; limited regional draw
    onField: 4,        // 1 playoff appearance last 5 yrs; QB instability since Luck retirement; Richardson development uncertain
  },

  "Jacksonville Jaguars": {
    mediaRights: 7,    // NFL floor; weakest primetime allocation in NFL; London games provide international lift
    stadium: 5,        // EverBank Stadium (1995) publicly owned; $1.4B "Stadium of the Future" renovation 2025-28 ($775M public/$625M Khan)
    brand: 3,          // Smallest national following; merchandise consistently ranks 30+ of 32; cultural reach minimal
    marketSize: 3,     // Jacksonville DMA #43; smallest NFL market by most measures; weak corporate base
    onField: 4,        // 1 playoff appearance last 5 yrs (2022); Lawrence injury history; rebuild posture under Coen
  },

  "Tennessee Titans": {
    mediaRights: 7,    // NFL floor; minimal primetime allocation; weak national profile
    stadium: 7,        // New Nissan Stadium ($2.1B) opens 2027 — $1.26B public + $840M private; will be top-tier when complete
    brand: 4,          // Limited heritage (relocated from Houston 1997); "Music City" lift but minimal cultural reach
    marketSize: 5,     // Nashville DMA #28 fast-growing; expanding corporate base
    onField: 3,        // 1 playoff appearance last 5 yrs; rebuild after Vrabel firing; Levis development questionable
  },

  // ─── AFC WEST ───
  "Denver Broncos": {
    mediaRights: 8,    // strong primetime legacy; Rocky Mountain regional dominance from Idaho to NM
    stadium: 7,        // Empower Field at Mile High publicly owned but team revenue capture solid; new stadium discussion 2026+
    brand: 8,          // 3 Super Bowls; Elway/Manning-era heritage; one of NFL's most consistent national draws
    marketSize: 6,     // Denver DMA #16; team is regional brand for entire Rocky Mountain corridor; corporate base solid
    onField: 5,        // Bo Nix promising rookie; Payton system; 1 playoff trip last 5 yrs; rebuild beginning to yield
  },

  "Kansas City Chiefs": {
    mediaRights: 10,   // dynasty-era ratings juggernaut; Mahomes/Kelce/Swift cultural moment lifted to peak NFL relevance
    stadium: 6,        // Arrowhead Stadium (1972) publicly owned; team voted down 2024 sales tax for new stadium; uncertain new build
    brand: 9,          // 3 Super Bowls in 5 years; Taylor Swift effect drove mainstream cultural penetration unprecedented in NFL
    marketSize: 4,     // Kansas City DMA #34 — smallest market with elite valuation; corporate base modest
    onField: 10,       // 3 Super Bowls in 5 yrs; reigning back-to-back champs going for 3-peat; Mahomes locked through 2031
  },

  "Las Vegas Raiders": {
    mediaRights: 8,    // outsized national following; "Raider Nation" diaspora drives ratings beyond market would suggest
    stadium: 9,        // Allegiant Stadium (2020, $1.9B) — Vegas's first major pro stadium; massive non-NFL event revenue, Super Bowl LVIII host
    brand: 8,          // iconic silver-and-black; Raider Nation is one of NFL's most distributed fanbases (Oakland/LA/Vegas history)
    marketSize: 6,     // Las Vegas DMA #40 small but tourism-driven economy adds suite/hospitality premium unique in NFL
    onField: 3,        // 1 playoff appearance last 5 yrs; Pierce era dysfunction; no franchise QB
  },

  "Los Angeles Chargers": {
    mediaRights: 8,    // shared LA market; Herbert provides primetime appeal; Harbaugh hire elevated national profile
    stadium: 8,        // SoFi Stadium tenant — benefits from venue's ancillary district without capital risk; minimal capex
    brand: 5,          // weakest of the 3 LA pro brands (Lakers/Rams); thin local fanbase from 2017 relocation
    marketSize: 9,     // LA DMA #2 but heavily shared; corporate sponsorship is elite even at a discount
    onField: 6,        // 1 playoff appearance last 5 yrs; Harbaugh + Herbert combination has elite ceiling; AFC West contender
  },

  // ─── NFC NORTH ───
  "Chicago Bears": {
    mediaRights: 9,    // legacy franchise (founded 1920); strong primetime allocation; Caleb Williams national interest
    stadium: 4,        // Soldier Field (1924) NFL's oldest and smallest; publicly owned; new stadium plans (lakefront vs Arlington Heights) unresolved
    brand: 9,          // one of NFL's founding teams; "Monsters of the Midway" deeply iconic; massive Midwest diaspora following
    marketSize: 9,     // Chicago DMA #3; massive corporate base; only NFL team in major metro = exclusive
    onField: 3,        // 0 playoff appearances last 5 yrs; rebuilding around Caleb Williams; HC turnover
  },

  "Detroit Lions": {
    mediaRights: 8,    // surge to top-tier primetime under Campbell era; Goff/St Brown national appeal
    stadium: 6,        // Ford Field (2002) team-leased from Ilitch; mid-pack ancillary revenue; aging interior
    brand: 7,          // surging brand under Campbell; "Restoring the Roar" era; deep Michigan loyalty
    marketSize: 5,     // Detroit DMA #14 declining; corporate base weakened post-auto consolidation
    onField: 8,        // 2 NFC Championship games last 2 yrs; Campbell+Goff core locked; Super Bowl contender 2025+
  },

  "Green Bay Packers": {
    mediaRights: 9,    // legendary primetime franchise; community-owned model adds national affinity; Lambeau aura
    stadium: 8,        // Lambeau Field (1957, renovated multiple times) team-owned (technically community-owned); shareholder-funded renovations
    brand: 10,         // 4 Super Bowls; "America's Team" rival claim; community ownership uniquely iconic in pro sports
    marketSize: 1,     // Green Bay DMA #69 — by far smallest NFL market; no significant corporate base
    onField: 6,        // Jordan Love post-Rodgers; 1 playoff appearance 2023; ascending under LaFleur
  },

  "Minnesota Vikings": {
    mediaRights: 7,    // NFL floor; moderate primetime allocation; McCarthy era beginning
    stadium: 8,        // U.S. Bank Stadium (2016) publicly subsidized but premium-grade; Super Bowl LII host; strong concert revenue
    brand: 6,          // 0 Super Bowls; deeply loyal regional fanbase but limited national cultural reach
    marketSize: 6,     // Minneapolis-St. Paul DMA #15; respectable corporate base (3M, Target, etc.)
    onField: 5,        // 1 playoff appearance last 5 yrs; McCarthy/Darnold post-Cousins transition; rebuild
  },

  // ─── NFC SOUTH ───
  "Atlanta Falcons": {
    mediaRights: 7,    // NFL floor; minimal primetime relevance recent years; some regional pull
    stadium: 9,        // Mercedes-Benz Stadium (2017, $1.6B) Blank-financed largely private; LEED Platinum; MLS Atlanta United co-tenant; massive non-NFL revenue
    brand: 6,          // limited heritage; 0 Super Bowls (lost LI infamously); strong Southeast regional brand
    marketSize: 7,     // Atlanta DMA #6; massive Southeast corporate base; growing market
    onField: 4,        // 0 playoff appearances last 5 yrs; Cousins/Penix QB experiment; mediocre roster
  },

  "Carolina Panthers": {
    mediaRights: 7,    // NFL floor; weak primetime allocation last 4+ years
    stadium: 5,        // Bank of America Stadium (1996) team-owned but minimal recent capex; renovation announced 2024-25 ($800M with public partner)
    brand: 5,          // 0 Super Bowls; Cam Newton era heritage only; Tepper-era brand erosion
    marketSize: 6,     // Charlotte DMA #22 fast-growing; growing finance sector corporate base
    onField: 2,        // 0 playoff appearances last 5 yrs; Bryce Young struggles; deepest sustained NFL irrelevance
  },

  "New Orleans Saints": {
    mediaRights: 7,    // NFL floor; Brees-era primetime relevance fading; minimal national draw
    stadium: 7,        // Caesars Superdome (1975, multiple renovations) publicly owned; iconic venue; major event revenue (Super Bowls, Final Fours)
    brand: 7,          // Super Bowl XLIV; "Who Dat Nation" national reach; Katrina-era cultural significance
    marketSize: 4,     // New Orleans DMA #50 small; tourism/oil corporate base modest
    onField: 4,        // 1 playoff appearance last 5 yrs; cap-strapped roster; Carr aging; transitional era
  },

  "Tampa Bay Buccaneers": {
    mediaRights: 8,    // post-Brady residual primetime allocation; Mayfield era continues solid ratings
    stadium: 6,        // Raymond James Stadium (1998) publicly owned; mid-tier ancillary revenue; renovation needs
    brand: 7,          // Brady-era championship (LV) lifted brand permanently; pirate-ship aesthetic culturally distinct
    marketSize: 5,     // Tampa DMA #11; growing retiree-driven market; corporate base mid-tier
    onField: 6,        // 4 playoff appearances last 5 yrs (Brady run + Mayfield); 3 straight NFC South titles; consistent contender
  },

  // ─── NFC WEST ───
  "Arizona Cardinals": {
    mediaRights: 7,    // NFL floor; minimal primetime allocation; Murray-led national interest faded
    stadium: 8,        // State Farm Stadium (2006) publicly owned but premium; Super Bowl host (XLII, XLIX, LVII); concert revenue strong
    brand: 4,          // oldest continuously running NFL franchise but weakest brand equity; 0 Super Bowls; minimal cultural reach
    marketSize: 6,     // Phoenix DMA #11; fast-growing market; corporate base improving
    onField: 3,        // 0 playoff appearances last 5 yrs; Murray contract underperforming; rebuild
  },

  "Seattle Seahawks": {
    mediaRights: 8,    // 12s drove national following; primetime allocation strong; Geno-led ratings stable
    stadium: 8,        // Lumen Field (2002) publicly subsidized but Allen Estate's revenue capture is strong; Sounders MLS co-tenant adds non-NFL revenue
    brand: 8,          // Super Bowl XLVIII title; "Legion of Boom" + Russell Wilson era; "12th Man" branding nationally recognized
    marketSize: 6,     // Seattle DMA #12; tech/aerospace corporate base elite; only NFL team in PNW = exclusive
    onField: 5,        // 2 playoff appearances last 5 yrs; Macdonald HC era beginning; Geno+Walker ascending core
  },

};
