module.exports = {
  purge: [],
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      whiteBlack: {
        w: "#f8f8f8",
        b: "#000000",
      },
      blue: {
        light: "#2b8fe5",
        DEFAULT: "#1fb6ff",
        dark: "#092772",
      },
      gray: {
        light: "#5f6672",
      },
      yellow: {
        light: "#f0c331",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
