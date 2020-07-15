import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

type Props = {
  meta: object;
};

const SEO = ({ meta }: Props) => {
  return (
    <HelmetDatoCms seo={meta}>
      <html lang="en" />
      <title>Helen's Minimal Studios &amp; Apartments</title>
    </HelmetDatoCms>
  );
};

export default SEO;
