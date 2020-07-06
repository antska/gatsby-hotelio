import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

type Props = {
  title: string;
  description: string;
  image: FluidObject;
};

const Welcome = ({ title, description, image }: Props) => (
  <section className="mx-12 mt-12 mb-12 xs:mx-0 xs:mb-4 xs:mt-4 md:mt-12 lg:mx-12">
    <div className="grid grid-cols-2 gap-12 xs:grid-cols-1 md:grid-cols-2">
      <div className="mt-32 xs:mt-4 xs:mx-8">
        <h2 className="mb-16 text-right font-light uppercase tracking-widest xs:mr-0">{title}</h2>
        <p className="text-xl text-justify xs:ml-0 xl:ml-24">{description}</p>
      </div>
      <Img fluid={image} />
    </div>
  </section>
);

export default Welcome;
