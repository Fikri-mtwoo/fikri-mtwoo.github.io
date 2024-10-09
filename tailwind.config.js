/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode : 'class',
  theme: {
    container:{
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        fontPrimary : '#ea580c',
        fontSecond : '#0f172a',
        fontUmum : '#64748b' 
      },
      screens:{
        '2xl':'1320px'
      },
      spacing : {
        448 : '28rem'
      }
    },
  },
  plugins: [],
}

