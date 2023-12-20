/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'awardImg': "url('./src/assets/award_1.svg')",
        'gkLogo':"url('../src/assets/gk-logo.jpeg')"
      },
    },
  },
  plugins: [],
}

