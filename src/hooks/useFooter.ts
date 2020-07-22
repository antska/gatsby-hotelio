import { useStaticQuery, graphql } from 'gatsby';

export const useFooter = () =>
  useStaticQuery(
    graphql`
      query footer {
        datoCmsFooter {
          footerImages {
            title
            alt
            customData
            fixed(height: 151, width: 151) {
              ...GatsbyDatoCmsFixed
            }
          }
          copyrightNode {
            childMarkdownRemark {
              html
            }
          }
          contactNode {
            childMarkdownRemark {
              html
            }
          }
        }
        allDatoCmsMenu(sort: { fields: position }) {
          edges {
            node {
              url
              label
            }
          }
        }
      }
    `
  );
