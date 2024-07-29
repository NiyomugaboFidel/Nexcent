/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#4CAF4F",
        "secondary":"#263238",
        "info":"#2194f3",
        "black":"#263238",
        "dGrey":"#4D4D4D",
        "grey":"#717171",
        "rGrey":"#89939E",
        "greyBlue":"#ABBED1",
        "silver":"#F5F7FA",
        "White":"#FFFFFF",
        "textColor":"#4D4D4D"

     

      },
      fontSize:{
         "h2":"25px",
         "p":"11px"

      },
      lineHeight:{
        "h2":"30px",
        "p":"17px"
      },
      fontFamily:{
            'inter':['inter']
      },
      fontWeight:{
          'semiBold':'64/76'
      },
      backgroundImage:{
         'home':'url()'
      }

    },
  },
  plugins: [],
}