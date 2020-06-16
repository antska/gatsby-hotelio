import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import Explore from '../components/Explore';
import InstagramFeed from '../components/InstagramFeed';
import Directions from '../components/Directions';

const IndexPage = () => (
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

export default IndexPage;
