import React from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import BackgroundImage from 'gatsby-background-image';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
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

const Explore = ({ data: { datoCmsExploreCard: explore } }) => {
  return (
    <>
      <Header
        heroImage={explore.coverImage.fluid}
        title={explore.title}
        subtitle={explore.excerpt}
        bgFixed
        fullScreen
      />
      <Layout>
        <NavBar withLogo />
      </Layout>
      {/* <section id="gallery" className="my-4">
        <Slider {...settings}>
          {room.gallery.map(img => (
            <div>
              <BackgroundImage Tag="div" fluid={img.fluid} className="mr-4 h-600" />
            </div>
          ))}
        </Slider>
      </section> */}
      <section className="container my-12 mx-auto text-center">
        <h2>Other Rooms</h2>
        <p>COULD ALSO BE INTEREST FOR YOU</p>
        <Rooms withTitle={false} withBooking={false} limit={3} />
      </section>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ExploreQuery($slug: String!) {
    datoCmsExploreCard(slug: { eq: $slug }) {
      id
      title
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

export default Explore;
