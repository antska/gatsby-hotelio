import { useStaticQuery, graphql } from 'gatsby';

export const useGallery = () =>
  useStaticQuery(
    graphql`
      query gallery {
        datoCmsGallery {
          coverImage {
            title
            alt
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
            fluid(maxWidth: 2800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `
  );
