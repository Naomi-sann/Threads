/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1000px",
      },
      maxHeight: {
        maxImageSize: "460px",
      },
      maxWidth: {
        maxImageSize: "460px",
      },
      width: {
        threadWidth: "clamp(200px,100%,620px)",
        interactionIconSize: "22.5px",
        fullThread: "calc(2.5rem+12px)",
      },
      height: {
        mobileMenuHeight: "68px",
        desktopMenuHeight: "74px",
      },
      colors: {
        gray: {
          100: "var(--clr-100-gray)",
          150: "var(--clr-150-gray)",
          200: "var(--clr-200-gray)",
          300: "var(--clr-300-gray)",
          400: "var(--clr-400-gray)",
          500: "var(--clr-500-gray)",
          600: "var(--clr-600-gray)",
          900: "var(--clr-900-gray)",
        },
        tomatoRed: "var(--clr-tomato-red)",
        themeColor: "var(--clr-theme)",
      },
      backgroundColor: {
        menuColor: "rgba(255,255,255,0.85)",
      },
      backdropBlur: {
        menuBlur: "28.5px",
      },
      fontSize: {
        md: "17px",
      },
      keyframes: {
        "fade-out": {
          to: {
            opacity: 0,
          },
        },
        "fade-in": {
          from: {
            backgroundColor: "rgba(0,0,0,0)",
          },
          to: {
            backgroundColor: "rgba(0,0,0,1)",
          },
        },
      },
      animation: {
        "fade-out": "fade-out .5s ease forwards",
        "fade-in": "fade-in .3s ease forwards",
      },
    },
  },
  plugins: [],
};
