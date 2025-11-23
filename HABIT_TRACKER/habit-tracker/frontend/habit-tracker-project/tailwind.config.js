/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hbCream: '#FBF8FA',
        hbPink: '#F6D6DB',
        hbLime: '#C9D95A',
        hbMint: '#BFE3A9',
        hbPlum: '#4B2F3A',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        baloo: ['Baloo 2', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
