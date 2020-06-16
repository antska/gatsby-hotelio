import React, { useState } from 'react';
// @ts-ignore
import { SocialIcon } from 'react-social-icons';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';

const Directions = () => {
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
          <Marker longitude={25.1365297} latitude={36.9948562} offsetTop={-20} offsetLeft={-10} draggable>
            <Pin size={20} />
          </Marker>
        </ReactMapGL>
      </div>
      <div className="col-span-1">text text</div>
    </section>
  );
};

export default Directions;
