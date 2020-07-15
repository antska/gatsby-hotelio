import { useStaticQuery, graphql } from 'gatsby';

export const useMap = () =>
  useStaticQuery(
    graphql`
      query StaticMapQuery {
        staticMap {
          childFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  );
