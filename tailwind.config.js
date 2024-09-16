const { BiFontFamily } = require("react-icons/bi");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Cooper"],
      },
    },
  },
  plugins: [],
};
