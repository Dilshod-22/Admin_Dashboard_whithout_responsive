/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'#00040f',
        secondary:'#00f6ff',
        lightWhite:'rgba(255, 255, 255, 0.7)',
        lightBlue:'#5E72E4',
        lightGray:'#525F7F',
        backColor:'#F6F9FC;',
        bgBlue:'#5E72E4'

      },
      fontfamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens : {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    },
    text:{
      17:"17px"
    },
  },
  plugins: [],
}

