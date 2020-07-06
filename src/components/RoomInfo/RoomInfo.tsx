import React from 'react';
import { IoIosBed, IoMdPeople, IoIosHome } from 'react-icons/io';
import { WiSunrise } from 'react-icons/wi';

import useWindowSize from '../../hooks/useWindowSize';

type InfoType = {
  [key: string]: string;
};
type Props = {
  info: InfoType;
};

const RoomInfo = ({ info }: Props) => {
  const size = useWindowSize();

  return (
    <div className="flex flex-col mt-6">
      <div className="flex items-center mb-2">
        <IoIosBed color="#636363" size="40" />
        <p className="ml-4 xs:text-sm lg:text-base">{info.beds}</p>
      </div>
      <div className="flex items-center mb-2">
        <IoMdPeople color="#636363" size={size.width <= 768 ? '24' : '40'} />
        <p className="ml-4 xs:text-sm lg:text-base">{info.people}</p>
      </div>
      <div className="flex items-center mb-2">
        <IoIosHome color="#636363" size={size.width <= 768 ? '24' : '40'} />
        <p className="ml-4 xs:text-sm lg:text-base">{info.sqm}</p>
      </div>
      <div className="flex items-center">
        <WiSunrise color="#636363" size={size.width <= 768 ? '24' : '40'} />
        <p className="ml-4 xs:text-sm lg:text-base">{info.view}</p>
      </div>
    </div>
  );
};

export default RoomInfo;
