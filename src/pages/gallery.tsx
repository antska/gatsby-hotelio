import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';

import Header from '../components/Header';
import Layout from '../components/Layout';
import { useGallery } from '../hooks/useGallery';
import ImageGallery from '../components/ImageGallery';
import ScrollButton from '../components/ScrollButton';
import MainLayout from '../components/MainLayout';

const Gallery = () => {
  const { datoCmsGallery } = useGallery();

  return (
    <MainLayout seo={datoCmsGallery.seoMetaTags}>
      <main className="relative h-full">
        <Header
          heroImage={datoCmsGallery.coverImage.fluid}
          title={datoCmsGallery.title}
          subtitle={datoCmsGallery.subtitle}
          bgFixed
        />
        <Layout extraClasses="relative z-30 scroll-smooth">
          <section className="mb-8 p-12 z-40 xs:p-0 xs:mt-0 md:mt-12">
            <SimpleReactLightbox>
              <ImageGallery images={datoCmsGallery.photos} />
            </SimpleReactLightbox>
          </section>
        </Layout>
        <ScrollButton />
      </main>
    </MainLayout>
  );
};

export default Gallery;
