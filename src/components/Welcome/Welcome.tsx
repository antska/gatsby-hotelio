import React from 'react';
import Img from 'gatsby-image';

const Welcome = ({ title, description, image }) => (
  <section className="mx-12 mt-12 mb-12 xs:mx-0 xs:mb-4 xs:mt-4">
    <div className="grid grid-cols-2 gap-12 xs:grid-cols-1">
      <div className="mt-32 xs:mt-4 xs:mx-8">
        <h2 className="mb-16 mr-64 text-right font-light uppercase tracking-widest xs:mr-0">{title}</h2>
        <p className="text-xl text-justify ml-64 xs:ml-0">{description}</p>
      </div>
      <Img className="" fluid={image} />
    </div>
  </section>
);

export default Welcome;
