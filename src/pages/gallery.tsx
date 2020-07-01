import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';

import Header from '../components/Header';
import Layout from '../components/Layout';
import { useGallery } from '../hooks/useGallery';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const Gallery = () => {
  const { datoCmsGallery } = useGallery();

  return (
    <>
      <Header
        heroImage={datoCmsGallery.coverImage.fluid}
        title={datoCmsGallery.title}
        subtitle={datoCmsGallery.subtitle}
        bgFixed
        fullScreen
      />
      <Layout extraClasses="relative z-30 scroll-smooth">
        <NavBar withLogo />
        <section className="mb-8 p-12 z-40">
          <SimpleReactLightbox>
            <ImageGallery images={datoCmsGallery.photos} />
          </SimpleReactLightbox>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Gallery;
