/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'aada-green': '#227744',
        'aada-orange': '#D97942',
        'aada-brown': '#A34336',
        'earth': {
          50: '#f8f4f0',
          100: '#f1e8d8',
          200: '#e3d1b1',
          300: '#d5ba8a',
          400: '#c7a363',
          500: '#b98c3c',
          600: '#9a7530',
          700: '#7b5e24',
          800: '#5c4718',
          900: '#3d300c'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(249, 115, 22, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(249, 115, 22, 0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'gradient-tropical': 'linear-gradient(135deg, #22c55e 0%, #f97316 100%)',
        'gradient-earth': 'linear-gradient(135deg, #227744 0%, #D97942 50%, #A34336 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.3)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
};