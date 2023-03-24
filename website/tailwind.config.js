/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'blazingOrange' : '#d85c44',
        'blazingOrangeClick' : '#f5664a'
      }
    },
    minWidth: {
      '200': '200px',
      '400': '400px',
    },
  },
  plugins: [],
}
