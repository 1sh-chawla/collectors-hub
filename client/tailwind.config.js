/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glowing: {
          '0%, 100%': {
            'text-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #6969ff',
          },
          '50%': {
            'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #7777ff',
          },
        },
      },
      animation: {
        glowing: 'glowing 1.5s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

