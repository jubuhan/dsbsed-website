/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'solo': {
          '50': '#FDF8F0',
          '100': '#F0DFC8',
          '200': '#E8D0B0',
          '300': '#D4B896',
          '400': '#F57C00',
          '500': '#E06800',
          '600': '#C55A00',
          '700': '#A04800',
          '800': '#2D2926',
          '900': '#1F1C1A',
          'dark': '#2D2926',
          'primary': '#F57C00',
          'secondary': '#F0DFC8',
          'light': '#FDF8F0',
        }
      },
      animation: {
        'matrix-fall': 'matrix-fall linear infinite',
        'gradient-x': 'gradient-x 4s linear infinite',
      },
      keyframes: {
        'matrix-fall': {
          '0%': {
            transform: 'translateY(-100vh)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '0'
          }
        },
        'gradient-x': {
          '0%': {
            'background-position': '0% 50%'
          },
          '100%': {
            'background-position': '100% 50%'
          }
        }
      }
    },
  },
  plugins: [],
}