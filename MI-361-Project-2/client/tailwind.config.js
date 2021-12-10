module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        raspberry: {
          100: '#eaf8f4',
          200: '#d6f1ea',
          300: '#c1ebdf',
          400: '#ade4d5',
          500: '#98ddca',
          600: '#7ab1a2',
          700: '#5b8579',
          800: '#3d5851',
          900: '#1e2c28',
        },
        lime: {
          100: '#f7fbf3',
          200: '#eef7e7',
          300: '#e6f4da',
          400: '#ddf0ce',
          500: '#d5ecc2',
          600: '#aabd9b',
          700: '#808e74',
          800: '#555e4e',
          900: '#2b2f27',
        },
        peach: {
          100: '#fff6f0',
          200: '#ffede1',
          300: '#ffe5d2',
          400: '#ffdcc3',
          500: '#ffd3b4',
          600: '#cca990',
          700: '#997f6c',
          800: '#665448',
          900: '#332a24',
        },
        strawberry: {
          100: '#ffeeed',
          200: '#ffdddc',
          300: '#ffccca',
          400: '#ffbbb9',
          500: '#ffaaa7',
          600: '#cc8886',
          700: '#996664',
          800: '#664443',
          900: '#332221',
        },
      },
      screens: {
        '4xl': '1700px'
      }
    },
  },
  variants: {
    display: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
  ],
};
