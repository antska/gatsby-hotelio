import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';

type ImageProps = {
  fluid: FluidObject;
  title: string;
  alt: string;
  originalId: string;
};

type Props = {
  images: ImageProps[];
};

const ImageGallery = ({ images }: Props) => (
  <SRLWrapper options={{ buttons: { showDownloadButton: false } }}>
    <div className="grid grid-cols-3 gap-4 xs:grid-cols-1 xs:gap-0 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
      {images.map((photo, index) => (
        <div
          className="w-full h-full"
          data-sal="zoom-in"
          data-sal-duration="700"
          data-sal-delay={(index + 1) * 50}
          data-sal-easing="easeInSine"
        >
          <Img
            key={photo.originalId}
            fluid={photo.fluid}
            alt={photo.alt}
            title={photo.title}
            className="h-full cursor-pointer border-opacity-0 border-helens-dark-blue border-2 hover:opacity-75 transform hover:border-opacity-100 hover:scale-105 transition-all duration-700"
          />
        </div>
      ))}
    </div>
  </SRLWrapper>
);

export default ImageGallery;
