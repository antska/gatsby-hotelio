import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BigCard from '../BigCard';

const Explore = () => {
  const data = useStaticQuery(
    graphql`
      query ExploreQuery {
        allDatoCmsExploreCard(sort: { fields: [position], order: ASC }) {
          edges {
            node {
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
      }
    `
  );

  return (
    <div className="grid grid-cols-2 gap-6 mt-16">
      {data.allDatoCmsExploreCard.edges.map(({ node: explore }) => (
        <BigCard
          image={explore.coverImage.fluid}
          title={explore.title}
          excerpt={explore.excerpt}
          linkTo={explore.slug}
          key={explore.slug}
        />
      ))}
    </div>
  );
};

export default Explore;
