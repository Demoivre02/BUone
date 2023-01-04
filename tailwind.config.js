/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'nuni': ['Nunito', 'sans-serif'],
        'rubi': ['Rubik', 'sans-serif'],
        'mont': [ 'Montserrat', 'sans-serif'],
        'jarkta': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
