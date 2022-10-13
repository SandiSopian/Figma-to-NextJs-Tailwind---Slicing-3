/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".tag": {
          cursor: "pointer",
        },
        ".active": {
          fontWeight: "bold",
          borderBottomWidth: "2px",
          borderColor: "rgb(0 0 0 0.5)",
          transitionTimingFunction: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
          transitionDuration: "75ms",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
