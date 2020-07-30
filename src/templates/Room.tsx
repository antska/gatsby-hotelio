import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { FaDoorOpen } from 'react-icons/fa';
import { MdLocalAirport } from 'react-icons/md';
import Slider from 'react-slick';
import BackgroundImage from 'gatsby-background-image';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Header from '../components/Header';
import Layout from '../components/Layout';
import RoomInfo from '../components/RoomInfo';
import Rooms from '../components/Rooms';
import useWindowSize from '../hooks/useWindowSize';
import Form from '../components/Form';
import MainLayout from '../components/MainLayout';

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

  const [openModal, setOpenModal] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width <= 650;

  const settings = {
    slidesToShow: isMobile ? 1 : 2,
    speed: 500,
    infinite: true,
    centerMode: !isMobile,
    slidesToScroll: 1,

    nextArrow: <RiArrowRightSLine size="12" color="black" />,
    prevArrow: <RiArrowLeftSLine size="12" color="black" />
  };

  return (
    <MainLayout seo={room.seoMetaTags}>
      <main className="relative h-full">
        <Header heroImage={room.coverImage.fluid} title={room.title} subtitle={room.excerpt} bgFixed height="h-90vh" />
        <Layout extraClasses="relative z-30 scroll-smooth">
          <ul
            className="absolute flex -mt-8 text-white uppercase centered-axis-x items-center text-center xs:-mt-24 md:-mt-12"
            data-sal="fade"
            data-sal-duration="700"
            data-sal-delay="200"
            data-sal-easing="easeInSine"
          >
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
          <section id="detail" className="-mt-24 mb-8 p-12 shadow-lg z-40 bg-white xs:p-4 md:p-12">
            <div className="grid grid-cols-3 gap-4 xs:grid-cols-1 md:grid-cols-3">
              <div className="pr-12 col-span-2 xs:pr-0">
                <h3>Description</h3>
                <p className="py-4">{room.description}</p>
                {isMobile && (
                  <div className="px-8 border-l-2 border-gray-700 my-8">
                    <p className="text-sm">FROM</p>
                    <h1 className="font-light ml-6">{Object.values(room.pricelist)[0]}</h1>
                    <button
                      className="border border-helens-blue bg-helens-blue hover:bg-gray-900 transition-all duration-500 text-white block rounded-sm py-4 px-6 w-full"
                      data-sal="slide-left"
                      data-sal-duration="700"
                      data-sal-delay="300"
                      data-sal-easing="easeInSine"
                    >
                      BOOK NOW
                    </button>
                    <RoomInfo info={room.info} />
                  </div>
                )}
                <div className="m-3 mt-16 text-center">
                  <button
                    className="bg-white text-gray-800 font-bold rounded border-b-2 border-helens-blue hover:bg-helens-blue hover:text-white py-2 px-6 inline-flex items-center shadow-lg transition-all duration-300"
                    onClick={() => setOpenModal(true)}
                  >
                    <span className="mr-2">Check Rates</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {!isMobile && (
                <div className="px-8 border-l-2 border-gray-700 md:px-0 md:pl-6 xl:px-8">
                  <p className="text-sm">FROM</p>
                  <h1 className="font-light ml-8">{Object.values(room.pricelist)[0]}</h1>
                  <button className="border border-helens-blue bg-helens-blue transition-all duration-300 text-white block rounded-sm py-4 px-6 w-full hover:bg-gray-900 md:px-4 md:py-4">
                    BOOK NOW
                  </button>
                  <RoomInfo info={room.info} />
                </div>
              )}
            </div>
          </section>
        </Layout>
        <section
          id="amenities"
          className="p-24 bg-helens-dark-blue text-white xs:p-8 md:p-24"
          data-sal="flip-up"
          data-sal-duration="700"
          data-sal-delay="400"
          data-sal-easing="easeInSine"
        >
          <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 md:grid-cols-2">
            <div className="pr-12 xs:pr-0">
              <div className="flex items-center mb-4">
                <FaDoorOpen size="40" />
                <h3 className="ml-4 xs:ml-0 lg:ml-4">Amenities</h3>
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-1 lg:grid-cols-2">
                {amenities.slice(0, 6).map(info => (
                  <p className="mb-2" key={info}>{`▸ ${info}`}</p>
                ))}
                {amenities.slice(6, 12).map(info => (
                  <p className="mb-2" key={info}>{`▸ ${info}`}</p>
                ))}
              </div>
            </div>
            <div className="px-8 xs:px-0 md:px-8">
              <div className="flex items-center mb-4">
                <MdLocalAirport size="40" />
                <h3 className="ml-4 xs:ml-0">Services</h3>
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
              <div key={img.originalId}>
                <BackgroundImage
                  Tag="div"
                  fluid={img.fluid}
                  className="mr-4 h-600 xs:mr-0 md:mr-4"
                  alt={img.alt}
                  title={img.title}
                />
              </div>
            ))}
          </Slider>
        </section>
        <Layout>
          <div className="text-center mt-12">
            <h2>Other Rooms</h2>
            <p>COULD ALSO INTEREST YOU</p>
          </div>
          <Rooms withTitle={false} withBooking={false} limit={3} currentRoomId={room.id} />
        </Layout>
        {openModal && (
          <div className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-75 animation-fadeIn animation-linear animation-once">
            <div className="border border-helens-blue shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
              <div className="py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Send us e-mail</p>
                  <div className="cursor-pointer z-50" onClick={() => setOpenModal(false)}>
                    <svg
                      className="fill-current text-black transform hover:rotate-90 hover:scale-125 hover:text-red-600 transition-all duration-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </div>
                </div>
                <div className="my-5">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </MainLayout>
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
        originalId
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      coverImage {
        fluid(maxWidth: 4128) {
          ...GatsbyDatoCmsFluid
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Room;
