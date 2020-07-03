import { useStaticQuery, graphql } from 'gatsby';

export const useBlog = () =>
  useStaticQuery(
    graphql`
      query blog {
        datoCmsBlog {
          title
          subtitle
          coverImage {
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        allDatoCmsExploreCard {
          edges {
            node {
              slug
              title
              excerpt
              description
              tags
              coverImage {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `
  );