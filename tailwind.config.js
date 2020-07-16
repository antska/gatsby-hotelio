const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js*', './src/**/*.ts*'],
  theme: {
    animations: {
      fadeInLeft: {
        from: {
          opacity: 0,
          transform: 'translateX(-20px)'
        },
        to: {
          opacity: 1,
          transform: 'translateX(0px)'
        }
      }
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
      blur: 'blur(3px)'
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Lato', 'sans-serif']
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
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
        '320': '320px',
        '500': '500px',
        '600': '600px'
      },
      top: {
        '12': '12rem'
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
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    padding: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    fontSize: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    filter: ['responsive', 'hover', 'group-hover'],
    backdropFilter: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    plugin(function({ addUtilities, e }) {
      const justify = ['start', 'center', 'end', 'baseline'];
      const justifyVariants = ['responsive'];

      const utilities = justify.map(alignment => ({
        [`.justify-items-${e(alignment)}`]: {
          'justify-items': alignment
        }
      }));

      addUtilities(utilities, justifyVariants);
    }),
    require('tailwindcss-animations'),
    require('tailwindcss-filters')
  ]
};
