module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '777px',
        laptop: '1024px',
        desktop: '1280px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
