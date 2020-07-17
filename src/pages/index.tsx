import React, { useRef } from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rooms from '../components/Rooms';
import InstagramFeed from '../components/InstagramFeed';
import Directions from '../components/Directions';
import { useHeader } from '../hooks/useHeader';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import ScrollButton from '../components/ScrollButton';
import useOnScreen from '../hooks/useOnScreen';
import useWindowSize from '../hooks/useWindowSize';
import MainLayout from '../components/MainLayout';

const IndexPage = () => {
  const header = useHeader();

  const tRef = useRef(null);
  const tOnScreen = useOnScreen(tRef);
  const size = useWindowSize();
  const isMobile = size.width! <= 768;

  return (
    <MainLayout seo={header.datoCmsHome.seoMetaTags}>
      <NavBar ref={tRef} bottomNav={!tOnScreen && !isMobile} withLogo />
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
          margin="mb-16"
          bgFixed
        />
        <Layout>
          <InstagramFeed />
        </Layout>
        <Directions />
        <Footer />
        <ScrollButton />
      </main>
    </MainLayout>
  );
};

export default IndexPage;
