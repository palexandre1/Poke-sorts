/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '25%': { transform: 'translateY(1.25rem)' },
          '75%': { transform: 'translate(2.5rem,1.25rem)' },
          '100%': { transform: 'translate(2.5rem, -1.25rem)' },
        },
      },
      animation: {
        swap: 'slide 2s linear',
      },
    },
  },
  plugins: [],
};
