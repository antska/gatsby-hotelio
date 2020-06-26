import { useStaticQuery, graphql } from 'gatsby';

export const useRooms = () =>
  useStaticQuery(
    graphql`
      query RoomsPageQuery {
        datoCmsOurRoomsPage {
          heroImage {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
          }
          rooms {
            id
            title
            slug
            excerpt
            coverImage {
              fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
    `
  );
