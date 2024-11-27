const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        orbit: 'orbit 20s linear infinite',
      },
      colors: {
        primary: "#0A1825",
        secondary: "#FFD700",
      },
      
    },
  },
  plugins: [flowbite.plugin()],
};