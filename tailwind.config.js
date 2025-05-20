/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00C77D',
        'deep-black': '#0F0F0F',
        'off-white': '#F2F2F2',
        'charcoal-gray': '#1C1C1E',
        'light-gray': '#E6E6E6',
        'signal-red': '#FF3B30',
        'steel-blue': '#3F8EFC',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
};