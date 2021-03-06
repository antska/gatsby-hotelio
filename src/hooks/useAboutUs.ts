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
              ...GatsbyDatoCmsFluid
            }
          }
          image2 {
            title
            alt
            fluid(maxWidth: 1280) {
              ...GatsbyDatoCmsFluid
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
