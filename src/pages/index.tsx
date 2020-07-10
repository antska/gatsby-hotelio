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
import SEO from '../components/SEO';

const IndexPage = () => {
  const header = useHeader();

  const tRef = useRef(null);
  const tOnScreen = useOnScreen(tRef);

  return (
    <>
      <SEO meta={header.seoMetaTags} />
      <NavBar bottomNav={!tOnScreen} withLogo />
      <main className="relative h-full">
        <Header
          heroImage={header.datoCmsHome.hero.fluid}
          title="Pleasant Stay in Paros Island"
          subtitle="Rooms &amp; apartments"
          hasLogo
        />
        <Welcome
          title={header.datoCmsHome.welcomeTitle}
          description={header.datoCmsHome.welcomeMessage}
          image={header.datoCmsHome.welcomeImage.fluid}
        />
        <Layout>
          <Rooms ref={tRef} />
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
    </>
  );
};

export default IndexPage;
