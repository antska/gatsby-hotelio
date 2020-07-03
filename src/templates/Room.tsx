import React from 'react';
import { graphql } from 'gatsby';
import { FaDoorOpen } from 'react-icons/fa';
import { MdLocalAirport } from 'react-icons/md';
import Slider from 'react-slick';
import BackgroundImage from 'gatsby-background-image';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PriceList from '../components/Pricelist';
import RoomInfo from '../components/RoomInfo';
import Rooms from '../components/Rooms';

const settings = {
  slidesToShow: 2,
  speed: 500,
  infinite: true,
  centerMode: true,
  slidesToScroll: 1,
  nextArrow: <RiArrowRightSLine size="12" color="black" />,
  prevArrow: <RiArrowLeftSLine size="12" color="black" />
};

const amenities = [
  'Air conditioning',
  'Closet',
  'Coffee machine',
  'Garden view',
  'Hairdryer',
  'Kitchenette',
  'Linen',
  'Private bathroom',
  'Refrigerator',
  'Samsung® LED TV',
  'Shower',
  'Towels'
];

const services = ['Airport shuttle (Free)', 'Luggage storage (Free)', '10% discount on restaurant'];

const Room = ({ data: { datoCmsRoom: room } }) => {
  const scrollTo = (sectionId: string) =>
    document.querySelector(`#${sectionId}`)?.scrollIntoView({
      behavior: 'smooth'
    });

  return (
    <>
      <Header heroImage={room.coverImage.fluid} title={room.title} subtitle={room.excerpt} bgFixed height="h-90vh" />
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
        <section id="detail" className="-mt-24 mb-8 p-12 shadow-lg z-40 bg-white">
          <div className="grid grid-cols-3 gap-4">
            <div className="pr-12 col-span-2">
              <h3>Description</h3>
              <p className="py-4">{room.description}</p>
              <h3>Rates</h3>
              <PriceList prices={room.pricelist} />
            </div>
            <div className="px-8 border-l-2 border-gray-700">
              <p className="text-sm">FROM</p>
              <h1 className="font-light ml-8">{Object.values(room.pricelist)[0]}</h1>
              <button className="border border-helens-blue bg-helens-blue hover:bg-gray-900 transition-all duration-500 text-white block rounded-sm py-4 px-6 w-full">
                BOOK NOW
              </button>
              <RoomInfo info={room.info} />
            </div>
          </div>
        </section>
      </Layout>
      <section id="amenities" className="p-24 bg-helens-dark-blue text-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="pr-12">
            <div className="flex items-center mb-4">
              <FaDoorOpen size="40" />
              <h3 className="ml-4">Amenities</h3>
            </div>
            <div className="grid grid-cols-2">
              {amenities.slice(0, 6).map(info => (
                <p className="mb-2" key={info}>{`▸ ${info}`}</p>
              ))}
              {amenities.slice(6, 12).map(info => (
                <p className="mb-2" key={info}>{`▸ ${info}`}</p>
              ))}
            </div>
          </div>
          <div className="px-8">
            <div className="flex items-center mb-4">
              <MdLocalAirport size="40" />
              <h3 className="ml-4">Services</h3>
            </div>
            {services.map(service => (
              <p className="mb-2" key={service}>{`▸ ${service}`}</p>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery" className="my-4">
        <Slider {...settings}>
          {room.gallery.map(img => (
            <div>
              <BackgroundImage Tag="div" fluid={img.fluid} className="mr-4 h-600" />
            </div>
          ))}
        </Slider>
      </section>
      <section className="container my-12 mx-auto text-center">
        <h2>Other Rooms</h2>
        <p>COULD ALSO BE INTEREST FOR YOU</p>
        <Rooms withTitle={false} withBooking={false} limit={3} currentRoomId={room.id} />
      </section>
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
      info
      gallery {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      coverImage {
        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

export default Room;
