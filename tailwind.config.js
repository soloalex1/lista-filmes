/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: ["@tailwindcss/line-clamp"],
};

