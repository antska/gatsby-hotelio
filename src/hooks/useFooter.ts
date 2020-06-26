import { useStaticQuery, graphql } from 'gatsby';

export const useFooter = () =>
  useStaticQuery(
    graphql`
      query footer {
        datoCmsFooter {
          footerImages {
            title
            fixed(height: 151, width: 151) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
        allDatoCmsMenu {
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
