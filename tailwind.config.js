/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    extend: {
      colors: {
        morado: "#550dad",
        naranja: "#e48201",
      },
      fontSize: {
        "var-s": "calc(1.275rem + .3vw)",
        "var-m": "calc(1.3rem + .6vw)",
        "var-l": "calc(1.325rem + .9vw)",
      },
    },
  },
  plugins: [],
};
