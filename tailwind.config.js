/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'res1': '1025px',
        'res2': '760px',
        'res3': {'min': '1025px'},
      }
    },
  },
  plugins: [],
}