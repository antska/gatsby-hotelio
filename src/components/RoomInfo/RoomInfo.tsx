import React from 'react';
import { IoIosBed, IoMdPeople, IoIosHome } from 'react-icons/io';
import { WiSunrise } from 'react-icons/wi';

import useWindowSize from '../../hooks/useWindowSize';

type InfoType = {
  [key: string]: string;
};
type Props = {
  info: InfoType;
  orientation?: string;
};

const RoomInfo = ({ info, orientation = 'vertical' }: Props) => {
  const size = useWindowSize();

  return orientation === 'horizontal' ? (
    <div className="flex flex-row justify-between py-4 px-2 w-full text-white xs:text-xs bg-helens-grey bg-opacity-50">
      <div className="flex items-center">
        <IoIosBed color="#ffffff" size="20" />
        <p className="ml-1 xs:text-sm">{info.beds}</p>
      </div>
      <div className="flex items-center">
        <IoMdPeople color="#ffffff" size="20" />
        <p className="ml-1 xs:text-sm">{info.people}</p>
      </div>
      <div className="flex items-center">
        <IoIosHome color="#ffffff" size="20" />
        <p className="ml-1 xs:text-sm">{info.sqm}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col mt-6">
      <div className="flex items-center mb-4">
        <IoIosBed color="#636363" size={size.width <= 768 ? '24' : '40'} />
        <p className="ml-4 xs:text-sm lg:text-base">{info.beds}</p>
      </div>
      <div className="flex items-center mb-4">
        <IoMdPeople color="#636363" size={size.width <= 768 ? '24' : '40'} />
        <p className="ml-4 xs:text-sm lg:text-base">{info.people}</p>
      </div>
      <div className="flex items-center mb-4">
        <IoIosHome color="#636363" size={size.width <= 768 ? '24' : '40'} />
        <p className="ml-4 xs:text-sm lg:text-base">{info.sqm}</p>
      </div>
      {info.view && (
        <div className="flex items-center">
          <WiSunrise color="#636363" size={size.width <= 768 ? '24' : '40'} />
          <p className="ml-4 xs:text-sm lg:text-base">{info.view}</p>
        </div>
      )}
    </div>
  );
};

export default RoomInfo;
