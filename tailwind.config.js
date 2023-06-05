/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
    'cursive': ['Averia Libre', 'cursive'],
    'concert': ['Concert One', 'cursive'],
    'sans': ['Inter', 'sans-serif'],
    },

     
  },
    extend: {
 colors: {
        'gris-fonce': '#ebf2fa',
        'vert-clair': '#a4bd01',
        'vert-fonce': '#679436',
        'arriere-plan' : '#fefff8',
        'footer-final' : '#252424',
        'fond-vert' : '#375517'
       },
  
    },
  }

  plugins: [] 
