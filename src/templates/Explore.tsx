import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import BackgroundImage from 'gatsby-background-image';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Rooms from '../components/Rooms';
import useWindowSize from '../hooks/useWindowSize';
import ScrollButton from '../components/ScrollButton';

const Explore = ({ data: { datoCmsExploreCard: explore } }) => {
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
    <main className="relative h-full">
      <Layout extraClasses="mt-24">
        <NavBar withLogo />
        <Img
          className="h-600"
          fluid={explore.coverImage.fluid}
          title={explore.coverImage.title}
          alt={explore.coverImage.alt}
        />
        <h2
          className="text-center uppercase my-12"
          data-sal="slide-right"
          data-sal-duration="700"
          data-sal-delay="200"
          data-sal-easing="easeInSine"
        >
          {explore.title}
        </h2>
        <p className="text-justify whitespace-pre-line xs:mx-4">{explore.description}</p>
      </Layout>
      <section className="my-4">
        <Slider {...settings}>
          {explore.gallery.map(img => (
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
          <h2>Rooms</h2>
          <p>COULD ALSO BE INTEREST FOR YOU</p>
        </div>
        <Rooms withTitle={false} withBooking={false} limit={3} />
      </Layout>
      <Footer />
      <ScrollButton />
    </main>
  );
};

export const query = graphql`
  query ExploreQuery($slug: String!) {
    datoCmsExploreCard(slug: { eq: $slug }) {
      id
      title
      slug
      excerpt
      description
      coverImage {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      gallery {
        originalId
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

export default Explore;
