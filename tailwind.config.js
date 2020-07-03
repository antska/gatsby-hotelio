module.exports = {
  purge: ['./src/**/*.js*', './src/**/*.ts*'],
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Lato', 'sans-serif']
    },
    extend: {
      fontFamily: {
        insta: ['Lobster', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'helens-blue': '#59809a',
        instagram: '#C13584',
        facebook: '#2D5F9A',
        tripadvisor: '#259c70',
        email: '#F6AD55',
        gold: '#9e7256',
        'helens-grey': '#636363',
        'helens-dark-blue': '#2b3e4a'
      },
      height: {
        '90vh': '90vh',
        '600': '600px'
      },
      right: {
        '1': '1rem',
        '2': '2rem',
        '3': '3rem'
      },
      fill: {
        white: 'white'
      }
    }
  },
  variants: {}
};
