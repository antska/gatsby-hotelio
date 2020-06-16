import React, { useState, useCallback } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';

import { useInstagram } from '../../hooks/useInstagram';

type Props = {
  image: string;
  title: string;
  excerpt: string;
};

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
        <a href="https://www.instagram.com/helenstudios_paros" target="_blank" rel="noopener norefferer">
          <div className="flex items-center">
            <Img className="mr-2" fixed={instagram.datoCmsHome.logo.fixed} />
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
      <div className="grid grid-cols-4">
        {igPosts.slice(0, visible).map(({ node: ig }) => (
          <a href={`https://www.instagram.com/p/${ig.id}`} target="_blank" rel="noopener norefferer">
            <Img className="mb-4" fixed={ig.localFile.childImageSharp.fixed} />
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {visible < igPosts.length && (
          <button className="bg-gray-800 hover:bg-blue-500 text-white text-xs py-1 px-2 rounded" onClick={loadMore}>
            <span>Load more...</span>
          </button>
        )}
        <button className="ml-4 bg-blue-500 hover:bg-gray-800 text-white text-xs px-2 rounded">
          <SocialIcon
            url="https://www.instagram.com/helenstudios_paros/"
            style={{ height: 30, width: 30 }}
            fgColor="#fff"
            bgColor="transparent"
          />
          <a href="https://www.instagram.com/helenstudios_paros" target="_blank" rel="noopener norefferer">
            Follow us on Instagram
          </a>
        </button>
      </div>
    </>
  );
};

export default InstagramFeed;
