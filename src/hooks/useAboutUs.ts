import { useStaticQuery, graphql } from 'gatsby';

export const useAboutUs = () =>
  useStaticQuery(
    graphql`
      query aboutUs {
        datoCmsAbout {
          image1 {
            title
            alt
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          image2 {
            title
            alt
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          signature {
            title
            alt
            fixed(width: 220, height: 65) {
              ...GatsbyDatoCmsFixed
            }
          }
          title
          description1Node {
            childMarkdownRemark {
              html
            }
          }
          description2Node {
            childMarkdownRemark {
              html
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `
  );
