/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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