import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

type Props = {
  meta: object;
};

const SEO = ({ meta }: Props) => {
  return (
    <HelmetDatoCms seo={meta}>
      <script
        async
        key="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=690&amp;locationId=3437250&amp;lang=en_US&amp;border=true&amp;shadow=true&amp;backgroundColor=white&amp;display_version=2"
        src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=690&amp;locationId=3437250&amp;lang=en_US&amp;border=true&amp;shadow=true&amp;backgroundColor=white&amp;display_version=2"
        data-loadtrk
        onLoad="this.loadtrk=true"
      />
    </HelmetDatoCms>
  );
};

export default SEO;
