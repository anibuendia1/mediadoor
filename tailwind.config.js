module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mediadoor: {
          900: '#1f2d3d',
          800: '#3c4858',
          400: '#c0ccda',
          200: '#e0e6ed',
          100: '#f9fafc',
        }
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
