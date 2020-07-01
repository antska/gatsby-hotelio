import { useStaticQuery, graphql } from 'gatsby';

export const useAboutUs = () =>
  useStaticQuery(
    graphql`
      query aboutUs {
        datoCmsAbout {
          image1 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          image2 {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          signature {
            fixed(width: 220, height: 65) {
              ...GatsbyDatoCmsFixed
            }
          }
          title
          description1
          description2
        }
      }
    `
  );
