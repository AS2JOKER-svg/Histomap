/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:     '#1f2733',
        muted:   '#6b7688',
        line:    '#e6e9f0',
        surface: '#ffffff',
        accent:  '#4f7cff',
        accent2: '#7c5cff',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.06)',
        lift: '0 10px 30px rgba(16,24,40,.10)',
      },
      borderRadius: {
        xl2: '18px',
      },
    },
  },
  plugins: [],
}
