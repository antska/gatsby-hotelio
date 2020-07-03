import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <>
      <Layout>
        <NavBar withLogo />
        <section className="mt-32 mb-12">TESSTTTT</section>
      </Layout>
      <Footer />
    </>
  );
};

export default Blog;
