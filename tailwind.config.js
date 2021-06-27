module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff2d20"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
