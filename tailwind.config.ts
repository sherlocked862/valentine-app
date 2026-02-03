module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'valentine-pink': '#ff69b4',
        'valentine-red': '#dc143c',
        'soft-pink': '#ffc0cb',
        'light-pink': '#ffe4e1',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-gentle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}