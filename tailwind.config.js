const { sky, trueGray } = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        sky,
        trueGray,
        'trueGray-750': '#353535',
        'trueGray-850': '#1f1f1f',
      },
    },
  },
  plugins: [],
}
