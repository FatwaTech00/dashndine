/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        customRed: '#b46c55 '
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
