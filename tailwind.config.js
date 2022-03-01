module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "330px",
      // => @media (min-width: 340px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      varela: ['"Varela Round"', "sans-serif"],
      body: ['"Inter"', "sans-serif"],
    },

    extend: {
      colors: {},
    },
  },
  plugins: [],
};
