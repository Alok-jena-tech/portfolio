// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        // floatDot: {
        //   "0%": { transform: "translateY(0px)" },
        //   "50%": { transform: "translateY(-20px)" },
        //   "100%": { transform: "translateY(0px)" },
        // },
      },
      animation: {
        blob: "blob 10s infinite",
        // floatDot: "floatDot 8s ease-in-out infinite", // slower & smoother
      },
      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
      },
    },
  },
  plugins: [],
};
