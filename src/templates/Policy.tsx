import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';

const PrivacyPolicy = ({ data: { datoCmsPolicy: policy } }) => (
  <MainLayout seo={policy.seoMetaTags}>
    <main className="relative h-full">
      <Layout>
        <section
          className="mt-24 mb-12 whitespace-pre-line markdown"
          dangerouslySetInnerHTML={{ __html: policy.policyTextNode.childMarkdownRemark.html }}
        />
      </Layout>
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
