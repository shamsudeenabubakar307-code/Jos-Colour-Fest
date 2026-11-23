/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#16174a',
        night: '#1d1f6e',
        'night-dark': '#15175a',
        magenta: '#d6006f',
        'magenta-dark': '#b80060',
        sun: '#ffc21a',
        'sun-light': '#ffd04d',
        leaf: '#0a9b62',
        ember: '#f26a1b',
        lagoon: '#0aa5b5',
        paper: '#f6f5fa',
      },
    },
  },
  plugins: [],
}
