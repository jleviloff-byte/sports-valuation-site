export default function TitleBar({ teamCount = 174 }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-2xl sm:text-3xl">What's My Team Worth</h1>
        <p className="text-sm text-graphite mt-1">
          Forbes valuations for {teamCount} franchises across six leagues, with what's inside each number.
        </p>
      </div>
    </section>
  )
}
