module.exports = {
  purge: [],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#E3F2FB",
        "purple-th": "#3e2770",
        "purple2-th": "#7F5DA4",
        "blue-th": "#3CA4DC",
        "green-th": "#2BB6AA",
        "green2-th": "#71BB70",
        "pink-th": "#CD80B4",
        "yellow-th": "#FED061"
      },
      boxShadow: {
        blue: '0 10px 15px -3px #3CA4DC50, 0 4px 6px -2px #3CA4DC20'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
