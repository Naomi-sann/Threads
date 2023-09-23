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
        menuHeight: "75px",
      },
      colors: {
        gray: {
          200: "var(--clr-light-gray)",
          400: "var(--clr-medium-gray)",
          600: "var(--clr-gray)",
          800: "var(--clr-dark-gray)",
          900: "rgb(30,30,30)",
        },
        tomatoRed: "var(--clr-tomato-red)",
        themeColor: "var(--clr-theme)",
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
