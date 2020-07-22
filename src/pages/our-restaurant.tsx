import React from 'react';
import Img from 'gatsby-image';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Map from '../components/Map';
import { useRestaurant } from '../hooks/useRestaurant';
import ScrollButton from '../components/ScrollButton';
import MainLayout from '../components/MainLayout';

const Gallery = () => {
  const { datoCmsRestaurant, datoCmsContact } = useRestaurant();

  return (
    <MainLayout seo={datoCmsRestaurant.seoMetaTags}>
      <main className="relative h-full">
        <Header
          heroImage={datoCmsRestaurant.coverImage.fluid}
          title={datoCmsRestaurant.title}
          subtitle={datoCmsRestaurant.subtitle}
          bgFixed
        />
        <Layout>
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
          <section
            className="flex h-600 m-12 xs:flex-col xs:m-0 xs:h-full lg:h-600 lg:m-12 lg:flex-row"
            data-sal="zoom-out"
            data-sal-duration="900"
            data-sal-delay="400"
            data-sal-easing="easeInSine"
          >
            <div className="xs:w-full lg:w-6/12">
              <Map />
            </div>
            <section className="mb-8 p-12 z-40 grid grid-cols-3 xs:grid-cols-1 xs:gap-12 md:grid-cols-3 items-center">
              <div>
                <h5 className="font-semibold">Our Adress</h5>
                <p className="text-sm whitespace-pre-line">{datoCmsContact.address}</p>
              </div>
              <div>
                <h5 className="font-semibold">By Car</h5>
                <p className="text-sm whitespace-pre-line">{datoCmsContact.byCar}</p>
              </div>
              <div>
                <h5 className="font-semibold">By Bus</h5>
                <p className="text-sm whitespace-pre-line">{datoCmsContact.byBus}</p>
              </div>
            </section>
          </section>
        </Layout>
        <ScrollButton />
      </main>
    </MainLayout>
  );
};

export default Gallery;
