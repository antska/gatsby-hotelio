import React, { useState } from 'react';
// @ts-ignore
import { SocialIcon } from 'react-social-icons';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import Pin from './Pin';

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
        <ReactMapGL
          {...viewport}
          width="100%"
          mapStyle="mapbox://styles/antska/ckbigw86p1b1l1jq6v9ckk2rp"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
          scrollZoom={false}
        >
          <Marker
            longitude={25.1365297}
            latitude={36.9948562}
            offsetTop={-20}
            offsetLeft={-10}
            draggable={false}
            captureClick={false}
          >
            <div onClick={() => setShowPopup(true)}>
              <Pin size={20} />
            </div>
          </Marker>
          {showPopup && (
            <Popup
              latitude={37.78}
              longitude={-122.41}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
              anchor="top"
            >
              <div>You are here</div>
            </Popup>
          )}
          <div className="absolute right-0 bottom-0 mb-6">
            <NavigationControl />
          </div>
        </ReactMapGL>
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
