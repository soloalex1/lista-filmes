module.exports = {
  babel: {
    presets: ["@babel/preset-react"],
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
