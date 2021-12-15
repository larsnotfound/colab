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
        darkgray: '#575757',
        darkestgray: '#222222', 
        darkblue: '#00044A',
      },
    },
    extend: {
      dropShadow: {
        'shadow': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
