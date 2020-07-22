import { useStaticQuery, graphql } from 'gatsby';

export const useRestaurant = () =>
  useStaticQuery(
    graphql`
      query restaurant {
        datoCmsRestaurant {
          coverImage {
            alt
            title
            fluid(maxWidth: 2600) {
              ...GatsbyDatoCmsFluid
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
            fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
        datoCmsContact {
          title
          address
          byCar
          byBus
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `
  );
