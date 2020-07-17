import React from 'react';

import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';

const PrivacyPolicy = ({ data: { datoCmsPolicy: policy } }) => (
  <MainLayout seo={policy.seoMetaTags}>
    <main className="relative h-full">
      <Layout>
        <NavBar withLogo />
        <section
          className="mt-24 mb-12 whitespace-pre-line markdown"
          dangerouslySetInnerHTML={{ __html: policy.policyTextNode.childMarkdownRemark.html }}
        />
      </Layout>
      <Footer />
      <ScrollButton />
    </main>
  </MainLayout>
);

export const query = graphql`
  query PolicyPageQuery($slug: String!) {
    datoCmsPolicy(slug: { eq: $slug }) {
      title
      policyTextNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default PrivacyPolicy;
