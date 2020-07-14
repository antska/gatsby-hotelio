import { useStaticQuery, graphql } from 'gatsby';

export const useHeader = () =>
  useStaticQuery(
    graphql`
      query header {
        datoCmsHome {
          logo {
            url
          }
          miniLogo {
            url
          }
          hero {
            title
            alt
            fluid(maxWidth: 3008) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          welcomeTitle
          welcomeMessage
          welcomeImage {
            title
            alt
            fluid(maxWidth: 1915, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          discoverImage {
            title
            alt
            fluid(maxWidth: 4000) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
        allDatoCmsHeroSlider {
          edges {
            node {
              title
              subtitle
              image {
                title
                alt
                fluid(maxWidth: 1920) {
                  ...GatsbyDatoCmsFluid_noBase64
                }
              }
            }
          }
        }
        allDatoCmsMenu(sort: { fields: position }) {
          edges {
            node {
              url
              label
            }
          }
        }
      }
    `
  );
