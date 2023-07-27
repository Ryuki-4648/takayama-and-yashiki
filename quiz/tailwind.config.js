/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color01: "#f7ea2a",
        color02: "#3ea8ff",
        color03: "#0f83fd",
      },
    },
  },
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  plugins: [],
};
