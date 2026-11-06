import { useEffect, useRef, useState } from 'react'

// Slowly rotating brick model. Shows the hero WebP immediately and swaps to the
// 3D model once three.js and the GLB have loaded (lazy, only when a card opens).
// Stays on the image if WebGL is unavailable or the user prefers reduced motion.
export default function BrickModelViewer({ slug, name, hasModel }) {
  const host = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
    if (!hasModel) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    let disposed = false
    let cleanup = () => {}
    ;(async () => {
      const [THREE, { GLTFLoader }, { MeshoptDecoder }] = await Promise.all([import('three'), import('three/addons/loaders/GLTFLoader.js'), import('three/addons/libs/meshopt_decoder.module.js')])
      if (disposed || !host.current) return
      let renderer
      try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }) } catch { return }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      const scene = new THREE.Scene()
      scene.add(new THREE.AmbientLight(0xffffff, 0.9))
      scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 0.6))
      const key = new THREE.DirectionalLight(0xffffff, 1.6)
      key.position.set(-60, 120, 40)
      scene.add(key)
      const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(`/stadiums/models/${slug}.glb`)
      if (disposed) { renderer.dispose(); return }
      const pivot = new THREE.Group()
      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model)
      const c = box.getCenter(new THREE.Vector3())
      model.position.sub(c)
      pivot.add(model)
      scene.add(pivot)
      const radius = box.getSize(new THREE.Vector3()).length() / 2
      const cam = new THREE.OrthographicCamera(-radius, radius, radius, -radius, -1000, 1000)
      cam.position.set(1, Math.SQRT2 * 0.82, 1).normalize().multiplyScalar(200)
      cam.lookAt(0, 0, 0)
      const size = () => {
        const w = host.current?.clientWidth || 400
        renderer.setSize(w, w, false)
      }
      size()
      host.current.appendChild(renderer.domElement)
      renderer.domElement.setAttribute('aria-hidden', 'true')
      const ro = new ResizeObserver(size)
      ro.observe(host.current)
      let raf = 0
      const t0 = performance.now()
      const tick = (t) => {
        pivot.rotation.y = ((t - t0) / 1000) * 0.25
        renderer.render(scene, cam)
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      setReady(true)
      cleanup = () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        renderer.domElement.remove()
        scene.traverse((o) => { o.geometry?.dispose?.(); if (o.material) [].concat(o.material).forEach((m) => m.dispose()) })
        renderer.dispose()
      }
    })().catch(() => {})
    return () => { disposed = true; cleanup() }
  }, [slug, hasModel])

  return (
    <div ref={host} className="loadout-model">
      {!ready && (
        <img
          src={`/stadiums/hero/${slug}.webp`}
          alt={`Brick-built illustration of ${name}`}
          onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
        />
      )}
    </div>
  )
}
