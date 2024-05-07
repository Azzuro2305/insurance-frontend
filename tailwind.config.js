/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        medium: "1100px",
        xs: "460px",
        xs2: "320px"
      }
    },
  },
  plugins: [],
}