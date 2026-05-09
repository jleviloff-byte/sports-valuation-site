// Team logo and stadium photo URLs, keyed by team name.
//
// PROGRESS: 0 / 174 teams populated.
//
// Why empty: web access (WebSearch / WebFetch) was denied during the
// 2026-05-09 dispatch session, so the research agent couldn't verify URLs
// against live servers. The TeamDetailPanel renders a clean dark
// placeholder with the team name when an entry is missing, so the UI works
// out of the box — populate this file incrementally over follow-up sessions.
//
// FORMAT — fill in each team like this:
//   "Dallas Cowboys": {
//     logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/.../...png",
//     stadiumImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/.../...jpg",
//   },
//
// URL guidance:
// - Wikipedia / Wikimedia Commons URLs are preferred — public, hot-linkable,
//   stable. Use the upload.wikimedia.org URL, not the file-page URL.
// - Logos: many team logos are non-free use on en.wikipedia (not Commons);
//   prefer SVGs from official team sites or Wikipedia's File: namespace
//   thumbnail URLs that include the .svg.png rendering.
// - Stadium photos: Commons usually has CC-licensed shots — pick a clean
//   exterior or wide interior at >=1200px width.

export const teamImages = {
  // POPULATE — see format above. Examples to copy-paste once you have URLs:
  //
  // "Dallas Cowboys": {
  //   logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/200px-Dallas_Cowboys.svg.png",
  //   stadiumImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/AT%26T_Stadium_field.jpg/1280px-AT%26T_Stadium_field.jpg",
  // },
}

export function getTeamImages(teamName) {
  return teamImages[teamName] || null
}
