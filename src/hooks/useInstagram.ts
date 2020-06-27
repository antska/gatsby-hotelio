import { useStaticQuery, graphql } from 'gatsby';

export const useInstagram = () =>
  useStaticQuery(
    graphql`
      query {
        datoCmsHome {
          logo {
            url
          }
        }

        allInstaNode(sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              likes
              timestamp
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              # Only available with the public api scraper
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
              }
            }
          }
        }
      }
    `
  );
