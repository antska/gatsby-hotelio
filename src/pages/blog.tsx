import React from 'react';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useBlog } from '../hooks/useBlog';
import BlogCard from '../components/BlogCard';
import ScrollButton from '../components/ScrollButton';

const Blog = () => {
  const { datoCmsBlog, allDatoCmsExploreCard } = useBlog();

  return (
    <main className="relative h-full">
      <Header
        heroImage={datoCmsBlog.coverImage.fluid}
        title={datoCmsBlog.title}
        subtitle={datoCmsBlog.subtitle}
        bgFixed
      />
      <Layout>
        <NavBar withLogo />
        <main className="py-4 my-12">
          <h2 className="text-center font-thin mb-12">Explore Aliki & Paros</h2>
          <div className="px-4">
            <div className="block md:flex justify-between md:-mx-2">
              {allDatoCmsExploreCard.edges.map(({ node: card }, index: number) => (
                <div
                  className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0"
                  key={card.slug}
                  data-sal="flip-left"
                  data-sal-duration="700"
                  data-sal-delay={(index + 1) * 100}
                  data-sal-easing="easeInSine"
                >
                  <BlogCard
                    image={card.coverImage}
                    title={card.title}
                    excerpt={card.excerpt}
                    tags={card.tags}
                    url={card.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
      <Footer />
      <ScrollButton />
    </main>
  );
};

export default Blog;
