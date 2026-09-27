/** @type {import('tailwindcss').Config} */
// Color tokens resolve to CSS variables defined in src/index.css, so the same
// class names render the light and dark palettes. Values are "r g b" triplets
// so Tailwind's opacity modifiers (bg-ink/40) keep working.
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Surfaces
        paper:    v('bg'),       // page background
        card:     v('card'),     // cards, panels, table surface
        // Text
        ink:      v('text'),     // primary text
        graphite: v('text2'),    // secondary text
        slate:    v('text2'),
        ash:      v('text3'),    // tertiary labels
        // Lines
        rule:          v('border'),
        'rule-strong': v('border'),
        // Semantic
        accent:        v('accent'),
        'accent-dark': v('accent'),
        'accent-soft': v('accent-soft'),
        callout:       v('card'),
        positive:      v('positive'),
        negative:      v('negative'),
      },
      boxShadow: {
        card:  '0 1px 2px rgba(20,24,29,0.06)',
        'card-hover': '0 4px 12px rgba(20,24,29,0.10)',
        modal: '0 24px 48px rgba(20,24,29,0.24)',
      },
      spacing: {
        // 8px grid helpers
        1.5: '0.375rem',
        4.5: '1.125rem',
      },
    },
  },
  plugins: [],
}
