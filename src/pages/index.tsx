import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import InstagramFeed from '../components/InstagramFeed';
import Directions from '../components/Directions';
import { useHeader } from '../hooks/useHeader';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';

const IndexPage = () => {
  const header = useHeader();
  const [bottomNav, setBottomNav] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const main = document.querySelector('header');
    const nav = document.querySelector('.nav');
    const offset = main?.offsetHeight ?? 0 - (nav as HTMLElement).offsetHeight;

    if (window.pageYOffset > offset) {
      setBottomNav(false);
    } else {
      setBottomNav(true);
    }
  };

  return (
    <>
      <Header
        heroImage={header.datoCmsHome.hero.fluid}
        title="Pleasant Stay in Paros Island"
        subtitle="Rooms &amp; apartments"
        hasLogo
        fullScreen
      />
      <NavBar bottomNav={bottomNav} withLogo />
      <Welcome
        title={header.datoCmsHome.welcomeTitle}
        description={header.datoCmsHome.welcomeMessage}
        image={header.datoCmsHome.welcomeImage.fluid}
      />
      <Layout>
        <Rooms />
        <InstagramFeed />
      </Layout>
      <Directions />
      <Footer />
    </>
  );
};

export default IndexPage;
