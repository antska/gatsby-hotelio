import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useAboutUs } from '../hooks/useAboutUs';
import ScrollButton from '../components/ScrollButton';
import MainLayout from '../components/MainLayout';

const Contact = () => {
  const { datoCmsAbout } = useAboutUs();

  return (
    <MainLayout seo={datoCmsAbout.seoMetaTags}>
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
                  data-sal-delay="100"
                  data-sal-easing="easeInSine"
                >
                  {datoCmsAbout.title}
                </h2>
                <div
                  className="text-xl lg:text-justify"
                  data-sal="slide-right"
                  data-sal-duration="700"
                  data-sal-delay="200"
                  data-sal-easing="easeInSine"
                  dangerouslySetInnerHTML={{ __html: datoCmsAbout.description1Node.childMarkdownRemark.html }}
                />
              </div>
              <Img
                className="col-span-2 w-8/12"
                fluid={datoCmsAbout.image1.fluid}
                title={datoCmsAbout.image1.title}
                alt={datoCmsAbout.image1.alt}
              />
            </div>
            <div className="grid grid-cols-3 gap-24 my-32 xs:grid-cols-1 xs:gap-8 lg:grid-cols-3 xl:gap-24">
              <Img
                className="col-span-2"
                fluid={datoCmsAbout.image2.fluid}
                title={datoCmsAbout.image2.title}
                alt={datoCmsAbout.image2.alt}
              />
              <div className="xs:mx-4">
                <div
                  className="col-span-1 text-xl my-12"
                  data-sal="slide-left"
                  data-sal-duration="700"
                  data-sal-delay="300"
                  data-sal-easing="easeInSine"
                  dangerouslySetInnerHTML={{ __html: datoCmsAbout.description2Node.childMarkdownRemark.html }}
                />
                <div data-sal="slide-left" data-sal-duration="700" data-sal-delay="500" data-sal-easing="easeInSine">
                  <Img
                    fixed={datoCmsAbout.signature.fixed}
                    title={datoCmsAbout.signature.title}
                    alt={datoCmsAbout.signature.alt}
                  />
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
    </MainLayout>
  );
};

export default Contact;
