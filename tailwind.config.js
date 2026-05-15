/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./categories/**/*.html","./public/**/*.html",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}