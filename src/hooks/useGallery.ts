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
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          title
          subtitle
          photos {
            originalId
            alt
            title
            fluid(maxWidth: 1280, imgixParams: { fm: "jpg", auto: "compress" }) {
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
