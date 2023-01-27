/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          "tracking-in-contract-bck-top": "tracking-in-contract-bck-top 1s ease-in-out    both"
      },
      keyframes: {
          "tracking-in-contract-bck-top": {
              "0%": {
                  "letter-spacing": "1em",
                  transform: "translateZ(400px) translateY(-300px)",
                  opacity: "0"
              },
              "40%": {
                  opacity: ".6"
              },
              to: {
                  transform: "translateZ(0) translateY(0)",
                  opacity: "1"
              }
          }
      }
  }
  },
  plugins: [],
}
