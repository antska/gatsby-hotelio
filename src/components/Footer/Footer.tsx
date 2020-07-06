import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { useFooter } from '../../hooks/useFooter';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  const footer = useFooter();

  return (
    <footer className="bg-helens-blue text-white">
      <div className="container mx-auto grid grid-cols-4 justify-center py-24 xs:grid-cols-1 xs:content-center xs:items-center xs:justify-items-center xs:text-center xs:gap-6 xs:py-4">
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
          <SocialIcons />
        </div>
        {footer.datoCmsFooter.footerImages.map((award, key: number) => (
          <div key={`award_${key}`}>
            <h5 className="mb-4">{award.title}</h5>
            <Img fixed={award.fixed} />
          </div>
        ))}
        <div>
          <h5 className="mb-4">TRIPADVISOR</h5>
          <div id="TA_cdsratingsonlynarrow690" className="TA_cdsratingsonlynarrow">
            <ul id="Q5HYeQWb" className="TA_links SPakd4">
              <li id="XsqhDlm2mA" className="yOduvrE">
                <a
                  target="_blank"
                  href="https://www.tripadvisor.com/Hotel_Review-g1190421-d3437250-Reviews-Helen_s_Minimal_Studios-Aliki_Paros_Cyclades_South_Aegean.html"
                >
                  <img
                    src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                    alt="TripAdvisor"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-2 py-8 px-12 border-t border-white text-xs xs:flex-col xs:px-2">
        <div className="flex-1 xs:text-center xs:mb-4">© Copyright Helen's Minimal Studios & Apartments</div>
        <div className="flex-1 text-right xs:flex xs:flex-col xs:text-center">
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
