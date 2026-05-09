/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Editorial palette — WSJ/NYT/538 inspired
        paper:    '#fafaf8',  // page bg, warm off-white
        ink:      '#1a1a1a',  // primary text
        graphite: '#3d3d3d',  // dark secondary text
        slate:    '#6b6b6b',  // muted text
        ash:      '#9b9b9b',  // tertiary / labels
        rule:     '#e8e8e8',  // borders / dividers
        'rule-strong': '#d4d4d4',
        accent:        '#e8600a',  // WSJ orange
        'accent-dark': '#b84800',
        'accent-soft': '#fcecdb',  // accent at very low alpha
        callout:       '#fff9e6',  // soft yellow highlight
      },
      boxShadow: {
        card:  '0 1px 2px rgba(26,26,26,0.04), 0 1px 1px rgba(26,26,26,0.03)',
        'card-hover': '0 4px 12px rgba(26,26,26,0.08)',
        modal: '0 24px 48px rgba(26,26,26,0.18)',
      },
    },
  },
  plugins: [],
}
