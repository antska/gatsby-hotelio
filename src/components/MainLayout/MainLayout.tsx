import React from 'react';
import { Link } from 'gatsby';
import CookieConsent from 'react-cookie-consent';

import SEO from '../SEO';
import Footer from '../Footer';
import NavBar from '../NavBar';

type Props = {
  children: React.ReactNode;
  seo?: any;
};

const MainLayout = ({ children, seo }: Props) => (
  <div>
    <SEO meta={seo} />
    <CookieConsent
      enableDeclineButton
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      style={{
        justifyContent: 'unset',
        borderTopRightRadius: '500px',
        width: '200px',
        height: '200px',
        opacity: 0.8,
        alignContent: 'flex-end',
      }}
      contentStyle={{ flex: 'unset', margin: '0 50px 0 10px', fontSize: 'small' }}
      buttonStyle={{ fontSize: 'small' }}
      declineButtonStyle={{ fontSize: 'small' }}
    >
      <p>
        This website uses cookies for analytics purposes. Read our{' '}
        <Link className="text-blue-300 hover:underline" to="/cookie-policy" title="Privacy policy">
          Cookie Policy
        </Link>
        .
      </p>
    </CookieConsent>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
