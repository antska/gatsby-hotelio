import { useStaticQuery, graphql } from 'gatsby';

export const useGallery = () =>
  useStaticQuery(
    graphql`
      query gallery {
        datoCmsGallery {
          coverImage {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          title
          subtitle
          photos {
            originalId
            alt
            title
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    `
  );
