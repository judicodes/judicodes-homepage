module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        offwhite: {
          DEFAULT: "#e0e0e0"
        },
        darktheme: {
          light: "#3e547b",
          DEFAULT: "#0d2c4f",
          dark: "#000027"
        },
        lighttheme: {
          light: "#ffffff",
          DEFAULT: "#e3ebef",
          dark: "#b1b9bd"
        }
      }
    }
  },
  plugins: []
};
