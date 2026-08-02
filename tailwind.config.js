/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#07090d',
          900: '#0a0d12',
          850: '#0d1117',
          800: '#111722'
        },
        signal: {
          teal: '#2dd4bf',
          orange: '#ff7849',
          green: '#4ade80',
          red: '#f87171'
        },
        ink: {
          100: '#e8ecef',
          300: '#aab4bf',
          500: '#8b95a1',
          700: '#556070'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(45,212,191,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.06) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '42px 42px'
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(45,212,191,0.35)',
        glowOrange: '0 0 40px -10px rgba(255,120,73,0.35)'
      }
    }
  },
  plugins: []
}
