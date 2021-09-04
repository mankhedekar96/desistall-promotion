module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      '4xl': '2.5rem',
      '6xl': '4rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
