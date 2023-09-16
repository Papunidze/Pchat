/** @type {import('tailwindcss').Configuration} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "text-xs": ["12px", "16px"],
        "text-sm": ["14px", "20px"],
        "text-base": ["16px", "19.5px"],
        "text-lg": ["18px", "21.94px"],
        "text-xl": ["20px", "24.38px"],
        "text-2xl": ["24px", "29.26px"],
        "text-3xl": ["28px", "50px"],
        "text-4xl": ["48px", "58px"],
        "text-8xl": ["96px", "106px"],
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(to left, #a1ffce, #faffd1)",
      },
      fontFamily: {
        "sans-regular": [
          "Roboto",
          "-apple-system",
          "apple color emoji",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FF6452",
        dark: "#3d3d4e",
        "lighting-hover-color": "rgba(0, 0, 0, 0.04)",
        "border-color": "#dfe1e5",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        1: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
