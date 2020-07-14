import React from 'react';

type Props = {
  width?: string;
  height?: string;
};

const Map = ({ width, height }: Props) => (
  <a
    href="https://g.page/helenstudios_paros?share"
    className="group block transform transition-all duration-500 hover:shadow-xl"
    target="_blank"
    rel="noopener norefferer"
    title="Google Maps link"
  >
    <div className="flex justify-center items-center absolute w-full h-full bg-opacity-25 group-hover:bg-opacity-0 bg-black transition-all duration-500" />
    <img
      className={`inline-block xs:object-cover md:object-none lg:object-cover ${width} ${height}`}
      src={`https://maps.googleapis.com/maps/api/staticmap?scale=2&zoom=15&size=640x500&maptype=roadmap&key=${process.env.GOOGLE_MAPS_API}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:H%7C36.9946846,25.1366965&language=en`}
      title="Helen's Minimal location"
      alt="Google Map of 36.9946846,25.1366965"
    />
  </a>
);

export default Map;
