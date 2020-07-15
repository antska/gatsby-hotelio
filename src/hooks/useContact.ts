import { useStaticQuery, graphql } from 'gatsby';

export const useContact = () =>
  useStaticQuery(
    graphql`
      query contact {
        datoCmsContact {
          title
          address
          byCar
          byBus
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `
  );
