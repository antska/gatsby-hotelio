require('dotenv').config();
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    title: `Hotelio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
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
    `gatsby-plugin-offline`
  ]
};
