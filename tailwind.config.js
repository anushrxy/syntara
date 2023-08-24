/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        'color-primary': '#FFF9DF',
        'color-secondary': '#FE8054',
        'bg-primary': '#260B36',
        'bg-secondary': '#5F1989',
        'bg-tertiary': '#2B0D3F',
      },
    },
  },
  plugins: [],
}

