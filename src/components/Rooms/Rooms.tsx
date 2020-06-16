import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Card from '../Card';

type Props = {};

const Rooms = () => {
  const data = useStaticQuery(
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
    <>
      <div className="flex justify-between items-center  mt-16">
        <h2 className="font-semibold">Our Rooms</h2>
        <div>
          <p className="">
            Make a reservation on{' '}
            <Link to="https://www.booking.com/hotel/gr/eleni-studios-aliki.html" className="text-blue-800">
              booking.com
            </Link>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data.allDatoCmsRoom.edges.map(({ node: work }) => (
          <Card image={work.coverImage.fluid} title={work.title} excerpt={work.excerpt} linkTo={work.slug} />
        ))}
      </div>
    </>
  );
};

export default Rooms;
