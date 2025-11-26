/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF9F6', // Off-white / Alabaster
          text: '#4A4A4A', // Dark Grey
          muted: '#8C8C8C', // Light Grey
          gold: '#C5A065', // Muted Gold
          cream: '#F5F0EB', // Light Cream
          milktea: '#A89078', // Milk Tea
        }
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}