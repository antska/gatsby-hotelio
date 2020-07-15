import { useStaticQuery, graphql } from 'gatsby';

export const useInfo = () =>
  useStaticQuery(
    graphql`
      query info {
        datoCmsInfoCard {
          cover {
            alt
            title
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          title
          address
          profile {
            alt
            title
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    `
  );
