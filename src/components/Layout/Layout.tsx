import React from 'react';
import NavBar from '../NavBar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <NavBar />
    <main className="container mx-auto">{children}</main>
  </>
);

export default Layout;
