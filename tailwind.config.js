module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'heinzGrey': '#171715',
        'heinzBlue': '#729ACC'
      },
      fontFamily:{
        sans: ['Sora', 'sans-serif']
      },
    },
  },
  plugins: [],
}
