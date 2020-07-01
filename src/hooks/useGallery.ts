import { useStaticQuery, graphql } from 'gatsby';

export const useGallery = () =>
  useStaticQuery(
    graphql`
      query gallery {
        datoCmsGallery {
          coverImage {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
          }
          title
          subtitle
          photos {
            originalId
            alt
            title
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
