module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0000FF",
        secondary: "#FA4343",
        dark: "#080708",
        faux:{
          alice: "#F0F0FF"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
