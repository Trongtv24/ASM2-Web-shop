/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    fontFamily: {
      'Satoshi': ['Satoshi'],
    }, 
    extend: {
      colors: {
        orange: '#FB8B24',
        white: '#fff',
        red: '#B31312',
        black: '#000',
      },
    },
  },
  plugins: [],
}

