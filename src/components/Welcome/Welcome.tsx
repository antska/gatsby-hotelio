import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

type Props = {
  title: string;
  description: string;
  image: { fluid: FluidObject; title: string; alt: string };
};

const Welcome = ({ title, description, image }: Props) => (
  <section className="mx-12 mt-12 mb-12 xs:mx-0 xs:mb-4 xs:mt-4 md:mt-12 lg:mx-12">
    <div className="grid grid-cols-2 gap-12 xs:grid-cols-1 md:grid-cols-2">
      <div className="mt-32 xs:mt-4 xs:mx-8">
        <h2
          className="mb-16 text-right font-light uppercase tracking-widest xs:mr-0"
          data-sal="slide-right"
          data-sal-duration="700"
          data-sal-delay="500"
          data-sal-easing="easeInSine"
        >
          {title}
        </h2>
        <p
          className="text-xl text-justify xs:ml-0 xl:ml-24"
          data-sal="slide-right"
          data-sal-duration="700"
          data-sal-delay="700"
          data-sal-easing="easeInSine"
        >
          {description}
        </p>
      </div>
      <div data-sal="fade" data-sal-duration="700" data-sal-delay="300" data-sal-easing="easeInSine">
        <Img fluid={image.fluid} alt={image.alt} title={image.title} />
      </div>
    </div>
  </section>
);

export default Welcome;
