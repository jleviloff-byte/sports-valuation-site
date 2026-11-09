// Venue illustration for the card: a miniature scale model of the real
// building, generated from licensed photos or measured footprints
// (docs/overhaul/brief.md). One WebP, no 3D runtime.
export default function HeroArt({ slug, name }) {
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
