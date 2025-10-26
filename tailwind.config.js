/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(110, 87, 224)',
        'primary-hover': 'rgb(40, 91, 212)',
        secondary: 'rgb(0, 201, 255)',
        tertiary: 'rgb(10, 221, 168)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', borderRadius: '55% 45%' },
          '50%': { transform: 'translateY(-10px)', borderRadius: '45% 55%' },
        },
      },
    },
  },
  plugins: [],
}

