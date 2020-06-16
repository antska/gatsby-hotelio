import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  image: string;
  title: string;
  excerpt: string;
};

const Card = ({ image, title, excerpt, linkTo }) => (
  <div className="h-full">
    <div className="mb-4 transition duration-150 ease-in-out">
      <Link to={`/${linkTo}`}>
        <Img fluid={image} alt={title} />
      </Link>
    </div>
    <div className="">
      <Link to={`/${linkTo}`}>
        <h4 className="pb-4 text-center text-gray-900 font-semibold">{title}</h4>
      </Link>
      {excerpt && <p className="border-t border-black p-1 text-sm">{excerpt}</p>}
    </div>
  </div>
);

export default Card;
