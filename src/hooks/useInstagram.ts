import { useStaticQuery, graphql } from 'gatsby';

export const useInstagram = () =>
  useStaticQuery(
    graphql`
      query {
        datoCmsHome {
          logo {
            url
          }
        }

        allInstagramContent(sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              timestamp
              caption
              localImage {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }            
            }
          }
        }
      }
    `
  );
