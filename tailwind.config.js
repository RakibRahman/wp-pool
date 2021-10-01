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
    fontSize: {
      "text-one": "21px",
      "text-24": "24px",
      "text-30": "30px",
      "text-36": "36px",
      "text-48": "48px",
      "text-72": "72px",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "960px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
