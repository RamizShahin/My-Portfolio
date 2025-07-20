// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // For v3, 'module.exports' is the standard
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path covers all your React components
  ],
  theme: {
    extend: {
      // Add your 'blob' animation keyframes here
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
