import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Bundle splitting: pull the two heavyweight libraries into their own
    // chunks so they cache separately AND can be lazy-loaded with the
    // components that import them.
    rollupOptions: {
      output: {
        manualChunks: {
          // recharts pulls in d3-shape, d3-scale, victory-vendor, etc.
          // ~300 KB minified. Goes into its own chunk so the initial
          // route (the team table) can render without it.
          recharts: ['recharts'],
          // d3-geo + topojson-client only used by CitiesMap. The us-atlas
          // package only contains JSON files (no JS entry), so Vite handles
          // its chunking automatically when it gets imported inside the
          // lazy CitiesMap chunk.
          maps: ['d3-geo', 'topojson-client'],
          // React core stays in its own vendor chunk so it caches across
          // app deploys.
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Quiet the 500 KB warning — we accept a recharts chunk in the
    // 400-500 KB range since it's lazy-loaded after first paint.
    chunkSizeWarningLimit: 600,
  },
})
