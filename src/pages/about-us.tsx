import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useAboutUs } from '../hooks/useAboutUs';
import ScrollButton from '../components/ScrollButton';

const Contact = () => {
  const { datoCmsAbout } = useAboutUs();

  return (
    <main className="relative h-full">
      <Layout>
        <NavBar withLogo />
        <section className="mt-32 mb-12">
          <div className="grid grid-cols-3 gap-24 xs:grid-cols-1 xs:gap-8 lg:grid-cols-3 xl:gap-24">
            <div className="xs:mx-4">
              <h2
                className="font-bold col-span-1 my-12"
                data-sal="slide-right"
                data-sal-duration="700"
                data-sal-delay="200"
                data-sal-easing="easeInSine"
              >
                {datoCmsAbout.title}
              </h2>
              <p
                className="text-xl lg:text-justify"
                data-sal="slide-right"
                data-sal-duration="700"
                data-sal-delay="500"
                data-sal-easing="easeInSine"
              >
                {datoCmsAbout.description1}
              </p>
            </div>
            <Img className="col-span-2" fluid={datoCmsAbout.image1.fluid} />
          </div>
          <div className="grid grid-cols-3 gap-24 my-32 xs:grid-cols-1 xs:gap-8 lg:grid-cols-3 xl:gap-24">
            <Img className="col-span-2" fluid={datoCmsAbout.image2.fluid} />
            <div className="xs:mx-4">
              <p
                className="col-span-1 text-xl my-12"
                data-sal="slide-left"
                data-sal-duration="700"
                data-sal-delay="500"
                data-sal-easing="easeInSine"
              >
                {datoCmsAbout.description2}
              </p>
              <div data-sal="slide-left" data-sal-duration="700" data-sal-delay="1000" data-sal-easing="easeInSine">
                <Img fixed={datoCmsAbout.signature.fixed} />
                <p className="font-bold">Eleni Ragkousi</p>
                <p className="italic">Owner</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
      <ScrollButton />
    </main>
  );
};

export default Contact;
