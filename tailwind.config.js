module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      'base': '1.5rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
