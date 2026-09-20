/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#071120',
          850: '#0a192f',
          800: '#0f2444',
          700: '#16325c',
          600: '#1e437b',
        },
        royal: {
          900: '#1e3a8a',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          50: '#eff6ff',
        },
        accent: {
          orange: '#ea580c',
          amber: '#f59e0b',
          yellow: '#fbbf24',
          hover: '#c2410c',
        },
        surface: {
          light: '#f8fafc',
          muted: '#f1f5f9',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 36, 68, 0.08), 0 2px 6px -1px rgba(15, 36, 68, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(15, 36, 68, 0.14), 0 4px 12px -2px rgba(15, 36, 68, 0.06)',
        'elevated': '0 20px 40px -8px rgba(7, 17, 32, 0.2)',
      }
    },
  },
  plugins: [],
}
