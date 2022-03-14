module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "awcy-red": {
          400: "#A90C00",
          800: "#750400",
        },
        "awcy-orange": "#EA9010",
        "awcy-blue": "#009CA8",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
