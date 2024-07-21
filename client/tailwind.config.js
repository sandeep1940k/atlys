/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-body': 'rgb(22, 22, 28)',
        'bg-card': 'rgb(41 43 47)',
        'border-card': 'rgb(58, 62, 67)',
      },
      fontSize:{
        '14px': '14px',
        '12px': '12px',
      },
      width:{
        '70p': '70%',
        '430px': '430px'
      }
    },
  },
  plugins: [],
}
