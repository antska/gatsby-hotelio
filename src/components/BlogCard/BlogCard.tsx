import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Link } from 'gatsby';

type Props = {
  image: FluidObject;
  title: string;
  excerpt: string;
  tags: string;
  url: string;
};

const BlogCard = ({ image, title, excerpt, tags, url }: Props) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-2xl relative hover:scale-105 transform transition-all duration-500">
    <Img fluid={image} className="h-56 w-full object-cover object-center" />
    <div className="p-4 h-auto md:h-40 lg:h-48">
      <Link
        to={`blog/${url}`}
        className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
      >
        {title}
      </Link>
      <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">{excerpt}</div>
      <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
        {tags.split(',').map(tag => (
          <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">{tag}</p>
        ))}
      </div>
    </div>
  </div>
);

export default BlogCard;
