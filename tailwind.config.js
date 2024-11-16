/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        "Inter": ['Inter', 'sans-serif'],
      },
      colors: {
        adobe: {
          red: '#FA0F00',
          'light-red': '#FF4B4B',
          gray: '#4B4B4B',
        }
      }
    },
  },
  plugins: [],
};
