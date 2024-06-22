// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1e00ff', // Custom blue color
        },
        gray: {
          800: '#1F2937', // Custom gray color
          700: '#374151', // Another custom gray color
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
