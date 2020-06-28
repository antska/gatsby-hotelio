import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Card from '../Card';

type Props = {
  withTitle?: boolean;
  withBooking?: boolean;
  limit?: number;
};

const Rooms = ({ withTitle = true, withBooking = true, limit = 6 }: Props) => {
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

  const rooms = limit ? data.allDatoCmsRoom.edges.slice(0, limit) : data.allDatoCmsRoom.edges;

  return (
    <>
      <div className="flex justify-between items-center mt-16">
        {withTitle && <h2 className="font-semibold">Our Rooms</h2>}
        {withBooking && (
          <div>
            <p>
              Make a reservation on{' '}
              <Link to="https://www.booking.com/hotel/gr/eleni-studios-aliki.html" className="text-blue-800">
                booking.com
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {rooms.map(({ node: room }) => (
          <Card
            image={room.coverImage.fluid}
            title={room.title}
            excerpt={room.excerpt}
            linkTo={`rooms/${room.slug}`}
            key={room.slug}
          />
        ))}
      </div>
    </>
  );
};

export default Rooms;
