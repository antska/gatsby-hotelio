import { useStaticQuery, graphql } from 'gatsby';

export const useHeader = () =>
  useStaticQuery(
    graphql`
      query header {
        datoCmsHome {
          logo {
            url
          }
          miniLogo {
            url
          }
          hero {
            fluid(maxWidth: 3008) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          welcomeTitle
          welcomeMessage
          welcomeImage {
            fluid(maxWidth: 4928) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          discoverImage {
            fluid(maxWidth: 4000) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
        allDatoCmsHeroSlider {
          edges {
            node {
              title
              subtitle
              image {
                fluid(maxWidth: 1920) {
                  ...GatsbyDatoCmsFluid_noBase64
                }
              }
            }
          }
        }
        allDatoCmsMenu(sort: { fields: position }) {
          edges {
            node {
              url
              label
            }
          }
        }
      }
    `
  );
