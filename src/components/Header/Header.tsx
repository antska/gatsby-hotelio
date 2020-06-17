import React, { useRef, useEffect } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useHeader } from '../../hooks/useHeader';

const Header = () => {
  const header = useHeader();

  return (
    <BackgroundImage
      Tag="header"
      className="h-screen"
      fluid={header.datoCmsHome.hero.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="h-full bg-black bg-opacity-25">
        <div className="flex items-center justify-center h-full">
          <div className="absolute top-0 z-10 w-full mt-4 text-center">
            <Img fixed={header.datoCmsHome.logo.fixed} />
          </div>
          <div className="text-center font-hairline text-white">
            <h1 className="text-center">Pleasant Stay in Paros Island</h1>
            <p>Rooms &amp; apartments</p>
          </div>
          <div className="nav bottom-nav">
            {header.allDatoCmsMenu.edges.map(({ node: menuItem }, key: number) => (
              <div key={`menuItem_${key}`} className="inline-block p-4">
                <Link to={menuItem.url}>{menuItem.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;
