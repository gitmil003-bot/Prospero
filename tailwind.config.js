/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pine-tree': '#2C261E',
        'beaver': '#9A8670',
        'white-coffee': '#E8DED6',
        'coffee': '#795434',
        'van-dyke-brown': '#5A3D29',
      },
    },
  },
  plugins: [],
};
