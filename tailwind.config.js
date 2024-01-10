/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#283739",
        secondaryColor: "#F4EEC7",
        thirdColor: "#938f72"
      }
    },
  },
  plugins: [],
}

