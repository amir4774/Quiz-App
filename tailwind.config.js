const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/*.jsx', './src/components/*.jsx'],
  theme: {
    extend: {},
    screens: {
      sm: '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

