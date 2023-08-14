/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        threadWidth: "clamp(200px,100%,400px)",
      },
      colors: {
        gray: "var(--clr-gray)",
        lightGray: "var(--clr-gray)",
      },
      fontSize: {
        md: "14px",
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
        "place-center": {
          to: {
            width: "100%",
            "max-width": "90dvh",
            "border-radius": "0",
          },
        },
        "move-center": {
          to: {
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          },
        },
      },
      animation: {
        "fade-out": "fade-out .5s ease forwards",
        "fade-in": "fade-in .3s ease forwards",
        "place-center": "move-center .3s forwards, place-center .3s forwards",
      },
    },
  },
  plugins: [],
};
