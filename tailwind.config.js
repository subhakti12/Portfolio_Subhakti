/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#3f3cbb',
        secondary: '#64748b',
        dark: '#0f172a',
        hitam: '#030712',
        Blue: '#1d4ed8',
        Rose: '#4c0519',
        Blue1: '#38bdf8',
        Slate: '#334155',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

