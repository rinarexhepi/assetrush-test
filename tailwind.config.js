/** @type {import('tailwindcss').Config} */
//const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#4E30A0',
      },  
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(90deg, rgba(0,64,192,1) 0%, rgba(78,48,160,1) 10%, rgba(160,32,128,1) 100%)',
      }),
    },
  },
  variants: {
      
  },
  plugins: [],
  // plugins: [
  //   plugin(function ({ addComponents, theme }) {
  //     addComponents({
  //       // '.primary': {
        
  //       // },
      
  //     })
  //   })
  // ],
}
