export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
       colors: {
            darkblue: '#0a192f', // dark navy tone
        },
        keyframes: {
        skillFill: {
          "0%": { width: "0%" },
        },
      },
      animation: {
        skillFill: "skillFill 1.2s ease-out forwards",
      },
        
    },
  },
  plugins: [],
};
