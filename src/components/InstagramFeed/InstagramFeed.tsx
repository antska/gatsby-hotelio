import React from 'react';
import Img from 'gatsby-image';
import { useInstagram } from '../../hooks/useInstagram';

type Props = {
  image: string;
  title: string;
  excerpt: string;
};

const InstagramFeed = () => {
  const instagram = useInstagram();

  return (
    <div className="grid grid-cols-4 gap-4 mt-16">
      {instagram.allInstaNode.edges.map(({ node: ig }) => (
        <Img fixed={ig.localFile.childImageSharp.fixed} />
      ))}
    </div>
  );
};

export default InstagramFeed;
