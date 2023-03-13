/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        navy: {
          30: '#668397',
          40: '#99acba',
          50: '#325a75',
          100: '#003153',
          200: '#002147',
          300: '#455382',
          400: '#1d2951',
        },
      },
    },
  },
  plugins: [],
};
