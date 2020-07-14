require('dotenv').config();
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    title: `Hotelio`,
    siteUrl: 'https://www.helenstudios.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GOOGLE_MAPS_API,
        center: `36.9946889,25.1345078`,
        zoom: '15',
        scale: '2',
        markers: [
          {
            location: `36.9946846,25.1366965`,
            label: `Helen's Minimal Studios & Apartments`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:'
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : [])
        ]
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `12375540439`,
        paginate: 100,
        maxPosts: 10
      }
    }
  ]
};
