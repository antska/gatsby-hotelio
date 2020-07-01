import { useStaticQuery, graphql } from 'gatsby';

export const useInfo = () =>
  useStaticQuery(
    graphql`
      query info {
        datoCmsInfoCard {
          cover {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          title
          address
          profile {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
