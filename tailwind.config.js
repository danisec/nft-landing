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
      keyframes: {
        animation: {
          rotate: "rotate 2s alternate-reverse infinite",
          rotateX: "rotate 2s alternate-reverse backwards infinite",
        },
        rotate: {
          "0%, 100%": { transform: "rotateY(-180deg)" },
          "50%": { transform: "rotate(1deg)" },
        },

        rotateX: {
          "0%": { transform: "rotate(0deg) duration(.2s)" },
          "50%": { transform: "rotate(90deg) duration-2" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
