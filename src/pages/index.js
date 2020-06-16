import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import Explore from '../components/Explore';
import InstagramFeed from '../components/InstagramFeed';

const IndexPage = () => (
  <>
    <Header />
    <Layout>
      <Rooms />
      <Explore />
      <InstagramFeed />
    </Layout>
  </>
);

export default IndexPage;
