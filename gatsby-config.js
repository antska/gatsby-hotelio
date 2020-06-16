require('dotenv').config();
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    title: `Hotelio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
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
        // access_token: process.env.INSTAGRAM_TOKEN,
        paginate: 100,
        maxPosts: 10
      }
    },
    `gatsby-plugin-offline`
  ]
};
