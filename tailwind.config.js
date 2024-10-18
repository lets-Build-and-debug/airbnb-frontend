/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : [ 'Harmonia Sans', 'sans-serif'], // Add Harmonia Sans as default sans font
      }
    },
    screens : {
      sm: '743px',
      md: '949px',
      lg: '1127px',
      xl: '1440px'
    }
  },
  plugins: [],
}