const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      phone: '600px'
    },
    
    extend: {
      colors: {
        trueGray: colors.trueGray,
      },
      width:{
        50: '50px',
        500 : '500px',
        100: '100px',
        col2: '50%'
      },
      borderRadius:{
        10:'10px'
      },
      spacing:{
        px20: '20px',
        px30: '30px',
        px50: '50px',
      },
      maxWidth:{
        1440: '1440px'
      },
      boxShadow:{
        1:'4px 4px 10px #C4C4C4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
