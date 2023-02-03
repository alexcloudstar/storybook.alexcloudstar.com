module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#393939',
        },
        white: {
          DEFAULT: '#f5f5f5',
        },
        primary: {
          DEFAULT: '#00a3ff',
        },
        secondary: {
          DEFAULT: '#327da8',
        },
      },
    },
  },
  plugins: [{ tailwindcss: {} }, { autoprefixer: {} }],
}
