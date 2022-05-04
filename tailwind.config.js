module.exports = {
  purge: [
    './common/**/*.tsx',
    './pages/**/*.tsx',
    './components/**/*.tsx',
    ],
  theme: {
    extend: {
      width: {
        'viewport': '17.5rem',
      },
      height: {
        'viewport': '27rem',
      }
    },
  },
  plugins: [],
};
