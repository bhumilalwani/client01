/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
       
      extend: {
        fontFamily:{
            arial:['Arial'],
            baloo:['Baloo2'],
            grand:['Grandstander'],
            inter:['Inter'],
            algerian:['Algerian'],
            bevan:['Bevan'],
        }
      },
     },
    plugins: [],
  }