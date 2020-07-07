import React from 'react';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

type Props = {
  image: FluidObject;
  title: string;
  excerpt: string;
  linkTo: string;
};

const Card = ({ image, title, excerpt, linkTo }: Props) => (
  <div className="h-full">
    <div className="mb-4 transition duration-150 ease-in-out">
      <Link to={`/${linkTo}`}>
        <Img fluid={image} alt={title} />
      </Link>
    </div>
    <div className="">
      <Link to={`/${linkTo}`}>
        <h4 className="pb-4 text-center text-gray-900 font-semibold xs:text-base md:text-lg lg:text-xl">{title}</h4>
      </Link>
      {excerpt && <p className="border-t border-black p-1 text-sm xs:text-xs xs:mx-4 md:text-base">{excerpt}</p>}
    </div>
  </div>
);

export default Card;
