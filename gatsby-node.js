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
      resolve();
    });
  });
};
