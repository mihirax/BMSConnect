/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4f46e5',
        'secondary': '#10b981',
        'accent': '#f97316',
        'neutral': '#1f2937',
        'base-100': '#f3f4f6',
      },
    },
  },
  plugins: [],
};
