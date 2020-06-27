import React from 'react';
import Img from 'gatsby-image';

import { useRooms } from '../hooks/useRooms';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';

const Room = ({ data: { datoCmsRoom: room } }) => {
  const scrollTo = (sectionId: string) =>
    document.querySelector(`#${sectionId}`)?.scrollIntoView({
      behavior: 'smooth'
    });

  return (
    <>
      <Header heroImage={room.coverImage.fluid} title={room.title} subtitle={room.excerpt} />
      <Layout extraClasses="relative z-30 scroll-smooth">
        <NavBar withLogo />
        <ul className="absolute flex -mt-8 text-white uppercase">
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
        <section id="detail" className="-mt-32 mb-24 p-12 shadow-lg z-40 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="pr-12">
              <h3>Description</h3>
              <p className="py-4">{room.description}</p>
              <h3>Rates</h3>
              {/* <Img fluid={coverImage.fluid} /> */}
            </div>
            <div className="pl-8 border-l-2 border-gray-700">
              <p>FROM: ....</p>
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
      coverImage {
        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

export default Room;
