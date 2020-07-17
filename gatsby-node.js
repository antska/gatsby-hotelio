const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsRoom {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsExploreCard {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsPolicy {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsRoom.edges.map(({ node: room }) => {
        createPage({
          path: `rooms/${room.slug}`,
          component: path.resolve(`./src/templates/Room.tsx`),
          context: {
            slug: room.slug
          }
        });
      });
      result.data.allDatoCmsExploreCard.edges.map(({ node: explore }) => {
        createPage({
          path: `blog/${explore.slug}`,
          component: path.resolve(`./src/templates/Explore.tsx`),
          context: {
            slug: explore.slug
          }
        });
      });
      result.data.allDatoCmsPolicy.edges.map(({ node: policy }) => {
        createPage({
          path: `${policy.slug}`,
          component: path.resolve(`./src/templates/Policy.tsx`),
          context: {
            slug: policy.slug
          }
        });
      });
      resolve();
    });
  });
};
