/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        bgColor:"rgb(38, 4, 3)",
        textColor:"white",
        accentColor:"rgb(255, 201, 153)"
      }
    },
  },
  plugins: [],
}
