/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fefdf0',
          100: '#fdf8d0',
          200: '#fbf0a0',
          300: '#f7e060',
          400: '#f2cc28',
          500: '#d4a017',
          600: '#b8860b',
          700: '#9a6f09',
          800: '#7a580c',
          900: '#5c4010',
        },
        cream: '#fdf6e3',
        champagne: '#f7e7ce',
        ivory: '#fffff0',
        petal: '#ffb7c5',
      },
      fontFamily: {
        sinhala: ['"Noto Serif Sinhala"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"Noto Sans Sinhala"', 'sans-serif'],
      },
      animation: {
        'flare-in': 'flareIn 2.5s ease-out forwards',
        'flare-out': 'flareOut 1s ease-in forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'float-up': 'floatUp 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        flareIn: {
          '0%':   { opacity: '0', transform: 'scale(0.8)' },
          '30%':  { opacity: '1', transform: 'scale(1.05)' },
          '60%':  { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.1)' },
        },
        flareOut: {
          '0%':   { opacity: '1' },
          '100%': { opacity: '0' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1) translate(0%, 0%)' },
          '25%':  { transform: 'scale(1.08) translate(-1%, -1%)' },
          '50%':  { transform: 'scale(1.12) translate(1%, 0%)' },
          '75%':  { transform: 'scale(1.06) translate(-0.5%, 1%)' },
          '100%': { transform: 'scale(1) translate(0%, 0%)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        petalFall: {
          '0%':   { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '0.8' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,160,23,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(212,160,23,0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(212,160,23,0.5)' },
          '50%':      { textShadow: '0 0 30px rgba(212,160,23,1), 0 0 60px rgba(212,160,23,0.5)' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
