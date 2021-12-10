module.exports = {
  purge: [
    './pages/**/*.{tsx, jsx}', 
  './components/**/*.{tsx, jsx}',
  './utils/**/*.{tsx, jsx}'
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "node": "#3C873A"
      },
      backgroundImage: (theme) => ({
        'main-header': "linear-gradient(to right, black, #6d28d9 100%)",
      }),
      height: {
        '1/10': '10%',
        'about': "480px", 
        '500': "500px" 
      },
    },
  },
  variants: {
    extend: {
      display: ['children', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-children')
  ],
};

