import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Rooms from '../components/Rooms';

const IndexPage = () => (
  <>
    <Header />
    <Layout>
      <Rooms />
    </Layout>
  </>
);

export default IndexPage;
