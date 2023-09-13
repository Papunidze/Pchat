/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(to right bottom, #d5d88d, #6ba587, #88b884, #dbddbb)",
      },
      fontFamily: {
        regular: [
          "Montserrat,Mona Sans, Helvetica Neue, Helvetica,Graphik Web Regular, Arial",
          "sans-serif",
        ],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FF6452",
        "dark-text": "#3d3d4e",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "main-shadow": "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
