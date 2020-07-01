import React from 'react';
import Img from 'gatsby-image';

import { useInfo } from '../../hooks/useInfo';

const InfoCard = () => {
  const { datoCmsInfoCard } = useInfo();

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm w-full sm:w-full lg:w-full px-3">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <Img fluid={datoCmsInfoCard.cover.fluid} className="bg-cover bg-center h-56 p-4" />
          <div className="p-4">
            {/* <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Garden view • Seaview</p> */}
            <p className="text-3xl text-gray-900">{datoCmsInfoCard.title}</p>
            <p className="text-gray-700">{datoCmsInfoCard.address}</p>
          </div>
          <div className="flex p-4 border-t border-gray-300 text-gray-700">
            <div className="flex-1 inline-flex items-center">
              <svg className="svg-icon h-6 w-6 text-gray-600 fill-current mr-3" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"
                ></path>
              </svg>
              <p>
                <span className="text-gray-900 font-bold">4</span> Apartments
              </p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <svg
                className="svg-icon h-6 w-6 text-gray-600 fill-current mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
              </svg>
              <p>
                <span className="text-gray-900 font-bold">4</span> Studios
              </p>
            </div>
          </div>
          <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
            <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Owner</div>
            <div className="flex items-center pt-2">
              <Img fluid={datoCmsInfoCard.profile.fluid} className="bg-cover bg-center w-20 h-20 rounded-full mr-3" />
              <div>
                <p className="font-bold text-gray-900">Eleni Ragkousi</p>
                <p className="text-sm text-gray-700">(+30) 697 837 0698</p>
                <p className="text-sm text-gray-700">(+30) 698 339 5086 (WhatsApp)</p>
                <p className="text-sm text-gray-700">info@helenstudios.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
