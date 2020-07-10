import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';

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

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100
  };

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
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={spring}
              className="text-center text-2xl font-semibold tracking-wider xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              {title}
            </motion.h1>
            <p className="xs:text-xs sm:text-base md:text-lg xs:mx-12 md:mx-40">{subtitle}</p>
            {actionTo && (
              <Link to={actionTo} className="inline-flex">
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
