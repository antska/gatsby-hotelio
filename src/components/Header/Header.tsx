import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import Img, { FluidObject } from 'gatsby-image';
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
            <div className="absolute top-0 z-10 w-full mt-4 text-center">
              <Img fixed={header.datoCmsHome.logo.fixed} />
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
