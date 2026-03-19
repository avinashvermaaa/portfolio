export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grad-red': 'linear-gradient(90deg, red, white)',
        'grad-blue': 'linear-gradient(90deg, #7aa2ff, #2d5bff)',
      },
    },
  },
  plugins: [],
}