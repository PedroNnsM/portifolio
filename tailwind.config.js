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
        'banner-bg': "url('./src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
