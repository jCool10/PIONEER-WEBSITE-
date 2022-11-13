/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... } PC
  
        'lg': {'min': '768px','max': '1023px'},
        // => @media (max-width: 1023px && min-width: 768px) { ... } Tablet
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... } Mobile
      }
    },
  },
  plugins: [],
}