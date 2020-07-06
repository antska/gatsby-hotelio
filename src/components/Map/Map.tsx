import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

import fancyMapStyle from './mapStyle.json';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ mobile }) => (
  <GoogleMap
    defaultZoom={mobile ? 14 : 17}
    defaultCenter={{ lat: 36.9957998, lng: 25.1364208 }}
    defaultOptions={{ styles: fancyMapStyle }}
  >
    <MarkerWithLabel
      animation={2}
      position={{ lat: 36.9946846, lng: 25.1366965 }}
      labelAnchor={new google.maps.Point(0, 70)}
      onClick={() => window.open('https://g.page/helenstudios_paros?share', '_blank')}
    >
      <div className="flex justify-center flex-col">
        <img
          className="inline-block w-20 m-auto"
          src="https://www.datocms-assets.com/27980/1593773921-helensminimalstudio-resized.png"
        />
        <p className="tracking-widest text-sm text-helens-blue">
          Helen's Minimal
          <br /> Studios & Apartments
        </p>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      animation={2}
      position={{ lat: 36.994665, lng: 25.136193 }}
      labelAnchor={new google.maps.Point(140, 50)}
      onClick={() => window.open('https://goo.gl/maps/1naBWPBYucfQRqmB7', '_blank')}
    >
      <div className="flex justify-center flex-col">
        <img
          className="inline-block w-20 m-auto"
          src="https://www.datocms-assets.com/27980/1593773118-alykilogoresized.png"
        />
        <p className="tracking-widest text-xs text-helens-blue">Aliki Restaurant Paros</p>
      </div>
    </MarkerWithLabel>
  </GoogleMap>
));

export default Map;
