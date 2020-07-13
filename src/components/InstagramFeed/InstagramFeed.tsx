import React, { useState, useCallback } from 'react';
import Img from 'gatsby-image';
import { FaInstagram } from 'react-icons/fa';

import { useInstagram } from '../../hooks/useInstagram';

const InstagramFeed = () => {
  const instagram = useInstagram();
  const igPosts = instagram.allInstaNode.edges;

  const [visible, setVisible] = useState(4);

  const loadMore = useCallback(() => {
    setVisible(visible + 4);
  }, [visible]);

  return (
    <>
      <div className="mb-1 mt-16">
        <div className="flex justify-center items-center font-light">
          <h4
            className="font-insta"
            data-sal="slide-right"
            data-sal-duration="700"
            data-sal-delay="200"
            data-sal-easing="easeInSine"
          >
            Our Instagram
          </h4>
        </div>
        <a href="https://www.instagram.com/helenstudios_paros" target="_blank" rel="noopener norefferer">
          <div className="flex items-center xs:mx-4">
            <img
              className="mr-2 h-12 w-12"
              src={instagram.datoCmsHome.logo.url}
              alt="instagram logo"
              title="instagram logo"
            />
            <div className="flex flex-col">
              <p className="font-semibold">helenstudios_paros</p>
              <p className="text-xs">
                Studios & Apartments in the center of Aliki village. Just renovated bathrooms & kitchens. Contact us:
                info@helenstudios.com
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 xs:grid-cols-2 xs:mx-4 lg:grid-cols-4">
        {igPosts.slice(0, visible).map(({ node: ig }, index: number) => (
          <a
            href={`https://www.instagram.com/p/${ig.id}`}
            target="_blank"
            rel="noopener norefferer"
            key={ig.id}
            data-sal="fade"
            data-sal-duration="700"
            data-sal-delay={(index + 1) * 100}
            data-sal-easing="easeInSine"
          >
            <Img
              fluid={ig.localFile.childImageSharp.fluid}
              title={`Instagram photo ${index + 1}`}
              alt={`Instagram photo ${index + 1}`}
            />
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {visible < igPosts.length && (
          <button className="bg-gray-800 hover:bg-blue-500 text-white text-xs py-1 px-2 rounded" onClick={loadMore}>
            <span>Load more...</span>
          </button>
        )}
        <a
          href="https://www.instagram.com/helenstudios_paros/"
          target="_blank"
          rel="noopener norefferer"
          className="ml-4 bg-blue-500 hover:bg-gray-800 text-white text-xs px-2 rounded flex justify-center items-center"
        >
          <FaInstagram className="mr-1" title="Instagram" />
          <span>Follow us on Instagram</span>
        </a>
      </div>
    </>
  );
};

export default InstagramFeed;
