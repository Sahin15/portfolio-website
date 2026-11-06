/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(8, 15, 36, 0.35)',
      },
      backgroundImage: {
        radial: 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
