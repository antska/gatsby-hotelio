import React from 'react';

import Map from '../Map';
import useWindowSize from '../../hooks/useWindowSize';

const Directions = () => {
  const size = useWindowSize();

  return (
    <section
      className="grid grid-cols-3 mt-8 xs:grid-cols-1 lg:grid-cols-3"
      data-sal="slide-up"
      data-sal-duration="800"
      data-sal-delay="100"
      data-sal-easing="easeInSine"
    >
      <div className="col-span-2 xs:w-full xs:h-600">
        <Map mobile={size.width <= 640} />
      </div>
      <div className="col-span-1 bg-helens-blue p-20 text-white xs:p-4 xs:text-center">
        <h2 className="font-semibold">How to reach us</h2>
        <div className="my-6">
          <h5 className="font-semibold">Our Adress</h5>
          <p className="text-sm">
            Aliki Paros, Greece, 84400 <br />
            (Behind “Aliki” Restaurant)
          </p>
        </div>
        <div className="my-16">
          <h5 className="font-semibold">By Car</h5>
          <p className="text-sm">
            Approximately 15 minutes
            <br /> from the port of Paros,
            <br /> or 5 minutes from Paros airport.
          </p>
        </div>
        <div className="my-16">
          <h5 className="font-semibold">By Bus</h5>
          <p className="text-sm">
            30 minutes from Paroikia bus station
            <br /> (next to the port)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Directions;
