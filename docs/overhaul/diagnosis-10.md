# Diagnosis: 10 iconic venues that failed 3 photo-path attempts

Sheet: reference | mask on reference | depth control | edge control | best output.
Attempts 4 and 5 (the brief allows 5) go only after the cause is fixed.

| venue | cause | fix |
|---|---|---|
| nissan-stadium | **Segmentation/reference**: the mask includes the huge "Nissan Stadium" billboard in front of the bowl; blanked, it became a flat slab that the generator drew as a second field. | Mask the billboard out of the venue mask (and keep it blanked), or a reference without it. |
| lincoln-financial-field | **Bad reference**: low side view across a rail yard; the field is barely visible, so the output is a facade with no field. | New reference from the widened search (oblique, 30-50 degrees, field visible). |
| state-farm-stadium | **Reference too distant**: the venue is small in frame; the output keeps the ribbed silver oval but no detail, and roof lettering survives. Blind ID read it as a generic arena. | Closer reference from the widened search, or a hi-res crop; blank the roof lettering. |
| neyland-stadium | **Reference lacks the signature**: game-day photo with a plain green field, no orange-and-white checkerboard end zones; the output reads as any big orange bowl. | New reference showing the checkerboard end zones. |
| target-field | **Segmentation too loose**: the mask takes in the plaza, ramps and rooftops in the foreground; the generator turned them into debris, and the ballpark reads as Wrigley. | Tighter hand-marked box around the ballpark only; or a new reference. |
| rate-field | **Bad angle**: near top-down (about 70 degrees) with a parachutist over the field; nothing distinctive survives at that angle. | New oblique reference. |
| raymond-james-stadium | **Reference lacks the signature and mask too loose**: the pirate ship is out of view; parking garages are inside the mask. | New reference showing the north end zone (pirate ship); tighter mask. |
| chase-center | **Text in the reference**: the roof carries giant "CHASE CENTER" lettering, not blanked in attempt 3; the generator replaced it with an invented oculus. | Blank the roof lettering in the reference; keep the rest. |
| comerica-park | **Bad angle and loose mask**: low side view, mask is a trapezoid including foreground buildings; depth is flat. | New oblique reference. |
| spartan-stadium | **Bad reference**: steep, dark, low-contrast; outputs are blurry with a blue halo. | New reference. |

Summary: 4 fixable in place (Nissan, Target, Chase Center, State Farm with a crop);
6 need a different reference photo from the widened search.
