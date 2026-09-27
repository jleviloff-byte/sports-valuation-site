// Hand-written commentary for "Inside the Forbes Number".
//
// Entries override the generated why / peers / takeaway text for one team and
// component. Each value is a string or a function of the context built in
// src/utils/forbesBreakdown.js (team, fb, p, r, st, revenueRank, nextRevenue,
// fmtB, pct, ordinal, fmtNum, short). Numbers are pulled from the data at
// render time so the prose never drifts from the Forbes figures.
//
// Voice: confident, specific, no hedging, no dashes.

const revGap = (c) => (c.nextRevenue && c.fb.revenue ? c.fmtB(c.fb.revenue - c.nextRevenue.revenue) : null)

export const commentary = {
  'golden-state-warriors': {
    stadium: {
      takeaway: (c) =>
        `Forbes' ${c.fmtB(c.r.value)} Stadium figure is the largest in the NBA, and the facts support it. ` +
        `Chase Center is team-owned on team-owned land, privately financed, with the office and retail buildings on the site in the same hands, so every suite, sponsorship and off-night event flows to ownership. ` +
        `Age and capacity would put an arena of this size mid-pack; owning everything on the site is what puts it first. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Stadium against a league norm of ${Math.round(c.st.medianShare * 100)}%. That is right.`,
    },
    market: {
      takeaway: (c) =>
        `Forbes gives the Warriors ${c.fmtB(c.r.value)} of Market from a metro of ${c.fmtNum(c.p.pop)} people, within ${c.fmtB(Math.abs(4.611 - c.r.value))} of the Lakers' $4.61B from a metro roughly two and a half times larger. ` +
        `The Warriors also share the Bay Area with the 49ers, Giants and Sharks, which splits the market. What justifies the number is income, not headcount: a median household income of $${Math.round(c.p.income / 1000)}K is the highest of any NBA market, and the tech corporate base buys the suites and sponsorships. ` +
        `The cleaner check is revenue: ${c.fmtB(c.fb.revenue)}, the most in the NBA${revGap(c) ? `, ${revGap(c)} clear of the ${c.short(c.nextRevenue.name)}` : ''}. The Market figure is high, and it is earned.`,
    },
  },
  'dallas-cowboys': {
    market: {
      takeaway: (c) =>
        `At ${c.fmtB(c.r.value)}, the Cowboys' Market slice is the largest in the NFL, from a metro of ${c.fmtNum(c.p.pop)} people. New York has ${c.fmtNum(20112448)} and gives the Giants $1.79B. ` +
        `Forbes is not paying for population here. It is paying for the largest revenue franchise in sports: ${c.fmtB(c.fb.revenue)}${revGap(c) ? `, ${revGap(c)} clear of the next NFL club (the ${c.short(c.nextRevenue.name)})` : ''}, most of it earned locally through a sponsorship and premium-seat operation the Cowboys run themselves. ` +
        `Call it Market or call it capture; on those numbers the figure holds.`,
    },
    brand: {
      takeaway: (c) =>
        `Forbes' ${c.fmtB(c.r.value)} Brand figure is the largest in the NFL by a wide margin, for a team with ${c.p.titles25 ?? 0} championships since 2001. ` +
        `That is the point: the Cowboys prove Brand is not a trophy count. ${c.p.socialM ? `A ${c.p.socialM.toFixed(1)}M social following, ` : ''}${c.p.nationalTv != null ? `${c.p.nationalTv} national TV windows last season, ` : ''}and the largest revenue base in sports at ${c.fmtB(c.fb.revenue)} say the brand is monetized every week regardless of the standings. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Brand against a league norm of ${Math.round(c.st.medianShare * 100)}%. The number is right, and it is why this valuation sits alone at the top.`,
    },
  },
  'los-angeles-rams': {
    stadium: {
      takeaway: (c) =>
        `SoFi Stadium opened in 2020 at a cost near $5B, the most expensive stadium ever built, and with Allegiant it is one of the two newest and highest-grossing buildings in the NFL. ` +
        `Stan Kroenke owns it and the Hollywood Park district around it, so the Super Bowl, the concerts and the development upside all accrue to the Rams' owner. ` +
        `Forbes' ${c.fmtB(c.r.value)} Stadium figure ranks ${c.ordinal(c.r.rank)} in the league and accounts for ${Math.round(c.r.share * 100)}% of the franchise against a norm of ${Math.round(c.st.medianShare * 100)}%. Age and capacity alone would never get you there; ownership of the district does. The number is earned.`,
    },
  },
  'las-vegas-raiders': {
    stadium: {
      takeaway: (c) =>
        `Allegiant Stadium opened in 2020 and, with SoFi, is one of the two newest and highest-grossing buildings in the NFL: it hosted Super Bowl LVIII and carries a Las Vegas event calendar no other market can match. ` +
        `The building is publicly owned, but the Raiders control its revenue through their stadium company, and that operating control is what Forbes is valuing at ${c.fmtB(c.r.value)}, ${c.ordinal(c.r.rank)} in the league. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Stadium against a norm of ${Math.round(c.st.medianShare * 100)}%. For a team in the ${c.fmtNum(c.p.pop)}-person Las Vegas metro, the building is the franchise.`,
    },
  },
  'los-angeles-lakers': {
    market: {
      takeaway: (c) =>
        `Forbes' ${c.fmtB(c.r.value)} Market figure is the largest in the NBA even though the Lakers share Los Angeles with the Clippers and six other major teams, which splits the metro. ` +
        `Forbes is already splitting it: the Clippers get $2.52B from the same city. The Lakers get the bigger piece because they capture more of it, ${c.fmtB(c.fb.revenue)} in revenue against the Clippers' $569M, plus a 20-year local TV deal with Spectrum SportsNet worth roughly $3B over its life. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Market against a norm of ${Math.round(c.st.medianShare * 100)}%. The shared metro is real; so is the gap in who monetizes it.`,
      sources: [
        'https://www.silverscreenandroll.com/2025/6/19/24452396/lakers-sale-jeanie-buss-family-siblings-mark-walter-tv-deal-spectrum-sportsnet-wealth',
        'https://en.wikipedia.org/wiki/Spectrum_SportsNet',
      ],
    },
  },
  'los-angeles-dodgers': {
    market: {
      takeaway: (c) =>
        `The Dodgers share Los Angeles with the Angels, and Forbes splits the metro accordingly: ${c.fmtB(c.r.value)} of Market for the Dodgers, $1.25B for the Angels. ` +
        `The split follows the money. Dodgers revenue is ${c.fmtB(c.fb.revenue)}, ${c.ordinal(c.revenueRank)} in MLB, against the Angels' $377M, and the SportsNet LA deal is the richest local TV contract in baseball. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Market against a norm of ${Math.round(c.st.medianShare * 100)}%. A shared metro does not cap a team that owns the audience.`,
    },
  },
  'atlanta-falcons': {
    stadium: {
      takeaway: (c) =>
        `Forbes' ${c.fmtB(c.r.value)} Stadium figure ranks ${c.ordinal(c.r.rank)} in the NFL for a building in a mid-sized metro, and the calendar explains it. ` +
        `Mercedes-Benz Stadium opened in ${c.p.yearOpened}, hosted Super Bowl LIII, hosts the SEC Championship every December and 2026 World Cup matches, and fills a second time each week for Atlanta United, the best-attended club in MLS. ` +
        `The state authority owns the building, but Arthur Blank financed most of it and his company operates it, so the events flow to ownership. Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Stadium against a norm of ${Math.round(c.st.medianShare * 100)}%. On the calendar, that holds.`,
    },
  },
  'los-angeles-chargers': {
    stadium: {
      takeaway: (c) =>
        `The Chargers play in the same ${c.p.venue} that earns the Rams $3.59B of Stadium value, and Forbes gives the Chargers ${c.fmtB(c.r.value)}, ${c.ordinal(c.r.rank)} of ${c.r.of}. ` +
        `Both numbers are right. Stan Kroenke owns the building and the Hollywood Park district; the Chargers are a tenant under a lease, so the naming rights, the Super Bowl and the concert calendar belong to the landlord. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Stadium against a norm of ${Math.round(c.st.medianShare * 100)}%. The newest building in the league is worth very little to the team that doesn't own it.`,
    },
  },
  'new-york-yankees': {
    market: {
      takeaway: (c) =>
        `The Yankees share New York with the Mets, and Forbes gives them ${c.fmtB(c.r.value)} of Market against the Mets' $1.48B from the same ${c.fmtNum(c.p.pop)}-person metro, a three-to-one split. ` +
        `Revenue backs it: ${c.fmtB(c.fb.revenue)}, ${c.ordinal(c.revenueRank)} in MLB, against the Mets' $553M, and the YES Network stake turns local viewership into owned media. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Market against a norm of ${Math.round(c.st.medianShare * 100)}%. The split is aggressive, and the revenue says it is roughly right.`,
    },
    stadium: {
      takeaway: (c) =>
        `Forbes' ${c.fmtB(c.r.value)} Stadium figure is the largest in MLB. Yankee Stadium opened in ${c.p.yearOpened}, was privately financed by the team on city-owned land, and is operated by a team affiliate, so the ${c.p.suites ? `${c.p.suites} suites and ` : ''}${c.p.premiumSeats ? `${c.p.premiumSeats.toLocaleString()} premium seats` : 'premium inventory'} price at New York rates and the money stays with ownership. ` +
        `Forbes credits ${Math.round(c.r.share * 100)}% of the franchise to Stadium against a norm of ${Math.round(c.st.medianShare * 100)}%. A building this young with this much premium seating in this metro earns that.`,
    },
  },
  'new-york-mets': {
    market: {
      takeaway: (c) =>
        `Forbes gives the Mets ${c.fmtB(c.r.value)} of Market from the same ${c.fmtNum(c.p.pop)}-person metro that gives the Yankees $4.52B. ` +
        `The Mets earn ${Math.round((c.fb.revenue / 0.71) * 100)} cents for every Yankees revenue dollar (${c.fmtB(c.fb.revenue)} against $710M) and get ${Math.round((c.r.value / 4.518) * 100)} cents of Market for every Yankees Market dollar. ` +
        `Citi Field is team-controlled and Steve Cohen runs the biggest payroll in baseball. One thing the Mets do not have is the network: SNY's majority owner is Sterling Equities, the Wilpon family's company, with Charter and Comcast holding the rest, so the local TV asset Forbes credits to the Yankees through YES has no counterpart in Mets ownership. ` +
        `The revenue gap is real; the Market gap is three times as wide, and the part beyond the network is Forbes pricing a century of second place, not Queens.`,
      sources: [
        'https://en.wikipedia.org/wiki/SNY',
        'https://www.sterlingequities.com/sports-and-media',
      ],
    },
  },
  'brooklyn-nets': {
    market: {
      takeaway: (c) =>
        `Forbes gives the Nets ${c.fmtB(c.r.value)} of Market from the same ${c.fmtNum(c.p.pop)}-person metro that gives the Knicks $4.16B. ` +
        `The Nets earn ${Math.round((c.fb.revenue / 0.532) * 100)} cents for every Knicks revenue dollar and get ${Math.round((c.r.value / 4.161) * 100)} cents of Market for every Knicks Market dollar. ` +
        `That is the one Market figure in the NBA the fundamentals argue with. Barclays Center is team-owned, the borough alone has more people than most NBA metros, and the revenue gap is nowhere near the Market gap. Forbes is pricing the Knicks' history, and calling it geography.`,
    },
  },
}

// Same-market callouts, keyed by the two team ids sorted and joined with "|".
// Each is a function of { a, b, fmtB, pct, fmtNum, short } where a is the
// profile team and b the rival.
export const calloutOverrides = {
  'brooklyn-nets|new-york-knicks': ({ a, b, fmtB, fmtNum }) => {
    const k = a.team.id === 'new-york-knicks' ? a : b
    const n = a.team.id === 'brooklyn-nets' ? a : b
    const gap = k.fb.market - n.fb.market
    const revRatio = Math.round((n.fb.revenue / k.fb.revenue) * 100)
    const mktRatio = Math.round((n.fb.market / k.fb.market) * 100)
    return (
      `Forbes gives the Knicks ${fmtB(k.fb.market)} of Market and the Nets ${fmtB(n.fb.market)}, a ${fmtB(gap)} gap on a single input that is supposed to measure the city, and both teams play in the same ${fmtNum(k.p.pop)}-person metro. ` +
      `The Nets earn ${revRatio} cents for every Knicks revenue dollar (${fmtB(n.fb.revenue)} against ${fmtB(k.fb.revenue)}) but get ${mktRatio} cents of Market for every Knicks Market dollar. ` +
      `Forbes is right that the Knicks capture more of New York: MSG Network, the Garden, and the revenue gap are real. It is wrong to book that as Market. ` +
      `If the Nets' Market tracked their revenue, it would sit near ${fmtB(k.fb.market * (n.fb.revenue / k.fb.revenue))}; the rest of the gap belongs under Brand, where Forbes already gives the Knicks ${fmtB(k.fb.brand)} to the Nets' ${fmtB(n.fb.brand)}.`
    )
  },
}

// League notes overrides for /forbes-breakdown, keyed "LEAGUE:component".
// Functions of { st, top, bottom, rows, fmtB, short, league }.
export const leagueNoteOverrides = {}
