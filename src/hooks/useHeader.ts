import { useStaticQuery, graphql } from 'gatsby';

export const useHeader = () =>
  useStaticQuery(
    graphql`
      query header {
        datoCmsHome {
          logo {
            fixed(height: 200, width: 200) {
              ...GatsbyDatoCmsFixed
            }
          }
          miniLogo {
            url
          }
          hero {
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
