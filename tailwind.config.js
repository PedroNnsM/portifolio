/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["'Cursive', sans-serif"],
        "permanent-marker": ["'Permanent Marker', cursive"],
      },
      backgroundImage: {
        "banner-bg": "url('./src/assets/bg.jpg')",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
        acme: ['"Acme"', "sans-serif"],
        marker: ['"Permanent Marker"', "cursive"],
      },
    },
    colors: {
      bluePrimary: "#0d6ba6",
      blueLight: "#4978ff",
      blackDark: "#0d0d0d",
    },
  },
  plugins: [],
};
