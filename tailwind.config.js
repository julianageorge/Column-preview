/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Orange":
      "hsl(31, 77%, 52%)",
      "cyan":
      
        "hsl(184, 100%, 22%)",
    
      "dark_cyan":
        "hsl(179, 100%, 13%)",
        "white-p":" hsla(0, 0%, 100%, 0.75)",
        "light-gray":"hsl(0, 0%, 95%)",
    
    },
    fontFamily:{
      lexend: ['Lexend Deca', 'sans-serif'],
      bigShoulders: ['Big Shoulders Display', 'sans-serif'],
    },
  },
  plugins: [],
}}