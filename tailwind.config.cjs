/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kadwa: ['Kadwa', 'serif']
    },
    extend: {
      keyframes:{
        descida:{
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'}
        }
      },
      animation: {
        'nav-drop': 'descida .5s',
      },
    },
  },
  plugins: [],
}
