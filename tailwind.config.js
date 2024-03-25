module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-10": "#EFF2F9",
        "black-text": "#262b33",
      },

      //max-width
      maxWidth: {
        "8xl": "57rem",
      },
      boxShadow: {
        // Add a new shadow box-shadow: 0 20px 60px 0 rgba(186,200,227,.1), 0 16px 36px 0 rgba(186,200,227,.3);
        "container-shadow":
          "0 20px 60px 0 rgba(186,200,227,.1), 0 16px 36px 0 rgba(186,200,227,.3)",
      },
      //definir mi propio stilo de conponente
    },
  },
  plugins: [require("flowbite/plugin")],
};
