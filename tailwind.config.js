module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
      "text-one": "2.9vh",
      "text-24": "3.33vh",
      "text-30": "4.17vh",
      "text-36": "5vh",
      "text-48": "6.67vh",
      "text-72": "10.01vh",
      // "text-one": "1.313rem",
      // "text-24": "1.5rem",
      // "text-30": "1.875rem",
      // "text-36": "2.25rem",
      // "text-48": "3rem",
      // "text-72": "4.5rem",
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
