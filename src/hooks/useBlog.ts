import { useStaticQuery, graphql } from 'gatsby';

export const useBlog = () =>
  useStaticQuery(
    graphql`
      query blog {
        datoCmsBlog {
          title
          subtitle
          coverImage {
            title
            alt
            fluid(maxWidth: 1920) {
              ...GatsbyDatoCmsFluid_noBase64
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
                title
                alt
                fluid {
                  ...GatsbyDatoCmsFluid_noBase64
                }
              }
            }
          }
        }
      }
    `
  );
