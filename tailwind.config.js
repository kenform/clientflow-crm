/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#64748b',
        soft: '#f8fafc',
        panel: '#ffffff',
        line: '#e2e8f0',
      },
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, .08)',
        card: '0 12px 34px rgba(15, 23, 42, .07)'
      }
    },
  },
  plugins: [],
}
