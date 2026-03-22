/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // accent color removed; use only dark and white
        dark: {
          900: '#0f0f10',
          800: '#121212',
          700: '#18181b',
          600: '#232336',
        },
        red: {
          600: '#dc2626',
          700: '#b91c1c',
        },
        black: '#000',
        white: '#fff',
        'glass-dark': 'rgba(24, 26, 32, 0.7)',
        'glass-light': 'rgba(40, 44, 52, 0.5)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0,0,0,0.05)',
        'md': '0 4px 6px -1px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

