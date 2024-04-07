/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display1' : ['Expletus Sans'],
        'display2' : ['Cinzel']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

