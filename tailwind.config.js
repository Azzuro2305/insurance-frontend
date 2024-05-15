/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mid: "1000px",
        medium: "1200px",
        xs: "460px",
        xs2: "320px"
      }
    },
  },
  plugins: [],
}