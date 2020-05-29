import { useStaticQuery, graphql } from 'gatsby';

export const useFooter = () => {
  const footer = useStaticQuery(
    graphql`
      query social {
        allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              profileType
              url
              color {
                hex
              }
              icon {
                url
              }
            }
          }
        }
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
  return footer;
};
