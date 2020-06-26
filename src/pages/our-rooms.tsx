import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useRooms } from '../hooks/useRooms';

const OurRooms = () => {
  const rooms = useRooms();

  return (
    <>
      <Header
        heroImage={rooms.datoCmsOurRoomsPage.heroImage.fluid}
        title="Our Rooms"
        subtitle="Enjoy your stay in our minimalist rooms"
      />
      <Layout>
        <NavBar withLogo />
        <section className="grid grid-cols-3 mt-8">
          {rooms.datoCmsOurRoomsPage.rooms.map(({ coverImage, title }) => (
            <>
              <div>From XX Euro</div>
              <div>{title}</div>
              <Img fluid={coverImage.fluid} />
            </>
          ))}
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default OurRooms;
