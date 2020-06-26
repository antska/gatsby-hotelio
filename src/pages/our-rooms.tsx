import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useHeader } from '../hooks/useHeader';
import NavBar from '../components/NavBar';

const OurRooms = () => {
  const header = useHeader();

  return (
    <>
      <Header
        heroImage={header.datoCmsHome.hero.fluid}
        title="Our Rooms"
        subtitle="Enjoy your stay in our minimalist rooms"
      />
      <Layout>
        <NavBar withLogo />
      </Layout>
      <Footer />
    </>
  );
};

export default OurRooms;
