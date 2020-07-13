import React from 'react';
import Img from 'gatsby-image';

import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { useRestaurant } from '../hooks/useRestaurant';
import ScrollButton from '../components/ScrollButton';

const Gallery = () => {
  const { datoCmsRestaurant } = useRestaurant();

  return (
    <main className="relative h-full">
      <Header
        heroImage={datoCmsRestaurant.coverImage.fluid}
        title={datoCmsRestaurant.title}
        subtitle={datoCmsRestaurant.subtitle}
        bgFixed
      />
      <Layout>
        <NavBar withLogo />
        <section className="mb-8 p-12">
          <div className="grid grid-cols-2 gap-8 xs:grid-cols-1 md:grid-cols-2">
            <p
              className="text-sm"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="100"
              data-sal-easing="easeInSine"
            >
              {datoCmsRestaurant.textLeft}
            </p>
            <p
              className="text-sm"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="100"
              data-sal-easing="easeInSine"
            >
              {datoCmsRestaurant.textRight}
            </p>
            {Object.keys(datoCmsRestaurant.menu).map(key => (
              <div
                className="text-sm mr-8"
                key={key}
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="200"
                data-sal-easing="easeInSine"
              >
                <h4 className="mb-8">{key}</h4>
                {datoCmsRestaurant.menu[key].map(food => (
                  <div className="flex flex-row justify-between" key={food.name}>
                    <div className="mb-6">
                      <strong className="tracking-widest">{food.name}</strong>
                      <p>{food.ingredients}</p>
                    </div>
                    <div>{food.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8 mt-24 xs:grid-cols-1 lg:grid-cols-3">
            <div
              className="col-span-2"
              data-sal="slide-right"
              data-sal-duration="500"
              data-sal-delay="400"
              data-sal-easing="easeInSine"
            >
              <Img
                fluid={datoCmsRestaurant.philosophyImage.fluid}
                title={datoCmsRestaurant.philosophyImage.title}
                alt={datoCmsRestaurant.philosophyImage.alt}
              />
            </div>
            <div>
              <h2 data-sal="slide-left" data-sal-duration="500" data-sal-delay="500" data-sal-easing="easeInSine">
                Our Philoshopy
              </h2>
              <p
                className="text-lg italic mt-4 mb-12"
                data-sal="slide-left"
                data-sal-duration="500"
                data-sal-delay="700"
                data-sal-easing="easeInSine"
              >
                {datoCmsRestaurant.philosophy}
              </p>
              <a
                href="https://www.alikirestaurant.com"
                target="_blank"
                rel="noopener norefferer"
                className="text-center border border-helens-blue hover:bg-gray-900 hover:text-white transition-all duration-500 block py-4 px-6 w-full"
                data-sal="zoom-in"
                data-sal-duration="500"
                data-sal-delay="600"
                data-sal-easing="easeInSine"
              >
                MORE ABOUT US
              </a>
            </div>
          </div>
        </section>
      </Layout>
      <section className="h-600">
        <Map />
      </section>
      <Footer />
      <ScrollButton />
    </main>
  );
};

export default Gallery;
