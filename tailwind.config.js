/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        orange: "hsl(25, 97%, 53%)",
      },
      fontFamily: {
        overpass: '"Overpass", sans-serif',
      },
      screens: {
        mobile: { max: "500px" },
      },
    },
  },
  plugins: [],
};
