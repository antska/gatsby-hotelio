import React from 'react';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useAboutUs } from '../hooks/useAboutUs';

const Contact = () => {
  const { datoCmsAbout } = useAboutUs();

  return (
    <>
      <Layout>
        <NavBar withLogo />
        <section className="mt-32 mb-12">
          <div className="grid grid-cols-3 gap-24">
            <div>
              <h2 className="font-bold col-span-1 my-12">{datoCmsAbout.title}</h2>
              <p>{datoCmsAbout.description1}</p>
            </div>
            <Img className="col-span-2" fluid={datoCmsAbout.image1.fluid} />
          </div>
          <div className="grid grid-cols-3 gap-24 my-32">
            <Img className="col-span-2" fluid={datoCmsAbout.image2.fluid} />
            <div>
              <p className="col-span-1 text-xl my-12">{datoCmsAbout.description2}</p>
              <Img fixed={datoCmsAbout.signature.fixed} />
              <p className="font-bold">Eleni Ragkousi</p>
              <p className="italic">Owner</p>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Contact;
