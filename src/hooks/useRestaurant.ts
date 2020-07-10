import { useStaticQuery, graphql } from 'gatsby';

export const useRestaurant = () =>
  useStaticQuery(
    graphql`
      query restaurant {
        datoCmsRestaurant {
          coverImage {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          title
          subtitle
          textLeft
          textRight
          menu
          philosophy
          philosophyImage {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    `
  );
