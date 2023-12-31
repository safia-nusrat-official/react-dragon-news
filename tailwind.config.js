/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':"'Poppins', sans-serif"
      },
      colors:{
        'primary':'#d72050',
        'secondary':'#403f3f'
      }
    }
    // screens:{
    //   'tablet':'640px',
    //   'laptop':'1024px',
    //   'desktop':'1440px'
    // }
  },
  plugins: [require("daisyui")],
}

