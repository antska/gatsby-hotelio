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
              ...GatsbyDatoCmsFluid
            }
          }
          welcomeTitle
          welcomeMessage
          welcomeImage {
            fluid(maxWidth: 4928) {
              ...GatsbyDatoCmsFluid
            }
          }
          discoverImage {
            fluid(maxWidth: 4000) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        allDatoCmsHeroSlider {
          edges {
            node {
              title
              subtitle
              image {
                fluid(maxWidth: 1920) {
                  ...GatsbyDatoCmsFluid
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
