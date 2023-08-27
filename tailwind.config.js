/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        threadWidth: "clamp(200px,100%,700px)",
        interactionIconSize: "22.5px",
      },
      colors: {
        gray: "var(--clr-gray)",
        lightGray: "var(--clr-light-gray)",
        darkGray: "var(--clr-dark-gray)",
        themeColor: "var(--clr-theme)",
      },
      fontSize: {
        md: "18px",
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
