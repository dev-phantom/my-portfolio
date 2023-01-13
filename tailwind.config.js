const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: '320px',
      md: '640px',
      xmd: '840px',
      lg: '1024px',
      xl: '1280px',
      _2k: '2000px',
    },
    extend: {
      colors : {
        bgColor: "#222222",
        secondary: "#B86709",
        primary: "#25FF79",
        orange: "#CC4C0C",
        textColor: "#FFFFFF"

      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    
    },
  },
  plugins: [],
}
