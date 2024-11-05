/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Titillium: ["Titillium Web", "serif"],
        Poppins: ["Poppins", "serif"],
        roboto: ["Roboto", "serif"]
      }
    },
  },
  plugins: [],
}

