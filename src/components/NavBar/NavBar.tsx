import React from 'react';
import { useHeader } from '../../hooks/useHeader';
import { Link } from 'gatsby';

const NavBar = () => {
  const header = useHeader();

  return (
    <div className="nav bottom-nav">
      {header.allDatoCmsMenu.edges.map(({ node: menuItem }, key: number) => (
        <div key={`menuItem_${key}`} className="inline-block p-4">
          <Link to={menuItem.url}>{menuItem.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
