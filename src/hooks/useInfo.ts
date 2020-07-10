import { useStaticQuery, graphql } from 'gatsby';

export const useInfo = () =>
  useStaticQuery(
    graphql`
      query info {
        datoCmsInfoCard {
          cover {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          title
          address
          profile {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    `
  );
