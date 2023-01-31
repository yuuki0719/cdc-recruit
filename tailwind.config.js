/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
    theme: {
        extend: {
            animation: {
                "slide-in-blurred-left": "slide-in-blurred-left 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)   both"
            },
            keyframes: {
                "slide-in-blurred-left": {
                    "0%": {
                        transform: "translateX(-1000px) scaleX(2.5) scaleY(.2)",
                        "transform-origin": "100% 50%",
                        filter: "blur(40px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateX(0) scaleY(1) scaleX(1)",
                        "transform-origin": "50% 50%",
                        filter: "blur(0)",
                        opacity: "1"
                    }
                }
            }
        }
    }
}

