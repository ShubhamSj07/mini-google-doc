/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E72EB",
        primaryDark: "#130D6F",
        secondary: "#0D0745",
        orange: "#FF9190",
        yellow: "#FFD166",
        black: "#141C1D",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
