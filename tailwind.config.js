module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#c41e3a',
        'vibrant-pink': '#ff69b4',
        'soft-pink': '#ffb3d9',
        'cream': '#faf7f2',
        'dark-text': '#2d2d2d',
        'light-text': '#666',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
