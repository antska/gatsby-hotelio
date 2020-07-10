import React, { useMemo } from 'react';

import Card from '../Card';
import { useRooms } from '../../hooks/useRooms';

type Props = {
  withTitle?: boolean;
  withBooking?: boolean;
  limit?: number;
  currentRoomId?: string;
};

const Rooms = React.forwardRef<HTMLDivElement, Props>(
  ({ withTitle = true, withBooking = true, limit = undefined, currentRoomId = undefined }: Props, ref) => {
    const { allDatoCmsRoom } = useRooms();

    const shuffleArray = (array: object[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    const remainingRooms = currentRoomId && allDatoCmsRoom.edges.filter(({ node: room }) => room.id !== currentRoomId);

    const shuffledRooms = useMemo(() => {
      if (remainingRooms) {
        return shuffleArray(remainingRooms);
      } else {
        return shuffleArray(allDatoCmsRoom.edges);
      }
    }, [remainingRooms]);

    const rooms = limit ? shuffledRooms.slice(0, limit) : allDatoCmsRoom.edges;

    return (
      <>
        <div
          ref={ref}
          className="flex justify-between items-center mt-16 xs:mx-4 xs:flex-col xs:mb-4 md:flex-row md:mb-0"
        >
          {withTitle && <h2 className="font-semibold xs:text-2xl md:text-4xl">Our Rooms</h2>}
          {withBooking && (
            <div
              className="xs:text-sm"
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="800"
              data-sal-easing="easeInSine"
            >
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
          {rooms.map(({ node: room }, index: number) => (
            <Card
              image={room.coverImage.fluid}
              title={room.title}
              excerpt={room.excerpt}
              linkTo={`rooms/${room.slug}`}
              info={room.info}
              key={room.slug}
              id={index}
            />
          ))}
        </div>
      </>
    );
  }
);

export default Rooms;
