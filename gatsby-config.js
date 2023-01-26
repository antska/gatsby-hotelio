require('dotenv').config();
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    title: `Hotelio`,
    siteUrl: 'https://www.helenstudios.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.helenstudios.com',
        sitemap: 'https://www.helenstudios.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helen's Minimal Studios & Apartments`,
        short_name: `Helen Studios`,
        description: `Minimal accomodation in Alyki with Seaview or garden view.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#59809a`,
        display: `standalone`,
        icon: `src/images/helensminimalstudio-512x512.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-background-image-es5',
      options: {
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
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_API,
      }
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GOOGLE_MAPS_API,
        secret: process.env.GOOGLE_MAPS_SECRET,
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
    }
  ]
};
