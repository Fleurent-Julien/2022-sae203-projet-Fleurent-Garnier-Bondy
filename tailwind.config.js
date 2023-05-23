/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [] ,

  Colors: {
  "Gris": "#ebf2fa",
  "Vert-clair": "#a4bd01",
  "Vert-foncé": "#679436",
  "Texte": "#000000",
  "Background": "#fefff8",
  "Footer": "#252424",
  "Fond-Vert": "#375517"
 },
}
