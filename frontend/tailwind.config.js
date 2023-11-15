/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "rgb(38, 4, 3)",
        textColor: "white",
        accentColor: "rgb(255, 201, 153)",
        accentColor2: "rgba(250,243,225,1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
