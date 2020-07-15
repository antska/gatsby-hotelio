import React from 'react';
import { useMap } from '../../hooks/useMap';
import BackgroundImage from 'gatsby-background-image';

const Map = () => {
  const { staticMap } = useMap();

  return (
    <a
      href="https://g.page/helenstudios_paros?share"
      className="group block transform transition-all duration-500 hover:shadow-xl"
      target="_blank"
      rel="noopener norefferer"
      title="Google Maps link"
    >
      <BackgroundImage
        fluid={staticMap.childFile.childImageSharp.fluid}
        className="h-600"
        title="Helen's Minimal location"
        alt="Google Map of 36.9946846,25.1366965"
      >
        <div className="flex justify-center items-center absolute w-full h-full bg-opacity-25 group-hover:bg-opacity-0 bg-black transition-all duration-500" />
      </BackgroundImage>
    </a>
  );
};

export default Map;
