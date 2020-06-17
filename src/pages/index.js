import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import Explore from '../components/Explore';
import InstagramFeed from '../components/InstagramFeed';
import Directions from '../components/Directions';

const IndexPage = () => {
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
      <Header />
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
