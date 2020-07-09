import React from 'react';
import { Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import RoomInfo from '../RoomInfo';

type Props = {
  image: FluidObject;
  title: string;
  excerpt: string;
  linkTo: string;
  info: { bed: string; people: string; sqm: string; view: string };
};

const Card = ({ image, title, excerpt, linkTo, info }: Props) => (
  <div className="h-full">
    <div className="mb-4 transition duration-150 ease-in-out">
      <Link to={`/${linkTo}`}>
        <BackgroundImage
          Tag="div"
          className="h-320 xs:h-320 lg:h-64 xl:h-320"
          style={{
            width: '100%',
            backgroundPosition: 'bottom center',
            backgroundSize: 'cover'
          }}
          fluid={image}
          alt={title}
          backgroundColor={`#040e18`}
        >
          <div className="flex justify-center items-end h-full w-full">
            <RoomInfo info={info} orientation="horizontal" />
          </div>
        </BackgroundImage>
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
