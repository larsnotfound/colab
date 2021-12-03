module.exports = {
  purge: ['./src/**/*.{vue}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Urbanist', 'Arial', 'sans-serif'],
    },
    colors: {
      brandprimary: {
        blue: '#0000FF',
        purple: '#8B1AF9',
        lightpurple: '#B884FF'
      },
      grayscale: {
        white: '#FFFFFF',
        lightgray: '#E1E1E1',
        gray: '#B8B8B8',
        darkgray: '575757',
        darkestgray: '#222222', 
        darkblue: '#00044A',
      },
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
