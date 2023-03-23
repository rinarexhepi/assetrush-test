/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          xl: "10rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mono: ["ui-monospace", "PTMono-Regular"],
        gtplanar: ["GT-Planar", "sans-serif"],
        abril: ["Abril-Fatface"],
        benet: ["bennet"],
      },
      colors: {
        // primary: "#091537",
        // primary: "#12121c",
        // primary: "#151935",
        primary: "#150d2b",
        secondary: "#4e30a0;",
        joinBackground: "#000048",
        hover: "#00010a",
        pulseCard: "#1c1833",
        pulseCardHover: "#242240",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(90deg, rgba(0,64,192,1) 0%, rgba(78,48,160,1) 10%, rgba(160,32,128,1) 100%)",
      }),
    },
  },
  variants: {},
  plugins: [
    function({ addComponents }) {
      addComponents(
        {
          ".text-outline": {
            color: "#fff",
            "-webkit-text-fill-color": "rgba(255,255,255,0)",
            "-webkit-text-stroke-width": "2px",
            "-webkit-text-stroke-color": "#fff",
          },
        },
        { variant: "responsive" }
      );
    },
  ],
};
