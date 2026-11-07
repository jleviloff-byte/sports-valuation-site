// Simple neutral skeleton matching the editorial aesthetic — used as
// Suspense fallback while a lazy chunk downloads.
export default function SectionSkeleton({ label = 'Loading…', height = 480 }) {
  return (
    <div
      className="border-t border-rule flex items-center justify-center"
      style={{ minHeight: height }}
    >
      <span className="font-mono text-[10px] tracking-widest uppercase text-ash">
        {label}
      </span>
    </div>
  )
}
