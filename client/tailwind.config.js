/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          "0%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(20px)",
          }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
