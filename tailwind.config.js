/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 1s ease-out',
      },
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          800: '#2d2d2d',
          700: '#3a3a3a',
          600: '#4a4a4a',
          400: '#6d6d6d',
          300: '#8c8c8c',
        },
      },
    },
  },
  plugins: [],
};
