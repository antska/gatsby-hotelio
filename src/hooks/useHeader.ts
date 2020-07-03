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
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
          }
          welcomeTitle
          welcomeMessage
          welcomeImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          discoverImage {
            fluid(maxWidth: 1920) {
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
