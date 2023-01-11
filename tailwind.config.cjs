module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        salmon: {
          DEFAULT: '#FF8C69',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFDACF',
          400: '#FFB39C',
          500: '#FF8C69',
          600: '#FF6536',
          700: '#FF3E03',
          800: '#CF3000',
          900: '#9C2400',
        },
        'pale-lime': {
          DEFAULT: '#DBF785',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F7FDE5',
          400: '#E9FAB5',
          500: '#DBF785',
          600: '#CDF455',
          700: '#BFF125',
          800: '#A4D50E',
          900: '#7FA50B',
        },
      },
    },
  },
  plugins: [],
}
