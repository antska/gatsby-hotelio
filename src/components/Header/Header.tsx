import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FluidObject } from 'gatsby-image';

import { useHeader } from '../../hooks/useHeader';

type Props = {
  heroImage: FluidObject;
  title: string;
  subtitle: string;
  hasLogo?: boolean;
  height?: string;
  bgFixed?: boolean;
  actionTo?: string;
  margin?: string;
};

const Header = ({
  heroImage,
  title,
  subtitle,
  hasLogo = false,
  height = 'h-screen',
  bgFixed = false,
  actionTo = '',
  margin = ''
}: Props) => {
  const header = useHeader();

  return (
    <BackgroundImage
      Tag="header"
      className={`${height} ${bgFixed && 'bg-fixed'} ${margin} xs:h-screen`}
      fluid={heroImage}
      backgroundColor={`#040e18`}
    >
      <div className="h-full bg-black bg-opacity-25">
        <div className="flex items-center justify-center h-full">
          {hasLogo && (
            <div className="absolute top-0 z-10 w-56 h-8 mt-4 text-center">
              <img src={header.datoCmsHome.logo.url} title="logo" alt="logo" />
            </div>
          )}
          <div className="text-center font-hairline text-white">
            <h1
              className="text-center text-2xl font-semibold tracking-wider xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              data-sal="fade"
              data-sal-duration="700"
              data-sal-delay="300"
              data-sal-easing="easeInSine"
            >
              {title}
            </h1>
            <p
              className="xs:text-xs sm:text-base md:text-lg xs:mx-12 md:mx-40"
              data-sal="fade"
              data-sal-duration="700"
              data-sal-delay="500"
              data-sal-easing="easeInSine"
            >
              {subtitle}
            </p>
            {actionTo && (
              <Link
                to={actionTo}
                className="inline-flex"
                data-sal="zoom-in"
                data-sal-duration="700"
                data-sal-delay="700"
                data-sal-easing="easeInSine"
              >
                <button className="text-center border border-white hover:bg-white hover:bg-opacity-25 hover:text-white transition-all duration-500 block py-4 px-16 mt-4">
                  More Info
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;
