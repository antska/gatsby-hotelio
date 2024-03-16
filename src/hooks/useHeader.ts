import { useStaticQuery, graphql } from 'gatsby';

export const useHeader = () =>
  useStaticQuery(graphql`
    query header {
      datoCmsHome {
        logo {
          url
        }
        miniLogo {
          url
        }
        hero {
          title
          alt
          fluid(maxWidth: 3008) {
            ...GatsbyDatoCmsFluid
          }
        }
        welcomeTitle
        welcomeMessage
        welcomeImage {
          title
          alt
          fluid(maxWidth: 1280, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        discoverImage {
          title
          alt
          fluid(maxWidth: 3000) {
            ...GatsbyDatoCmsFluid
          }
        }
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      allDatoCmsMenu(sort: { position: ASC }) {
        edges {
          node {
            url
            label
            mainMenu
          }
        }
      }
    }
  `);
