import React from 'react';
import { Link } from 'gatsby';

import { useHeader } from '../../hooks/useHeader';

type Props = { bottomNav?: boolean; withLogo?: boolean };

const NavBar = ({ bottomNav = false, withLogo = false }: Props) => {
  const header = useHeader();

  return (
    <div className={`nav ${bottomNav ? 'bottom-nav' : 'top-nav'}`}>
      {withLogo && (
        <Link to="/" className="inline-block w-32 h-auto align-middle mr-6">
          <img src={header.datoCmsHome.miniLogo.url} alt="Home" title="Home" />
        </Link>
      )}
      {header.allDatoCmsMenu.edges.map(({ node: menuItem }, key: number) => (
        <div key={`menuItem_${key}`} className="inline-block p-4">
          <Link to={menuItem.url}>{menuItem.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
