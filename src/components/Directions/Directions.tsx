import React, { useState } from 'react';
import Map from '../Map';

const Directions = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    height: 650,
    latitude: 36.9948562,
    longitude: 25.1365297,
    zoom: 16
  });

  return (
    <section className="grid grid-cols-3 mt-8">
      <div className="col-span-2">
        <Map />
      </div>
      <div className="col-span-1 bg-helens-blue p-20 text-white">
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
