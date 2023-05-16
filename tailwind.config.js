/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f3f4f5',
      'black': '#1b2222',
      'blue': '#1090D3',
      'gray': '#e8f1f1',
      'green': '#20e492',
      'grayscale': {
        100: '#f4f6f6',
        200: '#d2dbdb',
        300: '#b0bfc0',
        400: '#8ea3a4',
        500: '#6e8688',
        600: '#526566',
        700: '#374344',
        800: '#1b2222',
        900: '#0E1010',
      },
    },
    extend: {},
  },
  plugins: [],
}