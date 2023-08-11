module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./**/*.vue",
    "./tailwind-theme.js",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        body: ["PP Object Sans", "sans-serif"],
        display: ["PP Object Sans", "sans-serif"],
        mono: ["Courier", "Courier New", "monospace"],
      },
      colors: {
        primary: "#eee",
        body: "#e33f3e",
        bronze: "#534111",
        highlight: "#D7F4F5",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms", "@tailwindcss/typography"),
    FormKitVariants,
  ],
};
