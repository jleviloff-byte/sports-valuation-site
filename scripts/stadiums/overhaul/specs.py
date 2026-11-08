# Writes docs/overhaul/specs/<slug>.md from the feature lists below and the
# colors sampled from reference photos (scripts/stadiums/refs/colors.json).
# Photo numbers refer to scripts/stadiums/refs/verified.json for that venue
# ("naip" = the USGS NAIP aerial). Also writes specs.json for the generator.
# Usage: python3 scripts/stadiums/overhaul/specs.py
import json, os

COLORS = json.load(open('scripts/stadiums/refs/colors.json'))
VER = json.load(open('scripts/stadiums/refs/verified.json'))

# name, type, features [(feature, photo)], palette roles {role: [color labels]}, desc, materials
SPECS = {
 'fenway-park': ('Fenway Park', 'baseball', [
   ('Green Monster: tall green left-field wall, 37 ft, much taller than the other outfield walls, with the manual scoreboard set into its base', 11),
   ('Monster seats on top of the Green Monster, under three light towers', 16),
   ('Asymmetric outfield: short left field, deep right-center, the triangle in deep center field', 'naip'),
   ('Pesky Pole: short right-field foul pole at the end of a low wall', 9),
   ('Red grandstand seats set in green-painted steel; dark green bleacher seats in the outfield', 9),
   ('Roof-mounted light towers along the grandstand roof and over the Monster', 16),
   ('Red-brick exterior facade with arched windows on the street side', 6),
   ('Grandstand roof with white roof boxes and the upper-level enclosed club along the infield', 11),
   ('Center-field bleachers and the video board above them in center-right', 9),
 ], {'seats': ['seats grandstand', 'seats bleachers'], 'facade': ['facade brick'], 'roof': ['structure green'], 'field': ['field', 'infield dirt'], 'signature': ['green monster']},
  'Fenway Park, a compact asymmetric baseball park: tall green left-field wall with a manual scoreboard, dirt infield, grass outfield, stands wrapping from foul pole to foul pole behind home plate, roof-mounted light towers',
  'mown grass, red clay infield dirt, painted foul lines, green-painted steel, red brick facade, concrete, glass'),
 'wrigley-field': ('Wrigley Field', 'baseball', [
   ('Hand-operated green center-field scoreboard with the flagpoles above it', 11),
   ('Ivy-covered brick outfield walls', 10),
   ('Bleachers wrapping the outfield, with video boards in left and right field', 18),
   ('Double-deck grandstand wrapping from foul pole to foul pole behind home plate, with a low roof', 8),
   ('Roof-mounted light standards on the grandstand roof', 8),
   ('Red Wrigley Field marquee over the main entrance at Clark and Addison', 'm1'),
   ('Rooftop bleachers on the neighboring buildings across Waveland and Sheffield (excluded from the cutout)', 8),
   ('Dark green seats and green steel', 10),
 ], {'seats': ['seats'], 'facade': ['exterior'], 'roof': ['roof'], 'field': ['field', 'infield dirt'], 'signature': ['scoreboard', 'marquee']},
  'Wrigley Field, a classic urban baseball park: ivy-covered outfield walls, hand-operated green center-field scoreboard, double-deck grandstand wrapping foul pole to foul pole, bleachers in the outfield, dirt infield and grass outfield',
  'mown grass, ivy, red clay infield dirt, painted foul lines, green-painted steel, brick, concrete'),
 'michigan-stadium': ('Michigan Stadium', 'football', [
   ('Huge closed oval bowl set largely below grade, with a low exterior profile', 1),
   ('Brick-and-glass press box and suite towers above both sidelines', 1),
   ('Yellow-and-blue Block M at midfield and blue end zones', 1),
   ('Aluminum bench seating, no chairbacks in the bowl', 1),
   ('Video boards with large frames above both end zones', 5),
   ('Brick exterior wall with a navy fascia band around the bowl rim', 1),
   ('Crisler Center (domed arena) next door, excluded from the cutout', 'naip'),
 ], {'seats': ['seats'], 'facade': ['facade brick', 'fascia navy'], 'roof': ['concourse roof'], 'field': ['field'], 'signature': ['field surround']},
  'Michigan Stadium, a huge closed oval football bowl dug into the ground with an American football field and end zones, tall brick-and-glass press box and suite towers on both sidelines, video boards in both end zones',
  'artificial turf with white yard lines, aluminum bleacher bench seating, red-brown brick, glass curtain wall, concrete'),
 'landn-federal-credit-union-stadium': ('L&N Federal Credit Union Stadium', 'football', [
   ('Fully closed bowl: the 2018 north end zone expansion enclosed the former horseshoe', 3),
   ('Red seats throughout the bowl', 'naip'),
   ('Tall brick-and-glass west-side press box and suite tower', 7),
   ('Two-level east-side upper deck with a white roof canopy over the press level', 3),
   ('End zone painted with the team name; field with white yard lines', 3),
   ('Brick stair towers at the corners with team-color caps', 7),
   ('Light towers above the east and west rims', 3),
 ], {'seats': ['seats (aerial)'], 'facade': ['facade brick', 'facade glass'], 'roof': [], 'field': ['field', 'field (aerial)']},
  'L&N Federal Credit Union Stadium, a fully closed football bowl with red seats, a tall brick-and-glass press box tower on the west sideline, an upper deck on the east side, an American football field with end zones and yard lines',
  'artificial turf with white yard lines, red stadium seats, red-brown brick, glass curtain wall, white steel canopy, concrete'),
 'lambeau-field': ('Lambeau Field', 'football', [
   ('Closed oval bowl of light-gray aluminum bench seating, rising in one continuous slope', 17),
   ('Glass-and-brick Lambeau Field Atrium on the east (front) side', 18),
   ('Dark green upper facade band with suites, and red-brick piers', 18),
   ('Tall south end zone expansion with the large video board and green upper seating', 17),
   ('Field with yellow-and-green end zones and white yard lines', 1),
   ('Long white roof over the suite level on the east side', 17),
   ('Retired-number signage on the north end zone facade (rendered as plain shapes)', 12),
 ], {'seats': ['seats'], 'facade': ['facade green band', 'facade brick', 'facade base'], 'roof': [], 'field': ['field']},
  'Lambeau Field, a closed oval football bowl of light gray bench seating with a dark green upper facade, brick piers and a glass atrium on the east side, a tall south end zone with a large video board, an American football field with end zones and yard lines',
  'natural grass with white yard lines, aluminum bench seating, dark green metal panels, red brick, glass curtain wall, concrete'),
 'sofi-stadium': ('SoFi Stadium', 'football', [
   ('Translucent ETFE canopy roof, a single sweeping curved shape that overhangs the whole site', 1),
   ('Roof edge curving down low on one side and rising high on the other', 24),
   ('Open sides under the roof: the stadium is not enclosed by walls', 7),
   ('Oval bowl set deep below grade under the canopy', 1),
   ('YouDome Infinity Screen: oval double-sided video board hanging from the roof center (visible through the canopy as a ring)', 1),
   ('Adjacent performance venue under the same roof at one end', 24),
   ('Lake in front of the stadium on the west side', 7),
 ], {'seats': [], 'facade': ['facade', 'columns'], 'roof': ['roof', 'roof (aerial)'], 'field': [], 'signature': ['lake']},
  'SoFi Stadium, a football stadium under a single huge translucent curved canopy roof that sweeps low on one side, open sides with slender columns, an oval bowl sunk below ground, a lake along one side',
  'translucent ETFE roof panels with a fine diamond grid, white steel, slender concrete columns, glass, water'),
 'madison-square-garden': ('Madison Square Garden', 'arena', [
   ('Cylindrical drum with vertical precast cladding panels in warm bronze-brown', 17),
   ('Shallow cable-suspended round roof, light gray', 'naip'),
   ('Rectangular glass-and-precast office building attached on the Eighth Avenue side', 17),
   ('Glass entrance pavilion at the base on the Seventh Avenue plaza', 22),
   ('Ring of video screens along the base of the drum (plain colored panels, no text)', 22),
   ('Square glass-and-steel bridges (walkways) visible as horizontal bands around the drum', 19),
 ], {'seats': [], 'facade': ['facade cladding', 'glass', 'podium'], 'roof': ['roof'], 'field': []},
  'Madison Square Garden, a cylindrical arena drum with vertical warm bronze precast panels and a shallow round cable roof, a rectangular office block attached on one side, a glass entrance pavilion at the base',
  'warm bronze precast concrete panels, light gray roof membrane, dark glass, light stone podium'),
 'rupp-arena': ('Rupp Arena', 'arena', [
   ('Large rectangular box with a flat light roof, attached to the Central Bank Center convention center', 'naip'),
   ('Beige ribbed metal panel facade with a dark glass band at street level', 13),
   ('Diagonal-braced corner stair towers', 13),
   ('Blue seating bowl, upper and lower levels on all four sides', 3),
   ('Center-hung video board', 3),
   ('Light wood basketball court with a blue surround', 3),
 ], {'seats': ['seats/crowd'], 'facade': ['facade metal', 'facade glass'], 'roof': ['roof (aerial)'], 'field': ['court', 'court surround']},
  'Rupp Arena, a large rectangular arena box with a flat light roof, beige ribbed metal panel walls with a dark glass band at the base and diagonal-braced corner stair towers',
  'beige ribbed metal cladding, dark glass, concrete, light flat roof membrane'),
 'q2-stadium': ('Q2 Stadium', 'soccer', [
   ('Rectangular soccer pitch with steep stands close to the touchlines on all sides', 1),
   ('Large white steel canopy roof over the west stand, with exposed trusses', 1),
   ('Canopy roofs over the north and south stands with the angled corner trusses', 9),
   ('Green seats throughout', 4),
   ('Green slatted facade panels and a glass entrance on the west side', 9),
   ('Safe-standing supporters section in the south end', 7),
 ], {'seats': ['seats (sun)'], 'facade': ['facade green slats', 'facade glass'], 'roof': ['canopy steel', 'roof (aerial)'], 'field': ['field']},
  'Q2 Stadium, a soccer-specific stadium with a rectangular pitch, steep green-seated stands close to the touchlines, large white steel truss canopy roofs over the stands, green slatted facade panels',
  'natural grass pitch with white lines, green stadium seats, white steel trusses, green slatted panels, glass, concrete'),
 'daytona-international-speedway': ('Daytona International Speedway', 'racetrack', [
   ('Tri-oval track, 2.5 miles, with high banking in the four turns', 'naip'),
   ('Main grandstand along the front stretch with five stacked levels and glass suites (the Daytona Rising frontstretch)', 17),
   ('Checker-pattern seat colors in the frontstretch grandstand', 17),
   ('Pit road along the front stretch, separated by a grass strip', 5),
   ('Infield with Lake Lloyd and the garage area', 'naip'),
   ('Five entrance "injector" towers on the back of the grandstand', 17),
 ], {'seats': ['seats (checker)'], 'facade': ['facade glass', 'facade cladding'], 'roof': [], 'field': ['track', 'infield grass']},
  'Daytona International Speedway, a large tri-oval racetrack with steeply banked turns, a huge multi-level main grandstand along the front stretch with glass suites, pit road, a grass infield with a lake',
  'gray asphalt, white painted lines, concrete walls, gray and blue seats, glass, steel, grass, water'),
 'bristol-motor-speedway': ('Bristol Motor Speedway', 'racetrack', [
   ('Short half-mile oval with extremely steep concrete banking', 26),
   ('Grandstands enclose the entire track like a stadium bowl', 26),
   ('Gray seating with red seating sections on the backstretch side', 26),
   ('Concrete track surface with white walls', 26),
   ('Infield with pit road and garages', 26),
   ('Dark steel exterior with stair towers and the tall upright sign tower at the main entrance', 30),
   ('Set in a valley among wooded hills (excluded from the cutout)', 'naip'),
 ], {'seats': ['seats gray', 'seats red'], 'facade': ['facade steel'], 'roof': [], 'field': ['track', 'infield']},
  'Bristol Motor Speedway, a short steeply banked concrete oval racetrack completely enclosed by tall grandstands like a stadium bowl, gray and red seating, pit road in the infield, dark steel exterior with stair towers',
  'gray concrete track, white walls, gray and red seats, dark steel, concrete'),
 'arthur-ashe-stadium': ('Arthur Ashe Stadium', 'tennis', [
   ('Octagonal-to-round bowl around a single tennis court', 'naip'),
   ('Retractable roof: light fabric panels on a steel superstructure carried on eight columns outside the bowl', 5),
   ('Blue hard court with a light green surround', 21),
   ('Steep upper bowl in dark blue seats', 12),
   ('Red-brick base of the stadium below the steel superstructure', 5),
   ('Roof superstructure is visibly separate from the bowl, standing on its own columns', 9),
 ], {'seats': ['seats'], 'facade': ['base brick', 'steel'], 'roof': ['roof fabric', 'roof (aerial)'], 'field': ['court', 'court surround']},
  'Arthur Ashe Stadium, a large round tennis stadium around a single blue hard court, a retractable light fabric roof on a separate steel superstructure carried on columns outside the bowl, red-brick base',
  'blue acrylic hard court, light fabric roof panels, dark steel trusses, red brick, concrete'),
}

TYPE_RULES = {
 'football': 'Field at regulation proportions with end zones and yard lines; stands parallel to the sidelines; the real bowl shape; press box and scoreboards in their real positions; upper decks and suite rings where they exist.',
 'baseball': "Dirt infield, grass outfield, foul lines; outfield wall at the park's real asymmetric shape and height; stands wrap foul pole to foul pole behind home plate. Never a symmetric bowl.",
 'soccer': 'Rectangular pitch; steep stands close to the touchlines; canopy roofs where they exist.',
 'arena': 'Real roof form and exterior facade.',
 'racetrack': "Banking, main grandstand, pit road. Frame on the grandstand side so the track doesn't read as an empty green pill.",
 'tennis': 'Court, bowl, roof structure.',
}

os.makedirs('docs/overhaul/specs', exist_ok=True)
out = {}
for slug, (name, typ, feats, pal, desc, materials) in SPECS.items():
    col = COLORS[slug]
    refs = {str(x['n']): x for x in VER[slug]}
    path = VER['_paths'][slug]
    def ref(n):
        if n == 'naip': return 'NAIP aerial'
        x = refs.get(str(n)); return f"#{n} ({x['file'].replace('File:', '')})" if x else f'#{n}'
    lines = [f'# {name}', '', f'Type: {typ}. Pipeline path: {path}.', '', f'Type rule: {TYPE_RULES[typ]}', '',
             '## Identifying features', '', '| # | Feature | Reference |', '|---|---|---|']
    lines += [f'| {i} | {f} | {ref(n)} |' for i, (f, n) in enumerate(feats, 1)]
    lines += ['', '## Colors (sampled from the reference photos)', '', '| Role | Sample | Hex | Photo |', '|---|---|---|---|']
    for role, labels in pal.items():
        if not labels: lines.append(f'| {role} | none sampled (not a visible surface for this venue) | | |')
        for l in labels:
            c = col[l]; lines.append(f"| {role} | {l} | `{c['hex']}` | {ref(c['ref'])} |")
    lines += ['', '## References', '']
    lines += [f"- #{x['n']} {x['file'].replace('File:', '')}: {x['author']}, {x['license']}, {x['page']} ({x['role']})" for x in VER[slug]]
    open(f'docs/overhaul/specs/{slug}.md', 'w').write('\n'.join(lines) + '\n')
    colors_text = ', '.join(f"{l} {col[l]['hex']}" for ls in pal.values() for l in ls)
    out[slug] = {'name': name, 'type': typ, 'path': path, 'desc': desc, 'materials': materials, 'colors_hex': colors_text, 'features': [f for f, _ in feats]}
json.dump(out, open('scripts/stadiums/overhaul/specs.json', 'w'), indent=1)
print('wrote', len(out), 'spec sheets')
