/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        app: "url('/1.jpg')",
      },
      colors: {
        "vtd-primary": colors.blue,
      },
    },
  },
  plugins: [],
};
