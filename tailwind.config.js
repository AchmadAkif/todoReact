/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5438DC",
        red: "#ED0E0E",
        dimRed: "#FDEBEC",
        grey: "#74767D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}