// Venue illustration for the card: a miniature scale model of the real
// building, generated from licensed photos (docs/overhaul/brief.md). Venues
// whose illustration has not passed QA yet show their footprint shape, drawn
// large, with a small note.
export default function HeroArt({ slug, name, hasArt }) {
  if (!hasArt) {
    return (
      <div className="loadout-model in-progress">
        <img src={`/stadiums/footprints/venues/${slug}.svg`} alt={`Footprint of ${name}, seen from above`} width="512" height="512" decoding="async" />
        <p className="in-progress-note">Illustration in progress</p>
      </div>
    )
  }
  return (
    <div className="loadout-model">
      <img
        src={`/stadiums/hero/${slug}.webp`}
        alt={`Scale-model illustration of ${name}`}
        width="1600"
        height="1600"
        decoding="async"
        onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
      />
    </div>
  )
}
