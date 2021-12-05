module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#fffffb",
          DEFAULT: "#d7ccc8",
          dark: "#a69b97"
        },
        indigo: {
          light: "#666ad1",
          DEFAULT: "#303f9f",
          dark: "#001970"
        },
        rose: {
          light: "#fff0ff",
          DEFAULT: "#e8bdd2",
          dark: "#b58da1"
        }
      },
      backgroundImage: {
        "p5-background": "url('../assets/images/p5Background.png')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
