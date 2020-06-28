module.exports = {
  purge: ['./src/**/*.js*', './src/**/*.ts*'],
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        'helens-blue': '#59809a',
        instagram: '#C13584',
        facebook: '#2D5F9A',
        tripadvisor: '#259c70',
        email: '#F6AD55',
        gold: '#9e7256'
      },
      height: {
        '90vh': '90vh'
      }
    }
  },
  variants: {}
};
