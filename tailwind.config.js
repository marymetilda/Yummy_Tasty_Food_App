/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-grey":
          "linear-gradient(90deg, #E8E6E6, #D3D3D3 50.67%, #D3D3D3 50.67%, #D3D3D3 50.67%, #E8E6E6)",
        "linear-grey-white":
          "linear-gradient(90deg, rgba(0, 0, 0, 0) 60.67%, rgba(255, 255, 255, 1) 100%)",
      },
      height: {
        75: "300px",
      },
      animation: {
        shimmer: "animate-shimmer 1.6s linear infinite",
      },
      keyframes: {
        "animate-shimmer": {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "25%": { opacity: 1, transform: "translateX(-60%)" },
          "50%": { opacity: 0, transform: "translateX(100%)" },
          "75%": { opacity: 1, transform: "translateX(-60%)" },
          "100%": { opacity: 0, transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
