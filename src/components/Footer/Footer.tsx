import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { useFooter } from '../../hooks/useFooter';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  const footer = useFooter();

  return (
    <footer className="bg-helens-blue text-white">
      <div className="container mx-auto grid grid-cols-4 justify-center py-24 xs:grid-cols-1 xs:content-center xs:items-center xs:justify-items-center xs:text-center xs:gap-6 xs:py-4 lg:grid-cols-4 lg:text-left lg:items-start lg:py-24">
        <div>
          <h5 className="mb-4">CONTACT</h5>
          <p>
            Mobile: (+30) 697 837 0698
            <br />
            WhatsApp: (+30) 698 339 5086
            <br />
            Email: info@helenstudios.com
          </p>
        </div>
        <div>
          <h5 className="mb-4 uppercase">Find us on Social</h5>
          <SocialIcons />
        </div>
        {footer.datoCmsFooter.footerImages.map((award, key: number) => (
          <div key={`award_${key}`}>
            <h5 className="mb-4">{award.title}</h5>
            <a href={award.customData.url} target="_blank" rel="noopener norefferer">
              <Img fixed={award.fixed} className="shadow-xl" title={award.title} alt={award.alt} />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-between mx-2 pt-8 pb-4 px-12 border-t border-white text-xs xs:flex-col xs:px-2 md:flex-row md:px-2">
        <div className="xs:text-center xs:mb-4">
          © Copyright Helen's Minimal Studios & Apartments | Developed & Designed by Antonis Skandalis
        </div>
        <div className="text-right xs:flex xs:flex-col xs:text-center md:flex-row md:text-right">
          {footer.allDatoCmsMenu.edges.map(({ node: menuItem }, key: number) => (
            <Link className="mr-6 xs:mb-2" to={menuItem.url} key={`menuLink_${key}`}>
              {menuItem.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
