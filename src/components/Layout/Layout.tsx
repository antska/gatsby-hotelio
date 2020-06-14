import React from 'react';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <main className="container mx-auto">{children}</main>
    <Footer />
  </>
);

export default Layout;
