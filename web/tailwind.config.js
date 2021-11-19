const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'white-transparent': 'rgba(255, 255, 255, .5)',
        primary: {
          DEFAULT: '#259dbd',
          light: '#c1f1f4',
          // 'light-transparent-10': 'rgba(27, 163, 187, .4)',
          'saturated-transparent': 'rgba(0, 152, 179, .5)',
          // 'saturated-transparent-70': 'rgba(0, 152, 179, .7)',
          'saturated-transparent-80': 'rgba(0, 152, 179, .8)',
          // dark: 'rgba(9, 82, 99, 1)',
          // 'dark-transparent': 'rgba(27, 115, 134, .4)', // #1B7386
          // 'dark-transparent': 'rgba(23, 108, 128, .6)', // #176c80
          // 'dark-transparent': 'rgba(13, 93, 112, .5)', // #0d5d70
          // 'dark-transparent-hover': 'rgba(13, 93, 112, .7)',
          'dark-transparent': 'rgba(9, 82, 99, .5)', // #095263
          'dark-transparent-hover': 'rgba(9, 82, 99, .7)',
          'dark-transparent-overlay': 'rgba(0, 104, 129, .7)',
        },
      },
      fontFamily: {
        serif: ['Times Now', 'Times New Roman', 'serif'],
        sans: ['Favorit', 'Helvetica', 'Arial', 'sans-serif'],
      },
      inset: {
        '4/9': '44.4%',
      },
      maxWidth: {
        22: '22rem', // For artist drops wide-screen widths
      },
      scale: {
        98: '.98',
      },
      width: {
        19: '4.75rem', // For 'Listen' button to stay same size opened/closed
        '2xfull': '200%',
        '3xfull': '300%',
      },
    },
  },
  plugins: [],
};
