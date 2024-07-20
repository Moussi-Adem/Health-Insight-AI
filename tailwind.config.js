/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        "whiteblur": "rgb(255 255 255 / 50%)",
        "darkblur": "rgb(1 18 34  / 50%)",
        'light-lavender': '#E6E6FA',
        'medium-purple': '#9370DB',
        'deep-violet': '#8A2BE2',
        'silver-accent': '#C0C0C0',
      },
      screens: {
        'xs': '550px',
      },
      fontFamily:{
        body : ["Roboto"]
      }
    },
  },
  plugins: [],
}
