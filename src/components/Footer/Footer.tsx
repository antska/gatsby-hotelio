import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { useFooter } from '../../hooks/useFooter';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  const footer = useFooter();

  return (
    <footer className="bg-helens-blue text-white">
      <div className="container mx-auto flex justify-center py-24">
        <div className="flex-1">
          <h5 className="mb-4">CONTACT</h5>
          <p>
            Tel.: +30 22840 91235
            <br />
            Mob: +30 694 663 0596
            <br />
            Email: info@helenstudios.com
          </p>
        </div>
        <div className="flex-1">
          <SocialIcons />
        </div>
        {footer.datoCmsFooter.footerImages.map((award, key: number) => (
          <div key={`award_${key}`} className="flex-1">
            <h5 className="mb-4">{award.title}</h5>
            <Img fixed={award.fixed} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mx-2 py-8 px-12 border-t border-white text-xs">
        <div className="flex-1">© Copyright Helen's Minimal Studios & Apartments</div>
        <div className="flex-1 text-right">
          {footer.allDatoCmsMenu.edges.map(({ node: menuItem }, key: number) => (
            <Link className="mr-6" to={menuItem.url} key={`menuLink_${key}`}>
              {menuItem.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
