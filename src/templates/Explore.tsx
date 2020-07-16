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
import SEO from '../components/SEO';
import Header from '../components/Header';

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
    <>
      <SEO meta={explore.seoMetaTags} />
      <main className="relative h-full">
        <Header heroImage={explore.coverImage.fluid} title={explore.title} subtitle={explore.subtitle} />
        <Layout>
          <NavBar withLogo />
          <section className="mt-16 mb-12">
            <div
              className="text-justify whitespace-pre-line xs:mx-4 mb-12"
              dangerouslySetInnerHTML={{ __html: explore.descriptionNode.childMarkdownRemark.html }}
            />
            <Slider {...settings} className="mb-12">
              {explore.gallery &&
                explore.gallery.map(img => (
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
            {explore.info.map((entry, index) =>
              index % 2 === 0 || isMobile ? (
                <div className="grid grid-cols-3 gap-24 xs:grid-cols-1 xs:gap-8 lg:grid-cols-3 xl:gap-24">
                  <div className="xs:mx-4">
                    <h2
                      className="font-bold col-span-1 my-12"
                      data-sal="slide-right"
                      data-sal-duration="700"
                      data-sal-delay="100"
                      data-sal-easing="easeInSine"
                    >
                      {entry.title}
                    </h2>
                    <div
                      className="text-xl lg:text-justify"
                      data-sal="slide-right"
                      data-sal-duration="700"
                      data-sal-delay="200"
                      data-sal-easing="easeInSine"
                      dangerouslySetInnerHTML={{ __html: entry.descriptionNode.childMarkdownRemark.html }}
                    />
                  </div>
                  <Img
                    className="col-span-2 h-500"
                    fluid={entry.image.fluid}
                    title={entry.image.title}
                    alt={entry.image.alt}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-24 my-32 xs:grid-cols-1 xs:gap-8 lg:grid-cols-3 xl:gap-24">
                  <Img
                    className="col-span-2 h-500"
                    fluid={entry.image.fluid}
                    title={entry.image.title}
                    alt={entry.image.alt}
                  />
                  <div className="xs:mx-4">
                    <h2
                      className="font-bold col-span-1 my-12"
                      data-sal="slide-left"
                      data-sal-duration="700"
                      data-sal-delay="100"
                      data-sal-easing="easeInSine"
                    >
                      {entry.title}
                    </h2>
                    <div
                      className="text-xl lg:text-justify"
                      data-sal="slide-left"
                      data-sal-duration="700"
                      data-sal-delay="200"
                      data-sal-easing="easeInSine"
                      dangerouslySetInnerHTML={{ __html: entry.descriptionNode.childMarkdownRemark.html }}
                    />
                  </div>
                </div>
              )
            )}
          </section>
          <div className="text-center mt-12">
            <h2>Rooms</h2>
            <p>COULD ALSO BE INTEREST FOR YOU</p>
          </div>
          <Rooms withTitle={false} withBooking={false} limit={3} />
        </Layout>
        <Footer />
        <ScrollButton />
      </main>
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
      subtitle
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      info {
        title
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          title
          alt
          fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
      }
      coverImage {
        fluid(maxWidth: 2800) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      gallery {
        originalId
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Explore;
