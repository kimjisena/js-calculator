/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'display-bg': '#A6CCB4', // #A6CAB8
      'display-fg': '#1C3A26', // #051408
      'black': '#01020A', // #03020C
      'gray-one': '#58647B', // #54657F
      'gray-two': '#7B8699', // #79889C
      'white': '#CBD7EC', // #B8C6D2
      'clear-btn-bg': '#BC6E81', // #BD7685
      'panel-bg': '#2F2F2F'
    },
    fontFamily: {
      'line-one': ['casio_fx-9860giiregular', 'sans-serif'],
      'line-two': ['Digital', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
