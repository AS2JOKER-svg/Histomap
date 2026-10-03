/** @type {import('tailwindcss').Config} */
// Toutes les couleurs pointent vers des variables CSS (src/index.css) :
// le mode sombre se fait en changeant les variables, pas les classes.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       token('bg'),
        surface:  token('surface'),
        surface2: token('surface-2'),
        ink:      token('ink'),
        muted:    token('muted'),
        line:     token('line'),
        accent:   token('accent'),
        accent2:  token('accent-2'),
        success:  token('success'),
        danger:   token('danger'),
        warning:  token('warning'),
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
      },
      borderRadius: {
        xl2: '18px',
        '4xl': '28px',
      },
      spacing: {
        tabbar: 'calc(4.25rem + env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
