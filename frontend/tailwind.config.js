/** @type {import('tailwindcss').Configuration} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
      },
      fontSize: {
        "text-xs": ["12px", "14px"],
        "text-sm": ["14px", "16px"],
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
        clear: "#f4f7f2",
        dark: "#18191A",
        primaryHover: "#dd5a4c",
        borderGray: "#dfe1e5",
        black: "#181818",
        darkHover: "rgba(0, 0, 0, 0.079)",
        clearHover: "rgba(255, 255, 255, 0.079)",
        error: "#FF6452",
        info: "#063970",
        succses: "#AED581",
      },
      boxShadow: {
        neumorphic:
          "8px 8px 16px 0 rgba(0, 0, 0, 0.2), -8px -8px 16px 0 rgba(255, 255, 255, 0.2)",
        inner: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)",
        flat: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1680px",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        fade: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in-out",
        fade: "fade 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
