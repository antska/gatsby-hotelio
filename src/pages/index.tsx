import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import Explore from '../components/Explore';
import InstagramFeed from '../components/InstagramFeed';
import Directions from '../components/Directions';
import { useHeader } from '../hooks/useHeader';
import NavBar from '../components/NavBar';

const IndexPage = () => {
  const header = useHeader();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const main = document.querySelector('header');
    const nav = document.querySelector('.nav');
    const offset = main?.offsetHeight - nav?.offsetHeight;

    if (window.pageYOffset > offset) {
      nav?.classList.remove('bottom-nav');
      nav?.classList.add('top-nav');
    } else {
      nav?.classList.add('bottom-nav');
      nav?.classList.remove('top-nav');
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
      <NavBar bottomNav />
      <Layout>
        <Rooms />
        <Explore />
        <InstagramFeed />
      </Layout>
      <Directions />
      <Footer />
    </>
  );
};

export default IndexPage;