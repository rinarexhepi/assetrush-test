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
      screens: { 
        'xs': '390px',
      // => @media (min-width: 640px) { ... }
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

        'md': '768px',
      // => @media (min-width: 768px) { ... }

        'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
      
  },
  plugins: [],
 
}
