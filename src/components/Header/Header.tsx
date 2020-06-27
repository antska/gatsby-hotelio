import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import { FluidObject } from 'gatsby-image';
import { useHeader } from '../../hooks/useHeader';

type Props = {
  heroImage: FluidObject;
  title: string;
  subtitle: string;
  hasLogo?: boolean;
  fullScreen?: boolean;
};

const Header = ({ heroImage, title, subtitle, hasLogo = false, fullScreen = false }: Props) => {
  const header = useHeader();

  return (
    <BackgroundImage
      Tag="header"
      className={`${fullScreen ? 'h-screen' : 'h-80vh'}`}
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
            <h1 className="text-center">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;
