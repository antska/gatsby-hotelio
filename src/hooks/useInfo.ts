import { useStaticQuery, graphql } from 'gatsby';

export const useInfo = () =>
  useStaticQuery(
    graphql`
      query info {
        datoCmsInfoCard {
          cover {
            alt
            title
            fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          title
          address
          profile {
            alt
            title
            fluid(maxWidth: 100, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
