import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import Directions from '../components/Directions';
import { useHeader } from '../hooks/useHeader';
import Welcome from '../components/Welcome';
import MainLayout from '../components/MainLayout';

const IndexPage = () => {
  const header = useHeader();

  return (
    <MainLayout seo={header.datoCmsHome.seoMetaTags}>
      <main className="relative h-full">
        <Header
          heroImage={header.datoCmsHome.hero.fluid}
          title="Helen's Minimal"
          subtitle="Rooms &amp; apartments in Aliki, Paros"
        />
        <Welcome
          title={header.datoCmsHome.welcomeTitle}
          description={header.datoCmsHome.welcomeMessage}
          image={header.datoCmsHome.welcomeImage}
        />
        <Layout>
          <Rooms />
        </Layout>
        <Header
          heroImage={header.datoCmsHome.discoverImage.fluid}
          title="Discover Aliki"
          subtitle="Activities, Nearby villages &amp; more"
          actionTo="/blog"
          height="h-600"
          bgFixed
        />
        <Directions />
      </main>
    </MainLayout>
  );
};

export default IndexPage;
