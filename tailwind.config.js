/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom': '1400px'
    },
    extend: {
      colors: {
        'border-primary': '#FFF1F1',
        'border-secondary': '#bebebe',
        'border-green': '#7F8294',

        'text-primary': '#2c2c2c',
        'text-secondary': '#373A36',
        'text-gray': '#707070',
        'text-tertiary': '#7F8294',
        'text-green': '#45C917',
        'text-red': '#BF0000',
        'text-blue-light': '#EEEFF7',
        'text-black': '#2C2C2C',
        'text-gray': '#707070',
        'text-white': '#FFFFFF',
        'text-gray-light': '#F5F5F5',
        'container-bg': '#aaa5a5',
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '100%',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}