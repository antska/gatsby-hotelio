import React from 'react';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

type Props = {
  image: FluidObject;
  title: string;
  excerpt: string;
  linkTo: string;
};

const BigCard = ({ image, title, excerpt, linkTo }: Props) => (
  <div className="h-full">
    <h2 className="pb-4 text-gray-900 font-semibold">{title}</h2>
    <div className="mb-4 transition duration-150 ease-in-out">
      <Link to={`/${linkTo}`}>
        <Img fluid={image} alt={title} />
      </Link>
    </div>
    <div className="">{excerpt && <p className="p-2 text-sm">{excerpt}</p>}</div>
  </div>
);

export default BigCard;
