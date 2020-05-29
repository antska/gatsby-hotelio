import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = ({ data }) => (
  <>
    <Header />
    <div className="flex items-center justify-center h-screen" />
    <Footer />
  </>
);

export default IndexPage;

// export const query = graphql`
//   query IndexQuery {
//     allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           id
//           title
//           slug
//           excerpt
//           coverImage {
//             fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//               ...GatsbyDatoCmsSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `;
