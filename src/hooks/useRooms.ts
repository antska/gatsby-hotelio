import { useStaticQuery, graphql } from 'gatsby';

export const useRooms = () =>
  useStaticQuery(graphql`
    query RoomsQuery {
      allDatoCmsRoom(sort: { position: ASC }) {
        edges {
          node {
            id
            title
            slug
            excerpt
            info
            coverImage {
              alt
              title
              fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  `);
