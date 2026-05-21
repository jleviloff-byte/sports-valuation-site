# Manual Image TODOs

The site's image data lives in `data/images.js`. For all 174 teams, that file
holds three pieces per franchise:

- `logoUrl` — primary logo URL (ESPN CDN for ~128 teams, Wikimedia Commons SVG
  for the rest). Fallback chain in code: ESPN → Wikimedia → 2-letter initials.
- `stadiumUrl` — wide aerial/exterior stadium photograph from Wikimedia Commons.
- Iconic-moment URL + caption (via the `ICONIC_MOMENTS` map in the same file).

Wikimedia Commons covers most of what's needed for stadium and logo work.
**Iconic moments are where it gets thin**, because most photos of the moments
fans actually remember are copyrighted news/wire photos that Commons cannot
host. The expansion-era MLS clubs and the four newest NHL franchises don't
yet have a single Commons-licensed historic moment that's recognizable enough
to use.

The entries below render as a dark "Iconic photo pending" placeholder in the
team detail panel. Source these manually when convenient and either:
- Add the entry to `ICONIC_MOMENTS` in `data/images.js` if it's a verified
  Commons URL, or
- Drop a non-Commons image into `public/images/iconic/` and update the entry
  to reference the local path.

---

## Iconic moment photos still pending

### NHL (4)

| Team                    | Suggested moment                                              |
| ----------------------- | ------------------------------------------------------------- |
| Columbus Blue Jackets   | Rick Nash 2003-04 Rocket Richard / Cannon arena tradition     |
| Minnesota Wild          | Kirill Kaprizov breakaway, or 2003 Western Conference final   |
| Utah Hockey Club        | Inaugural 2024-25 home opener at Delta Center                  |
| Seattle Kraken          | Climate Pledge Arena 2021 inaugural home win                  |

### MLS (9)

| Team                  | Suggested moment                                                 |
| --------------------- | ---------------------------------------------------------------- |
| Charlotte FC          | Bank of America Stadium inaugural match crowd, March 2022        |
| Chicago Fire FC       | Hristo Stoichkov era / 1998 MLS Cup celebration                  |
| FC Cincinnati         | 2023 Supporters' Shield clinch at TQL Stadium                    |
| CF Montreal           | 2015 CONCACAF Champions League final at Olympic Stadium          |
| Nashville SC          | GEODIS Park 2022 home opener                                     |
| New York City FC      | Yankee Stadium inaugural 2015 home match / 2021 MLS Cup victory  |
| San Diego FC          | Snapdragon Stadium 2025 inaugural home match                     |
| San Jose Earthquakes  | 2003 MLS Cup victory parade in San Jose                          |
| St. Louis City SC     | CityPark inaugural 2023 match                                    |

---

## Stadium photo TODO

| Team               | Note                                                            |
| ------------------ | --------------------------------------------------------------- |
| St. Louis City SC  | `stadiumUrl` is currently `null`. CityPark exterior wide shot.  |

---

## Notes

- Some EPL clubs (Burnley, Sheffield United, Luton Town) currently double the
  stadium photo as the "iconic moment" image. Functional but not ideal — if a
  notable on-pitch moment is available on Commons, prefer it.
- The 6 verified EPL clubs (Arsenal, Manchester United, Chelsea, Liverpool,
  Tottenham, Manchester City) use ESPN CDN logos via numeric team IDs. The
  other 15 EPL clubs use Wikimedia SVGs. ESPN IDs for those 15 can be added
  to `ESPN_LOGO` in `data/images.js` when verified.
