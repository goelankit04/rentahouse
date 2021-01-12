module.exports = {
  purge: ['./Components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Gilroy'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
