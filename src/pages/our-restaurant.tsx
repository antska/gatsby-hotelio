import React from 'react';
import Img from 'gatsby-image';

import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { useRestaurant } from '../hooks/useRestaurant';

const Gallery = () => {
  const { datoCmsRestaurant } = useRestaurant();

  return (
    <>
      <Header
        heroImage={datoCmsRestaurant.coverImage.fluid}
        title={datoCmsRestaurant.title}
        subtitle={datoCmsRestaurant.subtitle}
        bgFixed
        fullScreen
      />
      <Layout>
        <NavBar withLogo />
        <section className="mb-8 p-12">
          <div className="grid grid-cols-2 gap-8">
            <p className="text-sm">{datoCmsRestaurant.textLeft}</p>
            <p className="text-sm">{datoCmsRestaurant.textRight}</p>
            {Object.keys(datoCmsRestaurant.menu).map(key => (
              <div className="text-sm mr-8">
                <h4 className="mb-8">{key}</h4>
                {datoCmsRestaurant.menu[key].map(food => (
                  <div className="flex flex-row justify-between">
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
          <div className="grid grid-cols-3  gap-8 mt-24">
            <Img className="col-span-2" fluid={datoCmsRestaurant.philosophyImage.fluid} />
            <div>
              <h2>Our Philoshopy</h2>
              <p className="text-lg italic mt-4 mb-12">{datoCmsRestaurant.philosophy}</p>
              <a
                href="https://www.alikirestaurant.com"
                target="_blank"
                rel="noopener norefferer"
                className="text-center border border-helens-blue hover:bg-gray-900 hover:text-white transition-all duration-500 block py-4 px-6 w-full"
              >
                MORE ABOUT US
              </a>
            </div>
          </div>
        </section>
      </Layout>
      <section className="h-600">
        <Map marker={{ lat: 36.994698, lng: 25.136169 }} />
      </section>
      <Footer />
    </>
  );
};

export default Gallery;