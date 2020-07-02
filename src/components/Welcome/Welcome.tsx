import React from 'react';
import Img from 'gatsby-image';

const Welcome = ({ title, description, image }) => (
  <section className="mx-12 mt-12 mb-12">
    <div className="grid grid-cols-2 gap-12">
      <div className="mt-32">
        <h2 className="mb-16 mr-64 text-right font-light uppercase tracking-widest">{title}</h2>
        <p className="text-xl text-justify ml-64">{description}</p>
      </div>
      <Img className="" fluid={image} />
    </div>
  </section>
);

export default Welcome;
