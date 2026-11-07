import { useEffect, useRef, useState } from 'react'

// Renders a placeholder until the wrapper scrolls within `rootMargin` of
// the viewport, then mounts its children. Combined with React.lazy, this
// defers the chunk *download* — not just the render — for below-the-fold
// components like the macro chart, cities map, and compare tool.
export default function LazyOnVisible({ children, minHeight = 480, rootMargin = '320px' }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (visible) return
    if (typeof IntersectionObserver === 'undefined') {
      // Older browsers: render immediately.
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible, rootMargin])

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible && children}
    </div>
  )
}
