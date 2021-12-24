module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        offwhite: {
          DEFAULT: "#e0e0e0"
        },
        beige: {
          light: "#fffffb",
          DEFAULT: "#d7ccc8",
          dark: "#a69b97"
        },
        indigo: {
          light: "#686bb4",
          DEFAULT: "#384084",
          dark: "#001a57"
        },
        rose: {
          light: "#fff0ff",
          DEFAULT: "#e8bdd2",
          dark: "#b58da1"
        }
      },
      backgroundImage: {
        "p5-background": "url('../assets/images/p5-background-light.png')",
        "p5-background-dark": "url('../assets/images/p5-background-dark.png')"
      },
      transitionProperty: {
        backgroundImage: "url"
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
      transitionProperty: ["hover"],
      transitionDuration: ["hover"],
      transitionTimingFunction: ["hover"]
    }
  },
  plugins: []
};
