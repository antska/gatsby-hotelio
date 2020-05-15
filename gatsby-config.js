require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Hotelio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
};
