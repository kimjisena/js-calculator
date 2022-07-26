/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'display-bg': '#A6CCB4', // #A6CAB8
      'display-fg': '#1C3A26', // #051408
      'display-wrapper': '#01020A', // #03020C
      'input-wrapper': '#58647B', // #54657F
      'button-bg': '#7B8699', // #79889C
      'button-fg': '#CBD7EC', // #B8C6D2
      'clear-btn-bg': '#BC6E81' // #BD7685
    },
    fontFamily: {
      'line-one': ['casio_fx-9860giiregular', 'sans-serif'],
      'line-two': ['Digital', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
