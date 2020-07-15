import { useStaticQuery, graphql } from 'gatsby';

export const useRestaurant = () =>
  useStaticQuery(
    graphql`
      query restaurant {
        datoCmsRestaurant {
          coverImage {
            alt
            title
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
            alt
            title
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `
  );
