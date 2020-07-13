import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

type Props = {
  meta: object;
};

const SEO = ({ meta }: Props) => {
  return <HelmetDatoCms seo={meta} />;
};

export default SEO;
