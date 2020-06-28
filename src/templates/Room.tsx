import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PriceList from '../components/Pricelist';

const Room = ({ data: { datoCmsRoom: room } }) => {
  const scrollTo = (sectionId: string) =>
    document.querySelector(`#${sectionId}`)?.scrollIntoView({
      behavior: 'smooth'
    });

  return (
    <>
      <Header heroImage={room.coverImage.fluid} title={room.title} subtitle={room.excerpt} bgFixed />
      <Layout extraClasses="relative z-30 scroll-smooth">
        <NavBar withLogo />
        <ul className="absolute flex -mt-8 text-white uppercase centered-axis-x">
          <li className="mr-6 cursor-pointer" onClick={() => scrollTo('detail')}>
            Detail
          </li>
          <li className="mr-6 cursor-pointer" onClick={() => scrollTo('amenities')}>
            Amenities & Services
          </li>
          <li className="mr-6 cursor-pointer" onClick={() => scrollTo('gallery')}>
            Gallery
          </li>
        </ul>
        <section id="detail" className="-mt-24 mb-24 p-12 shadow-lg z-40 bg-white">
          <div className="grid grid-cols-3 gap-4">
            <div className="pr-12 col-span-2">
              <h3>Description</h3>
              <p className="py-4">{room.description}</p>
              <h3>Rates</h3>
              <PriceList prices={room.pricelist} />
            </div>
            <div className="px-8 border-l-2 border-gray-700">
              <p className="text-sm">FROM</p>
              <h1 className="font-bold ml-8">45 €</h1>
              <button className="border border-gold bg-gold text-white block rounded-sm py-4 px-6 ml-2 w-full">
                BOOK NOW
              </button>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export const query = graphql`
  query RoomsPageQuery($slug: String!) {
    datoCmsRoom(slug: { eq: $slug }) {
      id
      title
      description
      slug
      excerpt
      pricelist
      coverImage {
        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

export default Room;
