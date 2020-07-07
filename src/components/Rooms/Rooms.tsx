import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Card from '../Card';

type Props = {
  withTitle?: boolean;
  withBooking?: boolean;
  limit?: number;
  currentRoomId?: string;
};

const Rooms = ({ withTitle = true, withBooking = true, limit = undefined, currentRoomId = undefined }: Props) => {
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

  const shuffleArray = (array: object[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const remainingRooms =
    currentRoomId && data.allDatoCmsRoom.edges.filter(({ node: room }) => room.id !== currentRoomId);

  const shuffledRooms = remainingRooms ? shuffleArray(remainingRooms) : shuffleArray(data.allDatoCmsRoom.edges);

  const rooms = limit ? shuffledRooms.slice(0, limit) : data.allDatoCmsRoom.edges;

  return (
    <>
      <div className="flex justify-between items-center mt-16 xs:mx-4 xs:flex-col xs:mb-4 md:flex-row md:mb-0">
        {withTitle && <h2 className="font-semibold xs:text-2xl md:text-4xl">Our Rooms</h2>}
        {withBooking && (
          <div className="xs:text-sm">
            <p>
              Make a reservation on{' '}
              <a
                href="https://www.booking.com/hotel/gr/eleni-studios-aliki.html"
                target="_blank"
                rel="noopener norefferer"
                className="text-blue-800"
              >
                booking.com
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-6 mb-16 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
