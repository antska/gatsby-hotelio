import { useStaticQuery, graphql } from 'gatsby';

export const useInstagram = () =>
  useStaticQuery(
    graphql`
      query {
        allInstaNode(sort: { fields: likes, order: DESC }) {
          edges {
            node {
              id
              likes
              preview
              original
              timestamp
              localFile {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
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
