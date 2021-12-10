module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mblack: '#161f1f',
        myellow: '#f7dc00',
        myellowbk: '#d6b42b',
        mpurple: '#d8c0cb',
        mpurplebk: '#94868d',
        mgreen: '#aac99d',
        mgreenbk: '#869c7c',
        mred: '#c7615f',
        mredbk: '#985150',
        mblue: '#85bcc4',
        mbluebk: '#329e9e',
      },
    },
    fontFamily: {
      rale: ['Raleway'],
      bebas: ['Bebas Neue']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
