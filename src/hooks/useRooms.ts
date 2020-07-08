import { useStaticQuery, graphql } from 'gatsby';

export const useRooms = () =>
  useStaticQuery(
    graphql`
      query RoomsQuery {
        allDatoCmsRoom(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              id
              title
              slug
              excerpt
              coverImage {
                fluid(maxWidth: 1920) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `
  );
