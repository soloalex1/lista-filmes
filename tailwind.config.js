module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    fontFamily: {
      title: ["Poppins", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
