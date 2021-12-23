module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Urbanist', 'Arial', 'sans-serif'],
    },
    colors: {
      brandprimary: {
        blue: '#0000FF',
        lightblue: '#0E0662',
        purple: '#8B1AF9',
        lightpurple: '#B884FF',
      },
      grayscale: {
        white: '#FFFFFF',
        black: '#000000',
        lightgray: '#f9f9f9',
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
      backgroundImage: {
        'hero-pattern': "url('/assets/logo-background.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
