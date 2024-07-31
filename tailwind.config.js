/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '1/7': '14%',
      }
    },
    colors: {
      'primary': {
        DEFAULT: '#8ACCC7',
      },
      'secondary': {
        DEFAULT: '#efdfde',
      },
      'third': {
        DEFAULT: '#cfe4df',
      },
      'fourth': {
        DEFAULT: '#74A687',
      },
      white: '#fff',
      dark: '#989898',
    }
  },
  plugins: [],
}

