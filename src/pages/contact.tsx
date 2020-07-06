import React from 'react';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Form from '../components/Form';
import InfoCard from '../components/InfoCard';
import SocialIcons from '../components/SocialIcons';

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="flex justify-between items-center mt-32 mb-12 xs:flex-col xs:mx-4 md:flex-row md:mx-0">
          <h1 className="font-bold">
            Located in the heart of <br />
            Aliki village, of Paros island
          </h1>
          <a
            href="https://www.google.com/maps/dir//Helen's+Minimal+Studios+%26+Apartments,+Aliki+844+00/@36.9942793,25.1353213,17z/data=!4m19!1m9!3m8!1s0x14986f0370d94fcb:0xc5676c43ec7dc08b!2sHelen's+Minimal+Studios+%26+Apartments!5m2!4m1!1i2!8m2!3d36.9946851!4d25.136697!4m8!1m0!1m5!1m1!1s0x14986f0370d94fcb:0xc5676c43ec7dc08b!2m2!1d25.1366965!2d36.9946846!3e3"
            target="_blank"
            rel="noopener norefferer"
            className="border border-helens-blue bg-helens-blue hover:bg-gray-900 transition-all duration-500 text-white block rounded-sm py-4 px-6 text-center"
          >
            GET DIRECTIONS
          </a>
        </section>
      </Layout>
      <section className="h-600">
        <Map marker={{ lat: 36.9946846, lng: 25.1366965 }} />
      </section>
      <Layout>
        <NavBar withLogo />
        <section className="mb-8 p-12 z-40 grid grid-cols-3 xs:grid-cols-1 xs:gap-12 md:grid-cols-3 md:gap-0">
          <div>
            <h5 className="font-semibold">Our Adress</h5>
            <p className="text-sm">
              Aliki Paros, Greece, 84400 <br />
              (Behind Aliki Restaurant)
            </p>
          </div>
          <div>
            <h5 className="font-semibold">By Car</h5>
            <p className="text-sm">
              Approximately 15 minutes
              <br /> from the port of Paros,
              <br /> or 5 minutes from Paros airport.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">By Bus</h5>
            <p className="text-sm">
              30 minutes from Paroikia bus station
              <br /> (next to the port)
            </p>
          </div>
        </section>
        <section className="grid grid-cols-2 mb-24 xs:grid-cols-1 xs:mx-4 xs:gap-12 md:grid-cols-2 md:gap-12 md:mx-0">
          <div>
            <h2>Do you want to book a room?</h2>
            <Form />
          </div>
          <InfoCard />
        </section>
        <section className="flex flex-col justify-center items-center mb-24">
          <h3>Stay in touch with us</h3>
          <div>
            <SocialIcons />
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Contact;
