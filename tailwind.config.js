/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194f3",
        black: "#263238",
        dGrey: "#4D4D4D",
        grey: "#717171",
        rGrey: "#89939E",
        greyBlue: "#ABBED1",
        silver: "#F5F7FA",
        White: "#FFFFFF",
        textColor: "#4D4D4D",
      },
      fontSize: {
        h2: "28px",
        p: "16px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "36px",
        "4xl": "48px",
      },
      lineHeight: {
        h2: "30px",
        p: "17px",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      spacing: {
        "1/2": "0.125rem",
        "1/4": "0.0625rem",
        "1/3": "0.083333rem",
        "2/3": "0.166667rem",
        "3/4": "0.1875rem",
        "full": "100%",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      backgroundImage: {
        home: "url('/path/to/image.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
